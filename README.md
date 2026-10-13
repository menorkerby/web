# CodeMerge — IT & Digital Services

A premium landing page for CodeMerge, a Manila-based IT and digital services business concept.

Built with **React + Vite + TypeScript + Tailwind CSS** (frontend) and **Node.js + Express** (backend).

---

## Project Structure

```
codemerge/
├── client/         # React + Vite frontend
└── server/         # Node.js + Express API
```

---

## Quick Start

### 1. Install all dependencies

```bash
npm run install:all
```

### 2. Configure environment variables

```bash
cp server/.env.example server/.env
# Edit server/.env with your SMTP credentials and contact email
```

### 3. Run development servers

```bash
npm run dev
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## Client Only

```bash
cd client
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
```

## Server Only

```bash
cd server
npm install
npm run dev       # start with ts-node-dev
npm start         # production (compile first)
```

---

## Environment Variables (server/.env)

| Variable | Description |
|---|---|
| `PORT` | Express port (default: 5000) |
| `NODE_ENV` | `development` or `production` |
| `CLIENT_ORIGIN` | Frontend URL for CORS (e.g. http://localhost:5173) |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP port (usually 587 or 465) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASSWORD` | SMTP password |
| `CONTACT_RECIPIENT_EMAIL` | Where inquiries are delivered |
| `CONTACT_SENDER_EMAIL` | From address for sent emails |

> **Important:** Configure SMTP before launch. Without valid SMTP credentials, the contact form returns a clear error — it will not fake a success response.

---

## API Endpoints

### `GET /api/health`
Returns `{ "status": "ok", "service": "codemerge-api" }`

### `POST /api/contact`
Accepts inquiry form data. Validates server-side, checks honeypot, enforces rate limiting, and delivers via SMTP.

---

## Production Deployment Notes

1. Build the frontend: `npm run build` (output: `client/dist/`)
2. Serve `client/dist/` with a static host (Netlify, Vercel static, Nginx) or point Express to it.
3. Deploy server to a Node.js host (Railway, Render, Fly.io).
4. Set all required environment variables on the host.
5. Update `CLIENT_ORIGIN` in server `.env` to match the live domain.

---

## Important Notes

- CodeMerge is a proposed business concept. No DTI registration claims are made on the site.
- Content is truthful — no fake testimonials, client logos, or invented statistics.
- Concept gallery items are clearly labeled as non-client work.
- SMTP must be configured before the contact form works in production.
