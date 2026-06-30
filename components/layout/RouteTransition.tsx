"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, type ReactNode } from "react";

interface RouteTransitionProps {
  children: ReactNode;
}

/**
 * Po nawigacji klienta (np. powrót z /informacje) wymusza scroll na górę
 * i remount treści — inaczej Framer Motion zostaje w stanie opacity: 0.
 */
export function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return <div key={pathname}>{children}</div>;
}
