"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Plan wesela", href: "#timeline" },
  { label: "Lokalizacje", href: "#locations" },
  { label: "Informacje", href: "#info" },
  { label: "Kontakt", href: "#contact" },
  { label: "Galeria", href: "#gallery" },
] as const;

const navContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

interface HeroNavProps {
  className?: string;
}

export function HeroNav({ className = "" }: HeroNavProps) {
  return (
    <motion.nav
      className={`pointer-events-auto absolute inset-x-0 top-0 z-50 px-4 pt-5 md:px-8 md:pt-7 ${className}`}
      initial="hidden"
      animate="visible"
      variants={navContainer}
      aria-label="Nawigacja główna"
    >
      <ul className="mx-auto flex max-w-4xl translate-x-5 flex-wrap items-center justify-center gap-x-5 gap-y-2 md:translate-x-10 md:gap-x-8 lg:translate-x-14 lg:gap-x-10">
        {navItems.map((item) => (
          <motion.li key={item.href} variants={navItem}>
            <a
              href={item.href}
              className="group relative inline-block font-[family-name:var(--font-body)] text-sm tracking-[0.12em] text-ink/80 transition-colors duration-300 hover:text-ink md:text-[0.9375rem]"
            >
              <motion.span
                className="inline-block"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
              >
                {item.label}
              </motion.span>
              <span
                className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gold/70 transition-all duration-300 ease-out group-hover:w-full"
                aria-hidden="true"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
