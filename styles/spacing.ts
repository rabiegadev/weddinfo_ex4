/**
 * Reusable spacing scale for wedding templates.
 * Maps to Tailwind utilities via section-* classes in globals.css.
 */
export const spacing = {
  section: {
    sm: "py-16 md:py-20",
    md: "py-20 md:py-28 lg:py-32",
    lg: "py-24 md:py-32 lg:py-40",
    hero: "min-h-[100svh] md:min-h-screen",
  },
  container: {
    narrow: "max-w-3xl",
    default: "max-w-5xl",
    wide: "max-w-6xl",
    full: "max-w-7xl",
  },
  gap: {
    xs: "gap-3",
    sm: "gap-4 md:gap-5",
    md: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-12",
    xl: "gap-10 md:gap-16",
  },
  inset: {
    card: "p-6 md:p-8 lg:p-10",
    polaroid: "p-3 md:p-4",
    overlay: "px-4 md:px-8 lg:px-12",
  },
} as const;

export type SpacingKey = keyof typeof spacing;
