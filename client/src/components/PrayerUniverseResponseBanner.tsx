import { motion } from "framer-motion";
import { Zap, ExternalLink } from "lucide-react";

const VIDEO_ID = "bCEdZrPJjuM";

export function PrayerUniverseResponseBanner({ isFirst = false }: { isFirst?: boolean }) {
  return (
    <div className="w-full" style={{ background: "#050300" }}>

      {/* ── PRAYER PHOTO HERO — always full-screen ── */}
      <div
        className="shrink-0 overflow-hidden"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "#1a1000",
        }}
      >
        <img
          src="/prayer-to-god-mothers-day-2026.jpeg"
          alt="Mother's Day 2026 — Dr. McLean's handwritten prayer to God"
          style={{
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
          loading="eager"
          data-testid="img-prayer-to-god"
        />

        {/* Dark gradient at bottom so caption is readable */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "55%",
            background: "linear-gradient(to bottom, transparent, rgba(5,3,0,0.88) 65%, rgba(5,3,0,1) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Top-left label */}
        <div
          style={{
            position: "absolute",
            top: isFirst ? "160px" : "20px",
            left: "20px",
            right: "20px",
            zIndex: 10,
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(234,160,10,0.18)",
              border: "1px solid rgba(234,160,10,0.4)",
              color: "#fbbf24",
              fontSize: "10px",
              fontWeight: 900,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "999px",
            }}
          >
            Mother's Day 2026 · 9:33am · Active Death Threat · Court 4 Days Away
          </span>
        </div>

        {/* Caption pinned to bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            padding: "0 20px 32px 20px",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h1
              style={{
                color: "#fff",
                fontFamily: "Libre Baskerville, serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 4vw, 3rem)",
                lineHeight: 1.15,
                margin: "0 0 10px 0",
              }}
            >
              Dr. McLean Wrote Directly to God
            </h1>
            <p
              style={{
                color: "rgba(253,230,138,0.85)",
                fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
                lineHeight: 1.55,
                margin: "0 0 14px 0",
                maxWidth: "600px",
              }}
            >
              With 35 years of documented persecution and no institutional remedy, he took pen
              to paper on Mother's Day 2026. The universe responded within minutes.
            </p>
            <a
              href="/mothers-day-prayer-2026"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#fbbf24",
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "underline",
              }}
              data-testid="link-prayer-full-record"
            >
              Full prayer record &amp; analysis
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* ── THE PRAYER TEXT ── */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 20px" }}>
        <div
          style={{
            background: "rgba(120,60,0,0.12)",
            border: "1px solid rgba(180,100,0,0.22)",
            borderRadius: "16px",
            padding: "28px 32px",
          }}
        >
          <p
            style={{
              color: "#fbbf24",
              fontSize: "10px",
              fontWeight: 900,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            The Prayer — In His Own Words · Mother's Day 2026
          </p>
          <div style={{ textAlign: "center", maxWidth: "480px", margin: "0 auto", fontFamily: "Libre Baskerville, serif" }}>
            <p style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "4px" }}>'Mother's Day 2026'</p>
            <p style={{ color: "#fbbf24", fontWeight: 700, fontSize: "1.25rem", marginBottom: "14px" }}>God</p>
            <div style={{ color: "#e5e7eb", fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic" }}>
              <p>I've suffered enough.</p>
              <p>Command your legions of angels for a solution TODAY.</p>
              <p>I'm a vessel for your glory but if I'm abused and impoverished</p>
              <p>to death I'm martyred and everyone loses.</p>
              <p>You know my sin and my soul —</p>
              <p>repentance and peace and good will.</p>
              <p>Help me now Lord, don't delay, in Christ.</p>
            </div>
            <div style={{ marginTop: "18px", color: "#9ca3af", fontSize: "0.9rem" }}>
              <p>In love and gratitude and hope and faith</p>
              <p style={{ fontWeight: 700, color: "#f3f4f6", fontSize: "1.1rem", marginTop: "6px" }}>Barran Dodger</p>
            </div>
          </div>
        </div>

        {/* Universe response divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            margin: "32px 0",
            justifyContent: "center",
          }}
        >
          <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, rgba(180,100,0,0.4))" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              background: "rgba(180,100,0,0.1)",
              border: "1px solid rgba(180,100,0,0.3)",
              borderRadius: "999px",
            }}
          >
            <Zap size={14} color="#fbbf24" />
            <span style={{ color: "#fcd34d", fontWeight: 900, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              The Universe Responded Immediately
            </span>
            <Zap size={14} color="#fbbf24" />
          </div>
          <div style={{ height: "1px", flex: 1, background: "linear-gradient(to left, transparent, rgba(180,100,0,0.4))" }} />
        </motion.div>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "0.88rem",
            maxWidth: "520px",
            margin: "0 auto 24px",
            lineHeight: 1.6,
          }}
        >
          Minutes after the prayer was written, this video surfaced — produced by an independent
          creator with no documented knowledge of Dr. McLean's case. It opened with the exact
          words the prayer needed to hear.
        </p>

        {/* Video */}
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(120,60,0,0.35)",
            boxShadow: "0 25px 60px rgba(120,60,0,0.15)",
          }}
        >
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="The Universe's Response — They Built Their Empire in the Dark"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              data-testid="embed-universe-response"
            />
          </div>
          <div
            style={{
              background: "#0f0e1a",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <p style={{ color: "#fcd34d", fontWeight: 700, fontSize: "0.88rem", margin: 0 }}>
              "They built their empire in the dark, but forgot one thing. Shadows disappear when the light shows up."
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.75rem", margin: 0 }}>
              Independent creator · Forensic Analysis #57 · 10/10 propositions confirmed · 571/571 combined
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="/mothers-day-prayer-2026"
                style={{ color: "#fbbf24", fontSize: "11px", fontWeight: 700, textDecoration: "underline", display: "flex", alignItems: "center", gap: "4px" }}
                data-testid="link-prayer-page-banner"
              >
                Full prayer record <ExternalLink size={11} />
              </a>
              <a
                href="/they-built-their-empire-in-the-dark"
                style={{ color: "#fbbf24", fontSize: "11px", fontWeight: 700, textDecoration: "underline", display: "flex", alignItems: "center", gap: "4px" }}
                data-testid="link-forensic-57-banner"
              >
                Forensic analysis <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* 3-stat summary */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginTop: "20px" }}>
          {[
            { val: "9:33am", label: "Prayer written", color: "#fbbf24" },
            { val: "Minutes", label: "Universe responded", color: "#4ade80" },
            { val: "10/10", label: "Propositions confirmed", color: "#c084fc" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "12px",
                padding: "12px 8px",
                textAlign: "center",
              }}
            >
              <p style={{ color: s.color, fontSize: "1.3rem", fontWeight: 900, margin: "0 0 4px 0" }}>{s.val}</p>
              <p style={{ color: "#6b7280", fontSize: "10px", margin: 0, lineHeight: 1.3 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderBottom: "1px solid rgba(120,60,0,0.2)" }} />
    </div>
  );
}
