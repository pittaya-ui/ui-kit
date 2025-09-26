import Link from "next/link";

import type { ComponentIndexItem } from "@/lib/docs/types";

type SidebarGeneralProps = {
  items: ComponentIndexItem[];
  activeSlug?: string;
};

export function SidebarGeneral({ items, activeSlug }: SidebarGeneralProps) {
  return (
    <nav className="space-y-4">
      <div>
        <p className="text-xs font-semibold  tracking-wide text-muted-foreground">
          Components
        </p>
        <ul className="mt-3 space-y-1.5">
          {items.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <li key={item.slug}>
                <Link
                  href={`/docs/components/${item.slug}`}
                  className={`flex flex-col rounded-lg border border-transparent px-3 py-1.5 transition-colors hover:border-border/70 hover:bg-accent/40 ${isActive ? "border-border/80 bg-primary/10 text-primary" : "text-muted-foreground"}`}
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

