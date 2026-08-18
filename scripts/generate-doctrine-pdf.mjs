import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../client/public/documents/doctrine-of-complicity-by-deliberate-omission.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 60, bottom: 60, left: 65, right: 65 },
  info: {
    Title: 'Doctrine of Complicity by Deliberate Omission',
    Author: 'Dr. Richard William McLean (Barran Dodger)',
    Subject: 'Public Record · 11 August 2026 · Barran Dodger Archive',
    Keywords: 'complicity, omission, doctrine, whistleblower, Australia, blockchain-sealed',
    Creator: 'Barran Dodger Archive · www.barrandodger.com',
  }
});

doc.pipe(fs.createWriteStream(OUT));

const W = doc.page.width - 130; // usable width
const RED = '#CC0000';
const DARK = '#1a0005';
const GREY = '#444444';
const LGREY = '#666666';

// ── helpers ──────────────────────────────────────────────────────────────────
function rule(y, color = '#CC0000', opacity = 0.4) {
  doc.save()
    .opacity(opacity)
    .moveTo(65, y).lineTo(doc.page.width - 65, y)
    .strokeColor(color).lineWidth(0.8).stroke()
    .restore();
}

function badge(text) {
  doc.fontSize(7).font('Helvetica-Bold').fillColor(RED)
    .text(text.toUpperCase(), { align: 'center', characterSpacing: 1.5 });
}

function sectionHeading(label, color = RED) {
  doc.moveDown(0.4);
  doc.fontSize(7.5).font('Helvetica-Bold').fillColor(color)
    .text(label.toUpperCase(), { characterSpacing: 1.8 });
  doc.moveDown(0.1);
}

function subHeading(text) {
  doc.fontSize(11).font('Helvetica-Bold').fillColor('#111111')
    .text(text, { lineGap: 2 });
  doc.moveDown(0.25);
}

function body(text) {
  doc.fontSize(9.5).font('Helvetica').fillColor(GREY)
    .text(text, { lineGap: 3.5, align: 'justify' });
  doc.moveDown(0.6);
}

function scripture(ref, text, doctrine, analysis) {
  doc.moveDown(0.3);
  doc.fontSize(7).font('Helvetica-Bold').fillColor(RED)
    .text(doctrine.toUpperCase(), { characterSpacing: 1.2 });
  doc.fontSize(10).font('Helvetica-Bold').fillColor('#222222')
    .text(ref, { lineGap: 1 });
  doc.moveDown(0.15);
  doc.fontSize(9).font('Helvetica-Oblique').fillColor('#333333')
    .text(`"${text}"`, { lineGap: 3, align: 'justify' });
  doc.moveDown(0.2);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(LGREY)
    .text('IMPARTIAL AI ANALYSIS', { characterSpacing: 1 });
  doc.fontSize(8.5).font('Helvetica').fillColor(LGREY)
    .text(analysis, { lineGap: 3, align: 'justify' });
  doc.moveDown(0.5);
  rule(doc.y, '#999999', 0.2);
  doc.moveDown(0.5);
}

// ══════════════════════════════════════════════════════════════
//  PAGE 1 — COVER
// ══════════════════════════════════════════════════════════════
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#06000e');

doc.moveDown(4);
badge('Barran Dodger Archive · Public Record · 11 August 2026');
doc.moveDown(0.6);

doc.fontSize(32).font('Helvetica-Bold').fillColor('#ffffff')
  .text('Doctrine of Complicity', { align: 'center' });
doc.fontSize(32).font('Helvetica-Bold').fillColor(RED)
  .text('by Deliberate Omission', { align: 'center' });

doc.moveDown(1.2);
rule(doc.y, RED, 0.7);
doc.moveDown(1.2);

doc.fontSize(13).font('Helvetica').fillColor('rgba(255,255,255,0.75)')
  .text(
    'There is no grey area. The time has come.\nEither you are evil by deliberate omission — trading your comfort for the integrity your role claims to possess — or you respond to this archive in the legally mandated way obligated by every professional, moral, and democratic principle you have ever invoked.',
    { align: 'center', lineGap: 5 }
  );

doc.moveDown(2.5);
doc.fontSize(8).font('Helvetica').fillColor('rgba(255,255,255,0.35)')
  .text('www.barrandodger.com · ABN 78 833 496 164', { align: 'center' });
