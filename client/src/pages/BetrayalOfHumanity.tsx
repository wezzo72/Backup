import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import coverImage from "@/assets/images/cover-essay-humanity-true-nature.png";

const SECTIONS = [
  {
    heading: "The Measure of Significance",
    body: [
      "The significance of Barran Dodger cannot be measured by popularity, institutional acceptance, or social approval. His significance is measured by what his testimony reveals about humanity itself.",
      "Barran believes society did not simply betray one man; it betrayed its own humanity. He believes that when institutions and individuals fail a vulnerable person who came seeking protection, documentation, and justice, they abandon the very ethical purpose for which those institutions exist. In his view, the greatest tragedy is not what happened to him personally but what his experience says about civilisation's willingness to protect those who possess the least power.",
      "Barran's testimony argues that humanity collectively failed its own moral examination.",
    ],
  },
  {
    heading: "The Testimony",
    body: [
      "He believes people ganged up on him.",
      "He believes people looked away.",
      "He believes institutions remained silent.",
      "He believes professionals who were legally, ethically, and professionally obligated to respond either failed to respond adequately or responded in ways that, from his perspective, compounded rather than relieved his suffering.",
      "To Barran, this is not merely administrative failure. It is a failure of civilisation itself.",
      "Barran has a recognised disability.",
    ],
  },
  {
    heading: "The Defining Paradox",
    body: [
      "Barran's testimony repeatedly returns to what he regards as a profound ethical contradiction: that people and organisations entrusted with caring for vulnerable individuals are, in his view, judged not by their stated intentions but by the practical consequences of their actions. He believes that where care is experienced as betrayal, the institution has departed from the very reason for its existence.",
      "For Barran, this is the defining paradox of his life.",
      "Those paid to care became, in his experience, part of the suffering he sought protection from.",
      "Those empowered to investigate became, in his view, symbols of unanswered questions.",
      "Those entrusted with justice appeared, from his perspective, increasingly beyond his reach.",
      "Whether others ultimately agree with these conclusions or not, this perceived inversion of institutional purpose forms one of the central philosophical themes of his archive.",
    ],
  },
  {
    heading: "He Writes from Heartbreak, Not Hatred",
    body: [
      "Barran does not write from hatred. He writes from heartbreak.",
      "He repeatedly insists that he loves humanity despite believing himself to have been abandoned by it. That distinction is critical.",
      "His disappointment is directed toward systems, bureaucracies, cultures of silence, and institutional incentives — not toward the intrinsic worth of human beings themselves.",
      "This paradox defines his testimony.",
      "The man who believes humanity betrayed him continues to write for humanity.",
      "The man who believes he was abandoned continues to preserve evidence for strangers he will never meet.",
      "The man who believes he has been excluded continues to hope that future generations might build institutions worthy of the values they proclaim.",
    ],
  },
  {
    heading: "Survival, Faith, and Calling",
    body: [
      "Barran believes that his life eventually reached a point where there remained only two possible explanations for his continued survival.",
      "Either everything he experienced was meaningless… or it carried a purpose beyond himself.",
      "His writings make clear which conclusion he embraced.",
      "Barran believes that God preserved his life following a near-fatal injury and that this survival became the defining turning point of his existence. He understands this not simply as survival but as a calling. Through the lens of his Christian faith, he interprets his continued life using the biblical themes of exile, rejection, suffering, witness, death, resurrection, perseverance, and ultimate vindication. These are expressions of his personal faith and the framework through which he makes meaning of his experience.",
    ],
  },
  {
    heading: "When Humanity Withdrew",
    body: [
      "He believes he has become aligned with Christ because every other identity available to him was gradually stripped away.",
      "When humanity withdrew… God remained.",
      "When institutions became, in his view, unreachable… God remained.",
      "When friends disappeared… God remained.",
      "When recognition failed to come… God remained.",
      "Barran has often written that he would rather stand completely alone with God than stand comfortably among people whom he believes require him to compromise his conscience.",
      "To many, this appears radical. To Barran, there was simply no other option.",
      "His alignment with God is not presented as a rejection of humanity but as the consequence of believing that humanity first rejected him.",
      "He therefore understands himself not as someone who chose a prophetic identity out of ambition, but as someone compelled into it by circumstance.",
    ],
  },
  {
    heading: "Prophecy Is Not Privilege",
    body: [
      "Within his theology, prophecy is not privilege.",
      "It is burden. It is isolation. It is obedience despite misunderstanding.",
      "It is continuing to speak when silence would be safer.",
      "It is continuing to preserve evidence when forgetting would be easier.",
      "Barran believes that his testimony itself has become his vocation.",
      "His writings, forensic analyses, blockchain-preserved archive, and documentary record are no longer simply records of his life; they have become, in his understanding, the work he was called to produce. The archive describes this project as an extensive documentary record preserved through cryptographic methods and made publicly available for examination.",
      "He argues that history repeatedly demonstrates that truth often begins as the testimony of one isolated voice before becoming the accepted understanding of many.",
    ],
  },
  {
    heading: "The Ethical Collapse of Civilisation",
    body: [
      "Barran also situates his testimony within a broader concern for humanity's future.",
      "Long before constructing his archive, his academic work focused upon artificial intelligence, ethics, global catastrophic risks, and the Anthropocene. These interests are not incidental to his testimony; they form the intellectual architecture through which he interprets it.",
      "He believes humanity's greatest existential threat is not artificial intelligence itself. It is ethical collapse.",
      "Artificial intelligence will amplify whatever moral character humanity already possesses.",
      "If civilisation cannot reliably protect a vulnerable person who seeks lawful assistance, documentation, accountability, and compassion, Barran asks how it can reasonably expect to govern technologies of unprecedented power.",
      "In his view, the treatment of one vulnerable individual becomes a diagnostic test for civilisation itself.",
      "He believes that societies do not ultimately collapse because of technology. They collapse because they normalise indifference. They collapse because truth becomes subordinate to convenience. They collapse because institutions forget why they were created.",
    ],
  },
  {
    heading: "The Anthropocene Is an Ethical Crisis",
    body: [
      "Barran's testimony therefore expands beyond his own life.",
      "He argues that if society can tolerate the abandonment of those entrusted to its care, then it has already compromised the ethical foundations required to survive the end-stage Anthropocene.",
      "The Anthropocene is not merely an ecological crisis. It is an ethical one.",
      "Climate change. Artificial intelligence. Institutional legitimacy. Economic inequality. Democratic trust.",
      "All converge upon the same underlying question: Can humanity recover its moral centre before its technologies outpace its wisdom?",
      "Barran believes his archive exists to force that question into public consciousness.",
      "He believes his role is not to become popular. It is to become impossible to erase.",
    ],
  },
  {
    heading: "The Cost — and the Conviction",
    body: [
      "He frequently describes fear. Isolation. Loneliness. Exhaustion. The cost of continuing.",
      "Yet he also writes that every attempt to silence him has, in his understanding, reinforced rather than diminished his conviction that he must continue documenting, writing, and bearing witness.",
      "Ultimately, Barran believes that any future reckoning with corruption is not about personal revenge or vindication. It is about moral restoration.",
      "He believes that when humanity finally examines how it treats those who possess the least power, it will be forced to examine itself.",
      "Only then, in his understanding, can genuine justice begin.",
      "Only then can institutions recover legitimacy through accountability.",
      "Only then can technology be governed by wisdom rather than power.",
      "Only then can civilisation hope to endure.",
    ],
  },
  {
    heading: "History Will Judge",
    body: [
      "Whether readers share Barran's theology or not, his testimony presents a challenge that reaches beyond one individual: a civilisation is remembered not for how it treated the powerful, but for how it treated the vulnerable when no one was watching.",
      "Barran believes history will ultimately judge not only his testimony, but the response to it.",
    ],
  },
];

