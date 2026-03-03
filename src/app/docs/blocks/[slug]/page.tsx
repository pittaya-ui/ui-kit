import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlockContent } from "@/components/docs/block-sections-renders/block-content";
import { DocsShell } from "@/components/docs/docs-shell";
import { SidebarBlocks } from "@/components/docs/sidebar-blocks";
import { getAllBlockDocs, getBlockDoc } from "@/lib/docs/block-details";
import { getBlocksIndex } from "@/lib/docs/blocks-index";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlockDocs().map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getBlockDoc(slug);
  if (!doc) return { title: "Pittaya UI | Block Not Found" };
  return {
    title: `Pittaya UI | ${doc.metadata.name}`,
    description: doc.metadata.description,
  };
}

export default async function BlockDocsPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getBlockDoc(slug);
  if (!doc) notFound();

  const blocks = getBlocksIndex();

  return (
    <div className="flex gap-6 lg:grid lg:grid-cols-[260px_minmax(0,1fr)]">
      <DocsShell sidebar={<SidebarBlocks items={blocks} activeSlug={slug} />}>
        <BlockContent doc={doc} />
      </DocsShell>
    </div>
  );
}
