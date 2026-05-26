# Wedding Template — Cinematic Scrapbook

Premium, reusable wedding website template built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. Designed in a cinematic scrapbook / boho editorial style.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**

## Project structure

```
app/              # Layout, page, global styles
components/
  decorations/    # Reusable overlay system (tape, flowers, film, torn paper)
  sections/       # Hero, Story, Timeline, InfoCards, Gallery, Footer
  ui/             # Container, Countdown, PolaroidFrame, SectionShell
data/
  weddingData.ts  # Single config — couple, date, timeline, gallery, etc.
styles/           # Spacing, typography tokens, z-index layers
assets/           # Source asset documentation
public/assets/    # Web-served images & textures
```

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customizing for a new wedding

Edit **`data/weddingData.ts`** only:

- Couple names, monogram, tagline
- Date & countdown target (`date.iso`)
- Story paragraphs & quote
- Locations (ceremony & reception)
- Timeline events
- Info cards
- Gallery images & captions
- Footer RSVP / hashtag
- Feature flags: `showGallery`, `showCountdown`

Replace images in `public/assets/images/`.

## Architecture highlights

- **Decorative overlay system** — composable `DecorationLayer`, SVG primitives, position map
- **Typography tokens** — `type-display`, `type-script`, `type-body`, etc. in `globals.css`
- **Spacing scale** — `styles/spacing.ts` + section utility classes
- **Layered hero** — full-width image, paper texture, torn edges, brush stroke, countdown
- **Responsive** — mobile-first composition with desktop enhancements
- **No external UI libraries**

## Build

```bash
npm run build
npm start
```

## License

Private template — customize per client wedding.
