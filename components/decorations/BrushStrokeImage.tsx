import Image from "next/image";

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
      className={`pointer-events-none h-auto w-full max-w-none object-contain opacity-95 ${className}`}
      draggable={false}
    />
  );
}
