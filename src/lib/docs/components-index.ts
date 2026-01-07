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
    slug: "badge",
    name: "Badge",
    description: "Displays a badge for status, labels, or metadata.",
    category: "Components",
    status: "stable",
    tags: ["badge", "label", "status", "tag"],
    dependencies: ["@radix-ui/react-slot"],
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
    slug: "card",
    name: "Card",
    description:
      "Displays a card with a title, description, content and footer.",
    category: "Components",
    status: "stable",
    tags: ["card", "title", "description"],
  },
  {
    slug: "carousel",
    name: "Carousel",
    description: "Displays a carousel of images or content.",
    category: "Components",
    status: "stable",
    tags: ["carousel", "images", "content"],
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "An accessible checkbox with optional animation variant.",
    category: "Forms",
    status: "stable",
    tags: ["checkbox", "form", "input", "selection"],
    dependencies: [
      "@radix-ui/react-checkbox",
      "lucide-react",
      "class-variance-authority",
    ],
  },
  {
    slug: "command",
    name: "Command",
    description: "A fast command menu and search interface.",
    category: "Navigation",
    status: "stable",
    tags: ["command", "search", "menu", "palette", "navigation"],
    dependencies: ["cmdk", "lucide-react"],
    internalDependencies: ["dialog"],
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
    slug: "input",
    name: "Input",
    description:
      "A versatile input field with multiple variants including floating labels and outlined styles.",
    category: "Forms",
    status: "stable",
    tags: ["form", "input", "text", "field", "floating", "outlined"],
    dependencies: ["class-variance-authority"],
    internalDependencies: ["label"],
  },
  {
    slug: "label",
    name: "Label",
    description:
      "An accessible label component that renders a caption associated with a control.",
    category: "Forms",
    status: "stable",
    tags: ["form", "label", "accessibility", "a11y"],
    dependencies: ["@radix-ui/react-label"],
  },
  {
    slug: "multi-select",
    name: "Multi-Select",
    description:
      "A searchable multi-select component with badges for displaying selected items.",
    category: "Forms",
    status: "stable",
    tags: ["form", "select", "multi", "combobox", "dropdown"],
    dependencies: ["lucide-react"],
    internalDependencies: ["badge", "button", "command", "popover"],
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
  {
    slug: "popover",
    name: "Popover",
    description:
      "A floating content container positioned relative to a trigger.",
    category: "Overlays",
    status: "stable",
    tags: ["popover", "overlay", "tooltip", "floating"],
    dependencies: ["@radix-ui/react-popover"],
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    description:
      "A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.",
    category: "Forms",
    status: "stable",
    tags: ["radio", "form", "input", "selection", "option"],
    dependencies: ["@radix-ui/react-radio-group", "class-variance-authority"],
  },
  {
    slug: "tabs",
    name: "Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    category: "Navigation",
    status: "stable",
    tags: ["navigation", "tabs", "panels", "sections"],
    dependencies: ["@radix-ui/react-tabs"],
  },
];

export function getComponentsIndex(): ComponentIndexItem[] {
  return componentsIndex;
}
