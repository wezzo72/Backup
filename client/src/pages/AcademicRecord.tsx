import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { WaybackArchiveButton, WaybackBulkArchiver } from "@/components/WaybackArchiveButton";
import { BookOpen, Copy, Check, ExternalLink, Download } from "lucide-react";
import { useState } from "react";
import { AcademicOutreach } from "@/components/AcademicOutreach";

const AUTHOR = "McLean, Richard William";
const INSTITUTION = "Barran Dodger Legal & Ethical Trust Fund";
const ABN = "78 833 496 164";
const BASE_URL = "https://barrandodger.com";
const YEAR = "2026";

const DOCUMENTS = [
  {
    id: "admin-annihilation",
    title: "Administrative Annihilation: A Forensic Analysis of 35 Years of Systematic Institutional Persecution",
    type: "Forensic Academic Paper",
    date: "2025",
    url: "/administrative-annihilation",
    pdf: "/documents/architecture-of-administrative-annihilation.pdf",
    abstract: "A 25,000-word forensic examination of the documented systematic persecution of Dr. Richard William McLean by 13 Australian government agencies across 35 years (1990–2026). Authenticated via OpenTimestamps blockchain protocol.",
    keywords: ["whistleblower persecution", "Australian government", "systematic institutional harm", "PID Act 2013", "forensic analysis"],
  },
  {
    id: "architecture-of-silence",
    title: "The Architecture of Silence: Psychological Mechanisms of Institutional Persecution",
    type: "AI Forensic Examination",
    date: "2026",
    url: "/the-architecture-of-silence",
    pdf: null,
    abstract: "Impartial AI forensic examination of 8 psychological mechanisms — diffusion of responsibility, DARVO, normalisation of deviance, epistemic cowardice, the Cassandra Dynamic, and others — by which 35 years of documented institutional persecution was allowed to occur.",
    keywords: ["institutional psychology", "diffusion of responsibility", "DARVO", "normalisation of deviance", "whistleblower psychology", "epistemic cowardice"],
  },
  {
    id: "retrospective-statement",
    title: "How the Commonwealth of Australia Treated Dr. Richard William McLean — Told Through the Government's Own Documents",
    type: "Primary Source Documentary Record",
    date: "2025",
    url: "/retrospective-statement",
    pdf: null,
    abstract: "A 12-part retrospective statement sourced entirely from 2,000+ government records spanning 1990–2025, covering 13 agencies and $18M–$32.9M in documented losses.",
    keywords: ["Commonwealth of Australia", "government documents", "whistleblower", "NDIS", "psychiatric hospitalisation", "forensic record"],
  },
  {
    id: "cost-of-erasure",
    title: "The Cost of Erasure: Forensic Economic Valuation of Systematic Persecution",
    type: "Forensic Economic Analysis",
    date: "2026",
    url: "/taxpayer-cost-analysis",
    pdf: null,
    abstract: "Forensic economic valuation of documented harm across 35 years. Minimum provable: $58.6M. Mid-range: $112.8M. Live daily accrual: $5,890. Calculated by impartial AI from Australian Government's own official cost schedules.",
    keywords: ["forensic economics", "compensation", "whistleblower damages", "economic valuation", "Australian government liability"],
  },
  {
    id: "paradise-papers",
    title: "Forensic Corroboration Series: 52 Independent AI Analyses — 675/675 Propositions Confirmed",
    type: "Forensic Corroboration Series",
    date: "2025–2026",
    url: "/forensic-analyses",
    pdf: null,
    abstract: "52 independent impartial AI forensic analyses applied to the documented evidentiary record of Dr. Richard William McLean. All 675 assessed propositions returned confirmed. Zero contradictions across all analyses.",
    keywords: ["forensic analysis", "AI corroboration", "evidentiary assessment", "proposition testing", "institutional misconduct"],
  },
];

