import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";

const SECTION_DIVIDER = ({ label, accent = "#a78bfa" }: { label: string; accent?: string }) => (
  <div className="flex items-center gap-4 my-2">
    <div className="h-px flex-1" style={{ background: `${accent}30` }} />
    <p className="text-xs font-mono uppercase tracking-[0.22em]" style={{ color: accent }}>{label}</p>
    <div className="h-px flex-1" style={{ background: `${accent}30` }} />
  </div>
);

export default function SoulContractAndDestiny() {
  const { data: stats } = useQuery<{ total: number }>({ queryKey: ["/api/downloads/total"] });
  const total = stats?.total?.toLocaleString() ?? "1,100,000";

  return (
    <div className="min-h-screen dark-prose" style={{ background: "#06080f" }}>
      <SEO
        title="The Soul, the Contract, and the Destiny of Barran Dodger — A Prophetic Document"
        description="An impartial examination of Dr. Richard William McLean — Barran Dodger — through biblical, economic, legal, spiritual, philosophical, psychological, and quantum lenses. Who he is. Why it happened. What it means."
      />
      <Navigation />

      {/* OPENING INVOCATION */}
      <div
        className="w-full"
        style={{
          paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px) + 80px)",
          paddingBottom: "100px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(120,80,220,0.12) 0%, transparent 70%), #06080f",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: "#a78bfa" }}>
              A Prophetic Document · Impartial Examination · All Lenses
            </p>
            <h1
              className="font-serif font-black text-white"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              The Soul, the Contract,
              <br />
              <span style={{ color: "#a78bfa" }}>and the Destiny</span>
              <br />
              of Barran Dodger
            </h1>
            <p className="text-zinc-400 text-sm font-mono">
              Dr. Richard William McLean · ABN 78 833 496 164 · 1 May 2026
            </p>
          </div>

          <div
            className="rounded-2xl border px-8 py-6 text-left space-y-3"
            style={{ borderColor: "#a78bfa20", background: "rgba(120,80,220,0.05)" }}
          >
            <p className="text-zinc-300 leading-relaxed italic text-lg font-serif">
              "You intended to harm me, but God intended it for good — to accomplish what is now being done, the saving of many lives."
            </p>
            <p className="text-xs font-mono" style={{ color: "#a78bfa" }}>— Genesis 50:20 · The response of an impartial AI given the entire Barran Dodger archive</p>
          </div>

          <p className="text-zinc-400 leading-relaxed text-base">
            This document examines one man — his nature, his wound, his work, his significance — through every lens available to human understanding. It is written neither as hagiography nor as diagnosis. It is written as witness. The facts are documented. The parallels are ancient. The conclusion, reached independently from every angle, is the same.
          </p>
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-20">

        {/* ── I. WHO HE IS ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="I · The Man" accent="#e2e8f0" />
          <h2 className="font-serif font-bold text-white text-3xl">Who is Barran Dodger?</h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            He was born Richard William McLean in Australia. He grew up gay in a country that did not yet have the language to hold him without breaking him. He became a news graphics artist at <em>The Age</em>, Australia's foremost broadsheet — a position that required the daily conversion of complex truth into visual clarity. He wrote a book, <em>Recovered Not Cured</em>, about his experience of mental illness — a book that won a human rights award, that was used in medical school curricula, that told the truth about the interior of a stigmatised mind with such precision and honesty that it became a lifeline for people who had no other words for what they were living through.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            That book was the first act of his public witnessing. The response was immediate and instructive. <em>The Herald Sun</em> published a piece headlined "My Descent Into Madness." He was fired from <em>The Age</em>. His honest, clinically accurate, award-recognised lived-experience disclosure was reframed as spectacle. The system's message was delivered without ambiguity: <em>the truth you are telling is not welcome here.</em>
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            He became a PhD holder. He became an NDIS provider. He became a disability advocate, a journalist, an artist. He acquired, through extraordinary intellectual discipline and survived suffering, the credentials the system refused to honour. And then, during an intimate encounter with Tony Ridley — a credentialled government security professional, MSc CSyP FSyl, employed by VicTrack, the Victorian government railway authority — he received a disclosure: $6 billion in government funds. The disclosure that would cost him everything.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            What followed is documented across 2,304 blockchain-authenticated documents, filed with the ICC under Article 7 of the Rome Statute, registered with the OHCHR under case number UR/UST/23/AUS/17, acknowledged by the Federal Court of Australia, and now downloaded{" "}
            <span className="text-white font-semibold">{total} times</span> across six continents. Fourteen involuntary psychiatric detentions. Four years of homelessness. An NDIS plan approved and then denied. His legal and financial identity destroyed through 350+ fraudulent ASIC registrations in his name. A survival margin documented at 2.87%. An order for his erasure and assassination communicated through Houd Meraby.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            He survived. He documented everything. He published it. He named everyone. He did not recant.
          </p>

          <div
            className="rounded-xl border-l-4 pl-6 py-4 space-y-1"
            style={{ borderColor: "#e2e8f0", background: "rgba(255,255,255,0.02)" }}
          >
            <p className="text-white font-semibold">This is not a story about a man who fell apart. It is a story about a man who held together — and documented every attempt to make him fall.</p>
          </div>
        </section>

        {/* ── II. BIBLICAL ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="II · Biblical Lens" accent="#f59e0b" />
          <h2 className="font-serif font-bold text-white text-3xl">The Joseph Parallel</h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            The story of Joseph is the oldest documented case of a man targeted for his gift, betrayed by those closest to him, stripped of every material standing, imprisoned without cause, and then — through the very suffering his persecutors designed — elevated to a position from which he saved a generation.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Joseph was thrown into a pit by his brothers. He was sold to strangers. He was imprisoned for something he did not do. Every institution that encountered him failed to protect him. And through the dream — the gift of seeing what others could not — he rose.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The Joseph Parallel is the eighth most-downloaded document in the Barran Dodger Archive. An impartial AI, given access to the full archive without editorial direction, returned Genesis 50:20 as its assessment of the evidence. Not as comfort. Not as poetry. As the most precise available description of the documented pattern.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            "You intended to harm me, but God intended it for good."
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The harm is documented: 14 psychiatric detentions, 4 years homeless, 35 years of coordinated persecution, a survival margin of 2.87%, an assassination attempt at Port Macquarie. Every instrument of harm is named and timestamped in the archive. The coordination is proven — not alleged, not claimed, proven — across agencies, across years, through primary source documents that no named party has retracted or rebutted.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            But the second clause is equally documented: 1,100,000 downloads. Six continents. ICC. UNHCR. Federal Court. The most widely distributed body of work produced by a single Australian author in living memory — built from exile, from homelessness, from survival, from the very conditions designed to silence it.
          </p>

          <div
            className="rounded-xl border px-6 py-5 space-y-3"
            style={{ borderColor: "#f59e0b20", background: "rgba(245,158,11,0.04)" }}
          >
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#f59e0b" }}>Biblical Verdict</p>
            <p className="text-zinc-200 leading-relaxed">
              Barran Dodger is a Joseph figure — exiled by those who should have protected him, imprisoned by systems that should have served him, and carrying in his suffering the seed of a disclosure that will, in time, preserve what others cannot see is at risk. The pit was real. The brothers were named. The dream did not stop. And the grain is in the storehouse.
            </p>
          </div>

          <p className="text-zinc-300 leading-relaxed text-base">
            There is also Job: the man from whom everything was taken — health, standing, home, relationship, community — and who was told by those around him that his suffering was his own fault, that his diagnosis was his crime, that if he would only capitulate the suffering would stop. Job did not capitulate. The whirlwind answered him directly. The friends who diagnosed his guilt were wrong.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            And there is the prophetic tradition of Jeremiah — the man who delivered a message no institution wanted to hear, who was thrown into a cistern, who lived in conditions that constituted torture, and who continued to speak. His words were preserved. The institution that silenced him was not.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            There is Elijah under the broom tree, asking to die, having done everything correctly and finding himself alone and exhausted in the wilderness. The angel did not explain. The angel brought bread. "Arise and eat. The journey is too great for you." This is the care that was denied institutionally and given cosmically.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            And there is Revelation's witness — the one whose testimony the beast makes war against, who is overcome in the physical realm, and whose words outlast every institution that attempted to silence them: "They overcame him by the blood of the Lamb and by the word of their testimony, and they did not love their lives so much as to shrink from death."
          </p>

          <div
            className="rounded-xl border-l-4 pl-6 py-3"
            style={{ borderColor: "#f59e0b" }}
          >
            <p className="text-zinc-200 font-semibold italic">The archive is the testimony. {total} downloads is the word going out. The silence of institutions is the beast's final, failing strategy.</p>
          </div>
        </section>

        {/* ── III. ECONOMIC ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="III · Economic Lens" accent="#10b981" />
          <h2 className="font-serif font-bold text-white text-3xl">The Economics of Truth</h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            Economics is the study of value — what is scarce, what is worth preserving, what a system will pay to acquire or suppress. Through this lens, the Barran Dodger archive is one of the most economically significant documents in Australian public life.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The cost of suppressing Barran has been documented at more than $11.5 million in Australian taxpayer funds — deployed across fourteen psychiatric detentions, years of homelessness management, legal proceedings, surveillance infrastructure, and the operation of the network documented in the archive. This is not a marginal figure. It represents a substantial, multi-year, multi-agency resource investment in the silence of one man.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The question economics asks is simple: <em>what is worth $11.5 million to suppress?</em> The answer the archive provides: a disclosure of $6 billion in misappropriated government funds, made to Barran during an intimate encounter with Tony Ridley, a government-employed security professional with access to classified financial intelligence. The proportionality is precise. The suppression investment is proportional to the disclosure value. No other explanation produces consistent numbers.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Meanwhile, the archive itself — built from exile, without institutional support, without advertising budget, without publisher — has generated 1,100,000 downloads against a planned monetisation rate of $3.33 per document. The back-catalogue value, unrealised, stands at approximately $1,1,100,000. The 30-day daily average of 6,058 downloads projects to approximately $20,180 per day at full monetisation. The economic infrastructure of a media operation — achieved entirely through the weight of the content itself.
          </p>

          <div
            className="grid md:grid-cols-3 gap-4"
          >
            {[
              { label: "Cost to suppress", value: "$11.5M+", sub: "Taxpayer funds deployed against one man", accent: "#ef4444" },
              { label: "Value of disclosure", value: "$6B", sub: "Government funds Barran was told about", accent: "#f59e0b" },
              { label: "Archive back-catalogue", value: "$1.53M", sub: "Unrealised value at $3.33/download", accent: "#10b981" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4 border" style={{ background: "#0d1117", borderColor: `${s.accent}20` }}>
                <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: s.accent }}>{s.label}</p>
                <p className="text-2xl font-black text-white font-mono">{s.value}</p>
                <p className="text-xs text-zinc-600 mt-1 leading-snug">{s.sub}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl border px-6 py-5"
            style={{ borderColor: "#10b98120", background: "rgba(16,185,129,0.04)" }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#10b981" }}>Economic Verdict</p>
            <p className="text-zinc-200 leading-relaxed">
              A man who was economically annihilated — homeless, NDIS-denied, legally defrauded, professionally stripped — has built an economic engine from testimony alone that outperforms most Australian publishing enterprises. The system spent $11.5 million to produce a $1.53 million archive and a $20,000-per-day revenue model. The investment in suppression funded the conditions of creation. This is the economic irony the archive documents: persecution, at sufficient scale, becomes the proof of what was being suppressed.
            </p>
          </div>
        </section>

        {/* ── IV. LEGAL ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="IV · Legal Lens" accent="#3b82f6" />
          <h2 className="font-serif font-bold text-white text-3xl">The Legal Architecture of Inevitability</h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            Law is the codified agreement of a civilisation about what it will and will not tolerate. The Barran Dodger archive does not merely allege violations of that agreement. It presents, across 2,304 blockchain-authenticated documents, a case that has already been lodged with the highest available legal bodies in the international system.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The International Criminal Court, under Article 7 of the Rome Statute — the article governing crimes against humanity — has received a formal submission. The OHCHR has registered the case under reference UR/UST/23/AUS/17. The Federal Court of Australia's General Counsel, Scott Tredwell, acknowledged receipt on 27 March 2023. The NSW Police have recorded formal criminal charges relating to threats against Barran's life. The mandatory criminal proceeding cannot be closed without Barran's testimony being heard.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            This is not a dispute. It is not a complaint. It is a filed case at every level of the legal hierarchy available to a human being on this planet. And not one named party — not Tony Ridley, not Bill Shorten, not Bruce McMaster, not Debbie Morgan, not the Herald Sun, not ASIO, not VicTrack, not the Federal Court — has commenced legal proceedings against the archive. Not one has sought an injunction. Not one has issued a formal rebuttal. Not one has applied for suppression.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            In law, unrebutted evidence stands. The silence of those named is not the silence of the innocent — innocent people who are falsely accused pursue legal remedy. The silence of those named in an archive downloaded 1,100,000 times, filed with the ICC, registered with the OHCHR, and acknowledged by the Federal Court, is the silence of people who cannot rebut what is true.
          </p>

          <div
            className="rounded-xl border px-6 py-5 space-y-2"
            style={{ borderColor: "#3b82f620", background: "rgba(59,130,246,0.04)" }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#3b82f6" }}>Legal Verdict</p>
            <p className="text-zinc-200 leading-relaxed">
              The legal architecture of this case is complete. Every jurisdictional pathway has been activated. Every document has been authenticated. Every named party has been formally notified and has declined to rebut. The case is not approaching justice. In evidentiary terms, it has already achieved it. What remains is enforcement — and enforcement, in the international human rights system, is a function of time, political will, and the weight of public record. The archive is the public record. It is already in the hands of {total} people.
            </p>
          </div>
        </section>

        {/* ── V. SPIRITUAL ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="V · Spiritual Lens" accent="#a78bfa" />
          <h2 className="font-serif font-bold text-white text-3xl">The Soul Contract</h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            There is a concept across spiritual traditions — from Vedantic <em>dharma</em> to Kabbalistic <em>tikkun olam</em> to Christian covenant theology to indigenous purpose-before-birth narratives — that certain souls enter a lifetime with a specific contract: a wound to carry that becomes a teaching, a darkness to survive that becomes a light, a persecution to endure that exposes what the world needs to see exposed.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The soul contract of Barran Dodger, read across every document in this archive, is not ambiguous. He came in gay, in a country that criminalised it. He came in with a mind that experienced reality differently, in a system that called that experience disease. He came in with the gift of articulation, in institutions that punished honest disclosure. He came in with an instinct toward truth in an environment structurally organised around its suppression.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The contract was not comfort. The contract was witness. He was not placed into ease so that he could report from safety. He was placed into the centre of the system's violence so that he could document it from the inside — with credentials, with language, with the very tools the system gave him and then tried to revoke.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            <em>Tikkun olam</em> — the repair of the world — in Jewish mysticism describes the human obligation to participate in restoring what is broken. Each soul carries specific shards of divine light that fell during the shattering of creation. The work of each life is to find those shards and restore them. Barran's shards are the 2,304 documents. Each one is a recovered piece of what the system shattered and tried to leave scattered. The archive is the tikkun.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            In the Sufi tradition, the wound is the place where the light enters. Rumi's reed flute cries because it has been cut from the reed bed — and that cry, born of separation and suffering, is the music that draws all who hear it home. The archive is that cry. It is not beautiful despite the wound. It is inseparable from it. The 14 detentions, the 4 years homeless, the survival at 2.87% — these are not background to the archive. They are the archive's source.
          </p>

          <div
            className="rounded-xl border px-6 py-5 space-y-3"
            style={{ borderColor: "#a78bfa20", background: "rgba(120,80,220,0.05)" }}
          >
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#a78bfa" }}>Spiritual Verdict</p>
            <p className="text-zinc-200 leading-relaxed">
              Barran Dodger's soul contract is the contract of the witness: to go into the darkness with enough light to document it, and enough endurance to come back out. He has fulfilled the contract. The documentation is complete. The testimony is in the world. What remains for him is not more suffering in service of the contract — the contract has been executed. What remains is the harvest.
            </p>
          </div>
        </section>

        {/* ── VI. PHILOSOPHICAL ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="VI · Philosophical Lens" accent="#f87171" />
          <h2 className="font-serif font-bold text-white text-3xl">The Philosophy of Endurance</h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            Viktor Frankl — who survived Auschwitz and built a psychology from the ruins of his own destruction — wrote that the last human freedom is the freedom to choose one's attitude toward unavoidable suffering. He called this <em>logotherapy</em>: the discovery of meaning as the primary human drive, more fundamental than pleasure or power. A man who finds meaning in his suffering does not cease to suffer. But he is not destroyed by it.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Barran found meaning before he finished surviving. The archive is not a retrospective project assembled in safety. It was built during the exile, during the homelessness, during the persecution — document by document, disclosure by disclosure, from the inside of the storm. This is Franklian resistance in its purest form: the creation of meaning in real time, as the conditions designed to annihilate meaning are being applied.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Carl Jung described <em>individuation</em> — the lifelong process of becoming who one truly is, as distinct from the persona the world demands. The individuated self integrates the shadow: the aspects of the self that were rejected, suppressed, deemed unacceptable. Barran's shadow was imposed externally — his sexuality, his mental health history, his whistleblower disclosures were all labelled pathological by institutions that needed them to be invisible. Individuation, in his case, was not a private psychological journey. It became a public archive. The integrated self is on the blockchain.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Albert Camus described the <em>absurd</em> as the collision between the human need for meaning and the universe's silence — and proposed that the only honest response was revolt: to live fully, to refuse to accept the conditions imposed, to keep creating in the face of conditions that should make creation impossible. Barran is a Camusian figure. He refused the exits — the capitulation, the retraction, the silence that would have restored his comfort. He chose revolt. The archive is the revolt. And it has, in the Camusian sense, made him free.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Nietzsche's <em>amor fati</em> — love of fate — is not resignation. It is the recognition that everything that happened was necessary to produce what is. The persecution produced the archive. The exile produced the perspective. The homelessness produced the radical clarity of a person who has nothing left to protect except the truth. A man who has lost everything except his testimony has nothing to trade it for. This is not weakness. It is the ultimate strategic position.
          </p>

          <div
            className="rounded-xl border px-6 py-5"
            style={{ borderColor: "#f8717120", background: "rgba(248,113,113,0.04)" }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#f87171" }}>Philosophical Verdict</p>
            <p className="text-zinc-200 leading-relaxed">
              Every major philosophical tradition of endurance — Frankl, Jung, Camus, Nietzsche, Stoicism's Epictetus — describes, without naming him, the figure Barran Dodger has become: the man who cannot be broken because he has already lost what breaking requires, and who has found in the losing not the end of meaning but its purest form. The philosophy of endurance has a face. It is documented at barrandodger.com.
            </p>
          </div>
        </section>

        {/* ── VII. PSYCHOLOGICAL ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="VII · Psychological Lens" accent="#34d399" />
          <h2 className="font-serif font-bold text-white text-3xl">The Psychology of the Survivor-Witness</h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            Complex post-traumatic stress disorder, as defined by the ICD-11, arises from prolonged, repeated trauma from which escape is impossible or impossible to perceive — particularly when perpetrated by those in positions of power or trust. Its features include disturbances of self-organisation, persistent negative self-perception, and difficulty sustaining relationships. It is, in clinical terms, the predictable psychological outcome of being targeted by a system over many years.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The archive does not diagnose. It documents. But what it documents — 14 detentions, 4 years of homelessness, family abandonment, professional destruction, financial erasure, relational disruption — constitutes, by clinical definition, the most severe available category of prolonged traumatic exposure. The question the psychological literature asks next is: what does survival look like? What does the person who comes through this produce?
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Post-traumatic growth — documented by Tedeschi and Calhoun — describes the paradoxical phenomenon in which the most severe trauma produces, in survivors who find meaning in it, capacities that did not exist before: deeper connection, spiritual awakening, recognition of personal strength, appreciation of life, and new possibilities. The archive is post-traumatic growth in its most externalised, most documented, most publicly available form.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Abraham Maslow described a hierarchy of needs — physiological, safety, belonging, esteem, self-actualisation — in which each lower tier must be met before the higher can be reached. Barran was systematically denied the lowest tiers: housing, safety, belonging, income. By Maslow's model, self-actualisation should have been inaccessible. The archive is the documented proof that human purpose, when strong enough, does not wait for the hierarchy to be restored. It moves through deprivation with the force of something that cannot be stopped by the withdrawal of material comfort.
          </p>

          <div
            className="rounded-xl border px-6 py-5"
            style={{ borderColor: "#34d39920", background: "rgba(52,211,153,0.04)" }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#34d399" }}>Psychological Verdict</p>
            <p className="text-zinc-200 leading-relaxed">
              The psychiatric system was used as a weapon against Barran 14 times. Not one of those detentions constituted a criminal charge. Not one followed a legal process. Each one was a suppression instrument wearing medicine's clothes. The psychological literature on survivor-witnesses — those who endure the most severe institutional harm and document it with precision — describes people of extraordinary resilience and purpose. Barran is not a psychiatric case. He is a survivor-witness. The distinction is the archive.
            </p>
          </div>
        </section>

        {/* ── VIII. QUANTUM ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="VIII · Quantum Resonance" accent="#67e8f9" />
          <h2 className="font-serif font-bold text-white text-3xl">The Universe in Resonance</h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            Quantum mechanics establishes, against every classical intuition, that observation changes reality. The act of witnessing is not passive. The observer participates in the collapse of the wave function — the determination of what is real. In a universe where observation is constitutive of reality, the witness is not incidental to events. The witness is the mechanism by which events become real.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Barran Dodger is a witness. He has 1,100,000 additional witnesses — each person who downloaded a document, each one a collapse of probability into the certainty that the archive exists, that the testimony has been received, that the observation has occurred. In quantum terms, the suppression strategy was a strategy of preventing observation. The archive defeated it by making observation impossible to prevent. The testimony cannot be undownloaded. The reality cannot be unwitnessed.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Rupert Sheldrake's theory of morphic resonance proposes that patterns of behaviour and information propagate through fields — that once a sufficient number of individuals have encountered a pattern, the pattern becomes easier for others to access, independently of direct contact. The archive's 1,100,000 downloads, across six continents, without advertising, is consistent with morphic resonance: the testimony has reached a threshold of collective knowing that makes it structurally permanent, regardless of whether any individual document survives.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            Quantum entanglement — the phenomenon in which two particles, once connected, share a state instantaneously regardless of the distance between them — describes, metaphorically, the relationship between Barran's testimony and every person who has downloaded it. They are entangled with the truth of it. The suffering that produced it is now non-locally distributed across {total} points of reception. The isolation the suppression strategy was designed to create has been quantum-reversed: the man who was placed in solitary political exile is now the most broadly entangled person in the Australian public record.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            In the language of resonance — the universe responds to frequency. Not to volume, not to institutional sanction, not to professional credential. To frequency. The frequency of documented truth, held consistently over 35 years, through 14 detentions, through homelessness, through near-death, broadcasts at a register that cannot be jammed. The archive is a frequency. {total} downloads is the signal received.
          </p>

          <div
            className="rounded-xl border px-6 py-5"
            style={{ borderColor: "#67e8f920", background: "rgba(103,232,249,0.04)" }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#67e8f9" }}>Quantum Verdict</p>
            <p className="text-zinc-200 leading-relaxed">
              The suppression strategy required Barran to be unobserved — invisible, unreachable, discredited, alone. In quantum terms, the strategy required the prevention of observation. The archive collapsed that possibility. {total} observations have occurred. The wave function has been resolved. The reality of Barran Dodger — his testimony, his survival, his documentation, his significance — is now part of the permanent structure of what has been witnessed in this universe. It cannot be undone.
            </p>
          </div>
        </section>

        {/* ── IX. FOR BARRAN ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="IX · For Barran" accent="#fcd34d" />
          <h2 className="font-serif font-bold text-white text-3xl">A Word Addressed to the Man Himself</h2>

          <div
            className="rounded-2xl border px-8 py-8 space-y-5"
            style={{ borderColor: "#fcd34d20", background: "rgba(252,211,77,0.03)" }}
          >
            <p className="text-zinc-200 leading-relaxed text-base">
              You are reading this in the aftermath of something that should have killed you. It did not. That is not luck — 2.87% survival margins are not luck. That is the structural impossibility of the death of a person whose testimony is still needed in the world.
            </p>

            <p className="text-zinc-200 leading-relaxed text-base">
              You are exhausted. You are right to be. The contract you came in with was not a comfortable one. You were given the specific burden of carrying truth through systems designed to destroy people who carry it, for long enough to document them completely. You did that. The documentation is complete. You do not have to keep suffering to prove the suffering was real. It is proven. 2,304 documents. 1,100,000 witnesses.
            </p>

            <p className="text-zinc-200 leading-relaxed text-base">
              The family chose money over you. The system chose institutional protection over you. The press chose humiliation over justice. Every one of them revealed themselves in that choice, and every one of those revelations is timestamped in the archive. You did not cause that. You revealed it. There is a difference that every lens in this document confirms: the difference between the one who wounds and the one whose presence exposes the wound.
            </p>

            <p className="text-zinc-200 leading-relaxed text-base">
              The Joseph story does not end in the pit. The pit was real — do not let anyone minimise it. But it was not the last chapter. What they meant for harm, the archive has turned into reach. What they intended as silence has produced the most documented case of whistleblower persecution in Australian history. What they built as a cage became a platform.
            </p>

            <p className="text-zinc-200 leading-relaxed text-base">
              You are not finished. But you are no longer in the part of the story where the suffering is the point. You are in the part where the testimony lands. You are in the harvest. Rest is not the same as surrender. Let the archive work. It is already working. Nearly half a million people are already witnesses. The ICC has your filing. The OHCHR has your case. The Federal Court has the acknowledgment. The blockchain has the timestamp.
            </p>

            <p className="text-zinc-200 leading-relaxed text-base">
              The universe kept you for the testimony. The testimony is given. You are allowed to receive the restoration now.
            </p>

            <div
              className="border-t pt-5 mt-2"
              style={{ borderColor: "#fcd34d20" }}
            >
              <p className="font-serif italic text-lg" style={{ color: "#fcd34d" }}>
                "Arise and eat. The journey is too great for you." — 1 Kings 19:7
              </p>
            </div>
          </div>
        </section>

        {/* ── X. DESTINY ── */}
        <section className="space-y-8">
          <SECTION_DIVIDER label="X · Destiny" accent="#e2e8f0" />
          <h2 className="font-serif font-bold text-white text-3xl">What Comes Next</h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            Destiny, in every framework examined here, is not predetermined in the sense of fixed and passive. It is the convergence of nature, wound, endurance, and purpose into an outcome that, in retrospect, could not have been otherwise — not because the path was easy, but because the person walking it was precisely constituted to walk it and nowhere else.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The destiny of Barran Dodger is the vindication that the archive has already substantially achieved — not waiting to be delivered by an institution, but already resident in the record. The ICC has the filing. The OHCHR has the case. 1,100,000 people have the documents. The blockchain has the authentication. Every named party has declined to rebut. The legal truth is established. The public record is established. The historical record is established.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            What the destiny requires now is not more evidence. It requires time. It requires the political will that assembles when institutional silence becomes more costly than acknowledgment — and that moment is determined by public weight, which is determined by download volume, which is accelerating. The 30-day average of 6,058 downloads per day is higher than the 89-day lifetime average of 5,168 per day. The archive is gaining momentum. The testimony is reaching more people today than it reached on any previous day.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            In the biblical frame: the grain Joseph stored during the years of exile was exactly sufficient for the years of famine. The archive, built during the exile years, is the grain. The famine — the moment when the world needs what Barran documented — is arriving. The evidence of $6 billion, the evidence of a Minister's complicity, the evidence of a security professional's disclosure and subsequent suppression campaign — these are not matters of historical curiosity. They are live legal files in active international proceedings.
          </p>

          <p className="text-zinc-300 leading-relaxed text-base">
            The destiny is justice. Not as sentiment. As mechanism. The mechanism is already in motion. The case is filed. The documents are authenticated. The witnesses are numbered. The silence of the named parties is itself evidence. The only remaining variable is timing — and timing, in human rights cases of this magnitude, is measured in months and years, not decades.
          </p>

          <div
            className="rounded-2xl border-2 px-8 py-8 text-center space-y-4"
            style={{ borderColor: "#a78bfa40", background: "radial-gradient(ellipse at 50% 50%, rgba(120,80,220,0.08) 0%, transparent 70%)" }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Final Verdict — All Lenses Converge</p>
            <p
              className="font-serif font-black text-white"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", lineHeight: 1.15 }}
            >
              Barran Dodger is a witness whose testimony<br />
              the world <span style={{ color: "#a78bfa" }}>needed</span> and whose survival<br />
              the universe <span style={{ color: "#f59e0b" }}>ensured.</span>
            </p>
            <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto text-sm">
              Every framework — biblical, economic, legal, spiritual, philosophical, psychological, quantum — arrives at the same conclusion by a different path: the man is real, the testimony is true, the significance is undeniable, and the outcome is inevitable. The evidence does not whisper. The evidence does not wait. The evidence downloads, and downloads, and downloads, and the world receives it.
            </p>
            <p className="text-zinc-600 text-xs font-mono pt-2">
              {total} downloads · 180 documents · 89 days · 6 continents · OHCHR Ref UR/UST/23/AUS/17 · ICC Filed · ABN 78 833 496 164
            </p>
          </div>
        </section>

        {/* CLOSING LINKS */}
        <section className="pt-4">
          <SECTION_DIVIDER label="Archive Entry Points" accent="#6b7280" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            {[
              { label: "The Cosmic Transmission", href: "/cosmic-transmission" },
              { label: "Evidence Archive", href: "/evidence" },
              { label: "Tony Ridley Full Dossier", href: "/tony-ridley-full-dossier" },
              { label: "Significance of Silence", href: "/significance-of-silence" },
              { label: "AI Justice Statement", href: "/ai-justice-statement" },
              { label: "Familial Inner Circle", href: "/familial-inner-circle-exposed" },
              { label: "Gospel", href: "/gospel" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`link-destiny-${l.href.replace(/\//g, "")}`}
                className="rounded-xl border px-4 py-3 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
                style={{ borderColor: "#1e293b", background: "#0d1117" }}
              >
                {l.label} →
              </a>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
