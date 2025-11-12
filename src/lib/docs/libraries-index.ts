import type { ComponentIndexItem } from "./types";

export const librariesIndex: ComponentIndexItem[] = [
  {
    slug: "utils",
    name: "Utils",
    description: "Utility functions for className management (includes cn function)",
    category: "Library",
    status: "stable",
    tags: ["utilities", "cn", "classname", "tailwind"],
  },
];

export function getLibrariesIndex(): ComponentIndexItem[] {
  return librariesIndex;
}

