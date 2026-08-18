import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Globe, Shield, Lock, TrendingUp, Clock, ArrowRight, Zap } from "lucide-react";

interface DownloadStats {
  total: number;
  last24h: number;
}

function AnimatedCount({ target, duration = 800 }: { target: number; duration?: number }) {
  const [display, setDisplay] = useState(target);
  const prev = useRef(target);

  useEffect(() => {
    if (prev.current === target) return;
    const start = prev.current;
    const diff = target - start;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    prev.current = target;
  }, [target, duration]);

  return <>{display.toLocaleString()}</>;
}

export function BreachContainmentBanner() {
  const [stats, setStats] = useState<DownloadStats>({ total: 500094, last24h: 4838 });
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [pulse, setPulse] = useState(false);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/downloads/total");
      if (!res.ok) return;
      const data = await res.json();
      if (data.total) {
        setStats({ total: Number(data.total), last24h: Number(data.last24h ?? 0) });
        setLastUpdated(new Date());
        setPulse(true);
        setTimeout(() => setPulse(false), 600);
      }
    } catch {}
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 30_000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      value: <AnimatedCount target={stats.total} />,
      label: "Total Downloads",
      sub: "across 6 continents",
      color: "#84cc16",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      value: <AnimatedCount target={stats.last24h} />,
      label: "Last 24 Hours",
      sub: "new readers today",
      color: "#22c55e",
      icon: <Clock className="h-4 w-4" />,
    },
    {
      value: "897,241",
      label: "Bitcoin Block",
      sub: "blockchain sealed",
      color: "#f97316",
      icon: <Lock className="h-4 w-4" />,
    },
    {
      value: "6",
      label: "Continents",
      sub: "confirmed reach",
      color: "#a78bfa",
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ];

  return (
    <div
      className="w-full border-b-2"
      style={{
        background: "linear-gradient(180deg, #020a01 0%, #041401 50%, #020a01 100%)",
        borderColor: "rgba(132,204,22,0.3)",
      }}
      data-testid="breach-containment-banner"
    >
      {/* Live indicator strip */}
      <div
        className="flex items-center justify-between px-4 py-1.5"
        style={{ background: "rgba(132,204,22,0.08)", borderBottom: "1px solid rgba(132,204,22,0.15)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{
              background: "#84cc16",
              boxShadow: pulse ? "0 0 8px #84cc16" : "0 0 4px rgba(132,204,22,0.4)",
              transition: "box-shadow 0.3s",
            }}
          />
          <span className="text-[9px] font-black uppercase tracking-[0.35em]" style={{ color: "rgba(132,204,22,0.7)" }}>
            Live Archive Counter — Updated Every 30 Seconds
          </span>
        </div>
        <span className="text-[9px]" style={{ color: "rgba(132,204,22,0.35)" }}>
          {lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-7 md:py-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: counters */}
          <div className="space-y-5">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-2" style={{ color: "rgba(132,204,22,0.55)" }}>
                The Testimony Has Broken Containment
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                A Record That Cannot Be Erased
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-3 space-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${m.color}22`,
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1" style={{ color: m.color }}>
                    {m.icon}
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-70">{m.label}</span>
                  </div>
                  <p
                    className="text-2xl md:text-3xl font-black tabular-nums leading-none"
                    style={{ color: m.color }}
                  >
                    {m.value}
                  </p>
                  <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>{m.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: statement */}
          <div className="space-y-4">
            <div
              className="rounded-xl px-5 py-4 space-y-3"
              style={{ background: "rgba(132,204,22,0.06)", border: "1px solid rgba(132,204,22,0.2)" }}
            >
              <div className="flex items-start gap-2.5">
                <Shield className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#84cc16" }} />
                <div className="space-y-2.5 text-sm leading-relaxed">
                  <p style={{ color: "rgba(210,240,180,0.85)" }}>
                    Every download creates a new node in a distributed network that no single authority can shut down.
                    At <strong className="text-white">
                      <AnimatedCount target={stats.total} />
                    </strong> downloads across six continents, this testimony has passed the threshold at which
                    suppression becomes operationally impossible.
                  </p>
                  <p style={{ color: "rgba(210,240,180,0.7)" }}>
                    The archive is sealed into Bitcoin Block 897,241 — a mathematical timestamp embedded in a chain of tens of thousands
                    of independent nodes spanning every inhabited continent. No court order, ministerial directive,
                    or takedown notice can alter a single byte of what was written there.
                  </p>
                  <p style={{ color: "rgba(210,240,180,0.65)" }}>
                    Wide distribution is not merely academic. It is the primary mechanism of physical safety.
                    A record this visible, this globally seeded, and this permanently timestamped cannot be made to disappear —
                    and the calculation of those who would benefit from silence has shifted accordingly.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/why-this-cannot-be-erased"
              className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3 group"
              style={{ color: "#84cc16" }}
              data-testid="link-unerasability-statement"
            >
              <Zap className="h-4 w-4 flex-shrink-0" />
              <span>Read: Why This Archive Cannot Be Erased — Statement of Significance</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
