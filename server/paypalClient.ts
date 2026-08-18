const PAYPAL_BASE = process.env.PAYPAL_SANDBOX === '1'
  ? 'https://api-m.sandbox.paypal.com'
  : 'https://api-m.paypal.com';

export function getPayPalClientId(): string | null {
  return process.env.PAYPAL_CLIENT_ID || null;
}

export function isPayPalConfigured(): boolean {
  return !!(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET);
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !secret) throw new Error('PayPal credentials not configured');

  const resp = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  if (!resp.ok) throw new Error(`PayPal auth failed: ${resp.status}`);
  const data = await resp.json() as { access_token: string };
  return data.access_token;
}

export async function createPayPalOrder(
  amountAUD: number,
  description: string,
): Promise<{ orderId: string }> {
  const token = await getAccessToken();
  const reqId = `bd-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  const resp = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'PayPal-Request-Id': reqId,
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: { currency_code: 'AUD', value: amountAUD.toFixed(2) },
          description,
          custom_id: 'barrandodger_abn_78833496164',
        },
      ],
      application_context: {
        brand_name: 'Barran Dodger Legal & Ethical Trust Fund',
        locale: 'en-AU',
        user_action: 'PAY_NOW',
      },
    }),
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(`PayPal order creation failed ${resp.status}: ${JSON.stringify(err)}`);
  }
  const data = await resp.json() as { id: string };
  return { orderId: data.id };
}

export async function capturePayPalOrder(
  orderId: string,
): Promise<{ status: string; payerEmail?: string; payerName?: string }> {
  const token = await getAccessToken();

  const resp = await fetch(`${PAYPAL_BASE}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(`PayPal capture failed ${resp.status}: ${JSON.stringify(err)}`);
  }
  const data = await resp.json() as {
    status: string;
    payer?: { email_address?: string; name?: { given_name?: string; surname?: string } };
  };
  const payerEmail = data.payer?.email_address;
  const pn = data.payer?.name;
  const payerName = pn ? [pn.given_name, pn.surname].filter(Boolean).join(' ') : undefined;
  return { status: data.status, payerEmail, payerName };
}
