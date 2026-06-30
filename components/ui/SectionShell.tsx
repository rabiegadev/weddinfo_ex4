"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  surface?: "cream" | "parchment" | "transparent";
  /** Domyślnie hidden — dla sekcji z wystającymi polaroidami/taśmami ustaw true */
  overflowVisible?: boolean;
  /** Wyłącza fade-in całej sekcji przy scrollu (np. gdy tło ma być od razu widoczne) */
  disableEnterAnimation?: boolean;
}

const paddingMap = {
  sm: "section-padding-sm",
  md: "section-padding-md",
  lg: "section-padding-lg",
};

const surfaceMap = {
  cream: "surface-cream",
  parchment: "surface-paper",
  transparent: "bg-transparent",
};

export function SectionShell({
  id,
  children,
  className = "",
  padding = "md",
  surface = "cream",
  overflowVisible = false,
  disableEnterAnimation = false,
}: SectionShellProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const overflowClass = overflowVisible ? "overflow-visible" : "overflow-hidden";
  const sectionClassName = `relative ${overflowClass} ${paddingMap[padding]} ${surfaceMap[surface]} ${className}`;

  if (disableEnterAnimation || reduceMotion) {
    return (
      <section id={id} className={sectionClassName}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      key={`${pathname}-${id ?? "section"}`}
      id={id}
      className={sectionClassName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
