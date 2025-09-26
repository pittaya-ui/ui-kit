import type { TocItem } from "./types";

const slugify = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

export function getTocFromMarkdown(source: string): TocItem[] {
  return source
    .split(/\r?\n/)
    .map((line) => {
      const match = /^(#{2,3})\s+(.*)/.exec(line.trim());
      if (!match) {
        return null;
      }

      const [, hashes, title] = match;
      const level = hashes.length as TocItem["level"];

      return {
        id: slugify(title),
        title: title.trim(),
        level,
      } satisfies TocItem;
    })
    .filter((item): item is TocItem => Boolean(item));
}

