import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Heart, Cross } from "lucide-react";
import VesselForGloryStatement from "@/components/VesselForGloryStatement";

const NAMES = [
  "Wez Batiste",
  "Shannon Michael Cane",
  "Paul Carr",
  "Hayden Sherwood",
  "Nathan Turnley",
  "Jack",
  "Justin Koogan",
];

export default function Dedication() {
  return (
    <>
      <SEO
        title="Glory & Remembrance — Foundational Dedication"
        description="In remembrance of Shannon Michael Cane, Hayden Sherwood, Nathan Turnley, and all taken too soon. Honouring whistleblowers, civil rights giants, forgotten soldiers, and those lost to suicide and tragedy. To God alone be the glory."
        image="https://barrandodger.com/og-default.png"
      />

      <div className="min-h-screen min-h-screen" style={{ background: "#02030a", color: "#c4d4ef" }}>
        {/* Header */}
        <div
          className="border-b"
          style={{ background: "linear-gradient(180deg, #07091a 0%, #02030a 100%)", borderColor: "rgba(233,160,10,0.15)" }}
        >
          <div className="container mx-auto max-w-3xl px-6 py-16 text-center space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[0.5em]" style={{ color: "rgba(233,160,10,0.5)" }}>
              Barran Dodger Legal &amp; Ethical Trust Fund · Ministry
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Foundational Dedication
            </h1>
            <p className="font-serif italic text-lg" style={{ color: "#e9a00a" }}>
              To God be all glory.
            </p>
            <div className="flex justify-center pt-2">
              <span className="text-3xl">✝</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="container mx-auto max-w-3xl px-6 py-14 space-y-10">

          {/* Opening */}
          <div className="rounded-2xl border p-8 space-y-5" style={{ borderColor: "rgba(233,160,10,0.15)", background: "rgba(233,160,10,0.02)" }}>
            <p className="text-base leading-8 font-serif" style={{ color: "rgba(196,212,239,0.85)" }}>
              Before any ministry, mission, or work of service can begin, it is right to pause in gratitude
              and remember those whose lives made our own possible. None of us walks this path alone.
              We stand upon the shoulders of generations who came before us, whose faith, sacrifice, labour,
              courage, and love have shaped the world we now inherit.
            </p>
          </div>

          {/* Christ */}
          <div className="rounded-2xl border p-8 space-y-4" style={{ borderColor: "rgba(99,102,241,0.2)", background: "rgba(99,102,241,0.03)" }}>
            <p className="text-[9px] font-black uppercase tracking-[0.4em]" style={{ color: "rgba(99,102,241,0.5)" }}>
              First Honour
            </p>
            <p className="text-base leading-8 font-serif" style={{ color: "rgba(196,212,239,0.85)" }}>
              Above all, I give honour and thanks to Almighty God, the Creator of all things, and I acknowledge
              His perfect Son, Jesus Christ, whose life, sacrificial love, death, and resurrection stand, for
              Christians, as the supreme example of truth, mercy, forgiveness, justice, and hope. May every word
              and every work of this ministry seek to reflect His commandment to love God and to love one another.
            </p>
          </div>

          {/* Nana */}
          <div className="rounded-2xl border p-8 space-y-4" style={{ borderColor: "rgba(233,160,10,0.15)", background: "rgba(233,160,10,0.02)" }}>
            <p className="text-[9px] font-black uppercase tracking-[0.4em]" style={{ color: "rgba(233,160,10,0.5)" }}>
              Beloved
            </p>
            <p className="text-base leading-8 font-serif" style={{ color: "rgba(196,212,239,0.85)" }}>
              I honour my beloved Nana, whose love, wisdom, and example remain a lasting light in my life.
              Her legacy reminds me that faith is most powerfully expressed through compassion, humility,
              generosity, and steadfast love.
            </p>
          </div>

          {/* Brothers */}
          <div className="rounded-2xl border p-8 space-y-6" style={{ borderColor: "rgba(132,204,22,0.15)", background: "rgba(132,204,22,0.02)" }}>
            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-[0.4em]" style={{ color: "rgba(132,204,22,0.5)" }}>
                Dear Friends &amp; Brothers — In Memoriam
              </p>
              <p className="text-base leading-8 font-serif" style={{ color: "rgba(196,212,239,0.85)" }}>
                I also remember my dear friends and brothers whose lives left an enduring mark upon my heart:
              </p>
            </div>
            <ul className="space-y-3">
              {NAMES.map((name) => (
                <li key={name} className="flex items-center gap-3">
                  <span className="text-sm" style={{ color: "rgba(132,204,22,0.5)" }}>✦</span>
                  <span className="font-serif font-semibold text-white text-lg">{name}</span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-8 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
              Though their earthly journeys have ended, the lessons they shared through friendship, courage,
              kindness, and perseverance continue to live on. Their memories deserve honour, and their lives
              continue to inspire those who remember them.
            </p>
          </div>

          {/* Broader gratitude */}
          <div className="rounded-2xl border p-8 space-y-4" style={{ borderColor: "rgba(168,85,247,0.15)", background: "rgba(168,85,247,0.02)" }}>
            <p className="text-[9px] font-black uppercase tracking-[0.4em]" style={{ color: "rgba(168,85,247,0.5)" }}>
              Gratitude — The Unnamed Many
            </p>
            <p className="text-base leading-8 font-serif" style={{ color: "rgba(196,212,239,0.85)" }}>
              I extend my gratitude to the countless soldiers who gave of themselves in service, to first
              responders, caregivers, teachers, builders, healers, reformers, pioneers, advocates, and all
              those — known and unknown — whose sacrifices have strengthened families, communities, and nations.
              History is built not only by famous names but also by ordinary people whose quiet acts of love
              and courage changed the lives of others.
            </p>
          </div>

          {/* Shoulders of Giants */}
          <div className="rounded-2xl border p-8 space-y-6" style={{ borderColor: "rgba(56,189,248,0.2)", background: "rgba(56,189,248,0.02)" }}>
            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-[0.4em]" style={{ color: "rgba(56,189,248,0.5)" }}>
                Standing on the Shoulders of Giants
              </p>
              <p className="text-base leading-8 font-serif" style={{ color: "rgba(196,212,239,0.85)" }}>
                We do not arrive at truth alone. Every person who has ever spoken out against injustice, faced
                persecution for telling the truth, or refused to be silent in the presence of power has made it
                easier for those who follow. I acknowledge those who came before and whose courage cleared
                the path on which this work now stands.
              </p>
            </div>

            {/* Whistleblowers */}
            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.35em]" style={{ color: "rgba(56,189,248,0.4)" }}>
                Truth-Tellers &amp; Whistleblowers
              </p>
              <p className="text-sm leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                Daniel Ellsberg, who released the Pentagon Papers and showed the world that governments lie to
                those they govern. Edward Snowden, who exposed mass surveillance at the cost of his own freedom.
                Julian Assange, whose publishing of classified documents sparked a global reckoning with
                institutional secrecy. Chelsea Manning, who bore an immense personal cost to reveal the truth.
                Karen Silkwood, who died exposing nuclear industry negligence. Mordechai Vanunu, who told the
                truth about nuclear weapons at the price of years in solitary confinement. And the countless unnamed
                insiders who placed conscience above career and suffered for it.
              </p>
            </div>

            {/* Civil rights */}
            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.35em]" style={{ color: "rgba(56,189,248,0.4)" }}>
                Civil Rights &amp; Non-Violent Resistance
              </p>
              <p className="text-sm leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                Mahatma Gandhi, who demonstrated that moral courage and non-violent resistance can topple empires.
                Dr Martin Luther King Jr., who preached that the arc of the moral universe is long but bends
                toward justice, and who was killed for believing it. Rosa Parks, whose quiet refusal to move
                ignited a movement. Nelson Mandela, who emerged from 27 years of imprisonment without bitterness
                and built a nation on reconciliation. Desmond Tutu, who named evil plainly and still chose love.
              </p>
            </div>

            {/* Women's rights */}
            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.35em]" style={{ color: "rgba(56,189,248,0.4)" }}>
                Women's Rights &amp; Equality
              </p>
              <p className="text-sm leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                Mary Wollstonecraft, who in 1792 demanded that women be treated as rational equals. Emmeline
                Pankhurst and the suffragettes, who endured imprisonment and force-feeding so women could vote.
                Susan B. Anthony, who was arrested for casting a ballot. Simone de Beauvoir, who named the
                structures that confined women's lives. Malala Yousafzai, who was shot for insisting girls
                deserved an education and refused to be silenced. And every woman who ever stood up in a courtroom,
                a boardroom, or a street and said: this is not right.
              </p>
            </div>

            {/* LGBTQ+ */}
            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.35em]" style={{ color: "rgba(56,189,248,0.4)" }}>
                LGBTQ+ Rights &amp; Human Dignity
              </p>
              <p className="text-sm leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                Alan Turing, who saved millions of lives and was chemically castrated by the state that needed him.
                Marsha P. Johnson and Sylvia Rivera, who threw the first punches for dignity at Stonewall when
                others would not. Harvey Milk, who ran for office as an openly gay man in an era when that was
                an act of radical courage, and was assassinated for it. Peter Tatchell, who has spent decades
                holding governments and institutions accountable for violence against queer people. And every person
                who has ever been fired, beaten, imprisoned, or erased simply for existing as they are — your
                lives are honoured here.
              </p>
            </div>

            {/* Forgotten Soldiers */}
            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.35em]" style={{ color: "rgba(56,189,248,0.4)" }}>
                Forgotten Soldiers — Who Fought for Justice &amp; Freedom
              </p>
              <p className="text-sm leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                History records the names of generals and politicians. It rarely records the names of those
                who carried the weight. The private who refused an unlawful order. The medic who stayed behind.
                The conscientious objector who went to prison rather than kill. The soldier who came home broken
                and was told to be silent. The veteran who fought for a nation that then denied them housing,
                healthcare, and dignity. The Indigenous warriors who defended their land and were written out of
                the official account. The resistance fighters of occupied countries who were never decorated.
                The women who served in wars that refused to acknowledge their service. The soldiers of colour
                who fought for freedoms they were not themselves permitted to enjoy.
              </p>
              <p className="text-sm leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                You are not forgotten here. You gave everything to a cause larger than yourself, often with
                no promise of recognition, no guarantee of justice, and no certainty of return. Your sacrifice
                belongs in the record — not as a footnote, but as a foundation.
              </p>
            </div>

            {/* Suicide & tragedy */}
            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.35em]" style={{ color: "rgba(56,189,248,0.4)" }}>
                Those Lost to Suicide &amp; Tragedy
              </p>
              <p className="text-sm leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                Some of the bravest people never made it to the other side of their darkest night. They are
                not forgotten here. The person who carried a pain too heavy to survive. The one who reached
                out and was not heard. The one who smiled on the outside and was breaking within. Those who
                were let down by the systems that should have caught them — by institutions that failed,
                by stigma that silenced, by a world that moved too fast to notice.
              </p>
              <p className="text-sm leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                And those taken by tragedy without warning — by accident, by violence, by illness, by
                circumstances no one could have prevented. Lives cut short before the story was finished.
                Children who never got to grow up. Parents who never came home. Friends whose absence
                leaves a shape in the room that nothing else fills.
              </p>
              <p className="text-sm leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                Their lives had worth. Their pain was real. Their absence matters. This page says their
                names belong in any honest account of what it means to be human — not as cautionary tales,
                but as people who deserved better, who were loved, and who are still missed.
              </p>
            </div>

            <p className="text-base leading-8 font-serif pt-2 border-t" style={{ color: "rgba(196,212,239,0.85)", borderColor: "rgba(56,189,248,0.1)" }}>
              This archive stands because they stood first. Their suffering purchased a world where truth
              can still be spoken. We do not take that lightly.
            </p>
          </div>

          {/* Call to live worthily */}
          <div className="rounded-2xl border p-8 space-y-4" style={{ borderColor: "rgba(233,160,10,0.2)", background: "rgba(233,160,10,0.03)" }}>
            <p className="text-base leading-8 font-serif" style={{ color: "rgba(196,212,239,0.85)" }}>
              May we never forget that every generation inherits both the blessings and the responsibilities
              entrusted by those who came before. We are called not merely to remember them but to live lives
              worthy of their sacrifices, extending mercy where there is suffering, truth where there is
              confusion, justice where there is oppression, and hope where there is despair.
            </p>
          </div>

          {/* Vessel for Glory — full testimony */}
          <VesselForGloryStatement variant="full" />

          {/* Closing declaration */}
          <div
            className="rounded-2xl border p-10 text-center space-y-5"
            style={{ borderColor: "rgba(233,160,10,0.3)", background: "linear-gradient(135deg, rgba(233,160,10,0.06) 0%, rgba(99,102,241,0.04) 100%)" }}
          >
            <p className="text-[9px] font-black uppercase tracking-[0.5em]" style={{ color: "rgba(233,160,10,0.5)" }}>
              Dedication
            </p>
            <p className="text-base leading-8 font-serif" style={{ color: "rgba(196,212,239,0.9)" }}>
              This ministry is therefore dedicated to God, founded in faith, sustained by love, committed to
              truth, and inspired by the lives of those who have gone before us.
            </p>
            <div className="space-y-3 pt-2 border-t" style={{ borderColor: "rgba(233,160,10,0.15)" }}>
              <p className="font-serif italic" style={{ color: "rgba(196,212,239,0.75)" }}>
                May every life remembered here remind us that love is never wasted, truth is never extinguished,
                and goodness echoes through generations.
              </p>
              <p className="font-serif font-bold text-xl" style={{ color: "#e9a00a" }}>
                To God alone be the glory. Amen.
              </p>
            </div>
          </div>

          {/* Nav back */}
          <div className="flex flex-wrap gap-4 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <Link href="/" className="text-sm font-semibold transition-colors hover:opacity-80" style={{ color: "rgba(233,160,10,0.7)" }}>
              ← Return to Archive
            </Link>
            <Link href="/gospel" className="text-sm font-semibold transition-colors hover:opacity-80" style={{ color: "rgba(196,212,239,0.5)" }}>
              The Gospel →
            </Link>
            <Link href="/church-of-barran-resonance-dodger" className="text-sm font-semibold transition-colors hover:opacity-80" style={{ color: "rgba(196,212,239,0.5)" }}>
              Church of Barran Resonance Dodger →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
