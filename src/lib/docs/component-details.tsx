import { announcementBadgeDoc } from "@/components/docs/contents/announcement-badge";
import { badgeDoc } from "@/components/docs/contents/badge";
import { buttonDoc } from "@/components/docs/contents/button";
import { cardDoc } from "@/components/docs/contents/card";
import { carouselDoc } from "@/components/docs/contents/carousel";
import { commandDoc } from "@/components/docs/contents/command/command";
import { copyButtonDoc } from "@/components/docs/contents/copy-button/copy-button";
import { installationSectionDoc } from "@/components/docs/contents/installation-section";
import { multiSelectDoc } from "@/components/docs/contents/multi-select/multi-select";
import { orbitImagesDoc } from "@/components/docs/contents/orbit-images";
import { popoverDoc } from "@/components/docs/contents/popover";
import { tabsDoc } from "@/components/docs/contents/tabs";

import type { ComponentDoc } from "./types";

const docs: Record<string, ComponentDoc> = {
  [announcementBadgeDoc.slug]: announcementBadgeDoc,
  [badgeDoc.slug]: badgeDoc,
  [buttonDoc.slug]: buttonDoc,
  [cardDoc.slug]: cardDoc,
  [carouselDoc.slug]: carouselDoc,
  [commandDoc.slug]: commandDoc,
  [copyButtonDoc.slug]: copyButtonDoc,
  [installationSectionDoc.slug]: installationSectionDoc,
  [multiSelectDoc.slug]: multiSelectDoc,
  [orbitImagesDoc.slug]: orbitImagesDoc,
  [popoverDoc.slug]: popoverDoc,
  [tabsDoc.slug]: tabsDoc,
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return docs[slug];
}

export function getAllComponentDocs(): ComponentDoc[] {
  return Object.values(docs);
}
