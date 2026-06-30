"use client";

import type { ReactNode } from "react";
import { RouteTransition } from "@/components/layout/RouteTransition";
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
      <RouteTransition>{children}</RouteTransition>
    </>
  );
}
