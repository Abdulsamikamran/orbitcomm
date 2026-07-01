# Nexval — Managed IT & Cloud Communications Website

Responsive React (Vite) marketing site with Framer Motion scroll animations,
white/teal/blue theme, light mode, SEO tags, and an animated network-mesh hero.

## Run locally
```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure
- `src/components/HeroMesh.jsx` — the signature animated element (services orbiting a live core)
- `src/components/Hero.jsx` — hero section
- `src/components/Services.jsx` — 6 service cards (Managed IT, VoIP, UCaaS, CCaaS, SMS, B2B/B2C)
- `src/components/Platform.jsx` — differentiators
- `src/components/Process.jsx` — 4-step timeline
- `src/components/Sections.jsx` — stats, CTA band, footer
- `src/index.css` — design tokens (colors, type scale)
- `index.html` — SEO meta, Open Graph, Twitter cards, JSON-LD schema

## Customizing for the client
- Company name "Nexval" → replace in `Navbar.jsx`, `Sections.jsx`, `HeroMesh.jsx`, `index.html`
- Contact details → `Sections.jsx` (CTA + Footer) and `index.html` schema
- Colors → `:root` in `src/index.css` (`--teal`, `--blue`)
- All copy is placeholder-quality but production-ready; swap freely.
