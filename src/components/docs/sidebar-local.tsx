"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { TocItem } from "@/lib/docs/types";
import { cn } from "@/lib/utils";

type SidebarLocalProps = {
  toc: TocItem[];
};

export function SidebarLocal({ toc }: SidebarLocalProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });
  const listRef = useRef<HTMLUListElement>(null);

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
        // Aumentei a área de detecção para garantir que seções menores ou no final da página sejam capturadas.
        // -10% no topo para ignorar headers fixos.
        // -40% na base para focar na parte superior/central da tela.
        rootMargin: "-10% 0px -40% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    // Fallback para garantir que o último item seja ativado se chegarmos ao fim da página
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        if (toc.length > 0) {
          setActiveId(toc[toc.length - 1].id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toc]);

  useEffect(() => {
    if (activeId && listRef.current) {
      const activeLink = listRef.current.querySelector(
        `[data-id="${activeId}"]`
      );

      if (activeLink) {
        const listRect = listRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        setIndicatorStyle({
          top: linkRect.top - listRect.top,
          height: linkRect.height,
          opacity: 1,
        });
      }
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeId]);

  if (!toc.length) {
    return null;
  }

  return (
    <nav className="relative space-y-3 pl-2">
      <p className="text-foreground pl-4 text-sm font-medium tracking-wide">
        On This Page
      </p>
      <div className="relative pl-4">
        {/* Track Line */}
        <div className="bg-border absolute top-0 bottom-0 left-0 w-[1px]" />

        {/* Tracing Beam Indicator */}
        <div
          className="absolute left-0 w-[2px] rounded-full bg-[var(--pittaya)] shadow-[0_0_10px_var(--pittaya)] transition-all duration-300 ease-in-out"
          style={{
            top: indicatorStyle.top,
            height: indicatorStyle.height,
            opacity: indicatorStyle.opacity,
          }}
        />

        <ul ref={listRef} className="space-y-1 text-sm">
          {toc.map((item) => (
            <li key={item.id} className={cn(item.level === 3 && "pl-4")}>
              <Link
                href={`#${item.id}`}
                data-id={item.id}
                className={cn(
                  "block rounded-md px-2 py-1.5 transition-colors duration-200",
                  activeId === item.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setActiveId(item.id)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
