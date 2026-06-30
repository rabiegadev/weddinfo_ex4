import type { ReactNode } from "react";

export type DecorationPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center-left"
  | "center-right";

export type DecorationVariant =
  | "flower"
  | "tape"
  | "film-strip"
  | "polaroid"
  | "brush-stroke";

export interface DecorationProps {
  className?: string;
  position?: DecorationPosition;
  opacity?: number;
  rotate?: number;
  scale?: number;
  children?: ReactNode;
}

export const positionClasses: Record<DecorationPosition, string> = {
  "top-left": "top-4 left-4 md:top-8 md:left-8",
  "top-right": "top-4 right-4 md:top-8 md:right-8",
  "bottom-left": "bottom-4 left-4 md:bottom-8 md:left-8",
  "bottom-right": "bottom-4 right-4 md:bottom-8 md:right-8",
  "center-left": "top-1/2 -translate-y-1/2 left-2 md:left-6",
  "center-right": "top-1/2 -translate-y-1/2 right-2 md:right-6",
};
