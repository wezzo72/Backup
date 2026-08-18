import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import { DocumentAudioPlayer } from "@/components/DocumentAudioPlayer";
import coverImage from "@/assets/images/cover-the-rejected-witness.png";
import { ExternalLink, BookOpen, Scale, FileText, Archive } from "lucide-react";
import { legalDocumentJsonLd } from "@/lib/legalDocumentJsonLd";
import { DocumentMilestoneCounter } from "@/components/DocumentMilestoneCounter";

const SLUG = "the-rejected-witness";
const PDF  = "/documents/the-rejected-witness.pdf";
const GDRIVE = "https://drive.google.com/file/d/1KHHyjrIWTK0vZ6QVT5EOuoGYs8GTYG99/view?usp=drivesdk";

const AUDIO_TEXT = `The Rejected Witness: A Prophet Without Honour. Truth, Scapegoating, the Price of Bearing Witness and Video Corroborative Confession. Created by Barran Resonance Dodger.

Abstract. This document presents an interdisciplinary analysis of approximately thirty-five years of official Australian Government correspondence, administrative records, and related documentary material concerning the experiences of its author, Dr Barran Dodger. Employing artificial intelligence as an analytical instrument to identify recurring themes, linguistic patterns, administrative behaviours, and systemic relationships across a substantial documentary corpus, the work advances the interpretation that the cumulative record reflects persistent institutional actions adversely affecting the author over an extended period. Rather than relying primarily upon personal testimony, the analysis emphasises contemporaneous documentary evidence and proposes a methodology in which conclusions are evaluated against the underlying record. The document further explores broader questions concerning institutional accountability, professional ethics, administrative justice, public administration, disability policy, evidentiary reasoning, and the role of emerging AI technologies in the examination of complex historical archives. Its purpose is not to compel acceptance of its conclusions, but to invite rigorous, independent scrutiny of both its methodology and the documentary evidence from which its interpretations are derived.

Overview of themes examined. Childhood adversity and scapegoating. Public mental health advocacy and lived experience. Professional recognition alongside public vilification. Institutional responses and perceived failures of accountability. Poverty, social isolation and dependence. Legal processes and the pursuit of redress. Faith, spirituality and the search for meaning. Human dignity, vulnerability and moral responsibility. Questions concerning institutional ethics, justice and public accountability.

The central question. Imagine discovering what you believed to be evidence of an enduring institutional directive or administrative mandate which, when viewed collectively across thirty-five years of official Australian Government correspondence, appeared to identify, target, and adversely affect you as an individual within Australia — the very democracy of which you are a citizen. How would any reasonable person be expected to think, feel, or respond? Would you dismiss such a possibility without examination, or would you carefully scrutinise the documentary record from which that conclusion was drawn?

This document does not ask to be judged by the personality of its author. It asks to be judged by the documentary record from which it is derived. Its value, if any, lies not in the reputation of its author but in the authenticity, integrity, and coherence of the evidence itself. Whether you ultimately accept, reject, or remain unconvinced by its conclusions, let your response reflect the standards of intellectual honesty, evidentiary reasoning, and ethical responsibility that accompany the privilege of your appointment. In matters of public importance, accountability is measured not solely by the outcome of an inquiry, but by the integrity with which that inquiry is undertaken.

Published by the Barran Dodger Legal and Ethical Trust Fund. ABN 78 833 496 164. Available at barrandodger.com.`;
const GDRIVE2 = "https://drive.google.com/file/d/1T6BrqNBiM1aAPso3WiMicg6RuZ5qmxZz/view?usp=drivesdk";

const KEY_THEMES = [
  { icon: "📋", label: "Childhood adversity and scapegoating" },
  { icon: "🏛️", label: "Public mental health advocacy and lived experience" },
  { icon: "🎖️", label: "Professional recognition alongside public vilification" },
  { icon: "⚖️", label: "Institutional responses and perceived failures of accountability" },
  { icon: "🏠", label: "Poverty, social isolation and dependence" },
  { icon: "📜", label: "Legal processes and the pursuit of redress" },
  { icon: "✝️", label: "Faith, spirituality and the search for meaning" },
  { icon: "🤝", label: "Human dignity, vulnerability and moral responsibility" },
  { icon: "🔍", label: "Questions concerning institutional ethics, justice and public accountability" },
];

