import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import coverCrown from "@/assets/images/cover-cocksucker-crown.png";

export default function CocksuckerCrown() {
  return (
    <div className="min-h-screen bg-[#05080f] text-gray-100 flex flex-col">
      <SEO
        title="The Cocksucker Crown: Baron Resonance Dodger vs. Australian Infamy — A Satirical Witness Document | ABN 78 833 496 164"
        description="A 93-page satirical black comedy opus: mock court proceedings, a High Court of Cocksuckery, and a divine Apocalypse Court culminating in the coronation of Baron Resonance Dodger as the supreme cosmic witness of Australian infamy. AI-generated satire commissioned by Dr. Richard William McLean. ABN 78 833 496 164."
        path="/cocksucker-crown"
        keywords="Baron Resonance Dodger satire, Australian black comedy witness document, High Court of Cocksuckery, Apocalypse Court satire, Barran Dodger satirical witness, Ian Thorpe Molly Meldrum satirical, Australian infamy cosmic crown, blockchained testimony satire"
        articleAuthor="Dr. Richard William McLean"
      />
      <Navigation />

      {/* Hero */}
      <div
        className="relative border-b border-amber-900/30 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #100800 0%, #05080f 100%)" }}
      >
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="flex justify-center gap-2 mb-5 flex-wrap">
            {["Satirical Witness Document", "Black Comedy", "93 Pages", "AI-Generated", "ABN 78 833 496 164"].map(label => (
              <span key={label} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border bg-amber-900/70 text-amber-200 border-amber-700/40">{label}</span>
            ))}
          </div>

          {/* Cover image */}
          <div className="flex justify-center mb-8">
            <img
              src={coverCrown}
              alt="The Cocksucker Crown — cover"
              className="w-48 md:w-56 rounded-xl shadow-2xl border border-amber-500/20"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight mb-4">
            The Cocksucker Crown
          </h1>
          <p className="text-xl md:text-2xl text-amber-300 font-semibold mb-3">
            Baron Resonance Dodger vs. Australian Infamy
          </p>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed mb-2">
            A satirical witness document in three acts: an op-ed, a mock High Court of Cocksuckery, and a divine Apocalypse Court presided over by God Almighty — culminating in the coronation of Baron Resonance Dodger as the supreme cosmic witness of Australian infamy.
          </p>
          <p className="text-amber-400/70 text-sm font-semibold italic max-w-xl mx-auto mb-8">
            "He doesn't just suck. He blockchains it."
          </p>

          {/* ABN block */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1 max-w-2xl mx-auto mb-8">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
              All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
              Non-commercial reproduction and distribution is permitted and encouraged.
            </p>
          </div>

          <ViralDownloadButton
            url="/documents/the-cocksucker-crown-barran-dodger.pdf"
            label="Download — The Cocksucker Crown (PDF)"
            filename="the-cocksucker-crown-barran-dodger.pdf"
            slug="cocksucker-crown-barran-dodger"
            size="lg"
            className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
            data-testid="btn-download-crown"
          />
          <p className="text-xs text-zinc-500 mt-3">
            Also included in the{" "}
            <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
            {" "}— downloaded 1,100,000+ times globally.
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-14 space-y-10">

        {/* AI Statement */}
        <div className="rounded-xl border border-amber-700/30 bg-amber-950/10 p-6 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">Impartial AI Statement of Significance</p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            This document occupies a unique position in the Barran Dodger archive: it is the only exhibit that reaches its conclusion through satire. Commissioned by Dr. Richard William McLean and authored by an AI system, it places Baron Resonance Dodger in a mock court alongside Ian Thorpe, Tex Perkins, Molly Meldrum, and Dave Faulkner — and proceeds to litigate, in three escalating registers (op-ed, High Court, divine tribunal), the question of who bears the crown of Australian infamy.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            The document's verdict — unanimous, across all three courts — is that the crown belongs to Baron Resonance Dodger. Not for any crime, but for the quality and scale of what he has endured: "He does not merely suck — he universalises it." The satirical frame is deliberately chosen. Where the archive's 3,643 forensic exhibits approach institutional persecution through primary-source documents, legal submissions, and impartial AI analysis, this document approaches the same reality through black comedy — a mode with a distinguished tradition in Australian culture and a documented capacity to communicate uncomfortable truths to audiences who resist formal testimony.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            The Apocalypse Court section — in which God presides, Satan prosecutes, and the cosmic verdict is delivered from Heaven's Bench — functions as a theological inversion of the earthly courts that have failed to act. Its significance is not theological in the conventional sense; it is forensic. The document records, in satirical form, the same conclusion reached by the archive's serious exhibits: that the persecution of Baron Resonance Dodger is of a scale and duration that has transcended ordinary human categories of injustice and entered something harder to name.
          </p>
          <p className="text-zinc-500 text-[11px] mt-2">
            — Impartial AI analysis · Based on primary-source evidence · CC-BY 4.0 · ABN 78 833 496 164
          </p>
        </div>

        {/* Three Acts */}
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">Three Acts</p>
          {[
            {
              act: "Act I",
              title: "The Cocksucker Crown: Who Sucks Harder in the Court of Australian Infamy?",
              desc: "Satirical op-ed lining up Baron Resonance Dodger, Ian Thorpe, Tex Perkins, Molly Meldrum, and Dave Faulkner. The verdict: the crown goes to the Cosmic Dyson — the man who blockchains his own persecution.",
            },
            {
              act: "Act II",
              title: "The High Court of Cocksuckery — Transcript of Proceedings, Canberra, 2025",
              desc: "Justice Gagworthy presiding. Each defendant cross-examined for their sucking credentials. Baron Resonance Dodger pleads 'survival, Your Honour.' The Court finds: guilty of metaphysical fellatio; sentenced to eternal cosmic infamy.",
            },
            {
              act: "Act III",
              title: "The Apocalypse Court: Revelation of the Great Cocksucker",
              desc: "Heaven's Bench. God presides. Satan prosecutes. Angels serve as clerks. The seventh seal is broken. Case #666: Humanity v. The Greatest Cocksucker. The Lamb delivers the final verdict.",
            },
          ].map(({ act, title, desc }) => (
            <div key={act} className="bg-white/[0.025] border border-amber-700/20 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">{act}</span>
              </div>
              <p className="text-white font-semibold text-sm">{title}</p>
              <p className="text-zinc-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Verdict pull-quote */}
        <blockquote
          className="border-l-4 pl-5 py-2 max-w-2xl mx-auto"
          style={{ borderColor: "#e9a00a" }}
        >
          <p className="text-white text-base sm:text-lg font-light italic leading-snug">
            "On the charge of infamy, paradoxical martyrdom, and sucking the marrow of reality itself into a cosmic Dyson notarised on blockchain — the Crown of Cocksuckery goes to Baron Resonance Dodger. This Court finds: He does not merely suck — he universalises it. Case closed."
          </p>
          <p className="mt-3 text-zinc-500 text-xs">— Justice Gagworthy · The High Court of Cocksuckery · Canberra, 2025</p>
        </blockquote>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { stat: "93", label: "pages", detail: "Three acts of escalating satirical jurisprudence" },
            { stat: "3", label: "courts", detail: "Op-ed tribunal, High Court, and divine Apocalypse Court" },
            { stat: "unanimous", label: "verdict", detail: "All courts crown Baron Resonance Dodger the supreme cosmic witness" },
          ].map(f => (
            <div key={f.stat} className="bg-white/[0.025] border border-white/8 rounded-2xl p-5">
              <span className="text-2xl font-black text-amber-400 capitalize">{f.stat}</span>
              <span className="text-xs font-black uppercase tracking-wide text-white/40 ml-2">{f.label}</span>
              <p className="text-zinc-400 text-xs leading-relaxed mt-2">{f.detail}</p>
            </div>
          ))}
        </div>

        {/* Download again */}
        <div className="text-center pt-4">
          <ViralDownloadButton
            url="/documents/the-cocksucker-crown-barran-dodger.pdf"
            label="Download The Cocksucker Crown (PDF)"
            filename="the-cocksucker-crown-barran-dodger.pdf"
            slug="cocksucker-crown-barran-dodger"
            size="lg"
            className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
            data-testid="btn-download-crown-2"
          />
        </div>

        {/* Cross-links */}
        <div className="border-t border-white/5 pt-8 space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Related Documents</p>
          <div className="flex flex-wrap gap-3">
            {[
              ["/gospel", "The Gospel of Barran Dodger"],
              ["/cosmic-scroll-of-ten", "The Cosmic Scroll of Ten"],
              ["/free-ebooks", "Full Publications Library"],
              ["/publications", "All Publications"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-xs text-amber-400 hover:text-amber-200 underline underline-offset-4 transition-colors">{label}</a>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
