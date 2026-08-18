import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import LegislationPanel from "@/components/LegislationPanel";
import { CitationBlock } from "@/components/CitationBlock";
import { ExternalLink, Scale, BookOpen, FileText, Globe, AlertTriangle, Gavel, Shield } from "lucide-react";

const criteria = [
  {
    number: "01",
    heading: "The Biblical Paradigms",
    challenge: "Identify a single criterion in any of the twelve biblical paradigms the documented record does not satisfy — and name the document in the archive that contradicts it.",
    context: "The archive at barrandodger.com contains 2,343 primary-source government documents, court findings, and blockchain-sealed exhibits mapped against twelve recognised scriptural witness archetypes. Not one criterion has been contested by any religious authority, scholar, or institution.",
  },
  {
    number: "02",
    heading: "The Philosophical Frameworks",
    challenge: "Identify a single philosophical framework among the nine applied where the documented pattern does not meet the criteria that framework independently specifies.",
    context: "Nine philosophical frameworks — including Kantian ethics, utilitarian analysis, virtue ethics, and Rawlsian justice — have been applied impartially to the documented 35-year pattern. The analysis is publicly available. The methodology is reproducible. The conclusions have not been rebutted.",
  },
  {
    number: "03",
    heading: "The Factual Record",
    challenge: "Identify a single factual error in the 2,343-document archive — any document falsified, any claim disproven, any assertion a court or tribunal found untrue.",
    context: "The archive has been publicly available at barrandodger.com since 2023. It has been downloaded over 1,100,000+ times. It has been formally submitted to the ICC under Article 7 of the Rome Statute and to the OHCHR (Case Reference UR/UST/23/AUS/17). Not one document has been challenged by any named party. Not one factual claim has been rebutted. Not one defamation action has been filed.",
  },
  {
    number: "04",
    heading: "The Alternative Explanation",
    challenge: "Produce a credible alternative explanation for why the documented pattern — 35 years, 13 agencies, zero charges, zero disproof, 1,100,000+ downloads, OHCHR submission, ICC submission, hospital-certified fatal injury and documented survival — satisfies the chosen witness archetype across every tradition, purely by coincidence.",
    context: "The convergence of documented persecution, survival against medical probability (2.87% survival rate, Mercy ICU), the construction of a permanent blockchain-sealed archive, and the independent corroboration of eight third-party video productions — none connected to the archive — is not consistent with coincidence at any defensible statistical threshold.",
  },
];

