import { ArrowUpRight, BookOpen, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNpm } from "react-icons/di";
import { DiTerminal } from "react-icons/di";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiNextdotjs, SiVercel } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { REPO_URL } from "@/constants/repo-url";
import { cn } from "@/lib/utils";

const iconConfigs = [
  { Icon: FaReact, color: "text-[#61DAFB]" },
  { Icon: FaNodeJs, color: "text-[#339933]" },
  { Icon: SiNextdotjs, color: "text-[#FFFFFF] " },
  { Icon: SiVercel, color: "text-[#FFFFFF]" },
  { Icon: FaGithub, color: "text-[#FFFFFF]" },
  { Icon: RiTailwindCssFill, color: "text-[#2496ED]" },
  { Icon: RiJavascriptFill, color: "text-[#F7DF1E]" },
  { Icon: BiLogoTypescript, color: "text-[#3178C6]" },
  { Icon: DiNpm, color: "text-[#FFFFFF]" },
  { Icon: DiTerminal, color: "text-[#FFFFFF]" },
];

export function FeatureSection() {
  const orbitCount = 3;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="border-border bg-card/30 relative flex flex-col overflow-hidden rounded-3xl border px-4 py-12 shadow-2xl md:h-[25rem] md:flex-row md:items-center md:justify-between md:px-8 md:py-0 dark:bg-black/20">
        <div className="bg-pittaya/20 dark:bg-pittaya/10 absolute -top-20 -left-20 h-64 w-64 rounded-full blur-[100px]" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative z-10 w-full md:w-1/2">
          <h1 className="text-foreground mt-4 text-3xl leading-tight font-normal tracking-tight md:text-5xl lg:text-5xl">
            Boost Your Frontend With{" "}
            <span className="text-pittaya">Pittaya UI</span>
          </h1>

          <p className="text-muted-foreground mt-4 max-w-lg text-lg">
            A fully open-source UI library for React, powered by TypeScript and
            Tailwind CSS. Fast, composable, and ready for production.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 w-full md:w-fit"
            >
              <Link href="/docs/components">
                <BookOpen className="mr-2 h-4 w-4" />
                View Components
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-border bg-background/50 hover:bg-accent hover:text-accent-foreground w-full backdrop-blur-sm md:w-fit"
            >
              <Link href={REPO_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                CLI Documentation
                <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-8 flex h-64 w-full items-center justify-center md:mt-0 md:h-full md:w-1/2 md:justify-end">
          <div className="relative flex h-[40rem] w-[40rem] scale-[0.6] items-center justify-center sm:scale-[0.8] md:translate-x-1/4 md:scale-100">
            <div className="border-border bg-background shadow-pittaya/10 ring-background/50 relative z-20 flex h-24 w-24 items-center justify-center rounded-full border shadow-2xl ring-4">
              <Image
                src="/pittaya-logo.png"
                alt="Pittaya UI Logo"
                width={80}
                height={80}
                priority
                quality={100}
                className="h-14 w-14 object-contain"
              />
              <div className="bg-pittaya/20 absolute inset-0 -z-10 rounded-full blur-xl" />
            </div>

            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const sizeClass = [
                "h-[16rem] w-[16rem]",
                "h-[24rem] w-[24rem]",
                "h-[32rem] w-[32rem]",
              ][orbitIdx];

              const durationClass = [
                "animate-[spin_20s_linear_infinite]",
                "animate-[spin_30s_linear_infinite_reverse]",
                "animate-[spin_40s_linear_infinite]",
              ][orbitIdx];

              return (
                <div
                  key={orbitIdx}
                  className={cn(
                    "border-muted-foreground/20 absolute flex items-center justify-center rounded-full border border-dashed",
                    sizeClass,
                    durationClass
                  )}
                >
                  {iconConfigs
                    .slice(
                      orbitIdx * iconsPerOrbit,
                      orbitIdx * iconsPerOrbit + iconsPerOrbit
                    )
                    .map((cfg, iconIdx) => {
                      const angle = (360 / iconsPerOrbit) * iconIdx;
                      return (
                        <div
                          key={iconIdx}
                          className="border-border bg-background absolute flex h-10 w-10 origin-center items-center justify-center rounded-full border shadow-sm transition-transform hover:scale-110"
                          style={{
                            transform: `rotate(${angle}deg) translate(${8 + orbitIdx * 4}rem) rotate(-${angle}deg)`,
                          }}
                        >
                          <cfg.Icon className={cn("h-5 w-5", cfg.color)} />
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
