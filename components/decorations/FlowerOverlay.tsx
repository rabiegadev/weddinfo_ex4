interface FlowerOverlayProps {
  className?: string;
  variant?: "bouquet" | "single";
}

export function FlowerOverlay({ className = "", variant = "bouquet" }: FlowerOverlayProps) {
  if (variant === "single") {
    return (
      <svg
        viewBox="0 0 80 80"
        className={`h-16 w-16 opacity-80 md:h-20 md:w-20 ${className}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="32" r="10" fill="#e8d5a8" opacity="0.6" />
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="40"
            cy="32"
            rx="8"
            ry="14"
            fill="#c4a08a"
            opacity="0.5"
            transform={`rotate(${angle} 40 32)`}
          />
        ))}
        <path d="M40,42 Q38,58 40,72" stroke="#8b9a7e" strokeWidth="2" fill="none" opacity="0.6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 120 100"
      className={`h-20 w-24 opacity-75 md:h-28 md:w-32 ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="35" cy="45" rx="12" ry="18" fill="#d4b8a8" opacity="0.45" transform="rotate(-20 35 45)" />
      <ellipse cx="55" cy="38" rx="14" ry="20" fill="#c4a08a" opacity="0.5" transform="rotate(10 55 38)" />
      <ellipse cx="78" cy="48" rx="11" ry="16" fill="#e8d5a8" opacity="0.4" transform="rotate(25 78 48)" />
      <circle cx="48" cy="42" r="6" fill="#c9a962" opacity="0.35" />
      <circle cx="68" cy="46" r="5" fill="#c9a962" opacity="0.3" />
      <path
        d="M30,55 Q45,70 60,85 Q75,92 90,78"
        stroke="#8b9a7e"
        strokeWidth="2.5"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path d="M50,60 Q55,75 52,88" stroke="#6b7a62" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
}
