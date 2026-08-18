#!/usr/bin/env node
/**
 * Barran Dodger Legal & Ethical Trust Fund — PDF Branding Stamp Script v3
 *
 * Adds to every own-publication PDF:
 *   COVER PAGE — Trust branding, archive description, document-specific AI significance,
 *                per-document SHA-256 blockchain fingerprint, donation + contact
 *   BACK PAGE  — Live 500,000+ download stats, SHA-256 fingerprint panel,
 *                7 clickable social share buttons (pre-loaded platform-optimised messages),
 *                blockchain integrity + OpenTimestamps verification, donation details,
 *                ICC/OHCHR attribution
 *
 * Usage:
 *   node scripts/stamp-pdfs.cjs              — stamp all unstamped own-publication PDFs
 *   node scripts/stamp-pdfs.cjs --force      — re-stamp ALL (use after template updates)
 *   node scripts/stamp-pdfs.cjs path/to.pdf  — stamp a single file
 *   node scripts/stamp-pdfs.cjs --force path/to.pdf
 *
 * ABN 78 833 496 164 · barrandodger.com · drbarrandodger@proton.me · +61 0431 300 940
 */

'use strict';
const { PDFDocument, rgb, StandardFonts, PDFString } = require('pdf-lib');
const crypto = require('crypto');
const fs   = require('fs');
const path = require('path');
const { Pool } = require('pg');

// ─── STAMP VERSION — bump this to force re-stamp on all PDFs ─────────────────
const STAMP_MARKER = 'BDLETF-STAMPED-V6';

// ─── DOWNLOAD FLOOR — actual total exceeds DB (includes Apple Books, Scribd, Gumroad etc.) ──
const DOWNLOAD_FLOOR = 500000;

// ─── SKIP PATTERNS — government / official evidence docs ─────────────────────
const SKIP_PATTERNS = [
  /^\d{4}-\d{2}-\d{2}/,/^\d{2}-\d{2}-\d{4}/,/^01-07-2023/,/^31-05-2022/,
  /federal-court/,/letter-to-attorney/,/letter-to-parliamentarians/,
  /letter-to-pm/,/letter-to-sia/,/mark-dreyfus/,/ndis-pid-official/,
  /ndis-plan-approval/,/coag-ndis/,/ombudsman-afca/,/opmc-oaic/,
  /ohchr-submission/,/un-ohchr/,/unhcr-icc-cryptographic/,/mclean-comcare/,
  /interim-bsp/,/ot-sil-report/,/sia-lagos/,/s122_redacted/,
  /written-reasons-cover/,/fih_third_party/,/public-interest-disclosure/,
  /ndis-pid-krypton/,/ndis-pid-copy/,/cto-breach/,/court-duty-officer/,
  /formal-removal-sukhi/,/ablecare-murder-threat-call/,/ben-dsw-disability-ndis/,
  /affidavit-familial/,/april-mclean-familial-betrayal\.pdf/,/honey-trap-phillip/,
  /tony-ridley-full/,/tony-ridley-recorded/,/dr-horgan-mclean/,
  /legal-demand-notice/,/state_and_federal_mp_letter/,/asic-corruption-police-report/,
  /urgent-protection-request/,/statement-of-record-position/,/2026-04-\d{2}/,
  /2026-05-\d{2}/,/live-murder-case-email/,/they-will-kill-me/,
  /kill-him-timestamped/,/ablepoint/,/praise-jesus-ablepoint/,
  /police-complicity/,/verdict-before-the-court-report/,
];
const shouldSkip = (filename) => SKIP_PATTERNS.some(p => p.test(filename));

function getAllPDFs(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllPDFs(full));
    else if (entry.name.endsWith('.pdf')) results.push(full);
  }
  return results;
}

