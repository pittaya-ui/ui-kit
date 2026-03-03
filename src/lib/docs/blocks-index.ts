import type { BlockIndexItem } from "./types";

export const blocksIndex: BlockIndexItem[] = [
  {
    slug: "login",
    name: "Login Page",
    description:
      "A complete login page with email and password fields, ready to drop into your app.",
    category: "Authentication",
    tags: ["auth", "login", "form", "authentication"],
  },
  {
    slug: "login-carousel",
    name: "Carousel Login",
    description: "A modern, minimalist login page featuring a full-height carousel on one side.",
    category: "Authentication",
    tags: ["auth", "login", "form", "authentication", "carousel", "modern"],
  },
  {
    slug: "login-lines",
    name: "Lines Login",
    description:
      "A sleek, minimal login page with faded vertical border lines, a radial top glow, Google OAuth, and a clean centered form.",
    category: "Authentication",
    tags: ["auth", "login", "form", "authentication", "minimal", "modern"],
  },
  {
    slug: "login-neobrutalism",
    name: "Neobrutalist Login",
    description: "A bold, high-contrast login page with hard shadows and thick borders.",
    category: "Authentication",
    tags: ["auth", "login", "form", "authentication", "neobrutalism"],
  },
];

export function getBlocksIndex(): BlockIndexItem[] {
  return blocksIndex;
}
