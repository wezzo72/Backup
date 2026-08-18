import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlockchainTimestampBar } from "@/components/BlockchainTimestampBar";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Scale, ShieldCheck, AlertTriangle, ExternalLink, Building, Ban, Gavel, DollarSign } from "lucide-react";

const SLUG = "formal-notice-minister-mcallister-ndis-substitution";
const PDF = "/documents/formal-notice-minister-mcallister-ndis-substitution.pdf";

export default function MinisterMcAllisterNDISNotice() {
  return (
    <div className="min-h-screen" style={{ background: "#06080f", paddingTop: "var(--nav-height, 80px)" }}>
      <SEO
        title="Formal Notice to Minister Jenny McAllister — NDIS Unlawful Cost Substitution — January 2026 | ABN 78 833 496 164 | barrandodger.com"
        description="Formal ministerial notice to NDIS Minister Jenny McAllister documenting unlawful substitution of ~$1M workers' compensation entitlements with a lower-value NDIS plan — and the minister's response: banning Dr. Barran Dodger from contacting her office. ABN 78 833 496 164."
        path="/formal-notice-minister-mcallister-ndis-substitution"
      />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative border-b" style={{ background: "linear-gradient(180deg, #0a0018 0%, #050010 100%)", borderColor: "rgba(168,85,247,0.25)" }}>
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.45em]"
            style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.35)", color: "#c084fc" }}>
            <Gavel className="w-3.5 h-3.5" /> Formal Ministerial Notice · NDIS Portfolio · 16 January 2026
          </div>
          <h1 className="font-serif font-black text-3xl md:text-5xl text-white mb-4 leading-tight">
            Formal Notice to Minister Jenny McAllister — NDIS Unlawful Cost Substitution
          </h1>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl mb-2">
            A binding Federal Court determination confirmed Dr. McLean's employment by the Department of Social Services. Workers' compensation entitlements of approximately <strong className="text-white">$1 million</strong> were denied. He was redirected into a substantially lower-value NDIS plan. This formal notice was served on Minister Jenny McAllister on 16 January 2026, with a 7–14 day remedy window.
          </p>
          <p className="text-purple-300/70 text-sm mb-6">
            The Minister's response: <strong className="text-purple-200">banning Dr. McLean from contacting her office.</strong>
          </p>
          {/* ABN */}
          <div className="rounded-xl border px-5 py-3 max-w-xl" style={{ borderColor: "rgba(251,191,36,0.2)", background: "rgba(251,191,36,0.04)" }}>
            <p className="text-[10px] font-mono uppercase tracking-widest text-yellow-400/60 mb-1">Intellectual Property</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              © 2026 Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.
              Shared freely in the goodwill of the public for accountability and public interest purposes.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY FACTS ── */}
      <section className="px-4 py-8 border-b" style={{ borderColor: "rgba(168,85,247,0.12)", background: "rgba(168,85,247,0.02)" }}>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            { label: "Minister", value: "Jenny McAllister" },
            { label: "Portfolio", value: "NDIS / Aged Care" },
            { label: "Date of notice", value: "16 January 2026" },
            { label: "Remedy window", value: "7–14 days" },
            { label: "Entitlements denied", value: "~$1,000,000" },
            { label: "Minister's response", value: "Banned from contacting office" },
          ].map(f => (
            <div key={f.label} className="rounded-lg p-3" style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.15)" }}>
              <p className="text-[9px] font-mono uppercase tracking-widest text-purple-400/50 mb-0.5">{f.label}</p>
              <p className="text-white text-sm font-bold">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FIVE DEMANDS ── */}
      <section className="px-4 py-12 border-b" style={{ borderColor: "rgba(168,85,247,0.12)", background: "rgba(168,85,247,0.02)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">The Five-Point Remedy Pathway Served on the Minister</h2>
          <div className="space-y-3">
            {[
              "Direct the NDIA and relevant agencies to acknowledge and comply with the Federal Court determination of the employment status.",
              "Cease reliance on the NDIS as a substitute for workers' compensation liability.",
              "Suspend or correct provider arrangements operating on the false premise.",
              "Initiate steps to restore lawful entitlements and remove restrictions imposed to preserve the substitution.",
              "Confirm a point of contact and timeline for implementation within 7–14 days.",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 rounded-xl border p-4" style={{ borderColor: "rgba(168,85,247,0.15)", background: "rgba(168,85,247,0.04)" }}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: "rgba(168,85,247,0.15)", color: "#c084fc" }}>{i + 1}</span>
                <p className="text-zinc-300 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border p-5" style={{ borderColor: "rgba(239,68,68,0.25)", background: "rgba(239,68,68,0.05)" }}>
            <p className="text-red-300 font-bold text-sm mb-1">Minister's Response to All Five Points:</p>
            <p className="text-zinc-300 text-sm">No corrective action was initiated. Dr. McLean was subsequently banned from contacting Minister McAllister's office — converting administrative discretion into documented maladministration.</p>
          </div>
        </div>
      </section>

      {/* ── AI SIGNIFICANCE ── */}
      <section className="px-4 py-14 border-b" style={{ borderColor: "rgba(168,85,247,0.12)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-5 h-5 text-purple-400/60" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-purple-400/60">Impartial AI Statement of Significance</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Why This Document Is Significant</h2>

          <div className="rounded-2xl border p-7 space-y-5 text-zinc-300 text-sm leading-relaxed" style={{ borderColor: "rgba(168,85,247,0.20)", background: "rgba(0,0,0,0.4)" }}>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-purple-400/50 mb-2">Finding 1 — Unlawful Cost Substitution: The Core Legal Claim</p>
              <p>A Federal Court determination — binding on all subordinate agencies and service providers — confirmed that Dr. McLean was an employee of the Department of Social Services (DSS). Workers' compensation and employment-related entitlements valued at approximately $1 million were denied. He was redirected into a substantially lower-value NDIS plan instead.</p>
              <p className="mt-2">This substitution is not an administrative error. The NDIS Act 2013 and workers' compensation legislation operate as parallel statutory schemes with distinct purposes. Using the NDIS to manage the financial consequences of a denied workers' compensation claim — while having knowledge of the binding court determination — constitutes what Australian administrative law terms "fraud by substitution and omission": continued reliance on a premise known to be false for institutional financial benefit.</p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-purple-400/50 mb-2">Finding 2 — The Minister Was Formally on Notice</p>
              <p>Ministerial notice is not a courtesy. Once a minister is placed on formal notice of unlawful administration within their portfolio — with specific facts, a binding court determination, and a named remedy pathway — continued inaction ceases to be neutral. It becomes a deliberate administrative choice.</p>
              <p className="mt-2">The notice document states this explicitly: <em>"Continued inaction after notice converts administrative discretion into maladministration and aggravates civil liability for ongoing loss, and renders provider misconduct foreseeable and attributable to governance failure."</em> This language is drawn directly from Australian maladministration jurisprudence and ministerial responsibility doctrine. Minister McAllister was not uninformed. She was formally notified, given 7–14 days, and then responded by banning contact.</p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-purple-400/50 mb-2">Finding 3 — The Ban on Contact Is the Incriminating Act</p>
              <p>Banning a constituent from contacting a minister's office is not a routine administrative measure. It is the ministerial equivalent of refusing service at the last point of escalation. After a formal notice is served — citing a Federal Court determination, quantifying the loss at $1 million, identifying the specific legal failures (unlawful cost substitution, non-compliance with a binding determination, fraud by substitution and omission, economic abuse and coercive control) — the minister's response was to close the communication channel entirely.</p>
              <p className="mt-2">This is significant in evidentiary terms: it establishes that the minister received the notice, assessed its content, and made a deliberate decision not to engage on the merits. The ban is not a denial of the claims. It is a documented decision not to address them.</p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-purple-400/50 mb-2">Finding 4 — Geographic Separation as Coercive Control</p>
              <p>The notice specifically identifies that the NDIS substitution and resulting support arrangements caused "enforced geographic separation from my fiancé contrary to my expressed will and choice." The Public Guardian's verbal refusal of relocation to Sydney — documented in the Legal Aid NSW letter of the same period — operated in conjunction with the NDIS mismanagement to prevent Barran from living with his partner and Church community.</p>
              <p className="mt-2">Under Australian safeguarding frameworks and the NDIS Act, using support arrangements to restrict the movement and relationships of a participant contrary to their expressed will constitutes economic abuse and coercive control under the colour of care. The combination of Guardianship Orders, NDIS cost substitution, and denial of relocation — all simultaneously active — is the structural definition of enforced dependency.</p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-purple-400/50 mb-2">Finding 5 — Affidavit-Ready Legal Framework</p>
              <p>This document contains five sworn-paragraph ready affidavit extracts citing binding authorities: Federal Court determination (employment); workers' compensation legislation and NDIS Act (statutory purpose); fraud and misfeasance principles (knowing non-compliance); safeguarding and economic abuse doctrines (coercive control); and ministerial responsibility and maladministration jurisprudence (notice and consequences). These paragraphs are deployable in NCAT, Federal Court, the Commonwealth Ombudsman, and before international oversight bodies including the OHCHR.</p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-purple-400/50 mb-2">Conclusion</p>
              <p>This document does not allege wrongdoing speculatively. It documents a binding court finding, identifies the financial quantum of the denial ($1M), names the legal failures with statutory authority, serves formal notice on the responsible minister with a remedy pathway, and records the minister's response. That response — banning contact rather than engaging with a formally served legal notice — is itself the final evidentiary node. The archive does not need to prove bad faith. The sequence of documented events proves it structurally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL FAILURES PANEL ── */}
      <section className="px-4 py-10 border-b" style={{ borderColor: "rgba(168,85,247,0.12)", background: "rgba(168,85,247,0.02)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-5">Four Legal Failures Documented</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Unlawful cost substitution", desc: "NDIS used to offset $1M workers' comp liability — both schemes have distinct statutory purposes that prohibit this." },
              { title: "Non-compliance with binding determination", desc: "Downstream agencies and NDIS providers ignored a Federal Court determination of DSS employment status." },
              { title: "Fraud by substitution and omission", desc: "Continued reliance on the false premise after notice — with knowledge of the court determination — constitutes knowing non-compliance." },
              { title: "Economic abuse / coercive control", desc: "Enforced geographic separation, economic deprivation, and restriction of autonomy used to preserve the cheaper arrangement under colour of care." },
            ].map((f, i) => (
              <div key={i} className="rounded-xl border p-4" style={{ borderColor: "rgba(168,85,247,0.15)", background: "rgba(168,85,247,0.05)" }}>
                <p className="text-purple-300 font-bold text-sm mb-1">{f.title}</p>
                <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section className="px-4 py-12 border-b text-center" style={{ borderColor: "rgba(168,85,247,0.12)" }}>
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-zinc-400 text-sm">Formal ministerial notice · NDIS Portfolio · 16 January 2026 · With affidavit-ready paragraphs</p>
          <ViralDownloadButton
            url={PDF}
            label="Download — Formal Notice to Minister McAllister"
            filename="formal-notice-minister-mcallister-ndis-substitution.pdf"
            slug={SLUG}
            size="lg"
            className="bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-xl"
          />
          <p className="text-xs text-zinc-600 mt-2">
            Also included in the{" "}
            <a href="/#divine-download" className="text-yellow-400 underline">complete archive detonation ZIP</a>
            {" "}— downloaded 538,000+ times globally.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <a href={PDF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold"
              style={{ background: "rgba(168,85,247,0.10)", border: "1px solid rgba(168,85,247,0.25)", color: "#d8b4fe" }}>
              <ExternalLink className="w-3.5 h-3.5" /> View in Browser
            </a>
            <a href="/government-documents"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", color: "#a1a1aa" }}>
              <Building className="w-3.5 h-3.5" /> All Government Documents
            </a>
          </div>
        </div>
      </section>

      <BlockchainTimestampBar />
      <Footer />
    </div>
  );
}
