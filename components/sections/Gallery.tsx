"use client";

import { motion } from "framer-motion";
import { FlowerOverlay } from "@/components/decorations";
import { Container, PolaroidFrame, SectionShell } from "@/components/ui";
import type { GalleryImage } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
}

export function Gallery({ images, title = "Galeria wspomnień" }: GalleryProps) {
  const tilts: Array<"left" | "right" | "none"> = ["left", "right", "none", "right", "left", "none"];

  return (
    <SectionShell id="gallery" padding="lg" surface="cream">
      <Container size="wide">
        <div className="relative text-center">
          <FlowerOverlay
            variant="bouquet"
            className="absolute -top-4 right-0 opacity-30 md:right-8"
          />
          <p className={typography.label}>Album</p>
          <h2 className={`${typography.heading} mt-3`}>{title}</h2>
        </div>

        <div className="mt-12 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3 lg:mt-16">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              className="break-inside-avoid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
            >
              <PolaroidFrame
                src={image.src}
                alt={image.alt}
                caption={image.caption}
                tilt={tilts[index % tilts.length]}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