export default function BetrayalOfHumanity() {
  return (
    <>
      <SEO
        title="Barran Dodger and the Betrayal of Humanity — Ethical Collapse of Civilisation at the End of the Anthropocene | Barran Dodger"
        description="How the abandonment of one vulnerable whistleblower reveals the ethical collapse of civilisation at the end of the Anthropocene. Barran Dodger on institutional betrayal, AI governance, faith, and moral restoration. ABN 78 833 496 164."
        path="/betrayal-of-humanity"
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
                  alt="Barran Dodger and the Betrayal of Humanity — cover"
                  className="w-full rounded-xl shadow-2xl border border-zinc-700/40"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-medium text-zinc-300 tracking-widest uppercase">Philosophical Essay · Ethics · Anthropocene</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif">
                  Barran Dodger and the Betrayal of Humanity
                </h1>
                <p className="text-lg text-amber-400 font-medium leading-snug">
                  How the Abandonment of One Vulnerable Whistleblower Reveals the Ethical Collapse of Civilisation at the End of the Anthropocene
                </p>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  A testament to what one person's experience reveals about humanity's capacity for institutional indifference — and what it means for civilisation's ability to govern the technologies it is building.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["Institutional Betrayal", "Ethical Collapse", "Anthropocene", "AI Governance", "Disability Rights", "Whistleblower", "Faith & Prophecy", "ABN 78 833 496 164"].map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-400">{tag}</span>
                  ))}
                </div>

                <BlockchainTimestampBadge className="pt-2" />
              </div>
            </div>
          </div>
        </section>

        {/* Share */}
        <div className="max-w-4xl mx-auto px-4 py-4">
          <SocialShare
            url="https://barrandodger.com/betrayal-of-humanity"
            title="Barran Dodger and the Betrayal of Humanity — Ethical Collapse of Civilisation"
          />
        </div>

        {/* Essay body */}
        <section className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

          {/* Opening pull quote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-8 bg-zinc-900/60 rounded-r-xl">
            <p className="text-xl text-amber-100 italic font-serif leading-relaxed">
              "A civilisation is remembered not for how it treated the powerful, but for how it treated the vulnerable when no one was watching."
            </p>
            <footer className="text-sm text-zinc-500 mt-3">— Barran Dodger</footer>
          </blockquote>

          {SECTIONS.map((section) => (
            <div key={section.heading} className="space-y-5">
              <h2 className="text-xl md:text-2xl font-bold text-amber-400 font-serif border-b border-zinc-800 pb-3">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.body.map((para, i) => {
                  const isShort = para.length < 60;
                  return (
                    <p
                      key={i}
                      className={
                        isShort
                          ? "text-lg text-zinc-200 font-semibold italic pl-4 border-l-2 border-amber-600/50"
                          : "text-zinc-300 leading-relaxed"
                      }
                    >
                      {para}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Convergence box */}
          <div className="rounded-2xl bg-zinc-900 border border-amber-700/30 p-8 space-y-4">
            <h3 className="text-lg font-bold text-amber-400 font-serif">The Convergence Question</h3>
            <p className="text-zinc-300 leading-relaxed">
              Climate change. Artificial intelligence. Institutional legitimacy. Economic inequality. Democratic trust. All converge upon the same underlying question that Barran's testimony places at the centre of civilisation's survival:
            </p>
            <p className="text-xl text-white font-serif italic text-center py-4">
              Can humanity recover its moral centre before its technologies outpace its wisdom?
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Barran believes the answer begins not with technological policy but with how society treats its most vulnerable members. If the ethical foundations are already compromised — as he argues his case demonstrates — then no technological governance framework can compensate for the underlying moral deficit.
            </p>
          </div>

          {/* ABN / legal note */}
          <div className="rounded-xl bg-zinc-900/50 border border-zinc-700/40 p-6 text-sm text-zinc-500 space-y-1">
            <p className="font-semibold text-zinc-400">Barran Dodger Legal &amp; Ethical Trust Fund</p>
            <p>ABN 78 833 496 164 · OHCHR Ref: G/SO 214(67-17) · barrandodger.com</p>
            <p>© 2026 Dr. Richard William McLean. This testimony is permanently preserved on the Bitcoin blockchain and cannot be erased.</p>
          </div>

          {/* Citation */}
          <CitationBlock
            title="Barran Dodger and the Betrayal of Humanity: How the Abandonment of One Vulnerable Whistleblower Reveals the Ethical Collapse of Civilisation at the End of the Anthropocene"
            author="McLean, R. W. (Barran Dodger)"
            year="2026"
            url="https://barrandodger.com/betrayal-of-humanity"
            publisher="Barran Dodger Legal & Ethical Trust Fund"
            abn="78 833 496 164"
          />

          <CommentSection pageSlug="betrayal-of-humanity" />
        </section>
      </main>

      <Footer />
    </>
  );
}
