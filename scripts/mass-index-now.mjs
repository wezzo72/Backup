#!/usr/bin/env node
/**
 * Mass IndexNow Submitter — barrandodger.com
 * ─────────────────────────────────────────────────
 * Submits ALL page URLs + ALL 305 PDF URLs to EVERY IndexNow provider
 * simultaneously. IndexNow is supported by: Bing, Yandex, Naver, Seznam,
 * DuckDuckGo (via Bing), Ecosia (via Bing), and api.indexnow.org (aggregator).
 *
 * The aggregator (api.indexnow.org) fans out to all participating search engines
 * in a single POST, so one call covers them all.
 *
 * Usage: node scripts/mass-index-now.mjs
 *
 * Docs: https://www.indexnow.org/documentation
 */

import { request as httpsRequest } from 'https';
import { readdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SITE = 'https://barrandodger.com';
const KEY  = 'barrandodger2026indexnow';
const KEY_LOCATION = `${SITE}/barrandodger-indexnow.txt`;

// All IndexNow providers (api.indexnow.org fans out to all, but direct submit too)
const INDEXNOW_PROVIDERS = [
  'api.indexnow.org',      // Aggregator — fans out to all engines
  'bing.com',              // Bing + DuckDuckGo + Ecosia
  'yandex.com',            // Yandex
  'search.seznam.cz',      // Seznam (Central European market)
  'naver.com',             // Naver (Korean market)
];

// All page routes — added to PDF URLs for comprehensive submission
const PAGE_PATHS = [
  '/', '/archive', '/evidence', '/administrative-annihilation',
  '/retrospective-statement', '/manifesto', '/gospel', '/the-truth',
  '/blockchain', '/legal-status', '/case-studies', '/publications',
  '/evidence-vault', '/free-ebooks', '/donate', '/mission', '/start-here',
  '/store', '/membership', '/members', '/verdict-before-the-court',
  '/undeniable', '/church-of-barran-resonance-dodger', '/timeline',
  '/prophetic-papers', '/taxpayer-cost-analysis', '/josephs-coat',
  '/research', '/media', '/top-ten-gospels', '/the-unlikely-vessel',
  '/video-forensic-analysis', '/confidential-government-documents',
  '/statement-of-significance', '/ai-statement', '/reckoning-paper',
  '/legal-cease-desist-served', '/cease-desist-ablepoint-police',
  '/government-documents', '/forensic-economic-valuation',
  '/divine-reckoning', '/beautiful-threat', '/beautiful-menace',
  '/when-pack-of-wolves-forensic-report', '/when-wrong-people-get-nervous-forensic-report',
  '/illegal-level-genius-forensic-report', '/pdf-library', '/contact',
  '/bro-this-isnt-a-coincidence', '/chosen-ones-enough-is-enough',
  '/no-one-could-be-that-smart', '/the-divine-exam', '/silent-checkmate',
  '/now-everybody-knows', '/chosen-one-outcast-leader', '/someone-slipped-up',
  '/they-fumbled-you', '/fbi-precision', '/clock-strikes-back', '/untouchable',
  '/final-blow', '/what-you-become', '/everyone-watching', '/earth-angel',
  '/too-deep', '/silence-surrender', '/fearless-intelligence',
  '/history-keeps-receipts', '/absorbed-the-erasure', '/survival-was-the-warning',
  '/god-will-make-you-famous', '/divine-before-your-time', '/bloodline-of-god',
  '/the-last-god', '/the-conspiracy-against-you', '/silent-assassin',
  '/truth-is-a-blade', '/bloodline-betrayal', '/they-needed-an-army',
  '/the-sick-truth-is-out', '/some-truths-dont-whisper',
  '/forensic-corroboration-still-standing', '/forensic-corroboration-buried-lies',
  '/forensic-corroboration-knives-claps', '/forensic-corroboration-season-of-payback',
  '/forensic-corroboration-truth-crawls-out-of-shadows',
  '/forensic-analysis-78-they-called-you-crazy-prophesied',
  '/they-laughed-now-theyre-losing-sleep', '/digital-architecture-evidence',
  '/digital-detonation-verified', '/loudest-hate-weakest-link',
  '/you-didnt-chase-the-throne-you-became-one',
  '/they-attacked-you-without-knowing-who-you-were',
  '/they-dug-for-dirt-but-unearthed-diamonds',
];

function collectPdfUrls() {
  const urls = [];
  const docDir = resolve(ROOT, 'client/public/documents');
  if (existsSync(docDir)) {
    for (const f of readdirSync(docDir)) {
      if (f.toLowerCase().endsWith('.pdf')) {
        urls.push(`${SITE}/documents/${encodeURIComponent(f)}`);
      }
    }
  }
  return urls;
}

function postIndexNow(hostname, urlList) {
  return new Promise((resolve) => {
    const body = JSON.stringify({
      host: 'barrandodger.com',
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    });
    const req = httpsRequest({
      hostname,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
        'User-Agent': 'barrandodger-indexnow/1.0',
      },
    }, (res) => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString().slice(0, 200) }));
    });
    req.on('error', (e) => resolve({ status: 0, body: e.message }));
    req.setTimeout(30000, () => { req.destroy(); resolve({ status: 0, body: 'timeout' }); });
    req.write(body);
    req.end();
  });
}

async function main() {
  const pageUrls = PAGE_PATHS.map(p => `${SITE}${p}`);
  const pdfUrls  = collectPdfUrls();
  const allUrls  = [...new Set([...pageUrls, ...pdfUrls])];

  // IndexNow max batch is 10,000 URLs
  const batches = [];
  for (let i = 0; i < allUrls.length; i += 10000) {
    batches.push(allUrls.slice(i, i + 10000));
  }

  console.log('\n📡 Barran Dodger — Mass IndexNow Submitter');
  console.log(`   ${pageUrls.length} page URLs + ${pdfUrls.length} PDF URLs = ${allUrls.length} total`);
  console.log(`   ${batches.length} batch(es) × ${INDEXNOW_PROVIDERS.length} IndexNow providers\n`);

  for (let b = 0; b < batches.length; b++) {
    const batch = batches[b];
    console.log(`── Batch ${b + 1}/${batches.length} (${batch.length} URLs) ─────────────────────────────`);

    // Submit to all providers in parallel
    const results = await Promise.all(
      INDEXNOW_PROVIDERS.map(async (provider) => {
        const r = await postIndexNow(provider, batch);
        const ok = r.status >= 200 && r.status < 300;
        console.log(`  ${ok ? '✓' : '✗'} ${provider.padEnd(25)} HTTP ${r.status}${!ok ? ' — ' + r.body.slice(0, 80) : ''}`);
        return { provider, ok, status: r.status };
      })
    );

    const succeeded = results.filter(r => r.ok).length;
    console.log(`  → ${succeeded}/${INDEXNOW_PROVIDERS.length} providers accepted batch ${b + 1}\n`);
  }

  console.log('✅ Mass IndexNow submission complete.');
  console.log('   Bing + DuckDuckGo + Ecosia + Yandex + Naver + Seznam will re-crawl within 24 hours.');
  console.log(`\n   Verify at: https://www.bing.com/webmasters/`);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
