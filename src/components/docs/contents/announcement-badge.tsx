import { ArrowRight, ArrowUpRight, Megaphone } from "lucide-react";

import {
  AnnouncementContainer,
  AnnouncementIcon,
  AnnouncementSeparator,
  AnnouncementText,
  AnnouncementTitle,
} from "@/components/ui/announcement-badge";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

export const announcementBadgeDoc: ComponentDoc = createComponentDoc({
  slug: "announcement-badge",
  metadata: {
    name: "Announcement Badge",
    description:
      "A flexible composite component for displaying announcements, updates, and badges with icons, text, and separators.",
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
            Use the Announcement Badge to highlight new features, product
            updates, or important notifications in a compact and visually
            appealing format.
          </p>
          <p>
            This component works best in hero sections, above navigation bars,
            or at the top of content areas where you need to draw attention
            without being intrusive.
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
              Keep announcement text concise and actionable—aim for 3-5 words
              maximum.
            </li>
            <li>
              Use the <code>glassEffect</code> variant when placing the badge
              over images or gradient backgrounds.
            </li>
            <li>
              Combine icons with text to quickly communicate the nature of the
              announcement (e.g., 🎉 for launches, 🚀 for new features).
            </li>
            <li>
              Use <code>AnnouncementSeparator</code> to create visual hierarchy
              between different pieces of information.
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
            The component uses semantic HTML with proper contrast ratios for
            text and borders. When using icons alone, ensure you provide
            descriptive text alternatives for screen readers.
          </p>
          <p>
            If the announcement is clickable or interactive, wrap it in a proper
            button or link element with clear labeling to communicate the action
            to assistive technologies.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "AnnouncementContainer",
      type: "component",
      description:
        "The main wrapper component that holds all announcement elements.",
    },
    {
      name: "variant",
      type: '"default" | "glassEffect"',
      defaultValue: '"default"',
      description:
        "Controls the background style. Use glassEffect for transparent backgrounds with backdrop blur.",
    },
    {
      name: "AnnouncementText",
      type: "component",
      description:
        "Displays highlighted text in a badge format with background and border.",
    },
    {
      name: "text",
      type: "string",
      required: true,
      description: "The text content to display inside the badge.",
    },
    {
      name: "AnnouncementIcon",
      type: "component",
      description:
        "Displays an icon from lucide-react or a string (like emoji).",
    },
    {
      name: "icon",
      type: "LucideIcon | string",
      required: true,
      description:
        "The icon to display. Can be a Lucide icon component or a string (emoji).",
    },
    {
      name: "AnnouncementSeparator",
      type: "component",
      description:
        "A vertical divider to separate different sections of the announcement.",
    },
    {
      name: "AnnouncementTitle",
      type: "component",
      description: "The main title or description text of the announcement.",
    },
  ],
  examples: [
    {
      id: "with-icon",
      title: "With icon",
      description:
        "Use AnnouncementText before the separator to highlight a status or category.",
      code: `import {
  AnnouncementContainer,
  AnnouncementSeparator,
  AnnouncementIcon,
  AnnouncementTitle,
} from "@/components/pittaya/ui/announcement-badge";
import { Megaphone } from "lucide-react";

export function BadgeAnnouncement() {
  return (
    <AnnouncementContainer variant={"default"}>
      <AnnouncementIcon icon={Megaphone} />
      <AnnouncementSeparator className="bg-white/30" />
      <AnnouncementTitle>
        Introducing Pittaya UI <ArrowUpRight className="size-4" />
      </AnnouncementTitle>
    </AnnouncementContainer>
  );
}`,
      preview: (
        <AnnouncementContainer variant={"default"}>
          <AnnouncementIcon icon={Megaphone} />
          <AnnouncementSeparator className="bg-white/30" />
          <AnnouncementTitle>
            Introducing Pittaya UI <ArrowUpRight className="size-4" />
          </AnnouncementTitle>
        </AnnouncementContainer>
      ),
    },
    {
      id: "with-text-badge",
      title: "With text badge",
      description:
        "Use AnnouncementText before the separator for a more visual approach.",
      code: `import {
  AnnouncementContainer,
  AnnouncementText,
  AnnouncementSeparator,
  AnnouncementTitle,
} from "@/components/pittaya/ui/announcement-badge";

export function TextBadgeAnnouncement() {
  return (
    <AnnouncementContainer>
      <AnnouncementText text="soon" />
      <AnnouncementSeparator />
      <AnnouncementTitle>Product Hunt launch is live</AnnouncementTitle>
    </AnnouncementContainer>
  );
}`,
      preview: (
        <AnnouncementContainer>
          <AnnouncementText text="soon" />
          <AnnouncementSeparator />
          <AnnouncementTitle>Product Hunt launch is live</AnnouncementTitle>
        </AnnouncementContainer>
      ),
    },
    {
      id: "with-link",
      title: "Interactive with link",
      description:
        "Make the announcement clickable by wrapping it in a link, with an arrow icon at the end.",
      code: `import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  AnnouncementContainer,
  AnnouncementIcon,
  AnnouncementSeparator,
  AnnouncementText,
  AnnouncementTitle,
} from "@/components/pittaya/ui/announcement-badge";

export function LinkAnnouncement() {
  return (
    <Link href="/recife">
      <AnnouncementContainer className="cursor-pointer transition-opacity hover:opacity-80">
        <AnnouncementText text="v2.0" />
        <AnnouncementSeparator />
        <AnnouncementTitle>
          Read our launch post
          <ArrowRight className="size-4" />
        </AnnouncementTitle>
      </AnnouncementContainer>
    </Link>
  );
}`,
      preview: (
        <AnnouncementContainer className="cursor-pointer transition-opacity hover:opacity-80">
          <AnnouncementText text="v2.0" />
          <AnnouncementSeparator />
          <AnnouncementTitle>
            Read our launch post
            <ArrowUpRight className="size-4" />
          </AnnouncementTitle>
        </AnnouncementContainer>
      ),
    },
    {
      id: "glass-effect",
      title: "Glass effect variant",
      description:
        "Use the glass effect variant for announcements over images or gradients.",
      code: `import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  AnnouncementContainer,
  AnnouncementIcon,
  AnnouncementSeparator,
  AnnouncementTitle,
} from "@/components/pittaya/ui/announcement-badge";

export function GlassAnnouncement() {
  return (
    <Link href="/beta">
      <AnnouncementContainer 
        variant="glassEffect"
        className="cursor-pointer transition-opacity hover:opacity-80"
      >
        <AnnouncementIcon icon="🚀" />
        <AnnouncementSeparator />
        <AnnouncementTitle>
          Try our new dashboard
          <ArrowRight className="size-4" />
        </AnnouncementTitle>
      </AnnouncementContainer>
    </Link>
  );
}`,
      preview: (
        <div className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-2">
          <AnnouncementContainer
            variant="glassEffect"
            className="cursor-pointer transition-opacity hover:opacity-80"
          >
            <AnnouncementIcon icon="🚀" />
            <AnnouncementSeparator />
            <AnnouncementTitle className="w-full">
              Try our new dashboard
              <ArrowRight className="size-4" />
            </AnnouncementTitle>
          </AnnouncementContainer>
        </div>
      ),
    },
    {
      id: "with-emoji",
      title: "With Emoji",
      description: "Use Emoji for more design consistency and flexibility.",
      code: `
import {
  AnnouncementContainer,
  AnnouncementIcon,
  AnnouncementSeparator,
  AnnouncementTitle,
} from "@/components/pittaya/ui/announcement-badge";
 
import Link from "next/link";

export function LucideAnnouncement() {
  return (
    <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
      <AnnouncementContainer className="cursor-pointer transition-opacity hover:opacity-80">
        <AnnouncementIcon icon="✨" />
        <AnnouncementSeparator />
        <AnnouncementTitle>
          Performance improvements
        <ArrowUpRight className="size-4" />
        </AnnouncementTitle>
      </AnnouncementContainer>
    </Link>
  );
}`,
      preview: (
        <AnnouncementContainer className="cursor-pointer transition-opacity hover:opacity-80">
          <AnnouncementIcon icon="✨" />
          <AnnouncementSeparator />
          <AnnouncementTitle>
            Performance improvements
            <ArrowUpRight className="size-4" />
          </AnnouncementTitle>
        </AnnouncementContainer>
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
    code: `import {
  AnnouncementContainer,
  AnnouncementSeparator,
  AnnouncementIcon,
  AnnouncementTitle,
} from "@/components/pittaya/ui/announcement-badge";
import { Megaphone } from "lucide-react";

export function BadgeAnnouncement() {
  return (
    <AnnouncementContainer variant={"default"}>
      <AnnouncementIcon icon={Megaphone} />
      <AnnouncementSeparator className="bg-white/30" />
      <AnnouncementTitle>
        Introducing Pittaya UI <ArrowUpRight className="size-4" />
      </AnnouncementTitle>
    </AnnouncementContainer>
  );
}`,
    preview: (
      <AnnouncementContainer variant={"default"}>
        <AnnouncementIcon icon={Megaphone} />
        <AnnouncementSeparator className="bg-white/30" />
        <AnnouncementTitle>
          Introducing Pittaya UI <ArrowUpRight className="size-4" />
        </AnnouncementTitle>
      </AnnouncementContainer>
    ),
  },
});
