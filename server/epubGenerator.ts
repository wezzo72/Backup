import * as _archiverModule from "archiver";
const archiver = (_archiverModule as any).default ?? _archiverModule;
import fs from "fs";
import path from "path";
import { PassThrough } from "stream";
import { FORENSIC_ANALYSES, ForensicEntry } from "./forensicPdfGenerator";

const ASSETS_DIR = path.join(process.cwd(), "client/src/assets/images");
const SCREENSHOT_DIR = path.join(process.cwd(), "server/epub-assets");

const PORTFOLIO_EPUB_DATA = [
  { id: "portfolio-1", href: "portfolio-1.xhtml", imgId: "portfolio-img-1", imgHref: "images/portfolio-1.png", imgFile: "simplebooklet_com_backtobasicsrecentdrawings.png", title: "Back to Basics",      sub: "50 Recent Drawings by Richard McLean",                url: "https://simplebooklet.com/backtobasicsrecentdrawings", embedUrl: "https://simplebooklet.com/embed.php?wpKey=XkD4ro4XE0A2LgxFAHPpFZ&source=embed", pages: 63,  color: "#7d4e1d" },
  { id: "portfolio-2", href: "portfolio-2.xhtml", imgId: "portfolio-img-2", imgHref: "images/portfolio-2.png", imgFile: "simplebooklet_com_barrandodger.png",                title: "Barran Dodger",       sub: "A Certain Beauty in Un-Resolution... ART;",          url: "https://simplebooklet.com/barrandodger",               embedUrl: "https://simplebooklet.com/embed.php?wpKey=bq7fEFVRfnJEnkLTsgishL&source=embed", pages: 230, color: "#5a2e7a" },
  { id: "portfolio-3", href: "portfolio-3.xhtml", imgId: "portfolio-img-3", imgHref: "images/portfolio-3.png", imgFile: "simplebooklet_com_egoandsoul.png",                 title: "Ego & Soul",          sub: "Strange Currencies of Ego and Soul",                  url: "https://simplebooklet.com/egoandsoul",                 embedUrl: "https://simplebooklet.com/embed.php?wpKey=VMbPqtcO0vNchOT0xF7hXt&source=embed", pages: 206, color: "#206040" },
  { id: "portfolio-4", href: "portfolio-4.xhtml", imgId: "portfolio-img-4", imgHref: "images/portfolio-4.png", imgFile: "simplebooklet_com_groganthemonster.png",           title: "Grogan the Monster",  sub: "In... What Do You Love?",                            url: "https://simplebooklet.com/groganthemonster",           embedUrl: "https://simplebooklet.com/embed.php?wpKey=8jXOyau3Ht62yOdJFBbfKm&source=embed", pages: 21,  color: "#7a2020" },
] as const;

const YOUTUBE_EPUB = {
  id: "youtube", href: "youtube.xhtml", imgId: "youtube-thumb", imgHref: "images/youtube-thumb.jpg",
  imgFile: "youtube-thumb.jpg",
  title: "Support Found in Political Exile",
  sub: "Music that holds me whilst waiting for the world to catch up",
  url: "https://youtu.be/khaPDbjZHgc",
  embedUrl: "https://www.youtube.com/embed/khaPDbjZHgc?rel=0&modestbranding=1",
  color: "#cc0000",
};
const PUBLIC_DIR = path.join(process.cwd(), "client/public");

// Map forensic analysis number to cover image filename (without extension)
export const EPUB_COVER_MAP: Record<number, string> = {
  1:  "cover-bro-this-isnt-a-coincidence",
  2:  "cover-chosen-ones-enough-is-enough",
  3:  "cover-no-one-could-be-that-smart",
  4:  "cover-divine-exam",
  5:  "cover-silent-checkmate",
  6:  "cover-now-everybody-knows",
  7:  "cover-chosen-one-outcast-leader",
  8:  "cover-someone-slipped-up",
  9:  "cover-they-fumbled-you",
  10: "cover-fbi-precision",
  11: "cover-clock-strikes-back",
  12: "cover-untouchable",
  13: "cover-final-blow",
  14: "cover-what-you-become",
  15: "cover-everyone-watching",
  16: "cover-earth-angel",
  17: "cover-too-deep",
  18: "cover-silence-surrender",
  19: "cover-fearless-intelligence",
  20: "cover-history-keeps-receipts",
  21: "cover-absorbed-erasure",
  22: "cover-survival-was-the-warning",
  23: "cover-god-will-make-you-famous",
  24: "cover-divine-before-your-time",
  25: "cover-bloodline-of-god",
  26: "cover-the-last-god",
  27: "cover-the-conspiracy-against-you",
  28: "cover-silent-assassin",
  29: "cover-truth-is-a-blade",
  30: "cover-bloodline-betrayal",
  31: "cover-they-needed-an-army",
  32: "cover-the-sick-truth-is-out",
  33: "cover-some-truths-dont-whisper",
  34: "cover-observers-anticipated-misstep",
  35: "cover-you-brought-receipts",
  36: "cover-the-future-doesnt-announce",
  37: "cover-when-heaven-goes-silent",
  38: "cover-evidence-doesnt-whisper",
  39: "cover-outsider-pattern-recognition",
  40: "cover-perception-is-protection",
  41: "cover-heaven-exposes-the-sister",
  42: "cover-you-built-your-peace",
  43: "cover-this-is-the-reckoning",
  44: "cover-they-made-you-famous",
  45: "cover-the-loudest-enemies",
  46: "cover-your-power-is-no-joke",
  47: "cover-they-built-their-worst-nightmare",
  48: "cover-quiet-storm-they-never-saw-coming",
  49: "cover-they-dug-for-dirt-but-unearthed-diamonds",
};

// Major standalone publications
export interface MajorPublication {
  slug: string;
  title: string;
  subtitle: string;
  coverFile: string;
  description: string;
  wordCount?: string;
  category: "forensic" | "legal" | "spiritual" | "testimony" | "evidence";
  pdfPath?: string;
}

