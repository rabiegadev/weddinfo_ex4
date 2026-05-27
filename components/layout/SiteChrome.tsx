import type { ReactNode } from "react";
import { ScrollSiteNav } from "@/components/ui/ScrollSiteNav";

interface SiteChromeProps {
  children: ReactNode;
  partnerOne: string;
  partnerTwo: string;
}

export function SiteChrome({ children, partnerOne, partnerTwo }: SiteChromeProps) {
  return (
    <>
      <ScrollSiteNav partnerOne={partnerOne} partnerTwo={partnerTwo} />
      {children}
    </>
  );
}
