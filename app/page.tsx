import {
  Footer,
  Gallery,
  Hero,
  InfoCards,
  LocationStrip,
  QuickSections,
  SectionBgWrap,
  Timeline,
  Welcome,
} from "@/components/sections";
import { weddingData } from "@/data/weddingData";

export default function HomePage() {
  const heroImage = weddingData.images.hero;

  return (
    <main className="w-full max-w-none">
      <Hero
        data={{
          couple: weddingData.couple,
          date: weddingData.date,
          features: weddingData.features,
        }}
        heroImage={heroImage}
      />
      <SectionBgWrap bgSrc={weddingData.images.sectionBg}>
        <Welcome welcome={weddingData.welcome} />
        <QuickSections sections={weddingData.quickSections} />
      </SectionBgWrap>
      <LocationStrip locations={weddingData.locations} />
      <Timeline events={weddingData.timeline} title="Harmonogram" />
      <InfoCards cards={weddingData.infoCards} />
      {weddingData.features.showGallery && (
        <Gallery images={weddingData.gallery} />
      )}
      <Footer
        footer={weddingData.footer}
        romanticIcon={weddingData.welcome.romanticIcon}
      />
    </main>
  );
}
