import { useState } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

interface PDFViewerProps {
  url: string;
  title: string;
  filename?: string;
  trigger?: React.ReactNode;
}

export function PDFViewer({ url, title, filename, trigger }: PDFViewerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger ?? (
          <button
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors"
            style={{ borderColor: "rgba(233,160,10,0.3)", color: "#e9a00a" }}
            data-testid="btn-preview-pdf"
          >
            <FileText className="w-3.5 h-3.5" />
            Preview
          </button>
        )}
      </span>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex flex-col"
          style={{ background: "rgba(0,0,0,0.92)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b shrink-0"
            style={{ background: "#06080f", borderColor: "rgba(233,160,10,0.2)" }}>
            <div className="flex items-center gap-2 min-w-0">
              <FileText className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-white text-sm font-bold truncate">{title}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={url}
                download={filename}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
                style={{ background: "#e9a00a", color: "#000" }}
                data-testid="btn-pdf-viewer-download"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fff" }}
                data-testid="btn-pdf-viewer-open"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open
              </a>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
                data-testid="btn-pdf-viewer-close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <div className="flex-1 min-h-0">
            <iframe
              src={`${url}#toolbar=1&navpanes=0&scrollbar=1`}
              title={title}
              className="w-full h-full border-0"
              data-testid="iframe-pdf-viewer"
            />
          </div>
        </div>
      )}
    </>
  );
}
