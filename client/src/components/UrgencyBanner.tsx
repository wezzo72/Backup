import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AlertTriangle, ExternalLink } from "lucide-react";

const MESSAGES = [
  {
    text: "Dr. McLean is still at 55B Archbold Rd, Long Jetty NSW. This address is public. He has asked for witnesses.",
    cta: "Read why",
    href: "/the-truth",
    level: "critical" as const,
  },
  {
    text: "Active Community Treatment Order means NSW Police can forcibly transport him to psychiatric detention at any time.",
    cta: "Legal status",
    href: "/legal-status",
    level: "critical" as const,
  },
  {
    text: "1,100,000+ downloads. Zero defamation actions. Open challenge closes 7 Sep 2026. Every share is a vote for the record to stand.",
    cta: "Share now",
    href: "/broadcast",
    level: "action" as const,
  },
  {
    text: "The ICC has received the Article 7 submission. The OHCHR has case reference UR/UST/23/AUS/17. The international record is established.",
    cta: "See legal status",
    href: "/legal-status",
    level: "info" as const,
  },
  {
    text: "Not one named agency or official has filed a defamation action. Across 1,100,000+ downloads on 6 continents. Open challenge deadline: 7 September 2026.",
    cta: "Open challenge",
    href: "/open-challenge",
    level: "action" as const,
  },
];

const LEVEL_STYLES = {
  critical: "bg-red-950/60 border-red-700/50 text-red-200",
  action: "bg-amber-950/60 border-amber-700/50 text-amber-200",
  info: "bg-blue-950/60 border-blue-700/50 text-blue-200",
};

export function UrgencyBanner({ className = "" }: { className?: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % MESSAGES.length), 9000);
    return () => clearInterval(t);
  }, []);

  const msg = MESSAGES[idx];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={idx}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={`w-full border-y px-4 py-2.5 ${LEVEL_STYLES[msg.level]} ${className}`}
        data-testid="urgency-banner"
      >
        <div className="max-w-4xl mx-auto flex items-center gap-3 flex-wrap">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0 opacity-70" />
          <p className="text-xs leading-relaxed flex-1">{msg.text}</p>
          <a
            href={msg.href}
            className="flex items-center gap-1 text-xs font-black uppercase tracking-widest opacity-80 hover:opacity-100 shrink-0 transition-opacity"
            data-testid={`link-urgency-banner-${msg.level}`}
          >
            {msg.cta} <ExternalLink className="h-3 w-3 ml-0.5" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
