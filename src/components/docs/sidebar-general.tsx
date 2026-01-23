import Link from "next/link";

import type { ComponentIndexItem, GettingStartedItem } from "@/lib/docs/types";

type SidebarGeneralProps = {
  items?: ComponentIndexItem[];
  activeSlug?: string;
  gettingStartedItems?: GettingStartedItem[];
};

export function SidebarGeneral({
  items,
  activeSlug,
  gettingStartedItems,
}: SidebarGeneralProps) {
  if (!items && !gettingStartedItems) {
    return null;
  }

  return (
    <nav className="relative max-h-[600px] overflow-y-auto scrollbar-hide">
      <div className="space-y-2 pr-4">
        <div>
          <p className="text-primary text-xs font-semibold tracking-wide">
            Getting Started
          </p>
          <ul className="mt-3 space-y-1.5">
            {gettingStartedItems?.map((item) => {
              const isActive = item.slug === activeSlug;
              return (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className={`hover:border-border/70 hover:bg-accent/40 flex flex-col rounded-lg border border-transparent px-3 py-1.5 transition-colors ${isActive ? "border-border/80 bg-pittaya/80 hover:bg-pittaya/90 text-primary shadow-pittaya/20 shadow-lg" : "text-muted-foreground"}`}
                  >
                    <span className="text-sm font-medium">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-primary text-xs font-semibold tracking-wide">
          Components
        </p>
        <ul className="mt-3 space-y-1.5">
          {items?.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <li key={item.slug}>
                <Link
                  href={`/docs/components/${item.slug}`}
                  className={`hover:border-border/70 hover:bg-accent/40 flex flex-col rounded-lg border border-transparent px-3 py-1.5 transition-colors ${isActive ? "border-border/80 bg-pittaya/80 hover:bg-pittaya/90 text-primary shadow-pittaya/20 shadow-lg" : "text-muted-foreground"}`}
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="from-background via-background/60 pointer-events-none sticky right-0 bottom-0 left-0 h-30 bg-gradient-to-t to-transparent" />
    </nav>
  );
}

