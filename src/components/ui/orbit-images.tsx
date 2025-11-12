"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

interface OrbitImagesProps {
  title: string;
  buttonText: string;
  classNameButton?: string;
  outsideBorderColor?: string;
  middleBorderColor?: string;
  innerBorderColor?: string;
  images: string[];
}

function getAngleForIndex(index: number, total: number): number {
  if (total <= 0) return 0;
  return (2 * Math.PI * index) / total;
}

export function OrbitImages({
  title,
  buttonText,
  classNameButton,
  images,
  outsideBorderColor,
  middleBorderColor,
  innerBorderColor,
}: OrbitImagesProps) {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;

      const rawProgress = (start - rect.top) / (start - end);
      const progress = Math.max(0, Math.min(1, rawProgress));

      setAnimationProgress(progress);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const shouldStartRotation = animationProgress >= 1;

  useEffect(() => {
    if (shouldStartRotation) {
      const startRotation = () => {
        setRotationAngle((prev) => prev + 0.1);
        rotationRef.current = requestAnimationFrame(startRotation);
      };
      rotationRef.current = requestAnimationFrame(startRotation);
    } else {
      if (rotationRef.current) {
        cancelAnimationFrame(rotationRef.current);
        rotationRef.current = null;
      }
      setRotationAngle(0);
    }

    return () => {
      if (rotationRef.current) {
        cancelAnimationFrame(rotationRef.current);
        rotationRef.current = null;
      }
    };
  }, [shouldStartRotation]);

  // ✅ 1. RAIO RESPONSIVO
  const getResponsiveRadius = () => {
    if (typeof window === "undefined") return 300;
    if (window.innerWidth < 640) return 150; // Mobile
    if (window.innerWidth < 1024) return 300; // Tablet
    if (window.innerWidth < 1440) return 270; // Laptop
    return 300; // Desktop
  };
  const expandRadius = animationProgress * getResponsiveRadius();

  const getImagePosition = (baseAngle: number) => {
    const totalAngle = baseAngle + (rotationAngle * Math.PI) / 180;
    return {
      x: expandRadius * Math.cos(totalAngle),
      y: expandRadius * Math.sin(totalAngle),
    };
  };

  return (
    <div
      ref={containerRef}
      className="h-full px-4 sm:px-6 md:min-h-[100vh] lg:px-8"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center p-2 sm:p-4 lg:p-8">
        <div className="relative">
          <div
            className={cn(
              `flex h-[280px] w-[280px] items-center justify-center rounded-full transition-all duration-500 sm:h-[600px] sm:w-[600px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px]`,
              animationProgress > 0.6 && "border-pittaya/60 border-2",
              outsideBorderColor
            )}
          >
            <div
              className={cn(
                `relative flex h-[240px] w-[240px] items-center justify-center rounded-full transition-all duration-500 sm:h-[480px] sm:w-[480px] lg:h-[420px] lg:w-[420px] xl:h-[500px] xl:w-[500px]`,
                animationProgress > 0.2 && "border-pittaya/80 border-2",
                middleBorderColor
              )}
            >
              <div
                className={cn(
                  "border-pittaya relative flex h-[200px] w-[200px] items-center justify-center rounded-full border-2 p-0.5 sm:h-[400px] sm:w-[400px] lg:h-[340px] lg:w-[340px] xl:h-[400px] xl:w-[400px]",
                  innerBorderColor
                )}
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#ffffff] dark:bg-black">
                  {images.map((imageSrc, index) => {
                    const baseAngle = getAngleForIndex(index, images.length);
                    const position = getImagePosition(baseAngle);

                    return (
                      <div
                        key={`${imageSrc}-${index}`}
                        className="absolute z-0 h-16 w-16 overflow-hidden rounded-xl border-2 border-white shadow-lg sm:rounded-2xl sm:border-4 md:h-26 md:w-26 lg:h-24 lg:w-24 dark:border-gray-800"
                        style={{
                          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                          willChange: "transform",
                        }}
                      >
                        <Image
                          src={imageSrc}
                          alt={`Profile ${index + 1}`}
                          className="h-full w-full object-cover"
                          width={200}
                          height={200}
                        />
                      </div>
                    );
                  })}

                  <div
                    className="relative z-20 flex max-w-[160px] flex-col items-center justify-center gap-6 px-2 text-center transition-opacity duration-500 sm:max-w-[300px] sm:px-4 lg:max-w-xs"
                    style={{
                      opacity:
                        animationProgress > 0.5
                          ? (animationProgress - 0.5) * 2
                          : 0,
                    }}
                  >
                    <p className="text-center text-xs leading-tight text-gray-500 sm:leading-normal md:text-lg lg:text-base dark:text-gray-400">
                      {title}
                    </p>

                    <Button
                      variant={"default"}
                      className={cn(
                        "bg-pittaya shadow-pittaya/20 hover:bg-pittaya/80 rounded-full text-white shadow-lg",
                        classNameButton
                      )}
                    >
                      {buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
