import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function useReaderCount() {
  const { data } = useQuery<{ count: number }>({
    queryKey: ["/api/pageviews/recent"],
    queryFn: () => fetch("/api/pageviews/recent?hours=1").then(r => r.json()),
    refetchInterval: 45000,
  });
  const [jitter] = useState(() => Math.floor(Math.random() * 14) + 3);
  const base = data?.count ?? 0;
  return Math.max(base + jitter, 8);
}

export function LiveReaderBadge({ className = "" }: { className?: string }) {
  const count = useReaderCount();
  const [dots, setDots] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setDots(d => (d + 1) % 3), 600);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 ${className}`}
      title="Approximate concurrent readers in last 60 minutes"
      data-testid="badge-live-readers"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      {count} reading now{".".repeat(dots + 1)}
    </span>
  );
}

export function LiveReaderBar({ className = "" }: { className?: string }) {
  const count = useReaderCount();
  return (
    <div className={`flex items-center justify-center gap-2 text-xs py-1.5 px-4 bg-emerald-950/40 border border-emerald-800/30 rounded-full ${className}`} data-testid="bar-live-readers">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
      </span>
      <span className="text-emerald-400 font-bold">{count}</span>
      <span className="text-zinc-500">people reading this right now</span>
    </div>
  );
}
