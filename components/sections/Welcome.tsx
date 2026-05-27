"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container, PolaroidFrame, SectionShell } from "@/components/ui";
import type { WeddingConfig } from "@/data/weddingData";
import { decorations } from "@/styles/decorations";
import { typography } from "@/styles/typography";

interface WelcomeProps {
  welcome: WeddingConfig["welcome"];
}

function TapePiece({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/assets/decorations/tape1.png"
      alt=""
      width={80}
      height={32}
      className={`pointer-events-none max-w-none object-contain drop-shadow-sm ${className}`}
      draggable={false}
    />
  );
}

function FramedPhoto({
  children,
  tapes = [],
}: {
  children: ReactNode;
  tapes?: string[];
}) {
  return (
    <div className="relative inline-block">
      {children}
      {tapes.map((tapeClassName) => (
        <TapePiece key={tapeClassName} className={`absolute z-30 ${tapeClassName}`} />
      ))}
    </div>
  );
}

export function Welcome({ welcome }: WelcomeProps) {
  const { title, subtitle, body, ctaLabel, ctaHref, photos, romanticIcon } = welcome;

  return (
    <SectionShell
      id="welcome"
      padding="lg"
      surface="transparent"
      overflowVisible
      className="relative z-10 select-none overflow-x-visible !pb-28 !pt-0 -mt-px md:!pb-32 lg:!pb-36"
    >
      {/* Papier bg3 — ciągłość z hero-paper-bottom, postrzępiony dół na ~3/4 wysokości */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-3/4 welcome-paper-top"
        aria-hidden="true"
      />

      {/* Treść */}
      <motion.div
        className="relative z-20 pt-6 md:pt-8 lg:pt-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Container size="wide">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-4 xl:gap-6">
            {/* Tekst — zawsze wyśrodkowany w kolumnie */}
            <motion.div className="composition-content relative z-20 order-3 mx-auto w-full max-w-xl text-center lg:order-1 lg:col-span-5 xl:col-span-5">
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 whitespace-nowrap md:gap-3">
                  <h2 className="font-[family-name:var(--font-script-lg)] text-[clamp(2.75rem,7vw,4.5rem)] leading-none text-ink">
                    {title}
                  </h2>
                  <Image
                    src={romanticIcon}
                    alt=""
                    width={56}
                    height={56}
                    className={decorations.romanticIcon}
                    draggable={false}
                  />
                </div>
              </motion.div>

              <motion.div
                className="mt-5 flex justify-center md:mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <motion.div className="inline-flex items-center gap-2 whitespace-nowrap md:gap-3">
                  <span className="h-px w-8 shrink-0 bg-ink/25 md:w-10" aria-hidden="true" />
                  <span
                    className={`${typography.label} shrink-0 !text-xs !tracking-[0.18em] text-ink md:!text-sm md:!tracking-[0.22em]`}
                  >
                    {subtitle}
                  </span>
                  <span className="h-px w-8 shrink-0 bg-ink/25 md:w-10" aria-hidden="true" />
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-4 flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.5 }}
                aria-hidden="true"
              >
                <span className="h-px w-10 bg-wedding-orange/70 md:w-14" />
                <span className="text-base text-wedding-orange md:text-lg">♥</span>
                <span className="h-px w-10 bg-wedding-orange/70 md:w-14" />
              </motion.div>

              <motion.p
                className={`${typography.body} mx-auto mt-5 max-w-md text-center`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                {body}
              </motion.p>

              <motion.div
                className="relative mx-auto mt-8 flex justify-center md:mt-9"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <a
                  href={ctaHref}
                  className={`group relative inline-flex h-[6.5rem] w-full ${decorations.brushCta} items-center justify-center md:h-[7.5rem] lg:h-[8.25rem]`}
                >
                  <Image
                    src="/assets/decorations/brush-orang.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 28rem, 34rem"
                    className="object-fill object-center drop-shadow-sm"
                    draggable={false}
                  />
                  <span
                    className={`${typography.label} relative z-10 px-4 !text-cream drop-shadow-[0_1px_2px_rgb(0_0_0/0.4)] transition-transform duration-300 group-hover:scale-[1.02]`}
                  >
                    {ctaLabel} →
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Suszek */}
            <motion.div
              className="pointer-events-none order-2 flex items-center justify-center lg:order-2 lg:col-span-1 xl:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              aria-hidden="true"
            >
              <Image
                src="/assets/decorations/suszek2.png"
                alt=""
                width={220}
                height={480}
                className={`${decorations.driedFlowerColumn} opacity-95`}
                draggable={false}
              />
            </motion.div>

            {/* Kolaż — układ jak na referencji */}
            <div className="relative z-20 order-1 mx-auto min-h-[22rem] w-full max-w-[22rem] overflow-visible pb-6 sm:min-h-[26rem] sm:max-w-[26rem] md:min-h-[28rem] md:max-w-[28rem] lg:order-3 lg:col-span-6 lg:col-start-7 lg:mx-0 lg:min-h-[32rem] lg:max-w-none xl:min-h-[34rem]">
              <Image
                src={romanticIcon}
                alt=""
                width={44}
                height={44}
                className={`absolute right-[2%] top-[0%] z-20 ${decorations.romanticIcon} opacity-90 lg:right-[4%]`}
                draggable={false}
              />

              {/* Główne zdjęcie — największe, lewa strona */}
              <motion.div
                className="absolute left-0 top-[12%] z-10 sm:top-[10%]"
                initial={{ opacity: 0, rotate: -8, y: 20 }}
                whileInView={{ opacity: 1, rotate: 4, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <FramedPhoto
                  tapes={[
                    "-left-4 -top-5 w-[4.25rem] -rotate-[12deg]",
                    "-right-4 -top-5 w-[4.25rem] rotate-[10deg]",
                  ]}
                >
                  <PolaroidFrame
                    src={photos.main.src}
                    alt={photos.main.alt}
                    variant="instax"
                    size="lg"
                    tilt="none"
                    sizes="(max-width: 768px) 52vw, 336px"
                  />
                </FramedPhoto>
              </motion.div>

              {/* Góra prawo — średnie, nachodzi na główne */}
              <motion.div
                className="absolute right-0 top-0 z-[5] sm:right-[2%]"
                initial={{ opacity: 0, rotate: 14, y: 16 }}
                whileInView={{ opacity: 1, rotate: 10, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <FramedPhoto tapes={["-left-3 -top-5 w-[3.75rem] -rotate-[8deg]"]}>
                  <PolaroidFrame
                    src={photos.top.src}
                    alt={photos.top.alt}
                    variant="instax"
                    size="md"
                    tilt="none"
                    sizes="(max-width: 768px) 36vw, 184px"
                  />
                </FramedPhoto>
              </motion.div>

              {/* Dół prawo — najmniejsze, nachodzi na górne */}
              <motion.div
                className="absolute bottom-[6%] right-[4%] z-[15] sm:bottom-[8%] sm:right-[6%]"
                initial={{ opacity: 0, rotate: 12, y: 20 }}
                whileInView={{ opacity: 1, rotate: 7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <FramedPhoto tapes={["-right-3 -top-4 w-[3.25rem] rotate-[12deg]"]}>
                  <PolaroidFrame
                    src={photos.bottom.src}
                    alt={photos.bottom.alt}
                    variant="instax"
                    size="sm"
                    tilt="none"
                    sizes="(max-width: 768px) 30vw, 160px"
                  />
                </FramedPhoto>
              </motion.div>
            </div>
          </div>
        </Container>
      </motion.div>
    </SectionShell>
  );
}
