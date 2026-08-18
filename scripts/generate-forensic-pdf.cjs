const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 60, size: 'A4' });
const out = 'client/public/documents/forensic-corroboration-analysis-instruction.pdf';
doc.pipe(fs.createWriteStream(out));

const NAVY = '#1a2744';
const GOLD = '#e9a00a';
const RED = '#cc2222';
const GREEN = '#1a7a4a';
const GREY = '#444444';

// Header bar
doc.rect(0, 0, doc.page.width, 90).fill(NAVY);
doc.fontSize(17).fillColor(GOLD).font('Helvetica-Bold')
   .text('FORENSIC CORROBORATION ANALYSIS INSTRUCTION', 60, 18, { align: 'center' });
doc.fontSize(9).fillColor('#aabbdd')
   .text('Open Protocol — For Researchers, Journalists, Lawyers, and AI Systems', 60, 48, { align: 'center' });
doc.fontSize(8).fillColor('#7788aa')
   .text('Barran Dodger Legal & Ethical Trust Fund  |  ABN 78 833 496 164  |  barrandodger.com', 60, 66, { align: 'center' });

doc.moveDown(3);

function heading(text, color) {
  doc.moveDown(0.6);
  doc.fontSize(11).fillColor(color || NAVY).font('Helvetica-Bold').text(text.toUpperCase());
  doc.moveDown(0.15);
  doc.rect(60, doc.y, doc.page.width - 120, 1).fill(color || NAVY);
  doc.moveDown(0.4);
}

function body(text) {
  doc.fontSize(9.5).fillColor('#111111').font('Helvetica').text(text, { lineGap: 3 });
  doc.moveDown(0.3);
}

function bullet(items, color) {
  items.forEach(function(item) {
    doc.fontSize(9).fillColor(color || GREY).font('Helvetica')
       .text('  -  ' + item, { lineGap: 2 });
  });
  doc.moveDown(0.3);
}

function numberedList(items) {
  items.forEach(function(item, i) {
    doc.fontSize(9).fillColor(GREY).font('Helvetica')
       .text((i + 1) + '.   ' + item, { lineGap: 2 });
  });
  doc.moveDown(0.3);
}

heading('The Instruction', GREEN);
body('Conduct a forensic evidence analysis of the attached YouTube video transcript and compare it against the documentary evidence, testimony, correspondence, legal records, government records, timelines, and source materials published throughout barrandodger.com.\n\nYour role is not to advocate for, defend, support, attack, or discredit any person, organisation, government agency, witness, complainant, or public official. Your sole function is evidentiary analysis.');

heading('Methodology Requirements', NAVY);
numberedList([
  'Analyse the YouTube transcript in its entirety.',
  'Extract every factual claim, allegation, assertion, observation, conclusion, timeline reference, event description, institutional action, policy reference, legal assertion, or documented outcome.',
  'Create a claim-by-claim matrix.',
  'For each claim: confirm whether documentary evidence exists; confirm whether corroborating evidence exists; confirm whether contradictory evidence exists; confirm whether evidence is insufficient; assign a confidence rating.',
  'Every conclusion must be linked to specific named documents identified by title, date, author, agency, source, exhibit number, archive location, URL, or other objectively verifiable identifier.',
  'No claim may be accepted merely because it is asserted.',
  'No claim may be rejected merely because it is controversial.',
  'Every conclusion must be capable of independent verification by an unrelated third party.',
]);

heading('Anti-Bias Requirements', RED);
body('The analysis must exclude:');
bullet([
  'Personal opinions', 'Emotional interpretations', 'Political beliefs',
  'Institutional loyalties', 'Government interests', 'Media narratives',
  'Professional reputations', 'Status of witnesses', 'Authority of public officials',
  'Legal assumptions', 'Organisational interests',
], RED);
body('The analysis must not assume that governments are truthful.\nThe analysis must not assume that complainants are truthful.\nThe analysis must not assume that courts are truthful.\nThe analysis must not assume that experts are truthful.\nThe analysis must not assume that journalists are truthful.\nThe analysis must not assume that artificial intelligence is truthful.\n\nEvery proposition must be tested against evidence.');

doc.addPage();
doc.rect(0, 0, doc.page.width, 20).fill(NAVY);
doc.fontSize(7).fillColor('#aabbdd').text('FORENSIC CORROBORATION ANALYSIS INSTRUCTION  |  barrandodger.com  |  ABN 78 833 496 164', 60, 6, { align: 'center' });
doc.moveDown(2);

