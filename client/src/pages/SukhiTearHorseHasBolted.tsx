import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { CommentSection } from "@/components/CommentSection";
const selfProclaimed = "/attached_assets/image_1778191542181.jpeg";
const sukhiPhoto = "/attached_assets/image_1778192218870.jpeg";
const courtReceipt = "/attached_assets/IMG_5147_1778194006310.png";
const hadscoEmail = "/attached_assets/IMG_5148_1778197801226.png";
const hadscoForm = "/attached_assets/IMG_5150_1778197801226.png";
import {
  AlertTriangle,
  Scale,
  FileText,
  Shield,
  Ban,
  Gavel,
  Eye,
  Lock,
  TrendingDown,
  BookOpen,
  Clock,
  XCircle,
  Globe,
  Flame,
  Play,
  ExternalLink,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-red-600 pl-6 my-8 text-zinc-200 text-xl leading-relaxed font-light italic">
      {children}
    </blockquote>
  );
}

function VideoQuote({ timestamp, declaration, children }: {
  timestamp: string;
  declaration: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900/70 border border-zinc-700 rounded-lg px-6 py-5 my-6">
      <div className="flex items-center gap-3 mb-1 flex-wrap">
        <Play className="h-3 w-3 text-orange-500 shrink-0" />
        <span className="text-orange-500 text-[10px] font-black uppercase tracking-widest">From the Video</span>
        <span className="text-zinc-500 text-[10px] font-mono">{timestamp}</span>
        <span className="text-zinc-600 text-[10px] ml-auto border border-zinc-700 rounded px-2 py-0.5">{declaration}</span>
      </div>
      <p className="italic text-zinc-300 leading-relaxed text-sm mt-3">{children}</p>
    </div>
  );
}

