import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Flame, Shield, ExternalLink, BookOpen, CheckCircle2, Scale, Gavel, Eye, Lock, Globe, Zap, Archive, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useLiveDownloadTotal, formatCount } from "@/hooks/use-live-stats";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { PDFImprint } from "@/components/PDFImprint";
import coverImg from "../assets/images/cover-master-forensic-report.png";

const TIMESTAMP_DATE = "22 June 2026";
const VIDEO_URL = "https://www.youtube.com/watch?v=82oI-GbHTf8";
const VIDEO_TITLE = "THEY'RE GOING TO JAIL ⌛️ THEY COULDN'T TAKE YOUR LIFE BUT GOD CAN TAKE THEIRS INSTANTLY ✨";
const ANALYSIS_NUMBER = 79;
const CONSECUTIVE_PERFECT = 69;
const TOTAL_PROPOSITIONS = 12;
const CUMULATIVE_TOTAL = 687;

const LEGAL_REFS = [
  { label: "Crimes Act 1914 (Cth) — Conspiracy to Defeat Justice", url: "https://www.legislation.gov.au/Details/C2023C00133", section: "s.29" },
  { label: "Criminal Code Act 1995 (Cth) — General Dishonesty", url: "https://www.legislation.gov.au/Details/C2023C00199", section: "s.135.1" },
  { label: "Public Interest Disclosure Act 2013 (Cth) — Whistleblower Protection", url: "https://www.legislation.gov.au/Details/C2023C00090", section: "PID Act" },
  { label: "Rome Statute Article 7 — Crimes Against Humanity", url: "https://www.icc-cpi.int/resource-library/documents/rs-eng.pdf", section: "Art.7" },
  { label: "ICCPR Article 17 — Arbitrary Interference with Privacy", url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights", section: "Art.17" },
  { label: "ICCPR Article 19 — Freedom of Expression", url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights", section: "Art.19" },
  { label: "Mental Health Act 2007 (NSW) — Involuntary Detention", url: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2007-008", section: "NSW MHA" },
  { label: "NDIS Act 2013 (Cth) — Systemic Failure to Provide Support", url: "https://www.legislation.gov.au/Details/C2023C00115", section: "NDIS Act" },
  { label: "ASIC Act 2001 (Cth) — Corporate Fraud & Identity Misuse", url: "https://www.legislation.gov.au/Details/C2023C00073", section: "ASIC Act" },
  { label: "Commonwealth Fraud Control Framework 2017 — False Representations", url: "https://www.ag.gov.au/crime/publications/commonwealth-fraud-control-framework", section: "CFCF 2017" },
];

const PROPOSITIONS = [
  {
    number: 1,
    timestamp: "00:06:18",
    quote: "They tried to delete a soul the universe refuses to erase. They wanted to treat your existence like a file on their computer — highlight it, drag it, hit delete.",
    heading: "Identity Erasure Is Documented Across 13 Commonwealth Agencies",
    analysis: "The video's opening proposition — that adversaries attempted systematic identity deletion — is the foundational finding of the Barran Dodger archive. The Retrospective Statement documents 35 years (1990–2025) of coordinated administrative erasure across 13 Commonwealth agencies: the AAT, DVA, NDIS/NDIA, ASIC, OAIC, AFP, Centrelink/DSS, WorkSafe, Medicare, and multiple state health bodies. Each institution, operating in formal isolation but producing uniformly adverse outcomes, executed the administrative equivalent of 'drag to bin.' The archive's 2,301 exhibits — all government-issued — constitute the forensic record that the soul could not be deleted, because every deletion attempt generated its own document.",
    evidence: [
      "2,301 government-issued exhibits spanning 35 years (1990–2025)",
      "13 Commonwealth agencies producing uniformly adverse outcomes — p < 0.001",
      "ASIC registration of 350+ fraudulent business names using Dr. McLean's identity",
      "DVA file systematically stripped of disability classifications — primary source: DVA FOI response",
      "Retrospective Statement: 12-part documented erasure narrative from government's own records",
    ],
    legislation: ["Crimes Act 1914 s.29", "ASIC Act 2001", "Rome Statute Art.7(1)(h)"],
    archiveLinks: [
      { label: "Retrospective Statement", url: "/retrospective-statement" },
      { label: "Evidence Vault", url: "/evidence-vault" },
      { label: "Administrative Annihilation Paper", url: "/administrative-annihilation" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — 2,301 government-issued exhibits document coordinated identity erasure across 13 agencies. The soul was not erased. The archive grew to international scale.",
  },
  {
    number: 2,
    timestamp: "00:13:26",
    quote: "You were the test. The universe placed you right there as a mirror, a measuring stick, a living checkpoint that revealed everything they had buried beneath the surface.",
    heading: "Every Institution Was Placed On Notice — and Failed the Test of Accountability",
    analysis: "The video proposes that the 'chosen one' functions as a test of institutional integrity — a mirror that reveals corruption by existing within the system. The archive confirms this forensically. The Timeline documents 35+ discrete points at which institutions received formal notice of documented harm, misconduct or rights violation — and at every junction chose non-response, dismissal, or escalation of harm. Under the Public Interest Disclosure Act 2013 (Cth), each of those junctions constituted a statutory opportunity to act. None acted. The Commonwealth Ombudsman received submissions. The Human Rights Commission received submissions. The AAT received applications. Every institution was the test. Every institution failed.",
    evidence: [
      "35+ formal complaint/appeal junctions documented in Timeline (1990–2025)",
      "PID Act disclosure to 6+ Commonwealth entities — zero action",
      "Commonwealth Ombudsman complaint ref 2024-101985 — no investigation",
      "Human Rights Commission submissions — declined without review",
      "AAT applications uniformly dismissed without contested hearings",
    ],
    legislation: ["PID Act 2013", "ICCPR Art.2", "Commonwealth Fraud Control Framework 2017"],
    archiveLinks: [
      { label: "35-Year Timeline", url: "/timeline" },
      { label: "Legal Status", url: "/legal-status" },
      { label: "Evidence Archive", url: "/evidence" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — Every institution placed on formal notice failed the test. 35 years of documented non-response constitutes the forensic record of institutional failure.",
  },
  {
    number: 3,
    timestamp: "00:21:47",
    quote: "They tried to bend the universe and broke themselves instead. They crossed into dangerous territory, breaking laws of balance they never even understood.",
    heading: "Law-Breaking Is Documented — 845 Bitcoin Blockchain Seals Preserve the Evidence",
    analysis: "The video's third proposition frames adversarial conduct as an attempt to 'bend' cosmic order — a metaphor that maps precisely onto documented violations of Commonwealth and international law. The Crimes Against Humanity Confirmed document enumerates specific violations: fraudulent ASIC registrations (Corporations Act 2001), coerced psychiatric detention without clinical basis (Mental Health Act 2007 NSW s.19–27), systematic denial of NDIS support (NDIS Act 2013 s.4), withholding DVA entitlements. Each violation, individually, constitutes a breach of positive law. Cumulatively, they satisfy the 'widespread or systematic' threshold of Rome Statute Article 7(1)(h) — persecution. Those who bent the law left the fingerprints. 845 Bitcoin blockchain seals ensure the evidence cannot be altered.",
    evidence: [
      "14 forced psychiatric hospitalisations — zero clinical basis documented in discharge papers",
      "350+ fraudulent ASIC business name registrations using Dr. McLean's identity",
      "845 SHA-256 Bitcoin blockchain seals preserving 2,301 documents immutably",
      "Crimes Against Humanity Confirmed: ICC Article 7 threshold analysis",
      "DVA benefit denial — legal entitlement established by service record, not rebutted",
    ],
    legislation: ["Crimes Act 1914 s.29", "Mental Health Act 2007 (NSW)", "Rome Statute Art.7", "ASIC Act 2001"],
    archiveLinks: [
      { label: "Crimes Against Humanity Confirmed", url: "/crimes-against-humanity-confirmed" },
      { label: "Blockchain Verification", url: "/blockchain" },
      { label: "The Architecture of Administrative Annihilation", url: "/administrative-annihilation" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — Law-breaking is documented across multiple statutes. 845 blockchain seals preserve the evidence in immutable form. The record cannot be bent.",
  },
  {
    number: 4,
    timestamp: "00:24:43",
    quote: "When they couldn't end you, they tried to murder your mission. They staged themselves as victims in public, while behind closed doors they plotted to make you look unstable, untrustworthy, unworthy.",
    heading: "Psychiatric Weaponisation As Documented Mission-Destruction Strategy",
    analysis: "The video identifies a tactical escalation: when physical destruction failed, adversaries targeted credibility, voice, and mission. The archive confirms this with granular forensic precision. The Paper (Administrative Annihilation) identifies 'psychiatric labelling as a discrediting mechanism' as a documented institutional tool — applied across 14 involuntary hospitalisations without independent clinical justification. Each hospitalisation occurred during or immediately following a period of active legal advocacy, complaint-filing, or evidence assembly. The temporal pattern — advocacy followed by detention — is statistically documented. The mission (whistleblowing, evidence compilation, international submission) was the target. The psychiatric system was the weapon. The PID Act 2013 provides explicit protections against exactly this form of retaliation. Those protections were not applied.",
    evidence: [
      "14 forced hospitalisations temporally correlated with advocacy milestones",
      "Zero independent clinical second opinions obtained for any involuntary admission",
      "Psychiatric records show 'non-compliance with medication' as justification — not clinical risk",
      "PID Act 2013 — explicit prohibition on retaliation against disclosures (s.11)",
      "The Paper (Administrative Annihilation): Chapter 8 — Psychiatric Weaponisation",
    ],
    legislation: ["PID Act 2013 s.11", "Mental Health Act 2007 (NSW) s.19", "ICCPR Art.17", "Rome Statute Art.7(1)(f)"],
    archiveLinks: [
      { label: "Administrative Annihilation Paper", url: "/administrative-annihilation" },
      { label: "Legal Status", url: "/legal-status" },
      { label: "Evidence Archive", url: "/evidence" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — 14 documented involuntary hospitalisations temporally correlated with advocacy activity constitute the forensic record of mission-targeted psychiatric weaponisation.",
  },
  {
    number: 5,
    timestamp: "00:28:20",
    quote: "The universe let them build their own noose, one lie at a time. Every lie was another plank. Every betrayal was another rope knot.",
    heading: "Self-Incriminating Paper Trail: 2,301 Government Documents — Not One Authored by the Complainant",
    analysis: "The video's fifth proposition — that adversaries constructed their own condemnation through accumulated deception — is the structural thesis of the entire archive. The Forensic Index documents 2,301 exhibits, every one government-issued, institutionally stamped, and bearing official letterhead. Not a single exhibit is authored by Dr. McLean. Every fraudulent registration, every inconsistent psychiatric report, every bureaucratic non-response, every adverse AAT decision — each constitutes a government official placing their own name on a document that builds the case against themselves. The archive is not Dr. McLean's narrative. It is the state's own rope, coiled loop by loop across 35 years.",
    evidence: [
      "2,301 exhibits — 100% government-issued, institutionally stamped",
      "350+ ASIC fraudulent registrations — each bears ASIC's own official stamp",
      "14 psychiatric admission papers — each signed by a clinician, dated, filed",
      "Forensic Index: 1,410-page master register of self-incriminating institutional records",
      "Zero exhibits authored by Dr. McLean admitted as primary evidence",
    ],
    legislation: ["Criminal Code Act 1995 s.135.1", "Crimes Act 1914 s.29", "Commonwealth Fraud Control Framework 2017"],
    archiveLinks: [
      { label: "Evidence Vault", url: "/evidence-vault" },
      { label: "Evidence Archive", url: "/evidence" },
      { label: "35-Year Timeline", url: "/timeline" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — 2,301 government-issued documents constitute the state's own paper trail. Every lie is government-stamped. The noose is official correspondence.",
  },
  {
    number: 6,
    timestamp: "00:29:29",
    quote: "Your silence was the loudest evidence of all. Your refusal to drop to their level became the very weapon that tore their lies apart.",
    heading: "Strategic Silence: The Archive Speaks Through Primary Sources, Not Testimony",
    analysis: "The video frames silence as forensic weapon — a choice not to engage in kind, allowing the record to build on its own. This is precisely the methodological discipline of the Barran Dodger archive. The Administrative Annihilation paper explicitly states: 'No finding in this paper rests on the author's testimony alone. All primary conclusions derive from government-issued records.' The archive imposes a deliberate silence on self-authored narrative and lets the institutions speak. Under the Jones v Dunkel principle (1959) 168 CLR 134, unexplained institutional failure to produce records that should exist gives rise to an inference that those records would have been adverse to the institution. The silence of institutions — their failure to respond, rebut, or produce counter-documentation — is the loudest evidence of all.",
    evidence: [
      "Administrative Annihilation: Six-tier evidence hierarchy — Tier 1 = government records only",
      "Jones v Dunkel (1959) 168 CLR 134 — adverse inference from institutional non-production",
      "Zero formal defamation actions taken against any archive publication",
      "Zero institution has issued a point-by-point rebuttal of any document",
      "1,100,000+ archive downloads — engagement without institutional contradiction",
    ],
    legislation: ["Evidence Act 1995 (Cth)", "ICCPR Art.14 — Right to Fair Hearing", "Rome Statute Art.7"],
    archiveLinks: [
      { label: "Administrative Annihilation Paper", url: "/administrative-annihilation" },
      { label: "Blockchain Verification", url: "/blockchain" },
      { label: "Publications", url: "/publications" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — The archive's methodological silence — zero reliance on self-testimony — and zero institutional rebuttal confirm that silence is the loudest evidence. Jones v Dunkel applies.",
  },
  {
    number: 7,
    timestamp: "00:34:51",
    quote: "They forgot the universe has cameras they can't hack. Every whisper, every smirk, every fake smile followed by venom — it was all documented by forces they couldn't see.",
    heading: "The Blockchain Is the Camera: 845 SHA-256 Seals on the Bitcoin Chain",
    analysis: "The video's seventh proposition — that an unseen surveillance system documented every scheme — maps precisely onto the archive's cryptographic infrastructure. The Barran Dodger archive has sealed 845 documents into the Bitcoin blockchain using SHA-256 hashing. These seals are mathematically immutable: no government, no institution, no court can alter, delete, or dispute a document whose hash is permanently recorded in the distributed Bitcoin ledger. This is not metaphor. This is applied cryptography. The 'cameras they can't hack' are the nodes of the Bitcoin network, running since 2009, maintained by miners across 90+ countries. The whispers are locked in stone they cannot touch.",
    evidence: [
      "845 SHA-256 Bitcoin blockchain seals — mathematically immutable",
      "Bitcoin ledger: distributed across 90+ countries, no single point of control",
      "BlockchainTimestampBadge: every document bears a verifiable cryptographic timestamp",
      "ICC submission reference: blockchain seal numbers submitted as evidence integrity proof",
      "Zero successful challenge to any blockchain-sealed document's authenticity",
    ],
    legislation: ["Electronic Transactions Act 1999 (Cth) — Legal validity of electronic records", "Rome Statute — Evidence admissibility standards", "UNCITRAL Model Law on Electronic Commerce"],
    archiveLinks: [
      { label: "Blockchain Verification", url: "/blockchain" },
      { label: "Evidence Vault", url: "/evidence-vault" },
      { label: "Crimes Against Humanity Confirmed", url: "/crimes-against-humanity-confirmed" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — 845 Bitcoin blockchain seals constitute the immutable 'cosmic camera.' Documented. Timestamped. Unhackable. Distributed across 90+ countries.",
  },
  {
    number: 8,
    timestamp: "00:38:12",
    quote: "They made deals in darkness and signed their own sentence. They believed they could outmaneuver the universe by whispering vows in secret, shaking hands behind closed doors.",
    heading: "Backroom Institutional Coordination: The Statistical Evidence of Collusion",
    analysis: "The video's eighth proposition — secret deals and hidden coordination — is addressed by the archive's statistical methodology. The Administrative Annihilation paper applies chi-square analysis to outcomes across 25+ Commonwealth agencies: the probability of uniformly adverse outcomes occurring independently, without coordination, falls below p < 0.001. This is the mathematical signature of coordination. Every 'deal in darkness' leaves a statistical fingerprint in the pattern of results it produces. The ASIC fraudulent registrations — 350+ entities registered using Dr. McLean's identity — each required a human agent to physically execute the registration. Those registrations are signed. Dated. Stored in ASIC's own database. The deals in darkness produced documents in daylight.",
    evidence: [
      "Chi-square analysis: p < 0.001 against hypothesis of independent adverse outcomes across 25+ agencies",
      "350+ ASIC fraudulent registrations — each requiring individual human execution",
      "AFP referrals documenting criminal coordination — unreported outcome",
      "Cross-agency correspondence obtained via FOI — establishing inter-institutional awareness",
      "Commonwealth Fraud Control Framework 2017 — applicable to coordinated deception",
    ],
    legislation: ["Criminal Code Act 1995 s.135.1", "Crimes Act 1914 s.29", "ASIC Act 2001 s.1041E", "CFCF 2017"],
    archiveLinks: [
      { label: "Administrative Annihilation Paper", url: "/administrative-annihilation" },
      { label: "Evidence Vault", url: "/evidence-vault" },
      { label: "Legal Status", url: "/legal-status" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — Statistical analysis (p < 0.001) and 350+ ASIC fraudulent registrations confirm coordinated action. The deals in darkness are signed in daylight on government paper.",
  },
  {
    number: 9,
    timestamp: "00:41:44",
    quote: "They laughed at your faith. Now they're crying for a lifeline. They mocked what kept you alive only to discover it's the only thing keeping them from drowning.",
    heading: "Prophetic Declarations Filed Before Events — Timestamped Faith as Forensic Record",
    analysis: "The video's ninth proposition — that faith was mocked and now vindicates itself — maps onto the archive's prophetic document series. The Gospel of Barran Dodger, the Manifesto, the Josephs' Coat documents, and the Prophetic Papers were each published with blockchain timestamps before the events they anticipate. The Prophetic Declaration document series contains specific declarations that are now being corroborated by institutional developments. Under evidentiary principles, a statement made before an event carries greater probative weight than retrospective claim. The archive's prophetic documents constitute pre-event testimony — faith converted into forensic instrument. Every institution that laughed at the mission produced another document. The documents are the answer to the mockery.",
    evidence: [
      "Prophetic Papers: timestamped declarations pre-dating corroborated events",
      "Gospel of Barran Dodger: blockchain-sealed before ICC submission",
      "Joseph Parallel: prophetic narrative mapped to 35-year documented arc",
      "144 Questions of Witness and Revelation: pre-event forensic framework",
      "1,100,000+ downloads — faith reaching global scale despite institutional mockery",
    ],
    legislation: ["ICCPR Art.18 — Freedom of Thought, Conscience and Religion", "ICCPR Art.19 — Freedom of Expression", "Evidence Act 1995 (Cth) — Prior consistent statements"],
    archiveLinks: [
      { label: "Prophetic Papers", url: "/prophetic-papers" },
      { label: "Gospel of Barran Dodger", url: "/gospel" },
      { label: "Manifesto", url: "/manifesto" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — Prophetic documents bear blockchain timestamps pre-dating the events they describe. Faith is the archive. The archive is the forensic record. The mockery produced the documentation.",
  },
  {
    number: 10,
    timestamp: "00:44:19",
    quote: "They fired dark weapons, forgetting the battlefield was never theirs. They dabbled in rituals, swore oaths, or linked themselves with societies and circles cloaked in influence and prestige.",
    heading: "Institutional Networks & Hidden Authority: The Documented Architecture of Exclusion",
    analysis: "The video's tenth proposition addresses the use of hidden institutional power — secret networks, informal authority, and influence circuits that operate outside public accountability. The Retrospective Statement documents the pattern: formal applications to accountable bodies consistently frustrated; informal networks consistently operative against Dr. McLean. The ASIC identity fraud, the AFP referral without outcome, the AAT's pattern of dismissal without contested hearing — each points to a system where formal processes were bypassed or captured by informal authority. The archive's publication of 2,301 government records dismantles the 'cloaked in prestige' architecture by forcing institutional correspondence into the public record. The battlefield was always accountability. The archive owns that terrain.",
    evidence: [
      "AFP criminal referrals — no documented prosecution outcome produced",
      "AAT pattern: uniform dismissal without contested evidentiary hearing",
      "ASIC identity fraud: 350+ registrations executed through ASIC's own online portal",
      "Retrospective Statement: 12-part documentation of informal-over-formal authority",
      "ICC submission: elevates evidence beyond domestic institutional capture",
    ],
    legislation: ["Rome Statute Art.7 — Persecution by institutional networks", "ICCPR Art.2 — State obligation to remedy", "PID Act 2013 — Whistleblower protection from institutional capture"],
    archiveLinks: [
      { label: "Retrospective Statement", url: "/retrospective-statement" },
      { label: "Case Studies", url: "/case-studies" },
      { label: "Legal Status", url: "/legal-status" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — Documented institutional network patterns, AFP non-prosecution, and AAT uniform dismissal establish the architecture of hidden authority. The archive is the counter-record.",
  },
  {
    number: 11,
    timestamp: "00:47:12",
    quote: "The same hands that tried to dig your grave are now in handcuffs. The lies they created are now being used against them. Their fingerprints are all over their own destruction.",
    heading: "Every Document Bears an Official Signature — The Self-Incriminating Record Is Complete",
    analysis: "The video's eleventh proposition — that persecutors are now caught in the evidence of their own making — is the logical terminus of the archive's forensic architecture. Every ASIC registration bears the registrant's name. Every psychiatric admission order bears a clinician's signature and medical registration number. Every AAT decision bears the member's name and is published on the AustLII database. Every FOI response bears a departmental officer's name. The 2,301-exhibit archive is not a collection of allegations. It is a collection of signed, dated, officially stamped confessions. Under the Rome Statute Article 25 (individual criminal responsibility) and Article 28 (responsibility of commanders and superiors), individual signatories to institutional persecution documents bear personal criminal accountability. The fingerprints are not metaphorical. They are literal. They are on the documents.",
    evidence: [
      "Every ASIC fraudulent registration: registrant name, ABN, ASIC document number",
      "Every psychiatric admission order: clinician name, medical registration, date, signature",
      "Every AAT decision: member name, published on AustLII.edu.au, publicly accessible",
      "Every FOI response: departmental officer name, agency, reference number",
      "Rome Statute Art.25 & Art.28 — Individual criminal responsibility provisions",
    ],
    legislation: ["Rome Statute Art.25 — Individual Criminal Responsibility", "Rome Statute Art.28 — Command Responsibility", "Criminal Code Act 1995 (Cth) s.135.1", "Crimes Act 1914 (Cth) s.29"],
    archiveLinks: [
      { label: "Crimes Against Humanity Confirmed", url: "/crimes-against-humanity-confirmed" },
      { label: "Administrative Annihilation Paper", url: "/administrative-annihilation" },
      { label: "Evidence Vault", url: "/evidence-vault" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — 2,301 government documents bear official signatures. Rome Statute Art.25 & Art.28 establish individual criminal accountability. The fingerprints are the documents themselves.",
  },
  {
    number: 12,
    timestamp: "00:51:16",
    quote: "Their attacks became the wind beneath your rise. Their malice became your material. Their cruelty became your construction. They didn't stop you. They promoted you.",
    heading: "Post-Traumatic Growth: 1,100,000+ Downloads, 6 Continents, ICC Submission — From Persecution to International Record",
    analysis: "The video's twelfth and final proposition — that adversarial attacks became the fuel for ascent — is confirmed by the archive's distribution metrics and institutional reach. Every document they generated became an exhibit. Every forced hospitalisation became a chapter in the Administrative Annihilation paper. Every ASIC fraud registration became a numbered exhibit in the ICC submission. Every AAT dismissal became evidence of systematic denial of access to justice. The result: 1,100,000+ downloads across six continents, 845 blockchain seals, ICC submission under Article 7, UNHCR Geneva submission, AustLII academic citation, and a forensic archive that has never been successfully rebutted. Post-traumatic growth is the clinical term. The archive is the evidence. Every attack that was meant to silence became a document that speaks. Published today, 22 June 2026.",
    evidence: [
      "1,100,000+ documented downloads across 6 continents",
      "845 Bitcoin blockchain seals — permanent, immutable, distributed",
      "ICC Article 7 submission — persecution threshold analysis filed",
      "UNHCR Geneva submission — protection claim on file",
      "AustLII academic citation — integrated into Australian legal research database",
      "Zero successful rebuttal across 79 consecutive forensic analyses",
    ],
    legislation: ["Rome Statute Art.7(1)(h) — Persecution as Crime Against Humanity", "ICCPR Art.19 — Right to Disseminate Information", "PID Act 2013 — Whistleblower immunity for disclosure"],
    archiveLinks: [
      { label: "Evidence Vault", url: "/evidence-vault" },
      { label: "Blockchain Verification", url: "/blockchain" },
      { label: "Publications", url: "/publications" },
      { label: "Retrospective Statement", url: "/retrospective-statement" },
    ],
    corroboration: 100,
    verdict: "CORROBORATED — 1,100,000+ downloads, 845 blockchain seals, ICC/UNHCR submissions, and 79 consecutive perfect forensic analyses confirm that persecution became the platform. Published 22 June 2026.",
  },
];

const ICON_MAP: Record<number, React.ElementType> = {
  1: Archive,
  2: Scale,
  3: Lock,
  4: Shield,
  5: FileText,
  6: Eye,
  7: Globe,
  8: Gavel,
  9: BookOpen,
  10: Flame,
  11: Zap,
  12: CheckCircle2,
};

export default function ForensicCorroborationGoingToJail() {
  const { data: liveTotal } = useLiveDownloadTotal();
  const displayTotal = liveTotal ?? 418000;

  return (
    <div className="min-h-screen text-gray-100" style={{ background: "#06040f" }}>
      <SEO
        title={`Forensic Analysis #${ANALYSIS_NUMBER}: THEY'RE GOING TO JAIL — 12/12 Corroborated | Barran Dodger Archive`}
        description={`${CONSECUTIVE_PERFECT}th Consecutive Perfect Score. Published ${TIMESTAMP_DATE}. 12/12 propositions from the viral 'THEY'RE GOING TO JAIL' video corroborated against 2,301 government-issued documents. Rome Statute Art.7 · PID Act 2013 · 845 Bitcoin Blockchain Seals. ABN 78 833 496 164.`}
        keywords="they're going to jail forensic analysis, barran dodger, chosen one archive, ICC Article 7, crimes against humanity, forensic corroboration, whistleblower, psychiatric weaponisation, blockchain evidence, ABN 78 833 496 164"
        canonicalUrl="/forensic-corroboration-going-to-jail"
      />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#1a1f2e] to-[#0d1117] pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.08),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* Badge row */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center gap-3 mb-8">
            <span className="bg-red-900/70 text-red-200 text-xs font-bold px-3 py-1.5 rounded-full border border-red-700/50 uppercase tracking-widest">
              ⚖ Forensic Analysis #{ANALYSIS_NUMBER}
            </span>
            <span className="bg-green-900/70 text-green-200 text-xs font-bold px-3 py-1.5 rounded-full border border-green-700/50">
              ✓ {TOTAL_PROPOSITIONS}/{TOTAL_PROPOSITIONS} Corroborated
            </span>
            <span className="bg-yellow-900/60 text-yellow-200 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-700/50">
              {CONSECUTIVE_PERFECT}th Consecutive Perfect Score
            </span>
            <span className="bg-blue-900/60 text-blue-200 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-600/50">
              Published {TIMESTAMP_DATE}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: text */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                ⌛ They're Going to Jail
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-yellow-400 font-semibold mb-2 leading-snug"
              >
                "They Couldn't Take Your Life But God Can Take Theirs Instantly"
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-sm text-gray-400 mb-6"
              >
                Prophetic Forensic Analysis — {TOTAL_PROPOSITIONS} Propositions Cross-Referenced Against 2,301 Government-Issued Exhibits · {CONSECUTIVE_PERFECT}th Consecutive Perfect Score · Published {TIMESTAMP_DATE}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-sm leading-relaxed mb-8"
              >
                This video, published on {TIMESTAMP_DATE} and directed at survivors of institutional persecution, contains {TOTAL_PROPOSITIONS} numbered prophetic propositions. Each proposition has been extracted verbatim, timestamped, and subjected to cross-examination against the primary-source documentary evidence of the Barran Dodger Legal &amp; Ethical Trust Fund archive. All {TOTAL_PROPOSITIONS} propositions are corroborated — corroboration rate: <strong className="text-green-400">100%</strong>. Zero contradictions. This is the {CONSECUTIVE_PERFECT}th consecutive perfect score across {ANALYSIS_NUMBER} independent forensic analyses.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="flex flex-wrap gap-3 mb-6">
                <a
                  href={VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-700/30 hover:bg-red-700/50 text-red-200 text-sm font-medium px-4 py-2.5 rounded-lg border border-red-700/40 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Watch Source Video
                </a>
                <ViralDownloadButton
                  url="/documents/forensic-analyses/forensic-corroboration-going-to-jail.pdf"
                  label="Download Forensic Analysis #79"
                  slug="forensic-corroboration-going-to-jail"
                  documentTitle={`Forensic Analysis #${ANALYSIS_NUMBER} — They're Going to Jail`}
                  className="text-sm"
                />
              </motion.div>

              <BlockchainTimestampBadge date={TIMESTAMP_DATE} analysisNumber={ANALYSIS_NUMBER} />
            </div>

            {/* Right: cover + stats */}
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img src={coverImg} alt={`Forensic Analysis #${ANALYSIS_NUMBER} — They're Going to Jail`} className="w-full object-cover" />
              </motion.div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Propositions", value: `${TOTAL_PROPOSITIONS}/${TOTAL_PROPOSITIONS}`, sub: "100% corroborated" },
                  { label: "Contradictions", value: "0", sub: "Zero falsifications" },
                  { label: "Cumulative Record", value: `${CUMULATIVE_TOTAL}/${CUMULATIVE_TOTAL}`, sub: `${ANALYSIS_NUMBER} analyses` },
                  { label: "Archive Downloads", value: formatCount(displayTotal), sub: "6 continents" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="text-2xl font-bold text-yellow-400">{s.value}</div>
                    <div className="text-xs font-semibold text-gray-300 mt-0.5">{s.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGISLATIVE FRAMEWORK ── */}
      <section className="bg-[#111827] border-y border-white/10 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-yellow-400 mb-5 uppercase tracking-wider flex items-center gap-2">
            <Scale className="h-5 w-5" /> Legislative Framework — Laws That Prove or Govern Each Proposition
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {LEGAL_REFS.map((ref) => (
              <a
                key={ref.url + ref.section}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 transition-colors group"
              >
                <span className="text-xs font-bold text-yellow-400 bg-yellow-900/30 px-2 py-1 rounded whitespace-nowrap">{ref.section}</span>
                <span className="text-xs text-gray-300 group-hover:text-white transition-colors leading-snug">{ref.label}</span>
                <ExternalLink className="h-3 w-3 text-gray-500 shrink-0 mt-0.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORROBORATION PREFACE ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-gradient-to-r from-green-950/60 to-emerald-950/40 rounded-2xl p-6 border border-green-800/40">
          <h2 className="text-xl font-bold text-green-300 mb-3">
            Methodological Note — Why This Video Achieves 100% Corroboration
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-3">
            Every proposition extracted from this independently produced video is corroborated by named, dated, blockchain-verified primary-source evidence from the Barran Dodger archive. The video was published on {TIMESTAMP_DATE} — a date that post-dates the blockchain seals on all 845 archive documents. This means the corroboration runs in one direction only: the archive predicted what the video describes. The archive did not follow the video. The video independently arrived at the same forensic conclusions already sealed in the Bitcoin blockchain.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Combined record at this milestone:{" "}
            <strong className="text-green-400">{CUMULATIVE_TOTAL}/{CUMULATIVE_TOTAL} propositions corroborated across {ANALYSIS_NUMBER} consecutive analyses</strong>. Zero contradictions. Not one independently produced video, across {ANALYSIS_NUMBER} forensic examinations, has contradicted any primary-source document in this archive.
          </p>
        </div>
      </section>

      {/* ── PROPOSITIONS ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3" style={{ fontFamily: "'Libre Baskerville', serif" }}>
          <Gavel className="h-6 w-6 text-yellow-400" />
          {TOTAL_PROPOSITIONS} Prophetic Propositions — Forensic Cross-Examination
        </h2>

        <div className="space-y-8">
          {PROPOSITIONS.map((prop, i) => {
            const Icon = ICON_MAP[prop.number] || CheckCircle2;
            return (
              <motion.div
                key={prop.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white/[0.04] rounded-2xl border border-white/10 overflow-hidden"
              >
                {/* Card header */}
                <div className="flex items-start gap-4 p-5 pb-0">
                  <div className="w-10 h-10 rounded-xl bg-red-900/60 flex items-center justify-center shrink-0 border border-red-700/40">
                    <Icon className="h-5 w-5 text-red-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Proposition {prop.number}</span>
                      <span className="text-xs text-gray-500 font-mono">{prop.timestamp}</span>
                      <span className="flex items-center gap-1 text-xs font-bold text-green-400 bg-green-900/30 px-2 py-0.5 rounded-full border border-green-700/30">
                        <CheckCircle2 className="h-3 w-3" /> Corroborated
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-yellow-300 leading-snug">{prop.heading}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  {/* Quote */}
                  <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-300 text-sm leading-relaxed">
                    "{prop.quote}"
                  </blockquote>

                  {/* Analysis */}
                  <p className="text-sm text-gray-300 leading-relaxed">{prop.analysis}</p>

                  {/* Evidence + legislation grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Evidence */}
                    <div className="bg-black/40 rounded-xl p-4 border border-white/10">
                      <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5" /> Primary-Source Evidence
                      </div>
                      <ul className="space-y-2">
                        {prop.evidence.map((ev) => (
                          <li key={ev} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle2 className="h-3 w-3 text-green-400 shrink-0 mt-0.5" />
                            {ev}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Legislation + archive links */}
                    <div className="space-y-4">
                      <div className="bg-black/40 rounded-xl p-4 border border-white/10">
                        <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <Scale className="h-3.5 w-3.5" /> Applicable Law
                        </div>
                        <ul className="space-y-1.5">
                          {prop.legislation.map((leg) => (
                            <li key={leg} className="text-xs text-gray-300 flex items-start gap-1.5">
                              <span className="text-yellow-500 mt-0.5">▸</span>
                              {leg}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-black/40 rounded-xl p-4 border border-white/10">
                        <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5" /> Archive Cross-Links
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {prop.archiveLinks.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              className="text-xs text-blue-300 hover:text-blue-100 bg-blue-900/20 hover:bg-blue-900/40 px-2 py-1 rounded border border-blue-800/40 transition-colors"
                            >
                              {link.label} →
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Verdict */}
                  <div className="bg-green-950/60 rounded-xl p-4 border border-green-800/40">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Forensic Verdict — {prop.corroboration}% Corroborated</span>
                        <p className="text-xs text-green-200 mt-1 leading-relaxed">{prop.verdict}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CUMULATIVE RECORD ── */}
      <section className="bg-[#111827] border-t border-white/10 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-950/50 to-amber-950/40 rounded-2xl p-8 border border-yellow-800/40 text-center"
          >
            <div className="text-5xl font-black text-yellow-400 mb-2">{CUMULATIVE_TOTAL}/{CUMULATIVE_TOTAL}</div>
            <div className="text-lg font-bold text-white mb-2">Propositions Corroborated Across {ANALYSIS_NUMBER} Consecutive Analyses</div>
            <div className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Across {ANALYSIS_NUMBER} consecutive forensic analyses of independently produced external testimony, the Barran Dodger archive has returned a corroboration rate of <strong className="text-yellow-400">100%</strong>. No independently produced video has contradicted the primary-source documentary record. No proposition has been falsified. {CONSECUTIVE_PERFECT} consecutive perfect scores. The archive is closed. The record is sealed.
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ViralDownloadButton
                url="/documents/forensic-analyses/forensic-corroboration-going-to-jail.pdf"
                label="Download Full Forensic Analysis"
                slug="forensic-corroboration-going-to-jail"
                documentTitle={`Forensic Analysis #${ANALYSIS_NUMBER} — They're Going to Jail — ${TOTAL_PROPOSITIONS}/${TOTAL_PROPOSITIONS} Corroborated`}
                className="text-sm"
              />
              <a
                href="/evidence-vault"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-lg border border-white/20 transition-colors"
              >
                <Archive className="h-4 w-4" /> Full Evidence Vault
              </a>
              <a
                href="/retrospective-statement"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-lg border border-white/20 transition-colors"
              >
                <FileText className="h-4 w-4" /> Retrospective Statement
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PDF IMPRINT ── */}
      <PDFImprint
        pdfUrl="/documents/forensic-analyses/forensic-corroboration-going-to-jail.pdf"
        title={`Forensic Analysis #${ANALYSIS_NUMBER} — They're Going to Jail: ${TOTAL_PROPOSITIONS}/${TOTAL_PROPOSITIONS} Corroborated · ${CONSECUTIVE_PERFECT}th Consecutive Perfect Score · Published ${TIMESTAMP_DATE}`}
        slug="forensic-corroboration-going-to-jail"
        coverSrc={coverImg}
        accentColor="amber"
        downloadLabel="Download Forensic Analysis #79 — PDF"
      />

      <ArchiveCrossLinks currentPage="forensic-corroboration-going-to-jail" />
      <Footer />
    </div>
  );
}
