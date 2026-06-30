import { SectionBackdrop } from "@/components/decorations";
import {
  DojazdSection,
  Footer,
  Hero,
  QuickSections,
  Timeline,
  Welcome,
} from "@/components/sections";
import { weddingData } from "@/data/weddingData";

export default function HomePage() {
  const {
    images,
    couple,
    date,
    features,
    welcome,
    guestIntro,
    timeline,
    locations,
    returnTransport,
    detailPages,
    quote,
    footer,
  } = weddingData;

  return (
    <main className="w-full max-w-none">
      <Hero
        data={{ couple, date, features }}
        heroImage={images.hero}
        quote={quote}
        romanticIcon={welcome.romanticIcon}
      />

      <SectionBackdrop id="welcome-wrap" variant="light" accent="welcome">
        <Welcome welcome={welcome} />
      </SectionBackdrop>

      <SectionBackdrop id="quick-wrap" variant="dark" accent="cards">
        <QuickSections intro={guestIntro} />
      </SectionBackdrop>

      <SectionBackdrop id="timeline-wrap" variant="light-sage" accent="timeline">
        <Timeline events={timeline} title="Harmonogram" />
      </SectionBackdrop>

      <SectionBackdrop id="dojazd-wrap" variant="dark-olive" accent="route">
        <DojazdSection
          locations={locations}
          returnTransport={returnTransport}
          title={detailPages.dojazd.title}
          intro={detailPages.dojazd.intro}
        />
      </SectionBackdrop>

      <Footer footer={footer} couple={couple} date={date} />
    </main>
  );
}
