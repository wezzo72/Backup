import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SiX, SiReddit, SiTelegram, SiWhatsapp } from "react-icons/si";
import { Share2, TrendingUp, Star, X } from "lucide-react";

const MILESTONE = 500_000;
const SITE_URL = "https://www.barrandodger.com";
const CELEBRATION_KEY = "bd_milestone_500k_seen";

function shareText(total: number) {
  const remaining = (MILESTONE - total).toLocaleString();
  return `${total.toLocaleString()} downloads of the Barran Dodger whistleblower archive. Only ${remaining} away from 500,000. Zero marketing. Zero PR. Just people sharing the truth.\n\n306 PDFs · Blockchain-sealed · ICC Article 7 · UNHCR Geneva filed · AI: 603/603 verified · Zero contradictions\n\n${SITE_URL}\n\n#BarranDodger #CannotBeErased #Whistleblower #ICC #UNHCR #AustralianGovernment #HumanRights #NDISFraud #RomeStatute #BlockchainEvidence #DrRichardMcLean #GovernmentCorruption #WyongCourt`;
}

function CelebrationModal({ total, onClose }: { total: number; onClose: () => void }) {
  const text = encodeURIComponent(`🎉 1,100,000+ DOWNLOADS — the archive Australia tried to bury just hit half a million. Blockchain-sealed. ICC-submitted. Zero contradictions. ${SITE_URL} #BarranDodger #CannotBeErased`);
  const eu = encodeURIComponent(SITE_URL);

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={onClose}>
      <div className="max-w-md w-full rounded-2xl border p-8 text-center space-y-5 relative"
        style={{ background: "#04060f", borderColor: "rgba(132,204,22,0.4)" }}
        onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors" data-testid="btn-milestone-modal-close">
          <X className="w-5 h-5" />
        </button>
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: "rgba(132,204,22,0.15)", border: "2px solid rgba(132,204,22,0.5)" }}>
            <Star className="w-10 h-10" style={{ color: "#84cc16" }} />
          </div>
        </div>
        <div>
          <p className="text-4xl font-black text-white">{total.toLocaleString()}</p>
          <p className="font-bold text-lg mt-1" style={{ color: "#84cc16" }}>Downloads Milestone!</p>
          <p className="text-zinc-400 text-sm mt-2">
            The archive Australia tried to bury just hit {total >= MILESTONE ? "500,000" : `${total.toLocaleString()}`} downloads.
            Zero marketing. Zero PR. Just people sharing the truth.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Share this moment</p>
          <div className="flex justify-center gap-3">
            {[
              { href: `https://twitter.com/intent/tweet?text=${text}`, icon: <SiX className="w-5 h-5" />, label: "X" },
              { href: `https://wa.me/?text=${text}`, icon: <SiWhatsapp className="w-5 h-5" />, label: "WhatsApp" },
              { href: `https://t.me/share/url?url=${eu}&text=${text}`, icon: <SiTelegram className="w-5 h-5" />, label: "Telegram" },
              { href: `https://reddit.com/submit?url=${eu}&title=500K+downloads+of+the+archive+Australia+tried+to+bury`, icon: <SiReddit className="w-5 h-5" />, label: "Reddit" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors"
                style={{ background: "rgba(132,204,22,0.1)", color: "#84cc16", border: "1px solid rgba(132,204,22,0.2)" }}>
                {icon}
                <span className="text-[10px] font-bold">{label}</span>
              </a>
            ))}
          </div>
          <a href="/support" onClick={onClose}
            className="block w-full py-3 rounded-xl font-bold text-sm transition-colors"
            style={{ background: "#84cc16", color: "#000" }}
            data-testid="btn-milestone-modal-support">
            Become a Supporting Witness →
          </a>
        </div>
      </div>
    </div>
  );
}

