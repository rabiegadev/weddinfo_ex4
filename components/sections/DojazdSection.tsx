"use client";

import { motion } from "framer-motion";
import { Container, SectionShell } from "@/components/ui";
import { LocationMapsBlock } from "@/components/sections/LocationMapsBlock";
import type { ReturnTransport, WeddingConfig } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface DojazdSectionProps {
  locations: WeddingConfig["locations"];
  returnTransport: ReturnTransport;
  title?: string;
  intro?: string;
}

function BusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={`h-12 w-16 text-gold-soft md:h-14 md:w-[4.5rem] ${className}`}
      aria-hidden="true"
      fill="none"
    >
      <rect x="6" y="12" width="52" height="26" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 22 H58" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="16" width="10" height="8" rx="1" fill="currentColor" opacity="0.25" />
      <rect x="27" y="16" width="10" height="8" rx="1" fill="currentColor" opacity="0.25" />
      <rect x="42" y="16" width="10" height="8" rx="1" fill="currentColor" opacity="0.25" />
      <circle cx="18" cy="40" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="46" cy="40" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M29 8 H35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DojazdSection({
  locations,
  returnTransport,
  title = "Dojazd",
  intro,
}: DojazdSectionProps) {
  return (
    <SectionShell
      id="dojazd"
      padding="md"
      surface="transparent"
      disableEnterAnimation
      className="relative"
    >
      <Container size="wide" className="relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={`${typography.label} !text-gold-soft/90`}>Jak do nas dotrzeć</p>
          <h2 className={`${typography.heading} mt-3 text-cream`}>{title}</h2>
          {intro ? (
            <p className={`${typography.body} mx-auto mt-4 max-w-2xl !text-cream/88`}>{intro}</p>
          ) : null}
        </motion.div>

        <div className="mt-10 md:mt-12">
          <LocationMapsBlock locations={locations} variant="dark" />
        </div>

        <motion.div
          className="mx-auto mt-10 max-w-2xl border-t border-cream/12 pt-8 md:mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
            <div className="flex shrink-0 flex-col items-center sm:items-start">
              <BusIcon />
              <p className={`${typography.caption} mt-2 !text-gold-soft/75`}>Kierowca</p>
            </div>
            <div>
              <h3 className={`${typography.headingSm} text-cream`}>{returnTransport.title}</h3>
              <p className={`${typography.bodySm} mt-2 !leading-relaxed !text-cream/85`}>
                {returnTransport.description}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </SectionShell>
  );
}
