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
}: SectionShellProps) {
  const overflowClass = overflowVisible
    ? "overflow-x-hidden overflow-y-visible"
    : "overflow-hidden";

  return (
    <motion.section
      id={id}
      className={`relative ${overflowClass} ${paddingMap[padding]} ${surfaceMap[surface]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
