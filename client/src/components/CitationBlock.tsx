import { useState } from "react";
import { Copy, Check, BookOpen, Quote } from "lucide-react";

interface CitationBlockProps {
  title: string;
  author?: string;
  datePublished?: string;
  url?: string;
  publisher?: string;
  description?: string;
  keywords?: string[];
  documentType?: "webpage" | "document" | "report" | "evidence" | "testimony";
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all"
      style={{ background: copied ? "#065f46" : "#1f2937", color: copied ? "#6ee7b7" : "#9ca3af" }}
      data-testid="btn-copy-citation"
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function CitationBlock({
  title,
  author = "McLean, R. W. (Barran Dodger)",
  datePublished,
  url,
  publisher = "Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)",
  description,
  keywords = [],
  documentType = "webpage",
}: CitationBlockProps) {
  const [activeTab, setActiveTab] = useState<"apa" | "harvard" | "plain">("apa");

  const currentUrl = url || (typeof window !== "undefined" ? window.location.href : "https://www.barrandodger.com");
  const year = datePublished
    ? new Date(datePublished).getFullYear()
    : new Date().getFullYear();
  const fullDate = datePublished
    ? new Date(datePublished).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })
    : new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
  const accessDate = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });

  const typeLabel = {
    webpage: "Archival document",
    document: "Archived document",
    report: "Report",
    evidence: "Evidence submission",
    testimony: "Testimony",
  }[documentType];

  const apa = `McLean, R. W. (${year}). *${title}*. ${publisher}. Retrieved ${accessDate}, from ${currentUrl}`;

  const harvard = `McLean, RW ${year}, '${title}', ${publisher}, ${typeLabel}, viewed ${accessDate}, <${currentUrl}>`;

  const plain = `Title: ${title}\nAuthor: Dr. Richard William McLean (Barran Dodger)\nYear: ${year}\nPublisher: ${publisher}\nABN: 78 833 496 164\nURL: ${currentUrl}\nAccessed: ${accessDate}${description ? `\nAbstract: ${description}` : ""}${keywords.length > 0 ? `\nKeywords: ${keywords.join(", ")}` : ""}`;

  const citations: Record<"apa" | "harvard" | "plain", { label: string; text: string }> = {
    apa: { label: "APA 7th", text: apa },
    harvard: { label: "Harvard", text: harvard },
    plain: { label: "Plain Text", text: plain },
  };

  const tabs: Array<"apa" | "harvard" | "plain"> = ["apa", "harvard", "plain"];

  return (
    <div
      className="w-full rounded-xl border overflow-hidden"
      style={{ background: "#0a0f1a", borderColor: "#1e3a5f" }}
      data-testid="citation-block"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "#0d1b2e", borderColor: "#1e3a5f" }}>
        <Quote className="w-4 h-4 shrink-0" style={{ color: "#60a5fa" }} />
        <span className="text-sm font-bold" style={{ color: "#93c5fd" }}>How to Cite This</span>
        <span className="ml-auto text-xs" style={{ color: "#4b5563" }}>Blockchain-archived · ABN 78 833 496 164</span>
      </div>

      {/* Tab selector */}
      <div className="flex border-b" style={{ borderColor: "#1e3a5f" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-4 py-2 text-xs font-bold transition-all"
            style={{
              background: activeTab === tab ? "#1e3a5f" : "transparent",
              color: activeTab === tab ? "#bfdbfe" : "#6b7280",
              borderBottom: activeTab === tab ? "2px solid #3b82f6" : "2px solid transparent",
            }}
            data-testid={`tab-citation-${tab}`}
          >
            {citations[tab].label}
          </button>
        ))}
      </div>

      {/* Citation text */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <p
            className="flex-1 text-xs leading-relaxed font-mono"
            style={{ color: "#d1d5db", whiteSpace: "pre-wrap" }}
          >
            {citations[activeTab].text}
          </p>
          <CopyButton text={citations[activeTab].text} />
        </div>

        {/* Metadata row */}
        {(keywords.length > 0 || description) && (
          <div className="mt-4 pt-3 border-t space-y-2" style={{ borderColor: "#1e3a5f" }}>
            {description && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#60a5fa" }}>Abstract</span>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: "#9ca3af" }}>{description}</p>
              </div>
            )}
            {keywords.length > 0 && (
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#60a5fa" }}>Keywords</span>
                {keywords.map((kw) => (
                  <span key={kw} className="px-2 py-0.5 rounded-full text-xs" style={{ background: "#1e3a5f", color: "#93c5fd" }}>
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Integrity note */}
        <p className="mt-3 text-xs" style={{ color: "#374151" }}>
          All documents SHA-256 hashed and Bitcoin blockchain timestamped · Cannot be altered or erased · barrandodger.com
        </p>

        {/* Academic cross-links */}
        <div className="mt-3 pt-3 border-t flex flex-wrap gap-3" style={{ borderColor: "#1e3a5f" }}>
          <a
            href="https://vu.academia.edu/RichMcLean"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs transition-colors hover:opacity-100"
            style={{ color: "#41a4e5", opacity: 0.7 }}
            data-testid="link-citation-academia"
          >
            <BookOpen className="w-3 h-3" /> View on Academia.edu
          </a>
          <a
            href="https://www.scribd.com/user/696623548/richarddrawsstuff"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs transition-colors hover:opacity-100"
            style={{ color: "#1E7B85", opacity: 0.7 }}
            data-testid="link-citation-scribd"
          >
            <BookOpen className="w-3 h-3" /> Read on Scribd
          </a>
        </div>
      </div>
    </div>
  );
}
