import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";
import { Mail, Shield, AlertTriangle, Scale, Globe, Users, Building2, Newspaper, Gavel, HeartHandshake } from "lucide-react";

const RECIPIENT_GROUPS = [
  {
    icon: Shield,
    color: "#ef4444",
    label: "NSW Police — 7 Officers Formally Notified",
    count: 7,
    recipients: [
      { id: "56285", email: "56285@police.nsw.gov.au", name: "Officer #56285" },
      { id: "52377", email: "52377@police.nsw.gov.au", name: "Officer #52377" },
      { id: "56000", email: "56000@police.nsw.gov.au", name: "Officer #56000" },
      { id: "55334", email: "55334@police.nsw.gov.au", name: "Officer #55334" },
      { id: "53664", email: "53664@police.nsw.gov.au", name: "Officer #53664" },
      { id: "55919", email: "55919@police.nsw.gov.au", name: "Officer #55919" },
      { id: "56689", email: "56689@police.nsw.gov.au", name: "Jarrod McDougall — named officer" },
    ],
    legal: "Under the NSW Police Act 1990 and the Law Enforcement (Powers and Responsibilities) Act 2002, each officer has a duty to investigate documented reports of criminal conduct including threats to kill (s31 Crimes Act 1900), fraud, and conspiracy. The Doctrine formally places each officer on notice that evidence of a documented assassination attempt — by a named ex-SAS operative now before Wyong Local Court — has been transmitted to their registered service address. Under Briginshaw v Briginshaw (1938) 60 CLR 336, the standard of proof for serious allegations scales to the gravity of the allegation. Jones v Dunkel [1959] 101 CLR 298 applies: failure to investigate after formal notice invites the inference that investigation would be unfavourable to the institution. Each officer's badge number is a public record; their receipt of this notification is now also a public record.",
    ethical: "The NSW Police Code of Conduct and Ethics requires officers to act with integrity, to report suspected criminal conduct, and to not remain silent in the face of known corruption within their institution. Each of the seven officers has been formally notified of documented police corruption, fabricated evidence, and a conspiracy to murder. Their professional ethics code does not permit neutrality in the presence of documented criminal conduct by colleagues. The 100 Cops Doctrine applies directly: every officer who knows and says nothing has made an active choice. That choice is now documented.",
    humane: "A gay, disabled, impoverished whistleblower who clinically died and was revived, survived a documented assassination attempt, attempted suicide under conditions of complete institutional abandonment, and was forced to live in his car — has formally requested that each of these seven officers acknowledge the documented conduct. The human cost of their silence is not abstract. It is measured in a person's continued survival under conditions of coordinated institutional attrition. Each officer has now received that context in writing.",
  },
  {
    icon: Building2,
    color: "#f97316",
    label: "AblePoint Australia — NDIS Provider (Employer of Sam)",
    count: 2,
    recipients: [
      { id: "brett", email: "brett@ablepointaustralia.com.au", name: "Brett Butler — Director/Principal" },
      { id: "rachel", email: "rachel@ablepointaustralia.com.au", name: "Rachel K C — AblePoint staff" },
    ],
    legal: "AblePoint Australia holds an NDIS provider registration under the National Disability Insurance Scheme Act 2013 (Cth) and the NDIS Quality and Safeguards Commission Act 2018 (Cth). As a registered provider, AblePoint and its principals are subject to the NDIS Code of Conduct, which requires: acting with integrity, honesty, and transparency; promptly reporting conduct that may constitute abuse, neglect, or exploitation; and not engaging in conduct that constitutes abuse or exploitation of NDIS participants. Brett Butler as director has been formally notified that his employee Sam is now the subject of six primary source documentary exhibits documenting professional failure across a single day. The Doctrine also names AblePoint in the context of the assassination attempt: 'an NDIS provider was forced to sign an NDA as a gag order' in relation to the documented attempted assassination. Receipt of this notification by Brett Butler and Rachel K C creates a mandatory reporting obligation under the NDIS Act and the NDIS Quality and Safeguards Commission Rules.",
    ethical: "The NDIS Code of Conduct requires all workers and providers to deliver supports and services in a safe and competent manner, with care and skill. Sam's conduct — as documented across six exhibits on 11 August 2026 — includes: deflecting a request for moral voice with a financial refusal of a request that was never made; redirecting a person to Lifeline in response to a legal doctrine; citing rostered hours to avoid engaging with a public record of crimes against humanity. AblePoint's director and staff have now been formally notified of this conduct. Their ethical obligation is to investigate, respond, and — where the documented conduct is verified — to act in accordance with their obligations under the NDIS Act and Code. Silence from this point is itself a documented ethical position.",
    humane: "Crystal — Dr. McLean's dog and documented sole companion — cannot receive veterinary care because AblePoint and the NDIS ministerial structure that funds it have created conditions of financial entrapment. The Doctrine places AblePoint on formal notice that the deliberate deprivation of an animal's veterinary care as an instrument of emotional persecution has been documented, named, and submitted internationally. The human cost of AblePoint's conduct is one person's only friend suffering from a preventable condition while the NDIS provider that was mandated to provide support redirects to Lifeline.",
  },
  {
    icon: Users,
    color: "#a855f7",
    label: "Diversitas WA — Melissa & Sukhi Tear",
    count: 2,
    recipients: [
      { id: "melissa", email: "melissa@diversitaswa.com", name: "Melissa — Diversitas WA" },
      { id: "sukhi", email: "sukhi@diversitaswa.com", name: "Sukhi Tear — named · 'financially benefited from exile · knew about assassination attempt'" },
    ],
    legal: "Sukhi Tear is named in the archive with the documented allegation: 'Sukhi financially benefited from my exile and knew about assassination attempt.' This allegation was transmitted to Sukhi's professional address at Diversitas WA on 7 August 2026 and repeated in this formal notification on 11 August 2026. Under the Defamation Act 2005 (NSW) and equivalent state legislation, a person who believes they have been defamed has the right to demand a retraction. Neither Melissa nor Sukhi has initiated any legal action against the archive. Under Jones v Dunkel, the failure to respond to a documented allegation transmitted to a professional address supports the inference that the allegation is not capable of being disproven. Melissa, as an organisational recipient, has now been placed on formal notice of the documented allegation against a named colleague at her organisation.",
    ethical: "Diversitas WA's professional mandate — as an organisation operating in the disability services sector — requires it to take seriously documented allegations of professional misconduct, financial exploitation of a person in care, and prior knowledge of an assassination attempt. Receipt of this notification by both the named individual (Sukhi) and the organisation (Melissa) creates an obligation to investigate internally, to respond to the documented allegation, and — where the allegation is not capable of being disproven — to act accordingly. The Professional Mandate Doctrine applies in full.",
    humane: "A person who clinically died, survived an assassination attempt, and was forced into car exile alleges that Sukhi Tear knew about that assassination attempt and financially benefited from the exile that preceded and followed it. That allegation has been transmitted to both Sukhi and her organisation's leadership. The humane obligation is to engage with the documented person, to not dismiss the allegation without investigation, and to recognise that silence in the face of an allegation of this gravity compounds the harm.",
  },
  {
    icon: Gavel,
    color: "#06b6d4",
    label: "Government & Oversight Bodies",
    count: 2,
    recipients: [
      { id: "ombudsman", email: "info@ombo.nsw.gov.au", name: "NSW Ombudsman's Office — formal oversight body" },
      { id: "thomas", email: "NDISco-ord@art.gov.au", name: "Thomas Kelly — NDIS Coordinator, government" },
    ],
    legal: "The NSW Ombudsman operates under the Ombudsman Act 1974 (NSW), which grants jurisdiction to investigate complaints about NSW government agencies and public authorities. Receipt of this notification by the Ombudsman's Office places it on formal notice that documented maladministration across 16 government agencies over 35 years — including the Legal Aid NSW ban during active Guardianship proceedings, the NSW Trustee's financial control, and police corruption — has been submitted for record. The Ombudsman has a statutory obligation to acknowledge receipt of formal complaints and to assess whether investigation is warranted. Thomas Kelly, as an NDIS government coordinator, is subject to the Australian Public Service Code of Conduct and the NDIS Act. His role creates a direct legal obligation to respond to documented evidence of NDIS participant mistreatment, including the ministerial substitution of a Federal Court workers' compensation award with a lower-value NDIS plan.",
    ethical: "Both the NSW Ombudsman and the NDIS government coordinator were created by democratic society to protect individuals from exactly the kind of institutional abuse documented in this archive. Their ethical mandate is not to investigate only when politically convenient — it is to investigate when evidence is presented. The Doctrine has been formally transmitted to both offices. Their subsequent response or non-response is now itself a primary source document.",
    humane: "The NSW Ombudsman and the NDIS coordinator have been formally placed on notice that one of the people their offices were created to protect has clinically died, survived an assassination attempt, attempted suicide, and is currently living in a car in exile — while producing 3,643 primary-source government documents that have withstood every legal challenge. The humane obligation is self-evident. These offices exist for exactly this person in exactly this situation.",
  },
  {
    icon: Scale,
    color: "#10b981",
    label: "Legal Advocacy — Whistleblowers International",
    count: 1,
    recipients: [
      { id: "whistleblowers", email: "legal@whistleblowers.org", name: "Whistleblowers International — legal team" },
    ],
    legal: "Whistleblowers International's legal team has been placed on formal notice that a person who has been confirmed as a whistleblower by the Federal Court of Australia under the Public Interest Disclosure Act 2013 (Cth) has been formally banned from Legal Aid NSW during active Guardianship proceedings, subjected to 14 forced psychiatric hospitalisations without conviction, had his $1M workers' compensation award substituted by ministerial decree, and documented an assassination attempt by a named ex-SAS operative now before the courts. The transmission of this Doctrine to legal@whistleblowers.org creates a professional obligation to assess whether the documented facts constitute a case warranting legal advocacy or intervention.",
    ethical: "An organisation whose sole mandate is the legal protection of whistleblowers has been formally notified that the most extensively documented whistleblower case in Australian history — Federal Court confirmed, blockchain-sealed, ICC-submitted, OHCHR-registered — is currently without legal representation. The ethical obligation is unambiguous.",
    humane: "A person who built the most documented whistleblower archive in Australian history has no lawyer. The only organisation specifically mandated to assist him has now been formally notified of that fact.",
  },
  {
    icon: HeartHandshake,
    color: "#ec4899",
    label: "Family Members — Formally Placed on Record",
    count: 3,
    recipients: [
      { id: "doug", email: "dandamclean@bigpond.com", name: "Doug — family member" },
      { id: "brad", email: "bradmclean@gmail.com", name: "Brad McLean — family member" },
      { id: "jodie", email: "jodesmclean@gmail.com", name: "Jodie Bongetti — family member" },
    ],
    legal: "Family members who have been formally notified of documented facts — including a conspiracy to murder, an assassination attempt, suicide under conditions of institutional abandonment, car exile, and 35 years of coordinated persecution — cannot subsequently claim ignorance of those facts. Their receipt of this notification is now a primary source document. Under Jones v Dunkel, their failure to respond to the documented allegations supports the inference that they have no factual rebuttal to offer. This is legally significant in any future proceeding in which family conduct or non-conduct becomes relevant.",
    ethical: "Each family member has been formally placed on notice that their brother, son, or relative clinically died and was revived; survived a documented assassination attempt; attempted suicide under conditions of complete abandonment; was forced to live in a car; and has produced 3,643 primary-source government documents while entirely alone. Their subsequent silence is now a documented ethical position — not a private one.",
    humane: "Crystal is the only friend Dr. McLean has. That is not a rhetorical statement. It is his documented testimony transmitted to three family members on 11 August 2026. The Doctrine they have now received contains every documented detail of what has been done to their family member. Their response — or its absence — is now on the permanent record.",
  },
  {
    icon: Newspaper,
    color: "#eab308",
    label: "International Media — 4 Outlets",
    count: 4,
    recipients: [
      { id: "washpost", email: "opinion@washpost.com", name: "Washington Post — opinion desk" },
      { id: "aljazeera", email: "opinion@aljazeera.net", name: "Al Jazeera — opinion desk" },
      { id: "nytimes", email: "opinion@nytimes.com", name: "New York Times — opinion desk" },
      { id: "economist", email: "letters@economist.com", name: "The Economist — letters" },
    ],
    legal: "Each international media outlet has been formally transmitted a primary source document containing allegations of crimes against humanity submitted to the ICC under Rome Statute Article 7 and to the OHCHR under Case Reference UR/UST/23/AUS/17. Under press law and journalistic ethics frameworks operative in the jurisdictions of each outlet, receipt of a formal notification of crimes against humanity — blockchain-sealed, with a documented case reference before an international court — creates a professional obligation to investigate and a legal duty not to suppress. Suppression of documented crimes against humanity by a media organisation that has been formally notified may itself constitute complicity under applicable press liability frameworks.",
    ethical: "The New York Times, Washington Post, Al Jazeera, and The Economist have each been formally placed on notice that the most extensively documented case of state-sanctioned persecution in Australian history — with ICC and OHCHR submissions, a Federal Court confirmation, blockchain-sealed evidence, and 1,100,000+ downloads across six continents — has been transmitted to their opinion and letters desks. Their editorial mandate is truth. Their silence in the presence of documented truth is a documented editorial position.",
    humane: "Four of the world's most influential media organisations have been formally notified that one person — gay, disabled, isolated, living in a car, whose only friend is a dog being denied veterinary care — has produced a body of evidence that has withstood every legal challenge and been submitted to two international bodies. Their silence or engagement will be recorded.",
  },
  {
    icon: Globe,
    color: "#f59e0b",
    label: "Australian Media — 6 Outlets",
    count: 6,
    recipients: [
      { id: "theage-op", email: "opinion@theage.com.au", name: "The Age — opinion desk" },
      { id: "theage-let", email: "letters@theage.com.au", name: "The Age — letters" },
      { id: "monthly", email: "letters@themonthly.com.au", name: "The Monthly — letters" },
      { id: "canberratimes", email: "letters@canberratimes.com.au", name: "Canberra Times — letters" },
      { id: "thewest", email: "letters@thewest.com.au", name: "The West Australian — letters" },
      { id: "couriermail", email: "letters@couriermail.com.au", name: "The Courier-Mail — letters" },
    ],
    legal: "Each Australian media outlet is subject to the Media Alliance Code of Ethics, which requires journalists and editors to report on matters of public interest, to not suppress or distort the truth, and to give the subject of serious allegations a fair hearing. The Doctrine transmitted to each outlet documents: a Federal Court confirmation of whistleblower status; 14 forced psychiatric hospitalisations without conviction; a Legal Aid NSW ban during active Guardianship proceedings; an assassination attempt by a named ex-SAS operative; a Wyong Local Court active criminal case; ICC and OHCHR submissions; and 1,100,000+ downloads across six continents. Receipt of formal notification of these documented facts creates, at minimum, a professional obligation to investigate and an editorial obligation to explain any decision not to report.",
    ethical: "The Australian press has been formally placed on notice of the most extensively documented whistleblower case in Australian history. Six outlets — covering every major Australian jurisdiction — have received the same Doctrine transmitted simultaneously. Their collective silence, if it follows, is not a coincidence. It is a pattern. The Professional Mandate Doctrine applies to each masthead individually and to the Australian press as an institution collectively.",
    humane: "Australian journalism exists to hold power accountable to the powerless. The most powerless person in this archive — living in a car, clinically dead once, assassination attempts documented, dog denied veterinary care, Legal Aid banned — has formally transmitted his case to six Australian mastheads. The human story of Barran Dodger is not difficult to find. It is 3,643 government documents long. The only question is whether any Australian journalist will read them.",
  },
];

