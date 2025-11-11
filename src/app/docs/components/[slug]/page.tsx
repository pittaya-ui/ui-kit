import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComponentContent } from "@/components/docs/component-content";
import { DocsShell } from "@/components/docs/docs-shell";
import { SidebarGeneral } from "@/components/docs/sidebar-general";
import { SidebarLocal } from "@/components/docs/sidebar-local";
import {
  getAllComponentDocs,
  getComponentDoc,
} from "@/lib/docs/component-details";
import { getComponentsIndex } from "@/lib/docs/components-index";

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

  return (
    <DocsShell
      sidebar={<SidebarGeneral items={index} activeSlug={slug} />}
      secondarySidebar={<SidebarLocal toc={doc.toc} />}
    >
      <ComponentContent doc={doc} />
    </DocsShell>
  );
}
