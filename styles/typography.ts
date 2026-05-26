/**
 * Typography class tokens — applied via globals.css @utility
 * Fonts loaded locally from public/fonts/ (see lib/fonts.ts).
 *
 * - type-display / type-heading → Cormorant Garamond
 * - type-body → Libre Baskerville (via body font-family)
 * - type-script → Allura (akcenty, podpisy)
 * - type-script-lg → Great Vibes (imiona, data)
 */
export const typography = {
  display: "type-display",
  script: "type-script",
  scriptLg: "type-script-lg",
  heading: "type-heading",
  headingSm: "type-heading-sm",
  subheading: "type-subheading",
  body: "type-body",
  bodySm: "type-body-sm",
  caption: "type-caption",
  label: "type-label",
  monogram: "type-monogram",
} as const;

export type TypographyToken = (typeof typography)[keyof typeof typography];
