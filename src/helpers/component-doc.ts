import type { ComponentDoc, TocItem } from "@/lib/docs/types";

interface ComponentDocInput extends Omit<ComponentDoc, "toc"> {
  toc?: TocItem[];
}

export function createComponentDoc(input: ComponentDocInput): ComponentDoc {
  const { toc = [], examples } = input;

  const enhancedToc = [...toc];

  const examplesIndex = enhancedToc.findIndex((item) => item.id === "examples");

  if (examplesIndex !== -1 && examples?.length) {
    const exampleItems: TocItem[] = examples.map((example) => ({
      id: example.id,
      title: example.title,
      level: 3,
    }));

    enhancedToc.splice(examplesIndex + 1, 0, ...exampleItems);
  }

  return {
    ...input,
    toc: enhancedToc,
  };
}
