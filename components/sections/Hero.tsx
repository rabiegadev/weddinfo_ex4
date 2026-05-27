"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container, Countdown } from "@/components/ui";
import { HeroLocations } from "./HeroLocations";
import type { WeddingConfig } from "@/data/weddingData";
import { layers } from "@/styles/layers";
import { typography } from "@/styles/typography";

interface HeroProps {
  data: Pick<WeddingConfig, "couple" | "date" | "features" | "locations">;
  heroImage: string;
}

export function Hero({ data, heroImage }: HeroProps) {
  const { couple, date, features, locations } = data;

  return (
    <header className="relative z-30 w-full">
      <div className="relative h-[calc(100svh-11rem)] min-h-[32rem] max-h-[920px] w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <motion.div
            className={`absolute inset-0 ${layers.base}`}
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          <motion.div
            className={`absolute inset-0 ${layers.texture} bg-black/25`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          />
        </div>

        <motion.div
          className="absolute inset-0 z-50 flex flex-col items-end justify-center px-4 pb-8 pt-16 md:px-10 md:pb-10 md:pt-20 lg:pr-[8%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Container size="wide" className="composition-content flex w-full max-w-3xl flex-col items-end pr-2 md:pr-6 lg:pr-10">
            <motion.h1
              className="w-full max-w-xl text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block font-[family-name:var(--font-script-lg)] text-[clamp(3rem,10vw,5.75rem)] leading-[0.88] tracking-[0.035em] text-cream drop-shadow-[0_2px_14px_rgb(0_0_0/0.38)]">
                {couple.partnerOne}
              </span>
              <span className="my-0.5 block pr-4 font-[family-name:var(--font-script)] text-[clamp(1.65rem,4.5vw,2.5rem)] leading-none tracking-[0.05em] text-cream drop-shadow-[0_2px_8px_rgb(0_0_0/0.3)]">
                &
              </span>
              <span className="block font-[family-name:var(--font-script-lg)] text-[clamp(3rem,10vw,5.75rem)] leading-[0.88] tracking-[0.035em] text-cream drop-shadow-[0_2px_14px_rgb(0_0_0/0.38)]">
                {couple.partnerTwo}
              </span>
            </motion.h1>

            <motion.p
              className={`${typography.label} mt-5 text-sm !text-cream/95 uppercase tracking-[0.24em] md:mt-6 md:text-base`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              {date.display}
            </motion.p>

            {features.showCountdown ? (
              <motion.div
                className="mt-7 md:mt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
              >
                <Countdown targetDate={date.iso} label="" variant="hero" />
              </motion.div>
            ) : null}
          </Container>
        </motion.div>
      </div>

      <div className="-mt-10 md:-mt-12">
        <HeroLocations locations={locations} bgSrc="/assets/images/bg4.png" />
      </div>
    </header>
  );
}
