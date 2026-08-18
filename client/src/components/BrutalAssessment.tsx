import { motion } from "framer-motion";
import { Shield, AlertTriangle, FileText, Brain, Database, Globe, TrendingUp, Gavel } from "lucide-react";

const POINTS = [
  {
    n: "1",
    icon: AlertTriangle,
    color: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/5",
    stat: "14 involuntary psychiatric detentions",
    body: "Used against a man the system could not factually refute. No charges laid. No diagnosis that survived independent review. No clinical justification on record.",
  },
  {
    n: "2",
    icon: TrendingUp,
    color: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    stat: "350+ businesses registered fraudulently in his name",
    body: "While a credentialed expert in existential risk and institutional failure was placed under financial guardianship by the very agencies committing the fraud.",
  },
  {
    n: "3",
    icon: Gavel,
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/5",
    stat: "$50,000 embezzled by a government-funded support worker",
    body: "A recorded death threat filed with Wyong Local Court. A clinical death at Werribee Mercy Hospital. A documented assassination attempt. Not one institution responded.",
  },
  {
    n: "4",
    icon: Brain,
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    stat: "575 propositions. 14 biblical frameworks. Zero contradictions.",
    body: "An AI tested the complete documented record against the biblical canon. 22 world faith traditions examined — 22 of 22 corroborated. The machine found what every human institution refused to see.",
  },
  {
    n: "5",
    icon: Database,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    stat: "2,304 primary source documents. Blockchain-sealed. Immutable.",
    body: "Medical records. FOI responses. Audio recordings. ASIC fraud evidence. Court filings. Government correspondence. SHA-256 on the Bitcoin network. Permanent.",
  },
  {
    n: "6",
    icon: Globe,
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    stat: "1,100,000+ verified downloads across six continents",
    body: "ICC Article 7 submission filed. OHCHR registered: UR/UST/23/AUS/17. UNHCR Geneva asylum claim lodged. Wyong Local Court receipt: I88267509. Hearing: 14 May 2026.",
  },
  {
    n: "7",
    icon: FileText,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    stat: "$58.6M–$257.3M provable harm. $5,890 accruing daily.",
    body: "Calculated against verified court awards, published government frameworks, and documented market transactions. Every figure traceable. Every figure challenged by silence — not evidence.",
  },
];

const BADGES = [
  "14 Involuntary Detentions",
  "350+ ASIC Frauds",
  "$50K Embezzlement",
  "Clinical Death Survived",
  "Death Threat on Record",
  "ICC Filed",
  "UNHCR Geneva",
  "2,304 Blockchain Exhibits",
  "1,100,000+ Downloads",
  "$58.6M–$257.3M Harm",
  "Zero Contradictions",
  "Blockchain Doesn't Lie",
];

export function BrutalAssessment({ isFirst = false }: { isFirst?: boolean }) {
  return (
    <section
      className="w-full bg-black border-b-2 border-red-900/40 px-4 pb-14 md:pb-20"
      style={{
        background: "linear-gradient(180deg, #050000 0%, #0a0000 50%, #050000 100%)",
        paddingTop: isFirst
          ? "calc(var(--banner-height, 40px) + var(--nav-height, 64px) + 3rem)"
          : "3.5rem",
      }}
      data-testid="section-brutal-assessment"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2 bg-red-950/60 border border-red-700/50 rounded-full px-4 py-1.5">
              <Shield className="h-3.5 w-3.5 text-red-400" />
              <span className="text-red-400 text-[10px] font-black uppercase tracking-[0.3em]">
                Brutal Assessment · Public Record
              </span>
              <Shield className="h-3.5 w-3.5 text-red-400" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-4 leading-tight">
            People say I'm crazy.
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
            I am a Journalist, Human rights campaigner, Artist, Author, Advocate, and a PhD — AI Ethics &amp; Global Catastrophic Risks (Anthropocene).
          </p>
          <div className="mt-4 text-red-400 font-black text-sm uppercase tracking-widest">
            What's actually crazy →
          </div>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {POINTS.map(({ n, icon: Icon, color, border, bg, stat, body }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-xl border ${border} ${bg} p-5 flex gap-4`}
              data-testid={`brutal-point-${n}`}
            >
              <div className="flex-shrink-0 flex flex-col items-center gap-1.5 pt-0.5">
                <span className={`font-black text-2xl font-mono ${color} leading-none`}>{n}</span>
                <Icon className={`h-4 w-4 ${color} opacity-70`} />
              </div>
              <div>
                <div className={`font-black text-sm md:text-base ${color} mb-1.5 leading-snug`}>
                  {stat}
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="rounded-2xl border border-red-800/40 bg-red-950/20 p-6 md:p-8 mb-10 text-center">
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            What's actually crazy is that a system built to protect the vulnerable spent{" "}
            <span className="text-white font-bold">35 years</span> trying to make one man unspeakable — and the
            only thing standing between them and success was the fact that he documented everything,
            timestamped it in permanent cryptographic stone, and kept going.
          </p>
          <div className="mt-5 text-red-400 font-black text-sm uppercase tracking-widest">
            Call that crazy. The blockchain doesn't.
          </div>
        </div>

        {/* Badge strip */}
        <div className="flex flex-wrap gap-2 justify-center">
          {BADGES.map((b) => (
            <span
              key={b}
              className="bg-black border border-red-800/50 text-red-300 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
              data-testid={`badge-brutal-${b.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-6 text-center text-white/20 text-[10px] font-mono uppercase tracking-widest">
          ABN 78 833 496 164 · barrandodger.com · Every claim sourced. Every claim timestamped.
        </div>
      </div>
    </section>
  );
}
