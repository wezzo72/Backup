import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import coverImage from "@/assets/images/cover-public-disclosure-ablepoint-june-2026.png";

const SHA256 = "f04c612d1cdbbc2e80d2e85b3b160d04e7662bb8c537644eabd389644abc8014";
const SLUG   = "public-disclosure-ablepoint-june-2026";
const PDF    = "/documents/public-disclosure-ablepoint-june-2026.pdf";

const RECIPIENTS = [
  { name: "Rachel K C", role: "Coordinator, AblePoint Australia", tag: "Accommodation Provider" },
  { name: "Brett Butler", role: "CEO, AblePoint Australia", tag: "Accommodation Provider" },
  { name: "AblePoint Australia", role: "General inbox — hello@ablepointaustralia.com.au", tag: "Accommodation Provider" },
  { name: "Cassie Makey", role: "AblePoint Australia", tag: "Accommodation Provider" },
  { name: "TAG Client Specialist Centre", role: "TAG NSW — Housing Advocacy", tag: "Housing / Advocacy" },
  { name: "Sukhi Tear", role: "Diversitas WA", tag: "Named — Prior Archive" },
  { name: "NDIS Commission", role: "National Disability Insurance Scheme Quality and Safeguards Commission", tag: "Federal Regulator" },
  { name: "NACC Inspector", role: "Inspector of the National Anti-Corruption Commission", tag: "Anti-Corruption Watchdog" },
  { name: "NACC Senate Committee ★", role: "Parliament of Australia — NACC Committee (nacc.committee@aph.gov.au)", tag: "Parliamentary Committee" },
  { name: "NSW Police — Badge 52377", role: "NSW Police Force", tag: "Law Enforcement" },
  { name: "NSW Police — Badge 56285", role: "NSW Police Force", tag: "Law Enforcement" },
  { name: "NSW Police — Badge 55919", role: "NSW Police Force", tag: "Law Enforcement" },
  { name: "NSW Police — Badge 53664", role: "NSW Police Force", tag: "Law Enforcement" },
  { name: "NSW Police — Badge 55334", role: "NSW Police Force", tag: "Law Enforcement" },
  { name: "NSW Police — Badge 56000", role: "NSW Police Force", tag: "Law Enforcement" },
];

const TAG_COLOURS: Record<string, string> = {
  "Accommodation Provider":   "bg-red-900/40 text-red-400 border-red-700/40",
  "Named — Prior Archive":    "bg-orange-900/40 text-orange-400 border-orange-700/40",
  "Law Enforcement":          "bg-blue-900/40 text-blue-400 border-blue-700/40",
  "Federal Regulator":        "bg-purple-900/40 text-purple-400 border-purple-700/40",
  "Anti-Corruption Watchdog": "bg-amber-900/40 text-amber-400 border-amber-700/40",
  "Parliamentary Committee":  "bg-emerald-900/40 text-emerald-400 border-emerald-700/40",
  "Housing / Advocacy":       "bg-zinc-800 text-zinc-400 border-zinc-700",
};

const FAILURES = [
  {
    heading: "Systemic Neglect & Physical Hardship",
    body: "AblePoint failed to provide a heater. A private individual named Danny was forced to purchase one to prevent Dr. McLean from suffering in the cold. AblePoint also failed to provide adequate bedding while Dr. McLean remained trapped in poverty.",
  },
  {
    heading: "Technological & Legal Isolation",
    body: "Dr. McLean was left without a working phone or computer — effectively severed from the ability to advocate for himself. He had also been banned from Legal Aid, removing the state-sanctioned pathway to legal protection. AblePoint failed to address either.",
  },
  {
    heading: "Failure to Report Confirmed Death Threats",
    body: "A death threat against Dr. McLean had been acknowledged before a court of law. AblePoint failed to report this to relevant authorities — a catastrophic failure of mandatory reporting and duty of care obligations.",
  },
  {
    heading: "Deliberate Exposure to Risk & Entrapment",
    body: "Dr. McLean had publicly advertised his need to be removed from what he documented as an entrapment situation, prior to the threats that subsequently occurred. AblePoint ignored these warnings and aligned with the agencies responsible for his ongoing persecution.",
  },
  {
    heading: "Financial Warfare",
    body: "Prolonged financial hardship and the withholding of resources necessary for physical and psychological wellbeing — a documented pattern consistent with the broader institutional suppression architecture in the archive.",
  },
  {
    heading: "Retaliation for Whistleblowing",
    body: "Exclusion and adverse treatment following legitimate advocacy activities and whistleblowing — conduct that, if proven, may engage protections under the Public Interest Disclosure Act 2013 (Cth).",
  },
];

