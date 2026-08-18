import { useState } from "react";
import { Copy, Check, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  pathname?: string;
  year?: number;
  className?: string;
}

const ABN = "78 833 496 164";
const TRUST = "Barran Dodger Legal & Ethical Trust Fund";

function buildCitations({ title, pathname, year }: Required<Props>) {
  const accessed = new Date().toLocaleDateString("en-AU", {
    year: "numeric", month: "long", day: "numeric",
  });
  const url = `https://www.barrandodger.com${pathname}`;
  const slug = pathname.replace(/[^a-z0-9]/gi, "_").replace(/^_|_$/g, "") || "home";
  const bibKey = `mclean${year}_${slug}`;

  return {
    Chicago: `McLean, Richard William. "${title}." ${TRUST}, ${year}. Accessed ${accessed}. ${url}.`,
    APA: `McLean, R. W. (${year}). ${title}. ${TRUST}. Retrieved ${accessed}, from ${url}`,
    Harvard: `McLean, R.W. (${year}) '${title}', ${TRUST}. Available at: ${url} (Accessed: ${accessed}).`,
    MLA: `McLean, Richard William. "${title}." ${TRUST}, ${year}, ${url}. Accessed ${accessed}.`,
    Vancouver: `McLean RW. ${title} [Internet]. ${TRUST}; ${year} [cited ${accessed}]. Available from: ${url}`,
    BibTeX: `@misc{${bibKey},
  author = {McLean, Richard William},
  title = {${title}},
  year = {${year}},
  publisher = {${TRUST}},
  note = {ABN ${ABN}},
  url = {${url}},
  urldate = {${accessed}}
}`,
  };
}

/**
 * AcademicCitation — per-page citation block in 6 formats (Chicago/APA/Harvard/MLA/Vancouver/BibTeX).
 * Renders the same text that the server injects as bot-readable metadata,
 * so what scholars see matches what crawlers index.
 */
export function AcademicCitation({ title, pathname = "", year = 2026, className = "" }: Props) {
  const resolvedPath = pathname || (typeof window !== "undefined" ? window.location.pathname : "/");
  const cites = buildCitations({ title, pathname: resolvedPath, year, className: "" } as any);
  const formats = Object.keys(cites) as (keyof typeof cites)[];
  const [active, setActive] = useState<keyof typeof cites>("APA");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cites[active]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section
      className={`rounded-xl overflow-hidden ${className}`}
      style={{ border: "2px solid rgba(168,85,247,0.3)", background: "linear-gradient(135deg, rgba(8,12,30,0.98) 0%, rgba(4,6,15,0.98) 100%)" }}
      data-testid="academic-citation"
      aria-labelledby="cite-this-page"
    >
      <header className="text-white px-5 py-3 flex items-center justify-between" style={{ background: "#a855f7" }}>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          <h3 id="cite-this-page" className="font-black uppercase tracking-[0.12em] text-xs md:text-sm">
            Cite This Page · Academic Reference
          </h3>
        </div>
        <BookOpen className="h-4 w-4 opacity-70" />
      </header>

      <div className="p-4 md:p-5 space-y-3">
        {/* Format tabs */}
        <div className="flex flex-wrap gap-1.5" role="tablist">
          {formats.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              data-testid={`button-cite-format-${f.toLowerCase()}`}
              className="px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider transition-colors"
              style={active === f
                ? { background: "#a855f7", color: "#fff" }
                : { background: "rgba(168,85,247,0.08)", color: "#c084fc", border: "1px solid rgba(168,85,247,0.2)" }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Active citation */}
        <div className="relative">
          <pre
            className="text-xs md:text-[13px] leading-relaxed font-mono whitespace-pre-wrap p-4 pr-12 rounded-lg bg-zinc-900 text-lime-100 border border-zinc-800 selection:bg-lime-500/20"
            data-testid={`text-citation-${active.toLowerCase()}`}
          >
            {cites[active]}
          </pre>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            data-testid="button-copy-citation"
            className="absolute top-2 right-2 h-8 w-8 p-0 hover:text-white"
            style={{ color: "#c084fc" }}
            aria-label="Copy citation"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <div className="text-[10px] text-zinc-600 dark:text-zinc-400 italic font-medium">
          Indexed by Google Scholar, Semantic Scholar, Crossref, OpenAlex via embedded
          Dublin Core + highwire-style citation_* meta tags. ABN {ABN}.
        </div>
      </div>
    </section>
  );
}

export default AcademicCitation;
