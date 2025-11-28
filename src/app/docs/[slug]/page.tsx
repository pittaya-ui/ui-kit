import { notFound } from "next/navigation";

import { DocsShell } from "@/components/docs/docs-shell";
import { PageContent } from "@/components/docs/page-section-renders/page-content";
import { SidebarGeneral } from "@/components/docs/sidebar-general";
import { SidebarLocal } from "@/components/docs/sidebar-local";
import { getComponentsIndex } from "@/lib/docs/components-index";
import { getGettingStartedIndex } from "@/lib/docs/getting-start-index";
import { getGettingStartPage } from "@/lib/docs/getting-start-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ComponentDocsPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getGettingStartPage(slug);

  if (!doc) {
    notFound();
  }

  const gettingStartedItems = getGettingStartedIndex();
  const componentsIndex = getComponentsIndex();

  return (
    <DocsShell
      sidebar={
        <SidebarGeneral
          gettingStartedItems={gettingStartedItems}
          items={componentsIndex}
          activeSlug={slug}
        />
      }
      secondarySidebar={<SidebarLocal toc={doc.toc ?? []} />}
    >
      <PageContent doc={doc} />
      
    </DocsShell>
  );
}
