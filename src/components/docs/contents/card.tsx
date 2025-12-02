

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ComponentDoc } from "@/lib/docs/types";

export const cardDoc: ComponentDoc = {
  slug: "card",
  metadata: {
    name: "Card",
    description:
      "A versatile and accessible container that groups related content with support for multiple visual variants.",
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
            Use the Card to group related information in a visual and
            hierarchical way, such as user profiles, blog articles, products
            in an online store, or any content that benefits from a
            container with defined borders and spacing.
          </p>
          <p>
            The component is ideal for creating grid layouts or item lists
            that need to stand out from the page background, maintaining
            visual consistency through the available variants.
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
              Use <code>CardHeader</code> for titles and descriptions, keeping
              the visual hierarchy clear and predictable.
            </li>
            <li>
              Prefer <code>CardContent</code> for the main content and{" "}
              <code>CardFooter</code> for actions or secondary metadata.
            </li>
            <li>
              Choose variants that convey the card&apos;s function: use{" "}
              <code>gradient</code> to highlight premium items or{" "}
              <code>lifted</code> for interactive elements.
            </li>
            <li>
              Avoid overloading a single card with too much information;
              prefer splitting content into multiple cards when necessary.
            </li>
            <li>
              Combine with components like <code>Button</code> and{" "}
              <code>Badge</code> to create complete and functional interfaces.
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
            The Card is rendered as a semantic <code>div</code>, but you
            can add ARIA attributes when it contains interactive content
            or is part of a navigation pattern.
          </p>
          <p>
            When using clickable cards, wrap all content in a{" "}
            <code>button</code> or <code>a</code> element to ensure that
            keyboard users can access the main action without difficulty.
          </p>
          <p>
            Make sure variant colors maintain adequate contrast in both
            light and dark mode, especially in decorative variants like{" "}
            <code>crosshair</code> and <code>corners</code>.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"default" | "crosshair" | "lifted" | "shadowRight" | "gradient" | "corners"',
      defaultValue: '"default"',
      description:
        "Defines the visual style of the card. Each variant offers a unique appearance suitable for different contexts.",
    },
    {
      name: "gradientClassName",
      type: "string",
      description:
        "Custom Tailwind classes for the border gradient when variant='gradient'. Overrides the default gradient.",
    },
    {
      name: "className",
      type: "string",
      description:
        "Additional Tailwind classes to customize the card style.",
    },
  ],
  examples: [
    {
      id: "product-card",
      title: "Product card",
      description:
        "A typical card for displaying products in e-commerce, combining image, title, description, price, and purchase action.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";

export function ProductCard() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Premium Bluetooth Headphones</CardTitle>
        <CardDescription>
          Active noise cancellation and 30h battery life
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" 
          alt="Premium headphones"
          width={800}
          height={450}
          className="aspect-video w-full rounded-lg object-cover"
        />
        <p className="mt-4 text-2xl font-bold">$149.90</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Add to cart</Button>
        <Button variant="outline">Favorite</Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Premium Bluetooth Headphones</CardTitle>
              <CardDescription>
                Active noise cancellation and 30h battery life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" 
                alt="Premium headphones"
                className="aspect-video w-full rounded-lg object-cover"
              />  
              <p className="mt-4 text-2xl font-bold">$149.90</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button className="flex-1">Add to cart</Button>
              <Button variant="outline">Favorite</Button>
            </CardFooter>
          </Card>
        </div>
      ),
    },
    {
      id: "user-profile",
      title: "User profile",
      description:
        "Card with lifted variant to highlight profile information on dashboards or team pages.",
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";

export function UserProfile() {
  return (
    <Card variant="lifted" className="max-w-xs">
      <CardHeader className="items-center">
        <Image 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" 
          alt="Sarah Johnson"
          width={80}
          height={80}
          className="size-20 rounded-full object-cover"
        />
        <CardTitle className="mt-4">Sarah Johnson</CardTitle>
        <CardDescription>Product Designer</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>📍 San Francisco, CA</p>
          <p>✉️ sarah.johnson@example.com</p>
          <p>🔗 linkedin.com/in/sarahjohnson</p>
        </div>
      </CardContent>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card variant="lifted" className="max-w-xs">
            <CardHeader className="items-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" 
                alt="Sarah Johnson"
                className="size-20 rounded-full object-cover"
              />
              <CardTitle className="mt-4">Sarah Johnson</CardTitle>
              <CardDescription>Product Designer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 San Francisco, CA</p>
                <p>✉️ sarah.johnson@example.com</p>
                <p>🔗 linkedin.com/in/sarahjohnson</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "pricing-card",
      title: "Premium pricing card",
      description:
        "Gradient variant to highlight premium plans or special offers on pricing pages.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";

export function PricingCard() {
  return (
    <Card variant="gradient" className="max-w-sm">
      <CardHeader>
        <CardDescription>Premium Plan</CardDescription>
        <CardTitle className="text-3xl">
          $49<span className="text-base font-normal">/month</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>Unlimited access to all features</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>24/7 priority support</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>Advanced data export</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>Custom integrations</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg">
          Get started
        </Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card variant="gradient" className="max-w-sm">
            <CardHeader>
              <CardDescription>Premium Plan</CardDescription>
              <CardTitle className="text-3xl">
                $49<span className="text-base font-normal">/month</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Unlimited access to all features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Advanced data export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Custom integrations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Get started
              </Button>
            </CardFooter>
          </Card>
        </div>
      ),
    },
    {
      id: "stats-card",
      title: "Statistics card",
      description:
        "ShadowRight variant for dashboards with metrics and performance indicators.",
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";

export function StatsCard() {
  return (
    <Card variant="shadowRight" className="max-w-xs">
      <CardHeader>
        <CardDescription>Sales this month</CardDescription>
        <CardTitle className="text-4xl">1,234</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-600 dark:text-green-400">↑ 23%</span>
          <span className="text-muted-foreground">vs. last month</span>
        </div>
      </CardContent>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card variant="shadowRight" className="max-w-xs">
            <CardHeader>
              <CardDescription>Sales this month</CardDescription>
              <CardTitle className="text-4xl">1,234</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600 dark:text-green-400">
                  ↑ 23%
                </span>
                <span className="text-muted-foreground">vs. last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "blog-post",
      title: "Blog post card",
      description:
        "Default card for article listings with featured image, title, description, and metadata.",
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";

export function BlogPostCard() {
  return (
    <Card className="max-w-md">
      <CardHeader className="p-0">
        <Image 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
          alt="Coding on laptop"
          width={800}
          height={450}
          className="aspect-video w-full overflow-hidden rounded-t-xl object-cover"
        />
      </CardHeader>
      <CardContent className="pt-6">
        <CardTitle>How to create reusable components</CardTitle>
        <CardDescription className="mt-2">
          Learn best practices for building a scalable and maintainable
          component library.
        </CardDescription>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        <span>By John Smith</span>
        <span className="mx-2">•</span>
        <span>5 min read</span>
      </CardFooter>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card className="max-w-md">
            <CardHeader className="p-0">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                alt="Coding on laptop"
                width={800}
                height={450}
                className="aspect-video w-full overflow-hidden rounded-t-xl object-cover"
              />
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle>How to create reusable components</CardTitle>
              <CardDescription className="mt-2">
                Learn best practices for building a scalable and maintainable
                component library.
              </CardDescription>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              <span>By John Smith</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </CardFooter>
          </Card>
        </div>
      ),
    },
    {
      id: "notification-card",
      title: "Notification card",
      description:
        "Corners variant to highlight notifications, alerts, or important messages.",
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";

export function NotificationCard() {
  return (
    <Card variant="corners" className="max-w-sm">
      <CardHeader>
        <CardTitle>New message</CardTitle>
        <CardDescription>5 minutes ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          You received a reply to your comment on the design system
          project.
        </p>
      </CardContent>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card variant="corners" className="max-w-sm">
            <CardHeader>
              <CardTitle>New message</CardTitle>
              <CardDescription>5 minutes ago</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                You received a reply to your comment on the design system
                project.
              </p>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "gradient-feature",
      title: "Gradient feature card",
      description:
        "Gradient variant with custom colors to highlight premium features or special offers.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";

export function GradientFeatureCard() {
  return (
    <Card 
      variant="gradient" 
      gradientClassName="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400"
      className="max-w-sm"
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-500/10 p-2">
            <svg 
              className="size-6 text-blue-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" 
              />
            </svg>
          </div>
          <div>
            <CardTitle>Pro Feature</CardTitle>
            <CardDescription>Unlock advanced capabilities</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Get access to AI-powered insights, advanced analytics, and 
          priority support with our Pro plan.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upgrade to Pro</Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card 
            variant="gradient" 
            gradientClassName="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400"
            className="max-w-sm"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <svg 
                    className="size-6 text-blue-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 10V3L4 14h7v7l9-11h-7z" 
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle>Pro Feature</CardTitle>
                  <CardDescription>Unlock advanced capabilities</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get access to AI-powered insights, advanced analytics, and 
                priority support with our Pro plan.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Upgrade to Pro</Button>
            </CardFooter>
          </Card>
        </div>
      ),
    },
    {
      id: "crosshair-technical",
      title: "Technical specification card",
      description:
        "Crosshair variant for technical documentation, API specs, or development-related content.",
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";

export function TechnicalCard() {
  return (
    <Card variant="crosshair" className="max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>API Endpoint</CardTitle>
          <span className="rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600 dark:text-green-400">
            GET
          </span>
        </div>
        <CardDescription className="font-mono text-xs">
          /api/v1/users/:id
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-medium">Response</h4>
              <pre className="rounded-md bg-zinc-950 p-3 text-xs text-zinc-50 dark:bg-accent">
{JSON.stringify({
  id: "123",
  name: "John Doe",
  email: "john@example.com"
}, null, 2)}
          </pre>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Status:</span>
          <span className="font-medium text-green-600 dark:text-green-400">
            200 OK
          </span>
        </div>
      </CardContent>
    </Card>
  );
}`,
      preview: (
        <div className="flex justify-center">
          <Card variant="crosshair" className="max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>API Endpoint</CardTitle>
                <span className="rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                  GET
                </span>
              </div>
              <CardDescription className="font-mono text-xs">
                /api/v1/users/:id
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 text-sm font-medium">Response</h4>
                <pre className="rounded-md bg-zinc-950 p-3 text-xs text-zinc-50 dark:bg-accent">
{JSON.stringify({
  id: "123",
  name: "John Doe",
  email: "john@example.com"
}, null, 2)}
                </pre>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Status:</span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  200 OK
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "variants-showcase",
      title: "All variants",
      description: "Visual demonstration of all available variants.",
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";

export function CardVariants() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard variant with rounded borders</CardDescription>
        </CardHeader>
        <CardContent>
          Ideal for general use throughout the application.
        </CardContent>
      </Card>

      <Card variant="lifted">
        <CardHeader>
          <CardTitle>Lifted</CardTitle>
          <CardDescription>Elevated 3D effect</CardDescription>
        </CardHeader>
        <CardContent>
          Perfect for interactive elements.
        </CardContent>
      </Card>

      <Card variant="shadowRight">
        <CardHeader>
          <CardTitle>Shadow Right</CardTitle>
          <CardDescription>Right side shadow</CardDescription>
        </CardHeader>
        <CardContent>
          Great for dashboards and metrics.
        </CardContent>
      </Card>

      <Card variant="gradient" gradientClassName="bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500">
        <CardHeader>
          <CardTitle>Gradient</CardTitle>
          <CardDescription>Animated gradient border</CardDescription>
        </CardHeader>
        <CardContent>
          Highlight for premium content.
        </CardContent>
      </Card>

      <Card variant="corners">
        <CardHeader>
          <CardTitle>Corners</CardTitle>
          <CardDescription>Corner details</CardDescription>
        </CardHeader>
        <CardContent>
          Excellent for notifications.
        </CardContent>
      </Card>

      <Card variant="crosshair">
        <CardHeader>
          <CardTitle>Crosshair</CardTitle>
          <CardDescription>Corner markers</CardDescription>
        </CardHeader>
        <CardContent>
          Technical and modern look.
        </CardContent>
      </Card>
    </div>
  );
}`,
      preview: (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Default</CardTitle>
              <CardDescription>Standard variant</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">General use</CardContent>
          </Card>

          <Card variant="lifted">
            <CardHeader>
              <CardTitle>Lifted</CardTitle>
              <CardDescription>3D effect</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">Interactive elements</CardContent>
          </Card>

          <Card variant="shadowRight">
            <CardHeader>
              <CardTitle>Shadow Right</CardTitle>
              <CardDescription>Side shadow</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">Dashboards</CardContent>
          </Card>

          <Card variant="gradient" gradientClassName="bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500">
            <CardHeader>
              <CardTitle>Gradient</CardTitle>
              <CardDescription>Gradient border</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">Premium content</CardContent>
          </Card>
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
};
  