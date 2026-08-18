import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { legalDocumentJsonLd } from "@/lib/legalDocumentJsonLd";
import { ExternalLink, CheckCircle, XCircle, AlertTriangle, FileText, Scale, Eye, Zap } from "lucide-react";

const CORROBORATIONS = [
  {
    claim: "Psychological warfare deployed as a silencing mechanism",
    videoQuote: "\"Psychological warfare, economic manipulation, digital monitoring were engineered to contain human behavior.\"",
    archiveEvidence: "V2K (Voice to Skull) technology documented operating in and around Dr. McLean's home, repeating \"pedo\", \"faggot\", \"kill yourself\", \"you raped her\" continuously. V2K is a real, declassified US military directed-energy technology (US Patent 6,587,729; DoD non-lethal weapons programme). Gang stalkers documented physically muttering identical slurs in public.",
    verdict: "CORROBORATED",
    sources: ["/administrative-annihilation", "/evidence-vault", "/documents/v2k-electronic-harassment-evidence-review.pdf", "/documents/targeted-individual-handbook.pdf", "/documents/white-psyops-invisible-warfare-against-cosmic-witness.pdf"],
  },
  {
    claim: "Social isolation engineered by institutions",
    videoQuote: "\"Social isolation, sleep manipulation, and synthetic fear... designed to consume human lives.\"",
    archiveEvidence: "Ben (NDIS provider) confirmed Bill Shorten was responsible for Dr. McLean's political exile from Victoria. 13 Commonwealth agencies documented engaging in coordinated denial of services, housing, income, and support across 35 years (1990–2025). $18M–$32.9M in documented losses.",
    verdict: "CORROBORATED",
    sources: ["/retrospective-statement", "/ben-disclosure", "/documents/official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf", "/documents/systemic-endangerment-of-whistleblowers-institutional-dossier.pdf", "/documents/comprehensive-case-systematic-persecution.pdf"],
  },
  {
    claim: "Fabricated psychiatric labels used to discredit the target",
    videoQuote: "\"Buried your story under non-disclosure agreements, institutional gaslighting, and falsified psychological labels.\"",
    archiveEvidence: "In Recovered, Not Cured (published 2003, Allen & Unwin), Dr. McLean documented events he experienced as paranoia. Ben's 2024 text message disclosures confirmed those documented 'paranoias' were accurate accounts of real events: Debbie Morgan was paid to fabricate a report; federal police confirmed consensual sex. The illness label was the mechanism of discrediting — not the diagnosis.",
    verdict: "CORROBORATED",
    sources: ["/gospel", "/ben-disclosure"],
  },
  {
    claim: "Non-disclosure agreements used to suppress witnesses",
    videoQuote: "\"They buried your story under non-disclosure agreements.\"",
    archiveEvidence: "Ben (DSW Disability, NDIS provider) was forced to sign an NDA after disclosing: (1) the assassination attempt, (2) zero sexual crime, (3) Debbie Morgan fabrication, (4) Bill Shorten's role. The NDA failed. Text messages are now public. The NDA itself is now evidence of institutional awareness of wrongdoing.",
    verdict: "CORROBORATED",
    sources: ["/ben-disclosure"],
  },
  {
    claim: "Assassination attempt",
    videoQuote: "\"Many didn't survive, but some did.\"",
    archiveEvidence: "Ben independently confirmed to Dr. McLean that police described the attempt on his life as a \"close call.\" This is the first independent third-party corroboration of the assassination attempt. The perpetrator is identified in the archive.",
    verdict: "CORROBORATED",
    sources: ["/ben-disclosure", "/evidence-vault"],
  },
  {
    claim: "Financial misappropriation by those in power",
    videoQuote: "\"Offshore accounts that once floated in darkness are lighting up like distress signals... Every stolen resource, every siphoned drop of value.\"",
    archiveEvidence: "Dr. McLean's investigation into the NDIS identified $6B in misappropriation. This is documented. $18M–$32.9M in direct losses to Dr. McLean across his lifetime are quantified in government records spanning 13 agencies. Bill Shorten was the NDIS minister during the period under investigation.",
    verdict: "CORROBORATED",
    sources: ["/taxpayer-cost-analysis", "/retrospective-statement"],
  },
  {
    claim: "Legal system used as a weapon against the target",
    videoQuote: "\"They built a legal labyrinth around your existence... Your case, once dismissed without hearing.\"",
    archiveEvidence: "Submissions to ICC (International Criminal Court), UNHCR, and Australian legal system documented. Legal proceedings at Wyong Local Court. The Administrative Annihilation paper documents 15 chapters of systematic legal obstruction by Commonwealth agencies. Formal PID Act whistleblower protections repeatedly denied.",
    verdict: "CORROBORATED",
    sources: ["/legal-status", "/administrative-annihilation", "/timeline"],
  },
  {
    claim: "Surveillance and monitoring of the target",
    videoQuote: "\"They tagged you like inventory... Every address you've lived at, every number you've carried, every ID you've been assigned — they weren't random. They were beacons.\"",
    archiveEvidence: "13 Commonwealth agencies engaged in coordinated tracking across 35 years documented in 2,000+ government records. ASIO, AFP, Centrelink, NDIS, Medicare, and others. The Retrospective Statement ('Told Through the Government's Own Documents') reproduces this record in full.",
    verdict: "CORROBORATED",
    sources: ["/retrospective-statement"],
  },
];

