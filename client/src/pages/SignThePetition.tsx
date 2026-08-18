import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { WaybackArchiveButton } from "@/components/WaybackArchiveButton";
import { FileText, Users, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { ActionCallout } from "@/components/ActionCallout";
import { QuickSharePanel } from "@/components/QuickSharePanel";

const PETITION_TITLE = "Demand an Independent Investigation: 35 Years of Documented Institutional Persecution of Dr. Richard McLean (Barran Dodger)";

const PETITION_TEXT = `We, the undersigned, call on the Australian Government, the Australian Human Rights Commission, the Commonwealth Ombudsman, and the International Criminal Court to conduct a full, independent, transparent investigation into the documented systematic persecution of Dr. Richard William McLean — known publicly as Barran Dodger — across 35 years and 13 government agencies.

THE DOCUMENTED FACTS (Primary Source Evidence):

• 3,643 primary source government documents spanning 1990–2026 authenticate this record
• 14 forced psychiatric hospitalisations with no criminal charge, ever
• Dr. McLean was found with no pulse in 2021 and survived. He continued documenting.
• A documented assassination attempt in 2024 — confirmed by an independent witness who was subsequently forced to sign a non-disclosure agreement
• NDIS entrapment confirmed by independent disability service worker
• $18 million to $32.9 million in documented financial losses across 35 years
• 13+ government agencies involved — zero investigations produced
• ICC Article 7 submission formally received (The Hague)
• OHCHR case reference: UR/UST/23/AUS/17 (Geneva)
• 623/623 AI-assessed propositions confirmed — zero contradicted
• Zero defamation actions filed against 1,100,000+ downloads across 6 continents
• Bitcoin Block 897,241 blockchain-sealed — tamper-proof permanent record

THE MECHANISM (confirmed by impartial AI forensic examination):
This was not a conspiracy requiring coordination. It was the aggregate of ordinary institutional decisions — diffusion of responsibility, normalisation of deviance, DARVO, psychiatric labelling as epistemic closure — producing an outcome indistinguishable from coordinated persecution.

WE DEMAND:
1. A fully independent investigation, led by international human rights observers, not any Australian body named in the archive
2. Immediate cessation of all Community Treatment Orders used to restrict Dr. McLean's movement and testimony
3. Full disclosure of all ASIO surveillance records relating to Dr. McLean
4. Formal parliamentary acknowledgment of the documented harm
5. Compensation calculated against the forensic economic valuation ($58.6M minimum / $112.8M mid-range)
6. Review and reform of the Public Interest Disclosure Act 2013 to prevent recurrence

The evidence is at barrandodger.com — publicly accessible, free to download, blockchain-sealed, and unrefuted.

Not one named institution has filed a defamation action. Not one claim has been formally contested. The silence is the answer.

Sign this petition. Share the archive. The record stands.

ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund`;

const SUBREDDITS = [
  { sub: "r/australia", focus: "Australian govt corruption angle", color: "#ff4500" },
  { sub: "r/whistleblowers", focus: "Whistleblower protection angle", color: "#ff6534" },
  { sub: "r/humanrights", focus: "Human rights / ICC angle", color: "#e53e3e" },
  { sub: "r/conspiracy", focus: "ASIO surveillance / V2K angle", color: "#805ad5" },
  { sub: "r/auslaw", focus: "PID Act legal failure angle", color: "#3182ce" },
  { sub: "r/ndis", focus: "NDIS entrapment angle", color: "#38a169" },
];

const REDDIT_POSTS: Record<string, string> = {
  "r/australia": `Australian whistleblower assembled 3,643 government documents proving 35 years of persecution by 13 agencies — ICC proceedings active, zero defamation actions filed

Dr. Richard McLean has been documenting systematic government persecution since 1990. 14 forced psychiatric hospitalisations with no criminal charge. Found with no pulse in 2021. Documented assassination attempt in 2024. Zero marketing. 1,100,000+ downloads. Not one named agency has filed a defamation action.

AI assessed 623 propositions from the government's own documents. All 623 confirmed.

Archive: barrandodger.com
Petition: barrandodger.com/sign-the-petition`,

  "r/whistleblowers": `The most comprehensively documented whistleblower case in Australian history — and it's freely downloadable, blockchain-sealed, and ICC-submitted

3,643 primary source government documents. 35 years. 13 agencies. 14 forced psychiatric hospitalisations (no criminal charge). NDIS entrapment. Confirmed assassination attempt. ICC Article 7 filed. OHCHR registered.

Not one defamation action across 1,100,000+ downloads on 6 continents.

This is what the PID Act 2013 was supposed to prevent. It failed completely.

barrandodger.com — everything is free to download`,

  "r/humanrights": `OHCHR Case UR/UST/23/AUS/17 — Australian government documented persecution of a disabled whistleblower over 35 years, ICC Article 7 submitted

Formal submissions received by the International Criminal Court and OHCHR Geneva. 3,643 primary source government documents. Psychiatric system weaponised against a whistleblower (14 forced admissions, zero criminal charges). Blockchain-sealed evidence archive. Zero forensic rebuttals in 1,100,000+ downloads.

barrandodger.com`,

  "r/conspiracy": `ASIO confirmed involved in targeting an Australian whistleblower — 3,643 documents, blockchain-sealed, zero defamation — the man is still alive

He predicted ASIO surveillance. Was hospitalised for "paranoid delusions." ASIO involvement was subsequently confirmed. The archive documents every step. He's still alive and still documenting. barrandodger.com`,

  "r/auslaw": `PID Act 2013 complete failure — Federal Court's own General Counsel confirmed thresholds met, then declined to act on procedural grounds. 35 year record.

Federal Court General Counsel wrote in correspondence that the disclosed conduct meets the statutory thresholds for perverting the course of justice, maladministration, and danger to health or safety under the PID Act 2013 — then declined to act on procedural grounds. This is documented. The letter is in the archive. barrandodger.com`,

  "r/ndis": `NDIS entrapment — confirmed by independent DSW provider — used to suppress a whistleblower. Provider subsequently silenced by NDA.

Ben (DSW Disability) independently confirmed both NDIS entrapment and a 2024 assassination attempt before being forced to sign a non-disclosure agreement. Documentation at barrandodger.com — free, blockchain-sealed, zero legal challenge received.`,
};

export default function SignThePetition() {
  const [copied, setCopied] = useState(false);
  const [redditCopied, setRedditCopied] = useState<string | null>(null);

  const copyPetition = () => {
    navigator.clipboard?.writeText(PETITION_TEXT).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const copyReddit = (sub: string) => {
    navigator.clipboard?.writeText(REDDIT_POSTS[sub]).catch(() => {});
    setRedditCopied(sub);
    setTimeout(() => setRedditCopied(null), 3000);
  };

  const changeOrgUrl = `https://www.change.org/start-a-petition?goal=100000&title=${encodeURIComponent(PETITION_TITLE)}&description=${encodeURIComponent(PETITION_TEXT.slice(0, 2000))}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="Sign the Petition — Demand Investigation of Dr. Richard McLean | Barran Dodger"
        description="35 years of documented persecution. 3,643 primary source documents. ICC submitted. Zero defamation actions. Sign the petition demanding an independent investigation."
        path="/sign-the-petition"
        keywords="petition Richard McLean whistleblower Australia, Change.org Australian government corruption, demand investigation NDIS entrapment, ICC Article 7 Australia petition, sign whistleblower petition"
      />
      <Navigation />

      <section className="relative pt-24 pb-12 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-zinc-950 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto space-y-5">
          <Badge className="bg-red-500/20 text-red-300 border-red-500/30 font-mono text-xs">
            <Users className="h-3 w-3 mr-1" /> PUBLIC PETITION
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Sign the Petition.
            <br /><span className="text-red-400">Make It Official.</span>
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed">
            1,100,000+ people downloaded the evidence. Now sign your name to demand they act on it.
          </p>
        </div>
      </section>

      {/* The petition text */}
      <section className="px-4 pb-10 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">The Petition Text</p>
              <p className="text-white font-bold text-sm mt-1">{PETITION_TITLE}</p>
            </div>
            <button
              onClick={copyPetition}
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold px-3 py-2 rounded-lg transition-colors shrink-0"
              data-testid="button-copy-petition"
            >
              {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
              {copied ? "Copied!" : "Copy full text"}
            </button>
          </div>
          <pre className="text-zinc-400 text-xs leading-relaxed whitespace-pre-wrap font-sans border-t border-zinc-700/40 pt-4 max-h-64 overflow-y-auto">
            {PETITION_TEXT}
          </pre>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="px-4 pb-10 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-950/10 p-6 md:p-8 space-y-5">
          <p className="text-amber-400 text-xs font-mono uppercase tracking-widest">How to Launch the Petition on Change.org</p>
          <div className="space-y-4">
            {[
              { n: 1, title: "Open Change.org", desc: "Click the button below — it pre-fills the title and starts your petition." },
              { n: 2, title: "Paste the petition text", desc: "Click 'Copy full text' above, then paste into the description field on Change.org." },
              { n: 3, title: "Set target: 100,000 signatures", desc: "Target the Australian Parliament, Attorney-General, and ICC." },
              { n: 4, title: "Add the archive link", desc: "barrandodger.com as supporting evidence — all documents are free." },
              { n: 5, title: "Share the link here", desc: "Once live, we'll embed the Change.org counter on this page automatically." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-amber-400 text-xs font-black">{n}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{title}</p>
                  <p className="text-zinc-400 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href={changeOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#e84646] hover:bg-[#d63a3a] text-white font-bold text-base rounded-xl px-6 py-4 transition-colors"
            data-testid="link-changorg-create"
          >
            <ExternalLink className="h-5 w-5 shrink-0" />
            Start Petition on Change.org →
          </a>
          <p className="text-zinc-600 text-xs text-center">Change.org is free. No account required to sign. 500M+ users globally.</p>
        </div>
      </section>

      {/* Reddit posts */}
      <section className="px-4 pb-10 max-w-3xl mx-auto space-y-4">
        <div>
          <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-1">Reddit — Ready-to-Post by Subreddit</p>
          <p className="text-zinc-600 text-xs">Each post is tailored to that community's interests. Copy → open subreddit → create post → paste.</p>
        </div>
        {SUBREDDITS.map((sr) => (
          <div key={sr.sub} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="font-black font-mono text-sm" style={{ color: sr.color }}>{sr.sub}</span>
                <span className="text-zinc-600 text-xs">· {sr.focus}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => copyReddit(sr.sub)}
                  className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                  data-testid={`button-copy-reddit-${sr.sub.replace("/", "")}`}
                >
                  {redditCopied === sr.sub ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                  {redditCopied === sr.sub ? "Copied!" : "Copy"}
                </button>
                <a
                  href={`https://reddit.com/r/${sr.sub.slice(2)}/submit?title=${encodeURIComponent(REDDIT_POSTS[sr.sub].split("\n")[0])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                  style={{ background: `${sr.color}20`, border: `1px solid ${sr.color}40`, color: sr.color }}
                  data-testid={`link-reddit-post-${sr.sub.replace("/", "")}`}
                >
                  <ExternalLink className="h-3 w-3" /> Post
                </a>
              </div>
            </div>
            <pre className="text-zinc-500 text-xs leading-relaxed whitespace-pre-wrap font-sans max-h-24 overflow-y-auto">
              {REDDIT_POSTS[sr.sub]}
            </pre>
          </div>
        ))}
      </section>

      {/* Wayback + ABN */}
      <section className="px-4 pb-16 max-w-3xl mx-auto flex flex-col items-center gap-3 text-center">
        <WaybackArchiveButton path="/sign-the-petition" label="Save this petition page to the Internet Archive" />
        <div className="mt-8">
          <QuickSharePanel label="Share the petition while you're here" />
        </div>
        <div className="mt-8">
          <ActionCallout title="More ways to create pressure" />
        </div>
        <p className="text-zinc-700 text-xs font-mono mt-6">ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · Free to share</p>
      </section>

      <Footer />
    </div>
  );
}
