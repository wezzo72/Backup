import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/SEO";
import { Shield, Star, Crown, CheckCircle, ArrowRight, Lock, Users } from "lucide-react";

const TIERS = [
  {
    id: "witness",
    name: "Witness",
    price: "$5",
    period: "/month",
    aud: "AUD 5.00/mo",
    icon: Shield,
    color: "#3b82f6",
    bg: "#1e3a5f22",
    border: "#1e3a5f",
    description: "Join the official record of witnesses to this testimony.",
    perks: [
      "Full archive access — all 1,100,000+ downloads",
      "Witness status on the public supporter wall",
      "Monthly digest of new evidence releases",
      "Your name in the permanent witness record",
    ],
  },
  {
    id: "advocate",
    name: "Advocate",
    price: "$15",
    period: "/month",
    aud: "AUD 15.00/mo",
    icon: Star,
    color: "#f59e0b",
    bg: "#78350f22",
    border: "#78350f",
    description: "Active advocates who amplify the testimony publicly.",
    perks: [
      "Everything in Witness",
      "Advocate badge on the supporter wall",
      "Early access to new forensic analyses",
      "Named in ICC and UNHCR solidarity letters",
      "Priority response to correspondence",
    ],
    recommended: true,
  },
  {
    id: "guardian",
    name: "Guardian",
    price: "$33",
    period: "/month",
    aud: "AUD 33.00/mo",
    icon: Crown,
    color: "#a855f7",
    bg: "#4c1d9522",
    border: "#4c1d95",
    description: "Guardians sustain the archive and Dr. McLean's safety directly.",
    perks: [
      "Everything in Advocate",
      "Guardian status — highest public recognition",
      "Named individually in every formal submission",
      "Direct correspondence channel with Dr. McLean",
      "Certificate of guardianship — blockchain timestamped",
      "Invitation to private witness briefings",
    ],
  },
];