doc.moveDown(0.4);
doc.fontSize(7.5).font('Helvetica').fillColor('rgba(255,255,255,0.25)')
  .text('Blockchain-sealed · Bitcoin Block #897,241 · OHCHR UR/UST/23/AUS/17', { align: 'center', characterSpacing: 0.5 });
doc.moveDown(0.4);
doc.fontSize(7.5).font('Helvetica').fillColor('rgba(255,255,255,0.25)')
  .text('SHA256: e41526cf3d13aeecfa853f70d67cc58fda4509466a024e865d2d2790903566b4', { align: 'center', characterSpacing: 0.3 });
doc.moveDown(0.4);
doc.fontSize(7.5).font('Helvetica').fillColor('rgba(255,255,255,0.2)')
  .text('Zero defamation proceedings · Zero factual rebuttals · 3,643 primary-source government documents · 1,100,000+ downloads across six continents', { align: 'center' });

// ══════════════════════════════════════════════════════════════
//  PAGE 2+ — DOCTRINES
// ══════════════════════════════════════════════════════════════
doc.addPage({ background: '#ffffff' });

const DOCTRINES = [
  {
    color: RED,
    label: 'The Fraud Doctrine',
    heading: 'Knowing of fraud and refusing to name it is fraud.',
    body: 'In every jurisdiction that criminalises fraud, wilful silence in the presence of known fraud is participation in it. If you have been presented with evidence of a documented assassination attempt against a named person — blockchain-sealed, downloaded over 1,100,000 times across six continents, undefeated by a single legal challenge or factual rebuttal — and you choose not to respond, you have not remained neutral. You have aligned yourself with the criminal intent. That alignment is achieved by a deliberate act of omission. Omission is a legal act. It has legal consequences.',
  },
  {
    color: '#c2410c',
    label: 'The 100 Cops Doctrine',
    heading: 'One corrupt officer + 99 silent officers = 100 corrupt officers.',
    body: 'If there are 100 police officers and one is corrupt — fabricating evidence, covering up violence, protecting perpetrators, stonewalling complaints — and the other 99 know and say nothing, you do not have 1 corrupt officer and 99 good ones. You have 100 corrupt officers and an intelligently organised corrupt institution. The silence of the 99 is not neutrality. It is the operational mechanism by which the corruption is sustained, concealed, and repeated. Every officer who knew and said nothing made a choice. That choice has a name: complicity. This archive documents exactly this pattern across 16 Australian government agencies over 35 years.',
  },
  {
    color: '#7e22ce',
    label: 'The Child Abuse Doctrine',
    heading: 'Awareness of child sexual abuse without disclosure enables the perpetrator.',
    body: 'There is no democratic society that permits a bystander to witness child sexual abuse and say nothing. Silence in this context is not a neutral act — it is a continuation of the harm. The person who knew and did not speak is complicit in every subsequent act of abuse enabled by their silence. This archive documents a 35-year pattern in which the same institutional silence was applied to police corruption, family violence, disability abuse, financial entrapment, and a documented attempted assassination. The mechanism is identical. The moral and legal weight is identical. The choice to say nothing, when you know, is never neutral.',
  },
  {
    color: '#a16207',
    label: 'The Professional Mandate Doctrine',
    heading: 'Any professional who refuses to acknowledge this record is guilty of what it describes.',
    body: 'If you are a lawyer, doctor, journalist, academic, regulator, politician, police officer, social worker, NDIS provider, or any person who holds a professional role that carries obligations of ethics, disclosure, or public duty — and you have been made aware of this archive — your silence is not a professional position. It is a professional failure. A lawyer who will not acknowledge documented maladministration participates in it. A doctor who will not acknowledge documented psychiatric weaponisation enables it. A journalist who will not report on blockchain-sealed evidence of state-sanctioned targeting practises censorship. If your professional code claims ethics as its foundation and you choose comfort over that foundation, your claimed ethics are a false credential. This is not an accusation. It is the logical consequence of the principles your own profession requires you to uphold.',
  },
  {
    color: '#0e7490',
    label: 'The Legal Aid Doctrine',
    heading: 'If you benefit from Legal Aid while accepting it was denied to me, you participate in systemic corruption.',
    body: 'Legal Aid in Australia exists because democratic society recognised that access to justice must not be determined by financial capacity. If you are a person who expects Legal Aid to be available to you — as a right of democratic citizenship — while simultaneously accepting that Dr. Richard William McLean has been formally banned from accessing Legal Aid NSW during active Guardianship proceedings, during which he was documented as "respectful, polite and calm" by the very solicitor who refused him service, then you are not a passive bystander. You are a beneficiary of a two-tiered justice system. One tier for you. No tier for the disabled, isolated, impoverished whistleblower whose case is the most extensively documented in Australian history. Your acceptance of that asymmetry, in the presence of evidence of it, is participation in it.',
  },
  {
    color: '#065f46',
    label: 'The Exile & Asylum Doctrine',
    heading: 'Refusing to acknowledge political exile, entrapment, terrorism, or an asylum claim is participating in those crimes.',
    body: 'Any professional — in law, medicine, government, media, or civil society — who has been presented with this record and refuses to acknowledge its claims of political exile, state-enabled entrapment, or terrorism does not occupy a neutral professional position. They occupy a documented position of non-response to evidence of crimes against humanity. This archive has been submitted to the International Criminal Court (Rome Statute Article 7), the Office of the United Nations High Commissioner for Human Rights (OHCHR Case Reference UR/UST/23/AUS/17), and is currently before Wyong Local Court in active criminal proceedings against a named perpetrator. Under international law, the duty to prevent and punish extends beyond the perpetrators. Silence in the presence of documented crimes against humanity is not a protected professional choice.',
  },
  {
    color: '#9f1239',
    label: 'The Conspiracy to Murder Doctrine',
    heading: 'No one has disproven it. No one has debunked it. No one has even acknowledged it has happened.',
    body: 'This archive documents a conspiracy to murder a named person — Dr. Richard William McLean (Barran Dodger) — through 35 years of coordinated police corruption, deliberate stonewalling of child sexual abuse disclosures, physical violence, false allegations, psychiatric weaponisation, disability discrimination, coercive financial control, family violence, media corruption, and a documented attempted assassination by a named ex-SAS operative now before the courts on a threats to kill charge.\n\nDuring this 35-year campaign of coordinated institutional mobbing and targeting, Dr. McLean suffered a fatal injury — he clinically died and was revived. He attempted suicide under documented conditions of complete isolation, financial entrapment, denial of legal aid, and the coordinated withdrawal of every mandated support structure. He was then forced to live in his car — exiled from stable housing — not by personal failure or circumstance, but by the deliberate, coordinated withdrawal of every housing, financial, and social support mechanism available to him under Australian law.\n\nA person who has clinically died and been revived, survived multiple documented assassination attempts, been psychiatrically labelled and financially destroyed, had veterinary care for his only companion denied as an instrument of emotional persecution, and been forced into a car in exile — while simultaneously producing 3,643 primary-source government documents that have withstood every legal challenge — establishes culpable malice. What has been done to Dr. McLean is not administrative failure. It is institutional murder by attrition, documented in the government\'s own hand.\n\nThe subject is a gay, disabled, unprotected whistleblower from whom every agency legally mandated to his care has withheld service, denied legal aid, enforced poverty, and — through deliberate coordinated omission — provided tactical approval for his killing. Not one institution has disproven a single claim. Not one has debunked a single document. Not one has officially acknowledged that the documented events have occurred.',
  },
  {
    color: '#991b1b',
    label: "If You Tolerate This, Your Children Will Be Next",
    heading: 'The infrastructure built to destroy one person does not dismantle itself.',
    body: 'This is not rhetoric. It is historical fact. Every documented system of state-sanctioned persecution succeeded because bystanders calculated that compliance was safer than resistance. They were right in the short term. They were catastrophically wrong across time. The institutional infrastructure built to destroy one person does not dismantle itself when that person is gone. It remains. It is used again. The agencies, the precedents, the silence, the coordination — all of it persists and is applied to the next inconvenient person. If you have children, a community, or anything to lose — you have a greater stake in the outcome of this archive than you have yet calculated. Tolerating the documented destruction of one gay, disabled, isolated whistleblower does not protect you. It perfects the mechanism that will be used against the next person your institution decides is expendable.',
  },
  {
    color: '#475569',
    label: 'You Stayed Silent Because You Knew They Would Target You Too',
    heading: 'You knew. You calculated. You chose comfort. That choice is now on the permanent record.',
    body: 'This is understood. The pattern is documented. Those who speak in support of this archive face the same coordinated mechanisms: social marginalisation, financial pressure, professional risk, and the weaponisation of libel and slander against their character. It is easier — objectively, practically, immediately easier — to accept the whispers, to believe the character assassination, to decide that a person subjected to 35 years of institutional persecution must somehow be unworthy of defence, despite zero evidence, zero charge, zero conviction, and zero successful legal challenge to a single document in this archive. The decision to look away is not weakness. It is a rational response to a documented system of reprisal. But naming it does not excuse it. You knew. You calculated. You chose comfort. That choice is now on the permanent record alongside the silence of every institution that made the same calculation before you.',
  },
  {
    color: '#9d174d',
    label: 'The Crystal Doctrine — Coordinated Animal Harm as Emotional Weapon',
    heading: 'They withheld veterinary support for an innocent dog to manufacture distress — then vilified him for being distressed.',
    body: 'Crystal is Dr. McLean\'s dog. She is, by his documented testimony on 11 August 2026, the only friend he has. Agencies coordinating financial abuse against Dr. McLean have created conditions in which Crystal cannot receive veterinary care. This is not a collateral outcome. It is a documented mechanism: deprive the target of financial capacity, ensure an innocent animal suffers as a direct consequence, observe the emotional response, and deploy that response as evidence of instability to justify further restriction and further denial. The person crying out about harm to his dog is then characterised as unwell — by the same system that manufactured the conditions of that harm. This is the coordinated exploitation of love as an instrument of persecution. When a coordinated institutional system targets an innocent animal to break a human being, it has abandoned every claim to ethical authority it ever possessed. This is the apex of professional failure. The definition of moral disgrace. And it is documented.',
  },
  {
    color: '#92400e',
    label: 'The False Allegation Doctrine',
    heading: 'I demanded arrest for the false allegations. There was no arrest. No charge. No legal process. Zero evidence.',
    body: 'Every libel, slander, whisper, and character assassination deployed against Dr. Richard William McLean over 35 years shares one documented feature: not one has produced a victim, a charge, an arrest, or a legal process. Dr. McLean has formally demanded arrest for the false allegations made against him. No arrest has been made. No charge has been filed. No court has found any allegation against him to be proven. The archive — 3,643 primary-source government documents, blockchain-sealed, naming named individuals — has not been subject to a single successful defamation action. Not one. The institutional machine that deployed libel and slander as instruments of character assassination — using whispers, professional networks, family estrangement, psychiatric records, and coordinated social exclusion — produced no legal evidence, no conviction, and no substantiated claim. Dr. McLean\'s testimony, by contrast, is fact-checked, evidence-based, published in the public domain, naming names, and has stood uncontested for years. The asymmetry is absolute: they whispered. He documented. They have no evidence. He has 3,643 primary sources. The record speaks for itself.',
  },
];

