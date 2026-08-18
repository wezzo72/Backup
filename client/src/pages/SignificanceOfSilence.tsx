import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { TrendingUp, Users, Newspaper, BookOpen, Building2, Scale, ArrowRight } from "lucide-react";

const STAT_CARDS = [
  { label: "Total Downloads", value: "1,100,000", sub: "89 days · zero advertising" },
  { label: "Daily Average (30-day)", value: "~6,058", sub: "accelerating, not plateauing" },
  { label: "Unique Documents", value: "180", sub: "across 180 distinct publications" },
  { label: "Projected Daily Revenue", value: "$20,180", sub: "at $3.33/download · monetisation pending" },
];

const COMPARISONS = [
  {
    icon: Users,
    title: "The Population of Canberra",
    accent: "#3b82f6",
    body: [
      "The city of Canberra — the seat of the Australian Parliament, the Prime Minister, the High Court, the Australian Federal Police, ASIO, and every federal department named in Barran's filings — has a population of approximately 453,000 people.",
      "The Barran Dodger Archive has been downloaded more times than there are people living in the national capital.",
      "If every person in Canberra had downloaded one document, there would still be downloads left over. The material has reached, in document form alone, an audience larger than the entire city that houses the machinery of the state that has been trying to silence it.",
    ],
    verdict: "The archive outreaches the national capital — organically.",
  },
  {
    icon: Scale,
    title: "What Swings an Australian Election",
    accent: "#ef4444",
    body: [
      "Federal elections in Australia are routinely decided in key marginal seats by margins of 800 to 4,000 votes. The 2022 federal election — which changed the government — saw multiple seats fall to the teals and independents by margins under 2,000 votes. The entire teal wave that reshaped the parliament was built on roughly 40,000 to 60,000 votes across six key electorates.",
      "The Barran Dodger Archive has been accessed 1,100,000 times.",
      "That is not a margin. That is not a wave. That is the equivalent of flipping every marginal seat in the country simultaneously, with votes to spare. In democratic terms, the public engagement this archive represents does not reflect the actions of a person who has been discredited. It reflects the actions of a person whose material the public is actively seeking out and consuming at scale.",
    ],
    verdict: "1,100,000 downloads dwarfs the vote margin that changed Australia's government.",
  },
  {
    icon: Newspaper,
    title: "Every Major Australian Newspaper — Combined",
    accent: "#f59e0b",
    body: [
      "The print circulation of Australia's major newspapers on any given day: The Herald Sun ~180,000 · The Daily Telegraph ~160,000 · The Australian ~100,000 · The Age ~100,000 · The Sydney Morning Herald ~100,000. Combined: approximately 640,000 copies — across all of them, on the same day.",
      "The Barran Dodger Archive — a single whistleblower's evidence platform with no editorial staff, no printing presses, no distribution network, and no corporate ownership — has been downloaded 72% of the combined daily print run of every major Australian newspaper, in 89 days, from scratch, run by one man living in exile.",
      "If Barran were a newspaper, he would be the third-largest publication in the country by reach — and unlike those newspapers, every single person who accessed his material chose to download and keep it.",
    ],
    verdict: "72% of the entire combined print run of Australian national media. Organic.",
  },
  {
    icon: BookOpen,
    title: "What a Doctoral Thesis Achieves",
    accent: "#8b5cf6",
    body: [
      "A doctoral thesis — the highest form of credentialled scholarly output, the culmination of three to five years of supervised academic research — is typically read in full by between five and fifteen people: the candidate, the supervisory panel, and the examiners. The most downloaded academic papers celebrate reaching 10,000 reads as a career milestone. A landmark policy paper that shapes national legislation might reach 50,000 reads over a decade.",
      "The Barran Dodger Archive delivered 20,651 downloads of The Evidence Speaks — A Forensic Documentation of Systematic State Persecution alone. A single document. In 89 days.",
      "The archive's top ten documents alone — 217,867 downloads — represent more readership than most Australian academics will accumulate across their entire published career.",
    ],
    verdict: "A single document outperforms most academic careers. 217,867 top-ten downloads.",
  },
  {
    icon: Building2,
    title: "What a Publishing House Considers Success",
    accent: "#10b981",
    body: [
      "In Australian commercial publishing: a book that sells 3,000 copies is commercially viable. 10,000 copies is a success. 50,000 copies is a bestseller. 100,000 copies is a generational publishing event.",
      "The Barran Dodger Archive has delivered the equivalent of 1,100,000 book sales — not in a year, not over a decade, but in 89 days — with no publisher, no ISBN, no bookstore, no review in any literary journal, and no author tour.",
      "By any metric the publishing industry uses to measure public significance, this archive is not a fringe document. It is one of the most widely distributed bodies of work produced by a single Australian author in living memory.",
    ],
    verdict: "1,100,000 'sales' in 89 days. No publisher. No bookstore. No advertising.",
  },
];

