import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import coverImg from "@/assets/images/cover-april-mclean-familial-betrayal.png";
import bruceMcMasterScreenshot from "@/assets/images/bruce-mcmaster-threat-democracy.png";
import bruceWitnessInOnIt from "@/assets/images/bruce-witness-in-on-it.png";
import bruceGoodForNothingReject from "@/assets/images/bruce-good-for-nothing-reject.png";
import dougMcLeanGaslighting from "@/assets/images/doug-mclean-gaslighting-facebook.png";
import brucePsychiatricKeysborough from "@/assets/images/bruce-psychiatric-keysborough-steve-paris.png";
import maxwellPrastickTiktok from "@/assets/images/maxwell-prastick-tiktok-500.png";
import bruceMcMaster300Transfer from "@/assets/images/bruce-mcmaster-300-transfer.png";
import { AlertTriangle, Shield, FileText, Users, Lock } from "lucide-react";

const FACTS = [
  {
    label: "The AVO as Exile Instrument",
    body: "April McLean signed a legal document — an Apprehended Violence Order — that constituted the official, court-filed mechanism of her son's exile. She did not have to do this. She chose to. That signature, executed in coordination with corrupt police officers and the legal fraternity, transformed a family dispute into a state-backed instrument of erasure. The AVO was not protection. It was a filing. Filed by a mother against a son who was already homeless, already in exile, already medically dead on a hospital table. The document placing Barran in the official record as a person of violence was signed by the woman who raised him. That signature sits in the court record. It cannot be unsigned.",
    verdict: "DOCUMENTED — COURT-FILED AVO AS INSTRUMENT OF EXILE · SIGNED BY MOTHER · COLLUDING WITH POLICE AND LEGAL FRATERNITY"
  },
  {
    label: "The Inner Circle Principle — How Every Conspiracy Requires Familial Compromise",
    body: "For a state-coordinated persecution to function over thirty-five years, the inner circle must be compromised. Not the outer ring. The inner ring. Intelligence operations, judicial manipulation, NDIS weaponisation, psychiatric hospitalisation cycles — none of these function at full suppression capacity while the target retains a family that believes him, advocates for him, or provides emergency shelter. The McLean family did not accidentally fail to intervene. They were the primary compression mechanism. Steve Iasonidis could not have operated as an intimate surveillance operative if Barran's family had recognised the pattern. ASIO could not have maintained the isolation architecture if his mother had publicly stated what she knew. The family was not peripheral to the persecution. They were the load-bearing wall.",
    verdict: "STRUCTURAL ANALYSIS — THE FAMILY AS PRIMARY SUPPRESSION MECHANISM · INNER CIRCLE COMPROMISE DOCUMENTED"
  },
  {
    label: "Barran Was the Family Scapegoat — Named, Documented, Prosecuted to Its Logical End",
    body: "The scapegoat dynamic is not a psychological theory applied retrospectively. It is the documented operational reality of the McLean family structure across Dr. McLean's entire life: the child identified as different, as difficult, as the source of family tension; subjected to coordinated denial when he disclosed abuse; denied resources when he disclosed persecution; redirected to the institutions doing the persecuting; financially isolated while family assets were protected. The scapegoat dynamic, when it operates at this intensity and duration, has a documented trajectory: marginalisation → institutionalisation → exile → fatal injury. In this case, all four stages are in the archive. Not as theory. As timestamped documents. The family scapegoat mechanism was prosecuted from childhood to near-death to political exile to an assassination attempt that the family refused to acknowledge. This is not dysfunction. This is a documented outcome.",
    verdict: "DOCUMENTED TRAJECTORY — SCAPEGOAT MECHANISM → FATAL INJURY → POLITICAL EXILE → ASSASSINATION ATTEMPT → COVER-UP"
  },
  {
    label: "Doug McLean's Death — A More Sinister Plot Emerges",
    body: "The death of Doug McLean, Barran's father, reveals what April McLean's ongoing conduct was always protecting: not her son, but the structure. April McLean was herself framed by her husband's death — positioned as the grieving widow, the loving mother seeking reconciliation, the person who simply didn't understand. But the archive documents that her conduct after Doug's death was continuous with her conduct before it: the same institutional redirections, the same denials, the same strategic silences. Doug McLean's death did not produce a mother who came forward. It produced a mother who continued. That continuity is the evidence. The narrative of the confused, overwhelmed parent was always the cover story. The conduct — the AVO signature, the NDIS redirections, the silence on the assassination attempt, the absence at the hospital — is the document.",
    verdict: "DOCUMENTED — POST-DEATH CONDUCT CONTINUOUS WITH DOCUMENTED PERSECUTION PATTERN · FRAMING NARRATIVE CONTRADICTED BY ARCHIVE"
  },
  {
    label: "The Aligned Network — April McLean, Steve Iasonidis, Corrupt Police, Courts, Bruce McMaster",
    body: "April McLean's documented alignment was not with an isolated actor. It was with a coordinated network: Steve Iasonidis (ASIO operative, former fiancé, judicial fraud — Centrelink claim ref 305 227 423H), who could not have maintained intimate surveillance without family silence; corrupt police officers who processed the AVO and declined to investigate death threats; the legal fraternity that filed the exile instruments; and every member of the immediate and extended McLean family who participated in or benefited from the coordinated financial isolation of the archive's subject. This includes Bruce McMaster, who delivered the most revealing characterisation in the documented record of familial position: calling Barran Dodger 'a threat to democracy.' That statement — made by a family member — is not a personal view. It is a declaration of alignment with the state apparatus that was calling the same person a criminal, a paranoid, a danger. When your own extended family uses the same language as the intelligence services targeting you, the inner circle is not compromised. It is the operation.",
    verdict: "DOCUMENTED NETWORK — IASONIDIS · CORRUPT POLICE · LEGAL FRATERNITY · ALL IMMEDIATE AND EXTENDED FAMILY · BRUCE McMASTER"
  },
  {
    label: "Barran Died in 2021 — And No One in His Family Shed a Tear",
    body: "In 2021, Dr. Richard William McLean died. Clinically. Documented. Werribee Mercy Hospital. Survival probability: 2.87%. He was revived. His family's documented response to this event is on the primary-source record: silence. Not grief. Not advocacy. Not a public statement. Not a visit to the hospital. Not a phone call to international human rights bodies whose contact details they had been provided. Silence. The clinical death of a son — documented, medical, timestamped — produced no documented grief response from the family that raised him. That absence is not a private matter. It is an evidentiary entry. When a person's clinical death produces no documented familial response, the archive asks a single forensic question: what does the silence protect? The answer is in this record.",
    verdict: "DOCUMENTED — CLINICAL DEATH 2021 · SURVIVAL 2.87% · ZERO DOCUMENTED FAMILIAL GRIEF RESPONSE · SILENCE IS THE EXHIBIT"
  },
  {
    label: "Bob Martin's Funeral — Days After Barran's Clinical Death — The Family Honoured the Paedophile",
    body: "Bob K. Martin sexually abused Barran Dodger as a child. This is a documented disclosure, placed on the international record, CC'd to the ICC and OHCHR. The McLean family's documented response to this disclosure was denial. They refused to name him. They refused to acknowledge the abuse. They refused to advocate for any investigation. Then, within days of Barran's clinical death — the moment at which he was on a hospital table with a 2.87% chance of survival — the McLean family attended Bob K. Martin's funeral. They honoured him. They celebrated his life. The man who sexually abused their child died within the same window as their child's clinical death. They went to the funeral. They did not go to the hospital. That sequence — not as allegation but as documented, contemporaneous fact — is now on the permanent record. Bob Martin's death and Barran's revival occurred on the same day. The family's documented response to both events is in this archive.",
    verdict: "DOCUMENTED — BOB MARTIN FUNERAL ATTENDED BY FAMILY · DAYS AFTER BARRAN'S CLINICAL DEATH · SAME DAY AS REVIVAL · ABUSE DENIED · PAEDOPHILE HONOURED"
  },
];

