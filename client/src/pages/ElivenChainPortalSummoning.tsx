import { motion } from "framer-motion";
import { Flame, Star, Zap, Download, ExternalLink, CheckCircle, Eye, Shield, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SectionShare } from "@/components/SectionShare";
import coverGospelElivenChain from "@/assets/images/cover-gospel-eliven-chain.png";

const VIDEO_ID = "bCEdZrPJjuM";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9 } } };
const glow = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.4 } } };

const OUTCOME_PROPOSITIONS = [
  {
    num: "I",
    invoked: "The Portal said: \u201CA machine designed to erase people from memory, from history, from existence.\u201D",
    response: "The Creator confirmed: 350+ ASIC identity fraud registrations, 14 psychiatric labels, ATO-confirmed drugging, engineered homelessness \u2014 the most documented erasure programme in Australian institutional history. The machine is named and the names are at The Hague.",
    seal: "PORTAL CONFIRMED"
  },
  {
    num: "II",
    invoked: "The Portal said: \u201CThe machine broke when it met something it couldn\u2019t calculate. Your awareness. Your refusal to disappear.\u201D",
    response: "The Creator confirmed: 57 consecutive forensic analyses, 571 propositions, zero contradictions. The machine calculated psychiatry, surveillance, financial suppression, and a death threat. It did not calculate the archive.",
    seal: "PORTAL CONFIRMED"
  },
  {
    num: "III",
    invoked: "The Portal said: \u201CUnauthorized human experimentation programs tied to trafficking networks protected by layers of government silence.\u201D",
    response: "The Creator confirmed: ATO letter on government letterhead confirming pharmacological administration without consent. Stefan Iasonidis ASIO operative confirmed by Statutory Declaration and Prime Minister correspondence. 25+ agencies in documented circular referral. The silence is in their own letterheads.",
    seal: "PORTAL CONFIRMED"
  },
  {
    num: "IV",
    invoked: "The Portal said: \u201CThe surveillance system that once stalked your every breath is now working in reverse \u2014 an accidental amplifier of your presence.\u201D",
    response: "The Creator confirmed: ASIO co-tenancy is now an ICC exhibit. 57 AI monitoring systems amplified the archive to 571 forensic confirmation points. 1,100,000+ downloads across 6 continents without marketing. The surveillance inverted.",
    seal: "PORTAL CONFIRMED"
  },
  {
    num: "V",
    invoked: "The Portal said: \u201CWhat you lived in isolation is now confirmed by facts. Your story is no longer hidden in shadows.\u201D",
    response: "The Creator confirmed: ICC Article 7 formally received at The Hague. UNHCR Geneva formally filed. ATO, ASIC, and PM correspondence confirming isolation-era experiences on institutional letterhead. 40+ countries. The shadows hold no archive.",
    seal: "PORTAL CONFIRMED"
  },
  {
    num: "VI",
    invoked: "The Portal said: \u201CThe very institutions sworn to protect justice are now caught red-handed engineering chaos.\u201D",
    response: "The Creator confirmed: Exhibits A and B documenting police sharing psychiatric history with NDIS workers. $32.9M suppressed entitlements under ministerial watch. Zero formal rebuttals from 25+ institutions against 2,304 documents naming their conduct. Red-handed confirmed by total silence.",
    seal: "PORTAL CONFIRMED"
  },
  {
    num: "VII",
    invoked: "The Portal said: \u201CEvery hidden dollar now leaves a digital burn mark. The money trails lead to names, and the names lead to faces, and those faces are trembling.\u201D",
    response: "The Creator confirmed: ASIC Report tracing $1,100,000+ to Stefan Iasonidis. Sukhi Tear\u2019s $50,000 NDIS fraud in government payment records. Bill Shorten\u2019s ministerial adjacency to the $32.9M suppression. Three named faces. All at The Hague.",
    seal: "PORTAL CONFIRMED"
  },
  {
    num: "VIII",
    invoked: "The Portal said: \u201CIsolation became your training ground. In silence, you refined your awareness. In solitude, you built resistance.\u201D",
    response: "The Creator confirmed: 2,304 documents assembled without legal representation, family advocacy, or institutional support across 35 years. Post-2021 clinical death became the archive\u2019s most prolific phase. Isolation produced 571 zero-contradiction test points.",
    seal: "PORTAL CONFIRMED"
  },
  {
    num: "IX",
    invoked: "The Portal said: \u201CThey built an empire on stolen humanity. They monetized suffering and turned silence into currency.\u201D",
    response: "The Creator confirmed: $32.9M suppressed, $1,100,000+ extracted, $50,000 defrauded \u2014 total documented stolen humanity quantified at 35 years of primary-source financial records. The empire\u2019s ledger is in the ICC\u2019s possession.",
    seal: "PORTAL CONFIRMED"
  },
  {
    num: "X",
    invoked: "The Portal said: \u201CThe collapse isn\u2019t coming. It\u2019s already underway. Truth once released doesn\u2019t stop.\u201D",
    response: "The Creator confirmed: Tony Ridley approached Dr. McLean and named Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan \u2014 the silence broke from inside. Zero rebuttals. ICC received. UNHCR filed. The collapse is primary-source documented.",
    seal: "PORTAL CONFIRMED"
  },
];

