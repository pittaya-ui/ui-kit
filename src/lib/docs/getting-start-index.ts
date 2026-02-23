import { GettingStartedItem } from "./types";

const gettingStartedItems: GettingStartedItem[] = [
  {
    slug: "introduction",
    title: "Introduction",
    href: "/docs/introduction",
  },
  {
    slug: "installation",
    title: "Installation",
    href: "/docs/installation",
  },
  {
    slug: "llms-txt",
    title: "llms.txt",
    href: "/llms.txt",
  },
];

export function getGettingStartedIndex(): GettingStartedItem[] {
  return gettingStartedItems;
}
