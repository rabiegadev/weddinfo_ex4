import type { ReactNode } from "react";
import Image from "next/image";

interface SectionBgWrapProps {
  bgSrc: string;
  children: ReactNode;
}

/** Jedno ciągłe tło dla grupy sekcji (np. Welcome + Practical) — bez szwu między blokami */
export function SectionBgWrap({ bgSrc, children }: SectionBgWrapProps) {
  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={bgSrc}
          alt=""
          fill
          unoptimized
          className="object-cover object-top brightness-[1.18] saturate-[0.92] contrast-[0.96]"
          sizes="100vw"
          draggable={false}
        />
        <div className="section-bg-lighten absolute inset-0" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
