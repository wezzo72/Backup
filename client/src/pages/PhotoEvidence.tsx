import { SEO } from "@/components/SEO";
import { Camera, ExternalLink } from "lucide-react";

const FOLDER_ID = "1cMuOW7E2Mvtlny2t4UALViHla5yRf6Ic";

export default function PhotoEvidence() {
  return (
    <>
      <SEO
        title="Timestamped Photo Evidence"
        description="Timestamped photographic evidence — JPEG images with embedded metadata documenting the persecution of Dr. Richard William McLean. Primary source visual record."
        image="https://barrandodger.com/og-default.png"
      />

      <div className="min-h-screen" style={{ background: "#02030a", color: "#c4d4ef" }}>

        {/* Header */}
        <div className="border-b" style={{ background: "linear-gradient(180deg, #07091a 0%, #02030a 100%)", borderColor: "rgba(233,160,10,0.15)" }}>
          <div className="container mx-auto max-w-5xl px-6 py-12 space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[0.5em]" style={{ color: "rgba(233,160,10,0.5)" }}>
              Dr Barran Resonance Dodger · Legal &amp; Ethical Trust Fund · Primary Source Evidence
            </p>
            <div className="flex items-start gap-4">
              <Camera className="h-8 w-8 mt-1 flex-shrink-0" style={{ color: "rgba(233,160,10,0.7)" }} />
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                  Timestamped Photo Evidence
                </h1>
                <p className="text-base leading-7 font-serif" style={{ color: "rgba(196,212,239,0.75)" }}>
                  Photographic primary sources with embedded timestamp metadata — part of the
                  3,643-document blockchain-verified archive documenting systematic institutional
                  persecution across 35 years.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`https://drive.google.com/drive/folders/${FOLDER_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors hover:opacity-80"
                style={{ borderColor: "rgba(233,160,10,0.3)", color: "rgba(233,160,10,0.8)", background: "rgba(233,160,10,0.05)" }}
              >
                <ExternalLink className="h-3 w-3" />
                Open in Google Drive
              </a>
            </div>
          </div>
        </div>

        {/* Embedded folder */}
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(233,160,10,0.15)", background: "rgba(255,255,255,0.02)" }}
          >
            {/* Grid view */}
            <iframe
              src={`https://drive.google.com/embeddedfolderview?id=${FOLDER_ID}#grid`}
              title="Timestamped Photo Evidence — Google Drive"
              className="w-full"
              style={{ height: "70vh", minHeight: "500px", border: "none" }}
              allow="autoplay"
            />
          </div>

          {/* Note */}
          <p className="text-xs mt-4 text-center" style={{ color: "rgba(196,212,239,0.4)" }}>
            Folder must be set to "Anyone with the link can view" for images to display. ·{" "}
            <a
              href={`https://drive.google.com/drive/folders/${FOLDER_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              Open full-screen in Drive
            </a>
          </p>
        </div>

      </div>
    </>
  );
}
