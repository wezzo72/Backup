#!/usr/bin/env node
/**
 * One-shot: read checkpoint blobs, create git tree incrementally (50 entries
 * per API call using base_tree), commit, force-push.
 *
 *   node scripts/ghpages-commit.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const CHECKPOINT = join(__dir, '../.ghpages-checkpoint.json');

const TOKEN = process.env.GITHUB_5PERSONAL_ACCESS_TOKEN
           || process.env.GH_SYNC_TOKEN
           || process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
const REPO   = 'drbarrandodger/barran-dodger-archive';
const BRANCH = 'github-pages-deploy';
const CHUNK  = 50; // entries per tree API call

if (!TOKEN) { console.error('❌  No GitHub token'); process.exit(1); }

async function ghFetch(path, opts = {}) {
  const url = path.startsWith('http') ? path : `https://api.github.com${path}`;
  let lastErr;
  for (let attempt = 1; attempt <= 6; attempt++) {
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
    if (res.ok) return data;
    lastErr = new Error(`GitHub ${res.status}: ${typeof data === 'object' ? data.message : String(data).slice(0, 200)}`);
    if ([502, 503, 504].includes(res.status)) {
      const wait = attempt * 10000;
      console.warn(`  ⚠  attempt ${attempt}/6 (${lastErr.message}) — wait ${wait / 1000}s…`);
      await new Promise(r => setTimeout(r, wait));
    } else {
      throw lastErr;
    }
  }
  throw lastErr;
}

function saveCheckpoint(cp) {
  writeFileSync(CHECKPOINT, JSON.stringify(cp, null, 2));
}

/**
 * Build a git tree for a flat list of {path, sha} entries by sending CHUNK
 * entries at a time, chaining base_tree so each call is small.
 */
async function buildTreeIncremental(entries, label) {
  let currentSha = null; // will be set to the first partial tree
  for (let i = 0; i < entries.length; i += CHUNK) {
    const chunk = entries.slice(i, i + CHUNK);
    const body = { tree: chunk };
    if (currentSha) body.base_tree = currentSha;
    process.stdout.write(`    ${label}  [${i + 1}–${Math.min(i + CHUNK, entries.length)}/${entries.length}]… `);
    const res = await ghFetch(`/repos/${REPO}/git/trees`, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    currentSha = res.sha;
    console.log(`✔ ${currentSha.slice(0, 7)}`);
  }
  return currentSha;
}

async function run() {
  const cp = JSON.parse(readFileSync(CHECKPOINT, 'utf8'));

  if (cp.commitSha) {
    // Already committed — just force-push
    console.log(`\n📌  Commit already saved (${cp.commitSha.slice(0, 7)}) — force-pushing…`);
    await ghFetch(`/repos/${REPO}/git/refs/heads/${BRANCH}`, {
      method: 'PATCH',
      body: JSON.stringify({ sha: cp.commitSha, force: true }),
    });
    writeFileSync(CHECKPOINT, '{}');
    console.log(`✅  Pushed! https://drbarrandodger.github.io/barran-dodger-archive/\n`);
    return;
  }

  const blobs = cp.blobs || {};
  const total = Object.keys(blobs).length;
  console.log(`\n📌  ${total} blobs in checkpoint\n`);

  // Get parent
  const ref = await ghFetch(`/repos/${REPO}/git/ref/heads/${BRANCH}`);
  const parentSha = ref.object.sha;
  console.log(`    Parent commit : ${parentSha.slice(0, 7)}`);

  if (!cp.treeSha) {
    // Group blobs by top-level directory
    const byDir = {};
    const rootBlobEntries = [];
    for (const [path, sha] of Object.entries(blobs)) {
      const slash = path.indexOf('/');
      if (slash === -1) {
        rootBlobEntries.push({ path, mode: '100644', type: 'blob', sha });
      } else {
        const dir = path.slice(0, slash);
        const rest = path.slice(slash + 1);
        if (!byDir[dir]) byDir[dir] = [];
        byDir[dir].push({ path: rest, mode: '100644', type: 'blob', sha });
      }
    }

    // Restore any already-created subtrees from checkpoint
    if (!cp.subtrees) cp.subtrees = {};

    console.log(`\n🌲  Building ${Object.keys(byDir).length} directory subtrees (${CHUNK} entries/call)…`);
    for (const [dir, entries] of Object.entries(byDir)) {
      if (cp.subtrees[dir]) {
        console.log(`    ${dir}/  (cached: ${cp.subtrees[dir].slice(0, 7)})`);
        continue;
      }
      console.log(`    ${dir}/  (${entries.length} entries):`);
      cp.subtrees[dir] = await buildTreeIncremental(entries, dir + '/');
      saveCheckpoint(cp);
    }

    // Root tree: root-level files + subtree pointers
    const rootEntries = [...rootBlobEntries];
    for (const [dir, sha] of Object.entries(cp.subtrees)) {
      rootEntries.push({ path: dir, mode: '040000', type: 'tree', sha });
    }

    console.log(`\n🌳  Building root tree (${rootEntries.length} entries)…`);
    cp.treeSha = await buildTreeIncremental(rootEntries, 'root');
    saveCheckpoint(cp);
    console.log(`    ✔  Root tree: ${cp.treeSha.slice(0, 7)}`);
  } else {
    console.log(`    Tree (cached): ${cp.treeSha.slice(0, 7)}`);
  }

  console.log('\n📝  Creating commit…');
  const docCount = Object.keys(blobs).filter(k => k.startsWith('documents/')).length;
  const commitRes = await ghFetch(`/repos/${REPO}/git/commits`, {
    method: 'POST',
    body: JSON.stringify({
      message: `Full mirror — ${total} files (${docCount} documents) — ${new Date().toISOString().slice(0, 10)}`,
      tree: cp.treeSha,
      parents: [parentSha],
    }),
  });
  cp.commitSha = commitRes.sha;
  saveCheckpoint(cp);
  console.log(`    ✔  Commit: ${cp.commitSha.slice(0, 7)}`);

  console.log('\n🚀  Force-pushing branch…');
  await ghFetch(`/repos/${REPO}/git/refs/heads/${BRANCH}`, {
    method: 'PATCH',
    body: JSON.stringify({ sha: cp.commitSha, force: true }),
  });

  writeFileSync(CHECKPOINT, '{}');
  console.log(`\n✅  Done! Branch ${BRANCH} → ${cp.commitSha.slice(0, 7)}`);
  console.log(`    https://drbarrandodger.github.io/barran-dodger-archive/`);
  console.log('    (GitHub Pages rebuild takes 1–3 min)\n');
}

run().catch(e => { console.error('\n❌  FATAL:', e.message); process.exit(1); });
