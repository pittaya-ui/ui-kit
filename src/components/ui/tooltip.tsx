"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

function TooltipContentAnimated({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 8 };
  const rotate = useSpring(useTransform(x, [-120, 120], [-6, 6]), springConfig);
  const translateX = useSpring(
    useTransform(x, [-120, 120], [-14, 14]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const halfWidth = rect.width / 2;
    x.set(offsetX - halfWidth);
  };

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content-animated"
        sideOffset={sideOffset}
        asChild
        {...props}
      >
        <motion.div
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 260, damping: 18 },
          }}
          style={{ rotate, translateX, whiteSpace: "nowrap" }}
          className={cn(
            "bg-foreground text-background relative z-50 w-fit rounded-md px-4 py-2 text-xs shadow-xl",
            "data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom",
            className
          )}
        >
          {children}
          <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
        </motion.div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

function TooltipContentSwing({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content-swing"
        sideOffset={sideOffset}
        asChild
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            // single swing left → right → center
            rotate: [0, -6, 6, 0],
            x: [0, -12, 12, 0],
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ whiteSpace: "nowrap" }}
          className={cn(
            "bg-foreground text-background relative z-50 w-fit rounded-md px-4 py-2 text-xs shadow-xl",
            "data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom",
            className
          )}
        >
          {children}
          <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
        </motion.div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

function TooltipContentFlip({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content-flip"
        sideOffset={sideOffset}
        asChild
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98, rotateX: -90 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: { type: "spring", stiffness: 300, damping: 22 },
          }}
          exit={{ opacity: 0, y: 8, rotateX: -90 }}
          style={{ transformPerspective: 1000, whiteSpace: "nowrap" }}
          className={cn(
            "bg-foreground text-background relative z-50 w-fit rounded-md px-4 py-2 text-xs shadow-xl",
            "data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom",
            className
          )}
        >
          {children}
          <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
        </motion.div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export {
  Tooltip,
  TooltipContent,
  TooltipContentAnimated,
  TooltipContentFlip,
  TooltipContentSwing,
  TooltipProvider,
  TooltipTrigger,
};
