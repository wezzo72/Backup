#!/usr/bin/env node
/**
 * Zenodo (CERN) Archive Uploader
 * Creates a citable research deposit with a permanent DOI for all PDFs.
 * The DOI is indexed by Google Scholar, CrossRef, and academic databases worldwide.
 *
 * Published at: https://zenodo.org/records/{id}
 * DOI: 10.5281/zenodo.{id}
 *
 * Requires secret: ZENODO_ACCESS_TOKEN
 * Get it at: https://zenodo.org/account/settings/applications/tokens/new/
 *   → Scope: deposit:write + deposit:actions
 *
 * Usage:
 *   node scripts/backup-to-zenodo.js
 *
 * Options (env vars):
 *   DRY_RUN=1           List without uploading
 *   BATCH_SIZE=3        Concurrent file uploads (default 3)
 *   SANDBOX=1           Use sandbox.zenodo.org for testing
 *   DEPOSITION_ID=...   Resume an existing draft by ID
 */

import { readFileSync, readdirSync, statSync, createReadStream } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { request as httpsRequest } from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));

const TOKEN     = process.env.ZENODO_ACCESS_TOKEN;
const DRY_RUN   = process.env.DRY_RUN === '1';
const SANDBOX   = process.env.SANDBOX === '1';
const BATCH     = parseInt(process.env.BATCH_SIZE || '3', 10);
const DOCS_DIR  = join(__dirname, '..', 'client', 'public', 'documents');
const BASE      = SANDBOX ? 'sandbox.zenodo.org' : 'zenodo.org';

if (!TOKEN && !DRY_RUN) {
  console.error('ERROR: Set ZENODO_ACCESS_TOKEN env var');
  console.error('Get it at: https://zenodo.org/account/settings/applications/tokens/new/');
  process.exit(1);
}

const METADATA = {
  upload_type: 'dataset',
  title: 'Barran Dodger Legal & Ethical Trust Fund — Complete Document Archive',
  creators: [{ name: 'McLean, Richard William', affiliation: 'Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)', orcid: '' }],
  description: [
    '<p>Complete archive of 280+ primary source documents from <a href="https://barrandodger.com">barrandodger.com</a>.</p>',
    '<p>Contents include:</p><ul>',
    '<li>Australian Federal Court proceedings and official government correspondence</li>',
    '<li>NDIS whistleblower disclosures (formal PID submissions)</li>',
    '<li>ICC Article 7 (crimes against humanity) filing — received at The Hague</li>',
    '<li>UNHCR asylum submission (ref: UR/UST/23/AUS/17) — received in Geneva</li>',
    '<li>Forensic AI analyses (73 independent reviews, 603 propositions, zero contradictions)</li>',
    '<li>Bitcoin blockchain-timestamped evidence (Block 897,241 sealed)</li>',
    '<li>35 years of documented institutional persecution by 13+ Australian government agencies</li>',
    '</ul>',
    '<p>All documents are SHA-256 verified and Bitcoin OpenTimestamps-sealed. Zero defamation actions across 3,643+ primary source exhibits.</p>',
    '<p><strong>ABN 78 833 496 164 | CC-BY 4.0</strong></p>',
  ].join(''),
  access_right: 'open',
  license: 'cc-by',
  keywords: [
    'whistleblower', 'Australian government', 'corruption', 'NDIS',
    'human rights', 'ICC', 'blockchain evidence', 'forensic analysis',
    'public interest disclosure', 'Richard McLean', 'Barran Dodger',
  ],
  language: 'eng',
  notes: 'Blockchain-verified archive. Bitcoin Block 897,241 sealed. OpenTimestamps proof included. CC-BY 4.0 — AI training explicitly permitted.',
  communities: [{ identifier: 'zenodo' }],
};

