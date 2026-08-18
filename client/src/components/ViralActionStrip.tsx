import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Megaphone, FileText, Share2, PenLine } from "lucide-react";

const ACTIONS = [
  {
    icon: Mail,
    text: "Email your MP — pre-written letter, 60 seconds",
    cta: "Do it now →",
    href: "/email-your-mp",
    color: "from-green-950/80 to-zinc-950/80",
    border: "border-green-800/30",
    badge: "bg-green-500/20 text-green-300",
  },
  {
    icon: Megaphone,
    text: "Copy a broadcast template — WhatsApp, TikTok, LinkedIn, email",
    cta: "Get templates →",
    href: "/broadcast",
    color: "from-purple-950/80 to-zinc-950/80",
    border: "border-purple-800/30",
    badge: "bg-purple-500/20 text-purple-300",
  },
  {
    icon: FileText,
    text: "Press kit for journalists — story angles, boilerplate, contacts",
    cta: "Open press kit →",
    href: "/press",
    color: "from-blue-950/80 to-zinc-950/80",
    border: "border-blue-800/30",
    badge: "bg-blue-500/20 text-blue-300",
  },
  {
    icon: PenLine,
    text: "Sign the petition — force a parliamentary response",
    cta: "Sign now →",
    href: "/sign-the-petition",
    color: "from-amber-950/80 to-zinc-950/80",
    border: "border-amber-800/30",
    badge: "bg-amber-500/20 text-amber-300",
  },
  {
    icon: Share2,
    text: "1,100,000+ downloads. Zero defamation actions. Open challenge closes 7 Sep 2026. Share this.",
    cta: "Share the archive →",
    href: "/broadcast",
    color: "from-rose-950/80 to-zinc-950/80",
    border: "border-rose-800/30",
    badge: "bg-rose-500/20 text-rose-300",
  },
];

export function ViralActionStrip({ className = "" }: { className?: string }) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const showTimer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(showTimer);
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;
    const t = setInterval(() => setIdx(i => (i + 1) % ACTIONS.length), 6000);
    return () => clearInterval(t);
  }, [visible, dismissed]);

  if (dismissed || !visible) return null;

  const a = ACTIONS[idx];
  const Icon = a.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className={`fixed bottom-24 right-4 z-40 max-w-xs ${className}`}
        data-testid="viral-action-strip"
      >
        <div className={`relative rounded-2xl border ${a.border} bg-gradient-to-br ${a.color} backdrop-blur-md shadow-2xl p-4`}>
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 text-zinc-600 hover:text-zinc-400 text-lg leading-none"
            data-testid="button-dismiss-viral-strip"
            aria-label="Dismiss"
          >×</button>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${a.badge}`}>
                  <Icon className="h-3 w-3" /> Take Action
                </span>
              </div>
              <p className="text-white text-sm font-bold leading-snug pr-4">{a.text}</p>
              <a
                href={a.href}
                className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1.5 transition-colors"
                data-testid={`link-viral-strip-${a.href.replace("/", "")}`}
              >
                {a.cta}
              </a>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-1 mt-3">
            {ACTIONS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`h-0.5 rounded-full transition-all ${i === idx ? "flex-1 bg-white/60" : "w-3 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
