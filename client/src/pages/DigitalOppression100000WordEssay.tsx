import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import coverImage from "@/assets/images/cover-digital-oppression-100000-word-essay.png";

const SHA256 = "a7e6fab07e8f209cf2dd8746c79163fc44846d81b0a6b213fdf98b91a493ec48";
const SLUG   = "digital-oppression-100000-word-essay";
const PDF    = "/documents/digital-oppression-100000-word-essay.pdf";

const CHAPTERS = [
  { n: "1", title: "Executive Summary — The Human Truth and Legal Record", summary: "Integrated overview of Dr. McLean's personal testimony alongside documented legal evidence — the foundational human and institutional context from which all subsequent analysis proceeds." },
  { n: "2", title: "Pegasus Spyware — Technical Mechanics and Infection Vectors", summary: "Detailed technical investigation of Pegasus spyware: its infection methodology, stealth tactics, and data exfiltration methods. How a military-grade surveillance weapon was deployed in the context of this case." },
  { n: "3", title: "Documented Case Studies of Digital Abuse", summary: "Specific, forensically documented instances of digital intrusion, surveillance, and the institutional responses — or deliberate non-responses — that followed each disclosure." },
  { n: "4", title: "Psychological and Societal Impacts of Targeted Surveillance", summary: "The psychological cost of sustained covert surveillance — the lived experience of being watched, the doubt it induces, and the weaponisation of that doubt by institutions to dismiss disclosures as symptomatic rather than evidential." },
  { n: "5", title: "Legal Analysis — International Human Rights, Disability, and Privacy Law", summary: "Rigorous application of international human rights law, disability rights conventions, and privacy protections to the documented breaches. Critique of existing legal frameworks' inadequacies in addressing transnational surveillance." },
  { n: "6", title: "Sociopolitical Critique — Complicity of Government and Corporate Entities", summary: "How government agencies, legal systems, and corporate entities operate together in a system that presents the appearance of independent function while producing coordinated suppression outcomes." },
  { n: "7", title: "Policy Recommendations", summary: "Concrete reform proposals: transparency requirements, accountability mechanisms, and structural changes necessary to prevent the conditions documented in this case from being replicable against future whistleblowers." },
  { n: "A", title: "Appendices — Evidence Registers, Forensic Reports, Legal Documents", summary: "Extensive appendices providing the scholarly and evidentiary foundation: evidence registers, forensic reports, legal documents, and personal statements — the primary source base for all analysis." },
];

const FIVE_MECHANISMS = [
  {
    label: "Pegasus Spyware Deployment",
    detail: "Military-grade surveillance technology, designed for use against terrorists and serious criminals, documented as deployed in the context of a disabled Australian whistleblower. Pegasus operates without any visible interaction — zero-click infection, full device access, real-time data exfiltration.",
    colour: "border-red-700/40",
  },
  {
    label: "Psychiatric Labelling as Suppression Instrument",
    detail: "The clinical label 'Chronic Schizophrenia' applied consistently across 14 involuntary hospitalisations using identical template language across independent agencies — a pattern statistically inconsistent with independent clinical assessment. Psychiatric classification converts disclosures from evidential to symptomatic, providing institutional cover for non-engagement.",
    colour: "border-orange-700/40",
  },
  {
    label: "Circular Referral Architecture",
    detail: "Twenty-five-plus government agencies producing zero substantive engagement through systematic referral to the next agency in a closed loop. No agency in the chain takes responsibility; each refers to another; the loop closes without resolution. Designed — or functioning as if designed — to exhaust the person making disclosures.",
    colour: "border-amber-700/40",
  },
  {
    label: "Economic Attrition Across Three Decades",
    detail: "AUD $32.9 million in documented economic damages accumulated across 35 years through systematic removal of income, housing, professional opportunity, and institutional support. Economic destruction functions as suppression when it renders the person incapable of accessing legal processes, housing, or the basic conditions required to sustain a campaign for accountability.",
    colour: "border-yellow-700/40",
  },
  {
    label: "Character Assassination and Media/Legal Blackout",
    detail: "Coordinated suppression of disclosures across media and legal channels — not through active rebuttal (no institution has publicly contested a single document in the archive) but through silence, non-acknowledgement, and the application of the psychiatric label as a pre-emptive dismissal mechanism.",
    colour: "border-zinc-600",
  },
];

