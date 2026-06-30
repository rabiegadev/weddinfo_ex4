import Image from "next/image";
import type { ReactNode } from "react";

export type SectionBackdropVariant = "light" | "light-sage" | "cream" | "dark" | "dark-olive";
export type SectionBackdropAccent = "welcome" | "timeline" | "cards" | "route" | "locations" | "none";

interface SectionBackdropProps {
  id?: string;
  variant: SectionBackdropVariant;
  accent?: SectionBackdropAccent;
  children: ReactNode;
  className?: string;
}

function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute text-ink ${className}`}
      aria-hidden="true"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="currentColor"
    >
      {[
        [12, 18],
        [38, 8],
        [64, 22],
        [92, 12],
        [22, 48],
        [52, 58],
        [84, 44],
        [14, 78],
        [46, 92],
        [72, 72],
        [98, 88],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.15" opacity="0.35" />
      ))}
    </svg>
  );
}

function HeartScatter({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute text-wedding-orange ${className}`}
      aria-hidden="true"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <path d="M18 28c0-6 5-10 10-10 4 0 7 2 9 5 2-3 5-5 9-5 5 0 10 4 10 10 0 8-9 14-19 22C17 42 18 36 18 28z" opacity="0.12" transform="scale(0.55) translate(4 8)" />
      <path d="M18 28c0-6 5-10 10-10 4 0 7 2 9 5 2-3 5-5 9-5 5 0 10 4 10 10 0 8-9 14-19 22C17 42 18 36 18 28z" opacity="0.08" transform="scale(0.4) translate(48 52)" />
      <path d="M18 28c0-6 5-10 10-10 4 0 7 2 9 5 2-3 5-5 9-5 5 0 10 4 10 10 0 8-9 14-19 22C17 42 18 36 18 28z" opacity="0.1" transform="scale(0.35) translate(88 18)" />
    </svg>
  );
}

function AccentLayer({ variant, accent }: { variant: SectionBackdropVariant; accent: SectionBackdropAccent }) {
  const isLight = variant === "light";

  if (accent === "welcome") {
    return (
      <>
        <Image
          src="/assets/decorations/suszek2.png"
          alt=""
          width={200}
          height={420}
          className="pointer-events-none absolute -right-4 bottom-[8%] z-0 h-[clamp(10rem,22vw,16rem)] w-auto object-contain opacity-[0.14] md:right-6 lg:right-10 lg:opacity-[0.18]"
          draggable={false}
        />
        <DotPattern className="left-6 top-12 opacity-[0.45] md:left-12 md:top-16" />
      </>
    );
  }

  if (accent === "timeline") {
    return (
      <>
        <Image
          src="/assets/decorations/flower1.png"
          alt=""
          width={140}
          height={140}
          className="pointer-events-none absolute -left-6 bottom-8 z-0 h-24 w-24 rotate-[-18deg] object-contain opacity-[0.16] md:-left-2 md:h-28 md:w-28"
          draggable={false}
        />
        <DotPattern className="right-8 top-10 opacity-30 md:right-16" />
      </>
    );
  }

  if (accent === "cards") {
    return (
      <>
        <Image
          src="/assets/decorations/tape1.png"
          alt=""
          width={120}
          height={48}
          className="pointer-events-none absolute right-8 top-6 z-0 w-24 rotate-[12deg] object-contain opacity-[0.22] md:right-14 md:w-28"
          draggable={false}
        />
        <HeartScatter className="left-4 bottom-10 md:left-10" />
      </>
    );
  }

  if (accent === "route") {
    return (
      <>
        <Image
          src="/assets/decorations/flower1.png"
          alt=""
          width={120}
          height={120}
          className="pointer-events-none absolute right-6 top-10 z-0 h-20 w-20 rotate-[14deg] object-contain opacity-[0.12] md:right-12 md:h-24 md:w-24"
          draggable={false}
        />
        <DotPattern className={`left-8 bottom-12 ${isLight ? "opacity-25" : "opacity-15 text-cream"}`} />
      </>
    );
  }

  if (accent === "locations") {
    return (
      <>
        <DotPattern className="left-10 top-8 opacity-25 md:left-16" />
        <DotPattern className="right-10 bottom-10 opacity-20 md:right-16" />
      </>
    );
  }

  return null;
}

const variantClasses: Record<SectionBackdropVariant, string> = {
  light: "section-block-light",
  "light-sage": "section-block-light-sage",
  cream: "section-block-cream",
  dark: "section-block-dark",
  "dark-olive": "section-block-dark-olive",
};

export function SectionBackdrop({
  id,
  variant,
  accent = "none",
  children,
  className = "",
}: SectionBackdropProps) {
  const surfaceClass = variantClasses[variant];

  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden ${surfaceClass} ${className}`}
    >
      <div className="section-block-vignette pointer-events-none absolute inset-0" aria-hidden="true" />
      {accent !== "none" ? <AccentLayer variant={variant} accent={accent} /> : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
