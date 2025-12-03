"use client";

import { usePathname } from "next/navigation";

import { BreadcrumbContent } from "@/components/breadcrumb-content";
import type { ComponentDoc } from "@/lib/docs/types";

import { Badge } from "../../ui/badge";
import { InstallationSection } from "../../ui/installation-section";
import { ContentSections } from "./content-sections";
import { ExamplesSection } from "./examples-section";
import { PropertiesSection } from "./properties-section";

type ComponentContentProps = {
  doc: ComponentDoc;
};

export function ComponentContent({ doc }: ComponentContentProps) {
  const pathname = usePathname();
  const pathPages = pathname.split("/").filter(Boolean);
  return (
    <div className="max-w-none">
      <header className="space-y-4">
        <div className="text-muted-foreground flex flex-col items-start justify-between gap-3 text-sm md:flex-row md:items-center">
          <BreadcrumbContent pathPages={pathPages} />
          <div className="flex items-center gap-2">
            <Badge className="rounded-full tracking-wide" variant="secondary">
              {doc.metadata.category}
            </Badge>
            {doc.metadata.status ? (
              <Badge
                variant={doc.metadata.status}
                className="rounded-full tracking-wide"
              >
                {doc.metadata.status}
              </Badge>
            ) : null}
          </div>
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

      <InstallationSection
        componentSlug={doc.slug}
        availableCommands={{
          npm: "npx pittaya@latest add",
          yarn: "yarn pittaya@latest add",
          pnpm: "pnpm dlx pittaya@latest add",
        }}
      />

      <ContentSections sections={doc.sections} />

      <ExamplesSection examples={doc.examples} />

      <PropertiesSection props={doc.props} />
    </div>
  );
}
