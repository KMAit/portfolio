# CLAUDE.md — Portfolio Kamel AÏT AHMED

## Project Overview
Personal portfolio website for Kamel AÏT AHMED, fullstack freelance web developer based in Paris.
One-page Vue 3 application with TypeScript, deployed on GitHub Pages.

---

## Tech Stack
- **Vue 3** — Composition API, `<script setup>`
- **TypeScript** — strict mode
- **Vite** — build tool
- **Custom CSS** — no UI framework
- **GitHub Actions** — CI/CD → GitHub Pages

---

## Project Structure
```
src/
  assets/styles/     # Global CSS variables and animations
  components/        # Vue components (one responsibility per component)
    ui/              # Reusable atomic components (ProjectCard, StackBadge)
  composables/       # Reusable logic (useScrollAnimation)
  data/              # All static data — never hardcoded in components
  types/             # TypeScript interfaces
  App.vue            # Root component — layout only
  main.ts            # Entry point
```

---

## Developer Profile
- **Name**: Kamel AÏT AHMED
- **Role**: Fullstack Web Developer Freelance
- **Location**: Paris, France
- **Stack**: PHP · Symfony · Laravel · Vue.js · React · TypeScript · Docker · MySQL
- **GitHub**: https://github.com/KMAit

---

## Code Rules

### Always
- Use `<script setup lang="ts">` — no Options API
- Type all props with `defineProps<T>()`
- Use interfaces from `src/types/index.ts`
- Write comments in English on non-obvious logic
- Use semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`)
- Keep components under 150 lines
- Use CSS variables from `:root` for colors and spacing
- Write mobile-first CSS (min-width breakpoints)

### Never
- Use `any` in TypeScript
- Hardcode data in components (use `src/data/portfolio.ts`)
- Use `v-html` without sanitization
- Add unjustified dependencies
- Use Options API
- Mix responsibilities in a single component

---

## Workflow

### Development
```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Build for production → dist/
npm run preview   # Preview production build
npm run lint      # ESLint check
```

### Deploy
Push to `main` → GitHub Actions auto-builds and deploys to GitHub Pages.

Manual deploy:
```bash
npm run build
# Push dist/ to gh-pages branch
```

---

## TypeScript Interfaces

All interfaces live in `src/types/index.ts`:

```typescript
interface Project {
  id: string
  name: string
  description: string
  stack: string[]
  technicalRationale: string
  mainChallenge: string
  githubUrl: string | null
  demoUrl: string | null
  previewImage: string | null
  status: 'in-progress' | 'completed'
}

interface StackCategory {
  name: string
  items: string[]
}

interface ContactInfo {
  // email removed — stored as base64 in ContactSection.vue to prevent bot scraping
  github: string
  linkedin: string
}

interface DeveloperProfile {
  fullName: string
  title: string
  tagline: string
  location: string
  availability: string
  responseTime: string
}
```

---

## CSS Architecture

Variables defined in `src/assets/styles/main.css`:

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-bg: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f1f5f9;
  --color-text-muted: #94a3b8;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 8rem;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

---

## Security Notes
- No sensitive data in source code
- Email links use `href="mailto:"` only — never expose in JS
- No `v-html` usage
- CSP headers recommended for production deployment
- No sensitive data exposed in the JS bundle
- `rel="noopener noreferrer"` on all external links
- CSP meta tags in `index.html`
- No `console.log` in production (Vite strips them automatically on build)

---

## Accessibility Requirements
- All icon links must have `aria-label`
- All images must have `alt` attribute
- Color contrast must meet WCAG AA
- Keyboard navigation must work for all interactive elements

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

## Architecture
- One responsibility per component — no mixing concerns
- No business logic in templates — keep them declarative
- Composables for all reusable logic
- Props are read-only — never mutate them directly

---

## Do NOT Ask Claude To
- Rewrite entire files for minor changes — use targeted diffs
- Add Tailwind, Bootstrap or any CSS framework
- Add Pinia (overkill for a static portfolio)
- Add Vue Router (one-page, no routing needed)
- Use `any` type "just to make it work"
