# SWAN Research Lab

Website for the SWAN (Software Analytics) research group at Carleton University. The site showcases the lab's research themes, people, publications, news, and industry collaborations.

## Tech Stack

- **React 19** with the React Compiler (`babel-plugin-react-compiler`) for automatic memoization
- **Vite 8** build tooling (rolldown-based)
- **Tailwind CSS v4** with CSS-first configuration (`src/index.css`)
- **motion/react** (Framer Motion) for scroll reveals, parallax, and animations
- **react-router-dom v7** for client-side routing
- **Oxlint** for linting

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server (Vite)
npm run build    # type-check (tsc -b) + production build
npm run lint     # run Oxlint
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
├── assets/           # images (hero, parallax, posters)
├── components/
│   ├── atoms/        # primitives — Avatar, Badge, Button, Typography, Reveal, etc.
│   ├── molecules/    # composites — CollaborationCard, FeatureCard, MemberCard, PublicationCard, etc.
│   └── organisms/    # sections — TopNav, Footer, HeroBand, CollaborationCarousel, MemberGrid, etc.
├── data/             # typed data sources — members, publications, news, research, collaborations
├── routes/           # page components — Home, Research, People, Publications, News, Contact
├── App.tsx           # layout shell (nav + outlet + footer)
├── main.tsx          # entry — BrowserRouter + routes
└── index.css         # Tailwind v4 theme tokens + global styles
```

Components follow an **atomic design** pattern: atoms compose into molecules, which compose into organisms, which compose into page routes.

## Design System

The site follows an editorial magazine aesthetic. Full token reference lives in [`DESIGN.md`](./DESIGN.md).

- **Type:** EB Garamond (display, weight 300) paired with Inter (body, 400/500)
- **Palette:** off-white canvas (`#f5f5f5`), warm near-black ink (`#0c0a09`), pastel gradient orbs as atmospheric decoration
- **Layout:** 1200px max content width, 96px section rhythm
- **Motion:** scroll-triggered reveals (Reveal atom), parallax images, seamless-loop carousel

## Deployment

The site deploys to **GitHub Pages** via a GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. On push to `main`, the workflow runs `npm ci && npm run build`
2. Copies `dist/index.html` → `dist/404.html` as an SPA fallback for client-side routing
3. Publishes `dist/` to GitHub Pages via `actions/deploy-pages`

Custom domain is configured through the GitHub Pages settings UI. No Vite `base` path is needed when serving from a custom domain root.
