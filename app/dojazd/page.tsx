import { SectionBackdrop } from "@/components/decorations";
import { DojazdSection } from "@/components/sections";
import { weddingData } from "@/data/weddingData";

export default function DojazdPage() {
  const { locations, returnTransport, detailPages } = weddingData;

  return (
    <main className="w-full max-w-none">
      <SectionBackdrop variant="dark-olive" accent="route">
        <DojazdSection
          locations={locations}
          returnTransport={returnTransport}
          title={detailPages.dojazd.title}
          intro={detailPages.dojazd.intro}
        />
      </SectionBackdrop>
    </main>
  );
}
