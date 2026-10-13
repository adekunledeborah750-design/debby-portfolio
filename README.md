# Debby — 3D Creator Creative Portfolio

A complete, high-fidelity recreation of the reference creative portfolio ([jack-portfolio-ebon.vercel.app](https://jack-portfolio-ebon.vercel.app/)), re-engineered from the ground up for **Debby**, an independent 3D creator and visual storyteller.

Built with **React 18**, **TypeScript**, **Vite**, **Framer Motion**, and **Custom CSS3**.

---

## ✦ Key Highlights & Architecture

- **True Design Language & Art Direction**: Minimalist, cinematic, editorial, and dark aesthetic (`#0C0C0C`) featuring oversized typography with authentic metallic gradients (`linear-gradient(180deg, #646973, #bbccd7)`).
- **Hero Centerpiece Parallax**: Hero 3D sculpture composition with cursor-responsive magnetic parallax movement and layered glow.
- **Dual Track Kinetic Marquee**: Continuous infinite marquee tracks moving in opposite directions (`FORM ✳ LIGHT ✳ MOTION ✳ IDEAS ✳` and `MAKE IT MATTER ✳ CREATE WITH INTENT ✳`), accompanied by scroll-driven dynamic 3D visual reels.
- **Interactive Character-by-Character Scroll Reveal**: About section paragraph text fades from 20% to 100% opacity character by character as the user scrolls, framed by four floating 3D geometric icons.
- **Contrasting Services Architecture**: Clean editorial light background (`#E7E8E5`) with bold oversized numbers, service breakdown, specialized tags, and interactive directional micro-interactions.
- **Sticky Stacking Project Cards**: Smooth viewport-linked card scaling for 3 featured client & personal case studies (*Nextlevel Studio*, *Aura Brand Identity*, and *Solaris Digital*), each displaying a distinctive 3-image layout.
- **Closing Contact Section**: Dramatic metallic typography closing with interactive magnetic email CTA (`mailto:hello@debby.studio`), one-click clipboard copying, social links, and refined footer.
- **Accessibility & Performance**: Full support for `prefers-reduced-motion`, keyboard navigation focus rings, responsive mobile menu drawer, and zero layout shift.

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18.3 (Functional components + Hooks) |
| **Language** | TypeScript 5.6 (Strict mode, full type definitions) |
| **Bundler** | Vite 5.4 |
| **Motion & Physics** | Framer Motion 11 (`useScroll`, `useTransform`, `motion.*`) |
| **Icons** | Lucide React |
| **Styling** | Custom CSS3 + Design System Variables + Fluid `clamp()` typography |
| **Deployment** | Vercel (Production build tested and verified) |

---

## ✦ Directory Structure

```
debby-portfolio/
├── public/
│   ├── favicon.svg              # Branded Debby SVG favicon
│   └── images/                  # High-resolution 3D assets & project artwork
│       ├── hero-artwork.png     # Centerpiece 3D sculpture
│       ├── about-moon.png       # Floating 3D icon
│       ├── about-lego.png       # Floating 3D icon
│       ├── about-shape1.png     # Floating 3D icon
│       ├── about-shape2.png     # Floating 3D icon
│       ├── project1-*.png       # Nextlevel Studio assets
│       ├── project2-*.png       # Aura Brand Identity assets
│       ├── project3-*.png       # Solaris Digital assets
│       └── reel-*.gif           # 3D visual reel highlights
├── src/
│   ├── components/
│   │   ├── Navigation.tsx       # Desktop nav & mobile drawer
│   │   ├── Hero.tsx             # Opening section & magnetic 3D artwork
│   │   ├── Marquee.tsx          # Dual typography tracks & visual reels
│   │   ├── About.tsx            # Floating icons & character scroll reveal
│   │   ├── Services.tsx         # Light-theme services with hover rows
│   │   ├── Projects.tsx         # Sticky stacked project showcase cards
│   │   ├── Contact.tsx          # Metallic heading, mailto & clipboard CTA
│   │   └── Reveal.tsx           # Reusable Reveal & Magnetic components
│   ├── data/
│   │   ├── projects.ts          # Typed project items & marquee data
│   │   └── services.ts          # Typed services items & tags
│   ├── App.tsx                  # Master application layout
│   ├── main.tsx                 # React DOM mount point
│   └── style.css                # Custom CSS design system & utilities
├── index.html                   # HTML entry point with metadata & Kanit font
├── package.json                 # Dependencies & build scripts
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
```

---

## ✦ Getting Started

### Prerequisites

Ensure you have Node.js 18+ and npm installed.

### Installation

```bash
cd debby-portfolio
npm install
```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

This compiles TypeScript (`tsc`) and outputs minified static assets to the `dist/` directory.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

---

## ✦ Vercel Deployment Guide

This project is pre-configured for direct deployment to [Vercel](https://vercel.com):

1. **Via Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```
2. **Via GitHub**:
   - Push this repository to GitHub.
   - Import the repository in your Vercel Dashboard.
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Click **Deploy**.
