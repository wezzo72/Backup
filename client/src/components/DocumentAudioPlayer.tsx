import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX, Play, Pause, Square, ChevronDown, ChevronUp, Loader2, Mic, Globe, Zap } from "lucide-react";

interface Props {
  text: string;
  title?: string;
  slug?: string;
  className?: string;
}

const VOICES_ORDER = ["alloy", "nova", "onyx", "shimmer", "echo", "fable"] as const;
type OAIVoice = typeof VOICES_ORDER[number];
const VOICE_LABELS: Record<OAIVoice, string> = {
  alloy: "Alloy (neutral)",
  nova: "Nova (warm female)",
  onyx: "Onyx (deep male)",
  shimmer: "Shimmer (soft female)",
  echo: "Echo (male)",
  fable: "Fable (expressive)",
};

const SPEEDS = [0.6, 0.8, 1.0, 1.25, 1.5, 2.0];

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

export function DocumentAudioPlayer({ text, title, slug, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"browser" | "ai">("browser");

  // ── Browser TTS state ──────────────────────────────────────────────────
  const [browserPlaying, setBrowserPlaying] = useState(false);
  const [browserPaused, setBrowserPaused] = useState(false);
  const [browserSpeed, setBrowserSpeed] = useState(1.0);
  const [browserProgress, setBrowserProgress] = useState(0); // 0-100
  const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceIdx, setSelectedVoiceIdx] = useState(0);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const chunkIndexRef = useRef(0);
  const chunksRef = useRef<string[]>([]);
  const totalChunksRef = useRef(0);

  // ── AI TTS state ───────────────────────────────────────────────────────
  const [aiLoading, setAiLoading] = useState(false);
  const [aiPlaying, setAiPlaying] = useState(false);
  const [aiPaused, setAiPaused] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiCached, setAiCached] = useState(false);
  const [aiDuration, setAiDuration] = useState(0);
  const [aiCurrentTime, setAiCurrentTime] = useState(0);
  const [aiVoice, setAiVoice] = useState<OAIVoice>("nova");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioBlobUrl = useRef<string | null>(null);

  // ── Load browser voices ────────────────────────────────────────────────
  useEffect(() => {
    const load = () => {
      const v = window.speechSynthesis?.getVoices() ?? [];
      const en = v.filter(x => x.lang.startsWith("en"));
      setBrowserVoices(en.length ? en : v);
    };
    load();
    window.speechSynthesis?.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis?.removeEventListener("voiceschanged", load);
  }, []);

  // ── Split text into ~200-word chunks for browser TTS progress ─────────
  const buildChunks = useCallback((t: string) => {
    const sentences = t.match(/[^.!?]+[.!?]+/g) || [t];
    const chunks: string[] = [];
    let current = "";
    for (const s of sentences) {
      if ((current + s).length > 800) {
        if (current) chunks.push(current.trim());
        current = s;
      } else {
        current += s;
      }
    }
    if (current.trim()) chunks.push(current.trim());
    return chunks;
  }, []);

  const speakChunk = useCallback((chunks: string[], idx: number, speed: number, voiceIdx: number) => {
    if (idx >= chunks.length) {
      setBrowserPlaying(false);
      setBrowserPaused(false);
      setBrowserProgress(100);
      return;
    }
    const utter = new SpeechSynthesisUtterance(chunks[idx]);
    utter.rate = speed;
    if (browserVoices[voiceIdx]) utter.voice = browserVoices[voiceIdx];
    utter.onend = () => {
      chunkIndexRef.current = idx + 1;
      setBrowserProgress(Math.round(((idx + 1) / chunks.length) * 100));
      speakChunk(chunks, idx + 1, speed, voiceIdx);
    };
    utter.onerror = () => {
      setBrowserPlaying(false);
    };
    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, [browserVoices]);

  const browserPlay = () => {
    if (browserPaused) {
      window.speechSynthesis.resume();
      setBrowserPaused(false);
      setBrowserPlaying(true);
      return;
    }
    window.speechSynthesis.cancel();
    const chunks = buildChunks(text);
    chunksRef.current = chunks;
    totalChunksRef.current = chunks.length;
    chunkIndexRef.current = 0;
    setBrowserPlaying(true);
    setBrowserPaused(false);
    setBrowserProgress(0);
    speakChunk(chunks, 0, browserSpeed, selectedVoiceIdx);
  };

  const browserPause = () => {
    window.speechSynthesis.pause();
    setBrowserPaused(true);
    setBrowserPlaying(false);
  };

  const browserStop = () => {
    window.speechSynthesis.cancel();
    setBrowserPlaying(false);
    setBrowserPaused(false);
    setBrowserProgress(0);
    chunkIndexRef.current = 0;
  };

  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  // ── AI TTS ─────────────────────────────────────────────────────────────
  const loadAiAudio = async (voice: OAIVoice) => {
    if (aiLoading) return;
    setAiError(null);
    setAiLoading(true);
    setAiCached(false);
    try {
      if (audioBlobUrl.current) {
        URL.revokeObjectURL(audioBlobUrl.current);
        audioBlobUrl.current = null;
      }
      const preview = text.slice(0, 3800);
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: preview, voice, slug: slug ? `${slug}-${voice}` : undefined }),
      });
      if (!res.ok) throw new Error("AI voice unavailable");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      audioBlobUrl.current = url;
      if (!audioRef.current) {
        audioRef.current = new Audio();
        audioRef.current.ontimeupdate = () => setAiCurrentTime(audioRef.current?.currentTime ?? 0);
        audioRef.current.ondurationchange = () => setAiDuration(audioRef.current?.duration ?? 0);
        audioRef.current.onended = () => { setAiPlaying(false); setAiPaused(false); };
        audioRef.current.onerror = () => { setAiPlaying(false); setAiError("Playback error"); };
      }
      audioRef.current.src = url;
      audioRef.current.load();
      setAiCached(true);
    } catch (e: any) {
      setAiError(e.message || "Failed to generate audio");
    } finally {
      setAiLoading(false);
    }
  };

  const aiPlay = async () => {
    if (aiPaused && audioRef.current) {
      audioRef.current.play();
      setAiPlaying(true);
      setAiPaused(false);
      return;
    }
    if (!aiCached) {
      await loadAiAudio(aiVoice);
    }
    if (audioRef.current) {
      audioRef.current.play();
      setAiPlaying(true);
      setAiPaused(false);
    }
  };

  const aiPause = () => {
    audioRef.current?.pause();
    setAiPlaying(false);
    setAiPaused(true);
  };

  const aiStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAiPlaying(false);
    setAiPaused(false);
    setAiCurrentTime(0);
  };

  const aiSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setAiCurrentTime(t);
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (audioBlobUrl.current) URL.revokeObjectURL(audioBlobUrl.current);
    };
  }, []);

  const wordCount = text.trim().split(/\s+/).length;
  const estMinutes = Math.round(wordCount / 150);

  return (
    <div className={`rounded-2xl border border-zinc-700/50 bg-zinc-900 overflow-hidden ${className}`}>
      {/* Header / toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-zinc-800/50 transition-colors group"
        data-testid="audio-player-toggle"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-amber-600/20 border border-amber-600/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/30 transition-colors">
            <Volume2 className="h-4 w-4 text-amber-500" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-zinc-200">🎧 Listen to this document</p>
            <p className="text-xs text-zinc-500">{wordCount.toLocaleString()} words · ~{estMinutes} min read · Free browser voice + AI voice</p>
          </div>
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-zinc-500" /> : <ChevronDown className="h-4 w-4 text-zinc-500" />}
      </button>

      {open && (
        <div className="border-t border-zinc-700/50">
          {/* Mode tabs */}
          <div className="flex border-b border-zinc-700/50">
            <button
              onClick={() => setMode("browser")}
              className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                mode === "browser" ? "bg-zinc-800 text-amber-400 border-b-2 border-amber-500" : "text-zinc-500 hover:text-zinc-300"
              }`}
              data-testid="audio-tab-browser"
            >
              <Globe className="h-3.5 w-3.5" /> Browser Voice <span className="text-green-500 font-bold">FREE</span>
            </button>
            <button
              onClick={() => setMode("ai")}
              className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                mode === "ai" ? "bg-zinc-800 text-amber-400 border-b-2 border-amber-500" : "text-zinc-500 hover:text-zinc-300"
              }`}
              data-testid="audio-tab-ai"
            >
              <Zap className="h-3.5 w-3.5" /> AI Voice <span className="text-amber-400">OpenAI</span>
            </button>
          </div>

          {/* ── Browser Voice Panel ──────────────────────────────── */}
          {mode === "browser" && (
            <div className="p-5 space-y-4">
              <p className="text-xs text-zinc-500">
                Uses your device's built-in voice engine. Reads the <strong className="text-zinc-300">full document</strong>. Completely free.
              </p>

              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-amber-500 transition-all"
                  style={{ width: `${browserProgress}%` }}
                />
              </div>
              <p className="text-xs text-zinc-600">{browserProgress}% read</p>

              {/* Controls */}
              <div className="flex items-center gap-2 flex-wrap">
                {!browserPlaying && !browserPaused && (
                  <button
                    onClick={browserPlay}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-black text-sm font-bold transition-colors"
                    data-testid="browser-tts-play"
                  >
                    <Play className="h-4 w-4" /> Play
                  </button>
                )}
                {browserPlaying && !browserPaused && (
                  <button
                    onClick={browserPause}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white text-sm font-semibold transition-colors"
                    data-testid="browser-tts-pause"
                  >
                    <Pause className="h-4 w-4" /> Pause
                  </button>
                )}
                {browserPaused && (
                  <button
                    onClick={browserPlay}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-black text-sm font-bold transition-colors"
                    data-testid="browser-tts-resume"
                  >
                    <Play className="h-4 w-4" /> Resume
                  </button>
                )}
                {(browserPlaying || browserPaused || browserProgress > 0) && (
                  <button
                    onClick={browserStop}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-sm transition-colors"
                    data-testid="browser-tts-stop"
                  >
                    <Square className="h-3.5 w-3.5" /> Stop
                  </button>
                )}
              </div>

              {/* Speed */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-zinc-500 w-12">Speed:</span>
                {SPEEDS.map(s => (
                  <button
                    key={s}
                    onClick={() => {
                      setBrowserSpeed(s);
                      if (browserPlaying) {
                        window.speechSynthesis.cancel();
                        const idx = chunkIndexRef.current;
                        speakChunk(chunksRef.current, idx, s, selectedVoiceIdx);
                      }
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      browserSpeed === s
                        ? "bg-amber-600 text-black font-bold"
                        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                    }`}
                    data-testid={`browser-speed-${s}`}
                  >
                    {s}×
                  </button>
                ))}
              </div>

              {/* Voice selector */}
              {browserVoices.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 w-12">Voice:</span>
                  <select
                    value={selectedVoiceIdx}
                    onChange={e => setSelectedVoiceIdx(Number(e.target.value))}
                    className="text-xs bg-zinc-800 border border-zinc-700 text-zinc-300 rounded px-2 py-1.5 max-w-xs"
                    data-testid="browser-voice-select"
                  >
                    {browserVoices.map((v, i) => (
                      <option key={i} value={i}>{v.name} ({v.lang})</option>
                    ))}
                  </select>
                </div>
              )}

              {browserPlaying && (
                <p className="text-xs text-amber-400 animate-pulse flex items-center gap-1">
                  <Volume2 className="h-3 w-3" /> Reading aloud…
                </p>
              )}
            </div>
          )}

          {/* ── AI Voice Panel ───────────────────────────────────── */}
          {mode === "ai" && (
            <div className="p-5 space-y-4">
              <div className="rounded-lg bg-zinc-800/60 border border-amber-500/20 px-4 py-2">
                <p className="text-xs text-amber-400 font-semibold">AI Voice Preview</p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Reads the first ~600 words in a natural AI voice (OpenAI TTS). Cached after first generation — no repeat cost.
                </p>
              </div>

              {/* Voice selector */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-zinc-500">Voice:</span>
                {VOICES_ORDER.map(v => (
                  <button
                    key={v}
                    onClick={() => {
                      setAiVoice(v);
                      setAiCached(false);
                      aiStop();
                    }}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      aiVoice === v
                        ? "bg-amber-600 text-black font-bold"
                        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                    }`}
                    data-testid={`ai-voice-${v}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <p className="text-xs text-zinc-600 -mt-2">{VOICE_LABELS[aiVoice]}</p>

              {/* Seek bar */}
              {aiCached && aiDuration > 0 && (
                <div className="space-y-1">
                  <input
                    type="range"
                    min={0}
                    max={aiDuration}
                    step={0.5}
                    value={aiCurrentTime}
                    onChange={aiSeek}
                    className="w-full accent-amber-500 cursor-pointer"
                    data-testid="ai-seek-bar"
                  />
                  <div className="flex justify-between text-xs text-zinc-600">
                    <span>{formatTime(aiCurrentTime)}</span>
                    <span>{formatTime(aiDuration)}</span>
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="flex items-center gap-2 flex-wrap">
                {!aiPlaying && !aiPaused && (
                  <button
                    onClick={aiPlay}
                    disabled={aiLoading}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-60 text-black text-sm font-bold transition-colors"
                    data-testid="ai-tts-play"
                  >
                    {aiLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                    {aiLoading ? "Generating…" : aiCached ? "Play" : "Generate & Play"}
                  </button>
                )}
                {aiPlaying && (
                  <button
                    onClick={aiPause}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white text-sm font-semibold transition-colors"
                    data-testid="ai-tts-pause"
                  >
                    <Pause className="h-4 w-4" /> Pause
                  </button>
                )}
                {aiPaused && (
                  <button
                    onClick={aiPlay}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-black text-sm font-bold transition-colors"
                    data-testid="ai-tts-resume"
                  >
                    <Play className="h-4 w-4" /> Resume
                  </button>
                )}
                {(aiPlaying || aiPaused) && (
                  <button
                    onClick={aiStop}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-sm transition-colors"
                    data-testid="ai-tts-stop"
                  >
                    <Square className="h-3.5 w-3.5" /> Stop
                  </button>
                )}
                {aiCached && !aiPlaying && !aiPaused && (
                  <button
                    onClick={() => loadAiAudio(aiVoice)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-xs transition-colors"
                    data-testid="ai-tts-regenerate"
                  >
                    Regenerate
                  </button>
                )}
              </div>

              {aiError && (
                <p className="text-xs text-red-400 flex items-center gap-1">
                  <VolumeX className="h-3.5 w-3.5" /> {aiError}
                </p>
              )}
              {aiPlaying && (
                <p className="text-xs text-amber-400 animate-pulse flex items-center gap-1">
                  <Mic className="h-3 w-3" /> AI voice playing…
                </p>
              )}
              {aiCached && !aiPlaying && !aiPaused && (
                <p className="text-xs text-green-500 flex items-center gap-1">
                  ✓ Audio cached — instant replay, no extra cost
                </p>
              )}

              <p className="text-xs text-zinc-700">
                Powered by OpenAI TTS · Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
