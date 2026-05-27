import {

  DojazdSection,

  Footer,

  Hero,

  QuickSections,

  QuoteSection,

  Timeline,

  TornPageSection,

  Welcome,

} from "@/components/sections";

import { weddingData } from "@/data/weddingData";



export default function HomePage() {

  const { images, couple, date, features, locations, welcome, quickSections, timeline, detailPages, quote, footer } =

    weddingData;



  return (

    <main className="w-full max-w-none">

      <Hero

        data={{ couple, date, features, locations }}

        heroImage={images.hero}

      />



      <TornPageSection id="welcome-wrap" bgSrc={images.bgPrimary} tornVariant="a" className="-mt-px">

        <Welcome welcome={welcome} />

      </TornPageSection>



      <TornPageSection id="quick-wrap" bgSrc={images.bgAlt} tornVariant="b">

        <QuickSections sections={quickSections} />

      </TornPageSection>



      <TornPageSection id="timeline-wrap" bgSrc={images.bgPrimary} tornVariant="c">

        <Timeline events={timeline} title="Harmonogram" />

      </TornPageSection>



      <TornPageSection id="dojazd-wrap" bgSrc={images.bgAlt} tornVariant="b">

        <DojazdSection content={detailPages.dojazd} />

      </TornPageSection>



      <QuoteSection quote={quote} romanticIcon={welcome.romanticIcon} />



      <Footer
        footer={footer}
        couple={couple}
        date={date}
        bgSrc={images.bgPrimary}
      />

    </main>

  );

}

