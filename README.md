# Gamal Gaber — Portfolio

Personal portfolio site built with Next.js 16 and React 19. Fast, minimal, and designed from scratch — no UI libraries.

**Live:** [gamalgaber.dev](https://gamalgaber.dev)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Custom CSS (no Tailwind) |
| Fonts | Bricolage Grotesque via `next/font/google` · Clash Display self-hosted via `next/font/local` |
| Forms | react-hook-form · Zod · Forminit |
| Deploy | Netlify |
| CI | GitHub Actions |

---

## Features

- **Hero** — animated marquee, parallax shapes, scroll badge
- **About** — stat cards with accent colors
- **Experience & Education** — vertical timeline
- **Skills** — bento grid layout
- **Projects** — horizontal scroll rail with modal detail view + full `/projects` page
- **Blog** — post list with modal reader
- **Contact** — form with per-field validation (Zod schema), submitted via Forminit

---

## Local Setup

```bash
# 1. Clone
git clone https://github.com/gamalgaber/portfolio-26.git
cd portfolio-26

# 2. Install
npm install

# 3. Environment variables (see below)
cp .env.example .env.local

# 4. Dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file in the root:

```env
# Optional — enables higher rate limits and protected forms on Forminit
FORMINIT_API_KEY=your_key_here
```

The contact form works without `FORMINIT_API_KEY` for public Forminit forms.

---

## Scripts

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## Project Structure

```
app/
├── api/forminit/       # Server-side Forminit proxy route
├── blog/               # Blog listing page
├── projects/           # Full projects page
├── styles/             # Per-section CSS files
├── globals.css         # CSS variables, keyframes, utility classes
├── layout.tsx          # Root layout — fonts, metadata, JSON-LD
└── page.tsx            # Home page (all sections)

components/
├── ContactForm.tsx      # RHF + Zod form → Forminit
├── ProjectsRail.tsx     # Horizontal scroll project rail
├── BlogContent.tsx      # Blog post modal
├── HeroMarquee.tsx      # Animated tech marquee
├── ClientProviders.tsx  # Scroll reveal, parallax, cursor
├── Nav.tsx
└── Footer.tsx

public/fonts/            # Self-hosted Clash Display woff2 files
```

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production — auto-deploys to Netlify |
| `develop` | Integration branch — base for all feature work |
| `feat/*` | New features |
| `fix/*` | Bug fixes |
| `perf/*` | Performance improvements |
| `style/*` | Visual / CSS changes |
| `refactor/*` | Code refactoring |
| `ci/*` | CI/CD changes |
| `docs/*` | Documentation |

PRs always target `develop`. `develop` → `main` when ready to ship.

### Commit format

```
<subject>(<scope>): <message>

# Examples
feat(contact): add Zod validation to contact form
fix(nav): resolve anchor scroll on subpages
perf(fonts): self-host Clash Display via next/font/local
```

---

## CI

GitHub Actions runs on every push and PR to `develop` and `main`:

1. Install dependencies (`npm ci`)
2. Lint (`npm run lint`)
3. Production build (`npm run build`)

Netlify handles deployment automatically on merge to `main`.

---

## License

MIT
