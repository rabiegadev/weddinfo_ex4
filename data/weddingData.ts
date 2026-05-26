export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  location?: string;
}

export interface InfoCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: "rings" | "map" | "gift" | "dress" | "music" | "camera";
  link?: string;
  linkLabel?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface WeddingLocation {
  name: string;
  address: string;
  mapUrl?: string;
  note?: string;
  linkLabel?: string;
}

export interface WeddingConfig {
  couple: {
    partnerOne: string;
    partnerTwo: string;
    displayNames: string;
    monogram: string;
  };
  date: {
    iso: string;
    display: string;
    displayShort: string;
    time: string;
  };
  tagline: string;
  welcome: {
    title: string;
    subtitle: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    photos: {
      main: GalleryImage;
      top: GalleryImage;
      bottom: GalleryImage;
    };
    romanticIcon: string;
  };
  locations: {
    ceremony: WeddingLocation;
    reception: WeddingLocation;
  };
  timeline: TimelineEvent[];
  infoCards: InfoCard[];
  gallery: GalleryImage[];
  footer: {
    message: string;
    rsvpEmail?: string;
    hashtag?: string;
  };
  meta: {
    title: string;
    description: string;
  };
  features: {
    showGallery: boolean;
    showCountdown: boolean;
  };
  images: {
    hero: string;
    tornFill: string;
    welcomeBg: string;
  };
}

const ceremonyLocationName = "Kaplica św. Józefa";

export const weddingData: WeddingConfig = {
  couple: {
    partnerOne: "Karolina",
    partnerTwo: "Michał",
    displayNames: "Karolina & Michał",
    monogram: "K · M",
  },
  date: {
    iso: "2026-09-12T15:00:00",
    display: "12 września 2026",
    displayShort: "12.09.2026",
    time: "15:00",
  },
  tagline: "Zapraszamy na święto miłości w stylu kinowego scrapbooku",
  welcome: {
    title: "Witamy Was",
    subtitle: "NA NASZYM WESELU",
    body:
      "Cieszymy się, że jesteście dziś z nami. Wasza obecność sprawia, że ten dzień staje się jeszcze bardziej wyjątkowy. Dziękujemy, że możemy wspólnie celebrować miłość, radość i piękne wspomnienia.",
    ctaLabel: "POZNAJ SZCZEGÓŁY",
    ctaHref: "#timeline",
    photos: {
      main: {
        src: "/assets/images/zarecz.png",
        alt: "Karolina i Michał — zaręczyny",
      },
      top: {
        src: "/assets/images/c2.png",
        alt: "Wspólny moment",
      },
      bottom: {
        src: "/assets/images/c1.png",
        alt: "Wspólne wspomnienie",
      },
    },
    romanticIcon: "/assets/icons/romantic.png",
  },
  locations: {
    ceremony: {
      name: "Kościół św. Anny",
      address: "Kraków",
      mapUrl: "https://maps.google.com",
      note: "Ceremonia o godz. 15:00",
      linkLabel: "ZOBACZ DOJAZD",
    },
    reception: {
      name: "Dwór w Tomaszowicach",
      address: "Tomaszowice 1, 32-020",
      mapUrl: "https://maps.google.com",
      note: "Przyjęcie po ceremonii",
      linkLabel: "ZOBACZ DOJAZD",
    },
  },
  timeline: [
    {
      time: "14:00",
      title: "Przybycie gości",
      description: "Powitanie przy wejściu do ogrodu, herbata i małe przekąski.",
      location: "Willa Pod Dębem",
    },
    {
      time: "15:00",
      title: "Ceremonia",
      description: "Zaślubiny w kaplicy pod dębowymi łukami.",
      location: ceremonyLocationName,
    },
    {
      time: "16:30",
      title: "Sesja zdjęciowa",
      description: "Chwila na polaroidy i złote światło popołudnia.",
    },
    {
      time: "17:30",
      title: "Kolacja i toasty",
      description: "Wspólny stół, pierwszy taniec i opowieści przy winie.",
      location: "Willa Pod Dębem",
    },
    {
      time: "20:00",
      title: "Zabawa do białego rana",
      description: "Muzyka na żywo, tańce i iskry na parkiecie.",
    },
  ],
  infoCards: [
    {
      id: "ceremony",
      title: "Ceremonia",
      subtitle: ceremonyLocationName,
      description:
        "Prosimy o przybycie 20 minut przed rozpoczęciem. Parking dostępny przy bramie wschodniej.",
      icon: "rings",
      link: "https://maps.google.com",
      linkLabel: "Zobacz mapę",
    },
    {
      id: "dresscode",
      title: "Dress code",
      subtitle: "Elegancja boho",
      description:
        "Naturalne tkaniny, ziemiste barwy, kwiaty we włosach. Unikaj czystej bieli — zarezerwowana dla panny młodej.",
      icon: "dress",
    },
    {
      id: "gifts",
      title: "Prezenty",
      description:
        "Wasza obecność to najpiękniejszy podarunek. Jeśli chcecie nas obdarować, koperta na podróże marzeń będzie mile widziana.",
      icon: "gift",
    },
    {
      id: "gallery",
      title: "Galeria",
      subtitle: "Wspólne wspomnienia",
      description:
        "Dzielcie się zdjęciami z dnia ślubu — każdy kadr dołoży stronę do naszego albumu.",
      icon: "camera",
      link: "#gallery",
      linkLabel: "Zobacz zdjęcia",
    },
  ],
  gallery: [
    {
      src: "/assets/images/hero.jpg",
      alt: "Para młoda w złotym świetle",
      caption: "Złota godzina",
    },
    {
      src: "/assets/images/gallery-1.jpg",
      alt: "Spacer po ogrodzie",
      caption: "Lizbona, 2023",
    },
    {
      src: "/assets/images/gallery-2.jpg",
      alt: "Pierścionek zaręczynowy",
      caption: "Tak powiedzieliśmy tak",
    },
    {
      src: "/assets/images/gallery-3.jpg",
      alt: "Kwiaty i detale",
      caption: "Detale dnia",
    },
    {
      src: "/assets/images/gallery-4.jpg",
      alt: "Taniec w kuchni",
      caption: "Nasze poranki",
    },
    {
      src: "/assets/images/gallery-5.jpg",
      alt: "Zachód słońca",
      caption: "Zawsze razem",
    },
  ],
  footer: {
    message: "Do zobaczenia!",
  },
  meta: {
    title: "Karolina & Michał — Zaproszenie ślubne",
    description:
      "Eleganckie zaproszenie ślubne w stylu kinowego scrapbooku. Dołączcie do nas 12 września 2026.",
  },
  features: {
    showGallery: true,
    showCountdown: true,
  },
  images: {
    hero: "/assets/images/hero.jpg",
    tornFill: "/assets/images/bg3.png",
    welcomeBg: "/assets/images/a1.png",
  },
};
