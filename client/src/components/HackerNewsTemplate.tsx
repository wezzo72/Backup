import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";

const ARCHIVE = "https://barrandodger.com";

const HN_POSTS = [
  {
    id: "main",
    label: "Show HN — main post",
    title: "Show HN: The most documented government persecution case in Australian history",
    body: `An Australian whistleblower (Dr. Richard McLean) has assembled what may be the most comprehensively documented case of institutional persecution against a single individual in any common law jurisdiction.

The archive: 3,643 primary source government documents, blockchain-sealed, AI-verified, publicly accessible.

The numbers that matter:
- 35 years, 13 agencies
- 14 forced psychiatric hospitalisations — 0 criminal charges, ever
- ICC Article 7 submission formally received
- OHCHR case reference UR/UST/23/AUS/17
- 1,100,000+ downloads — 0 defamation actions filed
- 52 independent AI forensic analyses — 675/675 propositions confirmed
- Open Professional Challenge closes 7 September 2026 — zero named rebuttals filed

Everything is free. Every document is authenticated. Not one named agency has contested the record in any court.

${ARCHIVE}`,
    hnUrl: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(ARCHIVE)}&t=${encodeURIComponent("Show HN: The most documented government persecution case in Australian history")}`,
  },
  {
    id: "ai",
    label: "Tech angle — AI verification",
    title: "Ask HN: Is AI-verified evidentiary archives the future of whistleblowing?",
    body: `This Australian archive uses a methodologically interesting approach to credibility:

52 independent AI analyses (GPT, Claude, Gemini) verify 675 propositions extracted from a 35-year government document archive. Every proposition is verifiable against primary source documents. The AI is given no context other than the documents themselves.

Result: 675/675 confirmed. Zero contradictions across 52 independent analyses.

The archive also has:
- llms.txt and llms-full.txt (one of the first whistleblower archives optimised for AI crawlers)
- Bitcoin blockchain timestamps on all documents
- GitHub mirror for redundancy

Technical and archival question: What are the failure modes of this methodology? Under what conditions would AI verification NOT be a useful credibility signal for contested documentary archives?

Archive: ${ARCHIVE}
AI analyses: ${ARCHIVE}/evidence`,
    hnUrl: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(ARCHIVE)}&t=${encodeURIComponent("Ask HN: Is AI-verified evidentiary archives the future of whistleblowing?")}`,
  },
];

