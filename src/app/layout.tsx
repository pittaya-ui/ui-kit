import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/react-query";

export const metadata: Metadata = {
  title: "Pittaya UI",
  description:
    "The best UI library for Next.js, using Shadcn UI and Tailwind CSS.",
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
