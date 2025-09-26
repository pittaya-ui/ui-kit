"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { TocItem } from "@/lib/docs/types";

type SidebarLocalProps = {
  toc: TocItem[];
};

export function SidebarLocal({ toc }: SidebarLocalProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!headings.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 1],
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, [toc]);

  if (!toc.length) {
    return null;
  }

  return (
    <nav className="space-y-3">
      <p className="text-xs font-semibold tracking-wide text-muted-foreground">
        On This Page
      </p>
      <ul className="space-y-1 text-sm">
        {toc.map((item) => (
          <li key={item.id} className={item.level === 3 ? "ml-3" : undefined}>
            <Link
              href={`#${item.id}`}
              className={`block rounded-md px-3 py-1.5 transition-colors hover:bg-accent/50 ${activeId === item.id ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

