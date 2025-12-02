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

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

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
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="relative z-10">
            <h3
              className={`font-geist mt-4 text-3xl font-normal tracking-tighter transition-all sm:text-4xl md:text-5xl ${
                isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
              }`}
            >
              Why Choose <span className="text-pittaya">Pittaya UI</span> ?
            </h3>
            <p
              className={`font-geist text-foreground/60 mt-3 transition-all ${
                isInView
                  ? "animate-fade-in-up animation-delay-200 opacity-0"
                  : "opacity-0"
              }`}
            >
              A fully open-source component library built on React, TypeScript,
              Tailwind CSS, and Radix UI. Production-ready components with
              complete documentation and live examples.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)",
            }}
          />
        </div>
        <Separator
          className={`bg-foreground/30 mx-auto mt-5 max-w-lg transition-all ${
            isInView
              ? "animate-scale-in animation-delay-400 opacity-0"
              : "opacity-0"
          }`}
        />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className={`transform-gpu gap-2 space-y-3 rounded-xl border bg-transparent p-4 transition-all ${
                  isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
                }`}
                style={{
                  animationDelay: isInView ? `${600 + idx * 100}ms` : "0ms",
                }}
              >
                <CardHeader className="gap-4">
                  <div className="text-primary w-fit transform-gpu rounded-full border p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                    <feature.icon className="stroke-pittaya size-6" />
                  </div>
                  <CardTitle className="font-geist text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-500">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
