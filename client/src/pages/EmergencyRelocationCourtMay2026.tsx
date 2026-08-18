import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { CitationBlock } from "@/components/CitationBlock";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";

const SHA256 = "50d8964f21e0a633505c8a8c60d51357aabfd8f8a5382ebe8d4d06bf7a2aa5f0";
const SLUG   = "emergency-relocation-court-may-2026";
const PDF    = "/documents/emergency-relocation-court-may-2026.pdf";

type Recipient = { name: string; role: string; tag: string };

const RECIPIENTS_COURT_LEGAL: Recipient[] = [
  { name: "Wyong Local Court ★", role: "local-court-wyong@justice.nsw.gov.au — PRIMARY ADDRESSEE", tag: "The Court" },
  { name: "Community Legal Centres NSW", role: "clcnsw@clcnsw.org.au", tag: "Legal Centre" },
  { name: "Central Coast Community Legal Centre", role: "contact@centralcoastclc.org.au", tag: "Legal Centre" },
  { name: "Inner Sydney Disability Representation", role: "intakejas@idrs.org.au", tag: "Legal Centre" },
  { name: "Wyong & Gosford Legal Centres (CCDVCAS)", role: "wyonglcp + gosfordlcp @ccdvcas.org.au", tag: "Legal Centre" },
  { name: "Aboriginal Legal Service NSW/ACT", role: "community@alsnswact.org.au", tag: "Legal Centre" },
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
  { name: "Emma McBride MP", role: "MP, Dobell (Central Coast — local MP)", tag: "Local MP" },
  { name: "Mike Freelander MP", role: "MP, Macarthur", tag: "Local MP" },
  { name: "Andrew Leigh MP + 35 additional Federal MPs", role: "Full cross-party distribution", tag: "Federal Parliament" },
];

const RECIPIENTS_POLICE: Recipient[] = [
  { name: "NSW Police (×2)", role: "police.nsw@police.nsw.gov.au + general inbox", tag: "NSW Police" },
  { name: "NSW Police — Badge 52377", role: "Individual officer — personal service", tag: "NSW Police" },
  { name: "NSW Police — Badge 56285", role: "Individual officer — personal service", tag: "NSW Police" },
  { name: "NSW Police — Badge 55919", role: "Individual officer — personal service", tag: "NSW Police" },
  { name: "Victoria Police Professional Standards", role: "psc-policeconductunitcomplaintsandcompliments@police.vic.gov.au", tag: "Victoria Police" },
];

