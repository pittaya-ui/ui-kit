"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const skeletonVariants = cva(
  "bg-accent rounded-md overflow-hidden relative",
  {
    variants: {
      variant: {
        pulse: "animate-pulse",
        shimmer:
          "[--shimmer-duration:2.5s] before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_var(--shimmer-duration)_cubic-bezier(0.4,0,0.2,1)_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent dark:before:via-white/20",
      },
    },
    defaultVariants: {
      variant: "pulse",
    },
  }
);

export interface SkeletonProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
      <div
        data-slot="skeleton"
        className={cn(skeletonVariants({ variant }), className)}
        {...props}
      />
    </>
  );
}

export { Skeleton, skeletonVariants };
