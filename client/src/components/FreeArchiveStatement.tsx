import { Globe, Unlock, BookOpen, Scale, Heart } from "lucide-react";
import { Link } from "wouter";
import { grantFreeAccess } from "./PDFGateProvider";

export function FreeArchiveStatement() {
  return (
    <section
      className="w-full rounded-2xl border-2 overflow-hidden"
      style={{
        borderColor: "rgba(132,204,22,0.45)",
        background: "linear-gradient(135deg, #0a1f00 0%, #0f2e05 50%, #061a00 100%)",
      }}
      data-testid="free-archive-statement"
    >
      {/* Top accent bar */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, #84cc16, #22c55e, #84cc16)" }} />

      <div className="px-6 py-8 md:px-10 md:py-10 space-y-6">
        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(132,204,22,0.18)", border: "2px solid rgba(132,204,22,0.55)" }}
          >
            <Globe className="h-7 w-7 text-lime-400" />
          </div>
          <div>
            <p className="text-lime-400 text-xs font-black uppercase tracking-[0.25em] mb-1">
              Statement of Principle · Barran Dodger Archive
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-serif font-bold leading-tight">
              This Archive is Free — A Service to Humanity and Truth
            </h2>
          </div>
        </div>

        {/* Statement body */}
        <div className="space-y-3 text-green-100/80 text-sm leading-relaxed max-w-3xl">
          <p>
            Every document, paper, PDF, and piece of evidence in this archive is available{" "}
            <strong className="text-white">at no cost to any person, anywhere in the world.</strong>{" "}
            This is not a commercial enterprise. It is a legal and historical record — produced by one man,
            over 35 years, at great personal cost — and it belongs to everyone who needs it.
          </p>
          <p>
            Truth does not charge admission. Accountability cannot be paywalled. If a single person
            anywhere on Earth is helped by seeing what institutional systems did here — and did not do —
            then every document has served its purpose.
          </p>
          <p className="text-green-200/60 text-xs">
            Voluntary donations of $3.33 support the ongoing legal case and are gratefully received.
            They are never required. The archive remains open whether you give or not.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: <Unlock className="h-5 w-5 text-lime-400" />,
              title: "Permanently Free",
              desc: "No account, no subscription, no payment required. Click any document to read or download immediately.",
            },
            {
              icon: <BookOpen className="h-5 w-5 text-lime-400" />,
              title: "3,643+ Primary Sources",
              desc: "Government documents, court records, medical files, forensic analyses — the full record, unredacted.",
            },
            {
              icon: <Scale className="h-5 w-5 text-lime-400" />,
              title: "Open to All",
              desc: "Journalists, researchers, legal professionals, advocates, and the public — all welcome, no restriction.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-xl p-4 space-y-1.5"
              style={{ background: "rgba(132,204,22,0.07)", border: "1px solid rgba(132,204,22,0.18)" }}
            >
              {p.icon}
              <p className="text-white font-bold text-sm">{p.title}</p>
              <p className="text-green-100/60 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => { grantFreeAccess(); window.location.href = "/archive"; }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-black transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #84cc16, #22c55e)" }}
            data-testid="button-free-access-statement"
          >
            <Unlock className="h-4 w-4" />
            Open the Archive — Free
          </button>
          <Link
            href="/confidential-government-documents"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-lime-300 transition-all hover:text-white"
            style={{ background: "rgba(132,204,22,0.10)", border: "1px solid rgba(132,204,22,0.35)" }}
          >
            <Scale className="h-4 w-4" />
            Government Evidence — 126 Documents
          </Link>
          <Link
            href="/donate"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-orange-300 transition-all hover:text-white"
            style={{ background: "rgba(255,105,20,0.08)", border: "1px solid rgba(255,105,20,0.25)" }}
          >
            <Heart className="h-4 w-4" />
            Donate $3.33 to Support the Fight
          </Link>
        </div>
      </div>
    </section>
  );
}
