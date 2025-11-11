import type { ComponentIndexItem } from "./types";

export const componentsIndex: ComponentIndexItem[] = [
  {
    slug: "button",
    name: "Button",
    category: "Actions",
    status: "stable",
    tags: ["primary", "form", "cta"],
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

