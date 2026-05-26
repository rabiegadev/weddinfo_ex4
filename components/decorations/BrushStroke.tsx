interface BrushStrokeProps {
  className?: string;
}

export function BrushStroke({ className = "" }: BrushStrokeProps) {
  return (
    <svg
      viewBox="0 0 320 48"
      className={`h-8 w-48 md:h-10 md:w-64 lg:w-80 ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8,28 C40,8 80,42 120,24 C160,8 200,38 240,22 C270,12 300,30 312,26"
        fill="none"
        stroke="#e8d5a8"
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M12,30 C50,14 90,40 130,26 C170,14 210,36 250,24 C280,16 305,28 308,26"
        fill="none"
        stroke="#c9a962"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
