"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { layers } from "@/styles/layers";
import type { DecorationPosition } from "./types";
import { positionClasses } from "./types";

interface DecorationLayerProps {
  children: ReactNode;
  className?: string;
  position?: DecorationPosition;
  animate?: boolean;
  delay?: number;
}

export function DecorationLayer({
  children,
  className = "",
  position,
  animate = true,
  delay = 0,
}: DecorationLayerProps) {
  const positionClass = position ? positionClasses[position] : "";

  const content = (
    <div
      className={`pointer-events-none absolute ${layers.decoration} ${positionClass} ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      className={`pointer-events-none absolute ${layers.decoration} ${positionClass} ${className}`}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
