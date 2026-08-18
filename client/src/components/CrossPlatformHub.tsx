import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Youtube, Play, GraduationCap } from "lucide-react";
import { SiMedium, SiScribd } from "react-icons/si";

interface MediumItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const PLATFORMS = [
  {
    key: "youtube",
    name: "YouTube",
    handle: "@barrandodger",
    url: "https://youtube.com/@barrandodger",
    cta: "Subscribe & Watch",
    description: "52+ forensic video analyses. 675/675 AI propositions corroborated. Watch the evidence come alive.",
    Icon: Youtube,
    accent: "#FF0000",
    border: "border-red-500/30",
    bg: "bg-red-950/20",
    badge: "52+ Videos",
    isLucide: true,
  },
  {
    key: "medium",
    name: "Medium",
    handle: "@barrandodger",
    url: "https://medium.com/@barrandodger",
    cta: "Read Articles",
    description: "Long-form analysis connecting government documents to 35 years of documented persecution.",
    Icon: SiMedium,
    accent: "#FFFFFF",
    border: "border-white/20",
    bg: "bg-white/5",
    badge: "Articles",
    isLucide: false,
  },
  {
    key: "scribd",
    name: "Scribd",
    handle: "richarddrawsstuff",
    url: "https://www.scribd.com/user/696623548/richarddrawsstuff",
    cta: "Read on Scribd",
    description: "125+ published works available to Scribd's 150M+ global reader community.",
    Icon: SiScribd,
    accent: "#1E7B85",
    border: "border-teal-500/30",
    bg: "bg-teal-950/20",
    badge: "125+ Works",
    isLucide: false,
  },
  {
    key: "academia",
    name: "Academia.edu",
    handle: "RichMcLean",
    url: "https://vu.academia.edu/RichMcLean",
    cta: "View Academic Profile",
    description: "Research profile at Victoria University — cited by academics, indexed by Google Scholar and ResearchGate.",
    Icon: GraduationCap,
    accent: "#41a4e5",
    border: "border-blue-500/30",
    bg: "bg-blue-950/20",
    badge: "VU Profile",
    isLucide: true,
  },
];

function MediumArticles() {
  const { data } = useQuery<{ ok: boolean; items: MediumItem[] }>({
    queryKey: ["/api/medium-feed"],
    staleTime: 30 * 60 * 1000,
    retry: 1,
  });

  if (!data?.ok || !data.items?.length) return null;

  return (
    <div className="mt-3 space-y-2 border-t border-white/10 pt-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Latest Articles</p>
      {data.items.slice(0, 3).map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
          data-testid={`link-medium-article-${i}`}
        >
          <p className="text-xs text-white/70 group-hover:text-amber-400 transition-colors leading-snug line-clamp-2">
            {item.title}
          </p>
        </a>
      ))}
    </div>
  );
}

export function CrossPlatformHub({ compact = false }: { compact?: boolean }) {
  return (
    <section className="w-full py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/70 mb-2">Follow the Archive</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            The Evidence Lives Across Every Platform
          </h2>
          <p className="text-sm text-white/50 mt-2 max-w-xl mx-auto">
            1,000,000+ downloads. Zero institutional support. Follow on every platform to ensure the record cannot be suppressed.
          </p>
        </div>

        <div className={`grid gap-4 ${compact ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}>
          {PLATFORMS.map((p) => (
            <a
              key={p.key}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-platform-${p.key}`}
              className={`relative rounded-xl border ${p.border} ${p.bg} p-5 flex flex-col gap-3 group hover:scale-[1.02] transition-all duration-200 hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <p.Icon
                    size={22}
                    style={{ color: p.accent }}
                    className="shrink-0"
                  />
                  <div>
                    <p className="text-sm font-bold text-white leading-none">{p.name}</p>
                    <p className="text-xs text-white/40 mt-0.5">{p.handle}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/50 bg-white/5 shrink-0">
                  {p.badge}
                </span>
              </div>

              <p className="text-xs text-white/60 leading-relaxed">
                {p.description}
              </p>

              {p.key === "medium" && <MediumArticles />}

              <div className="mt-auto flex items-center gap-1 text-xs font-semibold group-hover:text-amber-400 transition-colors" style={{ color: p.accent === "#FFFFFF" ? "rgba(255,255,255,0.7)" : p.accent }}>
                {p.key === "youtube" ? <Play size={12} /> : <ExternalLink size={11} />}
                {p.cta}
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-white/30 mt-6">
          ABN 78 833 496 164 · Every platform links back to the primary source archive at barrandodger.com
        </p>
      </div>
    </section>
  );
}

export default CrossPlatformHub;