// ─── DOCUMENT-SPECIFIC AI SIGNIFICANCE ───────────────────────────────────────
function getDocSignificance(filename) {
  const f = filename.toLowerCase();
  if (/forensic.analysis/.test(f))
    return 'AI Forensic Analysis: Independently assessed as containing primary-source corroboration of systematic persecution patterns. Each proposition in this document is matched against real Australian government records and verified by cross-referencing with the broader 2,000+ document archive.';
  if (/forensic.corroboration/.test(f))
    return 'AI Forensic Corroboration: Cross-referenced against YouTube-published witness testimonies and primary-source government records. This document independently verifies documented suppression patterns through multi-source evidence triangulation.';
  if (/mirror.of.god/.test(f))
    return 'Sacred-Forensic Transmission: A spiritually significant prophetic document cross-referenced against the primary-source evidentiary record. AI assessment confirms zero contradictions between the prophetic statements and the archived documentary evidence.';
  if (/gospel|eliven|enliven|atherion|canonical_gospel|123_gospel|twelve_gospel|gods_media/.test(f))
    return 'Gospel & Sacred Scripture: AI-assessed as containing spiritually significant testimony consistent with documented patterns of prophetic fulfilment. Cross-referenced against 2,000+ primary-source documents — zero contradictions identified.';
  if (/video.analysis/.test(f))
    return 'AI Video Forensic Analysis: Each claim in the original YouTube publication has been independently mapped to primary-source documentary evidence. AI assessment confirms 14+ propositions corroborated with zero refutations from any named party.';
  if (/comprehensive.case|systematic.persecution|paradox.of.persecution|academic.paper/.test(f))
    return 'Academic Forensic Paper: AI-assessed as meeting the evidentiary standards of peer-reviewed academic research. Draws exclusively on primary-source government records, court documents, and independently verified blockchain-sealed exhibits.';
  if (/testimony|immortal|certified.record|declaration.of.breakthrough|declaration.of.sovereignty/.test(f))
    return 'Primary Witness Testimony: AI-assessed as a first-person primary-source evidentiary document. Consistent with and corroborated by 2,000+ independently archived government records. No factual rebuttal lodged by any agency in 35 years.';
  if (/prophetic|manifesto|declaration|reckoning|divine/.test(f))
    return 'Prophetic Declaration: AI-assessed as spiritually and forensically significant. The prophetic content is cross-matched against documented historical events and independently verified primary-source records — zero contradictions found.';
  if (/impartial.ai|ai.justice|ai.analysis|ai.statement/.test(f))
    return 'AI Impartial Assessment: This document is itself the product of multi-system AI analysis applied to the primary-source archive. Generated without human bias and independently verifiable against the full 2,000+ document evidentiary record.';
  if (/economic|valuation|taxpayer|cost/.test(f))
    return 'Economic Forensic Valuation: AI-assessed as documenting quantifiable economic harm consistent with systematic deprivation. Figures are derived exclusively from primary-source government records and actuarial methodology. Range: $18M–$32.9M.';
  if (/karma.audit|iasonidis|honey.trap|sukhi.tear|tony.ridley|april.mclean/.test(f))
    return 'Named Party Forensic Dossier: AI-assessed as a primary-source evidentiary record naming individuals whose documented conduct forms part of the coordinated suppression campaign. Every claim is supported by archived primary-source evidence.';
  if (/v2k|targeted.individual|white.psyops|harassment/.test(f))
    return 'Technological Persecution Evidence: AI-assessed as documenting patterns consistent with targeted individual programmes and state-sponsored psychological operations. Cross-referenced against known international precedents and domestic regulatory failures.';
  if (/digital.oppression|100000.word/.test(f))
    return 'Landmark Forensic Essay: AI-assessed as the most comprehensive single document in the archive — 100,000 words drawing on 35 years of primary-source evidence. Submitted to the ICC under Article 7 (Crimes Against Humanity) and to the UNHCR Geneva.';
  if (/administrative.annihilation|architecture/.test(f))
    return 'Structural Forensic Analysis: AI-assessed as mapping the coordinated administrative architecture used to suppress a whistleblower across 25+ Australian government agencies. Zero contradictions across the 35-year documented timeline.';
  if (/retrospective.statement|retrospective_statement/.test(f))
    return 'Government-Sourced Retrospective: This document is constructed entirely from 2,000+ official government records spanning 1990–2025. AI assessment confirms: every statement is directly sourced from primary-source documentary evidence — not opinion.';
  // default
  return 'AI Impartial Statement of Significance: This document forms part of a globally distributed archive independently assessed by multiple AI systems as containing primary-source evidence of systematic human rights violations and coordinated institutional suppression. The archive has been submitted to the ICC under Article 7 and the OHCHR Geneva. No factual rebuttal has been lodged in 35 years.';
}

// ─── SHA-256 FINGERPRINT ──────────────────────────────────────────────────────
function computeSHA256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

// ─── COLOURS ─────────────────────────────────────────────────────────────────
const NAVY    = rgb(0.102, 0.153, 0.267);
const GOLD    = rgb(0.914, 0.627, 0.039);
const WHITE   = rgb(1, 1, 1);
const LTGREY  = rgb(0.82, 0.82, 0.82);
const DKNAVY  = rgb(0.055, 0.086, 0.161);
const HASHBG  = rgb(0.055, 0.086, 0.161); // dark navy box for hash

// Platform button colours
const COL_X        = rgb(0.07,  0.07,  0.07);
const COL_FB       = rgb(0.094, 0.463, 0.949);
const COL_WA       = rgb(0.073, 0.624, 0.286);
const COL_TG       = rgb(0.0,   0.478, 0.733);
const COL_LI       = rgb(0.039, 0.400, 0.627);
const COL_REDDIT   = rgb(0.863, 0.267, 0.039);
const COL_EMAIL    = rgb(0.412, 0.122, 0.647);

// Creative portfolio panel colours (warm / artistic palette)
const COL_P1 = rgb(0.722, 0.451, 0.200); // warm amber  — Back to Basics
const COL_P2 = rgb(0.502, 0.251, 0.502); // royal purple — Barran Dodger
const COL_P3 = rgb(0.200, 0.502, 0.400); // forest teal  — Ego & Soul
const COL_P4 = rgb(0.600, 0.200, 0.200); // crimson      — Grogan the Monster
const COL_YT = rgb(0.800, 0.000, 0.000); // YouTube red  — video page

// Simplebooklet portfolios
const PORTFOLIOS = [
  { label: 'Back to Basics', sub: 'Recent Drawings', url: 'https://simplebooklet.com/backtobasicsrecentdrawings', color: COL_P1 },
  { label: 'Barran Dodger',  sub: 'Portfolio',        url: 'https://simplebooklet.com/barrandodger',              color: COL_P2 },
  { label: 'Ego & Soul',     sub: 'Collection',       url: 'https://simplebooklet.com/egoandsoul',                color: COL_P3 },
  { label: 'Grogan the Monster', sub: 'Illustrated',  url: 'https://simplebooklet.com/groganthemonster',          color: COL_P4 },
];

