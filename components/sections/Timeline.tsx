"use client";

import { motion } from "framer-motion";
import { FilmStrip } from "@/components/decorations";
import { Container, SectionShell } from "@/components/ui";
import type { TimelineEvent } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface TimelineProps {
  events: TimelineEvent[];
  title?: string;
}

export function Timeline({ events, title = "Harmonogram dnia" }: TimelineProps) {
  return (
    <SectionShell id="timeline" padding="md" surface="transparent" disableEnterAnimation>
      <Container size="wide">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={typography.label}>Program</p>
          <h2 className={`${typography.heading} mt-3`}>{title}</h2>
        </motion.div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 md:mt-12 md:gap-x-12 lg:gap-x-16">
          {events.map((event, index) => (
            <motion.li
              key={`${event.time}-${event.title}`}
              className="relative flex gap-4 border-l-2 border-gold/25 pl-4 md:gap-5 md:pl-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <span
                className={`${typography.script} shrink-0 text-xl text-rose-deep md:w-[4.5rem] md:text-2xl`}
              >
                {event.time}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className={`${typography.headingSm} leading-snug`}>{event.title}</h3>
                <p className={`${typography.bodySm} mt-1 leading-relaxed`}>{event.description}</p>
                {event.location ? (
                  <p className={`${typography.caption} mt-1.5`}>{event.location}</p>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center opacity-40 md:mt-12">
          <FilmStrip />
        </div>
      </Container>
    </SectionShell>
  );
}
