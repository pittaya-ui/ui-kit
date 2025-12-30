
import { Installation } from "@/components/docs/getting-started/installation";
import { Introduction } from "@/components/docs/getting-started/introduction";

import { getGettingStartedIndex } from "./getting-start-index";
import type { PageSection } from "./types";

const docs: Record<string, PageSection> = {
  [Introduction.slug]: Introduction,
  [Installation.slug]: Installation,
};  

export function getGettingStartPage(slug: string): PageSection | undefined {
  return docs[slug];
}

export function getAllGettingStartedPages(): PageSection[] {
  return getGettingStartedIndex().map((item) => docs[item.slug]);
}
