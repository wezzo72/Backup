import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Palette, Youtube } from "lucide-react";

const PORTFOLIOS = [
  {
    title: "Back to Basics",
    sub: "50 Recent Drawings",
    pages: 63,
    url: "https://simplebooklet.com/backtobasicsrecentdrawings",
    embed: "https://simplebooklet.com/embed.php?wpKey=XkD4ro4XE0A2LgxFAHPpFZ&source=embed",
    accent: "#b87333",
    desc: "A collection of 50 recent pencil and ink drawings — intimate studies of nature, form and line.",
  },
  {
    title: "Barran Dodger",
    sub: "A Certain Beauty in Un-Resolution",
    pages: 230,
    url: "https://simplebooklet.com/barrandodger",
    embed: "https://simplebooklet.com/embed.php?wpKey=bq7fEFVRfnJEnkLTsgishL&source=embed",
    accent: "#7c3aed",
    desc: "230 pages of art, identity and resistance. Created during years of political persecution and institutional suppression.",
  },
  {
    title: "Ego & Soul",
    sub: "Strange Currencies of Ego and Soul",
    pages: 206,
    url: "https://simplebooklet.com/egoandsoul",
    embed: "https://simplebooklet.com/embed.php?wpKey=VMbPqtcO0vNchOT0xF7hXt&source=embed",
    accent: "#0f766e",
    desc: "The visual language of Richard McLean — exploring the intersection of psychology, spirituality and artistic expression.",
  },
  {
    title: "Grogan the Monster",
    sub: "In… What Do You Love?",
    pages: 21,
    url: "https://simplebooklet.com/groganthemonster",
    embed: "https://simplebooklet.com/embed.php?wpKey=8jXOyau3Ht62yOdJFBbfKm&source=embed",
    accent: "#b91c1c",
    desc: "A loveable illustrated children's book about Grogan the Monster and the question at the heart of all being.",
  },
];

const YOUTUBE_ID = "khaPDbjZHgc";

export default function CreativePortfolio() {
  return (
    <>
      <SEO
        title="Creative Portfolio — Dr. Richard McLean (Barran Dodger)"
        description="Interactive art portfolios by Dr. Richard McLean — Back to Basics, Barran Dodger ART;, Ego & Soul, and Grogan the Monster. View the complete illustrated books online."
        keywords="Richard McLean art, Barran Dodger portfolio, creative works, illustrated books, drawings"
        canonicalUrl="https://barrandodger.com/creative-portfolio"
      />
      <Navigation />

      <main className="min-h-screen bg-[#0d1525]">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative py-16 px-4" style={{ background: "linear-gradient(180deg,#1a2744 0%,#0d1525 100%)" }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Palette className="h-5 w-5 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Creative Works</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                Creative Portfolio
              </h1>
              <p className="text-xl text-gray-300 mb-2">
                Dr. Richard William McLean — Artist, Author, Whistleblower
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                Alongside 35 years of documented legal evidence and advocacy, Dr. McLean has produced a substantial body
                of creative and illustrated work. These four interactive portfolios are freely available to read online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 4 Interactive Portfolio Books ────────────────────────────── */}
        <section className="px-4 pb-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {PORTFOLIOS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {/* Book header */}
                <div
                  className="rounded-t-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                  style={{ background: p.accent }}
                >
                  <div>
                    <div className="text-white/70 text-xs uppercase tracking-widest mb-0.5 font-semibold">
                      Interactive Portfolio · Dr. Richard McLean
                    </div>
                    <h2 className="text-white text-2xl font-bold" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                      {p.title}
                    </h2>
                    <p className="text-white/85 text-sm mt-0.5">{p.sub} &nbsp;·&nbsp; {p.pages} pages</p>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open in Simplebooklet
                  </a>
                </div>

                {/* Description band */}
                <div className="bg-[#162035] px-6 py-3 border-l border-r" style={{ borderColor: p.accent }}>
                  <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
                </div>

                {/* Interactive iframe */}
                <div
                  className="relative rounded-b-xl overflow-hidden border-l border-r border-b"
                  style={{ height: "600px", borderColor: p.accent }}
                >
                  <iframe
                    src={p.embed}
                    allowFullScreen
                    width="100%"
                    height="100%"
                    style={{ border: 0, overflow: "hidden", display: "block" }}
                    scrolling="no"
                    title={`${p.title} — Interactive Portfolio`}
                  />
                </div>

                {/* Bottom link */}
                <div className="flex items-center justify-center pt-2 pb-1">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-amber-400 transition-colors"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    {p.url.replace("https://", "")}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── YouTube — Support in Exile ────────────────────────────────── */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(212,160,23,0.3)" }}>
                {/* Header */}
                <div className="px-6 py-5" style={{ background: "linear-gradient(135deg,#1a2744,#0d1525)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Youtube className="h-5 w-5 text-red-400" />
                    <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Personal Statement</span>
                  </div>
                  <h2 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                    Support Found in Political Exile
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    "Whilst in political exile — entrapped, waiting for the world to catch up — this is the music
                    that holds me." — Dr. Richard McLean
                  </p>
                </div>

                {/* Video */}
                <div className="relative" style={{ paddingBottom: "56.25%", background: "#000" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
                    title="Support in Political Exile — Dr. Richard McLean"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 0 }}
                  />
                </div>

                {/* Caption */}
                <div className="px-6 py-4" style={{ background: "#0d1525", borderTop: "1px solid rgba(212,160,23,0.15)" }}>
                  <p className="text-gray-500 text-xs text-center">
                    Dr. Richard William McLean (Barran Dodger) · barrandodger.com · ABN 78 833 496 164
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
