# Deploying Barran Dodger — Independent of Replit

This repository contains the complete website, all 337+ PDF documents, and all source code.
If Replit is unavailable, follow either guide below to get the site running on a new host within 15 minutes.

---

## Option A — Railway (recommended, ~$5/month)

Railway is the closest alternative to Replit. It connects directly to this GitHub repo and deploys automatically.

### Steps

1. Go to [railway.app](https://railway.app) and sign in with your GitHub account (`drbarrandodger`).
2. Click **New Project → Deploy from GitHub repo**.
3. Select `drbarrandodger/barran-dodger-archive`.
4. Railway will detect the `railway.toml` and configure itself automatically.
5. Add a **PostgreSQL** database:
   - Click **New** → **Database** → **PostgreSQL**.
   - Railway automatically sets `DATABASE_URL` in your project.
6. Set these environment variables in the Railway dashboard under **Variables**:

| Variable | Where to get it |
|---|---|
| `STRIPE_SECRET_KEY` | Your Stripe dashboard → Developers → API keys |
| `STRIPE_PUBLISHABLE_KEY` | Same place |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Webhooks → your endpoint secret |
| `OPENAI_API_KEY` | [platform.openai.com](https://platform.openai.com) (for the AI chatbot) |

7. Click **Deploy**. Railway builds and starts the app (~3 minutes).
8. **Point your domain:** In Railway → Settings → Domains, add `barrandodger.com`. Then update your domain's DNS A record to Railway's IP.

---

## Option B — Render (free tier available)

Render has a free tier but it sleeps after 15 minutes of inactivity. The Starter paid plan ($7/month) keeps it always-on.

### Steps

1. Go to [render.com](https://render.com) and sign in with GitHub.
2. Click **New → Blueprint** and connect `drbarrandodger/barran-dodger-archive`.
3. Render reads `render.yaml` and creates the web service + PostgreSQL database automatically.
4. Add these environment variables in the Render dashboard under your service → **Environment**:

| Variable | Where to get it |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe dashboard |
| `STRIPE_PUBLISHABLE_KEY` | Stripe dashboard |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Webhooks |
| `OPENAI_API_KEY` | platform.openai.com |

5. Click **Save and Deploy**.
6. **Point your domain:** Render → your service → Settings → Custom Domains → add `barrandodger.com`.

---

## Database migration

After the app starts for the first time on a new host, run this once to set up the database tables:

```
npm run db:push
```

On Railway: open the service → **Shell** tab → run `npm run db:push`.
On Render: open the service → **Shell** tab → run `npm run db:push`.

---

## Environment variables — what each one does

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | **Yes** | PostgreSQL connection (auto-set by Railway/Render) |
| `PORT` | **Yes** | Port the server listens on (set to `5000`) |
| `STRIPE_SECRET_KEY` | Yes (for membership) | Processes membership payments |
| `STRIPE_PUBLISHABLE_KEY` | Yes (for membership) | Frontend Stripe integration |
| `STRIPE_WEBHOOK_SECRET` | Recommended | Verifies Stripe payment webhooks |
| `OPENAI_API_KEY` | Optional | Powers the AI chatbot widget |
| `NODE_ENV` | Auto | Set to `production` by the deploy configs |

---

## What's in this repository

- `client/` — React frontend (all pages, components, translations)
- `server/` — Express backend (API routes, database, Stripe integration)
- `shared/` — Database schema (Drizzle ORM)
- `client/public/documents/` — **337+ PDF documents** (fully preserved)
- `client/public/evidence/` — Evidence files and audio
- `client/src/assets/` — All images and cover artwork

---

## Build and run manually (any Linux/Mac server with Node.js 20 + PostgreSQL)

```bash
git clone https://github.com/drbarrandodger/barran-dodger-archive.git
cd barran-dodger-archive
npm install
npm run build
DATABASE_URL="postgresql://..." STRIPE_SECRET_KEY="sk_..." node dist/index.cjs
```
