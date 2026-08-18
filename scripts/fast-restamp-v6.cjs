#!/usr/bin/env node
// Fast parallel V6 re-stamp — 5 pages per PDF: 4 Simplebooklet portfolio covers + YouTube video.
// Force-stamps all PDFs (no marker check), 10 concurrent workers.
'use strict';
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs   = require('fs');
const path = require('path');

const STAMP_MARKER   = 'BDLETF-STAMPED-V6';
const SCREENSHOT_DIR = path.join(__dirname, '..', 'attached_assets', 'screenshots');
const DOCS_DIR       = path.join(__dirname, '..', 'client', 'public', 'documents');

const NAVY  = rgb(0.055, 0.086, 0.161);
const GOLD  = rgb(0.914, 0.627, 0.039);
const WHITE = rgb(1, 1, 1);

const COVERS = [
  { file: 'portfolio-1.jpg',   title: 'Back to Basics',                    sub: '50 Recent Drawings by Richard McLean',                        url: 'https://simplebooklet.com/backtobasicsrecentdrawings', pages: '63',  color: rgb(0.722, 0.451, 0.200) },
  { file: 'portfolio-2.jpg',   title: 'Barran Dodger',                     sub: 'A Certain Beauty in Un-Resolution... ART;',                   url: 'https://simplebooklet.com/barrandodger',               pages: '230', color: rgb(0.502, 0.251, 0.502) },
  { file: 'portfolio-3.jpg',   title: 'Ego & Soul',                        sub: 'Strange Currencies of Ego and Soul',                          url: 'https://simplebooklet.com/egoandsoul',                pages: '206', color: rgb(0.200, 0.502, 0.400) },
  { file: 'portfolio-4.jpg',   title: 'Grogan the Monster',                sub: 'In... What Do You Love? by Richard McLean',                   url: 'https://simplebooklet.com/groganthemonster',          pages: '21',  color: rgb(0.600, 0.200, 0.200) },
  { file: 'youtube-thumb.jpg', title: 'Support Found in Political Exile',  sub: 'Music that holds me whilst waiting for the world to catch up', url: 'https://youtu.be/khaPDbjZHgc',                        pages: '',    color: rgb(0.800, 0.000, 0.000),
    label: 'PERSONAL STATEMENT  \xB7  DR. RICHARD McLEAN',
    note:  'Watch free on YouTube  \xB7  youtu.be/khaPDbjZHgc',
    footerLine1: 'Click to watch on YouTube \u2014 free:',
    footerLine3: 'Free  \xB7  No login required  \xB7  youtube.com',
  },
];

function getAllPDFs(dir) {
  let out = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out = out.concat(getAllPDFs(full));
    else if (f.endsWith('.pdf')) out.push(full);
  }
  return out;
}

function shouldSkip(name) {
  const GOV = [
    'coag-ndis-government-documentation.pdf',
    's122_redacted_document.pdf',
    'fih_third_party_authorisation.pdf',
    'interim-bsp-2024-sils-recommendation-richard-mclean.pdf',
    'ot-sil-report-recommending-sils-richard-mclean.pdf',
    'ndis-plan-approval-nov-2025.pdf',
    'ndis-pid-official-response.pdf',
    'written-reasons-cover-letter-for-parties.pdf',
    'federal-court-three-point-acknowledgment-tredwell-27mar2023.pdf',
    'mark-dreyfus-2021-shadow-ag-directed-to-ombudsman.pdf',
    'federal-court-pid-assessment-2023.pdf',
    'sia-lagos-federal-court-pid-march-2023.pdf',
    'federal-court-sia-lagos-pid-march-2023.pdf',
    'letter-to-sia-lagos-federal-court-pid-3mar2023.pdf',
    'public-interest-disclosure-commonwealth-ombudsman-aug-2022.pdf',
    'mclean-comcare-final-legal-proceedings.pdf',
    'ohchr-submission-ur-ust-23-aus-17-urgent-appeal.pdf',
    'un-ohchr-asylum-claim-ur-ust-23-aus-17.pdf',
    'ndis-pid-copy-21-allegations.pdf',
    'ndis-pid-2023-krypton-preliminary-inquiries.pdf',
    'ombudsman-afca-referral-loop-evidence.pdf',
    'cto-breach-appointment.pdf',
    'state_and_federal_mp_letter.pdf',
    'mark-dreyfus-video-transcript-barran-dodger.pdf',
    'opmc-oaic-cover-up-hayden.pdf',
    '01-07-2023-letter-to-attorney-general-prime-minister.pdf',
    '04-06-2023-letter-to-parliamentarians.pdf',
    '31-05-2022-letter-to-pm-albanese-opmc.pdf',
    '2021-10-21-cdda-afp-compensation-claim.pdf',
    '2023-03-27-federal-court-final-assessment-dr-rich-mclean.pdf',
    'dr-horgan-mclean-confidential-psychiatric-assessment.pdf',
    'psychiatric_assessment_asylum_documentation.pdf',
  ];
  return GOV.includes(name);
}

