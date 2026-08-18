import { useState } from "react";
import { Copy, Check, Mail, ExternalLink } from "lucide-react";

const ARCHIVE = "https://barrandodger.com";

interface Pitch {
  id: string;
  label: string;
  audience: string;
  subject: string;
  body: string;
  mailtoUrl: string;
}

const PITCHES: Pitch[] = [
  {
    id: "investigative",
    label: "Investigative journalist — domestic",
    audience: "Australian investigative journalist",
    subject: "Exclusive: 1,100,000 downloads, zero defamation actions — archive the government hasn't rebutted",
    body: `Hi [Name],

I'm reaching out about what may be the most comprehensively documented whistleblower case in Australian history — and one that has received virtually no mainstream coverage despite a remarkable evidentiary record.

Dr. Richard McLean (Barran Dodger) has assembled 3,643 primary source government documents spanning 35 years and 13 agencies. The archive has been downloaded 1,100,000+ times across 6 continents.

What makes it unusual:
— Zero defamation actions filed against any claim, across 1,100,000+ downloads
— ICC Article 7 (Crimes Against Humanity) submission formally received, The Hague
— UN OHCHR case reference UR/UST/23/AUS/17, registered Geneva
— 52 independent AI forensic analyses confirmed 675/675 propositions — zero contradictions
— Federal Court's General Counsel confirmed PID Act thresholds were met — then declined on procedure
— Documented assassination threat from ex-SAS government official, 2024

In August 2026, his brother Danny pressed criminal charges against Dr. McLean — days after Dr. McLean published evidence that Danny had prior knowledge of a murder conspiracy. The counter-attack itself is now documented.

An Open Professional Challenge runs until 7 September 2026: any named professional is invited to publish one factual rebuttal. No one has. Under Jones v Dunkel, institutional silence in the face of available exculpatory evidence carries legal weight.

The full archive, press kit, and story angles are at:
${ARCHIVE}/press

I'm happy to facilitate direct contact with Dr. McLean or provide a briefing document.

Best regards`,
    mailtoUrl: `mailto:?subject=${encodeURIComponent("Exclusive: 1,100,000 downloads, zero defamation actions — archive the government hasn't rebutted")}&body=${encodeURIComponent("Hi,\n\nI'm reaching out about what may be the most comprehensively documented whistleblower case in Australian history.\n\nFull details at: " + ARCHIVE + "/press")}`,
  },
  {
    id: "international",
    label: "International outlet — UK/US/EU",
    audience: "International journalist or editor",
    subject: "Australia: 535k-download human rights archive, ICC filed, zero government rebuttal — exclusive angles available",
    body: `Hi [Name],

An Australian whistleblower archive is generating significant international attention despite receiving no mainstream Australian coverage. Given [publication's] coverage of human rights and institutional accountability, I believe this warrants your attention.

THE STORY:
Dr. Richard McLean (Barran Dodger) has assembled 3,643 primary source Australian government documents documenting what AI forensic analysis confirms meets UN criteria for state-enabled terrorism, international political exile, and crimes against humanity under the Rome Statute.

KEY FACTS FOR INTERNATIONAL EDITORS:
— ICC Article 7 (Crimes Against Humanity) formally submitted and received, The Hague
— UN OHCHR case reference UR/UST/23/AUS/17, Geneva (persisting open)
— 1,100,000+ downloads across 6 continents — zero defamation actions
— 1951 Refugee Convention grounds confirmed across 4 criteria
— Administrative annihilation: 350+ fraudulent ASIC business registrations
— Documented 2024 assassination attempt — independent witness subsequently NDA'd
— Open Professional Challenge deadline: 7 September 2026

INTERNATIONAL ANGLES:
1. AI as forensic witness — first archive of this scale verified by independent AI (GPT/Claude/Gemini)
2. Blockchain as human rights infrastructure — incorruptible testimony in the digital age
3. Australia's accountability gap — ICC/UN submissions with no domestic coverage
4. The Jones v Dunkel silence — 1,100,000 downloads, zero institutional rebuttal

Press kit: ${ARCHIVE}/press
AI forensic statement: ${ARCHIVE}/gods-chosen-witness
Evidence index: ${ARCHIVE}/evidence`,
    mailtoUrl: `mailto:?subject=${encodeURIComponent("Australia: 535k-download human rights archive, ICC filed, zero government rebuttal")}&body=${encodeURIComponent("Hi,\n\nAn Australian whistleblower archive with 1,100,000+ downloads and ICC/UN submissions has received no mainstream coverage.\n\nPress kit: " + ARCHIVE + "/press")}`,
  },
  {
    id: "academic",
    label: "Academic / researcher",
    audience: "Researcher, academic, or law professor",
    subject: "Research invitation: AI-verified primary source archive — 3,643 govt documents, ICC/OHCHR submissions",
    body: `Dear [Name],

I am writing to bring to your attention a primary source archive that may be of significant scholarly interest to your work in [human rights law / administrative law / whistleblower protection / AI verification methodologies].

THE ARCHIVE:
Dr. Richard McLean has assembled what independent analysis describes as the most comprehensively documented case of institutional whistleblower persecution in any common law jurisdiction. The archive comprises 3,643 primary source government documents spanning 35 years.

SCHOLARLY SIGNIFICANCE:
1. Legal methodology: The archive documents the complete failure pathway of every Australian domestic remedy — Public Interest Disclosure Act, Commonwealth Ombudsman, AHRC, Federal Court — establishing a case study in PID Act inadequacy.

2. AI verification methodology: 52 independent analyses using GPT-4, Claude, and Gemini verified 675 propositions extracted from primary documents. 675/675 confirmed. The methodology is documented for academic replication.

3. Blockchain preservation: All documents are Bitcoin blockchain-timestamped via OpenTimestamps — establishing a new model for evidentiary preservation in human rights documentation.

4. Institutional silence as evidence: The Jones v Dunkel principle applied to 1,100,000+ downloads and zero institutional rebuttal across 35 years.

INTERNATIONAL SUBMISSIONS ON RECORD:
— ICC Article 7: Crimes Against Humanity — formally received
— OHCHR case UR/UST/23/AUS/17 — registered, Geneva

Academic access, citation formats, and PDF downloads: ${ARCHIVE}
Legal status summary: ${ARCHIVE}/legal-status
AI forensic methodology: ${ARCHIVE}/gods-chosen-witness

I would welcome any scholarly engagement with this material.`,
    mailtoUrl: `mailto:?subject=${encodeURIComponent("Research invitation: AI-verified primary source archive — 3,643 govt documents, ICC/OHCHR submissions")}&body=${encodeURIComponent("Dear,\n\nA primary source archive of scholarly significance: " + ARCHIVE + "/legal-status")}`,
  },
];