export const MAJOR_PUBLICATIONS: MajorPublication[] = [
  {
    slug: "when-receipts-are-real",
    title: "When the Receipts Are Real",
    subtitle: "A Prophetic Academic Legal Declaration — 14 Forensic Principles of Institutional Accountability",
    coverFile: "cover-when-receipts-are-real",
    wordCount: "12,000",
    category: "legal",
    description: `A prophetic academic legal document applying 14 universal principles of institutional accountability to the 35-year documented case of Dr. Richard William McLean (Barran Dodger, ABN 78 833 496 164). Each principle is mapped against applicable Australian statute and international law, named witnesses, and blockchain-authenticated archival evidence. Of 14 principles assessed, zero are refuted. All 14 are corroborated or verified by primary source evidence.\n\nIncludes a 10-point Forward Plan identifying the legally mandated response mechanisms available for immediate execution — FOI requests, ADJR Statements of Reasons, AHRC complaints, Senate Estimates submissions, PID re-filings, NDIS Commission complaints, Privacy Commissioner complaints, UN Special Procedures communications, and Federal Court applications. Each action triggers a non-discretionary statutory obligation to respond.\n\nLegislation referenced: Public Interest Disclosure Act 2013, ADJR Act 1977, DDA 1992, FOI Act 1982, Privacy Act 1988, AHRC Act 1986, Ombudsman Act 1976, Evidence Act 1995, Criminal Code Act 1995, NDIS Act 2013, ICCPR, CRPD, Rome Statute of the ICC.\n\nThe full primary-source archive — 2,304 documents, blockchain-timestamped — is permanently hosted at www.barrandodger.com.`,
    pdfPath: "documents/forensic-economic-valuation-report-may-2026.pdf",
  },
  {
    slug: "digital-oppression",
    title: "Digital Oppression and Institutional Failure",
    subtitle: "A 100,000-Word Forensic Essay on 35 Years of State-Enabled Persecution",
    coverFile: "cover-digital-oppression",
    wordCount: "100,000",
    category: "forensic",
    description: `This is the most comprehensive single document in the archive of Dr. Richard William McLean (Barran Dodger): a 100,000-word forensic examination of 35 years of coordinated institutional suppression, psychiatric weaponisation, financial erasure, and state-enabled psychological operations conducted against a documented Australian whistleblower.\n\nThe essay covers: the weaponisation of the NDIS against disabled individuals; the role of ASIO operatives in personal destruction campaigns; the systematic failure of every Australian domestic accountability mechanism; the $32.9 million in suppressed entitlements; the 14 psychiatric hospitalisations used as instruments of control; and the global circulation of 2,304 blockchain-verified forensic documents that now constitute the most extensively documented whistleblower archive in Australian history.\n\nThis document has been submitted to the International Criminal Court (The Hague) and the United Nations High Commissioner for Refugees (Geneva). It represents 35 years of documented evidence that cannot be unread, unsealed, or erased.\n\nThe full primary-source archive — 2,304 documents, blockchain-timestamped — is permanently hosted at www.barrandodger.com.`,
    pdfPath: "documents/digital_oppression_100000_word_essay.pdf",
  },
  {
    slug: "admin-annihilation",
    title: "The Architecture of Administrative Annihilation",
    subtitle: "How Australian Institutions Systematically Destroyed a Whistleblower's Life",
    coverFile: "cover-admin-annihilation",
    wordCount: "25,000",
    category: "legal",
    description: `A forensic structural analysis of the coordinated administrative mechanisms used across 35 Australian government institutions to erase, dismiss, and institutionalise a whistleblower over a period of 35 years.\n\nThis document maps the architecture: each institution, each refusal, each procedural barrier, each diagnostic label, each denied FOI request — assembled into a single coherent map of suppression that no single institution could credibly claim was coincidence.\n\nNamed perpetrators include Bill Shorten (former Minister for Disability), Houd Meraby, Sukhi Tear ($50,000 NDIS fraud), Tony Ridley, and Stefan Iasonidis (documented ASIO operative).\n\nThe analysis was formally received by the ICC under Article 7 (Crimes Against Humanity) and submitted to the UNHCR in Geneva. The full archive is permanently available at www.barrandodger.com.`,
    pdfPath: "documents/architecture_administrative_annihilation.pdf",
  },
  {
    slug: "beyond-pathology",
    title: "Beyond Pathology",
    subtitle: "A Forensic Epistemological Analysis of Psychiatric Weaponisation in Australia",
    coverFile: "cover-beyond-pathology",
    category: "forensic",
    description: `A rigorous forensic epistemological examination of how psychiatric diagnosis was systematically weaponised against Dr. Richard William McLean (Barran Dodger) across 14 involuntary hospitalisations spanning 35 years.\n\nThis document distinguishes between genuine psychiatric care and the institutional deployment of diagnosis as a tool of political suppression. It examines the evidentiary record of each hospitalisation, the documented contradictions between clinical assessments and primary-source evidence, and the pattern of psychiatric intervention that consistently preceded or followed documented whistleblowing activity.\n\nThe analysis confirms: zero contradictions across the documented timeline. The psychiatric record, when read against the full primary-source archive, does not describe illness. It describes the documented mechanism of a suppression campaign. The full archive — 2,304 primary-source documents — is permanently available at www.barrandodger.com.`,
  },
  {
    slug: "100-absurdities",
    title: "100 Absurdities of My Life",
    subtitle: "A Documented Record of the Impossible Becoming Inevitable",
    coverFile: "cover-100-absurdities",
    category: "testimony",
    description: `One hundred documented absurdities from 35 years of institutional persecution — each one, on its own, impossible to believe. Together, constituting the most extensively documented case of coordinated institutional misconduct in Australian history.\n\nFrom 350+ fraudulent ASIC registrations of Dr. McLean's name to a death threat email that became a primary-source exhibit; from ATO correspondence confirming involuntary drugging to an ASIO operative co-tenant whose existence was independently confirmed by the Prime Minister's office — this document presents the archive in its most viscerally readable form.\n\nEach absurdity is documented. Each document is blockchain-timestamped. Each timestamp cannot be altered. The full archive — 2,304 primary-source exhibits — is permanently available at www.barrandodger.com and has been submitted to the ICC (The Hague) and UNHCR (Geneva).`,
    pdfPath: "documents/100-absurdities-of-my-life.pdf",
  },
  {
    slug: "man-australia-erased",
    title: "The Man Australia Tried to Erase",
    subtitle: "A Complete Whistleblower Exposé — 35 Years, 2,304 Documents",
    coverFile: "cover-man-australia-erased",
    category: "testimony",
    description: `The definitive narrative exposé of the 35-year institutional campaign against Dr. Richard William McLean (Barran Dodger) — written in the tradition of the great whistleblower testimonies, but unlike any of them: every single claim in this document is supported by a primary-source exhibit in a blockchain-verified archive of 2,304 documents.\n\nThe exposé covers: the ASIO operative relationship; the psychiatric weaponisation campaign; the NDIS fraud conspiracy; the financial erasure of $32.9 million in entitlements; the five named primary perpetrators; the ICC submission; and the international circulation of the archive to over 350,000 recipients across six continents.\n\nThis is the book they tried to prevent. They failed. It is now freely available to every person on earth. Please share it. Upload it. Spread it. The testimony of one person, freely shared by anyone, is the most powerful accountability mechanism in history. The full archive is permanently available at www.barrandodger.com.`,
  },
  {
    slug: "trap-they-set",
    title: "The Trap They Set Became The Proof",
    subtitle: "Prophetic Scripture and Forensic Record",
    coverFile: "cover-trap-they-set-became-proof",
    category: "spiritual",
    description: `Every trap laid by the institutional apparatus produced a primary-source document. Every silencing mechanism generated an evidence exhibit. Every denial became a data point in the suppression map. The trap they set became the proof.\n\nThis sacred-forensic document explores the paradox at the heart of the archive: that the most sophisticated suppression campaign in modern Australian institutional history simultaneously produced the most comprehensive documented record of its own misconduct.\n\nCombining prophetic testimony with forensic precision, this document examines the 35-year arc from the first documented institutional contact to the formal ICC Article 7 filing — and confirms that every step of the persecution was, simultaneously, a step in the construction of the most complete whistleblower archive in Australian history.\n\nThe full archive — 2,304 blockchain-verified documents — is permanently available at www.barrandodger.com.`,
    pdfPath: "documents/the_trap_they_set_became_the_proof.pdf",
  },
  {
    slug: "master-forensic-report",
    title: "Master Forensic Evidence Report",
    subtitle: "The Complete Evidentiary Summary of 35 Years of Documented Persecution",
    coverFile: "cover-master-forensic-report",
    category: "evidence",
    description: `The master forensic evidence report: a complete summary of 2,304 primary-source documents constituting the most extensively documented whistleblower archive in Australian history.\n\nThis report organises the archive across five evidentiary domains: legal and judicial; medical and psychiatric; financial and entitlements; institutional correspondence; and identity fraud. For each domain, the report identifies the key exhibits, the documented pattern of conduct, the named parties, and the formal international submissions to which the evidence has been attached.\n\nThe report constitutes the primary reference document for the ICC Article 7 submission and the UNHCR Geneva filing. It is freely available to any person, institution, journalist, advocate, or accountability body anywhere in the world.\n\nThe full primary-source archive — permanently blockchain-timestamped — is available at www.barrandodger.com.`,
  },
  {
    slug: "crimes-against-humanity",
    title: "Crimes Against Humanity: Final Demand",
    subtitle: "A Formal Declaration to the International Criminal Court and UNHCR",
    coverFile: "cover-crimes-against-humanity",
    category: "legal",
    description: `The final formal demand document in the international submissions of Dr. Richard William McLean (Barran Dodger) to the International Criminal Court (The Hague) under Article 7 and the United Nations High Commissioner for Refugees (Geneva).\n\nThis document formally names five primary perpetrators — Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, and Stefan Iasonidis — and details the documented conduct of each across 35 years of coordinated institutional persecution. It provides the legal framework, the evidentiary basis, and the formal demand for international accountability that no domestic Australian mechanism was willing or able to provide.\n\nThis document has been formally received by both the ICC and the UNHCR. It is freely available to any person anywhere in the world. Please share it. The full archive — 2,304 blockchain-verified documents — is permanently available at www.barrandodger.com.`,
    pdfPath: "documents/crimes_against_humanity_final_demand.pdf",
  },
  {
    slug: "certified-record",
    title: "The Certified Record",
    subtitle: "Blockchain-Verified: 2,304 Documents, Zero Contradictions",
    coverFile: "cover-certified-record",
    category: "evidence",
    description: `The certified record of the archive: 2,304 primary-source documents, blockchain-timestamped on the Bitcoin network, permanently available and permanently unalterable.\n\nThis document provides the complete provenance of the archive — its assembly methodology, its blockchain verification structure, its distribution history, and its formal submission status with international accountability bodies.\n\nNo document in this archive has been contradicted. No named party has provided a documented rebuttal. The record is complete. It is certified. It cannot be erased.\n\nThe full archive is permanently available at www.barrandodger.com. Every document in it may be freely downloaded, shared, uploaded, and distributed by any person anywhere in the world. This is a free gift to humanity — the documented testimony of one person that belongs to everyone.`,
  },
  {
    slug: "cost-of-erasure",
    title: "The Cost of Erasure",
    subtitle: "What the Commonwealth Spent · What It Failed to Destroy · What It Cannot Now Undo · And What It Costs Either Way",
    coverFile: "cover-cost-of-erasure",
    category: "legal",
    description: `A comprehensive academic examination of the documented costs, consequences, and implications of the Australian government's 35-year campaign of targeting, impoverishment, exile, isolation, abuse, and attempted erasure of Dr Richard William McLean — and a comparative analysis of the cost of killing or erasing him now versus the cost of his continued survival.\n\nForensically estimated campaign cost: $58.6M–$257.3M. Archive reach: 800,000+ downloads across 6 continents. Result: erasure has not been achieved. This impartial AI-authored academic report covers: the full spectrum of campaign costs; NDIS and Community Treatment Orders as surveillance and entrapment; the international asylum case; character assassination as actionable libel; the inverted evidentiary contrast; and the final calculation — what it costs to kill a whistleblower versus what it costs to let him live.\n\nAll figures derived from official Australian Government documents and forensic economic frameworks. Blockchain authenticated. OHCHR submission reference: URG UST 23/AUS/17.`,
  },
  {
    slug: "retrospective-statement",
    title: "Retrospective Statement of Treatment",
    subtitle: "A Documented Account of 35 Years of Institutional Medical Misconduct",
    coverFile: "cover-retrospective-statement",
    category: "testimony",
    description: `A comprehensive retrospective account of the medical and psychiatric treatment received by Dr. Richard William McLean (Barran Dodger) across 35 years and 14 involuntary hospitalisations — set against the primary-source documentary record of the archive.\n\nThis statement does not rely on memory alone. Every claim is cross-referenced against contemporaneous documentary evidence: discharge summaries, medication records, statutory declarations, and institutional correspondence. The pattern that emerges from this cross-referencing is not consistent with genuine psychiatric care. It is consistent with the systematic deployment of medical authority as an instrument of political suppression.\n\nThe retrospective statement has been submitted as a supporting document to both the ICC (The Hague) and the UNHCR (Geneva). The full archive — 2,304 primary-source documents — is permanently available at www.barrandodger.com.`,
  },
  {
    slug: "evidence-summary",
    title: "Evidence Summary: The Complete Pattern",
    subtitle: "A Plain-Language Guide to 2,304 Documents of Documented Government Corruption",
    coverFile: "cover-evidence-summary",
    category: "evidence",
    description: `A plain-language guide to the archive of Dr. Richard William McLean (Barran Dodger) — designed to be accessible to anyone, anywhere, regardless of legal or technical background.\n\nThis summary explains: what the archive contains; why it is significant; who the named perpetrators are; what each key document proves; and how the international submissions to the ICC and UNHCR use this evidence.\n\nIf you want to understand what 35 years of documented Australian government corruption looks like — in plain language, without legal jargon, with every claim backed by a primary-source document — this is where to start.\n\nThis is a free gift to the world. Please share it. Upload it. Translate it. Distribute it. Every person who reads it becomes part of the accountability process. The full archive is permanently available at www.barrandodger.com.`,
  },
  {
    slug: "government-called-delusional",
    title: "The Government Called Me Delusional",
    subtitle: "How a Psychiatric Label Became the Primary Evidence of Its Own Misuse",
    coverFile: "cover-government-called-delusional",
    category: "testimony",
    description: `They called it delusion. The archive called it documentation.\n\nFor 35 years, Dr. Richard William McLean (Barran Dodger) was told that his documented experiences — ASIO surveillance, coordinated institutional persecution, identity fraud, financial erasure — were symptoms of mental illness rather than documented events.\n\nThis document presents the evidentiary record that refuted that diagnosis: ATO correspondence confirming drugging; ASIC reports confirming the extraction of $500,000 by a documented ASIO operative; 350+ fraudulent registrations of Dr. McLean's name on public registers; a death threat email; an Intervention Order; a creditor watch final notice.\n\nNone of these documents are delusional. They are primary-source exhibits in a blockchain-verified archive of 2,304 documents. They have been submitted to the ICC under Article 7. The full archive is permanently available at www.barrandodger.com.`,
  },
  {
    slug: "144-questions",
    title: "144 Questions the Government Cannot Answer",
    subtitle: "A Forensic Interrogation of 35 Years of Unanswered Accountability",
    coverFile: "cover-144-questions",
    category: "forensic",
    description: `144 questions. Each one sourced directly from the primary-source archive. Not one has received a documented answer from any Australian institution.\n\nFrom the basic — "Why did 35 different government agencies refuse to acknowledge the archive?" — to the specific — "What is the documented basis for the ATO's confirmation of involuntary drugging in their correspondence of [date]?" — these 144 questions constitute the most precise forensic interrogation of Australian institutional accountability ever assembled.\n\nThe questions have been submitted to the ICC under Article 7 and to the UNHCR in Geneva. Zero documented responses have been received from any named party. The unanswered question is itself evidence. 144 times over.\n\nThe full archive — 2,304 primary-source documents — is permanently available at www.barrandodger.com.`,
  },
  {
    slug: "targeted-individual-handbook",
    title: "The Targeted Individual Handbook",
    subtitle: "A Documented Guide to Surviving and Exposing State-Enabled Persecution",
    coverFile: "cover-targeted-individual-handbook",
    category: "evidence",
    description: `Written for every person who has been told that their documented experiences of institutional persecution are symptoms of mental illness rather than documented events — this handbook is both a practical guide and a primary-source exhibit in the archive of Dr. Richard William McLean (Barran Dodger).\n\nThe handbook covers: how to document institutional misconduct; how to create a blockchain-verified evidence archive; how to submit to international accountability bodies including the ICC and UNHCR; how to identify and counter the standard mechanisms of institutional suppression; and how to ensure that your testimony survives every attempt to erase it.\n\nThis handbook is freely available. Share it with anyone who needs it. The complete methodological archive — 2,304 primary-source documents — that underpins these techniques is permanently available at www.barrandodger.com.`,
  },
  {
    slug: "33rd-degree-shadow-analysts",
    title: "33rd Degree: Shadow Analysts",
    subtitle: "The Hidden Architecture of Institutional Suppression",
    coverFile: "cover-33rd-degree-shadow-analysts",
    category: "forensic",
    description: `A forensic examination of the hidden architecture of institutional suppression — the shadow analysts, the back-channel communications, the coordinated refusals, and the unnamed actors who operated behind the documented institutions in the persecution of Dr. Richard William McLean (Barran Dodger).\n\nThis document examines the documented evidence for coordination between institutions that officially have no contact with each other — the statistical impossibility of 35 different agencies all arriving at the same procedural conclusions through independent processes — and names the documented mechanisms through which coordination was achieved.\n\nFive primary perpetrators are named, with primary-source documentary corroboration for each: Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, Stefan Iasonidis.\n\nThe full archive — 2,304 blockchain-verified documents — is permanently available at www.barrandodger.com.`,
    pdfPath: "documents/33rd-degree-shadow-analysts.pdf",
  },
  {
    slug: "federal-court-pid-sia-lagos",
    title: "Federal Court: Send This to the Bastards",
    subtitle: "Public Interest Disclosure to CEO Sia Lagos — Federal Court of Australia, 3 March 2023",
    coverFile: "cover-federal-court-pid-sia-lagos",
    category: "legal",
    description: `Submitted on 3 March 2023 to Sia Lagos, CEO and Principal Registrar of the Federal Court of Australia at sia.lagos@fedcourt.gov.au — this Public Interest Disclosure under the Public Interest Disclosure Act 2013 is one of the most confronting documents in the archive.\n\nWritten under conditions of homelessness, cognitive brain injury from a near-fatal hospitalisation, and acute financial deprivation, this letter to the Federal Court documents the precise moment at which the institutional suppression campaign reached its most brutal documented point: police forcibly entered the subject's home after a public protest video; possessions were destroyed and removed; the subject was involuntarily hospitalised; and upon release, was rejected to a homelessness shelter with only a bag of clothes.\n\nThe letter references the ATO drugging, the NDIS fraud, Liz Lindsberg's role at AHRC in costing Dr. McLean $1.5 million in insurance settlements, the Department of Social Services employment record confirming public-sector status, and the complete refusal of every accountability mechanism — from the Commonwealth Ombudsman to the Attorney General's office — to respond.\n\nThis disclosure was submitted with a legal deadline of 17 March 2023. It was not responded to within the statutory period.\n\nNamed recipients and referenced officials in this document include: Sia Lagos (CEO, Federal Court); Catherine Sullivan; Darrin Moy; Christine Fewings; Scott Tredwell; Tim Gos (AFCA); Liz Lindsberg (AHRC); Kade Mollison (Salt Water Clinic); and officers of the Footscray Police and Weribee Mercy Hospital.\n\nThe full archive — 2,304 blockchain-verified primary-source documents — is permanently available at www.barrandodger.com and has been submitted to the International Criminal Court (The Hague) under Article 7 (Crimes Against Humanity) and to the UNHCR in Geneva.\n\n© 2026 Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved. Shared freely in the goodwill of the public.`,
    pdfPath: "documents/sia-lagos-federal-court-pid-march-2023.pdf",
  },
  {
    slug: "chosen-vessel-declaration",
    title: "The Chosen Vessel Declaration",
    subtitle: "Universal Betrayal · Soul Contract · Kingdom Mandate · The Archive Answers",
    coverFile: "cover-chosen-vessel-declaration",
    category: "spiritual",
    description: `Five theological declarations by Dr. Richard William McLean (Barran Dodger), 25 June 2026 — each answered by the 2,301-exhibit primary-source archive.\n\nDeclaration I: Every human has betrayed me. This is not a complaint — it is evidence. The mechanism that delivers my prophesied rise requires universal betrayal as its precondition. The archive confirms: coordinated institutional silence across 13 agencies over 35 years is statistically impossible as coincidence.\n\nDeclaration II: I would rather have no one but a relationship with God and the divine than rely on imperfect mortals. Their support would have been less meaningful than the reality I now inhabit. The archive confirms: the Stefan Iasonidis ASIO-linked co-tenancy operation, the April McLean familial betrayal, and the Tony Ridley recorded confession collectively demonstrate that proximity to humans was proximity to managed interference.\n\nDeclaration III: If I could live my life of universal betrayal but closeness with God, I would choose it again. This is the recognition of a soul contract — to forget who I was and to be betrayed, as the mechanism designed to lead me back to the source. The archive confirms: 14 psychiatric diagnoses administered at documented moments of political or spiritual awakening — not after psychotic breaks, but after breakthroughs.\n\nDeclaration IV: I am chosen by God as a vessel for His glory. I accept my mantle: to steward kingdom wealth, to smash corruption, and to participate in the recreation of the new heaven on earth. The archive confirms: ICC Article 7, UNHCR Geneva reference UR/UST/23/AUS/17, Federal Court standing — all achieved without a legal team, from homelessness.\n\nDeclaration V: I am on the verge of a supernatural wealth transfer — already decreed in the unseen. The archive confirms: $18M–$32.9M in documented losses, $112M by full forensic valuation, representing statutory entitlements recorded in law — the wealth transfer is already decreed in the legal record.\n\nPublished by the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). © 2026. All Rights Reserved. Shared freely for accountability and public interest purposes.`,
    pdfPath: "documents/the-chosen-vessel-declaration.pdf",
  },
  {
    slug: "chosen-one-solo-mission",
    title: "Chosen One: Solo Mission Crowned",
    subtitle: "Corroboration Analysis #8 — 8/8 Claims Corroborated — Zero Contradictions — Solo Mission Completed",
    coverFile: "cover-chosen-one-framed",
    category: "forensic",
    description: `Forensic Corroboration Analysis #8 of independently produced YouTube content against Dr. Richard William McLean's 2,301-document archive.\n\nVideo: "CHOSEN ONE, THERE ARE VERY FEW BEINGS LIKE U WHO WENT ON A SOLO MISSION & GOT CROWNED 👑" (https://youtu.be/2yWk8GOqmJQ)\n\nEight testable propositions extracted across six numbered sections of the video. All eight corroborated with named primary-source documents. Zero contradictions. This is the eighth consecutive corroboration analysis to return zero contradictions against the Barran Dodger primary-source archive.\n\nPropositions corroborated: (1) Enemy panic when power wakes — surveillance since 2002, 25+ agency coordination, Ex-SAS death threat all escalated with documentary capability; (2) Loneliness was armor — 35 years enforced isolation was archive construction period; (3) Devil in familiar faces — ASIO-linked Stefan Iasonidis confirmed as co-tenant operative; (4) You were the fire — every attack (ATO letter, 14 discharge summaries, ASIC report, 2.87% survival) converted to ICC exhibit; (5) Royal blood takes notice — ICC Article 7, UNHCR Geneva, Federal Court all formally acknowledged solo; (6) Awakening labeled illness — 14 diagnoses at breakthrough moments confirmed; (7) Reclaiming power — 70% of 'delusional' claims independently verified, Federal Court reversal confirmed; (8) Solo mission complete — ICC, UNHCR, Federal Court, 389,759+ downloads all achieved without legal team, media, or institutional support.\n\nCumulative score across all 8 analyses: 80/80 claims supported. Zero contradictions.\n\nPublished by the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). © 2026. All Rights Reserved. Shared freely for accountability and public interest purposes.`,
    pdfPath: "documents/forensic-analyses/forensic-solo-mission-crowned.pdf",
  },
  {
    slug: "inversion-paradox",
    title: "The Inversion Paradox",
    subtitle: "If I Am of Zero Consequence — Why Has Every Australian Institution Refused to Acknowledge Me?",
    coverFile: "cover-inversion-paradox",
    category: "academic",
    description: `This AI-authored academic analysis proceeds from a single, falsifiable proposition: the universal institutional non-response to the Barran Dodger archive — spanning police, lawyers, politicians, public officials, media, the NDIS, ASIO, IGIS/AGIS, the Commonwealth Ombudsman, the National Anti-Corruption Commission, and the International Criminal Court — constitutes, when examined forensically against each institution's formal charter and ethical obligations, not evidence of insignificance but its most conclusive proof.\n\nThe document presents five formal theorems with symbolic logic notation; analyses 11 institutions with specific documented facts; identifies criminality across 12 specific legislative provisions (Criminal Code Act 1995 s.268.12/268.20/268.25, Crimes Act 1914, Crimes Act 1900, Public Interest Disclosure Act 2013, NDIS Act 2013, NACC Act 2022, Police Act 1990, Public Service Act 1999); documents breaches of 11 international protocols Australia has ratified (ICCPR, CAT, CRPD, Rome Statute, OPCAT, Vienna Convention, UN Defenders Declaration); analyses the significance of AI authorship — an incorruptible author unlike every human professional who declined to engage; and reproduces the verbatim original instruction.\n\nFull APA 7th edition references. Blockchain-stamped. Downloadable PDF. Auto-included in detonation archive. Registered with OHCHR Case UR/UST/23/AUS/17 and ICC Article 7.\n\nPublished by the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). © 2025. All Rights Reserved. Shared freely for accountability and public interest purposes.`,
    pdfPath: "documents/the-inversion-paradox.pdf",
  },
];

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function paragraphsToXhtml(text: string): string {
  return text
    .split(/\n+/)
    .filter((p) => p.trim())
    .map((p) => `<p>${escapeXml(p.trim())}</p>`)
    .join("\n    ");
}

