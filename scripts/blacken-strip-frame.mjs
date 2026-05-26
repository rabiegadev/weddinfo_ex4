import fs from "node:fs";

const stripPath = new URL(
  "../public/assets/decorations/strip.svg",
  import.meta.url,
);

let svg = fs.readFileSync(stripPath, "utf8");

svg = svg.replaceAll('fill="#111111"', 'fill="#000000"');
svg = svg.replaceAll('fill="#B78F69"', 'fill="#000000"');
svg = svg.replaceAll('stroke="#2C2C2C"', 'stroke="#000000"');
svg = svg.replaceAll('stroke="#2A2A2A"', 'stroke="#000000"');
svg = svg.replace(
  '<rect width="900" height="2400" fill="white"/>',
  '<rect width="900" height="2400" fill="#000000"/>',
);
svg = svg.replace(
  /opacity="0\.7" d="M684\.65[\s\S]*?" fill="white"/,
  (match) => match.replace('fill="white"', 'fill="#000000"').replace('opacity="0.7"', 'opacity="0.95"'),
);
// Visible strip outline (duplicate of mask shape, outside mask)
svg = svg.replace(
  /<path d="M857\.846 -14\.9738L-41\.6053 16\.4358L42\.1535 2414\.97L941\.605 2383\.56L857\.846 -14\.9738Z" fill="white"\/>/g,
  '<path d="M857.846 -14.9738L-41.6053 16.4358L42.1535 2414.97L941.605 2383.56L857.846 -14.9738Z" fill="#000000"/>',
);
// Restore mask luminance fill to white (first occurrence inside mask)
svg = svg.replace(
  /<mask id="mask0_1_128"[\s\S]*?<path d="M857\.846 -14\.9738L-41\.6053 16\.4358L42\.1535 2414\.97L941\.605 2383\.56L857\.846 -14\.9738Z" fill="#000000"\/>/,
  (block) => block.replace('fill="#000000"', 'fill="white"'),
);

fs.writeFileSync(stripPath, svg);
console.log("strip.svg frame blackened");
