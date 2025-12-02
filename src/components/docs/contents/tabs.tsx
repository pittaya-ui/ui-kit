import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ComponentDoc } from "@/lib/docs/types";

export const tabsDoc: ComponentDoc = {
  slug: "tabs",
  metadata: {
    name: "Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    category: "Navigation",
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
            Use Tabs when you need to organize related content into different
            categories or views, allowing users to easily switch between them
            without leaving the current context.
          </p>
          <p>
            Ideal for settings panels, dashboards with different views, forms
            with multiple sections, or any interface that benefits from
            horizontal navigation between related content.
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
              Use short and descriptive labels for tabs, preferably a single
              word or short phrase.
            </li>
            <li>
              Limit the number of tabs to 5-7 to avoid cognitive overload. If
              you need more, consider a different navigation pattern.
            </li>
            <li>
              Maintain consistency in tab order across different pages and
              contexts.
            </li>
            <li>
              Avoid nesting tabs within tabs, as this can confuse users about
              the current context.
            </li>
            <li>
              Consider adding icons to tabs when it helps with quick visual
              identification of content.
            </li>
            <li>
              Each tab&apos;s content should be independent and not depend on
              viewing other tabs.
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
            The component is built on top of <code>@radix-ui/react-tabs</code>,
            following WAI-ARIA specifications for tabs. This ensures:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Keyboard navigation with left/right arrow keys between tabs.
            </li>
            <li>
              Full screen reader support with appropriate ARIA roles and
              attributes.
            </li>
            <li>Visible focus states through defined style classes.</li>
            <li>
              The <code>Tab</code> key moves focus from TabsList to the active
              content.
            </li>
            <li>
              The <code>Home</code> and <code>End</code> keys navigate to the
              first and last tab, respectively.
            </li>
          </ul>
          <p className="mt-4">
            Ensure that each panel&apos;s content is semantic and accessible,
            maintaining proper heading hierarchies and structure.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "defaultValue",
      type: "string",
      description:
        "The value of the tab that should be active by default when the component is mounted.",
    },
    {
      name: "value",
      type: "string",
      description:
        "The controlled value of the active tab. Use in conjunction with onValueChange to create a controlled component.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description:
        "Callback executed when the active tab value changes. Useful for controlled components and analytics tracking.",
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      defaultValue: '"horizontal"',
      description:
        "Defines the orientation of the tabs component, affecting keyboard navigation and layout.",
    },
    {
      name: "dir",
      type: '"ltr" | "rtl"',
      description:
        "The reading direction of the component. Affects keyboard navigation and visual positioning.",
    },
    {
      name: "activationMode",
      type: '"automatic" | "manual"',
      defaultValue: '"automatic"',
      description:
        "Defines whether tabs are activated automatically when focused (automatic) or require Enter/Space (manual).",
    },
  ],
  examples: [
    {
      id: "login-signup",
      title: "Login and Sign Up",
      description:
        "A common use case for tabs: switching between login and registration forms.",
      code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/pittaya/ui/tabs";
import { Button } from "@/components/pittaya/ui/button";

export function LoginSignupTabs() {
  return (
    <Tabs defaultValue="login" className="w-full max-w-md">
      <TabsList className="w-full">
        <TabsTrigger value="login" className="flex-1">
          Login
        </TabsTrigger>
        <TabsTrigger value="signup" className="flex-1">
          Sign Up
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="login" className="animate-in fade-in-0 slide-in-from-left-4 space-y-4 duration-300">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
        <Button className="w-full">Sign In</Button>
      </TabsContent>
      
      <TabsContent value="signup" className="animate-in fade-in-0 slide-in-from-right-4 space-y-4 duration-300">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="signup-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="signup-password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
        <Button className="w-full">Create Account</Button>
      </TabsContent>
    </Tabs>
  );
}`,
      preview: (
        <Tabs defaultValue="login" className="w-full max-w-md">
          <TabsList className="w-full">
            <TabsTrigger value="login" className="flex-1">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="flex-1">
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="login"
            className="animate-in fade-in-0 slide-in-from-left-4 space-y-4 duration-300"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <Button className="w-full">Sign In</Button>
          </TabsContent>

          <TabsContent
            value="signup"
            className="animate-in fade-in-0 slide-in-from-right-4 space-y-4 duration-300"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="signup-email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                placeholder="name@example.com"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="signup-password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <Button className="w-full">Create Account</Button>
          </TabsContent>
        </Tabs>
      ),
    },
    {
      id: "notifications",
      title: "Notifications Center",
      description:
        "Organize notifications by status - a practical example for dashboards and user interfaces.",
      code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/pittaya/ui/tabs";
import { Button } from "@/components/pittaya/ui/button";

export function NotificationsTabs() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="unread">Unread (3)</TabsTrigger>
        <TabsTrigger value="archived">Archived</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="space-y-3">
        <div className="flex items-start gap-3 rounded-lg border p-4">
          <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">New message received</p>
            <p className="text-xs text-muted-foreground">
              John Doe sent you a message
            </p>
            <p className="text-xs text-muted-foreground">2 minutes ago</p>
          </div>
          <Button size="sm" variant="ghost">Mark as read</Button>
        </div>
        
        <div className="flex items-start gap-3 rounded-lg border p-4">
          <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Payment successful</p>
            <p className="text-xs text-muted-foreground">
              Your subscription has been renewed
            </p>
            <p className="text-xs text-muted-foreground">1 hour ago</p>
          </div>
          <Button size="sm" variant="ghost">Archive</Button>
        </div>
        
        <div className="flex items-start gap-3 rounded-lg border p-4 opacity-60">
          <div className="h-2 w-2 rounded-full bg-gray-300 mt-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">System update</p>
            <p className="text-xs text-muted-foreground">
              New features are now available
            </p>
            <p className="text-xs text-muted-foreground">1 day ago</p>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="unread" className="space-y-3">
        <div className="flex items-start gap-3 rounded-lg border p-4">
          <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">New message received</p>
            <p className="text-xs text-muted-foreground">
              John Doe sent you a message
            </p>
            <p className="text-xs text-muted-foreground">2 minutes ago</p>
          </div>
          <Button size="sm" variant="ghost">Mark as read</Button>
        </div>
        
        <div className="flex items-start gap-3 rounded-lg border p-4">
          <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Payment successful</p>
            <p className="text-xs text-muted-foreground">
              Your subscription has been renewed
            </p>
            <p className="text-xs text-muted-foreground">1 hour ago</p>
          </div>
          <Button size="sm" variant="ghost">Archive</Button>
        </div>
        
        <div className="flex items-start gap-3 rounded-lg border p-4">
          <div className="h-2 w-2 rounded-full bg-orange-500 mt-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Upcoming deadline</p>
            <p className="text-xs text-muted-foreground">
              Project review is due tomorrow
            </p>
            <p className="text-xs text-muted-foreground">3 hours ago</p>
          </div>
          <Button size="sm" variant="ghost">View</Button>
        </div>
      </TabsContent>
      
      <TabsContent value="archived" className="space-y-3">
        <div className="flex items-start gap-3 rounded-lg border p-4 opacity-60">
          <div className="h-2 w-2 rounded-full bg-gray-300 mt-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Welcome to the platform</p>
            <p className="text-xs text-muted-foreground">
              Get started with our quick tutorial
            </p>
            <p className="text-xs text-muted-foreground">5 days ago</p>
          </div>
          <Button size="sm" variant="ghost">Restore</Button>
        </div>
        
        <div className="flex items-start gap-3 rounded-lg border p-4 opacity-60">
          <div className="h-2 w-2 rounded-full bg-gray-300 mt-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Profile updated</p>
            <p className="text-xs text-muted-foreground">
              Your profile information has been saved
            </p>
            <p className="text-xs text-muted-foreground">1 week ago</p>
          </div>
          <Button size="sm" variant="ghost">Delete</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}`,
      preview: (
        <Tabs defaultValue="all" className="mx-5 w-full">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread (3)</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">New message received</p>
                <p className="text-muted-foreground text-xs">
                  John Doe sent you a message
                </p>
                <p className="text-muted-foreground text-xs">2 minutes ago</p>
              </div>
              <Button size="sm" variant="ghost">
                Mark as read
              </Button>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-4">
              <div className="mt-2 h-2 w-2 rounded-full bg-green-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Payment successful</p>
                <p className="text-muted-foreground text-xs">
                  Your subscription has been renewed
                </p>
                <p className="text-muted-foreground text-xs">1 hour ago</p>
              </div>
              <Button size="sm" variant="ghost">
                Archive
              </Button>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-4 opacity-60">
              <div className="mt-2 h-2 w-2 rounded-full bg-gray-300" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">System update</p>
                <p className="text-muted-foreground text-xs">
                  New features are now available
                </p>
                <p className="text-muted-foreground text-xs">1 day ago</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="unread" className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">New message received</p>
                <p className="text-muted-foreground text-xs">
                  John Doe sent you a message
                </p>
                <p className="text-muted-foreground text-xs">2 minutes ago</p>
              </div>
              <Button size="sm" variant="ghost">
                Mark as read
              </Button>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-4">
              <div className="mt-2 h-2 w-2 rounded-full bg-green-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Payment successful</p>
                <p className="text-muted-foreground text-xs">
                  Your subscription has been renewed
                </p>
                <p className="text-muted-foreground text-xs">1 hour ago</p>
              </div>
              <Button size="sm" variant="ghost">
                Archive
              </Button>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-4">
              <div className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Upcoming deadline</p>
                <p className="text-muted-foreground text-xs">
                  Project review is due tomorrow
                </p>
                <p className="text-muted-foreground text-xs">3 hours ago</p>
              </div>
              <Button size="sm" variant="ghost">
                View
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="archived" className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border p-4 opacity-60">
              <div className="mt-2 h-2 w-2 rounded-full bg-gray-300" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Welcome to the platform</p>
                <p className="text-muted-foreground text-xs">
                  Get started with our quick tutorial
                </p>
                <p className="text-muted-foreground text-xs">5 days ago</p>
              </div>
              <Button size="sm" variant="ghost">
                Restore
              </Button>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-4 opacity-60">
              <div className="mt-2 h-2 w-2 rounded-full bg-gray-300" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Profile updated</p>
                <p className="text-muted-foreground text-xs">
                  Your profile information has been saved
                </p>
                <p className="text-muted-foreground text-xs">1 week ago</p>
              </div>
              <Button size="sm" variant="ghost">
                Delete
              </Button>
            </div>
          </TabsContent>
        </Tabs>
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
