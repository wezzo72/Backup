import { useState, useEffect, useCallback } from "react";

export interface BookmarkedDoc {
  slug: string;
  title: string;
  url: string;
  addedAt: number;
}

const KEY = "bd_bookmarks_v1";
const HISTORY_KEY = "bd_reading_history_v1";

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkedDoc[]>(() => load(KEY, []));

  const save = useCallback((docs: BookmarkedDoc[]) => {
    setBookmarks(docs);
    try { localStorage.setItem(KEY, JSON.stringify(docs)); } catch {}
  }, []);

  const add = useCallback((doc: Omit<BookmarkedDoc, "addedAt">) => {
    setBookmarks(prev => {
      if (prev.find(b => b.slug === doc.slug)) return prev;
      const next = [{ ...doc, addedAt: Date.now() }, ...prev];
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setBookmarks(prev => {
      const next = prev.filter(b => b.slug !== slug);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const isBookmarked = useCallback((slug: string) => bookmarks.some(b => b.slug === slug), [bookmarks]);

  const toggle = useCallback((doc: Omit<BookmarkedDoc, "addedAt">) => {
    if (isBookmarked(doc.slug)) remove(doc.slug);
    else add(doc);
  }, [isBookmarked, add, remove]);

  return { bookmarks, add, remove, toggle, isBookmarked };
}

export function useReadingHistory() {
  const [history, setHistory] = useState<BookmarkedDoc[]>(() => load(HISTORY_KEY, []));

  const record = useCallback((doc: Omit<BookmarkedDoc, "addedAt">) => {
    setHistory(prev => {
      const filtered = prev.filter(h => h.slug !== doc.slug);
      const next = [{ ...doc, addedAt: Date.now() }, ...filtered].slice(0, 20);
      try { localStorage.setItem(HISTORY_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setHistory([]);
    try { localStorage.removeItem(HISTORY_KEY); } catch {}
  }, []);

  return { history, record, clear };
}