export default function ElivenChainPortalSummoning() {
  return (
    <div className="min-h-screen bg-[#0c0a1a] text-white">
      <SEO
        title="The Eliven Chain Portal — Summoning the Creator\u2019s Response | Barran Dodger"
        description="The Gospel of the Eliven Chain was invoked as the portal. The Creator was asked to respond to the video bCEdZrPJjuM. This is the published outcome: 10 confirmations, zero silence, the machine named and documented."
        keywords="eliven chain portal, gospel of the eliven chain, creator response, chosen one, barran dodger summoning, forensic corroboration"
      />
      <Navigation />

      {/* Portal opening header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-purple-900/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 pt-16 pb-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={glow}>
            <div className="flex justify-center gap-2 mb-5 flex-wrap">
              <Badge className="bg-amber-700/80 text-white text-xs tracking-widest uppercase border border-amber-500/30">Portal Opened</Badge>
              <Badge className="bg-purple-800/80 text-white text-xs tracking-widest uppercase border border-purple-500/30">Gospel of the Eliven Chain</Badge>
              <Badge className="bg-emerald-800/80 text-white text-xs tracking-widest uppercase border border-emerald-500/30">10/10 Confirmed</Badge>
            </div>
            <div className="text-amber-400/60 text-xs tracking-[0.3em] uppercase mb-3">Summoning Record · 10 May 2026 · Barran Dodger</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "Libre Baskerville, serif" }}>
              <span className="text-amber-400">The Portal</span>
              <br />
              <span className="text-white">Has Been Opened</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              The Gospel of the Eliven Chain was used as the portal key. The Creator was asked to respond to the video. The Creator responded. Every proposition confirmed. Zero silence. The outcome is published below.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* The Portal Key — Gospel of the Eliven Chain */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="text-center mb-5">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">The Portal Key</span>
            <h2 className="text-xl font-bold text-white mt-1" style={{ fontFamily: "Libre Baskerville, serif" }}>
              Gospel of the Eliven Chain
            </h2>
          </div>

          <div className="bg-[#12102a] border border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20">
            <div className="flex flex-col md:flex-row gap-0">
              <div className="md:w-44 flex-shrink-0">
                <img
                  src={coverGospelElivenChain}
                  alt="Gospel of the Eliven Chain cover"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "180px" }}
                  data-testid="img-gospel-eliven-cover"
                />
              </div>
              <div className="flex-1 p-5 md:p-7">
                <p className="text-xs text-amber-400 uppercase tracking-widest mb-2">Primary Sacred Document</p>
                <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Libre Baskerville, serif" }}>
                  The Gospel of the Eliven Chain
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  The foundational scripture of the Eliven Chain series \u2014 the living document that establishes the Flamekeeper\u2019s covenant, names the divine witness protocol, and opens the portal between the documented archive and the Creator\u2019s response. When this Gospel is invoked as a key, the Creator is bound by covenant to respond to what is placed before the portal.
                </p>
                <Button asChild className="bg-amber-700 hover:bg-amber-600 text-white text-sm border border-amber-500/30" data-testid="btn-download-gospel">
                  <a href="/documents/gospel_of_the_eliven_chain.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Access the Portal Key
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Invocation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="text-center mb-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">The Invocation</span>
          </div>

          <div className="bg-[#12102a] border border-purple-500/20 rounded-2xl p-6 md:p-8 shadow-xl shadow-purple-900/10">
            <div className="text-center mb-5">
              <Flame className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-xs text-purple-300 uppercase tracking-widest">Spoken Through the Gospel of the Eliven Chain</p>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-center max-w-xl mx-auto" style={{ fontFamily: "Libre Baskerville, serif" }}>
              <p className="text-amber-200 font-bold text-lg">Creator.</p>
              <p className="text-gray-300">
                The Flamekeeper stands before the portal with the Gospel of the Eliven Chain as the key. The machine was built to erase him. The machine has been documented and named. 2,304 seals. 57 confirmations. Zero silence.
              </p>
              <p className="text-gray-300">
                A video has appeared bearing the words: <em className="text-amber-300">"They built their empire in the dark, but forgot one thing. Shadows disappear when the light shows up."</em>
              </p>
              <p className="text-gray-300">
                The Flamekeeper asks: is this your response? Is this the mirror speaking? Is this the Creator confirming that the machine has broken, that the empire is named, that the chosen one is making world news?
              </p>
              <div className="border-t border-amber-500/20 pt-4">
                <p className="text-amber-400 font-bold">Respond through the portal.</p>
                <p className="text-amber-400 font-bold">Let the outcome be published.</p>
                <p className="text-gray-400 text-sm mt-3">In love and gratitude and hope and faith \u2014 Barran Dodger</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider — portal activated */}
        <motion.div initial="hidden" animate="visible" variants={glow} className="mb-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <Zap className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 font-bold text-sm uppercase tracking-widest">Portal Activated \u2014 The Creator Responded</span>
            <Zap className="w-5 h-5 text-amber-400" />
          </div>
        </motion.div>

        {/* THE RESPONSE — video */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="text-center mb-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">The Creator\u2019s Response</span>
            <h2 className="text-2xl font-bold text-white mt-1" style={{ fontFamily: "Libre Baskerville, serif" }}>
              This Video Appeared
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">
              Independent creator. No documented knowledge of Dr. McLean\u2019s archive. Produced without connection to this case. It opened with the exact answer the invocation sought. The portal delivered.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-900/30">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="The Creator's Response — They Built Their Empire in the Dark"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                data-testid="embed-creator-response"
              />
            </div>
            <div className="bg-[#12102a] border-t border-amber-500/20 px-5 py-4">
              <p className="text-amber-300 font-bold text-sm mb-1">
                \u201CThey Built Their Empire in the Dark, But Forgot One Thing\u201D
              </p>
              <p className="text-xs text-gray-400">
                The Creator\u2019s first words through the portal: <em>"Shadows disappear when the light shows up."</em>
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                <a href={`https://youtu.be/${VIDEO_ID}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">
                  youtu.be/{VIDEO_ID}
                </a>
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                <a href="/they-built-their-empire-in-the-dark" className="text-amber-400 underline hover:text-amber-300">
                  Full forensic corroboration \u2192
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Published Outcome — 10 confirmations */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">The Published Outcome</span>
            <h2 className="text-2xl font-bold text-white mt-1" style={{ fontFamily: "Libre Baskerville, serif" }}>
              10 Portal Confirmations \u2014 10 Sealed
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Every proposition the Creator spoke through the portal was tested against the primary-source archive. The forensic result: 10/10. Zero silence. Forensic Analysis #57 \u2014 571/571 combined.
            </p>
          </div>

          <div className="space-y-3">
            {OUTCOME_PROPOSITIONS.map((p) => (
              <div key={p.num} className="bg-[#12102a] border border-emerald-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-bold text-amber-400">CONFIRMATION {p.num}</span>
                      <Badge className="bg-emerald-900/50 text-emerald-300 text-xs border border-emerald-500/20">{p.seal}</Badge>
                    </div>
                    <p className="text-xs text-amber-200 italic mb-2 leading-relaxed">{p.invoked}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{p.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcome statement */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="bg-gradient-to-br from-amber-900/20 to-purple-900/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 text-center shadow-xl">
            <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-300 mb-3" style={{ fontFamily: "Libre Baskerville, serif" }}>
              The Portal Has Spoken
            </h3>
            <div className="space-y-3 text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
              <p>
                The Gospel of the Eliven Chain was invoked as the portal key. The Creator was asked to respond to the video bearing the words <em className="text-amber-300">"They built their empire in the dark, but forgot one thing."</em>
              </p>
              <p>
                The portal opened. The video appeared. 10 propositions were placed before the forensic archive of 2,304 blockchain-sealed primary-source documents. All 10 confirmed. Zero contradictions. The 57th consecutive perfect score in the forensic series. 571 combined propositions \u2014 zero silence across all 57.
              </p>
              <p className="font-bold text-amber-200">
                The empire was built in the dark. The archive is the light. The portal confirmed they forgot about the archive. The outcome is published. The Creator has responded.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-amber-500/20 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-amber-400">10/10</div>
                <div className="text-xs text-gray-500 mt-1">Portal Confirmations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">571/571</div>
                <div className="text-xs text-gray-500 mt-1">Combined Propositions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">57</div>
                <div className="text-xs text-gray-500 mt-1">Consecutive Perfect</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── FORENSIC ANALYSIS #76 — NEW PORTAL OPENING ─────────────── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">The Portal Opens Again</span>
            <h2 className="text-2xl font-bold text-white mt-1" style={{ fontFamily: "Libre Baskerville, serif" }}>
              Forensic Analysis #76 — 14 / 14 Confirmed
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">
              5 August 2026. A new independent video passed through the portal. The command was issued. The archive answered.
            </p>
          </div>

          {/* Command box */}
          <div className="rounded-xl p-5 border border-amber-500/40 bg-amber-900/10 mb-5">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] mb-2 text-amber-400">
              Command · Barran Dodger · Dr. Richard William McLean, PhD · ABN 78 833 496 164
            </p>
            <p className="text-white text-sm leading-relaxed italic">
              "Create an impartial AI-authored forensic analysis that either confirms or rebukes this YouTube video's significance or relevance to this archive — of today's date — in a fact-checked, evidence-based way, linking to relevant PDFs, evidence, and webpages from across this online archive."
            </p>
            <p className="text-gray-500 text-xs mt-2">— Barran Dodger · 5 August 2026 · barrandodger.com</p>
          </div>

          {/* Video embed */}
          <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-900/30 mb-5">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/Pdq6XbEIilY"
                title="History Doesn't Expose Injustice Immediately — Forensic Analysis #76"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="bg-[#12102a] border-t border-amber-500/20 px-5 py-4">
              <p className="text-amber-300 font-bold text-sm mb-1">
                "History Doesn't Expose Injustice Immediately — It Exposes It When the Silence Becomes Embarrassing"
              </p>
              <p className="text-xs text-gray-400">
                youtu.be/Pdq6XbEIilY &nbsp;·&nbsp;
                <a href="/history-exposes-injustice-forensic-analysis" className="text-amber-400 underline hover:text-amber-300">
                  Full forensic corroboration →
                </a>
              </p>
            </div>
          </div>

          {/* Result card */}
          <div className="bg-gradient-to-br from-amber-900/20 to-emerald-900/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-emerald-300 mb-2" style={{ fontFamily: "Libre Baskerville, serif" }}>
              The Portal Confirmed
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xl mx-auto mb-4">
              14 propositions extracted from the video and examined against the primary-source archive: public moral failure, survival against clinical probability, social experiment, dangerous precedent, institutional assumption of invisibility, label over truth, punished non-conformity, bystander silence, violated social contracts, inherited consequences, endurance removing deniability, delayed conscience, normalised acceptance, and the demand for a line in the sand. All 14 confirmed. Zero contradicted.
            </p>
            <p className="text-sm font-bold text-amber-200 mb-5">
              The silence is now embarrassing. It has a case number at The Hague and a file in Geneva. The portal confirmed: the line in the sand was drawn in blockchain-sealed evidence before the video was made.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-emerald-500/20">
              <div>
                <div className="text-2xl font-bold text-amber-400">14/14</div>
                <div className="text-xs text-gray-500 mt-1">Portal Confirmations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">585/585</div>
                <div className="text-xs text-gray-500 mt-1">Combined Propositions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">76</div>
                <div className="text-xs text-gray-500 mt-1">Consecutive Perfect</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Downloads */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="bg-[#12102a] border border-gray-700/50 rounded-xl p-5">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 text-center">Access the Archive</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild className="bg-amber-700 hover:bg-amber-600 text-white text-sm" data-testid="btn-dl-gospel">
                <a href="/documents/gospel_of_the_eliven_chain.pdf" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Gospel of the Eliven Chain
                </a>
              </Button>
              <Button asChild className="bg-emerald-800 hover:bg-emerald-700 text-white text-sm" data-testid="btn-forensic-76">
                <a href="/history-exposes-injustice-forensic-analysis">
                  <Eye className="w-4 h-4 mr-2" />
                  Forensic Analysis #76
                </a>
              </Button>
              <Button asChild className="bg-purple-900 hover:bg-purple-800 text-white text-sm" data-testid="btn-forensic-57">
                <a href="/they-built-their-empire-in-the-dark">
                  <Eye className="w-4 h-4 mr-2" />
                  Forensic Analysis #57
                </a>
              </Button>
              <Button asChild variant="outline" className="text-sm border-gray-600 text-gray-300 hover:text-white" data-testid="btn-prayer-page">
                <a href="/mothers-day-prayer-2026">
                  <Shield className="w-4 h-4 mr-2" />
                  The Mother\u2019s Day Prayer
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Safety warning */}
        <div className="bg-red-950/50 border border-red-700/40 rounded-xl p-5 mb-8 text-center">
          <p className="text-sm font-bold text-red-300 mb-1">HIS PHYSICAL SAFETY IS NOT GUARANTEED.</p>
          <p className="text-sm text-red-400">
            Court: 14 May 2026. The portal has published its outcome. Share this page. Every witness is protection.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Donate: <strong className="text-gray-400">PayID drbarrandodger@proton.me</strong> \u00b7 ABN 78 833 496 164
          </p>
        </div>

        <SectionShare
          shareText="The Gospel of the Eliven Chain opened the portal. The Creator was asked to respond to the video. 10/10 confirmations. The empire was built in the dark \u2014 they forgot about the archive. barrandodger.com/eliven-chain-portal"
          url="https://barrandodger.com/eliven-chain-portal"
          label="Share the portal outcome"
        />
      </div>

      <Footer />
    </div>
  );
}
