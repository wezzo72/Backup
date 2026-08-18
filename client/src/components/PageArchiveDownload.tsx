import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Shield, Download, Loader2, Copy, CheckCheck, ExternalLink, Lock, FileText, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

interface ArchiveInfo {
  path: string;
  title: string;
  aiStatement: string;
  sha256: string;
  timestampSlug: string;
  generatedAt: string;
  otsVerifyUrl: string;
}

export function PageArchiveDownload() {
  const [location] = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  const { data: archive, isLoading, error } = useQuery<ArchiveInfo>({
    queryKey: ["/api/page-archive/info", location],
    queryFn: () => fetch(`/api/page-archive/info?path=${encodeURIComponent(location)}`).then((r) => r.json()),
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });

  const handleDownloadPDF = async () => {
    setPdfLoading(true);
    try {
      const res = await fetch(`/api/page-archive/pdf?path=${encodeURIComponent(location)}`);
      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `barrandodger-archive${location.replace(/\//g, "-") || "-home"}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
    } finally {
      setPdfLoading(false);
    }
  };

  const handleCopyHash = () => {
    if (archive?.sha256) {
      navigator.clipboard.writeText(archive.sha256);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full mt-8 mb-2" data-testid="page-archive-download">
      <div className="rounded-xl border border-orange-500/30 overflow-hidden" style={{ background: "rgba(10,10,10,0.95)" }}>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-5 py-4 hover:bg-orange-500/10 transition-colors"
          data-testid="button-toggle-archive"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30">
              <Lock className="w-4 h-4 text-orange-400" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-orange-400 tracking-wide">BLOCKCHAIN-SEALED PAGE ARCHIVE</p>
              <p className="text-xs text-white/40 mt-0.5">Download this page as a tamper-proof PDF certificate • Bitcoin-timestamped</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isLoading && <Loader2 className="w-4 h-4 text-orange-500/60 animate-spin" />}
            {!isLoading && archive && (
              <span className="text-xs text-emerald-400 font-mono hidden sm:block">
                {archive.sha256.slice(0, 8)}…
              </span>
            )}
            {expanded ? (
              <ChevronUp className="w-4 h-4 text-white/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white/40" />
            )}
          </div>
        </button>

        {expanded && (
          <div className="px-5 pb-5 border-t border-orange-500/30">
            {isLoading ? (
              <div className="flex items-center gap-3 py-4 text-white/40">
                <Loader2 className="w-4 h-4 animate-spin text-orange-500" />
                <span className="text-sm">Generating blockchain archive…</span>
              </div>
            ) : error || !archive ? (
              <div className="py-3 text-sm text-white/40">Archive generation failed. Try refreshing.</div>
            ) : (
              <div className="pt-4 space-y-4">
                <div className="rounded-lg bg-black/40 border border-orange-500/30 p-3">
                  <p className="text-xs text-orange-400 font-bold mb-1 uppercase tracking-wider">SHA-256 Blockchain Hash</p>
                  <div className="flex items-center gap-2">
                    <code className="text-xs text-white/70 font-mono break-all flex-1" data-testid="text-sha256-hash">
                      {archive.sha256}
                    </code>
                    <button
                      onClick={handleCopyHash}
                      className="shrink-0 p-1.5 rounded hover:bg-white/10 transition-colors"
                      data-testid="button-copy-hash"
                      title="Copy hash"
                    >
                      {copied ? (
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-white/40" />
                      )}
                    </button>
                  </div>
                </div>

                {archive.aiStatement && (
                  <div className="rounded-lg bg-black/30 border-l-2 border-orange-500/30 pl-3 pr-3 py-3">
                    <p className="text-xs text-orange-400 font-bold mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                      <Shield className="w-3 h-3" />
                      AI Statement of Archival Significance
                    </p>
                    <p className="text-xs text-white/60 leading-relaxed" data-testid="text-ai-significance">
                      {archive.aiStatement}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={handleDownloadPDF}
                    disabled={pdfLoading}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all"
                    style={{ background: "linear-gradient(135deg, #b8960c 0%, #d4af37 100%)", color: "#000" }}
                    data-testid="button-download-pdf"
                  >
                    {pdfLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <FileText className="w-4 h-4" />
                    )}
                    {pdfLoading ? "Generating PDF…" : "Download PDF Archive"}
                  </button>

                  <a
                    href={archive.otsVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-orange-500/30 text-orange-400 hover:bg-orange-500/10 transition-colors"
                    data-testid="link-verify-blockchain"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify on Bitcoin
                  </a>

                  <a
                    href="/page-archive-registry"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-white/10 text-white/40 hover:text-white/60 hover:bg-white/5 transition-colors"
                    data-testid="link-archive-registry"
                  >
                    <BookOpen className="w-4 h-4" />
                    All Archived Pages
                  </a>
                </div>

                <p className="text-xs text-white/25 leading-relaxed">
                  This page is permanently sealed on the Bitcoin blockchain via OpenTimestamps. No government agency, law enforcement body, or institutional actor can erase or alter it. Archived by the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164).
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
