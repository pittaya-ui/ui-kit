import { GettingStartedItem } from "./types";

 const gettingStartedItems: GettingStartedItem[] = [
  {
    slug: "introduction",
    title: "Introduction",
    href: "/docs/introduction",
  },

]

export function getGettingStartedIndex(): GettingStartedItem[] {
  return gettingStartedItems;
}