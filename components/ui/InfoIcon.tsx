import type { InfoCard } from "@/data/weddingData";

interface InfoIconProps {
  icon: InfoCard["icon"];
  className?: string;
}

export function InfoIcon({ icon, className = "" }: InfoIconProps) {
  const base = `h-8 w-8 text-sage-deep ${className}`;

  switch (icon) {
    case "rings":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden="true">
          <circle cx="11" cy="16" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="21" cy="16" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden="true">
          <path
            d="M16,4 L24,8 L24,22 L16,28 L8,22 L8,8 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="16" cy="15" r="3" fill="currentColor" opacity="0.4" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden="true">
          <rect x="6" y="14" width="20" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16,14 L16,6 M10,10 Q16,4 22,10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "dress":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden="true">
          <path
            d="M16,6 L22,12 L26,28 L6,28 L10,12 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "music":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden="true">
          <circle cx="10" cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="22" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14,24 L14,8 L26,6 L26,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "camera":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden="true">
          <rect x="4" y="10" width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12,10 L14,6 L22,6 L24,10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
