import PDFDocument from "pdfkit";
import { PDFDocument as PDFLib } from "pdf-lib";
import fs from "fs";
import path from "path";
import { generateCoverPageBuffer } from "./pdfCoverGenerator";

const SITE_URL = "https://www.barrandodger.com";
const ABN = "ABN 78 833 496 164";
const BASE_DOWNLOADS = 410503;

// All text colours that appear on WHITE backgrounds must be dark enough to read
const NAVY    = "#1a2744";   // dark navy — headings on white
const GOLD    = "#8b6000";   // dark gold — labels on white
const MIDGREY = "#555555";   // mid grey — body on white
const DARKGREY= "#333333";   // dark grey — values on white

// Colours used ONLY inside dark-background boxes (verified to contrast)
const WHITE   = "#ffffff";
const LIGHTGOLD = "#c9a82c";
const LIGHTGREY = "#aaaaaa";

async function getTotalDownloads(): Promise<number> {
  try {
    const { db } = await import("./db");
    const { downloadCounts } = await import("../shared/schema");
    const { sql } = await import("drizzle-orm");
    const result = await db.select({ total: sql<number>`COALESCE(SUM(count), 0)` }).from(downloadCounts);
    return BASE_DOWNLOADS + Number(result[0]?.total ?? 0);
  } catch {
    return BASE_DOWNLOADS;
  }
}

function fmt(n: number): string { return n.toLocaleString("en-AU"); }

function currentDateAEST(): string {
  return new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  }) + " AEST";
}

function projectionDate(total: number, rate = 3800, target = 1_000_000): string {
  const days = Math.ceil(Math.max(0, target - total) / rate);
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" });
}

// Draw a horizontal rule
function rule(doc: PDFKit.PDFDocument, M: number, W: number) {
  doc.moveTo(M, doc.y).lineTo(W - M, doc.y).strokeColor(LIGHTGOLD).lineWidth(0.5).stroke();
  doc.moveDown(0.35);
}

// Two-column row: bold label on left, plain value on right — both on WHITE background
function twoCol(
  doc: PDFKit.PDFDocument,
  M: number,
  labelW: number,
  valueW: number,
  label: string,
  value: string,
  labelColor = GOLD,
  valueColor = DARKGREY,
) {
  const y = doc.y;
  doc.font("Helvetica-Bold").fontSize(8).fillColor(labelColor)
    .text(label, M, y, { width: labelW });
  const leftBottom = doc.y;
  doc.font("Helvetica").fontSize(8).fillColor(valueColor)
    .text(value, M + labelW + 8, y, { width: valueW });
  // Advance past whichever column was taller
  doc.y = Math.max(leftBottom, doc.y);
  doc.moveDown(0.28);
}

