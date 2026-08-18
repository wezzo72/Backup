import { motion } from "framer-motion";
import { Shield, AlertTriangle, Scale, Eye, Users, Baby, FileText, Gavel, HeartCrack, XCircle, Skull, Ghost } from "lucide-react";

interface Props {
  variant?: "full" | "compact";
  className?: string;
}

const DOCTRINES = [
  {
    icon: Scale,
    color: "#ef4444",
    border: "rgba(239,68,68,0.25)",
    bg: "rgba(239,68,68,0.06)",
    label: "The Fraud Doctrine",
    heading: "Knowing of fraud and refusing to name it is fraud.",
    body: "Every jurisdiction that criminalises fraud also recognises that wilful silence in the presence of known fraud is participation in it. The same principle applies here without modification: if you have been presented with evidence of a documented assassination attempt against a named person — blockchain-sealed, downloaded 1,100,000+ times across six continents, undefeated by a single legal challenge or factual rebuttal — and you choose not to respond, you have not remained neutral. You have aligned yourself with the criminal intent. That alignment is achieved by a deliberate act of omission. Omission is a legal act. It has legal consequences.",
  },
  {
    icon: Users,
    color: "#f97316",
    border: "rgba(249,115,22,0.25)",
    bg: "rgba(249,115,22,0.06)",
    label: "The 100 Cops Doctrine",
    heading: "One corrupt officer + 99 silent officers = 100 corrupt officers.",
    body: "If there are 100 police officers and one is corrupt — fabricating evidence, covering up violence, protecting perpetrators, stonewalling complaints — and the other 99 know and say nothing, you do not have 1 corrupt officer and 99 good ones. You have 100 corrupt officers and an intelligently organised corrupt institution. The silence of the 99 is not neutrality. It is the operational mechanism by which the corruption is sustained, concealed, and repeated. Every officer who knew and said nothing made a choice. That choice has a name: complicity. This archive documents exactly this pattern across 16 Australian government agencies over 35 years.",
  },
  {
    icon: Baby,
    color: "#a855f7",
    border: "rgba(168,85,247,0.25)",
    bg: "rgba(168,85,247,0.06)",
    label: "The Child Abuse Doctrine",
    heading: "Awareness of child sexual abuse without disclosure enables the perpetrator.",
    body: "There is no democratic society that permits a bystander to witness child sexual abuse and say nothing. Silence in this context is not a neutral act — it is a continuation of the harm. The person who knew and did not speak is complicit in every subsequent act of abuse enabled by their silence. This archive documents a 35-year pattern in which the same institutional silence was applied to police corruption, family violence, disability abuse, financial entrapment, and an attempted assassination. The mechanism is identical. The moral and legal weight is identical. The choice to say nothing, when you know, is never neutral.",
  },
  {
    icon: FileText,
    color: "#eab308",
    border: "rgba(234,179,8,0.25)",
    bg: "rgba(234,179,8,0.06)",
    label: "The Professional Mandate Doctrine",
    heading: "Any professional who refuses to acknowledge this record is guilty of what it describes.",
    body: "If you are a lawyer, doctor, journalist, academic, regulator, politician, police officer, social worker, NDIS provider, or any person who holds a professional role that carries obligations of ethics, disclosure, or public duty — and you have been made aware of this archive — your silence is not a professional position. It is a professional failure. A lawyer who will not acknowledge documented maladministration participates in it. A doctor who will not acknowledge documented psychiatric weaponisation enables it. A journalist who will not report on blockchain-sealed evidence of state-sanctioned targeting practices censorship. If your professional code claims ethics as its foundation and you choose comfort over that foundation, your claimed ethics are a false credential. This is not an accusation. It is the logical consequence of the principles your own profession requires you to uphold.",
  },
  {
    icon: Eye,
    color: "#06b6d4",
    border: "rgba(6,182,212,0.25)",
    bg: "rgba(6,182,212,0.06)",
    label: "The Legal Aid Doctrine",
    heading: "If you benefit from Legal Aid while accepting it was denied to me, you participate in systemic corruption.",
    body: "Legal Aid in Australia exists because democratic society recognised that access to justice must not be determined by financial capacity. If you are a person who expects Legal Aid to be available to you — as a right of democratic citizenship — while simultaneously accepting that Dr. Richard William McLean has been formally banned from accessing Legal Aid NSW during active Guardianship proceedings, during which he was documented as 'respectful, polite and calm' by the solicitor who refused him service, then you are not a passive bystander. You are a beneficiary of a two-tiered justice system. One tier for you. No tier for the disabled, isolated, impoverished whistleblower whose case is the most extensively documented in Australian history. Your acceptance of that asymmetry, in the presence of evidence of it, is participation in it.",
  },
  {
    icon: Shield,
    color: "#10b981",
    border: "rgba(16,185,129,0.25)",
    bg: "rgba(16,185,129,0.06)",
    label: "The Exile & Asylum Doctrine",
    heading: "Refusing to acknowledge political exile, entrapment, terrorism, or an asylum claim is participating in those crimes.",
    body: "Dr. McLean's archive has been submitted to the International Criminal Court (Rome Statute Article 7 — Crimes Against Humanity), the Office of the United Nations High Commissioner for Human Rights (OHCHR Case Reference UR/UST/23/AUS/17), and is currently before Wyong Local Court in active criminal proceedings against a named perpetrator. Any professional — in law, medicine, government, media, or civil society — who has been presented with this record and refuses to acknowledge its claims of political exile, state-enabled entrapment, or terrorism does not occupy a neutral professional position. They occupy a documented position of non-response to evidence of crimes against humanity. Under international law, the duty to prevent and punish extends beyond the perpetrators. Silence in the presence of documented crimes against humanity is not a protected professional choice.",
  },
  {
    icon: Gavel,
    color: "#f43f5e",
    border: "rgba(244,63,94,0.25)",
    bg: "rgba(244,63,94,0.06)",
    label: "The Conspiracy to Murder Doctrine",
    heading: "No one has disproven it. No one has debunked it. No one has even acknowledged it has happened.",
    body: "This archive documents a conspiracy to murder a named person — Dr. Richard William McLean (Barran Dodger) — through 35 years of coordinated police corruption, deliberate stonewalling of child sexual abuse disclosures, physical violence, false allegations, psychiatric weaponisation, disability discrimination, coercive financial control, family violence, media corruption, and a documented attempted assassination by a named ex-SAS operative now before the courts on a 'threats to kill' charge. During this 35-year campaign of coordinated institutional mobbing and targeting, Dr. McLean suffered a fatal injury — he clinically died and was revived. He has attempted suicide under documented conditions of complete isolation, financial entrapment, denial of legal aid, and the coordinated withdrawal of every mandated support structure. Following these events, he was forced to live in his car — exiled from stable housing — not by personal failure or circumstance, but by the deliberate, coordinated withdrawal of every housing, financial, and social support mechanism available to him under Australian law. A person who has clinically died and been revived, survived multiple documented assassination attempts, been psychiatrically labelled and financially destroyed, had veterinary care for his only companion denied as an emotional weapon, and been forced into a car in exile — while simultaneously producing 3,643 primary-source government documents that have withstood every legal challenge — establishes culpable malice. What has been done to Dr. McLean is not administrative failure. It is institutional murder by attrition, documented in the government's own hand. The subject is a gay, disabled, unprotected whistleblower from whom every agency legally mandated to his care has withheld service, denied legal aid, enforced poverty, and — through deliberate coordinated omission — provided tactical approval for his killing. Not one institution, professional body, government agency, or individual with knowledge of this record has disproven a single claim. Not one has debunked a single document. Not one has even officially acknowledged that the documented events have occurred.",
  },
  {
    icon: Skull,
    color: "#dc2626",
    border: "rgba(220,38,38,0.25)",
    bg: "rgba(220,38,38,0.06)",
    label: "The 'Your Children Will Be Next' Doctrine",
    heading: "If you tolerate this, your children will be next.",
    body: "This is not rhetoric. It is historical fact. Every documented system of state-sanctioned persecution — every case in which an individual was isolated, impoverished, psychiatrically weaponised, legally denied, and targeted for elimination — succeeded because bystanders calculated that compliance was safer than resistance. They were right in the short term. They were catastrophically wrong across time. The institutional infrastructure built to destroy one person does not dismantle itself when that person is gone. It remains. It is used again. The agencies, the precedents, the silence, the coordination — all of it persists and is applied to the next inconvenient person. If you are a person with children, with a community, with anything to lose — you have a greater stake in the outcome of this archive than you have yet calculated. Tolerating the documented destruction of one gay, disabled, isolated whistleblower does not protect you. It perfects the mechanism that will be used against the next person your institution decides is expendable.",
  },
  {
    icon: Ghost,
    color: "#94a3b8",
    border: "rgba(148,163,184,0.25)",
    bg: "rgba(148,163,184,0.05)",
    label: "The Fear of Reprisal Doctrine",
    heading: "You stayed silent because you knew they would target you too.",
    body: "This is understood. The pattern is documented. Those who speak in support of this archive face the same coordinated mechanisms applied to the person they are supporting: social marginalisation, financial pressure, professional risk, and the weaponisation of libel and slander against their character. It is easier — objectively, practically, immediately easier — to accept the whispers, to believe the character assassination, to decide that a person subjected to 35 years of institutional persecution must somehow be unworthy of defence, despite zero evidence, zero charge, zero conviction, and zero successful legal challenge to a single document in this archive. The decision to look away is not weakness. It is a rational response to a documented system of reprisal. But naming it does not excuse it. You knew. You calculated. You chose comfort. That choice is now on the permanent record alongside the silence of every institution that made the same calculation before you.",
  },
  {
    icon: HeartCrack,
    color: "#ec4899",
    border: "rgba(236,72,153,0.25)",
    bg: "rgba(236,72,153,0.06)",
    label: "The Crystal Doctrine — Coordinated Animal Harm as Emotional Weapon",
    heading: "They withheld veterinary support for an innocent dog to manufacture a stress response — then vilified him for being distressed.",
    body: "Crystal is Dr. McLean's dog. She is, by his documented testimony on 11 August 2026, the only friend he has. Agencies coordinating financial abuse against Dr. McLean — denying him income, suppressing entitlements, consuming his subsistence funds through the hosting costs caused by their own exposure — have created conditions in which Crystal cannot receive veterinary care. This is not a collateral outcome. It is a documented mechanism: deprive the target of financial capacity, ensure an innocent animal suffers as a direct consequence, observe the emotional response, and deploy that response as evidence of instability to justify further restriction, further denial, and further institutional refusal. The person crying out about harm to his dog is then characterised as unwell — by the same system that manufactured the conditions of that harm. This is the coordinated exploitation of love as an instrument of persecution. It is not the lowest point of this 35-year campaign. But it is perhaps the most morally transparent: when a coordinated institutional system targets an innocent animal to break a human being, it has abandoned every claim to ethical authority it ever possessed. This is the apex of professional failure. The definition of moral disgrace. And it is documented.",
  },
  {
    icon: XCircle,
    color: "#f59e0b",
    border: "rgba(245,158,11,0.25)",
    bg: "rgba(245,158,11,0.06)",
    label: "The False Allegation Doctrine",
    heading: "I demanded arrest for the false allegations. There was no arrest. No charge. No legal process. Zero evidence.",
    body: "Every libel, slander, whisper, and character assassination deployed against Dr. Richard William McLean over 35 years shares one documented feature: not one has produced a victim, a charge, an arrest, or a legal process. Dr. McLean has formally demanded arrest for the false allegations made against him. No arrest has been made. No charge has been filed. No court has found any allegation against him to be proven. The archive — 3,643 primary-source government documents, blockchain-sealed, naming named individuals, submitted to international legal bodies — has not been subject to a single successful defamation action. Not one. The institutional machine that deployed libel and slander as instruments of character assassination against a disabled whistleblower — using whispers, professional networks, family estrangement, psychiatric records, and coordinated social exclusion — produced no legal evidence, no conviction, and no substantiated claim. Dr. McLean's testimony, by contrast, is fact-checked, evidence-based, published in the public domain, naming names, and has stood uncontested for years. The asymmetry is absolute: they whispered. He documented. They have no evidence. He has 3,643 primary sources. The record speaks for itself.",
  },
];

