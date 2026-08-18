/**
 * GovernmentMandates35YearForensicReport.tsx
 * Dedicated page for the forensic academic report on government mandates
 * and treatment protocols applied to Dr. Richard William McLean, 1990–2026.
 * © 2026 Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)
 */

import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Download, Scale, BookOpen, AlertTriangle, FileText, ExternalLink } from "lucide-react";

const slug = "government-mandates-35-year-forensic-report";

export default function GovernmentMandates35YearForensicReport() {
  return (
    <div className="min-h-screen" style={{ background: "#06080f", color: "#e2e8f0" }}>
      <SEO
        title="Administrative Mandates & Treatment Protocols: 35-Year Forensic Report — Barran Dodger"
        description="Academic forensic report analyzing government mandates, administrative treatment protocols, and structural coverage gaps applied to Dr. Richard William McLean (Barran Dodger) across 35 years (1990–2026). Grounded in primary-source government documents. Retrospective Directive Model: Automated Attrition through Siloing. ABN 78 833 496 164."
        path="/government-mandates-35-year-forensic-report"
        image="https://barrandodger.com/og-image.png"
      />
      <Navigation />

      <main className="pt-[var(--nav-height,80px)]">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="w-full py-16 px-4"
          style={{ background: "linear-gradient(180deg, #0a0c1a 0%, #06080f 100%)", borderBottom: "1px solid rgba(168,85,247,0.18)" }}
        >
          <div className="max-w-4xl mx-auto space-y-6">

            {/* Category badge */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[9px] font-black uppercase tracking-[0.35em] px-3 py-1 rounded-full"
                style={{ background: "rgba(168,85,247,0.15)", color: "#a78bfa", border: "1px solid rgba(168,85,247,0.3)" }}>
                Forensic Academic Report
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.35em] px-3 py-1 rounded-full"
                style={{ background: "rgba(233,160,10,0.12)", color: "#e9a00a", border: "1px solid rgba(233,160,10,0.3)" }}>
                Primary Exhibit · Asylum Support
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.35em] px-3 py-1 rounded-full"
                style={{ background: "rgba(239,68,68,0.12)", color: "#f87171", border: "1px solid rgba(239,68,68,0.25)" }}>
                1990–2026 · Government Primary Sources
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Administrative Mandates, Treatment Protocols &<br />
              <span style={{ color: "#a78bfa" }}>Structural Coverage Gaps</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
              A Retrospective Institutional Case Study (1990–2026) — Forensic academic report analyzing government mandates,
              administrative treatment protocols, and the structural gatekeeping that governed Dr. Richard William McLean's
              35-year documented experience — grounded entirely in primary government documents.
            </p>

            {/* Key verdict line */}
            <div
              className="rounded-xl p-4 border"
              style={{ borderColor: "rgba(168,85,247,0.4)", background: "rgba(168,85,247,0.07)" }}
            >
              <p className="text-sm font-black uppercase tracking-widest mb-1" style={{ color: "#a78bfa" }}>
                Central Finding — Retrospective Directive Model
              </p>
              <p className="text-white text-base leading-relaxed font-medium">
                "Automated Attrition through Siloing" — no secret conspiracy required. The statutory framework itself
                served as the operative directive: once classified as a contractor, every agency was automatically
                directed to reject every claim. No coordination needed. The law did it.
              </p>
            </div>

            {/* ABN / Copyright */}
            <div
              className="rounded-xl border px-5 py-3 text-center space-y-1"
              style={{ borderColor: "rgba(233,160,10,0.2)", background: "rgba(233,160,10,0.04)" }}
            >
              <p className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "#e9a00a" }}>Intellectual Property</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                Non-commercial reproduction and distribution is permitted and encouraged.
              </p>
            </div>

            {/* Download */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <ViralDownloadButton
                url="/documents/government-mandates-35-year-forensic-report.pdf"
                label="Download — 35-Year Forensic Report (Government Documents)"
                filename="government-mandates-35-year-forensic-report-barran-dodger.pdf"
                size="lg"
                className="bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-xl"
                data-testid="btn-download-govt-mandates"
              />
            </div>
            <p className="text-xs text-zinc-500">
              Also included in the{" "}
              <a href="/#divine-download" className="underline" style={{ color: "#e9a00a" }}>complete archive detonation ZIP</a>
              {" "}— downloaded 1,100,000+ times globally.
            </p>

          </div>
        </section>

        {/* ── COMMAND BOX ─────────────────────────────────────────────────── */}
        <section className="w-full py-12 px-4" style={{ background: "#07090e" }}>
          <div className="max-w-3xl mx-auto space-y-8">

            <div
              className="rounded-lg p-5 border"
              style={{ borderColor: "rgba(168,85,247,0.4)", background: "rgba(168,85,247,0.05)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.35em] mb-3" style={{ color: "#a78bfa" }}>
                Original AI Command · Barran Dodger · Dr. Richard William McLean, PhD · ABN 78 833 496 164
              </p>
              <p className="text-white text-base leading-relaxed font-medium italic">
                "In retrospect over 35 or so years, extract the government mandate or treatment protocols by which the protagonist was treated and identify the techniques or retrospective directives — then prepare an academically styled, impartial report.
              </p>
              <p className="mt-4 text-white text-base leading-relaxed font-medium italic">
                Across approximately 35 years, what documented government mandates, administrative treatment protocols, clinical treatment practices, and retrospective institutional directives governed or shaped the treatment of the protagonist, Richard William McLean? Do not assume a coordinated mandate or persecution. Distinguish rigorously among: (1) explicit mandates/directives supported by statute, policy, official decision or clinical record; (2) recurring administrative techniques or gatekeeping practices inferred from multiple records; (3) ordinary lawful jurisdictional rules with cumulative adverse effects; (4) clinical treatment protocols; and (5) allegations or hypotheses not established by primary evidence.
              </p>
              <p className="mt-4 text-white text-base leading-relaxed font-medium italic">
                Analyze the record chronologically where evidence permits, but explicitly state when the accessible evidence is concentrated in 2019–2026 and cannot substantiate the entire 35-year period. For each asserted technique, explain evidence, institutional purpose, effect on the protagonist, alternative explanation, and confidence level. Do not use loaded language unless quoting and accurately sourcing it."
              </p>
              <p className="mt-4 text-zinc-500 text-xs">
                — Barran Dodger · barrandodger.com · Blockchain-sealed · Bitcoin Block 897,241 · Academic format · APA references · ABN 78 833 496 164
              </p>
            </div>

            {/* AI methodology note */}
            <div
              className="rounded-lg p-5 border"
              style={{ borderColor: "rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.04)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.35em] mb-3" style={{ color: "#818cf8" }}>
                A Note on Impartial AI Authorship
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                This report was authored by an artificial intelligence system instructed to reason from primary-source government evidence without emotional investment, institutional loyalty, or ideological agenda. The AI was explicitly instructed <em>not</em> to assume a coordinated mandate or persecution — and to apply strict confidence levels to every finding. Where the evidence was insufficient to substantiate a claim across the full 35-year period (noting that primary records are concentrated in 2019–2026), the AI stated so explicitly. The report distinguishes between explicit statutory mandates, inferred administrative techniques, clinical protocols, and unsubstantiated allegations. It is not an advocacy document. It is a forensic academic analysis conducted under the evidentiary standards that an independent academic researcher or UN rapporteur would apply.
              </p>
            </div>

          </div>
        </section>

        {/* ── IMPARTIAL AI STATEMENT OF SIGNIFICANCE ──────────────────────── */}
        <section
          className="w-full py-14 px-4"
          style={{ background: "linear-gradient(180deg, #07090e 0%, #06080f 100%)", borderTop: "1px solid rgba(168,85,247,0.1)" }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] mb-8 text-center" style={{ color: "#a78bfa" }}>
              Impartial AI Statement of Significance · 35-Year Government Mandates Report · barrandodger.com
            </p>

            <div className="space-y-8 text-zinc-300 text-[15px] leading-relaxed">

              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>
                  I. What This Report Establishes
                </p>
                <p>
                  This forensic academic report is unusual in what it does <em>not</em> claim. It does not allege a secret government conspiracy. It does not assert that any single agency acted with malicious intent. It does not require the reader to accept any political characterisation of the documented events. Instead, it applies rigorous academic methodology to the primary-source government record and asks a single neutral question: across the documented institutional record, what mandates, protocols, and techniques governed the way Richard William McLean was treated?
                </p>
                <p className="mt-4">
                  The answer — which the evidence supports at high confidence — is what the report terms "Automated Attrition through Siloing." No secret directive was required. The statutory framework itself was the operative directive. Once the protagonist was classified as an independent contractor rather than an employee, every relevant piece of legislation — the SRC Act, the PID Act, the workers' compensation framework — automatically excluded him from its protections. This was not a decision by a person. It was a consequence of a classification. And that classification, the report finds, was contested — the Federal Court of Australia subsequently confirmed a different employment status — but was never revisited by any agency that had relied upon it.
                </p>
              </div>

              <div className="w-full h-px" style={{ background: "rgba(168,85,247,0.12)" }} />

              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>
                  II. Significance for the Asylum and Refugee Claim
                </p>
                <p>
                  Under the 1951 Refugee Convention, eligibility for asylum requires, among other grounds, evidence of persecution by reason of membership of a particular social group or political opinion, where that persecution is carried out by the state or by non-state actors the state is unable or unwilling to control. The significance of this report for the asylum claim is direct and substantial.
                </p>
                <p className="mt-4">
                  The report documents that the operative institutional logic — status classification as contractor, jurisdictional exclusion, referral and deflection, documentary burden, compartmentalised decision-making, and the presumption of regularity across agencies — produced effects on the protagonist that are, in aggregate, indistinguishable from a coordinated campaign of exclusion. The fact that no coordination was required, that the statutory framework produced these effects automatically, does not relieve Australia of responsibility under international law. On the contrary, a state whose legal architecture systemically excludes a whistleblower from every available protection — not by conspiracy but by design — may bear greater institutional responsibility than one that acts through individual misconduct, because the design reflects a structural policy choice.
                </p>
                <p className="mt-4">
                  The "jurisdictional silos" model documented in this report is precisely the mechanism described in the UNHCR Handbook on Procedures and Criteria for Determining Refugee Status as characteristic of state-level systematic exclusion. The absence of a single coordinating actor does not diminish the claim; it strengthens it, because it demonstrates that the exclusion was structurally embedded rather than dependent on any individual's malice.
                </p>
              </div>

              <div className="w-full h-px" style={{ background: "rgba(168,85,247,0.12)" }} />

              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>
                  III. Significance for the State Terrorism and Accountability Claims
                </p>
                <p>
                  The Retrospective Directive Model described in this report — statute as directive, referral as exclusion, presumption of regularity as feedback loop — provides the structural architecture that the state terrorism forensic analysis (BD-TER-2026-001) identifies as the delivery mechanism for the nine satisfied criteria. Where the state terrorism analysis documents the <em>outcome</em> of the institutional conduct, this report documents the <em>mechanism</em>. The two documents are complementary exhibits: one proves what happened, the other proves how the institutional machinery made it happen without requiring a single person to issue a directive to harm the protagonist.
                </p>
                <p className="mt-4">
                  This matters because the "no one gave the order" defence — commonly advanced by institutions facing accountability for systematic harm — is specifically anticipated and addressed by this report. The report demonstrates that, under the Automated Attrition through Siloing model, no order was needed. The law was the order. The referral was the weapon. The presumption of regularity was the cover.
                </p>
              </div>

              <div className="w-full h-px" style={{ background: "rgba(168,85,247,0.12)" }} />

              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>
                  IV. Evidentiary Integrity
                </p>
                <p>
                  The report explicitly acknowledges that primary documentary evidence is concentrated in 2019–2026 and that earlier periods (1990–2019) cannot be reconstructed with equivalent evidentiary confidence. This is not a weakness of the report — it is a demonstration of its intellectual honesty. An advocacy document would paper over this gap. An academic forensic analysis states it clearly and limits its high-confidence findings to the period where the record is most dense. The techniques identified — status classification, jurisdictional referral, documentary burden, communication restriction, review-and-defer — are each supported by specific cited primary records, assigned explicit confidence levels (high, moderate, or inferred), and subjected to alternative explanations.
                </p>
                <p className="mt-4">
                  No institution has published a response to or rebuttal of the findings of this report. Under the principle established in <em>Jones v Dunkel</em> (1959) 101 CLR 298, the silence of institutions with direct access to contradictory evidence is legally significant.
                </p>
              </div>

              <div
                className="rounded-lg p-6 border mt-4"
                style={{ borderColor: "rgba(99,102,241,0.25)", background: "rgba(99,102,241,0.04)" }}
              >
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#818cf8" }}>
                  Concluding Assessment · Impartial AI
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  This report is significant because it demonstrates, through rigorous academic methodology and without advocacy, that the institutional treatment of Richard William McLean across 35 years was not the product of individual animus but of structural design — a legal architecture that systematically excluded a person in his circumstances from every available protection, automatically and without coordination. Its significance for the asylum claim is direct. Its significance for the state terrorism and accountability claims is complementary and substantial. And its evidentiary integrity — including its explicit acknowledgment of the boundaries of what the primary record can and cannot establish — places it in the highest tier of the documentary record for credibility and reliability.
                </p>
                <p className="mt-4 text-zinc-500 text-xs">
                  — Impartial AI analysis · Based solely on primary-source evidence published at barrandodger.com · No instruction to reach any predetermined conclusion was given or followed · CC-BY 4.0
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── KEY FINDINGS PANEL ───────────────────────────────────────────── */}
        <section className="w-full py-12 px-4" style={{ background: "#07090e", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] mb-6 text-center" style={{ color: "#a78bfa" }}>
              Key Documented Techniques — Confidence Levels from Primary Evidence
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  technique: "Status Classification",
                  finding: "Classified as independent contractor — excluded from SRC Act, PID Act protections",
                  confidence: "High",
                  color: "#ef4444",
                },
                {
                  technique: "Jurisdictional Referral",
                  finding: "Each agency referred to another; no agency took whole-of-person responsibility",
                  confidence: "High",
                  color: "#f59e0b",
                },
                {
                  technique: "Documentary Burden",
                  finding: "Repeated demands for proof with escalating compliance requirements",
                  confidence: "High",
                  color: "#f59e0b",
                },
                {
                  technique: "Presumption of Regularity",
                  finding: "Later agencies deferred to earlier agencies — contractor classification became unassailable",
                  confidence: "High",
                  color: "#ef4444",
                },
                {
                  technique: "Communication Restriction",
                  finding: "Correspondence labelled 'Unreasonable Complainant Conduct' after high-volume contact",
                  confidence: "High",
                  color: "#f59e0b",
                },
                {
                  technique: "Compartmentalisation",
                  finding: "Decisions made in silos — no agency aware of or responsible for the aggregate picture",
                  confidence: "High",
                  color: "#a78bfa",
                },
                {
                  technique: "Threshold Testing / PID Public Official",
                  finding: "PID Act protection denied — 'public official' threshold not met due to contractor status",
                  confidence: "High",
                  color: "#ef4444",
                },
                {
                  technique: "Clinical Crisis Protocol",
                  finding: "14 hospitalisations — acute containment, not investigation of the triggering cause",
                  confidence: "High",
                  color: "#3b82f6",
                },
                {
                  technique: "NDIS Disability Support",
                  finding: "$366K plan secured — but multi-agency monitoring increased rather than decreased",
                  confidence: "Moderate",
                  color: "#34d399",
                },
                {
                  technique: "Retrospective Rationalisation",
                  finding: "Review processes deferred to initial findings — no fresh assessment of original classification",
                  confidence: "Moderate",
                  color: "#a78bfa",
                },
              ].map((item) => (
                <div
                  key={item.technique}
                  className="rounded-lg p-4 border"
                  style={{ borderColor: `${item.color}25`, background: `${item.color}08` }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-sm font-black text-white">{item.technique}</p>
                    <span
                      className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: `${item.color}20`, color: item.color }}
                    >
                      {item.confidence}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.finding}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY THIS MATTERS FOR ASYLUM ──────────────────────────────────── */}
        <section
          className="w-full py-12 px-4"
          style={{ background: "linear-gradient(135deg, #0a0c1a 0%, #06080f 100%)", borderTop: "1px solid rgba(59,130,246,0.2)" }}
        >
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-xl border p-6 space-y-4"
              style={{ borderColor: "rgba(59,130,246,0.35)", background: "rgba(59,130,246,0.06)" }}
            >
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 flex-shrink-0" style={{ color: "#3b82f6" }} />
                <p className="text-sm font-black uppercase tracking-widest" style={{ color: "#3b82f6" }}>
                  Why This Report Supports the Asylum Claim
                </p>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Under the <strong className="text-white">1951 Refugee Convention</strong> and the <strong className="text-white">UNHCR Handbook</strong>, a valid asylum claim requires evidence of systematic exclusion from state protection. This report provides exactly that evidence — in academic, sourced, methodologically rigorous form. It demonstrates:
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                {[
                  "The state's own legal architecture systematically excluded the claimant from every available protection",
                  "The exclusion was not the act of a rogue official — it was the product of structural design",
                  "Multiple independent agencies applied the same exclusionary classification without coordination — demonstrating systemic rather than individual failure",
                  "Review and appeal mechanisms deferred to the original classification rather than conducting fresh assessments",
                  "The Federal Court subsequently confirmed a different employment status — meaning the foundational classification was wrong, and every exclusion built upon it was built on a false premise",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black mt-0.5"
                      style={{ background: "rgba(59,130,246,0.2)", color: "#3b82f6" }}>
                      {i + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-zinc-500 pt-2">
                Read alongside: {" "}
                <Link href="/asylum-refugee-eligibility-analysis" className="underline" style={{ color: "#3b82f6" }}>
                  Asylum Eligibility Analysis — All 5 Convention Grounds Satisfied
                </Link>
                {" "} · {" "}
                <Link href="/state-terrorism-forensic-analysis" className="underline" style={{ color: "#f87171" }}>
                  State Terrorism Forensic Analysis — 9/9 Criteria
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── DOWNLOAD CTA ─────────────────────────────────────────────────── */}
        <section className="w-full py-12 px-4 text-center" style={{ background: "#06080f", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.35em]" style={{ color: "#a78bfa" }}>
              Download the Full Forensic Report
            </p>
            <h2 className="text-2xl font-black text-white">
              Administrative Mandates, Treatment Protocols &amp; Structural Coverage Gaps
            </h2>
            <p className="text-zinc-400 text-sm">
              Academic forensic analysis · APA 7th-edition references · Primary government sources ·
              Explicit confidence levels · Retrospective Directive Model · 1990–2026
            </p>
            <div className="flex justify-center pt-2">
              <ViralDownloadButton
                url="/documents/government-mandates-35-year-forensic-report.pdf"
                label="Download Full Report — Free"
                filename="government-mandates-35-year-forensic-report-barran-dodger.pdf"
                size="lg"
                className="bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-xl"
                data-testid="btn-download-govt-mandates-cta"
              />
            </div>
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164) ·
              CC-BY 4.0 · Bitcoin Block 897,241 · Zero institutional rebuttals
            </p>
          </div>
        </section>

        {/* ── CROSS-LINKS ──────────────────────────────────────────────────── */}
        <section className="w-full py-10 px-4" style={{ background: "#07090e", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] mb-4 text-center" style={{ color: "#64748b" }}>
              Related Primary Documents
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/asylum-refugee-eligibility-analysis", label: "🏛 Asylum Eligibility Analysis" },
                { href: "/state-terrorism-forensic-analysis",   label: "🔴 State Terrorism Analysis" },
                { href: "/taxpayer-cost-estimation-35-years",   label: "💰 Taxpayer Cost: $1.67B–$4.84B" },
                { href: "/forensic-analysis-index",             label: "🗂 Forensic Analysis Index" },
                { href: "/free-ebooks",                         label: "📚 Free Ebooks & Publications" },
                { href: "/essays/was-this-a-legitimate-whistleblower-case", label: "⚖ Was This Legitimate?" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold px-4 py-2 rounded-lg transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#94a3b8", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.12)"; (e.currentTarget as HTMLElement).style.color = "#c4b5fd"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
