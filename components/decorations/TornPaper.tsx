interface TornPaperProps {
  position: "top" | "bottom";
  className?: string;
}

export function TornPaper({ position, className = "" }: TornPaperProps) {
  const isTop = position === "top";

  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 z-40 w-full overflow-hidden leading-[0] ${isTop ? "top-0" : "bottom-0"} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block h-10 w-full md:h-16 lg:h-20 ${isTop ? "" : "rotate-180"}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`tornGrad-${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7f2eb" />
            <stop offset="100%" stopColor="#f0e8dc" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#tornGrad-${position})`}
          d="M0,0 L0,35 Q60,55 120,30 Q180,8 240,38 Q300,62 360,28 Q420,5 480,40 Q540,68 600,32 Q660,12 720,42 Q780,58 840,26 Q900,6 960,36 Q1020,55 1080,30 Q1140,10 1200,38 Q1260,60 1320,28 Q1380,8 1440,34 L1440,0 Z"
        />
        <path
          fill="#ebe3d6"
          opacity="0.4"
          d="M0,25 Q80,48 160,22 Q240,2 320,30 Q400,52 480,20 Q560,0 640,28 Q720,50 800,18 Q880,0 960,26 Q1040,48 1120,22 Q1200,4 1280,30 Q1360,52 1440,20 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
