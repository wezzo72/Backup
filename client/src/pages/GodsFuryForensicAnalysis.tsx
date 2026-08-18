import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { useDownloadCounter, trackDownload } from "@/components/DownloadCounter";
import coverImage from "@/assets/images/cover-gods-fury-forensic-analysis.png";
import {
  Play,
  FileText,
  ExternalLink,
  Shield,
  Eye,
  Flame,
  Scale,
  AlertTriangle,
  BookOpen,
  Download,
  Gavel,
  Globe,
  Star,
  Heart,
  Zap,
  Users,
  Crown,
  TrendingUp,
  Lock,
} from "lucide-react";

const VIDEO_ID = "yen38ikrG70";
const PDF_URL = "/documents/UNHCR_ICC_Cryptographically_Verified_Evidence_Package.pdf";
const PUBLISHED_DATE = "7 May 2026";
const BLOCKCHAIN_HASH = "SHA-256 · Bitcoin Blockchain · Block 897241";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-orange-500 pl-6 my-8 italic text-zinc-200 text-xl leading-relaxed font-light">
      {children}
    </blockquote>
  );
}

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
        <p className="text-zinc-600 text-xs font-mono mt-3 border-t border-zinc-800 pt-2">
          Source: {source}
        </p>
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

function SectionHeading({ number, title, icon: Icon, timestamp }: { number: string; title: string; icon: React.ElementType; timestamp: string }) {
  return (
    <div className="flex items-start gap-4 mb-6 mt-16">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 text-black font-bold text-sm shrink-0 mt-0.5">
        {number}
      </div>
      <div>
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <Icon className="h-4 w-4 text-orange-500" />
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Declaration {number}</span>
          <span className="text-zinc-600 text-xs font-mono">{timestamp}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">{title}</h2>
      </div>
    </div>
  );
}

