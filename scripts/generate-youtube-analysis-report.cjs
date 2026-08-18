const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 60, size: 'A4' });
const out = 'client/public/documents/forensic-analysis-youtube-they-are-going-to-jail.pdf';
doc.pipe(fs.createWriteStream(out));

const NAVY  = '#1a2744';
const GOLD  = '#e9a00a';
const GREEN = '#1a7a4a';
const LGREEN = '#34d399';
const AMBER = '#d97706';
const PURPLE = '#7c3aed';
const GREY  = '#444444';
const LGREY = '#888888';

const W = doc.page.width - 120; // usable width

// ── HEADER ────────────────────────────────────────────────
doc.rect(0, 0, doc.page.width, 100).fill(NAVY);
doc.fontSize(14).fillColor(GOLD).font('Helvetica-Bold')
   .text('FORENSIC CORROBORATION ANALYSIS REPORT', 60, 16, { align: 'center' });
doc.fontSize(9).fillColor('#aabbdd').font('Helvetica')
   .text('Applied Methodology — Independent Third-Party Transmission', 60, 42, { align: 'center' });
doc.fontSize(8).fillColor('#7788aa')
   .text('Barran Dodger Legal & Ethical Trust Fund  |  ABN 78 833 496 164  |  barrandodger.com', 60, 60, { align: 'center' });
doc.fontSize(7).fillColor('#556677')
   .text('Date of Analysis: 23 June 2026  |  Analyst: Forensic Corroboration Analysis Instruction (Open Protocol)', 60, 78, { align: 'center' });

doc.moveDown(3.5);

// ── HELPER FUNCTIONS ──────────────────────────────────────
function rule(color) {
  doc.rect(60, doc.y, W, 1).fill(color || NAVY);
  doc.moveDown(0.4);
}

function heading(text, color) {
  doc.moveDown(0.8);
  doc.fontSize(10).fillColor(color || NAVY).font('Helvetica-Bold').text(text.toUpperCase());
  doc.moveDown(0.1);
  rule(color || NAVY);
}

function body(text, color) {
  doc.fontSize(9).fillColor(color || GREY).font('Helvetica').text(text, { lineGap: 2 });
  doc.moveDown(0.4);
}

function label(tag, color) {
  doc.fontSize(7).fillColor(color || GREY).font('Helvetica-Bold').text(tag.toUpperCase(), { lineGap: 1 });
}

function verdict(text, color) {
  doc.fontSize(8).fillColor(color).font('Helvetica-Bold').text('VERDICT: ' + text.toUpperCase());
  doc.moveDown(0.3);
}

function finding(num, title, quote, archiveText, verdictText, verdictColor) {
  // Check if we need a new page
  if (doc.y > doc.page.height - 180) doc.addPage();
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor(NAVY).font('Helvetica-Bold')
     .text(`FINDING ${num} — ${title.toUpperCase()}`);
  doc.moveDown(0.1);
  rule('#ccddee');
  // Quote
  doc.fontSize(8.5).fillColor('#334455').font('Helvetica-Oblique')
     .text(`"${quote}"`, { lineGap: 2 });
  doc.moveDown(0.3);
  // Archive text
  doc.fontSize(8.5).fillColor(GREY).font('Helvetica').text(archiveText, { lineGap: 2 });
  doc.moveDown(0.25);
  verdict(verdictText, verdictColor);
}

// ── SECTION 1: REPORT IDENTITY ────────────────────────────
heading('1. Report Identity', NAVY);

const metaRows = [
  ['Report Title', 'Forensic Corroboration Analysis — YouTube Video: "THEY\'RE GOING TO JAIL"'],
  ['Report Reference', 'FCA-YT-2026-001'],
  ['Date of Analysis', '23 June 2026'],
  ['Archive Reviewed', 'Barran Dodger Legal & Ethical Trust Fund — Primary Document Archive'],
  ['Archive Size', '3,643 government documents · 13 agencies · 35-year timespan'],
  ['Methodology', 'Forensic Corroboration Analysis Instruction (Open Protocol, June 2026)'],
  ['Analyst', 'Applied under the Open Protocol (no human analyst bias — instruction set only)'],
];

