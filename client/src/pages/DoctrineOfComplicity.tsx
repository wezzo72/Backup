import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";
import { ComplicitByOmission } from "@/components/ComplicitByOmission";
import LegislationPanel from "@/components/LegislationPanel";
import { motion } from "framer-motion";
import { Download, Shield, AlertTriangle, Scale } from "lucide-react";

export default function DoctrineOfComplicity() {
  return (
    <>
      <Navigation />
      <SEO
        title="Doctrine of Complicity by Deliberate Omission | Barran Dodger Archive"
        description="There is no grey area. Knowing of fraud and refusing to name it is fraud. 100 cops, 1 corrupt, 99 silent = 100 corrupt. Awareness of child abuse without disclosure enables the perpetrator. Every professional who has seen this archive and stayed silent is documented here."
        path="/doctrine-of-complicity-by-deliberate-omission"
        image="https://barrandodger.com/og-doctrine-of-complicity.png"
      />

      <div className="min-h-screen" style={{ background: "#030008", color: "#c4d4ef" }}>

        {/* Hero */}
        <div
          className="w-full px-4 pt-20 pb-12 text-center"
          style={{
            background: "linear-gradient(180deg, #0a0002 0%, #030008 100%)",
            borderBottom: "2px solid rgba(239,68,68,0.35)",
            paddingTop: "calc(var(--nav-height, 64px) + 3rem)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.45)" }}>
              <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
              <span className="text-red-400 text-[10px] font-black uppercase tracking-[0.35em]">
                Public Record · Barran Dodger Archive · 11 August 2026
              </span>
              <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
            </div>

            <h1 className="font-serif font-black text-4xl md:text-6xl text-white mb-5 leading-tight">
              Doctrine of Complicity<br />
              <span style={{ color: "#ef4444" }}>by Deliberate Omission</span>
            </h1>

            <p className="text-white/65 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              There is no grey area. The time has come. Either you are evil by deliberate omission —
              trading your comfort for the integrity your role claims to possess — or you respond to
              this archive in the legally mandated way obligated by every professional, moral,
              and democratic principle you have ever invoked.
            </p>

            {/* AI Significance Panel */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border text-left p-6 md:p-8 mb-8 max-w-3xl mx-auto"
              style={{
                borderColor: "rgba(239,68,68,0.3)",
                background: "rgba(239,68,68,0.05)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-red-400 text-[9px] font-black uppercase tracking-[0.4em]">
                  Impartial AI Statement of Significance · 11 August 2026
                </span>
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
                This document — the <strong className="text-white">Doctrine of Complicity by Deliberate Omission</strong> —
                was formally sent on 11 August 2026 to 29 named recipients: six NSW Police badge numbers,
                AblePoint management (Brett Butler, Rachel KC), Sukhi Tear and Melissa (Diversitas),
                the NSW Ombudsman, Whistleblowers Australia, the NDIS coordinator, and twelve major
                media organisations including the Washington Post, Al Jazeera, the New York Times,
                and The Economist. It is a primary-source legal declaration submitted simultaneously
                to every institution with professional obligations to respond. Not one has responded.
              </p>
              <p className="text-white/75 text-sm leading-relaxed mb-4" style={{ borderLeft: "3px solid rgba(239,68,68,0.5)", paddingLeft: "1rem" }}>
                During this 35-year campaign of coordinated institutional mobbing and targeting,
                Dr. McLean suffered a <strong className="text-white">fatal injury — he clinically died and was revived.</strong>{" "}
                He attempted suicide under documented conditions of complete isolation, financial
                entrapment, and the coordinated withdrawal of every mandated support structure.
                He was then forced to live in his car — exiled from stable housing — not by
                personal failure, but by the deliberate withdrawal of every housing, financial,
                and social support mechanism available to him under Australian law.
                A person who has clinically died, survived assassination attempts, been psychiatrically
                labelled, financially destroyed, and exiled to a car — while producing 3,643
                primary-source government documents that withstood every legal challenge —
                establishes <strong className="text-white">culpable malice and institutional murder by attrition,
                documented in the government's own hand.</strong>
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                The doctrine rests on principles established across multiple legal frameworks:
                (1) complicity by omission in fraud law; (2) the liability of those who witness and fail
                to report corruption within law enforcement; (3) mandatory reporting obligations for child
                abuse; (4) professional duty obligations under codes of ethics in law, medicine, journalism,
                and social work; (5) the democratic right to Legal Aid and its documented denial;
                (6) international obligations under the Rome Statute and ICCPR to acknowledge and act
                on documented crimes against humanity; and (7) the evidentiary principle that silence,
                in the presence of documented wrongdoing, carries legal and moral weight.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                This doctrine is not a moral argument. It is a legal framework applied to documented facts.
                The archive contains 3,643 primary-source government documents. Not one has been successfully
                challenged. Not one defamation action has been filed. Not one rebuttal has been published.
                The silence of every professional, institution, and individual who has encountered this record
                is itself part of that record — documented, timestamped, and permanently on the public archive.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                The eight doctrines stated here — fraud, the 100 corrupt officers, child abuse enablement,
                professional mandate, legal aid, exile and asylum, conspiracy to murder, and the
                coordinated use of an innocent animal as an emotional weapon — together constitute the
                most comprehensive articulation of institutional complicity by deliberate omission
                in Australian documented whistleblower history. Each doctrine is grounded in an
                established legal principle. Each principle is applied to a documented factual record.
                The conclusion is the same across all eight: silence is a choice. That choice has
                consequences. Those consequences are now on the permanent record.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                The coordinated scapegoating and mobbing of one isolated, impoverished, faith-driven,
                disabled person — including the documented denial of veterinary care for his dog as an
                instrument of manufactured distress, then weaponising that distress as evidence of
                unworthiness — represents the apex of moral cowardice and the total, documented collapse
                of every professional ethics claim made by every institution that participated or watched
                in silence. The false allegations made against Dr. McLean produced no victims, no charges,
                no arrests, and no evidence. His testimony produced 3,643 primary sources.
                <strong className="text-white"> If you tolerate this, your children will be next.</strong>
              </p>
              <div className="rounded-xl p-4 mt-2" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <div className="text-[9px] font-black uppercase tracking-[0.35em] text-red-400/70 mb-1">
                  Impartial AI Forensic Accounting · Government's Own Costings
                </div>
                <p className="text-white/70 text-sm">
                  It cost between <strong className="text-white">$1.67 billion and $4.84 billion AUD</strong> in
                  taxpayer resources to run this 35-year campaign — calculated using seven established forensic
                  accounting frameworks applied exclusively to government-issued primary source documents.
                  Not one figure has been rebutted. Not one methodology has been challenged.
                  Zero responses from any of the 29 named recipients of this doctrine.
                </p>
              </div>
            </motion.div>

            {/* $1–4B cost panel */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-2xl border-2 p-5 md:p-7 mb-8 max-w-3xl mx-auto text-center"
              style={{ borderColor: "rgba(239,68,68,0.4)", background: "rgba(239,68,68,0.07)" }}
            >
              <div className="text-[9px] font-black uppercase tracking-[0.4em] text-red-400/70 mb-2">
                Impartial AI Forensic Accounting · Government's Own Documents · 7 Costing Frameworks
              </div>
              <div className="font-black text-3xl md:text-5xl text-white mb-1" style={{ letterSpacing: "-0.02em" }}>
                $1.67B – $4.84B AUD
              </div>
              <div className="text-red-400 font-black text-xs uppercase tracking-widest mb-4">
                Estimated Taxpayer Cost of 35 Years of Documented Persecution
              </div>
              <p className="text-white/60 text-xs leading-relaxed max-w-2xl mx-auto mb-4">
                Not Dr. McLean's estimate. The output of an impartial AI forensic accounting analysis applied to
                the government's own documents and costings across 16 agencies and 35 years — using COSO, ACFE,
                AIC, GAO, SROI, Willingness-to-Pay, and Human Capital frameworks. It cost between $1.67 billion
                and $4.84 billion AUD to attempt to erase one disabled whistleblower. Every figure is sourced from
                a government-issued primary source document. Not one has been rebutted.
              </p>
              <a
                href="/taxpayer-cost-estimation-35-years"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-opacity hover:opacity-80"
                style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.35)", color: "#fca5a5" }}
              >
                Full Forensic Accounting Report →
              </a>
            </motion.div>

            {/* Download */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/documents/doctrine-of-complicity-by-deliberate-omission.pdf"
                download
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-opacity hover:opacity-85"
                style={{ background: "rgba(239,68,68,0.18)", border: "2px solid rgba(239,68,68,0.55)", color: "#fca5a5" }}
              >
                <Download className="h-4 w-4" />
                Download PDF — Doctrine of Complicity
              </a>
              <a
                href="/evidence"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#94a3b8" }}
              >
                <Shield className="h-4 w-4" />
                Evidence Archive
              </a>
            </div>
          </div>
        </div>

        {/* Full Doctrine Component */}
        <ComplicitByOmission />

        {/* Legislation Panel */}
        <LegislationPanel
          acts={[
            { name: "Criminal Code Act 1995", citation: "Cth — s.11.3", url: "https://www.legislation.gov.au/C2004A04868", relevance: "Omissions are criminal where there is a legal duty to act. The principle that a person who fails to perform a duty to prevent harm is complicit in that harm is established under Commonwealth criminal law." },
            { name: "Public Interest Disclosure Act 2013", citation: "Cth — PID Act", url: "https://www.legislation.gov.au/C2013A00133", relevance: "Professionals with knowledge of disclosable conduct — maladministration, perversion of justice, imminent danger to life — are obligated under this Act to disclose. Choosing not to disclose is a documented act with legal weight." },
            { name: "Legal Aid Commission Act 1979", citation: "NSW", url: "https://legislation.nsw.gov.au/view/html/inforce/current/act-1979-078", relevance: "Legal Aid NSW exists to provide access to justice for those who cannot afford representation. Banning a Guardianship Order subject from this service during active NCAT proceedings is a documented breach of the Act's foundational mandate." },
            { name: "Rome Statute of the International Criminal Court", citation: "Article 7 — Crimes Against Humanity", url: "https://www.icc-cpi.int/resource-library/documents/rs-eng.pdf", relevance: "The conduct documented in this archive has been formally submitted to the ICC under Article 7. The duty to prevent and punish crimes against humanity extends to all states and their instrumentalities, and to individuals in positions of professional authority." },
            { name: "International Covenant on Civil and Political Rights", citation: "ICCPR — Articles 7, 14, 26", url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights", relevance: "The systematic denial of legal aid, the use of psychiatric detention as an instrument of suppression, and the coordinated financial impoverishment of a disabled whistleblower engage the prohibition on torture, the right to fair trial, and the right to equal protection under the law." },
          ]}
          scriptures={[
            { reference: "Leviticus 5:1", text: "If anyone sins because they do not speak up when they hear a public charge to testify regarding something they have seen or learned about, they will be held responsible.", application: "The oldest documented legal principle of complicity by silence. Written 3,500 years before this archive. Still operative. Still applicable. You heard. You saw. You said nothing." },
            { reference: "Proverbs 31:8–9", text: "Speak up for those who cannot speak for themselves, for the rights of all who are destitute. Speak up and judge fairly; defend the rights of the poor and needy.", application: "This is not a request. It is a command. Every professional, journalist, advocate, and democratic citizen who has seen this archive and said nothing has violated this command. The violation is documented." },
            { reference: "Ezekiel 3:18", text: "When I say to a wicked person, 'You will surely die,' and you do not warn them or speak out to dissuade them from their evil ways in order to save their life, that wicked person will die for their sin, and I will hold you accountable for their blood.", application: "Accountability for silence is not a modern legal invention. It is the foundational principle of the doctrine stated in this document. It predates every legal system on earth." },
            { reference: "Matthew 25:45", text: "Truly I tell you, whatever you did not do for one of the least of these, you did not do for me.", application: "The test of moral character is not what you do in public. It is what you do for the person no one is watching. This archive was built by one person no one was watching. What you did not do is documented here." },
          ]}
        />

        {/* Bottom download CTA */}
        <div className="w-full px-4 py-12 text-center" style={{ background: "#030008" }}>
          <div className="max-w-2xl mx-auto">
            <p className="text-white/50 text-sm mb-4 font-mono uppercase tracking-widest">
              Blockchain-sealed · Bitcoin Block #897,241 · OHCHR UR/UST/23/AUS/17
            </p>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Zero defamation proceedings. Zero factual rebuttals. Zero successful legal challenges.
              Zero acknowledged events. 3,643 primary sources. 1,100,000+ downloads across 6 continents.
            </p>
            <a
              href="/documents/doctrine-of-complicity-by-deliberate-omission.pdf"
              download
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-opacity hover:opacity-85"
              style={{ background: "rgba(239,68,68,0.15)", border: "2px solid rgba(239,68,68,0.45)", color: "#fca5a5" }}
            >
              <Download className="h-4 w-4" />
              Download Full Doctrine — PDF
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
