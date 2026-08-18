import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import coverImage from "@/assets/images/cover-ablepoint-blocking-court-may-2026.png";

const SHA256 = "3090135c768ea2201c4096ef56f878c6562db4ca7edad2802490f9a5db164468";
const SLUG   = "ablepoint-blocking-court-may-2026";
const PDF    = "/documents/ablepoint-blocking-court-may-2026.pdf";

type Recipient = { name: string; role: string; tag: string };

const RECIPIENTS_ABLEPOINT: Recipient[] = [
  { name: "Brett Butler", role: "CEO, AblePoint Australia", tag: "Accommodation Provider" },
  { name: "Rachel K C", role: "Coordinator, AblePoint Australia", tag: "Accommodation Provider" },
  { name: "AblePoint Australia", role: "General inbox", tag: "Accommodation Provider" },
  { name: "TAG Client Specialist Centre", role: "TAG NSW — Housing Advocacy", tag: "Housing / Advocacy" },
  { name: "Sukhi Tear", role: "Diversitas WA", tag: "Named — Prior Archive" },
  { name: "NDIS Commission (×2)", role: "ContactCentre + CSC inboxes", tag: "Federal Regulator" },
];

const RECIPIENTS_PARLIAMENT: Recipient[] = [
  { name: "Anthony Albanese MP ★", role: "Prime Minister of Australia", tag: "Prime Minister" },
  { name: "Bill Shorten MP ★", role: "NDIS Minister", tag: "NDIS Minister" },
  { name: "Mark Dreyfus MP ★", role: "Attorney-General of Australia", tag: "Attorney-General" },
  { name: "Scott Morrison MP ★", role: "Former Prime Minister", tag: "Former PM" },
  { name: "Adam Bandt MP", role: "Leader of the Australian Greens", tag: "Party Leader" },
  { name: "Barnaby Joyce MP", role: "Former Deputy Prime Minister", tag: "Senior MP" },
  { name: "Tanya Plibersek MP", role: "Minister for Environment", tag: "Cabinet Minister" },
  { name: "Josh Frydenberg MP", role: "Former Treasurer", tag: "Senior MP" },
  { name: "Greg Hunt MP", role: "Former Health Minister", tag: "Senior MP" },
  { name: "Linda Burney MP", role: "Minister for Indigenous Australians", tag: "Cabinet Minister" },
  { name: "Emma McBride MP", role: "MP, Dobell (Central Coast)", tag: "Local MP" },
  { name: "Mike Freelander MP", role: "MP, Macarthur", tag: "Local MP" },
  { name: "Andrew Leigh MP + 35 additional Federal MPs", role: "Full cross-party distribution", tag: "Federal Parliament" },
];

const RECIPIENTS_POLICE: Recipient[] = [
  { name: "NSW Police (general)", role: "police.nsw@police.nsw.gov.au + police@police.nsw.gov.au", tag: "NSW Police" },
  { name: "NSW Police — Badge 52377", role: "Individual officer — personal service", tag: "NSW Police" },
  { name: "NSW Police — Badge 56285", role: "Individual officer — personal service", tag: "NSW Police" },
  { name: "NSW Police — Badge 55919", role: "Individual officer — personal service", tag: "NSW Police" },
  { name: "Victoria Police Professional Standards", role: "psc-policeconductunitcomplaintsandcompliments@police.vic.gov.au", tag: "Victoria Police" },
  { name: "Queensland Police Link", role: "policelink@police.qld.gov.au", tag: "QLD Police" },
];

const RECIPIENTS_COURTS_LEGAL: Recipient[] = [
  { name: "Wyong Local Court ★", role: "local-court-wyong@justice.nsw.gov.au — venue of the hearing itself", tag: "The Court" },
  { name: "Community Legal Centres NSW", role: "clcnsw@clcnsw.org.au", tag: "Legal Centre" },
  { name: "Central Coast Community Legal Centre", role: "contact@centralcoastclc.org.au", tag: "Legal Centre" },
  { name: "Inner Sydney Disability Representation", role: "intakejas@idrs.org.au", tag: "Legal Centre" },
  { name: "Wyong & Gosford Legal Centres", role: "wyonglcp@ccdvcas.org.au · gosfordlcp@ccdvcas.org.au", tag: "Legal Centre" },
];

