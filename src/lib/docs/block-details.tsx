import { loginBlock } from "@/components/docs/contents/blocks/login";
import { loginCarouselBlock } from "@/components/docs/contents/blocks/login-carousel";
import { loginLinesBlock } from "@/components/docs/contents/blocks/login-lines";
import { loginNeobrutalismBlock } from "@/components/docs/contents/blocks/login-neobrutalism";

import type { BlockDoc } from "./types";

const blockDocs: Record<string, BlockDoc> = {
  login: loginBlock,
  "login-carousel": loginCarouselBlock,
  "login-lines": loginLinesBlock,
  "login-neobrutalism": loginNeobrutalismBlock,
};

export function getBlockDoc(slug: string): BlockDoc | undefined {
  return blockDocs[slug];
}

export function getAllBlockDocs(): BlockDoc[] {
  return Object.values(blockDocs);
}
