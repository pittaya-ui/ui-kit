import { announcementBadgeDoc } from "@/components/docs/contents/announcement-badge";
import { badgeDoc } from "@/components/docs/contents/badge";
import { buttonDoc } from "@/components/docs/contents/button";
import { cardDoc } from "@/components/docs/contents/card";
import { carouselDoc } from "@/components/docs/contents/carousel";
import { checkboxDoc } from "@/components/docs/contents/checkbox/checkbox";
import { commandDoc } from "@/components/docs/contents/command/command";
import { copyButtonDoc } from "@/components/docs/contents/copy-button/copy-button";
import { inputDoc } from "@/components/docs/contents/input/input";
import { installationSectionDoc } from "@/components/docs/contents/installation-section";
import { labelDoc } from "@/components/docs/contents/label/label";
import { multiSelectDoc } from "@/components/docs/contents/multi-select/multi-select";
import { orbitImagesDoc } from "@/components/docs/contents/orbit-images";
import { popoverDoc } from "@/components/docs/contents/popover";
import { radioGroupDoc } from "@/components/docs/contents/radio-group/radio-group";
import { skeletonDoc } from "@/components/docs/contents/skeleton/skeleton";
import { tabsDoc } from "@/components/docs/contents/tabs";
import { textareaDoc } from "@/components/docs/contents/textarea/textarea";

import type { ComponentDoc } from "./types";

const docs: Record<string, ComponentDoc> = {
  [announcementBadgeDoc.slug]: announcementBadgeDoc,
  [badgeDoc.slug]: badgeDoc,
  [buttonDoc.slug]: buttonDoc,
  [cardDoc.slug]: cardDoc,
  [carouselDoc.slug]: carouselDoc,
  [checkboxDoc.slug]: checkboxDoc,
  [commandDoc.slug]: commandDoc,
  [copyButtonDoc.slug]: copyButtonDoc,
  [inputDoc.slug]: inputDoc,
  [installationSectionDoc.slug]: installationSectionDoc,
  [labelDoc.slug]: labelDoc,
  [multiSelectDoc.slug]: multiSelectDoc,
  [orbitImagesDoc.slug]: orbitImagesDoc,
  [popoverDoc.slug]: popoverDoc,
  [radioGroupDoc.slug]: radioGroupDoc,
  [skeletonDoc.slug]: skeletonDoc,
  [tabsDoc.slug]: tabsDoc,
  [textareaDoc.slug]: textareaDoc,
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return docs[slug];
}

export function getAllComponentDocs(): ComponentDoc[] {
  return Object.values(docs);
}
