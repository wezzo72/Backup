import { useState } from "react";
import { Bookmark, BookmarkX, X, ExternalLink, History } from "lucide-react";
import { useBookmarks, useReadingHistory } from "@/hooks/useBookmarks";

export function BookmarksPanel() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"bookmarks" | "history">("bookmarks");
  const { bookmarks, remove } = useBookmarks();
  const { history, clear } = useReadingHistory();

  const items = tab === "bookmarks" ? bookmarks : history;

  return (
    <>
      {/* Trigger button — fixed left side */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[55] flex flex-col items-center gap-1 py-3 px-1.5 rounded-r-xl transition-all group"
        style={{ background: "#0a0f1e", border: "1px solid rgba(233,160,10,0.2)", borderLeft: "none" }}
        title="Bookmarks & History"
        data-testid="btn-open-bookmarks"
      >
        <Bookmark className="w-4 h-4 group-hover:text-amber-400 transition-colors" style={{ color: bookmarks.length ? "#e9a00a" : "rgba(255,255,255,0.3)" }} />
        {bookmarks.length > 0 && (
          <span className="text-[10px] font-black" style={{ color: "#e9a00a" }}>{bookmarks.length}</span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed inset-y-0 left-0 z-[110] w-80 flex flex-col shadow-2xl"
          style={{ background: "#06080f", borderRight: "1px solid rgba(233,160,10,0.2)" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b shrink-0"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex gap-1">
              {(["bookmarks", "history"] as const).map(t => (
                <button key={t} onClick={() => setTab(t)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors"
                  style={{
                    background: tab === t ? "rgba(233,160,10,0.15)" : "transparent",
                    color: tab === t ? "#e9a00a" : "rgba(255,255,255,0.4)"
                  }}
                  data-testid={`btn-tab-${t}`}>
                  {t === "bookmarks" ? <><Bookmark className="w-3 h-3 inline mr-1" />Saved ({bookmarks.length})</> : <><History className="w-3 h-3 inline mr-1" />Recent</>}
                </button>
              ))}
            </div>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-zinc-500 hover:text-white"
              data-testid="btn-close-bookmarks">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {items.length === 0 && (
              <div className="text-center py-12 space-y-2">
                {tab === "bookmarks" ? <Bookmark className="w-8 h-8 text-zinc-700 mx-auto" /> : <History className="w-8 h-8 text-zinc-700 mx-auto" />}
                <p className="text-zinc-500 text-xs">
                  {tab === "bookmarks" ? "No bookmarks yet — click the bookmark icon on any document to save it here." : "Pages you visit will appear here."}
                </p>
              </div>
            )}
            {items.map(doc => (
              <div key={doc.slug} className="rounded-xl border p-3 space-y-2 group"
                style={{ background: "#0a0f1e", borderColor: "rgba(255,255,255,0.07)" }}
                data-testid={`bookmark-item-${doc.slug}`}>
                <div className="flex items-start justify-between gap-2">
                  <p className="text-white text-xs font-bold leading-snug line-clamp-2 flex-1">{doc.title}</p>
                  {tab === "bookmarks" && (
                    <button onClick={() => remove(doc.slug)} className="shrink-0 p-1 rounded hover:bg-white/10 transition-colors text-zinc-600 hover:text-red-400"
                      title="Remove bookmark" data-testid={`btn-remove-bookmark-${doc.slug}`}>
                      <BookmarkX className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <p className="text-zinc-600 text-[10px]">
                  {new Date(doc.addedAt).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
                </p>
                <a href={doc.url} onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1 text-xs font-bold transition-colors"
                  style={{ color: "#e9a00a" }}
                  data-testid={`link-bookmark-${doc.slug}`}>
                  <ExternalLink className="w-3 h-3" /> Open
                </a>
              </div>
            ))}
          </div>

          {/* Footer */}
          {tab === "history" && history.length > 0 && (
            <div className="px-4 py-3 border-t shrink-0" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <button onClick={clear} className="text-xs text-zinc-600 hover:text-red-400 transition-colors" data-testid="btn-clear-history">
                Clear history
              </button>
            </div>
          )}
        </div>
      )}

      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 z-[109]" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
