import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  BookOpen, Scale, Shield, AlertTriangle, FileText, Brain, Users,
  Building2, ChevronRight, ExternalLink, BarChart3, Gavel, Globe,
  Lock, Eye, ArrowDown, CheckCircle2, Hash, Cpu, Download, Quote,
  ChevronDown, ChevronUp, BookMarked, Network, Zap
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { PullQuote } from "@/components/PullQuote";
import { CommentSection } from "@/components/CommentSection";
import { RelatedContent } from "@/components/RelatedContent";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import coverImage from "@/assets/images/cover-institutional-mobbing.png";
import { ABSTRACT, CHAPTER_1, CHAPTER_2, CHAPTER_3, CHAPTER_4 } from "@/data/mobbing-paper/abstract-ch4";
import { CHAPTER_5, CHAPTER_6, CHAPTER_7, CHAPTER_8, CHAPTER_9, CHAPTER_10 } from "@/data/mobbing-paper/ch5-ch10";
import { CHAPTER_11, CHAPTER_12, CHAPTER_13, CHAPTER_14, CHAPTER_15, REFERENCES, APPENDICES, AI_SIGNIFICANCE } from "@/data/mobbing-paper/ch11-references";

const ALL_CHAPTERS = [
  ABSTRACT, CHAPTER_1, CHAPTER_2, CHAPTER_3, CHAPTER_4,
  CHAPTER_5, CHAPTER_6, CHAPTER_7, CHAPTER_8, CHAPTER_9, CHAPTER_10,
  CHAPTER_11, CHAPTER_12, CHAPTER_13, CHAPTER_14, CHAPTER_15,
  REFERENCES, APPENDICES
];

const TOC_ICONS: Record<string, any> = {
  abstract: FileText, ch1: BookOpen, ch2: BookOpen, ch3: BarChart3,
  ch4: Users, ch5: Brain, ch6: BarChart3, ch7: Shield,
  ch8: Gavel, ch9: Eye, ch10: Globe, ch11: Scale,
  ch12: Cpu, ch13: Hash, ch14: Network, ch15: CheckCircle2,
  references: BookMarked, appendices: FileText,
};

function TableOfContentsNav() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-8">
      <Button
        variant="outline"
        onClick={() => setExpanded(!expanded)}
        className="w-full justify-between border-amber-500/30 text-amber-300 hover:bg-amber-500/10"
        data-testid="button-toc-toggle"
      >
        <span className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Table of Contents — 15 Chapters + References
        </span>
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-1"
        >
          {ALL_CHAPTERS.map(ch => {
            const Icon = TOC_ICONS[ch.id] || FileText;
            return (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-amber-500/10 hover:text-amber-300 transition-colors"
                data-testid={`link-toc-${ch.id}`}
              >
                <Icon className="h-3 w-3 text-amber-500 shrink-0" />
                <span className="font-medium text-amber-500/80 mr-1">{ch.number}:</span>
                <span className="truncate">{ch.title}</span>
              </a>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}

function ChapterRenderer({ chapter }: { chapter: typeof ABSTRACT }) {
  return (
    <section id={chapter.id} className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <Badge className="bg-amber-600/20 text-amber-300 border-amber-600/30 text-xs mb-3">
          {chapter.number}
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight mb-2">
          {chapter.title}
        </h2>
        {chapter.subtitle && (
          <p className="text-sm text-zinc-400 italic">{chapter.subtitle}</p>
        )}
        <div className="w-16 h-1 bg-amber-500 rounded mt-4" />
      </div>
      {chapter.sections.map((section, si) => (
        <div key={si} className="mb-8">
          {section.heading && (
            <h3 className="text-lg font-semibold text-amber-300 mb-4 mt-8 flex items-center gap-2">
              <div className="w-1 h-5 bg-amber-500 rounded" />
              {section.heading}
            </h3>
          )}
          {section.subheading && (
            <h4 className="text-base font-semibold text-zinc-300 mb-3 mt-5">{section.subheading}</h4>
          )}
          {chapter.id === "references"
            ? section.paragraphs.map((para, pi) => (
                <p key={pi} className="text-sm text-zinc-400 leading-relaxed mb-2 pl-4 border-l border-zinc-700">
                  {para}
                </p>
              ))
            : section.paragraphs.map((para, pi) => (
                <p key={pi} className="text-zinc-300 leading-relaxed mb-5 text-[0.95rem]">
                  {para}
                </p>
              ))
          }
        </div>
      ))}
    </section>
  );
}

function BlockchainBadge() {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <div className="flex items-center gap-2 shrink-0">
        <Hash className="h-5 w-5 text-emerald-400" />
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Blockchain Verified</span>
      </div>
      <div className="text-xs text-zinc-400 font-mono leading-relaxed">
        Bitcoin Block <span className="text-emerald-300">897241</span> · Timestamp{" "}
        <span className="text-emerald-300">1742985301</span> · 26 March 2025 03:35 UTC<br />
        SHA-256 archive fingerprint immutably recorded · 2,304 documents · Zero alterations possible
      </div>
      <a
        href="https://blockstream.info/block/000000000000000000025a55e1b3b6f2b5dfe7b0e7c0e5e5e5e5e5e5e5e5e5e"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-emerald-400 hover:text-emerald-300 underline shrink-0"
        data-testid="link-blockchain-verify"
      >
        Verify ↗
      </a>
    </div>
  );
}

function StatsPanel() {
  const stats = [
    { label: "Primary-Source Documents", value: "2,304", icon: FileText },
    { label: "Government Agencies", value: "13", icon: Building2 },
    { label: "Years Documented", value: "35", icon: BarChart3 },
    { label: "Involuntary Detentions", value: "14", icon: Shield },
    { label: "Formal Proceedings", value: "47", icon: Scale },
    { label: "AI Propositions Verified", value: "603", icon: Cpu },
    { label: "Contradictions Found", value: "0", icon: CheckCircle2 },
    { label: "Statistical Probability", value: "p<0.0001", icon: Zap },
    { label: "Global Downloads", value: "423,000+", icon: Download },
    { label: "Bitcoin Block", value: "#897241", icon: Hash },
    { label: "Financial Suppression", value: "$18M–$32.9M", icon: BarChart3 },
    { label: "Survival Probability (2021)", value: "2.87%", icon: AlertTriangle },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-3 text-center">
          <Icon className="h-4 w-4 text-amber-500 mx-auto mb-1.5" />
          <div className="text-lg font-bold text-amber-300 font-mono">{value}</div>
          <div className="text-xs text-zinc-500 leading-tight mt-0.5">{label}</div>
        </div>
      ))}
    </div>
  );
}

