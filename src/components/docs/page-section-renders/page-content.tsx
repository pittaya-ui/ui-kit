import { PageSection } from "@/lib/docs/types";

import { PageSectionComponent } from "./page-section";

type PageContentProps = {
  doc: PageSection;
};

export function PageContent({ doc }: PageContentProps) {
  return (
    <div className="max-w-none">
      <header className="space-y-4">
        <div>
          <h1 id={doc.slug} className="text-foreground text-4xl font-semibold">
            {doc.metadata.name}
          </h1>
          <p className="text-muted-foreground text-md mt-3">
            {doc.metadata.description}
          </p>
        </div>
      </header>
      <PageSectionComponent pageSections={doc.sections} />
    </div>
  );
}
