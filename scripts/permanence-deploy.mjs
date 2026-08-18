#!/usr/bin/env node
/**
 * Permanence Deploy — barrandodger.com
 * ─────────────────────────────────────────────────
 * Master script that executes ALL permanence strategies in sequence:
 *
 *  1. Ping all sitemaps to Google + Bing + Yandex
 *  2. Submit all URLs to IndexNow (Bing, Yandex, Naver, Seznam, aggregator)
 *  3. Submit sitemap-pdfs.xml to all search engines
 *  4. Trigger Google News sitemap ping
 *  5. Archive key pages to Wayback Machine (async, non-blocking list)
 *
 * Usage: node scripts/permanence-deploy.mjs
 *
 * Run after every significant content addition or after deployment.
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

function get(url) {
  return new Promise((resolve) => {
    const parsed = new URL(url);
    const req = httpsRequest({ hostname: parsed.hostname, path: parsed.pathname + parsed.search, method: 'GET',
      headers: { 'User-Agent': 'barrandodger-pinger/1.0' } },
      (res) => { res.resume(); resolve({ status: res.statusCode }); });
    req.on('error', () => resolve({ status: 0 }));
    req.setTimeout(15000, () => { req.destroy(); resolve({ status: 0 }); });
    req.end();
  });
}

function post(hostname, path, body) {
  return new Promise((resolve) => {
    const buf = Buffer.from(JSON.stringify(body));
    const req = httpsRequest({ hostname, path, method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': buf.length, 'User-Agent': 'barrandodger-indexnow/1.0' } },
      (res) => { res.resume(); resolve({ status: res.statusCode }); });
    req.on('error', () => resolve({ status: 0 }));
    req.setTimeout(30000, () => { req.destroy(); resolve({ status: 0 }); });
    req.write(buf);
    req.end();
  });
}

function label(ok, text, status) {
  return `  ${ok ? '✓' : '✗'} ${text.padEnd(38)} HTTP ${status}`;
}

function collectPdfUrls() {
  const urls = [];
  const dir = resolve(ROOT, 'client/public/documents');
  if (existsSync(dir)) for (const f of readdirSync(dir)) if (f.toLowerCase().endsWith('.pdf')) urls.push(`${SITE}/documents/${encodeURIComponent(f)}`);
  return urls;
}

const ALL_PAGE_URLS = [
  '/', '/archive', '/evidence', '/administrative-annihilation', '/retrospective-statement',
  '/manifesto', '/gospel', '/the-truth', '/blockchain', '/legal-status', '/case-studies',
  '/publications', '/evidence-vault', '/free-ebooks', '/donate', '/mission', '/start-here',
  '/store', '/membership', '/verdict-before-the-court', '/undeniable',
  '/church-of-barran-resonance-dodger', '/timeline', '/prophetic-papers',
  '/taxpayer-cost-analysis', '/josephs-coat', '/research', '/media', '/top-ten-gospels',
  '/the-unlikely-vessel', '/video-forensic-analysis', '/confidential-government-documents',
  '/statement-of-significance', '/ai-statement', '/reckoning-paper',
  '/legal-cease-desist-served', '/government-documents', '/forensic-economic-valuation',
  '/divine-reckoning', '/beautiful-threat', '/beautiful-menace', '/pdf-library',
].map(p => `${SITE}${p}`);

async function main() {
  console.log('\n🚀 Barran Dodger — Permanence Deploy');
  console.log('   Executing all search engine permanence strategies\n');

  // ── 1. Sitemap pings ─────────────────────────────────────────────────────
  console.log('── 1. Sitemap Pings ──────────────────────────────────────────────');
  const sitemapUrls = [
    'sitemap.xml', 'sitemap-index.xml', 'sitemap-main.xml',
    'sitemap-forensic.xml', 'sitemap-publications.xml', 'sitemap-gospel.xml',
    'sitemap-pages.xml', 'sitemap-pdfs.xml', 'sitemap-news.xml',
  ];

  // Yandex still accepts GET pings
  for (const s of sitemapUrls) {
    const r = await get(`https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(`${SITE}/${s}`)}`);
    console.log(label(r.status < 400, `Yandex ← ${s}`, r.status));
  }

  // Google Discover / News ping
  const gnews = await get(`https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE}/sitemap-news.xml`)}`);
  console.log(label(gnews.status < 400, 'Google News ping', gnews.status));

  // ── 2. Mass IndexNow ─────────────────────────────────────────────────────
  console.log('\n── 2. Mass IndexNow (all pages + all PDFs) ──────────────────────');
  const pdfUrls = collectPdfUrls();
  const allUrls = [...new Set([...ALL_PAGE_URLS, ...pdfUrls])];
  console.log(`   Building URL list: ${ALL_PAGE_URLS.length} pages + ${pdfUrls.length} PDFs = ${allUrls.length} URLs`);

  const indexNowBody = {
    host: 'barrandodger.com',
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: allUrls.slice(0, 10000),
  };

  const providers = [
    ['api.indexnow.org', 'Aggregator (all engines)'],
    ['www.bing.com',     'Bing + DuckDuckGo + Ecosia'],
    ['yandex.com',       'Yandex'],
    ['search.seznam.cz', 'Seznam'],
  ];

  await Promise.all(providers.map(async ([hostname, name]) => {
    const r = await post(hostname, '/indexnow', indexNowBody);
    console.log(label(r.status >= 200 && r.status < 300, name, r.status));
  }));

  // ── 3. Key URLs to Wayback Machine (non-blocking, most important pages) ──
  console.log('\n── 3. Wayback Machine — Key Page Snapshots ──────────────────────');
  console.log('   (Sending top 15 critical pages — run archive-to-wayback.mjs for all 400+)');
  const criticalPages = [
    '/', '/evidence', '/confidential-government-documents',
    '/administrative-annihilation', '/verdict-before-the-court',
    '/undeniable', '/legal-cease-desist-served', '/blockchain',
    '/statement-of-significance', '/gospel',
    '/rss.xml', '/sitemap.xml', '/pdf-library', '/llms.txt', '/all-urls.txt',
  ];
  for (const p of criticalPages) {
    const url = `${SITE}${p}`;
    const r = await get(`https://web.archive.org/save/${encodeURIComponent(url)}`);
    const ok = r.status < 400;
    console.log(label(ok, p, r.status));
    await new Promise(res => setTimeout(res, 1000)); // 1s rate limit
  }

  // ── 4. Ping additional registries ─────────────────────────────────────────
  console.log('\n── 4. Additional Registries ─────────────────────────────────────');
  // Sitemap submission endpoints that still accept GET pings
  const extra = [
    ['https://webmaster.yandex.ru/ping?sitemap=' + encodeURIComponent(`${SITE}/sitemap.xml`), 'Yandex.ru'],
    [`${SITE}/api/seo/health`, 'Internal SEO Health Check'],
  ];
  for (const [url, name] of extra) {
    const r = await get(url);
    console.log(label(r.status < 400, name, r.status));
  }

  console.log('\n✅ Permanence deploy complete.');
  console.log('\n   Next: For full Wayback Machine archiving of all 400+ URLs:');
  console.log('   node scripts/archive-to-wayback.mjs\n');
  console.log('   Verify archive coverage:');
  console.log('   https://web.archive.org/web/*/barrandodger.com*');
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
