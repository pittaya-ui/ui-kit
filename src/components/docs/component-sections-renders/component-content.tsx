"use client";

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
  return (
    <div className="max-w-none">
      <header className="space-y-4">
        <div className="text-muted-foreground flex items-center gap-3 text-sm">
          <span className="border-border/60 bg-card/80 rounded-full border px-3 py-1 font-medium tracking-wide">
            {doc.metadata.category}
          </span>
          {doc.metadata.status ? (
            <Badge
              variant={doc.metadata.status}
              className="rounded-full px-3 py-1 tracking-wide"
            >
              {doc.metadata.status}
            </Badge>
          ) : null}
        </div>
        <div>
          <h1 id={doc.slug} className="text-foreground text-4xl font-semibold">
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