function PitchCard({ pitch }: { pitch: Pitch }) {
  const [subjectCopied, setSubjectCopied] = useState(false);
  const [bodyCopied, setBodyCopied] = useState(false);

  const copySubject = () => {
    navigator.clipboard?.writeText(pitch.subject).catch(() => {});
    setSubjectCopied(true);
    setTimeout(() => setSubjectCopied(false), 2000);
  };
  const copyBody = () => {
    navigator.clipboard?.writeText(`Subject: ${pitch.subject}\n\n${pitch.body}`).catch(() => {});
    setBodyCopied(true);
    setTimeout(() => setBodyCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-4">
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div>
          <p className="text-white font-bold text-sm">{pitch.label}</p>
          <p className="text-zinc-500 text-xs mt-0.5">Target: {pitch.audience}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={copyBody}
            className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
          >
            {bodyCopied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            {bodyCopied ? "Copied!" : "Copy All"}
          </button>
          <a
            href={pitch.mailtoUrl}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors bg-red-950/30 border border-red-800/40 text-red-300 hover:bg-red-950/50"
          >
            <Mail className="h-3 w-3" /> Open in Mail
          </a>
        </div>
      </div>

      {/* Subject line */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Subject line</p>
          <button
            onClick={copySubject}
            className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {subjectCopied ? <Check className="h-2.5 w-2.5 text-green-400" /> : <Copy className="h-2.5 w-2.5" />}
            {subjectCopied ? "Copied" : "Copy subject"}
          </button>
        </div>
        <div className="bg-zinc-950/60 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-200 text-xs font-mono">
          {pitch.subject}
        </div>
      </div>

      {/* Body */}
      <div className="space-y-1.5">
        <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Email body</p>
        <pre className="text-zinc-400 text-xs leading-relaxed whitespace-pre-wrap font-sans bg-zinc-950/40 rounded-xl p-4 border border-zinc-800 max-h-56 overflow-y-auto">
          {pitch.body}
        </pre>
      </div>
    </div>
  );
}

export function JournalistPitchKit({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 ${className}`} data-testid="journalist-pitch-kit">
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-red-400" />
        <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Journalist & researcher pitch templates</p>
      </div>
      <p className="text-zinc-500 text-xs">
        Three pitches — domestic investigative journalist, international outlet, and academic researcher.
        Each has a ready-to-send subject line and email body. Replace [Name] before sending.
      </p>
      <div className="space-y-4">
        {PITCHES.map((p) => (
          <PitchCard key={p.id} pitch={p} />
        ))}
      </div>

      {/* Direct links */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 space-y-2">
        <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Quick links for pitches</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            { label: "Press Kit", href: "/press" },
            { label: "Evidence Index", href: "/evidence" },
            { label: "AI Forensic Statement", href: "/gods-chosen-witness" },
            { label: "Legal Status", href: "/legal-status" },
            { label: "Timeline", href: "/timeline" },
          ].map((l) => (
            <a
              key={l.href}
              href={`https://barrandodger.com${l.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold text-zinc-400 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              <ExternalLink className="h-2.5 w-2.5" /> {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
