#!/usr/bin/env node
/**
 * Search Engine Sitemap Pinger
 * Notifies Google, Bing, IndexNow, and Yandex that barrandodger.com has updated content.
 * Run this any time new pages or documents are added.
 *
 * Usage: node scripts/ping-search-engines.js
 */

import { request as httpsRequest } from 'https';
import { request as httpRequest  } from 'http';

const SITE_URL   = 'https://barrandodger.com';
const SITEMAP    = `${SITE_URL}/sitemap.xml`;
const INDEXNOW_KEY = 'barrandodger2026';   // must also be at /barrandodger2026.txt

// All URLs to submit via IndexNow (key pages — sitemap covers the rest)
const KEY_URLS = [
  '/',
  '/evidence',
  '/administrative-annihilation',
  '/retrospective-statement',
  '/manifesto',
  '/gospel',
  '/the-truth',
  '/blockchain',
  '/legal-status',
  '/case-studies',
  '/publications',
  '/evidence-vault',
  '/free-ebooks',
  '/archive',
  '/donate',
  '/mission',
  '/start-here',
  '/store',
  '/membership',
  '/verdict-before-the-court',
  '/undeniable',
  '/church-of-barran-resonance-dodger',
  '/timeline',
  '/prophetic-papers',
  '/taxpayer-cost-analysis',
  '/josephs-coat',
  '/research',
  '/media',
].map(p => `${SITE_URL}${p}`);

function fetch(url, { method = 'GET', body, headers = {} } = {}) {
  return new Promise((resolve, reject) => {
    const parsed  = new URL(url);
    const reqFn   = parsed.protocol === 'https:' ? httpsRequest : httpRequest;
    const bodyBuf = body ? Buffer.from(JSON.stringify(body)) : null;

    const req = reqFn({
      hostname: parsed.hostname,
      path:     parsed.pathname + parsed.search,
      method,
      headers: {
        'User-Agent': 'barrandodger-pinger/1.0',
        ...(bodyBuf ? { 'Content-Type': 'application/json', 'Content-Length': bodyBuf.length } : {}),
        ...headers,
      },
    }, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString() }));
    });

    req.on('error', reject);
    if (bodyBuf) req.write(bodyBuf);
    req.end();
  });
}

async function ping(label, url, opts) {
  try {
    const r = await fetch(url, opts);
    const ok = r.status < 400;
    console.log(`  ${ok ? '✓' : '✗'} ${label} — HTTP ${r.status}`);
    if (!ok) console.log(`      ${r.body.slice(0, 120)}`);
    return ok;
  } catch (e) {
    console.log(`  ✗ ${label} — ${e.message}`);
    return false;
  }
}

async function main() {
  console.log('\n📡 Barran Dodger — Search Engine Pinger');
  console.log(`   Sitemap: ${SITEMAP}`);
  console.log(`   ${KEY_URLS.length} key URLs + full sitemap\n`);

  console.log('── Sitemap Ping ──────────────────────');
  // Note: Google and Bing deprecated their ping URLs in 2023.
  // Google requires Search Console; Bing uses IndexNow (below).
  await ping('Yandex', `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`);

  console.log('\n── IndexNow (Bing + Yandex batch) ───');
  await ping('IndexNow', 'https://api.indexnow.org/indexnow', {
    method: 'POST',
    body: {
      host:    'barrandodger.com',
      key:     INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: KEY_URLS,
    },
  });

  console.log('\n✅ Done. Pages will be (re)crawled within 24–72 hours.');
  console.log('\nNext steps:');
  console.log('  1. Open https://search.google.com/search-console');
  console.log('     → Add property: barrandodger.com');
  console.log('     → Sitemaps → Submit: sitemap.xml');
  console.log('  2. Open https://www.bing.com/webmasters');
  console.log('     → Import from Google Search Console (one click)');
  console.log('  3. Open https://webmaster.yandex.com');
  console.log('     → Add site → paste sitemap.xml URL');
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
