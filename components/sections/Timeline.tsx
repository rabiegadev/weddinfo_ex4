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
    <SectionShell id="timeline" padding="md" surface="cream">
      <Container size="narrow">
        <div className="text-center">
          <p className={typography.label}>Program</p>
          <h2 className={`${typography.heading} mt-3`}>{title}</h2>
        </div>

        <div className="relative mt-14 md:mt-16">
          {/* Central line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-sage/40 to-gold/20 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-14">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.li
                  key={`${event.time}-${event.title}`}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold bg-cream shadow-soft md:left-1/2"
                    aria-hidden="true"
                  />

                  <div className={`ml-10 w-full md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className={`${typography.script} text-2xl text-rose-deep md:text-3xl`}>
                      {event.time}
                    </span>
                    <h3 className={`${typography.headingSm} mt-1`}>{event.title}</h3>
                    <p className={`${typography.bodySm} mt-2`}>{event.description}</p>
                    {event.location && (
                      <p className={`${typography.caption} mt-2`}>{event.location}</p>
                    )}
                  </div>

                  <div className="hidden flex-1 md:block" aria-hidden="true" />
                </motion.li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12 flex justify-center opacity-40">
          <FilmStrip />
        </div>
      </Container>
    </SectionShell>
  );
}