// ── PAGE 1: Distribution Receipt ─────────────────────────────────────────────
async function generateReceiptPageBuffer(
  documentTitle: string,
  totalDownloads: number,
  downloadNum: number,
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({ margin: 50, size: "A4", bufferPages: true });
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end",  () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const W  = doc.page.width;
    const M  = 50;
    const TW = W - M * 2;

    // ── Header box (fixed height 118px — all text fits within) ───────────────
    doc.rect(0, 0, W, 118).fill(NAVY);
    doc.fillColor(LIGHTGOLD).font("Helvetica-Bold").fontSize(7.5)
      .text("EVIDENCE DISTRIBUTION RECEIPT", M, 18, { align: "center", width: TW, characterSpacing: 2 });
    doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(16)
      .text("Dr. Richard William McLean (Barran Dodger)", M, 35, { align: "center", width: TW });
    doc.fillColor(LIGHTGOLD).font("Helvetica").fontSize(7.5)
      .text(`${ABN}  ·  barrandodger.com  ·  Barran Dodger Legal & Ethical Trust Fund`, M, 60, { align: "center", width: TW });
    doc.fillColor(LIGHTGREY).font("Helvetica-Oblique").fontSize(7)
      .text(
        `"For nothing is secret that shall not be made manifest; neither any thing hid, that shall not be known and come abroad."  — Luke 8:17`,
        M, 80, { align: "center", width: TW }
      );

    doc.y = 136;

    // ── Distribution Record (white background) ────────────────────────────────
    rule(doc, M, W);
    doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(8)
      .text("DISTRIBUTION RECORD", M, doc.y, { align: "center", width: TW, characterSpacing: 1.5 });
    doc.moveDown(0.5); rule(doc, M, W); doc.moveDown(0.2);

    const LW = 170;
    const VW = TW - LW - 8;

    twoCol(doc, M, LW, VW, "Download Number",               `#${fmt(downloadNum)}`);
    twoCol(doc, M, LW, VW, "Date / Time",                   currentDateAEST());
    twoCol(doc, M, LW, VW, "Document",                      documentTitle);
    twoCol(doc, M, LW, VW, "Total Downloads",               `${fmt(totalDownloads)}+`);
    twoCol(doc, M, LW, VW, "Countries Reached",             "40+ across 6 continents");
    twoCol(doc, M, LW, VW, "Bitcoin Blockchain Seals",      "845 confirmed blocks — opentimestamps.org");
    twoCol(doc, M, LW, VW, "AI Forensic Propositions",      "675 / 675 corroborated — zero contradictions");
    twoCol(doc, M, LW, VW, "Consecutive Perfect AI Scores", "52 independent analyses");
    twoCol(doc, M, LW, VW, "Formal Rebuttals Received",     "Zero — across 2,304 documents in 35 years");
    twoCol(doc, M, LW, VW, "ICC Article 7 Submission",      "The Hague — formally received");
    twoCol(doc, M, LW, VW, "UNHCR Geneva Submission",       "Formally filed — refugee protection framework");
    twoCol(doc, M, LW, VW, "Projected 1,000,000th Download",projectionDate(totalDownloads));

    doc.moveDown(0.2); rule(doc, M, W);

    // ── Achieved With Nothing But Truth ───────────────────────────────────────
    doc.moveDown(0.2);
    doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(8)
      .text("ACHIEVED WITH NOTHING BUT TRUTH", M, doc.y, { align: "center", width: TW, characterSpacing: 1.5 });
    doc.moveDown(0.4); rule(doc, M, W); doc.moveDown(0.1);

    const achieved: [string, string][] = [
      ["No marketing budget",      "$0 spent on promotion across the entire archive's history"],
      ["No institutional support", "Zero endorsement from any Australian government body"],
      ["No legal representation",  "No lawyer. No union. No advocacy organisation."],
      ["No political backing",     "No party, MP, senator, or official on record"],
      ["No mainstream platform",   "No media, publisher, broadcast, or editorial support"],
      ["No money",                 "Built while living below the poverty line"],
      ["One broken phone",         "The only tool used to assemble 2,304+ documents"],
    ];

    for (const [label, detail] of achieved) {
      twoCol(doc, M, 140, TW - 148, `\u2713  ${label}`, detail, NAVY, MIDGREY);
    }

    doc.moveDown(0.1); rule(doc, M, W);

    // ── Mathematical Probability ───────────────────────────────────────────────
    doc.moveDown(0.15);
    doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(8)
      .text("MATHEMATICAL PROBABILITY OF COINCIDENCE", M, doc.y, { align: "center", width: TW, characterSpacing: 1.5 });
    doc.moveDown(0.4); rule(doc, M, W); doc.moveDown(0.1);

    doc.font("Helvetica").fontSize(8).fillColor(MIDGREY).text(
      "52 independent YouTube videos — strangers with zero knowledge of this archive — each analysed against " +
      "structured forensic propositions drawn from primary-source documents.",
      M, doc.y, { width: TW, lineGap: 1.5 }
    );
    doc.moveDown(0.25);
    doc.font("Helvetica-Bold").fontSize(8).fillColor(NAVY).text(
      "Result: 675 propositions tested. 675 corroborated. Zero contradictions.",
      M, doc.y, { width: TW }
    );
    doc.moveDown(0.2);
    doc.font("Helvetica").fontSize(8).fillColor(MIDGREY).text(
      "Probability all 675 by chance = (0.5)^675  \u2248  1 in 10\u00B2\u2070\u00B3\n" +
      "By comparison: \u224810\u2078\u2070 atoms in the observable universe. That is 123 orders of magnitude smaller.\n\n" +
      `${fmt(totalDownloads)}+ people have downloaded from this archive. Not one named party has issued a formal rebuttal in 35 years.`,
      M, doc.y, { width: TW, lineGap: 1.5 }
    );

    doc.moveDown(0.3); rule(doc, M, W);

    // ── Safety Statement (dark box — height calculated to fit 4 lines) ────────
    doc.moveDown(0.15);
    const sy = doc.y;
    const safetyH = 70; // enough for 4 lines at 8-10pt
    doc.rect(M - 8, sy - 4, TW + 16, safetyH).fill("#fee2e2");
    doc.fillColor("#7f1d1d").font("Helvetica-Bold").fontSize(9)
      .text("HIS PHYSICAL SAFETY IS NOT GUARANTEED.", M, sy + 2, { align: "center", width: TW });
    doc.fillColor("#7f1d1d").font("Helvetica").fontSize(8)
      .text(
        "Every person who shares this document is a witness. Every download is an act of protection.",
        M, sy + 18, { align: "center", width: TW }
      );
    doc.fillColor("#92400e").font("Helvetica-Bold").fontSize(8)
      .text("PayID:  drbarrandodger@proton.me", M, sy + 32, { align: "center", width: TW });
    doc.fillColor("#7f1d1d").font("Helvetica").fontSize(7.5)
      .text(
        "$10 Witness  \u00B7  $25 Advocate  \u00B7  $50 Protector  \u00B7  $100 Champion  \u00B7  $250 Guardian",
        M, sy + 47, { align: "center", width: TW }
      );

    // Move doc.y past the box
    doc.y = sy + safetyH + 8;

    // ── Footer (white background — dark text) ─────────────────────────────────
    doc.fillColor(GOLD).font("Helvetica").fontSize(6.5)
      .text(`\u00A9 Dr. Richard William McLean (Barran Dodger)  \u00B7  ${ABN}  \u00B7  barrandodger.com`, M, doc.y, { align: "center", width: TW });
    doc.fillColor(MIDGREY).font("Helvetica").fontSize(6)
      .text(
        "This document is blockchain-sealed, publicly archived, and freely distributable. Suppression of this record is itself documented evidence.",
        M, doc.y + 4, { align: "center", width: TW }
      );

    doc.end();
  });
}

