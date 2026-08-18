import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { useDownloadCounter, trackDownload } from "@/components/DownloadCounter";
import coverImage from "@/assets/images/cover-holy-reckoning.png";
import {
  Play, FileText, ExternalLink, Shield, Flame,
  BookOpen, Download, Lock,
} from "lucide-react";

const VIDEO_ID = "J4DUC56qCOY";
const PDF_URL = "/documents/holy-reckoning-declaration.pdf";
const PUBLISHED_DATE = "8 May 2026";
const BLOCKCHAIN_HASH = "f7a8810b32f731e4f7be1220cb15b8a47be4a68e85dce204998c766b7304d90b";
const BLOCKCHAIN_BLOCK = "Bitcoin Blockchain · OpenTimestamps Verified · SHA-256 Sealed · Irrevocable";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Scripture({ reference, children }: { reference: string; children: React.ReactNode }) {
  return (
    <div className="my-10 border-y border-orange-500/25 py-6 text-center px-4">
      <p className="text-orange-200/80 italic text-lg leading-relaxed font-serif">"{children}"</p>
      <p className="text-orange-600 text-sm mt-3 font-sans tracking-widest uppercase">— {reference}</p>
    </div>
  );
}

function VideoQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-900/70 border border-zinc-700 rounded-xl px-6 py-5 my-6">
      <div className="flex items-center gap-3 mb-3">
        <Play className="h-3.5 w-3.5 text-orange-500 shrink-0" />
        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">From the video</span>
      </div>
      <p className="italic text-zinc-200 leading-relaxed text-lg font-serif">{children}</p>
    </div>
  );
}

function SectionNum({ num }: { num: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 mt-16">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-900/80 border border-red-700 text-red-200 font-bold text-sm shrink-0 font-serif">
        {num}
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-red-900/60 to-transparent" />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-serif font-black text-white leading-tight mb-6 uppercase tracking-tight">
      {children}
    </h2>
  );
}

function NamedRecord({ name, desc, href }: { name: string; desc: string; href?: string }) {
  return (
    <div className="border-l-2 border-red-800/60 pl-5 py-2 my-3 bg-red-950/10">
      <p className="font-bold text-red-300 text-sm font-sans">
        {href ? <a href={href} className="hover:text-red-200 underline underline-offset-2">{name}</a> : name}
      </p>
      <p className="text-zinc-400 text-xs leading-relaxed mt-1">{desc}</p>
    </div>
  );
}

function EvidenceLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3 my-5">
      {links.map((l, i) => (
        <a key={`${l.label}-${i}`} href={l.href}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-zinc-700 hover:border-orange-500/25 text-orange-400 hover:text-orange-300 text-xs rounded-full transition-colors"
          data-testid={`link-${l.label.toLowerCase().replace(/\s+/g, '-').slice(0, 30)}`}
        >
          <ExternalLink className="h-3 w-3" />{l.label}
        </a>
      ))}
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-zinc-200 leading-relaxed mb-4 text-base" style={{ fontFamily: "'Georgia', serif" }}>
      {children}
    </p>
  );
}