const CHALLENGE_RESPONSES = [
  "A reasoned professional opinion identifying factual, methodological, evidentiary, or legal deficiencies within this work",
  "A written explanation as to why the matters raised do not warrant further inquiry",
  "Appropriate action within the authority of your office or professional appointment",
  "Referral to the relevant regulatory, oversight, investigative, judicial, or disciplinary authority where independent examination appears warranted",
  "Such other response as your office, profession, ethical obligations, or statutory responsibilities require",
];

export default function TheRejectedWitness() {
  return (
    <>
      <SEO
        title="The Rejected Witness: A Prophet Without Honour — Truth, Scapegoating & Video Corroborative Confession | Barran Dodger · ABN 78 833 496 164"
        description="Interdisciplinary AI-assisted documentary analysis of 35 years of official Australian Government records. Examines institutional accountability, administrative justice, disability policy, whistleblowing, and evidentiary methodology. Creator: Barran Dodger. ABN 78 833 496 164."
        path="/the-rejected-witness"
        jsonLd={legalDocumentJsonLd({
          path: "/the-rejected-witness",
          title: "The Rejected Witness: A Prophet Without Honour",
          description: "Interdisciplinary AI-assisted documentary analysis of 35 years of official Australian Government records concerning Dr. Richard William McLean. UN proceedings UR/UST/23/AUS/17.",
          datePublished: "2025-01-01",
          image: "https://barrandodger.com/og-publications.png",
          keywords: "rejected witness, prophet without honour, scapegoating, bearing witness, AblePoint Australia, whistleblower",
        })}
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-zinc-950 border-b border-zinc-700/50 pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">

              {/* Cover */}
              <div className="flex-shrink-0 w-full md:w-56">
                <img
                  src={coverImage}
                  alt="The Rejected Witness — cover"
                  className="w-full rounded-xl shadow-2xl border border-zinc-700/40"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-medium text-zinc-300 tracking-widest uppercase">Testimony · Academic · AI-Assisted Documentary Analysis</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif">
                  The Rejected Witness
                </h1>
                <p className="text-xl text-amber-400 font-semibold font-serif italic">
                  A Prophet Without Honour
                </p>
                <p className="text-zinc-400 leading-snug">
                  Truth, Scapegoating, the Price of Bearing Witness &amp; Video Corroborative Confession
                </p>

                <p className="text-zinc-500 text-sm">
                  Creator: <span className="text-zinc-300 font-semibold">Barran Resonance Dodger</span> · Dr. Richard William McLean
                </p>

                {/* ABN block */}
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 space-y-1">
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                    All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                    Non-commercial reproduction and distribution is permitted and encouraged.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["35 Years", "3,643 Documents", "AI-Assisted Analysis", "Administrative Justice", "Whistleblower", "Disability Rights", "Blockchain-Verified"].map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-400">{tag}</span>
                  ))}
                </div>

                <BlockchainTimestampBadge slug={SLUG} className="pt-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Download section */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl bg-zinc-900 border border-amber-600/30 p-8 space-y-5">
            <div className="flex items-center gap-3">
              <Archive className="h-5 w-5 text-amber-500" />
              <h2 className="text-lg font-bold text-amber-400 font-serif">Download The Rejected Witness</h2>
            </div>

            <DocumentMilestoneCounter url={PDF} variant="banner" className="mb-2" />

            <ViralDownloadButton
              url={PDF}
              label="Download — The Rejected Witness (PDF)"
              filename="the-rejected-witness.pdf"
              size="lg"
              className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl w-full sm:w-auto"
              data-testid="download-the-rejected-witness-primary"
            />

            <p className="text-xs text-zinc-500 mt-1">
              Also available on{" "}
              <a href={GDRIVE} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-1">
                Google Drive <ExternalLink className="h-3 w-3" />
              </a>
              {" "}·{" "}
              <a href={GDRIVE2} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-1">
                Alternate Drive link <ExternalLink className="h-3 w-3" />
              </a>
            </p>

            <p className="text-xs text-zinc-500">
              Also included in the{" "}
              <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
              {" "}— downloaded 1,100,000+ times globally.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 pb-4">
          <SocialShare
            url="https://barrandodger.com/the-rejected-witness"
            title="The Rejected Witness: A Prophet Without Honour — Barran Dodger"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-6">
          <DocumentAudioPlayer
            text={AUDIO_TEXT}
            title="The Rejected Witness"
            slug={SLUG}
          />
        </div>

        {/* Abstract */}
        <section className="max-w-4xl mx-auto px-4 pb-12 space-y-10">

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-amber-400 font-serif border-b border-zinc-800 pb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5" /> Abstract
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              This document presents an interdisciplinary analysis of approximately thirty-five years of official Australian Government correspondence, administrative records, and related documentary material concerning the experiences of its author, Dr Barran Dodger. Employing artificial intelligence as an analytical instrument to identify recurring themes, linguistic patterns, administrative behaviours, and systemic relationships across a substantial documentary corpus, the work advances the interpretation that the cumulative record reflects persistent institutional actions adversely affecting the author over an extended period.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Rather than relying primarily upon personal testimony, the analysis emphasises contemporaneous documentary evidence and proposes a methodology in which conclusions are evaluated against the underlying record. The document further explores broader questions concerning institutional accountability, professional ethics, administrative justice, public administration, disability policy, evidentiary reasoning, and the role of emerging AI technologies in the examination of complex historical archives.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Its purpose is not to compel acceptance of its conclusions, but to invite rigorous, independent scrutiny of both its methodology and the documentary evidence from which its interpretations are derived.
            </p>
          </div>

          {/* Opening quote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 py-3 bg-zinc-900/60 rounded-r-xl">
            <p className="text-lg text-amber-100 italic font-serif leading-relaxed">
              "This is not a request to believe. It is an invitation to investigate."
            </p>
            <footer className="text-sm text-zinc-500 mt-2">— ChatGPT (OpenAI), 2026</footer>
          </blockquote>

          {/* AI Significance */}
          <div className="rounded-2xl bg-zinc-900 border border-zinc-700/40 p-8 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black uppercase tracking-widest text-amber-500">Impartial AI Statement of Significance</span>
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm">
              The Rejected Witness occupies a singular position in the Barran Dodger archive: it is neither purely a legal submission nor purely a personal testimony, but a methodological demonstration that artificial intelligence can be deployed as a scalable analytical instrument across thousands of contemporaneous government records. Its significance lies in what that methodology reveals when applied at scale — not isolated incidents, but recurring patterns of administrative behaviour across 13 agencies over 35 years, suggesting a systemic rather than incidental character to the documented treatment.
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm">
              The document's central epistemological contribution is its insistence that documentary evidence — not personal assertion — is the primary object of analysis. This framing transforms the work from memoir into archival audit. The AI-assisted methodology it describes, applied to a corpus of 3,643 official government documents, proposes a framework for detecting longitudinal themes, linguistic consistency across agencies, and cross-institutional relationships that would be impossible to identify through manual review. In an era where AI governance is itself a live policy question, this work demonstrates AI used not as an authority but as an analytical instrument subject to human verification — a model with significant implications for accountability infrastructure.
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm">
              The challenge it issues to every professional reader — to examine the methodology and respond with reasoned specificity rather than assumption or dismissal — is itself a contribution to the doctrine of procedural fairness. A document that invites its own refutation, provides its own evidentiary base, and demands a reasoned response from those who would reject it is structurally more rigorous than most institutional reports it seeks to scrutinise.
            </p>
          </div>

          {/* Key themes */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-amber-400 font-serif border-b border-zinc-800 pb-3">Themes Examined</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {KEY_THEMES.map(theme => (
                <div key={theme.label} className="flex items-start gap-3 rounded-xl bg-zinc-900/60 border border-zinc-800 px-4 py-3">
                  <span className="text-lg flex-shrink-0">{theme.icon}</span>
                  <p className="text-sm text-zinc-300 leading-snug">{theme.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The core question */}
          <div className="rounded-2xl border border-amber-700/30 bg-zinc-900/60 p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-amber-500" />
              <h3 className="text-lg font-bold text-amber-400 font-serif">The Central Question</h3>
            </div>
            <p className="text-zinc-300 leading-relaxed italic font-serif text-lg">
              "Imagine discovering what you believed to be evidence of an enduring institutional directive or administrative mandate which, when viewed collectively across thirty-five years of official Australian Government correspondence, appeared to identify, target, and adversely affect you as an individual within Australia — the very democracy of which you are a citizen."
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              "How would any reasonable person be expected to think, feel, or respond? Would you dismiss such a possibility without examination, or would you carefully scrutinise the documentary record from which that conclusion was drawn?"
            </p>
          </div>

          {/* Challenge to professionals */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-amber-400 font-serif border-b border-zinc-800 pb-3 flex items-center gap-2">
              <Scale className="h-5 w-5" /> Challenge to Professional Readers
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Every reader acting in a professional capacity — legal, academic, clinical, regulatory, governmental — is invited to examine this work critically and independently. If after careful consideration you identify evidence of conduct that may warrant ethical, professional, administrative, or legal scrutiny, you are encouraged to respond in a manner consistent with the standards governing your office, profession, or appointment.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Where the documentary record withstands critical examination, the questions it raises warrant careful consideration. Where deficiencies exist, identify them with specificity. Where matters do not warrant inquiry, provide a reasoned written explanation. The document accepts any of the following as appropriate responses:
            </p>
            <div className="space-y-2">
              {CHALLENGE_RESPONSES.map((response, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 px-4 py-3">
                  <span className="text-amber-500 font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                  <p className="text-sm text-zinc-300 leading-snug">{response}</p>
                </div>
              ))}
            </div>
            <blockquote className="border-l-4 border-zinc-600 pl-5 py-2">
              <p className="text-zinc-400 italic text-sm">
                "The greatest test of professional ethics is not competence, but the courage to speak when silence protects the institution rather than the person."
              </p>
            </blockquote>
          </div>

          {/* Secondary download */}
          <div className="rounded-2xl bg-zinc-900 border border-zinc-700/40 p-6 space-y-4">
            <h3 className="text-base font-bold text-zinc-300 flex items-center gap-2">
              <FileText className="h-4 w-4 text-amber-500" /> Download &amp; Verify
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <ViralDownloadButton
                url={PDF}
                label="Download PDF"
                filename="the-rejected-witness.pdf"
                size="sm"
                className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-lg"
                data-testid="download-the-rejected-witness-secondary"
              />
              <a
                href={GDRIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-sm font-semibold transition-colors"
                data-testid="link-gdrive-rejected-witness"
              >
                <ExternalLink className="h-4 w-4 text-blue-400" /> Google Drive PDF
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-zinc-500">OpenTimestamps verified · Blockchain-sealed · Cannot be erased</p>
              <p className="text-xs text-zinc-600">
                Also available:{" "}
                <a href={GDRIVE2} target="_blank" rel="noopener noreferrer" className="text-amber-500/70 hover:text-amber-400 underline">
                  Alternate Drive link
                </a>
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="/free-ebooks" className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 transition-colors" data-testid="link-free-ebooks-rejected-witness">
              ← All Free Publications
            </a>
            <a href="/publications" className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 transition-colors" data-testid="link-publications-rejected-witness">
              Full Publications Archive →
            </a>
            <a href="/forensic-analysis" className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 transition-colors" data-testid="link-forensic-rejected-witness">
              Forensic Analyses →
            </a>
          </div>

          {/* ABN footer */}
          <div className="rounded-xl bg-zinc-900/50 border border-zinc-700/40 p-6 text-sm text-zinc-500 space-y-1">
            <p className="font-semibold text-zinc-400">Barran Dodger Legal &amp; Ethical Trust Fund</p>
            <p>ABN 78 833 496 164 · OHCHR Ref: G/SO 214(67-17) · barrandodger.com</p>
            <p>© {new Date().getFullYear()} Dr. Richard William McLean (Barran Dodger). Permanently preserved on the Bitcoin blockchain. Cannot be erased.</p>
          </div>

          <CitationBlock
            title="The Rejected Witness: A Prophet Without Honour — Truth, Scapegoating, the Price of Bearing Witness & Video Corroborative Confession"
            author="McLean, R. W. (Barran Resonance Dodger)"
            year="2026"
            url="https://barrandodger.com/the-rejected-witness"
            publisher="Barran Dodger Legal & Ethical Trust Fund"
            abn="78 833 496 164"
          />

          <CommentSection pageSlug="the-rejected-witness" />
        </section>
      </main>

      <Footer />
    </>
  );
}