const RECIPIENTS_MEDIA_ADVOCACY: Recipient[] = [
  { name: "Crikey ★", role: "hello@crikey.com.au — investigative journalism", tag: "Media" },
  { name: "Rachel Green — SANE Australia CEO", role: "Peak mental health advocacy organisation", tag: "Advocacy" },
];

const TAG_COLOURS: Record<string, string> = {
  "Prime Minister":         "bg-yellow-900/50 text-yellow-300 border-yellow-600/50",
  "Attorney-General":       "bg-yellow-900/40 text-yellow-400 border-yellow-700/40",
  "NDIS Minister":          "bg-yellow-900/40 text-yellow-400 border-yellow-700/40",
  "Former PM":              "bg-yellow-900/30 text-yellow-500 border-yellow-800/30",
  "Party Leader":           "bg-green-900/40 text-green-400 border-green-700/40",
  "Cabinet Minister":       "bg-amber-900/40 text-amber-400 border-amber-700/40",
  "Senior MP":              "bg-amber-900/30 text-amber-500 border-amber-800/30",
  "Local MP":               "bg-amber-900/20 text-amber-600 border-amber-900/20",
  "Federal Parliament":     "bg-amber-900/20 text-amber-600 border-amber-900/20",
  "Accommodation Provider": "bg-red-900/40 text-red-400 border-red-700/40",
  "Named — Prior Archive":  "bg-orange-900/40 text-orange-400 border-orange-700/40",
  "Federal Regulator":      "bg-purple-900/40 text-purple-400 border-purple-700/40",
  "Housing / Advocacy":     "bg-zinc-800 text-zinc-400 border-zinc-700",
  "NSW Police":             "bg-blue-900/40 text-blue-400 border-blue-700/40",
  "Victoria Police":        "bg-blue-900/30 text-blue-500 border-blue-800/30",
  "QLD Police":             "bg-blue-900/30 text-blue-500 border-blue-800/30",
  "The Court":              "bg-emerald-900/50 text-emerald-300 border-emerald-600/50",
  "Legal Centre":           "bg-emerald-900/30 text-emerald-500 border-emerald-800/30",
  "Media":                  "bg-pink-900/40 text-pink-400 border-pink-700/40",
  "Advocacy":               "bg-zinc-700 text-zinc-300 border-zinc-600",
};

function RecipientRow({ r }: { r: Recipient }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3">
      <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white truncate">{r.name}</p>
        <p className="text-xs text-zinc-400 truncate">{r.role}</p>
      </div>
      <span className={`text-xs font-mono px-2 py-0.5 rounded-full border flex-shrink-0 ${TAG_COLOURS[r.tag] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"}`}>
        {r.tag}
      </span>
    </div>
  );
}