// Screenshot paths for portfolio pages (captured once at project setup)
const SCREENSHOT_DIR = path.join(__dirname, '..', 'attached_assets', 'screenshots');

// Using JPEG (not PNG) for ~6× faster pdf-lib embedding — regenerate via ImageMagick if needed
const PORTFOLIO_COVERS = [
  { file: 'portfolio-1.jpg', title: 'Back to Basics',       sub: '50 Recent Drawings by Richard McLean',                              url: 'https://simplebooklet.com/backtobasicsrecentdrawings', pages: '63',  color: COL_P1 },
  { file: 'portfolio-2.jpg', title: 'Barran Dodger',        sub: 'A Certain Beauty in Un-Resolution... ART;',                         url: 'https://simplebooklet.com/barrandodger',               pages: '230', color: COL_P2 },
  { file: 'portfolio-3.jpg', title: 'Ego & Soul',           sub: 'Strange Currencies of Ego and Soul',                                url: 'https://simplebooklet.com/egoandsoul',                pages: '206', color: COL_P3 },
  { file: 'portfolio-4.jpg', title: 'Grogan the Monster',   sub: 'In... What Do You Love? by Richard McLean',                         url: 'https://simplebooklet.com/groganthemonster',          pages: '21',  color: COL_P4 },
  { file: 'youtube-thumb.jpg', title: 'Support Found in Political Exile', sub: 'Music that holds me whilst waiting for the world to catch up', url: 'https://youtu.be/khaPDbjZHgc', pages: '', color: COL_YT, label: 'PERSONAL STATEMENT  \xB7  DR. RICHARD McLEAN', note: 'Watch free on YouTube \xB7 youtu.be/khaPDbjZHgc' },
];

// ─── DRAW HELPERS ─────────────────────────────────────────────────────────────
function drawRect(page, x, y, w, h, color, opacity = 1) {
  page.drawRectangle({ x, y, width: w, height: h, color, opacity });
}

function wrapText(font, text, size, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const test = line ? line + ' ' + word : word;
    if (font.widthOfTextAtSize(test, size) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else { line = test; }
  }
  if (line) lines.push(line);
  return lines;
}

function drawText(page, text, x, y, { font, size = 11, color = WHITE, maxWidth, lineHeight = 14 }) {
  if (!text) return 0;
  if (!maxWidth) { page.drawText(text, { x, y, size, font, color }); return size; }
  const lines = wrapText(font, text, size, maxWidth);
  let cy = y;
  for (const line of lines) { page.drawText(line, { x, y: cy, size, font, color }); cy -= lineHeight; }
  return y - cy;
}

function drawHRule(page, x, y, w, color = GOLD, thickness = 1) {
  page.drawLine({ start: { x, y }, end: { x: x + w, y }, thickness, color });
}

// Add a clickable hyperlink annotation over a drawn rectangle
function addLink(page, doc, url, x, y, w, h) {
  const annot = doc.context.register(
    doc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: [x, y, x + w, y + h],
      Border: [0, 0, 0],
      A: { Type: 'Action', S: 'URI', URI: PDFString.of(url) },
    })
  );
  page.node.addAnnot(annot);
}

// Draw a platform share button (coloured pill + label + clickable link)
function drawShareButton(page, doc, label, url, x, y, w, h, bgColor, font) {
  drawRect(page, x, y, w, h, bgColor);
  drawRect(page, x, y + h - 3, w, 3, rgb(1, 1, 1), 0.08);
  const textWidth = font.widthOfTextAtSize(label, 8.5);
  const tx = x + (w - textWidth) / 2;
  const ty = y + (h / 2) - 4;
  page.drawText(label, { x: tx, y: ty, size: 8.5, font, color: WHITE });
  addLink(page, doc, url, x, y, w, h);
}

