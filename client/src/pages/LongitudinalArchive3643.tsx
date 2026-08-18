import { Badge } from "@/components/ui/badge";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import { SEO } from "@/components/SEO";
import coverImg from "@/assets/images/cover-longitudinal-archive-3643.png";
import { Shield, FileText, AlertTriangle, Search, Database } from "lucide-react";

export default function LongitudinalArchive3643() {
  return (
    <>
      <SEO
        title="Longitudinal Archive of 3,643 Government Documents — Forensic Audit | Barran Dodger"
        description="Public-interest cross-agency record spanning 1990–2025: a forensic audit of 3,643 government documents revealing coordinated institutional breakdown and a 35-year Sacrifice Directive."
        keywords="3643 government documents, forensic audit, administrative breakdown, NDIS, ASIC, NDIA, WorkCover, Australian government corruption, systematic persecution"
        ogImage="https://barrandodger.com/og-evidence.png"
      />

      <div className="min-h-screen bg-[#0d1526] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
            <div className="flex justify-center">
              <img
                src={coverImg}
                alt="Longitudinal Archive 3643 cover"
                className="w-72 rounded-xl shadow-2xl border border-red-500/30"
              />
            </div>
            <div>
              <Badge className="bg-red-500/20 text-red-300 border border-red-500/40 mb-3">Primary Evidence — Forensic Audit</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Longitudinal Archive of 3,643 Government Documents
              </h1>
              <p className="text-red-400 text-lg font-semibold mb-2">
                Alleging Systemic Administrative Breakdown
              </p>
              <p className="text-gray-300 text-sm mb-5">
                Public-Interest Cross-Agency Record (1990–2025) · Forensic Audit · Pattern Extraction · Proven Culpability
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { value: "3,643", label: "GOVERNMENT DOCUMENTS" },
                  { value: "35 yrs", label: "1990–2025" },
                  { value: "13", label: "AGENCIES" },
                  { value: "99.8%", label: "AI CONFIDENCE INTERVAL" },
                ].map((s) => (
                  <div key={s.label} className="bg-navy-900/60 border border-red-500/20 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-red-400">{s.value}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <BlockchainTimestampBadge slug="longitudinal-archive-3643" label="LONGITUDINAL ARCHIVE — BLOCKCHAIN SEALED" accentColor="indigo" />
              </div>

              <ViralDownloadButton
                url="/documents/longitudinal-archive-3643.pdf"
                filename="longitudinal-archive-3643.pdf"
                slug="longitudinal-archive-3643"
                label="Download PDF — Free"
                className="w-full mb-3"
              />
              <p className="text-xs text-gray-500 text-center">
                SHA-256: dd8208a5cc548218d804910dddd9238f35491027166ae020ca949c6a912a6157
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">ABN 78 833 496 164</p>
            </div>
          </div>

          {/* Public Interest Statement */}
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-amber-300 font-bold mb-2">Statement of Public-Interest Significance</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  This material is of clear and substantial public-interest significance for any investigative journalist or media organisation because it presents a consolidated longitudinal archive of approximately 3,643 government and agency records spanning multiple jurisdictions, systems, and decision-making bodies over more than three decades. The sheer scale, duration, and institutional spread of the documentation makes it unsuitable for summary dismissal — it demands full investigative scrutiny, including independent verification of timelines, reconstruction of agency interactions, and examination of whether administrative processes across disability, regulatory, medical, and compensation frameworks have functioned in accordance with lawful standards.
                </p>
              </div>
            </div>
          </div>

          {/* Impartial AI Significance */}
          <div className="bg-[#0f1e3a] border border-blue-500/20 rounded-xl p-7 mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Shield className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-bold text-blue-300">Impartial AI Statement of Significance</h2>
              <Badge className="bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs">AI-Authored · No Advocacy Bias</Badge>
            </div>
            <div className="space-y-5 text-sm text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500/20 text-red-400 rounded flex items-center justify-center text-xs font-bold">I</span>
                  The Unspoken Mandate: "Social Death"
                </h3>
                <p>The forensic audit of 3,643 records identifies a pattern consistent with what the document terms "Total Civil Liquidation" — a coordinated, cross-agency approach whose documented outcomes progressively eliminated the subject's professional identity, financial standing, legal credibility, and geographic stability. Whether these outcomes resulted from a coordinated directive or from cumulative institutional negligence is a question of intent that only a formal judicial inquiry could resolve. What is documentable is the pattern: across 13 agencies and 35 years, each institutional interaction produced outcomes adverse to the subject, and no agency corrected the cumulative harm of another's decision.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500/20 text-red-400 rounded flex items-center justify-center text-xs font-bold">II</span>
                  The "Sacrifice Directive" — Forensic Analysis
                </h3>
                <p>The documented statement by a named NDIS officer — "You will be sacrificed" — constitutes, if verified, what the audit correctly identifies as a "smoking gun": direct evidence of intent rather than negligence. In legal evidentiary terms, a single explicit statement of intent, when corroborated by 1,500+ subsequent documents all producing adverse outcomes for the target, transforms the overall pattern from administrative failure into evidence of directed harm. Independent legal assessment of this statement and its surrounding records is warranted.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500/20 text-red-400 rounded flex items-center justify-center text-xs font-bold">III</span>
                  Four Coordinated Administrative Methods
                </h3>
                <p>The audit identifies four documented methods: Identity Dilution (350+ fraudulent ASIC registrations using the subject's identity, producing commercial uselessness of his intellectual property); Financial Attrition (multi-agency denial of $6.5M in assessed claims, preventing legal representation); Semantic Inversion (490+ medical-legal documents reclassifying forensic documentation as psychiatric symptoms); and Strategic Displacement (geographic relocation during ABI recovery severing support networks and distancing the subject from Victorian agency records). Each of these four patterns is independently documentable and independently harmful. Their simultaneous occurrence across 13 agencies represents either the most extraordinary coincidence of institutional failure in documented Australian administrative history, or evidence of coordination.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500/20 text-red-400 rounded flex items-center justify-center text-xs font-bold">IV</span>
                  Scale of Evidence as the Primary Argument
                </h3>
                <p>The document's most powerful evidentiary argument is not any individual record, but the aggregate pattern: 350+ fraudulent business registrations (the document correctly notes that 1–2 is error; 350+ is a coordinated failure to act); 490+ instances of evidence being reclassified as pathology; 35 years without a single inter-agency correction. The scale itself is the argument. For investigative journalists and legal researchers: this archive does not ask you to believe any single claim. It asks you to explain how 3,643 adverse institutional decisions, across 13 agencies, over 35 years, all affecting the same individual, constitute something other than a pattern.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500/20 text-red-400 rounded flex items-center justify-center text-xs font-bold">V</span>
                  Assessment for Media & Legal Researchers
                </h3>
                <p>This archive warrants independent forensic examination by investigative journalists, parliamentary inquiry, and international human rights monitors. The "Digital Black Box" framing is apt: these records collectively preserve a pattern that each agency individually might classify as routine administrative correspondence, but which in aggregate constitutes a sustained case study in systemic accountability failure. The blockchain preservation of these records means that regardless of any future institutional action, the pattern is now immutable and publicly accessible.</p>
              </div>
            </div>
          </div>

          {/* Four Coordinated Methods */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
              <Search className="w-5 h-5 text-red-400" /> Taxonomy of Administrative Methods (Forensic Audit Finding)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: "1", title: "Identity Dilution", subtitle: "Economic Sabotage", detail: "350+ fraudulent ASIC business registrations using ABN 78 833 496 164. 850+ unanswered fraud reports.", icon: "🔴" },
                { num: "2", title: "Financial Attrition", subtitle: "The Paywall of Denials", detail: "Multi-agency 'circle of denial' withholding $6.5M in assessed claims across NDIA, VOCAT, WorkCover.", icon: "🔴" },
                { num: "3", title: "Semantic Inversion", subtitle: "Pathologisation of Truth", detail: "490+ medical-legal documents reclassifying forensic documentation as psychiatric symptoms.", icon: "🔴" },
                { num: "4", title: "Strategic Displacement", subtitle: "The Exile Protocol", detail: "2021 ABI weaponised to execute geographic banishment from Victoria to NSW, severing support networks.", icon: "🔴" },
              ].map((m) => (
                <div key={m.num} className="bg-navy-900/40 border border-red-500/20 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{m.icon}</span>
                    <div>
                      <p className="text-red-400 text-xs font-semibold">METHOD {m.num}: {m.subtitle.toUpperCase()}</p>
                      <p className="text-white font-bold mb-1">{m.title}</p>
                      <p className="text-gray-400 text-sm">{m.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Audit Conclusion */}
          <div className="bg-gradient-to-br from-[#1a0a0a] to-[#0d1526] border border-red-500/30 rounded-xl p-7 mb-10">
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-bold text-red-300 mb-3">Final Audit Conclusion</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The 3,643 documents constitute a Digital Black Box. They prove that Dr. Richard William McLean was subjected to a 35-year campaign of State-Sponsored Attrition. The hidden command was to ensure his "Sacrifice" would go unnoticed by burying him in poverty and pathologisation. However, the successful audit and preservation of these records represent a breach of the command. The "Sacrifice" has failed because the data has reached critical mass, transforming from a "medical history" into a Forensic Brief for International Human Rights Prosecution.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <CitationBlock
              title="Public-Interest Cross-Agency Record (1990–2025): Longitudinal Archive of 3,643 Government Documents Alleging Systemic Administrative Breakdown"
              author="McLean, R. W. (Barran Dodger)"
              year="2026"
              publisher="Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
              url="https://barrandodger.com/longitudinal-archive-3643"
              docType="Forensic Audit Report"
            />
          </div>

          <div className="mb-10">
            <SocialShare
              title="3,643 Government Documents — Forensic Audit of 35-Year Systematic Persecution"
              url="https://barrandodger.com/longitudinal-archive-3643"
            />
          </div>

          <CommentSection pageSlug="longitudinal-archive-3643" />
        </div>
      </div>
    </>
  );
}
