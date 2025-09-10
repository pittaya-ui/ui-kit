"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set mounted to true and get initial size
    setMounted(true);
    handleResize();

    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ...windowSize, mounted };
};

interface PittayaBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const PittayaBackground = ({
  children,
  className,
}: PittayaBackgroundProps) => {
  const { width, height, mounted } = useWindowSize();

  return (
    <div className={cn("relative min-h-screen w-full", className)}>
      {/* Background Animation Layer */}
      <div className="absolute inset-0 z-0">
        {mounted ? (
          <UnicornScene
            production={true}
            projectId="cbmTT38A0CcuYxeiyj5H"
            width={width}
            height={height}
          />
        ) : (
          <div style={{ width: "100vw", height: "100vh" }} />
        )}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
