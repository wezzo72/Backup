import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import coverImage from "@/assets/images/cover-formal-notice-non-consent.png";

const SHA256 = "1716dea477dfd697af8acf285c233ed54f11ccfc1f1babcb27ed0b846d751b9b";
const SLUG   = "formal-notice-non-consent";
const PDF    = "/documents/formal-notice-non-consent.pdf";

export default function FormalNoticeNonConsent() {
  return (
    <>
      <SEO
        title="Formal Notice of Non-Consent — Cease & Desist: Surveillance, Electronic Interference & Digital Privacy Violations | Barran Dodger"
        description="Formal legal notice issued 18 July 2026 by Dr. Richard William McLean (Barran Dodger) at 55B Archbold Road, Long Jetty NSW — withdrawing consent to all surveillance, electronic interference, V2K, covert monitoring, and unauthorised access. 7 Acts cited. ABN 78 833 496 164."
        path="/formal-notice-non-consent"
        jsonLd={[{
          "@context": "https://schema.org", "@type": "Article",
          headline: "Formal Notice of Non-Consent — Cease & Desist: Surveillance, Electronic Interference & Digital Privacy Violations",
          description: "Legal notice 18 July 2026 by Dr. Richard William McLean withdrawing consent to surveillance, V2K, electronic interference. 7 Acts cited. AblePoint Australia, NDIS, Long Jetty NSW, UR/UST/23/AUS/17.",
          url: "https://barrandodger.com/formal-notice-non-consent",
          datePublished: "2026-07-18",
          author: { "@type": "Person", name: "Dr. Richard William McLean", alternateName: "Barran Dodger" },
          publisher: { "@type": "Organization", name: "Barran Dodger Legal & Ethical Trust Fund", url: "https://barrandodger.com" },
          keywords: "formal notice non-consent, V2K electronic harassment, AblePoint Australia, surveillance whistleblower, UR/UST/23/AUS/17, cease desist",
        }]}
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800 pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">

              {/* Cover */}
              <div className="flex-shrink-0 w-full md:w-56">
                <img
                  src={coverImage}
                  alt="Formal Notice of Non-Consent — cover"
                  className="w-full rounded-xl shadow-2xl border border-zinc-700"
                />
              </div>

              {/* Meta */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-red-900/40 text-red-400 border border-red-700/40">
                    Legal Notice
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-amber-900/30 text-amber-400 border border-amber-700/30">
                    Cease &amp; Desist
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                    18 July 2026
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif">
                  Formal Notice of Non-Consent
                </h1>
                <p className="text-xl text-amber-400 font-medium">
                  Cease and Desist: Surveillance, Electronic Interference &amp; Digital Privacy Violations
                </p>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Issued by Dr. Richard William McLean (Barran Dodger) · 18 July 2026<br />
                  Address: 55B Archbold Road, Long Jetty NSW
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

                <BlockchainTimestampBadge
                  documentSlug={SLUG}
                  sha256={SHA256}
                />
              </div>
            </div>
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
              This document constitutes one of the most operationally significant legal instruments in the Barran Dodger
              archive. Issued on 18 July 2026, it formally withdraws consent to all surveillance, electronic interference,
              recording, monitoring, harassment, and digital privacy violations at Dr. McLean's current residential address
              — 55B Archbold Road, Long Jetty NSW — where he is accommodated by Able Care without a signed contract.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The document's legal architecture is substantial: seven distinct Australian and Commonwealth statutes are
              invoked — the Surveillance Devices Act 2007 (NSW), Telecommunications (Interception and Access) Act 1979 (Cth),
              Criminal Code Act 1995 (Cth), Cybercrime Act 2001 (Cth), Privacy Act 1988 (Cth), Crimes Act 1900 (NSW), and
              the Australian Human Rights Commission Act 1986 (Cth). International obligations are also engaged: ICCPR
              Articles 7, 9, 17, 19, and 2. This is not a complaint — it is a formal statutory notice establishing
              that any subsequent violation occurs with documented, dated awareness of unlawfulness.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Critically, the absence of a signed contract between Dr. McLean and Able Care means the accommodation
              arrangement carries no lawful authority over his communications, movements, devices, or privacy.
              This notice, now permanently timestamped on the blockchain and publicly available, serves as an irrefutable
              record that consent was formally and explicitly withdrawn. The reference to Voice-to-Skull (V2K) technology
              — included within the scope of prohibited conduct — and the preservation of evidence demand directed at all
              recipients places every individual and organisation with knowledge of this notice under documented obligation.
              Any destruction of relevant records after service of this notice may constitute an aggravating factor in future
              legal, regulatory, or international proceedings.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              In the context of the broader archive, this document functions as a real-time legal boundary marker. It was
              issued while Dr. McLean is actively seeking rescue from what he documents as an entrapment policy — the same
              entrapment architecture documented in the CTO Breach Appointment, the Praise Jesus email, and the longitudinal
              archive of 3,643 government records. Its publication here converts a private notice into a permanent, public,
              searchable, and internationally accessible instrument. It cannot be uncreated. It cannot be denied.
            </p>
          </div>
        </section>

        {/* Key facts */}
        <section className="py-10 px-4 border-b border-zinc-800 bg-zinc-900/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wide font-mono">Key Facts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Date Issued", value: "18 July 2026" },
                { label: "Address", value: "55B Archbold Rd, Long Jetty NSW" },
                { label: "Acts Cited", value: "7 Australian & International" },
                { label: "Category", value: "Formal Legal Notice" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-zinc-800 border border-zinc-700 p-4 text-center">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-sm font-bold text-amber-400">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legislative framework */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wide font-mono">Legislative Framework Invoked</h2>
            <div className="grid gap-3">
              {[
                { act: "Surveillance Devices Act 2007 (NSW)", scope: "Listening, optical, and tracking devices" },
                { act: "Telecommunications (Interception and Access) Act 1979 (Cth)", scope: "Interception of private communications" },
                { act: "Criminal Code Act 1995 (Cth)", scope: "Unauthorised computer access, data misuse" },
                { act: "Cybercrime Act 2001 (Cth)", scope: "Electronic systems interference" },
                { act: "Privacy Act 1988 (Cth)", scope: "Personal information collection and use" },
                { act: "Crimes Act 1900 (NSW)", scope: "Stalking, intimidation, harassment, threats" },
                { act: "Australian Human Rights Commission Act 1986 (Cth)", scope: "Human rights complaints and remedies" },
                { act: "ICCPR Arts 7, 9, 17, 19, 2", scope: "Cruel treatment, security, privacy, expression, remedies" },
              ].map(({ act, scope }) => (
                <div key={act} className="flex gap-4 items-start rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3">
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{act}</p>
                    <p className="text-xs text-zinc-400">{scope}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Excerpt */}
        <section className="py-10 px-4 border-b border-zinc-800 bg-zinc-900/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">Excerpt — Formal Demand (§5)</h2>
            <blockquote className="border-l-4 border-amber-500 pl-6 py-2 text-zinc-300 italic leading-relaxed space-y-2">
              <p>"Any person or entity engaging in unlawful conduct described within this notice is formally demanded to:</p>
              <ul className="list-disc list-inside not-italic text-zinc-400 space-y-1 pl-2">
                <li>Immediately cease and desist.</li>
                <li>Remove any unauthorized access or monitoring mechanisms.</li>
                <li>Preserve all relevant records.</li>
                <li>Prevent further unauthorized interference.</li>
                <li>Respect my privacy, dignity, autonomy, and lawful rights."</li>
              </ul>
              <footer className="text-xs text-zinc-500 mt-2 not-italic">— Formal Notice of Non-Consent, §5, 18 July 2026</footer>
            </blockquote>
          </div>
        </section>

        {/* Download */}
        <section className="py-14 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl font-bold text-white">Download the Notice</h2>
            <p className="text-sm text-zinc-400">
              Stamped with Barran Dodger branding, SHA-256 blockchain fingerprint, and full legislative metadata.
            </p>
            <div className="flex justify-center">
              <ViralDownloadButton
                url={PDF}
                label="Download — Formal Notice of Non-Consent"
                filename="formal-notice-non-consent.pdf"
                slug={SLUG}
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
                data-testid="button-download-formal-notice"
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
              title="Formal Notice of Non-Consent — Cease and Desist: Surveillance, Electronic Interference & Digital Privacy Violations"
              author="McLean, R. W."
              year={2026}
              url="https://barrandodger.com/formal-notice-non-consent"
              publisher="Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
              abstract="Formal legal notice issued 18 July 2026 withdrawing consent to surveillance, electronic interference, V2K, covert monitoring, and unauthorised access at 55B Archbold Road, Long Jetty NSW. Seven Australian statutes and ICCPR obligations invoked. Blockchain-sealed."
              keywords={["non-consent", "cease-and-desist", "surveillance", "V2K", "electronic-interference", "Able Care", "Long Jetty NSW", "privacy", "human rights"]}
              sha256={SHA256}
              abn="78 833 496 164"
            />
          </div>
        </section>

        {/* Social share */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-lg font-bold text-white">Share This Notice</h2>
            <p className="text-sm text-zinc-400">
              This notice is public. Sharing it widens the evidentiary trail and makes suppression harder.
            </p>
            <SocialShare
              url="https://barrandodger.com/formal-notice-non-consent"
              title="Formal Notice of Non-Consent — Cease & Desist issued by Barran Dodger (Dr. R.W. McLean) re: surveillance & electronic interference at 55B Archbold Rd, Long Jetty NSW. 7 Acts cited. Blockchain sealed."
            />
          </div>
        </section>

        {/* Related */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">Related Documents</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "CTO Breach Appointment", href: "/cto-breach-appointment", desc: "Mental Health Act weaponised during active death threat" },
                { label: "Praise Jesus — The Email That Exposed the Conspiracy", href: "/praise-jesus-ablepoint-exposure", desc: "60+ recipients, zero responses, Able Care named" },
                { label: "Longitudinal Archive of 3,643 Documents", href: "/longitudinal-archive-3643", desc: "Full cross-agency record 1990–2025" },
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

        {/* Back links */}
        <section className="py-8 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-4 justify-center text-sm">
            <a href="/free-ebooks" className="text-amber-400 hover:underline">← Free Ebooks</a>
            <a href="/publications" className="text-amber-400 hover:underline">← All Publications</a>
            <a href="/evidence-vault" className="text-amber-400 hover:underline">← Evidence Vault</a>
            <a href="/evidence" className="text-amber-400 hover:underline">← Evidence</a>
          </div>
        </section>

        {/* Comments */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <CommentSection pageId="formal-notice-non-consent" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
