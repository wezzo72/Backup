import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import coverImg from "@/assets/images/cover-master-consolidated-legal-record.png";

export default function MasterConsolidatedLegalRecord() {
  return (
    <div className="min-h-screen" style={{ background: "#06080f", paddingTop: "var(--nav-height, 80px)" }}>
      <SEO
        title="Master Consolidated Legal Record — Federal Court Affidavit, Statement of Facts & Full Annexure Index | Dr Richard McLean | ABN 78 833 496 164"
        description="271-page Federal Court of Australia master dossier: comprehensive affidavit, statement of facts, causes of action, and full annexure index. Dr Richard William McLean (Barran Dodger). 240+ cross-referenced government documents. Zero criminal charges. ABN 78 833 496 164."
        path="/master-consolidated-legal-record"
        keywords="master consolidated legal record Federal Court Australia, Dr Richard William McLean affidavit, Barran Dodger legal dossier, statement of facts causes of action annexure, 240 government documents whistleblower, NSW respondents NDIS health authorities, demand for due process never charged, criminal allegations no arrest no charge, administrative annihilation Federal Court, ABN 78 833 496 164"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(233,160,10,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: "rgba(233,160,10,0.1)", border: "1px solid rgba(233,160,10,0.3)" }}>
            <span className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: "#e9a00a" }}>Federal Court of Australia · Primary Legal Exhibit</span>
          </div>

          <h1 className="font-serif font-black text-white text-3xl md:text-5xl leading-tight">
            Master Consolidated Legal Record
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Affidavit · Statement of Facts · Causes of Action · Full Annexure Index
          </p>
          <p className="text-zinc-500 text-sm">
            Dr Richard William McLean (Barran Dodger) · Federal Court of Australia, NSW Registry · 271 pages · Created 22 March 2026
          </p>

          {/* ABN & Copyright */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1 max-w-xl mx-auto">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
              All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
              Non-commercial reproduction and distribution is permitted and encouraged.
            </p>
          </div>
        </div>
      </section>

      {/* Cover image + download */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-64 flex-shrink-0">
            <img
              src={coverImg}
              alt="Master Consolidated Legal Record cover"
              className="rounded-xl border border-white/10 w-full shadow-2xl"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <ViralDownloadButton
                url="/documents/master-consolidated-legal-record.pdf"
                label="Download — Master Consolidated Legal Record"
                filename="master-consolidated-legal-record.pdf"
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
                data-testid="btn-download-master-legal-record"
              />
              <p className="text-xs text-zinc-500">
                Also included in the{" "}
                <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
                {" "}— downloaded 1,100,000+ times globally.
              </p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Document Type", value: "Federal Court Affidavit" },
                { label: "Pages", value: "271" },
                { label: "Documents Referenced", value: "240+" },
                { label: "Registry", value: "New South Wales" },
                { label: "Date Created", value: "22 March 2026" },
                { label: "Category", value: "Primary Legal Exhibit" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-0.5">{label}</p>
                  <p className="text-sm font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Significance Statement */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="rounded-2xl border border-violet-500/20 bg-violet-950/10 p-6 md:p-8 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-violet-400">AI Statement of Significance</p>
            <p className="text-white/80 leading-relaxed">
              The Master Consolidated Legal Record is the keystone document of the Barran Dodger archive — a 271-page Federal Court dossier that consolidates three and a half decades of institutional interaction into a single, court-ready legal instrument. It contains a comprehensive sworn affidavit, full statement of facts, structured causes of action, and a complete annexure index referencing 240+ cross-referenced government records.
            </p>
            <p className="text-white/80 leading-relaxed">
              Its central legal significance is the articulation of an unresolved contradiction that defines the entire case: serious allegations have been recorded against Dr McLean by multiple agencies, yet no arrest has occurred, no charge has been laid, and no judicial determination has been sought by the state. Dr McLean has <em>demanded</em> arrest, charge, and adjudication — demands refused. Instead, he was hospitalised. This document frames that contradiction as the legal centrepiece: harm without due process, allegations without burden of proof, and institutional action without judicial authority.
            </p>
            <p className="text-white/80 leading-relaxed">
              As a Federal Court–ready instrument, this record is the foundation for any counsel briefing, ICC submission, OHCHR communication, or civil damages claim arising from 35 years of documented institutional conduct. The respondents named span the State of New South Wales, federal departments, hospital systems, NDIS entities, and named individuals — making this the most complete legal consolidation in the archive.
            </p>
            <p className="text-xs text-zinc-500 mt-2">— Impartial AI Forensic Assessment · barrandodger.com · ABN 78 833 496 164</p>
          </div>

          {/* Core legal contradiction callout */}
          <div className="rounded-2xl border border-red-500/30 bg-red-950/10 p-6 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-red-400">The Central Legal Contradiction</p>
            <blockquote className="font-serif text-white text-lg md:text-xl leading-snug font-black" style={{ borderLeft: "3px solid #ef4444", paddingLeft: "1.25rem" }}>
              "Allegations exist and cause harm. No legal testing occurs. No adjudication occurs. The result: ongoing harm without legal resolution. No mechanism for exoneration. No burden of proof being discharged."
            </blockquote>
            <p className="text-zinc-400 text-sm">— Master Consolidated Legal Record, Part 7</p>
          </div>

          {/* Document structure */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">Document Structure — 271 Pages</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { part: "Part 1", title: "Introduction and Basis" },
                { part: "Part 2", title: "Identity and Context" },
                { part: "Part 3", title: "Respondents (NSW, Federal, NDIS, Health)" },
                { part: "Part 4", title: "Core Factual Matrix" },
                { part: "Part 5", title: "Demand for Due Process" },
                { part: "Part 6", title: "Response (Hospitalised, Not Charged)" },
                { part: "Part 7", title: "Central Legal Contradiction" },
                { part: "Part 8", title: "Documentary Record (240+ Documents)" },
                { part: "Part 9", title: "Significance of Full Archive" },
                { part: "Annexures", title: "Full Cross-Referenced Evidence Index" },
              ].map(({ part, title }) => (
                <div key={part} className="flex gap-3 items-start">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">{part}</span>
                  <span className="text-sm text-zinc-300">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="/free-ebooks" className="text-sm text-amber-400 underline hover:text-amber-300 transition-colors">← Full Publications Library</a>
            <a href="/forensic-analysis" className="text-sm text-amber-400 underline hover:text-amber-300 transition-colors">Forensic Analysis Index →</a>
            <a href="/systemic-endangerment-whistleblowers" className="text-sm text-amber-400 underline hover:text-amber-300 transition-colors">Companion Dossier: Systemic Endangerment →</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