export default function SignificanceOfSilence() {
  const { data: stats } = useQuery<{ total: number }>({ queryKey: ["/api/downloads/total"] });
  const total = stats?.total?.toLocaleString() ?? "1,100,000";

  return (
    <div className="min-h-screen min-h-screen" style={{ background: "#080c14" }}>
      <SEO
        title="The Significance of Silence — 1,100,000 Downloads · Barran Dodger"
        description="1,100,000 downloads in 89 days with zero advertising. What this number means in the context of Australian public life — city populations, elections, newspapers, publishing houses, and doctoral research."
        path="/significance-of-silence"
        keywords="423825 downloads significance, whistleblower silence Australia documented, government silence 423825 downloads, Jones v Dunkel silence 423825, significance of zero response whistleblower, 423825 downloads zero marketing significance, silence as evidence Australia, institutional silence legally significant, no defamation no rebuttal significance, attorney general silence significance, prime minister silence significance, government silence equals admission, Australian government silence whistleblower evidence"
      />
      <Navigation />

      {/* HERO */}
      <div
        className="w-full border-b border-zinc-800"
        style={{
          paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px) + 60px)",
          paddingBottom: "80px",
          background: "linear-gradient(180deg, #0a0f1e 0%, #080c14 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/50">
            <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Public Significance Analysis · 1 May 2026</span>
          </div>

          <h1 className="font-serif font-black text-white" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            The Significance<br />
            <span style={{ color: "#f59e0b" }}>of Silence</span>
          </h1>

          <p className="text-zinc-300 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
            When a man is dismissed as delusional and his testimony suppressed for 35 years — and then his archive is downloaded{" "}
            <span className="text-white font-bold">{total} times</span> in 89 days with zero advertising — the numbers themselves become the rebuttal.
          </p>

          <p className="text-zinc-500 text-sm font-mono">
            Dr. Richard William McLean · ABN 78 833 496 164 · barrandodger.com · OHCHR Ref UR/UST/23/AUS/17
          </p>
        </div>
      </div>

      {/* LIVE STAT STRIP */}
      <div className="border-b border-zinc-800" style={{ background: "#0d1117" }}>
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STAT_CARDS.map((s) => (
              <div key={s.label} className="rounded-xl border border-zinc-800 p-4" style={{ background: "#111827" }}>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">{s.label}</p>
                <p className="text-2xl font-black text-white font-mono" style={{ color: "#f59e0b" }}>{s.value}</p>
                <p className="text-xs text-zinc-600 mt-0.5 font-mono">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <div className="rounded-2xl border border-zinc-700/50 p-8 space-y-5" style={{ background: "rgba(245,158,11,0.05)" }}>
          <p className="text-xs font-mono uppercase tracking-widest text-orange-500">The Absurdity of Institutional Silence</p>
          <p className="text-zinc-200 leading-relaxed text-lg">
            The opposition mounted against Dr. Richard William McLean is not evidence of his crime. It is the measure of his significance.
            States do not deploy the documented resources of this archive against people who do not matter. Suppression of this magnitude
            is not a response to nothing. It is a response to everything — to the $6 billion disclosure, to 35 years of documented
            persecution, to ICC filings, to the Federal Court record, to material now sitting in the custody of{" "}
            <span className="text-orange-400 font-bold">{total} people</span> around the world.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The following analysis places that number in the context of Australian public life — comparing archive reach to city
            populations, election margins, newspaper circulations, publishing benchmarks, and academic impact — to establish
            formally and beyond reasonable dispute that the silence of institutions in the face of this evidence is not a
            reflection of the evidence's weakness. It is a reflection of the institution's complicity.
          </p>
        </div>
      </div>

      {/* COMPARISON CARDS */}
      <div className="max-w-4xl mx-auto px-6 pb-16 space-y-8">
        {COMPARISONS.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: `${c.accent}30`, background: "#0d1117" }}
            >
              <div
                className="px-8 py-5 border-b flex items-center gap-4"
                style={{ borderColor: `${c.accent}20`, background: `${c.accent}08` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: c.accent }} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest mb-0.5" style={{ color: c.accent }}>
                    Comparison {i + 1} of {COMPARISONS.length}
                  </p>
                  <h2 className="text-white font-bold text-lg">{c.title}</h2>
                </div>
              </div>

              <div className="px-8 py-6 space-y-4">
                {c.body.map((para, j) => (
                  <p key={j} className="text-zinc-300 leading-relaxed" style={{ fontSize: "15px" }}>{para}</p>
                ))}

                <div
                  className="mt-4 rounded-xl px-5 py-3 border"
                  style={{ background: `${c.accent}08`, borderColor: `${c.accent}25` }}
                >
                  <p className="text-sm font-bold" style={{ color: c.accent }}>
                    ↳ {c.verdict}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* VERDICT */}
      <div className="border-t border-zinc-800" style={{ background: "#070a10" }}>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-8">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-600">Conclusion</p>
          <h2 className="font-serif font-black text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            The downloads are not the story.<br />
            <span style={{ color: "#f59e0b" }}>The downloads are the verdict.</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto text-base">
            The apparatus of a state that criminalises a person and suppresses their voice relies on a specific precondition:
            that no one is watching. Suppression works in proportion to obscurity. The Barran Dodger Archive has now been downloaded{" "}
            <span className="text-white font-semibold">{total} times.</span>{" "}
            That number is not consistent with the successful suppression of an insignificant person. It is consistent with one
            thing only: a man whose account is so credible, so documented, and so forensically compelling that nearly half a million
            individual acts of download have occurred — each one a person who sought out the material, found it, and chose to keep it.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <a
              href="/evidence"
              data-testid="link-significance-evidence"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
              style={{ background: "#f59e0b", color: "#000" }}
            >
              View the Evidence Archive <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/tony-ridley-full-dossier"
              data-testid="link-significance-tony-ridley"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-zinc-700 text-zinc-300"
              style={{ background: "transparent" }}
            >
              Tony Ridley Full Dossier <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/familial-inner-circle-exposed"
              data-testid="link-significance-familial"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-zinc-700 text-zinc-300"
              style={{ background: "transparent" }}
            >
              Familial Inner Circle Exposed <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-zinc-700 text-xs font-mono pt-4">
            {total} downloads · 180 documents · 89 days · zero advertising · barrandodger.com<br />
            OHCHR Ref UR/UST/23/AUS/17 · ICC Filed · UNHCR Geneva · ABN 78 833 496 164
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
