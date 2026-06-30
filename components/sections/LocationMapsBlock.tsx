"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  buildMapEmbedUrl,
  buildMapLink,
  type WeddingConfig,
} from "@/data/weddingData";
import { typography } from "@/styles/typography";

type LocationKey = "ceremony" | "reception";
type LocationMapsVariant = "dark" | "light";

interface LocationMapsBlockProps {
  locations: WeddingConfig["locations"];
  variant?: LocationMapsVariant;
  className?: string;
}

const variantStyles = {
  dark: {
    label: "!text-cream/90",
    name: "!text-cream/75",
    iconActive: "bg-cream/15 shadow-[0_0_0_1px_rgb(255_253_250/0.2)]",
    iconIdle: "bg-cream/5",
    iconImage: "brightness-110",
    mapRingActive: "ring-gold-soft/50 shadow-[0_8px_28px_rgb(0_0_0/0.35)]",
    mapRingIdle: "ring-cream/15 hover:ring-cream/30",
    mapBadgeActive: "bg-cream/20 text-cream",
    mapBadgeIdle: "bg-black/30 text-cream/80",
    address: "!text-gold-soft/80",
    directions: "!text-cream/88",
    note: "!text-cream/65",
  },
  light: {
    label: "text-ink-soft",
    name: "text-ink",
    iconActive: "bg-wedding-orange/10 shadow-[0_0_0_1px_rgb(196_92_42/0.15)]",
    iconIdle: "bg-ink/[0.04]",
    iconImage: "",
    mapRingActive: "ring-wedding-orange/35 shadow-soft",
    mapRingIdle: "ring-ink/12 hover:ring-ink/22",
    mapBadgeActive: "bg-wedding-orange/15 text-ink",
    mapBadgeIdle: "bg-ink/10 text-ink/80",
    address: "text-sage-deep",
    directions: "text-ink-soft",
    note: "text-ink-soft/80",
  },
} as const;

interface LocationCardProps {
  label: string;
  iconSrc: string;
  location: WeddingConfig["locations"]["ceremony"];
  isActive: boolean;
  isDimmed: boolean;
  variant: LocationMapsVariant;
  onFocus: () => void;
  onBlur: () => void;
  onSelect: () => void;
}

function LocationCard({
  label,
  iconSrc,
  location,
  isActive,
  isDimmed,
  variant,
  onFocus,
  onBlur,
  onSelect,
}: LocationCardProps) {
  const reduceMotion = useReducedMotion();
  const styles = variantStyles[variant];
  const mapLink = location.mapUrl ?? buildMapLink(location.coordinates);
  const embedUrl = buildMapEmbedUrl(location.coordinates);

  return (
    <motion.div
      className="flex w-full max-w-[13rem] flex-col items-center sm:max-w-none"
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onSelect}
      animate={
        reduceMotion
          ? undefined
          : {
              scale: isActive ? 1.05 : isDimmed ? 0.94 : 1,
              opacity: isActive ? 1 : isDimmed ? 0.5 : 0.82,
            }
      }
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full transition-shadow md:h-12 md:w-12 ${
          isActive ? styles.iconActive : styles.iconIdle
        }`}
      >
        <Image
          src={iconSrc}
          alt=""
          width={36}
          height={36}
          className={`h-7 w-7 object-contain md:h-8 md:w-8 ${styles.iconImage}`}
          draggable={false}
        />
      </div>

      <p className={`${typography.caption} ${styles.label}`}>{label}</p>
      <p className={`${typography.bodySm} mt-1 text-center ${styles.name}`}>{location.name}</p>

      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
        aria-label={`${location.linkLabel ?? "Otwórz mapę"} — ${location.name}`}
        className={`group/map relative mt-4 block overflow-hidden rounded-xl ring-1 transition-all ${
          isActive ? styles.mapRingActive : styles.mapRingIdle
        }`}
      >
        <iframe
          title={`Mapa — ${location.name}`}
          src={embedUrl}
          className="pointer-events-none h-[7.5rem] w-full min-w-[10.5rem] border-0 grayscale-[0.1] contrast-[1.05] sm:w-[10.5rem] md:h-[8.5rem] md:w-[12rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <span className="absolute inset-0 bg-transparent transition-colors group-hover/map:bg-ink/[0.03]" />
        <span
          className={`absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[0.62rem] tracking-[0.12em] uppercase transition-colors ${
            isActive ? styles.mapBadgeActive : styles.mapBadgeIdle
          }`}
        >
          {location.linkLabel ?? "Mapa"}
        </span>
      </a>
    </motion.div>
  );
}

export function LocationMapsBlock({
  locations,
  variant = "dark",
  className = "",
}: LocationMapsBlockProps) {
  const [activeKey, setActiveKey] = useState<LocationKey>("ceremony");
  const [hoverKey, setHoverKey] = useState<LocationKey | null>(null);
  const reduceMotion = useReducedMotion();
  const styles = variantStyles[variant];

  const focusedKey = hoverKey ?? activeKey;
  const focusedLocation = locations[focusedKey];

  return (
    <div className={className}>
      <div className="mx-auto flex max-w-sm flex-col items-stretch gap-8 sm:max-w-none sm:flex-row sm:items-start sm:justify-center sm:gap-10 md:gap-20 lg:gap-28">
        <LocationCard
          label="Ceremonia"
          iconSrc="/assets/icons/church.png"
          location={locations.ceremony}
          isActive={focusedKey === "ceremony"}
          isDimmed={focusedKey === "reception"}
          variant={variant}
          onFocus={() => {
            setHoverKey("ceremony");
            setActiveKey("ceremony");
          }}
          onBlur={() => setHoverKey(null)}
          onSelect={() => {
            setHoverKey("ceremony");
            setActiveKey("ceremony");
          }}
        />
        <LocationCard
          label="Przyjęcie weselne"
          iconSrc="/assets/icons/hall.png"
          location={locations.reception}
          isActive={focusedKey === "reception"}
          isDimmed={focusedKey === "ceremony"}
          variant={variant}
          onFocus={() => {
            setHoverKey("reception");
            setActiveKey("reception");
          }}
          onBlur={() => setHoverKey(null)}
          onSelect={() => {
            setHoverKey("reception");
            setActiveKey("reception");
          }}
        />
      </div>

      <div className="mx-auto mt-8 min-h-[5.5rem] max-w-2xl text-center md:mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={focusedKey}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={`${typography.caption} ${styles.address}`}>{focusedLocation.address}</p>
            <p className={`${typography.bodySm} mt-3 leading-relaxed ${styles.directions}`}>
              {focusedLocation.directions}
            </p>
            {focusedLocation.note ? (
              <p className={`${typography.caption} mt-2 ${styles.note}`}>{focusedLocation.note}</p>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