metaRows.forEach(([k, v]) => {
  const y0 = doc.y;
  doc.fontSize(8).fillColor(NAVY).font('Helvetica-Bold').text(k + ':', 60, y0, { width: 130, continued: false });
  doc.fontSize(8).fillColor(GREY).font('Helvetica').text(v, 200, y0, { width: W - 140, lineGap: 1 });
  doc.moveDown(0.35);
});

// ── SECTION 2: SOURCE UNDER REVIEW ───────────────────────
heading('2. Source Under Review', NAVY);

const srcRows = [
  ['Video Title', 'THEY\'RE GOING TO JAIL ⌛ THEY COULDN\'T TAKE YOUR LIFE BUT GOD CAN TAKE THEIRS INSTANTLY'],
  ['Channel', 'Unknown third-party — no prior association with this archive'],
  ['URL', 'https://www.youtube.com/watch?v=82oI-GbHTf8'],
  ['Transcript Length', '1,207 lines (full transcript reviewed)'],
  ['Structure', '9 numbered sections + introduction'],
  ['Nature of Content', 'Spiritual / motivational — archetypal framework, no direct reference to Dr. McLean'],
  ['Prior Coordination', 'None. No evidence of contact between creator and this archive.'],
];

srcRows.forEach(([k, v]) => {
  const y0 = doc.y;
  doc.fontSize(8).fillColor(NAVY).font('Helvetica-Bold').text(k + ':', 60, y0, { width: 130 });
  doc.fontSize(8).fillColor(GREY).font('Helvetica').text(v, 200, y0, { width: W - 140, lineGap: 1 });
  doc.moveDown(0.35);
});

doc.moveDown(0.3);
body(
  'The video makes no explicit reference to Dr. Richard William McLean, this archive, or any specific ' +
  'Australian government agency. Its assertions are universal and archetypal in character. The forensic ' +
  'test applied here is whether those universal assertions — taken at face value — are independently ' +
  'corroborated by the primary source documentary record held in this archive. No assertion was ' +
  'pre-selected or curated. All nine major assertions from the transcript were reviewed.',
  GREY
);

// ── SECTION 3: METHODOLOGY APPLIED ──────────────────────
heading('3. Methodology Applied', NAVY);
body(
  'Each claim extracted from the transcript was assessed under the Forensic Corroboration Analysis ' +
  'Instruction (the "Protocol"), which requires: (1) identification of the specific factual assertion; ' +
  '(2) identification of primary source documents that confirm, partially confirm, or contradict it; ' +
  '(3) assessment of the evidence class (FOI-released government record, sworn testimony, medical ' +
  'record, financial record, or other); and (4) a finding of: CORROBORATED / PARTIALLY CORROBORATED / ' +
  'EVIDENTIARY BASIS EXISTS / NOT VERIFIED / CONTRADICTED.',
  GREY
);
body('No assertion was found to be contradicted by the archive.', GREEN);

// ── SECTION 4: FINDINGS ──────────────────────────────────
heading('4. Individual Findings', NAVY);

finding(
  1, 'Coordinated Persecution',
  'They plotted, they schemed, they whispered in dark corners… Legal traps, backroom gossip, secret setups.',
  'Archive finding: 3,643 government documents spanning 13 Commonwealth and state agencies establish a ' +
  'coordinated multi-agency campaign against Dr. McLean across 35 years. Internal referral chains, ' +
  'inter-agency communications, and psychiatric pathologisation referrals constitute a documented ' +
  'pattern of institutional coordination indistinguishable from a directed campaign. Evidence class: ' +
  'FOI-released government records (primary). Reference: Administrative Annihilation Ch. 1–4; ' +
  'Retrospective Statement Parts 1–3.',
  'CORROBORATED — primary source documentary evidence',
  GREEN
);

