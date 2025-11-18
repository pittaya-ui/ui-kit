import {
  Accessibility,
  Code2,
  Eye,
  FileCode,
  Layers,
  LucideIcon,
  Terminal,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

import { componentsIndex } from "@/lib/docs/components-index";

import { Separator } from "../ui/separator";

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
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose <span className="text-pittaya">Pittaya UI</span> ?
            </h3>
            <p className="font-geist text-foreground/60 mt-3">
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
        <Separator className="bg-foreground/30 mx-auto mt-5 max-w-lg" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4"
              >
                <div className="text-primary w-fit transform-gpu rounded-full border p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                  <feature.icon className="stroke-pittaya size-6" />
                </div>
                <h4 className="font-geist text-lg font-semibold">
                  {feature.title}
                </h4>
                <p className="text-gray-500">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