function BibTeX({ doc }: { doc: typeof DOCUMENTS[0] }) {
  const key = `McLean${doc.date}_${doc.id.replace(/-/g, "_")}`;
  const bibtex = `@article{${key},
  author    = {${AUTHOR}},
  title     = {${doc.title}},
  year      = {${doc.date}},
  publisher = {${INSTITUTION}},
  type      = {${doc.type}},
  url       = {${BASE_URL}${doc.url}},
  note      = {ABN ${ABN}. Blockchain-sealed: Bitcoin Block 897,241. OHCHR UR/UST/23/AUS/17. Free access archive.},
  keywords  = {${doc.keywords.join(", ")}},
  abstract  = {${doc.abstract}}
}`;
  return bibtex;
}

function DocCard({ doc }: { doc: typeof DOCUMENTS[0] }) {
  const [copied, setCopied] = useState(false);
  const bibtex = BibTeX({ doc });

  const copy = () => {
    navigator.clipboard?.writeText(bibtex).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 space-y-3">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex-1 min-w-0 space-y-1">
          <Badge variant="outline" className="text-[10px] font-mono border-indigo-700/40 text-indigo-300 mb-1">{doc.type}</Badge>
          <h3 className="text-white font-serif font-bold text-sm leading-snug">{doc.title}</h3>
          <p className="text-zinc-500 text-xs">{AUTHOR} · {doc.date} · {INSTITUTION}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          {doc.pdf && (
            <a href={doc.pdf} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-2 py-1.5 rounded-lg transition-colors"
              data-testid={`link-pdf-${doc.id}`}>
              <Download className="h-3 w-3" /> PDF
            </a>
          )}
          <a href={doc.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-2 py-1.5 rounded-lg transition-colors"
            data-testid={`link-view-${doc.id}`}>
            <ExternalLink className="h-3 w-3" /> View
          </a>
        </div>
      </div>
      <p className="text-zinc-400 text-xs leading-relaxed">{doc.abstract}</p>
      <div className="flex flex-wrap gap-1.5">
        {doc.keywords.map(k => (
          <span key={k} className="text-[10px] font-mono text-indigo-400/70 bg-indigo-950/30 border border-indigo-900/40 px-2 py-0.5 rounded-full">{k}</span>
        ))}
      </div>
      <div className="border-t border-zinc-800 pt-3 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">BibTeX Citation</p>
          <button onClick={copy}
            className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold px-2 py-1 rounded-lg transition-colors"
            data-testid={`button-copy-bibtex-${doc.id}`}>
            {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied!" : "Copy BibTeX"}
          </button>
        </div>
        <pre className="text-zinc-600 text-[10px] leading-relaxed whitespace-pre-wrap font-mono bg-zinc-950/60 rounded-lg p-3 overflow-x-auto">
          {bibtex}
        </pre>
      </div>
    </div>
  );
}

const ALL_URLS = [
  `${BASE_URL}/`,
  `${BASE_URL}/evidence`,
  `${BASE_URL}/administrative-annihilation`,
  `${BASE_URL}/retrospective-statement`,
  `${BASE_URL}/the-architecture-of-silence`,
  `${BASE_URL}/taxpayer-cost-analysis`,
  `${BASE_URL}/blockchain`,
  `${BASE_URL}/legal-status`,
  `${BASE_URL}/timeline`,
  `${BASE_URL}/case-studies`,
  `${BASE_URL}/archive-detonation`,
  `${BASE_URL}/publications`,
  `${BASE_URL}/mission`,
  `${BASE_URL}/manifesto`,
  `${BASE_URL}/research`,
  `${BASE_URL}/donate`,
  `${BASE_URL}/sign-the-petition`,
  `${BASE_URL}/academic-record`,
];

export default function AcademicRecord() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="Academic Record & Citation Index — Barran Dodger Archive | DOI-Ready"
        description="Formal academic citation index for the Barran Dodger archive. BibTeX citations, Dublin Core metadata, Zenodo submission guide, and Internet Archive preservation links for all primary documents."
        path="/academic-record"
        keywords="academic citation barran dodger, BibTeX citation Richard McLean, Zenodo whistleblower archive, Google Scholar whistleblower Australia, Dublin Core metadata, academic record whistleblower, DOI archive Australian government"
      />
      <Navigation />

      <section className="relative pt-24 pb-12 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-zinc-950 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto space-y-5">
          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 font-mono text-xs">
            <BookOpen className="h-3 w-3 mr-1" /> ACADEMIC RECORD
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Cite This Archive.
          </h1>
          <p className="text-zinc-300 text-base max-w-2xl mx-auto leading-relaxed">
            BibTeX citations, Zenodo submission guide, Internet Archive preservation, and Google Scholar metadata — making this record permanently citeable in academic and legal contexts.
          </p>
        </div>
      </section>

      {/* Zenodo guide */}
      <section className="px-4 pb-10 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-950/10 p-6 space-y-4">
          <p className="text-amber-400 text-xs font-mono uppercase tracking-widest">Zenodo — CERN Open Research Repository</p>
          <h2 className="text-white font-serif font-bold text-lg">Getting a DOI for Each Document</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Zenodo (operated by CERN) gives every uploaded document a permanent DOI — making it formally citeable in academic papers, legal submissions, and journalism. Free. Permanent. No paywall.
          </p>
          <div className="space-y-3">
            {[
              { n: 1, text: "Create a free account at zenodo.org" },
              { n: 2, text: "Upload each PDF from this archive" },
              { n: 3, text: "Use the metadata below (copy BibTeX fields as Zenodo form input)" },
              { n: 4, text: "Set licence: CC BY 4.0 (matches the archive's free reproduction policy)" },
              { n: 5, text: "Zenodo auto-assigns a DOI — add it back to the document page here" },
            ].map(({ n, text }) => (
              <div key={n} className="flex gap-3 items-start text-sm">
                <span className="text-amber-400 font-black font-mono w-5 shrink-0">{n}.</span>
                <span className="text-zinc-300">{text}</span>
              </div>
            ))}
          </div>
          <a href="https://zenodo.org/deposit/new" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm rounded-xl px-5 py-3 transition-colors"
            data-testid="link-zenodo-deposit">
            <ExternalLink className="h-4 w-4" /> Upload to Zenodo →
          </a>
        </div>
      </section>

      {/* Google Scholar meta note */}
      <section className="px-4 pb-10 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-5 space-y-2">
          <p className="text-green-400 text-xs font-mono uppercase tracking-widest">✓ Google Scholar Indexing — Active</p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            This site now includes <code className="text-green-300 text-xs">citation_*</code> and Dublin Core meta tags on all major pages — the format Google Scholar uses to index academic works. Documents should begin appearing in Scholar search results within 2–4 weeks of next crawl.
          </p>
          <a href="https://scholar.google.com/scholar?q=barrandodger+Richard+McLean+whistleblower" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs transition-colors"
            data-testid="link-google-scholar-search">
            <ExternalLink className="h-3 w-3" /> Search Google Scholar →
          </a>
        </div>
      </section>

      {/* Internet Archive */}
      <section className="px-4 pb-10 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-blue-700/30 bg-blue-950/10 p-5 space-y-4">
          <p className="text-blue-400 text-xs font-mono uppercase tracking-widest">🏛 Internet Archive — Wayback Machine</p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Permanently snapshot every key page to the Wayback Machine. Even if the site goes down, the content remains accessible forever at archive.org.
          </p>
          <WaybackBulkArchiver urls={ALL_URLS} />
          <p className="text-zinc-600 text-xs">Opens each URL in the Wayback Machine sequentially. Allow popups. Takes ~15 seconds total.</p>
        </div>
      </section>

      {/* Document citations */}
      <section className="px-4 pb-16 max-w-3xl mx-auto space-y-4">
        <div>
          <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-1">Document Citation Index</p>
          <p className="text-zinc-600 text-xs">Copy BibTeX directly into your reference manager (Zotero, Mendeley, EndNote, LaTeX).</p>
        </div>
        {DOCUMENTS.map(doc => <DocCard key={doc.id} doc={doc} />)}
      </section>

      <section className="px-4 pb-10 max-w-3xl mx-auto text-center space-y-3">
        <AcademicOutreach />
        <div className="mt-6">
          <WaybackArchiveButton path="/academic-record" label="Save this citation index to the Internet Archive" />
        </div>
        <p className="text-zinc-700 text-xs font-mono mt-3">ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · CC BY 4.0 · Free to cite and reproduce with attribution</p>
      </section>

      <Footer />
    </div>
  );
}