function SupportSuccess() {
  const [location] = useLocation();
  const sessionId = new URLSearchParams(window.location.search).get("session_id");
  const [done, setDone] = useState(false);
  const [tierName, setTierName] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!sessionId) return;
    fetch(`/api/stripe/verify-subscription-session?session_id=${encodeURIComponent(sessionId)}`)
      .then(r => r.json())
      .then(data => {
        if (data.success && data.subscriberToken) {
          try { localStorage.setItem("bd_sub_token_v1", data.subscriberToken); } catch {}
          setTierName(data.tierName || "witness");
          setDone(true);
        } else {
          setErr(data.error || "Could not confirm subscription. Please contact us.");
        }
      })
      .catch(() => setErr("Network error — please try again."));
  }, [sessionId]);

  const tierLabel = TIERS.find(t => t.id === tierName)?.name || "Supporter";

  return (
    <div className="min-h-screen bg-background min-h-screen flex items-center justify-center p-4">
      <SEO title="Thank you — Barran Dodger Archive" description="Thank you for supporting the archive." path="/support/success" />
      <div className="max-w-md w-full text-center space-y-6">
        {!done && !err && (
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full border-2 border-blue-500 border-t-transparent animate-spin mx-auto" />
            <p className="text-white font-medium">Confirming your subscription…</p>
          </div>
        )}
        {done && (
          <div className="space-y-5">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ background: "#065f46" }}>
              <CheckCircle className="w-10 h-10 text-green-300" />
            </div>
            <div>
              <p className="text-green-300 font-bold text-2xl">Welcome, {tierLabel}.</p>
              <p className="text-sm mt-2" style={{ color: "#9ca3af" }}>
                Your monthly subscription is active. Every document is now unlocked. You are now part of the permanent record of witnesses.
              </p>
            </div>
            <div className="rounded-xl border p-4 text-left space-y-2" style={{ background: "#0a1628", borderColor: "#1e3a5f" }}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3b82f6" }}>What happens next</p>
              <ul className="text-sm space-y-1.5" style={{ color: "#9ca3af" }}>
                <li>✓ All documents are immediately unlocked in this browser</li>
                <li>✓ Your name will appear on the supporter wall</li>
                <li>✓ You can cancel anytime via Stripe</li>
              </ul>
            </div>
            <a
              href="/archive-home"
              className="block w-full py-3.5 rounded-xl font-bold text-sm text-center"
              style={{ background: "#1d4ed8", color: "#fff" }}
              data-testid="link-back-home"
            >
              Go to the Archive
            </a>
          </div>
        )}
        {err && (
          <div className="space-y-4">
            <p className="text-red-400 font-medium">{err}</p>
            <a href="/support" className="text-blue-400 text-sm underline">Back to Support</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Support() {
  const [location] = useLocation();
  const isSuccess = location.includes("/support/success") || window.location.pathname.includes("/support/success");

  if (isSuccess) return <SupportSuccess />;

  const [selectedTier, setSelectedTier] = useState("advocate");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { data: supporters } = useQuery<{ name: string; tierName: string }[]>({
    queryKey: ["/api/supporters"],
  });

  const handleSubscribe = async () => {
    if (!email.trim() || !email.includes("@")) { setError("Please enter a valid email."); return; }
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
        setError(data.error || "Could not create checkout session.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background min-h-screen">
      <SEO
        title="Support the Archive — Barran Dodger"
        description="Become a monthly supporter of the Barran Dodger archive. Choose a tier and sustain the most comprehensively documented whistleblower testimony in Australian history."
        path="/support"
        keywords="support Barran Dodger archive, donate whistleblower Australia, fund Dr Richard McLean archive, monthly support whistleblower, sustain evidence archive donation, support Australian whistleblower, PayID donation whistleblower, trust fund support ABN 78 833 496 164, sustain 3643 document archive, whistleblower protection funding Australia, support government corruption exposure, fund ICC submission whistleblower, help Australian whistleblower survive"
      />

      {/* Hero */}
      <div className="py-16 px-4 text-center" style={{ background: "#080f1e", borderBottom: "1px solid #1e3a5f" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3b82f6" }}>Support the Archive</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
          Sustain 35 years of documented testimony
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "#9ca3af" }}>
          Dr. Richard McLean survived clinical death. His 2,077 blockchain-sealed documents have been downloaded 1,100,000+ times across every continent. Your monthly support keeps the archive operational, the testimony alive, and Dr. McLean safe.
        </p>
        <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">451,147</p>
            <p className="text-xs" style={{ color: "#6b7280" }}>total downloads</p>
          </div>
          <div className="w-px h-8" style={{ background: "#1e3a5f" }} />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">179</p>
            <p className="text-xs" style={{ color: "#6b7280" }}>unique documents</p>
          </div>
          <div className="w-px h-8" style={{ background: "#1e3a5f" }} />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{supporters?.length ?? 0}</p>
            <p className="text-xs" style={{ color: "#6b7280" }}>monthly supporters</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TIERS.map(tier => {
            const Icon = tier.icon;
            const active = selectedTier === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className="relative rounded-2xl border p-6 text-left transition-all cursor-pointer"
                style={{
                  background: active ? tier.bg : "#0a1628",
                  borderColor: active ? tier.color : "#1e3a5f",
                  boxShadow: active ? `0 0 0 2px ${tier.color}44` : "none",
                }}
                data-testid={`button-tier-${tier.id}`}
              >
                {tier.recommended && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold text-black" style={{ background: "#f59e0b" }}>
                    Most popular
                  </span>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: tier.color + "22" }}>
                    <Icon className="w-4 h-4" style={{ color: tier.color }} />
                  </div>
                  <span className="font-bold text-white">{tier.name}</span>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-sm ml-1" style={{ color: "#6b7280" }}>{tier.period}</span>
                  <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{tier.aud}</p>
                </div>
                <p className="text-xs mb-4 leading-relaxed" style={{ color: "#9ca3af" }}>{tier.description}</p>
                <ul className="space-y-1.5">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs" style={{ color: "#d1d5db" }}>
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" style={{ color: tier.color }} />
                      {perk}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>

        {/* Checkout form */}
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl border overflow-hidden" style={{ background: "#0a1628", borderColor: "#1e3a5f" }}>
            <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "#1e3a5f" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#3b82f6" }}>
                {TIERS.find(t => t.id === selectedTier)?.name} — {TIERS.find(t => t.id === selectedTier)?.price}/month AUD
              </p>
              <p className="text-white font-bold">Complete your subscription</p>
              <p className="text-xs mt-1" style={{ color: "#6b7280" }}>You'll be redirected to Stripe's secure checkout. Cancel anytime.</p>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 rounded-xl border px-3 py-2.5" style={{ background: "#060d18", borderColor: "#1e3a5f" }}>
                <svg className="w-4 h-4 shrink-0" style={{ color: "#6b7280" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <input
                  type="text" placeholder="Full name *" value={name} onChange={e => setName(e.target.value)}
                  className="bg-transparent text-sm outline-none w-full" style={{ color: "#e5e7eb" }}
                  data-testid="input-support-name"
                />
              </div>
              <div className="flex items-center gap-2 rounded-xl border px-3 py-2.5" style={{ background: "#060d18", borderColor: "#1e3a5f" }}>
                <svg className="w-4 h-4 shrink-0" style={{ color: "#6b7280" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <input
                  type="email" placeholder="Email address *" value={email} onChange={e => setEmail(e.target.value)}
                  className="bg-transparent text-sm outline-none w-full" style={{ color: "#e5e7eb" }}
                  data-testid="input-support-email"
                />
              </div>
              {error && (
                <p className="text-red-400 text-xs px-1">{error}</p>
              )}
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                style={{ background: TIERS.find(t => t.id === selectedTier)?.color || "#1d4ed8", color: "#fff" }}
                data-testid="button-subscribe"
              >
                {loading ? "Redirecting to Stripe…" : (
                  <>
                    <Lock className="w-4 h-4" />
                    Subscribe — {TIERS.find(t => t.id === selectedTier)?.price}/month
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-2 text-xs" style={{ color: "#374151" }}>
                <Lock className="w-3 h-3" />
                Secured by Stripe · ABN 78 833 496 164 · Cancel anytime
              </div>
            </div>
          </div>
        </div>

        {/* Supporter Wall */}
        {supporters && supporters.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-bold text-white">Monthly Supporters</h2>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: "#1e3a5f", color: "#93c5fd" }}>
                {supporters.length}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {supporters.map((s, i) => {
                const tier = TIERS.find(t => t.id === s.tierName);
                return (
                  <div
                    key={i}
                    className="rounded-xl border p-3 flex items-center gap-2"
                    style={{ background: "#0a1628", borderColor: "#1e3a5f" }}
                    data-testid={`card-supporter-${i}`}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-white" style={{ background: tier?.color + "44" || "#1e3a5f" }}>
                      {(s.name || "A")[0].toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white truncate">{s.name || "Anonymous"}</p>
                      <p className="text-xs" style={{ color: tier?.color || "#6b7280" }}>{tier?.name || "Supporter"}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Trust signals */}
        <div className="rounded-2xl border p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center" style={{ background: "#0a1628", borderColor: "#1e3a5f" }}>
          <div>
            <p className="font-bold text-white text-sm">Blockchain-sealed</p>
            <p className="text-xs mt-1" style={{ color: "#6b7280" }}>All 2,077 documents are SHA-256 hashed and Bitcoin timestamped — mathematically tamper-proof</p>
          </div>
          <div>
            <p className="font-bold text-white text-sm">ABN 78 833 496 164</p>
            <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Barran Dodger Legal & Ethical Trust Fund — registered and publicly auditable</p>
          </div>
          <div>
            <p className="font-bold text-white text-sm">Cancel anytime</p>
            <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Monthly billing only. Cancel through Stripe's customer portal instantly, no questions asked</p>
          </div>
        </div>
      </div>
    </div>
  );
}