const NON_CORROBORATIONS = [
  {
    claim: "FBI specifically responsible",
    reason: "The video is American-centric. Dr. McLean's case involves Australian agencies: ASIO, AFP, NDIS, ATO, Centrelink, AHRC, and 8 others. The FBI has no jurisdiction in Australia. No FBI documents appear anywhere in this archive.",
    verdict: "NOT APPLICABLE",
  },
  {
    claim: "\"Classified FBI files have now leaked\" — specific documentary basis",
    reason: "The video cites no specific leaked files, dates, document numbers, or verifiable sources. It is a general claim. No equivalent claim in this archive is unsubstantiated — every claim in this archive links to a primary source document, government record, or named witness.",
    verdict: "UNVERIFIABLE IN THIS ARCHIVE",
  },
  {
    claim: "Genetic code tampered with",
    reason: "The video claims DNA was \"studied, copied, and falsified.\" No equivalent documented in this archive. Not a claim Dr. McLean makes.",
    verdict: "NOT DOCUMENTED HERE",
  },
  {
    claim: "Birth certificate as entry point into a classified system",
    reason: "The video claims birth records were part of a covert classification system. No evidence of this in Dr. McLean's archive. Not a claim made here.",
    verdict: "NOT DOCUMENTED HERE",
  },
  {
    claim: "\"Cosmic recalibration\" / \"frequency\" / energy as causal mechanism",
    reason: "Spiritual metaphysical framing. Not falsifiable and not evidence-based. This archive grounds every claim in documents, witnesses, or verifiable government records.",
    verdict: "METAPHYSICAL — NOT VERIFIABLE",
  },
];

