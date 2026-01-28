"use client"

import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "peer group/switch inline-flex shrink-0 items-center rounded-full outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 border border-transparent shadow-xs focus-visible:ring-[3px]",
        liquidGlass: [
          "relative backdrop-blur-md border shadow-lg",
          "data-[state=unchecked]:bg-white/10 data-[state=unchecked]:border-white/20",
          "dark:data-[state=unchecked]:bg-white/5 dark:data-[state=unchecked]:border-white/10",
          "duration-500 ease-out",
        ],
      },
      size: {
        sm: "h-3.5 w-6",
        default: "h-[1.15rem] w-8",
        lg: "h-6 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full ring-0 transition-all",
  {
    variants: {
      variant: {
        default: "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground",
        liquidGlass: [
          "bg-gradient-to-br from-white to-white/80",
          "dark:from-white/90 dark:to-white/70",
          "data-[state=unchecked]:shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
          "relative before:absolute before:inset-0 before:rounded-full",
          "before:bg-gradient-to-br before:from-white/40 before:to-transparent",
          "duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        ],
      },
      size: {
        sm: "size-3",
        default: "size-4",
        lg: "size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Helper to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

interface SwitchProps extends 
  React.ComponentProps<typeof SwitchPrimitive.Root>,
  VariantProps<typeof switchVariants> {
  size?: "sm" | "default" | "lg"
  variant?: "default" | "liquidGlass"
  glowColor?: string // Hex color for glow effect (e.g., "#ff637e")
}

function Switch({
  className,
  size = "default",
  variant = "default",
  glowColor = "#ff637e",
  style,
  checked,
  onCheckedChange,
  ...props
}: SwitchProps) {
  const rgb = hexToRgb(glowColor);
  const rgbString = rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : "255, 99, 126";
  const rootRef = React.useRef<HTMLButtonElement>(null);
  const thumbRef = React.useRef<HTMLSpanElement>(null);

  // Apply dynamic styles based on checked state
  React.useEffect(() => {
    if (variant !== "liquidGlass" || !rootRef.current || !thumbRef.current) return;

    const root = rootRef.current;
    const thumb = thumbRef.current;

    const applyStyles = () => {
      const isChecked = root.getAttribute("data-state") === "checked";

      if (isChecked) {
        root.style.background = `linear-gradient(to right, rgba(${rgbString}, 0.3), rgba(${rgbString}, 0.2))`;
        root.style.borderColor = `rgba(${rgbString}, 0.5)`;
        root.style.boxShadow = `0 0 20px rgba(${rgbString}, 0.3)`;
        thumb.style.boxShadow = `0 0 12px rgba(${rgbString}, 0.6), 0 2px 8px rgba(0, 0, 0, 0.2)`;
      } else {
        root.style.background = "";
        root.style.borderColor = "";
        root.style.boxShadow = "";
        thumb.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      }
    };

    applyStyles();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-state") {
          applyStyles();
        }
      });
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-state"],
    });

    return () => observer.disconnect();
  }, [variant, rgbString]);

  return (
    <SwitchPrimitive.Root
      ref={rootRef}
      data-slot="switch"
      className={cn(
        switchVariants({ variant, size }),
        className
      )}
      style={style}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...props}
    >
      <SwitchPrimitive.Thumb
        ref={thumbRef}
        data-slot="switch-thumb"
        className={cn(
          switchThumbVariants({ variant, size }),
          "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
