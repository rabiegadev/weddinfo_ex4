"use client";



import { motion } from "framer-motion";

import Image from "next/image";

import { usePathname } from "next/navigation";

import { Container, Countdown } from "@/components/ui";

import type { WeddingConfig } from "@/data/weddingData";

import { layers } from "@/styles/layers";

import { typography } from "@/styles/typography";



interface HeroProps {

  data: Pick<WeddingConfig, "couple" | "date" | "features">;

  heroImage: string;

  quote: WeddingConfig["quote"];

  romanticIcon: string;

}



export function Hero({ data, heroImage, quote, romanticIcon }: HeroProps) {

  const { couple, date, features } = data;

  const pathname = usePathname();



  return (

    <header key={`${pathname}-hero`} className="relative z-30 w-full">

      <div className="relative min-h-svh h-svh w-full overflow-hidden">

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

              className="object-cover object-left md:object-center"

              sizes="100vw"

            />

          </motion.div>



          <motion.div

            className={`absolute inset-0 ${layers.texture} bg-black/25`}

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ duration: 1, delay: 0.15 }}

          />



          <div

            className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/55 via-black/20 to-transparent"

            aria-hidden="true"

          />

        </div>



        <div className="absolute inset-0 z-50 flex flex-col justify-between px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(3.5rem,env(safe-area-inset-top))] md:px-10 md:pb-10 md:pt-20 lg:pr-[8%]">

          <div aria-hidden="true" className="hidden min-h-0 md:block" />



          <motion.div

            className="flex flex-1 flex-col items-center justify-center md:items-end"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ duration: 0.8, delay: 0.2 }}

          >

            <Container

              size="wide"

              className="composition-content flex w-full max-w-3xl flex-col items-center pr-0 md:items-end md:pr-6 lg:pr-10"

            >

              <motion.h1

                className="w-full max-w-xl text-center md:text-right"

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}

              >

                <span className="block font-[family-name:var(--font-script-lg)] text-[clamp(2.5rem,11vw,5.75rem)] leading-[0.88] tracking-[0.035em] text-cream drop-shadow-[0_2px_14px_rgb(0_0_0/0.38)]">

                  {couple.partnerOne}

                </span>

                <span className="my-0.5 block font-[family-name:var(--font-script)] text-[clamp(1.5rem,4.5vw,2.5rem)] leading-none tracking-[0.05em] text-cream drop-shadow-[0_2px_8px_rgb(0_0_0/0.3)] md:pr-4">

                  &

                </span>

                <span className="block font-[family-name:var(--font-script-lg)] text-[clamp(2.5rem,11vw,5.75rem)] leading-[0.88] tracking-[0.035em] text-cream drop-shadow-[0_2px_14px_rgb(0_0_0/0.38)]">

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



          <motion.div

            className="mx-auto w-full max-w-xl shrink-0 pt-3 text-center md:mx-0 md:max-w-md md:pt-4 md:text-left lg:max-w-lg"

            initial={{ opacity: 0, y: 16 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 0.9 }}

          >

            <blockquote

              className={`${typography.subheading} !text-sm !leading-relaxed !text-cream/95 sm:!text-base md:!text-lg lg:!text-xl`}

            >

              &ldquo;{quote.text}&rdquo;

            </blockquote>

            <div className="mt-2 flex items-center justify-center gap-3 md:mt-3 md:justify-start">

              <p className={`${typography.caption} !text-cream/75`}>— {quote.author}</p>

              <Image

                src={romanticIcon}

                alt=""

                width={28}

                height={28}

                className="h-6 w-6 object-contain opacity-85"

                draggable={false}

              />

            </div>

          </motion.div>

        </div>

      </div>

    </header>

  );

}


