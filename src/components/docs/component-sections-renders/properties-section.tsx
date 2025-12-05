"use client";

import { Badge } from "@/components/ui/badge";
import type { DocProp } from "@/lib/docs/types";
import { cn } from "@/lib/utils";

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

  // Helper to color the types like in an IDE
  const getTypeColor = (type: string) => {
    if (type.includes("string")) return "text-green-600 dark:text-green-400";
    if (type.includes("boolean")) return "text-blue-600 dark:text-blue-400";
    if (type.includes("number")) return "text-orange-600 dark:text-orange-400";
    if (type.includes("=>")) return "text-purple-600 dark:text-purple-400";
    return "text-slate-600 dark:text-slate-400";
  };

  return (
    <section id="properties" className="mt-12 scroll-mt-20 space-y-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
        <p className="text-muted-foreground pl-3 text-base">{description}</p>
      </div>

      <div className="bg-card ring-border/50 overflow-hidden rounded-xl border shadow-md ring-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-rose-500/30">
              <tr className="border-border/60 border-b">
                <th className="text-foreground/80 h-12 px-6 align-middle font-semibold">
                  Prop
                </th>
                <th className="text-foreground/80 h-12 px-6 align-middle font-semibold">
                  Type
                </th>
                <th className="text-foreground/80 h-12 px-6 align-middle font-semibold">
                  Default
                </th>
                <th className="text-foreground/80 h-12 w-1/3 px-6 align-middle font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-border/40 divide-y p-6">
              {props.map((prop) => (
                <tr
                  key={prop.name}
                  className="group hover:bg-muted/40 transition-all"
                >
                  <td className="align-center px-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <code>{prop.name}</code>
                        {prop.required && (
                          <Badge
                            variant="default"
                            className="bg-destructive/10 text-destructive ml-2 rounded-full border-red-500 px-2 py-0.5 text-xs font-medium"
                          >
                            Required
                          </Badge>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="align-center px-6">
                    <code
                      className={cn(
                        "bg-muted/50 rounded-md px-2 py-1 font-mono text-xs font-medium",
                        getTypeColor(prop.type)
                      )}
                    >
                      {prop.type.replace(/"/g, "'")}
                    </code>
                  </td>
                  <td className="align-center px-6">
                    {prop.defaultValue ? (
                      <code className="border-border/50 bg-background text-muted-foreground rounded-md border px-2 py-1 font-mono text-xs shadow-sm">
                        {prop.defaultValue.replace(/"/g, "'")}
                      </code>
                    ) : (
                      <span className="text-muted-foreground/40 text-xs font-medium">
                        —
                      </span>
                    )}
                  </td>
                  <td className="text-muted-foreground px-4 py-3 leading-snug">
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
