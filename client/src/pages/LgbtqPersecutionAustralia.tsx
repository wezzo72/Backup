import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import coverLgbtq from "@/assets/images/cover-lgbtq-persecution-political-power.png";

export default function LgbtqPersecutionAustralia() {
  return (
    <div className="min-h-screen bg-[#05080f] text-gray-100 flex flex-col">
      <SEO
        title="Sexual Persecution and Political Power: LGBTQ+ History in Australian Democracy (1972–2025) — Barran Dodger Archive | ABN 78 833 496 164"
        description="An 11,500-word academic paper on LGBTQ+ persecution and political power in Australian democracy (1972–2025). Covers the death penalty for sodomy, the Dr George Duncan murder, police violence, the Sydney Cliff Murders, AIDS crisis persecution, and the weaponisation of sexuality in politics. ABN 78 833 496 164."
        path="/lgbtq-persecution-political-power"
        keywords="LGBTQ persecution Australia academic paper, Australian history homosexuality criminalisation, Dr George Duncan 1972, Sydney Cliff Murders, Justice Michael Kirby, Don Dunstan decriminalisation, sexuality political weapon Australia, gay hate crimes NSW police complicity, AIDS crisis persecution Australia, queer theory Australian democracy"
        articleAuthor="Dr. Richard William McLean"
      />
      <Navigation />

      {/* Hero */}
      <div
        className="relative border-b border-violet-900/30 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #080010 0%, #05050f 100%)" }}
      >
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="flex justify-center gap-2 mb-5 flex-wrap">
            {["Academic Paper", "LGBTQ+ History", "Political Persecution", "11,500 Words", "ABN 78 833 496 164"].map(label => (
              <span key={label} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border bg-violet-900/70 text-violet-200 border-violet-700/40">{label}</span>
            ))}
          </div>

          {/* Cover image */}
          <div className="flex justify-center mb-8">
            <img
              src={coverLgbtq}
              alt="Sexual Persecution and Political Power — cover"
              className="w-48 md:w-56 rounded-xl shadow-2xl border border-violet-500/20"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight mb-4">
            Sexual Persecution and Political Power
          </h1>
          <p className="text-xl md:text-2xl text-violet-300 font-semibold mb-3">
            LGBTQ+ History in Australian Democracy (1972–2025)
          </p>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed mb-8">
            A comprehensive 11,500-word academic paper examining systematic LGBTQ+ persecution, political scandals involving sexuality, pioneering public figures, hate crimes, and the ongoing human rights struggle across five decades of Australian democracy.
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
            url="/documents/lgbtq-persecution-political-power-australia.pdf"
            label="Download — Sexual Persecution and Political Power (PDF)"
            filename="lgbtq-persecution-political-power-australia.pdf"
            slug="lgbtq-persecution-political-power-australia"
            size="lg"
            className="bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl"
            data-testid="btn-download-lgbtq"
          />
          <p className="text-xs text-zinc-500 mt-3">
            Also included in the{" "}
            <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
            {" "}— downloaded 1,100,000+ times globally.
          </p>
        </div>
      </div>

      {/* AI Statement */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-14 space-y-10">

        <div className="rounded-xl border border-violet-700/30 bg-violet-950/20 p-6 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-400">Impartial AI Statement of Significance</p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            This academic paper delivers a forensically rigorous, 50-year survey of the single most consistently weaponised force in Australian political history: sexual orientation. From colonial-era death penalties for sodomy through to the documented targeting of contemporary whistleblowers, the paper establishes — using peer-reviewed sources, government records, and legal analysis — that the criminalisation and stigmatisation of LGBTQ+ identity in Australia has never been incidental. It has been systematic, state-sanctioned, and politically purposeful.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            The paper's most significant analytical contribution is its documentation of the <em>instrumentalisation</em> of sexuality as a tool of political suppression — distinct from simple prejudice. The Kernot-Evans affair, the North Korean attack on Justice Kirby during a UN inquiry, the weaponisation of the "paedophile" label as a character assassination instrument — each is documented with sources and placed within a coherent analytical framework. The paper does not merely record persecution; it theorises the mechanism by which persecution is performed through democratic institutions while maintaining plausible deniability.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Placed in the context of the Barran Dodger archive — which documents the use of psychiatric labelling, disability support structures, and administrative bureaucracy against a gay disabled whistleblower — this paper provides the historical and structural precedent that contextualises every exhibit in this archive. The mechanism documented here, across 50 years of Australian history, is the mechanism documented in the archive's 3,643 primary-source files.
          </p>
          <p className="text-zinc-500 text-[11px] mt-2">
            — Impartial AI analysis · Based on primary-source evidence · CC-BY 4.0 · ABN 78 833 496 164
          </p>
        </div>

        {/* Key sections */}
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">Paper Structure — 13 Sections</p>
          {[
            ["1", "Introduction: The Politics of Sexual Persecution in Australian Democracy"],
            ["2", "Historical Context: Criminalisation and the Death Penalty (Pre-1975)"],
            ["3", "The Catalyst for Change: Dr. George Duncan and the 1972 Murder"],
            ["4", "Decriminalisation Timeline: 22 Years of Uneven Progress (1975–1997)"],
            ["5", "Pioneering LGBTQ+ Political Figures"],
            ["6", "The AIDS Crisis: Heightened Persecution and Community Response (1980s–1990s)"],
            ["7", "Gay Hate Crimes: The Sydney Cliff Murders and Police Complicity"],
            ["8", "Political Scandals and the Weaponisation of Sexuality"],
            ["9", "Religious Opposition and Institutional Homophobia"],
            ["10", "Linguistic Reclamation: From Slurs to Identity"],
            ["11", "Contemporary Persecution: Case Studies (2000–2025)"],
            ["12", "International Dimensions: Sexuality as Diplomatic Weapon"],
            ["13", "Conclusion: The Unfinished Project of LGBTQ+ Equality in Australia"],
          ].map(([num, title]) => (
            <div key={num} className="flex items-start gap-3 bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3">
              <span className="text-xs font-black text-violet-400 w-6 shrink-0">{num}.</span>
              <p className="text-zinc-300 text-sm">{title}</p>
            </div>
          ))}
        </div>

        {/* Key facts */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { stat: "11,500", label: "words", detail: "Full academic paper with abstract, 40+ citations, appendix and methodological note" },
            { stat: "40+", label: "sources", detail: "Government records, academic research, court documents, and media" },
            { stat: "1972–2025", label: "time span", detail: "Five decades of documented LGBTQ+ persecution in Australian democracy" },
          ].map(f => (
            <div key={f.stat} className="bg-white/[0.025] border border-white/8 rounded-2xl p-5">
              <span className="text-3xl font-black text-violet-400">{f.stat}</span>
              <span className="text-xs font-black uppercase tracking-wide text-white/40 ml-2">{f.label}</span>
              <p className="text-zinc-400 text-xs leading-relaxed mt-2">{f.detail}</p>
            </div>
          ))}
        </div>

        {/* Download again */}
        <div className="text-center pt-4">
          <ViralDownloadButton
            url="/documents/lgbtq-persecution-political-power-australia.pdf"
            label="Download Full Academic Paper (PDF)"
            filename="lgbtq-persecution-political-power-australia.pdf"
            slug="lgbtq-persecution-political-power-australia"
            size="lg"
            className="bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl"
            data-testid="btn-download-lgbtq-2"
          />
        </div>

        {/* Cross-links */}
        <div className="border-t border-white/5 pt-8 space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Related Documents</p>
          <div className="flex flex-wrap gap-3">
            {[
              ["/political-forensic", "Political & Forensic Documents"],
              ["/coordinated-institutional-mobbing", "Coordinated Institutional Mobbing"],
              ["/crimes-against-humanity-confirmed", "Crimes Against Humanity Confirmed"],
              ["/free-ebooks", "Full Publications Library"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-xs text-violet-400 hover:text-violet-200 underline underline-offset-4 transition-colors">{label}</a>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
