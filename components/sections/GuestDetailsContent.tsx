"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, SectionShell } from "@/components/ui";
import { LocationMapsBlock } from "@/components/sections/LocationMapsBlock";
import type {
  GuestDetailsPage,
  ReturnTransport,
  WeddingConfig,
} from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface GuestDetailsContentProps {
  content: GuestDetailsPage;
  locations: WeddingConfig["locations"];
  returnTransport: ReturnTransport;
}

function BusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={`h-11 w-14 text-wedding-orange md:h-12 md:w-16 ${className}`}
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

export function GuestDetailsContent({
  content,
  locations,
  returnTransport,
}: GuestDetailsContentProps) {
  return (
    <>
      <SectionShell padding="lg" surface="parchment" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-8 top-12 h-40 w-40 rounded-full bg-wedding-orange/[0.06] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-6 bottom-20 h-32 w-32 rounded-full bg-sage/10 blur-3xl"
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={typography.label}>Szczegóły</p>
            <h1 className={`${typography.heading} mt-3`}>{content.title}</h1>
            <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
              <span className="h-px w-12 bg-wedding-orange/50 md:w-16" />
              <span className="text-sm text-wedding-orange">♥</span>
              <span className="h-px w-12 bg-wedding-orange/50 md:w-16" />
            </div>
            <p className={`${typography.body} mx-auto mt-5 max-w-2xl`}>{content.intro}</p>
          </motion.div>

          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 md:mt-14 md:gap-5">
            {content.topics.map((topic, index) => (
              <motion.li
                key={topic.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.06, duration: 0.45 }}
              >
                <article className="h-full rounded-2xl bg-cream/95 p-5 shadow-soft ring-1 ring-ink/[0.07] md:p-6">
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-wedding-orange"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className={typography.headingSm}>{topic.title}</h2>
                      <p className={`${typography.bodySm} mt-2 leading-relaxed text-ink-soft`}>
                        {topic.text}
                      </p>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </Container>
      </SectionShell>

      <SectionShell padding="md" surface="transparent" className="section-block-light-sage">
        <Container size="wide">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
          >
            <p className={typography.label}>Logistyka</p>
            <h2 className={`${typography.heading} mt-3`}>{content.dojazd.title}</h2>
            <p className={`${typography.bodySm} mx-auto mt-3 max-w-xl`}>{content.dojazd.intro}</p>
          </motion.div>

          <motion.div
            className="mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <LocationMapsBlock locations={locations} variant="light" />
          </motion.div>

          <motion.ul
            className="mx-auto mt-10 max-w-2xl space-y-3 rounded-2xl bg-cream/70 p-6 ring-1 ring-ink/[0.06] md:mt-12 md:p-7"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.dojazd.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-[family-name:var(--font-script)] text-lg text-wedding-orange">
                  —
                </span>
                <p className={`${typography.bodySm} leading-relaxed text-ink-soft`}>{bullet}</p>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-ink/10 bg-cream/80 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-7 md:mt-10"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex shrink-0 flex-col items-center sm:items-start">
              <BusIcon />
              <p className={`${typography.caption} mt-2 text-sage-deep`}>Kierowca</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className={typography.headingSm}>{returnTransport.title}</h3>
              <p className={`${typography.bodySm} mt-2 leading-relaxed text-ink-soft`}>
                {returnTransport.description}
              </p>
            </div>
          </motion.div>

          <div className="mt-10 text-center md:mt-12">
            <Link
              href="/"
              className={`${typography.caption} inline-block border-b border-sage/40 pb-0.5 text-sage-deep transition-colors hover:border-rose hover:text-rose-deep`}
            >
              ← Wróć na stronę główną
            </Link>
          </div>
        </Container>
      </SectionShell>
    </>
  );
}
