#!/usr/bin/env node
/**
 * Internet Archive (archive.org) PDF Uploader
 * Uploads all 280 PDFs as a single named collection using the IA S3-like API.
 * Creates a permanent, searchable, citable item at:
 *   https://archive.org/details/barran-dodger-trust-fund-archive
 *
 * Requires secrets: IA_ACCESS_KEY + IA_SECRET_KEY
 * Get them at: https://archive.org/account/s3.php
 *
 * Usage:
 *   node scripts/backup-to-internet-archive.js
 *
 * Options (env vars):
 *   DRY_RUN=1         List files without uploading
 *   BATCH_SIZE=3      Concurrent uploads (default 3 — IA rate-limits aggressively)
 *   IDENTIFIER=...    Override IA item identifier (default: barran-dodger-trust-fund-archive)
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { request as httpsRequest } from 'https';
import { createReadStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ACCESS = process.env.IA_ACCESS_KEY;
const SECRET = process.env.IA_SECRET_KEY;

if ((!ACCESS || !SECRET) && process.env.DRY_RUN !== '1') {
  console.error('ERROR: Set IA_ACCESS_KEY and IA_SECRET_KEY env vars');
  console.error('Get them at: https://archive.org/account/s3.php');
  process.exit(1);
}

const IDENTIFIER  = process.env.IDENTIFIER || 'barran-dodger-trust-fund-archive';
const DOCS_DIR    = join(__dirname, '..', 'client', 'public', 'documents');
const DRY_RUN     = process.env.DRY_RUN === '1';
const BATCH_SIZE  = parseInt(process.env.BATCH_SIZE || '3', 10);

const METADATA = {
  'x-archive-meta-mediatype':     'texts',
  'x-archive-meta-collection':    'opensource',
  'x-archive-meta-title':         'Barran Dodger Legal & Ethical Trust Fund — Complete Document Archive',
  'x-archive-meta-creator':       'Dr. Richard William McLean (Barran Dodger)',
  'x-archive-meta-description':   'Complete archive of 280+ PDFs from barrandodger.com. Includes primary source Australian government documents, legal submissions, forensic analyses, ICC/UNHCR filings, and whistleblower testimony. ABN 78 833 496 164. Blockchain-verified via Bitcoin OpenTimestamps.',
  'x-archive-meta-subject':       'whistleblower; Australian government; corruption; human rights; NDIS; ICC; forensic evidence; blockchain',
  'x-archive-meta-licenseurl':    'https://creativecommons.org/licenses/by/4.0/',
  'x-archive-meta-language':      'English',
  'x-archive-meta-date':          new Date().getFullYear().toString(),
  'x-archive-meta-identifier':    IDENTIFIER,
};

function iaRequest(method, path, body, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const isFullUrl = path.startsWith('https://');
    const parsed    = new URL(isFullUrl ? path : `https://s3.us.archive.org${path}`);
    const bodyData  = body instanceof Buffer ? body : (body ? Buffer.from(body) : null);

    const options = {
      hostname: parsed.hostname,
      path:     parsed.pathname + parsed.search,
      method,
      headers: {
        'Authorization':     `LOW ${ACCESS}:${SECRET}`,
        'x-amz-auto-make-bucket': '1',
        ...(bodyData ? { 'Content-Length': bodyData.length } : {}),
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
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on('error', reject);
    if (bodyData) req.write(bodyData);
    req.end();
  });
}

function uploadFile(filePath, fileName) {
  return new Promise((resolve, reject) => {
    const fileSize = statSync(filePath).size;
    const parsed   = new URL(`https://s3.us.archive.org/${IDENTIFIER}/${encodeURIComponent(fileName)}`);

    const options = {
      hostname: parsed.hostname,
      path:     parsed.pathname,
      method:   'PUT',
      headers:  {
        'Authorization':          `LOW ${ACCESS}:${SECRET}`,
        'x-amz-auto-make-bucket': '1',
        'Content-Type':           'application/pdf',
        'Content-Length':         fileSize,
        ...METADATA,
      },
    };

    const req = httpsRequest(options, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        const data = Buffer.concat(chunks).toString();
        if (res.statusCode >= 400 && res.statusCode !== 409) {
          reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0, 200)}`));
        } else {
          resolve({ status: res.statusCode });
        }
      });
    });

    req.on('error', reject);

    const stream = createReadStream(filePath);
    stream.pipe(req);
    stream.on('error', reject);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function runBatches(items, fn) {
  const results = [];
  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const batch = items.slice(i, i + BATCH_SIZE);
    const settled = await Promise.allSettled(batch.map(f => fn(f)));
    settled.forEach((r, j) => {
      const item = batch[j];
      if (r.status === 'fulfilled') {
        results.push({ item, ok: true });
        const status = r.value.status === 409 ? '⤷ already exists' : '✓';
        process.stdout.write(`  ${status} ${basename(item)}\n`);
      } else {
        results.push({ item, ok: false, error: r.reason.message });
        process.stderr.write(`  ✗ ${basename(item)}: ${r.reason.message}\n`);
      }
    });
    const done = Math.min(i + BATCH_SIZE, items.length);
    console.log(`  — ${done}/${items.length} processed`);
    if (done < items.length) await sleep(2000);
  }
  return results;
}

async function main() {
  const pdfs = readdirSync(DOCS_DIR)
    .filter(f => f.endsWith('.pdf'))
    .map(f => join(DOCS_DIR, f))
    .sort();

  const totalMB = (pdfs.reduce((s, f) => s + statSync(f).size, 0) / 1024 / 1024).toFixed(1);

  console.log(`\n🏛  Barran Dodger → Internet Archive`);
  console.log(`   ${pdfs.length} PDFs · ${totalMB} MB`);
  console.log(`   Identifier: ${IDENTIFIER}`);
  console.log(`   URL: https://archive.org/details/${IDENTIFIER}\n`);

  if (DRY_RUN) {
    pdfs.forEach((f, i) => {
      const kb = (statSync(f).size / 1024).toFixed(0);
      console.log(`  [${i + 1}/${pdfs.length}] ${basename(f)} (${kb} KB)`);
    });
    console.log(`\nDry run complete.`);
    return;
  }

  console.log(`Uploading in batches of ${BATCH_SIZE} (IA processes in background after upload)...\n`);
  const results = await runBatches(pdfs, f => uploadFile(f, basename(f)));
  const ok      = results.filter(r => r.ok).length;
  const failed  = results.filter(r => !r.ok);

  console.log(`\n✅ Done: ${ok} uploaded · ${failed.length} failed`);
  console.log(`\nView collection: https://archive.org/details/${IDENTIFIER}`);
  console.log(`Direct download: https://archive.org/download/${IDENTIFIER}/{filename}.pdf`);

  if (failed.length > 0) {
    console.log('\nFailed:');
    failed.forEach(r => console.log(`  ${basename(r.item)}: ${r.error}`));
  }
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1); });
