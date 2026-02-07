import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import {
  AvatarFallbackExample,
  AvatarGroupExample,
  AvatarGroupSizesExample,
  AvatarSizesExample,
  AvatarWithStatusExample,
  BasicAvatarExample,
} from "./avatar-examples";

export const avatarDoc: ComponentDoc = createComponentDoc({
  slug: "avatar",
  metadata: {
    name: "Avatar",
    description:
      "An accessible avatar component with support for images, fallbacks, groups, and multiple sizes.",
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
            Use the Avatar component to represent users or entities visually in
            your application. It&apos;s ideal for profile pictures, user lists,
            comment sections, and team member displays.
          </p>
          <p>
            The component automatically handles image loading failures by
            displaying a fallback, ensuring a consistent user experience even
            when images fail to load.
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
              Always provide meaningful fallback text (usually initials) for
              accessibility and when images fail to load.
            </li>
            <li>
              Use appropriate sizes for different contexts: small for compact
              lists, large for profile pages.
            </li>
            <li>
              When using AvatarGroup, limit the number of visible avatars (3-5)
              to maintain clarity and show a count for additional members.
            </li>
            <li>
              Include alt text for images to improve accessibility and SEO.
            </li>
            <li>
              Consider adding status indicators (online/offline/busy) for
              real-time communication interfaces.
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
            The Avatar component is built on top of Radix UI&apos;s Avatar
            primitive, ensuring robust accessibility features:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Automatically handles image loading states and fallback rendering.
            </li>
            <li>
              Always provide descriptive <code>alt</code> attributes for images
              to assist screen reader users.
            </li>
            <li>
              Fallback text should be meaningful and concise (typically 1-3
              characters).
            </li>
            <li>
              The component maintains proper semantic structure and supports
              keyboard navigation when interactive.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "variations",
      title: "Variations",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <h3 className="text-foreground mb-2 text-lg font-semibold">Sizes</h3>
          <p>
            The Avatar component supports four size variants: <code>sm</code>,{" "}
            <code>md</code>, <code>lg</code>, and <code>xl</code>. Choose the
            appropriate size based on your layout and use case.
          </p>
          <h3 className="text-foreground mt-4 mb-2 text-lg font-semibold">
            AvatarGroup
          </h3>
          <p>
            Use AvatarGroup to display multiple avatars in an overlapping stack.
            It automatically handles overflow by showing a count badge for
            additional members beyond the <code>max</code> limit.
          </p>
          <h3 className="text-foreground mt-4 mb-2 text-lg font-semibold">
            Custom Styles
          </h3>
          <p>
            Customize the appearance using className props on Avatar,
            AvatarImage, or AvatarFallback. You can modify borders, background
            colors, border radius, and more.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg" | "xl"',
      defaultValue: '"md"',
      description:
        "Controls the size of the avatar. Small (32px), Medium (40px), Large (48px), Extra Large (64px).",
    },
    {
      name: "className",
      type: "string",
      description:
        "Additional CSS classes to apply to the avatar root element.",
    },
    {
      name: "src",
      type: "string",
      description: "The image source URL to display in the avatar.",
    },
    {
      name: "alt",
      type: "string",
      description:
        "Alternative text for the image, important for accessibility.",
    },
    {
      name: "onLoadingStatusChange",
      type: "(status: 'loading' | 'loaded' | 'error') => void",
      description: "Callback fired when the image loading status changes.",
    },
    {
      name: "max",
      type: "number",
      defaultValue: "3",
      description:
        "Maximum number of avatars to display before showing a count badge.",
    },
    {
      name: "count",
      type: "number",
      description: "The number to display in the count badge.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic usage",
      description:
        "A simple avatar with an image and fallback text. The fallback is only shown if the image fails to load.",
      code: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function BasicAvatarExample() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/pittaya-ui.png" alt="@pittaya-ui" />
      <AvatarFallback>PU</AvatarFallback>
    </Avatar>
  );
}`,
      preview: <BasicAvatarExample />,
    },
    {
      id: "sizes",
      title: "Avatar sizes",
      description:
        "Avatars support four size variants: sm (32px), md (40px), lg (48px), and xl (64px).",
      code: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarSizesExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/pittaya-ui.png" alt="@pittaya-ui" />
        <AvatarFallback>PU</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://github.com/pittaya-ui.png" alt="@pittaya-ui" />
        <AvatarFallback>PU</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/pittaya-ui.png" alt="@pittaya-ui" />
        <AvatarFallback>PU</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage src="https://github.com/pittaya-ui.png" alt="@pittaya-ui" />
        <AvatarFallback>PU</AvatarFallback>
      </Avatar>
    </div>
  );
}`,
      preview: <AvatarSizesExample />,
    },
    {
      id: "fallback",
      title: "Fallback only",
      description:
        "Avatars can display fallback content when no image is provided or when the image fails to load. You can customize the fallback styling.",
      code: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarFallbackExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://invalid-url.com/image.png" alt="Invalid" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground">
          XY
        </AvatarFallback>
      </Avatar>
    </div>
  );
}`,
      preview: <AvatarFallbackExample />,
    },
    {
      id: "group",
      title: "Avatar group",
      description:
        "Display multiple avatars in an overlapping group. Use the max prop to limit visible avatars and show a count for the rest.",
      code: `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarGroupExample() {
  return (
    <AvatarGroup max={3}>
      <Avatar>
        <AvatarImage src="https://github.com/pittaya-ui.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/react.png" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>U4</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>U5</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}`,
      preview: <AvatarGroupExample />,
    },
    {
      id: "group-sizes",
      title: "Avatar group sizes",
      description:
        "AvatarGroup supports the same size variants as Avatar, applying the size to all children automatically.",
      code: `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarGroupSizesExample() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Small</p>
        <AvatarGroup max={3} size="sm">
          <Avatar>
            <AvatarImage src="https://github.com/pittaya-ui.png" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Large</p>
        <AvatarGroup max={3} size="lg">
          <Avatar>
            <AvatarImage src="https://github.com/pittaya-ui.png" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  );
}`,
      preview: <AvatarGroupSizesExample />,
    },
    {
      id: "with-status",
      title: "Avatar with status indicator",
      description:
        "Add status indicators (online, away, offline) by positioning a small badge using absolute positioning.",
      code: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarWithStatusExample() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/pittaya-ui.png" alt="@pittaya-ui" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-background" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/react.png" alt="@react" />
          <AvatarFallback>RC</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-500 ring-2 ring-background" />
      </div>
    </div>
  );
}`,
      preview: <AvatarWithStatusExample />,
    },
  ],
  toc: [
    { id: "installation", title: "Installation", level: 2 },
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "accessibility", title: "Accessibility", level: 2 },
    { id: "variations", title: "Variations", level: 2 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
  showcase: {
    code: `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

export function ShowcaseAvatar() {
  return (
    <div className="space-y-6">
      <Avatar size="lg">
        <AvatarImage src="https://github.com/pittaya-ui.png" alt="@pittaya-ui" />
        <AvatarFallback>PU</AvatarFallback>
      </Avatar>
      
      <AvatarGroup max={3}>
        <Avatar>
          <AvatarImage src="https://github.com/pittaya-ui.png" alt="User 1" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>U3</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>U4</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}`,
    preview: (
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <small className="text-muted-foreground">Basic Avatar</small>
          <BasicAvatarExample />
        </div>
        <div className="bg-muted h-8 w-px" />
        <div className="flex flex-col items-center justify-center gap-3">
          <small className="text-muted-foreground">Avatar Group</small>
          <AvatarGroupExample />
        </div>
      </div>
    ),
  },
});