export default function FamilialInnerCircleExposed() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#06000a" }}>
      <SEO
        title="The Inner Circle Exposed — April McLean, Family Scapegoat & Coordinated Exile | Barran Dodger"
        description="This document exposes the inner circle of Barran Dodger's 35-year persecution. April McLean signed the AVO exile instrument. The family attended the paedophile's funeral the same week Barran died clinically. Bruce McMaster called him a threat to democracy. ABN 78 833 496 164."
        path="/familial-inner-circle-exposed"
      />
      <Navigation />

      <main style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px))" }}>

        {/* ── CLASSIFICATION BAR ── */}
        <div className="w-full h-1.5" style={{ background: "linear-gradient(to right, #7f1d1d, #dc2626, #7f1d1d)" }} />

        {/* ── HERO ── */}
        <section className="relative px-4 py-16 md:py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #0a0003 0%, #1a000a 50%, #08000f 100%)" }}>
          <div className="absolute inset-0 pointer-events-none opacity-30"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(139,0,0,0.06) 48px)" }} />

          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-xs font-mono tracking-widest uppercase">Primary Exhibit — Familial Complicity Record</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4" style={{ color: "#fff" }}>
              The Inner Circle<br />
              <span style={{ color: "#dc2626" }}>Exposed</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-3" style={{ color: "#e5e7eb" }}>
              April McLean Did Not Have to Admit She Was a Ringleader.<br className="hidden md:block" />
              This Document Does It for Her.
            </p>
            <p className="text-sm font-mono mb-8" style={{ color: "#9ca3af" }}>
              Dr. Richard William McLean · ABN 78 833 496 164 · Barran Dodger · 1 May 2026
            </p>

            {/* Cover + download grid */}
            <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start bg-zinc-900/30 border border-red-900/40 rounded-2xl p-6 md:p-8">
              <div className="flex-shrink-0">
                <img
                  src={coverImg}
                  alt="The Inner Circle Exposed — April McLean Familial Betrayal"
                  className="w-full rounded-xl border border-red-900/30 shadow-2xl shadow-red-900/20"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#f87171" }}>Statement of Document Significance</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
                    This document contains the formal written record of the moment April McLean was given every documented fact of her son's persecution — his homelessness, his asylum status, his UN case, his near-death, his identification as an assassination target — and responded by asking whether he had accepted help from the very institutions named as his torturers. That response, preserved and CC'd to the ICC and OHCHR, is not a personal communication. It is the primary-source exhibit establishing her position in the documented conspiracy.
                  </p>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: "#d1d5db" }}>
                    For a state-coordinated persecution to function over thirty-five years without interruption, the inner circle must be compromised. This document proves the inner circle was not merely complicit — it was operational. April McLean signed the AVO that exiled her son in coordination with corrupt police and the legal fraternity. She attended the funeral of his documented childhood sexual abuser within days of his clinical death. Bruce McMaster — extended family — called him "a threat to democracy" using the same language as the intelligence services targeting him. The conspiracy did not penetrate the family. The family was the conspiracy's architecture.
                  </p>
                </div>

                <ViralDownloadButton
                  url="/documents/april-mclean-familial-betrayal.pdf"
                  label="Download — The Question You Chose to Ask (PDF)"
                  filename="April_McLean_Familial_Betrayal_Barran_Dodger.pdf"
                  slug="april-mclean-familial-betrayal"
                  size="lg"
                  className="bg-red-900/40 hover:bg-red-800/60 border border-red-700/50 text-red-200 hover:text-white font-black rounded-xl"
                  documentTitle="The Question You Chose to Ask — April McLean's Documented Complicity"
                />
                <p className="text-xs" style={{ color: "#6b7280" }}>
                  Also included in the{" "}
                  <a href="/#divine-download" className="text-red-400 underline">complete archive detonation ZIP</a>
                  {" "}— downloaded 1,100,000+ times globally. · OHCHR Ref UR/UST/23/AUS/17
                </p>

                {/* ABN block */}
                <div className="rounded-xl border border-red-900/25 bg-red-950/20 px-4 py-3 space-y-1">
                  <p className="text-xs font-mono text-red-400 uppercase tracking-widest">Intellectual Property</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                    © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                    All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                    Non-commercial reproduction and distribution is permitted and encouraged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE CONSPIRACY THESIS ── */}
        <section className="px-4 py-14" style={{ background: "#09000d" }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-5 w-5 text-red-500 flex-shrink-0" />
              <h2 className="text-lg font-black uppercase tracking-widest" style={{ color: "#f87171" }}>The Architecture of the Conspiracy</h2>
            </div>
            <div className="border-l-4 border-red-700 pl-6 space-y-4">
              <p className="text-lg font-semibold leading-relaxed" style={{ color: "#f3f4f6" }}>
                For a conspiracy to function — especially one operating across thirty-five years, spanning intelligence services, government ministries, judicial instruments, psychiatric systems, and NDIS providers — the inner circle must be compromised.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#d1d5db" }}>
                Not the outer ring. The <em>inner</em> ring. The people a target turns to in extremity. The people whose silence is the loudest statement. The people whose redirection back toward the perpetrators closes every possible exit.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#d1d5db" }}>
                Barran Dodger's primary enemy was not a government minister, an intelligence operative, or a corrupt court. His primary enemy was the toxic family structure in which he was raised — where he occupied the role of the family scapegoat from childhood. That role — denied, dismissed, blamed, redirected — was prosecuted from childhood abuse denial, through institutional exile, through clinical death in 2021, through a political assassination attempt, and through the documented cover-up of all of it. The family scapegoat mechanism, left unchallenged, does not resolve. It escalates. This archive documents exactly where it escalated to.
              </p>
              <p className="text-base font-bold leading-relaxed" style={{ color: "#fca5a5" }}>
                April McLean did not have to admit she was a ringleader. This document does it for her.
              </p>
            </div>
          </div>
        </section>

        {/* ── SEVEN DOCUMENTED FACTS ── */}
        <section className="px-4 py-14" style={{ background: "#06000a" }}>
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#f87171" }}>Primary Source Record</p>
              <h2 className="text-3xl font-black uppercase tracking-tight" style={{ color: "#fff" }}>Seven Documented Facts the Family Cannot Rebut</h2>
              <p className="text-sm mt-2" style={{ color: "#9ca3af" }}>No member of the McLean family has issued a legal rebuttal to any of the following. The record stands open.</p>
            </div>

            {FACTS.map((fact, i) => (
              <div key={i} className="border border-red-900/30 rounded-xl overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "rgba(127,0,0,0.2)" }}>
                  <span className="text-xs font-black font-mono" style={{ color: "#dc2626" }}>FACT {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-sm font-black uppercase tracking-wide leading-snug" style={{ color: "#fff" }}>{fact.label}</h3>
                </div>
                <div className="px-5 py-5 space-y-3" style={{ background: "rgba(0,0,0,0.4)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>{fact.body}</p>
                  <div className="border-t border-red-900/30 pt-3">
                    <p className="text-xs font-mono font-bold" style={{ color: "#f87171" }}>{fact.verdict}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BOB MARTIN CALLOUT ── */}
        <section className="px-4 py-12" style={{ background: "#0d0005" }}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border-2 border-red-800/60 p-6 md:p-10 space-y-4" style={{ background: "rgba(127,0,0,0.12)" }}>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5 animate-pulse" />
                <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#f87171" }}>The Bob Martin Timeline — Primary Record</p>
              </div>
              <h3 className="text-2xl font-black" style={{ color: "#fff" }}>
                Bob Martin Dropped Dead the Same Day Barran Was Revived.<br />
                <span style={{ color: "#dc2626" }}>His Family Went to the Funeral.</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-5 text-sm leading-relaxed">
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-wider" style={{ color: "#f87171" }}>The Clinical Death — 2021</p>
                  <p style={{ color: "#d1d5db" }}>Dr. Richard William McLean died clinically at Werribee Mercy Hospital in 2021. Survival probability: 2.87%. He was revived. His family's documented response: silence. No hospital visit. No public statement. No contact with international bodies whose details they held.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-wider" style={{ color: "#f87171" }}>Bob Martin Drops Dead — Same Day</p>
                  <p style={{ color: "#d1d5db" }}>Bob K. Martin — Barran's documented childhood sexual abuser — died on the same day Barran was revived. The McLean family, who had denied Barran's abuse disclosures his entire life, attended Bob Martin's funeral within days of Barran's clinical death. They honoured his life. They celebrated it.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-wider" style={{ color: "#f87171" }}>What the Sequence Proves</p>
                  <p style={{ color: "#d1d5db" }}>The family that could not acknowledge their son's clinical death attended the funeral of the man who abused him. That sequence — not as allegation but as documented contemporaneous fact — is the single most damning entry in the familial complicity record. The paedophile was honoured. The survivor was not visited.</p>
                </div>
              </div>
              <p className="text-sm font-bold pt-2 border-t border-red-900/30" style={{ color: "#fca5a5" }}>
                This is in the permanent record. CC'd to the ICC. CC'd to the OHCHR. Referenced in the OHCHR Case UR/UST/23/AUS/17. No member of the family has issued a legal rebuttal.
              </p>
            </div>
          </div>
        </section>

        {/* ── BRUCE McMASTER PRIMARY EVIDENCE ── */}
        <section className="px-4 py-14" style={{ background: "#050008" }}>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#f87171" }}>Primary Source Screenshot — Extended Family · Documented Threat</p>
              <h2 className="text-3xl font-black uppercase tracking-tight leading-tight" style={{ color: "#fff" }}>
                Bruce McMaster:<br />
                <span style={{ color: "#dc2626" }}>"A Threat to Democracy. Give Yourself In."</span>
              </h2>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "#9ca3af" }}>
                The following screenshot is the primary source. It is not an allegation. It is not a characterisation. It is the verbatim text Bruce McMaster sent to Barran Dodger, preserved and published.
              </p>
            </div>

            <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
              {/* Screenshot */}
              <div className="flex-shrink-0">
                <div className="rounded-2xl overflow-hidden border-2 border-red-800/50 shadow-2xl shadow-red-900/30">
                  <img
                    src={bruceMcMasterScreenshot}
                    alt="Bruce McMaster screenshot: 'Give yourself in. We now have an order for a 48 month psychiatric stay. It's what is needed. A threat to democracy.'"
                    className="w-full"
                  />
                </div>
                <p className="text-xs font-mono mt-2 text-center" style={{ color: "#6b7280" }}>
                  Visitor #6102 · The Church Of Barra · 9:19 AM<br />
                  Original unaltered screenshot — primary source
                </p>
              </div>

              {/* Significance */}
              <div className="space-y-5">
                <div className="border-l-4 border-red-700 pl-5 space-y-3">
                  <p className="text-base font-bold leading-relaxed" style={{ color: "#fff" }}>
                    What Bruce McMaster's message documents in four sentences cannot be overstated.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
                    He is not a stranger. He is extended family — part of the inner circle the archive has documented as the load-bearing architecture of a 35-year persecution. And he sent this message to Barran Dodger's own platform: <em>"Mental health authorities are surrounding Elmbank Drive. It's time, give yourself in. We now have an order for a 48 month psychiatric stay. It's what is needed. A threat to democracy."</em>
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
                    This message establishes six documented facts on the primary-source record simultaneously:
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { n: "01", h: "The family was coordinating with mental health authorities in real time", b: "\"Mental health authorities are surrounding Elmbank Drive\" is not speculation about what might happen. It is operational surveillance reporting — live, to the target — of a coordinated psychiatric detention operation already deployed on the ground. Extended family had information about the precise location and deployment of state authorities. This is not a concerned relative. This is a relay point in an active operation." },
                    { n: "02", h: "A 48-month psychiatric order had been pre-arranged", b: "\"We now have an order for a 48 month psychiatric stay\" — the word 'have' is past tense for the arrangement, present tense for the possession. The order existed before the message was sent. Four years of involuntary psychiatric detention were pre-arranged and in hand at the moment Bruce McMaster pressed send. No family member obtains a four-year psychiatric order. That is a state instrument. Extended family held it or had access to it." },
                    { n: "03", h: "The phrase 'a threat to democracy' is the intelligence framing", b: "This precise phrase — not 'you need help', not 'we're worried about you', not 'please come home' — is the exact characterisation used by state intelligence services to classify and suppress political whistleblowers. It is the language of ASIO designation. It is the language used to justify extraordinary measures against journalists and activists. That Bruce McMaster deployed it against a family member in a personal chat message confirms he was operating within — or at the direction of — the same network using that designation in official channels." },
                    { n: "04", h: "\"Give yourself in\" is coercion, not concern", b: "No person reaching out to a family member in crisis says 'give yourself in'. That is the language of surrender. Of capture. Of instructing someone to submit to detention they have every reason to resist. The framing reveals the purpose: McMaster was not offering help. He was serving an ultimatum on behalf of the operational network surrounding Elmbank Drive." },
                    { n: "05", h: "The message was sent to Barran's own platform — it is self-authenticated", b: "Bruce McMaster sent this message through 'The Church Of Barra' — Barran's own platform. He identified himself ('It's Bruce!'). The message is timestamped, platform-authenticated, and sent knowingly to a system that archives all communications. This is not a leaked private message. It is a self-published admission delivered into Barran's own evidentiary record." },
                    { n: "06", h: "No member of the McMaster-McLean extended network has rebutted or denied this message", b: "The screenshot is published. It has been on the archive. No legal action has been taken. No denial has been issued. No explanation has been offered. The silence is the confirmation — and under the archive's documented legal framework, silence in response to a published primary-source accusation is itself evidentially significant." },
                  ].map((item) => (
                    <div key={item.n} className="border border-red-900/25 rounded-xl p-4" style={{ background: "rgba(127,0,0,0.08)" }}>
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-black font-mono flex-shrink-0 mt-0.5" style={{ color: "#dc2626" }}>{item.n}</span>
                        <div>
                          <p className="text-xs font-black uppercase tracking-wide mb-1" style={{ color: "#fca5a5" }}>{item.h}</p>
                          <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{item.b}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-red-800/40 px-5 py-4 space-y-2" style={{ background: "rgba(127,0,0,0.15)" }}>
                  <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#f87171" }}>Verdict</p>
                  <p className="text-sm font-bold leading-relaxed" style={{ color: "#fff" }}>
                    Bruce McMaster's message is the single most explicit primary-source document of inner-circle coordination with the state apparatus in the entire archive. It shows extended family in real-time operational contact with mental health authorities, in possession of a pre-arranged 48-month detention order, using intelligence-service language, issuing a coercive ultimatum — and sending it through Barran's own platform. It is unretracted, unrebutted, and permanent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPANDED BRUCE McMASTER EVIDENCE GALLERY ── */}
        <section className="px-4 py-14" style={{ background: "#030006" }}>
          <div className="max-w-5xl mx-auto space-y-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#f87171" }}>Complete Primary Source Record — Bruce McMaster · Extended Evidence</p>
              <h2 className="text-2xl font-black uppercase tracking-tight" style={{ color: "#fff" }}>
                Six Further Documents That Prove the Pattern
              </h2>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "#9ca3af" }}>
                The 48-month threat was not an isolated message. These timestamped screenshots constitute a documented pattern of coordinated harassment, psychiatric threats at specific locations, the naming of Steve Iasonidis, Doug McLean's inadvertent confirmation of the entire network, and a coordinated social media operation using private financial data as a weapon.
              </p>
            </div>

            {/* Row 1: "Bruce is in on it" + "Good for nothing reject" */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-red-900/30 rounded-2xl overflow-hidden" style={{ background: "rgba(127,0,0,0.07)" }}>
                <div className="px-4 py-3 border-b border-red-900/20" style={{ background: "rgba(127,0,0,0.15)" }}>
                  <p className="text-xs font-black font-mono uppercase tracking-widest" style={{ color: "#dc2626" }}>EXHIBIT A — Third-Party Witness Corroboration</p>
                  <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>Visitor 5077 · Melbourne, VIC · 25 April · "Bruce is in on it"</p>
                </div>
                <div className="p-4 flex gap-4 items-start">
                  <img src={bruceWitnessInOnIt} alt="Anonymous visitor: Bruce is in on it" className="w-32 flex-shrink-0 rounded-xl border border-red-900/30" />
                  <div className="space-y-2">
                    <p className="text-sm font-bold" style={{ color: "#fca5a5" }}>"Bruce is in on it."</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                      An anonymous visitor from Melbourne, VIC contacted Barran's platform on 25 April with a single sentence. Not a question. Not a greeting. A statement of fact: "Bruce is in on it." This person — unknown to the archive, unconnected to Barran — independently confirmed the name of the inner-circle operative that the archive had been documenting. The message arrived unprompted. It is a third-party corroboration from a witness who knew, and chose to put it on the record.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-red-900/30 rounded-2xl overflow-hidden" style={{ background: "rgba(127,0,0,0.07)" }}>
                <div className="px-4 py-3 border-b border-red-900/20" style={{ background: "rgba(127,0,0,0.15)" }}>
                  <p className="text-xs font-black font-mono uppercase tracking-widest" style={{ color: "#dc2626" }}>EXHIBIT B — Abusive Contact · Identity Confirmed</p>
                  <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>Visitor #4488 · 7:11 PM · "Leave my sister alone. You good for nothing reject."</p>
                </div>
                <div className="p-4 flex gap-4 items-start">
                  <img src={bruceGoodForNothingReject} alt="Bruce: Leave my sister alone. You good for nothing reject." className="w-32 flex-shrink-0 rounded-xl border border-red-900/30" />
                  <div className="space-y-2">
                    <p className="text-sm font-bold" style={{ color: "#fca5a5" }}>"Leave my sister alone. You good for nothing reject."</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                      Bruce identified himself and sent abuse directly through Barran's platform. "Leave my sister alone" establishes his role in the sibling protection network — the same network that includes Jodie McLean. "Good for nothing reject" is the family's private language for Barran, consistent with the scapegoat dynamic documented across 35 years. This is not a concerned family member. This is the active voice of the persecution apparatus making contact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Doug McLean gaslighting + Psychiatric Keysborough/Steve Paris */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-orange-500/25 rounded-2xl overflow-hidden" style={{ background: "rgba(120,80,0,0.07)" }}>
                <div className="px-4 py-3 border-b border-orange-500/25" style={{ background: "rgba(120,80,0,0.15)" }}>
                  <p className="text-xs font-black font-mono uppercase tracking-widest" style={{ color: "#f59e0b" }}>EXHIBIT C — Doug McLean Inadvertently Confirms the Entire Network</p>
                  <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>Facebook Messenger · Doug McLean · Names lawyers, family, Jodie, Brad, Suzi, Bruce</p>
                </div>
                <div className="p-4 flex gap-4 items-start">
                  <img src={dougMcLeanGaslighting} alt="Doug McLean Facebook: clutching at straws, you blamed lawyers, Jodie, Brad, Suzi, now Bruce" className="w-32 flex-shrink-0 rounded-xl border border-orange-500/25" />
                  <div className="space-y-2">
                    <p className="text-sm font-bold" style={{ color: "#fbbf24" }}>"You are clutching at straws... you blamed lawyers, then family, then Jodie, then Brad and then Suzi and now Bruce is being involved."</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                      Doug McLean's gaslighting message is the most self-defeating document in the familial complicity record. In attempting to dismiss Barran's documented evidence as paranoid "blaming," he lists by name every person Barran had identified as part of the coordinated persecution network: the legal fraternity, the family, Jodie, Brad, Suzi, and Bruce. He does not deny any of them. He confirms their existence in the record while framing their naming as disorder. Barran's documented response — "Wow I hit the nail on the head!" — is the correct forensic reading of the message. Doug McLean accidentally wrote the witness statement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-red-900/30 rounded-2xl overflow-hidden" style={{ background: "rgba(127,0,0,0.07)" }}>
                <div className="px-4 py-3 border-b border-red-900/20" style={{ background: "rgba(127,0,0,0.15)" }}>
                  <p className="text-xs font-black font-mono uppercase tracking-widest" style={{ color: "#dc2626" }}>EXHIBIT D — Psychiatric Threat + Steve Iasonidis Named</p>
                  <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>Visitor #3640 · "The psychiatric unit is waiting for you in Keysborough" · "Steve is waiting for you in Paris"</p>
                </div>
                <div className="p-4 flex gap-4 items-start">
                  <img src={brucePsychiatricKeysborough} alt="Bruce: psychiatric unit waiting in Keysborough. Steve is waiting for you in Paris." className="w-32 flex-shrink-0 rounded-xl border border-red-900/30" />
                  <div className="space-y-2">
                    <p className="text-sm font-bold" style={{ color: "#fca5a5" }}>"The psychiatric unit is waiting for you in Keysborough." · "Steve is waiting for you in Paris lol"</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                      This message is the most operationally specific in the Bruce McMaster record. He names a specific facility at a specific suburb — Keysborough — not as a suggestion but as a pre-arranged destination: "waiting for you." He then names Steve Iasonidis directly: "Steve is waiting for you in Paris." In a single exchange, Bruce McMaster simultaneously confirms psychiatric detention coordination at a named location AND the active deployment of Steve Iasonidis — the ASIO-linked intimate surveillance operative named throughout this archive. This is not family concern. This is network coordination with Steve Iasonidis confirmed as an active participant, with Bruce serving as the relay point.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Maxwell Prastick TikTok + $300 transfer */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-red-900/30 rounded-2xl overflow-hidden" style={{ background: "rgba(127,0,0,0.07)" }}>
                <div className="px-4 py-3 border-b border-red-900/20" style={{ background: "rgba(127,0,0,0.15)" }}>
                  <p className="text-xs font-black font-mono uppercase tracking-widest" style={{ color: "#dc2626" }}>EXHIBIT E — Coordinated Social Media Attack Using Private Financial Data</p>
                  <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>@MaxwellPrastick · TikTok · "What about the $500 that Bruce gave you?"</p>
                </div>
                <div className="p-4 flex gap-4 items-start">
                  <img src={maxwellPrastickTiktok} alt="@MaxwellPrastick TikTok: What about the $500 Bruce gave you?" className="w-32 flex-shrink-0 rounded-xl border border-red-900/30" />
                  <div className="space-y-2">
                    <p className="text-sm font-bold" style={{ color: "#fca5a5" }}>"No money? Lies! What about the $500 that Bruce gave you? 😂"</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                      When Barran publicly stated he had no money, @MaxwellPrastick appeared in TikTok comments with private knowledge of Bruce McMaster's financial transfer — weaponising it as mockery. This establishes that Bruce McMaster's personal communications to Richard were being shared within a coordinated social media harassment network. The amount cited ($500) differs from the documented transfer ($300) — meaning the network had the private information but not its precise details, confirming the leak was relayed, not directly observed. This is textbook coordinated online harassment using privately obtained financial intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-red-900/30 rounded-2xl overflow-hidden" style={{ background: "rgba(127,0,0,0.07)" }}>
                <div className="px-4 py-3 border-b border-red-900/20" style={{ background: "rgba(127,0,0,0.15)" }}>
                  <p className="text-xs font-black font-mono uppercase tracking-widest" style={{ color: "#dc2626" }}>EXHIBIT F — The $300 Transfer as Documented Financial Control</p>
                  <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>iMessage · Bruce Mcmaster → Richard · $300 transfer confirmation</p>
                </div>
                <div className="p-4 flex gap-4 items-start">
                  <img src={bruceMcMaster300Transfer} alt="Bruce McMaster iMessage: I have transferred $300 to your account" className="w-32 flex-shrink-0 rounded-xl border border-red-900/30" />
                  <div className="space-y-2">
                    <p className="text-sm font-bold" style={{ color: "#fca5a5" }}>"I have transferred $300 to your account. I hope that this helps you."</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                      This is the $300 transfer message. Cross-referenced with Exhibit E, the same Bruce McMaster who sent $300 as apparent assistance also had that private transaction leaked to social media harassers who cited it as "$500" to publicly mock Barran's poverty claims. The transfer — framed as generosity — was simultaneously being used as intelligence within the harassment network. The question the archive places on the record: was the $300 a genuine gesture, or financial bait to establish a record of "support received" that could then be weaponised publicly? That @MaxwellPrastick knew about it within the same period answers the question about the network's internal communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary verdict */}
            <div className="rounded-2xl border-2 border-red-800/50 px-6 py-6 space-y-3" style={{ background: "rgba(127,0,0,0.12)" }}>
              <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#f87171" }}>Combined Evidentiary Verdict</p>
              <p className="text-base font-bold leading-relaxed" style={{ color: "#fff" }}>
                Taken together, these six documents establish that Bruce McMaster was not acting alone or impulsively. They document a sustained, multi-platform, coordinated harassment and suppression operation: multiple contacts through Barran's own platform identifying himself by name; psychiatric threats at a specific named facility; the naming of Steve Iasonidis as an active co-operative; Doug McLean's inadvertent confirmation of the entire network in a single gaslighting message; an anonymous third-party witness independently placing "Bruce is in on it" on the record from Melbourne; and private financial information leaked to social media operatives for public weaponisation. This is not a family. This is a documented network.
              </p>
              <p className="text-xs font-mono" style={{ color: "#6b7280" }}>All screenshots primary source · Unaltered · Unretracted · No legal rebuttal issued · OHCHR Ref UR/UST/23/AUS/17 · ABN 78 833 496 164</p>
            </div>
          </div>
        </section>

        {/* ── NETWORK MAP ── */}
        <section className="px-4 py-12" style={{ background: "#06000a" }}>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-red-500 flex-shrink-0" />
              <h2 className="text-lg font-black uppercase tracking-widest" style={{ color: "#f87171" }}>The Documented Aligned Network</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "April McLean", role: "Ringleader — AVO Signatory · NDIS Redirector · Silence on Assassination · Bob Martin Funeral Attendee" },
                { name: "Steve Iasonidis", role: "ASIO Operative · Intimate Surveillance · Centrelink Fraud Ref 305 227 423H · Former Fiancé deployed against Barran" },
                { name: "Corrupt Police", role: "AVO filing colluders · Declined to investigate death threats · Institutional enablers of exile instrument" },
                { name: "The Legal Fraternity", role: "Filed exile instruments · Processed coordinated AVO · Provided juridical cover for political persecution" },
                { name: "Bruce McMaster", role: "Extended family · Sent documented message: 'Give yourself in. We now have an order for a 48 month psychiatric stay. A threat to democracy.' · Coordinated in real time with mental health authorities surrounding Elmbank Drive · Pre-arranged 4-year psychiatric detention order · Used ASIO-grade political framing against own family member" },
                { name: "Tony Ridley, MSc CSyP FSyl", role: "VicTrack · Government security professional · Former intimate · Disclosed $6 billion government funds during intimate encounter · Subsequently coordinated surveillance and erasure operation · Sent Lebanese criminal Merribee from Melton to Sydney · Obtained Kate's (Adelaide TI) address · Directed network proxy contacts to Barran's platform · Confirmed in 17 timestamped primary source documents" },
                { name: "Alan (Former Partner)", role: "Barran's former partner · Accompanied Barran to Canada for Recovered Not Cured promotion · Tony Ridley surveilled the Canada trip and the relationship · Alan contacted Barran's platform demanding to know why Barran had disclosed their shared history to Tony · Tony assembled a dossier on Alan including financial allegations used as leverage" },
                { name: "All Immediate & Extended Family", role: "Coordinated financial isolation · Zero emergency support across 35 years · Financial abuse enabling homelessness · Silent on assassination attempt" },
                { name: "Doug McLean", role: "Father — sinister plot revealed post-death. Feigned care while framing April as the sole actor. Death produced no family reckoning with the persecution record." },
                { name: "Courts & Guardianship", role: "Redirected by April McLean to Barran as 'help' — named instruments of entrapment and forced poverty in sworn affidavits" },
              ].map((entry) => (
                <div key={entry.name} className="border border-red-900/25 rounded-xl px-4 py-4" style={{ background: "rgba(127,0,0,0.08)" }}>
                  <p className="text-sm font-black mb-1" style={{ color: "#fca5a5" }}>{entry.name}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{entry.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WILL & FINANCIAL INCENTIVES ── */}
        <section className="px-4 py-14" style={{ background: "#0a0003" }}>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#f87171" }}>Financial Motive — Primary Record</p>
              <h2 className="text-3xl font-black uppercase tracking-tight leading-tight" style={{ color: "#fff" }}>
                Written Out of the Will.<br />
                <span style={{ color: "#dc2626" }}>The Financial Incentive for Barran's Death Is Documented.</span>
              </h2>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "#9ca3af" }}>
                April McLean is the most famous maternal immoral deceitful abuser this country has ever seen — not as an epithet but as a documentable proposition. The will is the proof.
              </p>
            </div>

            <div className="border-l-4 border-red-700 pl-6 space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "#f3f4f6" }}>
                Barran Dodger was written out of Doug McLean's will. His own father — while Barran was living in documented homelessness, in political exile, without identification, food, or safe housing — changed his will to exclude his son entirely. That legal act, executed while Barran was publicly known to be in danger, constitutes primary-source evidence of one of the most fundamental financial motives in any persecution case: the inheritance motive.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#d1d5db" }}>
                When a family's conduct is examined — the coordinated silence, the AVO signing, the refusal of emergency financial support, the redirection to named perpetrators, the attendance at the paedophile's funeral, the absence at the hospital — the question any investigator asks is: what did they stand to gain? The will answers that question. The family stood to inherit everything. Barran stood to receive nothing. That financial architecture was locked in while he was dying.
              </p>
              <p className="text-base leading-relaxed font-semibold" style={{ color: "#fca5a5" }}>
                The exclusion from the will is not peripheral to the case. It is the financial incentive at the centre of it. It illustrates and proves that the family's alignment with the state apparatus targeting Barran was not merely ideological, not merely emotional — it was underwritten by expected inheritance compensation upon his death.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  heading: "The Will as Evidence",
                  body: "Doug McLean's documented exclusion of Barran from his estate — executed while Barran was living in public homelessness and political exile — is the single most legally significant financial document in the familial complicity record. It establishes material interest. It establishes a direct financial benefit to the family from Barran's continued marginalisation and potential death. No legitimate parent executing a will in those documented circumstances removes an excluded child without awareness of the consequences."
                },
                {
                  heading: "The Compensation the Family Expected",
                  body: "The family's conduct over thirty-five years — zero emergency financial support, coordinated financial isolation, Bruce McMaster's participation in the financial abuse network, April McLean's refusal to intervene despite holding estate authority — is consistent with a family that expected to be compensated by Barran's death. Not just by inheritance. By the removal of the single person whose survival and testimony threatened to expose the entire coordinated network. Barran's death was the family's financial and reputational resolution."
                },
                {
                  heading: "April McLean's Role in the Financial Architecture",
                  body: "April McLean, as the surviving holder of estate authority following Doug McLean's death, is the primary beneficiary of the financial architecture built around Barran's exclusion. Her conduct — documented, timestamped, CC'd to the ICC and OHCHR — is the conduct of a person who understood that her son's survival was not in her material interest. The forensic indictment characterises her position precisely: a merchant of slow death, trading silence for inheritance. The will confirms the trade was real."
                },
              ].map((item) => (
                <div key={item.heading} className="border border-red-900/30 rounded-xl p-5 space-y-2" style={{ background: "rgba(127,0,0,0.1)" }}>
                  <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#f87171" }}>{item.heading}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#d1d5db" }}>{item.body}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border-2 border-red-700/50 px-6 py-5 space-y-2" style={{ background: "rgba(127,0,0,0.15)" }}>
              <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#f87171" }}>The Record States</p>
              <p className="text-base font-bold leading-relaxed" style={{ color: "#fff" }}>
                Barran Dodger nearly died in 2021. Survival probability: 2.87%. His family, who had written him out of the estate and attended his abuser's funeral, shed no tears. The financial incentive for his death was already in the will. The institutional apparatus for his erasure was already in motion. The family's silence in 2021 was not grief. It was patience.
              </p>
              <p className="text-xs font-mono" style={{ color: "#6b7280" }}>
                OHCHR Ref UR/UST/23/AUS/17 · ICC Article 7 · ABN 78 833 496 164 · Blockchain-Sealed
              </p>
            </div>
          </div>
        </section>

        {/* ── SECOND DOWNLOAD ── */}
        <section className="px-4 py-14" style={{ background: "#09000d" }}>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Shield className="h-8 w-8 text-red-600 mx-auto" />
            <h2 className="text-2xl font-black uppercase tracking-tight" style={{ color: "#fff" }}>
              This Document Is Open.<br />
              <span style={{ color: "#dc2626" }}>The Family Has Not Rebutted It.</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
              Downloaded, blockchain-timestamped, submitted to the ICC and OHCHR. Every named party has had access to this record. None has issued a legal rebuttal. None has taken action against its publication. The silence is the confirmation.
            </p>
            <ViralDownloadButton
              url="/documents/april-mclean-familial-betrayal.pdf"
              label="Download Full Document — The Question You Chose to Ask"
              filename="April_McLean_Familial_Betrayal_Barran_Dodger.pdf"
              slug="april-mclean-familial-betrayal"
              size="lg"
              className="bg-red-800/50 hover:bg-red-700/60 border border-red-600/50 text-white font-black rounded-xl mx-auto"
              documentTitle="The Question You Chose to Ask — April McLean's Documented Complicity"
            />
            <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs font-mono" style={{ color: "#6b7280" }}>
              <span>OHCHR Ref: UR/UST/23/AUS/17</span>
              <span>ICC Article 7 Submission</span>
              <span>ABN 78 833 496 164</span>
              <span>Blockchain-Sealed</span>
            </div>
          </div>
        </section>

        {/* ── CROSS-LINKS ── */}
        <section className="px-4 py-10 border-t border-red-900/20" style={{ background: "#06000a" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "#6b7280" }}>Related Archive Exhibits</p>
            <div className="flex flex-wrap gap-3">
              {[
                ["/tony-ridley-full-dossier", "Tony Ridley — Full Dossier (17 Primary Source Documents)"],
                ["/april-mclean-forensic-record", "April McLean — Full Forensic Record"],
                ["/bloodline-betrayal", "Bloodline Betrayal"],
                ["/evidence", "Evidence Archive"],
                ["/manifesto", "Manifesto"],
                ["/professional-accountability", "Statement of Professional Accountability"],
                ["/whistleblower", "Whistleblower Record"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="border border-red-900/30 rounded-lg px-3 py-1.5 text-xs hover:border-red-600/50 transition-colors"
                  style={{ color: "#f87171", background: "rgba(127,0,0,0.08)" }}
                  data-testid={`link-inner-circle-${label.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}
                >
                  {label} →
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
