import { DetailPageContent } from "@/components/sections";
import { weddingData } from "@/data/weddingData";

export default function DojazdPage() {
  return (
    <main className="w-full max-w-none">
      <DetailPageContent content={weddingData.detailPages.dojazd} />
    </main>
  );
}