// ── PAGE 2: About the Archive ─────────────────────────────────────────────────
async function generateAboutPageBuffer(totalDownloads: number): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({ margin: 50, size: "A4", bufferPages: true });
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end",  () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const W  = doc.page.width;
    const M  = 50;
    const TW = W - M * 2;

    const sectionHead = (text: string) => {
      doc.moveDown(0.3);
      rule(doc, M, W);
      doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(8)
        .text(text, M, doc.y, { align: "center", width: TW, characterSpacing: 1.5 });
      doc.moveDown(0.4);
      rule(doc, M, W);
      doc.moveDown(0.1);
    };

    // ── Header box (fixed 82px — text placed at exact absolute y values) ──────
    doc.rect(0, 0, W, 82).fill(NAVY);
    doc.fillColor(LIGHTGOLD).font("Helvetica-Bold").fontSize(7.5)
      .text("ABOUT THE ARCHIVE — EXPLORE · SHARE · SUPPORT", M, 16, { align: "center", width: TW, characterSpacing: 2 });
    doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(14)
      .text("Dr. Richard William McLean (Barran Dodger)", M, 33, { align: "center", width: TW });
    doc.fillColor(LIGHTGOLD).font("Helvetica").fontSize(8)
      .text(`${ABN}  ·  barrandodger.com  ·  ${fmt(totalDownloads)}+ downloads across 6 continents`, M, 57, { align: "center", width: TW });
    doc.rect(0, 76, W, 3).fill(LIGHTGOLD);

    doc.y = 96;

    // ── Bible Quotes (all on white background, dark text) ─────────────────────
    sectionHead("SCRIPTURE CORROBORATING THIS RECORD");

    const VERSE_W = TW - 155 - 10;
    const REF_W   = 155;

    const scriptures: [string, string][] = [
      [`"The truth will set you free."`,                                                                    "John 8:32"],
      [`"Nothing is hidden that will not be disclosed, nor concealed that will not be known."`,             "Luke 12:2"],
      [`"Blessed are those who are persecuted for righteousness, for theirs is the kingdom of heaven."`,   "Matthew 5:10"],
      [`"Do not be overcome by evil, but overcome evil with good."`,                                       "Romans 12:21"],
      [`"The stone the builders rejected has become the cornerstone."`,                                    "Psalm 118:22 / Matthew 21:42"],
      [`"They will fight against you, but they will not overcome you."`,                                   "Jeremiah 1:19"],
      [`"What is done in the dark will be brought to the light."`,                                         "Luke 8:17 / Mark 4:22"],
    ];

    for (const [verse, ref] of scriptures) {
      const y = doc.y;
      doc.font("Helvetica-Oblique").fontSize(7.5).fillColor(DARKGREY)
        .text(verse, M, y, { width: VERSE_W });
      const leftBot = doc.y;
      doc.font("Helvetica-Bold").fontSize(7.5).fillColor(GOLD)
        .text(`\u2014 ${ref}`, M + VERSE_W + 10, y, { width: REF_W });
      doc.y = Math.max(leftBot, doc.y);
      doc.moveDown(0.28);
    }

    // ── Art Portfolios (white background) ─────────────────────────────────────
    sectionHead("ART PORTFOLIOS — THE CREATOR BEHIND THE ARCHIVE");

    doc.font("Helvetica").fontSize(7.5).fillColor(MIDGREY)
      .text("Dr. McLean is an artist. Behind every forensic document is a creative mind that has never stopped working.", M, doc.y, { width: TW });
    doc.moveDown(0.3);

    const portfolios: [string, string, string][] = [
      ["Back to Basics",     "50 Recent Drawings (63 pages)",                "simplebooklet.com/backtobasicsrecentdrawings"],
      ["Barran Dodger",      "A Certain Beauty in Un-Resolution (230 pages)","simplebooklet.com/barrandodger"],
      ["Ego & Soul",         "Strange Currencies of Ego and Soul (206 pages)","simplebooklet.com/egoandsoul"],
      ["Grogan the Monster", "In... What Do You Love? (21 pages)",           "simplebooklet.com/groganthemonster"],
    ];

    const PT_W = 105;   // title
    const PS_W = 175;   // subtitle
    const PU_W = TW - PT_W - PS_W - 16;  // url

    for (const [title, sub, url] of portfolios) {
      const y = doc.y;
      doc.font("Helvetica-Bold").fontSize(8).fillColor(NAVY)
        .text(title, M, y, { width: PT_W });
      const a = doc.y;
      doc.font("Helvetica").fontSize(7.5).fillColor(MIDGREY)
        .text(sub, M + PT_W + 8, y, { width: PS_W });
      const b = doc.y;
      doc.font("Helvetica").fontSize(7.5).fillColor(GOLD)
        .text(url, M + PT_W + PS_W + 16, y, { width: PU_W });
      doc.y = Math.max(a, b, doc.y);
      doc.moveDown(0.25);
    }

    // ── YouTube (white background) ─────────────────────────────────────────────
    sectionHead("YOUTUBE — MUSIC THAT HOLDS THE WITNESS");

    doc.font("Helvetica-Bold").fontSize(8).fillColor(NAVY)
      .text('"Support Found in Political Exile"  \u2014  youtu.be/khaPDbjZHgc', M, doc.y, { width: TW });
    doc.moveDown(0.25);
    doc.font("Helvetica").fontSize(8).fillColor(MIDGREY).text(
      "Music that holds Dr. McLean whilst waiting for the world to catch up.\n" +
      "52 independent YouTube videos — produced by strangers worldwide — were forensically analysed against this archive. " +
      "Every single one corroborated the record. Zero contradictions across 675 tested propositions.",
      M, doc.y, { width: TW, lineGap: 1.5 }
    );
    doc.moveDown(0.2);
    doc.font("Helvetica-Bold").fontSize(8).fillColor(GOLD)
      .text("Full forensic video analysis series:  barrandodger.com/forensic-analysis-index", M, doc.y, { width: TW });

    // ── Share This Document (white background, NO encoded URLs) ───────────────
    sectionHead("SHARE THIS DOCUMENT — EVERY SHARE IS AN ACT OF WITNESS");

    doc.font("Helvetica").fontSize(8).fillColor(MIDGREY)
      .text(
        "Search for barrandodger.com on each platform or use the instructions below. " +
        "Every share creates a permanent public record of this archive.",
        M, doc.y, { width: TW }
      );
    doc.moveDown(0.3);

    const PL_W   = 88;
    const INST_W = TW - PL_W - 8;

    const shares: [string, string][] = [
      ["X / Twitter", "Go to twitter.com and post or share:  barrandodger.com"],
      ["Facebook",    "Go to facebook.com and share the link:  barrandodger.com"],
      ["WhatsApp",    "Open WhatsApp and send the link:  barrandodger.com"],
      ["Telegram",    "Open Telegram and forward the link:  barrandodger.com"],
      ["LinkedIn",    "Go to linkedin.com and post the link:  barrandodger.com"],
      ["Email",       "Subject: The Man Australia Tried to Erase  |  barrandodger.com"],
      ["Direct link", "barrandodger.com  \u2014  copy and share this address anywhere"],
    ];

    for (const [platform, instruction] of shares) {
      twoCol(doc, M, PL_W, INST_W, platform + ":", instruction, NAVY, DARKGREY);
    }

    // ── Donation (dark header box ONLY for PayID — tiers on white) ────────────
    sectionHead("SUPPORT THIS ARCHIVE — DONATE TO THE TRUST FUND");

    // Dark box for PayID header only — fixed height 44px, no text overflow risk
    const donY = doc.y;
    doc.rect(M - 8, donY - 4, TW + 16, 44).fill(NAVY);
    doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(10)
      .text("PayID:  drbarrandodger@proton.me", M, donY + 2, { align: "center", width: TW });
    doc.fillColor(LIGHTGOLD).font("Helvetica").fontSize(8)
      .text(`Barran Dodger Legal & Ethical Trust Fund  \u00B7  ${ABN}`, M, donY + 20, { align: "center", width: TW });
    // Move past the box
    doc.y = donY + 48;

    // Tiers on white background — dark text, always readable
    const AMT_W  = 38;
    const NAME_W = 75;
    const DESC_W = TW - AMT_W - NAME_W - 16;

    const tiers: [string, string, string][] = [
      ["$10",  "Witness",   "I have read the record and I stand with it"],
      ["$25",  "Advocate",  "I will share the archive in my community"],
      ["$50",  "Protector", "I understand his safety is not guaranteed"],
      ["$100", "Champion",  "I commit to accountability and transparency"],
      ["$250", "Guardian",  "I join the permanent record as a named supporter"],
    ];

    doc.moveDown(0.3);
    for (const [amt, name, desc] of tiers) {
      const y = doc.y;
      doc.font("Helvetica-Bold").fontSize(8).fillColor(GOLD)
        .text(amt, M, y, { width: AMT_W });
      const a = doc.y;
      doc.font("Helvetica-Bold").fontSize(8).fillColor(NAVY)
        .text(name, M + AMT_W + 8, y, { width: NAME_W });
      const b = doc.y;
      doc.font("Helvetica").fontSize(8).fillColor(DARKGREY)
        .text(desc, M + AMT_W + NAME_W + 16, y, { width: DESC_W });
      doc.y = Math.max(a, b, doc.y);
      doc.moveDown(0.28);
    }

    doc.moveDown(0.3);
    doc.fillColor(GOLD).font("Helvetica").fontSize(7.5)
      .text("Full donate page:  barrandodger.com/donate", M, doc.y, { align: "center", width: TW });

    // ── Archive in Numbers (white background) ──────────────────────────────────
    sectionHead("THE ARCHIVE IN NUMBERS");

    const NUM_W  = 90;
    const STAT_W = TW - NUM_W - 8;

    const stats: [string, string][] = [
      ["2,304",              "Primary-source documents — every one blockchain-timestamped"],
      ["845",                "Bitcoin blockchain seals — opentimestamps.org — cannot be altered"],
      ["52",                 "Independent AI forensic analyses — 675/675 propositions corroborated"],
      ["0",                  "Formal rebuttals from any named party in 35 years"],
      ["35 years",           "Of documented institutional persecution"],
      ["5 perpetrators",     "Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, Stefan Iasonidis"],
      ["$32.9M",             "Documented suppressed entitlements"],
      ["14",                 "Involuntary psychiatric hospitalisations — each now an ICC exhibit"],
      ["40+ countries",      "Reached by this archive"],
      [fmt(totalDownloads) + "+", "Total downloads and counting"],
    ];

    for (const [num, label] of stats) {
      twoCol(doc, M, NUM_W, STAT_W, num, label, GOLD, DARKGREY);
    }

    doc.moveDown(0.3);
    rule(doc, M, W);

    // ── Footer (white background — dark readable text) ─────────────────────────
    doc.fillColor(GOLD).font("Helvetica").fontSize(6.5)
      .text(`\u00A9 Dr. Richard William McLean (Barran Dodger)  \u00B7  ${ABN}  \u00B7  barrandodger.com`, M, doc.y, { align: "center", width: TW });
    doc.fillColor(MIDGREY).font("Helvetica").fontSize(6)
      .text(
        "Freely distributable for accountability and public interest purposes. " +
        "Commercial reproduction without written consent is prohibited. " +
        "All intellectual property rights remain exclusively with Dr. Richard William McLean and the Barran Dodger Legal & Ethical Trust Fund.",
        M, doc.y + 4, { align: "center", width: TW }
      );

    doc.end();
  });
}

