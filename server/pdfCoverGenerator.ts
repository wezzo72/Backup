import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const SITE_URL = "https://barrandodger.com";
const ABN = "ABN 78 833 496 164";
const RED = "#8b0000";
const DARK_RED = "#5a0000";
const GOLD = "#b8860b";
const BLACK = "#000000";
const WHITE = "#ffffff";
const NEAR_BLACK = "#0a0000";

export interface CoverMeta {
  title: string;
  subtitle?: string;
  category?: string;
  slug?: string;
  date?: string;
}

export async function generateCoverPageBuffer(meta: CoverMeta): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({ margin: 0, size: "A4", bufferPages: true });
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const W = doc.page.width;   // 595
    const H = doc.page.height;  // 842

    // ── Full-page background (white — safe for all PDF renderers) ────────────
    doc.rect(0, 0, W, H).fill("#ffffff");

    // ── Top crimson stripe ───────────────────────────────────────────────────
    doc.rect(0, 0, W, 6).fill(RED);

    // ── Diagonal light-red accent ─────────────────────────────────────────────
    doc.save()
      .moveTo(0, H * 0.55)
      .lineTo(W, H * 0.45)
      .lineTo(W, H * 0.65)
      .lineTo(0, H * 0.75)
      .fill("#ffd0d0")
      .restore();

    // ── Site watermark (very faint) ──────────────────────────────────────────
    doc.fillColor(RED).opacity(0.08).fontSize(60).font("Helvetica-Bold")
      .text("BARRAN", 0, H * 0.3, { align: "center", width: W, characterSpacing: 10 });
    doc.fillColor(RED).opacity(0.08).fontSize(60).font("Helvetica-Bold")
      .text("DODGER", 0, H * 0.38, { align: "center", width: W, characterSpacing: 10 });
    doc.opacity(1);

    // ── Category badge ────────────────────────────────────────────────────────
    const cat = (meta.category || "EVIDENCE").toUpperCase();
    const PAD = 40;
    doc.fillColor(RED).roundedRect(PAD, 40, W - PAD * 2, 32, 4).fill();
    doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(9)
      .text(cat, PAD, 50, { align: "center", width: W - PAD * 2, characterSpacing: 3 });

    // ── Title ─────────────────────────────────────────────────────────────────
    const titleLines = splitTitle(meta.title);
    let titleY = 100;
    const titleFontSize = meta.title.length > 60 ? 24 : meta.title.length > 40 ? 28 : 32;
    doc.fillColor("#1a2744").font("Helvetica-Bold").fontSize(titleFontSize);
    for (const line of titleLines) {
      doc.text(line, PAD, titleY, { align: "center", width: W - PAD * 2 });
      titleY += titleFontSize * 1.4;
    }

    // ── Red rule under title ──────────────────────────────────────────────────
    doc.rect(PAD, titleY + 10, W - PAD * 2, 2).fill(RED);

    // ── Subtitle ──────────────────────────────────────────────────────────────
    if (meta.subtitle) {
      doc.fillColor("#b91c1c").font("Helvetica").fontSize(12)
        .text(meta.subtitle, PAD, titleY + 22, { align: "center", width: W - PAD * 2 });
    }

    // ── Blockchain seal block ─────────────────────────────────────────────────
    const sealY = H * 0.52;
    doc.fillColor(GOLD).rect(PAD, sealY, W - PAD * 2, 1).fill();
    doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(8)
      .text("⬡  BLOCKCHAIN-SEALED · BITCOIN TIMESTAMPED · CANNOT BE ALTERED OR ERASED", PAD, sealY + 6, {
        align: "center", width: W - PAD * 2, characterSpacing: 0.5
      });
    doc.fillColor(GOLD).rect(PAD, sealY + 22, W - PAD * 2, 1).fill();

    // ── Date & archive stats ──────────────────────────────────────────────────
    const statsY = H * 0.60;
    const dateStr = meta.date || new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" });
    doc.fillColor("#b91c1c").font("Helvetica").fontSize(10)
      .text(`Archived: ${dateStr}`, PAD, statsY, { align: "center", width: W - PAD * 2 });
    doc.fillColor("#b91c1c").fontSize(10)
      .text("Part of 2,304 blockchain-sealed primary-source documents", PAD, statsY + 16, { align: "center", width: W - PAD * 2 });
    doc.fillColor("#b91c1c").fontSize(10)
      .text("Zero refutations. Zero contradictions. The record stands.", PAD, statsY + 32, { align: "center", width: W - PAD * 2 });

    // ── Bottom section: ABN + site + trust (navy box — white text readable) ──
    const bottomY = H - 120;
    doc.rect(0, bottomY, W, 120).fill("#1a2744");
    doc.rect(0, bottomY, W, 3).fill(RED);

    doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(14)
      .text("BARRAN DODGER", PAD, bottomY + 16, { align: "center", width: W - PAD * 2, characterSpacing: 4 });
    doc.fillColor("#fca5a5").font("Helvetica").fontSize(9)
      .text("Legal & Ethical Trust Fund", PAD, bottomY + 34, { align: "center", width: W - PAD * 2, characterSpacing: 2 });
    doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(8)
      .text(ABN, PAD, bottomY + 50, { align: "center", width: W - PAD * 2 });
    doc.fillColor(WHITE).font("Helvetica").fontSize(8)
      .text(SITE_URL, PAD, bottomY + 64, { align: "center", width: W - PAD * 2 });
    doc.fillColor(WHITE).opacity(0.7).font("Helvetica").fontSize(7)
      .text(
        "This document is blockchain-sealed, publicly archived, and freely distributable for accountability and public interest purposes.",
        PAD, bottomY + 80, { align: "center", width: W - PAD * 2 }
      );
    doc.opacity(1);

    // ── Bottom red stripe ─────────────────────────────────────────────────────
    doc.rect(0, H - 4, W, 4).fill(RED);

    doc.end();
  });
}

function splitTitle(title: string): string[] {
  if (title.length <= 35) return [title];
  const words = title.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    if ((current + " " + w).trim().length <= 35) {
      current = (current + " " + w).trim();
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 4);
}
