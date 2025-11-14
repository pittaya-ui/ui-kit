import type { ComponentIndexItem } from "./types";

export const componentsIndex: ComponentIndexItem[] = [
  {
    slug: "button",
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    category: "Actions",
    status: "stable",
    tags: ["primary", "form", "cta"],
    dependencies: ["@radix-ui/react-slot"],
  },
  {
    slug: "installation-section",
    name: "Installation Section",
    description: "Displays installation instructions with code snippets.",
    category: "Documentation",
    status: "stable",
    tags: ["cli", "install", "documentation", "code"],
    dependencies: ["@radix-ui/react-tabs","react-syntax-highlighter"],
    internalDependencies: ["button"],
  },
  {
    slug: "orbit-images",
    name: "Orbit images",
    description: "Displays a set of images in an orbiting motion.",
    category: "Components",
    status: "stable",
    tags: ["scroll", "motion", "orbit"],
    dependencies: ["@radix-ui/react-slot"],
    internalDependencies: ["button"],
  },
];

export function getComponentsIndex(): ComponentIndexItem[] {
  return componentsIndex;
}
