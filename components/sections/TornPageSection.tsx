import type { ReactNode } from "react";
import Image from "next/image";

interface TornPageSectionProps {
  id?: string;
  bgSrc: string;
  children: ReactNode;
  tornBottom?: boolean;
  tornVariant?: "a" | "b" | "c";
  lighten?: boolean;
  className?: string;
}

export function TornPageSection({
  id,
  bgSrc,
  children,
  tornBottom = true,
  tornVariant = "a",
  lighten = true,
  className = "",
}: TornPageSectionProps) {
  const tornClass =
    tornVariant === "b"
      ? "torn-section-bottom-b torn-edge-shadow-bottom-b"
      : tornVariant === "c"
        ? "torn-section-bottom-c torn-edge-shadow-bottom-c"
        : "torn-section-bottom torn-edge-shadow-bottom";

  return (
    <section id={id} className={`relative isolate ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={bgSrc}
          alt=""
          fill
          unoptimized
          className="object-cover object-top brightness-[1.1] saturate-[0.95] contrast-[0.98]"
          sizes="100vw"
          draggable={false}
        />
        {lighten ? <div className="section-bg-lighten absolute inset-0" /> : null}
      </div>
      <div className="relative z-10">{children}</div>

      {tornBottom ? (
        <div
          className={`pointer-events-none absolute inset-x-0 -bottom-6 z-30 h-14 md:-bottom-7 md:h-16 ${tornClass}`}
          aria-hidden="true"
        >
          <Image
            src={bgSrc}
            alt=""
            fill
            unoptimized
            className="object-cover object-bottom brightness-[1.06] saturate-[0.95]"
            sizes="100vw"
            draggable={false}
          />
          {lighten ? <div className="section-bg-lighten absolute inset-0 opacity-80" /> : null}
        </div>
      ) : null}
    </section>
  );
}
