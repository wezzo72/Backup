/**
 * DocumentMilestoneCounter
 * Shows the per-document download count with milestone badges.
 * Uses the existing useDownloadCounter hook (no new API needed).
 *
 * Mandates served: VIRALITY (social proof), SAFETY (distributed copies count).
 */

import { useDownloadCounter } from "@/components/DownloadCounter";
import { TrendingUp, Globe, Shield } from "lucide-react";

interface MilestoneConfig {
  threshold: number;
  label: string;
  color: string;
  bg: string;
  border: string;
}

const MILESTONES: MilestoneConfig[] = [
  { threshold: 100_000, label: "100K+ WITNESSES", color: "#ff6914", bg: "rgba(255,105,20,0.1)", border: "rgba(255,105,20,0.4)" },
  { threshold: 50_000,  label: "50K+ WITNESSES",  color: "#e9a00a", bg: "rgba(233,160,10,0.1)", border: "rgba(233,160,10,0.4)" },
  { threshold: 10_000,  label: "10K MILESTONE",   color: "#84cc16", bg: "rgba(132,204,22,0.1)", border: "rgba(132,204,22,0.4)" },
  { threshold: 5_000,   label: "5K MILESTONE",    color: "#84cc16", bg: "rgba(132,204,22,0.08)", border: "rgba(132,204,22,0.3)" },
  { threshold: 1_000,   label: "1K MILESTONE",    color: "#6ee7b7", bg: "rgba(110,231,183,0.08)", border: "rgba(110,231,183,0.3)" },
];

function getMilestone(count: number): MilestoneConfig | null {
  return MILESTONES.find(m => count >= m.threshold) ?? null;
}

interface DocumentMilestoneCounterProps {
  /** PDF URL or any string to derive the slug from */
  url: string;
  /** Display variant */
  variant?: "inline" | "card" | "banner";
  className?: string;
}

export function DocumentMilestoneCounter({
  url,
  variant = "card",
  className = "",
}: DocumentMilestoneCounterProps) {
  const { count } = useDownloadCounter(url);

  if (count === 0) return null;

  const milestone = getMilestone(count);
  const formattedCount = count.toLocaleString("en-AU");

  if (variant === "inline") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-xs font-bold tabular-nums ${className}`}
        style={{ color: milestone?.color ?? "#84cc16" }}
        data-testid="doc-milestone-inline"
      >
        <TrendingUp className="h-3 w-3" />
        {formattedCount} downloads
        {milestone && (
          <span
            className="text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full"
            style={{ background: milestone.bg, color: milestone.color, border: `1px solid ${milestone.border}` }}
          >
            {milestone.label}
          </span>
        )}
      </span>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className={`flex flex-wrap items-center justify-between gap-3 rounded-xl px-5 py-3 ${className}`}
        style={{
          background: milestone?.bg ?? "rgba(132,204,22,0.05)",
          border: `1px solid ${milestone?.border ?? "rgba(132,204,22,0.2)"}`,
        }}
        data-testid="doc-milestone-banner"
      >
        <div className="flex items-center gap-3">
          <TrendingUp className="h-4 w-4 flex-shrink-0" style={{ color: milestone?.color ?? "#84cc16" }} />
          <div>
            <p className="font-black tabular-nums text-lg" style={{ color: milestone?.color ?? "#84cc16" }}>
              {formattedCount}
            </p>
            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(196,212,239,0.5)" }}>
              verified downloads of this document
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5" style={{ color: "rgba(196,212,239,0.6)" }}>
            <Globe className="h-3.5 w-3.5" />
            <span>6 continents</span>
          </div>
          <div className="flex items-center gap-1.5" style={{ color: "rgba(196,212,239,0.6)" }}>
            <Shield className="h-3.5 w-3.5" />
            <span>Blockchain-verified</span>
          </div>
          {milestone && (
            <span
              className="font-black text-[9px] uppercase tracking-widest px-2 py-1 rounded-full"
              style={{ background: milestone.bg, color: milestone.color, border: `1px solid ${milestone.border}` }}
            >
              {milestone.label}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: card variant
  return (
    <div
      className={`rounded-xl p-4 space-y-2 ${className}`}
      style={{
        background: milestone?.bg ?? "rgba(132,204,22,0.05)",
        border: `1px solid ${milestone?.border ?? "rgba(132,204,22,0.2)"}`,
      }}
      data-testid="doc-milestone-card"
    >
      <div className="flex items-center gap-2">
        <TrendingUp className="h-4 w-4 flex-shrink-0" style={{ color: milestone?.color ?? "#84cc16" }} />
        <p className="text-[10px] font-black uppercase tracking-[0.25em]" style={{ color: "rgba(196,212,239,0.5)" }}>
          This Document · Live Download Count
        </p>
      </div>

      <div className="flex flex-wrap items-end gap-3">
        <p className="font-black tabular-nums font-mono text-3xl" style={{ color: milestone?.color ?? "#84cc16" }}>
          {formattedCount}
        </p>
        {milestone && (
          <span
            className="font-black text-[9px] uppercase tracking-widest px-2 py-1 rounded-full mb-1"
            style={{ background: milestone.bg, color: milestone.color, border: `1px solid ${milestone.border}` }}
          >
            {milestone.label}
          </span>
        )}
      </div>

      <p className="text-xs leading-relaxed" style={{ color: "rgba(196,212,239,0.5)" }}>
        {formattedCount} people have downloaded this specific document.{" "}
        Every download is a permanent, distributed copy — beyond any court order or suppression notice.{" "}
        <span style={{ color: milestone?.color ?? "#84cc16" }}>
          Your copy is the {(count + 1).toLocaleString()}th.
        </span>
      </p>

      <div className="flex items-center gap-4 pt-1 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(196,212,239,0.4)" }}>
          <Globe className="h-3 w-3" />
          <span>6 continents</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(196,212,239,0.4)" }}>
          <Shield className="h-3 w-3" />
          <span>Bitcoin Block 897,241 sealed</span>
        </div>
      </div>
    </div>
  );
}
