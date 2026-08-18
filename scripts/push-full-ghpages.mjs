#!/usr/bin/env node
/**
 * Full GitHub Pages deploy with CHECKPOINTING.
 * Uploads every file in dist/ghpages/ to github-pages-deploy branch via
 * the GitHub Git Data API.  Each uploaded blob is saved to a checkpoint
 * file so re-runs skip files already uploaded.  Run repeatedly until done.
 *
 *   node scripts/push-full-ghpages.mjs
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const TOKEN = process.env.GITHUB_5PERSONAL_ACCESS_TOKEN
           || process.env.GH_SYNC_TOKEN
           || process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
const REPO       = 'drbarrandodger/barran-dodger-archive';
const BRANCH     = 'github-pages-deploy';
const DIST       = new URL('../dist/ghpages', import.meta.url).pathname;
const CHECKPOINT = new URL('../.ghpages-checkpoint.json', import.meta.url).pathname;
const BATCH        = 3;    // lower concurrency to avoid GitHub secondary rate limit
const BATCH_DELAY  = 1500; // ms pause between batches
const MAX_RETRY    = 5;
const MAX_FILE_MB  = 40;   // GitHub blob API: effective ~53 MB JSON limit; base64 adds 33%, so cap at 40 MB raw
const TREE_CHUNK   = 50;   // entries per tree API call — keeps payloads small, avoids 502

if (!TOKEN) { console.error('❌  No GitHub token found.'); process.exit(1); }

// ── helpers ─────────────────────────────────────────────────────────────────

async function ghFetch(path, opts = {}) {
  const url = path.startsWith('http') ? path : `https://api.github.com${path}`;
  const res = await fetch(url, {
    ...opts,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      ...(opts.headers || {}),
    },
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) throw new Error(`GitHub ${res.status}: ${typeof data === 'object' ? data.message : data}`);
  return data;
}

async function withRetry(fn, label) {
  let delay = 5000;
  for (let attempt = 1; attempt <= MAX_RETRY; attempt++) {
    try { return await fn(); }
    catch (e) {
      if (attempt === MAX_RETRY) throw e;
      // Rate limit: wait longer
      const waitMs = e.message.includes('rate limit') ? Math.max(delay, 30000) : delay;
      console.warn(`  ⚠  retry ${attempt}/${MAX_RETRY - 1} [${label}]: ${e.message.slice(0,80)} (wait ${(waitMs/1000).toFixed(0)}s)`);
      await new Promise(r => setTimeout(r, waitMs));
      delay *= 2;
    }
  }
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir).sort()) {
    if (name === '.git') continue;
    const full = join(dir, name);
    statSync(full).isDirectory() ? out.push(...walk(full)) : out.push(full);
  }
  return out;
}

// ── checkpoint helpers ───────────────────────────────────────────────────────

function loadCheckpoint() {
  try {
    if (existsSync(CHECKPOINT)) {
      const cp = JSON.parse(readFileSync(CHECKPOINT, 'utf8'));
      console.log(`📌  Checkpoint loaded: ${Object.keys(cp.blobs).length} blobs already uploaded.`);
      return cp;
    }
  } catch {}
  return { blobs: {} }; // { [destPath]: sha }
}

function saveCheckpoint(cp) {
  writeFileSync(CHECKPOINT, JSON.stringify(cp, null, 2));
}

/** Build a git tree for a flat entry list in TREE_CHUNK-sized API calls.
 *  Each call uses base_tree = previous result, so payloads stay small. */
async function buildTreeIncremental(entries, label) {
  let currentSha = null;
  for (let i = 0; i < entries.length; i += TREE_CHUNK) {
    const chunk = entries.slice(i, i + TREE_CHUNK);
    const body = { tree: chunk };
    if (currentSha) body.base_tree = currentSha;
    process.stdout.write(`    ${label} [${i + 1}–${Math.min(i + TREE_CHUNK, entries.length)}/${entries.length}]… `);
    const res = await withRetry(() => ghFetch(`/repos/${REPO}/git/trees`, {
      method: 'POST',
      body: JSON.stringify(body),
    }), `tree-${label}`);
    currentSha = res.sha;
    console.log(`✔ ${currentSha.slice(0, 7)}`);
  }
  return currentSha;
}

