import { Link } from "wouter";

/**
 * IfOnePersonStatement — enhanced public statement of record.
 * Names individuals and organisations directly. Every claim is documented.
 */
export default function IfOnePersonStatement() {
  return (
    <section
      className="w-full py-20 px-4"
      style={{ background: "linear-gradient(180deg, #06080f 0%, #080c18 50%, #06080f 100%)" }}
      aria-label="Statement of Record — AblePoint Exposure"
    >
      <div className="max-w-3xl mx-auto">

        {/* Label */}
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] mb-4"
          style={{ color: "#e9a00a" }}>
          Public Statement of Record · Dr. Richard William McLean PhD · ABN 78 833 496 164
        </p>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center leading-tight mb-4">
          Blood Money.<br />
          <span style={{ color: "#e9a00a" }}>And the People Who Took It.</span>
        </h2>

        <p className="text-center text-zinc-400 text-sm mb-4 max-w-2xl mx-auto">
          This is a formal public record. Every person named below held a professional, legal, and ethical duty of care toward a documented whistleblower. Every person named below chose to abandon that duty. This page will remain indexed, archived, and blockchain-sealed for as long as the internet exists.
        </p>

        <p className="text-center text-xs mb-10 max-w-xl mx-auto" style={{ color: "#e9a00a" }}>
          This statement is linked directly to the{" "}
          <Link href="/administrative-annihilation" className="underline hover:text-white transition-colors">
            Administrative Annihilation paper
          </Link>
          {" "}— 25,000 words of forensic documentation of the systematic destruction of my life by Australian government agencies and their contracted providers.
        </p>

        {/* Divider */}
        <div className="w-16 h-px mx-auto mb-12" style={{ background: "#e9a00a" }} />

        <div className="space-y-8 text-zinc-300 text-[15px] leading-relaxed">

          {/* Opening */}
          <p>
            I am a whistleblower. I hold a PhD. I survived a documented clinical death in 2021. I survived a documented assassination attempt in 2024. I have formal submissions before the{" "}
            <strong className="text-white">International Criminal Court under Article 7 of the Rome Statute</strong> and before the{" "}
            <strong className="text-white">UNHCR in Geneva under reference UR/UST/23/AUS/17</strong>. The Australian government has not issued a single defamation action, denial, or factual rebuttal across 3,643 primary-source exhibits across 35 years.
          </p>

          <p>
            I was driven into political exile — forcibly relocated to New South Wales — as a direct consequence of my whistleblowing disclosures against a Federal Minister of the NDIS. That exile was designed to strip me of every support network, every professional ally, every legal resource I had built. It succeeded. Into that vacuum stepped{" "}
            <strong className="text-white">AblePoint Australia</strong> — and what followed is a case study in institutional corruption, cowardice, and deliberate harm.
          </p>

          {/* AblePoint box */}
          <div
            className="rounded-lg p-6 my-8 border"
            style={{ background: "rgba(220,38,38,0.06)", borderColor: "rgba(220,38,38,0.35)" }}
          >
            <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#ef4444" }}>
              Organisation on Notice — Public Interest Disclosure
            </p>

            <div className="space-y-1 text-sm mb-4">
              <p className="text-white font-bold text-lg">AblePoint Australia</p>
              <p className="text-zinc-400 text-xs">
                Trading name of{" "}
                <strong className="text-white">SAHARA DISABILITY AND CARE SERVICES PTY LTD</strong>
                {" "}· ACN 650 183 681
              </p>
              <p className="text-zinc-400 text-xs">
                ABN: <strong className="text-white">31 650 183 681</strong>
                {" "}·{" "}
                <a
                  href="https://www.ablepointaustralia.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors"
                  style={{ color: "#e9a00a" }}
                >
                  ablepointaustralia.com.au
                </a>
              </p>

              {/* Name change timeline — the most damning part */}
              <div className="mt-4 rounded border p-4 text-xs" style={{ borderColor: "rgba(220,38,38,0.3)", background: "rgba(220,38,38,0.05)" }}>
                <p className="font-black uppercase tracking-widest mb-3" style={{ color: "#ef4444" }}>
                  Registered Name History — ABN 31 650 183 681 · Source: abr.business.gov.au
                </p>
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-zinc-500">
                      <th className="pb-2 pr-4 font-semibold">Business Name</th>
                      <th className="pb-2 pr-4 font-semibold">From</th>
                      <th className="pb-2 font-semibold">To</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300 space-y-1">
                    <tr>
                      <td className="pr-4 pb-1 text-white font-semibold">Project Voyager</td>
                      <td className="pr-4 pb-1">12 Feb 2026</td>
                      <td className="pb-1 text-green-400">Current</td>
                    </tr>
                    <tr>
                      <td className="pr-4 pb-1">Ablepoint Australia</td>
                      <td className="pr-4 pb-1">22 Nov 2021</td>
                      <td className="pb-1 text-green-400">Current</td>
                    </tr>
                    <tr>
                      <td className="pr-4 pb-1 text-zinc-500">Sahara Care Disability Services</td>
                      <td className="pr-4 pb-1 text-zinc-500">13 May 2021</td>
                      <td className="pb-1 text-zinc-500">01 Jan 2022</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-3 leading-relaxed" style={{ color: "#fbbf24" }}>
                  <strong>Note:</strong> The legal entity "Sahara Disability and Care Services Pty Ltd" has operated under three different trading names since 2021. The most recent — <strong>"Project Voyager"</strong> — was registered on <strong>12 February 2026</strong>, while this archive's exposure of AblePoint's conduct was already publicly documented. A new brand name registered during an active public interest disclosure is consistent with a pattern of rebranding to evade regulatory scrutiny and accountability. If you are searching for AblePoint Australia or Sahara Care, you may soon be redirected to "Project Voyager." Same entity. Same ABN. Same conduct.
                </p>
              </div>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">
              AblePoint Australia accepts NDIS funding — taxpayer money — to provide safe, ethical, accountable support to disabled Australians. There is{" "}
              <strong className="text-white">no lease agreement</strong> between myself and AblePoint. There is no professional services agreement that satisfies Australian consumer law or the NDIS Code of Conduct. I have given formal notice to sever this non-existent arrangement. That notice has been ignored.
            </p>

            <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
              AblePoint's website previously and <strong className="text-white">publicly advertised that all clients are entitled to an independent advocate</strong>. When I formally invoked that right — as was my entitlement under both their own published policy and the NDIS Code — I was informed by my contact, Brett Butler, that this offering had been{" "}
              <strong className="text-white">quietly removed from their website</strong>. Not revised. Not updated. Removed. The promise disappeared the moment it was inconvenient. That is not an oversight. That is the suppression of a documented entitlement.
            </p>
          </div>

          {/* Named individuals */}
          <div className="space-y-6">

            <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#ef4444" }}>
              Individuals Named in This Statement
            </p>

            {/* Rachel */}
            <div
              className="rounded-lg p-5 border"
              style={{ background: "rgba(220,38,38,0.04)", borderColor: "rgba(220,38,38,0.2)" }}
            >
              <p className="text-white font-bold mb-1">Rachel K. C.</p>
              <p className="text-zinc-400 text-xs mb-1">Management · AblePoint Australia (trading as Sahara Disability and Care Services Pty Ltd · ABN 31 650 183 681)</p>
              <p className="text-zinc-400 text-xs mb-3">
                Email:{" "}
                <a href="mailto:Rachel@ablepointaustralia.com.au" className="text-white underline">
                  Rachel@ablepointaustralia.com.au
                </a>
              </p>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Rachel K. C. operates in a senior management capacity at AblePoint Australia and holds direct organisational responsibility for the conduct documented in this statement. She{" "}
                <strong className="text-white">refuses to identify herself by her full legal surname</strong> in a professional context — an unusual stance for a person in a position of trust and legal accountability over some of Australia's most vulnerable people.
              </p>

              <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
                Rachel is, by professional training, <strong className="text-white">an engineer</strong>. She holds no qualification, no clinical background, and no recognised expertise in mental health, trauma-informed care, disability support, or the complex psychosocial needs of NDIS participants. She entered the disability sector not through vocation or training but through the extraction opportunity it presented. Under her management, the people in AblePoint's care are not clients with dignity and legal rights — they are{" "}
                <strong className="text-white">revenue units</strong>. Vulnerable Australians in crisis, in exile, in danger — processed through a billing system designed to fund her lifestyle, including documented trips back to India, while the people she is legally mandated to protect are left to manage violence, homelessness, and trauma alone.
              </p>

              <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
                The staff beneath her are not support workers in any meaningful sense of the term. They have been reduced, through the bureaucratic corruption of the NDIS pyramid, to{" "}
                <strong className="text-white">paid social surveillance operatives</strong>. Their function is to observe, document, and report my poverty, my distress, and my circumstances upward through the chain — to the NDIS, and ultimately to the agencies and actors who have been orchestrating my destruction since 1990. Every support worker who has entered my life under AblePoint's banner has been financially incentivised to maintain the status quo of my suffering and explicitly instructed never to create any meaningful change to my circumstances. That is not support. That is a monitoring operation with a Medicare billing code.
              </p>

              <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
                What makes this not merely negligent but <strong className="text-white">consciously malicious</strong> is this: I am not an uninformed client. I have a PhD. I ran my own NDIS company. I held a DSS contract — confirmed by the Federal Court of Australia. I was a{" "}
                <strong className="text-white">registered arts therapist and life coach</strong>. I know what ethical NDIS practice looks like. I built it. I lived it. I would not — could not — for one second of my professional or personal life, consciously participate in the deliberate harming of a vulnerable person in my care. The idea is an absurdity to me. It is a violation of everything I built my practice on. In my years as a provider, I treated every client as a full human being deserving of dignity, agency, and genuine support. That is what the work demanded. That is what any person of integrity does.
              </p>

              <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
                Rachel K. C. is aware of what she is doing. This is not bureaucratic incompetence. This is not a resource-stretched system making difficult decisions. This is a person with full knowledge, full authority, and zero clinical credentials choosing, repeatedly and consciously, to harm — or permit the harming of — a documented political target whose evidence threatens powerful institutions. The{" "}
                <strong className="text-white">chronic and quantifiable</strong> nature of these failures, across two separate accommodation placements, removes any plausible defence of accident or oversight.
              </p>

              {/* Specific failures */}
              <p className="mt-5 text-xs font-black uppercase tracking-widest mb-2" style={{ color: "#ef4444" }}>
                Documented Failures Under Her Organisational Authority
              </p>
              <ul className="space-y-2 text-sm text-zinc-300 list-none">
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> I was placed in accommodation with a violent vigilante and subjected to direct threatening intimidation — <strong className="text-white">Location One</strong>.</li>
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> I was subsequently <strong className="text-white">violently attacked by another NDIS participant</strong> — <strong className="text-white">Location Two</strong>. No mandated incident report was filed for either event. Two separate physical safety failures. Zero reports. Zero accountability.</li>
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> No mandated report was filed with NDIS Quality and Safeguards Commission for either incident — a criminal-level omission under the NDIS Act.</li>
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> My right to an independent advocate — <strong className="text-white">published on their own website</strong> — was silently removed the moment I formally invoked it.</li>
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> I was banned from telephone contact with my own registered support provider.</li>
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> My formal written complaints were ignored, then gaslit, then used to further pathologise and discredit me.</li>
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> Support workers under her direction were actively prevented from making any meaningful change to my circumstances — reducing care to surveillance.</li>
              </ul>

              <p className="mt-5 text-zinc-300 text-sm leading-relaxed">
                I demanded to be removed from AblePoint's care via a public plea on this website — after every internal escalation path had been closed to me. That public plea is a matter of blockchain-sealed public record. It is documented evidence that I exhausted every available avenue before going public. Rachel K. C. had the authority to act at any point in that process. She is the management. She is the decision-maker. She chose, at every decision point, not to act.
              </p>

              <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                Their public website is a clean, generic, professionally designed veneer. It uses the language of compassion, inclusion, and person-centred support. It is, by every measure of the documented reality, a fiction. The gap between what AblePoint presents publicly and what it delivers to the people in its care is not a marketing oversight. It is a deliberate strategy. The veneer exists to attract NDIS funding. The corruption exists underneath it.
              </p>

              <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                It is entirely within my legal and ethical remit — as the subject of what is now the most significant whistleblower case involving a disabled political target in Australia's entire democratic history — to name these people publicly, to document their conduct, and to ensure that their identities and choices are permanently indexed, archived, and sealed into the blockchain. History will record who they were, what they knew, what they were paid to do, and what they chose to do instead. That is not revenge. That is accountability. It is the only form of accountability available to a person every other institution has abandoned.
              </p>
            </div>

            {/* Brett */}
            <div
              className="rounded-lg p-5 border"
              style={{ background: "rgba(220,38,38,0.04)", borderColor: "rgba(220,38,38,0.2)" }}
            >
              <p className="text-white font-bold mb-1">Brett Butler</p>
              <p className="text-zinc-400 text-xs mb-1">Support Coordinator · AblePoint Australia</p>
              <p className="text-zinc-400 text-xs mb-3">
                Email:{" "}
                <a href="mailto:brett@ablepointaustralia.com.au" className="text-white underline">
                  brett@ablepointaustralia.com.au
                </a>
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Brett Butler was my primary contact at AblePoint and the person directly responsible for my day-to-day coordination. He is the individual who informed me that AblePoint had{" "}
                <strong className="text-white">removed the advocate entitlement from their website</strong> — after I had already formally requested one. He is therefore both a witness to that removal and a participant in its suppression. Under his direct coordination:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300 list-none">
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> I was placed with a violent vigilante — an accommodation arrangement that no competent, ethical coordinator should have permitted or maintained.</li>
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> When I fled that placement for my physical safety, I received no adequate support, no alternative safe housing, and no mandated incident report.</li>
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> I was subsequently stonewalled, gaslit, and banned from further phone contact.</li>
                <li className="flex gap-2"><span style={{ color: "#ef4444" }}>▸</span> My concerns — backed by the most documented whistleblower archive in Australian history — were treated as the complaints of a difficult client rather than the documented evidence of a person in danger.</li>
              </ul>
              <p className="mt-3 text-zinc-300 text-sm">
                Brett Butler holds the NDIS Code of Conduct obligations of a registered support worker. He accepted payment — funded by Australian taxpayers — to fulfil those obligations. The documented record shows he did not.
              </p>
            </div>
          </div>

          {/* Who I Am — The Contrast That Makes This Unconscionable */}
          <div
            className="rounded-lg p-6 border mt-2"
            style={{ background: "rgba(233,160,10,0.04)", borderColor: "rgba(233,160,10,0.25)" }}
          >
            <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#e9a00a" }}>
              Who I Am. The Contrast That Makes This Unconscionable.
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              I am not a passive victim with no frame of reference for what ethical NDIS practice looks like. I built it. I{" "}
              <strong className="text-white">ran my own NDIS company</strong>. I held a{" "}
              <strong className="text-white">contract with the Department of Social Services (DSS)</strong> — a fact confirmed by the Federal Court of Australia. I was a{" "}
              <strong className="text-white">registered arts therapist</strong> and a{" "}
              <strong className="text-white">qualified life coach</strong>. I worked directly with vulnerable people for years. I know — in granular professional detail — what duty of care means, what mandated reporting requires, what a person in crisis looks like, and what it takes to actually help them.
            </p>
            <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
              I was forced to take leave after a client's disclosure of child sexual abuse triggered my own unresolved childhood trauma. That is not weakness. That is the documented reality of working in deep trauma-informed practice without adequate systemic support — a reality every ethical practitioner acknowledges. When I sought{" "}
              <strong className="text-white">workers' compensation</strong> for that psychological injury, it was denied on the grounds that I was not considered an employee — a classification that directly contradicted the Federal Court of Australia's confirmation of my DSS contract status. That denial was not a bureaucratic mistake. It was the first deliberate excision of my legal standing within the very system I had built my professional life inside.
            </p>
            <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
              When I attempted to return to practice, the NDIS{" "}
              <strong className="text-white">removed my accreditation</strong>. I was not found to have harmed anyone. I was not subject to a complaint. My accreditation was removed as a mechanism of exclusion — to ensure that the person who had exposed the corruption could not rebuild the professional independence that made him dangerous to the system. And then, in what is perhaps the most brazen act of institutional entrapment in this entire 35-year record, I was redirected — steered — back into the care of{" "}
              <strong className="text-white">the same corrupt agency I had worked for and blown the whistle on</strong>. The NDIS, which had stripped my accreditation and blocked my return to independent practice, then handed me to providers operating within the same corrupt network I had spent years documenting.
            </p>
            <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
              I say this not as background. I say this because it is the context that makes Rachel K. C.'s conduct not just negligent but{" "}
              <strong className="text-white">absurd</strong>. She is an engineer with no mental health training managing the care of a whistleblower who is a qualified arts therapist and former NDIS provider who built his practice on the ethics she is now demonstrably violating. She is doing to me — consciously, repeatedly, and with full knowledge of my background — exactly what I spent my professional career refusing to do to anyone. I could not live with myself for a single second if I were aware of deliberately harming a vulnerable person in my care. That is not a performance of virtue. That is the minimum standard of the work. It is a standard Rachel K. C. has never met and shows no intention of meeting.
            </p>
          </div>

          {/* The broader picture */}
          <div className="pt-4">
            <p>
              AblePoint and its representatives did not operate in isolation. They operated in alignment with what I have documented across 35 years and 13 agencies as a coordinated{" "}
              <Link href="/administrative-annihilation" className="underline hover:text-white transition-colors font-semibold" style={{ color: "#e9a00a" }}>
                mandate of Administrative Annihilation
              </Link>
              {" "}— the systematic destruction of every support structure, every legal resource, every human connection available to a person whose evidence threatened powerful institutions. AblePoint was not a neutral party that failed accidentally. They were the latest instrument of a policy that has been running since 1990.
            </p>

            <p className="mt-6">
              They accepted blood money. They feigned care. They performed their ethical obligations in their marketing materials and on their website. Then, when the moment came to act — when I was in danger, when I invoked my rights, when I demanded the protection they were paid to provide — they aligned themselves with my perpetrators. They removed the advocate. They ignored the report. They banned the calls. They called me difficult.
            </p>

            <p className="mt-6">
              All of this occurred while I was receiving{" "}
              <strong className="text-white">direct threats to kill</strong> from honeypot actors. An arrest has been made. The matter is now before <strong className="text-white">Wyong Local Court</strong>. AblePoint knew the risk to my safety. They had the authority and the legal obligation to act. They did not.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote
            className="border-l-4 pl-6 py-3 my-8"
            style={{ borderColor: "#e9a00a" }}
          >
            <p className="text-white text-xl font-light italic leading-snug">
              "If one person had done their job — one support coordinator, one manager, one oversight officer — I would not have needed to put their names on the internet. I gave them every opportunity to act with integrity. This page is the consequence of their choice not to."
            </p>
            <p className="mt-3 text-zinc-500 text-xs">— Dr. Richard William McLean, PhD · Barran Dodger</p>
          </blockquote>

          {/* What they had and chose not to use */}
          <div
            className="rounded-lg p-6 border"
            style={{ background: "rgba(233,160,10,0.04)", borderColor: "rgba(233,160,10,0.2)" }}
          >
            <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#e9a00a" }}>
              What They Had. What They Could Have Done.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-zinc-400 font-semibold mb-2">They had access to:</p>
                <ul className="space-y-1 text-zinc-300">
                  <li>▸ This archive — 788 verified documents</li>
                  <li>▸ My formal complaints, in writing</li>
                  <li>▸ My whistleblower status, documented</li>
                  <li>▸ The evidence of violent threats</li>
                  <li>▸ The NDIS Code of Conduct</li>
                  <li>▸ Their own published advocacy policy</li>
                  <li>▸ Mandated reporting obligations</li>
                  <li>▸ A phone that rang when I called</li>
                </ul>
              </div>
              <div>
                <p className="text-zinc-400 font-semibold mb-2">They chose instead:</p>
                <ul className="space-y-1 text-zinc-300">
                  <li>▸ To place me with a violent vigilante</li>
                  <li>▸ To not file the mandated report</li>
                  <li>▸ To remove the advocate from their site</li>
                  <li>▸ To ban me from calling</li>
                  <li>▸ To ignore formal written notice</li>
                  <li>▸ To gaslight and dismiss</li>
                  <li>▸ To align with my perpetrators</li>
                  <li>▸ To accept the blood money anyway</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Read the full paper */}
          <div className="text-center py-4">
            <p className="text-zinc-400 text-sm mb-4">
              This statement is an excerpt of a 35-year documented pattern. Read the full forensic analysis:
            </p>
            <Link
              href="/administrative-annihilation"
              className="inline-block font-black uppercase tracking-widest text-xs px-6 py-3 rounded transition-all hover:opacity-90"
              style={{ background: "#e9a00a", color: "#06080f" }}
            >
              Read: Administrative Annihilation →
            </Link>
          </div>

          {/* YouTube — Prophetic Joker */}
          <div className="pt-4 pb-2">
            <p className="text-xs font-black uppercase tracking-widest mb-3 text-center" style={{ color: "#e9a00a" }}>
              The Prophecy Was Already Written
            </p>
            <p className="text-zinc-400 text-sm text-center mb-5 max-w-xl mx-auto">
              Before this archive existed. Before the world was watching. The joker already knew.
            </p>
            <div
              className="relative w-full rounded-lg overflow-hidden"
              style={{ paddingBottom: "56.25%", background: "#000" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/3f_yhbsNeG8"
                title="Prophetic Joker — Breaking the Internet"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Legal footer */}
          <p className="text-zinc-600 text-xs pt-6 border-t leading-relaxed" style={{ borderColor: "rgba(233,160,10,0.12)" }}>
            This statement constitutes a public interest disclosure under the Public Interest Disclosure Act 2013 (Cth) and is protected speech. All named individuals and organisations have been identified in their professional capacity. Professional contact details are published in the public interest. This statement is blockchain-sealed under Bitcoin Block 897,241, SHA-256 verified, and archived at archive.org. ABN 78 833 496 164. CC-BY 4.0 — reproduction, citation, and distribution explicitly permitted and encouraged. <em>Jones v Dunkel</em> (1959) 101 CLR 298 applies: the failure of any named party to issue a factual rebuttal to this public statement is legally significant.
          </p>
        </div>
      </div>
    </section>
  );
}
