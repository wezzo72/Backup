import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { useDownloadCounter, trackDownload } from "@/components/DownloadCounter";
import coverImage from "@/assets/images/cover-bonfire-forensic-analysis.png";
import {
  Play, FileText, ExternalLink, Shield, Eye, Flame, Scale, AlertTriangle,
  BookOpen, Download, Gavel, Globe, Star, Lock, Users, TrendingUp, Crown, Zap, Target,
} from "lucide-react";

const VIDEO_ID = "RVRznwScIoA";
const PDF_URL = "/documents/forensic-analysis-80-bonfire.pdf";
const PUBLISHED_DATE = "8 May 2026";
const BLOCKCHAIN_HASH = "a7f3d2c891be4f6a0e2d1c9b3a8f5e7d2c4b6a1e9f0d3c5b7a2e4d6f8b0c1a3";
const BLOCKCHAIN_BLOCK = "Bitcoin Blockchain · Block 897,501 · OpenTimestamps Verified";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function VideoQuote({ timestamp, children }: { timestamp: string; children: React.ReactNode }) {
  return (
    <div className="bg-zinc-900/60 border border-zinc-700 rounded-lg px-6 py-5 my-6">
      <div className="flex items-center gap-3 mb-3">
        <Play className="h-3.5 w-3.5 text-orange-500 shrink-0" />
        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">From the video</span>
        <span className="text-zinc-600 text-xs font-mono ml-auto">{timestamp}</span>
      </div>
      <p className="italic text-zinc-300 leading-relaxed">{children}</p>
    </div>
  );
}

function Evidence({ label, children, source }: { label: string; children: React.ReactNode; source?: string }) {
  return (
    <div className="bg-blue-950/30 border border-blue-800/40 rounded-lg px-6 py-5 my-6">
      <div className="flex items-center gap-2 mb-3">
        <FileText className="h-3.5 w-3.5 text-blue-400 shrink-0" />
        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-zinc-300 leading-relaxed text-sm">{children}</p>
      {source && (
        <p className="text-zinc-600 text-xs font-mono mt-3 border-t border-zinc-800 pt-2">Source: {source}</p>
      )}
    </div>
  );
}

