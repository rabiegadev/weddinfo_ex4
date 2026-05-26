"use client";

import { motion } from "framer-motion";

interface FilmStripSvgProps {
  className?: string;
}

const ROUGH_FILTER_ID = "film-strip-rough-edge";

/** Klisza kinowa (SVG) z poszarpanymi krawędziami. */
export function FilmStripSvg({ className = "" }: FilmStripSvgProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        className="pointer-events-none absolute h-0 w-0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            id={ROUGH_FILTER_ID}
            x="-6%"
            y="-2%"
            width="112%"
            height="104%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.09 0.018"
              numOctaves="4"
              seed="14"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="7"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/decorations/strip.svg"
        alt=""
        width={900}
        height={2400}
        className="film-strip-torn h-[min(78svh,44rem)] w-auto max-w-none object-contain opacity-95 drop-shadow-[0_8px_28px_rgb(0_0_0/0.35)]"
        draggable={false}
      />

      {/* Delikatne „wyrwania” na krawędziach */}
      <span
        className="absolute -left-1 top-[8%] h-3 w-5 rotate-[-18deg] bg-black/90 opacity-80"
        style={{
          clipPath:
            "polygon(0% 40%, 18% 0%, 42% 22%, 68% 4%, 100% 35%, 72% 58%, 88% 100%, 38% 72%, 12% 100%)",
        }}
        aria-hidden="true"
      />
      <span
        className="absolute -right-0.5 top-[22%] h-2.5 w-4 rotate-[12deg] bg-black/85 opacity-75"
        style={{
          clipPath:
            "polygon(0% 30%, 35% 0%, 100% 20%, 78% 55%, 100% 100%, 25% 80%, 0% 100%)",
        }}
        aria-hidden="true"
      />
      <span
        className="absolute -left-0.5 bottom-[18%] h-3 w-4.5 rotate-[8deg] bg-black/90 opacity-80"
        style={{
          clipPath:
            "polygon(0% 0%, 55% 18%, 100% 0%, 82% 45%, 100% 100%, 30% 75%, 0% 100%)",
        }}
        aria-hidden="true"
      />
      <span
        className="absolute -right-1 bottom-[32%] h-2.5 w-5 rotate-[-10deg] bg-black/85 opacity-75"
        style={{
          clipPath:
            "polygon(0% 25%, 40% 0%, 100% 30%, 70% 60%, 100% 100%, 20% 85%, 0% 100%)",
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
