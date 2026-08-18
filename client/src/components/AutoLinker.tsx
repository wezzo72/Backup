import { Link } from "wouter";
import { DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";

type TermDef = {
  type: "page";
  to: string;
} | {
  type: "document";
  docKey: keyof typeof KEY_DOCUMENTS;
};

const TERM_MAP: Record<string, TermDef> = {
  // ── ICC / International bodies ───────────────────────────────────────
  "Rome Statute": { type: "page", to: "/case-studies" },
  "Article 7": { type: "page", to: "/case-studies" },
  "Article 7(1)(h)": { type: "page", to: "/case-studies" },
  "Article 7(1)(e)": { type: "page", to: "/case-studies" },
  "Article 7(1)(f)": { type: "page", to: "/case-studies" },
  "Article 7(1)(i)": { type: "page", to: "/case-studies" },
  "ICC submission": { type: "page", to: "/case-studies" },
  "ICC": { type: "page", to: "/case-studies" },
  "International Criminal Court": { type: "page", to: "/case-studies" },
  "UNHCR submission": { type: "page", to: "/case-studies" },
  "UNHCR submission in Geneva": { type: "page", to: "/case-studies" },
  "UNHCR": { type: "document", docKey: "certifiedRecord" },
  "The Hague": { type: "page", to: "/case-studies" },

  // ── Australian bodies ─────────────────────────────────────────────────
  "PID Act": { type: "document", docKey: "pidActAnalysis" },
  "Public Interest Disclosure Act": { type: "document", docKey: "pidActAnalysis" },
  "Public Interest Disclosure Act 2013": { type: "document", docKey: "pidActAnalysis" },
  "whistleblower protection": { type: "document", docKey: "pidActAnalysis" },
  "whistleblower": { type: "page", to: "/legal-status" },
  "Jones v Dunkel": { type: "page", to: "/legal-status" },
  "NDIS": { type: "page", to: "/case-studies" },
  "National Disability Insurance Scheme": { type: "page", to: "/case-studies" },
  "Comcare": { type: "page", to: "/timeline" },
  "AAT": { type: "page", to: "/timeline" },
  "Administrative Appeals Tribunal": { type: "page", to: "/timeline" },
  "NACC": { type: "page", to: "/legal-status" },
  "National Anti-Corruption Commission": { type: "page", to: "/legal-status" },
  "AHRC": { type: "page", to: "/legal-status" },
  "Australian Human Rights Commission": { type: "page", to: "/legal-status" },
  "Federal Court": { type: "page", to: "/legal-status" },
  "AFP": { type: "page", to: "/evidence" },
  "Australian Federal Police": { type: "page", to: "/evidence" },
  "ASIO": { type: "page", to: "/evidence" },
  "ASIO operative": { type: "page", to: "/evidence" },
  "ASIC": { type: "page", to: "/case-studies" },
  "ATO": { type: "page", to: "/evidence" },
  "corruption": { type: "page", to: "/case-studies" },

  // ── Named individuals ─────────────────────────────────────────────────
  "Tony Ridley": { type: "page", to: "/evidence" },
  "Allen Rigby": { type: "page", to: "/evidence" },
  "Bruce McMaster": { type: "page", to: "/evidence" },
  "Steve Iasonidis": { type: "page", to: "/evidence" },
  "Debbie Morgan": { type: "page", to: "/evidence" },
  "Sukhi Tear": { type: "document", docKey: "entrapmentAffidavit" },
  "Syed Salman Kazmi": { type: "document", docKey: "entrapmentAffidavit" },
  "Philip Glass": { type: "document", docKey: "entrapmentAffidavit" },
  "Micron21": { type: "document", docKey: "micron21" },

  // ── Technology & surveillance ─────────────────────────────────────────
  "Pegasus spyware": { type: "document", docKey: "digitalOppression" },
  "Pegasus": { type: "document", docKey: "digitalOppression" },
  "V2K": { type: "document", docKey: "v2kEvidenceReview" },
  "Voice-to-Skull": { type: "document", docKey: "v2kEvidenceReview" },
  "Zersetzung": { type: "document", docKey: "targetedIndividualHandbook" },
  "directed energy weapons": { type: "document", docKey: "v2kEvidenceReview" },
  "DEW": { type: "document", docKey: "v2kEvidenceReview" },
  "targeted individual": { type: "document", docKey: "targetedIndividualHandbook" },
  "gangstalking": { type: "document", docKey: "targetedIndividualHandbook" },
  "electronic harassment": { type: "document", docKey: "v2kEvidenceReview" },
  "Microwave Auditory Effect": { type: "document", docKey: "v2kEvidenceReview" },
  "Frey Effect": { type: "document", docKey: "v2kEvidenceReview" },
  "State-Sanctioned Targeting": { type: "document", docKey: "stateTargeting" },
  "assassination attempt": { type: "document", docKey: "stateTargeting" },

  // ── Medical / psychiatric ─────────────────────────────────────────────
  "psychiatric weaponization": { type: "document", docKey: "beyondPathology" },
  "dual-pathology model": { type: "document", docKey: "beyondPathology" },
  "14 involuntary hospitalisations": { type: "page", to: "/timeline" },
  "involuntary hospitalisation": { type: "page", to: "/timeline" },
  "involuntary hospitalisations": { type: "page", to: "/timeline" },
  "psychiatric hospitalisation": { type: "page", to: "/case-studies" },

  // ── Financial ─────────────────────────────────────────────────────────
  "$112M": { type: "page", to: "/taxpayer-cost-analysis" },
  "$112 million": { type: "page", to: "/taxpayer-cost-analysis" },
  "$32.9M": { type: "page", to: "/taxpayer-cost-analysis" },
  "$18M": { type: "page", to: "/taxpayer-cost-analysis" },
  "taxpayer cost": { type: "page", to: "/taxpayer-cost-analysis" },
  "taxpayer": { type: "page", to: "/taxpayer-cost-analysis" },
  "identity theft": { type: "document", docKey: "certifiedRecord" },
  "financial destruction": { type: "document", docKey: "certifiedRecord" },
  "employment paradox": { type: "document", docKey: "manErased" },

  // ── Blockchain / archive integrity ────────────────────────────────────
  "blockchain verification": { type: "page", to: "/blockchain" },
  "blockchain-verified": { type: "page", to: "/blockchain" },
  "blockchain-timestamped": { type: "page", to: "/blockchain" },
  "blockchain timestamps": { type: "page", to: "/blockchain" },
  "blockchain": { type: "page", to: "/blockchain" },

  // ── Key documents ──────────────────────────────────────────────────────
  "The Man Australia Tried to Erase": { type: "document", docKey: "manErased" },
  "Digital Oppression": { type: "document", docKey: "digitalOppression" },
  "Cosmic Scroll of Ten": { type: "document", docKey: "cosmicScroll" },
  "Cosmic Scroll": { type: "document", docKey: "cosmicScroll" },
  "Administrative Annihilation": { type: "document", docKey: "administrativeAnnihilation" },
  "Architecture of Administrative Annihilation": { type: "document", docKey: "administrativeAnnihilation" },
  "Beyond Pathology": { type: "document", docKey: "beyondPathology" },
  "Crimes Against Humanity": { type: "document", docKey: "crimesAgainstHumanityDemand" },
  "Entrapment for Erasure": { type: "document", docKey: "entrapmentAffidavit" },
  "Evidence Summary": { type: "document", docKey: "evidenceSummary" },
  "Paradox of Persecution": { type: "document", docKey: "paradoxOfPersecution" },
  "Certified Record": { type: "document", docKey: "certifiedRecord" },
  "Universal Master Command": { type: "document", docKey: "universalMasterCommand" },

  // ── Key pages ─────────────────────────────────────────────────────────
  "Retrospective Statement": { type: "page", to: "/retrospective-statement" },
  "Joseph Parallel": { type: "page", to: "/josephs-coat" },
  "Joseph's Coat": { type: "page", to: "/josephs-coat" },
  "Enliven Chain": { type: "page", to: "/gospel" },
  "Eliven Chain": { type: "page", to: "/gospel" },
  "Gospel of Barran Dodger": { type: "page", to: "/gospel" },
  "Declaration of Sovereignty": { type: "page", to: "/manifesto" },
  "evidence archive": { type: "page", to: "/evidence" },
  "evidence vault": { type: "page", to: "/evidence-vault" },
  "prophetic papers": { type: "page", to: "/prophetic-papers" },
  "legal status": { type: "page", to: "/legal-status" },
  "case studies": { type: "page", to: "/case-studies" },
  "timeline": { type: "page", to: "/timeline" },
  "manifesto": { type: "page", to: "/manifesto" },
  "Wyong Local Court": { type: "page", to: "/verdict-before-the-court" },
  "Wyong court": { type: "page", to: "/verdict-before-the-court" },
  "14 May 2026": { type: "page", to: "/verdict-before-the-court" },
  "court date": { type: "page", to: "/verdict-before-the-court" },
  "verdict before the court": { type: "page", to: "/verdict-before-the-court" },
  "active proceedings": { type: "page", to: "/verdict-before-the-court" },
  "6 continents": { type: "page", to: "/the-truth" },
  "six continents": { type: "page", to: "/the-truth" },
  "The Paper": { type: "page", to: "/administrative-annihilation" },
  "25,000-word": { type: "page", to: "/administrative-annihilation" },
  "The Unlikely Vessel": { type: "page", to: "/the-unlikely-vessel" },
  "Coordinated Institutional Mobbing": { type: "page", to: "/coordinated-institutional-mobbing" },
  "institutional mobbing": { type: "page", to: "/coordinated-institutional-mobbing" },
  "forensic analysis": { type: "page", to: "/forensic-analysis" },
  "Free Ebooks": { type: "page", to: "/free-ebooks" },
  "support the fund": { type: "page", to: "/donate" },
  "Church of Barran": { type: "page", to: "/church" },

  // ── Named people & organisations ──────────────────────────────────────
  "Barran Dodger": { type: "page", to: "/" },
  "Dr. Richard William McLean": { type: "page", to: "/retrospective-statement" },
  "Dr. Richard McLean": { type: "page", to: "/retrospective-statement" },
  "AblePoint Australia": { type: "page", to: "/" },
  "AblePoint": { type: "page", to: "/" },
  "Sahara Disability and Care Services": { type: "page", to: "/" },
  "Project Voyager": { type: "page", to: "/" },
  "Brett Butler": { type: "page", to: "/" },

  // ── Key events & documented facts ─────────────────────────────────────
  "clinical death": { type: "page", to: "/timeline" },
  "Werribee Mercy Hospital": { type: "page", to: "/timeline" },
  "Port Macquarie": { type: "page", to: "/timeline" },
  "Long Jetty": { type: "page", to: "/case-studies" },
  "DSS contract": { type: "page", to: "/legal-status" },
  "registered arts therapist": { type: "page", to: "/retrospective-statement" },
  "arts therapist": { type: "page", to: "/retrospective-statement" },
  "workers' compensation": { type: "page", to: "/legal-status" },
  "workers compensation": { type: "page", to: "/legal-status" },
  "political exile": { type: "page", to: "/case-studies" },
  "administrative annihilation": { type: "page", to: "/administrative-annihilation" },
  "Bitcoin Block 897,241": { type: "page", to: "/blockchain" },
  "blockchain sealed": { type: "page", to: "/blockchain" },
  "35-year": { type: "page", to: "/timeline" },
  "13 agencies": { type: "page", to: "/retrospective-statement" },
  "3,643 documents": { type: "page", to: "/evidence" },
  "zero defamation": { type: "page", to: "/legal-status" },
  "no rebuttal": { type: "page", to: "/legal-status" },
  "OHCHR": { type: "page", to: "/legal-status" },
  "UR/UST/23/AUS/17": { type: "page", to: "/legal-status" },
};

const sortedTerms = Object.keys(TERM_MAP).sort((a, b) => b.length - a.length);

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const termRegex = new RegExp(
  `(${sortedTerms.map(escapeRegex).join("|")})`,
  "g"
);

// Link style: amber gold — works on both white and dark backgrounds
const linkClass = "text-lime-400 font-semibold underline decoration-lime-400/50 underline-offset-2 decoration-2 hover:text-lime-300 hover:decoration-lime-400 transition-colors cursor-pointer";

interface AutoLinkerProps {
  text: string;
  maxLinks?: number;
  className?: string;
}

export function AutoLinkedText({ text, maxLinks = 6, className }: AutoLinkerProps) {
  const linked = new Set<string>();
  const parts: (string | { term: string; def: TermDef })[] = [];
  let lastIndex = 0;
  let linkCount = 0;

  const matches: { index: number; term: string }[] = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(termRegex.source, "gi");
  while ((m = re.exec(text)) !== null) {
    const matchedKey = sortedTerms.find(t => t.toLowerCase() === m![0].toLowerCase());
    if (matchedKey) {
      matches.push({ index: m.index, term: matchedKey });
    }
  }

  for (const match of matches) {
    if (linkCount >= maxLinks) break;

    const termKey = match.term.toLowerCase();
    if (linked.has(termKey)) continue;

    const def = TERM_MAP[match.term];
    if (!def) continue;

    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const actualText = text.slice(match.index, match.index + match.term.length);
    parts.push({ term: actualText, def });
    linked.add(termKey);
    linkCount++;
    lastIndex = match.index + match.term.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (linkCount === 0) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;

        if (part.def.type === "page") {
          return (
            <Link key={i} href={part.def.to} className={linkClass}>
              {part.term}
            </Link>
          );
        }

        const doc = KEY_DOCUMENTS[part.def.docKey];
        return (
          <DocumentPopup
            key={i}
            title={doc.title}
            description={doc.description}
            url={doc.url}
            tags={doc.tags}
            aiExcerpt={doc.aiExcerpt}
          >
            {part.term}
          </DocumentPopup>
        );
      })}
    </span>
  );
}

export { TERM_MAP };