function addLink(page, pdfDoc, url, x, y, w, h) {
  try {
    const { PDFHexString, PDFName } = require('pdf-lib');
    const link = pdfDoc.context.obj({
      Type: 'Annot', Subtype: 'Link',
      Rect: [x, y, x + w, y + h],
      Border: [0, 0, 0],
      A: { Type: 'Action', S: 'URI', URI: PDFHexString.fromText(url) },
    });
    const annots = page.node.get(PDFName.of('Annots'));
    if (annots) annots.push(link);
    else page.node.set(PDFName.of('Annots'), pdfDoc.context.obj([link]));
  } catch (_) {}
}

async function stampPdf(filePath, imgBytesArr) {
  const name = path.basename(filePath);
  if (shouldSkip(name)) return 'skipped';

  try {
    const bytes  = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true });

    const bf = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const rf = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const mf = await pdfDoc.embedFont(StandardFonts.Courier);

    // Embed all 5 JPEGs into this document
    const imgs = await Promise.all(imgBytesArr.map(b => pdfDoc.embedJpg(b)));

    for (let i = 0; i < COVERS.length; i++) {
      const c   = COVERS[i];
      const img = imgs[i];
      const W = 595, H = 842, LM = 20, RM = 20;
      const page = pdfDoc.addPage([W, H]);

      // Navy background
      page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: NAVY });

      // Top coloured header bar (80px)
      page.drawRectangle({ x: 0, y: H - 80, width: W, height: 80, color: c.color });
      page.drawText(c.label || 'CREATIVE PORTFOLIO  \xB7  DR. RICHARD McLEAN', { x: LM, y: H - 22, size: 8,  font: rf, color: WHITE });
      page.drawText(c.title, { x: LM, y: H - 44, size: 17, font: bf, color: WHITE });
      page.drawText(c.sub,   { x: LM, y: H - 62, size: 9,  font: rf, color: WHITE });
      page.drawText(c.note  || `${c.pages} pages  \xB7  Free to view at simplebooklet.com  \xB7  No login required`, { x: LM, y: H - 76, size: 7, font: mf, color: WHITE });
      addLink(page, pdfDoc, c.url, 0, H - 80, W, 80);

      // Embedded thumbnail/cover
      const availH = (H - 80 - 10) - 68;
      const imgW   = W - LM - RM;
      const imgH   = Math.min(Math.round(imgW * img.height / img.width), availH);
      const imgY   = 68 + Math.round((availH - imgH) / 2);
      page.drawImage(img, { x: LM, y: imgY, width: imgW, height: imgH });
      addLink(page, pdfDoc, c.url, LM, imgY, imgW, imgH);

      // Bottom gold bar (60px)
      page.drawRectangle({ x: 0, y: 0, width: W, height: 60, color: GOLD });
      page.drawText(c.footerLine1 || 'Click to view this portfolio online:', { x: LM, y: 44, size: 9,  font: rf, color: NAVY });
      page.drawText(c.url,                                                    { x: LM, y: 27, size: 10, font: bf, color: NAVY });
      page.drawText(c.footerLine3 || 'Free  \xB7  No login required  \xB7  simplebooklet.com', { x: LM, y: 11, size: 7, font: mf, color: NAVY });
      addLink(page, pdfDoc, c.url, 0, 0, W, 60);
    }

    pdfDoc.setKeywords([STAMP_MARKER, 'barrandodger.com', 'ABN 78 833 496 164']);
    fs.writeFileSync(filePath, await pdfDoc.save());
    return 'stamped';
  } catch (err) {
    return `FAIL: ${err.message.slice(0, 80)}`;
  }
}

async function main() {
  console.log('Loading 5 images (4 portfolios + YouTube thumbnail)…');
  const imgBytesArr = COVERS.map(c => {
    const p = path.join(SCREENSHOT_DIR, c.file);
    if (!fs.existsSync(p)) throw new Error(`Missing image: ${c.file}`);
    return fs.readFileSync(p);
  });
  console.log('  Loaded 5 JPEGs.\n');

  const all = getAllPDFs(DOCS_DIR);
  console.log(`Found ${all.length} PDFs. Stamping with V6 (5 pages, 10 parallel)…\n`);

  const CONCURRENCY = 10;
  let stamped = 0, skipped = 0, failed = 0, idx = 0;

  async function worker() {
    while (idx < all.length) {
      const i    = idx++;
      const file = all[i];
      const name = path.basename(file);
      const res  = await stampPdf(file, imgBytesArr);
      const n    = i + 1;
      if (res === 'stamped')       { stamped++;  process.stdout.write(`  [${n}/${all.length}] OK: ${name}\n`); }
      else if (res === 'skipped')  { skipped++; }
      else                         { failed++;   console.log(`  [${n}/${all.length}] ${res}: ${name}`); }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  console.log(`\n✓ Done: ${stamped} stamped · ${skipped} skipped · ${failed} failed`);
}

main().catch(e => { console.error(e); process.exit(1); });
