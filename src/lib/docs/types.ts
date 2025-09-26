import type { ReactNode } from "react";

export type ComponentIndexItem = {
  slug: string;
  name: string;
  category: string;
  status?: "beta" | "stable" | "deprecated";
  tags?: string[];
};

export type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type DocSection = {
  id: string;
  title: string;
  level: TocItem["level"];
  description?: string;
  content: ReactNode;
};

export type DocProp = {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description: string;
};

export type DocExample = {
  id: string;
  title: string;
  description: string;
  code: string;
  preview: ReactNode;
};

export type ComponentDoc = {
  slug: string;
  metadata: {
    name: string;
    description: string;
    category: string;
    status?: "beta" | "stable" | "deprecated";
  };
  sections: DocSection[];
  props: DocProp[];
  examples: DocExample[];
  toc: TocItem[];
};