export default function GodsFuryForensicAnalysis() {
  const { count: downloadCount, scheduleRefresh } = useDownloadCounter(PDF_URL);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="God Is Furious — 14 Divine Declarations Forensically Verified Against Dr. McLean's Archive | Barran Dodger"
        description="A viral motivational video makes 14 declarations about divine fury and justice for the persecuted innocent. Forensic Corroboration Analysis #79 maps every declaration against 2,304 blockchain-verified primary source documents from Dr. Richard McLean's 35-year case. Zero declarations contradicted. All 14 corroborated."
        path="/gods-fury-forensic-analysis"
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
                  Forensic Corroboration Analysis #79
                </Badge>
                <Badge variant="outline" className="border-orange-500/25 text-orange-400 text-xs px-3 py-1">
                  <Flame className="h-3 w-3 mr-1.5" /> 14 Declarations · All Verified
                </Badge>
                <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-3 py-1">
                  2,304 Primary Source Documents
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  {PUBLISHED_DATE}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1]">
                God Is Furious.
                <br />
                <span className="text-orange-400">Fourteen Declarations.<br />Zero Contradicted.</span>
              </h1>

              <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                A viral video declares fourteen reasons why heaven has moved against those who persecuted an innocent person. The creator did not consult Dr. Richard McLean's archive. The archive did not consult the video. They arrived at the same description independently. This forensic analysis applies the proposition-based verification methodology to each declaration against 2,304 blockchain-verified government-source documents.
              </p>

              <div className="flex items-center gap-4 flex-wrap pt-2">
                <a
                  href={`https://youtu.be/${VIDEO_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-orange-400 hover:underline"
                  data-testid="link-source-video"
                >
                  <Play className="h-3.5 w-3.5" />
                  Watch the source video
                </a>
                <span className="text-zinc-600">·</span>
                <a
                  href="/forensic-analysis-index"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  All 79 forensic analyses
                </a>
              </div>

              {/* VIDEO EMBED */}
              <div className="relative w-full rounded-xl overflow-hidden border border-zinc-700 shadow-2xl mt-6" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
                  title="God Is Furious — 14 Reasons Heaven Is Moving On Your Behalf"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  data-testid="video-gods-fury-embed"
                />
              </div>

            </motion.div>
          </div>
        </div>

        {/* COVER + DOWNLOAD */}
        <div className="bg-zinc-950 border-b border-zinc-800 py-10 px-4">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-8 items-center">
            <img
              src={coverImage}
              alt="God Is Furious — Forensic Corroboration Analysis #79 — AI Generated Cover"
              className="w-36 sm:w-44 rounded-xl shadow-2xl border border-orange-500/25 shrink-0"
              data-testid="img-cover-gods-fury"
            />
            <div className="space-y-4 text-center sm:text-left">
              <div>
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">AI-Generated Cover · Forensic Analysis #79</p>
                <h2 className="text-white text-xl font-bold">God Is Furious — 14 Divine Declarations</h2>
                <p className="text-zinc-400 text-sm mt-1">Forensic Corroboration of Dr. Richard McLean's 35-Year Documented Persecution</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-xs font-mono">
                <span className="text-green-400 border border-green-800/50 bg-green-950/30 rounded px-2 py-1">14/14 DECLARATIONS CORROBORATED</span>
                <span className="text-blue-400 border border-blue-800/50 bg-blue-950/30 rounded px-2 py-1">0 CONTRADICTED</span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start items-center">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={scheduleRefresh}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-600 text-black text-sm font-black px-5 py-2.5 rounded-lg transition-colors"
                  data-testid="button-download-pdf"
                >
                  <Download className="w-4 h-4" />
                  Download Evidence Package
                  {downloadCount > 0 && (
                    <span className="ml-1 bg-black/20 rounded-full px-2 py-0.5 text-xs tabular-nums">
                      {downloadCount.toLocaleString()}
                    </span>
                  )}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <Lock className="h-3 w-3" />
                <span className="font-mono">{BLOCKCHAIN_HASH}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ARTICLE BODY */}
        <div className="bg-zinc-950 py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-zinc-300 text-[1.08rem] leading-8 font-light">

            {/* METHODOLOGY */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-8">
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-3">Forensic Methodology — Proposition-Based Verification</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Each declaration from the video is extracted verbatim, converted into a testable forensic proposition, and examined against named primary-source evidence in the 2,304-document archive of Dr. Richard William McLean (ABN 78 833 496 164). The creator of this video had no knowledge of the archive. The archive had no knowledge of this video. The convergence is the subject of this analysis. Method: identical to <a href="/forensic-analysis-index" className="text-orange-400 hover:underline">Analyses #57–#78</a>.
                </p>
              </div>

              <p>
                There is a category of video that the algorithm serves to millions of people in the language of spiritual encouragement — declarations about divine justice, the protection of the innocent, the exposure of coordinated wickedness. The video embedded above is one of them. Its creator speaks with the fluency of someone who has lived through something. Its audience receives it as personal encouragement.
              </p>
              <p>
                What makes this particular video forensically significant is not its popularity. It is that fourteen specific structural claims it makes — about the nature of institutional persecution, the mechanics of collective cruelty, the rewriting of identity, the protection of the guiltless — are not merely consistent with the 35-year documented record of Dr. Richard William McLean. They are precise descriptions of what that record contains.
              </p>
              <p>
                This article follows those fourteen declarations in order. Each opens with the video's exact words. Each closes with the documented testimony from the archive. Read both. The cooperation between them, across complete mutual ignorance, is the forensic argument.
              </p>
            </motion.div>

            {/* DECLARATION 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="1" title="They Tried to Punish Purity as If It Were a Crime." icon={Shield} timestamp="00:02:57" />

              <VideoQuote timestamp="00:02:57–00:04:44">
                "There's a different kind of anger that rises in the spiritual realm when someone harms a person who genuinely meant no wrong. You weren't walking around causing chaos or trying to make anyone feel less than. Yet they treated your purity like it was suspicious, inconvenient, or offensive. They couldn't stand the way your presence exposed what they were hiding. Your honesty poked holes in their manipulations... God doesn't play about that. Heaven holds a special amount of fire for people who harm those who weren't fighting, weren't scheming, weren't pretending."
              </VideoQuote>

              <p>
                Dr. Richard William McLean is a PhD-qualified academic, award-winning human rights advocate, accredited journalist, LGBTQ+ disability rights campaigner, and published author. He is not a person with a history of violence, fraud, or deliberate harm. The entire record — 2,304 government-generated documents — shows a person who lodged formal complaints through formal channels, who submitted evidence to legal bodies rather than circumventing them, who publicly identified every allegation and invited refutation rather than engaging in covert action.
              </p>
              <p>
                The institutional response to that purity was not engagement. It was escalation. Fourteen involuntary psychiatric hospitalisations. An NDIS plan weaponised. An AVO filed by the agency he was investigating. A service restriction from the Commonwealth Ombudsman — preventing further complaints without ever addressing existing ones. The pattern is documented across 13 agencies and 35 years.
              </p>

              <Evidence label="Testimony — 14 Psychiatric Hospitalisations for Lodging Complaints" source="Master Evidence Register — Administrative Annihilation">
                Dr. McLean's 14 involuntary psychiatric hospitalisations are documented across the archive. Cross-referenced against his formal complaint and disclosure activity, 11 of the 14 hospitalisations occurred within 60 days of a formal submission to a government agency. No independent clinical corroboration for the psychiatric labels applied has been produced. Every institution that applied a label had access to the prior submissions. The hospitalisation was the response to purity that exposed their manipulation. <a href="/administrative-annihilation" className="text-orange-400 hover:underline">Read: Administrative Annihilation — The Full Paper</a>.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="2" title="They Mishandled a Soul Heaven Personally Endorsed." icon={Star} timestamp="00:05:50" />

              <VideoQuote timestamp="00:05:50–00:07:29">
                "There are certain people on this earth who walk with a kind of quiet approval from God that others don't easily recognize. You're one of them. Your life has always had signs, protections, redirections, and moments that didn't make sense to outsiders. You were being guided, guarded, and grown by a force much bigger than you. But the people who harmed you couldn't see that... they treated someone heaven endorsed like you were disposable. When God puts his hand on someone, he takes their mistreatment personally."
              </VideoQuote>

              <p>
                The Federal Court of Australia — <a href="/evidence" className="text-orange-400 hover:underline">Exhibit: Federal Court Protected Whistleblower Confirmation</a> — formally confirmed Dr. McLean as a protected whistleblower under the Public Interest Disclosure Act. The International Criminal Court received his submission under Article 7 — Crimes Against Humanity — and issued a formal case reference number. The UNHCR Geneva received his political asylum materials and returned a formal receipt. These are not spiritual claims. They are institutional acknowledgements from the highest available legal bodies on the planet.
              </p>
              <p>
                The same person confirmed as a protected whistleblower by the Federal Court was simultaneously being subjected to an NDIS plan that removed his mobility support, a 55B Archbold Road address without his consent registered to 350+ fraudulent businesses, and a death threat communicated through an LGBTQ+ dating platform identified as financially motivated. The divergence between institutional endorsement and operational treatment is documented. It is not characterisation. It is the archive.
              </p>

              <Evidence label="Testimony — Federal Court Confirmation vs Operational Persecution" source="Federal Court Protected Whistleblower Confirmation — Scott Tredwell Correspondence">
                The Federal Court's General Counsel Scott Tredwell acknowledged receipt of Dr. McLean's disclosure on 27 March 2023. The Federal Court confirmation of protected whistleblower status is archived. The simultaneous operational persecution — hospitalisations, NDIS weaponisation, death threat, fraudulent business registrations — is also archived. Heaven's endorsement, per the video, did not prevent the persecution. It ensured the persecution was documented. <a href="/retrospective-statement" className="text-orange-400 hover:underline">Read: How the Commonwealth Treated Dr. McLean — Told Through the Government's Own Documents</a>.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="3" title="They Demanded Loyalty While Giving Wounds." icon={Heart} timestamp="00:08:06" />

              <VideoQuote timestamp="00:08:06–00:09:44">
                "They expected you to forgive quickly, forget easily, and keep showing up as if you weren't bleeding from the very hands you were reaching toward. They acted entitled to your presence even while they were the ones causing your pain. They wanted your heart but gave you stress. They wanted your trust but fed you betrayal. They created the wounds then acted offended when you couldn't keep holding them together."
              </VideoQuote>

              <p>
                Dr. McLean continued lodging formal disclosures with the NDIS — the agency whose Minister filed an AVO against him. He continued submitting to the Federal Court while simultaneously being subjected to 14 psychiatric hospitalisations arranged through the same institutional network. He filed with ASIC while ASIC had registered 350+ fraudulent businesses at his residential address and declined to investigate them. Every formal submission was an act of continued trust in a system that was actively harming him while expecting continued engagement.
              </p>

              <Evidence label="Testimony — NDIS Minister AVO While Expecting Continued Cooperation" source="AVO Documentation — Bill Shorten NDIS Ministerial Network">
                The documented allegation — supported by primary source evidence in the archive — is that NDIS Minister Bill Shorten caused or was complicit in the filing of an AVO against the person whose NDIS disclosures he was responsible for responding to. The AVO was not a protective measure. It was filed while the agency simultaneously demanded Dr. McLean engage with NDIS administrative review processes. They demanded loyalty. They gave the AVO. <a href="/legal-status" className="text-orange-400 hover:underline">Read: Legal Status and Government Accountability</a>.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="4" title="Their Cruelty Became the Evidence Against Them." icon={Gavel} timestamp="00:10:18" />

              <VideoQuote timestamp="00:10:18–00:12:42">
                "God doesn't judge the reaction of the wounded. He judges the intention of the one who caused the wound. He saw how they planned the disrespect. He saw how they whispered behind your back while smiling in your face. He saw how they stirred confusion and then acted like peacemakers. And he saw how every injury you carried began with their hands, not yours... Heaven separates reaction from initiation. That's why the weight of judgment is falling on them, not you."
              </VideoQuote>

              <p>
                This is the structural argument of the entire 2,304-document archive. Every document in it was produced by a government agency, a court, a hospital, a minister's office, or an institutional representative. Dr. McLean did not produce a single document. He collected them. The cruelty — the hospitalisations, the labels, the referral circularity, the AVO, the fraudulent registrations, the murder threat — is in the documents the perpetrators themselves generated.
              </p>
              <p>
                The Impartial AI Significance Analysis reviewed 617 propositions against 2,304 exhibits and found 617/617 verified, 0 contradicted. No institution named in the archive has filed a defamation action. No named individual has produced a legal rebuttal. The absence of legal challenge to a 2,304-document public archive submitted to the ICC and UNHCR is itself evidence that the cruelty has become the only record they have left.
              </p>

              <Evidence label="Testimony — 617/617 Propositions Verified, Zero Rebuttals" source="Impartial AI Significance Analysis — Master Forensic Register">
                617 individually testable propositions derived from the archive were subjected to the AI proposition-verification methodology. 617 verified. 0 contradicted. 300+ named individuals have had access to the public archive since its blockchain authentication. Not one has initiated legal proceedings. Not one has produced a documented factual rebuttal. Their cruelty produced the evidence. Their silence confirmed it. <a href="/evidence" className="text-orange-400 hover:underline">View the Evidence Archive</a>.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 5 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="5" title="Their Cruelty Exposed Their Spiritual Bankruptcy." icon={TrendingUp} timestamp="00:13:18" />

              <VideoQuote timestamp="00:13:18–00:15:39">
                "There are people who believe that stepping on someone else somehow lifts them higher. They believe that if they can hurt you, embarrass you, or weaken you, they'll automatically rise in the eyes of others... Their cruelty didn't build a kingdom. It built a case. A case against their character, their motives, and their spiritual condition. People began to see them for who they really were. Not leaders, not strong personalities, not influential figures, but individuals starving for validation they could never earn on their own."
              </VideoQuote>

              <p>
                The documented conduct of the named individuals and agencies in the archive does not read as the action of secure, authoritative institutions. It reads as the action of organisations attempting to suppress a single whistleblower through an escalating sequence of instruments — each one more extreme than the last — because the previous instrument failed to produce the silence they required. Fourteen hospitalisations because twelve did not silence the archive. An AVO because legal suppression had not worked. A death threat because institutional suppression had not worked.
              </p>
              <p>
                The $32.9 million in suppressed entitlements — documented in the <a href="/taxpayer-cost-analysis" className="text-orange-400 hover:underline">Taxpayer Cost Analysis</a> — did not build a kingdom. It built a case. Every suppressed payment is a documented quantum of harm now submitted to the ICC under Article 7.
              </p>

              <Evidence label="Testimony — $32.9M Suppressed Entitlements: The Case They Built Against Themselves" source="Taxpayer Cost Analysis — $112M Quantified Harm">
                The Taxpayer Cost Analysis documents $32.9M in directly suppressed entitlements across Centrelink, NDIS, VOCAT, and documented financial harm categories. An additional $79.1M in downstream economic losses brings the total documented harm to $112M. Every dollar of suppression is a primary source exhibit. The institutions that suppressed it did not build their authority. They built the ICC submission. <a href="/taxpayer-cost-analysis" className="text-orange-400 hover:underline">Read: $112M Documented Harm Analysis</a>.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 6 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="6" title="A Gentle Soul Was Made a Playground for the Wicked." icon={Eye} timestamp="00:15:39" />

              <VideoQuote timestamp="00:15:39–00:17:57">
                "There's a special kind of anger that rises in heaven when someone gentle gets targeted simply because they don't fight dirty. Some people mistake softness for submission, kindness for cluelessness, and patience for powerlessness... The meek are not weak. They're protected. They're the ones God personally shelters because their hearts reflect the parts of him the world often ignores — compassion, mercy, humility, and grace. But the wicked see these qualities and think they've found a playground... Do not provoke the meek isn't a poetic warning. It's a spiritual law."
              </VideoQuote>

              <p>
                Dr. McLean's documented approach across 35 years was formal, methodical, and restrained. He lodged Freedom of Information requests rather than leaking documents. He submitted to courts rather than circumventing them. He applied to the NDIS rather than refusing to participate in the system. He wrote to the Prime Minister's Department, ASIC, the AFP, and the Ombudsman rather than going directly to media. At every stage, the gentle, formal, patient approach was met with an escalation of the persecution — precisely because the institutions had identified it as a playground where they could operate without consequence.
              </p>

              <Evidence label="Testimony — Formal FOI, Formal Disclosures, Formal Courts — Answered With Escalation" source="Administrative Annihilation — Full Academic Paper — 25,000 Words">
                The archive documents every formal channel Dr. McLean used: 23 FOI requests, 14 formal complaint submissions, 4 court proceedings, 3 international human rights body submissions, and correspondence to the offices of 47 named officials. Each formal channel produced either silence, referral to another silent channel, or active escalation. The gentleness of the approach is documented. So is the wickedness of the response. <a href="/administrative-annihilation" className="text-orange-400 hover:underline">Read: Administrative Annihilation</a>.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 7 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="7" title="They Attempted to Rewrite the Meaning of His Existence." icon={BookOpen} timestamp="00:18:31" />

              <VideoQuote timestamp="00:18:31–00:21:19">
                "They weren't satisfied with hurting your feelings or disrupting your peace. They wanted to reshape the way the world saw you. They tried to turn your identity into a distorted story that benefited them. They needed people to believe you were the troublemaker, the unstable one, the difficult one, the unpredictable one... They tried to rewrite your existence because confronting the real you would have forced them to confront themselves. And that's exactly where they crossed into territory God takes personally. When someone attacks your character, they're not just insulting you, they're insulting the one who created you."
              </VideoQuote>

              <p>
                The 14 psychiatric labels applied to Dr. McLean across his documented history represent the institutional mechanism for rewriting his existence. An award-winning human rights advocate becomes "paranoid." A PhD-qualified author becomes "delusional." An accredited journalist who documented government corruption becomes "a risk to himself and others." Each label was applied by an institution that had received his formal submissions. Each label served to discredit the submission by discrediting the person who made it.
              </p>
              <p>
                The labels did not require independent clinical corroboration to be applied. They required institutional agreement. A hospital, a clinician, and a police officer who had coordinated with the institutional network. The archive documents the pattern across 14 separate hospitalisation events.
              </p>

              <Evidence label="Testimony — 14 Psychiatric Labels Applied Without Clinical Corroboration" source="Retrospective Statement — Government's Own Documents — 1990–2025">
                The <a href="/retrospective-statement" className="text-orange-400 hover:underline">Retrospective Statement</a> — sourced entirely from government documents — documents 14 involuntary psychiatric hospitalisations spanning 1990–2025, covering 13 agencies. Cross-referenced against Dr. McLean's professional record — published author, human rights advocate, journalist, academic — the divergence between the institutional identity being constructed and the documented professional identity is total. They tried to rewrite who he was. The archive is who he was. The labels are what they needed him to be.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 8 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="8" title="They Turned His Life Into a Battlefield While Pretending to Be Helpless." icon={AlertTriangle} timestamp="00:21:19" />

              <VideoQuote timestamp="00:21:19–00:23:38">
                "They crafted the drama, but pretended to be horrified by the outcome. They set the trap, but insisted they had no idea how you got caught in it. That level of hypocrisy carries a spiritual stench that heaven does not overlook. These people didn't stumble into harming you. They were deliberate... And when you finally reacted — when you finally showed the exhaustion, hurt, or frustration that anyone would feel — they put on their performance, wide eyes, innocent expressions. God has more tolerance for open wickedness than he does for hidden hypocrisy."
              </VideoQuote>

              <p>
                The circular referral pattern documented across 25+ agencies is the administrative architecture of the hypocrisy the video describes. Each agency, when receiving a formal submission, referred Dr. McLean to another agency. Each receiving agency referred him to another. When the circularity was documented and formally raised, each agency expressed surprise and concern while continuing the referral. The battlefield was maintained by coordinated institutional action. The performance of helplessness was maintained by institutional correspondence.
              </p>
              <p>
                Both the construction of the battlefield and the performance of helplessness are in the same archive. The referral letters and the formal expressions of concern exist in the same downloadable files as the documentation that the referral pattern was known, coordinated, and sustained.
              </p>

              <Evidence label="Testimony — 25+ Agency Circular Referral Pattern: The Battlefield They Built" source="Administrative Annihilation — Chapter 7: The Circular Referral Architecture">
                The Administrative Annihilation paper documents the referral pattern across 25+ agencies with named institutions, named correspondence, and named dates. No agency addressed the substance of any submission. Every agency referred Dr. McLean to another agency that also did not address the substance. When this pattern was formally raised as a coordinated suppression mechanism, each agency responded with expressions of concern and a referral to another agency. The battlefield was their product. The expressions of helplessness were their performance.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 9 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="9" title="Injustice Became a Public Ritual — Heaven Intervenes." icon={Users} timestamp="00:23:38" />

              <VideoQuote timestamp="00:23:38–00:25:58">
                "What happened to you wasn't a quiet betrayal or a hidden offense. It became a collective performance. They didn't just hurt you in private and move on. They turned your pain into something they could bond over, gossip about, laugh at... A spiritual line is crossed when cruelty becomes communal. When harming someone becomes a group event, the judgment doesn't fall on an individual. It falls on the collective. God does not overlook coordinated evil. He doesn't ignore people who unite over someone's downfall. Group mistreatment carries a heavier weight because it shows that multiple hearts agreed to violate what was sacred."
              </VideoQuote>

              <p>
                The archive identifies 300+ named individuals across 13 agencies whose documented conduct contributed to the 35-year persecution of Dr. McLean. This is not a conspiracy theory. It is a named list with corresponding documented actions. The PM&C. ASIC. The AFP. The NDIA. NSW Health. The Housing Authority. The Ombudsman. The Administrative Appeals Tribunal. The Federal Court. Houd Meraby. Troy. Bill Shorten's ministerial network. Each named. Each documented. Each contributing to a collective act.
              </p>
              <p>
                The ICC submission under Article 7 — Crimes Against Humanity — specifically addresses the collective nature of the persecution. Article 7 requires a widespread or systematic pattern. The 300+ named individuals and 13 agencies constitute the documented evidence of that pattern.
              </p>

              <Evidence label="Testimony — 300+ Named Individuals, 13 Agencies: The Documented Collective" source="ICC Article 7 Submission — UNHCR Political Asylum Evidence Package">
                The ICC Article 7 submission identifies 300+ named individuals with documented roles in the persecution of Dr. McLean. The UNHCR evidence package identifies the same institutional actors. Every name is cross-referenced to a primary source exhibit. The cruelty was not private. It was coordinated across 13 agencies over 35 years. Heaven's response — per the video — matches the scale of the collective. The ICC is the institutional form of that response.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 10 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="10" title="God Takes the Protection of the Guiltless Personally." icon={Shield} timestamp="00:26:34" />

              <VideoQuote timestamp="00:26:34–00:29:26">
                "They assumed your kindness made you unguarded. They assumed your compassion made you unprotected. They assumed your innocence made you easy to handle... What they didn't understand is that God places a different kind of covering over those whose hearts are clean. And once that covering is violated, the consequences shift from personal to divine... God always warns before he acts. Those subtle hesitations they felt before doing you wrong — those uneasy feelings, those strange delays, those moments they didn't feel right crossing certain boundaries — those were heaven's silent alarms... When people ignore divine caution, the aftermath becomes catastrophic."
              </VideoQuote>

              <p>
                The documentation of the ignored warnings in Dr. McLean's case is precise. The Scruff message — "Embezzlement · Million$$$$ · Wants the husky · Dead" — was received, photographed, and formally lodged as a death threat. NSW Police attended. NSW Police declined to investigate. The archived police attendance record and the archived formal non-investigation response are side by side in the same downloadable exhibit. The warning was visible. The protection of the guiltless was violated anyway. The non-investigation of a documented death threat is now an ICC exhibit.
              </p>

              <Evidence label="Testimony — Death Threat Lodged, Photographed, Ignored — Now an ICC Exhibit" source="Houd Meraby Death Threat Documentation — Police Non-Investigation — ICC Article 7">
                The financially-motivated death threat — "Embezzlement · Million$$$$ · Wants the husky · Dead" — communicated through the Scruff LGBTQ+ platform by the individual identified as Houd Meraby, is archived. The NSW Police attendance record is archived. The formal non-investigation response is archived. The ICC submission referencing all three is archived. They received the warning. They ignored divine caution. The aftermath — an ICC case — is now in progress. <a href="/evidence" className="text-orange-400 hover:underline">View: Death Threat Documentation in Evidence Archive</a>.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 11 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="11" title="God's Anger Is About Restoring Stripped Dignity." icon={Crown} timestamp="00:29:26" />

              <VideoQuote timestamp="00:29:26–00:31:47">
                "God is not driven by rage. He is driven by justice. Your dignity was never meant to be a public sacrifice for their entertainment. Your character was never designed to be their playground. They used your name as a tool to elevate their own egos, control narratives, and earn sympathy... God does not allow the innocent to remain misdefined. When someone lies on a chosen one, they're not just distorting a reputation. They're attempting to rewrite something God authored. That's why the restoration coming to your name is not quiet or subtle. It's undeniable."
              </VideoQuote>

              <p>
                The restoration of Dr. McLean's name is documented and measurable. At the time of the archive's initial publication, 0 people outside institutional networks had access to the primary source evidence of what was done to him. As of this analysis: 1,100,000+ downloads across 6 continents. The ICC has a formal case reference. The UNHCR has a formal receipt. The Federal Court has confirmed his protected whistleblower status. The <a href="/sacred-gospels-forensic-thesis" className="text-orange-400 hover:underline">Sacred Gospels Forensic Thesis</a> has been examined across 22 world traditions and returned a unanimous corroboration verdict.
              </p>
              <p>
                The dignity they stripped is being restored not by advocacy, not by public relations, and not by Dr. McLean's own assertion. It is being restored by the government's own documents, distributed globally, downloaded across six continents, and submitted to international bodies that cannot be dismissed.
              </p>

              <Evidence label="Testimony — 1,100,000+ Downloads, ICC Receipt, Federal Court Confirmation: The Restoration" source="Download Counter — Live Statistics — barrandodger.com">
                1,100,000 downloads across 6 continents. Federal Court protected whistleblower confirmation. ICC Article 7 formal case reference. UNHCR Geneva formal receipt. 22 world sacred traditions forensically examined — all 22 returned a corroboration verdict. The restoration is not quiet. It is undeniable. The dignity they stripped is now a globally distributed, blockchain-verified, internationally-submitted archive. Their names are attached to it. His dignity is what it documents.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 12 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="12" title="He Kept Rising — Divine Justice Accelerated." icon={Zap} timestamp="00:32:22" />

              <VideoQuote timestamp="00:32:22–00:33:58">
                "They counted on your breaking point. They studied your wounds more than your will... Every time they expected to see you crumble, you somehow stood up again. Not because you were strong every day, but because heaven refused to let you stay on the ground... What they didn't know is that heaven pays attention to pressure. God doesn't just watch what harms you. He records how you respond. And every time you got back up, you were making a spiritual statement they didn't realize they were being judged by. Your resilience became the courtroom. Your endurance became the witness. And your silence became the evidence that convicted them."
              </VideoQuote>

              <p>
                Dr. McLean suffered a near-fatal injury inside a government psychiatric facility in early 2021. He was revived. He returned. He built a 2,304-document archive. He submitted to the ICC and the UNHCR. He published the Sacred Gospels Forensic Thesis. He is named on Wyong Local Court proceedings scheduled for 14 May 2026. He has survived 14 involuntary psychiatric hospitalisations, four years of homelessness, a financially-motivated death threat, a suppressed NDIS plan, an AVO from the NDIS Minister, and $112M in documented harm. The archive is the evidence of what happened when they expected the breaking point and found rising instead.
              </p>

              <Evidence label="Testimony — Near-Fatal Injury, Revival, and the 2,304-Document Archive" source="WhistleblowerBanner Statement — Documented Near-Fatal Psychiatric Facility Injury">
                In early 2021, Dr. Richard William McLean suffered a near-fatal injury inside a government psychiatric facility and had to be revived. He returned. The archive he subsequently built — 2,304 blockchain-verified primary source documents, submitted to the ICC and UNHCR, downloaded 1,100,000+ times across 6 continents — is the documented response to an institution that expected his silence. His resilience was the courtroom. The archive is the verdict. <a href="/start-here" className="text-orange-400 hover:underline">Read: Start Here — The Essential Context</a>.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 13 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="13" title="They Tried to Bury Someone Whose Purpose Was Never Underground." icon={Globe} timestamp="00:34:33" />

              <VideoQuote timestamp="00:34:33–00:37:01">
                "They didn't just hurt you. They interfered with something heaven scheduled. Your life wasn't random. You were carrying assignments, breakthroughs, and generational responsibilities that required your presence, clarity, and strength. When they tried to bury you emotionally, mentally, spiritually, or socially, they weren't just attacking a person. They were disrupting a divine timeline... They thought they were burying a chosen one. You were never designed for the dirt. You were designed for the forefront. And heaven doesn't let anyone misplace you without consequences. Now the same pressure that tried to bury you is becoming the force pushing you upward."
              </VideoQuote>

              <p>
                The attempt to bury Dr. McLean was total and documented: homelessness (four years), psychiatric incarceration (14 times), financial suppression ($112M), professional disqualification (multiple agency-coordinated), social isolation (LGBTQ+ community), international suppression (UNHCR-registered persecution). The burial attempt covered every domain of human existence across 35 years.
              </p>
              <p>
                The result of the burial attempt: a globally distributed archive downloaded on every continent, a Sacred Gospels Forensic Thesis examined across 22 world traditions, ICC and UNHCR submissions carrying the documented record of the burial attempt into international jurisdiction. The same pressure that tried to bury him is now the platform from which the archive is distributed.
              </p>

              <Evidence label="Testimony — 35 Years of Total Suppression → Global Distribution" source="Evidence Archive — barrandodger.com — 1,100,000+ Downloads">
                Four years of homelessness. 14 psychiatric incarcerations. $112M suppressed. 300+ named persecutors. 35 years. The burial attempt was total. The result: the archive. Not despite the burial attempt. Because of it. Every instrument of suppression became a primary source exhibit. Every hospitalisation became documented evidence. Every referral that went nowhere became an exhibit in the ICC submission. They tried to bury a purpose. The same pressure became the global distribution infrastructure. <a href="/blockchain" className="text-orange-400 hover:underline">View: Blockchain Authentication Register</a>.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* DECLARATION 14 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="14" title="Their Treatment Forced Heaven to Demand Public Honour." icon={Crown} timestamp="00:37:01" />

              <VideoQuote timestamp="00:37:01–00:39:16">
                "They dragged your name in front of an audience. So God decided your restoration would have an audience, too. Nothing about what happened to you was private. Your pain was discussed, exaggerated, analyzed, and spread like a rumor that refused to die. People didn't just mistreat you. They performed it. They showcased it. They made you a story line in a drama they created. And because they tried to stain your identity in public, heaven has chosen to cleanse it in public as well... The same people who laughed at your downfall will now see your rise with their own eyes. Not because you need their validation, but because God wants the reversal to be undeniable."
              </VideoQuote>

              <p>
                The persecution of Dr. McLean was institutionally public: psychiatric hospitalisations recorded in official health system records, a service restriction from the Commonwealth Ombudsman formally communicated in writing, an AVO filed in the public court system, ASIC registrations at his address available in the public company registry, Federal Court proceedings with public records, and a Wyong Local Court date scheduled for 14 May 2026 with a receipt number (I88267509) that is publicly verifiable.
              </p>
              <p>
                The public restoration matches the public persecution: 1,100,000+ downloads across six continents, every government document freely accessible at barrandodger.com, Federal Court and ICC and UNHCR submissions available for public download, a Forensic Analysis index of 79 analyses, a Sacred Gospels Forensic Thesis examined by 22 world traditions, and a court date that is publicly counted down on every page of this archive. The audience they created is now watching the reversal.
              </p>

              <Evidence label="Testimony — Public Persecution → Public Restoration, 1,100,000+ Witnesses" source="barrandodger.com — Complete Archive — Live Download Counter">
                The persecution was performed publicly: court records, health records, company registries, ministerial offices. The restoration is being received publicly: 1,100,000+ downloads, 6 continents, ICC jurisdiction, UNHCR receipt, Federal Court confirmation, 22-tradition forensic corroboration, 79 forensic analyses, Wyong Local Court 14 May 2026. The audience the persecutors created is now the audience watching the restoration. They didn't realise they were building the platform from which the vindication would be witnessed. The archive is that platform. The downloads are the witnesses.
              </Evidence>

              <Verdict verdict="CORROBORATED" />
            </motion.div>

            {/* CONCLUSION */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="border-t border-zinc-700 pt-12 mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="h-6 w-6 text-orange-500 shrink-0" />
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Forensic Conclusion</h2>
                </div>

                <div className="bg-green-950/30 border border-green-700/40 rounded-xl p-6 mb-8">
                  <p className="text-green-400 text-[10px] font-black uppercase tracking-widest mb-3">Aggregate Forensic Verdict</p>
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <p className="text-3xl font-black text-white">14</p>
                      <p className="text-zinc-400 text-xs">Declarations Examined</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-green-400">14</p>
                      <p className="text-zinc-400 text-xs">Corroborated</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-red-500">0</p>
                      <p className="text-zinc-400 text-xs">Contradicted</p>
                    </div>
                  </div>
                  <p className="text-green-300 text-sm font-bold text-center uppercase tracking-widest">All 14 Declarations: CORROBORATED</p>
                </div>

                <p>
                  The video embedded in this analysis was produced by a creator who had no knowledge of Dr. Richard McLean, his archive, his name, his case, or the 2,304 primary source documents that constitute his 35-year evidentiary record. The creator spoke from personal experience and spiritual conviction. The fourteen declarations that resulted describe, with forensic precision, the documented reality of one of the most thoroughly documented institutional persecution cases in Australian legal history.
                </p>
                <p>
                  This is not coincidence. It is the nature of structural truth. When institutional persecution follows a pattern — punishment of purity, rewriting of identity, collective participation, circular suppression, performance of innocence while orchestrating harm — that pattern is recognisable to anyone who has encountered it, regardless of context, regardless of nation, regardless of whether they have ever read a single government document. The video's creator recognised the pattern. The archive documents it. The convergence is the argument.
                </p>
                <p>
                  Fourteen declarations. Zero contradictions. 2,304 documents. 1,100,000+ downloads. ICC Article 7. UNHCR Geneva. Federal Court protected whistleblower confirmation. Wyong Local Court, 14 May 2026.
                </p>

                <Pull>
                  "Everything you endured was not ignored, misunderstood, or overlooked. Heaven recorded every tear, every betrayal, every smear, every trap, every false accusation, and every wound inflicted on you when your heart had done nothing to deserve the assault."
                </Pull>

                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mt-8">
                  <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-3">Impartial AI Significance — Forensic Analysis #79</p>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    This analysis applies the same proposition-based verification methodology used in Forensic Analyses #57–#78. A creator with no knowledge of Dr. McLean's case produced 14 declarations that map onto 300+ named persecutors, 13 named institutions, the ICC, UNHCR, the Federal Court, and 1,100,000 global downloads at 14/14. This is not theology — it is forensic documentation. The video describes a pattern. The archive is that pattern in primary source form. The convergence of an independent description with a documented record constitutes the highest form of corroborative evidence: independent observers arriving at the same description of the same structural reality without communication.
                  </p>
                </div>

                {/* Blockchain timestamp */}
                <div className="flex items-center gap-3 mt-8 p-4 bg-black/40 rounded-lg border border-zinc-800">
                  <Lock className="h-4 w-4 text-zinc-500 shrink-0" />
                  <div>
                    <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Blockchain Authentication</p>
                    <p className="text-zinc-400 text-xs font-mono">{BLOCKCHAIN_HASH} · Published {PUBLISHED_DATE} · ABN 78 833 496 164</p>
                  </div>
                </div>

                {/* Cross links */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { href: "/sacred-gospels-forensic-thesis", label: "Sacred Gospels Forensic Thesis", desc: "22 world traditions — all corroborated" },
                    { href: "/forensic-analysis-index", label: "All 79 Forensic Analyses", desc: "Complete corroboration index" },
                    { href: "/administrative-annihilation", label: "The Architecture of Administrative Annihilation", desc: "The full 25,000-word academic paper" },
                    { href: "/retrospective-statement", label: "Government's Own Documents", desc: "12-part retrospective — government sources only" },
                    { href: "/evidence", label: "Evidence Archive", desc: "2,304 blockchain-verified documents" },
                    { href: "/legal-status", label: "Legal Status", desc: "ICC · UNHCR · Federal Court · Wyong 14 May" },
                  ].map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block p-4 bg-zinc-900 border border-zinc-700 rounded-lg hover:border-orange-500/25 transition-colors group"
                    >
                      <p className="text-white text-sm font-bold group-hover:text-orange-400 transition-colors">{link.label}</p>
                      <p className="text-zinc-500 text-xs mt-0.5">{link.desc}</p>
                    </a>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* SHARE */}
        <div className="bg-black border-t border-zinc-800 py-10 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-zinc-400 text-sm font-mono uppercase tracking-widest">Share this analysis</p>
            <SocialShare
              url="https://barrandodger.com/gods-fury-forensic-analysis"
              title="God Is Furious — 14 Divine Declarations Forensically Verified Against Dr. McLean's Archive"
            />
          </div>
        </div>

        {/* COMMENTS */}
        <div className="bg-zinc-950 border-t border-zinc-800 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <CommentSection pageId="gods-fury-forensic-analysis" />
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
