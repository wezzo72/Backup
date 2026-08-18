import { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { AlertTriangle } from "lucide-react";

interface PayPalGateButtonProps {
  documentUrl?: string;
  amountAUD?: number;
  description?: string;
  onSuccess: (orderId: string, payerEmail: string, payerName: string, token?: string | null, expires?: number | null) => void;
  label?: string;
}

function PayPalInner({ documentUrl, amountAUD = 3.33, description, onSuccess, label }: PayPalGateButtonProps) {
  const [{ isPending }] = usePayPalScriptReducer();
  const [err, setErr] = useState("");

  if (isPending) {
    return (
      <div className="flex items-center justify-center py-5">
        <div className="h-5 w-5 border-2 border-[#0070ba] border-t-transparent rounded-full animate-spin mr-2" />
        <span className="text-blue-300/60 text-xs">Loading PayPal…</span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {err && (
        <p className="text-red-400 text-xs flex items-center gap-1.5 bg-red-950/40 rounded-lg px-3 py-2">
          <AlertTriangle className="h-3 w-3 flex-shrink-0" />{err}
        </p>
      )}
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay", height: 44 }}
        forceReRender={[amountAUD, label]}
        createOrder={async () => {
          setErr("");
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: amountAUD,
              description: description ||
                `Barran Dodger Archive — ${label || `$${amountAUD.toFixed(2)} AUD`} · ABN 78 833 496 164`,
            }),
          });
          const data = await res.json();
          if (!res.ok || !data.orderId) throw new Error(data.error || "Could not create PayPal order");
          return data.orderId;
        }}
        onApprove={async (data) => {
          setErr("");
          const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderId: data.orderID, documentUrl }),
          });
          const result = await res.json();
          if (!res.ok || result.status !== "COMPLETED") {
            setErr(result.error || "Payment could not be confirmed. Please try again.");
            return;
          }
          onSuccess(data.orderID, result.payerEmail || "", result.payerName || "", result.token, result.expires);
        }}
        onError={() => setErr("PayPal encountered an error. Please try again or use card payment.")}
        onCancel={() => setErr("Payment cancelled — you were not charged.")}
      />
      <p className="text-blue-900/60 text-[9px] text-center font-mono">
        Secured by PayPal · ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund
      </p>
    </div>
  );
}

export function PayPalGateButton(props: PayPalGateButtonProps) {
  const [clientId, setClientId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [notConfigured, setNotConfigured] = useState(false);

  useEffect(() => {
    fetch("/api/paypal/client-id")
      .then((r) => r.json())
      .then((d) => {
        if (d.clientId) setClientId(d.clientId);
        else setNotConfigured(true);
      })
      .catch(() => setNotConfigured(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-6">
        <div className="h-4 w-4 border-2 border-[#0070ba] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (notConfigured || !clientId) {
    return (
      <div className="rounded-xl border border-blue-900/30 px-4 py-4 text-center space-y-1" style={{ background: "#050a14" }}>
        <p className="text-blue-400/70 text-xs font-semibold">PayPal not yet active</p>
        <p className="text-zinc-600 text-[10px]">
          Please use card payment or crypto above, or donate via PayID: <span className="text-zinc-400 font-mono">drbarrandodger@proton.me</span>
        </p>
      </div>
    );
  }

  return (
    <PayPalScriptProvider
      options={{ clientId, currency: "AUD", intent: "capture", components: "buttons" }}
    >
      <PayPalInner {...props} />
    </PayPalScriptProvider>
  );
}