heading('Evidentiary Classification', NAVY);
body('For every finding, classify evidence as one of the following:');
bullet([
  'Direct documentary evidence', 'Contemporaneous documentary evidence',
  'Independent corroboration', 'Circumstantial evidence',
  'Pattern evidence', 'Admissions against interest',
  'Institutional admissions', 'Official records',
  'Third-party records', 'Contradictory evidence', 'Missing evidence',
], NAVY);

heading('Corroboration Assessment', NAVY);
body('Determine whether the video content:');
bullet([
  'Corroborates existing website evidence.',
  'Partially corroborates existing website evidence.',
  'Contradicts existing website evidence.',
  'Introduces new evidence.',
  'Introduces new investigative leads.',
  'Repeats previously documented allegations.',
  'Demonstrates patterns consistent with previously documented conduct.',
]);

heading('Pattern Analysis', NAVY);
body('Identify whether the evidence demonstrates patterns including:');
bullet([
  'Retaliation', 'Administrative abuse', 'Procedural unfairness',
  'Suppression of complaints', 'Regulatory misconduct', 'Conflicts of interest',
  'Institutional self-protection', 'Adverse action following disclosures',
  'Whistleblower-related concerns', 'Denial of procedural rights',
]);
body('A pattern may only be identified where supported by multiple independently verifiable records.');

heading('Findings Classification', GREEN);
var findings = [
  { label: 'CONFIRMED', color: GREEN, desc: 'Claims supported by documentary evidence.' },
  { label: 'PARTIALLY CONFIRMED', color: '#b38000', desc: 'Claims supported in part but requiring additional evidence.' },
  { label: 'UNCONFIRMED', color: GREY, desc: 'Claims lacking sufficient evidence.' },
  { label: 'CONTRADICTED', color: RED, desc: 'Claims inconsistent with available evidence.' },
  { label: 'REQUIRES FURTHER INVESTIGATION', color: '#6633aa', desc: 'Claims which cannot presently be determined.' },
];
findings.forEach(function(f) {
  doc.fontSize(9).fillColor(f.color).font('Helvetica-Bold').text(f.label + '   ', { continued: true });
  doc.fontSize(9).fillColor(GREY).font('Helvetica').text(f.desc, { lineGap: 3 });
});
doc.moveDown(0.3);

heading('Final Assessment', NAVY);
body('Provide a final conclusion addressing:');
numberedList([
  'Whether the YouTube transcript materially aligns with the documentary record.',
  'Whether the transcript contains claims independently corroborated by named documents.',
  'Whether the transcript introduces evidence not previously documented.',
  'Whether the transcript strengthens, weakens, or has no effect upon the evidentiary value of the website archive.',
  'The overall evidentiary reliability rating of the transcript.',
]);

heading('Mandatory Transparency Statements', GREEN);
body('Every conclusion must be traceable to named evidence.');
doc.fontSize(9).fillColor(GREY).font('Helvetica-Bold').text('Where evidence is absent, state:  ', { continued: true });
doc.font('Helvetica-Oblique').fillColor('#111111').text('"No documentary evidence presently located."');
doc.fontSize(9).fillColor(GREY).font('Helvetica-Bold').text('Where evidence is conflicting, state:  ', { continued: true });
doc.font('Helvetica-Oblique').fillColor('#111111').text('"The evidence is contested."');
doc.fontSize(9).fillColor(GREY).font('Helvetica-Bold').text('Where certainty is impossible, state:  ', { continued: true });
doc.font('Helvetica-Oblique').fillColor('#111111').text('"No reliable conclusion can presently be reached."');
doc.moveDown(0.5);
body('Do not speculate.  Do not infer intent without evidence.  Do not assume guilt.  Do not assume innocence.\nReport only what the evidence demonstrates.');

doc.moveDown(0.8);
doc.rect(60, doc.y, doc.page.width - 120, 1).fill(NAVY);
doc.moveDown(0.5);
doc.fontSize(8).fillColor(NAVY).font('Helvetica-Bold')
   .text('Important note: No AI system is free from error. All findings must be traceable to primary source documents and independently verifiable by third parties regardless of whether analysis is performed by an AI, lawyer, journalist, investigator, court, or government agency. Transparency and evidence reproducibility are the only defensible standard.', { lineGap: 2 });

// Footer
var footerY = doc.page.height - 50;
doc.rect(0, footerY, doc.page.width, 50).fill(NAVY);
doc.fontSize(8).fillColor(GOLD)
   .text('(c) 2026 Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.', 60, footerY + 10, { align: 'center' });
doc.fontSize(7).fillColor('#aabbdd')
   .text('Shared freely in the public interest. Non-commercial reproduction permitted. All intellectual property rights remain with Dr. Richard William McLean (Barran Dodger).', 60, footerY + 26, { align: 'center' });

doc.end();
doc.on('finish', function() { console.log('done'); });
