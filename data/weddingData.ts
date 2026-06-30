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

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface WeddingLocation {
  name: string;
  address: string;
  mapUrl?: string;
  note?: string;
  linkLabel?: string;
  directions: string;
  coordinates: Coordinates;
}

export interface ReturnTransport {
  title: string;
  description: string;
  note?: string;
}

export interface GuestIntro {
  label: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface GuestDetailsTopic {
  id: string;
  title: string;
  text: string;
}

export interface GuestDetailsPage {
  title: string;
  intro: string;
  topics: GuestDetailsTopic[];
  dojazd: {
    title: string;
    intro: string;
    bullets: string[];
  };
}

export interface HomeShortcutSection {
  id: "informacje" | "dojazd" | "faq";
  title: string;
  summary: string;
  href: "/informacje" | "/dojazd" | "/faq";
  ctaLabel: string;
}

export interface DetailPageEntry {
  title: string;
  description: string;
}

export interface DetailPageContent {
  title: string;
  intro: string;
  entries: DetailPageEntry[];
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
  returnTransport: ReturnTransport;
  timeline: TimelineEvent[];
  infoCards: InfoCard[];
  guestIntro: GuestIntro;
  guestDetails: GuestDetailsPage;
  quickSections: HomeShortcutSection[];
  detailPages: {
    informacje: DetailPageContent;
    dojazd: DetailPageContent;
    faq: DetailPageContent;
  };
  gallery: GalleryImage[];
  footer: {
    message: string;
    rsvpEmail?: string;
    hashtag?: string;
  };
  quote: {
    text: string;
    author: string;
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
    bgPrimary: string;
    bgAlt: string;
  };
}

export function buildMapLink({ lat, lng }: Coordinates): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function buildMapEmbedUrl({ lat, lng }: Coordinates): string {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
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
      address: "ul. św. Anny 11, Kraków",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=50.0624,19.9378",
      note: "Ceremonia o godz. 15:00",
      linkLabel: "Otwórz w mapach",
      coordinates: { lat: 50.0624, lng: 19.9378 },
      directions:
        "Kościół znajduje się w centrum Krakowa, tuż obok Rynku Głównego. Najwygodniej dojechać tramwajem (przystanek Pętla Plac Wszystkich Świętych) lub zaparkować w garażu podziemnym przy ul. Brackiej. Prosimy o przybycie ok. 20 minut przed ceremonią.",
    },
    reception: {
      name: "Dwór w Tomaszowicach",
      address: "Tomaszowice 12, Wieliczka",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=49.9892,20.0421",
      note: "Przyjęcie po ceremonii",
      linkLabel: "Otwórz w mapach",
      coordinates: { lat: 49.9892, lng: 20.0421 },
      directions:
        "Z centrum Krakowa jedźcie drogą 94 w kierunku Wieliczki, następnie skręćcie w Tomaszowice zgodnie z drogowskazami. Parking dla gości znajduje się bezpośrednio przy obiekcie — wjazd od strony ogrodu.",
    },
  },
  returnTransport: {
    title: "Transport powrotny",
    description:
      "Podczas trwania wesela dostępny będzie kierowca, który może transportować gości do domów. Chęć skorzystania z transportu prosimy przekazać świadkowi lub świadkowej kilka minut wcześniej.",
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
  guestIntro: {
    label: "Praktyczne informacje",
    title: "Dla naszych Gości",
    body:
      "Abyście mogli w pełni cieszyć się tym wyjątkowym dniem, zebraliśmy wszystkie najważniejsze informacje w jednym miejscu. Kilka minut wystarczy, by poznać przebieg uroczystości oraz praktyczne wskazówki dotyczące wesela.",
    ctaLabel: "Odkryj szczegóły",
    ctaHref: "/informacje",
  },
  guestDetails: {
    title: "Informacje dla gości",
    intro:
      "Zebraliśmy tu wszystko, co warto wiedzieć przed naszym wielkim dniem — od drobnych prośb po praktyczne wskazówki logistyczne.",
    topics: [
      {
        id: "prezenty",
        title: "Prezenty",
        text:
          "Wasza obecność to dla nas najpiękniejszy podarunek. Jeśli jednak chcecie nas obdarować, będziemy wdzięczni za kopertę na wymarzoną podróż poślubną.",
      },
      {
        id: "kwiaty",
        title: "Kwiaty",
        text:
          "Zamiast bukietów cut-flower prosimy o drobne doniczki lub wręczenie kwiatów bezpośrednio pani młodej w dniu ślubu — chętnie zabierzemy je ze sobą po uroczystości.",
      },
      {
        id: "nocleg",
        title: "Nocleg",
        text:
          "Dla gości spoza Krakowa przygotowaliśmy pulę pokoi w obiekcie weselnym oraz pobliskim pensjonacie. Szczegóły rezerwacji przekażemy po potwierdzeniu obecności.",
      },
      {
        id: "dresscode",
        title: "Dress code",
        text:
          "Elegancja boho — naturalne tkaniny, ziemiste barwy, kwiaty we włosach. Prosimy o unikanie czystej bieli, zarezerwowanej dla panny młodej.",
      },
      {
        id: "dzieci",
        title: "Dzieci",
        text:
          "Kochamy najmłodszych gości! Przygotowaliśmy kącik z animacjami w sali weselnej — prosimy o wcześniejszą informację, jeśli planujecie przyjazd z maluchami.",
      },
      {
        id: "poprawiny",
        title: "Poprawiny",
        text:
          "Następnego dnia zapraszamy na spokojne śniadanie i kawę w ogrodzie przy sali weselnej. Start o 11:00 — bez formalnego dress code'u.",
      },
      {
        id: "kontakt",
        title: "Kontakt",
        text:
          "W razie pytań organizacyjnych piszcie do nas bezpośrednio — chętnie pomożemy w każdej sprawie przed i w dniu uroczystości.",
      },
    ],
    dojazd: {
      title: "Wskazówki dojazdu",
      intro: "Dodatkowe informacje, które ułatwią Wam dotarcie na miejsce.",
      bullets: [
        "Przy kościele dostępny jest parking podziemny przy ul. Brackiej — pierwsza godzina bezpłatna w weekendy.",
        "Po ceremonii bus dla gości odjeżdża spod kościoła o 16:15 bezpośrednio do sali weselnej w Tomaszowicach.",
        "Zalecamy wcześniejszy wyjazd z domu — w sobotę ruch w centrum Krakowa bywa wzmożony.",
        "W razie problemów z nawigacją zadzwońcie do nas — chętnie pomożemy na miejscu.",
      ],
    },
  },
  quickSections: [
    {
      id: "informacje",
      title: "Informacje",
      summary:
        "Najważniejsze kwestie organizacyjne: przebieg wesela, nocleg i poprawiny.",
      href: "/informacje",
      ctaLabel: "Przejdź do informacji",
    },
    {
      id: "dojazd",
      title: "Dojazd",
      summary:
        "Krótko o transporcie i parkingach. Na podstronie znajdziesz dokładne wskazówki.",
      href: "/dojazd",
      ctaLabel: "Sprawdź dojazd",
    },
    {
      id: "faq",
      title: "FAQ",
      summary:
        "Szybkie odpowiedzi na najczęstsze pytania gości przed uroczystością.",
      href: "/faq",
      ctaLabel: "Zobacz FAQ",
    },
  ],
  detailPages: {
    informacje: {
      title: "Informacje dla gości",
      intro:
        "Poniżej znajdziecie komplet najważniejszych informacji dotyczących dnia ślubu i kolejnego poranka.",
      entries: [
        {
          title: "Wesele",
          description:
            "Po ceremonii zapraszamy bezpośrednio do sali weselnej. Na miejscu czeka na Was toast powitalny, kolacja i dalsza część świętowania zgodnie z harmonogramem.",
        },
        {
          title: "Nocleg",
          description:
            "Dla gości spoza Krakowa przygotowaliśmy pulę pokoi w obiekcie weselnym oraz pobliskim pensjonacie. Szczegóły rezerwacji i numery pokoi przekażemy podczas przyjazdu.",
        },
        {
          title: "Poprawiny",
          description:
            "Następnego dnia zapraszamy na spokojne spotkanie przy wspólnym śniadaniu i kawie. Start o 11:00 w ogrodzie przy sali weselnej.",
        },
      ],
    },
    dojazd: {
      title: "Dojazd",
      intro:
        "Tu znajdziecie najważniejsze informacje, jak najwygodniej dotrzeć na ceremonię i przyjęcie.",
      entries: [
        {
          title: "Samochodem",
          description:
            "Przy kościele oraz sali dostępne są parkingi dla gości. Prosimy o wcześniejszy wyjazd, aby mieć zapas czasu przed rozpoczęciem ceremonii.",
        },
        {
          title: "Transport zorganizowany",
          description:
            "Po zakończeniu uroczystości w kościele będzie podstawiony bus dla gości jadących na przyjęcie. Rozkład kursów pojawi się na miejscu przy wejściu.",
        },
        {
          title: "Nawigacja",
          description:
            "Aktualne pinezki map dla obu lokalizacji są dostępne w sekcji dojazdu na stronie głównej. W razie problemów kontaktujcie się z nami telefonicznie.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      intro:
        "Najczęściej zadawane pytania, które pojawiają się przed naszym wielkim dniem.",
      entries: [
        {
          title: "Czy mogę przyjechać z osobą towarzyszącą?",
          description:
            "Tak, jeżeli taka informacja została uwzględniona na zaproszeniu. W razie wątpliwości dajcie nam znać.",
        },
        {
          title: "Czy na miejscu będzie opcja wegetariańska?",
          description:
            "Tak, przygotowaliśmy warianty dań specjalnych. Jeśli macie dodatkowe potrzeby żywieniowe, napiszcie do nas wcześniej.",
        },
        {
          title: "Do której trwa zabawa?",
          description:
            "Planowana zabawa taneczna trwa do późnych godzin nocnych, a poprawiny rozpoczynamy kolejnego dnia przed południem.",
        },
      ],
    },
  },
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
    message: "",
  },
  quote: {
    text:
      "Miłość to nie patrzenie na siebie nawzajem, lecz patrzenie razem w tym samym kierunku.",
    author: "Antoine de Saint-Exupéry",
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
    bgPrimary: "/assets/images/bg4.png",
    bgAlt: "/assets/images/bg2.jpeg",
  },
};
