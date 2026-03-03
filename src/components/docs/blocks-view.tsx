"use client";

import { useState } from "react";

import type { BlockDoc } from "@/lib/docs/types";

import { Badge } from "../ui/badge";
import { BlockExampleSection } from "./block-sections-renders/block-example-section";

type BlocksViewProps = {
  blocks: BlockDoc[];
};

export function BlocksView({ blocks }: BlocksViewProps) {
  const categories = [
    "All",
    ...Array.from(new Set(blocks.map((b) => b.metadata.category))),
  ];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? blocks
      : blocks.filter((b) => b.metadata.category === active);

  return (
    <div className="flex flex-col gap-10">
      {/* ── Category navbar ── */}
      <nav className="border-border/50 flex flex-wrap gap-1 border-b pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={[
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              cat === active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:bg-accent hover:text-foreground",
            ].join(" ")}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* ── Block list ── */}
      <div className="flex flex-col gap-16">
        {filtered.map((block) => (
          <section key={block.slug} id={block.slug}>
            {/* Block header */}
            <div className="mb-4 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h2 className="text-foreground text-xl font-semibold">
                  {block.metadata.name}
                </h2>
                <Badge
                  variant="secondary"
                  className="rounded-full text-xs tracking-wide"
                >
                  {block.metadata.category}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                {block.metadata.description}
              </p>
            </div>

            {/* Preview + code */}
            <BlockExampleSection
              preview={block.preview}
              files={block.files}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
