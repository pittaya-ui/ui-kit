"use client";

import { ArrowUpRight, BookOpen, Github } from "lucide-react";
import Link from "next/link";

import {
  AnnouncementContainer,
  AnnouncementIcon,
  AnnouncementSeparator,
  AnnouncementTitle,
} from "@/components/ui/announcement-badge";
import { Button } from "@/components/ui/button";
import { REPO_URL } from "@/constants/repo-url";
import { useInView } from "@/hooks/useInView";

import Beams from "../Beams";

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Beams
      beamWidth={2}
      beamHeight={15}
      beamNumber={12}
      lightColor="#ff637e"
      speed={4}
      noiseIntensity={1.75}
      scale={0.2}
      rotation={136}
      className="h-screen overflow-hidden"
    >
      <main
        ref={ref}
        className="flex h-screen flex-1 flex-col items-center justify-center gap-6 px-4"
      >
        <Link
          href={"/docs/introduction"}
          className={`transition-all ${
            isInView ? "animate-fade-in-down opacity-0" : "opacity-0"
          }`}
        >
          <AnnouncementContainer variant={"glassEffect"}>
            <AnnouncementIcon icon={"🎉"} />
            <AnnouncementSeparator className="bg-white/30" />
            <AnnouncementTitle>
              Introducing Pittaya UI <ArrowUpRight className="size-4" />
            </AnnouncementTitle>
          </AnnouncementContainer>
        </Link>
        <div className="max-w-4xl space-y-8 text-center">
          <h1
            className={`text-4xl leading-tight font-light tracking-tight text-white transition-all lg:text-6xl ${
              isInView
                ? "animate-fade-in-up animation-delay-200 opacity-0"
                : "opacity-0"
            }`}
          >
            Components that scale <br />
            <span className="text-white">
              with your <span className="font-semibold">ideas.</span>{" "}
            </span>
          </h1>
          <p
            className={`mx-auto max-w-2xl text-lg text-white/90 transition-all lg:text-xl ${
              isInView
                ? "animate-fade-in-up animation-delay-400 opacity-0"
                : "opacity-0"
            }`}
          >
            A fully open-source UI library for React, powered by TypeScript and
            Tailwind CSS. Fast, composable, and ready for production.
          </p>
          <div
            className={`flex flex-wrap items-center justify-center gap-4 transition-all ${
              isInView
                ? "animate-scale-in animation-delay-600 opacity-0"
                : "opacity-0"
            }`}
          >
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
              <Link
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Github className="mr-2 size-5" />
                CLI Documentation
                <ArrowUpRight className="ml-1 size-4 transition-all group-hover:translate-x-[3px] group-hover:translate-y-[-3px]" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </Beams>
  );
}
