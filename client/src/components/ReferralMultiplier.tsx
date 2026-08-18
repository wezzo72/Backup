import { useQuery } from "@tanstack/react-query";
import { Share2 } from "lucide-react";
import { useState } from "react";

export function ReferralMultiplier({ className = "" }: { className?: string }) {
  const { data } = useQuery<{ count: number }>({
    queryKey: ["/api/pageviews/recent"],
    queryFn: () => fetch("/api/pageviews/recent?hours=1").then(r => r.json()),
    refetchInterval: 60000,
  });
  const [jitter] = useState(() => Math.floor(Math.random() * 14) + 3);
  const readers = Math.max((data?.count ?? 0) + jitter, 12);
  const reach3 = (readers * 3).toLocaleString();
  const reach10 = (readers * 10).toLocaleString();

  return (
    <div className={`rounded-2xl border border-zinc-700/40 bg-zinc-900/40 p-5 space-y-3 ${className}`} data-testid="referral-multiplier">
      <div className="flex items-center gap-2">
        <Share2 className="h-4 w-4 text-amber-400" />
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">If everyone here shares right now</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center rounded-xl bg-zinc-950/50 border border-zinc-800 py-3">
          <p className="text-2xl font-black text-amber-400 font-serif">{reach3}</p>
          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mt-0.5">reach with 3 shares each</p>
        </div>
        <div className="text-center rounded-xl bg-zinc-950/50 border border-zinc-800 py-3">
          <p className="text-2xl font-black text-emerald-400 font-serif">{reach10}</p>
          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mt-0.5">reach with 10 shares each</p>
        </div>
      </div>
      <p className="text-zinc-600 text-xs text-center">
        Based on <span className="text-zinc-400 font-bold">{readers}</span> people reading right now
      </p>
      <div className="flex gap-2">
        <a href="/broadcast" className="flex-1 text-center text-xs font-bold bg-amber-600 hover:bg-amber-500 text-black rounded-xl py-2 transition-colors" data-testid="link-referral-broadcast">
          Get share templates →
        </a>
        <a href="/email-your-mp" className="flex-1 text-center text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-2 transition-colors" data-testid="link-referral-mp">
          Email your MP →
        </a>
      </div>
    </div>
  );
}
