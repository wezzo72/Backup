import { Download, Shield, ExternalLink } from "lucide-react";
import { useState } from "react";

const coverImages = import.meta.glob('../assets/images/cover-*.png', { eager: true }) as Record<string, { default: string }>;

function getCoverSrc(coverFile: string): string | undefined {
  const key = `../assets/images/${coverFile}.png`;
  return coverImages[key]?.default;
}

interface PDFCoverCardProps {
  title: string;
  subtitle?: string;
  category?: string;
  pdfUrl: string;
  coverFile?: string;
  downloadLabel?: string;
  slug?: string;
  significance?: string;
  testId?: string;
}

export function PDFCoverCard({
  title,
  subtitle,
  category = "Evidence",
  pdfUrl,
  coverFile,
  downloadLabel,
  significance,
  testId,
}: PDFCoverCardProps) {
  const [downloading, setDownloading] = useState(false);
  const coverSrc = coverFile ? getCoverSrc(coverFile) : undefined;

  const handleDownload = () => {
    setDownloading(true);
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setDownloading(false), 2000);
  };

  const categoryColor: Record<string, { bg: string; text: string; border: string }> = {
    Legal: { bg: "#7f1d1d", text: "#fca5a5", border: "#991b1b" },
    Forensic: { bg: "#1e3a5f", text: "#bfdbfe", border: "#1d4ed8" },
    Evidence: { bg: "#4c1d95", text: "#c4b5fd", border: "#6d28d9" },
    International: { bg: "#064e3b", text: "#6ee7b7", border: "#065f46" },
    Disclosure: { bg: "#7c2d12", text: "#fed7aa", border: "#9a3412" },
    PID: { bg: "#7c2d12", text: "#fed7aa", border: "#9a3412" },
  };
  const colors = categoryColor[category] || categoryColor["Evidence"];

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border"
      style={{ background: "#0a0000", borderColor: colors.border }}
      data-testid={testId || `pdf-cover-card-${title.toLowerCase().replace(/\s/g, "-").slice(0, 30)}`}
    >
      {/* Cover image — full width, tall on mobile */}
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full relative overflow-hidden group"
        style={{ minHeight: "220px", background: "#060000" }}
        aria-label={`View ${title}`}
      >
        {coverSrc ? (
          <img
            src={coverSrc}
            alt={`Cover: ${title}`}
            className="w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            style={{ maxHeight: "420px", minHeight: "220px" }}
            loading="lazy"
          />
        ) : (
          /* Fallback styled cover if no image */
          <div
            className="w-full flex flex-col items-center justify-center px-6 py-10"
            style={{ minHeight: "220px", background: "linear-gradient(160deg, #0a0000 0%, #1a0000 100%)" }}
          >
            <div className="w-12 h-1 rounded mb-4" style={{ background: colors.bg }} />
            <p className="text-white font-black text-xl text-center leading-tight mb-3">{title}</p>
            <div
              className="px-3 py-1 rounded text-xs font-bold uppercase tracking-widest"
              style={{ background: colors.bg, color: colors.text }}
            >
              {category}
            </div>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "rgba(0,0,0,0.55)" }}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-white text-sm"
            style={{ background: "#8b0000" }}>
            <ExternalLink className="w-4 h-4" /> Open PDF
          </div>
        </div>
      </a>

      {/* Card body */}
      <div className="p-4 md:p-5">
        {/* Category badge */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-widest"
            style={{ background: colors.bg, color: colors.text }}
          >
            {category}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono" style={{ color: "#ef4444" }}>
            <Shield className="w-3 h-3" /> Blockchain-Sealed
          </span>
        </div>

        {/* Title */}
        <h4 className="text-white font-black text-base md:text-lg leading-tight mb-2">{title}</h4>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#fca5a5" }}>{subtitle}</p>
        )}

        {/* Significance */}
        {significance && (
          <p className="text-xs leading-relaxed mb-4" style={{ color: "#d1d5db" }}>{significance}</p>
        )}

        {/* ABN line */}
        <p className="text-xs font-mono mb-4" style={{ color: "#6b7280" }}>
          ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund
        </p>

        {/* Download button */}
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all active:scale-95"
          style={{ background: downloading ? "#5a0000" : "#8b0000", color: "#fff" }}
          data-testid={`btn-download-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
        >
          <Download className="w-4 h-4 shrink-0" />
          {downloading ? "Opening…" : (downloadLabel || `Download — ${title.slice(0, 40)}`)}
        </button>
      </div>
    </div>
  );
}
