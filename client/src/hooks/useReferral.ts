import { useEffect } from "react";

const REF_KEY = "bd_referral_v1";
const REF_COUNT_KEY = "bd_ref_count_v1";

/** Records ?ref= param from URL into localStorage on first visit */
export function useReferralCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get("ref");
      if (ref && !localStorage.getItem(REF_KEY)) {
        localStorage.setItem(REF_KEY, ref);
        // Ping server to record referral
        fetch(`/api/referral?ref=${encodeURIComponent(ref)}`, { method: "POST" }).catch(() => {});
      }
    } catch {}
  }, []);
}

/** Returns a share URL stamped with ?ref=<fingerprint> */
export function getReferralUrl(base = "https://barrandodger.com"): string {
  try {
    const stored = localStorage.getItem(REF_KEY);
    const id = stored || generateId();
    if (!stored) localStorage.setItem(REF_KEY, id);
    return `${base}?ref=${encodeURIComponent(id)}`;
  } catch {
    return base;
  }
}

/** Returns how many referrals this session has generated (server-tracked count stored locally) */
export function getReferralCount(): number {
  try { return Number(localStorage.getItem(REF_COUNT_KEY) || 0); } catch { return 0; }
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
