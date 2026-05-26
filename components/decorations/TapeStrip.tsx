interface TapeStripProps {
  className?: string;
  rotate?: number;
  width?: "sm" | "md" | "lg";
}

const widthMap = {
  sm: "w-16 h-6",
  md: "w-24 h-8 md:w-28 md:h-9",
  lg: "w-32 h-10 md:w-40 md:h-12",
};

export function TapeStrip({
  className = "",
  rotate = -12,
  width = "md",
}: TapeStripProps) {
  return (
    <div
      className={`${widthMap[width]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 40" className="h-full w-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="2"
          y="4"
          width="116"
          height="32"
          rx="1"
          fill="#d4c4a8"
          opacity="0.75"
        />
        <rect
          x="2"
          y="4"
          width="116"
          height="32"
          rx="1"
          fill="url(#tapeSheen)"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="tapeSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <line x1="8" y1="12" x2="112" y2="12" stroke="#c4b49a" strokeWidth="0.5" opacity="0.5" />
        <line x1="8" y1="28" x2="112" y2="28" stroke="#c4b49a" strokeWidth="0.5" opacity="0.5" />
      </svg>
    </div>
  );
}
