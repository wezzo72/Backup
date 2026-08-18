import { useState } from "react";
import { Scale, X, ExternalLink, ChevronDown, ChevronUp, BookOpen } from "lucide-react";

export interface LegAct {
  name: string;
  citation: string;
  url: string;
  relevance: string;
}

export interface Scripture {
  reference: string;   // e.g. "Revelation 20:12"
  text: string;        // the verse text
  application: string; // one sentence on why it applies here
}

interface Props {
  acts: LegAct[];
  scriptures?: Scripture[];
}

export default function LegislationPanel({ acts, scriptures = [] }: Props) {
  const [open, setOpen] = useState(false);
  const [expandedAct, setExpandedAct] = useState<number | null>(null);
  const [expandedVerse, setExpandedVerse] = useState<number | null>(null);

  const total = acts.length + scriptures.length;

  return (
    <>
      {/* Trigger button — fixed right edge */}
      <button
        onClick={() => setOpen(true)}
        aria-label="View relevant legislation and scripture"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-1 rounded-l-xl px-2 py-4 shadow-xl transition-all hover:px-3"
        style={{
          background: "linear-gradient(180deg, #1a0e4f 0%, #0d0828 100%)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRight: "none",
          color: "#c4b5fd",
        }}
      >
        <Scale className="h-4 w-4" />
        <span
          className="text-[9px] font-black uppercase tracking-widest"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.15em" }}
        >
          Legal &amp; Scripture
        </span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out panel */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col overflow-hidden shadow-2xl transition-transform duration-300"
        style={{
          width: "min(440px, 94vw)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          background: "#09061a",
          borderLeft: "1px solid rgba(196,181,253,0.2)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 shrink-0"
          style={{ borderBottom: "1px solid rgba(196,181,253,0.15)", background: "#0d0828" }}
        >
          <div className="flex items-center gap-2.5">
            <Scale className="h-4 w-4 text-violet-400" />
            <div>
              <p className="text-white font-black text-sm">Legal &amp; Scriptural Authority</p>
              <p className="text-violet-400/70 text-[10px] font-mono uppercase tracking-wider">
                {acts.length} Acts · {scriptures.length} Scriptures
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Intro */}
        <div
          className="px-5 py-3 shrink-0 text-[10px] leading-relaxed"
          style={{
            background: "rgba(196,181,253,0.05)",
            borderBottom: "1px solid rgba(196,181,253,0.1)",
            color: "rgba(196,181,253,0.6)",
          }}
        >
          Every act listed links to the official Australian Federal Register of Legislation.
          Scripture references cite the NIV translation. Both frameworks speak to the same
          truth — accountability before the record.
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">

          {/* ── Legislation ── */}
          {acts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Scale className="h-3 w-3 text-violet-400" />
                <p className="text-violet-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  Australian Legislation
                </p>
              </div>
              <div className="space-y-2">
                {acts.map((act, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1px solid rgba(196,181,253,0.12)", background: "rgba(255,255,255,0.03)" }}
                  >
                    <button
                      onClick={() => setExpandedAct(expandedAct === i ? null : i)}
                      className="w-full text-left px-4 py-3 flex items-start justify-between gap-3 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-xs leading-snug">{act.name}</p>
                        <p className="text-violet-400/60 text-[10px] font-mono mt-0.5">{act.citation}</p>
                      </div>
                      {expandedAct === i
                        ? <ChevronUp className="h-3.5 w-3.5 text-violet-400/50 shrink-0 mt-0.5" />
                        : <ChevronDown className="h-3.5 w-3.5 text-violet-400/50 shrink-0 mt-0.5" />
                      }
                    </button>
                    {expandedAct === i && (
                      <div className="px-4 pb-4" style={{ borderTop: "1px solid rgba(196,181,253,0.08)" }}>
                        <p className="text-white/60 text-[11px] leading-relaxed pt-3 mb-3">{act.relevance}</p>
                        <a
                          href={act.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-opacity hover:opacity-80"
                          style={{ background: "rgba(196,181,253,0.12)", color: "#c4b5fd", border: "1px solid rgba(196,181,253,0.25)" }}
                        >
                          <ExternalLink className="h-3 w-3" />
                          View on legislation.gov.au
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Scripture ── */}
          {scriptures.length > 0 && (
            <div>
              {/* Divider */}
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px" style={{ background: "rgba(251,191,36,0.2)" }} />
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-3 w-3 text-amber-400/70" />
                  <p className="text-amber-400/70 text-[9px] font-black uppercase tracking-[0.25em]">Scripture</p>
                </div>
                <div className="flex-1 h-px" style={{ background: "rgba(251,191,36,0.2)" }} />
              </div>

              <div className="space-y-2 mt-2.5">
                {scriptures.map((verse, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1px solid rgba(251,191,36,0.18)", background: "rgba(251,191,36,0.04)" }}
                  >
                    <button
                      onClick={() => setExpandedVerse(expandedVerse === i ? null : i)}
                      className="w-full text-left px-4 py-3 flex items-start justify-between gap-3 hover:bg-amber-400/5 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-amber-300 font-bold text-xs leading-snug">{verse.reference}</p>
                        <p
                          className="text-amber-100/50 text-[10px] mt-0.5 leading-snug line-clamp-2 italic"
                        >
                          "{verse.text}"
                        </p>
                      </div>
                      {expandedVerse === i
                        ? <ChevronUp className="h-3.5 w-3.5 text-amber-400/40 shrink-0 mt-0.5" />
                        : <ChevronDown className="h-3.5 w-3.5 text-amber-400/40 shrink-0 mt-0.5" />
                      }
                    </button>
                    {expandedVerse === i && (
                      <div className="px-4 pb-4" style={{ borderTop: "1px solid rgba(251,191,36,0.1)" }}>
                        <p className="text-amber-100/80 text-[11px] italic leading-relaxed pt-3 mb-2.5">
                          "{verse.text}"
                        </p>
                        <p className="text-amber-100/50 text-[11px] leading-relaxed">
                          {verse.application}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div
          className="px-5 py-3 shrink-0 text-center space-y-0.5"
          style={{ borderTop: "1px solid rgba(196,181,253,0.1)" }}
        >
          <p className="text-white/25 text-[9px] font-mono uppercase tracking-wider">
            Legislation current as at 2026 · Commonwealth of Australia
          </p>
          <p className="text-white/20 text-[9px] font-mono uppercase tracking-wider">
            Scripture NIV · The truth shall be made known
          </p>
        </div>
      </div>
    </>
  );
}
