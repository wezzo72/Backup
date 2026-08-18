import { useState } from "react";
import { Download, Shield, ExternalLink, ChevronDown, ChevronUp, Lock, FileText } from "lucide-react";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";

const coverImages = import.meta.glob('../assets/images/cover-*.png', { eager: true }) as Record<string, { default: string }>;

function getCoverSrc(coverFile: string): string | undefined {
  const key = `../assets/images/${coverFile}.png`;
  return coverImages[key]?.default;
}

const MASTER_HASH = "3a507d741f6af28bd7653a256a8a5262e4641c7dd45ab645617a000b5afa11dd";
const ABN = "78 833 496 164";

interface PDFImprintProps {
  pdfUrl: string;
  coverSrc?: string;
  coverFile?: string;
  title: string;
  accentColor?: "amber" | "violet" | "rose" | "emerald" | "indigo" | "orange";
  docHash?: string;
  slug?: string;
  downloadLabel?: string;
}

const ACCENT: Record<string, { border: string; bg: string; text: string; badge: string; badgeText: string }> = {
  amber:   { border: "border-amber-500/30",  bg: "bg-amber-950/10",   text: "text-amber-400",  badge: "bg-amber-900/40",  badgeText: "text-amber-200" },
  violet:  { border: "border-violet-500/30", bg: "bg-violet-950/10",  text: "text-violet-400", badge: "bg-violet-900/40", badgeText: "text-violet-200" },
  rose:    { border: "border-rose-500/30",   bg: "bg-rose-950/10",    text: "text-rose-400",   badge: "bg-rose-900/40",   badgeText: "text-rose-200" },
  emerald: { border: "border-emerald-500/30",bg: "bg-emerald-950/10", text: "text-emerald-400",badge: "bg-emerald-900/40",badgeText: "text-emerald-200" },
  indigo:  { border: "border-indigo-500/30", bg: "bg-indigo-950/10",  text: "text-indigo-400", badge: "bg-indigo-900/40", badgeText: "text-indigo-200" },
  orange:  { border: "border-orange-500/30", bg: "bg-orange-950/10",  text: "text-orange-400", badge: "bg-orange-900/40", badgeText: "text-orange-200" },
};

export function PDFImprint({
  pdfUrl,
  coverSrc,
  coverFile,
  title,
  accentColor = "indigo",
  docHash,
  slug,
  downloadLabel,
}: PDFImprintProps) {
  const [open, setOpen] = useState(false);
  const cover = coverSrc || (coverFile ? getCoverSrc(coverFile) : undefined);
  const hash = docHash || MASTER_HASH;
  const c = ACCENT[accentColor] || ACCENT.indigo;
  const filename = pdfUrl.split("/").pop() || "document.pdf";
  const slugKey = slug || filename.replace(".pdf", "");
  const otsUrl = `https://opentimestamps.org/timestamp/${hash}`;
  const bitcoinUrl = `https://www.blockchain.com/explorer/search?search=${hash}`;

  return (
    <div
      className={`rounded-2xl border ${c.border} ${c.bg} overflow-hidden`}
      data-testid="pdf-imprint"
    >
      {/* Header */}
      <div className={`flex items-center gap-2 px-5 py-3 border-b ${c.border}`}>
        <Lock className={`w-3.5 h-3.5 ${c.text} flex-shrink-0`} />
        <span className={`${c.text} text-xs tracking-widest uppercase font-bold flex-1`}>
          ⛓ Digital Imprint — Blockchain-Sealed Archive
        </span>
        <Shield className={`w-3 h-3 ${c.text} flex-shrink-0`} />
      </div>

      <div className="p-5 md:p-6 space-y-5">
        {/* Cover + metadata */}
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          {cover && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-auto sm:mx-0 group"
              data-testid="link-cover-pdf"
            >
              <img
                src={cover}
                alt={`Cover: ${title}`}
                className="w-40 md:w-48 rounded-xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </a>
          )}
          <div className="flex-1 space-y-3 min-w-0">
            <h3 className="text-white font-black text-base md:text-lg leading-tight">{title}</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${c.badge} ${c.badgeText}`}>
                <Shield className="w-2.5 h-2.5" /> Blockchain-Sealed
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-zinc-500 font-mono">
                ABN {ABN}
              </span>
            </div>
            {/* Hash display */}
            <div className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 space-y-1">
              <p className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">SHA-256 Cryptographic Hash</p>
              <p className="font-mono text-[10px] break-all text-yellow-300/80 leading-relaxed select-all">
                {hash}
              </p>
              <div className="flex gap-4 pt-0.5 flex-wrap">
                <a href={otsUrl} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-[10px] ${c.text} hover:opacity-80 transition-opacity`}
                  data-testid="link-ots-imprint">
                  <ExternalLink className="w-2.5 h-2.5" /> Verify OpenTimestamps
                </a>
                <a href={bitcoinUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-orange-400/70 hover:opacity-80 transition-opacity"
                  data-testid="link-bitcoin-imprint">
                  <ExternalLink className="w-2.5 h-2.5" /> Bitcoin Explorer
                </a>
              </div>
            </div>
            <p className="text-[10px] text-zinc-600 leading-relaxed">
              Permanently sealed on Bitcoin via OpenTimestamps (~15,000 independent nodes). Any alteration
              of this document produces a different hash — tampering is immediately detectable.
              ICC Article 7 · OHCHR Geneva · barrandodger.com
            </p>
          </div>
        </div>

        {/* Embed toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border ${c.border} ${c.text} hover:opacity-80 transition-opacity text-xs font-bold uppercase tracking-widest`}
          data-testid="btn-toggle-pdf-embed"
        >
          <FileText className="w-3.5 h-3.5" />
          {open ? "Hide" : "View"} Embedded Document
          {open ? <ChevronUp className="w-3.5 h-3.5 ml-auto" /> : <ChevronDown className="w-3.5 h-3.5 ml-auto" />}
        </button>

        {/* Embedded PDF */}
        {open && (
          <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
            <div className={`flex items-center gap-2 px-4 py-2 border-b border-white/10 ${c.bg}`}>
              <Lock className={`w-3 h-3 ${c.text}`} />
              <span className="text-xs text-zinc-400 font-mono flex-1 truncate">{filename}</span>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-[10px] ${c.text} hover:opacity-80`}>
                <ExternalLink className="w-3 h-3" /> Open
              </a>
            </div>
            <iframe
              src={pdfUrl}
              title={title}
              className="w-full border-0"
              style={{ height: "640px" }}
              loading="lazy"
              data-testid="iframe-pdf-embed"
            >
              <div className="p-8 text-center text-zinc-400 text-sm">
                <p className="mb-3">Your browser does not support embedded PDFs.</p>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${c.badge} ${c.badgeText} font-bold text-sm`}>
                  <Download className="w-4 h-4" /> Open PDF
                </a>
              </div>
            </iframe>
          </div>
        )}

        {/* Download */}
        <ViralDownloadButton
          url={pdfUrl}
          filename={filename}
          slug={slugKey}
          label={downloadLabel || `Download — ${title.slice(0, 60)}`}
          size="md"
          className={`w-full justify-center font-bold`}
        />

        <p className="text-center text-[10px] text-zinc-600 font-mono">
          Free download · Non-commercial reproduction permitted with full attribution ·
          Barran Dodger Legal &amp; Ethical Trust Fund · ABN {ABN}
        </p>
      </div>
    </div>
  );
}
