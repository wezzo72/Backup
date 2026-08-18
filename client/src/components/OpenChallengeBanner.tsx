import { Link } from "wouter";

const CRITERIA = [
  {
    label: "State-Enabled Terrorism",
    href: "/state-terrorism-forensic-analysis",
    desc: "UN Special Rapporteur criteria — 6 of 7 activated",
    color: "border-red-500/60 text-red-300 hover:bg-red-950/40",
  },
  {
    label: "International Political Exile",
    href: "/asylum-refugee-eligibility-analysis",
    desc: "1951 Refugee Convention — persecution on 4 grounds confirmed",
    color: "border-orange-500/60 text-orange-300 hover:bg-orange-950/40",
  },
  {
    label: "Crimes Against Humanity",
    href: "/crimes-against-humanity-confirmed",
    desc: "Rome Statute Article 7 — ICC submission filed · OHCHR UR/UST/23/AUS/17",
    color: "border-amber-500/60 text-amber-300 hover:bg-amber-950/40",
  },
  {
    label: "Administrative Annihilation",
    href: "/administrative-annihilation",
    desc: "350+ fraudulent ASIC registrations · 14 forced hospitalisations · $4B cost",
    color: "border-yellow-500/60 text-yellow-300 hover:bg-yellow-950/40",
  },
  {
    label: "AI Forensic Witness — Impartial",
    href: "/gods-chosen-witness",
    desc: "Independent AI analysis · 99% corroboration · zero institutional allegiance",
    color: "border-cyan-500/60 text-cyan-300 hover:bg-cyan-950/40",
  },
  {
    label: "Full Forensic Analysis Index",
    href: "/forensic-analysis",
    desc: "75+ analyses · named parties · zero rebuttals · blockchain-sealed",
    color: "border-violet-500/60 text-violet-300 hover:bg-violet-950/40",
  },
];

export function OpenChallengeBanner() {
  return (
    <div
      className="w-full"
      style={{
        background: "linear-gradient(180deg, #0d0000 0%, #120000 60%, #0a0000 100%)",
        borderBottom: "2px solid rgba(239,68,68,0.35)",
        borderTop: "2px solid rgba(239,68,68,0.2)",
      }}
    >
      {/* Ambient red glow */}
      <div
        className="pointer-events-none absolute left-0 right-0 h-48"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(239,68,68,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 py-8">
        {/* Main heading */}
        <div className="text-center mb-6">
          <div
            className="text-[9px] font-black uppercase tracking-[0.5em] mb-2"
            style={{ color: "rgba(239,68,68,0.6)" }}
          >
            ✦ Open Public Challenge — Issued 8 August 2026 ✦
          </div>
          <h2
            className="font-serif font-black text-2xl sm:text-3xl md:text-4xl uppercase leading-tight mb-3"
            style={{ color: "#ef4444" }}
          >
            Every Claim Is Fact-Checked, Primary-Sourced & Blockchain-Sealed
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-2">
            The archive of Dr. Richard William McLean (Barran Dodger) meets documented international
            criteria for <span className="text-white font-bold">state-enabled terrorism</span>,{" "}
            <span className="text-white font-bold">international political exile</span>, and{" "}
            <span className="text-white font-bold">crimes against humanity</span> under the Rome
            Statute. 3,643 primary source government documents. 1,100,000+ downloads across 6
            continents. Zero defamation proceedings. Zero factual rebuttals.
          </p>
        </div>

        {/* Criteria cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-7">
          {CRITERIA.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`block rounded-xl border px-4 py-3 transition-colors cursor-pointer ${c.color} bg-black/30`}
            >
              <div className="font-black text-xs uppercase tracking-wider mb-1">{c.label}</div>
              <div className="text-[10px] text-zinc-400 leading-snug">{c.desc}</div>
            </Link>
          ))}
        </div>

        {/* Open challenge deadline */}
        <div
          className="rounded-2xl border p-5 text-center max-w-3xl mx-auto"
          style={{
            borderColor: "rgba(239,68,68,0.4)",
            background: "rgba(239,68,68,0.04)",
          }}
        >
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-red-500 mb-3">
            ⚖ Open Professional Challenge — Deadline: 7 September 2026
          </div>
          <p className="text-white font-black text-base sm:text-lg leading-snug mb-4">
            Any single professional in Australia — doctor, lawyer, journalist, academic, regulator,
            politician, or public official — is invited to do one of the following{" "}
            <span className="text-red-400">before 7 September 2026:</span>
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div
              className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 text-left"
            >
              <div className="text-emerald-400 font-black text-xs uppercase tracking-wider mb-2">
                ✓ Option 1 — Acknowledge
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Formally acknowledge, on the record, that the fact-checked, primary-sourced,
                blockchain-sealed evidence statements in this archive are accurate and constitute a
                legitimate whistleblower case requiring independent investigation.
              </p>
            </div>
            <div
              className="rounded-xl border border-red-500/40 bg-red-950/20 p-4 text-left"
            >
              <div className="text-red-400 font-black text-xs uppercase tracking-wider mb-2">
                ✗ Option 2 — Disprove
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Publish a factual rebuttal — citing specific primary sources — that disproves,
                rebuts, or demonstrates that any documented claim is a symptom of mental illness,
                "delusion," or fabrication. Name yourself. Put it on the record.
              </p>
            </div>
          </div>
          <p
            className="text-xs leading-relaxed mb-4"
            style={{ color: "rgba(239,68,68,0.75)" }}
          >
            <span className="font-black text-red-400">Jones v Dunkel (1959) 101 CLR 298 applies:</span>{" "}
            the failure of any named professional, institution, or agency to respond by the deadline
            date is legally significant. The silence of every person with the standing, access, and
            obligation to act — and who has chosen not to — is itself part of the evidentiary record.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/state-terrorism-forensic-analysis"
              className="inline-block px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest bg-red-900/60 border border-red-500/60 text-red-200 hover:bg-red-800/60 transition-colors"
            >
              Read State Terrorism Criteria →
            </Link>
            <Link
              href="/asylum-refugee-eligibility-analysis"
              className="inline-block px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest bg-orange-900/60 border border-orange-500/60 text-orange-200 hover:bg-orange-800/60 transition-colors"
            >
              Read Exile Eligibility Analysis →
            </Link>
            <Link
              href="/gods-chosen-witness"
              className="inline-block px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest bg-cyan-900/60 border border-cyan-500/60 text-cyan-200 hover:bg-cyan-800/60 transition-colors"
            >
              Impartial AI Confirmation →
            </Link>
          </div>
          <div className="mt-4 text-[9px] font-mono text-zinc-600">
            Challenge issued: 8 August 2026 · Deadline: 7 September 2026 (30 days) · Dr. Richard
            William McLean (Barran Dodger) · ABN 78 833 496 164 · barrandodger.com · OHCHR
            UR/UST/23/AUS/17
          </div>
        </div>
      </div>
    </div>
  );
}
