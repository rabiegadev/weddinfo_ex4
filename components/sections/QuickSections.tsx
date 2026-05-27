"use client";

import { motion } from "framer-motion";
import Link from "next/link";import { Container, SectionShell } from "@/components/ui";
import type { HomeShortcutSection } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface QuickSectionsProps {
  sections: HomeShortcutSection[];
}

export function QuickSections({ sections }: QuickSectionsProps) {
  return (
    <SectionShell
      id="quick-sections"
      padding="md"
      surface="transparent"
      disableEnterAnimation
      className="relative"
    >
      <Container size="wide" className="relative z-10">
        <div className="text-center">
          <p className={typography.label}>Praktyczne informacje</p>
          <h2 className={`${typography.heading} mt-3`}>Dla Was w skrócie</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sections.map((section, index) => (
            <motion.article
              key={section.id}
              className="flex h-full flex-col bg-cream/90 p-6 shadow-soft md:p-7"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <h3 className={typography.headingSm}>{section.title}</h3>
              <p className={`${typography.bodySm} mt-3 flex-1`}>{section.summary}</p>
              <Link
                href={section.href}
                className={`${typography.caption} mt-6 inline-block border-b border-sage/40 pb-0.5 text-sage-deep transition-colors hover:border-rose hover:text-rose-deep`}
              >
                {section.ctaLabel}
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
