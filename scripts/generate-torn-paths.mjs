import fs from "fs";

const patterns = [
  3.2, -2.4, 4.0, -1.8, 3.5, -3.0, 1.5, 2.8, -2.6, 3.8, -1.5, 2.2, -3.2, 3.4, -2.0,
  2.8, -3.6, 1.2, 4.2, -2.0, 2.4, -2.8, 3.6, -1.0, -2.5, 2.0, -1.5, 3.0, -3.4, 1.8,
];

function buildTornTopEdge(step, baseY, amplitudeScale = 1) {
  const n = Math.floor(100 / step) + 1;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const x = Math.round(i * step * 1000) / 1000;
    const y =
      Math.round((baseY + patterns[i % patterns.length] * amplitudeScale) * 10) / 10;
    pts.push(`${x}% ${y}%`);
  }
  return pts;
}

function buildTornBottomEdge(step, baseY, amplitudeScale = 1) {
  const n = Math.floor(100 / step) + 1;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const x = Math.round((100 - i * step) * 1000) / 1000;
    const y =
      Math.round((baseY + patterns[i % patterns.length] * amplitudeScale) * 10) / 10;
    pts.push(`${x}% ${y}%`);
  }
  return pts;
}

const heroTop = buildTornTopEdge(0.65, 10, 1.15);
const heroPolygon = [
  ...heroTop,
  "100% 100%",
  "0% 100%",
].join(",\n    ");

const sectionTop = buildTornTopEdge(0.75, 8, 1);
const sectionTopPoly = ["0% 0%", "100% 0%", ...sectionTop].join(",\n    ");

const sectionBottom = buildTornBottomEdge(0.75, 92, 1);
const sectionBottomPoly = [
  ...sectionBottom,
  "100% 100%",
  "0% 100%",
].join(",\n    ");

const patch = `/* AUTO-GENERATED torn edges — scripts/generate-torn-paths.mjs */
@utility hero-bottom-paper {
  background-image: url("/assets/images/bg4.png");
  background-size: cover;
  background-position: center top;
  filter: drop-shadow(0 -6px 14px rgb(45 38 32 / 0.14));
  clip-path: polygon(
    ${heroPolygon}
  );
}

@utility torn-section-top {
  clip-path: polygon(
    ${sectionTopPoly}
  );
}

@utility torn-section-bottom {
  clip-path: polygon(
    ${sectionBottomPoly}
  );
}

@utility torn-edge-shadow-top {
  filter: drop-shadow(0 4px 10px rgb(45 38 32 / 0.12));
}

@utility torn-edge-shadow-bottom {
  filter: drop-shadow(0 -5px 12px rgb(45 38 32 / 0.14));
}
`;

const cssPath = "app/globals.css";
let css = fs.readFileSync(cssPath, "utf8");

css = css.replace(
  /\/\* Hero paper overlays \*\/[\s\S]*?(?=\/\* AUTO-GENERATED torn edges|\/\* Decorative assets)/,
  "",
);

if (css.includes("/* AUTO-GENERATED torn edges")) {
  css = css.replace(
    /\/\* AUTO-GENERATED torn edges[\s\S]*?(?=\/\* Decorative assets)/,
    patch + "\n",
  );
} else {
  css = css.replace(/(\/\* Decorative assets)/, patch + "\n$1");
}

fs.writeFileSync(cssPath, css);
console.log("Generated torn edge utilities");
