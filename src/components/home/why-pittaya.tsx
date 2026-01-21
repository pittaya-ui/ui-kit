"use client";

import {
  Accessibility,
  Code2,
  Eye,
  FileCode,
  Layers,
  LucideIcon,
  Terminal,
} from "lucide-react";

import { useInView } from "@/hooks/useInView";
import { componentsIndex } from "@/lib/docs/components-index";

import { AnnouncementText } from "../ui/announcement-badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

const features: Feature[] = [
  {
    icon: Layers,
    title: `${componentsIndex.length}+ Production Components`,
    description:
      "A growing collection of production-ready components including Buttons, Badges, Copy Button, Installation Section, and Orbit Images. Each component is battle-tested and ready to use.",
    highlight: "Ready to use",
  },
  {
    icon: Eye,
    title: "Interactive Previews",
    description:
      "See components in action with live previews. Toggle between Preview and Code tabs to see both the result and the implementation in real-time.",
    highlight: "See it before you use it",
  },
  {
    icon: Terminal,
    title: "CLI Installation",
    description:
      "Install components instantly with our CLI. Run 'npx pittaya@latest add button' and get the component, dependencies, and styles automatically configured.",
    highlight: "One command setup",
  },
  {
    icon: FileCode,
    title: "Copy & Paste Ready",
    description:
      "Every example includes a copy button with syntax highlighting. One click to copy the complete code snippet, then paste it directly into your project.",
    highlight: "Own your code",
  },
  {
    icon: Accessibility,
    title: "Accessible by Default",
    description:
      "Built on Radix UI primitives with WCAG compliance. Full keyboard navigation, ARIA attributes, and screen reader support included in every component.",
    highlight: "Inclusive design",
  },
  {
    icon: Code2,
    title: "TypeScript First",
    description:
      "100% TypeScript with complete type definitions. Get IntelliSense autocomplete, prop validation, and type safety for every component and variant.",
    highlight: "Type-safe development",
  },
];

export function WhyPittaya() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      <div className="from-background via-background/60 pointer-events-none absolute top-0 right-0 left-0 z-10 h-40 bg-gradient-to-b to-transparent" />
      {/* Tech Grid Background */}
      <div className="pointer-events-none absolute inset-0 mx-auto border-x border-white/5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

      {/* Lighting Effects */}
      <div className="bg-pittaya/15 pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Header */}
        <div className="relative mx-auto mb-24 max-w-3xl text-center">
          <div
            className={`mb-8 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm transition-all duration-1000 ${
              isInView
                ? "transform-none opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div className="bg-pittaya mr-2 h-1.5 w-1.5 animate-pulse rounded-full shadow-[0_0_10px_currentColor]" />
            <AnnouncementText
              text="System Architecture"
              className="border-none bg-transparent"
            />
          </div>

          <div className="relative z-10">
            <h3
              className={`font-geist text-foreground text-5xl font-bold tracking-tighter transition-all duration-700 md:text-7xl ${
                isInView
                  ? "transform-none opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Why{" "}
              <span className="text-pittaya relative inline-block drop-shadow-[0_0_15px_rgba(200,20,100,0.3)]">
                Pittaya UI
              </span>{" "}
              ?
            </h3>

            <p
              className={`font-geist text-muted-foreground/80 mx-auto mt-8 max-w-2xl text-xl transition-all delay-200 duration-700 ${
                isInView
                  ? "transform-none opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Forging the next generation of web interfaces. A fully open-source
              library built for speed, precision, and scalability.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="relative">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className={`group relative transition-all duration-700 ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${300 + idx * 100}ms`,
                }}
              >
                <Card className="bg-background/40 hover:border-pittaya/50 hover:bg-background/60 relative h-full overflow-hidden rounded-2xl border border-white/10 p-6 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(192,15,102,0.2)]">
                  <CardHeader className="relative z-10 p-0 pb-6">
                    <div className="group-hover:border-pittaya/30 group-hover:bg-pittaya/10 relative inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-500">
                      <feature.icon className="text-foreground/80 group-hover:text-pittaya h-6 w-6 transition-colors duration-500" />
                    </div>
                    <CardTitle className="font-geist mt-4 text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 p-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-pittaya/60 group-hover:text-pittaya font-mono text-[10px] font-medium tracking-widest uppercase transition-colors">
                        {feature.highlight}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
