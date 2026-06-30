"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, SectionShell } from "@/components/ui";
import type { GuestIntro } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface QuickSectionsProps {
  intro: GuestIntro;
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function QuickSections({ intro }: QuickSectionsProps) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  return (
    <SectionShell
      id="quick-sections"
      padding="md"
      surface="transparent"
      disableEnterAnimation
      className="relative"
    >
      <Container size="narrow" className="relative z-10">
        <motion.div
          key={`${pathname}-guest-intro`}
          className="mx-auto max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={reduceMotion ? undefined : contentVariants}
        >
          <motion.div
            variants={reduceMotion ? undefined : cardVariants}
            className="rounded-3xl border border-cream/12 bg-cream/[0.06] px-6 py-8 shadow-[inset_0_1px_0_rgb(255_253_250/0.1),0_24px_48px_rgb(0_0_0/0.18)] backdrop-blur-sm sm:px-8 md:px-12 md:py-14"
          >
            <motion.p
              variants={reduceMotion ? undefined : lineVariants}
              className={`${typography.label} text-center !text-gold-soft/85`}
            >
              {intro.label}
            </motion.p>

            <motion.h2
              variants={reduceMotion ? undefined : lineVariants}
              className={`${typography.heading} mt-4 text-center text-cream md:mt-5`}
            >
              {intro.title}
            </motion.h2>

            <motion.p
              variants={reduceMotion ? undefined : lineVariants}
              className={`${typography.body} mx-auto mt-6 max-w-xl text-center !leading-relaxed !text-cream/88 md:mt-7`}
            >
              {intro.body}
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : lineVariants}
              className="mt-8 flex justify-center md:mt-10"
            >
              <Link
                href={intro.ctaHref}
                className={`${typography.caption} group inline-flex items-center gap-2 border-b border-gold-soft/35 pb-1 !text-gold-soft transition-colors hover:border-cream hover:!text-cream`}
              >
                {intro.ctaLabel}
                <span aria-hidden="true" className="inline-block text-sm transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </SectionShell>
  );
}