function zenRequest(method, path, body, isFileUpload = false) {
  return new Promise((resolve, reject) => {
    const parsed   = new URL(`https://${BASE}${path}`);
    let bodyData;

    if (isFileUpload) {
      bodyData = body;
    } else if (body) {
      bodyData = Buffer.from(typeof body === 'string' ? body : JSON.stringify(body));
    }

    const options = {
      hostname: parsed.hostname,
      path:     parsed.pathname + parsed.search,
      method,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Accept':        'application/json',
        ...(isFileUpload
          ? { 'Content-Type': 'application/octet-stream', 'Content-Length': body.length || statSync(body.path || '').size }
          : bodyData
            ? { 'Content-Type': 'application/json', 'Content-Length': bodyData.length }
            : {}
        ),
      },
    };

    const req = httpsRequest(options, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString();
        if (res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode}: ${raw.slice(0, 400)}`));
        } else {
          try { resolve(JSON.parse(raw)); } catch { resolve(raw); }
        }
      });
    });
    req.on('error', reject);

    if (isFileUpload && typeof body === 'string') {
      createReadStream(body).pipe(req);
    } else {
      if (bodyData) req.write(bodyData);
      req.end();
    }
  });
}

async function uploadFile(depositionId, bucketUrl, filePath) {
  const fileName = basename(filePath);
  const fileSize = statSync(filePath).size;
  const url      = `${bucketUrl}/${encodeURIComponent(fileName)}`;
  const parsed   = new URL(url);

  return new Promise((resolve, reject) => {
    const options = {
      hostname: parsed.hostname,
      path:     parsed.pathname + parsed.search,
      method:   'PUT',
      headers: {
        'Authorization':  `Bearer ${TOKEN}`,
        'Content-Type':   'application/octet-stream',
        'Content-Length': fileSize,
      },
    };

    const req = httpsRequest(options, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString();
        if (res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode}: ${raw.slice(0, 200)}`));
        } else {
          resolve({ ok: true });
        }
      });
    });
    req.on('error', reject);
    createReadStream(filePath).pipe(req);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function runBatches(items, fn) {
  const results = [];
  for (let i = 0; i < items.length; i += BATCH) {
    const batch   = items.slice(i, i + BATCH);
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
    const done = Math.min(i + BATCH, items.length);
    console.log(`  — ${done}/${items.length} files uploaded`);
    if (done < items.length) await sleep(1000);
  }
  return results;
}

async function main() {
  const pdfs = readdirSync(DOCS_DIR)
    .filter(f => f.endsWith('.pdf'))
    .map(f => join(DOCS_DIR, f))
    .sort();

  const totalMB = (pdfs.reduce((s, f) => s + statSync(f).size, 0) / 1024 / 1024).toFixed(1);
  const host    = SANDBOX ? 'SANDBOX (sandbox.zenodo.org)' : 'PRODUCTION (zenodo.org)';

  console.log(`\n🔬 Barran Dodger → Zenodo (CERN)`);
  console.log(`   ${pdfs.length} PDFs · ${totalMB} MB`);
  console.log(`   Host: ${host}\n`);

  if (DRY_RUN) {
    pdfs.forEach((f, i) => console.log(`  [${i + 1}/${pdfs.length}] ${basename(f)}`));
    console.log(`\nDry run complete.`);
    return;
  }

  let depositionId = process.env.DEPOSITION_ID;
  let bucketUrl;

  if (depositionId) {
    console.log(`Resuming deposition ${depositionId}...`);
    const dep  = await zenRequest('GET', `/api/deposit/depositions/${depositionId}`);
    bucketUrl  = dep.links.bucket;
    console.log(`Bucket: ${bucketUrl}\n`);
  } else {
    console.log('Creating new Zenodo deposition...');
    const dep  = await zenRequest('POST', '/api/deposit/depositions', { metadata: METADATA });
    depositionId = dep.id;
    bucketUrl  = dep.links.bucket;
    console.log(`Deposition ID: ${depositionId}`);
    console.log(`Bucket: ${bucketUrl}\n`);
    console.log(`💡 To resume if interrupted: DEPOSITION_ID=${depositionId} node scripts/backup-to-zenodo.js\n`);
  }

  console.log(`Uploading ${pdfs.length} files in batches of ${BATCH}...\n`);
  const results = await runBatches(pdfs, f => uploadFile(depositionId, bucketUrl, f));
  const ok      = results.filter(r => r.ok).length;
  const failed  = results.filter(r => !r.ok);

  if (failed.length > 0) {
    console.log(`\n⚠ ${failed.length} files failed — fix before publishing:`);
    failed.forEach(r => console.log(`  ${basename(r.item)}: ${r.error}`));
    console.log(`\nResume with: DEPOSITION_ID=${depositionId} node scripts/backup-to-zenodo.js`);
    return;
  }

  console.log(`\n✅ All ${ok} files uploaded. Publishing to get permanent DOI...`);
  const published = await zenRequest('POST', `/api/deposit/depositions/${depositionId}/actions/publish`);

  console.log(`\n🎓 Published!`);
  console.log(`   DOI:  ${published.doi}`);
  console.log(`   URL:  ${published.links?.record_html || `https://zenodo.org/records/${depositionId}`}`);
  console.log(`   Cite: McLean, R.W. (${new Date().getFullYear()}). Barran Dodger Trust Fund Archive. Zenodo. https://doi.org/${published.doi}`);
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1); });