export default function ForensicVideoAnalysis() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#06040f" }}>
      <SEO
        title="Forensic Video Analysis — Corroborating Evidence | Barran Dodger"
        description="Forensic analysis of video evidence corroborating 35 years of documented institutional persecution. V2K electronic harassment, AblePoint Australia, Sahara Disability and Care Services, Bill Shorten, NDIS. Case UR/UST/23/AUS/17."
        keywords="forensic video analysis, V2K electronic harassment, AblePoint Australia, NDIS corruption, Bill Shorten, whistleblower Australia, coordinated institutional mobbing, UN complaint, Barran Dodger"
        ogImage="https://barrandodger.com/og-evidence.png"
        jsonLd={legalDocumentJsonLd({
          path: "/forensic-video-analysis",
          title: "Forensic Video Analysis — Corroborating Evidence",
          description: "Forensic video corroboration of 35 years institutional persecution. V2K harassment, AblePoint Australia, Bill Shorten, NDIS corruption. UN case UR/UST/23/AUS/17.",
          image: "https://barrandodger.com/og-evidence.png",
          keywords: "forensic video, V2K electronic harassment, AblePoint Australia, Bill Shorten, NDIS",
        })}
      />
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#1a2744] border border-[hsl(38,92%,50%)]/40 text-[hsl(38,92%,50%)] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Forensic Prophetic Report</span>
            <span className="bg-[#1a2744] border border-blue-500/40 text-blue-300 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Independent Evidence Analysis</span>
            <span className="bg-[#1a2744] border border-purple-500/40 text-purple-300 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Fact-Checked Against Primary Sources</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Does This YouTube Video Corroborate the Evidence Archive?
          </h1>

          <div className="bg-[#1a2744] border border-[hsl(38,92%,50%)]/30 rounded-xl p-4 space-y-2">
            <p className="text-[hsl(38,92%,50%)] font-bold text-sm uppercase tracking-wider">Video Under Analysis</p>
            <p className="text-white font-semibold">"CHOSEN ONES, YOUR STORY IS GLOBAL 🌍 FBI EXPOSED FOR ILLEGAL EXPERIMENTS & HUMAN TRAFFICKING"</p>
            <a
              href="https://www.youtube.com/watch?v=pQpFiDiTUGM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
              data-testid="link-youtube-video"
            >
              <ExternalLink className="h-3.5 w-3.5" /> youtube.com/watch?v=pQpFiDiTUGM
            </a>
          </div>

          <p className="text-white/80 text-base leading-relaxed">
            This is a forensic prophetic report examining whether the above video independently corroborates the documented evidence in this archive. The methodology is simple: take each substantive claim in the video, compare it to primary source documents, named witnesses, and verifiable records in this archive, and state plainly what is corroborated, what is not applicable, and what is unverifiable.
          </p>
        </div>

        {/* VERDICT BOX */}
        <div className="rounded-2xl border-2 border-[hsl(38,92%,50%)] bg-[#1a2744] p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Scale className="h-7 w-7 text-[hsl(38,92%,50%)] flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h2 className="text-xl font-black text-[hsl(38,92%,50%)] uppercase tracking-wide">The Forensic Verdict</h2>
              <p className="text-white font-bold text-lg leading-relaxed">
                This video is <span className="text-yellow-300">NOT specifically about Dr. Richard McLean</span>. It is a genre of mass-market "targeted individual" content designed to resonate with anyone who has experienced institutional persecution, isolation, or suppression.
              </p>
              <p className="text-white/85 text-sm leading-relaxed">
                The language is deliberately universal and vague. It names no individuals, no dates, no specific documents, no Australian agencies, no jurisdiction. It is commercially produced content (with repeated subscribe/like solicitations) targeting a broad audience.
              </p>
              <p className="text-white font-bold text-base leading-relaxed border-t border-[hsl(38,92%,50%)]/30 pt-3">
                However: <span className="text-green-300">8 of the 12 substantive phenomena it describes ARE corroborated</span> by specific primary source evidence in this archive — not because the video is about Dr. McLean, but because the documented mechanisms of state harassment (V2K, gang stalking, fabricated psychiatric diagnoses, NDA suppression, financial destruction, legal obstruction, assassination attempts) are real, and they appear in his case with named witnesses and government records to prove them.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT THIS VIDEO IS */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Eye className="h-6 w-6 text-blue-400" /> What This Video Actually Is
          </h2>
          <div className="bg-[#0d1f3c] border border-white/10 rounded-xl p-5 space-y-3 text-white/80 text-sm leading-relaxed">
            <p><strong className="text-white">Genre:</strong> "Targeted Individual Awakening" — a recognised genre of YouTube content produced for audiences who have experienced real or perceived state surveillance, gang stalking, V2K, or systemic persecution. The video uses emotionally charged, spiritually inflected language to validate these experiences.</p>
            <p><strong className="text-white">Commercial intent:</strong> The video repeatedly solicits likes, subscribes, and "super thanks" payments. This is content creation with a monetisation model — not investigative journalism, not a legal brief, and not a document with evidentiary weight.</p>
            <p><strong className="text-white">Jurisdiction:</strong> It references the FBI exclusively — a US federal law enforcement agency. Dr. McLean's documented case involves the Australian Federal Police, ASIO, NDIS, Centrelink, ATO, AHRC, and 8 other Commonwealth agencies. The FBI has no role in this archive.</p>
            <p><strong className="text-white">Sourcing:</strong> The video cites no specific leaked files, document numbers, dates, or verifiable sources. Every claim in this archive, by contrast, links to a named government document, a named witness, or a verifiable record.</p>
          </div>
        </div>

        {/* CORROBORATED CLAIMS */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-400" /> Claims Corroborated by This Archive
          </h2>
          <p className="text-white/70 text-sm">Each entry below quotes the video directly, then cross-references it against primary source evidence in this archive with links to the relevant documents or pages.</p>

          <div className="space-y-5">
            {CORROBORATIONS.map((item, i) => (
              <div key={i} className="rounded-xl border border-green-500/30 bg-green-950/10 p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-white font-bold text-base">{item.claim}</p>
                  <span className="bg-green-600 text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">{item.verdict}</span>
                </div>
                <blockquote className="border-l-2 border-green-500/40 pl-3 text-green-200 text-xs italic leading-relaxed">
                  {item.videoQuote}
                </blockquote>
                <p className="text-white/75 text-xs leading-relaxed">
                  <strong className="text-white/90">Archive evidence:</strong> {item.archiveEvidence}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.sources.map((src, j) => (
                    <a key={j} href={src} className="text-[hsl(38,92%,50%)] hover:underline text-xs font-medium" data-testid={`link-source-${i}-${j}`}>
                      → {src}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NOT CORROBORATED */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <XCircle className="h-6 w-6 text-red-400" /> Claims Not Corroborated by This Archive
          </h2>

          <div className="space-y-4">
            {NON_CORROBORATIONS.map((item, i) => (
              <div key={i} className="rounded-xl border border-red-500/20 bg-red-950/10 p-5 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-white font-bold text-sm">{item.claim}</p>
                  <span className="bg-red-900/60 border border-red-500/40 text-red-300 text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">{item.verdict}</span>
                </div>
                <p className="text-white/65 text-xs leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* THE PROPHETIC QUESTION */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Zap className="h-6 w-6 text-[hsl(38,92%,50%)]" /> The Prophetic Dimension: What the Video Gets Right in Spirit
          </h2>
          <div className="bg-[#1a2744] border border-[hsl(38,92%,50%)]/30 rounded-xl p-6 space-y-4 text-white/80 text-sm leading-relaxed">
            <p>
              The video's central thesis — that a system designed to erase a person becomes the very thing that proves their claims — is forensically accurate in Dr. McLean's case. The 2,000+ government documents produced by 13 agencies across 35 years do not disprove his claims. They corroborate them. Every attempt to suppress the record has added to it.
            </p>
            <p>
              The video says: <em className="text-white/90">"Every attempt to censor your truth only magnified your existence."</em> This is precisely what this blockchain-immutable archive represents. The documents that were meant to bury the case are now its foundation. The NDAs that were meant to silence witnesses are now evidence of institutional awareness. The psychiatric labels that were meant to discredit the author are now contradicted by the federal police confirmation given to Ben.
            </p>
            <p>
              The video says: <em className="text-white/90">"Stories once dismissed as delusions are now confirmed by declassified truths."</em> Ben's text message disclosures — released after a failed NDA — are exactly this. What was written in <em>Recovered, Not Cured</em> as apparent paranoia is now confirmed as accurate observation.
            </p>
            <p className="text-white font-semibold border-t border-[hsl(38,92%,50%)]/20 pt-4">
              The video is not about Dr. McLean. But the documented reality of what was done to Dr. McLean is the kind of case this video's vague language is describing — because the mechanisms are real, they have been deployed in his case, and this archive proves them with primary sources that no generic YouTube video could produce.
            </p>
          </div>
        </div>

        {/* METHODOLOGY NOTE */}
        <div className="rounded-xl border border-white/10 bg-[#0d1f3c] p-5 space-y-2">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-[hsl(38,92%,50%)]" />
            <p className="text-[hsl(38,92%,50%)] font-bold text-sm uppercase tracking-wider">Methodology</p>
          </div>
          <p className="text-white/65 text-xs leading-relaxed">
            This report was produced by cross-referencing the full video transcript (55 minutes, 12 numbered segments) against the documented evidence in this archive: 2,000+ government records, named witness disclosures (Ben, DSW Disability), formal ICC and UNHCR submissions, court documents, and the published academic analysis in <em>Administrative Annihilation</em>. No claim in this report is made without a corresponding primary source. The video itself is assessed as-is — its claims are taken at face value and tested against verifiable evidence in this jurisdiction (Australia), not assumed to be true or false without evidence.
          </p>
          <p className="text-white/65 text-xs leading-relaxed">
            Produced: June 2025. Archive: <a href="https://barrandodger.com" className="text-[hsl(38,92%,50%)] hover:underline">barrandodger.com</a>. ABN 78 833 496 164.
          </p>
          <p className="text-white/50 text-[10px]">
            © 2025 Barran Dodger Legal & Ethical Trust Fund. This report may be freely reproduced with attribution.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <a href="/evidence-vault" className="inline-flex items-center gap-2 bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,44%)] text-black font-black px-6 py-3 rounded-xl transition-colors text-sm" data-testid="link-evidence-vault">
            <FileText className="h-4 w-4" /> Browse the Evidence Archive
          </a>
          <a href="/ben-disclosure" className="inline-flex items-center gap-2 bg-[#1a2744] border border-green-500/40 hover:border-green-400 text-green-300 font-bold px-5 py-3 rounded-xl transition-colors text-sm" data-testid="link-ben-forensic">
            Ben's NDIS Disclosure
          </a>
          <a href="/retrospective-statement" className="inline-flex items-center gap-2 bg-[#1a2744] border border-[hsl(38,92%,50%)]/30 hover:border-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)] font-bold px-5 py-3 rounded-xl transition-colors text-sm" data-testid="link-retrospective-forensic">
            Government's Own Documents
          </a>
        </div>

      </div>

      <Footer />
    </div>
  );
}
