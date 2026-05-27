/**
 * Stable sizing for decorative assets — avoids aggressive vw/svh scaling.
 * Matching utilities are defined in app/globals.css.
 */
export const decorations = {
  filmStrip: "deco-film-strip",
  filmColumn: "deco-film-column",
  driedFlower: "deco-dried-flower",
  driedFlowerColumn: "deco-dried-flower-column",
  brushStroke: "deco-brush-stroke",
  brushCta: "deco-brush-cta",
  icon: "deco-icon",
  flowerBouquet: "deco-flower-bouquet",
  flowerSingle: "deco-flower-single",
  romanticIcon: "deco-romantic-icon",
} as const;
