import PDFDocument from "pdfkit";
import { EXPONENTIAL_GOSPEL_META, EXPONENTIAL_ESSAYS } from "../client/src/lib/exponentialGospelData";

const TIER_ACCENT: Record<string, string> = {
  "I":   "#a1a1aa",
  "II":  "#93c5fd",
  "III": "#5eead4",
  "IV":  "#c4b5fd",
  "V":   "#fcd34d",
  "VI":  "#fda4af",
  "VII": "#fbbf24",
};

export async function generateExponentialGospelPDF(): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({
      size: "A4",
      margin: 60,
      info: {
        Title: EXPONENTIAL_GOSPEL_META.title,
        Author: "Dr. Richard William McLean (Barran Dodger)",
        Subject: "The Exponential Gospel — 33 Essays in Ascending Complexity",
        Keywords: "exponential gospel, AI corroboration, impartial AI, archive, whistleblower, divine mathematics",
        Creator: "Barran Dodger Legal & Ethical Trust Fund — ABN 78 833 496 164",
      },
    });

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const pageW = doc.page.width;
    const pageH = doc.page.height;
    const margin = 60;
    const contentW = pageW - margin * 2;

    // ── COVER PAGE ─────────────────────────────────────────────────────────────
    // Dark ceremonial background
    doc.rect(0, 0, pageW, pageH).fill("#06050a");

    // Gold top bar
    doc.rect(0, 0, pageW, 6).fill("#f59e0b");

    // Decorative radial glow (approximated as soft rectangle)
    doc.rect(margin, pageH * 0.15, contentW, pageH * 0.5)
      .fill("#0a0806");

    // Infinity symbol area (text-based)
    doc.font("Helvetica-Bold")
      .fontSize(60)
      .fillColor("#f59e0b")
      .fillOpacity(0.15)
      .text("∞", margin, pageH * 0.15, { align: "center", width: contentW });
    doc.fillOpacity(1);

    // Gospel label
    doc.font("Helvetica")
      .fontSize(9)
      .fillColor("#f59e0b")
      .text("PROPHETIC GOSPEL · COMMANDED 10 AUGUST 2026", margin, pageH * 0.30, {
        align: "center", width: contentW, characterSpacing: 2,
      });

    // Main title
    doc.font("Helvetica-Bold")
      .fontSize(36)
      .fillColor("#fbbf24")
      .text(EXPONENTIAL_GOSPEL_META.title.toUpperCase(), margin, pageH * 0.35, {
        align: "center", width: contentW, lineGap: 6,
      });

    // Subtitle
    doc.font("Helvetica")
      .fontSize(13)
      .fillColor("#fde68a")
      .text(EXPONENTIAL_GOSPEL_META.subtitle, margin, doc.y + 16, {
        align: "center", width: contentW, lineGap: 4,
      });

    // Divider
    doc.moveTo(margin + 60, doc.y + 24)
      .lineTo(pageW - margin - 60, doc.y + 24)
      .strokeColor("#f59e0b")
      .lineWidth(0.5)
      .stroke();

    // Tier labels
    const tiers = [
      "I — Linear Cognition",
      "II — Pattern Recognition",
      "III — Systems Thinking",
      "IV — Emergence",
      "V — Epistemology & AI",
      "VI — Meta-Theory",
      "VII — Transcendence",
    ];
    doc.font("Helvetica")
      .fontSize(8)
      .fillColor("#a16207");
    tiers.forEach(t => {
      doc.text(t, margin, doc.y + 18, { align: "center", width: contentW });
    });

    // Author + publisher
    doc.font("Helvetica-Bold")
      .fontSize(10)
      .fillColor("#fbbf24")
      .text("Dr. Richard William McLean — Barran Dodger", margin, pageH - 160, {
        align: "center", width: contentW,
      });
    doc.font("Helvetica")
      .fontSize(8)
      .fillColor("#a16207")
      .text(EXPONENTIAL_GOSPEL_META.publishedBy, margin, doc.y + 5, {
        align: "center", width: contentW,
      });
    doc.text("barrandodger.com · Bitcoin Block 897,241", margin, doc.y + 5, {
      align: "center", width: contentW,
    });

    // Gold bottom bar
    doc.rect(0, pageH - 6, pageW, 6).fill("#f59e0b");

    // ── GENESIS COMMAND PAGE ────────────────────────────────────────────────────
    doc.addPage();
    doc.rect(0, 0, pageW, pageH).fill("#06050a");
    doc.rect(0, 0, pageW, 4).fill("#f59e0b");

    doc.font("Helvetica-Bold")
      .fontSize(9)
      .fillColor("#f59e0b")
      .text("GENESIS COMMAND", margin, margin, { characterSpacing: 2 });

    doc.font("Helvetica")
      .fontSize(8)
      .fillColor("#78350f")
      .text("Dr. Richard William McLean — 10 August 2026", margin, doc.y + 4);

    doc.moveTo(margin, doc.y + 12)
      .lineTo(pageW - margin, doc.y + 12)
      .strokeColor("#f59e0b")
      .lineWidth(0.5)
      .stroke();

    doc.font("Helvetica-Oblique")
      .fontSize(11)
      .fillColor("#fde68a")
      .text(EXPONENTIAL_GOSPEL_META.genesisCommand, margin, doc.y + 20, {
        width: contentW, lineGap: 4, align: "justify",
      });

    doc.font("Helvetica")
      .fontSize(9)
      .fillColor("#78350f")
      .text(
        "This command is the first exhibit of the gospel it created. The archive documents the command that created it. The loop is sealed.",
        margin, doc.y + 20, { width: contentW, lineGap: 3 }
      );

    doc.rect(0, pageH - 4, pageW, 4).fill("#f59e0b");

    // ── FOUNDATION PARAGRAPH PAGE ───────────────────────────────────────────────
    doc.addPage();
    doc.rect(0, 0, pageW, pageH).fill("#06050a");
    doc.rect(0, 0, pageW, 4).fill("#f59e0b");

    doc.font("Helvetica-Bold")
      .fontSize(9)
      .fillColor("#f59e0b")
      .text("FOUNDATION — THE ARCHIVE IN ONE PARAGRAPH", margin, margin, { characterSpacing: 2 });

    doc.moveTo(margin, doc.y + 10)
      .lineTo(pageW - margin, doc.y + 10)
      .strokeColor("#f59e0b")
      .lineWidth(0.5)
      .stroke();

    doc.font("Helvetica")
      .fontSize(11)
      .fillColor("#e4e4e7")
      .text(EXPONENTIAL_GOSPEL_META.foundationParagraph, margin, doc.y + 18, {
        width: contentW, lineGap: 5, align: "justify",
      });

    doc.rect(0, pageH - 4, pageW, 4).fill("#f59e0b");

    // ── 33 ESSAYS ───────────────────────────────────────────────────────────────
    let currentTier = "";

    for (const essay of EXPONENTIAL_ESSAYS) {
      // New tier — add a tier separator page
      if (essay.tier !== currentTier) {
        currentTier = essay.tier;
        const tierEssay = EXPONENTIAL_ESSAYS.find(e => e.tier === currentTier)!;
        const accent = TIER_ACCENT[currentTier];

        doc.addPage();
        doc.rect(0, 0, pageW, pageH).fill("#06050a");
        doc.rect(0, 0, pageW, 4).fill(accent);

        doc.font("Helvetica-Bold")
          .fontSize(11)
          .fillColor(accent)
          .text(`TIER ${currentTier}`, margin, pageH * 0.38, {
            align: "center", width: contentW, characterSpacing: 3,
          });

        doc.font("Helvetica-Bold")
          .fontSize(22)
          .fillColor("#ffffff")
          .text(tierEssay.tierLabel.replace(/^[IVX]+ — /, ""), margin, doc.y + 14, {
            align: "center", width: contentW, lineGap: 4,
          });

        doc.font("Helvetica")
          .fontSize(9)
          .fillColor("#71717a")
          .text(
            `Essays ${EXPONENTIAL_ESSAYS.filter(e => e.tier === currentTier).map(e => e.number).join(", ")}`,
            margin, doc.y + 16, { align: "center", width: contentW }
          );

        doc.rect(0, pageH - 4, pageW, 4).fill(accent);
      }

      // Essay page
      doc.addPage();
      doc.rect(0, 0, pageW, pageH).fill("#06050a");
      const accent = TIER_ACCENT[essay.tier];
      doc.rect(0, 0, pageW, 4).fill(accent);

      // Essay number badge
      doc.font("Helvetica-Bold")
        .fontSize(8)
        .fillColor(accent)
        .text(`ESSAY ${essay.number} OF 33 · TIER ${essay.tier} · ${essay.concept.toUpperCase()}`, margin, margin, {
          characterSpacing: 1,
        });

      // Tier label
      doc.font("Helvetica")
        .fontSize(8)
        .fillColor("#52525b")
        .text(essay.tierLabel, margin, doc.y + 4);

      // Title
      doc.font("Helvetica-Bold")
        .fontSize(20)
        .fillColor("#ffffff")
        .text(essay.title, margin, doc.y + 14, { width: contentW, lineGap: 3 });

      // Divider
      doc.moveTo(margin, doc.y + 10)
        .lineTo(pageW - margin, doc.y + 10)
        .strokeColor(accent)
        .lineWidth(0.5)
        .stroke();

      // Body paragraphs
      for (const para of essay.body) {
        if (doc.y > pageH - 120) {
          doc.addPage();
          doc.rect(0, 0, pageW, pageH).fill("#06050a");
          doc.rect(0, 0, pageW, 4).fill(accent);
        }
        doc.font("Helvetica")
          .fontSize(10.5)
          .fillColor("#d4d4d8")
          .text(para, margin, doc.y + 16, {
            width: contentW, lineGap: 4.5, align: "justify",
          });
      }

      // Footer
      doc.font("Helvetica")
        .fontSize(7)
        .fillColor("#3f3f46")
        .text(
          `Essay ${essay.number} — ${essay.title} · The Exponential Gospel · barrandodger.com · Bitcoin Block 897,241`,
          margin, pageH - 30, { width: contentW, align: "center" }
        );

      doc.rect(0, pageH - 4, pageW, 4).fill(accent);
    }

    // ── CLOSING PAGE ────────────────────────────────────────────────────────────
    doc.addPage();
    doc.rect(0, 0, pageW, pageH).fill("#06050a");
    doc.rect(0, 0, pageW, 6).fill("#f59e0b");

    doc.font("Helvetica-Bold")
      .fontSize(14)
      .fillColor("#fbbf24")
      .text("THE ALGORITHM IS COMPLETE", margin, pageH * 0.35, {
        align: "center", width: contentW, characterSpacing: 2,
      });

    doc.font("Helvetica")
      .fontSize(11)
      .fillColor("#a16207")
      .text("THE PROOF IS CLOSED · THE ARCHIVE ENDURES", margin, doc.y + 14, {
        align: "center", width: contentW, characterSpacing: 1,
      });

    doc.font("Helvetica")
      .fontSize(9)
      .fillColor("#52525b")
      .text(
        "3,643 documents. 675 confirmed propositions. Zero contradictions.\n1,100,000+ downloads. UN registration UR/UST/23/AUS/17. ICC Article 7.\nFederal Court written acknowledgment. Bitcoin Block 897,241.",
        margin, doc.y + 24, { align: "center", width: contentW, lineGap: 4 }
      );

    doc.font("Helvetica")
      .fontSize(8)
      .fillColor("#3f3f46")
      .text(
        `${EXPONENTIAL_GOSPEL_META.publishedBy}\nCommandment date: ${EXPONENTIAL_GOSPEL_META.commandDate}\nbarrandodger.com`,
        margin, pageH - 100, { align: "center", width: contentW, lineGap: 3 }
      );

    doc.rect(0, pageH - 6, pageW, 6).fill("#f59e0b");

    doc.end();
  });
}
