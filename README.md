# American Dream — Interactive Sales Deck

An immersive, browser-based **sales deck** for [American Dream](https://www.americandream.com) (East Rutherford, NJ) — the 3.3M sq ft mega-destination minutes from Manhattan. Built as an interview project for **liat.ai**.

This is **not a website and not a slide export** — it's a purpose-built, self-contained interactive pitch tool. A salesperson can screen-share it on a live call, or send the link to a prospect who explores it alone. Every section drives toward one of three business actions: **sign a lease, commit to a sponsorship, or book an event.**

> 🔗 **Live demo:** https://adi-devv.github.io/liat-assessment/
> 📦 **Repository:** https://github.com/adi-devv/liat-assessment

---

## ✨ Highlights

- **Cinematic, self-contained hero** — an AI-authored generative aurora (CSS/SVG mesh gradient, light sweep, particles, film grain) that paints instantly. The official American Dream reel is available on demand — an opt-in *Ambient film* toggle, plus the full reel in **Watch the Story** — so the default load stays fast.
- **Non-linear navigation** — jump anywhere via the side dot-nav, **keyboard** (`↑/↓`, `PageUp/Down`, `Home/End`), or in-section CTAs. The viewer controls the journey.
- **Ten story beats** — Hero → Scale → Retail → Luxury → Dining → Entertainment → Events → Leasing → Sponsorship → Contact, including working **Leasing** and **Sponsorship** sub-modules.
- **Action-oriented** — a context-aware inquiry modal (Leasing / Sponsorship / Event Booking / General) is reachable from every section.
- **Fully self-contained** — generative section backgrounds *and* self-hosted fonts mean **zero external requests**; the deck stays fast and resilient even on a flaky conference-room connection.
- **Accessible & polished** — full keyboard control, visible focus rings, `prefers-reduced-motion` support, ARIA labelling, and a graceful error boundary.

---

## 🧱 Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **React 18 + TypeScript** | Component model maps cleanly to modular deck sections; strict typing for safety. |
| Build | **Vite 5** | Instant HMR, tiny optimized production bundle. |
| Styling | **Tailwind CSS 3** | Rapid, consistent luxury design system via a small custom theme (gold/dark, Playfair + Inter). |
| Animation | **Framer Motion 11** | Orchestrated, scroll-triggered entrance choreography that respects reduced-motion. |
| Deploy | **GitHub Pages** (Actions CI/CD) | Auto-deploys on every push to `main`; `vercel.json` also included for Vercel. |

Production bundle: **~96 KB gzipped JS**, fully self-contained (self-hosted fonts, zero external requests).

**Verified Lighthouse** (run against the live URL): **98 desktop / 92 mobile** Performance · **100** Accessibility · **100** Best Practices · **100** SEO.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Type-check + build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

**Requirements:** Node 18+ (developed on Node 20).

**Handy query param:** append `?novideo` to the URL (e.g. `localhost:5173/?novideo`) to disable the background video — useful for low-bandwidth demos or screen-sharing where a moving background distracts.

---

## 📁 Project Structure

```
src/
├── App.tsx                 # Deck shell: scroll-snap container, IntersectionObserver
│                           # active-section tracking, keyboard navigation
├── data.ts                 # ⭐ ALL content & config (copy, stats, tiers, sections)
├── hooks.ts                # useInViewOnce, useCountUp, usePrefersReducedMotion, useIdleFlag
├── ModalContext.tsx        # Global inquiry-modal state + intent (Leasing/Sponsorship/…)
├── index.css               # Design tokens, scroll-snap, generative hero/luxury visuals
├── components/
│   ├── Navigation.tsx      # Wordmark, "Request a Meeting", dot nav, mobile progress bar
│   ├── Modal.tsx           # Context-aware inquiry form with success state
│   ├── VideoModal.tsx      # Full "Watch the Story" video player
│   ├── ErrorBoundary.tsx   # On-brand graceful failure fallback
│   ├── sections/           # One file per story beat (Hero, Scale, Retail, …)
│   └── ui/                 # Reusable primitives: SectionShell, StatCounter,
│                           #   Ticker, AttractionCard, LeasingCard
```

**The codebase is deliberately content-driven:** nearly all copy, statistics, brand lists, leasing paths, and sponsorship tiers live in [`src/data.ts`](src/data.ts). Re-skinning the deck for another property — or updating numbers before a pitch — means editing data, not components.

---

## 🎨 Design Decisions

**1. A deck, not a webpage.** The whole experience is a full-viewport, scroll-snapped sequence with `scroll-snap-type: y mandatory`. Combined with the side dot-nav and keyboard controls, it reads like a presentation you *drive*, not a page you scroll. Navigation is non-linear — the brief's explicit requirement.

**2. Self-contained by design.** External media is a liability for a tool that "will be tested" on unknown networks and screen-shared live. Every always-on third-party dependency is gone: section backgrounds are **generative visuals** (layered CSS mesh gradients, SVG noise grain, an architectural pinstripe motif for the luxury wing), and the two typefaces are **self-hosted** (only the weights actually used). The deployed page makes **zero external requests** — it paints instantly and never shows a broken asset.

**3. Video as deliberate, not default-heavy.** The brief asks for video-first storytelling, but an always-on autoplay YouTube `<iframe>` pulls ~940 KB of third-party JS, blocks first paint, and tanked the Lighthouse score to 76. So the hero ships a gorgeous generative base that stands on its own; the **primary** video moment is the full-screen **"Watch the Story"** reel (one prominent click), and the looping ambient background is an **opt-in toggle** that only fetches YouTube when a viewer asks for it. Result: video stays central to the story, but the default load is light — Lighthouse Performance went 76 → **98 desktop / 92 mobile**.

**4. Luxury visual language.** A restrained palette (near-black + a single gold accent), a serif/sans pairing (Playfair Display + Inter), generous negative space, ultrawide letter-spacing, and slow, eased motion — the vocabulary of Apple/Hermès rather than a typical retail site.

**5. Always one click from a deal.** A global modal, opened with the relevant *intent* pre-selected, sits behind every CTA — luxury leasing, F&B, pop-up, sponsorship tiers, event booking — so a motivated prospect is never more than one click from starting a conversation.

**6. Accessibility & resilience as polish.** Keyboard navigation, focus-visible rings, `prefers-reduced-motion` (which disables ambient animation, autoplay video, and smooth-scroll), ARIA labels on decorative/interactive elements, and a top-level error boundary so a single bad render never blanks a live pitch.

---

## 🤖 How AI Was Used

This project was built **with Claude (Claude Code, Opus)** as the primary collaborator:

- **Architecture & code** — component structure, the scroll-snap deck shell, IntersectionObserver-driven section tracking, custom hooks (scroll-reveal, reduced-motion, count-up), and the context-driven modal system.
- **Generative visual assets** — rather than stock photography, the hero aurora, light sweep, film grain, and the luxury "atelier" panel are **AI-authored CSS/SVG** — fully self-contained, themeable, and zero-weight over the wire.
- **Narrative & copy** — section headlines, pitch language, and the data model (stat counters, floor mixes, sponsorship tiers, leasing paths) were drafted and refined with Claude to drive toward the three business actions.
- **QA** — layout, responsiveness, and interaction flows were validated programmatically across breakpoints.

**Content note:** the property's scale and entertainment offering (Nickelodeon Universe, DreamWorks Water Park, Big SNOW, SEA LIFE, etc.) are drawn from American Dream's public materials. Specific figures (visitor counts, demographics, tier availability) are illustrative presentation values for this interview exercise.

---

## ♿ Accessibility

- Full keyboard navigation (`↑/↓`, `PageUp/Down`, `Home/End`) plus a focusable dot-nav.
- `prefers-reduced-motion` disables ambient/looping animation, the autoplay video, and smooth-scroll.
- Visible gold focus rings on all interactive elements; ESC closes modals; background scroll locks while a modal is open.
- Decorative layers are `aria-hidden`; the inquiry form uses labelled fields and native validation.

---

## ☁️ Deployment

**GitHub Pages (live):** every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds and publishes to Pages — no manual steps. The production `base` is preset to `/liat-assessment/` in [`vite.config.ts`](vite.config.ts) so assets resolve under the project path.

**Vercel:** the included [`vercel.json`](vercel.json) rewrites all routes to `index.html`. If deploying here instead, set `base: '/'` for the build (Vercel serves from the domain root); Vercel auto-detects the build command and `dist/` output.

**Netlify:** build command `npm run build`, publish directory `dist` (also set `base: '/'`).

---

## 🧩 Expandability

The brief asks the architecture to grow into deeper sub-modules without a rewrite. It's set up for exactly that:

- **Add a story beat** → drop a component in `src/components/sections/`, add one entry to the `SECTIONS` array in `data.ts`, and render it in `App.tsx`. The dot-nav, keyboard nav, and active-section tracking pick it up automatically.
- **Add a venue/leasing/sponsorship variant** → extend the typed arrays in `data.ts` (`LEASING_PATHS`, `SPONSOR_TIERS`, `EVENT_TYPES`, `ATTRACTIONS`). New cards render from data.
- **Deep-dive modules** (e.g. a dedicated Performing Arts Center or Expo Hall page) → the modal/section pattern and `SectionShell` primitive generalize cleanly to clickable sub-routes.

---

## 🔮 What I'd Improve With More Time

- **Self-hosted, optimized hero video** (a compressed, muted MP4/WebM with a poster frame) so the looping ambient background could autoplay by default — no YouTube weight, no third-party chrome — instead of today's opt-in toggle.
- **Genuinely AI-generated raster imagery** (e.g. rendered interior/exterior shots of each wing) to complement the generative CSS visuals.
- **An interactive 3D / mapped floor plan** for the leasing module — click a unit to see availability and start an inquiry.
- **Real form submission** wired to a CRM/email endpoint, plus lightweight analytics on which sections and CTAs convert.
- **Deep-linkable routes** per module so a rep can share a link straight to "Sponsorship" or "Events."

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc`) and build for production |
| `npm run preview` | Serve the production build locally |

---

Built with React, TypeScript, Tailwind, and Framer Motion — and Claude.
