import { buttonDoc } from "@/components/docs/contents/button";
import { installationSectionDoc } from "@/components/docs/contents/installation-section";
import { orbitImagesDoc } from "@/components/docs/contents/orbit-images";

import type { ComponentDoc } from "./types";

const docs: Record<string, ComponentDoc> = {
  [buttonDoc.slug]: buttonDoc,
  [installationSectionDoc.slug]: installationSectionDoc,
  [orbitImagesDoc.slug]: orbitImagesDoc,
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return docs[slug];
}

export function getAllComponentDocs(): ComponentDoc[] {
  return Object.values(docs);
}
