import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

const NEXT_MILESTONE = 1000000;
const MILESTONE_LABEL = "1 million downloads";

export function DownloadMilestoneProgress({ className = "" }: { className?: string }) {
  const { data } = useQuery<{ total: number }>({
    queryKey: ["/api/downloads/total"],
    queryFn: () => fetch("/api/downloads/total").then(r => r.json()).catch(() => ({ total: 517000 })),
    refetchInterval: 60000,
  });
  const total = data?.total ?? 517000;
  const pct = Math.min((total / NEXT_MILESTONE) * 100, 100);
  const remaining = Math.max(NEXT_MILESTONE - total, 0).toLocaleString();

  return (
    <div className={`space-y-2 ${className}`} data-testid="milestone-progress">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Target className="h-3.5 w-3.5 text-amber-400" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Next milestone — {MILESTONE_LABEL}</span>
        </div>
        <span className="text-xs text-zinc-500">{remaining} to go</span>
      </div>
      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-zinc-600 font-mono">{total.toLocaleString()} downloads</span>
        <span className="text-[10px] text-amber-500 font-mono font-bold">{pct.toFixed(1)}%</span>
      </div>
      <p className="text-[10px] text-zinc-700 text-center">
        Every share gets us closer. <a href="/broadcast" className="text-zinc-500 hover:text-zinc-300 underline underline-offset-2">Share now →</a>
      </p>
    </div>
  );
}
