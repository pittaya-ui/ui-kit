import type { ComponentIndexItem } from "./types";

export const componentsIndex: ComponentIndexItem[] = [
  {
    slug: "button",
    name: "Button",
    category: "Actions",
    status: "stable",
    tags: ["primary", "form", "cta"],
  },

];

export function getComponentsIndex(): ComponentIndexItem[] {
  return componentsIndex;
}