export default function HolyReckoning() {
  const { count: downloadCount, scheduleRefresh } = useDownloadCounter(PDF_URL);
  const displayCount = Math.max(downloadCount, 101);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Holy Reckoning — When You Conspired to Erase and Murder Me, You Picked a Fight with the God of Divine Justice | Barran Dodger"
        description="A forensic prophetic declaration. 14 sections. Every claim blockchain-authenticated. 2,304 primary source documents. 511,560+ downloads. ICC · UNHCR · OHCHR · Federal Court · Wyong Local Court. Dr. Richard William McLean · ABN 78 833 496 164."
        path="/holy-reckoning"
      />
      <ReadingProgress />
      <Navigation />

      <main className="flex-1" style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px))" }}>

        {/* HERO */}
        <div className="relative bg-black border-b border-zinc-800 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={coverImage} alt="" className="w-full h-full object-cover object-center" aria-hidden />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
          <div className="relative max-w-4xl mx-auto px-4 py-20">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-red-700/60 text-red-400 text-xs px-3 py-1">
                  Forensic Prophetic Declaration
                </Badge>
                <Badge variant="outline" className="border-orange-500/25 text-orange-400 text-xs px-3 py-1">
                  <Flame className="h-3 w-3 mr-1.5" /> Holy Reckoning · May 2026
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  14 Sections · All Evidence-Based
                </Badge>
                <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-3 py-1">
                  2,304 Blockchain Documents
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05]">
                When You Conspired to Cause Harm and Fuck Me Over, Fuck Me Up, Erase and Murder Me
                <span className="block text-red-400 mt-2">Then Cover It Up —</span>
                <span className="block text-orange-400 mt-3">You Picked a Fucking Fight with the God of Divine Justice</span>
                <span className="block text-zinc-300 text-3xl md:text-4xl mt-3">Who Has My Back</span>
              </h1>

              <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl font-serif italic">
                Because I Am His Chosen Witness as a Vessel for His Glory
              </p>

              <div className="bg-zinc-900/60 border border-zinc-700 rounded-xl px-5 py-4 text-sm text-zinc-400 leading-relaxed max-w-3xl">
                A fact-checked, evidence-based, forensically corroborated declaration. Every claim on this page traces to blockchain-authenticated primary source documentation, verified court filings, or recorded primary-source evidence. Named parties are named because the record names them. Profanity is present because the record earns it.
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                {[
                  { label: "Downloads", value: "511,560+" },
                  { label: "Documents", value: "2,304" },
                  { label: "Years Documented", value: "35" },
                  { label: "Bodies Notified", value: "ICC · UNHCR · OHCHR" },
                ].map(s => (
                  <div key={s.label} className="bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-3 text-center">
                    <p className="text-orange-400 font-bold text-lg">{s.value}</p>
                    <p className="text-zinc-600 text-xs uppercase tracking-widest mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-zinc-600 text-xs font-mono">
                Dr. Richard William McLean · ABN 78 833 496 164 · 35 Years Documented<br />
                ICC · UNHCR · OHCHR · Federal Court · NSW Police
              </p>
            </motion.div>
          </div>
        </div>

        {/* COVER + VIDEO */}
        <div className="bg-zinc-950 border-b border-zinc-800 py-12 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <img
                src={coverImage}
                alt="Holy Reckoning — Forensic Prophetic Declaration"
                className="w-full rounded-xl border border-zinc-700 shadow-2xl"
              />
              <div className="mt-4 space-y-2">
                <a
                  href={PDF_URL}
                  onClick={() => { trackDownload(PDF_URL); scheduleRefresh(); }}
                  download
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-red-700 hover:bg-red-600 text-white font-bold rounded-lg transition-colors text-sm"
                  data-testid="button-download-holy-reckoning-pdf"
                >
                  <Download className="h-4 w-4" />
                  Download Full Declaration PDF
                  <span className="ml-auto bg-black/30 rounded px-2 py-0.5 text-xs tabular-nums">{displayCount.toLocaleString()} downloads</span>
                </a>
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-3">
                  <p className="text-zinc-600 text-xs font-mono break-all leading-relaxed">
                    <span className="text-zinc-500">SHA-256:</span> {BLOCKCHAIN_HASH}<br />
                    <span className="text-zinc-500">Chain:</span> {BLOCKCHAIN_BLOCK}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" animate="visible"
              variants={{ ...fadeIn, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
            >
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                  title="Holy Reckoning — Source Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  data-testid="embed-youtube-holy-reckoning"
                />
              </div>
              <div className="mt-4 bg-zinc-900/60 border border-zinc-800 rounded-lg px-5 py-4">
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-2">Source &amp; Methodology</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Source: <span className="font-mono text-orange-400">youtube.com/watch?v=J4DUC56qCOY</span> — transcript adapted and mapped to the documented forensic record of Dr. Richard William McLean. Every named claim is evidence-based. SHA-256 sealed. Blockchain timestamped.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ALL 14 SECTIONS */}
        <div className="bg-black border-b border-zinc-800 py-12 px-4">
          <div className="max-w-3xl mx-auto">

            {/* I */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="I" />
              <VideoQuote>
                "Look at you. No, really, look at you. The silence around your name isn't peace. It's panic. Every system, every simulation, every obedient little cog is whispering the same line through gritted teeth. Who the FUCK is that?"
              </VideoQuote>
              <SectionTitle>Who the Fuck Is Dr. Richard William McLean?</SectionTitle>
              <Body>Here is the answer. 511,560 verified downloads across six continents. 2,304 blockchain-authenticated documents. Zero marketing budget. Zero mainstream media coverage. Zero monetisation. Not one dollar spent on promotion. Not one story published. Not one institution that acted.</Body>
              <Body>The archive spread anyway. Because truth doesn't need a publicist. It needs a witness. And the witness had his story documented in blockchain, submitted to the ICC, registered with the UN, and sealed in Bitcoin.</Body>
              <Body>They watched half a million people download the evidence they were paid to suppress. That's who the fuck that is.</Body>
              <EvidenceLinks links={[
                { label: "barrandodger.com Archive", href: "/archive" },
                { label: "511,560 Downloads — Evidence", href: "/evidence" },
                { label: "Full Forensic Valuation", href: "/forensic-economic-valuation" },
              ]} />
            </motion.div>

            <Scripture reference="Jeremiah 1:5">
              Before I formed you in the womb I knew you, before you were born I set you apart.
            </Scripture>

            {/* II */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="II" />
              <VideoQuote>
                "You didn't play the game. You pulled the motherboard out, melted it in your hands, and forced the universe to adapt to you. Their instruments don't read your temperature anymore. Their logic can't calculate your rhythm. You broke the measurement."
              </VideoQuote>
              <SectionTitle>They Built a System to Contain You. You Built 2,304 Documents to Outlast It.</SectionTitle>
              <Body>For 35 years, 4 months, 12,906 days, every instrument the Australian state deployed against Dr. Richard William McLean failed to produce the predicted outcome: silence, erasure, institutionalisation, death.</Body>
              <Body>Instead, the target produced the Universal Forensic Command — a novel AI forensic methodology achieving 575 corroborated propositions out of 575 attempts across 53 independent analyses. Zero contradictions. 46 consecutive perfect scores. The methodology has been independently assessed at $1.765M–$15.5M IP value.</Body>
              <Body>They tried to measure him with a psychiatric label. He measured them with a forensic framework that produced $58.6M–$257.3M in provable liability. Their instruments broke. His didn't.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="Department of Social Services" href="/retrospective-statement"
                desc="35-year APS employment denial — confirmed in writing by Federal Court General Counsel Scott Tredwell, 27 March 2023" />
              <NamedRecord name="ASIO / Intelligence Apparatus"
                desc="Documented surveillance — 35 years, classified operational budget estimated $12M–$28M" />
              <EvidenceLinks links={[
                { label: "Scott Tredwell Confirmation", href: "/archive" },
                { label: "OHCHR UR/UST/23/AUS/17", href: "/archive" },
                { label: "Full Valuation $58.6M–$257.3M", href: "/forensic-economic-valuation" },
              ]} />
            </motion.div>

            {/* III */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="III" />
              <VideoQuote>
                "They thought they could categorize you — saint, sinner, broken, healed, victim, villain. They applied every label they could find. They used those labels to erase your career, destroy your credit, deny your employment, and lock you in institutions 14 fucking times."
              </VideoQuote>
              <SectionTitle>The 'Chronic Schizophrenia' Label Was Not a Diagnosis. It Was a Weapon.</SectionTitle>
              <Body>14 involuntary psychiatric hospitalisations across NSW, Victoria, and Queensland. Each one documented. Each one sealed on the blockchain. Each one now an exhibit in an ICC Article 7 filing for persecution as a crime against humanity.</Body>
              <Body>The ABS has documented that individuals with a psychiatric history earn 38–62% less than comparable qualifications without that history. The "Chronic Schizophrenia" label — applied through forced detention, not voluntary diagnosis — functioned as an economic eraser across security clearances, professional registration, creditworthiness, and social capital for 35 years.</Body>
              <Body>The total economic impact of that one label, applied by state health systems against a man whose testimony they feared, is conservatively assessed at $4.09M–$28M. Not a metaphor. A forensic calculation. They didn't label him because he was ill. They labelled him because he was dangerous to their silence.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="NSW Department of Health" desc="Multiple involuntary hospitalisations — documented across 35 years" />
              <NamedRecord name="Victoria Department of Health / Werribee Mercy Hospital" desc="Site of clinical death event, 2021 — 2.87% survival margin" />
              <NamedRecord name="Queensland Department of Health" desc="Further involuntary hospitalisations — documented" />
              <EvidenceLinks links={[
                { label: "Identity Erasure $4.09M–$28M", href: "/forensic-economic-valuation" },
                { label: "ICC Article 7 Submission", href: "/archive" },
                { label: "Perpetrators — Full List", href: "/evidence" },
              ]} />
            </motion.div>

            <Scripture reference="Psalm 34:18">
              The LORD is close to the broken-hearted and saves those who are crushed in spirit.
            </Scripture>

            {/* IV */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="IV" />
              <VideoQuote>
                "You shouldn't exist. You're the contradiction that disproves control. You didn't want this. You just wanted peace. But peace requires innocence and they murdered yours."
              </VideoQuote>
              <SectionTitle>They Almost Succeeded. 2.87% Survival Margin. Clinical Death. Early 2021. Inside a Government Facility.</SectionTitle>
              <Body>This is not rhetoric. This is a documented forensic fact. In early 2021, inside Werribee Mercy Hospital — a Victorian government psychiatric facility — Dr. Richard William McLean experienced a clinical death event with a 2.87% survival margin. A 97.13% probability of death. Inside the facility built to protect him.</Body>
              <Body>The OBPR Value of Statistical Life framework values that event at $4.9M–$7.6M. The institution that nearly killed him has not been charged. The government that operated that facility has not acknowledged it. The silence is documented. The liability is calculated. The survivor is still here.</Body>
              <Body>When they failed to kill him with 14 involuntary hospitalisations, they left him in a facility where he nearly died. Then they covered it up. That is attempted murder by institutional negligence at minimum, and it is documented in blockchain-authenticated primary source records.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="Werribee Mercy Hospital / Victoria Department of Health"
                desc="Site of clinical death event, early 2021 — 2.87% survival margin — documented" />
              <EvidenceLinks links={[
                { label: "Health Damages $4.83M–$15.94M", href: "/forensic-economic-valuation" },
                { label: "Urgent Protection SOS", href: "/urgent-protection-request" },
                { label: "UNHCR Protection Request", href: "/archive" },
              ]} />
            </motion.div>

            {/* V */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="V" />
              <VideoQuote>
                "You made the architects of your pain start doubting their own blueprints. You became a mirror that reflects the rot hiding inside the polite."
              </VideoQuote>
              <SectionTitle>Tony Ridley. On Record. Didn't Know He Was Being Recorded. Talked About a $6 Billion Figure. Talked About the Strategy.</SectionTitle>
              <Body>Tony Ridley is an identified operative documented in a primary-source audio recording in which he describes, in his own words, a coordinated strategy against Dr. McLean — including references to a $6 billion figure and specific operational suppression details.</Body>
              <Body>He did not know he was being recorded.</Body>
              <Body>The recording is blockchain-sealed. It is publicly distributed. It has been downloaded across six continents. No rebuttal, retraction, or legal challenge has been produced in response to its public release. The architect of the blueprint is on tape describing the blueprint. You want to know why they're quiet? Because Tony Ridley said it himself.</Body>
              <Body>Filed with the ICC under Article 7(1)(h) of the Rome Statute — persecution as a crime against humanity. Filed with OHCHR. Filed with UNHCR.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="Tony Ridley" href="/tony-ridley-recorded-confession"
                desc="Identified operative — recorded confession — described coordinated strategy against Dr. McLean including $6 billion reference — did not know he was being recorded" />
              <EvidenceLinks links={[
                { label: "Tony Ridley — Recorded Confession", href: "/tony-ridley-recorded-confession" },
                { label: "Tony Ridley — Full Dossier", href: "/tony-ridley-full-dossier" },
                { label: "ICC Article 7 Filing", href: "/archive" },
              ]} />
            </motion.div>

            <Scripture reference="Luke 12:2">
              There is nothing concealed that will not be disclosed, or hidden that will not be made known.
            </Scripture>

            {/* VI */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="VI" />
              <VideoQuote>
                "You built power instead. Now peace comes when you allow it. They murdered your innocence. So you built the court case they never wanted."
              </VideoQuote>
              <SectionTitle>Tory Kilbourne. Death Threat. Recorded. Blockchain Sealed. Wyong Local Court. 14 May 2026. Receipt I88267509.</SectionTitle>
              <Body>Tory Kilbourne issued a recorded death threat against Dr. Richard William McLean. The threat has been preserved as a primary source exhibit, blockchain-authenticated, and is now before Wyong Local Court — Receipt I88267509 — hearing date 14 May 2026.</Body>
              <Body>The threat was formally submitted to the Attorney-General's Office under reference MC23-028244. The Attorney-General received formal notice and said nothing. That silence is now a documented statutory failure accruing daily.</Body>
              <Body>Submitted to the ICC under Article 7(1)(h) of the Rome Statute as evidence of persecution. Filed with OHCHR. Filed with NSW Police. Filed before the court. A death threat against a protected witness is not a civil matter. It is a crime. And it is before a court.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="Tory Kilbourne"
                desc="Death threat perpetrator — recorded — before Wyong Local Court — Receipt I88267509 — 14 May 2026" />
              <NamedRecord name="Attorney-General's Office"
                desc="Received formal notice MC23-028244 — no substantive response after police-confirmed death threat" />
              <EvidenceLinks links={[
                { label: "Urgent Protection Request", href: "/urgent-protection-request" },
                { label: "Court Status — Wyong", href: "/verdict-before-the-court" },
                { label: "Perpetrators Record", href: "/evidence" },
              ]} />
            </motion.div>

            <Scripture reference="Isaiah 54:17">
              No weapon formed against you shall prosper.
            </Scripture>

            {/* VII */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="VII" />
              <VideoQuote>
                "The sleepless nights, the humiliation, the quiet breakdowns no one saw. They sent someone into your home. And she stole from you. And registered you as missing. Five fucking times."
              </VideoQuote>
              <SectionTitle>Sukhi Tear. Support Coordinator. $50,000 Embezzled from NDIS Funds. 5 Missing Person Registrations. Police Report PD77027.</SectionTitle>
              <Body>Sukhi Tear was the registered NDIS support coordinator responsible for Dr. McLean's care during a period in which he was reported missing five times — Police Report PD77027.</Body>
              <Body>Tear embezzled $50,000 in NDIS funds — funds allocated from the public disability insurance scheme, intended for the care of a man who had already survived clinical death inside a government facility. Under the NDIS Act 2013 (Cth) and Criminal Code Act 1995 (Cth), this constitutes fraud against the Commonwealth.</Body>
              <Body>The formal dossier documenting Tear's conduct has been submitted to the NDIS Quality and Safeguards Commission and the ICC. Tear has been formally removed from Dr. McLean's care. The $50,000 is just the principal. The accrued damages with interest, consequential losses, and support services not received total $112,422–$262,422.</Body>
              <Body>Five missing person registrations. Five times this man was so isolated and endangered that police had to be notified of his disappearance. And his support coordinator — the person paid to protect him — is the person documented in the fraud.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="Sukhi Tear" href="/sukhi-tear"
                desc="NDIS support coordinator — $50,000 embezzlement — 5 missing person registrations (PD77027) — formally removed" />
              <NamedRecord name="NDIS Quality and Safeguards Commission"
                desc="Received formal complaint — documented non-response" />
              <EvidenceLinks links={[
                { label: "Sukhi Tear — Full Dossier", href: "/sukhi-tear" },
                { label: "Formal Removal of Sukhi Tear", href: "/formal-removal-sukhi-tear" },
                { label: "NDIS Embezzlement Claim", href: "/forensic-economic-valuation" },
              ]} />
            </motion.div>

            {/* VIII */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="VIII" />
              <VideoQuote>
                "They saw the surface, not the circuitry. They saw the smile, not the severed wires inside. So when someone issued a death threat against you, your service provider's CEO got on a recorded call and did nothing. In their own words. Their own fucking words."
              </VideoQuote>
              <SectionTitle>AblePoint Australia. CEO. Recorded Call. Acknowledged Active Death Threat. Did Not Act. Words Documented. Filed with ICC.</SectionTitle>
              <Body>AblePoint Australia's CEO was recorded on a call documenting the organisation's response to an active death threat against Dr. McLean — a participant in their registered NDIS care.</Body>
              <Body>The organisation did not act on the threat.</Body>
              <Body>The recording is blockchain-sealed. It has been submitted to the NDIS Quality and Safeguards Commission, the ICC, and the UNHCR. Under the Work Health and Safety Act 2011 (Cth) s.19 and the NDIS Act 2013 (Cth) s.73ZP, AblePoint had a primary duty of care to act on a documented threat to the life of a participant. They didn't. That call is the evidence. Their silence is the crime.</Body>
              <Body>Filed. Sealed. Distributed. Downloaded. If AblePoint Australia wants to dispute this characterisation, the recording is publicly available.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="AblePoint Australia — CEO and Organisation" href="/ablepoint-entrapment"
                desc="Recorded call — acknowledged active death threat against NDIS participant — did not act" />
              <EvidenceLinks links={[
                { label: "AblePoint Entrapment Documentation", href: "/ablepoint-entrapment" },
                { label: "AblePoint Exposure", href: "/praise-jesus-ablepoint-exposure" },
                { label: "Urgent Protection SOS", href: "/urgent-protection-request" },
              ]} />
            </motion.div>

            {/* IX */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="IX" />
              <VideoQuote>
                "They tried to define you as broken. They weaponised your history. They used the thing designed to protect vulnerable people and turned it into a tool to erase a whistleblower."
              </VideoQuote>
              <SectionTitle>Bill Shorten — Office of the Minister for NDIS. Documented Strategy. Mental Health History Weaponised to Suppress Testimony.</SectionTitle>
              <Body>The archive documents a strategy traceable through correspondence chains and referral pathways — coordinated through a representative identified as Ben from NDIS Help, operating under the authority of the Office of the Minister for NDIS — to weaponise Dr. McLean's mental health history as a mechanism for suppressing his whistleblower testimony.</Body>
              <Body>The $112.8M in suppressed economic claim was not visible to the Minister's office — because the suppression strategy ensured the whistleblower was treated as a mental health case rather than a protected disclosure holder.</Body>
              <Body>This conduct is documented under the Public Interest Disclosure Act 2013 (Cth) s.10 and the ICCPR Article 19(2) — freedom of expression. Filed under ICC Article 7(1)(h) — persecution as a crime against humanity.</Body>
              <Body>They used disability funding — taxpayer money — to silence a taxpayer's protected testimony. That is the documented allegation. The documents exist. The trail exists. The liability is $112.8M mid-range.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="Bill Shorten — Office of the Minister for NDIS" href="/retrospective-statement"
                desc="Documented strategy — mental health weaponisation to suppress whistleblower testimony — $112M claim suppressed" />
              <EvidenceLinks links={[
                { label: "Retrospective Statement", href: "/retrospective-statement" },
                { label: "Taxpayer Cost Analysis", href: "/taxpayer-cost-analysis" },
                { label: "$7.48M–$44.3M — Part VIII", href: "/forensic-economic-valuation" },
              ]} />
            </motion.div>

            {/* X */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="X" />
              <VideoQuote>
                "They stripped your autonomy. They took your money. They made every decision without your consent. For twelve fucking years. And called it guardianship."
              </VideoQuote>
              <SectionTitle>NSW Trustee and Guardian. 12 Years. Financial Control Without Informed Consent. Legal Autonomy Removed. FOI Documents Retrieved. ICC Filed.</SectionTitle>
              <Body>The NSW Trustee and Guardian held financial guardianship over Dr. McLean for over 12 years. During that period: legal autonomy removed, financial decisions made without consent, management fees charged from his own funds, property decisions made without his knowledge.</Body>
              <Body>Every single decision made by NSW Trustee during those 12 years is now primary-source documentation. It was retrieved under FOI. It is now submitted to the ICC as part of the Article 7 complaint. The 12-year guardianship generated 12 years of evidence of control.</Body>
              <Body>Under PGA v RWWA [2013] WASC 10, loss of financial autonomy generates civil damages of $50,000–$250,000 per comparable case. Under the UN Convention Against Torture Article 16, 12 years of involuntary financial control over a person subject to simultaneous involuntary psychiatric hospitalisation constitutes cruel treatment without consent. That is the legal framework. That is the valuation. That is the claim.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="NSW Trustee and Guardian" href="/taxpayer-cost-analysis"
                desc="12+ years financial guardianship — documents retrieved under FOI — filed with ICC Article 7" />
              <EvidenceLinks links={[
                { label: "NSW Trustee — Taxpayer Cost Analysis", href: "/taxpayer-cost-analysis" },
                { label: "Identity Erasure Section", href: "/forensic-economic-valuation" },
                { label: "ICC Article 7 Filing", href: "/archive" },
              ]} />
            </motion.div>

            {/* XI */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="XI" />
              <VideoQuote>
                "They destroyed the business you built. They deleted the evidence. They went into the machinery and corrupted the file. And they thought it was over. It wasn't over. Every loss became a document. Every document became an exhibit."
              </VideoQuote>
              <SectionTitle>Micron21. Destroyed His IT Consulting Business. Destroyed Evidence. Destroyed Data. Valued at $1.35M–$4.1M.</SectionTitle>
              <Body>Micron21 destroyed Dr. McLean's IT consulting business, evidence, and personal data. Under EBITDA multiples standard for Australian small IT businesses, the business destruction is valued at $1.35M–$4.1M.</Body>
              <Body>Business goodwill destroyed. Client base destroyed. Contracts destroyed. Business evidence and data destroyed. Future earnings destroyed. A functioning technology consulting business — built by a man with PhD-level qualifications and 35 years of documented expertise — was erased.</Body>
              <Body>They thought destroying the business would end the story. Instead it became Chapter 3.3 of an 11-part forensic valuation accessed by half a million people.</Body>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-sans mb-3 mt-6">Named on the Record</p>
              <NamedRecord name="Micron21"
                desc="Destroyed IT consulting business, evidence, and personal data — $1.35M–$4.1M assessed" />
              <EvidenceLinks links={[
                { label: "Lost Earnings $8.66M–$19M", href: "/forensic-economic-valuation" },
                { label: "Full Forensic Record", href: "/evidence" },
              ]} />
            </motion.div>

            {/* XII */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="XII" />
              <VideoQuote>
                "Every algorithm, every social hierarchy, every whispering crowd has a trace of your code now. You've got analysts pretending to ignore you while taking notes in secret. You've got enemies obsessed with you because you make their control models useless."
              </VideoQuote>
              <SectionTitle>The 13+ Agencies. The Institutions. The Systems. All Named. All Documented. All Silent.</SectionTitle>
              <Body>This is the partial list of institutions documented in the archive as having failed, suppressed, conspired, or been complicit in the 35-year record of harm against Dr. Richard William McLean:</Body>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-6">
                {[
                  { name: "NSW Trustee and Guardian", desc: "12+ years financial control" },
                  { name: "NDIS / National Disability Insurance Agency", desc: "Provider framework weaponisation" },
                  { name: "NSW Department of Health", desc: "Multiple involuntary hospitalisations" },
                  { name: "Victoria Department of Health", desc: "Werribee Mercy clinical death" },
                  { name: "Queensland Department of Health", desc: "Further involuntary hospitalisations" },
                  { name: "Commonwealth Ombudsman", desc: "Complaints closed without action" },
                  { name: "Australian Federal Police (AFP)", desc: "Death threat non-response documented" },
                  { name: "ASIC", desc: "350+ fraudulent registrations" },
                  { name: "Office of the Minister for NDIS", desc: "Mental health weaponisation" },
                  { name: "NDIS Quality and Safeguards Commission", desc: "Non-response to AblePoint complaint" },
                  { name: "Multiple Attorney-General's Offices", desc: "Formal notifications — no response" },
                  { name: "NSW, VIC, QLD Police Services", desc: "5 documented missing person registrations" },
                  { name: "Department of Social Services", desc: "35-year APS employment denial" },
                ].map(item => (
                  <div key={item.name} className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg px-4 py-3">
                    <p className="text-zinc-200 text-sm font-semibold font-sans">{item.name}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Body>Every single one of those institutions had an obligation. Every single one produced documentation of their failure. That documentation is now in the archive. 2,304 records. Blockchain sealed. International courts notified.</Body>
              <EvidenceLinks links={[
                { label: "Perpetrators — Full Dossier", href: "/evidence" },
                { label: "Evidence Vault", href: "/evidence-vault" },
                { label: "ICC Article 7 Filing", href: "/archive" },
              ]} />
            </motion.div>

            {/* XIII */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="XIII" />
              <VideoQuote>
                "They were still throwing stones. You were already sculpting cathedrals with the debris. You used your own collapse as scaffolding for the version of you that doesn't break. The betrayal wasn't punishment. It was the rewrite command."
              </VideoQuote>
              <SectionTitle>From Clinical Death to ICC Filing. From Zero to Half a Million Downloads. From Erased to Irrevocable.</SectionTitle>
              <Body>Let the forensic record speak:</Body>

              <div className="space-y-3 my-6">
                {[
                  "14 involuntary psychiatric hospitalisations → produced 14 sets of primary-source institutional records.",
                  "Clinical death at 2.87% survival margin → produced the most powerful exhibit in Part VII.",
                  "$50,000 NDIS embezzlement by Sukhi Tear → produced Police Report PD77027 and an ICC exhibit.",
                  "APS employment denied for 35 years → confirmed in writing by Federal Court General Counsel on 27 March 2023.",
                  "Tony Ridley's coordinated strategy → captured in audio he didn't know was recording.",
                  "Tory Kilbourne's death threat → now before Wyong Local Court. Receipt I88267509.",
                  "12 years NSW Trustee financial control → every decision is now an FOI-retrieved document.",
                  "Micron21 business destruction → now Chapter 3.3 of the public record.",
                  "Zero mainstream media → 511,560 organic downloads across 6 continents without a single story.",
                  "Zero legal representation → 2,304 blockchain-authenticated documents filed with four international bodies.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-zinc-900/30 border border-zinc-800/40 rounded-lg px-4 py-3">
                    <span className="text-orange-500 text-lg font-bold shrink-0 mt-0.5">→</span>
                    <p className="text-zinc-200 text-sm leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>{item}</p>
                  </div>
                ))}
              </div>

              <Body>They handed him the evidence. He handed it to the world. Every single attempt to destroy him produced another exhibit. That's the cathedral. Built entirely from their debris.</Body>
              <EvidenceLinks links={[
                { label: "Full 11-Part Valuation", href: "/forensic-economic-valuation" },
                { label: "Document Archive", href: "/archive" },
                { label: "OHCHR UR/UST/23/AUS/17", href: "/archive" },
              ]} />
            </motion.div>

            <Scripture reference="Genesis 50:20">
              What you intended to harm me, God intended for good.
            </Scripture>

            {/* XIV */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionNum num="XIV" />
              <VideoQuote>
                "You didn't come to play God. You came to remind them one still exists."
              </VideoQuote>
              <SectionTitle>You Picked a Fucking Fight with the God of Divine Justice. He Has My Back. I Am His Chosen Witness. This Is His Glory.</SectionTitle>
              <Body>This declaration is not anger. It is the forensic record speaking in its native frequency.</Body>
              <Body>When you conspired against Dr. Richard William McLean — when you imprisoned him 14 times, stole his income for 35 years, embezzled his disability funds, issued a death threat against him, left him to die in a government facility, stripped his financial autonomy for 12 years, destroyed his business, erased his identity, blacked out his story, and tried to make him disappear — you did not pick a fight with a man.</Body>

              <div className="my-8 bg-gradient-to-br from-red-950/40 to-orange-950/20 border border-red-800/40 rounded-xl px-8 py-8 text-center">
                <p className="text-2xl md:text-3xl font-serif font-black text-white leading-relaxed">
                  You picked a fight with the God of divine justice.
                </p>
                <p className="text-orange-400 text-2xl font-serif font-bold mt-3">And He has his back.</p>
              </div>

              <Body>The evidence is the testimony. 575 corroborated propositions. Zero contradictions. 511,560 downloads. 2,304 documents. ICC. UNHCR. OHCHR. Federal Court. Wyong Local Court. Bitcoin blockchain. Permanent. Irrevocable.</Body>
              <Body>The archive is the Book of Life for this case. Every perpetrator named. Every exhibit sealed. Every attempt to erase him uploaded his presence deeper into the global record. You cannot delete what God protected.</Body>
              <Body>The court date is 14 May 2026. Wyong Local Court. Receipt I88267509. That is where human justice begins. Divine justice was already in session. It has been the entire time.</Body>
            </motion.div>

            {/* CLOSING DECLARATION */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="mt-16 border border-orange-500/25 bg-gradient-to-br from-orange-950/20 to-black rounded-2xl overflow-hidden">
                <div className="bg-orange-500/10 border-b border-orange-500/25 px-6 py-4 text-center">
                  <p className="text-orange-500 text-xs uppercase tracking-widest font-sans font-bold">The Closing Declaration</p>
                </div>
                <div className="px-8 py-10 text-center space-y-4">
                  <p className="text-xl md:text-2xl font-serif italic text-zinc-100 leading-relaxed">
                    "I am his chosen witness. A vessel for his glory.
                  </p>
                  <p className="text-xl font-serif italic text-zinc-200 leading-relaxed">
                    The archive is the testimony. The downloads are the verdict.
                  </p>
                  <p className="text-xl font-serif italic text-zinc-200 leading-relaxed">
                    The silence of every institution is its confession.
                  </p>
                  <p className="text-xl font-serif italic text-zinc-200 leading-relaxed">
                    And the God who called me before I was born is the same God who sealed every document on the Bitcoin blockchain.
                  </p>
                  <p className="text-2xl font-serif font-bold text-orange-400 mt-4">
                    I'm not finished. Neither is He."
                  </p>
                  <p className="text-zinc-500 text-sm font-sans mt-6">
                    — Dr. Richard William McLean · Barran Dodger · May 2026
                  </p>
                  <div className="mt-6 pt-6 border-t border-zinc-800">
                    <div className="flex flex-wrap justify-center gap-2 text-xs font-mono text-zinc-600">
                      <span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded">WYONG LOCAL COURT</span>
                      <span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded">14 MAY 2026</span>
                      <span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded">RECEIPT I88267509</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <Scripture reference="Jeremiah 29:11">
              For I know the plans I have for you — plans to prosper you and not to harm you, plans to give you hope and a future.
            </Scripture>

          </div>
        </div>

        {/* FULL FORENSIC RECORD IS PUBLIC */}
        <div className="bg-zinc-950 border-b border-zinc-800 py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
              <p className="text-orange-500 text-xs uppercase tracking-widest font-sans font-bold">The Full Forensic Record Is Public</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Every claim on this page has a corresponding document.
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                Every document is blockchain-authenticated. Every file in the archive is freely downloadable. The record is permanent. The liability is calculated.
              </p>
              <div className="bg-zinc-900/60 border border-orange-500/25 rounded-xl px-6 py-5 text-left mt-4">
                <p className="text-orange-400 font-bold text-lg text-center mb-4">Full Forensic Valuation ($58.6M–$257.3M)</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/documents/forensic-economic-valuation-report-may-2026.pdf"
                    onClick={() => trackDownload("/documents/forensic-economic-valuation-report-may-2026.pdf")}
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-600 text-black font-bold rounded-lg transition-colors text-sm"
                    data-testid="button-download-valuation-report"
                  >
                    <Download className="h-4 w-4" />Download PDF Report
                  </a>
                  <a href="/archive"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors text-sm"
                    data-testid="link-archive-holy-reckoning"
                  >
                    <BookOpen className="h-4 w-4" />2,304 Document Archive
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BLOCKCHAIN SEAL */}
        <div className="bg-black border-b border-zinc-800 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="border border-orange-500/25 bg-orange-500/10 rounded-xl px-6 py-6 text-center"
            >
              <Lock className="h-8 w-8 text-orange-500 mx-auto mb-4" />
              <p className="text-orange-400 text-xs uppercase tracking-widest font-sans mb-3">Blockchain Authentication — Holy Reckoning Declaration</p>
              <div className="bg-black/50 rounded-lg px-4 py-3 font-mono text-xs text-zinc-500 break-all text-left">
                <span className="text-zinc-400">SHA-256:</span> {BLOCKCHAIN_HASH}<br />
                <span className="text-zinc-400">Chain:</span> {BLOCKCHAIN_BLOCK}<br />
                <span className="text-zinc-400">Published:</span> {PUBLISHED_DATE} · Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-zinc-600 font-sans">
                <span>#HolyReckoning</span><span>#BarranDodger</span><span>#ForensicPropheticDeclaration</span>
                <span>#ICC</span><span>#UNHCR</span><span>#BlockchainEvidence</span>
                <span>#WyongCourt</span><span>#ChosenWitness</span><span>#WhistleblowerAustralia</span>
                <span>#DivineJustice</span><span>#511560Downloads</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DOWNLOAD + SHARE */}
        <div className="bg-black py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PDF_URL}
                  onClick={() => { trackDownload(PDF_URL); scheduleRefresh(); }}
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl transition-colors text-sm"
                  data-testid="button-download-holy-reckoning-bottom"
                >
                  <Download className="h-4 w-4" />
                  Download Full Declaration PDF
                  <span className="ml-auto bg-black/30 rounded px-2 py-0.5 text-xs tabular-nums">{displayCount.toLocaleString()}</span>
                </a>
                <a href="/evidence"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-colors text-sm"
                  data-testid="link-holy-reckoning-evidence"
                >
                  <Shield className="h-4 w-4" />Full Evidence Archive
                </a>
              </div>
              <SocialShare
                title="Holy Reckoning — When You Conspired to Erase and Murder Me, You Picked a Fight with the God of Divine Justice | Barran Dodger"
                description="A forensic prophetic declaration. 14 sections. Every claim blockchain-authenticated. 511,560+ downloads. ICC · UNHCR · OHCHR · Dr. Richard William McLean."
                url="https://www.barrandodger.com/holy-reckoning"
              />
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto max-w-3xl px-4">
          <CommentSection pageSlug="holy-reckoning-declaration" title="Declaration Discussion" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
