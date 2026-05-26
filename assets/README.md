# Assets

Source assets for wedding templates. Place originals here, then copy optimized versions to `public/assets/`.

## Structure

```
assets/
  images/     # Source photography (high-res)
  textures/   # Paper, grain, overlays
public/assets/
  images/     # Served images (optimized for web)
  textures/   # SVG textures referenced in CSS
```

## Replacing for a new couple

1. Replace `public/assets/images/hero.jpg` with the main hero photo.
2. Add gallery images as `gallery-1.jpg` … `gallery-N.jpg`.
3. Update paths in `data/weddingData.ts` if filenames differ.
