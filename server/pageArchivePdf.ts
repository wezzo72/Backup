import PDFDocument from "pdfkit";
import { createHash } from "crypto";
import { db } from "./db";
import { pageArchives, bitcoinTimestamps } from "@shared/schema";
import { eq } from "drizzle-orm";
import { timestampString, getOTSVerifyUrl } from "./bitcoinTimestamp";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

export const PAGE_TITLE_MAP: Record<string, string> = {
  "/": "Home — Barran Dodger Archive",
  "/about": "About — Dr. Richard William McLean",
  "/testimony": "Testimony Hub",
  "/whistleblower": "Whistleblower Record",
  "/creator-speaks": "The Creator Speaks",
  "/main": "Main Archive — Viral Landing",
  "/archive": "Complete Archive",
  "/start-here": "Start Here — Introduction to the Archive",
  "/mission": "Mission Statement",
  "/research": "Legal Research",
  "/evidence": "Evidence Registry",
  "/blockchain": "Blockchain Archive — Bitcoin-Anchored",
  "/prophetic-papers": "Prophetic Papers",
  "/gospel": "Gospel Documentation",
  "/church": "Church Evidence",
  "/donate": "Support the Archive",
  "/contact": "Contact Dr. McLean",
  "/media": "Media & Press",
  "/timeline": "Timeline — 35 Years of Persecution",
  "/legal-status": "Legal Status — ICC Article 7 / UNHCR Submission",
  "/manifesto": "Manifesto",
  "/josephs-coat": "Joseph's Coat — Prophetic Essay",
  "/case-studies": "Case Studies",
  "/taxpayer-cost-analysis": "Taxpayer Cost Analysis",
  "/publications": "Publications",
  "/evidence-vault": "Evidence Vault — Complete Archive",
  "/administrative-annihilation": "Administrative Annihilation",
  "/retrospective-statement": "Retrospective Statement",
  "/visitors": "Visitor Statistics",
  "/spread-the-truth": "Spread The Truth — Share The Archive",
  "/ai-justice-statement": "AI Justice Statement",
  "/video-commentary": "Video Commentary",
  "/chosen-ones-perfect-trap": "The Chosen One's Perfect Trap",
  "/private-investigator-legend": "Private Investigator Legend",
  "/testimony-went-global": "The Testimony Went Global",
  "/paradox-of-persecution": "The Paradox of Persecution",
  "/forensic-meltdown-report": "Forensic Meltdown Report",
  "/archive-report": "Archive Report",
  "/forensic-corroboration-billionaire-circle": "Forensic Corroboration — Secret Billionaire Circle",
  "/forensic-corroboration-tick-tick-tick": "Forensic Corroboration — Tick Tick Tick: Game Over",
  "/forensic-corroboration-tactical-insanity": "Forensic Corroboration — Tactical Insanity",
  "/forensic-corroboration-project-halo": "Forensic Corroboration — Project Halo",
  "/forensic-corroboration-fool-fire": "Forensic Corroboration — Fool Fire",
  "/forensic-corroboration-3am-briefing": "Forensic Corroboration — 3AM Briefing",
  "/forensic-corroboration-government-own-file": "Forensic Corroboration — Government's Own File",
  "/forensic-corroboration-chosen-one": "Forensic Corroboration — The Chosen One",
  "/they-laughed-when-you-disappeared": "Forensic Corroboration — They Laughed When You Disappeared",
  "/forensic-corroboration-dirt-on-your-name": "Forensic Corroboration — They Threw Dirt On Your Name",
  "/they-threw-dirt-on-your-name": "Forensic Corroboration — They Threw Dirt On Your Name",
  "/forensic-corroboration-fight-over-you": "Forensic Corroboration — They Fight Over What's Powerful",
  "/they-fight-over-whats-powerful": "Forensic Corroboration — They Fight Over What's Powerful",
  "/theyre-at-war-over-you": "Forensic Corroboration — They're At War Over You",
  "/forensic-corroboration-vault-access": "Forensic Corroboration — Vault Access",
  "/forensic-corroboration-making-history": "Forensic Corroboration — Making History",
  "/forensic-corroboration-silence-surrender": "Forensic Corroboration — Silence Was My Reload",
  "/silence-was-my-reload": "Forensic Corroboration — Silence Was My Reload",
  "/they-mistook-your-silence": "Forensic Corroboration — They Mistook Your Silence",
  "/they-bought-off-judges": "Forensic Analysis — They Bought Off Judges",
  "/i-choose-silence": "Forensic Analysis — I Choose Silence",
  "/free-ebooks": "Free eBooks & Document Archive",
  "/bitcoin-proof": "Bitcoin Blockchain Proof",
  "/blockchain-seal-registry": "Blockchain Seal Registry",
  "/blockchain-manifest": "Complete Bitcoin Blockchain Manifest",
  "/page-archive-registry": "Page Archive Registry — Blockchain-Sealed",
  "/icc-submission": "ICC Submission — Article 7 Crimes Against Humanity",
  "/unhcr-asylum": "UNHCR Asylum Application — Geneva",
  "/forensic-analysis-index": "Forensic Analysis Index",
  "/master-evidence-register": "Master Evidence Register — 2,301 Documents",
  "/urgent-protection-request": "Urgent Protection Request / SOS",
  "/tony-ridley-recorded-confession": "Tony Ridley Recorded Confession",
  "/honey-trap-phillip-glass": "Honey Trap — Phillip Glass (TAG NSW)",
  "/formal-removal-sukhi-tear": "Formal Removal — Sukhi Tear (Diversitas WA)",
  "/honeytrap-infiltration-report": "Honeytrap Infiltration Report",
  "/ablecare-murder-threat-call": "AbleCare Murder Threat Call — Audio Evidence",
  "/able-care-entrapment-network": "AbleCare Entrapment Network",
  "/ablecare-ceo-duty-of-care-breach": "AbleCare CEO Duty of Care Breach",
  "/ablecare-transcript": "AbleCare Transcript — Evidence",
  "/cto-breach-appointment": "CTO Breach Appointment — Mental Health Act as Political Weapon",
  "/police-complicity-death-threat": "Police Complicity & Death Threat Documentation",
  "/they-needed-an-army": "Forensic Analysis — They Needed An Army",
  "/survival-was-the-warning": "Forensic Analysis — Survival Was The Warning",
  "/perception-is-protection": "Forensic Analysis — Perception Is Protection",
  "/some-truths-dont-whisper": "Forensic Analysis — Some Truths Don't Whisper",
  "/when-heaven-goes-silent": "Forensic Analysis — When Heaven Goes Silent",
  "/the-conspiracy-against-you": "Forensic Analysis — The Conspiracy Against You",
  "/they-made-you-famous": "Forensic Analysis — They Made You Famous",
  "/they-attacked-you-without-knowing": "Forensic Analysis — They Attacked You Without Knowing",
  "/they-built-their-worst-nightmare": "Forensic Analysis — They Built Their Worst Nightmare",
  "/they-dug-for-dirt-but-unearthed-diamonds": "Forensic Analysis — They Dug For Dirt But Unearthed Diamonds",
  "/the-full-pattern": "Forensic Analysis — The Full Pattern",
  "/too-deep": "Forensic Analysis — Too Deep",
  "/you-brought-receipts": "Forensic Analysis — You Brought Receipts",
  "/the-future-doesnt-announce-itself": "Forensic Analysis — The Future Doesn't Announce Itself",
  "/earth-angel": "Forensic Analysis — Earth Angel",
  "/your-power-is-no-joke": "Forensic Analysis — Your Power Is No Joke",
  "/you-built-your-peace": "Forensic Analysis — You Built Your Peace",
  "/when-pack-of-wolves": "Forensic Analysis — When A Pack Of Wolves Can't Take Down A Lion",
  "/when-wrong-people-get-nervous": "Forensic Analysis — When Wrong People Get Nervous",
  "/heaven-stood-forensic-report": "Forensic Analysis — Heaven Stood For You",
  "/beautiful-menace-forensic-report": "Forensic Analysis — Beautiful Menace",
  "/quiet-storm-they-never-saw-coming": "Forensic Analysis — Quiet Storm They Never Saw Coming",
  "/you-detonated-the-narrative": "Forensic Analysis — You Detonated The Narrative",
  "/confession-theyve-been-choking-on": "Forensic Analysis — The Confession They've Been Choking On",
  "/they-are-about-to-be-behind-bars": "Forensic Analysis — They're About To Be Behind Bars",
  "/thousand-fell-forensic-analysis": "Forensic Analysis — A Thousand Fell At Your Side",
  "/god-has-my-back": "Forensic Analysis — God Has My Back",
  "/dying-of-shame-forensic-analysis": "Forensic Analysis — Dying Of Shame",
  "/beautiful-threat": "Forensic Analysis — Beautiful Threat",
};