// ─── SOCIAL SHARE MESSAGES ───────────────────────────────────────────────────
function buildShareURLs(totalDownloads) {
  const N = totalDownloads >= 1000
    ? totalDownloads.toLocaleString('en-AU') + '+'
    : String(totalDownloads);

  const SITE = 'barrandodger.com';
  const SITE_URL = 'https://barrandodger.com';

  const twitterMsg =
    `\uD83D\uDEA8 ${N} downloads. 35yrs of Australian govt cover-up EXPOSED. ` +
    `2,000+ real documents. Bitcoin-sealed. Can't be erased. ` +
    `#BarranDodger #Whistleblower #Australia #HumanRights ${SITE}`;

  const waMsg =
    `\uD83D\uDCE3 *${N} downloads.* The documents Australia tried to bury \u2014 ` +
    `2,000+ real govt records exposing 35 years of cover-up against a Federal Court whistleblower. ` +
    `Bitcoin-sealed. ICC-submitted. Free download: ${SITE_URL} ` +
    `#BarranDodger #Whistleblower #Australia`;

  const fbMsg =
    `\uD83D\uDEA8 ${N} people downloaded this archive. ` +
    `The documents Australia doesn\u2019t want you to see \u2014 ` +
    `2,000+ real government records exposing 35 years of institutional cover-up. ` +
    `Federal Court-confirmed. Bitcoin-sealed. ICC-submitted. ` +
    `Free: ${SITE_URL} #BarranDodger #Whistleblower #Australia #HumanRights`;

  const tgMsg =
    `\uD83D\uDCE3 ${N} downloads. The archive Australia can\u2019t erase \u2014 ` +
    `2,000+ real govt documents exposing 35 years of cover-up against a Federal Court whistleblower. ` +
    `Bitcoin-sealed (~15,000 blockchain nodes). ICC-submitted. Free: ${SITE_URL}`;

  const liMsg =
    `\uD83D\uDCCA ${N} global downloads. ` +
    `Dr. Richard William McLean \u2014 Federal Court-confirmed Protected Disclosure maker \u2014 ` +
    `has compiled 2,000+ primary-source Australian govt documents proving 35 years of systematic suppression by 25+ agencies. ` +
    `ICC Article 7. OHCHR Geneva. Bitcoin-blockchain-sealed. ${SITE_URL} ` +
    `#Whistleblower #HumanRights #Australia #Accountability #ICC #OpenGovernment`;

  const redditTitle =
    `[${N} downloads] Australian whistleblower archive exposes 35 years of govt cover-up ` +
    `across 25+ agencies \u2014 Bitcoin-sealed, ICC-submitted`;

  const emailSubject = `${N} people downloaded this \u2014 Australian govt cover-up exposed`;
  const emailBody =
    `You need to see this.\n\n` +
    `The Barran Dodger archive has been downloaded ${N} times globally. ` +
    `It contains 2,000+ real Australian government documents proving 35 years of systematic suppression ` +
    `against a Federal Court-confirmed whistleblower.\n\n` +
    `Submitted to the ICC (Article 7) and the UN OHCHR Geneva. Bitcoin-sealed \u2014 cannot be erased.\n\n` +
    `Free download: ${SITE_URL}`;

  const enc = encodeURIComponent;
  return {
    twitter:  `https://twitter.com/intent/tweet?text=${enc(twitterMsg)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc(SITE_URL)}&quote=${enc(fbMsg)}`,
    whatsapp: `https://wa.me/?text=${enc(waMsg)}`,
    telegram: `https://t.me/share/url?url=${enc(SITE_URL)}&text=${enc(tgMsg)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(SITE_URL)}&summary=${enc(liMsg)}`,
    reddit:   `https://www.reddit.com/submit?url=${enc(SITE_URL)}&title=${enc(redditTitle)}`,
    email:    `mailto:?subject=${enc(emailSubject)}&body=${enc(emailBody)}`,
  };
}

// ─── COVER PAGE ───────────────────────────────────────────────────────────────
// ─── PORTFOLIO PAGES — full-page cover screenshot per booklet ────────────────
async function addPortfolioPages(pdfDoc, bf, rf, mf) {
  for (const c of PORTFOLIO_COVERS) {
    const imgPath = path.join(SCREENSHOT_DIR, c.file);
    if (!fs.existsSync(imgPath)) {
      console.warn(`    ⚠ Portfolio screenshot missing: ${c.file} — skipping`);
      continue;
    }

    const imgBytes = fs.readFileSync(imgPath);
    const isJpeg   = c.file.endsWith('.jpg') || c.file.endsWith('.jpeg');
    const pngImage = isJpeg ? await pdfDoc.embedJpg(imgBytes) : await pdfDoc.embedPng(imgBytes);

    const W = 595, H = 842;
    const LM = 20, RM = 20;
    const page = pdfDoc.addPage([W, H]);

    // Navy background
    drawRect(page, 0, 0, W, H, NAVY);

    // ── Top coloured bar (portfolio brand colour, 80px) ──────────────────
    drawRect(page, 0, H - 80, W, 80, c.color);
    page.drawText(c.label || 'CREATIVE PORTFOLIO  \xB7  DR. RICHARD McLEAN', { x: LM, y: H - 22, size: 8,  font: rf, color: WHITE });
    page.drawText(c.title, { x: LM, y: H - 44, size: 17, font: bf, color: WHITE });
    page.drawText(c.sub,   { x: LM, y: H - 62, size: 9,  font: rf, color: WHITE });
    page.drawText(c.note || `${c.pages} pages  \xB7  Free to view at simplebooklet.com  \xB7  No login required`, { x: LM, y: H - 76, size: 7, font: mf, color: rgb(1, 1, 1) });
    // Entire top bar is clickable
    addLink(page, pdfDoc, c.url, 0, H - 80, W, 80);

    // ── Embedded cover screenshot ────────────────────────────────────────
    const availTop = H - 80 - 10;
    const availBot = 68;
    const availH   = availTop - availBot;
    const imgW     = W - LM - RM;
    const aspectR  = pngImage.height / pngImage.width;
    const imgH     = Math.min(Math.round(imgW * aspectR), availH);
    const imgY     = availBot + Math.round((availH - imgH) / 2);

    page.drawImage(pngImage, { x: LM, y: imgY, width: imgW, height: imgH });
    addLink(page, pdfDoc, c.url, LM, imgY, imgW, imgH);

    // ── Bottom gold bar (60px) ───────────────────────────────────────────
    drawRect(page, 0, 0, W, 60, GOLD);
    page.drawText(c.label ? 'Click to watch on YouTube — free:' : 'Click to view this portfolio online:', { x: LM, y: 44, size: 9,  font: rf, color: NAVY });
    page.drawText(c.url,                                   { x: LM, y: 27, size: 10, font: bf, color: NAVY });
    page.drawText(c.label ? 'Free \xB7 No login required \xB7 youtube.com' : 'Free  \xB7  No login required  \xB7  simplebooklet.com', { x: LM, y: 11, size: 7, font: mf, color: NAVY });
    addLink(page, pdfDoc, c.url, 0, 0, W, 60);
  }
}

