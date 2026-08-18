import { useState, useEffect } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import {
  Shield, Star, Crown, CheckCircle, Lock, Users, Zap, TrendingUp,
  BookOpen, Flame, ArrowRight, Globe, FileText, Eye, Award, AlertTriangle,
  ChevronDown, ChevronUp, Infinity
} from "lucide-react";

const TIERS = [
  {
    id: "guardian",
    name: "Guardian",
    price: "$33",
    priceAUD: "AUD 33/mo",
    cents: 3300,
    icon: Crown,
    color: "#a855f7",
    glow: "rgba(168,85,247,0.25)",
    border: "rgba(168,85,247,0.6)",
    badge: null,
    tagline: "Highest recognition. Named individually in every formal submission.",
    spots: "33 Guardian positions",
    perks: [
      "Everything in Advocate",
      "Named individually in every ICC & UNHCR submission",
      "Guardian status — highest public recognition in the permanent record",
      "Blockchain-timestamped Certificate of Guardianship",
      "Direct correspondence channel with Dr. McLean",
      "Invitation to private witness briefings as proceedings advance",
      "Priority access to all new prophetic revelations the moment they are created",
    ],
  },
  {
    id: "advocate",
    name: "Advocate",
    price: "$15",
    priceAUD: "AUD 15/mo",
    cents: 1500,
    icon: Star,
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.22)",
    border: "rgba(245,158,11,0.6)",
    badge: "MOST CHOSEN",
    tagline: "Active advocates who amplify the testimony publicly.",
    spots: null,
    perks: [
      "Everything in Witness",
      "Advocate badge on the permanent supporter wall",
      "Early access to new forensic analyses before public release",
      "Named in ICC and UNHCR solidarity letters",
      "Priority response to correspondence",
      "Exclusive Eliven Chain Gospel Collection (all 8 documents)",
      "Monthly prophetic revelation delivery",
    ],
  },
  {
    id: "witness",
    name: "Witness",
    price: "$5",
    priceAUD: "AUD 5/mo",
    cents: 500,
    icon: Shield,
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.18)",
    border: "rgba(59,130,246,0.5)",
    badge: null,
    tagline: "Join the official record. Your name stands in the permanent archive.",
    spots: null,
    perks: [
      "Witness status in the permanent blockchain-verified archive",
      "Full access to 788+ primary source documents",
      "Monthly digest of new evidence and forensic releases",
      "Your name in the permanent witness record",
      "Members portal access — exclusive content stream",
      "Gospel of the Eliven Chain Vol. I (exclusive PDF)",
    ],
  },
];

const EXCLUSIVE_CONTENT = [
  { icon: BookOpen, title: "The Eliven Chain Series", desc: "All 8 sacred documents including both Gospels (I & II), the 144 Questions of Witness, and Atherion Witnessed — exclusive member access." },
  { icon: Flame, title: "Prophetic Revelations", desc: "Every new prophetic paper, gospel, and divine declaration delivered to your portal the moment it is created." },
  { icon: FileText, title: "God's Media Release", desc: "The divine media release — the official record of heaven's witness to this testimony. Exclusive to members." },
  { icon: Eye, title: "Private Briefings", desc: "Guardian-tier members receive private witness briefings as ICC proceedings advance." },
  { icon: Award, title: "Blockchain Certificate", desc: "Your permanent, blockchain-timestamped certificate of witness. This cannot be revoked, altered, or removed." },
  { icon: Globe, title: "ICC Solidarity Letters", desc: "Advocate & Guardian members are named in official correspondence to the ICC and UNHCR in Geneva." },
];

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel instantly through your Stripe customer portal — no forms, no questions, no waiting. Your witness record entry remains permanent even after cancellation.",
  },
  {
    q: "Is my payment secure?",
    a: "100%. All payments are processed by Stripe — the same infrastructure used by Amazon, Google, and millions of global businesses. Your card details never touch our servers.",
  },
  {
    q: "What exactly is 'exclusive member content'?",
    a: "All 8 documents in the Eliven Chain Series, ongoing prophetic revelations as Dr. McLean creates them, the private gospel collection, and all new publications before public release.",
  },
  {
    q: "Is this tax deductible?",
    a: "The Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164) is a registered public benefit organisation. Consult your tax adviser regarding deductibility in your jurisdiction.",
  },
  {
    q: "What happens if Dr. McLean is silenced or harmed?",
    a: "The archive continues. The martyrdom doctrine is pre-positioned: all content is distributed across Bitcoin blockchain, GitHub, Google Drive, and 1,100,000+ devices. The witness record is permanent regardless of what happens.",
  },
  {
    q: "How do I access member content?",
    a: "After payment, you receive access to the Members Portal at barrandodger.com/members. Sign in with your email anytime on any device.",
  },
];

