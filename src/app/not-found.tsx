import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pittaya UI | 404 - Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse our React component library with TypeScript and Tailwind CSS.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Pittaya UI | 404 - Page Not Found",
    description: "The page you're looking for doesn't exist.",
    type: "website",
  },
};

export default function NotFound() {
  return (
    <div className="mt-16 flex h-[calc(100vh-4rem)] flex-col items-center justify-between">
      <div className="flex h-12 w-full items-center justify-between md:h-16 lg:h-20">
        <div className="border-border diagonal-stripes h-full min-w-10 border-r border-b p-4 md:min-w-16 lg:min-w-24"></div>
        <div className="border-border h-full w-full p-4"></div>
        <div className="border-border diagonal-stripes h-full min-w-10 border-b border-l p-4 md:min-w-16 lg:min-w-24"></div>
      </div>
      <div className="flex h-full w-full items-center justify-center px-10 md:px-16 lg:px-24">
        <div className="outline-border flex h-full w-full flex-col items-center justify-center gap-4 outline">
          <div className="flex items-center justify-center">
            <span className="-mr-2 text-7xl leading-none md:-mr-4 md:text-9xl lg:-mr-6 lg:text-[230px] 2xl:-mr-8 2xl:text-[300px]">
              4
            </span>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src="/pittaya-logo.png"
                alt="Pittaya UI"
                width={200}
                height={200}
                className="h-[80px] w-[80px] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] 2xl:h-[250px] 2xl:w-[250px]"
              />
            </div>
            <span className="-ml-2 text-7xl leading-none md:-ml-4 md:text-9xl lg:-ml-6 lg:text-[230px] 2xl:-ml-8 2xl:text-[300px]">
              4
            </span>
          </div>
          <div>
            <p className="text-center text-2xl font-medium text-white/80 uppercase">
              something went wrong
            </p>
            <p className="text-center text-sm text-white/80">
              The page you are looking for does not exist. Please check the URL
              and try again.
            </p>
          </div>
          <Link href="/" className="w-fit">
            <Button
              variant="default"
              className="bg-pittaya/80 hover:bg-pittaya/90 shadow-pittaya/20 mt-4 rounded-full border border-white/20 text-white shadow-lg backdrop-blur-md"
              size="lg"
            >
              Go back to home
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex h-12 w-full items-center justify-between md:h-16 lg:h-20">
        <div className="border-border diagonal-stripes h-full min-w-10 border-t border-r p-4 md:min-w-16 lg:min-w-24"></div>
        <div className="border-border h-full w-full p-4"></div>
        <div className="border-border diagonal-stripes h-full min-w-10 border-t border-l p-4 md:min-w-16 lg:min-w-24"></div>
      </div>
    </div>
  );
}
