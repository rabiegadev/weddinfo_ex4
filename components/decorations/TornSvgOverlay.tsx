import type { CSSProperties } from "react";
import { layers } from "@/styles/layers";

type TornPosition = "top" | "bottom";

export type TornHeightPreset = "top-2" | "top" | "top-big" | "bottom";

interface TornSvgOverlayProps {
  position: TornPosition;
  fillImage: string;
  variant?: "overlay" | "background";
  maskSrc?: string;
  aspectRatio?: string;
  stableHeight?: boolean;
  heightPreset?: TornHeightPreset;
  fillLighten?: boolean;
  /** true = 100vw bleed; false = 100% rodzica (np. hero z overflow-hidden) */
  fullBleed?: boolean;
  className?: string;
}

const tornConfig: Record<
  TornPosition,
  {
    maskSrc: string;
    aspectRatio: string;
    heightPreset: TornHeightPreset;
    backgroundPosition: string;
  }
> = {
  top: {
    maskSrc: "/assets/overlays/torn-top-2.svg",
    aspectRatio: "1920 / 142",
    heightPreset: "top-2",
    backgroundPosition: "center top",
  },
  bottom: {
    maskSrc: "/assets/overlays/torn-bottom.svg",
    aspectRatio: "1920 / 200",
    heightPreset: "bottom",
    backgroundPosition: "center bottom",
  },
};

const TORN_HEIGHT_CLAMP: Record<TornHeightPreset, string> = {
  "top-2": "clamp(4rem, 7.4vw, 7.25rem)",
  top: "clamp(4.75rem, 10.42vw, 8.75rem)",
  "top-big": "clamp(6rem, 22vw, 16rem)",
  bottom: "clamp(4.75rem, 10.42vw, 8.75rem)",
};

function resolveHeightPreset(
  maskSrc: string,
  fallback: TornHeightPreset,
): TornHeightPreset {
  if (maskSrc.includes("torn-top-big")) return "top-big";
  if (maskSrc.includes("torn-top-2")) return "top-2";
  if (maskSrc.includes("torn-top")) return "top";
  if (maskSrc.includes("torn-bottom")) return "bottom";
  return fallback;
}

function buildMaskStyles(maskSrc: string, position: TornPosition): CSSProperties {
  const isTopBig = maskSrc.includes("torn-top-big");
  const anchor = position === "top" ? "center bottom" : "center top";

  if (isTopBig) {
    return {
      maskImage: `url("${maskSrc}")`,
      WebkitMaskImage: `url("${maskSrc}")`,
      maskSize: "100% auto",
      WebkitMaskSize: "100% auto",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskPosition: anchor,
      WebkitMaskPosition: anchor,
    };
  }

  const defaultAnchor = position === "top" ? "center top" : "center bottom";
  return {
    maskImage: `url("${maskSrc}")`,
    WebkitMaskImage: `url("${maskSrc}")`,
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: defaultAnchor,
    WebkitMaskPosition: defaultAnchor,
  };
}

/**
 * Torn edge — tło + maska SVG, pełna szerokość.
 */
export function TornSvgOverlay({
  position,
  fillImage,
  variant = "overlay",
  maskSrc: maskSrcOverride,
  aspectRatio: aspectRatioOverride,
  stableHeight = true,
  heightPreset: heightPresetOverride,
  fillLighten = true,
  fullBleed = true,
  className = "",
}: TornSvgOverlayProps) {
  const config = tornConfig[position];
  const maskSrc = maskSrcOverride ?? config.maskSrc;
  const aspectRatio = aspectRatioOverride ?? config.aspectRatio;
  const heightPreset =
    heightPresetOverride ?? resolveHeightPreset(maskSrc, config.heightPreset);
  const { backgroundPosition } = config;
  const layerClass = variant === "background" ? layers.base : layers.tornOverlay;

  const edgeStyle: CSSProperties = position === "top" ? { top: 0 } : { bottom: 0 };

  const sizeStyle: CSSProperties = stableHeight
    ? { height: TORN_HEIGHT_CLAMP[heightPreset] }
    : { aspectRatio };

  const maskStyles = buildMaskStyles(maskSrc, position);

  const positionStyle: CSSProperties = fullBleed
    ? {
        left: "50%",
        right: "auto",
        width: "100vw",
        maxWidth: "100vw",
        transform: "translateX(-50%)",
      }
    : {
        left: 0,
        right: 0,
        width: "100%",
        maxWidth: "none",
        transform: "none",
      };

  const wrapStyle: CSSProperties = {
    position: "absolute",
    ...positionStyle,
    pointerEvents: "none",
    userSelect: "none",
    ...sizeStyle,
    ...edgeStyle,
  };

  const fillStyle: CSSProperties = {
    ...maskStyles,
    backgroundImage: `url("${fillImage}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition,
  };

  return (
    <div
      className={`torn-edge-wrap pointer-events-none select-none ${layerClass} ${className}`}
      style={wrapStyle}
      aria-hidden="true"
    >
      <div className="absolute inset-0" style={fillStyle} />
      {fillLighten && (
        <div
          className="absolute inset-0 bg-white/28 mix-blend-soft-light"
          style={maskStyles}
        />
      )}
    </div>
  );
}
