import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

export const skeletonDoc: ComponentDoc = createComponentDoc({
  slug: "skeleton",
  metadata: {
    name: "Skeleton",
    description:
      "A placeholder component that displays a visual representation of loading content with customizable animation variants.",
    category: "Feedback",
    status: "stable",
  },
  sections: [
    {
      id: "when-to-use",
      title: "When to use",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Use Skeleton when you need to indicate that content is loading,
            providing users with visual feedback while data is being fetched or
            processed. This improves perceived performance and user experience.
          </p>
          <p>
            The component is ideal for data-heavy applications, dashboards,
            profile pages, product listings, and any scenario where content
            takes time to load. It helps maintain layout stability and reduces
            the jarring effect of content suddenly appearing.
          </p>
        </div>
      ),
    },
    {
      id: "best-practices",
      title: "Best practices",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Match the skeleton shape and size to the actual content that will
              appear, maintaining the same layout structure.
            </li>
            <li>
              Use the <code>pulse</code> variant for general loading states as
              it&apos;s subtle and widely recognized.
            </li>
            <li>
              Choose <code>shimmer</code> variant for premium interfaces or when
              you want to create a more polished, sophisticated loading
              experience.
            </li>
            <li>
              Display skeletons for at least 300-500ms to prevent flashing if
              content loads very quickly.
            </li>
            <li>
              Group multiple skeletons to represent complex layouts like cards,
              tables, or forms.
            </li>
            <li>
              Avoid overusing skeletons; only show them for content that takes
              noticeable time to load (typically &gt;200ms).
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
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            The Skeleton component is primarily visual and should be used
            alongside proper ARIA attributes to communicate loading states to
            assistive technologies.
          </p>
          <p>
            Consider wrapping skeleton content with <code>aria-busy=&quot;true&quot;</code>{" "}
            and <code>aria-label=&quot;Loading content&quot;</code> on the
            parent container. When content loads, ensure focus management is
            handled appropriately for screen reader users.
          </p>
          <p>
            The animations (pulse and shimmer) use <code>prefers-reduced-motion</code>{" "}
            media query automatically through Tailwind, respecting user
            preferences for reduced motion.
          </p>
        </div>
      ),
    },
    {
      id: "variants",
      title: "Variants",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <div className="space-y-3">
            <div>
              <h4 className="mb-1 font-medium text-foreground">
                Pulse (default)
              </h4>
              <p>
                A subtle pulsing animation that fades the skeleton opacity in
                and out. This is the most common loading indicator and works
                well in most contexts.
              </p>
            </div>
            <div>
              <h4 className="mb-1 font-medium text-foreground">Shimmer</h4>
              <p>
                A gradient reflection that moves across the skeleton from left
                to right, creating a shimmering effect. This variant feels more
                premium and modern, similar to what you see in high-end apps
                like LinkedIn, Facebook, and Instagram.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"pulse" | "shimmer"',
      defaultValue: '"pulse"',
      description:
        "Defines the animation style. 'pulse' creates a subtle fade effect, while 'shimmer' produces a moving gradient reflection.",
    },
    {
      name: "className",
      type: "string",
      description:
        "Additional Tailwind classes to customize size, shape, and other styles.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic usage",
      description:
        "Simple skeleton loaders with different dimensions demonstrating the default pulse animation.",
      code: `import { Skeleton } from "@/components/pittaya/ui/skeleton";

export function BasicSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}`,
      preview: (
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ),
    },
    {
      id: "variants-comparison",
      title: "Animation variants",
      description:
        "Side-by-side comparison of pulse and shimmer animation variants.",
      code: `import { Skeleton } from "@/components/pittaya/ui/skeleton";

export function VariantsComparison() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Pulse (default)</h3>
        <Skeleton variant="pulse" className="h-32 w-full" />
        <Skeleton variant="pulse" className="h-4 w-full" />
        <Skeleton variant="pulse" className="h-4 w-4/5" />
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium">Shimmer</h3>
        <Skeleton variant="shimmer" className="h-32 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-4/5" />
      </div>
    </div>
  );
}`,
      preview: (
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Pulse (default)</h3>
            <Skeleton variant="pulse" className="h-32 w-full" />
            <Skeleton variant="pulse" className="h-4 w-full" />
            <Skeleton variant="pulse" className="h-4 w-4/5" />
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Shimmer</h3>
            <Skeleton variant="shimmer" className="h-32 w-full" />
            <Skeleton variant="shimmer" className="h-4 w-full" />
            <Skeleton variant="shimmer" className="h-4 w-4/5" />
          </div>
        </div>
      ),
    },
    {
      id: "profile-card",
      title: "User profile skeleton",
      description:
        "A realistic skeleton for a user profile card, demonstrating how to structure loading states for complex layouts.",
      code: `import { Card, CardContent, CardHeader } from "@/components/pittaya/ui/card";
import { Skeleton } from "@/components/pittaya/ui/skeleton";

export function ProfileCardSkeleton() {
  return (
    <Card className="max-w-sm">
      <CardHeader className="items-center space-y-4">
        <Skeleton variant="shimmer" className="size-20 rounded-full" />
        <div className="w-full space-y-2 text-center">
          <Skeleton variant="shimmer" className="mx-auto h-6 w-32" />
          <Skeleton variant="shimmer" className="mx-auto h-4 w-24" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton variant="shimmer" className="h-4 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-3/4" />
      </CardContent>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card className="max-w-sm">
            <CardHeader className="items-center space-y-4">
              <Skeleton variant="shimmer" className="size-20 rounded-full" />
              <div className="w-full space-y-2 text-center">
                <Skeleton variant="shimmer" className="mx-auto h-6 w-32" />
                <Skeleton variant="shimmer" className="mx-auto h-4 w-24" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton variant="shimmer" className="h-4 w-full" />
              <Skeleton variant="shimmer" className="h-4 w-full" />
              <Skeleton variant="shimmer" className="h-4 w-3/4" />
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "product-card",
      title: "Product card skeleton",
      description:
        "Loading state for an e-commerce product card with image, title, price, and action button placeholders.",
      code: `import { Card, CardContent, CardFooter } from "@/components/pittaya/ui/card";
import { Skeleton } from "@/components/pittaya/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <Card className="max-w-sm">
      <Skeleton variant="shimmer" className="h-48 w-full rounded-b-none rounded-t-xl" />
      <CardContent className="space-y-3 pt-6">
        <Skeleton variant="shimmer" className="h-6 w-3/4" />
        <Skeleton variant="shimmer" className="h-4 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-5/6" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton variant="shimmer" className="h-8 w-24" />
          <Skeleton variant="shimmer" className="h-6 w-16" />
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Skeleton variant="shimmer" className="h-10 flex-1" />
        <Skeleton variant="shimmer" className="h-10 w-10" />
      </CardFooter>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card className="max-w-sm">
            <Skeleton
              variant="shimmer"
              className="h-48 w-full rounded-b-none rounded-t-xl"
            />
            <CardContent className="space-y-3 pt-6">
              <Skeleton variant="shimmer" className="h-6 w-3/4" />
              <Skeleton variant="shimmer" className="h-4 w-full" />
              <Skeleton variant="shimmer" className="h-4 w-5/6" />
              <div className="flex items-center justify-between pt-2">
                <Skeleton variant="shimmer" className="h-8 w-24" />
                <Skeleton variant="shimmer" className="h-6 w-16" />
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Skeleton variant="shimmer" className="h-10 flex-1" />
              <Skeleton variant="shimmer" className="h-10 w-10" />
            </CardFooter>
          </Card>
        </div>
      ),
    },
    {
      id: "article-list",
      title: "Article list skeleton",
      description:
        "Loading state for a blog or news article list, showing multiple skeleton items in a vertical layout.",
      code: `import { Skeleton } from "@/components/pittaya/ui/skeleton";

export function ArticleListSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton variant="shimmer" className="size-24 shrink-0 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="shimmer" className="h-5 w-full" />
            <Skeleton variant="shimmer" className="h-4 w-11/12" />
            <Skeleton variant="shimmer" className="h-4 w-4/5" />
            <div className="flex gap-4 pt-2">
              <Skeleton variant="shimmer" className="h-3 w-20" />
              <Skeleton variant="shimmer" className="h-3 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}`,
      preview: (
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton
                variant="shimmer"
                className="size-24 shrink-0 rounded-lg"
              />
              <div className="flex-1 space-y-2">
                <Skeleton variant="shimmer" className="h-5 w-full" />
                <Skeleton variant="shimmer" className="h-4 w-11/12" />
                <Skeleton variant="shimmer" className="h-4 w-4/5" />
                <div className="flex gap-4 pt-2">
                  <Skeleton variant="shimmer" className="h-3 w-20" />
                  <Skeleton variant="shimmer" className="h-3 w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ],
  toc: [
    { id: "installation", title: "Installation", level: 2 },
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "accessibility", title: "Accessibility", level: 2 },
    { id: "variants", title: "Variants", level: 2 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
});
