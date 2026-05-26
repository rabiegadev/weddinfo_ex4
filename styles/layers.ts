/**
 * Z-index layering system for scrapbook compositions.
 */
export const layers = {
  base: "z-0",
  texture: "z-[1]",
  content: "z-10",
  decoration: "z-20",
  tornOverlay: "z-30",
  overlay: "z-30",
  tornPaper: "z-40",
  heroText: "z-50",
} as const;
