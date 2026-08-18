#!/usr/bin/env node
/**
 * GitHub Releases PDF Vault
 * Uploads all PDFs to a GitHub Release as permanent, publicly downloadable assets.
 *
 * Each asset gets a permanent URL:
 *   https://github.com/drbarrandodger/barran-dodger-archive/releases/download/pdf-archive-YYYY-MM-DD/{filename}
 *
 * Requires: GITHUB_3PERSONAL_ACCESS_TOKEN environment variable
 * Usage:
 *   node scripts/backup-pdfs-to-github-releases.js
 *
 * Options (env vars):
 *   DRY_RUN=1         List PDFs without uploading
 *   BATCH_SIZE=5      Concurrent uploads per batch (default 5)
 *   RELEASE_TAG=...   Override tag name (default: pdf-archive-YYYY-MM-DD)
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { request as httpsRequest } from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));

const TOKEN = process.env.GITHUB_3PERSONAL_ACCESS_TOKEN;
if (!TOKEN && process.env.DRY_RUN !== '1') {
  console.error('ERROR: Set GITHUB_3PERSONAL_ACCESS_TOKEN env var');
  process.exit(1);
}

const REPO      = 'drbarrandodger/barran-dodger-archive';
const DOCS_DIR  = join(__dirname, '..', 'client', 'public', 'documents');
const DRY_RUN   = process.env.DRY_RUN === '1';
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '5', 10);
const today     = new Date().toISOString().split('T')[0];
const RELEASE_TAG = process.env.RELEASE_TAG || `pdf-archive-${today}`;

function ghRequest(method, urlOrPath, body, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const isFullUrl = urlOrPath.startsWith('https://');
    const parsed    = new URL(isFullUrl ? urlOrPath : `https://api.github.com${urlOrPath}`);
    const bodyData  = body instanceof Buffer
      ? body
      : body ? Buffer.from(JSON.stringify(body)) : null;

    const options = {
      hostname: parsed.hostname,
      path:     parsed.pathname + parsed.search,
      method,
      headers: {
        Authorization:           `Bearer ${TOKEN}`,
        Accept:                  'application/vnd.github+json',
        'X-GitHub-Api-Version':  '2022-11-28',
        'User-Agent':            'barrandodger-pdf-backup/1.0',
        ...(bodyData ? {
          'Content-Length': bodyData.length,
          'Content-Type':   extraHeaders['Content-Type'] || 'application/json',
        } : {}),
        ...extraHeaders,
      },
    };

    const req = httpsRequest(options, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        const data = Buffer.concat(chunks).toString();
        if (res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0, 300)}`));
        } else {
          try { resolve(JSON.parse(data)); } catch { resolve(data); }
        }
      });
    });
    req.on('error', reject);
    if (bodyData) req.write(bodyData);
    req.end();
  });
}

async function getOrCreateRelease() {
  try {
    const existing = await ghRequest('GET', `/repos/${REPO}/releases/tags/${RELEASE_TAG}`);
    console.log(`Using existing release: ${existing.html_url}`);
    return existing;
  } catch {
    console.log(`Creating new release: ${RELEASE_TAG}`);
    const pdfCount = readdirSync(DOCS_DIR).filter(f => f.endsWith('.pdf')).length;
    return await ghRequest('POST', `/repos/${REPO}/releases`, {
      tag_name:   RELEASE_TAG,
      name:       `PDF Archive — ${today}`,
      body:       [
        `## Barran Dodger Trust Fund — Complete PDF Archive`,
        ``,
        `Automated backup of all ${pdfCount} PDF documents from [barrandodger.com](https://barrandodger.com).`,
        ``,
        `**Date:** ${today}`,
        `**Purpose:** Immutable off-site backup. Accessible even if the main site is unavailable.`,
      ].join('\n'),
      draft:      false,
      prerelease: false,
    });
  }
}

async function uploadAsset(uploadUrl, filePath, fileName) {
  const fileData = readFileSync(filePath);
  const clean    = uploadUrl.replace('{?name,label}', '');
  const fullUrl  = `${clean}?name=${encodeURIComponent(fileName)}`;
  return await ghRequest('POST', fullUrl, fileData, { 'Content-Type': 'application/pdf' });
}

async function getExistingAssets(releaseId) {
  const assets = await ghRequest('GET', `/repos/${REPO}/releases/${releaseId}/assets`);
  return new Set(assets.map(a => a.name));
}

async function runBatches(items, fn) {
  const results = [];
  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const batch = items.slice(i, i + BATCH_SIZE);
    const settled = await Promise.allSettled(batch.map(fn));
    settled.forEach((r, j) => {
      const item = batch[j];
      if (r.status === 'fulfilled') {
        results.push({ item, ok: true });
        process.stdout.write(`  ✓ ${basename(item)}\n`);
      } else {
        results.push({ item, ok: false, error: r.reason.message });
        process.stderr.write(`  ✗ ${basename(item)}: ${r.reason.message}\n`);
      }
    });
    console.log(`  — batch ${Math.ceil((i + BATCH_SIZE) / BATCH_SIZE)} done [${Math.min(i + BATCH_SIZE, items.length)}/${items.length}]`);
  }
  return results;
}

async function main() {
  const pdfs = readdirSync(DOCS_DIR)
    .filter(f => f.endsWith('.pdf'))
    .map(f => join(DOCS_DIR, f))
    .sort();

  const totalSize = pdfs.reduce((sum, f) => sum + statSync(f).size, 0);

  console.log(`\n📦 Barran Dodger → GitHub Releases PDF Vault`);
  console.log(`   ${pdfs.length} PDFs · ${(totalSize / 1024 / 1024).toFixed(1)} MB total`);
  console.log(`   Tag: ${RELEASE_TAG} · Repo: ${REPO}\n`);

  if (DRY_RUN) {
    pdfs.forEach((f, i) => {
      const kb = (statSync(f).size / 1024).toFixed(0);
      console.log(`  [${i + 1}/${pdfs.length}] ${basename(f)} (${kb} KB)`);
    });
    console.log(`\nDry run complete. ${pdfs.length} files would be uploaded.`);
    return;
  }

  const release         = await getOrCreateRelease();
  const existingAssets  = await getExistingAssets(release.id);
  const toUpload        = pdfs.filter(f => !existingAssets.has(basename(f)));
  const skipped         = pdfs.length - toUpload.length;

  if (skipped > 0) console.log(`Skipping ${skipped} already-uploaded files.\n`);
  console.log(`Uploading ${toUpload.length} files in batches of ${BATCH_SIZE}...\n`);

  const results  = await runBatches(toUpload, f => uploadAsset(release.upload_url, f, basename(f)));
  const ok       = results.filter(r => r.ok).length;
  const failed   = results.filter(r => !r.ok);

  console.log(`\n✅ Done: ${ok} uploaded · ${skipped} skipped · ${failed.length} failed`);
  console.log(`\nRelease: ${release.html_url}`);
  console.log(`Direct download base URL:`);
  console.log(`  https://github.com/${REPO}/releases/download/${RELEASE_TAG}/<filename>.pdf`);

  if (failed.length > 0) {
    console.log('\nFailed:');
    failed.forEach(r => console.log(`  ${basename(r.item)}: ${r.error}`));
  }
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1); });
