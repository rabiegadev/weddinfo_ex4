import type { Metadata } from "next";
import { weddingData } from "@/data/weddingData";
import {
  fontBody,
  fontDisplay,
  fontScript,
  fontScriptLg,
} from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: weddingData.meta.title,
  description: weddingData.meta.description,
  openGraph: {
    title: weddingData.meta.title,
    description: weddingData.meta.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontScript.variable} ${fontScriptLg.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
