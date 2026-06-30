import { GuestDetailsContent } from "@/components/sections";
import { weddingData } from "@/data/weddingData";

export default function InformacjePage() {
  return (
    <main className="w-full max-w-none">
      <GuestDetailsContent
        content={weddingData.guestDetails}
        locations={weddingData.locations}
        returnTransport={weddingData.returnTransport}
      />
    </main>
  );
}
