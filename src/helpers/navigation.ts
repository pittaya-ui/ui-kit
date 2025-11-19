import type { ComponentIndexItem } from "@/lib/docs/types";

interface AdjacentItems {
  previous: ComponentIndexItem | undefined;
  next: ComponentIndexItem | undefined;
}

/**
 * Finds the previous and next items in a list based on the current slug
 * @param items - Array of ComponentIndexItem
 * @param currentSlug - Current item slug
 * @returns Object containing the previous and next item
 */
export function getAdjacentItems(
  items: ComponentIndexItem[],
  currentSlug: string
): AdjacentItems {
  const currentIndex = items.findIndex((item) => item.slug === currentSlug);

  return {
    previous: items[currentIndex - 1],
    next: items[currentIndex + 1],
  };
}
