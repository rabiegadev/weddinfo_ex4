"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import type { WeddingConfig } from "@/data/weddingData";
import { typography } from "@/styles/typography";

const footerNav = [
  { label: "Plan wesela", href: "#timeline" },
  { label: "Lokalizacje", href: "#locations" },
  { label: "Informacje", href: "#quick-sections" },
  { label: "Kontakt", href: "#contact" },
] as const;

interface FooterProps {
  footer: WeddingConfig["footer"];
  couple: WeddingConfig["couple"];
  date: WeddingConfig["date"];
  bgSrc: string;
}

export function Footer({ footer, couple, date, bgSrc }: FooterProps) {
  return (
    <footer id="contact" className="relative isolate overflow-hidden pb-6 pt-8 md:pb-8 md:pt-10">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={bgSrc}
          alt=""
          fill
          unoptimized
          className="object-cover object-top brightness-[1.08] saturate-[0.95]"
          sizes="100vw"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[rgb(69_53_39/0.58)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(34_24_17/0.2)] via-transparent to-[rgb(34_24_17/0.18)]" />
      </div>

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
        </motion.div>
      </Container>
    </footer>
  );
}
