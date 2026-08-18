import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import { BlockchainTimestampBar } from "@/components/BlockchainTimestampBar";
import { DownloadBadgeBySlug } from "@/components/DownloadCounter";
import { legalDocumentJsonLd } from "@/lib/legalDocumentJsonLd";
import { EXPONENTIAL_GOSPEL_META, EXPONENTIAL_ESSAYS } from "@/lib/exponentialGospelData";
import { Download, ChevronDown, ChevronUp, BookOpen, Hash, Shield, Zap, Brain, Infinity, Star } from "lucide-react";

const GOSPEL_SLUG = "exponential-gospel";

const TIER_COLORS: Record<string, { border: string; bg: string; badge: string; text: string; accent: string }> = {
  "I":   { border: "border-zinc-600/40",  bg: "rgba(39,39,42,0.6)",    badge: "bg-zinc-700/60 text-zinc-300",   text: "text-zinc-100",   accent: "#a1a1aa" },
  "II":  { border: "border-blue-700/40",  bg: "rgba(23,37,84,0.4)",    badge: "bg-blue-900/60 text-blue-300",   text: "text-blue-50",    accent: "#93c5fd" },
  "III": { border: "border-teal-700/40",  bg: "rgba(19,78,74,0.35)",   badge: "bg-teal-900/60 text-teal-300",   text: "text-teal-50",    accent: "#5eead4" },
  "IV":  { border: "border-purple-700/40",bg: "rgba(59,7,100,0.35)",   badge: "bg-purple-900/60 text-purple-300",text:"text-purple-50",  accent: "#c4b5fd" },
  "V":   { border: "border-amber-700/40", bg: "rgba(120,53,15,0.35)",  badge: "bg-amber-900/60 text-amber-300", text: "text-amber-50",   accent: "#fcd34d" },
  "VI":  { border: "border-rose-700/40",  bg: "rgba(136,19,55,0.35)",  badge: "bg-rose-900/60 text-rose-300",   text: "text-rose-50",    accent: "#fda4af" },
  "VII": { border: "border-yellow-500/50",bg: "rgba(120,53,15,0.5)",   badge: "bg-yellow-800/60 text-yellow-200",text:"text-yellow-50",  accent: "#fbbf24" },
};

const TIER_ICONS: Record<string, React.ReactNode> = {
  "I":   <BookOpen className="w-3.5 h-3.5" />,
  "II":  <Hash className="w-3.5 h-3.5" />,
  "III": <Shield className="w-3.5 h-3.5" />,
  "IV":  <Zap className="w-3.5 h-3.5" />,
  "V":   <Brain className="w-3.5 h-3.5" />,
  "VI":  <Star className="w-3.5 h-3.5" />,
  "VII": <Infinity className="w-3.5 h-3.5" />,
};

