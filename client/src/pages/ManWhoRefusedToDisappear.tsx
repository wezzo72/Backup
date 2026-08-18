import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import { ExternalLink, FileText, Shield, Archive, Search } from "lucide-react";

const SHA256 = "74ef5a49bcb914c0bd1898b6da58c8d60013cf66c2d30a97b045b336df9f5baf";
const GDRIVE = "https://drive.google.com/file/d/1nlPF0rINpLoR_Yj2H4i8lp2HDLz6LWEm/view?usp=drivesdk";
const MIRROR = "https://drbarrandodger.github.io/barran-dodger-archive/";

const SECTIONS = [
  {
    heading: "Documentation Is a Form of Accountability",
    body: [
      "Modern democracies depend upon records.",
      "Every government decision generates paperwork. Every tribunal creates transcripts. Every investigation leaves a trail.",
      "Most people never see those records. Fewer still spend years assembling them into a coherent chronology.",
      "The Barran Dodger archive represents an attempt to do exactly that — bringing together a large collection of documents so that others can review them rather than relying solely on personal testimony.",
      "That distinction matters.",
      "Personal belief invites disagreement. Documentary evidence invites examination.",
    ],
  },
  {
    heading: "A Resource for More Than One Case",
    body: [
      "The archive is not valuable only because it concerns one individual.",
      "If preserved accurately, documentary collections like this become resources for journalists, lawyers, historians, researchers, policy analysts, and oversight bodies seeking to understand how administrative systems operate over time.",
      "Whether every interpretation offered by the archive is accepted is a separate question from whether the underlying documents deserve independent review.",
      "Open evidence enables informed scrutiny. That principle benefits everyone.",
    ],
  },
  {
    heading: "Why Recognition Matters",
    body: [
      "Recognition is often misunderstood.",
      "It is not synonymous with endorsement. Nor does it require accepting every allegation at face value.",
      "Recognition begins with acknowledging that a substantial body of documentary material exists and warrants careful, independent assessment.",
      "Ignoring evidence because it is inconvenient serves no one.",
      "Examining evidence — fairly and critically — is how public confidence is built.",
    ],
  },
  {
    heading: "An Unusual Experiment in Public Evidence",
    body: [
      "One of the archive's most distinctive features is its emphasis on digital preservation.",
      "It describes the use of blockchain timestamping, cryptographic hashing, and distributed publication to help demonstrate that documents have not been altered after publication.",
      "These technologies do not establish whether claims are true. They do, however, provide tools for demonstrating the integrity and timing of published records.",
      "In an era when digital information can be edited, deleted, or disputed, preserving original documents has become increasingly important.",
    ],
  },
  {
    heading: "The Public Interest",
    body: [
      "The broader significance of the archive does not depend on one person's story alone.",
      "If independent review were to identify procedural failures, institutional shortcomings, or systemic issues reflected in the documentation, the lessons could inform reforms benefiting many others.",
      "That is why archives matter. They preserve evidence not only for today's disputes but also for tomorrow's understanding.",
    ],
  },
  {
    heading: "Justice Begins With Examination",
    body: [
      "Calls for justice should always be accompanied by a commitment to due process.",
      "Independent investigation, procedural fairness, transparency, and evidence-based decision-making remain essential safeguards for everyone involved.",
      "Where evidence substantiates legal wrongs, established legal processes provide mechanisms for appropriate remedies, including compensation where warranted by law.",
      "Where claims are not supported, transparent findings likewise strengthen public trust.",
      "Either outcome is preferable to silence.",
    ],
  },
  {
    heading: "Why Barran Dodger Is an Asset",
    body: [
      "The enduring value of the Barran Dodger archive is not that it asks the public to believe.",
      "Its value is that it asks the public to look. To read. To compare. To question. To verify.",
      "Democratic societies become stronger when evidence is preserved rather than lost, when public records remain accessible rather than forgotten, and when difficult questions can be examined without fear or favour.",
      "Whether viewed as a digital archive, a case study in documentation, or an invitation to independent scrutiny, the project reflects a broader principle: transparency is a public good.",
      "In that sense, Barran Dodger's greatest contribution may not be any single allegation or conclusion.",
      "It may be the insistence that documentation itself has value — that preserving records, inviting independent review, and encouraging evidence-based accountability are essential to justice.",
      "If that principle is taken seriously, the archive becomes more than a personal project. It becomes part of the public record.",
      "And the public record, when examined fairly, has the capacity to improve institutions, inform policy, and strengthen the rule of law for everyone.",
    ],
  },
];