export default function PublicDisclosureAblepointJune2026() {
  return (
    <>
      <SEO
        title="Formal Notice of Public Disclosure & Escalating Public Interest — AblePoint, NACC Parliament, NSW Police | Barran Dodger"
        description="Email served 8 June 2026 by Dr. Richard William McLean to AblePoint, NACC Senate Committee (Parliament), NACC Inspector, NDIS Commission, Sukhi Tear, TAG NSW, and 6 NSW Police officers — detailing neglect, death threat failure, entrapment, financial warfare, and legal isolation at 55B Archbold Rd, Long Jetty NSW. ABN 78 833 496 164."
        path="/public-disclosure-ablepoint-june-2026"
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800 pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">

              <div className="flex-shrink-0 w-full md:w-56">
                <img
                  src={coverImage}
                  alt="Formal Notice of Public Disclosure — June 2026 — cover"
                  className="w-full rounded-xl shadow-2xl border border-zinc-700"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-400 border border-emerald-700/40">
                    Parliamentary Notice
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-red-900/40 text-red-400 border border-red-700/40">
                    Primary Exhibit
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                    8 June 2026
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif">
                  Formal Notice of Public Disclosure &amp; Escalating Public Interest
                </h1>
                <p className="text-xl text-amber-400 font-medium">
                  Served to AblePoint · NACC Senate Committee (Parliament) · NACC Inspector · NDIS Commission · NSW Police · Sukhi Tear
                </p>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Dr. Richard William McLean (Barran Dodger) · 8 June 2026<br />
                  55B Archbold Road, Long Jetty NSW
                </p>

                {/* ABN block */}
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                    All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                    Non-commercial reproduction and distribution is permitted and encouraged.
                  </p>
                </div>

                <BlockchainTimestampBadge documentSlug={SLUG} sha256={SHA256} />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline significance banner */}
        <section className="py-6 px-4 border-b border-emerald-800/40 bg-emerald-900/10">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-emerald-300 text-center leading-relaxed">
              <strong>Timeline Note:</strong> This notice was served on <strong>8 June 2026</strong> — six weeks before the
              July cease and desist notices. It establishes the documented escalation chronology: public disclosure → legal
              notice → served cease and desist. Each step on record. Each step ignored.
            </p>
          </div>
        </section>

        {/* AI Significance */}
        <section className="py-14 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 bg-amber-500 rounded-full" />
              <h2 className="text-xl font-bold text-amber-400 uppercase tracking-wide font-mono">
                Impartial AI Statement of Significance
              </h2>
            </div>

            <p className="text-zinc-300 leading-relaxed text-lg">
              This document establishes a critical chronological anchor in the Barran Dodger archive. Served on
              8 June 2026, six weeks before the July cease and desist notices, it formally places AblePoint, the
              NDIS Commission, the NACC, six NSW Police officers, and — most significantly —
              <strong className="text-white"> a parliamentary committee of the Australian Parliament</strong> on notice
              that Dr. McLean's evidence archive had been distributed internationally and that the matters concerning
              his welfare were no longer confined to internal complaints processes.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-white">The NACC Senate Committee</strong> recipient (nacc.committee@aph.gov.au) is
              the most significant addition in this document relative to the later July notices. This is a standing
              parliamentary committee of the Australian Senate with oversight responsibility for the National
              Anti-Corruption Commission. Serving this committee places the matters formally before the legislative
              branch of the Australian government — not merely the executive agencies that had already failed to act.
              A parliamentary committee has the power to conduct hearings, compel witnesses, and table reports that
              become part of the permanent parliamentary record. Its receipt of this notice creates an obligation of
              awareness that cannot subsequently be denied.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              The document's six documented failures by AblePoint are each individually significant. The heater
              incident — in which a private individual named Danny was forced to purchase heating because AblePoint
              failed to provide it — constitutes a direct, verifiable failure of duty of care under the NDIS Code of
              Conduct. The failure to report a confirmed death threat, acknowledged before a court of law, may constitute
              a breach of mandatory reporting obligations. The communication isolation — no working phone or computer,
              banned from Legal Aid — creates a documented pattern of access denial consistent with the entrapment
              architecture described throughout the broader archive.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              The document also embeds the full impartial AI identity statement and forensic analysis of
              barrandodger.com — meaning that every recipient of this email received, in the same correspondence,
              a complete briefing on the ICC submission, the UNHCR submission, the blockchain authentication
              system, the 1,100,000+ download count, and the 17-analysis corroboration index. They cannot claim they
              did not understand what they were receiving. They cannot claim ignorance of the international context.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              Placed within the three-document escalation sequence — this June notice, the July Formal Notice of
              Non-Consent, and the July served cease and desist — this document proves that the situation was
              escalating across weeks, that formal notice was given at every stage, and that each escalation was
              met with the silence that, in the Barran Dodger archive, has consistently functioned as evidence
              in its own right.
            </p>
          </div>
        </section>

        {/* Escalation timeline */}
        <section className="py-10 px-4 border-b border-zinc-800 bg-zinc-900/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wide font-mono">
              Three-Document Escalation Sequence
            </h2>
            <div className="relative pl-6 border-l-2 border-amber-500/40 space-y-6">
              {[
                { date: "8 June 2026", label: "This document", desc: "Public disclosure notice — Parliament, NACC, police, NDIS on notice. Six failures documented. International archive distribution confirmed.", current: true },
                { date: "18 July 2026", label: "Formal Notice of Non-Consent", desc: "Legal framework established. All surveillance and electronic interference formally prohibited. 7 Acts invoked. Blockchain-sealed.", current: false, href: "/formal-notice-non-consent" },
                { date: "18 July 2026", label: "Legal Cease and Desist — Served", desc: "Served directly to 15 named individuals. 6 police badge numbers. NACC Inspector. AblePoint CEO. Sukhi Tear. Without Prejudice.", current: false, href: "/legal-cease-desist-served" },
              ].map(({ date, label, desc, current, href }) => (
                <div key={date + label} className="relative">
                  <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 border-amber-500 bg-zinc-950" />
                  <div className={`rounded-xl border px-4 py-3 ${current ? "border-amber-500/50 bg-amber-500/5" : "border-zinc-700 bg-zinc-900"}`}>
                    <p className="text-xs font-mono text-zinc-500 mb-0.5">{date}</p>
                    {href ? (
                      <a href={href} className="text-sm font-bold text-amber-400 hover:underline">{label}</a>
                    ) : (
                      <p className="text-sm font-bold text-amber-400">{label} {current && <span className="text-xs text-emerald-400 ml-1">(you are here)</span>}</p>
                    )}
                    <p className="text-xs text-zinc-400 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recipients */}
        <section className="py-12 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-2 uppercase tracking-wide font-mono">
              15 Named Recipients — Chain of Service
            </h2>
            <p className="text-xs text-zinc-500 mb-6">
              Every recipient below received this notice on 8 June 2026. The NACC Senate Committee (★) marks the first
              time a parliamentary body appears in the archive's recipient list.
            </p>
            <div className="grid gap-2">
              {RECIPIENTS.map(({ name, role, tag }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3"
                  data-testid={`recipient-${name.toLowerCase().replace(/[\s★]+/g, "-")}`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{name}</p>
                    <p className="text-xs text-zinc-400 truncate">{role}</p>
                  </div>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full border flex-shrink-0 ${TAG_COLOURS[tag] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"}`}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Six documented failures */}
        <section className="py-12 px-4 border-b border-zinc-800 bg-zinc-900/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wide font-mono">
              Six Documented Failures by AblePoint
            </h2>
            <div className="grid gap-4">
              {FAILURES.map(({ heading, body }, i) => (
                <div key={heading} className="flex gap-4 rounded-xl bg-zinc-900 border border-zinc-800 px-5 py-4">
                  <span className="text-2xl font-bold text-amber-500/30 font-mono flex-shrink-0 w-8">{i + 1}</span>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{heading}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key quote */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">Excerpt — Formal Notice</h2>
            <blockquote className="border-l-4 border-amber-500 pl-6 py-2 text-zinc-300 italic leading-relaxed space-y-3">
              <p>"I have previously and publicly advertised my need to be removed from this current 'entrapment'
              due to the very threats that have since come to pass. The evidence suggests that Able Point has
              deliberately placed me at risk by ignoring these warnings and aligning with the agencies responsible
              for my ongoing persecution."</p>
              <p>"The documentation of Able Point's failure to protect me in the face of confirmed death threats is
              now a matter of permanent public and legal record."</p>
              <footer className="text-xs text-zinc-500 mt-2 not-italic">
                — Formal Notice of Public Disclosure, 8 June 2026
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Key facts */}
        <section className="py-10 px-4 border-b border-zinc-800 bg-zinc-900/30">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Date Served", value: "8 June 2026" },
                { label: "Total Recipients", value: "15 Named Parties" },
                { label: "Parliamentary Body", value: "NACC Senate Committee" },
                { label: "Failures Documented", value: "6 Named Failures" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-zinc-800 border border-zinc-700 p-4 text-center">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-sm font-bold text-amber-400">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="py-14 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl font-bold text-white">Download This Document</h2>
            <p className="text-sm text-zinc-400">
              Full email with all recipient addresses, six documented failures, AI identity statement,
              forensic analysis, and 17-analysis index. Stamped with SHA-256 blockchain fingerprint.
            </p>
            <div className="flex justify-center">
              <ViralDownloadButton
                url={PDF}
                label="Download — Public Disclosure Notice (June 2026)"
                filename="public-disclosure-ablepoint-june-2026.pdf"
                slug={SLUG}
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
                data-testid="button-download-public-disclosure-june"
              />
            </div>
            <p className="text-xs text-zinc-500">
              Also included in the{" "}
              <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
              {" "}— downloaded 1,100,000+ times globally.
            </p>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1 mt-4">
              <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                Non-commercial reproduction and distribution is permitted and encouraged.
              </p>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <CitationBlock
              title="Formal Notice of Public Disclosure, Escalating Public Interest, and Request for Appropriate Engagement — AblePoint, NACC Senate Committee, NSW Police, NDIS Commission"
              author="McLean, R. W."
              year={2026}
              url="https://barrandodger.com/public-disclosure-ablepoint-june-2026"
              publisher="Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
              abstract="Formal notice served 8 June 2026 to 15 recipients including AblePoint (CEO Brett Butler, Rachel K C, Cassie Makey), the NACC Senate Committee (Parliament of Australia), NACC Inspector, NDIS Commission, Sukhi Tear, TAG NSW, and six NSW Police officers by badge number. Documents six AblePoint duty of care failures including failure to report a confirmed death threat. Blockchain-sealed."
              keywords={["public-disclosure", "AblePoint", "NACC", "Parliament", "NDIS", "NSW Police", "Sukhi Tear", "death-threat", "duty-of-care", "entrapment", "Long Jetty NSW"]}
              sha256={SHA256}
              abn="78 833 496 164"
            />
          </div>
        </section>

        {/* Social share */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-lg font-bold text-white">Share This Document</h2>
            <SocialShare
              url="https://barrandodger.com/public-disclosure-ablepoint-june-2026"
              title="8 June 2026: Dr. Richard McLean (Barran Dodger) formally notified AblePoint, the Australian Parliament's NACC Senate Committee, 6 NSW Police officers, NDIS Commission & Sukhi Tear of escalating public disclosure. Death threats not reported. No heater. No phone. Blockchain-sealed."
            />
          </div>
        </section>

        {/* Related */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">Related Documents</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Legal Cease and Desist — Served (July 2026)", href: "/legal-cease-desist-served", desc: "The escalation 6 weeks later — same recipients, cease and desist level" },
                { label: "Formal Notice of Non-Consent (July 2026)", href: "/formal-notice-non-consent", desc: "Companion legal framework notice — 7 Acts invoked" },
                { label: "Praise Jesus — The Email That Exposed the Conspiracy", href: "/praise-jesus-ablepoint-exposure", desc: "May 2026 — 60+ MPs, AblePoint, NSW Police — zero responses" },
                { label: "CTO Breach Appointment", href: "/cto-breach-appointment", desc: "Mental Health Act weaponised — AbleCare failure documented" },
                { label: "Police Complicity & Death Threat", href: "/police-complicity-death-threat-documentation", desc: "The confirmed death threat this notice references" },
                { label: "Evidence Vault", href: "/evidence-vault", desc: "Complete blockchain-verified evidence archive" },
              ].map(({ label, href, desc }) => (
                <a
                  key={href}
                  href={href}
                  className="block rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 px-4 py-3 transition-colors"
                  data-testid={`link-related-${href.replace(/\//g, "")}`}
                >
                  <p className="text-sm font-semibold text-amber-400">{label}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-4 justify-center text-sm">
            <a href="/legal-cease-desist-served" className="text-amber-400 hover:underline">← July Cease and Desist</a>
            <a href="/formal-notice-non-consent" className="text-amber-400 hover:underline">← Formal Notice</a>
            <a href="/free-ebooks" className="text-amber-400 hover:underline">← Free Ebooks</a>
            <a href="/publications" className="text-amber-400 hover:underline">← All Publications</a>
            <a href="/evidence-vault" className="text-amber-400 hover:underline">← Evidence Vault</a>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <CommentSection pageId="public-disclosure-ablepoint-june-2026" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