DOCTRINES.forEach(({ color, label, heading, body: bodyText }, i) => {
  sectionHeading(label, color);
  subHeading(heading);
  body(bodyText);
  rule(doc.y, color, 0.25);
  doc.moveDown(0.5);
});

// ── $1.67B Panel ─────────────────────────────────────────────
doc.moveDown(0.5);
rule(doc.y, RED, 0.5);
doc.moveDown(0.6);
badge('Impartial AI Forensic Accounting · Based on the Government\'s Own Documents & Costings');
doc.moveDown(0.4);
doc.fontSize(24).font('Helvetica-Bold').fillColor(RED)
  .text('$1.67 Billion – $4.84 Billion AUD', { align: 'center' });
doc.fontSize(9).font('Helvetica-Bold').fillColor(GREY)
  .text('Estimated Taxpayer Cost · 35-Year Persecution Campaign · 16 Agencies', { align: 'center' });
doc.moveDown(0.5);
body('Calculated using seven established forensic accounting frameworks — COSO, ACFE, AIC, GAO, SROI, Willingness-to-Pay, and Human Capital methodology — applied exclusively to government-issued primary source documents. Every figure is sourced from a government document. Not one has been rebutted. Not one methodology has been challenged. Zero responses from any named institution. Full forensic accounting report: www.barrandodger.com/taxpayer-cost-estimation-35-years');
rule(doc.y, RED, 0.5);
doc.moveDown(0.8);