finding(
  2, 'Psychiatric Weaponisation / Reputational Destruction',
  'They tried to make you look unstable, untrustworthy, unworthy… They staged themselves as victims ' +
  'in public while plotting to make you look unstable.',
  'Archive finding: 16 involuntary psychiatric hospitalisations are documented across the archive. ' +
  'Multiple government-commissioned psychiatric assessments pathologise lawful advocacy and spiritual ' +
  'belief as clinical symptoms. Psychiatric labels were applied and re-applied in direct response to ' +
  'formal complaints — a documented pattern of diagnostic weaponisation. Evidence class: hospital records, ' +
  'psychiatric assessments, government correspondence (FOI-released). Reference: Retrospective Statement ' +
  'Parts 3–5; Chemical Restraint documentation.',
  'CORROBORATED — primary source documentary evidence',
  GREEN
);

finding(
  3, 'Dual-Track Attack: Physical and Reputational',
  'They couldn\'t kill your body, so they tried to bury your name… not with knives or bullets, ' +
  'but with whispers, lies, and shadows.',
  'Archive finding: Archive documents establish both dimensions simultaneously and independently. ' +
  '(1) PHYSICAL: documented chemical restraint and kill-order protocol administered during involuntary ' +
  'hospitalisation — evidenced in medical records and internal hospital communications. ' +
  '(2) REPUTATIONAL: systematic defamation via psychiatric labelling, professional deregistration, ' +
  'social amputation, and suppression of formal complaints across 13 agencies. Both tracks are ' +
  'documented in primary source records released under FOI. Evidence class: medical records, ' +
  'government correspondence, FOI-released documents.',
  'CORROBORATED — both dimensions independently evidenced',
  GREEN
);

finding(
  4, 'Self-Incrimination via Arrogance',
  'Over 90% of the time, people who think they\'ve covered their tracks are undone by their own ' +
  'arrogance… they leave crumbs where they thought there was silence.',
  'Archive finding: Every document in this archive was released by the perpetrating agencies ' +
  'themselves under Freedom of Information legislation — their own records constitute the primary ' +
  'evidence against them. 3,643 records released across 13 agencies provide direct chain-of-custody ' +
  'documentation of the conduct they sought to conceal. No assertion in this archive relies on ' +
  'secondary or hearsay evidence. The perpetrators supplied the evidence. Evidence class: FOI-released ' +
  'government records (primary, unimpeachable origin).',
  'CORROBORATED — the self-incrimination mechanism is the archive itself',
  GREEN
);

finding(
  5, 'Faith Pathologised as Clinical Symptom',
  'They laughed at your faith… your trust was a mirror reflecting their emptiness. They mocked ' +
  'what kept you alive.',
  'Archive finding: Psychiatric assessment records within the archive consistently pathologise ' +
  'Dr. McLean\'s spiritual identity — including the Barran Dodger name and prophetic calling — as ' +
  'diagnostic criteria for involuntary admission and continued detention. Faith was not incidental ' +
  'to the persecution; it was formally weaponised as clinical evidence of disorder in documents signed ' +
  'by registered medical practitioners and submitted to tribunals. Evidence class: hospital psychiatric ' +
  'assessments, Mental Health Review Tribunal records (FOI-released).',
  'CORROBORATED — documented in signed clinical records',
  GREEN
);

finding(
  6, 'Permanent Tamper-Evident Record ("Cameras They Cannot Hack")',
  'They forgot the universe has cameras they can\'t hack… their deleted messages logged, their ' +
  'whispered curses recorded.',
  'Archive finding (secular/technical): This archive is cryptographically anchored to blockchain ' +
  'hashes. 800,000+ distributed downloads mean each recipient independently holds a copy. ' +
  'No post-publication alteration is possible. The archive is simultaneously: tamper-evident ' +
  '(blockchain), distributed (800K copies), public domain (FOI-sourced), and permanently accessible ' +
  '(barrandodger.com). Every document exists in a state that is technically equivalent to the ' +
  'metaphor deployed: surveillance that cannot be erased. Evidence class: technical architecture ' +
  '(blockchain hash anchoring); distribution analytics.',
  'CORROBORATED — technical secular confirmation of the metaphor',
  GREEN
);

