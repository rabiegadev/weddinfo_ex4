"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui";
import type { WeddingConfig } from "@/data/weddingData";

interface FooterProps {
  footer: WeddingConfig["footer"];
  romanticIcon: string;
}

export function Footer({ footer, romanticIcon }: FooterProps) {
  return (
    <footer id="contact" className="relative bg-cream py-8 md:py-10">
      <Container size="narrow">
        <motion.div
          className="flex items-center justify-center gap-2 text-wedding-orange md:gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-[family-name:var(--font-script-lg)] text-3xl md:text-4xl">
            {footer.message}
          </p>
          <Image
            src={romanticIcon}
            alt=""
            width={36}
            height={36}
            className="h-7 w-7 object-contain md:h-8 md:w-8"
            draggable={false}
          />
        </motion.div>
      </Container>
    </footer>
  );
}
