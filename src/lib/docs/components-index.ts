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
    slug: "scrolling-animation-orbit",
    name: "Orbit images",
    category: "Components",
    status: "stable",
    tags: ["scroll", "motion", "orbit"],
  },
];

export function getComponentsIndex(): ComponentIndexItem[] {
  return componentsIndex;
}