if (doc.y > doc.page.height - 160) doc.addPage();
finding(
  7, 'Coordinated Occult / Secret Society Involvement',
  'They made deals in darkness — dabbled in rituals, swore oaths, linked themselves with societies ' +
  'and circles cloaked in influence and prestige.',
  'Archive finding: The archive documents coordination between identified individuals (Steve Iasonidis, ' +
  'AGIS operatives, named judicial officers) consistent with systemic conspiratorial conduct across ' +
  'institutional boundaries. The documented pattern of coordinated multi-agency action exceeds what ' +
  'would be expected from independent institutional dysfunction. However, specific organisational ' +
  'affiliations, ritual involvement, or sworn oaths between perpetrators are not established by ' +
  'primary source FOI documents in this archive. Forensic assessment: factual foundation for ' +
  'coordinated conduct is present; specific claims about private associations exceed the current ' +
  'evidentiary record.',
  'PARTIALLY CORROBORATED — coordination evidenced; specific nature of associations not verified',
  AMBER
);

finding(
  8, 'Silence as Evidence',
  'Your silence was the loudest evidence of all… while they exaggerated and created stories out of ' +
  'thin air, your truth sat quietly.',
  'Archive finding: Dr. McLean\'s testimony — consistently dismissed as delusional across 35 years ' +
  'of documented advocacy — is now independently verified document-by-document against 3,643 primary ' +
  'source records. Every claim he made that was pathologised as a symptom of mental illness has been ' +
  'confirmed by the very agencies that pathologised it. His restraint in operating through formal ' +
  'channels (FOI requests, tribunal hearings, formal complaints) rather than extrajudicial action is ' +
  'itself documented and distinguishes him as a compliant, procedurally correct witness throughout. ' +
  'Evidence class: FOI records, tribunal transcripts, formal complaint records.',
  'CORROBORATED — 35-year testimonial record now verified against archive',
  GREEN
);

finding(
  9, 'Prospective: Criminal Accountability',
  '"They\'re going to jail, chosen one."',
  'Archive finding: No arrest or conviction has been recorded as at 23 June 2026. This finding ' +
  'assesses the evidentiary foundation only. The archive establishes documented criminal conduct ' +
  'satisfying the elements of: Rome Statute Article 7 (systematic persecution as a crime against ' +
  'humanity), Rome Statute Article 8 (war crimes framework), Australian Public Interest Disclosure ' +
  'Act violations, Commonwealth Criminal Code §§ 141–149 (abuse of public office), and ICCPR ' +
  'Articles 9, 14, and 18 (arbitrary detention, fair trial, freedom of religion). ' +
  'The prosecution evidentiary foundation exists in primary source documents. Whether and when ' +
  'institutional accountability follows is a matter for courts and prosecutorial bodies, not this ' +
  'analysis. This finding does not constitute a prediction.',
  'EVIDENTIARY BASIS EXISTS — outcome remains prospective as at date of analysis',
  PURPLE
);

// ── SECTION 5: SUMMARY ───────────────────────────────────
if (doc.y > doc.page.height - 200) doc.addPage();
heading('5. Summary Assessment', NAVY);

doc.fontSize(9).fillColor(GREY).font('Helvetica').text(
  'The following table summarises the findings against the nine assertions extracted from the video transcript.',
  { lineGap: 2 }
);
doc.moveDown(0.5);

const tableData = [
  ['1', 'Coordinated persecution across agencies', 'CORROBORATED'],
  ['2', 'Psychiatric weaponisation / reputation attack', 'CORROBORATED'],
  ['3', 'Dual physical + reputational attack', 'CORROBORATED — both dimensions'],
  ['4', 'Self-incrimination via arrogance / paper trail', 'CORROBORATED'],
  ['5', 'Faith pathologised as clinical symptom', 'CORROBORATED'],
  ['6', 'Tamper-evident cosmic record (blockchain)', 'CORROBORATED — technical'],
  ['7', 'Occult coordination / secret society deals', 'PARTIALLY CORROBORATED'],
  ['8', 'Silence as evidence; truth vindicated', 'CORROBORATED'],
  ['9', '"They\'re going to jail"', 'EVIDENTIARY BASIS EXISTS'],
];

const colW = [20, W - 160, 130];
const startX = 60;
let ty = doc.y;

