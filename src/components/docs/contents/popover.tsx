import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

export const popoverDoc: ComponentDoc = createComponentDoc({
  slug: "popover",
  metadata: {
    name: "Popover",
    description:
      "A floating content container that displays rich content in a portal, positioned relative to a trigger element.",
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
            Use Popover when you need to display additional information,
            actions, or controls in a lightweight overlay without navigating
            away from the current context. It&apos;s perfect for tooltips with
            rich content, quick actions, or contextual information.
          </p>
          <p>
            Popovers are ideal for displaying content like user profiles, color
            pickers, date selectors, or action menus that need to appear
            temporarily and shouldn&apos;t interrupt the user&apos;s workflow.
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
              Keep popover content concise and focused on a single purpose or
              piece of information.
            </li>
            <li>
              Position popovers so they don&apos;t obscure important content or
              trigger elements.
            </li>
            <li>
              Use popovers for secondary actions or information—critical actions
              should be more prominent.
            </li>
            <li>
              Ensure popovers are dismissible by clicking outside or pressing
              the Escape key.
            </li>
            <li>
              Avoid nesting multiple popovers—this creates a poor user
              experience and confusion.
            </li>
            <li>
              Consider using dialogs instead of popovers for complex forms or
              multi-step interactions.
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
            The Popover component is built on Radix UI primitives and includes
            comprehensive accessibility features. It manages focus
            automatically, supports keyboard navigation, and includes proper
            ARIA attributes for screen readers.
          </p>
          <p>
            Users can close popovers with the Escape key, and focus is properly
            managed when the popover opens and closes. The component uses{" "}
            <code>Portal</code> to render content in a separate DOM tree,
            preventing z-index issues while maintaining accessibility.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "open",
      type: "boolean",
      description:
        "Controls the open state of the popover. Use with onOpenChange for controlled behavior.",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description:
        "Callback fired when the popover open state changes. Use with open for controlled behavior.",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      defaultValue: "false",
      description: "The initial open state when the popover is uncontrolled.",
    },
    {
      name: "modal",
      type: "boolean",
      defaultValue: "false",
      description:
        "When true, interaction with outside elements is disabled and only the popover content is visible to screen readers.",
    },
    {
      name: "align",
      type: '"start" | "center" | "end"',
      defaultValue: '"center"',
      description:
        "The preferred alignment of the popover relative to the trigger element.",
    },
    {
      name: "side",
      type: '"top" | "right" | "bottom" | "left"',
      defaultValue: '"bottom"',
      description:
        "The preferred side of the trigger to position the popover against.",
    },
    {
      name: "sideOffset",
      type: "number",
      defaultValue: "4",
      description: "The distance in pixels from the trigger element.",
    },
    {
      name: "alignOffset",
      type: "number",
      defaultValue: "0",
      description: "The distance in pixels from the aligned edge.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic popover",
      description: "A simple popover with text content triggered by a button.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/pittaya/ui/popover";

export function BasicPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
      preview: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="leading-none font-medium">Dimensions</h4>
              <p className="text-muted-foreground text-sm">
                Set the dimensions for the layer.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      id: "with-form",
      title: "With form controls",
      description: "Popover containing form elements for quick data entry.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/pittaya/ui/popover";

export function PopoverWithForm() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Profile Settings</h4>
            <p className="text-sm text-muted-foreground">
              Update your profile information.
            </p>
          </div>
          <div className="space-y-3">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                defaultValue="John Doe"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                defaultValue="john@example.com"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Button className="w-full" size="sm">
              Save changes
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
      preview: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Edit profile</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">Profile Settings</h4>
                <p className="text-muted-foreground text-sm">
                  Update your profile information.
                </p>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    defaultValue="John Doe"
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    defaultValue="john@example.com"
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button className="w-full" size="sm">
                  Save changes
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      id: "positioning",
      title: "Custom positioning",
      description: "Control the popover position using side and align props.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/pittaya/ui/popover";

export function PopoverPositioning() {
  return (
    <div className="flex gap-3 flex-wrap">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p className="text-sm">Positioned at the top</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p className="text-sm">Positioned on the right</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p className="text-sm">Positioned at the bottom</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p className="text-sm">Positioned on the left</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}`,
      preview: (
        <div className="flex flex-wrap gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Top</Button>
            </PopoverTrigger>
            <PopoverContent side="top">
              <p className="text-sm">Positioned at the top</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Right</Button>
            </PopoverTrigger>
            <PopoverContent side="right">
              <p className="text-sm">Positioned on the right</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <p className="text-sm">Positioned at the bottom</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Left</Button>
            </PopoverTrigger>
            <PopoverContent side="left">
              <p className="text-sm">Positioned on the left</p>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      id: "user-menu",
      title: "User menu",
      description: "Real-world example of a user menu with profile actions.",
      code: `import { LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/pittaya/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/pittaya/ui/popover";

export function UserMenuPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>
          <div className="border-t pt-3 space-y-1">
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
              <User className="size-4" />
              Profile
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
              <Settings className="size-4" />
              Settings
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-destructive hover:bg-destructive/10">
              <LogOut className="size-4" />
              Log out
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
      preview: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56" align="end">
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-muted-foreground text-xs">
                  john@example.com
                </p>
              </div>
              <div className="space-y-1 border-t pt-3">
                <button className="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Profile
                </button>
                <button className="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Settings
                </button>
                <button className="text-destructive hover:bg-destructive/10 flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                  Log out
                </button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
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
    code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/pittaya/ui/popover";

export function BasicPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
    preview: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    ),
  },
});
