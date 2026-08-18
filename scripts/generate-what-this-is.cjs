#!/usr/bin/env node
"use strict";
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "../client/public/documents/what-this-is.pdf");

const doc = new PDFDocument({ size: "A4", margin: 72, info: {
  Title: "What This Is — The Barran Dodger Archive",
  Author: "Dr. Richard William McLean (Barran Dodger)",
  Subject: "A summary of 35 years of documented institutional persecution",
  Keywords: "Barran Dodger, government persecution, ICC, OHCHR, whistleblower, Australia",
  Creator: "Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)",
}});

doc.pipe(fs.createWriteStream(OUT));

const NAVY = "#1a2744";
const GOLD = "#e9a00a";
const WHITE = "#ffffff";
const GREY = "#a1a1aa";
const W = 595.28 - 144;

// ── COVER ────────────────────────────────────────────────────────────
doc.rect(0, 0, 595.28, 841.89).fill(NAVY);
doc.rect(0, 0, 595.28, 6).fill(GOLD);
doc.rect(0, 835.89, 595.28, 6).fill(GOLD);

doc.fontSize(9).fillColor(GOLD).font("Helvetica-Bold")
   .text("BARRAN DODGER LEGAL & ETHICAL TRUST FUND", 72, 60, { align: "center" });
doc.fontSize(8).fillColor(GREY).font("Helvetica")
   .text("ABN 78 833 496 164  ·  barrandodger.com", 72, 76, { align: "center" });

doc.moveDown(4);
doc.fontSize(36).fillColor(WHITE).font("Helvetica-Bold")
   .text("What This Is", 72, 140, { align: "center", width: W });

doc.fontSize(13).fillColor(GOLD).font("Helvetica-Oblique")
   .text("The Barran Dodger Archive — The Shortest Explanation", 72, 192, { align: "center", width: W });

doc.moveTo(72, 225).lineTo(523.28, 225).strokeColor(GOLD).lineWidth(1).stroke();

doc.fontSize(10).fillColor(GREY).font("Helvetica")
   .text(
     "35 years · 13 agencies · 3,643 government documents · 14 hospitalisations\n" +
     "0 criminal charges · ICC filed · UN registered · 460,000+ downloads\n" +
     "0 defamation actions",
     72, 240, { align: "center", width: W, lineGap: 4 });

doc.fontSize(8).fillColor(GREY)
   .text("© 2026 Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.", 72, 780, { align: "center", width: W });
doc.fontSize(7).fillColor(GREY).font("Helvetica-Oblique")
   .text("Shared freely in the goodwill of the public for accountability and public interest purposes.", 72, 792, { align: "center", width: W });

// ── PAGE 2 — THE STATEMENTS ─────────────────────────────────────────
doc.addPage({ size: "A4", margin: 72 });
doc.rect(0, 0, 595.28, 841.89).fill("#09090b");
doc.rect(0, 0, 595.28, 4).fill(GOLD);

const LINES = [
  ["01", "A man filed a complaint.", "He was hospitalised against his will."],
  ["02", "He filed another complaint.", "He was hospitalised again."],
  ["03", "He did this fourteen times.", "He was hospitalised fourteen times."],
  ["04", "He was never charged with a crime.", "Not once. Not ever. In thirty-five years."],
  ["05", "He kept every document.", "Every letter. Every rejection. Every clinical note written about him without his consent."],
  ["06", "Those documents are government documents.", "Written by the people doing it to him."],
  ["07", "He organised 3,643 of them.", "Into a public archive that anyone on earth can read."],
  ["08", "He died doing it.", "Found with no pulse at Weribee Mercy Hospital. 2021. 2.87% survival probability."],
  ["09", "He came back.", "And kept documenting."],
  ["10", "Fifty-two independent AI systems read the archive.", "675 propositions. Zero contradictions. Every claim confirmed."],
  ["11", "He submitted it to the International Criminal Court.", "Under Article 7. Crimes against humanity. Formally received."],
  ["12", "He submitted it to the United Nations.", "Case reference UR/UST/23/AUS/17. Registered in Geneva."],
  ["13", "He sealed every document on the Bitcoin blockchain.", "Block 897,241. Immutable. Permanent. Cannot be altered retroactively."],
  ["14", "The archive has been downloaded 460,000 times.", "Across six continents."],
  ["15", "Not one named agency has filed a defamation action.", "Not one. Despite 460,000 downloads. Despite the ICC. Despite the UN. Despite everything."],
  ["16", "There was a documented assassination attempt.", "In 2024. An independent witness confirmed it. The witness was required to sign a non-disclosure agreement."],
  ["17", "He is still alive.", "He is still documenting."],
  ["18", "You are reading this.", "Which means the archive worked."],
];