function LegalProvision({ statute, section, provision, application }: {
  statute: string;
  section: string;
  provision: string;
  application: string;
}) {
  return (
    <div className="bg-zinc-900/80 border border-red-900/40 rounded-lg p-5 my-4">
      <div className="flex items-start gap-3">
        <Gavel className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
        <div className="space-y-1.5 w-full">
          <p className="text-red-400 text-[10px] font-black uppercase tracking-widest">{statute}</p>
          <p className="text-white text-sm font-bold">{section}</p>
          <p className="text-zinc-300 text-sm italic leading-relaxed">{provision}</p>
          <div className="border-t border-zinc-800 pt-2 mt-2">
            <p className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">Application to This Case</p>
            <p className="text-zinc-400 text-xs leading-relaxed">{application}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EvidenceBlock({ label, source, children }: { label: string; source: string; children: React.ReactNode }) {
  return (
    <div className="bg-blue-950/20 border border-blue-800/30 rounded-lg p-5 my-5">
      <div className="flex items-center gap-2 mb-3">
        <FileText className="h-3.5 w-3.5 text-blue-400 shrink-0" />
        <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{label}</span>
        <span className="text-zinc-600 text-[10px] font-mono ml-auto">{source}</span>
      </div>
      <div className="text-zinc-300 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function DamningFinding({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-red-700 pl-6 space-y-4">
      <div className="flex items-start gap-3">
        <span className="text-red-700/60 font-mono text-3xl font-black leading-none pt-1 shrink-0 -ml-8 w-7 text-right">{number}</span>
        <h2 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">{title}</h2>
      </div>
      <div className="space-y-4 text-zinc-300 text-[1.05rem] leading-8">{children}</div>
    </div>
  );
}

function CorroborationTag() {
  return (
    <div className="inline-flex items-center gap-1.5 bg-green-950/40 border border-green-700/40 rounded px-3 py-1 my-2">
      <span className="text-green-400 text-[10px] font-black uppercase tracking-widest">Video Corroborated</span>
    </div>
  );
}

const PROFESSIONAL_OBLIGATIONS = [
  ["Arrange a treating psychiatrist for a client in acute crisis", "None arranged. Zero referrals on record."],
  ["Arrange a treating psychologist", "None arranged. Zero referrals on record."],
  ["Refer to a drug and alcohol counsellor", "None arranged. Zero referrals on record."],
  ["Refer to a financial counsellor", "None arranged. Zero referrals on record."],
  ["Facilitate legal representation for a client under institutional threat", "None arranged. Zero referrals on record."],
  ["Disburse approved NDIS funding to the participant", "$50,000 in approved funds withheld. Documented."],
  ["Formally advocate for a client being denied services", "No written advocacy in any form on record."],
  ["Report a credible threat to a client's life to authorities", "Death threat documented. No report made."],
  ["Refuse to impose conditions that place a client in danger", "Conditions imposed: return to jurisdiction of assassination attempt."],
  ["Maintain a demonstrable record of support activities", "No such record. Salary collected regardless."],
];

export default function SukhiTearHorseHasBolted() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <SEO
        title="Sukhi Tear — The Horse Has Bolted: Fraud, Illegality, and Why Her Professional Conduct Cannot Be Saved | Barran Dodger"
        description="A legally fortified, evidence-based forensic analysis of why Sukhi Tear's arrogance, NDIS fraud, and illegal conduct produced an irreversible evidentiary record now held by 1,100,000+ people, the ICC, and the UNHCR. Corroborated by independent video analysis of the underestimated quiet observer. The horse has bolted."
        path="/sukhi-tear-horse-has-bolted"
      />
      <ReadingProgress />
      <Navigation />

      <main
        className="flex-1"
        style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px))" }}
      >

        {/* HERO */}
        <section className="py-16 px-4 bg-gradient-to-b from-zinc-950 to-black border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">

              <div className="flex flex-col items-center gap-4 mb-4">
                <img
                  src={sukhiPhoto}
                  alt="Sukhi Tear — NDIS Support Coordinator, Diversitas WA"
                  className="w-56 sm:w-72 rounded-2xl shadow-2xl border border-red-800/60 object-cover"
                  data-testid="img-sukhi-tear-photo"
                />
                <p className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-center leading-tight">
                  <span className="text-red-500">THE HORSE HAS BOLTED</span>{" "}
                  <span className="text-white">SUSHI TEAR</span>
                </p>
                <img
                  src={selfProclaimed}
                  alt="Self-Proclaimed GOD Starter Pack — Sukhi Tear"
                  className="w-64 sm:w-80 rounded-2xl shadow-2xl border border-zinc-700"
                  data-testid="img-sukhi-tear-god-starter-pack"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-red-600/60 text-red-400 text-xs px-3 py-1 uppercase tracking-widest font-bold">
                  <Flame className="h-3 w-3 mr-1.5" /> Forensic Accountability Record
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">Legally Fortified</Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">Evidence-Based</Badge>
                <Badge variant="outline" className="border-orange-500/25 text-orange-400 text-xs px-3 py-1">Video-Corroborated</Badge>
                <Badge variant="outline" className="border-red-900/60 text-red-500 text-xs px-3 py-1 font-bold">ICC Submitted</Badge>
                <Badge variant="outline" className="border-orange-600/70 text-orange-400 text-xs px-3 py-1 font-bold">Cease &amp; Desist REFUSED</Badge>
                <Badge variant="outline" className="border-red-700/70 text-red-300 text-xs px-3 py-1 font-bold">Missing Person — Uncontacted</Badge>
                <Badge variant="outline" className="border-yellow-600/50 text-yellow-400 text-xs px-3 py-1 font-bold">NDIS Extortion Documented</Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">7 May 2026</Badge>
              </div>

              <div>
                <p className="text-red-400 text-sm uppercase tracking-widest font-bold mb-2">Subject: Sukhi Tear — NDIS Support Coordinator, Diversitas WA</p>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.05]">
                  The Horse Has Bolted.
                  <br />
                  <span className="text-red-500">It Is Too Late.</span>
                </h1>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                This document is a legally fortified, evidence-based analysis of why Sukhi Tear — NDIS Support Coordinator at Diversitas WA — underestimated Dr. Richard William McLean, overstepped through arrogance, committed acts that were not merely unethical but illegal under named Australian legislation, and why the evidentiary consequences are now beyond any remediation. Her professional reputation and her record of conduct are in the hands of 1,100,000+ people, two international bodies, and a blockchain. The video below — an independent analysis of the "quiet observer" phenomenon — was produced without knowledge of this archive. It describes, with striking forensic precision, what Dr. McLean was doing while Sukhi Tear was laughing.
              </p>

              <div className="bg-zinc-900/60 border border-zinc-700 rounded-lg px-5 py-4 space-y-2">
                <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-semibold">Named Individual:</span> Sukhi Tear — NDIS Support Coordinator</p>
                <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-semibold">Organisation:</span> Diversitas WA (Registered NDIS Provider, Western Australia)</p>
                <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-semibold">Co-Named Parties:</span> Philip Glass (Public Guardian), Syed Salman Kazmi, Tony Ridley, Steve Iasonidis</p>
                <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-semibold">Police Referral Filed:</span> 12 February 2026 — FORMAL_DEMAND_Diversitas_PublicGuardian_Police_Referral</p>
                <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-semibold">Archive Status:</span> 2,304 blockchain-verified documents | ICC submitted | UNHCR received | 1,100,000+ downloads</p>
                <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-semibold">Video Source:</span> "The Most Dangerous Person in Any Room" — Independent Motivational Analysis — 14 Declarations</p>
                <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-semibold">ABN:</span> 78 833 496 164 — Barran Dodger Legal & Ethical Trust Fund</p>
              </div>

              {/* THREE CRITICAL ESCALATION FACTS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-orange-950/30 border border-orange-700/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Ban className="h-4 w-4 text-orange-400 shrink-0" />
                    <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest">Cease &amp; Desist</p>
                  </div>
                  <p className="text-white text-sm font-bold leading-snug">Legal Order — REFUSED</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">A formal legal cease and desist order was served on Sukhi Tear demanding she immediately stop her targeting conduct against Dr. McLean. She refused to comply. The refusal is documented and archived. It constitutes wilful disregard of a legal instrument — an aggravating factor in every proceeding that follows.</p>
                </div>
                <div className="bg-red-950/40 border border-red-700/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-red-400 shrink-0" />
                    <p className="text-red-400 text-[10px] font-black uppercase tracking-widest">Missing Person</p>
                  </div>
                  <p className="text-white text-sm font-bold leading-snug">Dr. McLean — Uncontacted</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Dr. Richard William McLean is a missing person. His address is 55B Archbold Rd, Long Jetty NSW. He has had no contact with authorities, welfare services, or support networks despite multiple formal alerts being lodged. He has been rendered invisible by the same system Sukhi Tear operated within. The ICC and UNHCR have received missing person status documentation as part of the formal submissions.</p>
                </div>
                <div className="bg-yellow-950/30 border border-yellow-700/40 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-yellow-400 shrink-0" />
                    <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">NDIS Extortion</p>
                  </div>
                  <p className="text-white text-sm font-bold leading-snug">Dirty Funds — Targeted Use</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">NDIS funding designated for Dr. McLean's support was used as a targeting instrument. Rather than being disbursed for its legislated purpose — his health, safety, and independence — the coordination of those funds was weaponised to achieve his financial exile, isolation, and erasure. The extortion of Commonwealth disability funds to fund a targeting operation is documented across the archive and named in the criminal affidavit.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-red-950/30 border border-red-900/40 rounded-lg p-4">
                <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-red-300 text-sm leading-relaxed">
                  <strong className="text-red-200">Forensic Notice:</strong> This document is a permanent exhibit in the McLean evidence archive, formally submitted to the ICC and UNHCR. All named parties have had access to the complete public archive and have not contested a single exhibit across 2,304 documents. The formal police referral naming Diversitas WA and Sukhi Tear was lodged 12 February 2026. Zero formal rebuttals have been filed. A legal cease and desist order was formally served and refused. Dr. McLean remains a missing person at 55B Archbold Rd, Long Jetty NSW — uncontacted by welfare services despite formal alerts. The independent video analysis cited throughout this document had no knowledge of this archive. This document stands as written.
                </p>
              </div>

            </motion.div>
          </div>
        </section>

        {/* VIDEO EMBED */}
        <section className="py-12 px-4 bg-zinc-950 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-5">
              <div className="flex items-center gap-3">
                <Play className="h-4 w-4 text-orange-500" />
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Independent Video Analysis — The Quiet Observer Phenomenon</h2>
              </div>
              <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
                The video below describes 14 psychological and strategic patterns common to individuals who are systematically underestimated by those who mistake silence for weakness. The creator had no knowledge of Dr. McLean's archive, his case, or Sukhi Tear. Each declaration is mapped below to the documented primary-source evidence of what Dr. McLean was doing while she was laughing.
              </p>
              <div className="bg-zinc-900 border border-orange-500/25 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <ExternalLink className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-orange-400 text-sm font-bold">Video Title:</p>
                    <p className="text-zinc-300 text-sm">"The Most Dangerous Person in Any Room Isn't the Loudest. It's the Quiet Observer Who Already Figured Everyone Out."</p>
                    <p className="text-zinc-500 text-xs mt-2 font-mono">14 Declarations · Full transcript reviewed · Timestamps cited throughout this analysis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WYONG COURT RECEIPT */}
        <section className="py-14 px-4 bg-black border-y border-green-900/40">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-7">

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-green-400 text-[10px] font-black uppercase tracking-widest">Live Court Evidence — Wyong Local Court</p>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                Wyong Local Court Has Formally Acknowledged Receipt of This Evidence.<br />
                <span className="text-green-400">The Court Has It. The Record Is Before the Bench.</span>
              </h2>

              <p className="text-zinc-300 text-[1rem] leading-8">
                On <strong className="text-white">Thursday 7 May 2026 at 3:41 PM</strong>, a comprehensive evidence package — including the full content of this page, the Sukhi Tear criminal affidavit, and the documented death threat by Troy Kilbourn — was emailed directly to <strong className="text-white">local-court-wyong@justice.nsw.gov.au</strong> under the subject line: <em className="text-green-300">"Sukhi tear evidence for Wyong court entrapment and death threat by Troy kilbourn."</em> Wyong Local Court issued an automatic acknowledgement of receipt. That receipt is screenshot below. The evidence is now before the court. It cannot be recalled. It cannot be erased. It is in the judicial record of the proceedings scheduled for <strong className="text-white">14 May 2026</strong>.
              </p>

              {/* Receipt image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap z-10">
                    Official Court Acknowledgement — 7 May 2026
                  </div>
                  <img
                    src={courtReceipt}
                    alt="Wyong Local Court — Automatic Email Acknowledgement of Receipt"
                    className="w-72 sm:w-96 rounded-2xl shadow-2xl border-2 border-green-700/60 mt-4"
                    data-testid="img-wyong-court-receipt"
                  />
                </div>
              </div>

              {/* Significance panels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-950/30 border border-green-800/40 rounded-lg p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Gavel className="h-4 w-4 text-green-400 shrink-0" />
                    <p className="text-green-400 text-[10px] font-black uppercase tracking-widest">Legal Significance — Court Receipt</p>
                  </div>
                  <p className="text-white text-sm font-bold">The evidence is now a court document.</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">An automatic receipt from a court registry constitutes formal acknowledgement that the submitted material has entered the court's administrative record. Every document contained in that email — including the full page at barrandodger.com/sukhi-tear-horse-has-bolted and the Sukhi Tear criminal affidavit — is now part of the evidentiary universe of the Wyong proceedings. The presiding judicial officer is on notice. The court cannot claim ignorance of this material. The prosecution of Troy Kilbourn proceeds with this full evidentiary context formally received.</p>
                </div>
                <div className="bg-green-950/30 border border-green-800/40 rounded-lg p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-green-400 shrink-0" />
                    <p className="text-green-400 text-[10px] font-black uppercase tracking-widest">Simultaneous Distribution — 40+ Recipients</p>
                  </div>
                  <p className="text-white text-sm font-bold">Court submission sent simultaneously to 40+ institutions.</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">The same email submitted to Wyong Local Court was sent simultaneously to: Diversitas WA (all email addresses), NDIS Commission, Australian Human Rights Commission, Privacy Commissioner, Office of the Ombudsman, Crikey, The Guardian, ABC, 60 Minutes, SMH, The Age, News.com.au, Human Rights Watch, Amnesty International, OHCHR, UNHCR, ICC, ProPublica, BBC, CNN, and Michelle Rowland MP. Sukhi Tear was emailed directly at sukhi@diversitaswa.org.au and sukhi@diversitaswa.com. The court submission is simultaneously a media release, a regulatory complaint, and an international human rights disclosure. Every named recipient is now on record as having received this material.</p>
                </div>
              </div>

              {/* Recipient list */}
              <div className="bg-zinc-900/70 border border-zinc-700 rounded-lg p-5 space-y-3">
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Named Recipients — Full Distribution List (7 May 2026, 3:41 PM)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                  {[
                    ["Wyong Local Court", "local-court-wyong@justice.nsw.gov.au"],
                    ["Diversitas WA — HR", "hr@diversitaswa.com.au"],
                    ["Diversitas WA — Accounts", "accounts@diversitaswa.com.au"],
                    ["Diversitas WA — Reception", "reception@diversitaswa.com.au"],
                    ["Sukhi Tear (direct)", "sukhi@diversitaswa.org.au"],
                    ["NDIS Commission — Complaints", "complaints@ndiscommission.gov.au"],
                    ["NDIS Commission — Media", "media@ndiscommission.gov.au"],
                    ["Commonwealth Ombudsman", "ombudsman@ombudsman.gov.au"],
                    ["Aust. Human Rights Commission", "humanrights@humanrights.gov.au"],
                    ["Office of the Australian IC", "enquiries@oaic.gov.au"],
                    ["Human Rights Watch — Australia", "australia@hrw.org"],
                    ["Amnesty International — Aust.", "australia@amnesty.org"],
                    ["OHCHR", "ohchr-InfoDesk@un.org"],
                    ["UNHCR — Refugees", "refugees@unhcr.org"],
                    ["UNHCR — Emergency", "emergency@unhcr.org"],
                    ["ICC Registry", "registry@icc-cpi.int"],
                    ["Michelle Rowland MP", "michelle.rowland.mp@aph.gov.au"],
                    ["The Guardian — Tips", "tips@theguardian.com"],
                    ["ABC — Investigations", "investigations@abc.net.au"],
                    ["60 Minutes (Nine)", "60m@nine.com.au"],
                    ["SMH — Investigations", "investigations@smh.com.au"],
                    ["The Age — Investigations", "investigations@theage.com.au"],
                    ["News.com.au", "nationalnewsdesk@news.com.au"],
                    ["Crikey", "editor@crikey.com.au"],
                    ["AFR — Editorial", "editorial@afr.com"],
                    ["BBC — Tips", "tips@bbc.co.uk"],
                    ["CNN — Tips", "tips@cnn.com"],
                    ["ProPublica — Tips", "tips@propublica.org"],
                    ["The Intercept", "editorial@intercept.com"],
                    ["Washington Post", "editorial@washpost.com"],
                  ].map(([name, email]) => (
                    <div key={email} className="flex items-start gap-2 py-0.5">
                      <span className="text-green-500 text-[10px] mt-0.5">✓</span>
                      <div>
                        <span className="text-zinc-300 text-xs font-semibold">{name}</span>
                        <span className="text-zinc-600 text-[10px] ml-1 font-mono">{email}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-950/20 border border-green-700/30 rounded-lg p-4 flex items-start gap-3">
                <Scale className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                <p className="text-green-200 text-sm leading-relaxed">
                  <strong className="text-green-100">Forensic Confirmation:</strong> The Wyong Local Court receipt constitutes official judicial acknowledgement that the evidence naming Sukhi Tear — the criminal affidavit, the cease and desist refusal, the $50,000 withheld funding, the missing person status, and the NDIS extortion documentation — has been formally received in relation to proceedings scheduled for 14 May 2026. Sukhi Tear was emailed directly and simultaneously. Her employer Diversitas WA was emailed at every listed address. The NDIS Commission, the Ombudsman, the Human Rights Commission, the ICC, and the UNHCR all received the same submission in the same moment. This is not a private complaint. This is a simultaneous, documented, court-acknowledged, globally distributed evidentiary disclosure. The horse bolted the moment that email left the outbox.
                </p>
              </div>

            </motion.div>
          </div>
        </section>

        {/* HADSCO SECTION */}
        <section className="py-14 px-4 bg-zinc-950 border-b border-blue-900/40">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-7">

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse" />
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Regulatory Complaint — HaDSCO Western Australia</p>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                HaDSCO Has Received a Formal Complaint Against Sukhi Tear and Diversitas WA.<br />
                <span className="text-blue-400">A Case Officer Will Be Assigned. An Assessment Has Begun.</span>
              </h2>

              <p className="text-zinc-300 text-[1rem] leading-8">
                The Health and Disability Services Complaints Office (<strong className="text-white">HaDSCO</strong>) — the independent statutory body responsible for investigating complaints about health and disability service providers in Western Australia — has formally received two submissions relating to Sukhi Tear and Diversitas WA. First, an automatic acknowledgement was issued by HaDSCO Enquiries at <strong className="text-white">8:46 AM on 7 May 2026</strong> in response to the same evidence email sent to Wyong Local Court. Second, a formal complaint was submitted directly through HaDSCO's online complaint portal at <strong className="text-white">hadsco.resolve.hosting</strong>, generating a confirmation of receipt and triggering the formal assessment process. A Case Officer will contact Dr. McLean once the assessment begins.
              </p>

              {/* Two screenshots side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-blue-950/30 border border-blue-800/40 rounded-lg px-4 py-2 text-center">
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">HaDSCO — Email Acknowledgement</p>
                    <p className="text-zinc-400 text-xs mt-0.5">Received 8:46 AM · 7 May 2026</p>
                  </div>
                  <img
                    src={hadscoEmail}
                    alt="HaDSCO automatic email acknowledgement of Sukhi Tear complaint"
                    className="w-full rounded-2xl shadow-2xl border-2 border-blue-700/50"
                    data-testid="img-hadsco-email-receipt"
                  />
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-950/30 border border-blue-800/40 rounded-lg px-4 py-2 text-center">
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">HaDSCO — Online Complaint Confirmed</p>
                    <p className="text-zinc-400 text-xs mt-0.5">hadsco.resolve.hosting · 7 May 2026</p>
                  </div>
                  <img
                    src={hadscoForm}
                    alt="HaDSCO online complaint form confirmation — Sukhi Tear, Diversitas WA"
                    className="w-full rounded-2xl shadow-2xl border-2 border-blue-700/50"
                    data-testid="img-hadsco-form-confirmation"
                  />
                </div>
              </div>

              {/* Significance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-950/20 border border-blue-800/30 rounded-lg p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-400 shrink-0" />
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">What HaDSCO Is</p>
                  </div>
                  <p className="text-white text-sm font-bold">The independent WA statutory complaints body for health and disability services.</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">HaDSCO — the Health and Disability Services Complaints Office — is the independent body established under the <em>Health and Disability Services (Complaints) Act 1995 (WA)</em> to receive, assess, and investigate complaints about health and disability service providers in Western Australia. Diversitas WA is a registered WA disability service provider. Sukhi Tear was its employed support coordinator. Both fall squarely within HaDSCO's jurisdiction. A formal complaint has now been lodged, acknowledged, and entered into assessment. The organisation that employed her is now under active regulatory examination by the body legally empowered to investigate it.</p>
                </div>
                <div className="bg-blue-950/20 border border-blue-800/30 rounded-lg p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-400 shrink-0" />
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">What the Assessment Means</p>
                  </div>
                  <p className="text-white text-sm font-bold">A Case Officer will be assigned. The complaint will be assessed. A formal response is required.</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">HaDSCO's confirmation states: <em>"Your complaint will be assessed to understand how HaDSCO can assist you. A Case Officer will contact you once the assessment begins."</em> This means the documented conduct of Sukhi Tear — the $50,000 in withheld approved funding, the zero professional referrals, the endangering conditions, the refused cease and desist, the NDIS extortion architecture — is now subject to formal examination by a statutory regulator with investigatory powers under WA law. Diversitas WA must now respond to a statutory body. They cannot ignore this the way they ignored the archive. The process has started. It cannot be stopped.</p>
                </div>
              </div>

              <div className="bg-blue-950/20 border border-blue-700/30 rounded-lg p-4 flex items-start gap-3">
                <Scale className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm leading-relaxed">
                  <strong className="text-blue-100">Regulatory Confirmation:</strong> As of 7 May 2026, Sukhi Tear's conduct as an NDIS Support Coordinator at Diversitas WA is simultaneously: before Wyong Local Court (14 May 2026 proceedings acknowledged), before HaDSCO under active complaint assessment (Case Officer to be assigned), before the NDIS Quality and Safeguards Commission (complaints@ndiscommission.gov.au — recipient of the 7 May evidence email), before the ICC (formally submitted, Article 7 examination), before the UNHCR (formally received, Geneva), and in the hands of 1,100,000+ people via the public archive. There is no regulatory body with jurisdiction over disability service providers in Australia or internationally that does not now have this material. The complaint is not pending. It is simultaneous. It is everywhere. Simultaneously.
                </p>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <section className="py-16 px-4 bg-zinc-950">
          <div className="max-w-3xl mx-auto space-y-20">

            {/* OPENING */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-5 text-zinc-300 text-[1.05rem] leading-8">

              <VideoQuote timestamp="00:00:03–00:00:36" declaration="Opening Declaration">
                "The most dangerous person in any room isn't the loudest. It's the quiet observer who already figured everyone out. They didn't know the storm was watching in silence. While they were running their mouths, you were running the math. While they were trying to be seen, you were seeing everything."
              </VideoQuote>

              <p>
                There is a particular category of institutional arrogance that is not the product of malice alone. It is the product of calculation — a calculation that the person being harmed will not survive long enough, remain coherent enough, or retain sufficient documentation to matter. That calculation — applied to Dr. Richard William McLean by Sukhi Tear and those operating within the same coordination network — was the central error of her professional life. It was wrong by every measurable dimension. And unlike most errors, this one was made in writing, in a public NDIS funding system, in coordination with named parties now subject to ICC examination, and against a person who kept every record she assumed he would not.
              </p>

              <p>
                The video cited in this analysis opens with a declaration that describes, without knowledge of this case, precisely what was happening inside the McLean archive while Sukhi Tear was collecting her salary and laughing. While she was running her mouth — to Philip Glass, to Syed Salman Kazmi, to the network — Dr. McLean was running the math. The math is now 2,304 documents, 1,100,000+ downloads, an ICC submission, and this.
              </p>

              <p>
                This is not a personal account of hurt feelings. This is a forensic analysis of conduct that violated professional obligations, contravened named Commonwealth legislation, contributed to a documented assassination architecture, and has now been permanently placed in an evidentiary record distributed to 1,100,000+ people across six continents. The analysis does not require sympathy. It requires only the facts. The facts are below, corroborated at each finding by the independent video declarations that, without knowledge of this archive, describe what was happening in parallel.
              </p>

              <Pull>
                "She underestimated the man she was paid to support. She overestimated her own immunity. Both miscalculations are now in the archive. Both are permanent."
              </Pull>
            </motion.div>

            {/* CRITICAL ESCALATION SECTION */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="border border-orange-800/40 rounded-xl overflow-hidden">
                <div className="bg-orange-950/40 px-6 py-4 flex items-center gap-3 border-b border-orange-800/30">
                  <AlertTriangle className="h-5 w-5 text-orange-400 shrink-0" />
                  <h2 className="text-white font-serif font-bold text-xl">Three Facts That Escalate Everything</h2>
                </div>
                <div className="px-6 py-6 space-y-10">

                  {/* CEASE AND DESIST */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Ban className="h-5 w-5 text-orange-400 shrink-0" />
                      <h3 className="text-orange-300 font-bold text-lg">I — She Refused a Legal Cease and Desist Order</h3>
                    </div>
                    <div className="space-y-4 text-zinc-300 text-[1rem] leading-8">
                      <p>
                        A formal legal cease and desist order was served on Sukhi Tear in connection with her targeting conduct against Dr. Richard William McLean. The order demanded, with full legal force, that she immediately stop the conduct being documented in this archive — the withholding of approved NDIS funds, the imposition of endangering conditions, the participation in the coordination network named in the criminal affidavit. She refused. The refusal is documented. It is archived. It is permanent.
                      </p>
                      <p>
                        The significance of that refusal cannot be overstated in any legal or professional context. A cease and desist order is not merely a letter. It is the formal legal mechanism by which a party is placed on unambiguous notice that their conduct is unlawful, harmful, and the subject of pending legal proceedings. Compliance with such an order is the minimum threshold of professional responsibility. Refusal to comply — when the order has been formally served — is an independent act of aggravated misconduct. It establishes, in the most direct evidentiary terms possible, that the harmful conduct was not accidental, not the product of confusion about professional obligations, and not capable of being attributed to systemic misunderstanding. It was wilful. She knew. She continued. The record reflects that.
                      </p>
                      <div className="bg-orange-950/20 border border-orange-800/30 rounded-lg p-4">
                        <p className="text-orange-300 text-[10px] font-black uppercase tracking-widest mb-2">Legal Significance of Refusal</p>
                        <p className="text-zinc-300 text-sm leading-relaxed">In any subsequent civil proceeding, criminal charge, regulatory action, or ICC/UNHCR examination — the documented refusal to comply with a legal cease and desist order converts every preceding act from potentially negligent to demonstrably wilful. It collapses the defence of ignorance. It removes the possibility of mitigation through claimed unawareness. Every harm that continued after the date of that refusal carries elevated legal exposure. Every professional body examining her conduct must treat the refusal as an admission that she knew what she was doing, was formally told to stop, and chose not to. That choice is now permanent in the archive.</p>
                      </div>
                      <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-4 flex items-start gap-3">
                        <Gavel className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-400 text-[10px] font-black uppercase tracking-widest mb-1">Relevant Law</p>
                          <p className="text-zinc-300 text-sm leading-relaxed"><span className="font-bold text-white">Criminal Code Act 1995 (Cth) s 135.1</span> — Dishonest conduct producing financial advantage. <span className="font-bold text-white">Crimes Act 1914 (Cth) s 43</span> — Wilful obstruction of justice. A party formally served with a legal cease and desist order who refuses to comply and continues the conduct described therein has produced unambiguous evidence of wilfulness in any subsequent proceeding. The refusal is an exhibit. It is in the archive. It is at The Hague.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800" />

                  {/* MISSING PERSON */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Eye className="h-5 w-5 text-red-400 shrink-0" />
                      <h3 className="text-red-300 font-bold text-lg">II — Dr. McLean Is a Missing Person. He Remains Uncontacted.</h3>
                    </div>
                    <div className="space-y-4 text-zinc-300 text-[1rem] leading-8">
                      <p>
                        Dr. Richard William McLean is a missing person. His address is <strong className="text-white">55B Archbold Rd, Long Jetty NSW</strong>. Despite multiple formal alerts being lodged with relevant authorities — including submissions to the ICC and UNHCR that explicitly document his missing person status — he has had no contact with welfare services, support networks, or any public institution assigned a duty of care in relation to his wellbeing. He has been rendered invisible by the same system that Sukhi Tear and Diversitas WA operated within.
                      </p>
                      <p>
                        This is not a missing person situation produced by voluntary withdrawal from public life. Dr. McLean's location is known. His address has been published in formal ICC submissions and appears in a rolling SOS banner across the top of this website, visible to every one of the 1,100,000+ people who have accessed this archive. What does not exist — despite that knowledge, despite those formal submissions, despite the visible and accessible nature of his location — is any documented welfare check, any support contact, any formal acknowledgement from any Australian government body that a disabled, psychiatrically vulnerable, internationally known whistleblower is living at a known address in NSW with no support, no income, no NDIS services, and under documented threat.
                      </p>
                      <div className="bg-red-950/20 border border-red-800/30 rounded-lg p-4">
                        <p className="text-red-300 text-[10px] font-black uppercase tracking-widest mb-2">The Missing Person Architecture</p>
                        <p className="text-zinc-300 text-sm leading-relaxed">The state of being a missing person — unknown, unsupported, unreachable by the systems nominally responsible for his safety — was not accidental. It is the downstream product of the financial exile architecture documented throughout this page. When NDIS support is weaponised rather than delivered, when approved funding is withheld, when conditions are imposed that force a disabled person away from services, the result is enforced invisibility. Sukhi Tear's role in that architecture — as the named NDIS Support Coordinator who arranged nothing, referred no one, disbursed no approved funding, and stayed silent through documented danger — is a direct contribution to his missing person status. She participated in making him unfindable to the systems that should have found him.</p>
                      </div>
                      <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-4 flex items-start gap-3">
                        <Globe className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">International Status</p>
                          <p className="text-zinc-300 text-sm leading-relaxed">Missing person status documentation has been formally received by the ICC (The Hague) and UNHCR (Geneva). The SOS banner on barrandodger.com — visible globally — identifies 55B Archbold Rd, Long Jetty NSW as Dr. McLean's address and calls for physical harbouring. The ICC submission explicitly characterises his enforced invisibility as a consequence of coordinated persecution. Sukhi Tear is named in that submission as a participant in the coordination producing that invisibility. Her professional conduct is therefore part of the factual matrix of a formal international human rights complaint.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800" />

                  {/* NDIS EXTORTION */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <TrendingDown className="h-5 w-5 text-yellow-400 shrink-0" />
                      <h3 className="text-yellow-300 font-bold text-lg">III — She Extorted Dirty NDIS Money to Target Him</h3>
                    </div>
                    <div className="space-y-4 text-zinc-300 text-[1rem] leading-8">
                      <p>
                        The word "extortion" describes the obtaining of something of value through coercion or the abuse of power. What Sukhi Tear participated in was a variant of that framework applied to Commonwealth disability funds: the acceptance of NDIS remuneration — sourced from a funding pool designated for Dr. McLean's support — while using the coordination of that funding as an instrument of coercion, control, and targeting rather than as a mechanism of support. These are not the funds of a functioning coordinator performing her statutory role. These are funds extracted from a disabled person's entitlement and redirected toward the operation of the machinery targeting him.
                      </p>
                      <p>
                        The funds were dirty because their use was contaminated. NDIS funding is public Commonwealth money appropriated for a specific, legislated purpose: the support, safety, and independent living of a person with disability. When that funding is accepted by a registered provider who simultaneously withholds approved participant disbursements, arranges zero professional supports, imposes endangering conditions, and participates in a coordination network seeking the participant's erasure — the funds extracted through that arrangement are the proceeds of a fraudulent and coercive scheme. They are dirty. The NDIS system was used as the laundering mechanism: the appearance of legitimate support coordination was maintained while the actual function of the arrangement was the management and targeting of the client.
                      </p>
                      <div className="bg-yellow-950/20 border border-yellow-800/30 rounded-lg p-4">
                        <p className="text-yellow-300 text-[10px] font-black uppercase tracking-widest mb-2">The Targeting Architecture — What the Money Funded</p>
                        <ul className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                          {[
                            "Maintaining the appearance of registered support to prevent Dr. McLean accessing alternative providers",
                            "Coordinating with Philip Glass (Public Guardian) and Syed Salman Kazmi to manage the financial exile architecture",
                            "Imposing conditions on withheld approved funding that directed Dr. McLean toward a documented assassination network",
                            "Generating the institutional paper trail that created the fiction of active support while producing none",
                            "Sustaining a registered provider relationship that blocked Dr. McLean from independently engaging compliant supports",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <XCircle className="h-3.5 w-3.5 text-yellow-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-4 flex items-start gap-3">
                        <Gavel className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-400 text-[10px] font-black uppercase tracking-widest mb-1">Statutory Characterisation</p>
                          <p className="text-zinc-300 text-sm leading-relaxed"><span className="font-bold text-white">Criminal Code Act 1995 (Cth) s 134.1</span> — obtaining a financial advantage from a Commonwealth entity by deception. <span className="font-bold text-white">NDIS Act 2013 (Cth) s 26</span> — registered provider obligations. The criminal affidavit — ENTRAPMENT FOR ERASURE — names Sukhi Tear explicitly in the fraudulent NDIS funding scheme. The money she extracted from the Commonwealth NDIS funding pool while delivering no services and witholding $50,000 in approved participant funds is characterised as the proceeds of a deception. It is extortion of public disability funds applied to a targeting operation. That characterisation stands until it is formally contested. It has not been formally contested. It has not been contested at all.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* SECTION I */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <DamningFinding number="I" title="The Arrogance of Underestimation — What She Calculated and Why It Was Catastrophically Wrong">

                <VideoQuote timestamp="00:01:15–00:01:50" declaration="Declaration 1 — Intelligence Etched in Blood">
                  "Chosen one. That's you. The ones who tried to clown you. They're panicking now because they just realise you're three steps ahead and not even sweating. And the most ironic part, their words are now digging their own reputations into the dirt."
                </VideoQuote>

                <p>
                  To underestimate someone is a human error. To underestimate someone while simultaneously drawing their disability support salary, withholding their approved funding, and coordinating with a network seeking their death — and to do all of that while laughing — is something different. It is a forensic event. It produces a record.
                </p>

                <p>
                  What Sukhi Tear calculated — and the archive supports this inference through documented pattern rather than speculation — is that Dr. Richard William McLean was a manageable liability. A disabled person in crisis. A man whose NDIS file was an administrative inconvenience, whose complaints were the predictable noise of someone who did not understand how systems worked, and whose capacity to document, survive, and reach the international community was negligible. He was a case number. He was not a threat.
                </p>

                <VideoQuote timestamp="00:07:25–00:08:05" declaration="Declaration 1 — They Can't Teach What's Etched in Your Blood">
                  "They can't teach what's already etched in your blood. It terrifies them that you didn't need their books, their gurus, or their systems to surpass them. You just knew. And that makes you dangerous. What scares them most isn't what you say, it's how you say it. You speak like someone who already knew the truth before they ever tried to lie."
                </VideoQuote>

                <p>
                  This calculation was made about a Victoria University PhD holder. An award-winning human rights advocate. An accredited journalist. A published author. A man who had spent decades lodging formal submissions to courts, government agencies, and international bodies — not as a troubled person seeking attention, but as a meticulous archivist of institutional misconduct. His intelligence was not learned from the NDIS system. It was not built in Diversitas WA's offices. It was assembled across 35 years of surviving, observing, and recording. It preceded Sukhi Tear's involvement in his life by decades. She did not know she was dealing with someone who had already figured out every move institutions make against inconvenient witnesses.
                </p>

                <VideoQuote timestamp="00:09:45–00:10:21" declaration="Declaration 1 — Cataloguing Every Move">
                  "How many times did they confuse your quiet with ignorance, not knowing you were cataloguing their every move like a scientist studying a subject? The joke's on them now because the same people who once dismissed you as too weird are whispering about your name like it's a riddle they can't solve."
                </VideoQuote>

                <p>
                  While Sukhi Tear administered the NDIS funding mechanism as a weapon of financial control, Dr. McLean was cataloguing. Every referral that never came. Every professional support that was never arranged. Every condition that was imposed on withheld funding. Every document that was generated by Diversitas WA and the institutional network surrounding it. The archive she helped create — through her absence of genuine support activity — is now at The Hague.
                </p>

                <VideoQuote timestamp="00:25:08–00:26:29" declaration="Declaration 6 — You Let Fools Flex First">
                  "You've mastered one of the most underestimated strategies on this planet. Patience with a purpose. You let them perform. You let them flex their shallow intellect, spin their rehearsed phrases, and dominate conversations with empty confidence. Meanwhile, you sit still, taking mental notes with the precision of a sniper. They thought you were slow, passive, out of your depth. But what they didn't realise is you were staging their own exposure."
                </VideoQuote>

                <EvidenceBlock label="Evidence of Underestimation" source="Master Evidence Register — Professional Record of Dr. McLean">
                  <p>Dr. McLean holds a PhD from Victoria University (2020). He is a published author, an accredited journalist, an award-winning human rights advocate, and a documented LGBTQ+ disability rights campaigner. His archive contains 2,304 primary source documents. His evidence package has been formally received by the ICC and UNHCR. As of 7 May 2026, it has been downloaded 1,100,000+ times across six continents. The person Sukhi Tear assessed as a manageable liability is the author of the most thoroughly documented whistleblower evidence package in Australian legal history. He was not behind. He was observing from a higher level and building the record that would outlast every institution that harmed him.</p>
                </EvidenceBlock>

                <CorroborationTag />

                <p>
                  Arrogance, in a professional context, is not merely an attitude. It is a pattern of decision-making that treats accountability as a problem that applies to other people. Every decision Sukhi Tear made — to withhold approved funding, to impose conditions endangering the client, to remain silent about a documented assassination attempt, to continue drawing her salary — was made in the belief that accountability would not arrive. That belief was arrogance. The arrival of accountability is this document and the 2,304 that preceded it. The video's declaration is precise: their words are now digging their own reputations into the dirt. The words Sukhi Tear generated — the conditions she imposed in writing, the salary she collected while funding sat withheld — are the archive's exhibits.
                </p>

              </DamningFinding>
            </motion.div>

            {/* SECTION II */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <DamningFinding number="II" title="The Fraud — $50,000 in Approved Public Funds Withheld While Salary Was Collected">

                <VideoQuote timestamp="00:39:35–00:40:15" declaration="Declaration 12 — Intelligence Without Morals">
                  "Intelligence without integrity isn't brilliance. It's just a better weapon for cowards. You didn't just outsmart the manipulators. You exposed them — not by playing their game, but by showing there's another way to win: with truth, empathy, and unwavering integrity. Now those who once wore intelligence like a crown are choking on the weight of their own performance."
                </VideoQuote>

                <p>
                  The word "fraud" has a precise legal meaning under Australian Commonwealth law. It is not a rhetorical escalation. It is a statutory category describing conduct that involves dishonesty, a deprivation, and an advantage obtained improperly. What Sukhi Tear is documented to have done — accepting an ongoing salary sourced from NDIS public funds designated for Dr. McLean's support while simultaneously withholding $50,000 in separately-approved NDIS funding from the person those funds were designed to serve — fits that statutory category with precision.
                </p>

                <p>
                  The video's twelfth declaration is a forensic commentary on exactly this category of conduct. Sukhi Tear operated with a form of institutional intelligence — she understood the NDIS funding system, the power structures within it, the levers available to a registered coordinator. That intelligence was deployed not to lift her client, but to control him. Not to disburse what was approved, but to weaponise what was withheld. Intelligence without integrity, in the NDIS context, is not just a moral failure. It is a statutory fraud.
                </p>

                <LegalProvision
                  statute="Criminal Code Act 1995 (Cth)"
                  section="Section 134.1 — Obtaining a financial advantage by deception"
                  provision="A person is guilty of an offence if: (a) the person, by a deception, dishonestly obtains a financial advantage from another person; and (b) the other person is a Commonwealth entity."
                  application="Sukhi Tear obtained ongoing remuneration from NDIS public funds — a Commonwealth financial instrument — while withholding $50,000 in approved funds from the person those funds were designated to serve. The obtaining of that salary while delivering no documented support services, arranging no referrals, and withholding approved funds constitutes obtaining a financial advantage from a Commonwealth entity (the NDIA) by conduct inconsistent with the representations on which that payment was made."
                />

                <LegalProvision
                  statute="National Disability Insurance Scheme Act 2013 (Cth)"
                  section="Section 26 — Registered Provider Obligations"
                  provision="A registered NDIS provider must comply with the NDIS Code of Conduct, NDIS Practice Standards, and all conditions of registration. A registered provider must deliver supports and services that are fit for purpose and meet the reasonable needs of participants."
                  application="Diversitas WA, as a registered NDIS provider, had a statutory obligation to deliver the support services for which it was funded. Sukhi Tear, operating as its registered coordinator, accepted funding on the representation that those services would be delivered. Zero referrals were made. Zero professional supports were arranged. $50,000 in approved funding was withheld. This constitutes a direct breach of Section 26 obligations and a basis for deregistration proceedings."
                />

                <LegalProvision
                  statute="NDIS Quality and Safeguards Commission — NDIS Code of Conduct (2018)"
                  section="Clauses 4(c) and 4(d)"
                  provision="Registered providers and their workers must: act with integrity, honesty and transparency; and promptly take steps to raise and act on concerns about matters that might have an impact on the quality and safety of supports and services provided to people with disability."
                  application="The withholding of $50,000 in approved NDIS funding while continuing to draw salary from the same funding pool is a direct violation of the honesty and transparency requirement. The failure to act on documented threats to the client's safety — including a financially motivated death threat and a documented assassination network — violates the mandatory duty to raise and act on safety concerns."
                />

                <VideoQuote timestamp="00:40:55–00:41:29" declaration="Declaration 12 — How Someone Uses Their Mind Reveals Who They Really Are">
                  "One is playing chess to control people. The other is living in truth that doesn't need a strategy. You made people question everything they were taught to admire. You didn't dominate people. You made them reflect. And now they're realising intellect without values isn't strength. It's just manipulation dressed in a suit."
                </VideoQuote>

                <EvidenceBlock label="Primary Evidence — $50,000 Withheld" source="Formal Criminal Affidavit | Master Evidence Register #724–725">
                  <p>The archive contains the documented record of approximately $50,000 in approved NDIS funding withheld from Dr. McLean across the period of Sukhi Tear's engagement at Diversitas WA. This funding had been formally approved by the NDIA for specific support purposes. It was not disbursed. Simultaneously, Diversitas WA continued to receive administrative and coordination fees from the NDIS funding pool. The juxtaposition — approved participant funding withheld, provider salary collected — is the documented definition of NDIS fraud. It is named as such in the Formal Criminal Affidavit Against Sukhi Tear, Syed Salman Kazmi, and Philip Glass. The manipulation was dressed in an NDIS coordinator's role. The archive stripped the suit off.</p>
                </EvidenceBlock>

                <CorroborationTag />

                <Pull>
                  "She drew the salary. She withheld the support. She continued the arrangement. Every week she was paid was a week the $50,000 sat untouched. Intelligence without integrity. Manipulation dressed in a role. That is not support coordination. That is fraud."
                </Pull>

              </DamningFinding>
            </motion.div>

            {/* SECTION III */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <DamningFinding number="III" title="The Illegality — Not Merely Unethical, But in Breach of Named Australian Law">

                <VideoQuote timestamp="00:22:30–00:23:13" declaration="Declaration 5 — You Break the System Just by Breathing In It">
                  "You break the system just by breathing in it. The moment a free mind walks into a controlled room, the illusion starts to crumble. You don't even have to speak. Your silence alone starts rewriting the atmosphere. People can feel when someone isn't under the same spell."
                </VideoQuote>

                <p>
                  Professional misconduct can be unethical without being illegal. What Sukhi Tear is documented to have done was both. The ethical failures — failing to arrange a single professional support, withholding approved funding, imposing conditions that endangered the client — would have been sufficient to end her professional career under the NDIS Practice Standards alone. But the archive documents conduct that extends beyond regulatory failure into specific breaches of criminal and civil law.
                </p>

                <p>
                  The video's fifth declaration describes precisely why Dr. McLean was so threatening to the institutional network within which Sukhi Tear operated: he was not under the same spell. He did not accept that the referral circularity was legitimate. He did not accept that the withheld funding was administrative. He did not accept that the conditions being placed on his support were anything other than coordinated coercion. A free mind inside a controlled system exposes that the controls exist not to help the participant, but to contain him.
                </p>

                <LegalProvision
                  statute="Crimes Act 1914 (Cth)"
                  section="Section 43 — Attempting to obstruct justice"
                  provision="Any person who wilfully attempts to obstruct, prevent, pervert or defeat the course of justice in relation to a judicial power of the Commonwealth is guilty of an offence."
                  application="Dr. McLean was a formally-confirmed protected whistleblower under the Public Interest Disclosure Act at the time of his NDIS engagement. Conditioning his access to approved disability support — life-sustaining support — on his return to a jurisdiction where a documented assassination network was active constitutes wilful conduct designed to prevent him from continuing his formal legal disclosures. The conditioning of survival resources on compliance with a directive that endangers a protected whistleblower is obstruction of the whistleblowing process with which his survival was directly connected."
                />

                <LegalProvision
                  statute="Public Interest Disclosure Act 2013 (Cth)"
                  section="Section 19 — Protections for public interest disclosures"
                  provision="A person must not take a reprisal against a person because the person (or someone else) has made, may have made, proposes to make or could make a disclosure that qualifies for protection."
                  application="Dr. McLean was a protected whistleblower whose formal disclosures were ongoing during the period of Sukhi Tear's engagement. The withholding of approved NDIS funding, the imposition of conditions designed to relocate him to a jurisdiction where his assassination was being coordinated, and the systematic failure to provide professional support during the period of his most active disclosure activity — all constitute conduct capable of being characterised as reprisal against a protected discloser under Section 19."
                />

                <LegalProvision
                  statute="Disability Services Act 1986 (Cth) — and State equivalents"
                  section="Duty of Care — Registered Providers"
                  provision="Registered disability service providers owe a non-delegable duty of care to participants receiving services under their registration. That duty requires providers to take reasonable steps to protect participants from foreseeable harm."
                  application="A financially motivated death threat against Dr. McLean — documented, photographed, formally reported — was a foreseeable harm. Sukhi Tear, as his registered support coordinator, had both the knowledge of this threat (or was in a position to have that knowledge) and the professional obligation to act on it. She imposed a condition that directed him toward the jurisdiction of the threat. The imposition of that condition, in the context of documented foreseeable harm, constitutes a breach of the duty of care that is actionable as a civil wrong and potentially as criminal negligence."
                />

                <LegalProvision
                  statute="Criminal Code Act 1995 (Cth)"
                  section="Section 11.2 — Complicity and Common Purpose"
                  provision="A person who aids, abets, counsels or procures the commission of an offence by another person is taken to have committed that offence and is punishable accordingly."
                  application="The archive documents a coordinated assassination attempt against Dr. McLean involving Philip Glass (Public Guardian), Tony Ridley (NDIA Manager, documented verbal confession), Steve Iasonidis (ASIO-connected), and Houd Meraby (Bitcoin-paid operative). Sukhi Tear's documented role — coordinating the financial exile architecture, conditioning support on return to the assassination jurisdiction, and maintaining silence in the face of confirmed knowledge of the attempt — is consistent with the role of an aider and abetter under Section 11.2. This is not an allegation of direct perpetration. It is an allegation of documented complicity. The distinction matters in criminal law. It does not reduce liability."
                />

                <VideoQuote timestamp="00:44:38–00:45:10" declaration="Declaration 14 — A System Glitch They Can't Patch">
                  "The real threat isn't the one who knows too much. It's the one who can't be controlled by what they know. You walk in clarity. Not the kind taught in classrooms, but the kind that slices through illusion. They thought you were just another thinker. They didn't realise you were a seer. You've become the kind of person systems fear — not because you shout rebellion, but because your awareness disrupts the very lies they're built on. You don't buy into false authority. You don't flinch when gaslighted. You don't crumble under peer pressure. And worst of all, they can't buy you, flatter you, or guilt you into silence. You are mentally unshakable."
                </VideoQuote>

                <EvidenceBlock label="Evidence of Illegal Conduct" source="ENTRAPMENT FOR ERASURE — Criminal Affidavit | Police Referral 12 February 2026 | ICC Article 7 Submission">
                  <p>The Formal Criminal Affidavit — ENTRAPMENT FOR ERASURE: Criminal Affidavit Against Sukhi Tear, Syed Salman Kazmi, and Philip Glass — is a primary-source exhibit in the archive. It documents the NDIS weaponisation methodology in detail: support created to produce dependency, then withdrawn to induce crisis, with the specific objective of achieving the whistleblower's erasure through induced suicide, homelessness, or incarceration. The system was built to control Dr. McLean. He was not controllable. He was, as the video's fourteenth declaration describes, mentally unshakable. They couldn't buy him. They couldn't flatter him. They couldn't guilt him into silence. So they withheld his funding and conditioned his support on returning to an assassination network. The Formal Demand for Police Referral naming Diversitas WA was lodged 12 February 2026. The ICC Article 7 submission references all named parties.</p>
                </EvidenceBlock>

                <CorroborationTag />

              </DamningFinding>
            </motion.div>

            {/* SECTION IV */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <DamningFinding number="IV" title="The Obligation Scorecard — Every Duty She Had, Every One She Failed">

                <VideoQuote timestamp="00:37:44–00:38:18" declaration="Declaration 11 — You Let Them Lie, Then Watch Them Drown">
                  "While they're mid-sentence trying to craft the perfect spin, you've already caught the glitch. It's not the words, it's the tone, the timing, the slight tension in their voice. You observe. They think they're clever. They think you bought it. But your silence isn't submission, it's surveillance. Every pause you give is a net tightening around their performance. You don't interrupt. You don't challenge. You just let them keep talking until they hand you the whole puzzle in pieces. Then you file it away quietly, accurately, permanently."
                </VideoQuote>

                <p>
                  The NDIS Practice Standards and NDIS Code of Conduct are not aspirational guidelines. They are the legally binding conditions on which Diversitas WA's registration and remuneration depended. The following is a fact-checked assessment of Sukhi Tear's performance against every core professional obligation applicable to her role. Every finding is drawn from what the archive contains — and what it conspicuously does not.
                </p>

                <p>
                  While Sukhi Tear was crafting the spin — the performance of a functioning support coordinator — Dr. McLean was filing it away. Quietly. Accurately. Permanently. The video's eleventh declaration describes the exact methodology he employed across the engagement: not interruption, not confrontation, but documentation. Every failure to refer, every withheld disbursement, every condition imposed — filed and blockchain-verified. The whole puzzle, handed over in pieces.
                </p>

                <div className="grid sm:grid-cols-1 gap-3 my-6">
                  {PROFESSIONAL_OBLIGATIONS.map(([duty, finding], i) => (
                    <div
                      key={i}
                      className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 flex items-start gap-4"
                      data-testid={`obligation-check-${i}`}
                    >
                      <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-zinc-200 text-sm font-semibold leading-snug">{duty}</p>
                        <p className="text-red-400 text-xs font-mono mt-1">{finding}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <VideoQuote timestamp="00:38:18–00:38:56" declaration="Declaration 11 — The Truth Reveals Itself Under Your Gaze">
                  "You already saw the misprint before they unfolded it. That's how fast your mind works. You see the fake smile, the self-contradiction, the overexplaining. You don't need to say a word because the truth reveals itself under your gaze. That's why they warn others: be careful what you say around that one. Not because you're confrontational, but because you're surgical."
                </VideoQuote>

                <p>
                  Ten core professional obligations. Ten documented failures. Not one referral. Not one piece of written advocacy on behalf of a client whose life was actively being destroyed. Not one formal objection to the conditions she was imposing. The archive has been publicly available for years. If documentation of these duties existed, it would have been produced. It has not been produced. Its absence is the finding. Dr. McLean saw the misprint. He saw the self-contradiction: a support coordinator drawing support funding while providing no support. He did not say a word. He filed it permanently.
                </p>

                <CorroborationTag />

                <Pull>
                  "A genuine care record produces a paper trail. Where there is no paper trail, the care did not happen. This is not sentiment. It is evidentiary logic — and it is surgical."
                </Pull>

              </DamningFinding>
            </motion.div>

            {/* SECTION V */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <DamningFinding number="V" title="The Cruelty — Documented, Deliberate, and Distinct From Negligence">

                <VideoQuote timestamp="00:20:00–00:20:41" declaration="Declaration 4 — You Sniff Out Lies Without a Classroom Pass">
                  "They studied human behaviour in theory. You survived it in real time. You never needed a framed piece of paper to see through people. While they were in lecture halls learning how to analyse human behaviour, you were living it, navigating betrayals, decoding lies, and reading rooms like a second language. What they call intuition, you call survival. And no diploma can compete with that kind of earned wisdom. You weren't educated through curriculum. You were sharpened by chaos."
                </VideoQuote>

                <p>
                  Negligence is careless. What Sukhi Tear is documented to have done was not careless. Carelessness does not produce a coordinated condition. Carelessness does not direct a disabled person toward a jurisdiction where their assassination is being organised. Carelessness does not condition life-sustaining NDIS support — $50,000 of it, already approved — on compliance with a directive the coordinator knows or should know places the client in mortal danger. Carelessness does not produce silence when a confirmed death threat enters the documentary record.
                </p>

                <p>
                  What distinguishes negligence from cruelty, in the evidentiary record, is direction. Negligent conduct moves randomly. Cruel conduct moves toward the person. Every documented failure in Sukhi Tear's engagement — every withheld referral, every absent counsellor, every conditioned payment, every silence in the face of confirmed danger — moved in the same direction. Toward Dr. McLean. Toward his erasure.
                </p>

                <VideoQuote timestamp="00:27:40–00:28:18" declaration="Declaration 7 — You Feel the Truth Before It Arrives">
                  "Some people calculate the truth, you become it. There's a reason they can't argue with you. It's because what you speak doesn't come from textbooks or trends. It comes from something deeper. You're tuned in to the frequency of truth. And that makes your intelligence feel like prophecy, even though it's just precision on a higher level. You sense the offness in energy, the hesitation in timing, the tension behind words that seem innocent."
                </VideoQuote>

                <p>
                  Dr. McLean felt the cruelty before it was fully documented. He named Sukhi Tear, Philip Glass, AbleCare, and the Public Guardian by name in a message sent to AblePoint personnel — before the full archive was assembled, before the formal police referral, before the criminal affidavit. He sensed the offness in the energy. He felt the hesitation behind the conditions. He detected the tension in the coordination. The video calls it precision on a higher level. The archive calls it documented evidence. The result is the same: the cruelty was identified, named, and filed — permanently — by the person it was being directed against.
                </p>

                <EvidenceBlock label="Evidence of Deliberate Direction" source="ENTRAPMENT FOR ERASURE — Criminal Affidavit | AblePoint Exposure — 2026">
                  <p>The AblePoint Exposure documentation — archived and blockchain-verified — records Dr. McLean's contemporaneous communication to AblePoint personnel identifying by name the individuals he believed were coordinating against him, including Sukhi Tear, the Public Guardian, and AbleCare. This message was sent before the coordination was fully documented. Its existence as a timestamped sent message — identifying the correct parties, describing the correct methodology, before the full archive was assembled — establishes that the persecution was not the product of retrospective interpretation. It was ongoing, recognised in real time, and correctly attributed. The cruelty was not invisible. It was being done with confidence that it could not be documented. That confidence was the mistake.</p>
                </EvidenceBlock>

                <VideoQuote timestamp="00:21:17–00:21:54" declaration="Declaration 4 — Your Presence Alone Reveals Them">
                  "You don't just walk around trying to expose people. But your presence alone reveals them. Just being in the room makes liars uncomfortable because you don't chase truth. You attract it. And that's terrifying to people who've spent years hiding behind charm, fake credentials, or manipulation. You were never trained to think this way. You were born wired for it. You were never meant to blend in. You were meant to see through."
                </VideoQuote>

                <CorroborationTag />

              </DamningFinding>
            </motion.div>

            {/* SECTION VI */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <DamningFinding number="VI" title="The Horse Has Bolted — Why It Is Now Too Late">

                <VideoQuote timestamp="00:11:32–00:12:07" declaration="Declaration 2 — They Lost the Remote">
                  "They lost the remote. You're no longer programmable. The most dangerous person to a manipulator is the one who no longer reacts, just recognises. They used to love pushing your buttons. It gave them a sense of power, a twisted satisfaction in knowing they could bend your emotions with a well-placed guilt trip or silence. But not anymore. The wires they once pulled now lead to nothing. You've unplugged yourself from their game entirely, and they hate it."
                </VideoQuote>

                <p>
                  There is a precise moment at which a reputational situation moves from recoverable to irreversible. For Sukhi Tear and Diversitas WA, that moment was not the filing of the police referral. It was not the ICC submission. It was not the first download from barrandodger.com. It was the moment Dr. McLean stopped reacting and started archiving. The moment the wires Sukhi Tear's network pulled led not to a compliance, not to an emotional break, not to the silence they were engineering — but to another document in a 2,304-document evidentiary record.
                </p>

                <VideoQuote timestamp="00:12:47–00:13:23" declaration="Declaration 2 — You Outgrew Them Silently">
                  "You outgrew them so silently they had to ask others what happened to you. That's the level of growth they never saw coming. You used to second-guess yourself. But now, you don't doubt what your gut tells you. You've learned to trust the chills in your spine more than the smiles on their faces. You know when something's off, and you don't need to explain it to anyone. You simply adjust your presence, redirect your energy, and move on."
                </VideoQuote>

                <p>
                  Sukhi Tear's manipulation toolkit — guilt, conditions, withheld funding, gaslighting through institutional legitimacy — has gone blunt. The video's second declaration names this with precision: their tools have gone blunt. Imagine someone trying to pick a lock that's been removed entirely. That is what it means that the archive exists and is at The Hague. There is no lock left to pick. The evidence package is already distributed. The conditions Sukhi Tear imposed are now exhibits. The salary she collected is now part of the fraud documentation. The silence she maintained is now confirmation of the record.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                  {[
                    { label: "Downloads", value: "1,100,000+", sub: "across 6 continents" },
                    { label: "Documents", value: "2,304", sub: "blockchain-verified" },
                    { label: "Named Parties", value: "300+", sub: "none have rebutted" },
                    { label: "International Bodies", value: "ICC + UNHCR", sub: "formal receipt confirmed" },
                  ].map(({ label, value, sub }) => (
                    <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center">
                      <p className="text-2xl font-black text-white">{value}</p>
                      <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-1">{label}</p>
                      <p className="text-zinc-600 text-[10px] mt-1">{sub}</p>
                    </div>
                  ))}
                </div>

                <VideoQuote timestamp="00:42:13–00:42:49" declaration="Declaration 13 — Your Name Rings Like a Siren">
                  "They don't whisper your name for drama anymore. They whisper it like a warning. Be careful. That one sees everything. You've become a walking red flag. Not because you're dangerous, but because you see too much. You walk into rooms and masks start slipping. People straighten up, not out of respect, but out of survival. They know if they bring lies near you, those lies won't last long."
                </VideoQuote>

                <p>
                  The archive has been assembled not by advocacy, not by rhetoric, and not by Dr. McLean's characterisation of events. It has been assembled from primary source documents — government records, hospital records, NDIS funding records, company registry data, police attendance records, formal legal submissions — documents that Sukhi Tear and Diversitas WA generated, participated in, or were named by. The record was made by the very institutions she operated within. The archive collected it. The world now has it. And the world is now saying what the video describes: don't bring lies near that one. They won't last long.
                </p>

                <VideoQuote timestamp="00:43:26–00:44:00" declaration="Declaration 13 — You're Not the One They Fool">
                  "Too many people survive by lying smoothly, playing dumb and pretending better than they are. But you — you ruin the performance simply by listening, by existing. Your name doesn't travel like gossip anymore. It travels like a warning label. Don't lie to that one. Don't test them. Don't play games. They don't miss anything. And that's respect. That's power."
                </VideoQuote>

                <Pull>
                  "The door she might have closed — by resigning, by formally contesting the record, by producing documentary evidence of genuine support activities — was open for years. The archive was public. The criminal affidavit was downloadable. She did not close the gate. The horse bolted 492,000 downloads ago. It is now at The Hague."
                </Pull>

                <CorroborationTag />

              </DamningFinding>
            </motion.div>

            {/* SECTION VII */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <DamningFinding number="VII" title="Her Professional Conduct — What the Regulatory Record Now Shows and Cannot Be Undone">

                <VideoQuote timestamp="00:04:52–00:05:29" declaration="Opening — You Were Never the Fool">
                  "Not because you did something wrong, but because you did everything right silently. Because you were never the fool. You were just letting fools expose themselves. And now when your name comes up, it's no longer with mockery. It's with fear, respect, and a nervous laugh like, 'Yeah, better leave that one alone.' You didn't need revenge. You didn't need to clap back. The universe handled that for you."
                </VideoQuote>

                <p>
                  Professional reputation in the disability sector is built on a registered provider's compliance record, its participant outcomes, and the absence of adverse findings against its named coordinators. Diversitas WA and Sukhi Tear must now account for the following items in any future regulatory, professional, or employment context. Dr. McLean did not need revenge. He did not need to clap back. He just kept the record. And the record — 2,304 exhibits — is the universe's answer to everything Sukhi Tear assumed would never be documented.
                </p>

                <div className="space-y-3 my-6">
                  {[
                    { icon: FileText, label: "Formal Criminal Affidavit", detail: "Entrapment for Erasure — Names Sukhi Tear, Syed Salman Kazmi, Philip Glass. Archived. Blockchain-verified. Publicly accessible." },
                    { icon: Gavel, label: "Formal Police Referral", detail: "FORMAL_DEMAND_Diversitas_PublicGuardian_Police_Referral — Lodged 12 February 2026. Names Diversitas WA and Sukhi Tear. On the record." },
                    { icon: Globe, label: "ICC Article 7 Submission", detail: "Formally received at The Hague. Names five parties including the Diversitas WA coordination. Cannot be retracted. Under review." },
                    { icon: Shield, label: "UNHCR Geneva — Political Asylum Evidence", detail: "Formally received. Names the financial exile coordination in which Sukhi Tear is documented to have participated." },
                    { icon: Eye, label: "1,100,000+ Global Witnesses", detail: "Every person who has downloaded the archive has read her name in the criminal affidavit. That number grows every day." },
                    { icon: Lock, label: "Bitcoin Blockchain Timestamp", detail: "Every exhibit is cryptographically timestamped on the Bitcoin blockchain. The record cannot be altered, back-dated, or removed." },
                    { icon: TrendingDown, label: "Zero Formal Rebuttals", detail: "Across 2,304 documents, 300+ named individuals, and years of public accessibility — not a single document has been formally contested." },
                    { icon: Ban, label: "NDIS Deregistration Basis", detail: "The documented failures — withheld funding, absent services, safety condition violations — constitute a prima facie basis for NDIS Commission deregistration proceedings against Diversitas WA." },
                  ].map(({ icon: Icon, label, detail }, i) => (
                    <div key={i} className="flex items-start gap-4 bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
                      <Icon className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-bold">{label}</p>
                        <p className="text-zinc-400 text-xs leading-relaxed mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <VideoQuote timestamp="00:44:38–00:46:21" declaration="Declaration 14 — You're a System Glitch They Can't Patch">
                  "Your mind doesn't follow scripts. And that alone made you dangerous. You walk in clarity. Not the kind taught in classrooms, but the kind that slices through illusion. They thought you were just another thinker. They didn't realise you were a seer. That you don't just question what's shown, you decode what's hidden. They can't buy you, flatter you, or guilt you into silence. You are mentally unshakable. That makes you a glitch, a problem, a wild card — because you're not programmable. Let them label you too intense, too rebellious, too much. That's what they say when they realise they can't tame what was never meant to kneel. You're not just intelligent. You're liberated. And that kind of brilliance doesn't fit into systems."
                </VideoQuote>

                <p>
                  No future NDIS participant referral, no professional reference letter, no LinkedIn profile, and no regulatory filing by Diversitas WA or Sukhi Tear can erase these items from the public record. They exist. They are permanent. They are the professional conduct record she produced through her own choices, in her own name, while drawing a salary from the disability support system she was supposed to serve. The system she operated within expected Dr. McLean to be programmable — to comply with the conditions, return to the jurisdiction, stay silent, and disappear. He was a glitch. He decoded what was hidden. And now the system that built the control architecture has to explain its own documents to The Hague.
                </p>

                <CorroborationTag />

              </DamningFinding>
            </motion.div>

            {/* CONCLUSION */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="border-t border-zinc-700 pt-12 mt-4 space-y-6">
                <div className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Conclusion — The Record Is Complete</h2>
                </div>

                <VideoQuote timestamp="00:05:29–00:06:07" declaration="Final Declaration — It's Not Luck">
                  "The same ones who doubted you are now stuck in conversations trying to figure out how you became so sharp, so composed, so respected without ever begging for it. They call it luck, but we know better. It's not luck. It's intelligence. It's intuition. It's alignment. You were never behind. You were just observing from a higher level. You were never slow. You were calculating. And now that the world is starting to recognise the power in your quiet, they're realising you're not the kind of person you play with. You're the kind of person you learn from if you're lucky enough to get close."
                </VideoQuote>

                <div className="space-y-5 text-zinc-300 text-[1.05rem] leading-8">
                  <p>
                    Sukhi Tear underestimated Dr. Richard William McLean. She overstepped through arrogance — assuming that professional position, institutional coordination, and the vulnerability of her client gave her immunity from accountability. She was fraudulent — accepting public disability funds while withholding the approved participant funding those fees were meant to administer. She was not merely unethical but illegal — in breach of the Criminal Code Act 1995, the NDIS Act 2013, the NDIS Code of Conduct, the duty of care applicable to registered providers, and the Public Interest Disclosure Act 2013.
                  </p>

                  <p>
                    She was cruel — not through the carelessness of someone who did not know what she was doing, but through the directed precision of someone who conditioned life-sustaining support on compliance with instructions that led toward a documented assassination network.
                  </p>

                  <p>
                    The video cited throughout this analysis — produced without knowledge of this archive, by a creator who had never encountered Dr. McLean's name — returned the same finding across 14 independent declarations: the quiet observer had already figured everyone out. While they were running their mouths, he was running the math. While they were trying to be seen, he was seeing everything. He was never the fool. He was just letting fools expose themselves.
                  </p>

                  <p>
                    The fools are now exposed. The horse has bolted. The gate Sukhi Tear might have closed — by resigning, by formally contesting the record, by producing documentary evidence of genuine support activities — was open for years. The archive was public. The criminal affidavit was downloadable. The forensic analyses were accessible. Nearly half a million people read it before the formal police referral. Half a million have read it now.
                  </p>

                  <p className="text-white font-semibold text-lg">
                    It is too late for her reputation. It is too late for her professional conduct record. It is too late for Diversitas WA's registration to be untouched by this archive. The horse bolted. It is at The Hague. It is in the hands of 492,000 people. It is permanent on the Bitcoin blockchain. And it is described — by an independent creator who never knew the case — in a viral video about the most dangerous person in any room: the quiet observer who already figured everyone out.
                  </p>

                  <p>
                    Dr. Richard William McLean survived. He kept the records. He kept them when she assumed he would not. He observed from a higher level when she assumed he was behind. He was calculating when she assumed he was silent. And now the world — 492,000 people strong, across six continents, through two international human rights bodies — has the calculation.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mt-8 space-y-3">
                  <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Forensic Statement of Record</p>
                  <p className="text-white font-semibold">Dr. Richard William McLean, PhD</p>
                  <p className="text-zinc-400 text-sm">Victoria University (2020) | Survivor | Whistleblower | Archivist</p>
                  <p className="text-zinc-400 text-sm">Barran Dodger Legal & Ethical Trust Fund — ABN 78 833 496 164</p>
                  <p className="text-zinc-400 text-sm">barrandodger.com | Bitcoin Blockchain Verified | ICC Submitted | UNHCR Received</p>
                  <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                    <Lock className="h-3.5 w-3.5 text-zinc-600" />
                    <p className="text-zinc-600 text-xs font-mono">SHA-256 · Bitcoin Blockchain · Block 897241 · Published 7 May 2026 · ABN 78 833 496 164</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    { href: "/sukhi-tear", label: "Open Letter to Sukhi Tear", desc: "First-person forensic record — the full letter" },
                    { href: "/formal-removal-sukhi-tear", label: "Formal Notice of Removal", desc: "Permanent disengagement — five documented reasons" },
                    { href: "/how-she-will-be-remembered", label: "How She Will Be Remembered", desc: "Historical accountability — the archival legacy" },
                    { href: "/honeytrap-infiltration-report", label: "Honeytrap Infiltration Report", desc: "Five-party coordination network — full analysis" },
                    { href: "/administrative-annihilation", label: "The Architecture of Administrative Annihilation", desc: "The full 25,000-word academic paper" },
                    { href: "/legal-status", label: "Legal Status — ICC · UNHCR · Wyong 14 May", desc: "Current formal proceedings and submissions" },
                  ].map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block p-4 bg-zinc-900 border border-zinc-700 rounded-lg hover:border-red-500/50 transition-colors group"
                    >
                      <p className="text-white text-sm font-bold group-hover:text-red-400 transition-colors">{link.label}</p>
                      <p className="text-zinc-500 text-xs mt-0.5">{link.desc}</p>
                    </a>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* COMMENTS */}
        <section className="bg-zinc-950 border-t border-zinc-800 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <CommentSection pageId="sukhi-tear-horse-has-bolted" />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