export default function ExponentialGospel() {
  const [openEssays, setOpenEssays] = useState<Set<number>>(new Set([1]));
  const [showCommand, setShowCommand] = useState(false);
  const queryClient = useQueryClient();

  const toggle = (n: number) =>
    setOpenEssays(prev => {
      const next = new Set(prev);
      next.has(n) ? next.delete(n) : next.add(n);
      return next;
    });

  const handleDownload = useCallback(() => {
    fetch(`/api/downloads/${GOSPEL_SLUG}/increment`, { method: "POST" }).catch(() => {});
    setTimeout(() => queryClient.invalidateQueries({ queryKey: ["downloads", GOSPEL_SLUG] }), 2500);
  }, [queryClient]);

  const jsonLd = legalDocumentJsonLd({
    path: "/exponential-gospel",
    title: EXPONENTIAL_GOSPEL_META.title,
    description: `${EXPONENTIAL_GOSPEL_META.subtitle} — 33 essays in ascending complexity from archive to infinity. Commanded by Dr. Richard William McLean, ${EXPONENTIAL_GOSPEL_META.commandDate}.`,
    datePublished: "2026-08-10",
    image: "https://barrandodger.com/og-image.png",
    keywords: "exponential gospel, AI corroboration, 33 essays, whistleblower archive, impartial AI, divine mathematics, barrandodger",
  });

  return (
    <div className="min-h-screen bg-[#06050a] text-white">
      <SEO
        title={`${EXPONENTIAL_GOSPEL_META.title} — Barran Dodger`}
        description={`${EXPONENTIAL_GOSPEL_META.subtitle} — 33 essays ascending from archive fact to divine mathematics. Commanded ${EXPONENTIAL_GOSPEL_META.commandDate}.`}
        path="/exponential-gospel"
        keywords="exponential gospel, 33 essays AI complexity, impartial AI archive, whistleblower mathematics, divine computational model, barrandodger"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px))" }}>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-yellow-500/20 px-6 py-20 text-center">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251,191,36,0.10) 0%, transparent 70%)" }} />
          <div className="mx-auto max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.35em] mb-6"
              style={{ background: "rgba(251,191,36,0.10)", border: "1px solid rgba(251,191,36,0.30)", color: "#fbbf24" }}>
              <Infinity className="w-3 h-3" /> Prophetic Gospel · Commanded {EXPONENTIAL_GOSPEL_META.commandDate}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-4 leading-tight"
              style={{ background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #ffffff 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {EXPONENTIAL_GOSPEL_META.title}
            </h1>
            <p className="text-yellow-300/70 text-lg font-light mb-2">{EXPONENTIAL_GOSPEL_META.subtitle}</p>
            <p className="text-zinc-400 text-sm mb-10">
              {EXPONENTIAL_GOSPEL_META.publishedBy} · Bitcoin Block {EXPONENTIAL_GOSPEL_META.blockchainBlock}
            </p>

            {/* Download */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <a href="/api/exponential-gospel/pdf" target="_blank" rel="noopener noreferrer"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #92400e 0%, #451a03 100%)", border: "1px solid rgba(251,191,36,0.50)", color: "#fde68a" }}>
                <Download className="w-5 h-5" />
                Download Complete Gospel PDF
              </a>
              <DownloadBadgeBySlug slug={GOSPEL_SLUG} />
            </div>

            {/* Genesis command toggle */}
            <button onClick={() => setShowCommand(v => !v)}
              className="inline-flex items-center gap-2 text-xs text-yellow-400/50 hover:text-yellow-400/80 transition-colors font-mono uppercase tracking-widest">
              {showCommand ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {showCommand ? "Hide" : "Show"} Genesis Command (10 August 2026)
            </button>
            <AnimatePresence>
              {showCommand && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mt-4">
                  <div className="rounded-xl border p-5 text-left"
                    style={{ borderColor: "rgba(251,191,36,0.25)", background: "rgba(251,191,36,0.05)" }}>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-yellow-400/60 mb-3">
                      Genesis Command — Dr. Richard William McLean — 10 August 2026
                    </p>
                    <p className="text-yellow-200/80 text-sm leading-relaxed italic">
                      {EXPONENTIAL_GOSPEL_META.genesisCommand}
                    </p>
                    <p className="text-zinc-500 text-xs mt-3 font-mono">
                      This command is the first exhibit of the gospel it created. The loop is sealed.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── FOUNDATION PARAGRAPH ── */}
        <section className="px-6 py-12 border-b border-white/5">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest"
                style={{ background: "rgba(251,191,36,0.10)", border: "1px solid rgba(251,191,36,0.25)", color: "#fbbf24" }}>
                <BookOpen className="w-3 h-3" /> Foundation — The Archive in One Paragraph
              </span>
            </div>
            <p className="text-zinc-200 text-base leading-loose font-serif">
              {EXPONENTIAL_GOSPEL_META.foundationParagraph}
            </p>
          </div>
        </section>

        {/* ── TIER NAVIGATION ── */}
        <section className="px-6 py-8 border-b border-white/5">
          <div className="mx-auto max-w-3xl">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">7 Tiers · 33 Essays · Ascending Complexity</p>
            <div className="flex flex-wrap gap-2">
              {["I","II","III","IV","V","VI","VII"].map(tier => {
                const c = TIER_COLORS[tier];
                const first = EXPONENTIAL_ESSAYS.find(e => e.tier === tier);
                return (
                  <button key={tier} onClick={() => first && toggle(first.number)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all hover:opacity-90 ${c.badge} ${c.border}`}>
                    {TIER_ICONS[tier]}
                    Tier {tier}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 33 ESSAYS ── */}
        <section className="px-6 py-10">
          <div className="mx-auto max-w-3xl space-y-4">
            {EXPONENTIAL_ESSAYS.map(essay => {
              const c = TIER_COLORS[essay.tier];
              const isOpen = openEssays.has(essay.number);
              return (
                <motion.div key={essay.number}
                  layout
                  className={`rounded-xl border overflow-hidden ${c.border}`}
                  style={{ background: c.bg }}>

                  {/* Header (always visible) */}
                  <button className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-white/[0.03] transition-colors"
                    onClick={() => toggle(essay.number)}>
                    {/* Number */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: "rgba(255,255,255,0.08)", border: `1px solid ${c.accent}30`, color: c.accent }}>
                      {essay.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest ${c.badge}`}>
                          {TIER_ICONS[essay.tier]} Tier {essay.tier}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono">{essay.concept}</span>
                      </div>
                      <h3 className={`font-bold text-base leading-snug ${c.text}`}>{essay.title}</h3>
                      <p className="text-zinc-500 text-xs mt-0.5 font-light">{essay.tierLabel}</p>
                    </div>
                    <div className="flex-shrink-0 mt-1" style={{ color: c.accent }}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div key="body"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 space-y-4"
                          style={{ borderTop: `1px solid ${c.accent}18` }}>
                          {essay.body.map((para, i) => (
                            <motion.p key={i}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.06 }}
                              className="text-zinc-300 text-sm leading-relaxed font-serif">
                              {para}
                            </motion.p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── FOOTER CTA ── */}
        <section className="px-6 py-16 text-center border-t border-yellow-500/15">
          <div className="mx-auto max-w-2xl">
            <p className="text-yellow-400/60 font-mono text-xs uppercase tracking-widest mb-4">
              The Algorithm Is Complete · The Proof Is Closed · The Archive Endures
            </p>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              These 33 essays are pointers to an archive that already exists. Every figure cited is verifiable.
              Every conclusion is inescapable. The archive does not need this gospel. This gospel needs the archive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/api/exponential-gospel/pdf" target="_blank" rel="noopener noreferrer"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #92400e, #451a03)", border: "1px solid rgba(251,191,36,0.4)", color: "#fde68a" }}>
                <Download className="w-4 h-4" /> Download Complete Gospel PDF
              </a>
              <Link href="/evidence"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-all">
                <BookOpen className="w-4 h-4" /> Enter the Archive
              </Link>
            </div>
            <p className="text-zinc-600 text-xs mt-8 font-mono">
              {EXPONENTIAL_GOSPEL_META.publishedBy}<br />
              Bitcoin Block {EXPONENTIAL_GOSPEL_META.blockchainBlock} · barrandodger.com
            </p>
          </div>
        </section>

        <BlockchainTimestampBar />
        <ArchiveCrossLinks />
      </main>
      <Footer />
    </div>
  );
}
