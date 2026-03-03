import Link from "next/link";

import type { BlockIndexItem } from "@/lib/docs/types";

type SidebarBlocksProps = {
  items: BlockIndexItem[];
  activeSlug?: string;
};

export function SidebarBlocks({ items, activeSlug }: SidebarBlocksProps) {
  if (!items.length) return null;

  // Group items by category
  const grouped = items.reduce<Record<string, BlockIndexItem[]>>((acc, item) => {
    const key = item.category;
    acc[key] = [...(acc[key] ?? []), item];
    return acc;
  }, {});

  return (
    <nav className="space-y-4">
      {Object.entries(grouped).map(([category, categoryItems]) => (
        <div key={category} className="space-y-2">
          <p className="text-primary text-xs font-semibold tracking-wide">
            {category}
          </p>
          <ul className="mt-3 space-y-1.5">
            {categoryItems.map((item) => {
              const isActive = item.slug === activeSlug;
              return (
                <li key={item.slug}>
                  <Link
                    href={`/docs/blocks/${item.slug}`}
                    className={`hover:border-border/70 hover:bg-accent/40 flex flex-col rounded-lg border border-transparent px-3 py-1.5 transition-colors ${
                      isActive
                        ? "border-border/80 bg-pittaya/80 hover:bg-pittaya/90 text-primary shadow-pittaya/20 shadow-lg"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    {item.description && (
                      <span className="text-muted-foreground mt-0.5 text-xs leading-tight">
                        {item.description}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
