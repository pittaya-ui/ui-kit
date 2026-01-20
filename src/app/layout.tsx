import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/react-query";

export const metadata: Metadata = {
  metadataBase: new URL("https://ui.pittaya.org"),
  title: "Pittaya UI - Components that scale with your ideas",
  description:
    "A fully open-source UI library for React, powered by TypeScript and Tailwind CSS. Fast, composable, and ready for production.",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI Components",
    "Design System",
    "Shadcn UI",
    "Radix UI",
    "Component Library",
    "Open Source",
  ],
  authors: [{ name: "Pittaya Team" }],
  creator: "Pittaya",
  publisher: "Pittaya",
  category: "technology",
  openGraph: {
    title: "Pittaya UI - Components that scale with your ideas",
    description:
      "A fully open-source UI library for React, powered by TypeScript and Tailwind CSS. Fast, composable, and ready for production.",
    url: "https://ui.pittaya.org",
    siteName: "Pittaya UI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ui.pittaya.org/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pittaya UI - Components that scale with your ideas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pittaya UI - Components that scale with your ideas",
    description:
      "A fully open-source UI library for React, powered by TypeScript and Tailwind CSS. Fast, composable, and ready for production.",
    images: ["https://ui.pittaya.org/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark flex min-h-screen flex-col antialiased">
        <QueryProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </QueryProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
