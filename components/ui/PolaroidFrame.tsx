import Image from "next/image";
import type { ReactNode } from "react";
import { typography } from "@/styles/typography";

interface PolaroidFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  tilt?: "left" | "right" | "none";
  variant?: "polaroid" | "instax";
  size?: "xs" | "sm" | "md" | "lg";
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
}

const tiltClasses = {
  left: "scrapbook-tilt-left",
  right: "scrapbook-tilt-right",
  none: "",
};

const sizeClasses = {
  xs: "w-[7rem] md:w-[8rem]",
  sm: "w-[8.5rem] md:w-[10rem]",
  md: "w-[10rem] md:w-[11.5rem]",
  lg: "w-[16rem] md:w-[20rem] lg:w-[22rem]",
};

export function PolaroidFrame({
  src,
  alt,
  caption,
  className = "",
  tilt = "none",
  variant = "polaroid",
  size = "md",
  priority = false,
  sizes = "(max-width: 768px) 90vw, 400px",
  children,
}: PolaroidFrameProps) {
  const isInstax = variant === "instax";

  return (
    <figure
      className={`inline-block bg-cream shadow-polaroid ${tiltClasses[tilt]} ${sizeClasses[size]} ${
        isInstax ? "px-2 pt-2 pb-7 md:px-2.5 md:pt-2.5 md:pb-8" : "p-3 md:p-4"
      } ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden bg-parchment ${
          isInstax ? "aspect-square" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
        {children}
      </div>
      {caption && (
        <figcaption className={`${typography.script} mt-3 text-center text-ink-muted`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
