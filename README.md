# DACN_TourGuideWeb — Travel TVB Tour Guide Website

A full-stack tour guide and booking web application for **Travel TVB**, a Vietnamese travel agency. Features a React frontend, a Strapi CMS backend, VNPay payment integration, and an AI-powered chatbot using RAG (Retrieval Augmented Generation) with Google Gemini and ChromaDB.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
   - [1. Clone the Repository](#1-clone-the-repository)
   - [2. Backend Setup (Strapi)](#2-backend-setup-strapi)
   - [3. Frontend Setup (React + Vite)](#3-frontend-setup-react--vite)
   - [4. ChromaDB Setup (Vector Database)](#4-chromadb-setup-vector-database)
   - [5. Index Tour Data for Chatbot](#5-index-tour-data-for-chatbot)
6. [Environment Variables Reference](#environment-variables-reference)
7. [Available Scripts](#available-scripts)
8. [API Endpoints](#api-endpoints)
9. [Chatbot (RAG Pipeline)](#chatbot-rag-pipeline)
10. [Payment Integration (VNPay)](#payment-integration-vnpay)
11. [Internationalization (i18n)](#internationalization-i18n)
12. [Admin Panel Customizations](#admin-panel-customizations)
13. [Production Deployment](#production-deployment)
14. [Testing](#testing)
15. [CI/CD](#cicd)
16. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

```
                         +------------------+
                         |   React Frontend |  (port 5173)
                         |   Vite + React 19|
                         +--------+---------+
                                  |
                                  | REST API
                                  v
                         +------------------+
                         |  Strapi Backend  |  (port 1337)
                         |  Strapi 5.36.0   |
                         +---+---------+----+
                             |         |
                    +--------+    +----+--------+
                    v              v             v
              +---------+   +-----------+  +----------+
              | SQLite  |   | ChromaDB  |  |  VNPay   |
              |   DB    |   | (port 8000)|  | Sandbox  |
              +---------+   +-----------+  +----------+
                                  ^
                                  |
                          Google Gemini API
                        (Embeddings + LLM)
```

---

## Tech Stack

| Layer          | Technology                      | Version    |
| -------------- | ------------------------------- | ---------- |
| **Frontend**   | React                           | 19.1.0     |
|                | Vite                            | 7.0.4      |
|                | React Router                    | 7.8.0      |
|                | Framer Motion                   | 12.23.12   |
|                | React Icons                     | 5.5.0      |
|                | React Loading Skeleton          | 3.5.0      |
| **Backend**    | Strapi (Headless CMS)           | 5.36.0     |
|                | better-sqlite3                  | 12.4.1     |
| **AI/Chatbot** | Google Gemini (LLM alias)       | `gemini-flash-latest` |
|                | Gemini Embedding 001            | 3072-dim   |
|                | ChromaDB (Vector DB)            | 3.4.0      |
| **Admin**      | Recharts (dashboard charts)     | 3.8.1      |
| **Payments**   | VNPay Sandbox                   | -          |
| **Testing**    | Vitest (frontend)               | 4.1.2      |
|                | Jest (backend)                  | 30.3.0     |
|                | React Testing Library           | 16.3.2     |
| **CI/CD**      | GitHub Actions                  | -          |

---

## Prerequisites

Before you begin, make sure you have the following installed:

| Tool           | Required Version      | Download Link                                       |
| -------------- | --------------------- | --------------------------------------------------- |
| **Node.js**    | >= 20.0.0, <= 24.x.x | [nodejs.org](https://nodejs.org/)                   |
| **npm**        | >= 6.0.0              | Bundled with Node.js                                |
| **Docker**     | Any recent version (recommended for ChromaDB) | [docker.com](https://www.docker.com/) |
| **Python**     | >= 3.8 (only if running ChromaDB without Docker) | [python.org](https://www.python.org/) |
| **Git**        | Any recent version    | [git-scm.com](https://git-scm.com/)                |
| **Google Gemini API key** | Free tier works   | [aistudio.google.com](https://aistudio.google.com/app/apikey) |
| **VNPay sandbox credentials** | For payment testing | [sandbox.vnpayment.vn](https://sandbox.vnpayment.vn) |

Verify your installations:

```bash
node --version    # Should print v20.x.x or higher
npm --version     # Should print 6.x.x or higher
python --version  # Should print 3.8+ (needed for ChromaDB server)
```

---

## Project Structure

```
DACN_TourGuideWeb/
├── Travel_TVB/                     # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Page-level components
│   │   ├── assets/                 # Static assets (images, etc.)
│   │   └── ...
│   ├── public/                     # Public static files
│   ├── .env                        # Frontend environment variables
│   ├── vite.config.js              # Vite configuration
│   └── package.json
│
├── Travel_TVB_Server/              # Backend (Strapi 5)
│   ├── config/
│   │   ├── admin.js                # Admin panel config
│   │   ├── database.js             # Database config (SQLite/MySQL/PostgreSQL)
│   │   ├── middlewares.js          # Strapi middlewares
│   │   ├── plugins.js              # Plugin config (users-permissions, JWT)
│   │   └── server.js               # Server config (host, port)
│   ├── src/
│   │   ├── admin/                  # Admin panel customizations (loaded by Strapi)
│   │   │   ├── app.jsx             # Registers custom menu links
│   │   │   └── pages/
│   │   │       ├── Dashboard.jsx   # Analytics dashboard (KPIs, charts)
│   │   │       └── ChatbotSync.jsx # Manual ChromaDB reindex trigger
│   │   ├── policies/
│   │   │   └── is-admin-panel.js   # Custom policy: admin session token gate
│   │   └── api/
│   │       ├── tour/               # Tour content type
│   │       ├── tour-category/      # Tour categories
│   │       ├── booking/            # Booking + VNPay (create + return + refund)
│   │       ├── dashboard/          # GET /api/dashboard/overview (admin-only)
│   │       ├── chatbot/            # AI Chatbot (RAG)
│   │       │   ├── controllers/chatbot.js
│   │       │   ├── controllers/reindex.js   # Trigger + status for ChromaDB reindex
│   │       │   ├── services/chatbot.js
│   │       │   ├── services/vectorStore.js
│   │       │   ├── routes/chatbot.js
│   │       │   ├── routes/reindex.js
│   │       │   └── scripts/indexTours.js
│   │       ├── single-post/        # Blog posts
│   │       ├── single-community-post/
│   │       ├── home-hero-slider/   # CMS-managed page sections
│   │       ├── layout-navbar/
│   │       ├── layout-footer/
│   │       └── ...                 # Many more content types
│   ├── .env                        # Backend environment variables
│   ├── .env.example                # Template for .env
│   └── package.json
│
├── migrate-strapi-locales.mjs      # Locale migration script (vi/en/zh)
├── .github/workflows/ci.yml        # GitHub Actions CI pipeline
└── README.md                       # This file
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd DACN_TourGuideWeb
```

### 2. Backend Setup (Strapi)

```bash
# Navigate to the backend directory
cd Travel_TVB_Server

# Install dependencies
npm install

# Create your .env file from the template
cp .env.example .env
```

**Edit `Travel_TVB_Server/.env`** and fill in the required values:

```env
# Server
HOST=0.0.0.0
PORT=1337

# Security Keys — generate your own unique values!
# You can generate keys with: openssl rand -base64 16
APP_KEYS=<key1>,<key2>,<key3>,<key4>
API_TOKEN_SALT=<random-string>
ADMIN_JWT_SECRET=<random-string>
TRANSFER_TOKEN_SALT=<random-string>
ENCRYPTION_KEY=<random-string>
JWT_SECRET=<random-string>

# Database (SQLite is the default — no extra setup needed)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# VNPay Sandbox (for payment testing)
VNPAY_TMN_CODE=6UH2PIXS
VNPAY_HASH_SECRET=<your-vnpay-hash-secret>
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNPAY_RETURN_URL=http://localhost:1337/api/bookings/vnpay-return
FRONTEND_URL=http://localhost:5173

# Chatbot / AI (required for chatbot feature)
GOOGLE_AI_API_KEY=<your-google-gemini-api-key>
CHROMADB_URL=http://localhost:8000
CHROMA_COLLECTION=tour_data
```

> **Generating security keys:** Run `node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"` four times to generate the four `APP_KEYS`.

**Start the Strapi server:**

```bash
# Development mode (with auto-reload)
npm run develop

# Production mode
npm run build && npm run start
```

On first launch, Strapi will:
- Create the SQLite database at `.tmp/data.db`
- Open the admin panel at **http://localhost:1337/admin**
- Prompt you to create the first admin user

### 3. Frontend Setup (React + Vite)

Open a **new terminal**:

```bash
# Navigate to the frontend directory
cd Travel_TVB

# Install dependencies
npm install
```

**Create/edit `Travel_TVB/.env`:**

```env
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=<your-strapi-api-token>
VITE_CHATBOT_ENABLED=true
```

> **Getting your API token:** In the Strapi admin panel, go to **Settings > API Tokens > Create new API Token**. Give it a name and select the appropriate permissions (Full access for development). Copy the token into `VITE_STRAPI_API_TOKEN`.

**Start the development server:**

```bash
npm run dev
```

The frontend will be available at **http://localhost:5173**.

### 4. ChromaDB Setup (Vector Database)

ChromaDB is needed for the AI chatbot's RAG (Retrieval Augmented Generation) pipeline. It stores tour data embeddings for semantic search.

**Option A: Docker (Recommended — this is what the production deploy uses)**

```bash
docker run -d --name chromadb \
  -p 8000:8000 \
  -v chromadb_data:/data \
  --restart unless-stopped \
  chromadb/chroma:latest
```

**Option B: Install via pip**

```bash
pip install chromadb
chroma run --host 0.0.0.0 --port 8000
```

Verify ChromaDB is running (note: ChromaDB 0.5+ uses v2 API):

```bash
curl http://localhost:8000/api/v2/heartbeat
# Should return: {"nanosecond heartbeat": ...}

# List collections (after indexing):
curl http://localhost:8000/api/v2/tenants/default_tenant/databases/default_database/collections
```

### 5. Index Tour Data for Chatbot

Once Strapi is running and has tour data, and ChromaDB is running, populate the vector database:

```bash
cd Travel_TVB_Server

# Index all tours (all locales: vi, en, zh) into ChromaDB
node src/api/chatbot/scripts/indexTours.js
```

This script:
- Fetches all tours from Strapi across all locales (vi, en, zh)
- Chunks them into digestible pieces (overview, description, highlights, itinerary)
- Generates embeddings using Google Gemini Embedding 001
- Stores them in ChromaDB for semantic search

> **Note:** Re-run this script whenever you add or update tour data in Strapi.

---

## Environment Variables Reference

### Backend (`Travel_TVB_Server/.env`)

| Variable               | Required | Description                                    | Default                  |
| ---------------------- | -------- | ---------------------------------------------- | ------------------------ |
| `HOST`                 | No       | Server host                                    | `0.0.0.0`               |
| `PORT`                 | No       | Server port                                    | `1337`                   |
| `APP_KEYS`             | Yes      | Comma-separated encryption keys (4 keys)       | -                        |
| `API_TOKEN_SALT`       | Yes      | Salt for API token hashing                     | -                        |
| `ADMIN_JWT_SECRET`     | Yes      | Secret for admin JWT tokens                    | -                        |
| `TRANSFER_TOKEN_SALT`  | Yes      | Salt for transfer tokens                       | -                        |
| `ENCRYPTION_KEY`       | Yes      | Encryption key for secrets                     | -                        |
| `JWT_SECRET`           | Yes      | Secret for user JWT tokens                     | -                        |
| `DATABASE_CLIENT`      | No       | Database client (`sqlite`, `mysql`, `postgres`) | `sqlite`                |
| `DATABASE_FILENAME`    | No       | SQLite database file path                      | `.tmp/data.db`           |
| `DATABASE_HOST`        | No       | DB host (MySQL/PostgreSQL only)                | `localhost`              |
| `DATABASE_PORT`        | No       | DB port                                        | `3306` / `5432`          |
| `DATABASE_NAME`        | No       | DB name                                        | `strapi`                 |
| `DATABASE_USERNAME`    | No       | DB username                                    | `strapi`                 |
| `DATABASE_PASSWORD`    | No       | DB password                                    | `strapi`                 |
| `DATABASE_SSL`         | No       | Enable SSL for DB                              | `false`                  |
| `VNPAY_TMN_CODE`       | No       | VNPay terminal code                            | -                        |
| `VNPAY_HASH_SECRET`    | No       | VNPay hash secret                              | -                        |
| `VNPAY_URL`            | No       | VNPay gateway URL                              | -                        |
| `VNPAY_RETURN_URL`     | No       | VNPay callback URL                             | -                        |
| `FRONTEND_URL`         | No       | Frontend URL (for redirects)                   | `http://localhost:5173`  |
| `GOOGLE_AI_API_KEY`    | No*      | Google Gemini API key (*required for chatbot)   | -                        |
| `CHROMADB_URL`         | No*      | ChromaDB server URL (*required for chatbot)     | `http://localhost:8000`  |

### Frontend (`Travel_TVB/.env`)

| Variable                 | Required | Description                        | Default                 |
| ------------------------ | -------- | ---------------------------------- | ----------------------- |
| `VITE_STRAPI_URL`        | Yes      | URL of the Strapi backend          | `http://localhost:1337` |
| `VITE_STRAPI_API_TOKEN`  | Yes      | API token for Strapi access        | -                       |
| `VITE_CHATBOT_ENABLED`   | No       | Enable/disable chatbot widget      | `true`                  |

---

## Available Scripts

### Backend (`Travel_TVB_Server/`)

| Command                 | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm run develop`       | Start Strapi in development mode (auto-reload) |
| `npm run build`         | Build the Strapi admin panel             |
| `npm run start`         | Start Strapi in production mode          |
| `npm run test`          | Run backend tests (Jest)                 |
| `npm run test:watch`    | Run tests in watch mode                  |
| `npm run test:coverage` | Run tests with coverage report           |
| `npm run strapi`        | Run Strapi CLI commands                  |

### Frontend (`Travel_TVB/`)

| Command                 | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm run dev`           | Start Vite dev server (port 5173)        |
| `npm run build`         | Build for production                     |
| `npm run preview`       | Preview production build locally         |
| `npm run lint`          | Lint code with ESLint                    |
| `npm run test`          | Run frontend tests (Vitest)              |
| `npm run test:watch`    | Run tests in watch mode                  |
| `npm run test:coverage` | Run tests with coverage report           |

### Utility Scripts (Root)

| Command | Description |
| ------- | ----------- |
| `node migrate-strapi-locales.mjs` | Migrate content to multi-locale (vi/en/zh) |
| `node Travel_TVB_Server/src/api/chatbot/scripts/indexTours.js` | Index tours into ChromaDB |

---

## API Endpoints

### Strapi Default Endpoints

Strapi auto-generates REST API endpoints for all content types:

| Method | Endpoint                          | Description                |
| ------ | --------------------------------- | -------------------------- |
| GET    | `/api/tours`                      | List all tours             |
| GET    | `/api/tours/:id`                  | Get a single tour          |
| GET    | `/api/tour-categories`            | List tour categories       |
| GET    | `/api/single-posts`               | List blog posts            |
| GET    | `/api/single-community-posts`     | List community posts       |
| GET    | `/api/home-hero-slider`           | Home page hero slider      |
| GET    | `/api/layout-navbar`              | Navbar content             |
| GET    | `/api/layout-footer`              | Footer content             |
| GET    | `/api/faq`                        | FAQ content                |

> Add `?locale=vi` (or `en`, `zh`) to any endpoint for localized content.

### Custom Endpoints

| Method | Endpoint                          | Auth          | Description                                                  |
| ------ | --------------------------------- | ------------- | ------------------------------------------------------------ |
| POST   | `/api/chatbot/query`              | Public (rate-limited: 15 req/min/IP) | Send message to chatbot           |
| POST   | `/api/chatbot/reindex/trigger`    | Admin panel   | Kick off a background ChromaDB reindex                       |
| GET    | `/api/chatbot/reindex/status`     | Admin panel   | Poll reindex status + log tail                               |
| GET    | `/api/dashboard/overview`         | Admin panel   | KPIs, revenue series, top tours, recent + upcoming bookings  |
| POST   | `/api/bookings/create-vnpay`      | Auth (user)   | Create VNPay payment                                         |
| GET    | `/api/bookings/vnpay-return`      | Public        | VNPay payment callback                                       |
| POST   | `/api/bookings/:id/cancel`        | Auth (user, owner) | Cancel booking + VNPay refund (policy: ≥7d full, 3-6d 50%, <3d none) |

> Admin-panel endpoints are gated by the custom policy `src/policies/is-admin-panel.js`. It validates the admin session token, throws `UnauthorizedError` (401) on invalid/expired tokens so the admin fetch client can trigger its refresh loop, and returns `false` (403) only for blocked admin users.

### Chatbot Request/Response

**POST `/api/chatbot/query`**

```json
// Request
{
  "message": "What tours do you have in Da Nang?",
  "language": "en",
  "history": [
    { "role": "user", "content": "Hello" },
    { "role": "bot", "content": "Hi! How can I help?" }
  ]
}

// Response
{
  "data": {
    "reply": "We have several tours in Da Nang...",
    "sources": [
      {
        "tourName": "Da Nang Discovery",
        "tourSlug": "da-nang-discovery",
        "price": "2,500,000 VND",
        "location": "Da Nang"
      }
    ]
  }
}
```

**Rate limit:** 15 requests/minute per IP.

---

## Chatbot (RAG Pipeline)

The chatbot uses a Retrieval Augmented Generation architecture:

```
User Query
    │
    ▼
┌─────────────────┐
│ Embed query with │
│ Gemini Embedding │
│ 001              │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Search ChromaDB  │  ← Top 5 most relevant tour chunks
│ for similar docs │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Build prompt     │  ← System prompt + context + conversation history
│ with context     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Gemini 2.5 Flash │  ← Generate grounded response
│ LLM response     │
└────────┬────────┘
         │
         ▼
    Bot Reply + Sources
```

**Supported languages:** Vietnamese (vi), English (en), Chinese (zh)

---

## Payment Integration (VNPay)

The booking system integrates with **VNPay** (a major Vietnamese payment gateway) for processing tour payments.

- **Sandbox mode** is configured by default for development/testing
- Payment flow: Create booking -> Redirect to VNPay -> Return callback -> Update booking status
- VNPay sandbox test credentials are available at [sandbox.vnpayment.vn](https://sandbox.vnpayment.vn)

---

## Internationalization (i18n)

The application supports three languages managed through Strapi's built-in localization:

| Code | Language           |
| ---- | ------------------ |
| `vi` | Vietnamese         |
| `en` | English            |
| `zh` | Chinese (Mandarin) |

All content types support locale variants. Use the migration script to set up initial translations:

```bash
node migrate-strapi-locales.mjs
```

> **i18n gotcha — non-localized relations on translated content**: When updating a non-vi locale (e.g. `zh`) of a content type whose `author` relation is non-localized, omit the relation from the PUT body. Otherwise Strapi will try to create a localized author that doesn't exist and error out.

---

## Admin Panel Customizations

Two custom pages are injected into the Strapi admin panel via `src/admin/app.jsx`:

### 1. Dashboard — `/admin/dashboard-tvb`

An analytics view built on Recharts. Data is served by `GET /api/dashboard/overview` (file: `src/api/dashboard/controllers/dashboard.js`).

**What it computes** (all via Knex raw queries on SQLite for speed):

- **KPIs**: revenue MTD / all-time (Paid only), bookings MTD / all-time, conversion rate = Paid / (Paid + Failed + Cancelled), Average Order Value, seats MTD, upcoming departures (7 days), distinct active customers (≥1 Paid), refunds MTD (count + amount).
- **Series**: revenue by day (last 30 days, zero-filled), booking status breakdown (pie), refund breakdown (pie), top 5 tours by booking count (grouped across locales via `tours.document_id`).
- **Tables**: last 10 bookings, upcoming 7-day departures (Paid only) — each joined with the vi-locale tour name.

The page uses Strapi's `useFetchClient` hook so admin access tokens refresh transparently on 401. It auto-polls every 60 seconds.

### 2. Chatbot Sync — `/admin/chatbot-sync`

Manual trigger for re-embedding tour content into ChromaDB (controller: `src/api/chatbot/controllers/reindex.js`). Shows live status + log tail, prevents concurrent runs via a pidfile at `/tmp/chatbot-reindex.lock`.

> ⚠️ The reindex controller currently hard-codes the following paths — **edit these if deploying to a different location**:
> - `LOG_FILE = '/srv/TuanSP/DACN_TourGuideWeb/index-tours-cron.log'`
> - `SCRIPT   = '/srv/TuanSP/DACN_TourGuideWeb/index-tours-cron.sh'`

### Custom Admin Policy

`src/policies/is-admin-panel.js` — the gate used by the dashboard + reindex routes. It extracts the admin `Bearer` token, calls `strapi.sessionManager('admin').validateAccessToken()`, checks `isSessionActive(sessionId)`, and loads the admin user. On any failure other than "user is blocked" it **throws `UnauthorizedError`** (not returns false), so the admin fetch client on the frontend treats it as a token-refresh opportunity instead of a hard 403.

---

## Production Deployment

This section documents the exact production setup used for the reference deployment (Hostinger VPS, shared with other apps). Adapt ports and paths to your environment.

### 1. Choose ports that don't collide with other services

The reference deployment uses these non-standard ports (set in `Travel_TVB_Server/.env` for Strapi, hard-coded in `webhook.js` for the CD listener, and in the Docker `-p` flag for ChromaDB):

| Service          | Port    | Configured in                                 |
| ---------------- | ------- | --------------------------------------------- |
| Strapi backend   | `17234` | `Travel_TVB_Server/.env` → `PORT=17234`       |
| Vite preview     | `23841` | `Travel_TVB/package.json` → preview `--port`  |
| Webhook listener | `31270` | `webhook.js` → `const PORT = 31270`           |
| ChromaDB (Docker)| `42839` (external) → `8000` (container) | Docker `-p` flag |

Pick any free ports on your host; update each config accordingly.

### 2. Process manager (PM2)

Three long-running processes are managed by PM2 via `ecosystem.config.cjs`:

```js
apps: [
  { name: 'tourguide-strapi',   cwd: './Travel_TVB_Server', script: 'npm',  args: 'run start' },
  { name: 'tourguide-frontend', cwd: './Travel_TVB',        script: 'npx',  args: 'vite preview' },
  { name: 'tourguide-cd',       script: './webhook.js' },
]
```

Boot them with:

```bash
cd /srv/YourPath/DACN_TourGuideWeb
npm install --prefix Travel_TVB_Server
npm install --prefix Travel_TVB
npm run build --prefix Travel_TVB_Server   # admin panel build
npm run build --prefix Travel_TVB          # frontend dist/

pm2 start ecosystem.config.cjs
pm2 save
pm2 startup                                 # generate systemd unit for auto-start
```

### 3. ChromaDB (Docker)

```bash
docker run -d --name chromadb-tourguide \
  -p 42839:8000 \
  -v chromadb_tourguide_data:/data \
  --restart unless-stopped \
  chromadb/chroma:latest
```

Then set `CHROMADB_URL=http://localhost:42839` in `Travel_TVB_Server/.env`.

### 4. Seed the vector database

After Strapi is running and tours are published:

```bash
cd Travel_TVB_Server
node src/api/chatbot/scripts/indexTours.js
```

### 5. Continuous deployment via GitHub webhook

The CD pipeline is a small Node HTTP server (`webhook.js`) that validates GitHub's `X-Hub-Signature-256` header and, on a push to `main`, runs `deploy.sh`. `deploy.sh` does:

1. Acquires `/tmp/tourguide-deploy.lock` (skips if a deploy is in-flight).
2. `git update-index --skip-worktree` on `.tmp/data.db` and `public/uploads/` so the next `git reset --hard` **will not** touch live data.
3. `git pull --rebase`, `npm ci`, builds, `pm2 restart tourguide-strapi tourguide-frontend`.

**GitHub setup**:

1. In GitHub repo **Settings → Webhooks → Add webhook**.
2. Payload URL: `http://your-host:31270/webhook`
3. Content type: `application/json`
4. Secret: generate with `openssl rand -hex 32` and put the same value into `webhook.js` → `const SECRET`.
5. Events: "Just the `push` event".

> `deploy.sh`, `webhook.js`, and `ecosystem.config.cjs` are **gitignored** on purpose — they contain absolute paths and the webhook secret, so each deployment author writes their own. Use the snippets above as templates.

### 6. Scheduled reindexing (optional)

To keep the chatbot current with CMS edits, schedule `index-tours-cron.sh` via cron. Example (twice daily):

```cron
0 3,15 * * * /srv/YourPath/DACN_TourGuideWeb/index-tours-cron.sh >> /srv/YourPath/DACN_TourGuideWeb/index-tours-cron.log 2>&1
```

The script should call `node src/api/chatbot/scripts/indexTours.js` and then `pm2 restart tourguide-strapi` so the vectorStore client reconnects to the freshly repopulated collection.

### 7. Reverse proxy (recommended)

In production you'll typically put Nginx/Caddy in front of the three PM2 apps:

- `yourdomain.com/` → `http://localhost:23841` (frontend)
- `yourdomain.com/api` and `/admin` → `http://localhost:17234` (Strapi)
- Webhook path should be a separate subdomain or unguessable route pointed at port `31270`.

Set `FRONTEND_URL`, `VNPAY_RETURN_URL`, and CORS origins in `Travel_TVB_Server/config/middlewares.js` to match the public URL.

---

## Testing

### Run All Tests

```bash
# Frontend tests (Vitest + React Testing Library)
cd Travel_TVB && npm test

# Backend tests (Jest)
cd Travel_TVB_Server && npm test
```

### Watch Mode

```bash
# Frontend
cd Travel_TVB && npm run test:watch

# Backend
cd Travel_TVB_Server && npm run test:watch
```

### Coverage Reports

```bash
# Frontend
cd Travel_TVB && npm run test:coverage

# Backend
cd Travel_TVB_Server && npm run test:coverage
```

---

## CI/CD

GitHub Actions is configured in `.github/workflows/ci.yml`. The pipeline runs on pushes and PRs to `main` and `develop` branches:

| Job               | Description                              |
| ----------------- | ---------------------------------------- |
| `frontend-tests`  | Install deps + run Vitest (Node.js 20)   |
| `backend-tests`   | Install deps + run Jest (Node.js 20)     |

---

## Troubleshooting

### Strapi won't start

- Ensure Node.js version is between 20 and 24: `node --version`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Delete the `.cache` and `build` folders: `rm -rf .cache build`
- Ensure all required `.env` variables are set (especially `APP_KEYS`)

### ChromaDB connection refused

- Verify ChromaDB is running: `curl http://localhost:8000/api/v1/heartbeat`
- Check the `CHROMADB_URL` in your `.env` matches the running ChromaDB instance
- If using Docker, ensure the port mapping is correct: `-p 8000:8000`

### Chatbot returns errors

- Ensure `GOOGLE_AI_API_KEY` is set and valid in `.env`
- Check that ChromaDB is running and accessible
- Make sure you've run the indexing script: `node src/api/chatbot/scripts/indexTours.js`
- Check Strapi logs for detailed error messages
- **503 "This model is currently experiencing high demand"** from Google: we use the `gemini-flash-latest` alias precisely because individual versioned models (e.g. `gemini-2.5-flash`) sometimes return 503 on spikes. If that alias itself fails, try swapping `LLM_MODEL` in `src/api/chatbot/services/chatbot.js` to `gemini-2.0-flash`.
- **Harmless warning** `Cannot instantiate a collection with the DefaultEmbeddingFunction` — safe to ignore. ChromaDB's JS client v3 warns when no local embedding function is installed, but our code supplies `queryEmbeddings` explicitly on every search/upsert, so default-embed is never actually used.

### Admin dashboard: intermittent "HTTP 403 PolicyError"

- Happens when admin access tokens rotate between the dashboard's 60-second polls. The custom `is-admin-panel` policy throws `UnauthorizedError` (401) on invalid/expired tokens so the admin fetch client can transparently refresh. Admin pages must use `useFetchClient` from `@strapi/strapi/admin` (not raw `fetch`) for the refresh loop to fire.

### Frontend can't connect to backend

- Verify Strapi is running on port 1337
- Check `VITE_STRAPI_URL` in `Travel_TVB/.env`
- Ensure `VITE_STRAPI_API_TOKEN` is a valid Strapi API token
- Check CORS settings in `Travel_TVB_Server/config/middlewares.js`

### VNPay payment issues

- Ensure you're using sandbox credentials for development
- Check `VNPAY_RETURN_URL` matches your server URL
- Verify `FRONTEND_URL` is set for post-payment redirects

### Database issues

- **SQLite (default):** Delete `.tmp/data.db` and restart Strapi for a fresh database
- **MySQL/PostgreSQL:** Verify connection credentials in `.env`

---

## License

This project was developed as part of a university capstone project (DACN - Do An Chuyen Nganh).