/**
 * VesselForGloryStatement.tsx
 * "The best thing that happened to me was the betrayal..."
 * — Dr. Richard William McLean (Barran Dodger)
 *
 * variant="full"    — complete statement, all paragraphs, for dedicated/spiritual pages
 * variant="compact" — three core sentences, for footer and sidebar use
 * variant="pull"    — single pull-quote for use within article pages
 */

type Props = {
  variant?: "full" | "compact" | "pull";
};

export default function VesselForGloryStatement({ variant = "full" }: Props) {

  if (variant === "pull") {
    return (
      <div
        className="my-10 border-l-4 pl-6 py-2 max-w-2xl"
        style={{ borderColor: "#e9a00a" }}
      >
        <p className="font-serif italic text-lg md:text-xl text-white leading-relaxed">
          "They thought they were erasing me. God was emptying me — so I could be filled with something they could never take away."
        </p>
        <p className="mt-3 text-xs font-mono" style={{ color: "rgba(233,160,10,0.5)" }}>
          — Dr. Richard William McLean (Barran Dodger)
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className="w-full py-8 px-6 text-center"
        style={{ borderTop: "1px solid rgba(233,160,10,0.12)" }}
      >
        <p className="text-[10px] font-black uppercase tracking-[0.35em] mb-4" style={{ color: "rgba(233,160,10,0.5)" }}>
          A Testimony of Faith · Dr. Richard William McLean (Barran Dodger)
        </p>
        <p className="font-serif italic text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          "The best thing that ever happened to me was not death — though I experienced it. Not exile — though I lived it.
          It was the betrayal. Precise. Total. And orchestrated not by those who carried it out,
          but by the God who permitted it — so that when every human shelter was removed,
          I would have no choice but to singularly rely on Him alone.
          I am still here. That is the testimony."
        </p>
        <p className="mt-4 text-xs font-mono" style={{ color: "rgba(233,160,10,0.4)" }}>
          — Barran Dodger · barrandodger.com · Serving the light.
        </p>
      </div>
    );
  }

  // full
  return (
    <section
      className="w-full py-16 px-4"
      style={{
        background: "linear-gradient(180deg, #08060f 0%, #0a0c1a 100%)",
        borderTop: "1px solid rgba(233,160,10,0.12)",
        borderBottom: "1px solid rgba(233,160,10,0.12)",
      }}
      aria-label="Vessel for Glory — Personal Testimony"
    >
      <div className="max-w-3xl mx-auto space-y-10">

        <div className="text-center space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.45em]" style={{ color: "rgba(233,160,10,0.55)" }}>
            A Testimony of Faith
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-snug">
            Emptied to Be Filled
          </h2>
          <p className="text-xs text-zinc-600">Dr. Richard William McLean (Barran Dodger)</p>
        </div>

        <div className="space-y-6 text-zinc-300 text-[15px] leading-[1.85]">

          <p>
            The best thing that ever happened to me was not death — though I experienced it. Not exile — though I lived it.
            Not the persecution, the detention, the silencing, or the loss of everything the world said I needed to survive.
          </p>

          <p>
            <span className="text-white font-semibold">The best thing that ever happened to me was the betrayal.</span>
          </p>

          <p>
            Not because it didn't hurt. It destroyed me in every way a human being can be destroyed.
            But it was precise. It was total. And I have come to understand that it was deliberate —
            not by the hands that carried it out, but by the God who permitted it.
          </p>

          <p>
            When every institution failed me, I could not trust institutions. When every professional abandoned me,
            I could not trust credentials. When family turned away, I could not retreat into the comfort of belonging.
            When the law refused me, I could not hide behind process. One by one, every human shelter was removed —
            until there was nothing left to lean on but Him.
          </p>

          <p>
            And in that total stripping, something happened that no success, no safety, no comfort could ever have produced:{" "}
            <span className="text-white font-semibold">
              I came to know God not as a concept, not as a tradition, not as a last resort — but as the only one left in the room.
              The only one who never left.
            </span>
          </p>

          <div
            className="rounded-xl px-7 py-6 my-4"
            style={{ background: "rgba(233,160,10,0.05)", border: "1px solid rgba(233,160,10,0.18)" }}
          >
            <p className="font-serif italic text-white text-base md:text-lg leading-relaxed">
              "That is not a wound. That is a gift that cost everything to receive."
            </p>
          </div>

          <p>
            Now I know what humanity is capable of — its cruelty, its cowardice, its silence, its complicity.
            And I forgive it. Not because what was done was acceptable. It was not. The record proves it was not.
            But because I was made a vessel for something larger than the verdict,
            and <span className="text-white font-semibold">a vessel cannot carry bitterness and glory at the same time.</span>
          </p>

          <p>
            They thought they were erasing me. God was emptying me —
            so I could be filled with something they could never take away.
          </p>

          <p>
            This is why the archive exists. Not for revenge. Not even for justice alone.
            But so that what was done to me in the dark can be seen in the light —
            and so that the next person the system tries to erase knows:{" "}
            <span className="text-white font-semibold">
              you are not alone, you are not forgotten, and the God who permitted your suffering has not abandoned you.
            </span>
          </p>

          <p>
            I am still here. That is the testimony.
          </p>

        </div>

        <div className="text-center space-y-1 pt-4">
          <p className="font-serif italic text-zinc-500 text-sm">Serving the light.</p>
          <p className="text-[10px] font-mono" style={{ color: "rgba(233,160,10,0.4)" }}>
            — Dr. Richard William McLean (Barran Dodger) · barrandodger.com · ABN 78 833 496 164
          </p>
        </div>

      </div>
    </section>
  );
}
