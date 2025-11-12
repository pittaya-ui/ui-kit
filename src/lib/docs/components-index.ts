import type { ComponentIndexItem } from "./types";

export const componentsIndex: ComponentIndexItem[] = [
  {
    slug: "button",
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    category: "Actions",
    status: "stable",
    tags: ["primary", "form", "cta"],
  },
  {
    slug: "installation-section",
    name: "Installation Section",
    description: "Displays installation instructions with code snippets.",
    category: "Documentation",
    status: "stable",
    tags: ["cli", "install", "documentation", "code"],
  },
];

export function getComponentsIndex(): ComponentIndexItem[] {
  return componentsIndex;
}

