import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipContentAnimated,
  TooltipContentFlip,
  TooltipContentSwing,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

export const tooltipDoc: ComponentDoc = createComponentDoc({
  slug: "tooltip",
  metadata: {
    name: "Tooltip",
    description:
      "A lightweight contextual label that appears on hover or focus, with elegant animated variants.",
    category: "Overlays",
    status: "stable",
  },
  sections: [
    {
      id: "when-to-use",
      title: "When to use",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            Use tooltips to provide short, contextual hints for icons, buttons,
            and controls. Keep content concise and avoid critical information
            that users must read to proceed.
          </p>
          <p>
            Prefer tooltips for microcopy and clarify ambiguous actions. For
            richer content or interactive elements, use Popover or Dialog.
          </p>
        </div>
      ),
    },
    {
      id: "best-practices",
      title: "Best practices",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Keep it snappy:</strong> Under 60 characters is your sweet
              spot—short enough to read in a blink, long enough to actually say
              something useful.
            </li>
            <li>
              <strong>Play nice with keyboard users:</strong> Trigger on both
              hover and focus to ensure everyone, not just mouse users, can
              enjoy your wisdom.
            </li>
            <li>
              <strong>Don't be a nuisance:</strong> Position your tooltip so it
              doesn't cover the very thing the user is trying to interact with.
              That defeats the purpose.
            </li>
            <li>
              <strong>Stay consistent:</strong> Pick a side (top or bottom
              usually works) and stick with it. Predictable UI is delightful UI.
            </li>
            <li>
              <strong>Animation matters:</strong> Choose a variant that matches
              your vibe—smooth and responsive, a playful swing, or a dramatic 3D
              flip. Let your brand shine.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "accessibility",
      title: "Accessibility",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            Built on Radix UI primitives, tooltips manage focus and ARIA
            attributes automatically. Always ensure the trigger is focusable and
            the tooltip content is supplemental, not essential.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "side",
      type: '"top" | "right" | "bottom" | "left"',
      defaultValue: '"top"',
      description: "Preferred side for positioning relative to the trigger.",
    },
    {
      name: "sideOffset",
      type: "number",
      defaultValue: "0",
      description: "Distance in pixels from the trigger element.",
    },
    {
      name: "delayDuration",
      type: "number",
      defaultValue: "0",
      description: "Delay in ms before showing the tooltip (Provider).",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic tooltip",
      description: "A simple tooltip triggered by a button.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/pittaya/ui/tooltip";

export function BasicTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Plain helpful text</TooltipContent>
    </Tooltip>
  );
}`,
      preview: (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Plain helpful text</TooltipContent>
        </Tooltip>
      ),
    },
    {
      id: "animated",
      title: "Animated variant",
      description: "Elegant motion that responds to pointer position.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import { Tooltip, TooltipTrigger, TooltipContentAnimated } from "@/components/pittaya/ui/tooltip";

export function AnimatedTooltipExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Product info</Button>
      </TooltipTrigger>
      <TooltipContentAnimated>
        Smooth motion + slight parallax
      </TooltipContentAnimated>
    </Tooltip>
  );
}`,
      preview: (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Product info</Button>
          </TooltipTrigger>
          <TooltipContentAnimated>
            Smooth motion + slight parallax
          </TooltipContentAnimated>
        </Tooltip>
      ),
    },
    {
      id: "swing",
      title: "Swing variant",
      description: "Single swing on open, then settles.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import { Tooltip, TooltipTrigger, TooltipContentSwing } from "@/components/pittaya/ui/tooltip";

export function SwingTooltipExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover to see</Button>
      </TooltipTrigger>
      <TooltipContentSwing>
        swing vatiant tooltip
      </TooltipContentSwing>
    </Tooltip>
  );
}`,
      preview: (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover to see</Button>
          </TooltipTrigger>
          <TooltipContentSwing>swing vatiant tooltip</TooltipContentSwing>
        </Tooltip>
      ),
    },
    {
      id: "flip",
      title: "Flip 3D variant",
      description: "A 3D flip entry with perspective.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import { Tooltip, TooltipTrigger, TooltipContentFlip } from "@/components/pittaya/ui/tooltip";

export function FlipTooltipExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Details</Button>
      </TooltipTrigger>
      <TooltipContentFlip>
        Flip 3D with pespective      
      </TooltipContentFlip>
    </Tooltip>
  );
}`,
      preview: (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Details</Button>
          </TooltipTrigger>
          <TooltipContentFlip>Flip 3D with pespective</TooltipContentFlip>
        </Tooltip>
      ),
    },
    {
      id: "positioning",
      title: "Positioning",
      description: "Control placement using the side prop.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/pittaya/ui/tooltip";

export function TooltipPositioning() {
  return (
    <div className="flex flex-wrap gap-3">
      {(["top","right","bottom","left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>Positioned at {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}`,
      preview: (
        <div className="flex flex-wrap gap-3">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger asChild>
                <Button variant="outline">{side}</Button>
              </TooltipTrigger>
              <TooltipContent side={side}>Positioned at {side}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      ),
    },
    {
      id: "creative",
      title: "Creative accent",
      description: "A stylish tooltip with accent lines and emoji.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import { Tooltip, TooltipTrigger, TooltipContentAnimated } from "@/components/pittaya/ui/tooltip";

export function CreativeTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="default">Check status</Button>
      </TooltipTrigger>
      <TooltipContentAnimated>
        ✅ All systems operational
      </TooltipContentAnimated>
    </Tooltip>
  );
}`,
      preview: (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="default">Check status</Button>
          </TooltipTrigger>
          <TooltipContentAnimated>
            ✅ All systems operational
          </TooltipContentAnimated>
        </Tooltip>
      ),
    },
  ],
  toc: [
    { id: "installation", title: "Installation", level: 2 },
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "accessibility", title: "Accessibility", level: 2 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
});