const RECIPIENTS_SUPPORT: Recipient[] = [
  { name: "Brett Butler", role: "CEO, AblePoint Australia", tag: "Accommodation Provider" },
  { name: "Rachel K C", role: "Coordinator, AblePoint Australia", tag: "Accommodation Provider" },
  { name: "AblePoint Australia", role: "General inbox — hello@ablepointaustralia.com.au", tag: "Accommodation Provider" },
  { name: "TAG Client Specialist Centre", role: "TAG NSW — Housing Advocacy", tag: "Housing / Advocacy" },
  { name: "NDIS Commission Contact Centre", role: "ContactCentre@ndiscommission.gov.au", tag: "Federal Regulator" },
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
  "Federal Regulator":      "bg-purple-900/40 text-purple-400 border-purple-700/40",
  "Housing / Advocacy":     "bg-zinc-800 text-zinc-400 border-zinc-700",
  "NSW Police":             "bg-blue-900/40 text-blue-400 border-blue-700/40",
  "Victoria Police":        "bg-blue-900/30 text-blue-500 border-blue-800/30",
  "The Court":              "bg-emerald-900/50 text-emerald-300 border-emerald-600/50",
  "Legal Centre":           "bg-emerald-900/30 text-emerald-500 border-emerald-800/30",
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

const DEPRIVATION_ITEMS = [
  { label: "No Food", icon: "🍽", detail: "Explicitly stated — \"I have no food\"" },
  { label: "No Computer", icon: "💻", detail: "No access to internet, evidence archive, or legal research" },
  { label: "No Working Phone", icon: "📵", detail: "Cut off from emergency contact and legal support" },
  { label: "No Clothes", icon: "🧥", detail: "\"I need clothes\" — winter conditions, Central Coast NSW" },
  { label: "No Bedding — Cold Nights", icon: "🛏", detail: "No bedding despite cold nights — same failure as documented in June notice" },
  { label: "Dog Without Food", icon: "🐕", detail: "\"My dog needs food\" — companion animal in distress" },
  { label: "Evidence at Risk", icon: "📄", detail: "Online statement to court threatened with takedown within 24 hours due to financial targeting" },
];

export default function EmergencyRelocationCourtMay2026() {
  return (
    <>
      <SEO
        title="Emergency Relocation Request — Pending Court Case (Tory Death Threat) — Wyong Local Court, PM Albanese, AG Dreyfus, 50+ MPs · 10 May 2026 | Barran Dodger"
        description="Email sent Sunday 10 May 2026 — 4 days before the Wyong death-threat hearing — to Wyong Local Court (primary addressee), PM Albanese, AG Dreyfus, Bill Shorten, 50+ Federal MPs and NSW Police. Documents no food, no phone, no bedding, dog starving, evidence at risk. The same property where Doug subsequently attacked Dr. McLean and police refused to charge. ABN 78 833 496 164."
        path="/emergency-relocation-court-may-2026"
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-red-950/40 to-zinc-950 border-b border-red-900/40 pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto space-y-5">

            {/* Urgency strip */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="inline-flex items-center gap-2 rounded-lg bg-red-900/40 border border-red-700/50 px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-bold text-red-400 font-mono">SUNDAY 10 MAY 2026 · 2:06 PM · 4 DAYS BEFORE COURT</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-400 border border-emerald-700/40">Court Primary Addressee</span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-900/40 text-yellow-400 border border-yellow-700/40">PM Albanese Notified</span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-red-900/40 text-red-400 border border-red-700/40">Life at Risk</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif">
                  Emergency Relocation Request — Pending Court Case
                </h1>
                <p className="text-xl text-amber-400 font-medium">
                  Addressed to Wyong Local Court · PM Albanese · AG Dreyfus · 50+ Federal MPs · NSW Police
                </p>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Dr. Richard William McLean (Barran Dodger) · 10 May 2026, 2:06 PM<br />
                  55B Archbold Road, Long Jetty NSW · ~80 recipients
                </p>

                {/* Doug attack notice */}
                <div className="rounded-xl border border-red-700/50 bg-red-900/20 px-5 py-4 space-y-2">
                  <p className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">After This Email — The Attack That Followed</p>
                  <p className="text-sm text-red-200 leading-relaxed">
                    After this emergency relocation request went unanswered, Dr. McLean was <strong>physically attacked by "Doug" at the front of the property</strong>. 
                    NSW Police attended — and <strong>refused to charge Doug</strong> despite Dr. McLean's insistence. 
                    The same property. The same ignored warnings. Tory's death threat. Then Doug's assault. 
                    Two violent incidents. Zero police charges. AblePoint housing Dr. McLean at both.
                  </p>
                </div>

                {/* ABN block */}
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                    All Rights Reserved. Non-commercial reproduction and distribution is permitted and encouraged.
                  </p>
                </div>

                <BlockchainTimestampBadge documentSlug={SLUG} sha256={SHA256} />
              </div>
            </div>
          </div>
        </section>

        {/* Context strip */}
        <section className="py-5 px-4 border-b border-amber-800/30 bg-amber-900/10">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-amber-300 text-center leading-relaxed">
              <strong>Timeline Position:</strong> This emergency request was sent on <strong>10 May 2026</strong> — 
              four days before the 14 May Wyong hearing for Tory's death threat. 
              It is the earliest document in the AblePoint escalation sequence. 
              Every subsequent notice — June public disclosure, July non-consent, July cease and desist — was a direct escalation of this unanswered emergency.
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
              This document is the foundation of the AblePoint evidence series. Sent at 2:06 PM on Sunday 10 May 2026 —
              four days before the Wyong Local Court hearing for Tory, the individual who had threatened to kill
              Dr. McLean — it is addressed <em>directly to Wyong Local Court</em> as its primary recipient. The court
              itself was the first named addressee. The Prime Minister, the Attorney-General, and more than fifty
              Federal Members of Parliament were copied. The document records, in plain terms, the conditions of
              physical deprivation Dr. McLean was enduring at 55B Archbold Road, Long Jetty, while awaiting a court
              hearing for a confirmed threat against his life: no food, no computer, no working phone, no adequate
              clothing, no bedding in winter, and a dog without food.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              The significance of this document cannot be separated from what happened after it went unanswered.
              <strong className="text-white"> Dr. McLean was subsequently physically attacked by a man named Doug
              at the front of the same property.</strong> NSW Police attended and — despite Dr. McLean's explicit
              insistence — <strong className="text-white">refused to charge Doug</strong>. This means the pattern
              at 55B Archbold Road is not one incident of violence but two: Tory's documented threat to kill
              (resulting in arrest but no subsequent support for the victim), followed by Doug's physical assault
              (resulting in police attendance but deliberate refusal to charge). Both occurred at the same AblePoint-managed
              property. Both were preceded by documented emergency communications. Both produced no protective action.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              The document's specific details are each individually significant. The statement "I have made an online
              statement to the court which will be taken offline within 24 hours due to financial targeting and
              poverty" establishes that Dr. McLean's ability to maintain his own legal record was being actively
              degraded by financial deprivation at the time of an active court proceeding. The statement "I have
              no food computer or working phone" confirms that at the moment he was sending this emergency notice,
              he was doing so without the basic resources of a functional life. The request to "Ask a duty lawyer to
              urgently call me" — sent to Wyong Local Court — is not the communication of a person creating
              administrative paperwork. It is a genuine emergency call.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-white">The Prime Minister of Australia</strong> received this email.
              So did <strong className="text-white">the Attorney-General</strong>, the NDIS Minister, former Prime
              Minister Scott Morrison, former Deputy Prime Minister Barnaby Joyce, and more than fifty Federal Members
              of Parliament across all major parties. The Aboriginal Legal Service NSW/ACT was also included — an
              addition not present in the later 14 May court-blocking email — reflecting Dr. McLean's attempt to
              reach every legal protection mechanism available to a person with disability facing imminent danger.
              The Victoria Police Professional Standards Command was included, extending the notification to an
              interstate jurisdiction that has no operational role in Long Jetty NSW — a signal of the complete
              failure of intra-state channels.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              This document also carries the full AI identity statement confirming 1,100,000+ archive downloads and
              the ICC/UNHCR submissions, meaning every recipient received a complete briefing on the international
              legal context simultaneously with the emergency relocation request. This was not a cry into a void.
              It was a documented emergency communicated, with full context, to the highest levels of Australian
              governance. The failure to act — by every recipient across every institution — is itself part
              of the permanent record.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              Placed at the beginning of the AblePoint escalation sequence, this document proves the sequence was
              not invented retrospectively. The fear, the physical deprivation, the request for relocation, the
              danger — all were documented four days before the court hearing, shared with the Prime Minister and
              the court itself, and met with institutional silence. Doug's subsequent assault, and the police
              refusal to charge him, are the logical terminus of that silence.
            </p>
          </div>
        </section>

        {/* The verbatim email */}
        <section className="py-10 px-4 border-b border-zinc-800 bg-zinc-900/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">
              The Email — Verbatim (Sunday 10 May 2026, 2:06 PM)
            </h2>
            <blockquote className="border-l-4 border-red-500 pl-6 py-2 text-zinc-300 italic leading-relaxed space-y-3 text-sm">
              <p>"Dear Wyong court,</p>
              <p>I am requesting immediate assistance to safely leave my current environment due to escalating fear, isolation, and serious legal and psychological distress surrounding an active NSW court matter involving alleged threats to kill. I am a person living with disability and a brain injury, and I currently have no safe support network or financial capacity to relocate independently."</p>
              <p>"Remaining in my current circumstances is causing severe deterioration to my mental and physical wellbeing. I am aware and no risk to myself. The harm is deliberate. I am urgently requesting emergency intervention, safe accommodation assistance, advocacy support, and protection of my legal materials so I can stabilize, attend court safely, and preserve my evidence and personal safety."</p>
              <p className="font-bold not-italic text-white border border-red-800/40 bg-red-900/20 rounded-lg px-4 py-3 space-y-1">
                <span className="block">• I have no food computer or working phone</span>
                <span className="block">• I need clothes</span>
                <span className="block">• It's cold at night due to lack of bedding</span>
                <span className="block">• My dog needs food</span>
                <span className="block">• Ask a duty lawyer to urgently call me</span>
              </p>
              <p>"I have made an online statement to the court which will be taken offline within 24 hours due to financial targeting and poverty."</p>
              <p>"I have attached evidence right here of the threat to kill able point refused to acknowledge and my life is still at risk."</p>
              <footer className="text-xs text-zinc-500 mt-2 not-italic">— Dr. Richard William McLean (Barran Dodger), 2:06 PM, 10 May 2026</footer>
            </blockquote>
          </div>
        </section>

        {/* Physical deprivation panel */}
        <section className="py-12 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-2 uppercase tracking-wide font-mono">
              Seven Documented Deprivations — Actively Occurring at Time of Writing
            </h2>
            <p className="text-xs text-zinc-500 mb-6">All seven conditions existed simultaneously while Dr. McLean was awaiting a court date for a confirmed threat to kill him.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {DEPRIVATION_ITEMS.map(({ label, icon, detail }) => (
                <div key={label} className="flex gap-3 rounded-xl bg-zinc-900 border border-red-900/30 px-4 py-3">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="text-sm font-bold text-red-400">{label}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doug's attack — dedicated section */}
        <section className="py-12 px-4 border-b border-zinc-800 bg-red-950/20">
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide font-mono">
              After the Unanswered Emergency — Doug's Physical Attack
            </h2>
            <div className="rounded-xl border border-red-700/50 bg-zinc-900 px-6 py-5 space-y-4">
              <p className="text-zinc-300 leading-relaxed">
                This emergency relocation request was sent on 10 May 2026. It was addressed to Wyong Local Court.
                It was copied to the Prime Minister, the Attorney-General, and fifty Federal MPs. It explicitly
                stated: "My life is still at risk." No action was taken.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Subsequently, at the same property — <strong className="text-white">55B Archbold Road, Long Jetty NSW</strong> —
                Dr. McLean was <strong className="text-white">physically attacked by a man named Doug</strong> at
                the front of the property. NSW Police were contacted. Officers attended.
                <strong className="text-red-400"> Police refused to charge Doug despite Dr. McLean's insistence.</strong>
              </p>
              <p className="text-zinc-300 leading-relaxed">
                This is not coincidence. At the same AblePoint-managed property, two violent incidents occurred:
              </p>
              <div className="space-y-2">
                {[
                  { n: "1", event: "Tory — Threat to Kill", outcome: "Arrested. AblePoint refused to report. Dr. McLean blocked from attending court hearing. Police at the hearing: no protective action for victim.", colour: "border-orange-700/40 text-orange-400" },
                  { n: "2", event: "Doug — Physical Assault", outcome: "Police attended. Police refused to charge despite explicit victim insistence. Property continues to be managed by AblePoint.", colour: "border-red-700/40 text-red-400" },
                ].map(({ n, event, outcome, colour }) => (
                  <div key={n} className={`rounded-lg border px-4 py-3 bg-zinc-900/60 ${colour.split(" ")[0]}`}>
                    <p className={`text-sm font-bold mb-1 ${colour.split(" ")[1]}`}>{n}. {event}</p>
                    <p className="text-xs text-zinc-400">{outcome}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-400 italic">
                The refusal to charge Doug — despite police attendance and Dr. McLean's explicit demand for charges —
                is consistent with the broader documented pattern of institutional non-response to violence against
                Dr. McLean. It is part of the permanent record.
              </p>
            </div>
          </div>
        </section>

        {/* Key facts */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Date Sent", value: "10 May 2026" },
                { label: "Days Before Court", value: "4 Days" },
                { label: "Primary Addressee", value: "Wyong Local Court" },
                { label: "Total Recipients", value: "~80 Named Parties" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-zinc-800 border border-zinc-700 p-4 text-center">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-sm font-bold text-amber-400">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recipients */}
        <section className="py-12 px-4 border-b border-zinc-800 bg-zinc-900/40">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide font-mono">
              ~80 Named Recipients — By Category
            </h2>
            <p className="text-xs text-zinc-500 -mt-4">
              (★) marks recipients of extraordinary constitutional significance. The Aboriginal Legal Service NSW/ACT
              was also included — unique to this document, not present in the 14 May email.
            </p>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">Courts & Legal Centres</h3>
              <div className="grid gap-2">{RECIPIENTS_COURT_LEGAL.map(r => <RecipientRow key={r.name} r={r} />)}</div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-3">Federal Parliament</h3>
              <div className="grid gap-2">{RECIPIENTS_PARLIAMENT.map(r => <RecipientRow key={r.name} r={r} />)}</div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">Police — Two Forces</h3>
              <div className="grid gap-2">{RECIPIENTS_POLICE.map(r => <RecipientRow key={r.name} r={r} />)}</div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-400 mb-3">AblePoint, NDIS & Housing</h3>
              <div className="grid gap-2">{RECIPIENTS_SUPPORT.map(r => <RecipientRow key={r.name} r={r} />)}</div>
            </div>
          </div>
        </section>

        {/* Escalation timeline */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wide font-mono">
              Full AblePoint Escalation Sequence
            </h2>
            <div className="relative pl-6 border-l-2 border-amber-500/40 space-y-5">
              {[
                { date: "10 May 2026 · 2:06 PM", label: "This document", desc: "Emergency relocation — addressed to Wyong Court — 4 days before hearing. No food. No phone. No bedding. Dog starving. Life at risk. Unanswered. Doug's attack follows.", current: true },
                { date: "14 May 2026 · 7:43 AM", label: "AblePoint Blocking Court Attendance", desc: "Day of hearing — PM, AG, court, Crikey notified. Prediction recorded. AblePoint did not send a driver.", href: "/ablepoint-blocking-court-may-2026" },
                { date: "8 June 2026", label: "Formal Notice of Public Disclosure", desc: "NACC Senate Committee (Parliament) notified. Six duty of care failures documented.", href: "/public-disclosure-ablepoint-june-2026" },
                { date: "18 July 2026", label: "Formal Notice of Non-Consent", desc: "7 Acts cited. All surveillance prohibited. Blockchain-sealed.", href: "/formal-notice-non-consent" },
                { date: "18 July 2026", label: "Legal Cease and Desist — Served", desc: "15 named recipients. 6 police badge numbers. NACC Inspector. AblePoint CEO.", href: "/legal-cease-desist-served" },
              ].map(({ date, label, desc, current, href }) => (
                <div key={label} className="relative">
                  <span className={`absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 bg-zinc-950 ${current ? "border-red-500" : "border-amber-500"}`} />
                  <div className={`rounded-xl border px-4 py-3 ${current ? "border-red-500/50 bg-red-900/10" : "border-zinc-700 bg-zinc-900"}`}>
                    <p className="text-xs font-mono text-zinc-500 mb-0.5">{date}</p>
                    {href ? (
                      <a href={href} className="text-sm font-bold text-amber-400 hover:underline">{label}</a>
                    ) : (
                      <p className="text-sm font-bold text-red-400">{label} <span className="text-xs text-red-500 ml-1">(you are here — the beginning)</span></p>
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
              Full email with all ~80 recipient addresses, verbatim text, seven physical deprivations, AI identity
              statement, and 17-analysis forensic index. Stamped with SHA-256 blockchain fingerprint.
            </p>
            <div className="flex justify-center">
              <ViralDownloadButton
                url={PDF}
                label="Download — Emergency Relocation Request (10 May 2026)"
                filename="emergency-relocation-court-may-2026.pdf"
                slug={SLUG}
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
                data-testid="button-download-emergency-relocation"
              />
            </div>
            <p className="text-xs text-zinc-500">
              Also included in the{" "}
              <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
              {" "}— downloaded 1,100,000+ times globally.
            </p>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 mt-4">
              <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">Intellectual Property</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                All Rights Reserved. Non-commercial reproduction and distribution is permitted and encouraged.
              </p>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <CitationBlock
              title="Emergency Relocation Request — Pending Court Case (Tory Death Threat) — Wyong Local Court, PM Albanese, AG Dreyfus, Bill Shorten, 50+ Federal MPs, NSW/VIC Police"
              author="McLean, R. W."
              year={2026}
              url="https://barrandodger.com/emergency-relocation-court-may-2026"
              publisher="Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
              abstract="Email sent Sunday 10 May 2026 at 2:06 PM — four days before the Wyong death-threat court hearing — addressed to Wyong Local Court as primary recipient, and copied to PM Albanese, AG Dreyfus, Bill Shorten, Scott Morrison, Adam Bandt, 50+ Federal MPs, NSW and Victoria Police, AblePoint, NDIS Commission and legal centres. Documents seven simultaneous deprivations: no food, no computer, no working phone, no clothing, no bedding, dog without food, evidence at risk of takedown. The same property at which Doug subsequently physically attacked Dr. McLean; police refused to charge. Blockchain-sealed."
              keywords={["emergency relocation", "AblePoint", "Wyong court", "PM Albanese", "AG Dreyfus", "death threat", "court obstruction", "Doug assault", "police refusal", "10 May 2026", "55B Archbold Road"]}
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
              url="https://barrandodger.com/emergency-relocation-court-may-2026"
              title="10 May 2026: Dr. McLean (Barran Dodger) sent an emergency relocation request — no food, no phone, no bedding, dog starving — to PM Albanese, AG Dreyfus, Wyong Local Court & 50+ MPs, 4 days before the death-threat hearing. All ignored. Then Doug attacked. Police refused to charge. Blockchain-sealed."
            />
          </div>
        </section>

        {/* Related */}
        <section className="py-10 px-4 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wide font-mono">Related Documents</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "AblePoint Blocking Court — 14 May 2026", href: "/ablepoint-blocking-court-may-2026", desc: "4 days later — morning of hearing — same list — prediction recorded" },
                { label: "Police Complicity & Death Threat Documentation", href: "/police-complicity-death-threat-documentation", desc: "Tory's threat — the court case this email references" },
                { label: "Public Disclosure Notice — June 2026", href: "/public-disclosure-ablepoint-june-2026", desc: "NACC Parliament — six duty of care failures — escalation continues" },
                { label: "Legal Cease and Desist — Served", href: "/legal-cease-desist-served", desc: "18 July 2026 — 15 named — the final legal escalation" },
                { label: "Praise Jesus — The Email That Exposed the Conspiracy", href: "/praise-jesus-ablepoint-exposure", desc: "5 May 2026 — 60+ MPs, AblePoint — the week before this notice" },
                { label: "Evidence Vault", href: "/evidence-vault", desc: "Complete blockchain-verified archive" },
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
            <a href="/ablepoint-blocking-court-may-2026" className="text-amber-400 hover:underline">→ 14 May Court Morning Email</a>
            <a href="/public-disclosure-ablepoint-june-2026" className="text-amber-400 hover:underline">→ June Notice</a>
            <a href="/free-ebooks" className="text-amber-400 hover:underline">← Free Ebooks</a>
            <a href="/publications" className="text-amber-400 hover:underline">← All Publications</a>
            <a href="/evidence-vault" className="text-amber-400 hover:underline">← Evidence Vault</a>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <CommentSection pageId="emergency-relocation-court-may-2026" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