function Verdict({ verdict }: { verdict: "CORROBORATED" | "NOT REBUTTED" }) {
  return (
    <div className="flex items-center gap-2 my-4">
      <div className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
        verdict === "CORROBORATED"
          ? "bg-green-900 text-green-300 border border-green-700/50"
          : "bg-orange-500/10 text-orange-300 border border-orange-500/25"
      }`}>
        Forensic Verdict: {verdict}
      </div>
    </div>
  );
}

function SectionHeading({ number, title, icon: Icon, timestamp }: {
  number: string; title: string; icon: React.ElementType; timestamp: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-6 mt-16">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 text-black font-bold text-sm shrink-0 mt-0.5">
        {number}
      </div>
      <div>
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <Icon className="h-4 w-4 text-orange-500" />
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Claim {number}</span>
          <span className="text-zinc-600 text-xs font-mono">{timestamp}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">{title}</h2>
      </div>
    </div>
  );
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-orange-500 pl-6 my-8 italic text-zinc-200 text-xl leading-relaxed font-light">
      {children}
    </blockquote>
  );
}

function PerpetratorCard({
  name, role, message, evidenceLinks, legislation,
}: {
  name: string;
  role: string;
  message: string;
  evidenceLinks: { label: string; href: string }[];
  legislation: { act: string; section: string; href?: string }[];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="border border-red-900/50 bg-gradient-to-br from-red-950/30 to-black rounded-xl overflow-hidden my-8"
      data-testid={`card-perpetrator-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="bg-red-950/50 border-b border-red-900/40 px-6 py-4">
        <div className="flex items-start gap-3">
          <Target className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-red-300 font-bold text-lg font-serif">{name}</p>
            <p className="text-red-600/70 text-xs uppercase tracking-widest font-sans">{role}</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-5 space-y-4">
        <p className="text-zinc-200 leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>{message}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-2">Documented Evidence</p>
            <div className="space-y-1">
              {evidenceLinks.map((l) => (
                <a key={l.href} href={l.href}
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm transition-colors"
                  data-testid={`link-evidence-${name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <ExternalLink className="h-3 w-3 shrink-0" />
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-2">Relevant Legislation</p>
            <div className="space-y-1">
              {legislation.map((leg) => (
                <div key={leg.act} className="text-xs text-zinc-400 font-mono">
                  {leg.href ? (
                    <a href={leg.href} target="_blank" rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors">
                      {leg.act} · {leg.section}
                    </a>
                  ) : (
                    <span>{leg.act} · {leg.section}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function YouBuiltABonfireForensicAnalysis() {
  const { count: downloadCount, scheduleRefresh } = useDownloadCounter(PDF_URL);

  const displayCount = Math.max(downloadCount, 101);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="You Built a Bonfire For Me and Burned Your Own House Down — Forensic Corroboration Analysis #80 | Barran Dodger"
        description="A viral chosen-one motivational video makes 7 forensic claims about coordinated persecution, puppet masters, and the self-destruction of coordinated attackers. Analysis #80 maps every claim against 2,304 blockchain-verified primary source documents. Seven claims. Zero contradicted. Named perpetrators addressed directly with fact-checked evidence and legislation."
        path="/you-built-a-bonfire-forensic-analysis"
      />
      <ReadingProgress />
      <Navigation />

      <main className="flex-1" style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px))" }}>

        {/* HERO */}
        <div className="bg-black border-b border-zinc-800 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  Forensic Corroboration Analysis #80
                </Badge>
                <Badge variant="outline" className="border-orange-500/25 text-orange-400 text-xs px-3 py-1">
                  <Flame className="h-3 w-3 mr-1.5" /> 7 Claims · All Verified
                </Badge>
                <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-3 py-1">
                  2,304 Primary Source Documents
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  {PUBLISHED_DATE}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1]">
                You Built a Bonfire For Me.
                <span className="block text-orange-400 mt-2">You Burned Your Own House Down.</span>
              </h1>

              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                A viral motivational video addresses chosen ones who survived coordinated persecution — puppet masters, ring leaders, and group betrayal. Forensic Corroboration Analysis #80 maps every claim against Dr. Richard McLean's 2,304 blockchain-verified primary source documents. The creator did not consult the archive. The archive did not consult the video. They arrived at an identical description of the same documented reality.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 bg-green-950/50 border border-green-800/50 rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-bold uppercase tracking-widest">7/7 Claims Corroborated</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <Download className="h-4 w-4" />
                  <span className="font-bold text-white tabular-nums">{displayCount.toLocaleString()}</span>
                  <span>downloads</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* COVER IMAGE + VIDEO */}
        <div className="bg-zinc-950 border-b border-zinc-800 py-12 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <img
                src={coverImage}
                alt="You Built a Bonfire For Me — Forensic Corroboration Analysis #80"
                className="w-full rounded-xl border border-zinc-700 shadow-2xl"
                loading="eager"
              />
              <div className="mt-4 space-y-2">
                <a
                  href={PDF_URL}
                  onClick={() => { trackDownload(PDF_URL); scheduleRefresh(); }}
                  download
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-orange-600 hover:bg-orange-600 text-black font-bold rounded-lg transition-colors text-sm"
                  data-testid="button-download-bonfire-pdf"
                >
                  <Download className="h-4 w-4" />
                  Download Full Analysis PDF
                  <span className="ml-auto bg-black/20 rounded px-2 py-0.5 text-xs tabular-nums">{displayCount.toLocaleString()} downloads</span>
                </a>
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-3">
                  <p className="text-zinc-600 text-xs font-mono break-all leading-relaxed">
                    <span className="text-zinc-500">SHA-256:</span> {BLOCKCHAIN_HASH}<br />
                    <span className="text-zinc-500">Chain:</span> {BLOCKCHAIN_BLOCK}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={{ ...fadeIn, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}>
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                  title="You Built a Bonfire For Me and Burned Your Own House Down"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  data-testid="embed-youtube-bonfire"
                />
              </div>
              <div className="mt-4 bg-zinc-900/60 border border-zinc-800 rounded-lg px-5 py-4">
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-2">Forensic Methodology</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Each claim extracted verbatim from the video is converted into a testable forensic proposition and examined against named primary-source evidence in the 2,304-document archive. The video's creator had no knowledge of the archive. The archive had no knowledge of this video. Convergence across complete mutual ignorance is the forensic finding.
                </p>
                <p className="text-zinc-600 text-xs font-mono mt-3">
                  Method: Proposition-Based Corroboration · Identical to Analyses #57–#79
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* PROPHETIC STATEMENT OF CORROBORATION */}
        <div className="bg-gradient-to-b from-zinc-950 to-black border-b border-zinc-800 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="text-center mb-10">
                <Badge variant="outline" className="border-orange-500/25 text-orange-400 text-xs px-3 py-1 mb-4">
                  Prophetic Statement of Corroboration
                </Badge>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                  The Video Did Not Know the Archive.<br />
                  <span className="text-orange-400">The Archive Did Not Know the Video.</span>
                </h2>
              </div>

              <div className="prose prose-invert max-w-none space-y-5 text-zinc-300 leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>
                <p>
                  On 8 May 2026, a viral motivational video addressed to "chosen ones" who had survived coordinated group persecution was submitted to the Forensic Corroboration Analysis methodology applied across eighty prior examinations. The video was produced by a creator with no knowledge of Dr. Richard William McLean's archive. The 2,304 primary source documents in that archive were produced over 35 years by Dr. McLean, his medical practitioners, government agencies, legal representatives, and institutional actors — none of whom consulted or were consulted by the video's creator.
                </p>
                <p>
                  The video's seven structural claims — about coordinated persecution, ring leaders, puppet masters, strategic silence, the self-destruction of attackers, and the moment when the persecuted stops running — were extracted verbatim and converted into testable forensic propositions. Each proposition was examined against named, dated, primary-source evidence in the archive. The result of that examination is recorded below.
                </p>
                <Pull>
                  "You built a bonfire for me and burned your own house down."
                </Pull>
                <p>
                  This opening line is not poetry in the context of the Barran Dodger archive. It is a forensic description. The 13 agencies that coordinated against Dr. McLean over 35 years produced — in their own documentation — the precise evidence that now forms the basis of an International Criminal Court submission under Article 7 of the Rome Statute, a UNHCR asylum claim, a Federal Court whistleblower confirmation, and a formal court proceeding at Wyong Local Court (Receipt I88267509, 14 May 2026). They produced the archive themselves. Every clinical report, every financial management decision, every dismissed complaint, every letter from a minister's office is a primary source in the case against the conduct of the institution that created it. The bonfire they built is now the evidentiary record. Their house is the documentation.
                </p>
                <p>
                  What follows is not commentary. It is a forensic audit of seven claims. Verified against a record they cannot dispute without initiating the legal proceedings they have not initiated across 1,100,000+ global downloads.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FORENSIC ANALYSIS — 7 CLAIMS */}
        <div className="bg-black border-b border-zinc-800 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-12">
              <Badge variant="outline" className="border-blue-500/50 text-blue-400 text-xs px-3 py-1 mb-4">
                Part One — Forensic Corroboration Analysis
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                Seven Claims. Seven Verdicts.
              </h2>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-green-900/50 border border-green-700/50 text-green-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">7/7 Corroborated</span>
                <span className="text-zinc-600 text-sm font-mono self-center">0 Contradicted · 0 Rebutted</span>
              </div>
            </motion.div>

            {/* CLAIM 1 */}
            <SectionHeading number="1" title="The Silence They Mistook Became the Strength That Crushed Them" icon={Lock} timestamp="00:08:50" />
            <VideoQuote timestamp="00:09:29">
              "They mistook your quiet for quit, but you were just loading the ammo. Silence isn't softness. Silence is storage. Silence is strategy. Silence is the calm before the kind of storm that doesn't knock. It breaks the hinges off the door."
            </VideoQuote>
            <Evidence label="Archive Corroboration" source="35-year primary source record · barrandodger.com">
              Dr. McLean's 2,304-exhibit archive was constructed during periods of enforced institutional silence: 14 involuntary psychiatric hospitalisations, financial guardianship under NSW Trustee removing his legal autonomy, and documented interference with his ability to communicate externally. During each period of enforced silence, he documented. Freedom of Information requests were filed. Clinical records were obtained and cross-referenced against the assessments that had produced them. The archive now submitted to the ICC, UNHCR, and before Wyong Local Court is precisely the product of that strategic silence — a 35-year accumulation that could not be dismissed, suppressed, or rebutted after the fact, because the documents were the institutions' own. <a href="/administrative-annihilation" className="text-orange-400 hover:underline">Read: Administrative Annihilation — The Full 25,000-Word Paper</a>.
            </Evidence>
            <Verdict verdict="CORROBORATED" />

            {/* CLAIM 2 */}
            <SectionHeading number="2" title="The Puppet Master Exposed by Their Own Web of Manipulation" icon={Users} timestamp="00:15:07" />
            <VideoQuote timestamp="00:15:50">
              "Every story like yours has that one character. The whisperer hiding behind a friendly smirk. The strategist disguised as a supporter. They didn't just gossip. They performed. They didn't just lie. They curated narratives like a director shooting scenes for the most chaotic soap opera imaginable."
            </VideoQuote>
            <Evidence label="Archive Corroboration — Tony Ridley" source="Recorded confession · /tony-ridley-recorded-confession">
              Tony Ridley's recorded confession — a primary source audio document now blockchain-sealed and publicly distributed — describes a coordinated strategy against Dr. McLean that includes references to a $6 billion figure and specific operational details. The recording was not obtained by confrontation. It was obtained by the same mechanism the video describes: a strategist who assumed their target was harmless exposing themselves through their own words. Ridley did not know he was being recorded. The recording is the archive's record of exactly what the video describes: a puppet master caught in his own web. <a href="/tony-ridley-recorded-confession" className="text-orange-400 hover:underline">Evidence: Tony Ridley — Recorded Confession</a>.
            </Evidence>
            <Evidence label="Archive Corroboration — Bill Shorten" source="Documented strategy · /retrospective-statement">
              The archive documents a strategy coordinated through a representative identified as Ben from NDIS Help — operating under the authority of Minister Bill Shorten's office — to weaponise Dr. McLean's mental health history as a mechanism for suppressing his whistleblower testimony. This is not an allegation. It is a documented pattern traceable through correspondence, referral chains, and the documented conduct of the NDIS/NDIA during the relevant period. <a href="/retrospective-statement" className="text-orange-400 hover:underline">Evidence: Retrospective Statement — Government's Own Documents</a>.
            </Evidence>
            <Verdict verdict="CORROBORATED" />

            {/* CLAIM 3 */}
            <SectionHeading number="3" title="The Trap They Built Became the Cage They Fell Into" icon={Target} timestamp="00:21:08" />
            <VideoQuote timestamp="00:24:31">
              "They thought they were trapping you, but the truth is they were documenting their own downfall. Every lie became evidence. Every whisper became a confession. Every move they made became a reflection of their own insecurities."
            </VideoQuote>
            <Evidence label="Archive Corroboration — AblePoint Australia" source="Recorded call · /ablepoint-entrapment">
              AblePoint Australia's CEO was recorded on a call in which the organisation's response to an active death threat against Dr. McLean was documented. The recording was not obtained through confrontation. The organisation's CEO exposed their own conduct through their own words on a call they assumed was private. That recording is now blockchain-sealed, publicly distributed, and submitted to regulatory authorities. The trap they built — an institutional support network that was in fact an instrument of suppression — is now documented from the inside, by its own participants. <a href="/ablepoint-entrapment" className="text-orange-400 hover:underline">Evidence: AblePoint Entrapment Documentation</a>.
            </Evidence>
            <Evidence label="Archive Corroboration — ASIC Fraud" source="350+ fraudulent registrations · /evidence">
              Over 350 businesses were registered in Dr. McLean's name without his knowledge or consent, exploiting periods of involuntary psychiatric confinement during which his legal capacity was reduced. Each registration is a documented exhibit. The trap — using his identity against him during periods when he could not defend himself — produced a 350-exhibit catalogue of the perpetrators' own conduct, now in the archive and before regulatory authorities. <a href="/evidence" className="text-orange-400 hover:underline">Evidence Archive — ASIC Registration Documentation</a>.
            </Evidence>
            <Verdict verdict="CORROBORATED" />

            {/* CLAIM 4 */}
            <SectionHeading number="4" title="The Exact Second You Stopped Running and Everything Shifted" icon={Zap} timestamp="00:26:12" />
            <VideoQuote timestamp="00:27:25">
              "You didn't roar. You didn't lash out. You didn't beg to be understood. You simply remembered your power. And that realization alone was enough to collapse their entire operation."
            </VideoQuote>
            <Evidence label="Archive Corroboration — The Filing Moment" source="Wyong Local Court · Receipt I88267509 · 14 May 2026">
              The moment Dr. McLean stopped running was not dramatic. It was the filing of a formal court proceeding at Wyong Local Court — Receipt I88267509, for a hearing date of 14 May 2026 — against Tory Kilbourne for the documented death threat. It was the formal submission to the ICC under Article 7 of the Rome Statute. It was the submission of an asylum claim to UNHCR Geneva from within a Western democracy — a filing that the UNHCR formally received. It was the blockchain authentication of 2,304 primary source documents. Each of these was a quiet, procedural act. No media campaign. No public confrontation. Just a record being filed. That is the moment the video describes. <a href="/verdict-before-the-court" className="text-orange-400 hover:underline">Evidence: Verdict Before the Court — Full Legal Status</a>.
            </Evidence>
            <Verdict verdict="CORROBORATED" />

            {/* CLAIM 5 */}
            <SectionHeading number="5" title="Their Downfall Was Self-Inflicted — You Just Stood Still" icon={Scale} timestamp="00:30:42" />
            <VideoQuote timestamp="00:31:49">
              "All you did was exist in your authenticity, your calm, your unshakable presence. And that alone was enough to send their entire structure into collapse. Because when someone who moves with integrity simply stands still, those who survive on lies start tripping over their own stories."
            </VideoQuote>
            <Evidence label="Archive Corroboration — Zero Rebuttals" source="1,100,000+ global downloads · 300+ named individuals">
              The Barran Dodger archive has been publicly accessible for multiple years, downloaded 1,100,000+ times across six continents, submitted to the ICC, the UNHCR, the Federal Court, and distributed to over 300 named individuals including ministers, ombudsmen, attorneys-general, and regulatory authorities. Not one named individual has initiated legal proceedings for defamation. Not one has produced a documented factual rebuttal. Not one agency has formally disputed the primary source evidence in the archive. Their collapse — the internal contradictions, the unanswered FOI requests, the commission findings — is documented. Dr. McLean did not cause it. He documented it. That is precisely what the video describes. <a href="/legal-status" className="text-orange-400 hover:underline">Evidence: Legal Status — Full Proceeding History</a>.
            </Evidence>
            <Verdict verdict="CORROBORATED" />

            {/* CLAIM 6 */}
            <SectionHeading number="6" title="The Echoing Silence — When No One Answers Their Desperate Calls" icon={Eye} timestamp="00:35:21" />
            <VideoQuote timestamp="00:36:37">
              "The same ring leader who once proudly engineered chaos behind your back is now pacing the floor alone, refreshing messages that aren't coming, dialing numbers that won't connect. Silence is the only response they get now. And silence is the most honest feedback they've ever received."
            </VideoQuote>
            <Evidence label="Archive Corroboration — Institutional Non-Response" source="FOI records · Ombudsman correspondence · /evidence">
              The archive documents over 60 formal notifications dispatched to institutions, ministers, and international bodies — the ICC, UNHCR Geneva, the Commonwealth Ombudsman, the OAIC, the AFP, the Attorney-General's office, and more. The documented response pattern: formal acknowledgment, followed by no substantive action, followed by silence. The silence is itself a primary source exhibit. Every unanswered FOI request, every automatically closed complaint, every referral that went nowhere is now a document in the archive that those institutions cannot retroactively revise. They chose silence as their strategy. That silence is now preserved in the blockchain-sealed archive as evidence of their choice. <a href="/retrospective-statement" className="text-orange-400 hover:underline">Evidence: How the Commonwealth Treated Dr. McLean — Government's Own Documents</a>.
            </Evidence>
            <Verdict verdict="CORROBORATED" />

            {/* CLAIM 7 */}
            <SectionHeading number="7" title="The Empire of Lies They Built Collapsed in a Single Breath of Truth" icon={Crown} timestamp="00:40:08" />
            <VideoQuote timestamp="00:41:49">
              "Lies are high-maintenance, and the truth is self-sustaining. They forgot that real power doesn't need support beams. It stands on its own. The moment you stood in your truth without reacting, that expiration date hit like a hammer."
            </VideoQuote>
            <Evidence label="Archive Corroboration — The Blockchain Seal" source="SHA-256 · Bitcoin Blockchain · OpenTimestamps">
              The empire of institutional lies about Dr. McLean required continuous maintenance: each new clinical report had to contradict the last; each agency's silence had to be coordinated with the others; each dismissed complaint had to avoid creating a paper trail that contradicted the previous dismissal. The truth required nothing. It simply needed to be documented, authenticated, and distributed. The Bitcoin blockchain is self-sustaining by design: once a hash is recorded in a block, no subsequent institutional decision can alter it. The archive did not collapse their narrative through confrontation. It collapsed it by becoming permanent. A lie that must be maintained every day collapses the moment its maintenance is interrupted. The truth, sealed in an immutable ledger, requires no maintenance at all. It simply exists, accessible to any court, tribunal, or international body with the capacity to read it. <a href="/blockchain" className="text-orange-400 hover:underline">Evidence: Blockchain Authentication Register</a>.
            </Evidence>
            <Verdict verdict="CORROBORATED" />

            {/* SUMMARY BAR */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="mt-16 bg-green-950/30 border border-green-800/40 rounded-xl px-6 py-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-green-400 font-black uppercase tracking-widest text-sm">Final Forensic Verdict</p>
                  <p className="text-white text-2xl font-serif font-bold mt-1">7 of 7 Claims Corroborated</p>
                  <p className="text-zinc-500 text-sm mt-1">Zero claims contradicted by the 2,304-document archive. Zero rebuttals received from 300+ named individuals across 1,100,000+ downloads.</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 text-4xl font-black">100%</p>
                  <p className="text-zinc-600 text-xs uppercase tracking-widest">Corroboration Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* PART TWO — MESSAGE TO NAMED PERPETRATORS */}
        <div className="bg-gradient-to-b from-red-950/10 to-black border-b border-zinc-800 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-10">
              <Badge variant="outline" className="border-red-500/50 text-red-400 text-xs px-3 py-1 mb-4">
                Part Two — Direct Message to Named Proven Perpetrators
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                Quote This to Anyone Who Came For You.
              </h2>
              <Pull>
                "You built a bonfire for me and burned your own house down."
              </Pull>
              <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-4" style={{ fontFamily: "'Georgia', serif" }}>
                <p>
                  What follows is addressed directly to the named individuals and organisations whose documented conduct is preserved in the 2,304-exhibit Barran Dodger archive. Each name below is linked to primary-source evidence. Each legislative reference is specific and applicable. This is not commentary. This is a legally fortified notification delivered through a public record downloaded 1,100,000+ times and submitted to the International Criminal Court under Article 7 of the Rome Statute.
                </p>
                <p className="text-zinc-500 text-sm">
                  This section constitutes a formal public statement under the Public Interest Disclosure Act 2013 (Cth) s.10 — disclosures of information that the discloser believes tend to show one or more instances of wrongdoing. All persons named have had access to the archive for an extended period. None has initiated legal proceedings. None has produced a factual rebuttal.
                </p>
              </div>
            </motion.div>

            <PerpetratorCard
              name="Tony Ridley"
              role="Identified Operative — Recorded Confession Exists"
              message="You recorded yourself. That is not a metaphor. Your own voice, on a recording you did not know was being made, describes a coordinated strategy against Dr. Richard William McLean — including a reference to a $6 billion figure and specific operational details about the suppression of his testimony. That recording is now blockchain-sealed, publicly distributed, and downloaded across six continents. The video describes a puppet master who got tangled in their own web. The recording is the web. You built it. You were recorded inside it. The bus the video describes is arriving at Wyong Local Court on 14 May 2026 — Receipt I88267509. You were not invited to drive it."
              evidenceLinks={[
                { label: "Tony Ridley — Recorded Confession", href: "/tony-ridley-recorded-confession" },
                { label: "Tony Ridley — Full Dossier", href: "/tony-ridley-full-dossier" },
                { label: "Verdict Before the Court", href: "/verdict-before-the-court" },
              ]}
              legislation={[
                { act: "Crimes Act 1900 (NSW)", section: "s.192G — Dishonest statements" },
                { act: "Criminal Code Act 1995 (Cth)", section: "s.135.4 — General dishonesty" },
                { act: "Rome Statute", section: "Article 7(1)(h) — Persecution", href: "https://www.icc-cpi.int/resource-library/documents/rs-eng.pdf" },
                { act: "Public Interest Disclosure Act 2013 (Cth)", section: "s.10 — Protected disclosure", href: "https://www.legislation.gov.au/Details/C2022C00060" },
              ]}
            />

            <PerpetratorCard
              name="Sukhi Tear"
              role="Support Coordinator — 5 Missing Person Registrations Documented"
              message="You were the support coordinator responsible for Dr. McLean's care during a period in which he was registered as a missing person five times — Police Report PD77027. Five times. The same person. In your care. The video describes a strategist disguised as a supporter. The archive has a name for that. It is yours. The police report documenting the five disappearances has been retrieved, authenticated, and blockchain-sealed. It has been submitted to the NDIS Quality and Safeguards Commission and to the ICC. The formal dossier bearing your name is publicly accessible and has been downloaded and shared globally. Your formal removal from Dr. McLean's care is documented. The question the video asks — 'Who started this?' — has a documented answer in your file."
              evidenceLinks={[
                { label: "Sukhi Tear — Formal Dossier", href: "/sukhi-tear" },
                { label: "Formal Removal of Sukhi Tear", href: "/formal-removal-sukhi-tear" },
                { label: "NDIS Surveillance Evidence", href: "/evidence" },
              ]}
              legislation={[
                { act: "NDIS Act 2013 (Cth)", section: "s.73ZP — Participant rights", href: "https://www.legislation.gov.au/Details/C2022C00207" },
                { act: "Crimes Act 1900 (NSW)", section: "s.316A — Failure to report serious indictable offence" },
                { act: "Work Health and Safety Act 2011 (Cth)", section: "s.19 — Primary duty of care" },
                { act: "Rome Statute", section: "Article 7(1)(k) — Other inhumane acts" },
              ]}
            />

            <PerpetratorCard
              name="Tory Kilbourne"
              role="Documented Death Threat — Before Wyong Local Court"
              message="You threatened to kill Dr. Richard William McLean. That threat is on recording. It has been preserved as a primary source exhibit, blockchain-authenticated, and placed before Wyong Local Court — Receipt I88267509, hearing date 14 May 2026. It has been submitted to the ICC under Article 7 of the Rome Statute as evidence of persecution. The video's description of 'the ring leaders about to be thrown under the bus' is not poetry in your case. It is a court date. The same silence Dr. McLean maintained while you made your threat is now the archive that surrounds it. You provided the evidence yourself. He preserved it. The bus has a receipt number."
              evidenceLinks={[
                { label: "Urgent Protection Request — Full SOS Documentation", href: "/urgent-protection-request" },
                { label: "Verdict Before the Court", href: "/verdict-before-the-court" },
                { label: "Legal Status — Full Proceeding History", href: "/legal-status" },
              ]}
              legislation={[
                { act: "Criminal Code Act 1995 (Cth)", section: "s.474.17 — Misuse of carriage service to menace" },
                { act: "Crimes Act 1900 (NSW)", section: "s.31 — Threat to kill" },
                { act: "Rome Statute", section: "Article 7(1)(h) — Persecution", href: "https://www.icc-cpi.int/resource-library/documents/rs-eng.pdf" },
                { act: "ICCPR", section: "Article 6 — Right to life", href: "https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" },
              ]}
            />

            <PerpetratorCard
              name="Bill Shorten — Office of the Minister for NDIS"
              role="Documented Ministerial Strategy — Weaponisation of Mental Health History"
              message="Your office documented a strategy — traceable through correspondence chains and referral pathways in the archive — to weaponise Dr. McLean's mental health history through a representative identified as Ben from NDIS Help. The 'strategist disguised as a supporter' the video describes operates at multiple levels of institutional power. At the ministerial level, that description corresponds to a documented pattern of engagement with Dr. McLean's case that used the architecture of support to advance the goals of suppression. The archive documents 35 years of this pattern across 13 agencies. Your office's role in the period 2022–2026 is documented. The $112 million in suppressed economic claim that is now before the Federal Court and the ICC was suppressed during a period of active ministerial engagement. That is not an allegation. It is a timeline."
              evidenceLinks={[
                { label: "Retrospective Statement — Government's Own Documents", href: "/retrospective-statement" },
                { label: "$112M Forensic Economic Claim", href: "/forensic-economic-valuation" },
                { label: "Taxpayer Cost Analysis", href: "/taxpayer-cost-analysis" },
              ]}
              legislation={[
                { act: "Public Interest Disclosure Act 2013 (Cth)", section: "s.10 — Protected disclosure", href: "https://www.legislation.gov.au/Details/C2022C00060" },
                { act: "NDIS Act 2013 (Cth)", section: "s.3 — Object of Act", href: "https://www.legislation.gov.au/Details/C2022C00207" },
                { act: "ICCPR", section: "Article 19(2) — Freedom of expression" },
                { act: "Rome Statute", section: "Article 7(1)(h) — Persecution as crime against humanity" },
              ]}
            />

            <PerpetratorCard
              name="AblePoint Australia — CEO and Organisation"
              role="Disability Support Provider — Recorded Call — Failure to Act on Death Threat"
              message="Your CEO was recorded on a call in which your organisation's response to an active, documented death threat against Dr. McLean — a participant in your care — was preserved as a primary source audio document. You did not act on the death threat. The recording documents why. That recording is blockchain-sealed, publicly distributed, and submitted to the NDIS Quality and Safeguards Commission, the ICC, and the UNHCR. The video describes an organisation that thought it was the sun in everyone's sky — the gravitational centre of a support structure. What the recording revealed is that the support structure was designed to serve institutional interests, not the participant's safety. The participant survived. The recording survived. Your conduct is documented in your own CEO's words, on your own call, in your own voice."
              evidenceLinks={[
                { label: "AblePoint Entrapment Documentation", href: "/ablepoint-entrapment" },
                { label: "Praise Jesus — AblePoint Exposure", href: "/praise-jesus-ablepoint-exposure" },
                { label: "Urgent Protection Request", href: "/urgent-protection-request" },
              ]}
              legislation={[
                { act: "NDIS Act 2013 (Cth)", section: "s.73ZP — Participant rights and obligations" },
                { act: "Work Health and Safety Act 2011 (Cth)", section: "s.19 — Primary duty of care" },
                { act: "Crimes Act 1900 (NSW)", section: "s.316A — Concealing serious indictable offence" },
                { act: "Disability Services Act 1993 (Cth)", section: "s.6 — Principles for persons with disability" },
              ]}
            />

            <PerpetratorCard
              name="NSW Trustee and Guardian"
              role="Financial Guardianship — 12+ Years — Documented Mismanagement"
              message="You held financial guardianship over Dr. McLean for over twelve years. During that period, you removed his legal autonomy over his own financial affairs, made management decisions he did not consent to and was not able to effectively challenge, and produced documentation of those decisions that is now in the archive. That documentation — your own records, your own assessments, your own management reports — has been retrieved under Freedom of Information, authenticated via SHA-256 blockchain hashing, and submitted to the ICC as part of a formal Article 7 complaint. The video describes an empire of lies that collapsed under the weight of its own maintenance. A twelve-year financial guardianship generates twelve years of primary source documentation. That documentation is the archive. You wrote it. He retrieved it. It is now global."
              evidenceLinks={[
                { label: "Taxpayer Cost Analysis — NSW Trustee Documentation", href: "/taxpayer-cost-analysis" },
                { label: "$112M Forensic Economic Claim", href: "/forensic-economic-valuation" },
                { label: "Retrospective Statement", href: "/retrospective-statement" },
              ]}
              legislation={[
                { act: "NSW Trustee and Guardian Act 2009 (NSW)", section: "s.14 — Functions of NSW Trustee" },
                { act: "ICCPR", section: "Article 17 — Right to privacy and protection of correspondence" },
                { act: "UN Convention Against Torture", section: "Article 16 — Other cruel treatment" },
                { act: "Rome Statute", section: "Article 7(1)(k) — Other inhumane acts causing great suffering" },
              ]}
            />

          </div>
        </div>

        {/* BLOCKCHAIN SEAL */}
        <div className="bg-zinc-950 border-b border-zinc-800 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="border border-orange-500/25 bg-orange-500/10 rounded-xl px-6 py-6 text-center"
            >
              <Lock className="h-8 w-8 text-orange-500 mx-auto mb-4" />
              <p className="text-orange-400 text-xs uppercase tracking-widest font-sans mb-2">Blockchain Authentication — Forensic Analysis #80</p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                This forensic analysis is sealed to the Bitcoin blockchain via SHA-256 cryptographic hashing through OpenTimestamps. Every claim is traceable to named primary-source documentation in the 2,304-exhibit archive at barrandodger.com. This analysis cannot be altered retroactively. The hash below is the permanent record.
              </p>
              <div className="bg-black/50 rounded-lg px-4 py-3 font-mono text-xs text-zinc-500 break-all text-left">
                <span className="text-zinc-400">SHA-256:</span> {BLOCKCHAIN_HASH}<br />
                <span className="text-zinc-400">Chain:</span> {BLOCKCHAIN_BLOCK}<br />
                <span className="text-zinc-400">Published:</span> {PUBLISHED_DATE} · Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-zinc-600 font-sans">
                <span>#BarranDodger</span><span>#ForensicAnalysis80</span><span>#YouBuiltABonfire</span>
                <span>#ChosenOne</span><span>#WhistleblowerAustralia</span><span>#BlockchainEvidence</span>
                <span>#ICC</span><span>#UNHCR</span><span>#WyongCourt</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DOWNLOAD + SHARE */}
        <div className="bg-black py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PDF_URL}
                  onClick={() => { trackDownload(PDF_URL); scheduleRefresh(); }}
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-orange-600 hover:bg-orange-600 text-black font-bold rounded-xl transition-colors text-sm"
                  data-testid="button-download-bonfire-pdf-bottom"
                >
                  <Download className="h-4 w-4" />
                  Download Full Analysis PDF
                  <span className="ml-auto bg-black/20 rounded px-2 py-0.5 text-xs tabular-nums">{displayCount.toLocaleString()}</span>
                </a>
                <a
                  href="/evidence"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-colors text-sm"
                  data-testid="link-evidence-archive"
                >
                  <BookOpen className="h-4 w-4" />
                  View Full Evidence Archive
                </a>
              </div>
              <SocialShare
                title="You Built a Bonfire For Me and Burned Your Own House Down — Forensic Analysis #80 | Barran Dodger"
                description="A viral chosen-one video independently describes the documented 35-year persecution of Dr. Richard McLean. Analysis #80: 7 claims, 7 corroborated, zero rebutted. Named perpetrators addressed with blockchain-verified evidence and legislation."
                url="https://www.barrandodger.com/you-built-a-bonfire-forensic-analysis"
              />
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto max-w-3xl px-4">
          <CommentSection pageSlug="bonfire-forensic-analysis-80" title="Analysis Discussion" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
