import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/react-query";

export const metadata: Metadata = {
  title: "Pittaya UI",
  description:
    "The best UI library for Next.js, using Shadcn UI and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark antialiased">
        <QueryProvider>
          <Header />
          {children}
          <Toaster />
        </QueryProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
