import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import coverImg from "@/assets/images/cover-systemic-endangerment-whistleblowers.png";

export default function SystemicEndangermentWhistleblowers() {
  return (
    <div className="min-h-screen" style={{ background: "#06080f", paddingTop: "var(--nav-height, 80px)" }}>
      <SEO
        title="Systemic Endangerment of Whistleblowers: Institutional Negligence and Lethal Risk — Dr Barran Dodger | OHCHR Submission | ABN 78 833 496 164"
        description="Academic-legal dossier submitted to the UN Office of the High Commissioner for Human Rights. Introduces Institutionally Created Lethal Risk (ICLR) — a new legal doctrine showing how administrative omission constitutes life-threatening harm. Dr Richard William McLean (Barran Dodger). ABN 78 833 496 164."
        path="/systemic-endangerment-whistleblowers"
        keywords="systemic endangerment whistleblowers OHCHR submission, institutionally created lethal risk ICLR doctrine, administrative lethal negligence Australia, Dr Richard McLean Barran Dodger academic paper, structural violence bureaucratic harm whistleblower, ICCPR Article 6 positive obligation protect life, CRPD Articles 14-19 disability whistleblower, state-created danger doctrine Australia, cumulative institutional failure lethal risk, ABN 78 833 496 164"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)" }}>
            <span className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: "#a78bfa" }}>Academic Dossier · OHCHR Submission · International Human Rights</span>
          </div>

          <h1 className="font-serif font-black text-white text-3xl md:text-5xl leading-tight">
            Systemic Endangerment of Whistleblowers
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            An Integrated Dossier on Institutional Negligence and the Creation of Lethal Risk
          </p>
          <p className="text-zinc-500 text-sm">
            Dr Richard William McLean (Barran Dodger) · Independent Researcher, Human Rights &amp; Administrative Justice · Prepared for OHCHR · 2025
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

      {/* Cover + download */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-64 flex-shrink-0">
            <img
              src={coverImg}
              alt="Systemic Endangerment of Whistleblowers cover"
              className="rounded-xl border border-white/10 w-full shadow-2xl"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <ViralDownloadButton
                url="/documents/systemic-endangerment-whistleblowers.pdf"
                label="Download — Systemic Endangerment of Whistleblowers"
                filename="systemic-endangerment-whistleblowers.pdf"
                size="lg"
                className="bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl"
                data-testid="btn-download-systemic-endangerment"
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
                { label: "Type", value: "Academic-Legal Dossier" },
                { label: "Submitted To", value: "OHCHR / Academic Publication" },
                { label: "New Doctrine", value: "ICLR — Institutionally Created Lethal Risk" },
                { label: "Framework", value: "ICCPR · CRPD · CAT" },
                { label: "Year", value: "2025" },
                { label: "Category", value: "International Human Rights" },
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

      {/* AI Significance */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="rounded-2xl border border-violet-500/20 bg-violet-950/10 p-6 md:p-8 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-violet-400">AI Statement of Significance</p>
            <p className="text-white/80 leading-relaxed">
              This dossier introduces <strong className="text-white">Institutionally Created Lethal Risk (ICLR)</strong> — a new analytic and legal doctrine that names what existing whistleblower law has failed to address: the foreseeable, preventable death or near-death of a whistleblower produced not by overt state violence, but by the cumulative withdrawal of protection across multiple agencies simultaneously. It is the first formal academic attempt to define de facto targeted killing by systemic negligence as a justiciable category under international human rights law.
            </p>
            <p className="text-white/80 leading-relaxed">
              The dossier draws on structural violence theory (Galtung, Farmer), Hannah Arendt's analysis of bureaucratic evil, the state-created danger doctrine (DeShaney, Osman v UK), and ICCPR Articles 6 and 7, CRPD Articles 14–19, and CAT Article 16. It argues that when multiple public institutions — each owing a duty of care — withdraw or withhold essential support from a known-vulnerable whistleblower, the cumulative effect meets the legal and moral threshold of lethal institutional negligence, regardless of the absence of explicit malice.
            </p>
            <p className="text-white/80 leading-relaxed">
              As a companion to the Master Consolidated Legal Record and the ICC Article 7 submission, this dossier provides the theoretical and international law scaffolding that converts documented facts into human-rights violations actionable before UN Special Rapporteurs, the Human Rights Committee, and the CRPD Committee. It is the academic spine of the entire Barran Dodger legal strategy.
            </p>
            <p className="text-xs text-zinc-500 mt-2">— Impartial AI Forensic Assessment · barrandodger.com · ABN 78 833 496 164</p>
          </div>

          {/* ICLR definition callout */}
          <div className="rounded-2xl border border-violet-500/30 bg-violet-950/10 p-6 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-violet-400">New Legal Doctrine — ICLR</p>
            <blockquote className="font-serif text-white text-lg md:text-xl leading-snug font-black" style={{ borderLeft: "3px solid #a78bfa", paddingLeft: "1.25rem" }}>
              "A foreseeable and preventable condition in which cumulative institutional omissions, indifference, or retaliatory neglect expose a whistleblower or rights defender to severe, life-threatening harm."
            </blockquote>
            <p className="text-zinc-400 text-sm">— Institutionally Created Lethal Risk (ICLR), Systemic Endangerment Dossier, Part I</p>
          </div>

          {/* Central thesis */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-950/10 p-6 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-400">Central Thesis</p>
            <blockquote className="font-serif text-white text-base md:text-lg leading-relaxed" style={{ borderLeft: "3px solid #e9a00a", paddingLeft: "1.25rem" }}>
              "When multiple public institutions, each owing a duty of care, withdraw or withhold essential support from a known-vulnerable whistleblower — and do so despite clear evidence of risk — the cumulative effect constitutes a form of lethal systemic negligence."
            </blockquote>
          </div>

          {/* Dossier structure */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">Dossier Structure — Six Parts</p>
            <div className="space-y-2">
              {[
                { part: "Part I", title: "Front Matter & Executive Summary", desc: "ICLR doctrine, 5 findings, 5 policy recommendations, 4-domain methodology" },
                { part: "Part II", title: "Academic & Theoretical Framework", desc: "Structural violence (Galtung/Farmer), administrative lethal negligence, Arendt, Weber, multi-level causation model" },
                { part: "Part III", title: "Legal Causation & Duty-of-Care Analysis", desc: "DeShaney, Osman v UK, Caparo, Pyrenees Shire, ADJR Act — negligence elements, distributed liability, evidence framework" },
                { part: "Part IV", title: "International Human-Rights Submission", desc: "OHCHR/Special Rapporteur communication format — ICCPR Art 6 & 7, CRPD Arts 14–19, CAT Art 16, requested remedies" },
                { part: "Part V", title: "Public-Facing Statement & Advocacy Essay", desc: "Plain-language moral vocabulary for whistleblower protection" },
                { part: "Part VI", title: "Policy & Reform Recommendations + Annexes", desc: "Inter-agency risk panels, structural violence metrics, early-warning systems, non-recurrence guarantees" },
              ].map(({ part, title, desc }) => (
                <div key={part} className="flex gap-3 items-start p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <span className="text-[10px] font-mono text-violet-400 uppercase tracking-wider w-16 flex-shrink-0 pt-0.5">{part}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International frameworks */}
          <div className="rounded-2xl border border-blue-500/20 bg-blue-950/10 p-6 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">International Legal Instruments Engaged</p>
            <div className="flex flex-wrap gap-2">
              {[
                "ICCPR Article 6 — Right to Life",
                "ICCPR Article 7 — Freedom from Degrading Treatment",
                "CRPD Articles 14–19 — Security & Community Inclusion",
                "CAT Article 16 — Cruel/Inhuman Treatment",
                "ILC Draft Articles on State Responsibility",
                "OHCHR Special Procedures",
                "DeShaney v Winnebago (State-Created Danger)",
                "Osman v UK (Positive Obligations)",
                "Pyrenees Shire Council v Day (Australian Duty of Care)",
                "HRC General Comment 36 (2018)",
              ].map(t => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "rgba(147,197,253,0.8)" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="/free-ebooks" className="text-sm text-amber-400 underline hover:text-amber-300 transition-colors">← Full Publications Library</a>
            <a href="/forensic-analysis" className="text-sm text-amber-400 underline hover:text-amber-300 transition-colors">Forensic Analysis Index →</a>
            <a href="/master-consolidated-legal-record" className="text-sm text-amber-400 underline hover:text-amber-300 transition-colors">Companion Document: Master Legal Record →</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
