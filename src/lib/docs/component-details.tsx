import { buttonDoc } from "@/components/docs/contents/button";
import { installationSectionDoc } from "@/components/docs/contents/installation-section";

import type { ComponentDoc } from "./types";

const docs: Record<string, ComponentDoc> = {
  [buttonDoc.slug]: buttonDoc,
  [installationSectionDoc.slug]: installationSectionDoc,
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return docs[slug];
}

export function getAllComponentDocs(): ComponentDoc[] {
  return Object.values(docs);
}
