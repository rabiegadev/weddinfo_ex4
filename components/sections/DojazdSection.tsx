"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, SectionShell } from "@/components/ui";
import type { WeddingConfig } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface DojazdSectionProps {
  content: WeddingConfig["detailPages"]["dojazd"];
}

export function DojazdSection({ content }: DojazdSectionProps) {
  return (
    <SectionShell
      id="dojazd"
      padding="md"
      surface="transparent"
      disableEnterAnimation
      className="relative"
    >
      <Container size="wide" className="relative z-10">
        <div className="text-center">
          <p className={typography.label}>Jak do nas dotrzeć</p>
          <h2 className={`${typography.heading} mt-3`}>{content.title}</h2>
          <p className={`${typography.body} mx-auto mt-4 max-w-2xl`}>{content.intro}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.entries.map((entry, index) => (
            <motion.article
              key={entry.title}
              className="bg-cream/88 p-6 shadow-soft md:p-7"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <h3 className={typography.headingSm}>{entry.title}</h3>
              <p className={`${typography.bodySm} mt-3`}>{entry.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/dojazd"
            className={`${typography.caption} inline-block border-b border-sage/40 pb-0.5 text-sage-deep transition-colors hover:border-rose hover:text-rose-deep`}
          >
            Pełne informacje o dojeździe →
          </Link>
        </div>
      </Container>
    </SectionShell>
  );
}
