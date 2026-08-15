# Prafful Agrawal — Portfolio

Personal site for Prafful Agrawal, Implementation Team Manager at Target Dial.

React 18 + TypeScript + Vite + Tailwind. No UI library, no icon packs, no animation
library — the whole thing is about 54 kB of JavaScript gzipped.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview  # serve the built output
```

## Deploy

Vercel detects Vite on its own. Manual settings, if you need them: build `npm run build`,
output `dist`, install `npm install`.

## Editing content

Everything you would want to change lives in `src/data/site.ts`:

| What | Key |
| --- | --- |
| Name, role, contact links, resume path, time zone | `profile` |
| The two opening paragraphs | `intro` |
| Project entries (expandable rows) | `work` |
| Jobs and education | `roles` |
| Certifications | `certifications` |
| Tools, grouped | `toolkit` |
| Section names and numbering | `sections` |

The resume is served from `public/Prafful_Agrawal_Resume.pdf` — swap that file to update it.

## How it works

- **Theme** — light and dark, following the system until you choose. An inline script in
  `index.html` sets the class before first paint so there is no flash; `useTheme` shares one
  source of truth across components via `useSyncExternalStore`.
- **Command menu** — `⌘K` / `Ctrl+K` anywhere, or the menu button. Jumps between sections,
  copies the email address, opens the resume and links, switches theme. It doubles as the
  mobile navigation.
- **Work rows** — each project expands in place. The height animates with a `0fr → 1fr` grid
  row, so nothing has to be measured in JavaScript.
- **Colour** — six CSS variables in `src/index.css` (`--paper`, `--surface`, `--ink`,
  `--muted`, `--rule`, `--accent`), redefined under `.dark`. Tailwind reads them, so
  `bg-paper` and `text-ink` work in both themes.
- **Type** — Newsreader for headings, Inter for text, JetBrains Mono for labels and dates.

## Structure

```
src/
  components/   Header, Intro, WorkList, Experience, Toolkit,
                Contact, Footer, Section, CommandPalette
  data/site.ts  All content
  hooks/        useTheme, useLocalTime, useReveal, useActiveSection
  index.css     Variables, base type, small component classes
```