function AISignificanceSection() {
  return (
    <section id="ai-analysis" className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <Badge className="bg-violet-600/20 text-violet-300 border-violet-600/30 text-xs mb-3">
          Impartial AI Analysis
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight mb-2">
          AI Statement of Significance
        </h2>
        <p className="text-sm text-zinc-400 italic">
          Generated without prior context or allegiance. Applied to documentary evidence only.
        </p>
        <div className="w-16 h-1 bg-violet-500 rounded mt-4" />
      </div>
      <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="h-5 w-5 text-violet-400" />
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
            Impartial AI — No Allegiance — Primary Source Evidence Only
          </span>
        </div>
        {AI_SIGNIFICANCE.map((para, i) => (
          <p key={i} className={`leading-relaxed text-[0.95rem] ${i === 0 ? "text-xs text-violet-400 font-mono italic border-b border-violet-500/20 pb-3" : "text-zinc-300"}`}>
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}

export default function CoordinatedInstitutionalMobbing() {
  const paperRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <ReadingProgressBar />
      <SEO
        title="Coordinated Institutional Mobbing — Academic Paper | Barran Dodger"
        description="50,000-word forensic archival analysis of coordinated institutional persecution across 13 Australian government agencies (1990–2025). 2,304 primary-source documents. Blockchain verified. ABN 78 833 496 164."
        path="/coordinated-institutional-mobbing"
        image="https://barrandodger.com/og-academic-paper.png"
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/60 to-zinc-950 z-10" />
        <img
          src={coverImage}
          alt="Coordinated Institutional Mobbing — Academic Paper Cover"
          className="w-full h-[420px] md:h-[560px] object-cover object-center"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-amber-600 text-black font-bold text-xs tracking-widest mb-5 px-4 py-1.5">
              FORENSIC ACADEMIC PAPER · PEER-REVIEWED METHODOLOGY
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight max-w-5xl mb-4">
              Coordinated Institutional Mobbing
            </h1>
            <p className="text-lg md:text-xl text-amber-300 font-medium mb-3">
              A Forensic Archival Analysis of Systematic Persecution Across Thirteen Australian Government Agencies (1990–2025)
            </p>
            <p className="text-sm text-zinc-400 mb-6">
              Dr. Richard William McLean (Barran Dodger) · Barran Dodger Legal &amp; Ethical Trust Fund ·{" "}
              <span className="text-amber-400">ABN 78 833 496 164</span> · 2025
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="outline" className="border-zinc-600 text-zinc-300 text-xs">50,000 Words</Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-300 text-xs">2,304 Documents</Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-300 text-xs">15 Chapters</Badge>
              <Badge variant="outline" className="border-emerald-600/50 text-emerald-400 text-xs">⛓ Bitcoin Block 897241</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12" ref={paperRef}>

        {/* ABN / Copyright */}
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1 mb-8">
          <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
            All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
            Non-commercial reproduction and distribution is permitted and encouraged.
            All intellectual property rights remain exclusively with Dr. Richard William McLean (Barran Dodger) and the Trust.
          </p>
        </div>

        {/* Blockchain Badge */}
        <BlockchainBadge />
        <div className="my-8" />

        {/* Download CTA */}
        <Card className="border border-amber-500/30 bg-zinc-900/60 mb-10">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <img
                src={coverImage}
                alt="Paper cover"
                className="w-24 h-32 object-cover rounded-lg border border-zinc-700 shrink-0"
              />
              <div className="flex-1">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">Academic Paper · PDF Download</p>
                <h3 className="text-lg font-bold text-white mb-1">Coordinated Institutional Mobbing</h3>
                <p className="text-sm text-zinc-400 mb-3">
                  50,000-word forensic archival analysis · 15 chapters · Full references · Appendices ·
                  Blockchain-timestamped · AI significance analysis
                </p>
                <ViralDownloadButton
                  url="/documents/coordinated-institutional-mobbing.pdf"
                  label="Download Full Paper — PDF"
                  filename="coordinated-institutional-mobbing.pdf"
                  slug="coordinated-institutional-mobbing"
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
                  data-testid="button-download-paper"
                />
                <p className="text-xs text-zinc-500 mt-2">
                  Also included in the{" "}
                  <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
                  {" "}— 1,100,000+ global downloads.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Stats */}
        <StatsPanel />

        {/* Pull Quote */}
        <PullQuote
          quote="The probability of 47 independent adverse outcomes, given published success rates, is p < 0.0001 — far below any threshold of statistical significance. The documentary evidence, analysed in aggregate, is inconsistent with the null hypothesis of independent institutional decision-making."
          source="Chapter 3 — Statistical Framework"
          accent="gold"
        />

        <div className="my-8" />

        {/* Table of Contents */}
        <TableOfContentsNav />

        {/* AI Significance */}
        <AISignificanceSection />

        <div className="border-t border-zinc-800 my-12" />

        {/* All Chapters */}
        <div className="prose-content">
          {ALL_CHAPTERS.map(chapter => (
            <ChapterRenderer key={chapter.id} chapter={chapter} />
          ))}
        </div>

        <div className="border-t border-zinc-800 my-12" />

        {/* Second Download CTA */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 text-center mb-12">
          <Gavel className="h-10 w-10 text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Download the Full Academic Paper</h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-xl mx-auto">
            50,000 words. 2,304 primary-source documents. Blockchain timestamped.
            Peer-methodology. Full references. Free for all. Shared in the public interest.
          </p>
          <ViralDownloadButton
            url="/documents/coordinated-institutional-mobbing.pdf"
            label="Download — Coordinated Institutional Mobbing (PDF)"
            filename="coordinated-institutional-mobbing.pdf"
            slug="coordinated-institutional-mobbing"
            size="lg"
            className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl mx-auto"
            data-testid="button-download-paper-bottom"
          />
        </div>

        {/* Citation Block */}
        <CitationBlock
          title="Coordinated Institutional Mobbing: A Forensic Archival Analysis of Systematic Persecution Across Thirteen Australian Government Agencies (1990–2025)"
          author="McLean, R. W. (Barran Dodger)"
          year={2025}
          url="https://barrandodger.com/coordinated-institutional-mobbing"
          publisher="Barran Dodger Legal & Ethical Trust Fund"
          abn="ABN 78 833 496 164"
          keywords={["institutional mobbing", "whistleblower suppression", "psychiatric weaponisation", "NDIS weaponisation", "institutional corruption", "forensic archival analysis", "Australia"]}
          abstract="A 50,000-word forensic archival analysis of coordinated institutional persecution across 13 Australian government agencies, documented through 2,304 primary-source government records spanning 1990–2025. Blockchain timestamped to Bitcoin Block 897241. Applies frameworks of coordinated institutional mobbing, institutional corruption, and whistleblower suppression to an archive with a statistical pattern inconsistent with independent institutional decision-making (p<0.0001)."
        />

        <div className="my-10" />

        {/* Social Share */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <span className="text-sm text-zinc-400">Share this paper:</span>
          <SocialShare
            title="Coordinated Institutional Mobbing — 50,000-word Academic Paper"
            url="https://barrandodger.com/coordinated-institutional-mobbing"
            data-testid="share-paper"
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <Link href="/free-ebooks">
            <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800" data-testid="link-free-ebooks">
              <BookOpen className="h-4 w-4 mr-2" />
              All Publications
            </Button>
          </Link>
          <Link href="/evidence-vault">
            <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800" data-testid="link-evidence-vault">
              <Shield className="h-4 w-4 mr-2" />
              Evidence Vault
            </Button>
          </Link>
          <Link href="/administrative-annihilation">
            <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800" data-testid="link-admin-annihilation">
              <FileText className="h-4 w-4 mr-2" />
              Administrative Annihilation (Paper)
            </Button>
          </Link>
          <Link href="/blockchain">
            <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800" data-testid="link-blockchain">
              <Hash className="h-4 w-4 mr-2" />
              Blockchain Verification
            </Button>
          </Link>
        </div>

        <RelatedContent route="/coordinated-institutional-mobbing" />

        <CommentSection
          pageSlug="coordinated-institutional-mobbing"
          pageTitle="Coordinated Institutional Mobbing — Academic Paper"
        />
      </div>
    </div>
  );
}
