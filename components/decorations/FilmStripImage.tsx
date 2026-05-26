import Image from "next/image";

interface FilmStripImageProps {
  rotate?: number;
  className?: string;
  /** Cieplejszy odcień kliszy (np. prawy górny róg hero) */
  tint?: "default" | "warm";
  width?: number;
  height?: number;
  src?: string;
}

const tintClasses: Record<NonNullable<FilmStripImageProps["tint"]>, string> = {
  default: "opacity-90 drop-shadow-md",
  warm:
    "opacity-95 brightness-110 sepia-[0.4] hue-rotate-[12deg] saturate-[1.25] drop-shadow-lg",
};

/**
 * Klisza kinowa z PNG — ułożona po skosie, może wychodzić poza kadr.
 */
export function FilmStripImage({
  rotate = -28,
  className = "",
  tint = "default",
  width = 220,
  height = 640,
  src = "/assets/overlays/film-strip-2.png",
}: FilmStripImageProps) {
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      className={`max-w-none shrink-0 object-contain ${tintClasses[tint]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      draggable={false}
    />
  );
}
