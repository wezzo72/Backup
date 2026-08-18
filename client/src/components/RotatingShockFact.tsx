import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FACTS = [
  { stat: "14", label: "forced psychiatric hospitalisations", sub: "zero criminal charges — ever" },
  { stat: "35", label: "years of documented persecution", sub: "across 13 government agencies" },
  { stat: "0", label: "defamation actions filed", sub: "across 1,100,000+ downloads on 6 continents" },
  { stat: "$112.8M", label: "mid-range economic valuation", sub: "calculated from government's own cost schedules" },
  { stat: "2.87%", label: "survival probability", sub: "found with no pulse · survived · kept documenting" },
  { stat: "3,643", label: "primary source government documents", sub: "all authenticated · all free to download" },
  { stat: "623/623", label: "AI-assessed propositions confirmed", sub: "zero contradictions across all analyses" },
  { stat: "0", label: "factual rebuttals received", sub: "not one named agency has contested the record" },
  { stat: "52", label: "independent forensic AI analyses", sub: "675/675 propositions confirmed" },
  { stat: "$5,890", label: "accruing every single day", sub: "live forensic economic calculation" },
  { stat: "897,241", label: "Bitcoin block", sub: "evidence sealed on the blockchain permanently" },
  { stat: "13+", label: "government agencies implicated", sub: "including ASIO, OAIC, Ombudsman, NDIS, AFP" },
  { stat: "1990–2026", label: "fully documented", sub: "from first termination to ICC submission" },
  { stat: "UR/UST/23/AUS/17", label: "OHCHR Geneva case reference", sub: "formally registered — not dismissed" },
  { stat: "ICC", label: "Article 7 submission received", sub: "The Hague — crimes against humanity" },
];

interface Props {
  intervalMs?: number;
  className?: string;
}

export function RotatingShockFact({ intervalMs = 4500, className = "" }: Props) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % FACTS.length), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  const fact = FACTS[idx];

  return (
    <div className={`relative overflow-hidden ${className}`} data-testid="rotating-shock-fact">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <p className="text-5xl md:text-6xl font-black text-amber-400 font-serif leading-none tracking-tight">
            {fact.stat}
          </p>
          <p className="text-white font-bold text-base md:text-lg mt-1">{fact.label}</p>
          <p className="text-zinc-500 text-xs mt-0.5">{fact.sub}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-1 mt-3">
        {FACTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === idx ? "w-5 bg-amber-400" : "w-1.5 bg-zinc-700"}`}
            data-testid={`dot-shock-fact-${i}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ShockFactTicker({ className = "" }: { className?: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % FACTS.length), 3500);
    return () => clearInterval(t);
  }, []);
  const fact = FACTS[idx];

  return (
    <div className={`overflow-hidden ${className}`} data-testid="shock-fact-ticker">
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 text-xs font-mono"
        >
          <span className="text-amber-400 font-black">{fact.stat}</span>
          <span className="text-zinc-400">{fact.label}</span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