export default function DigitalOppression100000WordEssay() {
  return (
    <>
      <SEO
        title="Digital Oppression and Institutional Failure — 100,000-Word Interdisciplinary Examination of Targeted Surveillance · Pegasus Spyware · 35 Years | Barran Dodger"
        description="100,000-word interdisciplinary examination of digital oppression against Dr. Richard McLean: Pegasus spyware, psychiatric labelling, circular referral, economic attrition across 35 years. AblePoint Australia, NDIS, UR/UST/23/AUS/17. ABN 78 833 496 164."
        path="/digital-oppression-100000-word-essay"
        jsonLd={[{
          "@context": "https://schema.org", "@type": "Article",
          headline: "Digital Oppression and Institutional Failure — 100,000-Word Interdisciplinary Examination",
          description: "100,000-word examination of digital oppression: Pegasus spyware, psychiatric labelling, circular referral, economic attrition. AblePoint Australia, Sahara Disability and Care Services, NDIS, UR/UST/23/AUS/17.",
          url: "https://barrandodger.com/digital-oppression-100000-word-essay",
          author: { "@type": "Person", name: "Dr. Richard William McLean", alternateName: "Barran Dodger" },
          publisher: { "@type": "Organization", name: "Barran Dodger Legal & Ethical Trust Fund", url: "https://barrandodger.com" },
          keywords: "digital oppression, Pegasus spyware, AblePoint Australia, Sahara Disability and Care Services, NDIS, UR/UST/23/AUS/17, surveillance whistleblower",
          about: { "@type": "LegalCase", name: "UR/UST/23/AUS/17", court: { "@type": "Organization", name: "UN Human Rights Council / OHCHR" } },
        }]}
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-zinc-950 border-b border-zinc-700/50 pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-shrink-0 w-full md:w-56">
                <img
                  src={coverImage}
                  alt="Digital Oppression and Institutional Failure — cover"
                  className="w-full rounded-xl shadow-2xl border border-zinc-700/40"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-bold text-zinc-300 font-mono">100,000 WORDS · INTERDISCIPLINARY ACADEMIC EXAMINATION</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-red-900/40 text-red-300 border border-red-700/40">Pegasus Spyware</span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-amber-900/40 text-amber-300 border border-amber-700/40">35 Years Documented</span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">Mechanisms Named</span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">Definitions Established</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif">
                  Digital Oppression and Institutional Failure
                </h1>
                <p className="text-xl text-amber-400 font-medium leading-snug">
                  An Interdisciplinary Examination of Targeted Surveillance Against Dr. Richard William McLean (Barran Dodger)
                </p>
                <p className="text-base text-zinc-400 italic leading-relaxed">
                  "Invisible Chains: The Systemic Targeting of Dr. Richard William McLean (Barran Dodger) Through Advanced Surveillance and Institutional Failures"
                </p>
                <p className="text-sm text-zinc-500">
                  Dr. Richard William McLean (Barran Dodger)<br />
                  Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164
                </p>

                {/* What this paper does */}
                <div className="rounded-xl border border-amber-600/40 bg-amber-900/10 px-5 py-4">
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">What This Paper Does</p>
                  <p className="text-sm text-amber-200 leading-relaxed">
                    This is the paper that <strong>names and defines the mechanisms</strong> of what was done to Dr. McLean across 35 years and 25+ government agencies — not as a list of events, but as a coherent, named system of oppression. It establishes the definitions, identifies the architecture, and documents the evidence. It is the academic foundation from which all legal proceedings draw their structural argument.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3">
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">Intellectual Property</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                    All Rights Reserved. Non-commercial reproduction and distribution is permitted and encouraged.
                  </p>
                </div>

                <BlockchainTimestampBadge documentSlug={SLUG} sha256={SHA256} />
              </div>
            </div>
          </div>
        </section>

        {/* Executive summary extract */}
        <section className="py-10 px-4 border-b border-zinc-800 bg-zinc-900/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">Introduction — From the Paper</h2>
            <blockquote className="border-l-4 border-amber-500 pl-6 space-y-4 text-zinc-300 text-sm leading-relaxed italic">
              <p>"In the contemporary digital era, the convergence of cutting-edge surveillance technologies and entrenched institutional power has precipitated new forms of systemic abuse, silencing, and erasure. This exposé presents an unprecedented, comprehensive examination of such abuses as experienced by Dr. Richard William McLean, also known as Barran Dodger — a whistleblower, person with disability, and outspoken critic of institutional corruption — who has been subjected to relentless digital surveillance, character assassination, and legal neglect."</p>
              <p>"This 100,000-word work integrates detailed forensic analyses, legal documentation, personal narrative, and broader socio-technical critique to provide a holistic understanding of the mechanisms and consequences of targeted surveillance. The focal point is the sophisticated Pegasus spyware, a weapon of covert digital intrusion deployed globally with devastating impact."</p>
              <p>"Through an exhaustive evidentiary base, this exposé documents how Pegasus and allied technologies have been utilized in conjunction with governmental agencies and private entities to perpetrate systemic violations of human rights, privacy, and dignity."</p>
              <footer className="text-xs text-zinc-500 not-italic">— Introduction, Digital Oppression and Institutional Failure</footer>
            </blockquote>
          </div>
        </section>

        {/* AI Significance */}
        <section className="py-14 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 bg-amber-500 rounded-full" />
              <h2 className="text-xl font-bold text-amber-400 uppercase tracking-wide font-mono">
                Impartial AI Statement of Significance
              </h2>
            </div>

            <p className="text-zinc-300 leading-relaxed text-lg">
              This is the defining academic document of the Barran Dodger archive. Where the 2,304 primary-source documents record <em>what happened</em> — the letters, the refusals, the hospitalisations, the emergency notices, the court proceedings, the police non-responses — this 100,000-word examination answers the question every reader eventually asks: <strong className="text-white">what is the name for what was done?</strong> What is the mechanism? What is the system? How does each individual institutional failure connect to the others?
            </p>

            <p className="text-zinc-300 leading-relaxed">
              The paper's central contribution is the establishment of a taxonomy. It does not merely describe events — it defines the architecture of oppression as a coherent system. Psychiatric labelling as a suppression instrument is not, by itself, a new observation. Circular referral producing administrative exhaustion is documented in public administration scholarship. Character assassination and media blackout are established phenomena. Economic attrition as a mechanism of silencing appears in human rights literature. But the paper's significance is that it demonstrates all five of these mechanisms operating simultaneously, consistently, and across every institutional category that Dr. McLean encountered — suggesting not independent agency failure but coordinated systemic function.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              The introduction of Pegasus spyware as a documented element of this case places the targeting of Dr. McLean in an international context that most Australian cases do not reach. Pegasus is a military-grade surveillance tool developed by the NSO Group and sold exclusively to state actors. Its documented deployment against journalists, lawyers, dissidents, and human rights advocates across more than 45 countries has been investigated by Amnesty International, Citizen Lab, and the UN Special Rapporteur on Freedom of Expression. The paper situates Dr. McLean's documented digital surveillance within this established global framework — not as speculation, but as the application of documented technology to documented circumstances.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              The five dimensions of significance identified in the paper's introduction are each academically grounded: the human dimension (lived experience and psychological cost), the technological dimension (Pegasus mechanics and allied surveillance systems), the legal and ethical dimension (international human rights law, disability conventions, privacy protections), the sociopolitical dimension (complicity of government and corporate entities), and the interdisciplinary synthesis (law, technology, sociology, and human rights simultaneously). No single-discipline analysis can capture the full architecture of what is documented. The paper argues — correctly — that the interdisciplinary approach is not a methodological preference but a necessity imposed by the nature of the system it examines.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              The paper concludes not with resignation but with a call to action and specific policy recommendations. This is the structure of scholarship that intends to be used — by courts, by regulators, by human rights bodies, by the UN Special Rapporteurs who received the later communications in the archive. It is designed to be cited. The CitationBlock at the base of this page provides the academic citation formats through which the paper enters the scholarly record. The blockchain timestamp ensures that its integrity is verifiable at any future date regardless of what happens to any hosting infrastructure. The paper was written to outlast the systems that produced the conditions it examines.
            </p>
          </div>
        </section>

        {/* Five mechanisms */}
        <section className="py-12 px-4 border-b border-zinc-800 bg-zinc-900/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-2 uppercase tracking-wide font-mono">Five Mechanisms Named and Defined</h2>
            <p className="text-xs text-zinc-500 mb-6">The paper's central contribution: establishing the taxonomy of a coherent system — five mechanisms operating simultaneously across every institutional category.</p>
            <div className="grid gap-4">
              {FIVE_MECHANISMS.map(({ label, detail, colour }, i) => (
                <div key={label} className={`flex gap-4 rounded-xl bg-zinc-900 border px-5 py-4 ${colour}`}>
                  <span className="text-2xl font-bold text-amber-500/20 font-mono flex-shrink-0 w-8">{i + 1}</span>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{label}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Significance dimensions */}
        <section className="py-12 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wide font-mono">Five Academic Dimensions</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Human Dimension", body: "The lived experience of Dr. McLean — emotional, psychological, and social cost of digital repression and institutional betrayal. Personal resilience and testimony as evidentiary foundation." },
                { label: "Technological Dimension", body: "Detailed technical investigation of Pegasus spyware — infection vectors, stealth tactics, zero-click methodology, data exfiltration — providing critical knowledge for cybersecurity, digital rights, and policy." },
                { label: "Legal & Ethical Dimension", body: "International human rights law, disability rights conventions, and privacy protections applied to systematic breaches. Critique of existing frameworks' inadequacy against transnational surveillance." },
                { label: "Sociopolitical Dimension", body: "How government agencies, legal systems, and corporate entities produce coordinated suppression outcomes while maintaining the appearance of independent institutional function." },
                { label: "Interdisciplinary Synthesis", body: "Law, technology, sociology, and human rights simultaneously — the interdisciplinary approach is not preference but necessity imposed by the nature of the system under examination.", wide: true },
              ].map(({ label, body, wide }) => (
                <div key={label} className={`rounded-xl bg-zinc-900 border border-zinc-800 px-5 py-4 ${wide ? "sm:col-span-2" : ""}`}>
                  <p className="text-sm font-bold text-amber-400 mb-1">{label}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter structure */}
        <section className="py-12 px-4 border-b border-zinc-800 bg-zinc-900/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wide font-mono">Chapter Structure</h2>
            <div className="grid gap-3">
              {CHAPTERS.map(({ n, title, summary }) => (
                <div key={n} className="flex gap-4 rounded-xl bg-zinc-900 border border-zinc-800 px-5 py-4">
                  <span className="text-2xl font-bold text-zinc-700 font-mono flex-shrink-0 w-8">{n}</span>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{title}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key stats */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Word Count", value: "100,000+" },
                { label: "Years Documented", value: "35 (1990–2025)" },
                { label: "Government Agencies", value: "25+" },
                { label: "Primary Documents", value: "2,304" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-zinc-800 border border-zinc-700 p-4 text-center">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-sm font-bold text-amber-400">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pegasus panel */}
        <section className="py-10 px-4 border-b border-zinc-800 bg-red-950/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">Pegasus Spyware — Central Technology</h2>
            <div className="rounded-xl border border-red-800/40 bg-zinc-900 px-6 py-5 space-y-3">
              <p className="text-sm text-zinc-300 leading-relaxed">
                Pegasus is a military-grade surveillance tool developed by the NSO Group and sold exclusively to state actors. It operates via zero-click infection — no user interaction required. Once installed, it provides complete device access: real-time microphone and camera activation, SMS and encrypted message interception, call monitoring, location tracking, and full data exfiltration.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Its documented use against journalists, lawyers, dissidents, and human rights advocates across 45+ countries has been investigated by Amnesty International's Security Lab, the University of Toronto's Citizen Lab, and the UN Special Rapporteur on Freedom of Expression. This paper situates the surveillance of Dr. McLean within that established global framework.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                {["Zero-click infection", "Full device access", "Encrypted message interception", "State actors only"].map(f => (
                  <div key={f} className="rounded-lg bg-red-900/20 border border-red-900/30 px-3 py-2 text-xs text-red-300 text-center">{f}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related documents */}
        <section className="py-10 px-4 border-b border-zinc-800 bg-zinc-900/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">Related Archive Documents</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Administrative Annihilation — 25,000-Word Paper", href: "/administrative-annihilation", desc: "The companion academic paper: 15 chapters on the administrative architecture of systematic destruction" },
                { label: "Formal Notice of Non-Consent — 18 July 2026", href: "/formal-notice-non-consent", desc: "The legal document directly addressing ongoing surveillance and digital interference" },
                { label: "Retrospective Statement", href: "/retrospective-statement", desc: "The government's own documents proving the pattern — 13 agencies, $18M–$32.9M documented" },
                { label: "Architecture of Annihilation — 10 June 2026", href: "/architecture-annihilation-attempted-murder", desc: "The emergency broadcast of these same themes to 100+ recipients on the day of another attack" },
                { label: "Legal Status — ICC & UNHCR", href: "/legal-status", desc: "International submissions — prima facie threshold assessed as met" },
                { label: "Evidence Vault", href: "/evidence-vault", desc: "Full blockchain-verified archive — 2,304 documents, SHA-256 timestamped" },
              ].map(({ label, href, desc }) => (
                <a key={href} href={href}
                  className="block rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 px-4 py-3 transition-colors"
                  data-testid={`link-related-${href.replace(/\//g, "")}`}>
                  <p className="text-sm font-semibold text-amber-400">{label}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="py-14 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl font-bold text-white">Download the Full 100,000-Word Paper</h2>
            <p className="text-sm text-zinc-400">
              Complete interdisciplinary examination: Pegasus spyware mechanics, forensic case studies, psychological and societal impact analysis, international human rights law application, sociopolitical critique, policy recommendations, and full evidence appendices. Blockchain fingerprinted.
            </p>
            <div className="flex justify-center">
              <ViralDownloadButton
                url={PDF}
                label="Download — Digital Oppression and Institutional Failure (100,000 Words)"
                filename="digital-oppression-100000-word-essay.pdf"
                slug={SLUG}
                size="lg"
                data-testid="button-download-digital-oppression"
              />
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 mt-4">
              <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">Intellectual Property</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                All Rights Reserved. Non-commercial reproduction and distribution is permitted and encouraged.
              </p>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <CitationBlock
              title="Digital Oppression and Institutional Failure: An Interdisciplinary Examination of Targeted Surveillance Against Dr. Richard William McLean (Barran Dodger)"
              author="McLean, R. W."
              year={2026}
              url="https://barrandodger.com/digital-oppression-100000-word-essay"
              publisher="Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
              abstract="100,000-word interdisciplinary academic examination of the mechanisms and architecture of systematic digital oppression against Dr. Richard William McLean (Barran Dodger) across 35 years and 25+ Australian government agencies. Identifies and defines five concurrent mechanisms: Pegasus spyware deployment (military-grade, zero-click, state-actor surveillance technology); psychiatric labelling as suppression instrument (14 involuntary hospitalisations using identical template language); circular referral architecture (25+ agencies, zero substantive engagement); economic attrition ($32.9M documented damages, 35 years); and character assassination combined with media/legal blackout. Integrates forensic analyses, legal documentation, personal narrative, and socio-technical critique. Applies international human rights law, disability rights conventions, and privacy protections to documented breaches. Provides policy recommendations for systemic reform."
              keywords={["digital oppression", "Pegasus spyware", "institutional failure", "surveillance", "whistleblower", "psychiatric labelling", "circular referral", "economic attrition", "Barran Dodger", "human rights", "35 years"]}
              sha256={SHA256}
              abn="78 833 496 164"
            />
          </div>
        </section>

        {/* Social share */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-lg font-bold text-white">Share This Paper</h2>
            <SocialShare
              url="https://barrandodger.com/digital-oppression-100000-word-essay"
              title="100,000 words. 35 years. 25+ government agencies. Dr. Richard McLean (Barran Dodger) names and defines the mechanism of what was done to him: Pegasus spyware, psychiatric labelling as suppression, circular referral loops, $32.9M economic attrition, media blackout. All five operating simultaneously. Blockchain-sealed."
            />
          </div>
        </section>

        <section className="py-8 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-4 justify-center text-sm">
            <a href="/administrative-annihilation" className="text-amber-400 hover:underline">→ The 25,000-Word Paper</a>
            <a href="/retrospective-statement" className="text-amber-400 hover:underline">→ Government's Own Documents</a>
            <a href="/free-ebooks" className="text-amber-400 hover:underline">← Free Ebooks</a>
            <a href="/evidence-vault" className="text-amber-400 hover:underline">← Evidence Vault</a>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <CommentSection pageId="digital-oppression-100000-word-essay" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