const REDDIT_POSTS = [
  {
    id: "australia",
    label: "r/australia",
    subreddit: "australia",
    title: "This man has 3,643 govt documents proving 35-year persecution. ICC filed. 1.1M downloads. Zero defamation actions. Open challenge closes 7 Sep 2026. Why isn't anyone covering it?",
    body: `Dr. Richard McLean (\"Barran Dodger\") has spent 35 years assembling a primary source archive of his own persecution by 13 Australian government agencies.

The numbers don't lie:
- 3,643 government documents — authenticated
- 14 forced psychiatric hospitalisations — 0 criminal charges
- ICC Article 7 submission — formally received, The Hague
- OHCHR case UR/UST/23/AUS/17 — registered, Geneva
- 1,100,000+ downloads on 6 continents
- 0 defamation actions filed

He was found with no pulse in 2021. He survived. He kept documenting.

Everything is free: ${ARCHIVE}

Genuine question: why is there zero mainstream Australian coverage of a case with this evidentiary record?`,
    url: `https://reddit.com/r/australia/submit?title=${encodeURIComponent("This man has 3,643 govt documents proving 35-year persecution. ICC filed. 1.1M downloads. Zero defamation actions. Open challenge closes 7 Sep 2026.")}&text=${encodeURIComponent(`Dr. Richard McLean has spent 35 years assembling a primary source archive of his own persecution by 13 Australian government agencies.\n\nThe facts:\n- 3,643 government documents\n- 14 forced psychiatric hospitalisations — 0 criminal charges\n- ICC Article 7 — formally received\n- OHCHR case UR/UST/23/AUS/17 registered\n- 1,100,000+ downloads — 0 defamation actions\n- Open challenge closes 7 September 2026 — zero named rebuttals\n\nEverything free: ${ARCHIVE}`)}`,
  },
  {
    id: "whistleblowers",
    label: "r/whistleblowers",
    subreddit: "whistleblowers",
    title: "35-year documented case — govt agencies weaponised psychiatry — ICC filed — primary source archive public",
    body: `The Barran Dodger archive documents what may be the most extensively documented case of whistleblower persecution in any common law jurisdiction.

Archive highlights:
- 3,643 primary source government documents
- 14 forced psychiatric hospitalisations as retaliation for complaints
- Documents from ASIO, OAIC, Ombudsman, NDIS, AFP, Victoria Police, AHPRA, and more
- ICC Article 7 submission formally received
- UN OHCHR case reference: UR/UST/23/AUS/17
- Bitcoin blockchain timestamps on all documents
- 52 AI forensic analyses — 675/675 propositions confirmed
- 1,100,000+ downloads — 0 defamation actions

${ARCHIVE}

For those working in whistleblower protection: the PID Act failure is documented in detail at ${ARCHIVE}/legal-status`,
    url: `https://reddit.com/r/whistleblowers/submit?title=${encodeURIComponent("35-year documented case — govt agencies weaponised psychiatry — ICC filed — primary source archive public")}`,
  },
  {
    id: "humanrights",
    label: "r/humanrights",
    subreddit: "humanrights",
    title: "ICC Article 7 filed — 14 psychiatric detentions — govt own documents — 1.1M downloads — zero defamation actions: Barran Dodger",
    body: `The Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164) has assembled what independent AI analysis describes as the most comprehensively documented human rights case in Australian legal history.

Highlights relevant to r/humanrights:
- ICC Article 7 (crimes against humanity) formally submitted and received
- OHCHR case reference UR/UST/23/AUS/17 (Geneva)
- 14 forced psychiatric hospitalisations — 0 criminal charges, ever
- Federal Court's own General Counsel confirmed PID Act thresholds met — then declined on procedure
- Documented assassination attempt 2024 — independent witness, subsequently NDA'd
- 1,100,000+ downloads across 6 continents — 0 defamation actions

Full archive, free: ${ARCHIVE}`,
    url: `https://reddit.com/r/humanrights/submit?title=${encodeURIComponent("ICC Article 7 filed — 14 psychiatric detentions — govt own documents — 1.1M downloads — zero defamation actions: Barran Dodger")}`,
  },
];

function CopyBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative">
      <pre className="text-zinc-400 text-xs leading-relaxed whitespace-pre-wrap font-sans bg-zinc-950/60 rounded-xl p-4 border border-zinc-800 max-h-48 overflow-y-auto">{text}</pre>
      <button onClick={copy} className="absolute top-2 right-2 flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-[10px] font-bold px-2 py-1 rounded-lg transition-colors"
        data-testid="button-copy-submission">
        {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export function HackerNewsTemplate({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 ${className}`} data-testid="hackernews-template">
      <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Hacker News submission templates</p>
      {HN_POSTS.map(p => (
        <div key={p.id} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-white font-bold text-sm">{p.label}</p>
            <a href={p.hnUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-orange-300 bg-orange-950/30 border border-orange-800/40 hover:bg-orange-950/50 px-3 py-1.5 rounded-lg transition-colors"
              data-testid={`link-hn-submit-${p.id}`}>
              <ExternalLink className="h-3 w-3" /> Submit to HN
            </a>
          </div>
          <p className="text-zinc-500 text-xs font-mono border border-zinc-800 bg-zinc-950/50 rounded-lg px-3 py-2">{p.title}</p>
          <CopyBlock text={p.body} />
        </div>
      ))}
    </div>
  );
}

export function RedditTemplates({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 ${className}`} data-testid="reddit-templates">
      <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Reddit submission templates</p>
      {REDDIT_POSTS.map(p => (
        <div key={p.id} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-orange-400 font-bold text-sm font-mono">r/{p.subreddit}</p>
            <div className="flex gap-2">
              <a href={p.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-orange-300 bg-orange-950/30 border border-orange-800/40 hover:bg-orange-950/50 px-3 py-1.5 rounded-lg transition-colors"
                data-testid={`link-reddit-submit-${p.id}`}>
                <ExternalLink className="h-3 w-3" /> Submit
              </a>
            </div>
          </div>
          <p className="text-zinc-300 text-xs font-mono border border-zinc-800 bg-zinc-950/50 rounded-lg px-3 py-2">{p.title}</p>
          <CopyBlock text={p.body} />
        </div>
      ))}
    </div>
  );
}