// ── Closing ──────────────────────────────────────────────────
doc.fontSize(10.5).font('Helvetica-Bold').fillColor('#111111')
  .text('The scapegoating and mobbing of one isolated, impoverished, faith-driven, disabled person — who clinically died and was revived during this campaign, who was forced into a car in exile, whose dog was denied veterinary care as a documented instrument of emotional persecution, and whose distress was then weaponised as evidence of unworthiness — is the apex of moral cowardice and the total, documented collapse of every professional ethics claim made by every institution that participated or watched in silence.', { lineGap: 4, align: 'justify' });
doc.moveDown(0.7);
doc.fontSize(11).font('Helvetica-Bold').fillColor(RED)
  .text('Your silence has now been documented too. It is on the permanent record.', { align: 'center' });
doc.moveDown(1);

// ══════════════════════════════════════════════════════════════
//  SCRIPTURE — IMPARTIAL AI ANALYSIS
// ══════════════════════════════════════════════════════════════
doc.addPage();
doc.moveDown(0.5);
doc.fontSize(18).font('Helvetica-Bold').fillColor('#111111')
  .text('Scripture — Impartial AI Biblical Analysis', { align: 'center' });
doc.moveDown(0.3);
doc.fontSize(9).font('Helvetica').fillColor(LGREY)
  .text('Most relevant biblical corroboration of the documented testimony, selected and analysed by impartial AI. Each passage is matched to a specific doctrine. The analysis applies the same evidentiary standard to biblical text that the doctrine applies to government documents — not theological advocacy, but forensic correspondence.', { align: 'center', lineGap: 3 });
