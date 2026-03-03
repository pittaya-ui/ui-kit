import { BreadcrumbContent } from "@/components/breadcrumb-content";
import type { BlockDoc } from "@/lib/docs/types";

import { Badge } from "../../ui/badge";
import { BlockExampleSection } from "./block-example-section";

type BlockContentProps = {
  doc: BlockDoc;
};

export function BlockContent({ doc }: BlockContentProps) {
  return (
    <div className="max-w-none">
      <header className="space-y-4">
        <div className="text-muted-foreground flex flex-col items-start justify-between gap-3 text-sm md:flex-row md:items-center">
          <BreadcrumbContent />
          <Badge className="rounded-full tracking-wide" variant="secondary">
            {doc.metadata.category}
          </Badge>
        </div>
        <div>
          <h1
            id={doc.slug}
            className="text-foreground text-4xl font-semibold tracking-tight"
          >
            {doc.metadata.name}
          </h1>
          <p className="text-muted-foreground text-md mt-3">
            {doc.metadata.description}
          </p>
        </div>
      </header>

      <BlockExampleSection preview={doc.preview} files={doc.files} />
    </div>
  );
}
