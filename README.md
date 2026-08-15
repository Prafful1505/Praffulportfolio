# Prafful Agrawal — Portfolio

Personal portfolio site for Prafful Agrawal, Implementation Team Manager at Target Dial.

Built with **React 18 + TypeScript + Vite + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Deploy (Vercel)

Vercel auto-detects Vite. If you set it up manually:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

## Editing content

Almost all copy lives in one place — `src/data/site.ts`:

| What | Where |
| --- | --- |
| Name, role, contact links, resume path | `profile` |
| Hero stat tiles | `stats` |
| Scrolling skill ticker | `marqueeSkills` |
| Skills cards | `skillGroups` |
| Experience / education / certifications | `timeline` |
| Project cards | `projects` |
| Nav items | `navLinks` |

The resume PDF is served from `public/Prafful_Agrawal_Resume.pdf` — replace that file to update it.

## Structure

```
src/
  components/    Background, Navigation, Hero, About, Skills,
                 Experience, Projects, Contact, Footer, ...
  data/site.ts   All site content
  hooks/         Scroll-reveal + active-section observers
  index.css      Design tokens, glass/button/chip primitives
```
