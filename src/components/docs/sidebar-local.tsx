"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { TocItem } from "@/lib/docs/types";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Card } from "../ui/card";

type SidebarLocalProps = {
  toc: TocItem[];
};

export function SidebarLocal({ toc }: SidebarLocalProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackPathRef = useRef<SVGPathElement>(null);

  const [svgPath, setSvgPath] = useState("");
  const [itemLengths, setItemLengths] = useState<
    Record<string, { start: number; end: number }>
  >({});

  // Use dasharray to animate the active segment along the curve
  const [activeBeamStyle, setActiveBeamStyle] = useState<{
    dashArray: string;
    dashOffset: number;
    opacity: number;
  }>({ dashArray: "0 10000", dashOffset: 0, opacity: 0 });

  // Intersection Observer Logic
  useEffect(() => {
    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -40% 0px", threshold: 0 }
    );

    headings.forEach((heading) => observer.observe(heading));

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        if (toc.length > 0) setActiveId(toc[toc.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toc]);

  // Measure and Construct Path
  useEffect(() => {
    if (!listRef.current || !toc.length) return;

    const calculatePath = () => {
      const listItems = Array.from(
        listRef.current?.querySelectorAll("a") || []
      );
      if (!listItems.length) return;

      let path = "";
      let lastX = 0;
      let lastY = 0;

      listItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const listRect = listRef.current!.getBoundingClientRect();

        // Calculate relative position
        const relativeTop = rect.top - listRect.top;
        const relativeHeight = rect.height;

        // Indentation logic
        const tocItem = toc[index];
        const currentX = tocItem.level === 3 ? 16 : 0;

        if (index === 0) {
          path += `M ${currentX} ${0} L ${currentX} ${relativeTop}`;
          lastY = relativeTop;
          lastX = currentX;
        }

        if (lastX !== currentX) {
          // Smooth S-Curve Transition using full vertical gap
          const verticalGap = relativeTop - lastY;
          const controlY1 = lastY + verticalGap / 2;
          const controlY2 = relativeTop - verticalGap / 2;
          path += ` C ${lastX} ${controlY1} ${currentX} ${controlY2} ${currentX} ${relativeTop}`;
        } else {
          path += ` L ${currentX} ${relativeTop}`;
        }

        // Vertical bar for item
        path += ` L ${currentX} ${relativeTop + relativeHeight}`;

        lastX = currentX;
        lastY = relativeTop + relativeHeight;
      });

      setSvgPath(path);
    };

    calculatePath();
    const resizeObserver = new ResizeObserver(calculatePath);
    resizeObserver.observe(listRef.current);
    return () => resizeObserver.disconnect();
  }, [toc]);

  // Calculate lengths along the path for each item
  useEffect(() => {
    if (!svgPath || !listRef.current || !trackPathRef.current) return;

    const pathEl = trackPathRef.current;
    const totalLength = pathEl.getTotalLength();
    const lengths: Record<string, { start: number; end: number }> = {};

    const listItems = Array.from(listRef.current.querySelectorAll("a"));

    // Helper to find length at a specific Y coordinate
    const findLengthAtY = (targetY: number, startSearch: number = 0) => {
      let low = startSearch;
      let high = totalLength;
      let bestLen = startSearch;

      for (let i = 0; i < 16; i++) {
        const mid = (low + high) / 2;
        const point = pathEl.getPointAtLength(mid);
        if (point.y < targetY) {
          low = mid;
          bestLen = mid;
        } else {
          high = mid;
        }
      }
      return bestLen;
    };

    let lastSearchEnd = 0;
    const listRect = listRef.current.getBoundingClientRect();

    listItems.forEach((item, index) => {
      const tocItem = toc[index];
      const rect = item.getBoundingClientRect();
      const relativeTop = rect.top - listRect.top;
      const relativeBottom = relativeTop + rect.height;

      // Find where this item starts and ends on the path
      const startLen = findLengthAtY(relativeTop, lastSearchEnd);
      const endLen = findLengthAtY(relativeBottom, startLen);

      lengths[tocItem.id] = { start: startLen, end: endLen };
      lastSearchEnd = endLen;
    });

    setItemLengths(lengths);
  }, [svgPath, toc]);

  // Update Active Indicator using Stroke Dasharray
  useEffect(() => {
    if (activeId && itemLengths[activeId] && trackPathRef.current) {
      const { start, end } = itemLengths[activeId];
      const totalLength = trackPathRef.current.getTotalLength();
      const segmentLength = end - start;

      // dasharray: "segmentLength gapLength"
      // dashoffset: -startLength (shifts the dash to the correct start position)
      setActiveBeamStyle({
        dashArray: `${segmentLength} ${totalLength}`,
        dashOffset: -start,
        opacity: 1,
      });
    } else {
      setActiveBeamStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeId, itemLengths]);

  if (!toc.length) return null;

  return (
    <div className="flex flex-col gap-6">
      <nav className="flex h-full max-h-[calc(100vh-9rem)] flex-col gap-3 pl-2">
        <p className="text-foreground shrink-0 pl-4 text-xs font-medium tracking-wide">
          On This Page
        </p>

        {/* Scrollable Container */}
        <div
          className="relative flex-1 overflow-y-auto pr-2 pl-4 [scrollbar-width:thin]"
          ref={scrollContainerRef}
        >
          {/* Wrapper ensures SVG and Content scroll together */}
          <div className="relative min-h-full pb-4">
            {/* SVG Track */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-[24px]">
              <svg className="h-full w-full overflow-visible">
                {/* Static Track (Reference for length calculation) */}
                <path
                  ref={trackPathRef}
                  d={svgPath}
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300 ease-in-out"
                />
                {/* Active Beam Segment - Overlay using Dasharray */}
                <path
                  d={svgPath}
                  fill="none"
                  stroke="var(--pittaya)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-500 ease-in-out"
                  style={{
                    opacity: activeBeamStyle.opacity,
                    strokeDasharray: activeBeamStyle.dashArray,
                    strokeDashoffset: activeBeamStyle.dashOffset,
                    filter: "drop-shadow(0 0 3px var(--pittaya))",
                  }}
                />
              </svg>
            </div>

            <ul ref={listRef} className="space-y-1 text-sm">
              {toc.map((item, index) => {
                // Add extra spacing before sub-items (level 3) to soften the curve
                const isLevelChange =
                  index > 0 && toc[index - 1].level !== item.level;

                return (
                  <li
                    key={item.id}
                    className={cn(
                      item.level === 3 && "pl-4",
                      isLevelChange && "mt-4" // Adds breathing room for curves
                    )}
                  >
                    <Link
                      href={`#${item.id}`}
                      data-id={item.id}
                      className={cn(
                        "block rounded-md px-4 py-1.5 transition-colors duration-200",
                        activeId === item.id
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setActiveId(item.id)}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      <Card
        variant="shadowRight"
        shadowColor="#b8ff01"
        className="group relative flex flex-col gap-3 overflow-hidden p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
      >
        <div className="relative z-10 flex flex-col gap-3">
          <div className="h-8 w-fit">
            <Image
              src={"/AM-I-ON_-HORIZONTAL-WHITE-GREEN.svg"}
              alt="Am I On"
              width={140}
              height={35}
              className="h-full w-auto object-contain"
            />
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed">
            A unified platform to monitor websites, detect outages, and alert
            the right teams instantly.
          </p>

          <Button
            variant="default"
            size="sm"
            className="w-full bg-[#b8ff01] font-semibold text-black hover:bg-[#a3e600]"
            asChild
          >
            <Link
              href="https://amion.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </Link>
          </Button>
        </div>

        <div className="pointer-events-none absolute -right-5 -bottom-5 opacity-10 grayscale transition-all duration-500 group-hover:opacity-20 group-hover:grayscale-0">
          <Image
            src={"/AM-I-ON_-ICON-GREEN.svg"}
            alt="Decorative Icon"
            width={100}
            height={100}
            className="-rotate-12"
          />
        </div>
      </Card>
    </div>
  );
}