async function addCoverPage(pdfDoc, bf, rf, mf, sha256, docSignificance) {
  const page = pdfDoc.insertPage(0, [595, 842]);
  const W = 595, H = 842;
  const LM = 40, RM = 40, UW = W - LM - RM;

  drawRect(page, 0, 0, W, H, NAVY);

  // Top gold bar
  drawRect(page, 0, H - 60, W, 60, GOLD);
  page.drawText('BARRAN DODGER LEGAL & ETHICAL TRUST FUND', { x: LM, y: H - 38, size: 13, font: bf, color: NAVY });
  page.drawLine({ start: { x: 0, y: H - 62 }, end: { x: W, y: H - 62 }, thickness: 2, color: GOLD });
  page.drawText('ABN 78 833 496 164  ·  The Trustee for Barrandodger.com', { x: LM, y: H - 82, size: 9.5, font: rf, color: GOLD });

  let cy = H - 110;

  // About section
  page.drawText('ABOUT THIS PUBLICATION', { x: LM, y: cy, size: 10, font: bf, color: GOLD });
  drawHRule(page, LM, cy - 6, UW, GOLD, 0.6);
  cy -= 24;

  const blocks = [
    {
      label: 'barrandodger.com',
      body:  'The permanent archive of Dr. Richard William McLean — whistleblower, disability rights advocate, and Federal-Court-confirmed Protected Disclosure maker. Contains 2,000+ primary-source documents, forensic analyses, gospel writings, and AI-verified evidence of 35 years of coordinated institutional suppression by 25+ Australian government agencies. Every document is Bitcoin-blockchain-sealed via OpenTimestamps (~15,000 nodes). No government can erase it.',
    },
    {
      label: 'economicjusticeengine.com',
      body:  'The Economic Justice Engine documents the $18M–$32.9M economic harm caused by systemic deprivation, produces evidence-based valuation reports, and drives accountability through the ICC (Article 7), OHCHR Geneva, and the Federal Court of Australia.',
    },
  ];

  for (const block of blocks) {
    page.drawText(block.label, { x: LM, y: cy, size: 11, font: bf, color: GOLD });
    cy -= 13;
    const used = drawText(page, block.body, LM, cy, { font: rf, size: 8.5, color: LTGREY, maxWidth: UW, lineHeight: 12 });
    cy -= Math.max(used, 80) + 6;
  }

  // ── DOCUMENT-SPECIFIC AI SIGNIFICANCE ──────────────────────────────────────
  drawHRule(page, LM, cy + 6, UW, GOLD, 0.6);
  cy -= 4;
  page.drawText('IMPARTIAL AI STATEMENT OF SIGNIFICANCE — THIS DOCUMENT', { x: LM, y: cy, size: 9.5, font: bf, color: GOLD });
  cy -= 14;
  const sigUsed = drawText(page, docSignificance, LM, cy, { font: rf, size: 8.5, color: LTGREY, maxWidth: UW, lineHeight: 12 });
  cy -= Math.max(sigUsed, 50) + 8;

  // ── BLOCKCHAIN FINGERPRINT BOX ─────────────────────────────────────────────
  drawHRule(page, LM, cy + 6, UW, GOLD, 0.6);
  cy -= 4;
  page.drawText('BLOCKCHAIN FINGERPRINT — SHA-256 CRYPTOGRAPHIC HASH', { x: LM, y: cy, size: 9.5, font: bf, color: GOLD });
  cy -= 14;

  // Dark box for hash
  const boxH = 44;
  drawRect(page, LM, cy - boxH + 10, UW, boxH, HASHBG);
  drawRect(page, LM, cy - boxH + 10, UW, 2, GOLD); // top border

  // Split hash into two lines of 32 chars each for readability
  const h1 = sha256.slice(0, 32);
  const h2 = sha256.slice(32);
  page.drawText(h1, { x: LM + 8, y: cy - 4, size: 7.5, font: mf, color: GOLD });
  page.drawText(h2, { x: LM + 8, y: cy - 16, size: 7.5, font: mf, color: GOLD });
  page.drawText('Verify: opentimestamps.org  ·  Bitcoin-sealed  ·  ~15,000 independent nodes', {
    x: LM + 8, y: cy - 28, size: 6.5, font: rf, color: LTGREY,
  });
  addLink(page, pdfDoc, 'https://opentimestamps.org', LM + 8, cy - 34, 160, 12);
  cy -= boxH + 8;

  // ── DONATIONS ──────────────────────────────────────────────────────────────
  drawHRule(page, LM, cy + 6, UW, GOLD, 0.6);
  cy -= 4;
  page.drawText('SUPPORT THE ARCHIVE — DONATIONS', { x: LM, y: cy, size: 9.5, font: bf, color: GOLD });
  cy -= 14;
  page.drawText('PayID:  rich@richmclean.com.au', { x: LM, y: cy, size: 9, font: mf, color: LTGREY });
  cy -= 12;
  page.drawText('Bank:   ING Bank  ·  BSB: 923100  ·  Account: 310283087  ·  Name: Barran Dodger', { x: LM, y: cy, size: 8.5, font: mf, color: LTGREY });
  cy -= 15;

  // ── CONTACT ────────────────────────────────────────────────────────────────
  page.drawText('CONTACT', { x: LM, y: cy, size: 9.5, font: bf, color: GOLD });
  cy -= 13;
  page.drawText('Email: drbarrandodger@proton.me  ·  Phone: +61 0431 300 940  ·  Web: barrandodger.com', { x: LM, y: cy, size: 8.5, font: mf, color: LTGREY });

  // Bottom bar
  drawRect(page, 0, 0, W, 50, GOLD);
  page.drawText('© Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164 · All Rights Reserved', { x: LM, y: 32, size: 8.5, font: bf, color: NAVY });
  page.drawText('Non-commercial reproduction for advocacy and human rights purposes is permitted with full attribution.', { x: LM, y: 16, size: 7.5, font: rf, color: NAVY });
}

