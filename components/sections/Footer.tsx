"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import type { WeddingConfig } from "@/data/weddingData";
import { typography } from "@/styles/typography";

const footerNav = [
  { label: "Informacje", href: "/informacje" },
  { label: "Plan wesela", href: "#timeline" },
  { label: "Dojazd", href: "#dojazd" },
  { label: "Kontakt", href: "#contact" },
] as const;

interface FooterProps {
  footer: WeddingConfig["footer"];
  couple: WeddingConfig["couple"];
  date: WeddingConfig["date"];
}

export function Footer({ footer, couple, date }: FooterProps) {
  return (
    <footer id="contact" className="relative overflow-hidden section-block-dark-deep pb-6 pt-8 md:pb-8 md:pt-10">
      <div className="section-block-vignette pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container size="narrow" className="relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {footer.message ? (
            <p className="font-[family-name:var(--font-script-lg)] text-[clamp(1.7rem,5vw,2.4rem)] leading-tight text-cream">
              {footer.message}
            </p>
          ) : null}

          <nav className="mt-2" aria-label="Nawigacja stopki">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${typography.caption} !text-cream/80 transition-colors hover:!text-gold-soft`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className={`${typography.caption} mt-4 !tracking-[0.18em] !text-cream/75`}>
            {couple.displayNames.toUpperCase()} • {date.display.toUpperCase()}
          </p>

          <p className="mt-6 text-[0.625rem] tracking-[0.06em] text-cream/30">
            Created by:{" "}
            <a
              href="https://weddinfo.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 transition-colors hover:text-cream/60"
            >
              weddinfo.pl
            </a>
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
