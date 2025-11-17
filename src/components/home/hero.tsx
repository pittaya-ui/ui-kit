import { ArrowUpRight, BookOpen, Github } from "lucide-react";
import Link from "next/link";

import { PittayaBackground } from "@/components/raycast-animated-background";
import {
  AnnouncementContainer,
  AnnouncementIcon,
  AnnouncementSeparator,
  AnnouncementTitle,
} from "@/components/ui/announcement-badge";
import { Button } from "@/components/ui/button";
import { REPO_URL } from "@/constants/repo-url";

export function Hero() {
  return (
    <PittayaBackground className="h-screen max-h-screen overflow-x-hidden overflow-y-hidden">
      <main className="flex h-screen flex-1 flex-col items-center justify-center gap-6 px-6">
        <Link href={"/docs/components"}>
          <AnnouncementContainer variant={"glassEffect"}>
            <AnnouncementIcon icon={"🎉"} />
            <AnnouncementSeparator className="bg-white/30" />
            <AnnouncementTitle>
              Introducing Pittaya UI <ArrowUpRight className="size-4" />
            </AnnouncementTitle>
          </AnnouncementContainer>
        </Link>
        <div className="max-w-4xl space-y-8 text-center">
          <h1 className="text-6xl leading-tight font-bold text-white">
            Components that scale <br />
            <span className="text-white">with your ideas.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            A fully open-source UI library for React, powered by TypeScript and
            Tailwind CSS. Fast, composable, and ready for production.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-white font-semibold text-black md:w-fit"
            >
              <Link href="/docs/components">
                <BookOpen className="mr-2 size-5" />
                View Components
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-white/10 font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white md:w-fit"
            >
              <Link href={REPO_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 size-5" />
                CLI Documentation
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </PittayaBackground>
  );
}