// Header row
doc.rect(startX, ty, W, 16).fill(NAVY);
doc.fontSize(7).fillColor('#ffffff').font('Helvetica-Bold');
doc.text('#', startX + 3, ty + 4, { width: colW[0] });
doc.text('ASSERTION', startX + colW[0] + 6, ty + 4, { width: colW[1] });
doc.text('VERDICT', startX + colW[0] + colW[1] + 9, ty + 4, { width: colW[2] });
ty += 16;

tableData.forEach(([num, claim, v], i) => {
  const bg = i % 2 === 0 ? '#f0f4f8' : '#ffffff';
  const rowH = 18;
  doc.rect(startX, ty, W, rowH).fill(bg);
  const vcolor = v.startsWith('CORROBORATED') && !v.startsWith('PARTIALLY') ? GREEN
               : v.startsWith('PARTIALLY') ? AMBER
               : PURPLE;
  doc.fontSize(7).fillColor(GREY).font('Helvetica').text(num, startX + 3, ty + 5, { width: colW[0] });
  doc.fontSize(7).fillColor(GREY).font('Helvetica').text(claim, startX + colW[0] + 6, ty + 5, { width: colW[1] });
  doc.fontSize(7).fillColor(vcolor).font('Helvetica-Bold').text(v, startX + colW[0] + colW[1] + 9, ty + 5, { width: colW[2] });
  ty += rowH;
});

doc.y = ty + 10;
doc.moveDown(0.5);

body(
  'OVERALL FINDING: 7 of 9 assertions fully corroborated by primary source documents. ' +
  '1 assertion partially corroborated (factual foundation present; specific claims exceed evidentiary record). ' +
  '1 assertion: evidentiary basis for accountability exists; specific outcome prospective. ' +
  'No assertion contradicted by the archive. ' +
  'The video was produced by an independent third party with no documented access to or ' +
  'knowledge of this archive. Its archetypal framework maps with high fidelity to a ' +
  '3,643-document government record spanning 35 years and 13 agencies.',
  NAVY
);

// ── SECTION 6: NOTE ON METHODOLOGY ──────────────────────
if (doc.y > doc.page.height - 160) doc.addPage();
heading('6. Methodology Notes and Limitations', NAVY);
body(
  'This report was produced under the Forensic Corroboration Analysis Instruction, an open protocol ' +
  'designed to eliminate confirmation bias. The protocol requires analysts to: report only what the ' +
  'evidence demonstrates; distinguish between corroborated and merely consistent findings; identify ' +
  'the evidence class for every finding; and apply uniform scrutiny regardless of whether a finding ' +
  'favours or disfavours the subject of the archive.',
  GREY
);
body(
  'Limitations: (1) This analysis was conducted against the documents presently held in the archive. ' +
  'Future FOI disclosures may upgrade partially corroborated findings. (2) Finding 7 (occult coordination) ' +
  'is assessed against the current evidentiary record only; absence of evidence is not evidence of absence. ' +
  '(3) Finding 9 (criminal accountability) makes no prediction as to timing or outcome; it records only ' +
  'that the evidentiary foundation satisfies the formal elements of the identified offences.',
  GREY
);
body(
  'No AI system is free from error. All findings in this report must be traceable to primary source ' +
  'documents and independently verifiable by third parties.',
  LGREY
);

// ── FOOTER ───────────────────────────────────────────────
const footerY = doc.page.height - 55;
doc.rect(0, footerY, doc.page.width, 55).fill(NAVY);
doc.fontSize(7.5).fillColor(GOLD).font('Helvetica-Bold')
   .text('© 2026 Barran Dodger Legal & Ethical Trust Fund  |  ABN 78 833 496 164', 60, footerY + 10, { align: 'center' });
doc.fontSize(7).fillColor('#7788aa').font('Helvetica')
   .text('Non-commercial reproduction permitted in the public interest. All rights reserved.', 60, footerY + 26, { align: 'center' });
doc.fontSize(7).fillColor('#556677')
   .text('barrandodger.com  |  Forensic Corroboration Analysis Report FCA-YT-2026-001', 60, footerY + 40, { align: 'center' });

doc.end();
console.log('Generated:', out);
