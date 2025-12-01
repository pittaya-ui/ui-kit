"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  showCounter?: boolean;
  loop?: boolean;
}

export function Carousel({
  children,
  className,
  autoplay = false,
  autoplayInterval = 3000,
  showDots = true,
  showArrows = true,
  showCounter = false,
  loop = true,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, skipSnaps: false },
    autoplay
      ? [Autoplay({ delay: autoplayInterval, stopOnInteraction: true })]
      : []
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const items = React.Children.toArray(children);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <div className={cn("group relative w-full", className)}>
      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex touch-pan-y">
          {items.map((item, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%]">
              {item}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <Button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            size="icon"
            variant="outline"
            className={cn(
              "absolute top-1/2 left-4 z-10 -translate-y-1/2",
              "h-12 w-12 rounded-full backdrop-blur-md",
              "bg-background/80 border-border/50 border-2",
              "transition-all duration-300",
              "hover:scale-110",
              "disabled:opacity-30 disabled:hover:scale-100",
              "opacity-0 group-hover:opacity-100",
              "shadow-lg hover:shadow-xl"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            size="icon"
            variant="outline"
            className={cn(
              "absolute top-1/2 right-4 z-10 -translate-y-1/2",
              "h-12 w-12 rounded-full backdrop-blur-md",
              "bg-background/80 border-border/50 border-2",
              "transition-all duration-300",
              "hover:scale-110",
              "disabled:opacity-30 disabled:hover:scale-100",
              "opacity-0 group-hover:opacity-100",
              "shadow-lg hover:shadow-xl"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {(showDots || showCounter) && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {showDots && (
            <div className="bg-background/80 border-border/50 flex items-center gap-2 rounded-full border px-4 py-2 shadow-lg backdrop-blur-md">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "transition-all duration-300",
                    "rounded-full",
                    index === selectedIndex
                      ? "bg-primary h-2 w-8"
                      : "bg-muted-foreground/40 hover:bg-muted-foreground/70 h-2 w-2 hover:scale-125"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === selectedIndex}
                />
              ))}
            </div>
          )}

          {showCounter && (
            <div className="bg-background/80 border-border/50 rounded-full border px-3 py-2 shadow-lg backdrop-blur-md">
              <span className="text-xs font-medium tabular-nums">
                {selectedIndex + 1}/{items.length}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function CarouselItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("w-full", className)}>{children}</div>;
}