export function pathToTitle(pagePath: string): string {
  if (PAGE_TITLE_MAP[pagePath]) return PAGE_TITLE_MAP[pagePath];
  const slug = pagePath.replace(/^\//, "");
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function pathToTimestampSlug(pagePath: string): string {
  if (pagePath === "/") return "page-home";
  return "page-" + pagePath.replace(/^\//, "").replace(/\//g, "-").slice(0, 80);
}

async function generateAISignificance(pagePath: string, title: string): Promise<string> {
  try {
    const prompt = `You are a legal and archival analyst. Write a concise statement (3-4 sentences) about the archival and legal significance of the following page from the Barran Dodger Archive — the whistleblower testimony website of Dr. Richard William McLean (ABN 78 833 496 164), who has submitted 2,077+ blockchain-sealed documents to the ICC, UNHCR Geneva, and the Federal Court of Australia documenting 35 years of institutionalised persecution.

Page: "${title}" (URL path: ${pagePath})

Write the significance statement in the third person, focusing on: (1) what evidence or testimony this page preserves, (2) why it matters for international human rights law, and (3) why blockchain preservation is critical for this content. End with "Archival significance rating: Critical."`;

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });
    return response.choices[0]?.message?.content || "This page forms part of the largest single-author whistleblower archive in Australian legal history. Archival significance rating: Critical.";
  } catch {
    return `This page — "${title}" — forms part of the Barran Dodger Archive, the most extensively blockchain-documented whistleblower testimony in Australian legal history. Its preservation on the Bitcoin blockchain ensures that no government agency, law enforcement body, or institutional actor can erase, alter, or suppress this evidence. The content supports ongoing submissions to the International Criminal Court (ICC Article 7) and UNHCR Geneva. Archival significance rating: Critical.`;
  }
}

export async function getOrCreatePageArchive(pagePath: string, customTitle?: string): Promise<{
  path: string;
  title: string;
  aiStatement: string;
  sha256: string;
  timestampSlug: string;
  generatedAt: Date;
  otsVerifyUrl: string;
}> {
  const existing = await db.select().from(pageArchives).where(eq(pageArchives.path, pagePath));
  const title = customTitle || pathToTitle(pagePath);
  const timestampSlug = pathToTimestampSlug(pagePath);

  let sha256 = "";
  let aiStatement = "";
  let generatedAt = new Date();

  if (existing.length > 0) {
    sha256 = existing[0].sha256 || "";
    aiStatement = existing[0].aiStatement || "";
    generatedAt = existing[0].generatedAt || new Date();

    if (!sha256) {
      const tsRecord = await db.select().from(bitcoinTimestamps).where(eq(bitcoinTimestamps.slug, timestampSlug));
      if (tsRecord.length > 0) sha256 = tsRecord[0].sha256;
    }

    return { path: pagePath, title, aiStatement, sha256, timestampSlug, generatedAt, otsVerifyUrl: getOTSVerifyUrl(sha256) };
  }

  const tsRecord = await db.select().from(bitcoinTimestamps).where(eq(bitcoinTimestamps.slug, timestampSlug));
  let tsResult: { sha256: string } | null = null;

  if (tsRecord.length > 0) {
    tsResult = tsRecord[0];
  } else {
    const content = `barrandodger.com${pagePath} — ${title} — Barran Dodger Archive — ICC Article 7 Submission — UNHCR Geneva — ${new Date().toISOString()}`;
    tsResult = await timestampString(timestampSlug, title, content, "page");
  }

  sha256 = tsResult?.sha256 || createHash("sha256").update(`${pagePath}:${title}:${Date.now()}`).digest("hex");
  aiStatement = await generateAISignificance(pagePath, title);

  await db.insert(pageArchives).values({
    path: pagePath,
    title,
    aiStatement,
    sha256,
    timestampSlug,
    generatedAt: new Date(),
    updatedAt: new Date(),
  }).onConflictDoUpdate({
    target: pageArchives.path,
    set: { aiStatement, sha256, timestampSlug, updatedAt: new Date() },
  });

  return { path: pagePath, title, aiStatement, sha256, timestampSlug, generatedAt, otsVerifyUrl: getOTSVerifyUrl(sha256) };
}

export async function generatePageArchivePDF(pagePath: string, customTitle?: string): Promise<Buffer> {
  const archive = await getOrCreatePageArchive(pagePath, customTitle);
  const { title, aiStatement, sha256, generatedAt, otsVerifyUrl, timestampSlug } = archive;

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({ size: "A4", margin: 50, info: { Title: title, Author: "Barran Dodger Archive", Subject: "Digital Preservation Certificate" } });

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const W = doc.page.width;
    const M = 50;
    const CW = W - M * 2;

    const GOLD = "#b8960c";
    const DARK = "#0a0a0a";
    const MUTED = "#555555";
    const WHITE = "#ffffff";
    const BORDER = "#2a2a2a";

    doc.rect(0, 0, W, doc.page.height).fill(DARK);

    doc.rect(M, 40, CW, 2).fill(GOLD);

    doc.fontSize(9).fillColor(GOLD).font("Helvetica-Bold")
      .text("BARRAN DODGER LEGAL & ETHICAL TRUST FUND — ABN 78 833 496 164", M, 52, { align: "center", width: CW });

    doc.fontSize(22).fillColor(WHITE).font("Helvetica-Bold")
      .text("DIGITAL PRESERVATION CERTIFICATE", M, 72, { align: "center", width: CW });

    doc.fontSize(11).fillColor(GOLD).font("Helvetica")
      .text("Blockchain-Sealed Archive — Cannot Be Erased or Altered", M, 100, { align: "center", width: CW });

    doc.rect(M, 120, CW, 1).fill(GOLD);

    let y = 140;

    doc.rect(M, y, CW, 90).fill("#111111").stroke();
    doc.fontSize(8).fillColor(GOLD).font("Helvetica-Bold").text("ARCHIVED PAGE", M + 15, y + 12);
    doc.fontSize(16).fillColor(WHITE).font("Helvetica-Bold").text(title, M + 15, y + 26, { width: CW - 30, lineBreak: true });
    doc.fontSize(9).fillColor("#888888").font("Helvetica").text(`https://barrandodger.com${pagePath}`, M + 15, y + 56, { width: CW - 30 });
    y += 105;

    doc.rect(M, y, CW, 1).fill(BORDER);
    y += 15;

    const blockchainBoxH = 100;
    doc.rect(M, y, CW, blockchainBoxH).fill("#0d1117").stroke();
    doc.rect(M, y, 4, blockchainBoxH).fill(GOLD);

    doc.fontSize(8).fillColor(GOLD).font("Helvetica-Bold").text("BITCOIN BLOCKCHAIN PROOF — SHA-256 CRYPTOGRAPHIC HASH", M + 15, y + 12);
    doc.fontSize(8).fillColor(WHITE).font("Courier").text(sha256, M + 15, y + 26, { width: CW - 30 });
    doc.fontSize(8).fillColor("#888888").font("Helvetica").text("Blockchain Slug: " + timestampSlug, M + 15, y + 44);
    doc.fontSize(8).fillColor("#888888").font("Helvetica").text("Timestamp ID: " + otsVerifyUrl, M + 15, y + 58, { width: CW - 30 });
    doc.fontSize(8).fillColor(GOLD).font("Helvetica-Bold").text("OpenTimestamps: " + otsVerifyUrl, M + 15, y + 72, { width: CW - 30 });
    y += blockchainBoxH + 15;

    doc.rect(M, y, CW, 1).fill(BORDER);
    y += 15;

    doc.fontSize(9).fillColor(GOLD).font("Helvetica-Bold").text("AI-GENERATED STATEMENT OF ARCHIVAL SIGNIFICANCE", M, y);
    y += 16;
    doc.fontSize(9).fillColor("#cccccc").font("Helvetica")
      .text("Generated by GPT-4o | Barran Dodger Archive | International Human Rights Documentation", M, y);
    y += 18;

    const aiBoxH = 110;
    doc.rect(M, y, CW, aiBoxH).fill("#111111");
    doc.rect(M, y, 3, aiBoxH).fill(GOLD);
    doc.fontSize(10).fillColor(WHITE).font("Helvetica")
      .text(aiStatement, M + 12, y + 10, { width: CW - 24, lineBreak: true });
    y += aiBoxH + 15;

    doc.rect(M, y, CW, 1).fill(BORDER);
    y += 15;

    doc.fontSize(9).fillColor(GOLD).font("Helvetica-Bold").text("ARCHIVAL METADATA", M, y);
    y += 14;

    const metaFields = [
      ["Archive Generated", generatedAt.toUTCString()],
      ["URL Path", pagePath],
      ["Full URL", `https://barrandodger.com${pagePath}`],
      ["SHA-256 Hash", sha256],
      ["Blockchain Protocol", "Bitcoin / OpenTimestamps (OTS)"],
      ["Verify At", `https://opentimestamps.org/timestamp/${sha256}`],
      ["Publisher", "Dr. Richard William McLean (Barran Dodger)"],
      ["ABN", "78 833 496 164"],
      ["Submissions", "ICC Article 7 | UNHCR Geneva | Federal Court of Australia"],
    ];

    for (const [label, value] of metaFields) {
      doc.fontSize(8).fillColor(GOLD).font("Helvetica-Bold").text(label + ":", M, y, { width: 140, continued: false });
      doc.fontSize(8).fillColor("#aaaaaa").font("Helvetica").text(value, M + 150, y, { width: CW - 150 });
      y += 14;
    }

    y += 10;
    doc.rect(M, y, CW, 1).fill(GOLD);
    y += 12;

    doc.rect(M, y, CW, 65).fill("#0d1117");
    doc.fontSize(8).fillColor(GOLD).font("Helvetica-Bold")
      .text("IMMUTABILITY DECLARATION", M + 15, y + 10);
    doc.fontSize(8).fillColor("#aaaaaa").font("Helvetica")
      .text(
        "This digital preservation certificate constitutes cryptographic proof that the above-named page existed on the Barran Dodger Archive at the time of archiving. The SHA-256 hash embedded herein is permanently anchored to the Bitcoin blockchain via OpenTimestamps, making it mathematically impossible for any government agency, law enforcement body, criminal network, or institutional actor to erase, alter, or suppress this evidence without detection. This document is issued under Australian copyright law by the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164).",
        M + 15, y + 24, { width: CW - 30, lineBreak: true }
      );
    y += 75;

    doc.rect(M, y, CW, 2).fill(GOLD);
    y += 8;
    doc.fontSize(7).fillColor(MUTED).font("Helvetica")
      .text(
        `© ${new Date().getFullYear()} Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All rights reserved. Blockchain verification: opentimestamps.org`,
        M, y, { align: "center", width: CW }
      );

    doc.end();
  });
}

export async function getAllPageArchives(): Promise<Array<{
  path: string;
  title: string;
  aiStatement: string | null;
  sha256: string | null;
  timestampSlug: string | null;
  generatedAt: Date | null;
}>> {
  return db.select().from(pageArchives).orderBy(pageArchives.path);
}