// ── upload ────────────────────────────────────────────────────────────────────

async function uploadFile(f, idx, total) {
  const buf = readFileSync(f.abs);
  const sha = await withRetry(async () => {
    const r = await ghFetch(`/repos/${REPO}/git/blobs`, {
      method: 'POST',
      body: JSON.stringify({ content: buf.toString('base64'), encoding: 'base64' }),
    });
    return r.sha;
  }, f.dest);
  const kb = (buf.length / 1024).toFixed(0);
  process.stdout.write(`  [${String(idx).padStart(5)}/${total}] ${f.dest.padEnd(62)} ${String(kb).padStart(7)} KB\n`);
  return sha;
}

async function uploadBatch(batch, startIdx, total, cp) {
  const results = await Promise.all(batch.map(async (f, i) => {
    const sha = await uploadFile(f, startIdx + i + 1, total);
    cp.blobs[f.dest] = sha;
    return { path: f.dest, mode: '100644', type: 'blob', sha };
  }));
  saveCheckpoint(cp);
  // Pause between batches to stay under GitHub secondary rate limit
  await new Promise(r => setTimeout(r, BATCH_DELAY));
  return results;
}

// ── main ──────────────────────────────────────────────────────────────────────

async function run() {
  const start = Date.now();
  console.log(`\n📦  Scanning ${DIST}…`);

  const allAbs   = walk(DIST);
  const allFiles = allAbs.map(abs => ({ abs, dest: relative(DIST, abs) }));
  const total    = allFiles.length;

  // Filter out files too large for the GitHub blob API
  const maxBytes = MAX_FILE_MB * 1024 * 1024;
  const oversized = allFiles.filter(f => statSync(f.abs).size > maxBytes);
  const filteredFiles = allFiles.filter(f => statSync(f.abs).size <= maxBytes);
  if (oversized.length > 0) {
    console.log(`\n⚠  Skipping ${oversized.length} file(s) over ${MAX_FILE_MB} MB (GitHub API limit):`);
    oversized.forEach(f => console.log(`   SKIP: ${f.dest} (${(statSync(f.abs).size/1024/1024).toFixed(0)} MB)`));
  }

  const cp             = loadCheckpoint();
  const effectiveTotal = filteredFiles.length;
  const pending        = filteredFiles.filter(f => !cp.blobs[f.dest]);
  const done           = effectiveTotal - pending.length;
  console.log(`   Total files : ${total} (${oversized.length} skipped — too large)`);
  console.log(`   Already done: ${done}`);
  console.log(`   To upload   : ${pending.length}\n`);

  if (pending.length > 0) {
    const docs  = pending.filter(f =>  f.dest.startsWith('documents/'));
    const other = pending.filter(f => !f.dest.startsWith('documents/'));

    if (other.length > 0) {
      console.log(`⬆  Uploading ${other.length} SPA/asset files…`);
      for (let i = 0; i < other.length; i += BATCH) {
        const batch = other.slice(i, i + BATCH);
        await uploadBatch(batch, done + i, total, cp);
      }
    }

    if (docs.length > 0) {
      const otherDone = done + other.length;
      console.log(`\n⬆  Uploading ${docs.length} documents…`);
      for (let i = 0; i < docs.length; i += BATCH) {
        const batch = docs.slice(i, i + BATCH);
        await uploadBatch(batch, otherDone + i, total, cp);
      }
    }
  }

  // Check if we have ALL blobs (excluding oversized)
  const missing = filteredFiles.filter(f => !cp.blobs[f.dest]);
  if (missing.length > 0) {
    console.log(`\n⚠  ${missing.length} files still not uploaded — run again to continue.`);
    process.exit(0);
  }

  console.log('\n🔨  Creating commit…');

  // Get parent SHA (always fresh)
  const ref = await ghFetch(`/repos/${REPO}/git/ref/heads/${BRANCH}`);
  const parentSha = ref.object.sha;
  console.log(`    Parent commit : ${parentSha.slice(0, 7)}`);

  // Build git tree incrementally (50 entries per API call) to avoid GitHub 502
  // on large single-call trees.  Checkpoints subtrees and root so restarts skip
  // already-completed steps.
  if (!cp.treeSha) {
    if (!cp.subtrees) cp.subtrees = {};

    // Group blobs by top-level directory
    const byDir = {};
    const rootBlobEntries = [];
    for (const f of filteredFiles) {
      const slash = f.dest.indexOf('/');
      if (slash === -1) {
        rootBlobEntries.push({ path: f.dest, mode: '100644', type: 'blob', sha: cp.blobs[f.dest] });
      } else {
        const dir = f.dest.slice(0, slash);
        const rest = f.dest.slice(slash + 1);
        if (!byDir[dir]) byDir[dir] = [];
        byDir[dir].push({ path: rest, mode: '100644', type: 'blob', sha: cp.blobs[f.dest] });
      }
    }

    console.log(`\n🌲  Building ${Object.keys(byDir).length} subtrees (${TREE_CHUNK} entries/call)…`);
    for (const [dir, entries] of Object.entries(byDir)) {
      if (cp.subtrees[dir]) { console.log(`    ${dir}/ (cached ${cp.subtrees[dir].slice(0,7)})`); continue; }
      console.log(`    ${dir}/ (${entries.length} entries):`);
      cp.subtrees[dir] = await buildTreeIncremental(entries, dir + '/');
      saveCheckpoint(cp);
    }

    // Root tree: root-level files + subtree pointers
    const rootEntries = [...rootBlobEntries,
      ...Object.entries(cp.subtrees).map(([dir, sha]) => ({ path: dir, mode: '040000', type: 'tree', sha }))];
    console.log(`\n🌳  Building root tree (${rootEntries.length} entries)…`);
    cp.treeSha = await buildTreeIncremental(rootEntries, 'root');
    saveCheckpoint(cp);
    console.log(`    ✔  Root tree: ${cp.treeSha.slice(0, 7)}`);
  } else {
    console.log(`    Tree (cached): ${cp.treeSha.slice(0, 7)}`);
  }

  let commitSha = cp.commitSha;
  if (!commitSha) {
    const docCount = filteredFiles.filter(f => f.dest.startsWith('documents/')).length;
    const commitRes = await withRetry(() => ghFetch(`/repos/${REPO}/git/commits`, {
      method: 'POST',
      body: JSON.stringify({
        message: `Full mirror — ${effectiveTotal} files (${docCount} PDFs) — ${new Date().toISOString().slice(0, 10)}`,
        tree: cp.treeSha,
        parents: [parentSha],
      }),
    }), 'create-commit');
    commitSha = commitRes.sha;
    cp.commitSha = commitSha;
    saveCheckpoint(cp);
    console.log(`    Commit: ${commitSha.slice(0, 7)}`);
  } else {
    console.log(`    Commit (cached): ${commitSha.slice(0, 7)}`);
  }

  await withRetry(() => ghFetch(`/repos/${REPO}/git/refs/heads/${BRANCH}`, {
    method: 'PATCH',
    body: JSON.stringify({ sha: commitSha, force: true }),
  }), 'update-ref');

  const elapsed = ((Date.now() - start) / 60000).toFixed(1);
  try { writeFileSync(CHECKPOINT, '{}'); } catch {}

  console.log(`\n✅  Done in ${elapsed} min!`);
  console.log(`    Branch  : github-pages-deploy → ${commitSha.slice(0, 7)}`);
  console.log(`    Mirror  : https://drbarrandodger.github.io/barran-dodger-archive/`);
  console.log('    (GitHub Pages rebuild usually takes 1–3 min after this)\n');
}

run().catch(e => {
  console.error('\n❌  FATAL:', e.message);
  process.exit(1);
});
