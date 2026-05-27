import Image from "next/image";
import { decorations } from "@/styles/decorations";

interface BrushStrokeImageProps {
  className?: string;
}

/** Maz pędzla pod datą ślubu. */
export function BrushStrokeImage({ className = "" }: BrushStrokeImageProps) {
  return (
    <Image
      src="/assets/decorations/brush-3.png"
      alt=""
      width={1080}
      height={300}
      className={`pointer-events-none opacity-95 ${decorations.brushStroke} ${className}`}
      draggable={false}
    />
  );
}
