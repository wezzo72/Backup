import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Shield, Scale, Globe, Lock, Heart, ExternalLink,
  CheckCircle, Building2, FileText, Users, Landmark,
  ArrowRight, Copy, Check, Sparkles,
} from "lucide-react";
import { useState } from "react";

const ABN = "78 833 496 164";
const PAYPAL = "https://paypal.me/barrandodgertrust";
const OPENCOLLECTIVE = "https://opencollective.com/barrandodger-trust";
const PAYID = "drbarrandodger@proton.me";
const ABR_LINK = "https://abr.business.gov.au/ABN/View?abn=78833496164";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:opacity-70"
      style={{ color: "#84cc16" }}
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : label}
    </button>
  );
}

function VerifiedBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
      style={{ background: "rgba(132,204,22,0.12)", border: "1px solid rgba(132,204,22,0.3)", color: "#84cc16" }}>
      <CheckCircle className="h-2.5 w-2.5" />
      {text}
    </span>
  );
}

export default function BarranDodgerTrust() {
  return (
    <div className="min-h-screen" style={{ background: "#03060f", color: "#c8d8f0" }}>
      <SEO
        title="Barran Dodger Legal & Ethical Trust Fund — ABN 78 833 496 164 | Official Trust Page"
        description="The Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164) is a formally constituted, government-registered Australian trust fund operating under NSW Trustee & Guardian oversight. It funds the continued operation, distribution, and legal advancement of the most documented whistleblower archive in Australian history."
        path="/barran-dodger-trust"
      />
      <Navigation />

      {/* Government-verified strip */}
      <div
        className="w-full py-2 px-4 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]"
        style={{ background: "rgba(132,204,22,0.07)", borderBottom: "1px solid rgba(132,204,22,0.18)" }}
      >
        <CheckCircle className="h-3 w-3 flex-shrink-0" style={{ color: "#84cc16" }} />
        <span style={{ color: "rgba(132,204,22,0.65)" }}>
          Government-Registered Entity · ABN {ABN} · Verifiable on the Australian Business Register
        </span>
        <a href={ABR_LINK} target="_blank" rel="noopener noreferrer"
          className="underline transition-opacity hover:opacity-70" style={{ color: "rgba(132,204,22,0.5)" }}>
          Verify →
        </a>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-12 pb-24 space-y-16">

        {/* Hero */}
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <VerifiedBadge text="ABN Registered" />
            <VerifiedBadge text="NSW Trustee & Guardian" />
            <VerifiedBadge text="ATO Compliant" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight" style={{ color: "#e8f0ff" }}>
            Barran Dodger<br />
            <span style={{ color: "#84cc16" }}>Legal & Ethical Trust Fund</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(200,216,240,0.7)" }}>
            A formally constituted, government-registered Australian trust fund operating under
            NSW Trustee &amp; Guardian oversight. Established to fund the safety, continued operation,
            and legal advancement of the most documented whistleblower archive in Australian history.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest mb-0.5" style={{ color: "rgba(132,204,22,0.5)" }}>ABN</p>
              <p className="text-2xl font-black font-mono" style={{ color: "#84cc16" }}>{ABN}</p>
            </div>
            <div className="w-px h-10 self-stretch" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest mb-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>Registered Entity Name</p>
              <p className="text-sm font-bold text-white">The Trustee for Barran Dodger Legal &amp; Ethical Trust Fund</p>
            </div>
          </div>
        </div>

        {/* Legal structure */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-white">Legal Structure & Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <Landmark className="h-5 w-5" />,
                color: "#84cc16",
                title: "Government-Verified ABN",
                body: `ABN ${ABN} is registered on the Australian Business Register (ABR), operated by the Australian Taxation Office. The registration is publicly verifiable at any time through the official government ABR portal.`,
              },
              {
                icon: <Building2 className="h-5 w-5" />,
                color: "#a78bfa",
                title: "NSW Trustee & Guardian",
                body: "The estate is managed under Section 122(2) certification by NSW Trustee & Guardian — a NSW government agency providing statutory oversight of financial affairs and fiduciary accountability.",
              },
              {
                icon: <Scale className="h-5 w-5" />,
                color: "#60a5fa",
                title: "Properly Constituted Trust",
                body: "The designation 'The Trustee for' confirms this is a properly constituted Australian trust — a formal legal arrangement imposing fiduciary duty and structured governance obligations on the trustee.",
              },
              {
                icon: <Shield className="h-5 w-5" />,
                color: "#f97316",
                title: "ATO Oversight & Compliance",
                body: "ABN registration places the Trust Fund under Australian Taxation Office regulatory compliance requirements, including reporting obligations — a standard of accountability unavailable to unregistered entities.",
              },
            ].map(item => (
              <div key={item.title} className="rounded-xl p-5 space-y-2"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${item.color}20` }}>
                <div className="flex items-center gap-2" style={{ color: item.color }}>
                  {item.icon}
                  <h3 className="text-sm font-bold">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(200,216,240,0.65)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose */}
        <div className="space-y-5">
          <h2 className="text-2xl font-serif font-bold text-white">Purpose & Mandate</h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(200,216,240,0.75)" }}>
            The Trust Fund exists for one purpose: to ensure the survival, continued distribution, and legal
            advancement of the Barran Dodger archive — 3,643 primary-source government documents spanning
            35 years of documented institutional conduct — until formal accountability is achieved.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: <Lock className="h-4 w-4" />,
                color: "#84cc16",
                title: "Physical Safety",
                body: "Dr. McLean is under documented active threat — vigilantes arrested, ASIO surveillance confirmed, NSW Police receipt I88267509 issued. Wider distribution of the archive is the primary mechanism of safety. The Trust funds that distribution.",
              },
              {
                icon: <Globe className="h-4 w-4" />,
                color: "#22c55e",
                title: "Archive Operation & Distribution",
                body: "Server costs, domain registration, CDN, and distribution infrastructure sustaining 1,100,000+ downloads across six continents. The archive is free to access — the Trust funds the infrastructure that makes that possible.",
              },
              {
                icon: <Scale className="h-4 w-4" />,
                color: "#60a5fa",
                title: "Legal Submissions & Proceedings",
                body: "ICC Article 7 submission, OHCHR Case Reference UR/UST/23/AUS/17, Federal Court proceedings, and AAT applications. Each proceeding requires documentation, filing, and compliance costs the Trust funds.",
              },
              {
                icon: <FileText className="h-4 w-4" />,
                color: "#a78bfa",
                title: "Blockchain Preservation",
                body: "The costs associated with Bitcoin blockchain timestamping (Block 897,241), Zenodo DOI registration at CERN, and GitHub mirror maintenance — creating a permanent, multi-layered preservation infrastructure.",
              },
              {
                icon: <Users className="h-4 w-4" />,
                color: "#f97316",
                title: "Witness to the Record",
                body: "Every donor who contributes to the Trust formally witnesses the record. Contributions are documented as an act of acknowledgment — that a life's worth of testimony was produced under documented persecution, and was witnessed.",
              },
            ].map(item => (
              <div key={item.title} className="flex gap-4 rounded-xl px-4 py-3.5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: item.color }}>{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white mb-0.5">{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(200,216,240,0.6)" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Statement of ABN Significance */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(167,139,250,0.25)" }}>
          <div className="px-6 py-4 flex items-center gap-3"
            style={{ background: "rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(167,139,250,0.2)" }}>
            <Sparkles className="h-4 w-4" style={{ color: "#a78bfa" }} />
            <p className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "#a78bfa" }}>
              Impartial AI · Statement of ABN Significance
            </p>
          </div>
          <div className="px-6 py-5 space-y-3 text-sm leading-relaxed"
            style={{ background: "rgba(167,139,250,0.04)", color: "rgba(220,210,255,0.75)" }}>
            <p>
              "The registration of ABN {ABN} on the Australian Business Register represents formal government
              acknowledgment of the Barran Dodger Legal & Ethical Trust Fund as a legitimate legal entity
              operating within Australian law. This is not merely a bureaucratic formality — it establishes:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                { label: "Legal Recognition", text: "The Australian Government has verified and registered this Trust Fund, assigning it a unique identifier in the national business register." },
                { label: "Fiduciary Structure", text: "The designation 'The Trustee for' confirms a properly constituted trust — a legal arrangement providing fiduciary duty and structured governance." },
                { label: "Transparency", text: "Anyone can verify the Trust Fund's existence and status through the official government ABR website — a level of accountability unavailable to unregistered entities." },
                { label: "Legitimacy Under Law", text: "ABN registration means the Trust Fund operates within the Australian legal framework, subject to ATO oversight and regulatory compliance requirements." },
              ].map(p => (
                <li key={p.label} className="flex gap-2">
                  <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: "#a78bfa" }} />
                  <span><strong className="text-purple-200">{p.label}:</strong> {p.text}</span>
                </li>
              ))}
            </ul>
            <p>
              This government registration directly contradicts any suggestion that the Barran Dodger Legal &amp; Ethical
              Trust Fund is illegitimate. The same government that documents persecution has simultaneously verified
              this Trust Fund's legal existence — an irony that speaks to the systemic nature of the documented abuse."
            </p>
          </div>
        </div>

        {/* How to contribute */}
        <div className="space-y-5">
          <h2 className="text-2xl font-serif font-bold text-white">How to Contribute</h2>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(200,216,240,0.6)" }}>
            All contributions are received directly by the Barran Dodger Legal &amp; Ethical Trust Fund
            (ABN {ABN}). No amount is required. No account is needed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* PayPal */}
            <div className="rounded-xl p-5 space-y-3"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(96,165,250,0.2)" }}>
              <div className="flex items-center gap-2" style={{ color: "#60a5fa" }}>
                <Heart className="h-4 w-4" />
                <p className="text-sm font-bold">PayPal</p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(200,216,240,0.55)" }}>
                Direct to the Trust Fund. Any amount. Immediate.
              </p>
              <a href={PAYPAL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(96,165,250,0.15)", border: "1px solid rgba(96,165,250,0.3)", color: "#93c5fd" }}>
                Open PayPal <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* PayID */}
            <div className="rounded-xl p-5 space-y-3"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(132,204,22,0.2)" }}>
              <div className="flex items-center gap-2" style={{ color: "#84cc16" }}>
                <Landmark className="h-4 w-4" />
                <p className="text-sm font-bold">PayID (Bank Transfer)</p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(200,216,240,0.55)" }}>
                Direct bank transfer via Australian PayID.
              </p>
              <div className="rounded-lg px-3 py-2 flex items-center justify-between"
                style={{ background: "rgba(132,204,22,0.08)", border: "1px solid rgba(132,204,22,0.2)" }}>
                <code className="text-xs font-mono" style={{ color: "#84cc16" }}>{PAYID}</code>
                <CopyButton value={PAYID} label="Copy" />
              </div>
            </div>

            {/* Open Collective */}
            <div className="rounded-xl p-5 space-y-3"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(167,139,250,0.2)" }}>
              <div className="flex items-center gap-2" style={{ color: "#a78bfa" }}>
                <Users className="h-4 w-4" />
                <p className="text-sm font-bold">Open Collective</p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(200,216,240,0.55)" }}>
                Full public transparency — every donation and expense visible. Built for trusts and
                non-profits. Ideal for recurring monthly support.
              </p>
              <a href={OPENCOLLECTIVE} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)", color: "#c4b5fd" }}>
                Open Collective <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* ABN copy */}
            <div className="rounded-xl p-5 space-y-3"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(249,115,22,0.2)" }}>
              <div className="flex items-center gap-2" style={{ color: "#f97316" }}>
                <FileText className="h-4 w-4" />
                <p className="text-sm font-bold">ABN for Records</p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(200,216,240,0.55)" }}>
                For accountants, employers, or organisations making a formal contribution — use the
                registered ABN for your records.
              </p>
              <div className="rounded-lg px-3 py-2 flex items-center justify-between"
                style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}>
                <code className="text-sm font-mono font-black" style={{ color: "#f97316" }}>{ABN}</code>
                <CopyButton value={ABN} label="Copy" />
              </div>
            </div>
          </div>

          <p className="text-xs text-center pt-2" style={{ color: "rgba(200,216,240,0.35)" }}>
            Contributions are not tax-deductible in Australia. This is a private trust, not a registered charity (DGR).
            All contributions support the operational and legal costs of the archive.
          </p>
        </div>

        {/* Ethical mandate */}
        <div className="rounded-2xl p-7 space-y-4"
          style={{ background: "linear-gradient(135deg, rgba(132,204,22,0.06) 0%, rgba(16,24,8,0) 100%)", border: "1px solid rgba(132,204,22,0.2)" }}>
          <div className="flex items-start gap-3">
            <Scale className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#84cc16" }} />
            <div className="space-y-3">
              <h3 className="text-lg font-serif font-bold text-white">The Ethical Mandate</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(210,240,180,0.75)" }}>
                This trust is not a fundraising mechanism. It is a legal and ethical structure through which
                the documented persecution of Dr. Richard William McLean — confirmed by the Federal Court,
                lodged with the ICC, registered with OHCHR, and sealed into the Bitcoin blockchain —
                receives the material support necessary to reach its full legal conclusion.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(210,240,180,0.7)" }}>
                Donors do not fund claims. They fund a completed, structured, 3,643-document archive that is
                already built. The infrastructure exists. The submissions are lodged. What is needed is the
                operational capacity to maintain distribution, respond to legal proceedings, and ensure
                Dr. McLean's physical safety for as long as the proceedings require.
              </p>
              <p className="text-sm font-bold" style={{ color: "rgba(210,240,180,0.85)" }}>
                Every contribution is an act of witness. It is formally acknowledged as such.
              </p>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {[
            { href: "/archive", label: "Browse the Archive", color: "#84cc16" },
            { href: "/donate", label: "Full Donation Options", color: "#60a5fa" },
            { href: "/confidential-government-documents", label: "126 Government Documents", color: "#f87171" },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${l.color}22`, color: l.color }}>
              {l.label}
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}
