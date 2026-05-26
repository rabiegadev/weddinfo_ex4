import localFont from "next/font/local";

/** Display & headings — Cormorant Garamond */
export const fontDisplay = localFont({
  src: [
    {
      path: "../public/fonts/Cormorant_Garamond/static/CormorantGaramond-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/static/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/static/CormorantGaramond-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/static/CormorantGaramond-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/static/CormorantGaramond-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/static/CormorantGaramond-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

/** Body text — Libre Baskerville */
export const fontBody = localFont({
  src: [
    {
      path: "../public/fonts/Libre_Baskerville/static/LibreBaskerville-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Libre_Baskerville/static/LibreBaskerville-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Libre_Baskerville/static/LibreBaskerville-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Libre_Baskerville/static/LibreBaskerville-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Libre_Baskerville/static/LibreBaskerville-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Libre_Baskerville/static/LibreBaskerville-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-libre",
  display: "swap",
});

/** Large script — Great Vibes (imiona, data w Hero) */
export const fontScriptLg = localFont({
  src: "../public/fonts/Great_Vibes/GreatVibes-Regular.ttf",
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

/** Accent script — Allura (podpisy, cytaty, detale) */
export const fontScript = localFont({
  src: "../public/fonts/Allura/Allura-Regular.ttf",
  weight: "400",
  variable: "--font-allura",
  display: "swap",
});