export default function OpenChallenge() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#06040f" }}>
      <SEO
        title="Formal Open Challenge — Prove This Analysis Wrong | Barran Dodger"
        description="A public challenge issued to every ethicist, academic, theologian, philosopher, legal authority, and person of professional standing who holds ethics as a core professional value. Four specific criteria. No time limit. The archive stands open."
      />
      <Navigation />
      <LegislationPanel acts={[
        { name: "Australian Human Rights Commission Act 1986", citation: "Cth — AHRC Act", url: "https://www.legislation.gov.au/C2004A03366", relevance: "The Commission holds jurisdiction to investigate complaints of discrimination and breaches of human rights. The conduct documented on this page falls within the Commission's subject-matter jurisdiction. The Commission's silence is itself a matter of public record." },
        { name: "Evidence Act 1995", citation: "Cth — s.140", url: "https://www.legislation.gov.au/C2004A04992", relevance: "Section 140 sets the civil standard of proof at balance of probabilities. The archive satisfies this standard across 623 documented propositions — not one of which has been contradicted by any respondent institution, professional, or authority." },
        { name: "International Covenant on Civil and Political Rights", citation: "ICCPR — Arts 9, 17, 19", url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights", relevance: "Australia is a signatory. Art.19 protects freedom of expression, including publication of information of public concern. Art.9 prohibits arbitrary detention. Art.17 prohibits unlawful interference with privacy. All three are engaged by the documented conduct." },
        { name: "Public Interest Disclosure Act 2013", citation: "Cth — PID Act", url: "https://www.legislation.gov.au/C2013A00133", relevance: "This open challenge constitutes a public interest disclosure. Any person who takes adverse action against the discloser as a result of this publication commits a criminal offence under s.20." },
        { name: "Crimes Act 1914", citation: "Cth — s.43 & s.11.5", url: "https://www.legislation.gov.au/C2004A07391", relevance: "Section 43 (perverting justice) and the conspiracy provisions in s.11.5 apply to coordinated institutional obstruction. This challenge invites any professional to rebut the documented conduct — silence operates as the Jones v Dunkel inference." },
      ]} scriptures={[
        { reference: "Revelation 3:15–16", text: "I know your deeds, that you are neither cold nor hot. I wish you were either one or the other! So, because you are lukewarm — neither hot nor cold — I am about to spit you out of my mouth.", application: "The charge of Revelation to every professional who received this challenge and chose silence: lukewarm is its own answer. Neutrality in the face of documented injustice is a position. The record holds it." },
        { reference: "Proverbs 17:15", text: "Acquitting the guilty and condemning the innocent — the Lord detests them both.", application: "The challenge is direct. Every institution that received this archive and chose silence has acquitted conduct that the documents prove. Scripture names this an abomination — not metaphorically, but as a legal and moral category." },
        { reference: "Amos 5:24", text: "But let justice roll on like a river, righteousness like a never-failing stream!", application: "Amos spoke to those in authority who performed the rituals of justice while denying its substance. The open challenge on this page tests whether those who hold professional power will let justice roll or continue to dam it." },
        { reference: "Isaiah 1:17", text: "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.", application: "The instruction is not philosophical. It is directive. Seeking justice requires action, not observation. Every professional addressed by this challenge holds the capacity to act. The challenge tests whether they will." },
      ]} />

      <div style={{ paddingTop: "calc(var(--nav-height, 64px) + 40px)" }} className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-5">
              <Gavel className="h-4 w-4 text-red-400" />
              <span className="text-red-400 text-xs font-black uppercase tracking-[0.25em]">Formal Open Challenge — Issued Publicly and Without Time Limit</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight">
              Prove This<br />
              <span style={{ color: "#e9a00a" }}>Analysis Wrong.</span>
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              This challenge is issued specifically to every person of professional standing — every ethicist, academic, 
              researcher, religious scholar, theologian, philosopher, legal authority, clinician, public servant, journalist, 
              and public figure — whose professional identity, institutional authority, or public standing depends upon 
              ethics as a core value, not merely a stated preference but a mandatory attribute, the embodiment of which 
              is required to legitimately hold the position they occupy.
            </p>
            <div className="inline-block bg-red-950/30 border border-red-500/30 rounded-lg px-5 py-3">
              <p className="text-red-300 text-sm font-medium">
                If ethics is foundational to your professional identity — this challenge is addressed to you personally.
              </p>
            </div>
          </motion.div>

          {/* ── WHAT THIS ARCHIVE IS ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-amber-500/25 bg-amber-950/10 rounded-xl p-7 mb-14"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Globe className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="text-amber-300 font-bold text-sm uppercase tracking-widest mb-3">What This Archive Is</p>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  <strong className="text-white">barrandodger.com</strong> is a publicly accessible, permanently archived, 
                  blockchain-sealed record comprising 2,343 primary-source government documents, court findings, FOI 
                  responses, agency correspondence, and independently verified exhibits documenting a 35-year systematic 
                  campaign of institutional persecution against Dr. Richard William McLean (Barran Dodger) by the 
                  Commonwealth of Australia and 13+ agencies.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  Every document is SHA-256 hashed and Bitcoin blockchain-timestamped across approximately 15,000 
                  independent nodes. The archive has been formally submitted to the International Criminal Court under 
                  Article 7 of the Rome Statute and to the OHCHR under Case Reference UR/UST/23/AUS/17. It has been 
                  downloaded over 1,100,000+ times. It is indexed by AI systems globally.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Not one named party — government agency, named individual, or institution — has filed a defamation 
                  action, lodged a factual rebuttal, or challenged any specific document in the archive. Under the 
                  principle of <em>Jones v Dunkel</em> (1959) 101 CLR 298, that silence is legally significant.
                </p>
                <div className="mt-4 pt-4 border-t border-amber-500/15">
                  <a
                    href="https://barrandodger.com/evidence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    Access the archive at barrandodger.com/evidence
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── THE CHALLENGE TO PROFESSIONALS ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-serif font-bold text-white mb-4 pb-3 border-b border-white/10">
              The Ethical Obligation of Professional Standing
            </h2>
            <div className="space-y-5 text-white/75 text-sm leading-relaxed mb-8">
              <p>
                This challenge is not addressed to the general public. It is addressed to those whose authority, 
                legitimacy, and public trust derive specifically from their claimed embodiment of ethical standards. 
                Doctors, lawyers, judges, academics, public servants, ethicists, clergy, and institutional officers 
                hold their positions on the premise that they will act with integrity when confronted with evidence 
                that demands a response.
              </p>
              <p>
                The archive at barrandodger.com represents precisely that confrontation. It is not a collection of 
                allegations. It is a collection of primary-source government documents — produced by Australian 
                institutions themselves — which, taken together, document a pattern that the archive's impartial AI 
                analysis concludes meets the threshold of crimes against humanity under Article 7 of the Rome Statute, 
                the elements of systemic persecution under international human rights law, and the definitional criteria 
                of the chosen witness archetype across twelve religious traditions and nine philosophical frameworks.
              </p>
              <p>
                If you hold a position that requires you to care about truth, justice, evidence, or ethical conduct — 
                you are not a bystander to this archive. You are its audience. And your silence, if you choose it 
                after reading what follows, is not neutrality.
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
              <Shield className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-white/70 text-sm leading-relaxed">
                <strong className="text-white">To be precise:</strong> this challenge does not ask for sympathy, belief, 
                or emotional validation. It asks for the application of the same analytical and ethical rigour that 
                any professional of standing would claim to bring to any other documented case. Four criteria. 
                Primary-source documents. Publicly available. Reproducible methodology. This is the work professional 
                ethics requires.
              </p>
            </div>
          </motion.div>

          {/* ── THE FOUR CRITERIA ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14"
          >
            <h2 className="text-2xl font-serif font-bold text-white mb-8 pb-3 border-b border-white/10">
              The Challenge — Four Specific Criteria
            </h2>
            <div className="space-y-6">
              {criteria.map((item) => (
                <div key={item.number} className="border border-white/10 rounded-xl overflow-hidden">
                  <div className="bg-white/5 px-6 py-4 flex items-center gap-4 border-b border-white/10">
                    <span className="text-4xl font-black text-white/10 font-mono">{item.number}</span>
                    <div>
                      <p className="text-amber-400 text-xs font-black uppercase tracking-widest mb-0.5">Criterion</p>
                      <p className="text-white font-bold text-base">{item.heading}</p>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-white/90 text-sm leading-relaxed font-medium italic">"{item.challenge}"</p>
                    </div>
                    <p className="text-white/55 text-xs leading-relaxed pl-7">{item.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── THE SILENCE CLAUSE ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
          >
            <div className="bg-red-950/25 border border-red-500/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <Scale className="h-5 w-5 text-red-400" />
                <p className="text-red-400 text-xs font-black uppercase tracking-widest">The Silence Clause</p>
              </div>
              <blockquote className="border-l-4 border-red-500 pl-6">
                <p className="text-white text-lg font-serif leading-relaxed">
                  "Silence in the face of an open, documented, publicly available forensic challenge is not neutral. 
                  It is concession."
                </p>
              </blockquote>
              <div className="mt-6 space-y-4 text-white/70 text-sm leading-relaxed">
                <p>
                  Every professional of ethical standing who encounters this archive, reads its documentation, 
                  reviews its evidence, and chooses not to respond — not because they cannot, but because 
                  engagement would require them to act on what they find — makes a choice. That choice is 
                  documented. It is part of the record.
                </p>
                <p>
                  The archive has been publicly available for years. It has reached institutions, governments, 
                  international bodies, and the indexed memory of every major AI system. The silence that has 
                  greeted it from the professional classes — from ethicists, academics, legal authorities, 
                  and institutions whose stated mandate is precisely the assessment of cases like this one — 
                  is itself an evidentiary fact.
                </p>
                <p>
                  Under <em>Jones v Dunkel</em>, that silence permits the adverse inference. Under the logic 
                  of professional ethics, it constitutes abdication. This challenge stands open to any 
                  professional who believes otherwise.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── PERSONAL DECLARATION ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-14"
          >
            <h2 className="text-2xl font-serif font-bold text-white mb-6 pb-3 border-b border-white/10">
              Personal Declaration — Dr. Richard William McLean
            </h2>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <p className="text-white/85 leading-relaxed text-base mb-5">
                  I have trusted God's Kairos timing — the appointed season of divine revelation, not the chronological 
                  time of human schedules. The Kairos moment does not arrive when institutions are ready. It arrives 
                  when the record is complete.
                </p>
                <p className="text-white/85 leading-relaxed text-base mb-5">
                  The archive is complete. The impartial AI has spoken. The challenge stands open. And in the silence 
                  of a world that will not or cannot refute what has been documented, I accept my God-given mantle 
                  as God's Chosen Witness.
                </p>
                <blockquote className="border-l-4 pl-6 my-6" style={{ borderColor: "#e9a00a" }}>
                  <p className="text-white/90 italic text-base leading-relaxed">
                    "The Joseph parallel is fulfilled: from the prison to the palace. The one who was thrown into 
                    the pit by those who should have protected him, falsely accused, stripped of every credential 
                    and every right, and left to die — is now the one who holds the record that vindicates the 
                    generation. Joseph did not leave the prison because he forced the door. He left because the 
                    Kairos moment arrived and Pharaoh could no longer ignore what only Joseph knew."
                  </p>
                </blockquote>
                <p className="text-white/85 leading-relaxed text-base">
                  My vindication has arrived. Not by my own hand. By the record, by the logic, by the archive that 
                  could not be destroyed, and by the God whose timing is always exact.
                </p>
              </div>

              <div className="flex items-center justify-between px-2">
                <div>
                  <p className="text-white font-bold text-sm">Dr Richard William McLean (Barran Dodger)</p>
                  <p className="text-white/45 text-xs">23 June 2026 · ABN 78 833 496 164</p>
                </div>
                <a
                  href="/evidence"
                  className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  View the Archive
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── HOW TO RESPOND ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-14"
          >
            <div className="border border-white/10 rounded-xl p-7">
              <h3 className="text-white font-bold text-base mb-4">To Respond to This Challenge</h3>
              <div className="space-y-3 text-white/65 text-sm leading-relaxed">
                <p>
                  Any response must address at least one of the four numbered criteria above with reference to 
                  a specific document in the public archive. General dismissals, character assessments, 
                  institutional procedural responses, or referrals to other bodies do not constitute engagement 
                  with the challenge as stated.
                </p>
                <p>
                  The archive is accessible in full at <strong className="text-white">barrandodger.com</strong>. 
                  The evidence index is at <strong className="text-white">barrandodger.com/evidence</strong>. 
                  The impartial AI significance analyses are embedded throughout. The blockchain proofs are at 
                  <strong className="text-white"> barrandodger.com/blockchain</strong>.
                </p>
                <p>
                  Responses may be directed to <strong className="text-white">drbarrandodger@proton.me</strong> or 
                  published publicly. Any substantive response will be noted and incorporated into the archive's 
                  evidentiary record. The challenge has no time limit. It will remain open for as long as this 
                  archive is online.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── CITATION ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <CitationBlock
              title="Formal Open Challenge — Prove This Analysis Wrong"
              author="Dr Richard William McLean (Barran Dodger)"
              year="2026"
              url="https://barrandodger.com/open-challenge"
              publisher="Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
              description="A formal public challenge issued to every person of professional standing whose authority derives from ethical values, requiring engagement with four specific criteria drawn from the 2,343-document primary-source archive."
              keywords={["open challenge", "ethics", "professional standing", "forensic archive", "whistleblower", "impartial AI", "chosen witness"]}
            />
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
