import Image from "next/image";

interface FlowerWithTapeProps {
  className?: string;
  flowerSize?: number;
}

/** Kwiat przyklejony kawałkiem taśmy washi. */
export function FlowerWithTape({
  className = "",
  flowerSize = 112,
}: FlowerWithTapeProps) {
  const tapeWidth = Math.round(flowerSize * 0.95);

  return (
    <div className={`relative inline-block ${className}`}>
      <Image
        src="/assets/decorations/flower1.png"
        alt=""
        width={flowerSize}
        height={flowerSize}
        className="relative z-0 drop-shadow-sm"
        draggable={false}
      />
      <Image
        src="/assets/decorations/tape1.png"
        alt=""
        width={tapeWidth}
        height={Math.round(tapeWidth * 0.35)}
        className="absolute -top-2 left-1/2 z-10 -translate-x-1/2 -rotate-[10deg] drop-shadow-sm"
        draggable={false}
      />
    </div>
  );
}