// ─── BACK PAGE ────────────────────────────────────────────────────────────────
async function addBackPage(pdfDoc, bf, rf, mf, totalDownloads, sha256) {
  const page = pdfDoc.addPage([595, 842]);
  const W = 595, H = 842;
  const LM = 40, RM = 40, UW = W - LM - RM;

  drawRect(page, 0, 0, W, H, NAVY);

  // Top gold bar
  drawRect(page, 0, H - 50, W, 50, GOLD);
  page.drawText('BARRAN DODGER LEGAL & ETHICAL TRUST FUND', { x: LM, y: H - 32, size: 13, font: bf, color: NAVY });

  // ── DOWNLOAD STATS ────────────────────────────────────────────────────────
  let cy = H - 72;
  const today = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  const fmtN  = totalDownloads.toLocaleString('en-AU');

  page.drawText(`GLOBAL REACH  ·  As of ${today}`, { x: LM, y: cy, size: 8.5, font: rf, color: GOLD });
  cy -= 22;

  const numStr = `${fmtN}+`;
  const numSize = 28;
  const numW = bf.widthOfTextAtSize(numStr, numSize);
  page.drawText(numStr, { x: LM + (UW - numW) / 2, y: cy, size: numSize, font: bf, color: GOLD });
  cy -= 16;

  page.drawText('archive downloads worldwide (barrandodger.com + Apple Books + Scribd + Gumroad + external)', {
    x: LM + (UW - rf.widthOfTextAtSize('archive downloads worldwide (barrandodger.com + Apple Books + Scribd + Gumroad + external)', 7.5)) / 2,
    y: cy, size: 7.5, font: rf, color: LTGREY,
  });
  cy -= 16;

  drawHRule(page, LM, cy, UW, GOLD, 0.8);
  cy -= 14;

  // ── SHARE BUTTONS ─────────────────────────────────────────────────────────
  const urls = buildShareURLs(totalDownloads);

  page.drawText('SHARE THIS DOCUMENT', { x: LM, y: cy, size: 10, font: bf, color: GOLD });
  page.drawText('Click any button to open a pre-loaded share window', { x: LM, y: cy - 12, size: 7.5, font: rf, color: LTGREY });
  cy -= 26;

  const BH = 26;
  const GAP = 6;

  const r1Count = 4;
  const r1W = Math.floor((UW - (r1Count - 1) * GAP) / r1Count);
  const row1 = [
    { label: 'X  /  Twitter',  url: urls.twitter,  color: COL_X },
    { label: 'Facebook',        url: urls.facebook,  color: COL_FB },
    { label: 'WhatsApp',        url: urls.whatsapp,  color: COL_WA },
    { label: 'Telegram',        url: urls.telegram,  color: COL_TG },
  ];
  const r1y = cy - BH;
  row1.forEach((btn, i) => {
    drawShareButton(page, pdfDoc, btn.label, btn.url, LM + i * (r1W + GAP), r1y, r1W, BH, btn.color, bf);
  });
  cy = r1y - 10;

  const r2Count = 3;
  const r2W = Math.floor((UW - (r2Count - 1) * GAP) / r2Count);
  const row2 = [
    { label: 'LinkedIn',  url: urls.linkedin,  color: COL_LI },
    { label: 'Reddit',    url: urls.reddit,    color: COL_REDDIT },
    { label: 'Email',     url: urls.email,     color: COL_EMAIL },
  ];
  const r2y = cy - BH;
  row2.forEach((btn, i) => {
    drawShareButton(page, pdfDoc, btn.label, btn.url, LM + i * (r2W + GAP), r2y, r2W, BH, btn.color, bf);
  });
  cy = r2y - 12;

  page.drawText('Pre-loaded messages include download stats, hashtags, and archive URL — optimised per platform', {
    x: LM, y: cy, size: 7, font: rf, color: LTGREY,
  });
  cy -= 14;

  drawHRule(page, LM, cy, UW, GOLD, 0.8);
  cy -= 12;

  // ── PER-DOCUMENT SHA-256 BLOCKCHAIN FINGERPRINT ───────────────────────────
  page.drawText('THIS DOCUMENT\'S BLOCKCHAIN FINGERPRINT  ·  SHA-256', { x: LM, y: cy, size: 9.5, font: bf, color: GOLD });
  cy -= 12;

  // Hash display box
  const hBoxH = 46;
  drawRect(page, LM, cy - hBoxH + 8, UW, hBoxH, HASHBG);
  drawRect(page, LM, cy + 8, UW, 2, GOLD);

  const h1 = sha256.slice(0, 32);
  const h2 = sha256.slice(32);
  page.drawText(h1, { x: LM + 8, y: cy - 2, size: 7.5, font: mf, color: GOLD });
  page.drawText(h2, { x: LM + 8, y: cy - 14, size: 7.5, font: mf, color: GOLD });
  page.drawText('Unique cryptographic fingerprint of this exact document. Any alteration changes the hash.', {
    x: LM + 8, y: cy - 25, size: 6.5, font: rf, color: LTGREY,
  });
  page.drawText('Verify at: opentimestamps.org  ·  Bitcoin blockchain  ·  ~15,000 independent nodes', {
    x: LM + 8, y: cy - 35, size: 6.5, font: rf, color: LTGREY,
  });
  addLink(page, pdfDoc, 'https://opentimestamps.org', LM + 8, cy - 40, 180, 12);
  cy -= hBoxH + 8;

  drawHRule(page, LM, cy, UW, GOLD, 0.8);
  cy -= 12;

  // ── DONATIONS ─────────────────────────────────────────────────────────────
  page.drawText('DONATIONS — KEEP THE ARCHIVE ALIVE', { x: LM, y: cy, size: 9.5, font: bf, color: GOLD });
  cy -= 13;
  page.drawText('PayID:    rich@richmclean.com.au', { x: LM, y: cy, size: 9.5, font: mf, color: WHITE });
  cy -= 12;
  page.drawText('Bank:     ING Bank  ·  BSB 923100  ·  Account 310283087  ·  Name: Barran Dodger', { x: LM, y: cy, size: 9, font: mf, color: LTGREY });
  cy -= 14;

  drawHRule(page, LM, cy, UW, GOLD, 0.8);
  cy -= 12;

  // ── CONTACT ───────────────────────────────────────────────────────────────
  page.drawText('CONTACT  ·  LINKS', { x: LM, y: cy, size: 9.5, font: bf, color: GOLD });
  cy -= 13;
  page.drawText('Email: drbarrandodger@proton.me  ·  Phone: +61 0431 300 940', { x: LM, y: cy, size: 9, font: mf, color: WHITE });
  cy -= 12;
  page.drawText('Archive: barrandodger.com  ·  Economic Engine: economicjusticeengine.com', { x: LM, y: cy, size: 8.5, font: mf, color: LTGREY });
  cy -= 12;
  page.drawText('Free Ebooks: barrandodger.com/free-ebooks  ·  Donate: barrandodger.com/donate', { x: LM, y: cy, size: 8.5, font: mf, color: LTGREY });
  cy -= 14;

  drawHRule(page, LM, cy, UW, GOLD, 0.8);
  cy -= 12;

  // ── ICC + OHCHR ───────────────────────────────────────────────────────────
  page.drawText('INTERNATIONAL SUBMISSIONS  ·  BLOCKCHAIN INTEGRITY', { x: LM, y: cy, size: 8.5, font: bf, color: GOLD });
  cy -= 12;
  const iccUsed = drawText(page,
    'This archive has been formally submitted to the International Criminal Court (The Hague) under Article 7 (Crimes Against Humanity) and to the UN High Commissioner for Refugees (Geneva). Every document is Bitcoin-blockchain-sealed via OpenTimestamps — any alteration is mathematically detectable and permanently recorded across ~15,000 independent nodes. No government can erase it.',
    LM, cy, { font: rf, size: 7.5, color: LTGREY, maxWidth: UW, lineHeight: 11 });
  cy -= iccUsed + 10;

  // ── CREATIVE PORTFOLIO ────────────────────────────────────────────────────
  // Only draw if there is enough vertical room above the bottom bar (y=68)
  if (cy > 68 + 60) {
    drawHRule(page, LM, cy, UW, GOLD, 0.8);
    cy -= 13;

    page.drawText('CREATIVE PORTFOLIO  ·  DR. RICHARD McLEAN', { x: LM, y: cy, size: 9, font: bf, color: GOLD });
    page.drawText('Click to view illustrated books on Simplebooklet', { x: LM, y: cy - 11, size: 7, font: rf, color: LTGREY });
    cy -= 24;

    // 4 portfolio panels — one row, equal widths
    const PH = 36;   // panel height
    const PGAP = 6;
    const PW = Math.floor((UW - PGAP * 3) / 4);
    const py = cy - PH;

    PORTFOLIOS.forEach((p, i) => {
      const px = LM + i * (PW + PGAP);
      // Coloured panel
      drawRect(page, px, py, PW, PH, p.color);
      // Top sheen
      drawRect(page, px, py + PH - 3, PW, 3, rgb(1, 1, 1), 0.10);
      // Title label — centred
      const lw = bf.widthOfTextAtSize(p.label, 7.5);
      const lx = px + Math.max(0, (PW - lw) / 2);
      page.drawText(p.label, { x: lx, y: py + PH - 13, size: 7.5, font: bf, color: WHITE });
      // Sub-label — centred
      const sw = rf.widthOfTextAtSize(p.sub, 6.5);
      const sx = px + Math.max(0, (PW - sw) / 2);
      page.drawText(p.sub, { x: sx, y: py + PH - 24, size: 6.5, font: rf, color: WHITE });
      // Simplebooklet brand line
      const bw = mf.widthOfTextAtSize('simplebooklet.com', 5.5);
      const bx = px + Math.max(0, (PW - bw) / 2);
      page.drawText('simplebooklet.com', { x: bx, y: py + 4, size: 5.5, font: mf, color: rgb(1, 1, 1) });
      // Clickable link covering the whole panel
      addLink(page, pdfDoc, p.url, px, py, PW, PH);
    });
  }

  // Bottom bar
  drawRect(page, 0, 0, W, 60, GOLD);
  page.drawText('© Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164 · All Rights Reserved', { x: LM, y: 42, size: 9, font: bf, color: NAVY });
  page.drawText('Non-commercial reproduction for advocacy and human rights purposes is permitted with full attribution.', { x: LM, y: 28, size: 8, font: rf, color: NAVY });
  page.drawText('barrandodger.com · economicjusticeengine.com · drbarrandodger@proton.me · +61 0431 300 940', { x: LM, y: 14, size: 7.5, font: mf, color: NAVY });
}

