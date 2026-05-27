import Link from "next/link";
import { Container, SectionShell } from "@/components/ui";
import type { DetailPageContent as DetailPageContentType } from "@/data/weddingData";
import { typography } from "@/styles/typography";

interface DetailPageContentProps {
  content: DetailPageContentType;
}

export function DetailPageContent({ content }: DetailPageContentProps) {
  return (
    <SectionShell padding="lg" surface="parchment">
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className={typography.label}>Szczegóły</p>
          <h1 className={`${typography.heading} mt-3`}>{content.title}</h1>
          <p className={`${typography.body} mt-4`}>{content.intro}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:mt-12">
          {content.entries.map((entry) => (
            <article key={entry.title} className="bg-cream/90 p-6 shadow-soft md:p-7">
              <h2 className={typography.headingSm}>{entry.title}</h2>
              <p className={`${typography.bodySm} mt-3`}>{entry.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className={`${typography.caption} inline-block border-b border-sage/40 pb-0.5 text-sage-deep transition-colors hover:border-rose hover:text-rose-deep`}
          >
            Wróć na stronę główną
          </Link>
        </div>
      </Container>
    </SectionShell>
  );
}