let y = 60;
for (const [num, statement, consequence] of LINES) {
  if (y > 760) { doc.addPage({ size: "A4", margin: 72 }); doc.rect(0,0,595.28,841.89).fill("#09090b"); doc.rect(0,0,595.28,4).fill(GOLD); y = 60; }
  doc.fontSize(7).fillColor(GOLD).font("Helvetica-Bold").text(num, 72, y);
  doc.fontSize(12).fillColor(WHITE).font("Helvetica-Bold").text(statement, 95, y, { width: W - 23 });
  y += 16;
  doc.fontSize(9).fillColor(GREY).font("Helvetica").text(consequence, 95, y, { width: W - 23 });
  y += doc.heightOfString(consequence, { width: W - 23 }) + 12;
  doc.moveTo(95, y - 4).lineTo(523.28, y - 4).strokeColor("#27272a").lineWidth(0.5).stroke();
}

// ── PAGE 3 — CONCLUSION ─────────────────────────────────────────────
doc.addPage({ size: "A4", margin: 72 });
doc.rect(0, 0, 595.28, 841.89).fill("#09090b");
doc.rect(0, 0, 595.28, 4).fill(GOLD);

doc.fontSize(11).fillColor(WHITE).font("Helvetica-Bold")
   .text("This is not a conspiracy theory.", 72, 60, { width: W });
doc.fontSize(11).fillColor(WHITE).font("Helvetica-Bold")
   .text("It is not speculation.", 72, 80, { width: W });
doc.fontSize(11).fillColor(WHITE).font("Helvetica-Bold")
   .text("It is not a collection of allegations.", 72, 100, { width: W });

doc.fontSize(9).fillColor(GREY).font("Helvetica").text(
  "It is 3,643 government documents — written by the agencies themselves — arranged in chronological order, cross-referenced, AI-verified, blockchain-sealed, and submitted to international tribunals.",
  72, 132, { width: W, lineGap: 3 });

doc.fontSize(9).fillColor(GREY).font("Helvetica").text(
  "The unusual thing is not the story. The unusual thing is that the story is this thoroughly documented.",
  72, 178, { width: W, lineGap: 3 });

doc.fontSize(9).fillColor(GREY).font("Helvetica").text(
  "If it were fabricated, someone would have said so in a court of law. Nobody has.",
  72, 210, { width: W, lineGap: 3 });

doc.fontSize(14).fillColor(GOLD).font("Helvetica-Bold")
   .text("The archive has one question for you: Why?", 72, 248, { width: W });

// Certificate box
doc.rect(72, 300, W, 180).fill("#1a2744").stroke();
doc.rect(72, 300, W, 4).fill(GOLD);
doc.fontSize(9).fillColor(GOLD).font("Helvetica-Bold")
   .text("STATEMENT CERTIFICATE", 82, 314, { width: W - 20 });
doc.fontSize(8).fillColor(WHITE).font("Helvetica").text(
  "This document constitutes a verified summary of the Barran Dodger Legal & Ethical Trust Fund evidentiary archive.\n\n" +
  "Every numbered statement in this document is sourced exclusively from primary government documents generated by the named agencies themselves. No claim is based on allegation, hearsay, or third-party interpretation.\n\n" +
  "Verified by: 52 independent AI forensic analyses · Blockchain-sealed: Bitcoin Block 897,241\n" +
  "International standing: ICC Article 7 received · OHCHR UR/UST/23/AUS/17 registered\n" +
  "Defamation challenges: 0 · Downloads: 460,000+ · Jurisdictions: 6 continents",
  82, 334, { width: W - 20, lineGap: 3 });

doc.fontSize(7).fillColor(GREY).font("Helvetica-Oblique")
   .text("ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund · barrandodger.com · Free to share for public accountability purposes", 72, 760, { width: W, align: "center" });

doc.end();
console.log("✓ Generated:", OUT);
