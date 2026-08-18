import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Search, FileText, ExternalLink, Download, BookOpen, Loader2 } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { Bookmark, BookmarkCheck } from "lucide-react";

interface SearchResult {
  type: "document" | "evidence";
  slug: string;
  title: string;
  description?: string;
  category?: string;
  url?: string;
  pageUrl?: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("q") || "";
  });
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggle, isBookmarked } = useBookmarks();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!query.trim()) { setResults([]); setSearched(false); return; }
    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`/api/search?q=${encodeURIComponent(query.trim())}`)
        .then(r => r.json())
        .then(data => {
          setResults(data.results || []);
          setSearched(true);
        })
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 350);
    return () => clearTimeout(timer);
  }, [query]);

  const categoryColor: Record<string, string> = {
    Legal: "#3b82f6", Forensic: "#a855f7", Testimony: "#f59e0b",
    Evidence: "#10b981", Spiritual: "#ec4899", "Primary Exhibit": "#ef4444",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Search the Archive — Barran Dodger"
        description="Search 2,304+ documents, forensic analyses, and evidence items in the Barran Dodger whistleblower archive."
        path="/search"
      />
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Search hero */}
        <div className="w-full px-4 pt-12 pb-8"
          style={{ background: "linear-gradient(180deg,#06080f 0%,#0a0f1e 60%,#06080f 100%)" }}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-white text-center">Search the Archive</h1>
            <p className="text-zinc-500 text-sm text-center">Documents, forensic analyses, evidence items</p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search documents, topics, names, categories…"
                className="w-full rounded-2xl pl-12 pr-4 py-4 text-white text-base border outline-none focus:border-amber-500 transition-colors"
                style={{ background: "#0e1424", borderColor: "rgba(255,255,255,0.1)" }}
                data-testid="input-search"
              />
              {loading && <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400 animate-spin" />}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-3">
          {!searched && !loading && (
            <div className="text-center py-16 space-y-3">
              <BookOpen className="w-12 h-12 text-zinc-700 mx-auto" />
              <p className="text-zinc-500">Start typing to search 2,304+ documents</p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {["NDIS fraud", "ICC submission", "psychiatric detention", "Bill Shorten", "blockchain", "Sukhi Tear"].map(term => (
                  <button key={term} onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full text-xs border transition-colors hover:border-amber-500/50"
                    style={{ borderColor: "rgba(255,255,255,0.1)", color: "#a1a1aa" }}
                    data-testid={`btn-search-suggestion-${term.replace(/\s+/g, "-")}`}>
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searched && results.length === 0 && !loading && (
            <div className="text-center py-16">
              <p className="text-zinc-400 font-bold">No results for "{query}"</p>
              <p className="text-zinc-600 text-sm mt-2">Try different keywords or browse the <a href="/evidence" className="text-amber-400 underline">Evidence Archive</a></p>
            </div>
          )}

          {results.length > 0 && (
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
              {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>
          )}

          {results.map((r, i) => {
            const docUrl = r.url || (r.slug ? `/documents/${r.slug}.pdf` : "#");
            const pageUrl = r.pageUrl || `/evidence`;
            const catColor = categoryColor[r.category || ""] || "#6b7280";

            return (
              <div key={`${r.type}-${r.slug}-${i}`}
                className="rounded-xl border p-4 space-y-2 transition-colors hover:border-amber-500/30"
                style={{ background: "#0a0f1e", borderColor: "rgba(255,255,255,0.08)" }}
                data-testid={`card-search-result-${i}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                    <h3 className="text-white font-bold text-sm leading-tight line-clamp-2">{r.title}</h3>
                  </div>
                  <button
                    onClick={() => toggle({ slug: r.slug, title: r.title, url: pageUrl })}
                    className="shrink-0 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    title={isBookmarked(r.slug) ? "Remove bookmark" : "Bookmark"}
                    data-testid={`btn-bookmark-${r.slug}`}>
                    {isBookmarked(r.slug)
                      ? <BookmarkCheck className="w-4 h-4 text-amber-400" />
                      : <Bookmark className="w-4 h-4 text-zinc-500" />}
                  </button>
                </div>
                {r.category && (
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: `${catColor}22`, color: catColor }}>
                    {r.category}
                  </span>
                )}
                {r.description && (
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">{r.description}</p>
                )}
                <div className="flex gap-2 pt-1">
                  <a href={pageUrl}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold"
                    style={{ background: "rgba(233,160,10,0.1)", color: "#e9a00a" }}
                    data-testid={`link-result-page-${i}`}>
                    <ExternalLink className="w-3 h-3" /> View
                  </a>
                  <a href={docUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border"
                    style={{ borderColor: "rgba(255,255,255,0.1)", color: "#a1a1aa" }}
                    data-testid={`link-result-download-${i}`}>
                    <Download className="w-3 h-3" /> PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
