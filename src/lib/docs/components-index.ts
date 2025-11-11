import type { ComponentIndexItem } from "./types";

export const componentsIndex: ComponentIndexItem[] = [
  {
    slug: "button",
    name: "Button",
    category: "Components",
    status: "stable",
    tags: ["primary", "form", "cta"],
  },
  {
    slug: "orbit-images",
    name: "Orbit images",
    category: "Components",
    status: "stable",
    tags: ["scroll", "motion", "orbit"],
  },
  {
    slug: "installation-section",
    name: "Installation Section",
    category: "Documentation",
    status: "stable",
    tags: ["cli", "install", "documentation", "code"],
  },
];

export function getComponentsIndex(): ComponentIndexItem[] {
  return componentsIndex;
}