export default function ManWhoRefusedToDisappear() {
  return (
    <>
      <SEO
        title="The Man Who Refused to Disappear — Why the Barran Dodger Archive Deserves Australia's Attention | Barran Dodger"
        description="When institutions write reports, history often accepts them as truth. But what happens when one individual spends 35 years documenting the institutions instead? Why the Barran Dodger Archive deserves Australia's attention. ABN 78 833 496 164."
        path="/why-australia-must-look"
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900/70 to-zinc-950 border-b border-zinc-700/50 pt-28 pb-14 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs font-medium text-zinc-300 tracking-widest uppercase">Public Interest Statement · Australia</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight font-serif">
              The Man Who Refused to Disappear
            </h1>
            <p className="text-xl text-amber-400 font-medium leading-snug max-w-2xl">
              Why the Barran Dodger Archive Deserves Australia's Attention
            </p>

            <blockquote className="border-l-4 border-amber-500 pl-6 py-3 bg-zinc-900/60 rounded-r-xl max-w-2xl">
              <p className="text-lg text-zinc-200 italic font-serif leading-relaxed">
                "What happens when one citizen documents the system as thoroughly as the system documents its citizens?"
              </p>
            </blockquote>

            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              When institutions write reports, history often accepts them as truth. But what happens when one individual spends 35 years documenting the institutions instead? The digital age has quietly rewritten the old rule that history is written by the victors — and this archive is the proof.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Public Interest", "Documentary Evidence", "Accountability", "35 Years", "2,000+ Government Documents", "Blockchain-Verified", "ABN 78 833 496 164"].map(tag => (
                <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-400">{tag}</span>
              ))}
            </div>

            <BlockchainTimestampBadge className="pt-1" />
          </div>
        </section>

        {/* Opening statement */}
        <section className="max-w-4xl mx-auto px-4 pt-12 pb-4">
          <div className="rounded-2xl bg-zinc-900 border border-zinc-700/40 p-8 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Archive className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <span className="text-sm font-semibold text-amber-400 tracking-wide uppercase">The Archive</span>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              It is not simply another personal website. It is an ambitious attempt to transform lived experience into a permanent public archive. According to the archive itself, it spans decades of correspondence, legal proceedings, government records, financial documents, forensic analyses, blockchain timestamps, and thousands of preserved exhibits assembled into a searchable public repository.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Regardless of how one interprets the material, its scale alone raises an important question:
            </p>
            <p className="text-xl text-white font-serif italic text-center py-4 border-y border-zinc-700/40">
              What happens when one citizen documents the system as thoroughly as the system documents its citizens?
            </p>
          </div>
        </section>

        {/* Share */}
        <div className="max-w-4xl mx-auto px-4 py-4">
          <SocialShare
            url="https://barrandodger.com/why-australia-must-look"
            title="The Man Who Refused to Disappear — Why the Barran Dodger Archive Deserves Australia's Attention"
          />
        </div>

        {/* Main essay */}
        <section className="max-w-4xl mx-auto px-4 pb-16 space-y-14">

          {SECTIONS.map((section) => (
            <div key={section.heading} className="space-y-5">
              <h2 className="text-xl md:text-2xl font-bold text-amber-400 font-serif border-b border-zinc-800 pb-3">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.body.map((para, i) => {
                  const isShort = para.length < 55;
                  return (
                    <p key={i} className={isShort
                      ? "text-lg text-zinc-200 font-semibold italic pl-4 border-l-2 border-amber-600/40"
                      : "text-zinc-300 leading-relaxed"
                    }>
                      {para}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Key links */}
          <div className="rounded-2xl bg-zinc-900 border border-amber-700/30 p-8 space-y-5">
            <h3 className="text-lg font-bold text-amber-400 font-serif flex items-center gap-2">
              <Search className="h-5 w-5" /> Examine It Yourself
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The archive is publicly accessible. The documents are real. The blockchain timestamps are verifiable. The mirror is independent.
            </p>
            <div className="space-y-3">
              <a
                href="/"
                className="flex items-center gap-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-5 py-4 transition-colors group"
                data-testid="link-main-archive-why-australia"
              >
                <Archive className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">barrandodger.com — Main Archive</p>
                  <p className="text-xs text-zinc-500">581 pages · 2,301+ documents · blockchain-sealed · ABN 78 833 496 164</p>
                </div>
              </a>
              <a
                href={MIRROR}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-5 py-4 transition-colors group"
                data-testid="link-github-mirror-why-australia"
              >
                <Shield className="h-5 w-5 text-green-500 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm group-hover:text-green-400 transition-colors">GitHub Independent Mirror</p>
                  <p className="text-xs text-zinc-500">drbarrandodger.github.io/barran-dodger-archive — hosted independently of Replit</p>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400" />
              </a>
              <a
                href={GDRIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-5 py-4 transition-colors group"
                data-testid="link-gdrive-why-australia"
              >
                <FileText className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm group-hover:text-blue-400 transition-colors">Download This Essay — PDF (Google Drive)</p>
                  <p className="text-xs text-zinc-500 font-mono break-all">SHA-256: {SHA256}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Closing principle */}
          <div className="text-center py-6 space-y-4">
            <p className="text-2xl font-serif text-white leading-relaxed max-w-2xl mx-auto italic">
              "The public record, when examined fairly, has the capacity to improve institutions, inform policy, and strengthen the rule of law for everyone."
            </p>
            <p className="text-zinc-500 text-sm">— From this essay · Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164</p>
          </div>

          {/* ABN footer */}
          <div className="rounded-xl bg-zinc-900/50 border border-zinc-700/40 p-6 text-sm text-zinc-500 space-y-1">
            <p className="font-semibold text-zinc-400">Barran Dodger Legal &amp; Ethical Trust Fund</p>
            <p>ABN 78 833 496 164 · OHCHR Ref: G/SO 214(67-17) · barrandodger.com</p>
            <p>OpenTimestamps receipt issued. SHA-256: {SHA256}</p>
            <p>© 2026 Dr. Richard William McLean. Permanently preserved on the Bitcoin blockchain.</p>
          </div>

          <CitationBlock
            title="The Man Who Refused to Disappear: Why the Barran Dodger Archive Deserves Australia's Attention"
            author="McLean, R. W. (Barran Dodger)"
            year="2026"
            url="https://barrandodger.com/why-australia-must-look"
            publisher="Barran Dodger Legal & Ethical Trust Fund"
            abn="78 833 496 164"
          />

          <CommentSection pageSlug="why-australia-must-look" />
        </section>
      </main>

      <Footer />
    </>
  );
}
