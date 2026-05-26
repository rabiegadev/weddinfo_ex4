"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrushStrokeImage, FilmStripSvg, TornSvgOverlay } from "@/components/decorations";
import { Container, Countdown, HeroNav } from "@/components/ui";
import type { WeddingConfig } from "@/data/weddingData";
import { layers } from "@/styles/layers";
import { typography } from "@/styles/typography";

interface HeroProps {
  data: Pick<WeddingConfig, "couple" | "date" | "features">;
  heroImage: string;
  tornFillImage: string;
}

export function Hero({ data, heroImage, tornFillImage }: HeroProps) {
  const { couple, date, features } = data;

  return (
    <header className="relative z-30 h-[100svh] max-h-[100svh] w-full overflow-hidden">
      <motion.div
        className={`absolute inset-0 ${layers.base}`}
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={heroImage}
          alt={`${couple.displayNames} — zaproszenie ślubne`}
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
        aria-hidden="true"
      />

      {/* Prawa strona — klisza SVG pod suszkiem */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-4 z-[42] w-[min(52vw,24rem)] md:right-8 lg:right-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        aria-hidden="true"
      >
        <motion.div className="absolute -right-2 top-[10%] md:-right-3 md:top-[8%] lg:-right-4">
          <FilmStripSvg className="rotate-[10deg]" />
        </motion.div>

        <motion.div
          className="absolute right-6 bottom-10 z-10 md:right-10 md:bottom-16 lg:right-12 lg:bottom-20"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/assets/decorations/suszek.png"
            alt=""
            width={240}
            height={360}
            className="h-auto w-[min(38vw,12.5rem)] max-w-none -translate-x-12 -rotate-12 object-contain drop-shadow-md md:w-[min(30vw,14.5rem)] md:-translate-x-16 lg:w-[16rem] lg:-translate-x-[4.5rem]"
            draggable={false}
          />
        </motion.div>
      </motion.div>

      <TornSvgOverlay position="top" fillImage={tornFillImage} fullBleed={false} />
      <TornSvgOverlay position="bottom" fillImage={tornFillImage} fullBleed={false} />

      <HeroNav className={layers.tornPaper} />

      <motion.p
        className={`pointer-events-none absolute left-6 top-6 md:left-10 md:top-8 ${layers.tornPaper} font-[family-name:var(--font-script)] text-[clamp(2rem,5vw,2.75rem)] leading-none tracking-[0.08em] text-ink`}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        aria-hidden="true"
      >
        K&nbsp;&amp;&nbsp;M
      </motion.p>

      <motion.div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-4 pb-20 pt-32 md:pb-24 md:pt-36">
        <Container size="wide" className="composition-content flex flex-col items-center">
          <motion.h1
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block pl-[6%] text-left font-[family-name:var(--font-script-lg)] text-[clamp(3.25rem,11vw,6.25rem)] leading-[0.88] tracking-[0.035em] text-cream drop-shadow-[0_2px_14px_rgb(0_0_0/0.38)] md:pl-[10%]">
              {couple.partnerOne}
            </span>
            <span className="my-0.5 block text-center font-[family-name:var(--font-script)] text-[clamp(1.75rem,5vw,2.75rem)] leading-none tracking-[0.05em] text-cream drop-shadow-[0_2px_8px_rgb(0_0_0/0.3)]">
              &
            </span>
            <span className="block pr-[6%] text-right font-[family-name:var(--font-script-lg)] text-[clamp(3.25rem,11vw,6.25rem)] leading-[0.88] tracking-[0.035em] text-cream drop-shadow-[0_2px_14px_rgb(0_0_0/0.38)] md:pr-[10%]">
              {couple.partnerTwo}
            </span>
          </motion.h1>

          <motion.div
            className="relative mt-5 flex flex-col items-center md:mt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <motion.div className="relative flex min-h-[6.5rem] items-center justify-center px-16 py-5 md:min-h-[8rem] md:px-24 md:py-6">
              <BrushStrokeImage className="absolute left-1/2 top-[calc(50%+5px)] h-[9.75rem] w-[min(100vw,58rem)] -translate-x-1/2 -translate-y-1/2 object-contain md:top-[calc(50%+6px)] md:h-[12rem] md:w-[64rem]" />
              <p
                className={`${typography.label} relative z-10 text-sm !text-ink uppercase tracking-[0.22em] md:text-base md:font-semibold`}
              >
                {date.display}
              </p>
            </motion.div>
          </motion.div>

          {features.showCountdown && (
            <motion.div
              className="mt-8 md:mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <Countdown targetDate={date.iso} label="" />
            </motion.div>
          )}
        </Container>
      </motion.div>
    </header>
  );
}