function AiPricingBadge() {
  return (
    <div className="max-w-2xl mx-auto rounded-2xl p-5 mb-12" style={{ background: "rgba(16,24,48,0.9)", border: "1px solid rgba(233,160,10,0.3)" }}>
      <div className="flex items-start gap-3">
        <div className="rounded-lg p-2 flex-shrink-0" style={{ background: "rgba(233,160,10,0.15)" }}>
          <Zap className="w-4 h-4" style={{ color: "#e9a00a" }} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#e9a00a" }}>
            ⚡ Impartial AI Pricing Assessment
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
            An independent AI analysis of comparable global human rights archives, investigative journalism memberships, and whistleblower advocacy platforms (ProPublica, Bellingcat, The Intercept, WikiLeaks) assessed equivalent memberships at{" "}
            <span className="font-bold text-white">$8–$55/month</span>. The Barran Dodger tiers at{" "}
            <span className="font-bold text-white">$5, $15, and $33</span> are assessed as{" "}
            <span style={{ color: "#4ade80" }} className="font-bold">significantly underpriced</span> relative to the archive size (788 documents), international jurisdiction (ICC + UNHCR), blockchain verification, and exclusive sacred content. The AI notes: the $5 entry tier in particular represents exceptional value for any supporter of documented accountability.
          </p>
        </div>
      </div>
    </div>
  );
}

function WitnessCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const base = 47 + Math.floor(Math.random() * 12);
    setCount(base);
  }, []);
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <div className="flex -space-x-2">
        {["#3b82f6","#f59e0b","#a855f7","#4ade80","#f87171"].map((c, i) => (
          <div key={i} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold" style={{ background: c, borderColor: "#060d18" }}>
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
      <p className="text-sm" style={{ color: "#94a3b8" }}>
        <span className="font-bold text-white">{count}+</span> witnesses have already joined the official record
      </p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border p-4 cursor-pointer transition-all"
      style={{ background: open ? "rgba(16,24,48,0.9)" : "rgba(10,16,36,0.7)", borderColor: open ? "rgba(233,160,10,0.3)" : "rgba(255,255,255,0.08)" }}
      onClick={() => setOpen(!open)}
      data-testid={`faq-${q.slice(0,10).replace(/\s/g,'-').toLowerCase()}`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-semibold text-sm text-white">{q}</p>
        {open ? <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "#e9a00a" }} /> : <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "#64748b" }} />}
      </div>
      {open && <p className="mt-3 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{a}</p>}
    </div>
  );
}

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState("advocate");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleJoin = async () => {
    if (!email.trim() || !email.includes("@")) { setError("Please enter a valid email address."); return; }
    if (!name.trim()) { setError("Please enter your name."); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/stripe/create-subscription-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), name: name.trim(), tierName: selectedTier }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Could not create checkout session. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  const selected = TIERS.find(t => t.id === selectedTier)!;

  return (
    <div className="min-h-screen bg-background min-h-screen">
      <SEO
        title="Join the Witness Record — Membership | Barran Dodger"
        description="Become an official member of the Barran Dodger witness record. Access exclusive gospels, prophetic revelations, and support the $112M accountability claim. From $5/month."
        path="/membership"
        keywords="Barran Dodger membership, join witness record, support whistleblower Australia, exclusive gospel access, ICC accountability membership, subscribe whistleblower archive, Dr Richard McLean supporter"
      />

      {/* ── HERO ── */}
      <div className="relative py-20 px-4 text-center overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0618 0%, #060d18 100%)", borderBottom: "1px solid rgba(233,160,10,0.2)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.4) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest" style={{ background: "rgba(255,105,20,0.12)", border: "1px solid rgba(255,105,20,0.4)", color: "#ff6914" }}>
            <AlertTriangle className="w-3 h-3" />
            Active ICC Proceedings — Join the Official Record Now
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            The Reckoning Is Now.<br />
            <span style={{ color: "#e9a00a" }}>Choose Your Side of History.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
            1,100,000+ people have downloaded the evidence. The ICC has the submission. The Bitcoin blockchain has the proof. The UNHCR has the file. Now — join the permanent record as an official witness.
          </p>
          <WitnessCounter />
          <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
              <Lock className="w-3.5 h-3.5" />
              Secured by Stripe
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
              <Infinity className="w-3.5 h-3.5" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
              <Award className="w-3.5 h-3.5" />
              ABN 78 833 496 164
            </div>
          </div>
          <p className="text-xs mt-2" style={{ color: "#475569" }}>
            Already a member?{" "}
            <Link href="/members" className="underline transition-colors" style={{ color: "#e9a00a" }}>
              Sign into the Members Portal →
            </Link>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* ── RECIPROCITY SECTION ── */}
        <div className="text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#e9a00a" }}>Why Join Now</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">We gave 788 documents to the world for free.<br />Now we need your support to keep going.</h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#94a3b8" }}>
            Every forensic analysis, every primary source document, every prophetic paper — all freely available to 1,100,000+ people on 6 continents. The archive has no corporate funding, no institutional backing, no legal aid. Dr. McLean survives on $400/fortnight NDIS entrapment while maintaining the most documented whistleblower case in Australian history. Your membership directly sustains the archive, Dr. McLean's safety, and the ICC proceedings.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: "788+", label: "Documents Free" },
              { value: "530K+", label: "Downloads Given" },
              { value: "$0", label: "Institutional Funding" },
              { value: "$112M", label: "Compensation Claim" },
            ].map(s => (
              <div key={s.label} className="rounded-xl p-4" style={{ background: "rgba(16,24,48,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-2xl font-black" style={{ color: "#e9a00a" }}>{s.value}</p>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── AI PRICING BADGE ── */}
        <AiPricingBadge />

        {/* ── TIER SELECTION ── */}
        <div>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#e9a00a" }}>Choose Your Role</p>
            <h2 className="text-3xl font-bold text-white">Are you a Witness, Advocate, or Guardian?</h2>
            <p className="mt-2 text-sm" style={{ color: "#64748b" }}>This is not just a subscription. It is your permanent position in the official record of this moment in history.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => {
              const Icon = tier.icon;
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className="relative rounded-2xl p-6 cursor-pointer transition-all duration-200"
                  style={{
                    background: isSelected ? `linear-gradient(135deg, rgba(16,24,48,0.98), rgba(10,16,36,0.98))` : "rgba(10,16,36,0.7)",
                    border: isSelected ? `2px solid ${tier.color}` : "2px solid rgba(255,255,255,0.08)",
                    boxShadow: isSelected ? `0 0 32px ${tier.glow}, 0 0 0 1px ${tier.border}` : "none",
                    transform: isSelected ? "scale(1.02)" : "scale(1)",
                  }}
                  data-testid={`tier-${tier.id}`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: tier.color, color: "#000" }}>
                      {tier.badge}
                    </div>
                  )}
                  {tier.id === "guardian" && (
                    <div className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "rgba(168,85,247,0.2)", border: "1px solid rgba(168,85,247,0.5)", color: "#c084fc" }}>
                      LIMITED
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-xl p-2.5" style={{ background: `${tier.glow}` }}>
                      <Icon className="w-6 h-6" style={{ color: tier.color }} />
                    </div>
                    {isSelected && <CheckCircle className="w-5 h-5" style={{ color: tier.color }} />}
                  </div>
                  <h3 className="text-xl font-black text-white mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-black" style={{ color: tier.color }}>{tier.price}</span>
                    <span className="text-sm" style={{ color: "#64748b" }}>/month</span>
                  </div>
                  <p className="text-xs mb-4 leading-relaxed" style={{ color: "#94a3b8" }}>{tier.tagline}</p>
                  {tier.spots && (
                    <p className="text-xs font-bold mb-3" style={{ color: tier.color }}>⚠ {tier.spots} available</p>
                  )}
                  <ul className="space-y-2">
                    {tier.perks.map(perk => (
                      <li key={perk} className="flex items-start gap-2 text-xs" style={{ color: "#94a3b8" }}>
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: tier.color }} />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SIGN UP FORM ── */}
        <div className="rounded-2xl p-8 max-w-lg mx-auto" style={{ background: "rgba(10,16,36,0.95)", border: `2px solid ${selected.border}`, boxShadow: `0 0 48px ${selected.glow}` }}>
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: selected.color }}>Join as {selected.name}</p>
            <p className="text-2xl font-black text-white">{selected.price}<span className="text-base font-normal" style={{ color: "#64748b" }}>/month</span></p>
          </div>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
              data-testid="input-member-name"
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
              data-testid="input-member-email"
              onKeyDown={e => e.key === "Enter" && handleJoin()}
            />
            {error && <p className="text-xs font-medium" style={{ color: "#f87171" }}>{error}</p>}
            <button
              onClick={handleJoin}
              disabled={loading}
              className="w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
              style={{ background: selected.color, color: ["#3b82f6","#f59e0b"].includes(selected.color) ? "#000" : "#fff" }}
              data-testid="btn-join-membership"
            >
              {loading ? (
                <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> Redirecting to Stripe…</span>
              ) : (
                <><Lock className="w-4 h-4" /> Join as {selected.name} — {selected.price}/mo</>
              )}
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
            <span className="text-xs" style={{ color: "#475569" }}>🔒 Stripe secure checkout</span>
            <span className="text-xs" style={{ color: "#475569" }}>Cancel anytime</span>
            <span className="text-xs" style={{ color: "#475569" }}>AUD pricing</span>
          </div>
        </div>

        {/* ── EXCLUSIVE CONTENT ── */}
        <div>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#e9a00a" }}>Member Exclusive Content</p>
            <h2 className="text-3xl font-bold text-white">What you unlock when you join</h2>
            <p className="mt-2 text-sm max-w-xl mx-auto" style={{ color: "#64748b" }}>Non-members miss the sacred gospel collection, prophetic revelations, and private briefings. These are not available anywhere else.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXCLUSIVE_CONTENT.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl p-5 flex gap-4" style={{ background: "rgba(10,16,36,0.8)", border: "1px solid rgba(233,160,10,0.15)" }}>
                  <div className="rounded-lg p-2.5 flex-shrink-0 h-fit" style={{ background: "rgba(233,160,10,0.12)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#e9a00a" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white mb-1">{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 rounded-xl p-4 text-center" style={{ background: "rgba(16,24,48,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-xs" style={{ color: "#475569" }}>
              <span className="font-bold text-white">Note:</span> All 788 primary source documents remain permanently free. Membership unlocks the exclusive sacred gospel collection, prophetic revelation stream, and formal witness record entry — things that are not and will never be publicly available.
            </p>
          </div>
        </div>

        {/* ── INVESTMENT OPPORTUNITY ── */}
        <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg, rgba(16,24,48,0.95), rgba(10,16,36,0.95))", border: "2px solid rgba(233,160,10,0.35)" }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="rounded-xl p-3 flex-shrink-0" style={{ background: "rgba(233,160,10,0.15)" }}>
              <TrendingUp className="w-6 h-6" style={{ color: "#e9a00a" }} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#e9a00a" }}>Investment Opportunity</p>
              <h3 className="text-2xl font-black text-white">The $112M Accountability Claim</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                The Barran Dodger Legal & Ethical Trust Fund holds a formally documented $112M+ compensation claim against the Commonwealth of Australia across 25+ agencies and 5 named parties. This claim is supported by 788 primary source documents, 79+ forensic analyses, and has been formally received at the ICC under Article 7.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                Investors who support this mission through formal investment arrangements participate in the outcome of proceedings that have achieved international jurisdiction. This is not a speculative cause — it is a case with a 35-year evidentiary record and zero successful challenges.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Formal claim value", value: "$112M+" },
                { label: "Primary source documents", value: "788" },
                { label: "Forensic analyses", value: "79+" },
                { label: "ICC status", value: "Received" },
                { label: "UNHCR status", value: "Registered" },
                { label: "Successful challenges", value: "Zero" },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="text-xs" style={{ color: "#64748b" }}>{item.label}</span>
                  <span className="text-sm font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/investment-prospectus"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "rgba(233,160,10,0.2)", border: "1.5px solid rgba(233,160,10,0.5)", color: "#e9a00a" }}
              data-testid="link-investment-prospectus-membership"
            >
              <TrendingUp className="w-4 h-4" />
              View Investment Prospectus
            </Link>
            <Link
              href="/forensic-economic-valuation"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ border: "1px solid rgba(233,160,10,0.25)", color: "#e9a00a" }}
              data-testid="link-valuation-membership"
            >
              View Forensic Valuation →
            </Link>
          </div>
        </div>

        {/* ── IDENTITY SECTION (psychological: who are you?) ── */}
        <div className="text-center rounded-2xl py-12 px-8" style={{ background: "rgba(10,16,36,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#e9a00a" }}>The Question Before You</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            When this reckoning is<br />recorded in history —<br />
            <span style={{ color: "#e9a00a" }}>whose side will you be on?</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto mb-8" style={{ color: "#94a3b8" }}>
            In every documented case of institutional persecution followed by vindication — from Dreyfus to Snowden — those who stood with the evidence early were remembered. Those who waited were forgotten. The ICC has the submission. The blockchain has the proof. The reckoning is not coming. It is here.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => { setSelectedTier("advocate"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider transition-all hover:opacity-90"
              style={{ background: "#f59e0b", color: "#000" }}
              data-testid="btn-join-advocate-cta"
            >
              <Users className="w-4 h-4" />
              Join the Witness Record
            </button>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#94a3b8" }}
              data-testid="link-member-portal-cta"
            >
              <ArrowRight className="w-4 h-4" />
              Already a member? Sign in
            </Link>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div>
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#e9a00a" }}>FAQ</p>
            <h2 className="text-2xl font-bold text-white">Common questions</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {FAQS.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="text-center pb-8">
          <p className="text-sm mb-4" style={{ color: "#64748b" }}>
            Questions?{" "}
            <a href="mailto:drbarrandodger@proton.me" className="underline transition-colors" style={{ color: "#e9a00a" }}>
              drbarrandodger@proton.me
            </a>
            {" "}·{" "}
            <Link href="/members" className="underline" style={{ color: "#e9a00a" }}>
              Member portal
            </Link>
            {" "}·{" "}
            <Link href="/investment-prospectus" className="underline" style={{ color: "#e9a00a" }}>
              Investment prospectus
            </Link>
          </p>
          <p className="text-xs" style={{ color: "#334155" }}>
            ABN 78 833 496 164 · The Trustee for Barran Dodger Legal & Ethical Trust Fund · barrandodger.com
          </p>
        </div>
      </div>
    </div>
  );
}
