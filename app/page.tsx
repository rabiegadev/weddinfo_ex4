import {
  Footer,
  Gallery,
  Hero,
  InfoCards,
  LocationStrip,
  Timeline,
  Welcome,
} from "@/components/sections";
import { weddingData } from "@/data/weddingData";

export default function HomePage() {
  const heroImage = weddingData.images.hero;
  const tornFillImage = weddingData.images.tornFill;

  return (
    <main>
      <Hero
        data={{
          couple: weddingData.couple,
          date: weddingData.date,
          features: weddingData.features,
        }}
        heroImage={heroImage}
        tornFillImage={tornFillImage}
      />
      <Welcome
        welcome={weddingData.welcome}
        welcomeBg={weddingData.images.welcomeBg}
        tornFillImage={tornFillImage}
      />
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
