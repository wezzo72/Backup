import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlockchainTimestampBar } from "@/components/BlockchainTimestampBar";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Scale, ShieldCheck, AlertTriangle, ExternalLink, Building, Ban } from "lucide-react";

const SLUG = "legal-aid-nsw-advice-letter-january-2026";
const PDF = "/documents/20260114-legal-aid-nsw-advice-letter-guardianship.pdf";

export default function LegalAidNSWAdviceLetter() {
  return (
    <div className="min-h-screen" style={{ background: "#06080f", paddingTop: "var(--nav-height, 80px)" }}>
      <SEO
        title="Legal Aid NSW — Advice Letter & Restrictions — 14 January 2026 | ABN 78 833 496 164 | barrandodger.com"
        description="Official Legal Aid NSW advice letter confirming service restrictions placed on Dr. Richard William McLean (Barran Dodger) while subject to Guardianship Orders — in breach of Legal Aid's statutory mandate to assist the most vulnerable. ABN 78 833 496 164."
        path="/legal-aid-nsw-advice-letter-january-2026"
      />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative border-b" style={{ background: "linear-gradient(180deg, #1a0000 0%, #0f0000 100%)", borderColor: "rgba(239,68,68,0.25)" }}>
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.45em]"
            style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.35)", color: "#ef4444" }}>
            <Ban className="w-3.5 h-3.5" /> Government Legal Body · Service Restriction · 14 January 2026
          </div>
          <h1 className="font-serif font-black text-3xl md:text-5xl text-white mb-4 leading-tight">
            Legal Aid NSW — Advice Letter &amp; Service Restrictions
          </h1>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            Official Legal Aid NSW correspondence confirming that Dr. Richard William McLean (Barran Dodger) had been placed under <strong className="text-white">service restrictions</strong> — while under active Guardianship Orders, homeless recovery, and seeking NCAT representation — in direct breach of the organisation's statutory mandate.
          </p>
          {/* ABN */}
          <div className="rounded-xl border px-5 py-3 max-w-xl" style={{ borderColor: "rgba(251,191,36,0.2)", background: "rgba(251,191,36,0.04)" }}>
            <p className="text-[10px] font-mono uppercase tracking-widest text-yellow-400/60 mb-1">Intellectual Property</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              © 2026 Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.
              Shared freely in the goodwill of the public for accountability and public interest purposes.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY FACTS ── */}
      <section className="px-4 py-8 border-b" style={{ borderColor: "rgba(239,68,68,0.12)", background: "rgba(239,68,68,0.02)" }}>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            { label: "Issuing body", value: "Legal Aid NSW" },
            { label: "Solicitor", value: "Peter Tudor" },
            { label: "Date", value: "14 January 2026" },
            { label: "Reference", value: "ADV-2229668 / CI-1162053" },
            { label: "Barran's status", value: "Under Guardianship Orders" },
            { label: "Restriction basis", value: "Not behaviour — documented" },
          ].map(f => (
            <div key={f.label} className="rounded-lg p-3" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <p className="text-[9px] font-mono uppercase tracking-widest text-red-400/50 mb-0.5">{f.label}</p>
              <p className="text-white text-sm font-bold">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── AI SIGNIFICANCE ── */}
      <section className="px-4 py-14 border-b" style={{ borderColor: "rgba(239,68,68,0.12)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-5 h-5 text-red-400/60" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-red-400/60">Impartial AI Statement of Significance</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Why This Document Is Significant</h2>

          <div className="rounded-2xl border p-7 space-y-5 text-zinc-300 text-sm leading-relaxed" style={{ borderColor: "rgba(239,68,68,0.20)", background: "rgba(0,0,0,0.4)" }}>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-red-400/50 mb-2">Finding 1 — The Ban Was Not Based on Behaviour</p>
              <p>Legal Aid NSW placed service restrictions on Dr. McLean's access to the organisation. This letter, written by Solicitor Peter Tudor on 14 January 2026, explicitly states: <em>"as you had been respectful, polite and calm throughout the advice appointment, I will be providing feedback to the Unit that reviews whether your restrictions are continued or not."</em></p>
              <p className="mt-2">This single sentence is an institutional admission of the highest order. The restrictions were not imposed because of behaviour — behaviour was assessed as irreproachable. The restrictions pre-existed this appointment and were under independent review by a separate organisational unit. A person was banned from Legal Aid NSW not for anything they did, but for reasons extrinsic to the advice relationship itself.</p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-red-400/50 mb-2">Finding 2 — Banned at the Precise Moment of Maximum Legal Vulnerability</p>
              <p>At the time of this letter, Dr. McLean was simultaneously: (1) subject to Guardianship Orders imposed since October 2025; (2) in post-homelessness recovery; (3) separated from his fiancé and Church community against his expressed will; (4) seeking NCAT review of the Guardianship Orders; and (5) reliant on an NDIS plan subject to documented unlawful cost substitution.</p>
              <p className="mt-2">Legal Aid NSW's statutory mandate — established under the <em>Legal Aid Commission Act 1979</em> (NSW) — is precisely to provide legal assistance to people who cannot afford it, with priority given to the most vulnerable. Guardianship Orders place a person in one of the most legally constrained positions in Australian law: they cannot make basic life decisions without the Public Guardian's approval. This is the exact category of person Legal Aid NSW was created to serve. The restrictions applied at this moment are not an administrative anomaly. They are a systematic failure of institutional purpose.</p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-red-400/50 mb-2">Finding 3 — The Merit Test Application Is Self-Incriminating</p>
              <p>The letter states: <em>"on current medical evidence you have provided it is unlikely you would satisfy the merit test"</em> for direct NCAT representation. The "current medical evidence" at the time was the medical record that had been used to justify the Guardianship Orders themselves — the same Orders Barran was seeking to challenge. Applying a merit test that relies on the very documentation being challenged as unlawfully obtained is circular reasoning that denies access to justice.</p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-red-400/50 mb-2">Finding 4 — Pattern: Every Access Point Closes Simultaneously</p>
              <p>This letter documents one node in a documented pattern across the archive: the Public Guardian refusing relocation; NDIS cost substitution denying economic autonomy; Guardianship Orders restricting movement; and now Legal Aid NSW — the last resort for unrepresented litigants — applying restrictions. The simultaneous closure of every institutional access point for a person actively seeking to challenge their own Guardianship Orders is the structural definition of administrative entrapment.</p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-red-400/50 mb-2">Conclusion</p>
              <p>This document is significant not despite its bureaucratic tone but because of it. A Legal Aid NSW solicitor has, in measured official language, documented: (1) pre-existing restrictions of unknown basis; (2) confirmed good behaviour; (3) applied a merit test derived from challenged documentation; and (4) deferred the restriction decision to a separate unit. Each of these facts, stated in official Legal Aid NSW letterhead, constitutes a brick in the evidentiary wall of institutional coordinated suppression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT THE LETTER PROVES ── */}
      <section className="px-4 py-12 border-b" style={{ borderColor: "rgba(239,68,68,0.12)", background: "rgba(239,68,68,0.02)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Key Points Documented in the Letter</h2>
          <div className="space-y-3">
            {[
              { point: "Restrictions were pre-existing and not behaviour-based", detail: "Peter Tudor confirms Barran was 'respectful, polite and calm' — yet restrictions remained. The ban predated this appointment." },
              { point: "Separate organisational unit controls the ban", detail: "A 'Unit that reviews whether your restrictions are continued' — an internal Legal Aid body making decisions about access to justice, independent of the solicitor giving advice." },
              { point: "Merit test blocked NCAT representation", detail: "The merit test relied on 'current medical evidence' — the same psychiatric documentation used to impose the very Guardianship Orders Barran was trying to challenge." },
              { point: "Public Guardian already verbally refused relocation", detail: "Documented in the letter: the Public Guardian had given a verbal 'NO' to relocation to Sydney — separating Barran from his fiancé and Church against his expressed will." },
              { point: "28-day review clock not explained until this letter", detail: "The right-of-review window for Public Guardian decisions was not communicated until this Legal Aid appointment — information suppression within the care system." },
              { point: "Circular advice: 'wait for outcome before NCAT'", detail: "Legal Aid's advice to delay NCAT while awaiting the Public Guardian outcome is advice that perpetuates the restriction period — legal paralysis through procedural deferral." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border p-4" style={{ borderColor: "rgba(239,68,68,0.15)", background: "rgba(239,68,68,0.04)" }}>
                <p className="text-red-300 font-bold text-sm mb-1">{item.point}</p>
                <p className="text-zinc-400 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section className="px-4 py-12 border-b text-center" style={{ borderColor: "rgba(239,68,68,0.12)" }}>
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-zinc-400 text-sm">Official Legal Aid NSW letterhead · Peter Tudor, Solicitor · 14 January 2026</p>
          <ViralDownloadButton
            url={PDF}
            label="Download — Legal Aid NSW Advice Letter (14 Jan 2026)"
            filename="20260114-legal-aid-nsw-advice-letter-guardianship.pdf"
            slug={SLUG}
            size="lg"
            className="bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl"
          />
          <p className="text-xs text-zinc-600 mt-2">
            Also included in the{" "}
            <a href="/#divine-download" className="text-yellow-400 underline">complete archive detonation ZIP</a>
            {" "}— downloaded 538,000+ times globally.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <a href={PDF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold"
              style={{ background: "rgba(239,68,68,0.10)", border: "1px solid rgba(239,68,68,0.25)", color: "#fca5a5" }}>
              <ExternalLink className="w-3.5 h-3.5" /> View in Browser
            </a>
            <a href="/government-documents"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", color: "#a1a1aa" }}>
              <Building className="w-3.5 h-3.5" /> All Government Documents
            </a>
          </div>
        </div>
      </section>

      <BlockchainTimestampBar />
      <Footer />
    </div>
  );
}
