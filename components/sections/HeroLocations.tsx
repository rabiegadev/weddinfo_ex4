"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import type { WeddingConfig } from "@/data/weddingData";
import { typography } from "@/styles/typography";

function LocationColumn({
  iconSrc,
  title,
  name,
  address,
  mapUrl,
  linkLabel,
}: {
  iconSrc: string;
  title: string;
  name: string;
  address: string;
  mapUrl?: string;
  linkLabel: string;
}) {
  return (
    <div className="flex items-start gap-4 px-4 py-3 md:gap-5 md:px-8">
      <Image
        src={iconSrc}
        alt=""
        width={56}
        height={56}
        className="mt-1 h-12 w-12 shrink-0 object-contain sepia hue-rotate-[340deg] saturate-[1.8] brightness-[0.55] md:h-14 md:w-14"
        draggable={false}
      />
      <div className="text-left">
        <h3 className="font-[family-name:var(--font-script-lg)] text-[1.7rem] leading-tight text-ink md:text-[2.05rem]">
          {title}
        </h3>
        <p className={`${typography.bodySm} mt-1 max-w-[24rem] text-ink-soft`}>
          {name}, {address}
        </p>
        {mapUrl ? (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${typography.label} mt-2 inline-block text-ink transition-colors hover:text-wedding-orange`}
          >
            {linkLabel} →
          </a>
        ) : null}
      </div>
    </div>
  );
}

interface HeroLocationsProps {
  locations: WeddingConfig["locations"];
  bgSrc: string;
}

export function HeroLocations({ locations, bgSrc }: HeroLocationsProps) {
  return (
    <div id="locations" className="relative z-40 w-full">
      <div
        className="hero-bottom-paper relative w-full pt-8 pb-8 md:pt-9 md:pb-9"
        style={{ backgroundImage: `url("${bgSrc}")` }}
      >
        <Container size="full">
          <div className="grid grid-cols-2 divide-x divide-ink/12">
            <LocationColumn
              iconSrc="/assets/icons/church.png"
              title="Ceremonia"
              name={locations.ceremony.name}
              address={locations.ceremony.address}
              mapUrl={locations.ceremony.mapUrl}
              linkLabel={locations.ceremony.linkLabel ?? "ZOBACZ DOJAZD"}
            />
            <LocationColumn
              iconSrc="/assets/icons/hall.png"
              title="Przyjęcie weselne"
              name={locations.reception.name}
              address={locations.reception.address}
              mapUrl={locations.reception.mapUrl}
              linkLabel={locations.reception.linkLabel ?? "ZOBACZ DOJAZD"}
            />
          </div>
        </Container>
        <div
          className="hero-locations-rip pointer-events-none absolute inset-x-0 -bottom-7 h-14 md:-bottom-8 md:h-16"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
