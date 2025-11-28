
import { Introduction } from "@/components/docs/getting-started/introduction";

import { getGettingStartedIndex } from "./getting-start-index";
import type { PageSection } from "./types";

const docs: Record<string, PageSection> = {
  [Introduction.slug]: Introduction,

};  

export function getGettingStartPage(slug: string): PageSection | undefined {
  return docs[slug];
}

export function getAllGettingStartedPages(): PageSection[] {
  return getGettingStartedIndex().map((item) => docs[item.slug]);
}
