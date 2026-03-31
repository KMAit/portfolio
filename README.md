# Portfolio — Kamel AÏT AHMED

Personal portfolio website for Kamel AÏT AHMED, fullstack freelance web developer based in Paris.

**Live:** https://kmait.github.io/portfolio/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 — Composition API, `<script setup>` |
| Language | TypeScript — strict mode |
| Bundler | Vite |
| Styles | Custom CSS — no UI framework |
| CI/CD | GitHub Actions → GitHub Pages |

---

## Project Structure

```
src/
├── assets/styles/
│   ├── main.css          # CSS variables, reset, base styles
│   └── animations.css    # Keyframes, scroll-reveal utilities
├── components/
│   ├── ui/
│   │   ├── StackBadge.vue
│   │   └── ProjectCard.vue
│   ├── HeroSection.vue
│   ├── StackSection.vue
│   ├── ProjectsSection.vue
│   └── ContactSection.vue
├── composables/
│   └── useScrollAnimation.ts   # IntersectionObserver scroll reveal
├── data/
│   └── portfolio.ts            # All static data — single source of truth
├── types/
│   └── index.ts                # TypeScript interfaces
├── App.vue                     # Root component — layout only
└── main.ts                     # Entry point
```

---

## Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- npm `>=10`

---

## Installation

```bash
git clone https://github.com/KMAit/portfolio.git
cd portfolio
npm install
```

---

## Development

```bash
npm run dev        # Start dev server → http://localhost:5173/portfolio/
npm run type-check # TypeScript type checking
npm run lint       # ESLint + oxlint
```

---

## Production Build

```bash
npm run build      # Type check + build → dist/
npm run preview    # Preview production build locally
```

---

## Deployment

### Automatic (recommended)

Push to `main` — GitHub Actions runs type-check, lint, build and deploys to GitHub Pages automatically.

### Manual

```bash
npm run build
# Then push dist/ to the gh-pages branch
```

### GitHub Pages setup (first time)

1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / `/ (root)`
4. Save

---

## Before Deploying — Checklist

The following placeholders must be filled in `src/data/portfolio.ts` before going live:

| Field | Location | Note |
|---|---|---|
| `contactInfo.linkedin` | `src/data/portfolio.ts` | Fill in LinkedIn profile URL |
| `projects[0].githubUrl` (MatiKlass) | `src/data/portfolio.ts` | Fill in when repository is public |
| `projects[2].githubUrl` (url-short-sf) | `src/data/portfolio.ts` | Fill in when repository is public |
| `projects[1].demoUrl` (SkyCast) | `src/data/portfolio.ts` | Fill in after deployment |
| CV file | `public/cv-kamel-ait-ahmed.pdf` | Add PDF before deploying |

---

## Git Conventions

```
feat: add projects section
fix: correct mobile layout on hero
style: update color variables
refactor: extract ProjectCard component
docs: update README
```

---

## License

© 2025 Kamel AÏT AHMED — All rights reserved.
