import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Shield, Clock, ExternalLink } from "lucide-react";

const ARCHIVE_LAUNCH = new Date("2024-01-15T00:00:00Z");
const AG_NOTIFIED = new Date("2023-10-01T00:00:00Z");

function useDayCount(from: Date): number {
  const [days, setDays] = useState(() =>
    Math.floor((Date.now() - from.getTime()) / 86_400_000)
  );
  useEffect(() => {
    const t = setInterval(() => {
      setDays(Math.floor((Date.now() - from.getTime()) / 86_400_000));
    }, 60_000);
    return () => clearInterval(t);
  }, [from]);
  return days;
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    setDisplay(value);
  }, [value]);
  return (
    <span className="tabular-nums">
      {display.toLocaleString()}
    </span>
  );
}

export function LiveAccountabilityCounters() {
  const defamationDays = useDayCount(ARCHIVE_LAUNCH);
  const silenceDays = useDayCount(AG_NOTIFIED);

  return (
    <div
      className="w-full px-4 py-12"
      style={{ background: "#06080f", borderBottom: "1px solid rgba(233,160,10,0.2)" }}
    >
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] mb-2" style={{ color: "#e9a00a" }}>
            Live Accountability Record
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-black text-white">
            The Clock They Cannot Stop
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div
            className="rounded-2xl p-7 flex flex-col gap-4"
            style={{ background: "rgba(34,197,94,0.04)", border: "2px solid rgba(34,197,94,0.25)" }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" style={{ color: "#22c55e" }} />
              <span className="font-mono text-[9px] uppercase tracking-[0.35em]" style={{ color: "#22c55e" }}>
                Zero Defamation Actions
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-black leading-none" style={{ fontSize: "clamp(2.5rem,8vw,5rem)", color: "#22c55e" }}>
                <AnimatedNumber value={defamationDays} />
              </span>
              <span className="font-black text-sm uppercase tracking-wide" style={{ color: "rgba(34,197,94,0.5)" }}>
                days
              </span>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              The archive has been publicly accessible for{" "}
              <strong style={{ color: "#22c55e" }}>{defamationDays.toLocaleString()} days</strong> with{" "}
              <strong className="text-white">1,100,000+ downloads across 6 continents</strong> —
              and has received <strong className="text-white">zero defamation actions</strong>,
              zero legal challenges, and zero factual rebuttals from any named party,
              agency, or government minister.
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[8px] uppercase tracking-[0.3em]"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                Live · Updated daily
              </span>
            </div>

            <p className="font-mono text-[9px] leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
              Jones v Dunkel principle: where a party who could give evidence on a question fails
              to do so, an inference may be drawn that the evidence would not favour that party.
            </p>
          </div>

          <div
            className="rounded-2xl p-7 flex flex-col gap-4"
            style={{ background: "rgba(233,160,10,0.04)", border: "2px solid rgba(233,160,10,0.25)" }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: "#e9a00a" }} />
              <span className="font-mono text-[9px] uppercase tracking-[0.35em]" style={{ color: "#e9a00a" }}>
                Days Since Formal Government Notification
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-black leading-none" style={{ fontSize: "clamp(2.5rem,8vw,5rem)", color: "#e9a00a" }}>
                <AnimatedNumber value={silenceDays} />
              </span>
              <span className="font-black text-sm uppercase tracking-wide" style={{ color: "rgba(233,160,10,0.5)" }}>
                days
              </span>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Attorney-General Mark Dreyfus, Prime Minister Anthony Albanese, and the
              Commonwealth Ombudsman were formally notified of this archive and its
              findings. After <strong style={{ color: "#e9a00a" }}>{silenceDays.toLocaleString()} days</strong> —
              no substantive response. No rebuttal. No investigation. No action.
              The silence is now part of the documented record.
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[8px] uppercase tracking-[0.3em]"
                style={{ background: "rgba(233,160,10,0.1)", border: "1px solid rgba(233,160,10,0.3)", color: "#e9a00a" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
                Live · Updated daily
              </span>
            </div>

            <Link
              href="/legal-status"
              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.3em] hover:underline mt-1 transition-colors"
              style={{ color: "rgba(233,160,10,0.6)" }}
            >
              View the legal record <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

        </div>

        <div className="mt-5 text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.2)" }}>
            Sealed · Bitcoin Block 897,241 · SHA-256 verified · OHCHR UR/UST/23/AUS/17 · ABN 78 833 496 164
          </p>
        </div>

      </div>
    </div>
  );
}