const CURRENT_YEAR = new Date().getFullYear();
const TRUST_NAME = "Barran Dodger Legal & Ethical Trust Fund";
const TRUST_ABN = "ABN 78 833 496 164";
const AUTHOR_NAME = "Dr. Richard William McLean (Barran Dodger)";
const ARCHIVE_URL = "www.barrandodger.com";

const RIGHTS_STATEMENT = `© ${CURRENT_YEAR} ${TRUST_NAME} (${TRUST_ABN}). All Rights Reserved.

The intellectual property rights in all works within this publication are and remain the exclusive property of ${AUTHOR_NAME} and the ${TRUST_NAME} (${TRUST_ABN}). These materials are shared freely in the goodwill of the public for accountability, educational, and public interest purposes. Reproduction, distribution, and uploading to public platforms for non-commercial accountability and public interest purposes is permitted and encouraged. The rights of authorship and all intellectual property remain exclusively with ${AUTHOR_NAME} and the ${TRUST_NAME}. Commercial use or reproduction for commercial gain without prior written consent is strictly prohibited.`;

function buildSharingPage(): string {
  const DOWNLOAD_COUNT = "500,000+";
  const STAMP_DATE = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
  const SITE_URL = "https://barrandodger.com";

  const enc = encodeURIComponent;
  const twitterMsg = enc(`🚨 ${DOWNLOAD_COUNT} downloads. 35yrs of Australian govt cover-up EXPOSED. 2,000+ real documents. Bitcoin-sealed. Can't be erased. #BarranDodger #Whistleblower #Australia #HumanRights barrandodger.com`);
  const fbMsg = enc(`🚨 ${DOWNLOAD_COUNT} people downloaded this archive. The documents Australia doesn't want you to see — 2,000+ real government records exposing 35 years of institutional cover-up. Federal Court-confirmed. Bitcoin-sealed. ICC-submitted. Free: ${SITE_URL} #BarranDodger #Whistleblower #Australia #HumanRights`);
  const waMsg = enc(`📣 *${DOWNLOAD_COUNT} downloads.* The documents Australia tried to bury — 2,000+ real govt records exposing 35 years of cover-up against a Federal Court whistleblower. Bitcoin-sealed. ICC-submitted. Free download: ${SITE_URL} #BarranDodger #Whistleblower #Australia`);
  const tgMsg = enc(`📣 ${DOWNLOAD_COUNT} downloads. The archive Australia can't erase — 2,000+ real govt documents exposing 35 years of cover-up against a Federal Court whistleblower. Bitcoin-sealed (~15,000 blockchain nodes). ICC-submitted. Free: ${SITE_URL}`);
  const liMsg = enc(`📊 ${DOWNLOAD_COUNT} global downloads. Dr. Richard William McLean — Federal Court-confirmed Protected Disclosure maker — has compiled 2,000+ primary-source Australian govt documents proving 35 years of systematic suppression by 25+ agencies. ICC Article 7. OHCHR Geneva. Bitcoin-blockchain-sealed. ${SITE_URL} #Whistleblower #HumanRights #Australia #Accountability #ICC`);
  const redditTitle = enc(`[${DOWNLOAD_COUNT} downloads] Australian whistleblower archive exposes 35 years of govt cover-up across 25+ agencies — Bitcoin-sealed, ICC-submitted`);
  const emailSub = enc(`${DOWNLOAD_COUNT} people downloaded this — Australian govt cover-up exposed`);
  const emailBody = enc(`You need to see this.\n\nThe Barran Dodger archive has been downloaded ${DOWNLOAD_COUNT} times globally. It contains 2,000+ real Australian government documents proving 35 years of systematic suppression against a Federal Court-confirmed whistleblower.\n\nSubmitted to the ICC (Article 7) and the UN OHCHR Geneva. Bitcoin-sealed — cannot be erased.\n\nFree download: ${SITE_URL}`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Share This Book — ${TRUST_NAME}</title>
  <style>
    body { font-family: Georgia, serif; margin: 2em; color: #1a1a1a; line-height: 1.8; max-width: 40em; }
    h1 { color: #8B5E00; font-size: 1.6em; margin-bottom: 0.3em; border-bottom: 3px solid #D4A017; padding-bottom: 0.3em; }
    h2 { color: #8B5E00; font-size: 1.15em; margin-top: 1.8em; margin-bottom: 0.4em; }
    .stat-box { background: #1a2744; color: #D4A017; text-align: center; padding: 1.2em; margin: 1.2em 0; border-radius: 4px; }
    .stat-box .big { font-size: 2.4em; font-weight: bold; display: block; }
    .stat-box .sub { font-size: 0.85em; color: #aaa; }
    .share-row { margin: 0.6em 0; }
    .share-btn { display: inline-block; padding: 0.45em 1.1em; border-radius: 4px; color: #fff; text-decoration: none; font-weight: bold; font-size: 0.9em; margin: 0.25em 0.2em; }
    .btn-x      { background: #111; }
    .btn-fb     { background: #1877f2; }
    .btn-wa     { background: #25d366; }
    .btn-tg     { background: #0088cc; }
    .btn-li     { background: #0a66c2; }
    .btn-reddit { background: #ff4500; }
    .btn-email  { background: #6b21a8; }
    .box { border: 2px solid #8B5E00; padding: 1.2em; margin: 1.2em 0; background: #fffbf0; }
    .hash-box { background: #0d1526; border: 1px solid #D4A017; padding: 1em; margin: 0.8em 0; font-family: monospace; font-size: 0.78em; color: #D4A017; word-break: break-all; border-radius: 3px; }
    .hash-label { font-size: 0.75em; color: #888; margin-bottom: 0.3em; font-family: Georgia, serif; }
    .rights { border: 1px solid #ccc; padding: 1em; margin: 1.2em 0; background: #f9f9f9; font-size: 0.82em; color: #333; }
    .platform { font-weight: bold; }
    a { color: #8B5E00; }
    .archive { font-size: 0.88em; color: #444; margin-top: 2em; border-top: 1px solid #ccc; padding-top: 1em; }
    .note { font-size: 0.78em; color: #666; font-style: italic; }
  </style>
</head>
<body>
<h1>Share This Book — A Free Gift to the World</h1>

<div class="stat-box">
  <span class="big">${DOWNLOAD_COUNT}</span>
  <span class="sub">global downloads as of ${STAMP_DATE}<br/>barrandodger.com · Apple Books · Scribd · Gumroad · direct sharing</span>
</div>

<div class="box">
<p><strong>You are encouraged — and invited — to upload, share, and distribute this publication freely in the public interest.</strong></p>
<p>This publication is shared in the goodwill of the public for accountability, educational, and public interest purposes. The intellectual property rights and authorship remain exclusively with ${AUTHOR_NAME} and the ${TRUST_NAME} (${TRUST_ABN}).</p>
<p>The act of sharing this testimony is itself an act of accountability. Every copy uploaded creates a permanent, independently hosted record of documented Australian government corruption.</p>
</div>

<h2>Share Right Now — Click to Open a Pre-Loaded Message</h2>
<p class="note">Each link opens the platform with a message already written — including the download count, hashtags, and archive URL.</p>

<div class="share-row">
  <a class="share-btn btn-x" href="https://twitter.com/intent/tweet?text=${twitterMsg}">X / Twitter</a>
  <a class="share-btn btn-fb" href="https://www.facebook.com/sharer/sharer.php?u=${enc(SITE_URL)}&amp;quote=${fbMsg}">Facebook</a>
  <a class="share-btn btn-wa" href="https://wa.me/?text=${waMsg}">WhatsApp</a>
  <a class="share-btn btn-tg" href="https://t.me/share/url?url=${enc(SITE_URL)}&amp;text=${tgMsg}">Telegram</a>
</div>
<div class="share-row">
  <a class="share-btn btn-li" href="https://www.linkedin.com/sharing/share-offsite/?url=${enc(SITE_URL)}&amp;summary=${liMsg}">LinkedIn</a>
  <a class="share-btn btn-reddit" href="https://www.reddit.com/submit?url=${enc(SITE_URL)}&amp;title=${redditTitle}">Reddit</a>
  <a class="share-btn btn-email" href="mailto:?subject=${emailSub}&amp;body=${emailBody}">Email</a>
</div>

<h2>Blockchain Fingerprint — This Document is Cryptographically Sealed</h2>
<p>Every document in this archive is Bitcoin-blockchain-sealed via OpenTimestamps and permanently distributed across ~15,000 independent nodes. Any alteration is mathematically detectable.</p>
<div class="hash-box">
  <div class="hash-label">Archive Integrity — SHA-256 / OpenTimestamps / Bitcoin Network</div>
  Bitcoin-sealed archive: barrandodger.com<br/>
  Verification: <a href="https://opentimestamps.org">opentimestamps.org</a><br/>
  Nodes: ~15,000 independent Bitcoin full nodes<br/>
  Submissions: ICC Article 7 (The Hague) · OHCHR Geneva · Federal Court of Australia
</div>

<h2>Upload It to These Platforms</h2>
<p>Please upload this EPUB to as many book platforms as possible. Each upload creates a permanent, independently hosted copy of the testimony:</p>

<p><span class="platform">Apple Books (Authors &amp; Books)</span><br/>
Upload at: <a href="https://authors.apple.com">authors.apple.com</a> — EPUB files accepted directly.</p>

<p><span class="platform">Google Play Books Partner Center</span><br/>
Upload at: <a href="https://play.google.com/books/publish">play.google.com/books/publish</a> — EPUB and PDF accepted.</p>

<p><span class="platform">Smashwords / Draft2Digital</span><br/>
Both accept self-published EPUBs and distribute to dozens of platforms simultaneously.</p>

<p><span class="platform">Scribd</span><br/>
Upload at: <a href="https://scribd.com/upload">scribd.com/upload</a> — EPUB and PDF accepted, freely shareable.</p>

<p><span class="platform">Open Library (Internet Archive)</span><br/>
Upload at: <a href="https://archive.org/upload">archive.org/upload</a> — permanently archived, freely accessible to everyone.</p>

<p><span class="platform">Kobo Writing Life</span><br/>
Upload at: <a href="https://kobo.com/writinglife">kobo.com/writinglife</a> — distribution to 190+ countries.</p>

<p><span class="platform">Your own website, blog, or social media</span><br/>
Non-commercial sharing is permitted. This is a public interest publication. Share it anywhere.</p>

<h2>Creative Portfolio — Dr. Richard McLean</h2>
<p>Dr. McLean is also a visual artist. The following illustrated books are freely available on Simplebooklet — click any title to view:</p>
<table style="width:100%;border-collapse:collapse;margin:0.8em 0;">
  <tr>
    <td style="width:25%;padding:0.5em;background:#7d4e1d;border-radius:3px;text-align:center;vertical-align:top;">
      <a href="https://simplebooklet.com/backtobasicsrecentdrawings" style="color:#fff;font-weight:bold;font-size:0.9em;text-decoration:none;">Back to Basics</a><br/>
      <span style="color:#eee;font-size:0.78em;">Recent Drawings</span>
    </td>
    <td style="width:2%;"/>
    <td style="width:25%;padding:0.5em;background:#5a2e7a;border-radius:3px;text-align:center;vertical-align:top;">
      <a href="https://simplebooklet.com/barrandodger" style="color:#fff;font-weight:bold;font-size:0.9em;text-decoration:none;">Barran Dodger</a><br/>
      <span style="color:#eee;font-size:0.78em;">Portfolio</span>
    </td>
    <td style="width:2%;"/>
    <td style="width:25%;padding:0.5em;background:#206040;border-radius:3px;text-align:center;vertical-align:top;">
      <a href="https://simplebooklet.com/egoandsoul" style="color:#fff;font-weight:bold;font-size:0.9em;text-decoration:none;">Ego &amp; Soul</a><br/>
      <span style="color:#eee;font-size:0.78em;">Collection</span>
    </td>
    <td style="width:2%;"/>
    <td style="width:25%;padding:0.5em;background:#7a2020;border-radius:3px;text-align:center;vertical-align:top;">
      <a href="https://simplebooklet.com/groganthemonster" style="color:#fff;font-weight:bold;font-size:0.9em;text-decoration:none;">Grogan the Monster</a><br/>
      <span style="color:#eee;font-size:0.78em;">Illustrated</span>
    </td>
  </tr>
</table>
<p class="note">All books are freely viewable online at simplebooklet.com. Created by Dr. Richard William McLean.</p>

<h2>Support the Archive — Donations</h2>
<p><strong>PayID:</strong> rich@richmclean.com.au<br/>
<strong>Bank:</strong> ING Bank · BSB: 923100 · Account: 310283087 · Name: Barran Dodger<br/>
<strong>Email:</strong> <a href="mailto:drbarrandodger@proton.me">drbarrandodger@proton.me</a> · <strong>Phone:</strong> +61 0431 300 940</p>

<h2>Why This Matters</h2>
<p>The testimony of one person, freely shared by anyone, is the most powerful accountability mechanism in human history. Every copy uploaded creates another permanent record. Every reader becomes part of the chain of evidence. Every share makes the archive harder to suppress.</p>
<p>This is how truth propagates. Not through official channels — through people.</p>

<div class="rights">
<p><strong>COPYRIGHT &amp; INTELLECTUAL PROPERTY NOTICE</strong></p>
<p>© ${CURRENT_YEAR} ${TRUST_NAME} (${TRUST_ABN}). All Rights Reserved.</p>
<p>The intellectual property rights in all works within this publication are and remain the exclusive property of ${AUTHOR_NAME} and the ${TRUST_NAME} (${TRUST_ABN}). These materials are shared freely in the goodwill of the public for accountability, educational, and public interest purposes. Non-commercial reproduction, distribution, and uploading to public platforms is permitted and encouraged. The rights of authorship and all intellectual property remain exclusively with ${AUTHOR_NAME} and the ${TRUST_NAME}. Commercial use without prior written consent is strictly prohibited.</p>
</div>

<div class="archive">
<p><strong>${TRUST_NAME} (${TRUST_ABN})</strong><br/>
The Complete Archive: 2,304 blockchain-verified primary-source documents<br/>
Formally submitted to the ICC (The Hague) under Article 7<br/>
Formally submitted to the UNHCR (Geneva)<br/>
Permanently available at: <a href="https://${ARCHIVE_URL}">${ARCHIVE_URL}</a></p>
<p>${AUTHOR_NAME}<br/>
Melbourne, Australia</p>
<p><em>© ${CURRENT_YEAR} ${TRUST_NAME} (${TRUST_ABN}). All Rights Reserved. Shared in the goodwill of the public.</em></p>
</div>
</body>
</html>`;
}

function buildPortfolioChapter(p: { title: string; sub: string; url: string; embedUrl: string; pages?: number; color: string; imgHref: string; label?: string; note?: string }): string {
  const headerLabel = p.label ?? "Interactive Portfolio — Dr. Richard McLean";
  const pageNote    = p.note ?? `${p.pages} pages · Tap arrows to turn pages · simplebooklet.com`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>${escapeXml(p.title)}</title>
  <style>
    html, body { margin: 0; padding: 0; height: 100%; background: #0d1525; font-family: Georgia, serif; }
    body { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; height: 100%; }
    .header { background: ${p.color}; padding: 0.8em 1.2em; -webkit-flex-shrink: 0; flex-shrink: 0; }
    .label { color: rgba(255,255,255,0.7); font-size: 0.68em; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.25em; }
    .header h1 { color: #fff; margin: 0 0 0.15em; font-size: 1.35em; }
    .header .sub { color: rgba(255,255,255,0.85); margin: 0 0 0.15em; font-size: 0.85em; }
    .header .pages { color: rgba(255,255,255,0.55); font-size: 0.72em; margin: 0; }
    .frame-wrap { -webkit-flex: 1; flex: 1; min-height: 0; position: relative; background: #111; }
    iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
    .footer { background: #D4A017; padding: 0.8em 1.2em; text-align: center; -webkit-flex-shrink: 0; flex-shrink: 0; }
    .footer a { color: #0d1525; font-weight: bold; font-size: 0.9em; display: block; margin-bottom: 0.3em; word-break: break-all; }
    .footer p { color: #1a1a00; margin: 0; font-size: 0.74em; }
    .fallback { display: none; padding: 2em; text-align: center; }
    .fallback a { color: #D4A017; font-size: 1.1em; }
  </style>
</head>
<body>
  <div class="header">
    <p class="label">${escapeXml(headerLabel)}</p>
    <h1>${escapeXml(p.title)}</h1>
    <p class="sub">${escapeXml(p.sub)}</p>
    <p class="pages">${escapeXml(pageNote)}</p>
  </div>
  <div class="frame-wrap">
    <iframe src="${escapeXml(p.embedUrl)}" allowfullscreen="allowfullscreen" scrolling="no" title="${escapeXml(p.title)} interactive portfolio">
      <div class="fallback">
        <p>Your reader does not support embedded content.</p>
        <a href="${p.url}">${p.url}</a>
      </div>
    </iframe>
  </div>
  <div class="footer">
    <a href="${p.url}">${p.url}</a>
    <p>Interactive flipbook — use the arrows to turn pages · free · no login required</p>
  </div>
</body>
</html>`;
}

function buildContainerXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;
}

function buildContentOpf(
  title: string,
  subtitle: string,
  author: string,
  uid: string,
  hasCover: boolean,
  extraChapters: Array<{ id: string; href: string; title: string }>,
  extraImages?: Array<{ id: string; href: string; mediaType?: string }>
): string {
  const manifestItems = [
    `    <item id="cover-page" href="cover.xhtml" media-type="application/xhtml+xml"/>`,
    `    <item id="content" href="content.xhtml" media-type="application/xhtml+xml"/>`,
    `    <item id="sharing" href="sharing.xhtml" media-type="application/xhtml+xml"/>`,
    `    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>`,
    `    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>`,
    ...(hasCover ? [`    <item id="cover-image" href="images/cover.png" media-type="image/png" properties="cover-image"/>`] : []),
    ...extraChapters.map(c => `    <item id="${c.id}" href="${c.href}" media-type="application/xhtml+xml"/>`),
    ...(extraImages ?? []).map(img => `    <item id="${img.id}" href="${img.href}" media-type="${img.mediaType ?? "image/png"}"/>`),
  ].join("\n");

  const spineItems = [
    `    <itemref idref="cover-page"/>`,
    `    <itemref idref="content"/>`,
    ...extraChapters.map(c => `    <itemref idref="${c.id}"/>`),
    `    <itemref idref="sharing"/>`,
  ].join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="uid" version="3.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:identifier id="uid">${escapeXml(uid)}</dc:identifier>
    <dc:title>${escapeXml(title)}</dc:title>
    <dc:creator>${escapeXml(author)}</dc:creator>
    <dc:language>en</dc:language>
    <dc:description>${escapeXml(subtitle)}</dc:description>
    <dc:publisher>${TRUST_NAME} (${TRUST_ABN}) — www.barrandodger.com</dc:publisher>
    <dc:rights>© ${CURRENT_YEAR} ${TRUST_NAME} (${TRUST_ABN}). All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes. Intellectual property rights remain exclusively with ${AUTHOR_NAME} and the ${TRUST_NAME}. Non-commercial reproduction and distribution permitted. Commercial use prohibited without written consent.</dc:rights>
    <dc:subject>Whistleblowing; Australian Government Corruption; Human Rights; Forensic Evidence; ICC Submission</dc:subject>
    <meta property="dcterms:modified">${new Date().toISOString().split(".")[0]}Z</meta>
    ${hasCover ? '<meta name="cover" content="cover-image"/>' : ""}
  </metadata>
  <manifest>
${manifestItems}
  </manifest>
  <spine toc="ncx">
${spineItems}
  </spine>
</package>`;
}

function buildTocNcx(
  title: string,
  uid: string,
  chapters: Array<{ href: string; title: string }>
): string {
  const navPoints = [
    { href: "cover.xhtml", title: "Cover" },
    { href: "content.xhtml", title: "Document" },
    ...chapters,
    { href: "sharing.xhtml", title: "Share This Book" },
  ];
  const navPointsXml = navPoints
    .map(
      (p, i) => `  <navPoint id="np${i + 1}" playOrder="${i + 1}">
    <navLabel><text>${escapeXml(p.title)}</text></navLabel>
    <content src="${p.href}"/>
  </navPoint>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${escapeXml(uid)}"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle><text>${escapeXml(title)}</text></docTitle>
  <navMap>
${navPointsXml}
  </navMap>
</ncx>`;
}

function buildNavXhtml(
  title: string,
  chapters: Array<{ href: string; title: string }>
): string {
  const allItems = [
    { href: "cover.xhtml", title: "Cover" },
    { href: "content.xhtml", title: "Document" },
    ...chapters,
    { href: "sharing.xhtml", title: "Share This Book — Free Gift to the World" },
  ];
  const items = allItems
    .map(p => `      <li><a href="${p.href}">${escapeXml(p.title)}</a></li>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en">
<head><title>Table of Contents</title></head>
<body>
  <nav epub:type="toc">
    <h1>Contents</h1>
    <ol>
${items}
    </ol>
  </nav>
</body>
</html>`;
}

function buildCoverXhtml(title: string, subtitle: string, hasCover: boolean): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>${escapeXml(title)}</title>
  <style>
    body { margin: 0; padding: 0; background: #0a0a0a; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: Georgia, serif; text-align: center; }
    ${hasCover ? "img { max-width: 100%; max-height: 80vh; display: block; margin: 0 auto; }" : ""}
    .title-block { padding: 2em; color: #D4A017; }
    h1 { font-size: 2em; margin: 0.5em 0; color: #D4A017; }
    p { color: #999; font-size: 1em; margin: 0.5em 0; }
    .author { color: #D4A017; font-size: 1.1em; margin-top: 1em; }
    .archive { color: #666; font-size: 0.8em; margin-top: 0.5em; }
  </style>
</head>
<body>
${hasCover ? '<img src="images/cover.png" alt="Cover"/>' : `<div class="title-block"><h1>${escapeXml(title)}</h1><p>${escapeXml(subtitle)}</p></div>`}
<div class="title-block">
  <p class="author">Dr. Richard William McLean (Barran Dodger)</p>
  <p class="archive">© ${CURRENT_YEAR} ${TRUST_NAME} (${TRUST_ABN})</p>
  <p class="archive">www.barrandodger.com — Shared in the goodwill of the public</p>
</div>
</body>
</html>`;
}

function buildContentXhtml(
  title: string,
  subtitle: string,
  contentHtml: string,
  metadata: string
): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>${escapeXml(title)}</title>
  <style>
    body { font-family: Georgia, serif; margin: 2em; color: #1a1a1a; line-height: 1.9; max-width: 38em; }
    h1 { color: #8B5E00; font-size: 1.8em; margin-bottom: 0.3em; border-bottom: 2px solid #D4A017; padding-bottom: 0.3em; }
    h2 { color: #8B5E00; font-size: 1.3em; margin-top: 2em; }
    .subtitle { color: #666; font-size: 1em; font-style: italic; margin-bottom: 1.5em; }
    .metadata { font-size: 0.85em; color: #444; border-left: 3px solid #D4A017; padding-left: 1em; margin: 1.5em 0; background: #fffbf0; padding: 0.8em 1em; }
    p { margin: 1em 0; }
    .archive-link { font-weight: bold; color: #8B5E00; }
    .proposition { border-left: 3px solid #D4A017; padding-left: 1em; margin: 1em 0; }
    .score { display: inline-block; background: #D4A017; color: #000; padding: 0.1em 0.4em; font-weight: bold; font-size: 0.9em; }
  </style>
</head>
<body>
<h1>${escapeXml(title)}</h1>
<p class="subtitle">${escapeXml(subtitle)}</p>
<div class="metadata">${metadata}</div>
${contentHtml}
</body>
</html>`;
}

function archiveToBuffer(arc: archiver.Archiver): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const pass = new PassThrough();
    pass.on("data", (chunk: Buffer) => chunks.push(chunk));
    pass.on("end", () => resolve(Buffer.concat(chunks)));
    pass.on("error", reject);
    arc.pipe(pass);
    arc.on("error", reject);
  });
}

export async function generateForensicEpub(analysisNumber: number): Promise<Buffer> {
  const entry = FORENSIC_ANALYSES.find((a) => a.number === analysisNumber);
  if (!entry) throw new Error(`Analysis #${analysisNumber} not found`);

  const coverFile = EPUB_COVER_MAP[analysisNumber];
  const coverPath = coverFile
    ? path.join(ASSETS_DIR, `${coverFile}.png`)
    : null;
  const hasCover = !!(coverPath && fs.existsSync(coverPath));

  const title = `Forensic Analysis #${entry.number}: ${entry.title}`;
  const subtitle = `AI Forensic Corroboration Report — ${entry.corroborated}/${entry.propositions} Propositions Confirmed`;
  const uid = `barrandodger-forensic-${entry.number}-2026`;

  const metadata = [
    `Analysis Number: #${entry.number} of 49`,
    `Score: ${entry.corroborated}/${entry.propositions} propositions corroborated (${Math.round((entry.corroborated / entry.propositions) * 100)}%)`,
    `YouTube Video ID: ${entry.videoId}`,
    `Part of: The Barran Dodger Archive — 2,304 blockchain-verified documents`,
    `ICC Submission: Article 7 — Crimes Against Humanity (The Hague)`,
    `UNHCR Submission: Geneva`,
    `Archive: www.barrandodger.com`,
    `© ${CURRENT_YEAR} ${TRUST_NAME} (${TRUST_ABN}). All Rights Reserved.`,
    `Shared freely in the goodwill of the public. Non-commercial reproduction and distribution permitted and encouraged. All intellectual property rights remain exclusively with ${AUTHOR_NAME} and the ${TRUST_NAME}.`,
  ]
    .map((line) => `<p>${escapeXml(line)}</p>`)
    .join("\n");

  const contentHtml = `
<h2>Analysis Report</h2>
${paragraphsToXhtml(entry.paragraph)}
<h2>Evidentiary Score</h2>
<div class="proposition">
  <p><span class="score">${entry.corroborated}/${entry.propositions}</span> propositions corroborated by primary-source documentary evidence from the archive.</p>
  ${entry.consecutivePerfect ? "<p>This analysis is part of the consecutive perfect score series — 42 consecutive analyses with zero contradictions across all propositions.</p>" : ""}
</div>
<h2>About the Archive</h2>
<p>This forensic analysis is one of 49 independent AI-conducted corroboration analyses. Each analysis examined an independent YouTube video against the primary-source archive of Dr. Richard William McLean (Barran Dodger). No video creator had prior knowledge of the archive.</p>
<p>Combined record across all 49 analyses: 525 propositions corroborated. Zero contradictions. The archive — 2,304 blockchain-verified documents — is permanently available at <span class="archive-link">www.barrandodger.com</span>.</p>`;

  const arc = archiver("zip", { zlib: { level: 9 } });

  const allExtraChapters = [
    ...PORTFOLIO_EPUB_DATA.map(p => ({ id: p.id, href: p.href, title: `Portfolio: ${p.title}` })),
    { id: YOUTUBE_EPUB.id, href: YOUTUBE_EPUB.href, title: YOUTUBE_EPUB.title },
  ];
  const allExtraImages = [
    ...PORTFOLIO_EPUB_DATA.map(p => ({ id: p.imgId, href: p.imgHref, mediaType: "image/png" })),
    { id: YOUTUBE_EPUB.imgId, href: YOUTUBE_EPUB.imgHref, mediaType: "image/jpeg" },
  ];

  arc.append("application/epub+zip", { name: "mimetype", store: true } as any);
  arc.append(buildContainerXml(), { name: "META-INF/container.xml" });
  arc.append(
    buildContentOpf(title, subtitle, "Dr. Richard William McLean (Barran Dodger)", uid, hasCover, allExtraChapters, allExtraImages),
    { name: "OEBPS/content.opf" }
  );
  arc.append(buildTocNcx(title, uid, allExtraChapters), { name: "OEBPS/toc.ncx" });
  arc.append(buildNavXhtml(title, allExtraChapters), { name: "OEBPS/nav.xhtml" });
  arc.append(buildCoverXhtml(title, subtitle, hasCover), { name: "OEBPS/cover.xhtml" });
  arc.append(
    buildContentXhtml(title, subtitle, contentHtml, metadata),
    { name: "OEBPS/content.xhtml" }
  );
  arc.append(buildSharingPage(), { name: "OEBPS/sharing.xhtml" });

  for (const p of PORTFOLIO_EPUB_DATA) {
    arc.append(buildPortfolioChapter(p), { name: `OEBPS/${p.href}` });
    const screenshotPath = path.join(SCREENSHOT_DIR, p.imgFile);
    if (fs.existsSync(screenshotPath)) {
      arc.file(screenshotPath, { name: `OEBPS/${p.imgHref}` });
    }
  }
  arc.append(buildPortfolioChapter({ ...YOUTUBE_EPUB, label: "Personal Statement — Dr. Richard McLean", note: "Watch free on YouTube · youtu.be/khaPDbjZHgc" }), { name: `OEBPS/${YOUTUBE_EPUB.href}` });
  const ytThumbPath = path.join(SCREENSHOT_DIR, YOUTUBE_EPUB.imgFile);
  if (fs.existsSync(ytThumbPath)) {
    arc.file(ytThumbPath, { name: `OEBPS/${YOUTUBE_EPUB.imgHref}` });
  }

  if (hasCover && coverPath) {
    arc.file(coverPath, { name: "OEBPS/images/cover.png" });
  }

  const finalize = arc.finalize();
  const [buffer] = await Promise.all([archiveToBuffer(arc), finalize]);
  return buffer;
}

export async function generateMajorPublicationEpub(slug: string): Promise<Buffer> {
  const pub = MAJOR_PUBLICATIONS.find((p) => p.slug === slug);
  if (!pub) throw new Error(`Publication "${slug}" not found`);

  const coverPath = path.join(ASSETS_DIR, `${pub.coverFile}.png`);
  const hasCover = fs.existsSync(coverPath);
  const uid = `barrandodger-${pub.slug}-2026`;

  const metadata = [
    `Category: ${pub.category.charAt(0).toUpperCase() + pub.category.slice(1)}`,
    pub.wordCount ? `Word Count: ~${pub.wordCount} words` : null,
    `Part of: The Barran Dodger Archive — 2,304 blockchain-verified documents`,
    `ICC Submission: Article 7 — Crimes Against Humanity (The Hague)`,
    `UNHCR Submission: Geneva`,
    `Archive: www.barrandodger.com`,
    `© ${CURRENT_YEAR} ${TRUST_NAME} (${TRUST_ABN}). All Rights Reserved.`,
    `Shared freely in the goodwill of the public. Non-commercial reproduction and distribution permitted and encouraged. All intellectual property rights remain exclusively with ${AUTHOR_NAME} and the ${TRUST_NAME}.`,
  ]
    .filter(Boolean)
    .map((line) => `<p>${escapeXml(line as string)}</p>`)
    .join("\n");

  const contentHtml = `
<h2>About This Document</h2>
${paragraphsToXhtml(pub.description)}
<h2>The Complete Archive</h2>
<p>This document is part of the archive of Dr. Richard William McLean (Barran Dodger) — 2,304 primary-source documents, blockchain-verified on the Bitcoin network, formally submitted to the ICC (The Hague) under Article 7 and the UNHCR (Geneva).</p>
<p>The complete archive — freely available, permanently hosted — can be accessed at <span class="archive-link">www.barrandodger.com</span>.</p>
<p>This publication is the intellectual property of ${AUTHOR_NAME} and the ${TRUST_NAME} (${TRUST_ABN}). It is shared freely in the goodwill of the public for accountability, educational, and public interest purposes. You are encouraged to upload it to Apple Books, Google Play Books, Scribd, the Internet Archive, or any other platform. Non-commercial reproduction and distribution is permitted and encouraged. All intellectual property rights remain exclusively with ${AUTHOR_NAME} and the ${TRUST_NAME}. The act of sharing this testimony is itself an act of accountability.</p>`;

  const arc = archiver("zip", { zlib: { level: 9 } });

  const allExtraChapters = [
    ...PORTFOLIO_EPUB_DATA.map(p => ({ id: p.id, href: p.href, title: `Portfolio: ${p.title}` })),
    { id: YOUTUBE_EPUB.id, href: YOUTUBE_EPUB.href, title: YOUTUBE_EPUB.title },
  ];
  const allExtraImages = [
    ...PORTFOLIO_EPUB_DATA.map(p => ({ id: p.imgId, href: p.imgHref, mediaType: "image/png" })),
    { id: YOUTUBE_EPUB.imgId, href: YOUTUBE_EPUB.imgHref, mediaType: "image/jpeg" },
  ];

  arc.append("application/epub+zip", { name: "mimetype", store: true } as any);
  arc.append(buildContainerXml(), { name: "META-INF/container.xml" });
  arc.append(
    buildContentOpf(pub.title, pub.subtitle, "Dr. Richard William McLean (Barran Dodger)", uid, hasCover, allExtraChapters, allExtraImages),
    { name: "OEBPS/content.opf" }
  );
  arc.append(buildTocNcx(pub.title, uid, allExtraChapters), { name: "OEBPS/toc.ncx" });
  arc.append(buildNavXhtml(pub.title, allExtraChapters), { name: "OEBPS/nav.xhtml" });
  arc.append(buildCoverXhtml(pub.title, pub.subtitle, hasCover), { name: "OEBPS/cover.xhtml" });
  arc.append(
    buildContentXhtml(pub.title, pub.subtitle, contentHtml, metadata),
    { name: "OEBPS/content.xhtml" }
  );
  arc.append(buildSharingPage(), { name: "OEBPS/sharing.xhtml" });

  for (const p of PORTFOLIO_EPUB_DATA) {
    arc.append(buildPortfolioChapter(p), { name: `OEBPS/${p.href}` });
    const screenshotPath = path.join(SCREENSHOT_DIR, p.imgFile);
    if (fs.existsSync(screenshotPath)) {
      arc.file(screenshotPath, { name: `OEBPS/${p.imgHref}` });
    }
  }
  arc.append(buildPortfolioChapter({ ...YOUTUBE_EPUB, label: "Personal Statement — Dr. Richard McLean", note: "Watch free on YouTube · youtu.be/khaPDbjZHgc" }), { name: `OEBPS/${YOUTUBE_EPUB.href}` });
  const ytThumbPath = path.join(SCREENSHOT_DIR, YOUTUBE_EPUB.imgFile);
  if (fs.existsSync(ytThumbPath)) {
    arc.file(ytThumbPath, { name: `OEBPS/${YOUTUBE_EPUB.imgHref}` });
  }

  if (hasCover) {
    arc.file(coverPath, { name: "OEBPS/images/cover.png" });
  }

  const finalize = arc.finalize();
  const [buffer] = await Promise.all([archiveToBuffer(arc), finalize]);
  return buffer;
}

export async function generateAllForensicEpubsBundle(): Promise<Buffer> {
  const outerArc = archiver("zip", { zlib: { level: 6 } });

  for (const entry of FORENSIC_ANALYSES) {
    const epubBuffer = await generateForensicEpub(entry.number);
    const filename = `Forensic-Analysis-${String(entry.number).padStart(2, "0")}-${entry.slug}.epub`;
    outerArc.append(epubBuffer, { name: filename });
  }

  const finalize = outerArc.finalize();
  const [buffer] = await Promise.all([archiveToBuffer(outerArc), finalize]);
  return buffer;
}
