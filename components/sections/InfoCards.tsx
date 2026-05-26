"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TapeStrip } from "@/components/decorations";
import { Container, InfoIcon, SectionShell } from "@/components/ui";
import type { InfoCard } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface InfoCardsProps {
  cards: InfoCard[];
  title?: string;
}

export function InfoCards({ cards, title = "Informacje" }: InfoCardsProps) {
  return (
    <SectionShell id="info" padding="md" surface="parchment">
      <Container size="wide">
        <div className="text-center">
          <p className={typography.label}>Dla gości</p>
          <h2 className={`${typography.heading} mt-3`}>{title}</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {cards.map((card, index) => (
            <motion.article
              key={card.id}
              className="group relative bg-cream/90 p-6 shadow-soft transition-shadow duration-300 hover:shadow-lifted md:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              {index === 0 && (
                <div className="absolute -top-3 right-6" aria-hidden="true">
                  <TapeStrip rotate={6} width="sm" />
                </div>
              )}

              <InfoIcon icon={card.icon} className="mb-4" />

              <h3 className={typography.headingSm}>{card.title}</h3>
              {card.subtitle && (
                <p className={`${typography.script} mt-1 text-rose-deep`}>
                  {card.subtitle}
                </p>
              )}
              <p className={`${typography.bodySm} mt-4`}>{card.description}</p>

              {card.link && card.linkLabel && (
                <Link
                  href={card.link}
                  className={`${typography.caption} mt-5 inline-block border-b border-sage/40 pb-0.5 text-sage-deep transition-colors hover:border-rose hover:text-rose-deep`}
                >
                  {card.linkLabel}
                </Link>
              )}
            </motion.article>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
