#!/usr/bin/env node
/**
 * Wayback Machine Bulk Archiver — barrandodger.com
 * ─────────────────────────────────────────────────
 * Submits every page URL and every PDF URL to the Internet Archive's
 * Save Page Now API (https://web.archive.org/save/).
 *
 * The Wayback Machine creates a permanent, censorship-resistant snapshot
 * of each URL. Once archived, these cannot be deleted by any single entity.
 *
 * Usage:
 *   node scripts/archive-to-wayback.mjs
 *   node scripts/archive-to-wayback.mjs --pages-only
 *   node scripts/archive-to-wayback.mjs --pdfs-only
 *   node scripts/archive-to-wayback.mjs --resume 50   (start from URL #50)
 *
 * Rate limit: ~1 request/second to be a good citizen of the Archive.
 * 305 PDFs + ~120 pages ≈ ~7 minutes total.
 */

import { request as httpsRequest } from 'https';
import { readdirSync, existsSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SITE = 'https://barrandodger.com';
const WAYBACK_SAVE = 'https://web.archive.org/save/';
const DELAY_MS = 1200; // ~50 requests/min — safe for public API
const MAX_RETRIES = 2;

// ── All page routes ────────────────────────────────────────────────────────
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
  '/illegal-level-genius-forensic-report', '/pdf-library',
  '/contact', '/about', '/legal', '/privacy',
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
  // Supplementary discovery URLs
  '/sitemap.xml', '/sitemap-index.xml', '/sitemap-main.xml',
  '/sitemap-forensic.xml', '/sitemap-publications.xml', '/sitemap-gospel.xml',
  '/sitemap-pages.xml', '/sitemap-pdfs.xml', '/sitemap-news.xml',
  '/rss.xml', '/atom.xml', '/feed.json', '/llms.txt', '/llms-full.txt',
  '/all-urls.txt', '/robots.txt', '/humans.txt', '/opensearch.xml',
];

// ── Collect PDF URLs from filesystem ──────────────────────────────────────
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

// ── HTTP helper ────────────────────────────────────────────────────────────
function httpPost(targetUrl) {
  return new Promise((resolve, reject) => {
    const saveUrl = WAYBACK_SAVE + encodeURIComponent(targetUrl);
    const parsed = new URL(saveUrl);
    const IA_KEY    = process.env.IA_ACCESS_KEY;
    const IA_SECRET = process.env.IA_SECRET_KEY;
    const authHeaders = (IA_KEY && IA_SECRET)
      ? { 'Authorization': `LOW ${IA_KEY}:${IA_SECRET}` }
      : {};
    const req = httpsRequest({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: 'GET',
      headers: {
        'User-Agent': 'barrandodger-archive-bot/1.0 (public-interest whistleblower archive; contact: drbarrandodger@proton.me)',
        'Accept': 'application/json',
        ...authHeaders,
      },
    }, (res) => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve({ status: res.statusCode, location: res.headers.location || '', body: Buffer.concat(chunks).toString().slice(0, 200) }));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
    req.end();
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function archiveUrl(url, index, total) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await httpPost(url);
      const ok = result.status < 400;
      const archiveUrl = result.location || `https://web.archive.org/web/*/${url}`;
      const label = `[${String(index).padStart(4, '0')}/${total}]`;
      if (ok) {
        console.log(`✓ ${label} HTTP ${result.status} → ${archiveUrl.slice(0, 80)}`);
      } else if (result.status === 429) {
        console.log(`⏳ ${label} Rate-limited — waiting 10s…`);
        await sleep(10000);
        attempt--; // retry without counting
        continue;
      } else {
        console.log(`✗ ${label} HTTP ${result.status} — ${url.slice(0, 80)}`);
      }
      return ok;
    } catch (e) {
      if (attempt === MAX_RETRIES) {
        console.log(`✗ [${index}/${total}] Error: ${e.message} — ${url.slice(0, 60)}`);
        return false;
      }
      await sleep(3000);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  const pagesOnly = args.includes('--pages-only');
  const pdfsOnly = args.includes('--pdfs-only');
  const resumeFrom = parseInt(args.find(a => a.startsWith('--resume'))?.split(' ')[1] || '0') || 0;

  const pageUrls = pagesOnly || !pdfsOnly ? PAGE_PATHS.map(p => `${SITE}${p}`) : [];
  const pdfUrls  = pdfsOnly  || !pagesOnly ? collectPdfUrls() : [];
  const allUrls  = [...pageUrls, ...pdfUrls];

  console.log('\n🏛  Barran Dodger — Wayback Machine Bulk Archiver');
  console.log(`   ${pageUrls.length} page URLs + ${pdfUrls.length} PDF URLs = ${allUrls.length} total`);
  console.log(`   Rate: ~1 request/${DELAY_MS}ms ≈ ${Math.ceil(allUrls.length * DELAY_MS / 60000)} minutes\n`);
  console.log('   Every URL will receive a permanent, censorship-resistant snapshot.');
  console.log('   These cannot be deleted by any government or institution.\n');

  if (resumeFrom > 0) console.log(`   Resuming from URL #${resumeFrom}\n`);

  let ok = 0, fail = 0;

  for (let i = resumeFrom; i < allUrls.length; i++) {
    const success = await archiveUrl(allUrls[i], i + 1, allUrls.length);
    if (success) ok++; else fail++;
    if (i < allUrls.length - 1) await sleep(DELAY_MS);
  }

  console.log(`\n✅ Done. ${ok} archived, ${fail} failed.`);
  console.log(`\n   Verify any URL: https://web.archive.org/web/*/https://barrandodger.com/`);
  console.log(`   Full archive index: https://web.archive.org/web/*/barrandodger.com*`);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
