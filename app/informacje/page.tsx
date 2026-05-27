import { DetailPageContent } from "@/components/sections";
import { weddingData } from "@/data/weddingData";

export default function InformacjePage() {
  return (
    <main className="w-full max-w-none">
      <DetailPageContent content={weddingData.detailPages.informacje} />
    </main>
  );
}