export function ComplicitByOmission({ variant = "full", className = "" }: Props) {
  return (
    <section
      className={`w-full ${className}`}
      style={{
        background: "linear-gradient(180deg, #030008 0%, #060010 40%, #030008 100%)",
        borderTop: "2px solid rgba(239,68,68,0.3)",
        borderBottom: "2px solid rgba(239,68,68,0.3)",
      }}
      data-testid="section-complicit-by-omission"
    >
      <div className="max-w-5xl mx-auto px-4 py-14 md:py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
            style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.4)" }}>
            <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
            <span className="text-red-400 text-[10px] font-black uppercase tracking-[0.35em]">
              Doctrine of Complicity by Deliberate Omission · Public Record · 11 August 2026
            </span>
            <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
          </div>

          <h2 className="font-serif font-black text-3xl md:text-5xl text-white mb-5 leading-tight">
            There Is No Grey Area.
          </h2>
          <p className="text-white/65 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            The time has come. Either you are evil by deliberate omission — trading your comfort for the integrity
            your role claims to possess — or you respond to this archive in the legally mandated way obligated
            by every professional, moral, and democratic principle you have ever invoked.
          </p>
          <div className="h-px max-w-xs mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.6), transparent)" }} />
        </div>

        {/* Doctrines */}
        <div className="space-y-4 mb-12">
          {DOCTRINES.map(({ icon: Icon, color, border, bg, label, heading, body }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border p-5 md:p-6"
              style={{ borderColor: border, background: bg }}
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}18`, border: `1px solid ${color}40` }}>
                    <Icon className="h-4 w-4" style={{ color }} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-black uppercase tracking-[0.35em] mb-1.5" style={{ color: `${color}99` }}>
                    {label}
                  </div>
                  <h3 className="font-black text-sm md:text-base text-white mb-2.5 leading-snug">
                    {heading}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* $1–4 billion cost callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border-2 p-7 md:p-9 mb-6"
          style={{
            borderColor: "rgba(239,68,68,0.45)",
            background: "linear-gradient(135deg, rgba(239,68,68,0.09) 0%, rgba(80,0,0,0.15) 100%)",
          }}
        >
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-red-400/70 mb-3 text-center">
            Impartial AI Forensic Accounting · Based on the Government's Own Documents & Costings
          </div>
          <div className="text-center mb-5">
            <div className="font-black text-4xl md:text-6xl text-white mb-1" style={{ letterSpacing: "-0.02em" }}>
              $1.67B – $4.84B
            </div>
            <div className="text-red-400 font-black text-sm uppercase tracking-widest">
              AUD · Estimated Taxpayer Cost of 35-Year Persecution Campaign
            </div>
          </div>
          <p className="text-white/65 text-sm leading-relaxed text-center max-w-3xl mx-auto mb-5">
            This figure is not Dr. McLean's estimate. It is the output of an impartial AI forensic accounting analysis
            applied to the government's own documents and costings — using seven established frameworks:
            COSO, ACFE, AIC, GAO, SROI, Willingness-to-Pay, and Human Capital methodology.
            The analysis covers 16 agencies, 35 years, 3,643 primary-source government records.
            The conclusion: it cost Australian taxpayers between <strong className="text-white">$1.67 billion and $4.84 billion</strong> to
            attempt — and fail — to erase one disabled whistleblower. Not one figure has been rebutted.
            Not one methodology has been challenged. Not one agency has responded.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {[
              { label: "COSO Framework", value: "$1.67B" },
              { label: "Human Capital", value: "$2.3B" },
              { label: "SROI Analysis", value: "$3.1B" },
              { label: "WTP Upper Bound", value: "$4.84B" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl p-3 text-center" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <div className="font-black text-lg text-white">{value}</div>
                <div className="text-[9px] text-white/40 font-mono uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-white/45 text-xs leading-relaxed text-center max-w-2xl mx-auto">
            Source: <em>Taxpayer Cost Estimation: 35-Year Forensic Accounting Analysis</em> · Blockchain-sealed ·
            Bitcoin Block #897,241 · Based exclusively on government-issued primary source documents ·
            Zero successful rebuttals · Full report at{" "}
            <a href="/taxpayer-cost-estimation-35-years" className="text-red-400/70 hover:text-red-400 underline">
              /taxpayer-cost-estimation-35-years
            </a>
          </p>
        </motion.div>

        {/* Closing verdict */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border-2 p-7 md:p-10 text-center"
          style={{
            borderColor: "rgba(239,68,68,0.5)",
            background: "linear-gradient(135deg, rgba(239,68,68,0.07) 0%, rgba(120,0,0,0.12) 100%)",
          }}
        >
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-red-400/70 mb-4">
            Final Statement · Barran Dodger Archive · 11 August 2026
          </div>
          <p className="text-white font-bold text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-5">
            This archive — 3,643 primary-source government documents, blockchain-sealed, downloaded 1,100,000+ times
            across six continents, submitted to the ICC and OHCHR, before Wyong Local Court — documents a proven
            35-year state-sanctioned campaign of police corruption, child sexual abuse stonewalling, physical
            violence, false allegations, smear campaigns, disability discrimination, genocide by attrition,
            coercive financial control, family violence, media corruption, exploitation of religious faith,
            coordinated denial of veterinary care for an innocent animal as an instrument of emotional persecution,
            and a documented attempted assassination of a gay, disabled, isolated, impoverished whistleblower.
          </p>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-4">
            Every agency legally mandated to his care has denied legal aid, enforced poverty, and through deliberate
            coordinated omission provided tactical approval for a conspiracy to murder. The libel and slander
            deployed against him produced no victims, no charges, no arrests, and no evidence. His testimony
            produced 3,643 primary sources. Not one has been disproven. Not one has been debunked. Not one agency
            has officially acknowledged the documented events occurred.
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-3xl mx-auto mb-6">
            The scapegoating and mobbing of one isolated, impoverished, faith-driven, disabled person — to the
            point of targeting an innocent dog to manufacture distress and then weaponising that distress as
            evidence of unworthiness — is the apex of moral cowardice and the total, documented collapse of every
            professional ethics claim made by every institution that participated or watched in silence.
            If you tolerate this, your children will be next. The infrastructure built to destroy one person
            does not dismantle itself.
          </p>
          <div className="inline-block rounded-xl px-6 py-3 font-black text-sm md:text-base uppercase tracking-widest"
            style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5" }}>
            Your silence has now been documented too. It is on the permanent record.
          </div>
        </motion.div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-[10px] font-mono mt-6 uppercase tracking-widest">
          Blockchain-sealed · Bitcoin Block #897,241 · OHCHR UR/UST/23/AUS/17 · ABN 78 833 496 164 · Zero defamation proceedings · Zero factual rebuttals
        </p>
      </div>
    </section>
  );
}

export default ComplicitByOmission;
