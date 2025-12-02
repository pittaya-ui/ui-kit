import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComponentContent } from "@/components/docs/component-sections-renders/component-content";
import { ComponentsNavigation } from "@/components/docs/components-navigation";
import { DocsShell } from "@/components/docs/docs-shell";
import { SidebarGeneral } from "@/components/docs/sidebar-general";
import { SidebarLocal } from "@/components/docs/sidebar-local";
import { getAdjacentItems } from "@/helpers/navigation";
import {
  getAllComponentDocs,
  getComponentDoc,
} from "@/lib/docs/component-details";
import { getComponentsIndex } from "@/lib/docs/components-index";
import { getGettingStartedIndex } from "@/lib/docs/getting-start-index";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type GenerateStaticParamsResult = {
  slug: string;
};

export function generateStaticParams(): GenerateStaticParamsResult[] {
  return getAllComponentDocs().map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getComponentDoc(slug);

  if (!doc) {
    return {
      title: "Pittaya UI | Component Not Found",
    };
  }

  return {
    title: `Pittaya UI | ${doc.metadata.name}`,
    description: doc.metadata.description,
  };
}

export default async function ComponentDocsPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getComponentDoc(slug);

  if (!doc) {
    notFound();
  }

  const index = getComponentsIndex();
  const gettingStartedItems = getGettingStartedIndex();

  const { previous, next } = getAdjacentItems(index, slug);

  const tocWithExamples = [...doc.toc];
  const examplesIndex = tocWithExamples.findIndex(
    (item) => item.id === "examples"
  );

  if (examplesIndex !== -1 && doc.examples?.length) {
    const exampleItems = doc.examples.map((example) => ({
      id: example.id,
      title: example.title,
      level: 3 as const,
    }));
    tocWithExamples.splice(examplesIndex + 1, 0, ...exampleItems);
  }

  return (
    <DocsShell
      sidebar={
        <SidebarGeneral
          items={index}
          gettingStartedItems={gettingStartedItems}
          activeSlug={slug}
        />
      }
      secondarySidebar={<SidebarLocal toc={tocWithExamples} />}
    >
      <ComponentContent doc={doc} />
      <ComponentsNavigation previous={previous} next={next} />
    </DocsShell>
  );
}
