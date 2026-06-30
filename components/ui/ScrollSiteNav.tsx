"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function NavLink({
  href,
  label,
  className,
  onNavigate,
}: {
  href: string;
  label: string;
  className: string;
  onNavigate?: () => void;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onNavigate}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onNavigate}>
      {label}
    </a>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 block h-px w-full bg-ink/80 transition-all duration-300 ${
          open ? "top-[7px] rotate-45" : "top-0.5"
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] block h-px w-full bg-ink/80 transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-px w-full bg-ink/80 transition-all duration-300 ${
          open ? "top-[7px] -rotate-45" : "top-[13px]"
        }`}
      />
    </span>
  );
}

export function ScrollSiteNav({ partnerOne, partnerTwo }: ScrollSiteNavProps) {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const desktopLinkClass =
    "font-[family-name:var(--font-body)] text-sm tracking-[0.14em] text-ink/80 uppercase transition-colors hover:text-wedding-orange";
  const mobileLinkClass =
    "block py-3.5 text-center font-[family-name:var(--font-body)] text-sm tracking-[0.16em] text-ink/85 uppercase transition-colors active:bg-ink/[0.04]";

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-[100]"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -16,
      }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
      }
      aria-hidden={!visible}
    >
      <nav
        className={`pointer-events-auto border-b border-ink/20 bg-cream/97 shadow-[0_8px_24px_rgb(61_52_41/0.18)] backdrop-blur-md ${
          visible ? "" : "invisible"
        }`}
        aria-label="Nawigacja główna"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:gap-6 md:px-8 md:py-3.5">
          <Link
            href="/"
            className="min-w-0 shrink font-[family-name:var(--font-script-lg)] text-lg leading-none tracking-[0.04em] text-ink sm:text-xl md:text-[2rem]"
            onClick={closeMenu}
          >
            <span className="block truncate sm:inline">
              {partnerOne}
              <span className="mx-1 font-[family-name:var(--font-script)] text-base text-ink-soft sm:text-lg md:text-xl">
                &
              </span>
              {partnerTwo}
            </span>
          </Link>

          <ul className="hidden items-center gap-x-6 md:flex lg:gap-x-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} className={desktopLinkClass} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/12 bg-cream/80 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-site-nav"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.div
              id="mobile-site-nav"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-ink/10 md:hidden"
            >
              <ul className="divide-y divide-ink/8 px-2 pb-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      label={item.label}
                      className={mobileLinkClass}
                      onNavigate={closeMenu}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