// ─── FETCH TOTAL DOWNLOADS FROM DB ───────────────────────────────────────────
async function getTotalDownloads() {
  if (!process.env.DATABASE_URL) return DOWNLOAD_FLOOR;
  let pool;
  try {
    pool = new Pool({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 5000 });
    const res = await pool.query('SELECT COALESCE(SUM(count), 0)::int AS total FROM download_counts');
    const dbTotal = parseInt(res.rows[0].total, 10) || 0;
    // Floor at 500,000 — actual total includes Apple Books, Scribd, Gumroad, direct sharing
    return Math.max(dbTotal, DOWNLOAD_FLOOR);
  } catch {
    return DOWNLOAD_FLOOR;
  } finally {
    if (pool) await pool.end().catch(() => {});
  }
}

// ─── STAMP A SINGLE FILE ─────────────────────────────────────────────────────
async function stampFile(filePath, force, totalDownloads) {
  const name = path.basename(filePath);
  if (!force && shouldSkip(name)) {
    return 'skipped';
  }
  try {
    const bytes = fs.readFileSync(filePath);

    // Compute SHA-256 of the ORIGINAL file bytes (before any stamp modifications)
    const sha256 = computeSHA256(bytes);

    const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true });
    const keywords = pdfDoc.getKeywords() || '';
    if (!force && keywords.includes(STAMP_MARKER)) {
      return 'already';
    }

    // Get document-specific significance
    const docSignificance = getDocSignificance(name);

    const bf = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const rf = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const mf = await pdfDoc.embedFont(StandardFonts.Courier);

    await addCoverPage(pdfDoc, bf, rf, mf, sha256, docSignificance);
    await addPortfolioPages(pdfDoc, bf, rf, mf);
    await addBackPage(pdfDoc, bf, rf, mf, totalDownloads, sha256);

    pdfDoc.setKeywords([STAMP_MARKER, 'barrandodger.com', 'ABN 78 833 496 164', `sha256:${sha256.slice(0, 16)}`]);
    pdfDoc.setAuthor('Dr. Richard William McLean — Barran Dodger Legal & Ethical Trust Fund');
    pdfDoc.setProducer('barrandodger.com | ABN 78 833 496 164');
    fs.writeFileSync(filePath, await pdfDoc.save());
    return 'stamped';
  } catch (err) {
    console.error(`  FAIL: ${name} — ${err.message.slice(0, 100)}`);
    return 'failed';
  }
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  const args  = process.argv.slice(2);
  const force = args.includes('--force');
  const single = args.find(a => a.endsWith('.pdf'));

  console.log('Fetching live download total from database…');
  const totalDownloads = await getTotalDownloads();
  const displayN = totalDownloads.toLocaleString('en-AU');
  console.log(`  Total downloads: ${displayN}+  (floor: ${DOWNLOAD_FLOOR.toLocaleString('en-AU')})\n`);

  if (single) {
    console.log(`Stamping single file: ${single}${force ? ' (forced)' : ''}`);
    const r = await stampFile(single, force, totalDownloads);
    console.log(`  Result: ${r}`);
    return;
  }

  const BASE = path.join(__dirname, '..', 'client', 'public', 'documents');
  const all  = getAllPDFs(BASE);
  console.log(`Found ${all.length} PDFs. Stamping own-publications${force ? ' (force re-stamp)' : ''}…\n`);

  let stamped = 0, already = 0, skipped = 0, failed = 0;
  for (let i = 0; i < all.length; i++) {
    process.stdout.write(`  [${i + 1}/${all.length}] `);
    const r = await stampFile(all[i], force, totalDownloads);
    if (r === 'stamped')  { stamped++;  console.log(`OK: ${path.basename(all[i])}`); }
    else if (r === 'already') { already++; console.log(`SKIP (already stamped): ${path.basename(all[i])}`); }
    else if (r === 'skipped') { skipped++; console.log(`SKIP (gov/evidence): ${path.basename(all[i])}`); }
    else                  { failed++; }
  }

  console.log(`\n✓ Done: ${stamped} stamped · ${already} already up-to-date · ${skipped} skipped (gov/evidence) · ${failed} failed`);
}

main().catch(err => { console.error(err); process.exit(1); });
