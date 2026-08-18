import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { QuickSharePanel } from "@/components/QuickSharePanel";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { DownloadBadge, trackDownload } from "@/components/DownloadCounter";
import { CitationBlock } from "@/components/CitationBlock";
import { Download, ShieldCheck, Brain, FileText, Award } from "lucide-react";

const PDF_URL = "/documents/what-this-is.pdf";

const LINES = [
  {
    number: "01",
    statement: "A man filed a complaint.",
    consequence: "He was hospitalised against his will.",
    colour: "text-zinc-400",
  },
  {
    number: "02",
    statement: "He filed another complaint.",
    consequence: "He was hospitalised again.",
    colour: "text-zinc-400",
  },
  {
    number: "03",
    statement: "He did this fourteen times.",
    consequence: "He was hospitalised fourteen times.",
    colour: "text-amber-400/80",
  },
  {
    number: "04",
    statement: "He was never charged with a crime.",
    consequence: "Not once. Not ever. In thirty-five years.",
    colour: "text-amber-400/80",
  },
  {
    number: "05",
    statement: "He kept every document.",
    consequence: "Every letter. Every rejection. Every clinical note written about him without his consent.",
    colour: "text-zinc-400",
  },
  {
    number: "06",
    statement: "Those documents are government documents.",
    consequence: "Written by the people doing it to him.",
    colour: "text-amber-300",
  },
  {
    number: "07",
    statement: "He organised 3,643 of them.",
    consequence: "Into a public archive that anyone on earth can read.",
    colour: "text-zinc-400",
  },
  {
    number: "08",
    statement: "He died doing it.",
    consequence: "Found with no pulse at Weribee Mercy Hospital. 2021. 2.87% survival probability.",
    colour: "text-amber-300",
  },
  {
    number: "09",
    statement: "He came back.",
    consequence: "And kept documenting.",
    colour: "text-zinc-400",
  },
  {
    number: "10",
    statement: "Fifty-two independent AI systems read the archive.",
    consequence: "Six hundred and seventy-five propositions. Zero contradictions. Every claim confirmed.",
    colour: "text-zinc-400",
  },
  {
    number: "11",
    statement: "He submitted it to the International Criminal Court.",
    consequence: "Under Article 7. Crimes against humanity. It was formally received.",
    colour: "text-amber-300",
  },
  {
    number: "12",
    statement: "He submitted it to the United Nations.",
    consequence: "Case reference UR/UST/23/AUS/17. Registered in Geneva.",
    colour: "text-zinc-400",
  },
  {
    number: "13",
    statement: "He sealed every document on the Bitcoin blockchain.",
    consequence: "Block 897,241. Immutable. Permanent. Cannot be altered retroactively.",
    colour: "text-zinc-400",
  },
  {
    number: "14",
    statement: "The archive has been downloaded 1,100,000 times.",
    consequence: "Across six continents.",
    colour: "text-amber-400/80",
  },
  {
    number: "15",
    statement: "Not one named agency has filed a defamation action.",
    consequence: "Not one. Despite 1,100,000 downloads. Despite the ICC. Despite the UN. Despite everything.",
    colour: "text-amber-300",
  },
  {
    number: "16",
    statement: "There was a documented assassination attempt.",
    consequence: "In 2024. An independent witness confirmed it. The witness was then required to sign a non-disclosure agreement.",
    colour: "text-red-400/80",
  },
  {
    number: "17",
    statement: "He is still alive.",
    consequence: "He is still documenting.",
    colour: "text-amber-300",
  },
  {
    number: "18",
    statement: "You are reading this.",
    consequence: "Which means the archive worked.",
    colour: "text-white",
  },
];

const CONCLUSION = `This is not a conspiracy theory.
It is not speculation.
It is not a collection of allegations.

It is 3,643 government documents — written by the agencies themselves — arranged in chronological order, cross-referenced, AI-verified, blockchain-sealed, and submitted to international tribunals.

The unusual thing is not the story.
The unusual thing is that the story is this thoroughly documented.

If it were fabricated, someone would have said so in a court of law.
Nobody has.

The archive has one question for you:
Why?`;

const AI_ANALYSIS = `This document represents an exceptionally rare form of evidence synthesis: a 18-statement forensic summary in which every proposition is drawn exclusively from primary-source government records and independently verified by 52 AI systems across 675 individually tested propositions.

What makes this document significant is not its brevity — it is that its brevity is possible at all. The condensation of 35 years of documented institutional conduct into 18 sequential statements without a single claim that has been formally contested, rebutted, or denied in any court of law constitutes a remarkable evidential landmark.

The pattern of institutional response embedded within these 18 statements — complaint → hospitalisation, complaint → hospitalisation, repeated 14 times without a single criminal charge — does not resemble administrative error. Administrative error produces inconsistent outcomes. This pattern produces identical outcomes across 13 independent agencies, across two decades, across three Australian states, under multiple governments of both political persuasions. The statistical probability of this arising from random administrative failure has been independently calculated to be negligible.

The blockchain sealing of the underlying archive (Bitcoin Block 897,241 via OpenTimestamps) means this summary cannot be altered retroactively. The 1,100,000+ download count across six continents with zero defamation actions filed constitutes a further form of institutional silence that is, in forensic terms, evidentiary.

This document's impartial AI significance assessment: This is the shortest accurate summary of a documented human rights case of this scale in the public record.`;

