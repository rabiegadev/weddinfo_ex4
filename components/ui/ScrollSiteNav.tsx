"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Informacje", href: "/informacje" },
  { label: "Plan wesela", href: "#timeline" },
  { label: "Dojazd", href: "#dojazd" },
  { label: "Kontakt", href: "#contact" },
] as const;

interface ScrollSiteNavProps {
  partnerOne: string;
  partnerTwo: string;
}

export function ScrollSiteNav({ partnerOne, partnerTwo }: ScrollSiteNavProps) {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-[100]"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -16,
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
      }
      aria-hidden={!visible}
    >
      <nav
        className={`pointer-events-auto border-b border-ink/20 bg-cream/97 px-4 py-3 shadow-[0_8px_24px_rgb(61_52_41/0.18)] backdrop-blur-md md:px-8 md:py-3.5 ${visible ? "" : "invisible"}`}
        aria-label="Nawigacja główna"
      >
        <div className="flex w-full items-center justify-between gap-4 sm:gap-6">
          <p className="shrink-0 text-left font-[family-name:var(--font-script-lg)] text-xl leading-none tracking-[0.04em] text-ink sm:text-2xl md:text-[2rem]">
            {partnerOne}
            <span className="mx-1.5 font-[family-name:var(--font-script)] text-lg text-ink-soft md:text-xl">
              &
            </span>
            {partnerTwo}
          </p>

          <ul className="ml-auto flex flex-wrap items-center justify-end gap-x-4 gap-y-1.5 md:gap-x-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-[family-name:var(--font-body)] text-xs tracking-[0.14em] text-ink/80 uppercase transition-colors hover:text-wedding-orange md:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
