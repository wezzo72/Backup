import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { useSiteStats } from "@/hooks/useSiteStats";

// Numbers that look like download counts but are NOT — never replace these.
const EXCLUDE_NUMBERS = new Set([
  "897,241",  // Bitcoin block number
  "898,241",  // Bitcoin block number variant
  "3,643",    // document count (handled separately)
  "2,304",    // document count variant
  "2,301",    // document count variant
  "2,077",    // document count variant
  "410,671",  // Bitcoin block variant
]);

// Matches any comma-grouped integer that looks like a download total:
//   • 1,NNN,NNN+?   (millions, e.g. 1,100,000+)
//   • NNN,NNN+?     (hundreds of thousands, e.g. 1,100,000+)
//   • N.NM+?        (abbreviated, e.g. 1.1M+)
// We floor at 100,000 to avoid replacing per-document counts in the tens of thousands.
const DOWNLOAD_COUNT_RE =
  /\b(\d{1,3}(?:,\d{3}){2}|\d{3},\d{3})\+?(?!\s*(?:documents?|docs?|submissions?|pages?|hospitali|cases?|agencies|agencies|years?|months?|blocks?|btc|sat))/gi;

const ABBREVIATED_RE = /\b\d+\.\d+M\+?\b/gi;

const STALE_DOC_PATTERNS = ["2,077+", "2,077", "2,304+", "2,304", "2,301+", "2,301"];

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceInNode(node: Text, downloadFmt: string, docFmt: string) {
  const val = node.nodeValue;
  if (!val) return;

  let updated = val;

  // 1. Replace stale doc-count patterns verbatim
  for (const p of STALE_DOC_PATTERNS) {
    updated = updated.replace(new RegExp(escapeRegExp(p), "g"), docFmt);
  }

  // 2. Replace abbreviated download counts (1.1M+, 1.2M+, etc.)
  updated = updated.replace(ABBREVIATED_RE, downloadFmt);

  // 3. Replace any comma-grouped download-count number not in the exclusion set
  updated = updated.replace(DOWNLOAD_COUNT_RE, (match, captured) => {
    // Strip the + so we can check the bare number
    const bare = captured.replace(/\+$/, "");
    if (EXCLUDE_NUMBERS.has(bare)) return match;
    // Only replace numbers >= 100,000 (floor to avoid per-doc counts)
    const numeric = parseInt(bare.replace(/,/g, ""), 10);
    if (numeric < 100_000) return match;
    return downloadFmt;
  });

  if (updated !== val) node.nodeValue = updated;
}

function walkAndReplace(root: HTMLElement, downloadFmt: string, docFmt: string) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    replaceInNode(node as Text, downloadFmt, docFmt);
  }
}

export function LiveTextReplacer() {
  const { totalDownloadsFormatted, documentCountFormatted } = useSiteStats();
  const [location] = useLocation();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);

  const runReplacement = (downloadFmt: string, docFmt: string) => {
    if (!downloadFmt) return;
    const root = document.getElementById("root");
    if (!root) return;
    walkAndReplace(root as HTMLElement, downloadFmt, docFmt);
  };

  const scheduleReplacement = (downloadFmt: string, docFmt: string, delay = 80) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => runReplacement(downloadFmt, docFmt), delay);
  };

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    const dl = totalDownloadsFormatted;
    const dc = documentCountFormatted;

    observerRef.current?.disconnect();

    const observer = new MutationObserver(() => {
      scheduleReplacement(dl, dc, 120);
    });

    observer.observe(root, { childList: true, subtree: true, characterData: false });
    observerRef.current = observer;

    scheduleReplacement(dl, dc, 50);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [totalDownloadsFormatted, documentCountFormatted, location]);

  return null;
}