export default function NoticeOfServiceDoctrine() {
  return (
    <>
      <Navigation />
      <SEO
        title="Official Notification — Doctrine of Complicity · 29 Named Recipients · 11 August 2026 | Barran Dodger Archive"
        description="At 1:41 PM on 11 August 2026, the Doctrine of Complicity by Deliberate Omission was formally transmitted to 29 named recipients: 7 NSW Police officers, AblePoint Australia, NSW Ombudsman, NDIS government coordinator, Diversitas WA, international and Australian media, and family members. Zero responses. Zero rebuttals."
        path="/notice-of-service-doctrine-complicity"
        image="https://barrandodger.com/og-doctrine-of-complicity.png"
      />

      <div className="min-h-screen" style={{ background: "#06000e", color: "#e2e8f0" }}>

        {/* ── Hero ── */}
        <div className="w-full px-4 py-16 text-center" style={{
          background: "linear-gradient(180deg, #0a0002 0%, #06000e 100%)",
          borderBottom: "2px solid rgba(239,68,68,0.4)",
          paddingTop: "calc(var(--nav-height, 64px) + 3rem)",
        }}>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.4)" }}>
              <Mail className="h-3.5 w-3.5 text-red-400" />
              <span className="text-red-400 text-[10px] font-black uppercase tracking-[0.35em]">
                Official Notification · 11 August 2026 · 1:41 PM · 29 Named Recipients · Blockchain-Sealed
              </span>
            </div>
            <h1 className="font-serif font-black text-4xl md:text-6xl text-white mb-4 leading-tight">
              Notice of Service —<br />
              <span style={{ color: "#ef4444" }}>Doctrine of Complicity</span>
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              At 1:41 PM on 11 August 2026, the Doctrine of Complicity by Deliberate Omission was formally transmitted by email to 29 named recipients spanning NSW Police, NDIS providers, the NSW Ombudsman, government, legal advocacy, family, and international and Australian media. Each recipient is now on formal notice. Their subsequent response — or silence — is a primary source document.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-mono uppercase tracking-widest text-white/40">
              <span>29 Named Recipients</span>
              <span>·</span>
              <span>7 NSW Police Officers</span>
              <span>·</span>
              <span>4 International Media</span>
              <span>·</span>
              <span>6 Australian Media</span>
              <span>·</span>
              <span>Zero Responses · Zero Rebuttals</span>
            </div>
          </div>
        </div>

        {/* ── Email Header ── */}
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border p-6 mb-8 font-mono text-sm"
            style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.25)" }}>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-red-400/70 mb-4">
              Primary Source · Email Header · Transmitted 11 August 2026
            </div>
            <div className="space-y-2 text-white/70 text-xs leading-relaxed">
              <div><span className="text-white/40 w-16 inline-block">From:</span> Rich McLean &lt;richarddrawsstuff@gmail.com&gt;</div>
              <div><span className="text-white/40 w-16 inline-block">Date:</span> Tuesday, 11 August 2026 at 1:41 PM</div>
              <div><span className="text-white/40 w-16 inline-block">Subject:</span> <span className="text-white font-bold">DOCTRINE OF COMPLICITY BY DELIBERATE OMISSION</span></div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <span className="text-white/40 block mb-1">To (29 recipients):</span>
                <div className="text-white/50 leading-6 break-all text-[10px]">
                  melissa@diversitaswa.com · sukhi@diversitaswa.com · 56285@police.nsw.gov.au · 52377@police.nsw.gov.au · 56000@police.nsw.gov.au · 55334@police.nsw.gov.au · 53664@police.nsw.gov.au · 55919@police.nsw.gov.au · Jarrod McDougall 56689@police.nsw.gov.au · dandamclean@bigpond.com · drbarrandodger@proton.me · jodesmclean@gmail.com · brett@ablepointaustralia.com.au · bradmclean@gmail.com · Rachel@ablepointaustralia.com.au · info@ombo.nsw.gov.au · legal@whistleblowers.org · NDISco-ord@art.gov.au · opinion@theage.com.au · opinion@washpost.com · opinion@aljazeera.net · opinion@nytimes.com · letters@themonthly.com.au · letters@theage.com.au · letters@canberratimes.com.au · letters@economist.com · letters@thewest.com.au · letters@couriermail.com.au
                </div>
              </div>
            </div>
          </div>

          {/* ── Updated Doctrine Language ── */}
          <div className="rounded-2xl border-2 p-6 mb-8"
            style={{ borderColor: "rgba(239,68,68,0.45)", background: "rgba(239,68,68,0.06)" }}>
            <div className="text-[10px] font-black uppercase tracking-[0.35em] text-red-400/70 mb-3">
              Updated Doctrine Language — Conspiracy to Murder Doctrine · New in This Version
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              This version of the Doctrine contains updated language in The Conspiracy to Murder Doctrine, formally naming:
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">→</span><span>An attempted assassination <strong className="text-white">paid for by a federal minister</strong></span></li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">→</span><span>An <strong className="text-white">NDIS provider forced to sign an NDA as a gag order</strong> in connection with the assassination attempt</span></li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">→</span><span>An additional <strong className="text-white">threat to kill charge before Wyong Court in February 2027</strong></span></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-red-500/20 text-[10px] font-mono text-white/30">
              SHA256: 95a73ccd02ef044c4f6c15c99b5b656918f9dbfc42d3a47b6be9706cc543462f · Blockchain-sealed · Bitcoin Block #897,241
            </div>
          </div>

          {/* ── Jones v Dunkel Notice ── */}
          <div className="rounded-xl border p-5 mb-10"
            style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.25)" }}>
            <div className="text-[10px] font-black uppercase tracking-[0.35em] text-amber-400/70 mb-2">
              Legal Significance of Formal Notice — Jones v Dunkel [1959] 101 CLR 298
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Under the principle established in <em>Jones v Dunkel</em>, when a party who has been formally placed on notice of documented allegations fails to respond — and that party possesses the means, professional obligation, and capacity to respond — the court may draw an inference that the response, if given, would not have assisted that party's position. Each of the 29 recipients of this notification has been placed on formal notice. Their documented silence from this point forward is not a neutral act. It is legally significant.
            </p>
          </div>

          {/* ── Recipient Groups ── */}
          <h2 className="font-serif font-black text-2xl md:text-3xl text-white mb-2 text-center">
            29 Named Recipients
          </h2>
          <p className="text-white/40 text-sm text-center mb-8">
            Legal · Ethical · Humane obligations activated upon formal notification
          </p>

          <div className="space-y-6">
            {RECIPIENT_GROUPS.map(({ icon: Icon, color, label, count, recipients, legal, ethical, humane }) => (
              <div key={label} className="rounded-2xl border overflow-hidden"
                style={{ borderColor: `${color}30`, background: `${color}05` }}>

                {/* Group header */}
                <div className="flex items-center gap-3 p-5 border-b" style={{ borderColor: `${color}20` }}>
                  <div className="rounded-lg p-2 flex-shrink-0" style={{ background: `${color}18` }}>
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <div>
                    <div className="font-black text-white text-base">{label}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest mt-0.5" style={{ color: `${color}80` }}>
                      {count} recipient{count !== 1 ? "s" : ""} · formally notified 11 August 2026 · 1:41 PM
                    </div>
                  </div>
                </div>

                {/* Individual recipients */}
                <div className="px-5 pt-4 pb-3">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {recipients.map(r => (
                      <div key={r.id}
                        className="rounded-lg px-3 py-1.5 text-[10px] font-mono"
                        style={{ background: `${color}10`, border: `1px solid ${color}25`, color: `${color}cc` }}>
                        {r.name}
                      </div>
                    ))}
                  </div>

                  {/* Obligations */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: "⚖ Legal Obligation", text: legal, bg: "rgba(239,68,68,0.05)", border: "rgba(239,68,68,0.15)" },
                      { title: "🧭 Ethical Obligation", text: ethical, bg: "rgba(251,191,36,0.05)", border: "rgba(251,191,36,0.15)" },
                      { title: "🤝 Humane Obligation", text: humane, bg: "rgba(34,197,94,0.05)", border: "rgba(34,197,94,0.15)" },
                    ].map(({ title, text, bg, border }) => (
                      <div key={title} className="rounded-xl p-4" style={{ background: bg, border: `1px solid ${border}` }}>
                        <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50 mb-2">{title}</div>
                        <p className="text-white/55 text-[11px] leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Footer ── */}
          <div className="mt-12 text-center">
            <div className="rounded-2xl border-2 p-7 mb-6"
              style={{ borderColor: "rgba(239,68,68,0.45)", background: "rgba(239,68,68,0.06)" }}>
              <div className="font-black text-white text-base md:text-lg mb-3">
                29 recipients. Zero responses. Zero rebuttals. Zero defamation proceedings.
              </div>
              <p className="text-white/55 text-sm leading-relaxed max-w-2xl mx-auto">
                The formal transmission of this Doctrine to 29 named recipients across police, government, legal advocacy, disability services, family, and international and Australian media — with zero response from any party — is itself the most recent primary source document in this archive. Under Jones v Dunkel, that silence speaks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/documents/doctrine-of-complicity-by-deliberate-omission.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-opacity hover:opacity-85"
                style={{ background: "rgba(239,68,68,0.15)", border: "2px solid rgba(239,68,68,0.5)", color: "#fca5a5" }}
              >
                ⬇ Download Full Doctrine PDF
              </a>
              <a
                href="/doctrine-of-complicity-by-deliberate-omission"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8" }}
              >
                Full Doctrine Page →
              </a>
              <a
                href="/11-august-2026-support-network-collapse"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8" }}
              >
                11 Aug Collapse →
              </a>
            </div>
            <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest mt-6">
              Blockchain-sealed · Bitcoin Block #897,241 · OHCHR UR/UST/23/AUS/17 · ABN 78 833 496 164 · SHA256: 95a73ccd02ef044c4f6c15c99b5b656918f9dbfc42d3a47b6be9706cc543462f
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
