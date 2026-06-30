"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { WeddingConfig } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface QuoteSectionProps {
  quote: WeddingConfig["quote"];
  romanticIcon: string;
}

export function QuoteSection({ quote, romanticIcon }: QuoteSectionProps) {
  return (
    <section id="quote" className="relative py-12 md:py-14">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <motion.blockquote
          className={`${typography.subheading} !text-cream !text-lg md:!text-xl lg:!text-2xl`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          &ldquo;{quote.text}&rdquo;
        </motion.blockquote>
        <motion.p
          className={`${typography.caption} mt-4 !text-cream/85`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          — {quote.author}
        </motion.p>
        <Image
          src={romanticIcon}
          alt=""
          width={34}
          height={34}
          className="mx-auto mt-4 h-7 w-7 object-contain opacity-90"
          draggable={false}
        />
      </div>
    </section>
  );
}
