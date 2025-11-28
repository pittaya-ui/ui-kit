"use client";

import { Fragment } from "react";

import { Separator } from "@/components/ui/separator";
import type { DocProp } from "@/lib/docs/types";

type PropertiesSectionProps = {
  props: DocProp[];
  title?: string;
  description?: string;
};

export function PropertiesSection({
  props,
  title = "Properties",
  description = "TSX interface that combines variants and default attributes.",
}: PropertiesSectionProps) {
  if (!props.length) {
    return null;
  }

  return (
    <section id="properties" className="mt-12 space-y-4">
      <div className="space-y-2">
        <h2 className="text-foreground text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="border-border/60 bg-card/60 overflow-hidden rounded-2xl border shadow-sm backdrop-blur">
        <table className="w-full border-collapse overflow-x-auto text-sm">
          <thead className="border-border/60 border-b bg-rose-500/30 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Default</th>
              <th className="px-4 py-3 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <Fragment key={prop.name}>
                <tr className="border-border/50 border-b">
                  <td className="text-foreground px-4 py-3 font-medium">
                    {prop.name}
                    {prop.required ? (
                      <span className="bg-destructive/10 text-destructive ml-2 rounded-full px-2 py-0.5 text-xs font-medium">
                        Required
                      </span>
                    ) : null}
                  </td>
                  <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                    {prop.type}
                  </td>
                  <td className="text-muted-foreground px-4 py-3">
                    {prop.defaultValue ?? "-"}
                  </td>
                  <td className="text-muted-foreground px-4 py-3">
                    {prop.description}
                  </td>
                </tr>
                {index === props.length - 1 ? null : (
                  <tr>
                    <td colSpan={4} className="px-0">
                      <Separator className="mx-4" />
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

