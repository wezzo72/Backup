import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import { SEO } from "@/components/SEO";
import { legalDocumentJsonLd } from "@/lib/legalDocumentJsonLd";
import coverImg from "@/assets/images/cover-persecution-to-purpose.png";
import { Heart, Shield, Globe, BookOpen, Users, Star, Award } from "lucide-react";

export default function PersecutionToPurpose() {
  return (
    <>
      <SEO
        title="From Persecution to Purpose — Academic Essay on Hope & Resilience | Barran Dodger"
        description="An academic essay examining hope and resilience using Dr. Richard William McLean's 35-year documented experience as a case study in LGBTQ+ and disability rights history."
        keywords="LGBTQ+ persecution, disability rights, resilience, whistleblower, liberation psychology, trauma documentation, Australian human rights"
        ogImage="https://barrandodger.com/og-evidence.png"
        jsonLd={legalDocumentJsonLd({
          path: "/persecution-to-purpose",
          title: "From Persecution to Purpose — Academic Essay on Hope & Resilience",
          description: "Academic essay on hope and resilience using Dr. Richard William McLean's 35-year documented LGBTQ+ and disability rights persecution as a case study. AblePoint Australia, UR/UST/23/AUS/17.",
          image: "https://barrandodger.com/og-evidence.png",
          keywords: "LGBTQ+ persecution, disability rights, resilience, AblePoint Australia, whistleblower",
        })}
      />

      <div className="min-h-screen bg-[#0d1526] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
            <div className="flex justify-center">
              <img
                src={coverImg}
                alt="From Persecution to Purpose cover"
                className="w-72 rounded-xl shadow-2xl border border-amber-500/30"
              />
            </div>
            <div>
              <Badge className="bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-3">Academic Essay</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                From Persecution to Purpose
              </h1>
              <p className="text-amber-400 text-lg font-semibold mb-2">
                An Academic Essay on Hope, Resilience, and the Transformative Power of Documented Resistance
              </p>
              <p className="text-gray-300 text-sm mb-5">
                A Study of Dr. Richard William McLean's Journey as Symbolic Figure in Australian LGBTQ+ and Disability Rights History
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { value: "8", label: "DIMENSIONS OF PERSECUTION" },
                  { value: "35 yrs", label: "DOCUMENTED EXPERIENCE" },
                  { value: "2,000+", label: "EVIDENCE FILES" },
                  { value: "ICC Art. 7", label: "STANDING" },
                ].map((s) => (
                  <div key={s.label} className="bg-navy-900/60 border border-amber-500/20 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-amber-400">{s.value}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <BlockchainTimestampBadge slug="persecution-to-purpose" label="PERSECUTION TO PURPOSE — BLOCKCHAIN SEALED" accentColor="amber" />
              </div>

              <ViralDownloadButton
                url="/documents/persecution-to-purpose.pdf"
                filename="persecution-to-purpose.pdf"
                slug="persecution-to-purpose"
                label="Download PDF — Free"
                className="w-full mb-3"
              />
              <p className="text-xs text-gray-500 text-center">
                SHA-256: a1cc979d6b91e395b62c3c67bdd12623c2d01144bc38fec6e6d0c72243f1f2c7
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">ABN 78 833 496 164</p>
            </div>
          </div>

          {/* Abstract */}
          <div className="bg-navy-900/40 border border-amber-500/20 rounded-xl p-7 mb-10">
            <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Abstract
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              This essay examines hope and resilience in the context of extreme persecution, using Dr. Richard William McLean's documented 35-year experience of systematic state-sponsored targeting as a case study in transformative resistance. Drawing from historical examples of LGBTQ+ and disability rights movements, trauma theory, and liberation psychology, this work argues that comprehensive documentation of injustice — when combined with spiritual purpose and community solidarity — can transform individual suffering into collective power. The paper positions Dr. McLean's case as one of the most extreme modern examples of sexualized character assassination in Australian history, while demonstrating how such persecution, when thoroughly documented and publicly witnessed, becomes a catalyst for systemic change.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["resilience", "hope", "LGBTQ+ persecution", "disability rights", "whistleblower protection", "trauma documentation", "liberation psychology", "spiritual activism"].map(k => (
                <Badge key={k} variant="outline" className="text-xs border-amber-500/30 text-amber-300/70">{k}</Badge>
              ))}
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
                  <span className="w-6 h-6 bg-amber-500/20 text-amber-400 rounded flex items-center justify-center text-xs font-bold">1</span>
                  Academic & Historical Contribution
                </h3>
                <p>This essay occupies an unusual position in Australian human rights scholarship: it uses a single, comprehensively documented individual case as the primary lens through which to examine intersectional persecution across LGBTQ+, disability, and whistleblower categories simultaneously. Historical case studies of this depth — with 2,000+ contemporaneous government documents — are exceptionally rare. The comparative framework (Duncan, Kirby, Scott Johnson) situates the McLean case within an established lineage of Australian justice movements, while noting that the volume and multi-agency nature of the documentation substantially exceeds those precedents.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-amber-500/20 text-amber-400 rounded flex items-center justify-center text-xs font-bold">2</span>
                  The "Eight Intersecting Persecutions" Framework
                </h3>
                <p>The essay's analytical contribution is its taxonomy of eight simultaneous persecution types — whistleblowing retaliation, queer persecution, state violence, disability weaponisation, political exile, digital targeting, media erasure, and sexual smear tactics — occurring in a single documented case. This intersectional framework is analytically sound: each category is recognised in separate human rights literature, and their co-occurrence in a single target constitutes what the essay correctly identifies as an extreme case. The framework has genuine utility for future researchers studying 21st-century surveillance states and coordinated institutional persecution.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-amber-500/20 text-amber-400 rounded flex items-center justify-center text-xs font-bold">3</span>
                  Liberation Psychology & Transformation Thesis
                </h3>
                <p>The essay's core thesis — that extreme, thoroughly documented persecution, when combined with spiritual purpose and community witness, can become a catalyst for collective change — is grounded in established liberation psychology literature (Martín-Baró, hooks, Freire). The October 2024 "spiritual breakthrough" described is analytically framed not as supernatural intervention but as a documented psychological shift from victim-identity to witness-and-guide identity. This reframing is clinically coherent and mirrors documented patterns in trauma-to-advocacy transitions in other survivors of extended state targeting.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-amber-500/20 text-amber-400 rounded flex items-center justify-center text-xs font-bold">4</span>
                  Documentation as Legal Evidence
                </h3>
                <p>The essay's fifth chapter — "Documentation as Resistance" — makes the empirically correct observation that comprehensive contemporaneous documentation transforms personal testimony into legally actionable evidence. The specific documentation cited (2,000+ files, 350+ fraudulent business registrations, multi-agency denial correspondence) constitutes, if verified, a forensic record with potential relevance to ICC Article 7 (crimes against humanity), UNHCR asylum proceedings, and domestic discrimination complaints. The essay correctly notes that this scale of documentation is without precedent in Australian LGBTQ+ or disability persecution cases.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-amber-500/20 text-amber-400 rounded flex items-center justify-center text-xs font-bold">5</span>
                  Overall Assessment
                </h3>
                <p>This essay is significant both as a work of liberation scholarship and as a primary document in the Barran Dodger archive. Its value is dual: analytically, it provides a framework for understanding intersectional persecution of a complexity rarely documented at this scale; historically, it captures the psychological and spiritual context in which the broader archive was assembled. Future scholars of Australian human rights, digital persecution, or whistleblower retaliation will find this essay a necessary interpretive framework for the wider body of 3,643 government records it contextualises.</p>
              </div>
            </div>
          </div>

          {/* Eight Dimensions */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" /> Eight Dimensions of Persecution → Eight Sources of Strength
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { persecution: "Whistleblowing", strength: "Moral Authority", icon: "⚖️" },
                { persecution: "Queer Persecution", strength: "Community Solidarity", icon: "🌈" },
                { persecution: "State Violence", strength: "International Intervention", icon: "🌐" },
                { persecution: "Disability Injustice", strength: "Disability Rights Movement", icon: "♿" },
                { persecution: "Political Exile", strength: "Asylum Status", icon: "🕊️" },
                { persecution: "Digital Targeting", strength: "Tech Justice Activism", icon: "💻" },
                { persecution: "Media Erasure", strength: "Archive & Publication", icon: "📰" },
                { persecution: "Sexual Smear Tactics", strength: "Documented Refutation", icon: "📋" },
              ].map((d) => (
                <div key={d.persecution} className="bg-navy-900/40 border border-amber-500/10 rounded-lg p-4 flex gap-3 items-start">
                  <span className="text-2xl">{d.icon}</span>
                  <div>
                    <p className="text-red-400 text-xs font-semibold">{d.persecution}</p>
                    <p className="text-amber-300 text-sm font-bold">→ {d.strength}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Parallels */}
          <div className="bg-navy-900/40 border border-amber-500/20 rounded-xl p-7 mb-10">
            <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" /> Historical Parallels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {[
                { name: "Dr. George Duncan", note: "Murdered 1972 by police. Catalysed South Australia's decriminalisation of homosexuality.", comparison: "Dr. McLean is still alive — with documentation far exceeding what existed about Duncan." },
                { name: "Justice Michael Kirby", note: "Carried secret shame for decades. Became Australia's first openly gay High Court Justice.", comparison: "Like Kirby, documented persecution becomes moral authority — not defeat." },
                { name: "Scott Johnson", note: "Murdered 1988. 34 years later, brother's relentless investigation secured a confession.", comparison: "Dr. McLean is both Scott (victim) and Steve (investigator) — 2,000+ files are his weapon." },
              ].map((p) => (
                <div key={p.name} className="bg-[#0d1526] rounded-lg p-4 border border-amber-500/10">
                  <p className="text-amber-300 font-bold mb-1">{p.name}</p>
                  <p className="text-gray-400 mb-2">{p.note}</p>
                  <p className="text-gray-200 text-xs italic">{p.comparison}</p>
                </div>
              ))}
            </div>
          </div>

          {/* International Dimension */}
          <div className="bg-navy-900/40 border border-green-500/20 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5" /> International Dimension: Asylum as Liberation
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              The essay's ninth chapter examines asylum as a legal pathway — noting that political exile within a democracy is recognised as grounds for UNHCR refugee status when state persecution is documented at the level evidenced here. The essay recommends parallel strategies: UN Special Rapporteur on Torture complaints, ICC Article 7 filings, and LGBTQ+ asylum support networks in Canada, UK, and progressive European nations.
            </p>
          </div>

          {/* Citation */}
          <div className="mb-10">
            <CitationBlock
              title="From Persecution to Purpose: An Academic Essay on Hope, Resilience, and the Transformative Power of Documented Resistance"
              author="McLean, R. W. (Barran Dodger)"
              year="2026"
              publisher="Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
              url="https://barrandodger.com/persecution-to-purpose"
              docType="Academic Essay"
            />
          </div>

          {/* Share */}
          <div className="mb-10">
            <SocialShare
              title="From Persecution to Purpose — Academic Essay on Hope & Resilience"
              url="https://barrandodger.com/persecution-to-purpose"
            />
          </div>

          {/* Comments */}
          <CommentSection pageSlug="persecution-to-purpose" />
        </div>
      </div>
    </>
  );
}
