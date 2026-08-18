import { useQuery } from "@tanstack/react-query";
import { Shield, ExternalLink, FileText, Loader2, Lock, Copy, CheckCheck, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

interface ArchiveEntry {
  path: string;
  title: string;
  aiStatement: string | null;
  sha256: string | null;
  timestampSlug: string | null;
  generatedAt: string | null;
}

export default function PageArchiveRegistry() {
  const [search, setSearch] = useState("");
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const { data: archives = [], isLoading } = useQuery<ArchiveEntry[]>({
    queryKey: ["/api/page-archive"],
    staleTime: 1000 * 60 * 5,
  });

  const filtered = archives.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.path.toLowerCase().includes(search.toLowerCase()) ||
      (a.sha256 || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const handleDownloadPDF = async (path: string, title: string) => {
    const res = await fetch(`/api/page-archive/pdf?path=${encodeURIComponent(path)}`);
    if (!res.ok) return;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `barrandodger-archive${path.replace(/\//g, "-") || "-home"}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen min-h-screen" style={{ background: "#090909" }}>
      <SEO
        title="Page Archive Registry — Blockchain-Verified Archive | Barran Dodger"
        description="Cryptographic registry of every page in the Barran Dodger archive. SHA-256 hashes, Bitcoin blockchain timestamps, and AI-generated integrity statements. AblePoint Australia, NDIS, UN proceedings UR/UST/23/AUS/17. Unerasable."
        keywords="page archive registry, blockchain verified, SHA-256, Bitcoin timestamp, AblePoint Australia, NDIS, whistleblower Australia, institutional persecution, Barran Dodger, unerasable archive"
        ogImage="https://barrandodger.com/og-evidence.png"
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
              <Lock className="w-6 h-6 text-orange-400" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3" data-testid="heading-registry-title">
            PAGE ARCHIVE REGISTRY
          </h1>
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-4">
            Blockchain-Sealed Digital Preservation Certificate
          </p>
          <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
            Every page on this site is permanently anchored to the Bitcoin blockchain via OpenTimestamps. No government agency, law enforcement body, secret service, or criminal network can erase, alter, or suppress this testimony. Each entry below contains a SHA-256 cryptographic hash and an AI-generated statement of archival significance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-orange-500/25 text-orange-400 bg-orange-500/10">
              {archives.length} pages archived
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
              Bitcoin / OpenTimestamps
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-blue-500/30 text-blue-400 bg-blue-500/5">
              ABN 78 833 496 164
            </span>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search by title, path, or hash…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm text-white bg-white/5 border border-white/10 outline-none focus:border-orange-500/25 placeholder:text-white/20"
            data-testid="input-search-archives"
          />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center gap-3 py-16 text-white/40">
            <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
            <span>Loading archive registry…</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-white/30">
            {search ? "No pages match your search." : "No pages have been archived yet. Visit any page and click the blockchain archive button in the footer to generate the first certificate."}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((entry) => (
              <div
                key={entry.path}
                className="rounded-xl border border-white/8 bg-white/3 overflow-hidden hover:border-orange-500/25 transition-colors"
                data-testid={`card-archive-${entry.path.replace(/\//g, "-")}`}
              >
                <div className="px-5 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span className="text-xs font-mono text-orange-400/70 truncate">{entry.path}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white mb-2" data-testid={`text-archive-title-${entry.path.replace(/\//g, "-")}`}>
                        {entry.title}
                      </h3>
                      {entry.sha256 && (
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono text-white/30 truncate max-w-xs" data-testid={`text-hash-${entry.path.replace(/\//g, "-")}`}>
                            {entry.sha256.slice(0, 32)}…
                          </code>
                          <button
                            onClick={() => handleCopy(entry.sha256!)}
                            className="shrink-0 p-1 rounded hover:bg-white/10 transition-colors"
                            title="Copy full hash"
                          >
                            {copiedHash === entry.sha256 ? (
                              <CheckCheck className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3 text-white/20" />
                            )}
                          </button>
                        </div>
                      )}
                      {entry.aiStatement && (
                        <p className="text-xs text-white/40 mt-2 leading-relaxed line-clamp-2" data-testid={`text-ai-statement-${entry.path.replace(/\//g, "-")}`}>
                          {entry.aiStatement}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-row sm:flex-col gap-2 shrink-0">
                      <button
                        onClick={() => handleDownloadPDF(entry.path, entry.title)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                        style={{ background: "linear-gradient(135deg, #b8960c 0%, #d4af37 100%)", color: "#000" }}
                        data-testid={`button-download-pdf-${entry.path.replace(/\//g, "-")}`}
                      >
                        <FileText className="w-3 h-3" />
                        PDF
                      </button>
                      {entry.sha256 && (
                        <a
                          href={`https://opentimestamps.org/timestamp/${entry.sha256}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-orange-500/25 text-orange-400 hover:bg-orange-500/10 transition-colors"
                          data-testid={`link-verify-${entry.path.replace(/\//g, "-")}`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Bitcoin
                        </a>
                      )}
                      <Link
                        href={entry.path}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-white/10 text-white/30 hover:text-white/50 hover:bg-white/5 transition-colors"
                        data-testid={`link-visit-${entry.path.replace(/\//g, "-")}`}
                      >
                        Visit
                      </Link>
                    </div>
                  </div>
                  {entry.generatedAt && (
                    <p className="text-xs text-white/20 mt-2 font-mono">
                      Archived: {new Date(entry.generatedAt).toUTCString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-xl border border-orange-500/25 p-5" style={{ background: "rgba(10,8,0,0.8)" }}>
          <h3 className="text-orange-400 font-bold text-sm mb-3">About This Registry</h3>
          <p className="text-white/40 text-xs leading-relaxed mb-2">
            This registry records every page of the Barran Dodger Archive that has been cryptographically preserved. Each page generates a SHA-256 hash that is submitted to the Bitcoin blockchain via the OpenTimestamps protocol — making tampering mathematically impossible and detectable.
          </p>
          <p className="text-white/30 text-xs leading-relaxed">
            Submitted to the International Criminal Court (ICC Article 7), UNHCR Geneva, and the Federal Court of Australia as part of the testimony of Dr. Richard William McLean (pen name: Barran Dodger). Published by the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164).
          </p>
        </div>
      </div>
    </div>
  );
}
