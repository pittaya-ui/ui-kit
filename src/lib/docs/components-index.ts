import type { ComponentIndexItem } from "./types";

export const componentsIndex: ComponentIndexItem[] = [
  {
    slug: "announcement-badge",
    name: "Announcement Badge",
    description: "Displays a badge with an icon and a title.",
    category: "Components",
    status: "stable",
    tags: ["badge", "announcement", "alert"],
  },
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
    slug: "copy-button",
    name: "Copy Button",
    description:
      "Displays a copy button that copies the text to the clipboard when clicked.",
    category: "Actions",
    status: "stable",
    tags: ["button", "text", "copy"],
    internalDependencies: ["button"],
  },
  {
    slug: "installation-section",
    name: "Installation Section",
    description: "Displays installation instructions with code snippets.",
    category: "Documentation",
    status: "stable",
    tags: ["cli", "install", "documentation", "code"],
    dependencies: [
      "react-syntax-highlighter",
      "@types/react-syntax-highlighter",
    ],
  },
  {
    slug: "orbit-images",
    name: "Orbit images",
    description: "Displays a set of images in an orbiting motion.",
    category: "Components",
    status: "stable",
    tags: ["scroll", "motion", "orbit"],
    internalDependencies: ["button"],
  },
];

export function getComponentsIndex(): ComponentIndexItem[] {
  return componentsIndex;
}
