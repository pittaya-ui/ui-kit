import {
  Accessibility,
  Code2,
  Eye,
  FileCode,
  Layers,
  LucideIcon,
  Sparkles,
  Terminal,
} from "lucide-react";

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
    title: "5+ Production Components",
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
    <section className="bg-background px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <h2 className="text-4xl font-normal tracking-tighter md:text-5xl">
            Why Choose Pittaya UI?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            A fully open-source component library built on React, TypeScript,
            Tailwind CSS, and Radix UI. Production-ready components with
            complete documentation and live examples.
          </p>
          <Separator className="w-full max-w-xl" />
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card hover:border-pittaya/50 hover:shadow-pittaya/10 relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border-2 p-6 [box-shadow:0_-20px_80px_-20px_#ff637e3f_inset] transition-all hover:shadow-md"
            >
              <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col">
                <div className="text-primary mb-4 flex-shrink-0">
                  <feature.icon className="size-8" />
                </div>
                <h3 className="mb-3 flex-shrink-0 text-xl leading-tight font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="from-primary/10 to-primary/5 text-primary/90 flex w-fit flex-shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                  <Sparkles className="group-hover:stroke-pittaya size-3 flex-shrink-0" />
                  <span className="whitespace-nowrap">{feature.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
