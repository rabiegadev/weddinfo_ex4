interface FilmStripProps {
  className?: string;
  vertical?: boolean;
}

export function FilmStrip({ className = "", vertical = false }: FilmStripProps) {
  return (
    <svg
      viewBox="0 0 48 200"
      className={`opacity-70 ${vertical ? "h-40 w-8 md:h-52 md:w-10" : "h-8 w-40 md:h-10 md:w-52"} ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="0" width="40" height="200" fill="#2a2622" rx="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x="10"
            y={16 + i * 36}
            width="28"
            height="24"
            fill="#3d3429"
            opacity="0.6"
          />
          <circle cx="8" cy={28 + i * 36} r="3" fill="#f7f2eb" opacity="0.5" />
          <circle cx="40" cy={28 + i * 36} r="3" fill="#f7f2eb" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}
