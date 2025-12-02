import { announcementBadgeDoc } from "@/components/docs/contents/announcement-badge";
import { buttonDoc } from "@/components/docs/contents/button";
import { cardDoc } from "@/components/docs/contents/card";
import { carouselDoc } from "@/components/docs/contents/carousel";
import { copyButtonDoc } from "@/components/docs/contents/copy-button/copy-button";
import { installationSectionDoc } from "@/components/docs/contents/installation-section";
import { orbitImagesDoc } from "@/components/docs/contents/orbit-images";

import type { ComponentDoc } from "./types";

const docs: Record<string, ComponentDoc> = {
  [announcementBadgeDoc.slug]: announcementBadgeDoc,
  [buttonDoc.slug]: buttonDoc,
  [cardDoc.slug]: cardDoc,
  [carouselDoc.slug]: carouselDoc,
  [copyButtonDoc.slug]: copyButtonDoc,
  [installationSectionDoc.slug]: installationSectionDoc,
  [orbitImagesDoc.slug]: orbitImagesDoc,
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return docs[slug];
}

export function getAllComponentDocs(): ComponentDoc[] {
  return Object.values(docs);
}