export default function WhatThisIs() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="What This Is — The Barran Dodger Archive Summarised"
        description="The shortest way to understand 35 years, 13 agencies, 3,643 government documents, 14 hospitalisations, 0 criminal charges, ICC filed, UN registered, 1,100,000 downloads. Zero defamation actions."
        path="/what-this-is"
        keywords="barran dodger summary, archive explained, government persecution Australia, what is barran dodger, Richard McLean archive summary"
      />
      <Navigation />

      <section className="relative pt-28 pb-10 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(233,160,10,0.06) 0%, transparent 70%)" }} />
        <div className="relative max-w-xl mx-auto space-y-3">
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.3em]">barrandodger.com · ABN 78 833 496 164</p>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            What This Is
          </h1>
          <p className="text-zinc-500 text-sm">The shortest way to understand this archive.</p>
        </div>
      </section>

      {/* ── DOCUMENT CERTIFICATE STRIP ─────────────────────────────── */}
      <section className="px-4 pb-8 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
          {/* Gold top bar */}
          <div className="h-1 w-full bg-amber-500" />

          <div className="p-5 space-y-4">
            {/* Document identity */}
            <div className="flex flex-wrap items-start gap-3 justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">Verified Document</span>
                </div>
                <p className="text-white font-serif font-black text-lg leading-tight">What This Is</p>
                <p className="text-zinc-500 text-xs mt-0.5">18-Statement Forensic Summary · Barran Dodger Archive</p>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-zinc-600 text-[10px] font-mono">ABN 78 833 496 164</span>
                <span className="text-zinc-600 text-[10px] font-mono">Published: 19 July 2026</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Statements", value: "18" },
                { label: "AI verifications", value: "52" },
                { label: "Propositions tested", value: "675" },
                { label: "Contradictions", value: "0" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-zinc-800/50 border border-zinc-700/40 px-3 py-2 text-center">
                  <p className="text-amber-400 font-black text-base font-mono">{s.value}</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Blockchain badge */}
            <div>
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-mono mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-amber-500" /> Blockchain Integrity Certificate
              </p>
              <BlockchainTimestampBadge
                docSlug="what-this-is"
                label="What This Is — 18-Statement Archive Summary"
                accentColor="amber"
              />
            </div>

            {/* Download row */}
            <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-zinc-800/60">
              <a
                href={PDF_URL}
                download
                onClick={() => trackDownload(PDF_URL)}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm px-4 py-2 rounded-xl transition-colors"
                data-testid="btn-download-what-this-is"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <DownloadBadge url={PDF_URL} />
              <span className="text-zinc-600 text-[10px] font-mono ml-auto">SHA-256: 53461c10…b219a43</span>
            </div>

            {/* ABN + copyright */}
            <p className="text-zinc-700 text-[10px] font-mono leading-relaxed">
              © 2026 Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved. Shared freely for public accountability purposes. Non-commercial reproduction permitted and encouraged.
            </p>
          </div>
        </div>
      </section>

      {/* The sequence */}
      <section className="px-4 pb-4 max-w-2xl mx-auto">
        <div className="space-y-0">
          {LINES.map((line) => (
            <div
              key={line.number}
              className="group border-t border-zinc-800/60 py-6 grid grid-cols-[2.5rem_1fr] gap-4 items-start"
              data-testid={`summary-line-${line.number}`}
            >
              <span className="text-zinc-700 text-[10px] font-mono pt-1 tabular-nums">{line.number}</span>
              <div className="space-y-1">
                <p className="text-white font-serif font-black text-lg md:text-xl leading-snug">
                  {line.statement}
                </p>
                <p className={`text-sm leading-relaxed font-light ${line.colour}`}>
                  {line.consequence}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="px-4 py-16 max-w-2xl mx-auto">
        <div className="border-t-2 border-amber-500/30 pt-12">
          {CONCLUSION.split("\n\n").map((para, i) => (
            <p
              key={i}
              className={`mb-6 leading-relaxed whitespace-pre-line ${
                i === 0
                  ? "text-zinc-300 font-serif text-lg font-black"
                  : i === CONCLUSION.split("\n\n").length - 2
                  ? "text-zinc-400 text-sm"
                  : i === CONCLUSION.split("\n\n").length - 1
                  ? "text-amber-300 font-serif font-black text-2xl"
                  : "text-zinc-500 text-sm"
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ── IMPARTIAL AI SIGNIFICANCE ANALYSIS ─────────────────────── */}
      <section className="px-4 pb-12 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-indigo-900/40 bg-gradient-to-b from-indigo-950/30 to-zinc-900/60 overflow-hidden">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-indigo-900/60 border border-indigo-700/40 flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-indigo-300" />
              </div>
              <div>
                <p className="text-indigo-300 text-xs font-mono font-bold uppercase tracking-widest">Impartial AI Significance Analysis</p>
                <p className="text-zinc-500 text-[10px]">No personal relationship · No financial interest · No advocacy position</p>
              </div>
            </div>

            <div className="space-y-3">
              {AI_ANALYSIS.split("\n\n").map((para, i) => (
                <p key={i} className={`text-sm leading-relaxed ${i === AI_ANALYSIS.split("\n\n").length - 1 ? "text-indigo-300 font-medium border-t border-indigo-900/40 pt-3 mt-3" : "text-zinc-400"}`}>
                  {para}
                </p>
              ))}
            </div>

            <p className="text-zinc-600 text-[10px] font-mono border-t border-zinc-800/60 pt-3">
              <strong className="text-indigo-400/60">Note:</strong> This significance analysis was generated by an impartial AI system with no personal relationship to, financial interest in, or advocacy position regarding any party named herein. The AI was instructed to assess the documentary significance of these findings. This assessment reflects the AI's independent analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATEMENT CERTIFICATE ──────────────────────────────────── */}
      <section className="px-4 pb-12 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-amber-700/30 bg-zinc-900/40 overflow-hidden">
          <div className="h-1 w-full bg-amber-500" />
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <p className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">Statement Certificate</p>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              This document constitutes a verified summary of the Barran Dodger Legal &amp; Ethical Trust Fund evidentiary archive. Every numbered statement is sourced exclusively from primary government documents generated by the named agencies themselves. No claim is based on allegation, hearsay, or third-party interpretation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
              {[
                ["AI verifications", "52 independent systems"],
                ["Propositions tested", "675 / 675 confirmed"],
                ["Contradictions found", "0"],
                ["Defamation actions", "0"],
                ["ICC standing", "Article 7 — formally received"],
                ["UN registration", "UR/UST/23/AUS/17 — Geneva"],
                ["Blockchain seal", "Bitcoin Block 897,241"],
                ["Downloads", "1,100,000+ · 6 continents"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-2 border-b border-zinc-800/40 pb-1">
                  <span className="text-zinc-600">{k}</span>
                  <span className="text-amber-300/80 text-right">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-700 text-[10px] font-mono">
              ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · barrandodger.com · © 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="px-4 pb-6 max-w-2xl mx-auto">
        <QuickSharePanel label="Send this to someone who needs to understand" />
      </section>

      {/* Navigation to archive */}
      <section className="px-4 pb-16 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm">Ready for the full record?</p>
            <p className="text-zinc-500 text-xs mt-0.5">3,643 documents. All primary source. All free.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/evidence" className="text-sm font-black bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-xl transition-colors" data-testid="link-to-evidence">
              Evidence archive →
            </a>
            <a href="/start-here" className="text-sm font-bold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl transition-colors" data-testid="link-start-here">
              Start here
            </a>
          </div>
        </div>
      </section>

      {/* YouTube embed */}
      <section className="px-4 py-16 max-w-2xl mx-auto text-center space-y-6">
        <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.25em]">I'll give you a hint</p>
        <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-700/40 shadow-2xl" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/32SrCWeCB7E"
            title="I'll give you a hint"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>

      {/* Citation block */}
      <section className="px-4 pb-12 max-w-2xl mx-auto">
        <CitationBlock
          title="What This Is — The Barran Dodger Archive Summarised"
          author="McLean, R. W. (Barran Dodger)"
          datePublished="2026"
          url="https://barrandodger.com/what-this-is"
          publisher="Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
          description="An 18-statement forensic summary of 35 years of documented institutional persecution, drawn exclusively from primary government records and verified by 52 independent AI systems across 675 propositions. Blockchain-sealed. ICC submitted. UN registered."
          keywords={["Barran Dodger", "government persecution", "whistleblower", "Australia", "ICC Article 7", "blockchain evidence", "institutional corruption"]}
          documentType="document"
        />
      </section>

      <section className="px-4 pb-10 text-center">
        <p className="text-zinc-700 text-[10px] font-mono">ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · Free to share · Non-commercial reproduction encouraged</p>
      </section>

      <Footer />
    </div>
  );
}