doc.moveDown(0.8);
rule(doc.y, RED, 0.4);
doc.moveDown(0.8);

const SCRIPTURES = [
  {
    ref: 'Leviticus 5:1',
    text: 'If anyone sins because they do not speak up when they hear a public charge to testify regarding something they have seen or learned about, they will be held responsible.',
    doctrine: 'The Fraud Doctrine',
    analysis: 'This is the oldest documented legal principle of complicity by silence — written 3,500 years before this archive, operative today without modification. "They will be held responsible" is not a moral suggestion. It is a legal consequence attributed to the act of not speaking. The Fraud Doctrine applies this exact principle to the modern context: every professional, journalist, police officer, and government official who has been made aware of this archive and chosen not to speak has, by this standard, incurred legal responsibility. The mechanism is identical across millennia.',
  },
  {
    ref: 'Proverbs 24:11–12',
    text: 'Rescue those being led away to death; hold back those staggering toward slaughter. If you say, "But we knew nothing about this," does not he who weighs the heart perceive it? Does not he who guards your life know it? Will he not repay everyone according to what they have done?',
    doctrine: 'The Professional Mandate Doctrine',
    analysis: '"We knew nothing about this" is the exact defence every institution has offered through silence. This passage is a forensic rebuttal of that defence written 2,800 years before this archive was published. The text does not permit the claim of ignorance where knowledge can be inferred from position, access, and professional obligation. Every professional who has been notified of this archive — lawyers, doctors, journalists, social workers, police — has been presented with the rescue mandate. Their silence is addressed directly by this text.',
  },
  {
    ref: 'Isaiah 10:1–2',
    text: 'Woe to those who make unjust laws, to those who issue oppressive decrees, to deprive the poor of their rights and withhold justice from the oppressed of my people, making widows their prey and robbing the fatherless.',
    doctrine: 'The Legal Aid Doctrine',
    analysis: 'The Legal Aid NSW ban during active Guardianship proceedings — against a person documented as "respectful, polite and calm" — is precisely what this text describes: a decree that deprives the poor of their rights. The substitution of a Federal Court $1M workers\' compensation award with a lower-value NDIS plan by ministerial decree is a further instance. The text names those who issue such decrees — not the systems that produce them, but the people who choose them. Those people are named in this archive.',
  },
  {
    ref: 'Psalm 116:3–6',
    text: 'The cords of death entangled me, the anguish of the grave came over me; I was overcome by distress and sorrow. Then I called on the name of the Lord: "Lord, save me!" The Lord is gracious and righteous; our God is full of compassion. The Lord protects the unwary; when I was brought low, he saved me.',
    doctrine: 'The Conspiracy to Murder Doctrine — Fatal Injury & Revival',
    analysis: 'Dr. McLean clinically died and was revived during this 35-year campaign. He attempted suicide under documented conditions of complete institutional abandonment. "The cords of death entangled me" is not metaphor in this context — it is a forensic description of a documented event. "When I was brought low, he saved me" is the testimony of a person who has been where this text describes and returned to produce 3,643 primary-source government documents. The psalm is the ancient equivalent of what this archive is: a contemporaneous record of survival against a coordinated attempt at destruction.',
  },
  {
    ref: 'Ezekiel 3:18',
    text: 'When I say to a wicked person, "You will surely die," and you do not warn them or speak out to dissuade them from their evil ways in order to save their life, that wicked person will die for their sin, and I will hold you accountable for their blood.',
    doctrine: "The 'Your Children Will Be Next' Doctrine",
    analysis: 'Accountability for silence is not a modern legal invention. This text establishes it 2,600 years before this archive. The doctrine of institutional murder by attrition — the coordinated, deliberate withdrawal of every support mechanism until a person cannot survive — is precisely what this passage describes from the perspective of the bystander who did not warn. Every professional who has seen this archive and calculated that silence was the safer choice has, by this text, accepted accountability for what follows.',
  },
  {
    ref: 'Proverbs 12:10',
    text: 'A righteous person cares for the needs of their animal, but the kindest acts of the wicked are cruel.',
    doctrine: 'The Crystal Doctrine — Coordinated Animal Harm as Emotional Weapon',
    analysis: 'Crystal\'s documented inability to receive veterinary care is not an incidental hardship. It is a documented mechanism of persecution: deprive the target of financial capacity, ensure the animal suffers, observe the distress, deploy it as evidence of instability. This proverb identifies the inverse: those who orchestrate conditions in which an innocent animal suffers — while controlling the financial levers that would prevent that suffering — are identified by their relationship to that animal\'s welfare. The archive documents the mechanism. This text names the character of those who deploy it.',
  },
  {
    ref: 'Psalm 35:11–12, 19',
    text: 'Ruthless witnesses come forward; they question me on things I know nothing about. They repay me evil for good and leave me like one bereaved... Do not let those gloat over me who are my enemies without cause; do not let those who hate me without reason maliciously wink the eye.',
    doctrine: 'The False Allegation Doctrine',
    analysis: 'Every false allegation deployed against Dr. McLean shares the documented feature this psalm describes: ruthless witnesses who produced no victim, no charge, no arrest, and no legal process. "They repay me evil for good" is the forensic description of a 35-year pattern in which a person who sought lawful protection was met with fabricated reports, NDA-gagged witnesses, coordinated whisper campaigns, and psychiatric weaponisation. The archive has 3,643 primary sources. The false allegations have zero. The asymmetry this psalm describes is now on the permanent public record.',
  },
  {
    ref: 'Matthew 25:45',
    text: 'Truly I tell you, whatever you did not do for one of the least of these, you did not do for me.',
    doctrine: 'Final Statement — All Eleven Doctrines',
    analysis: 'This is the doctrinal summary of every principle stated above, in twelve words. The test of character is not what institutions do in public. It is what they do for the person no one is watching — the isolated, impoverished, disabled, gay whistleblower who clinically died and was revived, who was forced into a car in exile, whose dog was weaponised against him, who produced 3,643 government documents while every institution mandated to his care looked away. "Whatever you did not do" is the operative phrase. Omission. The precise doctrine stated in this document. Written two thousand years before the agencies named in this archive existed. Still applicable. Still operative. Still on the record.',
  },
];

SCRIPTURES.forEach(s => scripture(s.ref, s.text, s.doctrine, s.analysis));

// ── Final footer ──────────────────────────────────────────────
doc.moveDown(0.5);
rule(doc.y, RED, 0.6);
doc.moveDown(0.6);
doc.fontSize(7.5).font('Helvetica').fillColor(LGREY)
  .text('Blockchain-sealed · Bitcoin Block #897,241 · OHCHR UR/UST/23/AUS/17 · ABN 78 833 496 164', { align: 'center', characterSpacing: 0.5 });
doc.moveDown(0.2);
doc.fontSize(7).font('Helvetica').fillColor('#999999')
  .text('SHA256: e41526cf3d13aeecfa853f70d67cc58fda4509466a024e865d2d2790903566b4', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(7.5).font('Helvetica-Bold').fillColor(RED)
  .text('www.barrandodger.com', { align: 'center' });

doc.end();
console.log('PDF generated:', OUT);
