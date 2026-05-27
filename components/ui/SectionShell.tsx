"use client";

import { motion } from "framer-motion";
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
  const overflowClass = overflowVisible ? "overflow-visible" : "overflow-hidden";
  const sectionClassName = `relative ${overflowClass} ${paddingMap[padding]} ${surfaceMap[surface]} ${className}`;

  if (disableEnterAnimation) {
    return (
      <section id={id} className={sectionClassName}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={sectionClassName}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
