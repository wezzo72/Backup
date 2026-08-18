import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, Check, ArrowRight } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface SubscribeResp { success: boolean; message?: string; }

function useExitIntent(onTrigger: () => void) {
  useEffect(() => {
    let triggered = false;
    const onMouseLeave = (e: MouseEvent) => {
      if (!triggered && e.clientY <= 0) {
        triggered = true;
        onTrigger();
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [onTrigger]);
}

function useScrollDepth(pct: number, onTrigger: () => void) {
  useEffect(() => {
    let triggered = false;
    const onScroll = () => {
      if (triggered) return;
      const depth = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (depth >= pct) {
        triggered = true;
        onTrigger();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pct, onTrigger]);
}

function useTimedTrigger(delay: number, onTrigger: () => void) {
  useEffect(() => {
    const t = setTimeout(onTrigger, delay);
    return () => clearTimeout(t);
  }, [delay, onTrigger]);
}

const SESSION_KEY = "bd_newsletter_dismissed_v1";

export function NewsletterCapture() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const alreadyDismissed = typeof sessionStorage !== "undefined" && sessionStorage.getItem(SESSION_KEY);

  const trigger = () => {
    if (!alreadyDismissed && !done) setOpen(true);
  };

  const dismiss = () => {
    setOpen(false);
    sessionStorage?.setItem(SESSION_KEY, "1");
  };

  useExitIntent(trigger);
  useScrollDepth(70, trigger);
  useTimedTrigger(90000, trigger);

  const { mutate, isPending } = useMutation({
    mutationFn: async (email: string) => {
      const res = await apiRequest("POST", "/api/subscribe", { email, source: "newsletter-capture-modal" });
      return res.json() as Promise<SubscribeResp>;
    },
    onSuccess: () => {
      setDone(true);
      setTimeout(dismiss, 3000);
    },
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    mutate(email);
  };

  if (alreadyDismissed) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
          onClick={dismiss}
          data-testid="newsletter-capture-backdrop"
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative w-full max-w-md rounded-2xl border border-zinc-700/60 bg-zinc-950 p-6 shadow-2xl"
            onClick={e => e.stopPropagation()}
            data-testid="newsletter-capture-modal"
          >
            <button onClick={dismiss} className="absolute top-3 right-3 text-zinc-600 hover:text-zinc-400 transition-colors" data-testid="button-newsletter-dismiss" aria-label="Close">
              <X className="h-4 w-4" />
            </button>

            {!done ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-amber-400" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Before you go</span>
                  </div>
                  <h2 className="text-xl font-serif font-black text-white leading-tight">
                    Get notified when new evidence is added
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    New documents and analyses are added regularly. Be the first to know — no spam, ever.
                  </p>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 space-y-1">
                  <p className="text-zinc-500 text-xs">You'll receive:</p>
                  {["New primary source document alerts", "AI forensic analysis updates", "Legal status changes (ICC, OHCHR)", "Zero advertising, ever"].map(item => (
                    <div key={item} className="flex items-center gap-2 text-xs">
                      <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
                <form onSubmit={submit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/60"
                    data-testid="input-newsletter-email"
                  />
                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm rounded-xl px-4 py-2.5 transition-colors disabled:opacity-60"
                    data-testid="button-newsletter-submit"
                  >
                    {isPending ? "..." : <><ArrowRight className="h-4 w-4" /></>}
                  </button>
                </form>
                <p className="text-zinc-700 text-[10px] text-center">
                  ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · Unsubscribe any time
                </p>
              </div>
            ) : (
              <div className="text-center space-y-3 py-4">
                <Check className="h-10 w-10 text-emerald-400 mx-auto" />
                <p className="text-white font-bold text-lg">You're subscribed.</p>
                <p className="text-zinc-400 text-sm">We'll notify you when new evidence is added. Thank you for witnessing.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