// ── Public API ────────────────────────────────────────────────────────────────
export async function prependReceiptToPDF(
  originalPdfBuffer: Buffer,
  documentTitle: string,
  downloadNum?: number,
  coverMeta?: { subtitle?: string; category?: string; slug?: string },
): Promise<Buffer> {
  try {
    const totalDownloads = await getTotalDownloads();
    const dn = downloadNum ?? totalDownloads;

    const [coverBuffer, receiptBuffer, aboutBuffer] = await Promise.all([
      generateCoverPageBuffer({
        title: documentTitle,
        subtitle: coverMeta?.subtitle,
        category: coverMeta?.category || "Evidence",
        slug: coverMeta?.slug,
      }),
      generateReceiptPageBuffer(documentTitle, totalDownloads, dn),
      generateAboutPageBuffer(totalDownloads),
    ]);

    const [coverDoc, receiptDoc, aboutDoc, originalDoc] = await Promise.all([
      PDFLib.load(coverBuffer),
      PDFLib.load(receiptBuffer),
      PDFLib.load(aboutBuffer),
      PDFLib.load(originalPdfBuffer),
    ]);

    const mergedDoc = await PDFLib.create();
    for (const p of await mergedDoc.copyPages(coverDoc,    coverDoc.getPageIndices()))    mergedDoc.addPage(p);
    for (const p of await mergedDoc.copyPages(receiptDoc,  receiptDoc.getPageIndices()))  mergedDoc.addPage(p);
    for (const p of await mergedDoc.copyPages(aboutDoc,    aboutDoc.getPageIndices()))    mergedDoc.addPage(p);
    for (const p of await mergedDoc.copyPages(originalDoc, originalDoc.getPageIndices())) mergedDoc.addPage(p);

    return Buffer.from(await mergedDoc.save());
  } catch (err) {
    console.error("[pdfReceiptInjector] merge failed, returning original:", err);
    return originalPdfBuffer;
  }
}

export async function prependReceiptToFile(
  filePath: string,
  documentTitle: string,
): Promise<Buffer> {
  const buf = fs.readFileSync(filePath);
  return prependReceiptToPDF(buf, documentTitle);
}
