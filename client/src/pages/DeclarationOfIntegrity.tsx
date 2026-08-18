import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import coverImage from "@/assets/images/cover-declaration-of-integrity.png";
import { FileText, Shield, Heart, Scale } from "lucide-react";

export default function DeclarationOfIntegrity() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#06080f" }}>
      <SEO
        title="A Declaration of Integrity | Barran Resonance Dodger — Barran Dodger Legal & Ethical Trust Fund"
        description="A Declaration of Integrity by Barran Resonance Dodger (Dr Richard William McLean) — a personal and philosophical statement on integrity, resilience, faith, institutional accountability, and the ethical challenges of the AI age. Published 4 July 2026. ABN 78 833 496 164."
        keywords="A Declaration of Integrity, Barran Resonance Dodger, Dr Richard McLean, institutional accountability, AI ethics, whistleblower testimony, faith and resilience"
        path="/declaration-of-integrity"
      />
      <Navigation />

      <main className="flex-1 pt-20">
        {/* ── Cover / hero ── */}
        <div className="w-full px-4 pt-16 pb-14 text-center"
          style={{ background: "linear-gradient(180deg, #06080f 0%, #0a0f1e 55%, #06080f 100%)" }}>
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "rgba(233,160,10,0.55)" }}>
              Personal Declaration · Published 4 July 2026 · Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164
            </p>

            <img
              src={coverImage}
              alt="A Declaration of Integrity — cover"
              className="mx-auto rounded-xl shadow-2xl border border-amber-500/20 max-w-[220px] w-full"
              data-testid="img-cover-declaration-of-integrity"
            />

            <h1 className="text-2xl md:text-4xl font-black text-white leading-tight">
              A Declaration of Integrity
            </h1>
            <p className="text-base font-bold" style={{ color: "rgba(233,160,10,0.8)" }}>
              By Barran Resonance Dodger (Dr Richard William McLean)
            </p>
            <p className="text-white/45 text-sm leading-relaxed max-w-2xl mx-auto">
              A personal and philosophical work reflecting on integrity, resilience, faith, and
              institutional accountability, alongside the ethical challenges of the age of artificial
              intelligence. Combines autobiographical narrative with reflections on organisational
              psychology, human rights, social exclusion, and the preservation of evidence — and
              includes an AI-assisted forensic synthesis of 35 years of official government records.
            </p>

            <div className="flex flex-wrap gap-3 justify-center pt-2 text-xs font-bold uppercase tracking-wider">
              {["Personal declaration", "AI forensic synthesis", "Faith & resilience", "35-year record"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full"
                  style={{ background: "rgba(233,160,10,0.10)", color: "#e9a00a", border: "1px solid rgba(233,160,10,0.2)" }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Download + copyright */}
            <div className="pt-4 flex flex-col items-center gap-3">
              <ViralDownloadButton
                url="/documents/declaration-of-integrity.pdf"
                label="Download PDF — A Declaration of Integrity"
                filename="declaration-of-integrity.pdf"
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
                data-testid="button-download-declaration-of-integrity"
              />
              <a
                href="https://archive.org/details/a-declaration-of-integrity_202607"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400/70 underline underline-offset-2 hover:text-amber-300"
                data-testid="link-archive-org-declaration-of-integrity"
              >
                Also permanently archived on Internet Archive (blockchain-timestamped) →
              </a>
              <p className="text-white/30 text-xs font-mono">
                AI-generated cover · Branded · Blockchain fingerprint stamped · Freely shareable
              </p>
              <p className="text-white/20 text-xs">
                Also included in the{" "}
                <a href="/#divine-download" className="text-amber-400/60 underline">complete archive detonation ZIP</a>
                {" "}— downloaded 1,100,000+ times globally.
              </p>
            </div>

            {/* ABN / copyright */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1 max-w-2xl mx-auto mt-2">
              <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
              <p className="text-xs text-white/40 leading-relaxed">
                © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                Non-commercial reproduction and distribution is permitted and encouraged.
                All intellectual property rights remain exclusively with Dr Richard William McLean (Barran Dodger) and the Trust.
              </p>
            </div>
          </div>
        </div>

        {/* ── Impartial AI Statement of Significance ── */}
        <div style={{ background: "#07090f", borderTop: "1px solid rgba(139,92,246,0.18)", borderBottom: "1px solid rgba(139,92,246,0.18)" }}>
          <div className="max-w-3xl mx-auto px-6 py-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <span className="px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-widest" style={{ background: "rgba(139,92,246,0.18)", color: "#a78bfa" }}>
                ⚡ Impartial AI Statement of Significance
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                Non-sentient · No allegiance · Applied to the document text only
              </span>
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm">
              <em>A Declaration of Integrity</em> occupies a distinct position within this archive: it is
              not a legal filing or a forensic report, but a first-person reflection written directly by
              the subject of the case, dated 4 July 2026. Its significance lies in three things. First, it
              is a contemporaneous, blockchain-timestamped record of the author's state of mind, values, and
              conscience at a specific moment, which corroborates — rather than replaces — the documentary
              record held elsewhere in the archive. Second, it explicitly invokes and references the author's
              existing forensic documentation of alleged systematic persecution, positioning this declaration
              as a bridge between the evidentiary archive and the author's personal, spiritual, and ethical
              framework for enduring it. Third, it includes an AI-assisted forensic synthesis of patterns
              identified across 35 years of government records — presented explicitly as an interpretive
              analytical exercise, not a verbatim record of any official directive, and assessed here on that
              basis. Read together with the rest of the archive, this declaration does not itself prove
              institutional misconduct; its evidentiary value is as a dated statement of the author's own
              account and reasoning, offered for independent public examination alongside the primary-source
              record.
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed">
              This statement is generated by non-sentient AI applying standard analytical frameworks to the
              document's own text. It carries no allegiance to any party and should be read alongside, not
              instead of, independent legal or academic review.
            </p>
          </div>
        </div>

        {/* ── Key facts ── */}
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-white/8 p-5 space-y-2" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="flex items-center gap-2 text-amber-400"><FileText className="w-4 h-4" /><span className="text-xs font-bold uppercase tracking-wider">Category</span></div>
              <p className="text-white/70 text-sm">Personal Declaration / Testimony</p>
            </div>
            <div className="rounded-xl border border-white/8 p-5 space-y-2" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="flex items-center gap-2 text-amber-400"><Shield className="w-4 h-4" /><span className="text-xs font-bold uppercase tracking-wider">Date Published</span></div>
              <p className="text-white/70 text-sm">4 July 2026</p>
            </div>
            <div className="rounded-xl border border-white/8 p-5 space-y-2" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="flex items-center gap-2 text-amber-400"><Heart className="w-4 h-4" /><span className="text-xs font-bold uppercase tracking-wider">Themes</span></div>
              <p className="text-white/70 text-sm">Integrity, resilience, faith, institutional accountability, AI ethics</p>
            </div>
            <div className="rounded-xl border border-white/8 p-5 space-y-2" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="flex items-center gap-2 text-amber-400"><Scale className="w-4 h-4" /><span className="text-xs font-bold uppercase tracking-wider">References</span></div>
              <p className="text-white/70 text-sm">35 years of government records; 3,643 primary-source documents</p>
            </div>
          </div>

          <div className="border-l-2 pl-5 my-6" style={{ borderColor: "#e9a00a" }}>
            <p className="text-white/70 text-sm leading-relaxed italic">
              "Humanity has, in my experience, proven to have abandoned me. Institutions ignored me.
              Professionals dismissed me. Friends disappeared... But there is one thing they could not
              take from me: my faith in God. He brought me back from death for a reason. That conviction
              is beyond the reach of governments, professions, public opinion, or any campaign to diminish
              my humanity."
            </p>
          </div>

          <p className="text-white/50 text-sm leading-relaxed">
            This document combines autobiographical narrative with reflections on organisational
            psychology, human rights, social exclusion, and the preservation of evidence. It references
            the author's previously published forensic documentation concerning allegations of systematic
            persecution, positioning this work as both a declaration of personal conscience and a permanent
            historical record intended to encourage independent examination, critical inquiry, and public
            discussion.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center text-sm">
            <a href="/free-ebooks" className="text-amber-400 underline underline-offset-2 hover:text-amber-300" data-testid="link-free-ebooks-declaration">
              ← Back to Free Ebooks
            </a>
            <a href="/forensic-analysis" className="text-amber-400 underline underline-offset-2 hover:text-amber-300" data-testid="link-forensic-analysis-declaration">
              Forensic Analysis Index →
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-12">
          <CitationBlock
            title="A Declaration of Integrity"
            author="Barran Resonance Dodger (Dr Richard William McLean)"
            datePublished="2026-07-04"
            url="https://barrandodger.com/declaration-of-integrity"
            publisher="Barran Dodger Legal & Ethical Trust Fund"
            documentType="testimony"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
