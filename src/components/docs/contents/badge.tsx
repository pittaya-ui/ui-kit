import { Badge } from "@/components/ui/badge";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

export const badgeDoc: ComponentDoc = createComponentDoc({
  slug: "badge",
  metadata: {
    name: "Badge",
    description:
      "A versatile badge component for displaying status, labels, or metadata with multiple visual variants.",
    category: "Components",
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
            Use badges to highlight important information, display statuses,
            categorize content, or draw attention to specific metadata. They are
            perfect for labels, counts, notifications, and status indicators.
          </p>
          <p>
            Badges work well in tables, cards, lists, and navigation elements
            where you need to convey supplementary information without taking up
            too much space.
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
              Keep badge text concise—use 1-3 words maximum for better
              readability.
            </li>
            <li>
              Use consistent color coding across your application (e.g., green
              for success, red for errors).
            </li>
            <li>
              Choose the <code>stable</code> variant for approved or
              production-ready states, <code>beta</code> for experimental
              features, and <code>deprecated</code> for outdated content.
            </li>
            <li>
              Combine badges with icons to enhance recognition and provide
              visual context.
            </li>
            <li>
              Avoid overusing badges—too many can create visual clutter and
              reduce their effectiveness.
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
            The Badge component uses semantic HTML with proper focus states and
            color contrast ratios. When using badges to convey status
            information, ensure the meaning is not communicated solely through
            color.
          </p>
          <p>
            If using badges as interactive elements (links), the{" "}
            <code>asChild</code> prop allows you to render them as anchor tags
            while maintaining proper keyboard navigation and screen reader
            support.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"default" | "secondary" | "destructive" | "outline" | "stable" | "beta" | "deprecated"',
      defaultValue: '"default"',
      description:
        "Defines the visual style of the badge. Choose variants based on the type of information being conveyed.",
    },
    {
      name: "asChild",
      type: "boolean",
      defaultValue: "false",
      description:
        "When enabled, uses Radix's Slot to merge styles with the child element, allowing you to render badges as links or other interactive elements.",
    },
  ],
  examples: [
    {
      id: "variants",
      title: "All variants",
      description:
        "Demonstration of all available badge variants for different use cases.",
      code: `import { Badge } from "@/components/ui/badge";

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="stable">Stable</Badge>
      <Badge variant="beta">Beta</Badge>
      <Badge variant="deprecated">Deprecated</Badge>
    </div>
  );
}`,
      preview: (
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="stable">Stable</Badge>
          <Badge variant="beta">Beta</Badge>
          <Badge variant="deprecated">Deprecated</Badge>
        </div>
      ),
    },
    {
      id: "with-icon",
      title: "With icons",
      description:
        "Combine badges with icons to provide additional visual context and improve recognition.",
      code: `import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BadgeWithIcon() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="stable">
        <CheckCircle />
        Approved
      </Badge>
      <Badge variant="beta">
        <Clock />
        In Progress
      </Badge>
      <Badge variant="destructive">
        <AlertCircle />
        Failed
      </Badge>
    </div>
  );
}`,
      preview: (
        <div className="flex flex-wrap gap-3">
          <Badge variant="stable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Approved
          </Badge>
          <Badge variant="beta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            In Progress
          </Badge>
          <Badge variant="destructive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            Failed
          </Badge>
        </div>
      ),
    },
    {
      id: "as-link",
      title: "Interactive badge",
      description:
        "Use the asChild prop to render badges as clickable links while maintaining their visual style.",
      code: `import { Badge } from "@/components/ui/badge";

export function BadgeAsLink() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge asChild>
        <a href="/docs">Documentation</a>
      </Badge>
      <Badge variant="outline" asChild>
        <a href="/changelog">Changelog</a>
      </Badge>
      <Badge variant="secondary" asChild>
        <a href="/blog">Blog</a>
      </Badge>
    </div>
  );
}`,
      preview: (
        <div className="flex flex-wrap gap-3">
          <Badge asChild>
            <a href="#">Documentation</a>
          </Badge>
          <Badge variant="outline" asChild>
            <a href="#">Changelog</a>
          </Badge>
          <Badge variant="secondary" asChild>
            <a href="#">Blog</a>
          </Badge>
        </div>
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
  showcase: {
    preview: <Badge>Stable</Badge>,
    code: `import { Badge } from "@/components/ui/badge";

export function BadgeExample() {
  return <Badge>Stable</Badge>;
}`,
  },
});
