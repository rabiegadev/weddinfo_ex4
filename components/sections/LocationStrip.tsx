"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import type { WeddingConfig } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface LocationStripProps {
  locations: WeddingConfig["locations"];
}

function ChurchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={`h-10 w-10 text-ink md:h-12 md:w-12 ${className}`} aria-hidden="true">
      <path
        d="M24 6 L24 14 M18 14 L30 14 M20 14 L20 38 L28 38 L28 14 M16 38 L32 38 M22 22 L26 22 M22 28 L26 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24 4 L26 10 L22 10 Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

function ManorIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={`h-10 w-10 text-ink md:h-12 md:w-12 ${className}`} aria-hidden="true">
      <path
        d="M10 38 L10 20 L24 10 L38 20 L38 38 M14 38 L14 24 L20 24 L20 38 M28 38 L28 24 L34 24 L34 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 38 L40 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LocationColumn({
  icon,
  title,
  name,
  address,
  mapUrl,
  linkLabel,
}: {
  icon: ReactNode;
  title: string;
  name: string;
  address: string;
  mapUrl?: string;
  linkLabel: string;
}) {
  return (
    <div className="flex flex-col items-center px-6 py-8 text-center md:px-10 md:py-10">
      {icon}
      <h3 className="font-[family-name:var(--font-script-lg)] mt-4 text-3xl text-ink md:text-4xl">
        {title}
      </h3>
      <p className={`${typography.body} mt-3 max-w-xs text-ink-soft`}>
        {name}, {address}
      </p>
      {mapUrl && (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${typography.label} mt-5 inline-block text-ink transition-colors hover:text-wedding-orange`}
        >
          {linkLabel} →
        </a>
      )}
    </div>
  );
}

export function LocationStrip({ locations }: LocationStripProps) {
  return (
    <section id="locations" className="relative z-10 bg-cream/90 py-10 md:py-14">
      <Container size="wide">
        <motion.div
          className="grid grid-cols-1 divide-y divide-ink/10 md:grid-cols-2 md:divide-x md:divide-y-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <LocationColumn
            icon={<ChurchIcon />}
            title="Ceremonia"
            name={locations.ceremony.name}
            address={locations.ceremony.address}
            mapUrl={locations.ceremony.mapUrl}
            linkLabel={locations.ceremony.linkLabel ?? "ZOBACZ DOJAZD"}
          />
          <LocationColumn
            icon={<ManorIcon />}
            title="Przyjęcie weselne"
            name={locations.reception.name}
            address={locations.reception.address}
            mapUrl={locations.reception.mapUrl}
            linkLabel={locations.reception.linkLabel ?? "ZOBACZ DOJAZD"}
          />
        </motion.div>
      </Container>
    </section>
  );
}