export function MilestoneBar({ noCelebration = false }: { noCelebration?: boolean } = {}) {
  const [showCelebration, setShowCelebration] = useState(false);
  const { data } = useQuery<{ total: number; last24h: number }>({
    queryKey: ["/api/downloads/total"],
    queryFn: () => fetch("/api/downloads/total", { cache: "no-store" }).then((r) => r.json()),
    refetchInterval: 30_000,
  });

  const total = data?.total ?? 0;
  const last24h = data?.last24h ?? 0;
  const pct = Math.min((total / MILESTONE) * 100, 100);
  const remaining = Math.max(MILESTONE - total, 0);
  const daysToMilestone = last24h > 0 ? Math.ceil(remaining / last24h) : null;
  const text = shareText(total);
  const eu = encodeURIComponent(SITE_URL);
  const et = encodeURIComponent(text);

  useEffect(() => {
    if (noCelebration) return;
    if (total >= MILESTONE) {
      try {
        const seen = localStorage.getItem(CELEBRATION_KEY);
        if (!seen) {
          setShowCelebration(true);
          localStorage.setItem(CELEBRATION_KEY, "1");
        }
      } catch {}
    }
  }, [total, noCelebration]);

  if (!total) return null;

  return (
    <>
      {showCelebration && <CelebrationModal total={total} onClose={() => setShowCelebration(false)} />}
      <div
        className="w-full px-4 py-3"
        style={{ background: "#04060f", borderBottom: "1px solid rgba(132,204,22,0.2)" }}
        data-testid="milestone-bar"
        data-pdf-hide
      >
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <TrendingUp className="h-3.5 w-3.5 shrink-0 lime-glow" style={{ color: "#84cc16" }} />
                <span className="text-xs font-bold uppercase tracking-widest lime-glow" style={{ color: "#84cc16" }}>
                  {total.toLocaleString()} downloads — {pct.toFixed(1)}% to 500K
                  {daysToMilestone !== null && remaining > 0 && (
                    <span className="ml-2 font-normal normal-case tracking-normal" style={{ color: "rgba(132,204,22,0.55)" }}>
                      · ~{daysToMilestone} {daysToMilestone === 1 ? "day" : "days"} at current pace
                    </span>
                  )}
                  {total >= MILESTONE && (
                    <button onClick={() => setShowCelebration(true)}
                      className="ml-2 px-2 py-0.5 rounded text-[10px] font-bold"
                      style={{ background: "rgba(132,204,22,0.2)", color: "#84cc16" }}
                      data-testid="btn-milestone-celebrate">
                      🎉 MILESTONE HIT
                    </button>
                  )}
                </span>
              </div>
              <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000"
                  style={{ width: `${pct}%`, background: "linear-gradient(90deg, #ff6914 0%, #84cc16 100%)" }} />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>0</span>
                <span className="text-[10px] font-bold" style={{ color: "#ff6914" }}>
                  {remaining > 0 ? `${remaining.toLocaleString()} to go` : "500K REACHED 🎉"}
                </span>
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>500,000</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] uppercase tracking-widest hidden sm:block" style={{ color: "rgba(255,255,255,0.25)" }}>Push it:</span>
              {[
                { href: `https://twitter.com/intent/tweet?text=${et}`, icon: <SiX className="h-3 w-3" />, title: "Post on X / Twitter", testid: "milestone-share-x" },
                { href: `https://reddit.com/submit?url=${eu}&title=${encodeURIComponent(`${total.toLocaleString()} downloads — the archive Australia tried to bury`)}`, icon: <SiReddit className="h-3 w-3" />, title: "Post on Reddit", testid: "milestone-share-reddit" },
                { href: `https://t.me/share/url?url=${eu}&text=${et}`, icon: <SiTelegram className="h-3 w-3" />, title: "Share on Telegram", testid: "milestone-share-telegram" },
                { href: `https://wa.me/?text=${et}`, icon: <SiWhatsapp className="h-3 w-3" />, title: "Share on WhatsApp", testid: "milestone-share-whatsapp" },
              ].map(({ href, icon, title, testid }) => (
                <a key={testid} href={href} target="_blank" rel="noopener noreferrer" title={title}
                  className="flex items-center justify-center h-7 w-7 rounded transition-colors"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#84cc16"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(132,204,22,0.4)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  data-testid={testid}>
                  {icon}
                </a>
              ))}
              <button
                onClick={async () => {
                  try {
                    if (navigator.share) await navigator.share({ title: "Barran Dodger — 500K push", text, url: SITE_URL });
                    else await navigator.clipboard.writeText(text);
                  } catch {}
                }}
                title="Share"
                className="flex items-center justify-center h-7 w-7 rounded transition-colors donate-pulse"
                style={{ background: "rgba(255,105,20,0.12)", border: "1px solid rgba(255,105,20,0.35)", color: "#ff6914" }}
                data-testid="milestone-share-native">
                <Share2 className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
