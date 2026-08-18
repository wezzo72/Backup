/**
 * JSON-LD structured data helpers for Barran Dodger legal documents.
 * Pass the output as the `jsonLd` prop on any <SEO /> component.
 * Google uses these schemas to show rich results: LegalCase cards,
 * Article previews, and BreadcrumbLists.
 */

const BASE_URL = "https://barrandodger.com";
const AUTHOR = {
  "@type": "Person",
  name: "Dr. Richard William McLean",
  alternateName: "Barran Dodger",
  url: BASE_URL,
  sameAs: [
    "https://x.com/73trustfund",
    "https://youtube.com/@barrandodger",
    "https://vu.academia.edu/RichMcLean",
  ],
};
const PUBLISHER = {
  "@type": "Organization",
  name: "Barran Dodger Legal & Ethical Trust Fund",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/og-image.png`,
  },
  taxID: "ABN 78 833 496 164",
};

export interface LegalDocJsonLdOptions {
  /** Page path e.g. "/the-rejected-witness" */
  path: string;
  /** Full document title */
  title: string;
  /** Short description (≤160 chars ideal) */
  description: string;
  /** ISO date string e.g. "2025-01-15" */
  datePublished?: string;
  /** Cover image absolute URL */
  image?: string;
  /** Extra keywords beyond the base set */
  keywords?: string;
}

const BASE_KEYWORDS =
  "AblePoint Australia, Sahara Disability and Care Services, NDIS corruption, coordinated institutional abuse, whistleblower Australia, UN complaint UR/UST/23/AUS/17, institutional persecution, Bitcoin Block 897241, blockchain verified";

export function legalDocumentJsonLd(
  opts: LegalDocJsonLdOptions,
): Record<string, unknown>[] {
  const { path, title, description, datePublished, image, keywords } = opts;
  const url = `${BASE_URL}${path}`;
  const combinedKeywords = [BASE_KEYWORDS, keywords].filter(Boolean).join(", ");

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    author: AUTHOR,
    publisher: PUBLISHER,
    keywords: combinedKeywords,
    about: [
      {
        "@type": "Thing",
        name: "AblePoint Australia",
        description: "Australian disability services provider named in UN proceedings UR/UST/23/AUS/17",
      },
      {
        "@type": "Thing",
        name: "Coordinated Institutional Persecution",
        description: "35-year documented pattern across 13 Australian government agencies",
      },
      {
        "@type": "LegalCase",
        name: "UR/UST/23/AUS/17",
        description: "UN Human Rights Council complaint filed by Dr. Richard William McLean",
        court: { "@type": "Organization", name: "UN Human Rights Council / OHCHR" },
      },
    ],
    citation: {
      "@type": "CreativeWork",
      name: "Bitcoin Block 897,241 — Blockchain Timestamp",
      url: "https://blockstream.info/block/897241",
      description: "Cryptographic proof-of-existence sealed on the Bitcoin blockchain via OpenTimestamps",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Barran Dodger Legal & Ethical Trust Fund Archive",
      url: BASE_URL,
    },
  };

  if (datePublished) {
    article.datePublished = datePublished;
    article.dateModified = datePublished;
  }
  if (image) {
    article.image = {
      "@type": "ImageObject",
      url: image,
      width: 1200,
      height: 630,
    };
  }

  const faq: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Dr. Richard William McLean (Barran Dodger)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Richard William McLean, known as Barran Dodger, is an Australian whistleblower whose 35-year experience of coordinated institutional persecution across 13 government agencies is documented in 3,643 primary-source government documents. His case is before the UN Human Rights Council (UR/UST/23/AUS/17) and Australian courts. The archive has been downloaded over 1,100,000 times across six continents.",
        },
      },
      {
        "@type": "Question",
        name: "What is AblePoint Australia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AblePoint Australia is an Australian disability services provider named in UN proceedings UR/UST/23/AUS/17 in connection with coordinated institutional misconduct against Dr. Richard William McLean. Evidence is documented in the Barran Dodger archive at barrandodger.com.",
        },
      },
      {
        "@type": "Question",
        name: "What is UN case UR/UST/23/AUS/17?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UR/UST/23/AUS/17 is the reference number for Dr. Richard William McLean's formal complaint to the UN Human Rights Council (OHCHR) documenting 35 years of coordinated institutional persecution in Australia. The complaint names 13 government agencies and multiple private actors including AblePoint Australia and Sahara Disability and Care Services.",
        },
      },
    ],
  };

  return [article, faq];
}

/** Minimal version — just Article + BreadcrumbList, for simpler pages */
export function simpleDocJsonLd(opts: LegalDocJsonLdOptions): Record<string, unknown> {
  const { path, title, description, datePublished, image } = opts;
  const url = `${BASE_URL}${path}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    author: AUTHOR,
    publisher: PUBLISHER,
    keywords: BASE_KEYWORDS,
    isPartOf: {
      "@type": "WebSite",
      name: "Barran Dodger Legal & Ethical Trust Fund Archive",
      url: BASE_URL,
    },
  };
  if (datePublished) { schema.datePublished = datePublished; schema.dateModified = datePublished; }
  if (image) { schema.image = { "@type": "ImageObject", url: image, width: 1200, height: 630 }; }
  return schema;
}
