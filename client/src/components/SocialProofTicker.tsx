import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const CITIES = [
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra",
  "Auckland", "London", "New York", "Toronto", "Dublin", "Edinburgh",
  "Los Angeles", "Chicago", "Singapore", "Amsterdam", "Berlin", "Paris",
  "Mumbai", "Geneva", "The Hague", "Stockholm", "Copenhagen", "Oslo",
];

const ACTIONS = [
  "downloaded the archive",
  "shared this page",
  "read the full paper",
  "copied a letter to their MP",
  "downloaded the evidence file",
  "read the timeline",
  "shared on WhatsApp",
  "emailed their senator",
  "bookmarked the evidence",
  "shared with 3 friends",
];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function useEntry() {
  const [entry, setEntry] = useState(() => ({
    city: getRandom(CITIES),
    action: getRandom(ACTIONS),
    minAgo: Math.floor(Math.random() * 4) + 1,
  }));

  useEffect(() => {
    const t = setInterval(() => {
      setEntry({
        city: getRandom(CITIES),
        action: getRandom(ACTIONS),
        minAgo: Math.floor(Math.random() * 4) + 1,
      });
    }, 5500);
    return () => clearInterval(t);
  }, []);

  return entry;
}

export function SocialProofTicker({ className = "" }: { className?: string }) {
  const entry = useEntry();
  const key = `${entry.city}-${entry.action}`;

  return (
    <div className={`overflow-hidden ${className}`} data-testid="social-proof-ticker">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-xs"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-zinc-400">
            Someone in <span className="text-white font-bold">{entry.city}</span>{" "}
            <span className="text-zinc-500">{entry.action}</span>{" "}
            <span className="text-zinc-600">{entry.minAgo}m ago</span>
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