export default function AblepointBlockingCourtMay2026() {
  return (
    <>
      <SEO
        title="AblePoint Blocking Court Attendance — Wyong Hearing Morning — PM Albanese, Attorney-General Dreyfus, 50+ MPs Notified | Barran Dodger"
        description="Email sent 7:43 AM on 14 May 2026 — the morning of Tory's Wyong death-threat court hearing — notifying PM Albanese, AG Dreyfus, Bill Shorten, 50+ Federal MPs, Wyong Local Court, Crikey, and NSW/VIC/QLD Police that AblePoint was blocking Dr. McLean from attending. ABN 78 833 496 164."
        path="/ablepoint-blocking-court-may-2026"
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-red-950/30 to-zinc-950 border-b border-red-900/30 pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-shrink-0 w-full md:w-56">
                <img
                  src={coverImage}
                  alt="AblePoint Blocking Court — May 2026 — cover"
                  className="w-full rounded-xl shadow-2xl border border-red-900/40"
                />
              </div>

              <div className="flex-1 space-y-4">
                {/* Urgent timestamp */}
                <div className="inline-flex items-center gap-2 rounded-lg bg-red-900/30 border border-red-700/40 px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-bold text-red-400 font-mono">SENT 7:43 AM · 14 MAY 2026 · DAY OF HEARING</span>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-900/40 text-yellow-400 border border-yellow-700/40">
                    PM Albanese Notified
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-400 border border-emerald-700/40">
                    Court Itself Notified
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-pink-900/40 text-pink-400 border border-pink-700/40">
                    Crikey Notified
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif">
                  AblePoint Blocking Court Attendance
                </h1>
                <p className="text-xl text-amber-400 font-medium">
                  Wyong Hearing — Tory Death Threat Case — 14 May 2026
                </p>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Dr. Richard William McLean (Barran Dodger) · 14 May 2026, 7:43 AM<br />
                  ~80 recipients · Prime Minister to Wyong Local Court
                </p>

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
              This document is the most urgent and time-sensitive in the series of AblePoint notices. It was sent at
              <strong className="text-white"> 7:43 AM on 14 May 2026</strong> — the morning of the Wyong Local Court
              hearing for Tory, the individual who had threatened to kill Dr. McLean. The email explicitly states that
              Dr. McLean had told every AblePoint staff member he wished to attend, and explicitly predicts — as a
              documented forecast — that no staff member would take him. "Prove me wrong," the email says. That
              prediction is now a timestamped, blockchain-sealed fact that either was or was not disproved.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-white">The Prime Minister of Australia, Anthony Albanese</strong>, received this email.
              So did <strong className="text-white">Attorney-General Mark Dreyfus</strong>,
              <strong className="text-white"> NDIS Minister Bill Shorten</strong>,
              former Prime Minister <strong className="text-white">Scott Morrison</strong>,
              former Deputy Prime Minister <strong className="text-white">Barnaby Joyce</strong>, and
              Greens leader <strong className="text-white">Adam Bandt</strong> — alongside more than 50 other Federal
              Members of Parliament spanning both major parties, the Greens, and independents. This is not a
              scatter-gun distribution. It is a documented notification to the entirety of the Commonwealth legislature
              that a disability support participant was being prevented from attending a court hearing into a confirmed
              threat against his life.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-white">Wyong Local Court itself</strong>
              (local-court-wyong@justice.nsw.gov.au) received this email. The venue of the hearing — the institution
              before which Tory was appearing — was informed, before that hearing began, that the victim was being
              blocked from attending by his disability support provider. This is forensically extraordinary: the court's
              own inbox holds a timestamped record of the obstruction.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-white">Crikey</strong> — Australia's foremost investigative journalism platform,
              known for breaking accountability stories that mainstream media decline to pursue — received this email at
              its editorial address. The SANE Australia CEO, the peak national mental health advocacy organisation, was
              also notified. Three police forces were contacted: NSW Police (general and individual badge numbers), the
              Victoria Police Professional Standards Command, and Queensland Police Link. Interstate police forces
              receiving notification of an intra-state disability obstruction reflects the documented pattern of Dr.
              McLean's attempts to reach any institution willing to act.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              The document's core accusation is threefold: AblePoint first ignored the death threat, then — after Tory's
              arrest — refused to report it, and was now trying to cover its knowledge of it by preventing Dr. McLean
              from attending the court hearing. The phrase "There is now no escape for able point and every staff member"
              is not rhetoric. It is a statement of evidentiary reality. The email is timestamped. The hearing date is
              documented. The recipient list is preserved. The prediction is recorded. Whatever happened at Wyong Local
              Court on 14 May 2026, this document proves that the sitting Prime Minister, the Attorney-General, the NDIS
              Minister, the court itself, and Australia's primary investigative media outlet all had notice of what was
              alleged to be happening, at 7:43 AM that morning.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              Within the broader escalation sequence — the June 8 public disclosure, the July 18 non-consent notice,
              and the July 18 served cease and desist — this May 14 document is the earliest and most acute. It was not
              a prospective legal warning. It was a real-time emergency notification sent at the moment the obstruction
              was occurring, to the highest levels of government available.
            </p>
          </div>
        </section>

        {/* The email verbatim */}
        <section className="py-10 px-4 border-b border-zinc-800 bg-zinc-900/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">
              The Email — Verbatim (7:43 AM, 14 May 2026)
            </h2>
            <blockquote className="border-l-4 border-red-500 pl-6 py-2 text-zinc-300 italic leading-relaxed space-y-3 text-sm">
              <p>"I have told every staff member I want to be present at the court mention / hearing for Tory inborn and his pleading guilty/not guilty today at Wyong court at 9.30.</p>
              <p>But because able point first ignored the death threat, until it appeared, refused to report it despite an arrest, and are trying to cover their knowledge of it, I am predicting that no staff member will take me to attend court at 9.30.</p>
              <p>This is reprehensible and it will be noted when predictably no one turns up.</p>
              <p><strong className="text-white not-italic">This is on the record. Permanently.</strong></p>
              <p>There is now no escape for able point and every staff member.</p>
              <p>Prove me wrong and get a staff member to drive me there at 9.30 otherwise able points reputation will be even more publically disgraced.</p>
              <p>You've entrapped me to danger across two properties now, and denied me the right to attend a threat to kill I rightly predicted and then left me vulnerable before, then, now, and into the future."</p>
              <footer className="text-xs text-zinc-500 mt-2 not-italic">— Dr. Richard William McLean (Barran Dodger), 7:43 AM, 14 May 2026</footer>
            </blockquote>
          </div>
        </section>

        {/* Key facts */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Time Sent", value: "7:43 AM" },
                { label: "Date", value: "14 May 2026 — Day of Hearing" },
                { label: "Total Recipients", value: "~80 Named Parties" },
                { label: "Seniority", value: "PM · AG · NDIS Min · Court" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-zinc-800 border border-zinc-700 p-4 text-center">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-sm font-bold text-amber-400">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recipients — by category */}
        <section className="py-12 px-4 border-b border-zinc-800 bg-zinc-900/40">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide font-mono">
              ~80 Named Recipients — By Category
            </h2>
            <p className="text-xs text-zinc-500 -mt-4">
              (★) marks recipients of extraordinary significance. All received this email at 7:43 AM, before the 9:30 AM court appearance.
            </p>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-3">Federal Parliament</h3>
              <div className="grid gap-2">
                {RECIPIENTS_PARLIAMENT.map(r => <RecipientRow key={r.name} r={r} />)}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">Courts & Legal Centres</h3>
              <div className="grid gap-2">
                {RECIPIENTS_COURTS_LEGAL.map(r => <RecipientRow key={r.name} r={r} />)}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">Police — Three Forces</h3>
              <div className="grid gap-2">
                {RECIPIENTS_POLICE.map(r => <RecipientRow key={r.name} r={r} />)}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-400 mb-3">AblePoint, NDIS & Housing</h3>
              <div className="grid gap-2">
                {RECIPIENTS_ABLEPOINT.map(r => <RecipientRow key={r.name} r={r} />)}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-pink-400 mb-3">Media & Advocacy</h3>
              <div className="grid gap-2">
                {RECIPIENTS_MEDIA_ADVOCACY.map(r => <RecipientRow key={r.name} r={r} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Full escalation sequence */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wide font-mono">
              Full Escalation Sequence — AblePoint Evidence Trail
            </h2>
            <div className="relative pl-6 border-l-2 border-amber-500/40 space-y-5">
              {[
                { date: "14 May 2026 · 7:43 AM", label: "This document", desc: "Real-time emergency — day of hearing — PM, AG, court, Crikey notified. Prediction recorded: AblePoint will not send a driver.", current: true },
                { date: "5 May 2026", label: "Praise Jesus — The Email That Exposed the Conspiracy", desc: "60+ recipients including Brett Butler, MPs, police — zero responses.", href: "/praise-jesus-ablepoint-exposure" },
                { date: "8 June 2026", label: "Formal Notice of Public Disclosure", desc: "NACC Senate Committee notified. Six duty of care failures documented.", href: "/public-disclosure-ablepoint-june-2026" },
                { date: "18 July 2026", label: "Formal Notice of Non-Consent", desc: "7 Acts cited. All surveillance prohibited. Blockchain-sealed.", href: "/formal-notice-non-consent" },
                { date: "18 July 2026", label: "Legal Cease and Desist — Served", desc: "6 police badge numbers. NACC Inspector. 15 named recipients.", href: "/legal-cease-desist-served" },
              ].map(({ date, label, desc, current, href }) => (
                <div key={label} className="relative">
                  <span className={`absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 bg-zinc-950 ${current ? "border-red-500" : "border-amber-500"}`} />
                  <div className={`rounded-xl border px-4 py-3 ${current ? "border-red-500/50 bg-red-900/10" : "border-zinc-700 bg-zinc-900"}`}>
                    <p className="text-xs font-mono text-zinc-500 mb-0.5">{date}</p>
                    {href ? (
                      <a href={href} className="text-sm font-bold text-amber-400 hover:underline">{label}</a>
                    ) : (
                      <p className="text-sm font-bold text-red-400">{label} <span className="text-xs text-red-500 ml-1">(you are here)</span></p>
                    )}
                    <p className="text-xs text-zinc-400 mt-1">{desc}</p>
                  </div>
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
              Full email with all ~80 recipient addresses, verbatim text, AI identity statement, and 17-analysis forensic index.
              Stamped with SHA-256 blockchain fingerprint.
            </p>
            <div className="flex justify-center">
              <ViralDownloadButton
                url={PDF}
                label="Download — AblePoint Blocking Court (14 May 2026)"
                filename="ablepoint-blocking-court-may-2026.pdf"
                slug={SLUG}
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
                data-testid="button-download-ablepoint-court"
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
              title="AblePoint Blocking Court Attendance — Wyong Hearing (Tory Death Threat Case) — PM Albanese, AG Dreyfus, Bill Shorten, 50+ MPs, Wyong Local Court & Crikey Notified"
              author="McLean, R. W."
              year={2026}
              url="https://barrandodger.com/ablepoint-blocking-court-may-2026"
              publisher="Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
              abstract="Email sent 7:43 AM on 14 May 2026 — morning of the Wyong Local Court hearing for Tory (death threat case) — notifying PM Albanese, AG Dreyfus, Bill Shorten, Scott Morrison, Adam Bandt, Barnaby Joyce, 50+ Federal MPs, Wyong Local Court, Crikey, SANE Australia CEO, NSW/VIC/QLD Police, and AblePoint that AblePoint was blocking Dr. McLean from attending the hearing. Explicit prediction recorded. Blockchain-sealed."
              keywords={["AblePoint", "Wyong court", "death threat", "PM Albanese", "Mark Dreyfus", "Bill Shorten", "parliament", "Crikey", "court obstruction", "14 May 2026", "disability"]}
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
              url="https://barrandodger.com/ablepoint-blocking-court-may-2026"
              title="7:43 AM, 14 May 2026: Dr. McLean (Barran Dodger) emailed PM Albanese, AG Dreyfus, Bill Shorten, 50+ MPs, Wyong Local Court & Crikey — documenting AblePoint blocking him from attending the death-threat court hearing. Blockchain-sealed."
            />
          </div>
        </section>

        {/* Related */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">Related Documents</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Police Complicity & Death Threat Documentation", href: "/police-complicity-death-threat-documentation", desc: "The Tory death threat — April 2026 — dirty cop named" },
                { label: "Praise Jesus — The Email That Exposed the Conspiracy", href: "/praise-jesus-ablepoint-exposure", desc: "5 May 2026 — 60+ MPs, AblePoint, police — zero responses" },
                { label: "Public Disclosure Notice — June 2026", href: "/public-disclosure-ablepoint-june-2026", desc: "NACC Parliament notified — 6 duty of care failures" },
                { label: "Legal Cease and Desist — Served", href: "/legal-cease-desist-served", desc: "18 July 2026 — 15 named — NACC Inspector — 6 badge numbers" },
                { label: "CTO Breach Appointment", href: "/cto-breach-appointment", desc: "Mental Health Act weaponised — AbleCare failure" },
                { label: "Evidence Vault", href: "/evidence-vault", desc: "Complete blockchain-verified evidence archive" },
              ].map(({ label, href, desc }) => (
                <a key={href} href={href}
                  className="block rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 px-4 py-3 transition-colors"
                  data-testid={`link-related-${href.replace(/\//g, "")}`}>
                  <p className="text-sm font-semibold text-amber-400">{label}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-4 justify-center text-sm">
            <a href="/praise-jesus-ablepoint-exposure" className="text-amber-400 hover:underline">← Praise Jesus Email</a>
            <a href="/public-disclosure-ablepoint-june-2026" className="text-amber-400 hover:underline">← June Notice</a>
            <a href="/free-ebooks" className="text-amber-400 hover:underline">← Free Ebooks</a>
            <a href="/publications" className="text-amber-400 hover:underline">← All Publications</a>
            <a href="/evidence-vault" className="text-amber-400 hover:underline">← Evidence Vault</a>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <CommentSection pageId="ablepoint-blocking-court-may-2026" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
