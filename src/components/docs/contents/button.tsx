import { Button } from "@/components/ui/button";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

export const buttonDoc: ComponentDoc = createComponentDoc({
  slug: "button",
  metadata: {
    name: "Button",
    description:
      "An accessible and customizable button that provides variants for primary, secondary, and destructive actions.",
    category: "Actions",
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
            Use the button whenever you need to highlight an action that the
            user can execute, such as submitting forms, opening dialogs, or
            confirming critical flows.
          </p>
          <p>
            Combine the available variants to communicate visual priority while
            maintaining consistency throughout the interface.
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
              Prefer short imperative verbs, such as &quot;Save&quot; or
              &quot;Submit&quot;.
            </li>
            <li>
              Select the <code>destructive</code> variant only for irreversible
              actions.
            </li>
            <li>
              Combine icons with text when you need to convey meaning quickly,
              maintaining the proportion defined in the default styles.
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
            The component inherits native <code>button</code> attributes,
            including keyboard support and focus states. Make sure to provide
            descriptive labels through the children prop or{" "}
            <code>aria-label</code> attribute when using icons alone.
          </p>
          <p>
            Focus states are visible thanks to the utility classes defined in{" "}
            <code>buttonVariants</code>; customize them according to your design
            system guidelines.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
      defaultValue: '"default"',
      description:
        "Defines the visual style of the button. Use the variant that best communicates the importance of the action.",
    },
    {
      name: "size",
      type: '"default" | "sm" | "lg" | "icon"',
      defaultValue: '"default"',
      description:
        "Controls the internal spacing and height of the button, allowing adaptations for toolbars, cards, or primary CTAs.",
    },
    {
      name: "asChild",
      type: "boolean",
      defaultValue: "false",
      description:
        "When enabled, uses Radix's slot to pass styles to the child component, useful for transforming links into styled buttons.",
    },
  ],
  examples: [
    {
      id: "variants",
      title: "Default variants",
      description:
        "Demonstration of available variants to communicate action hierarchy.",
      code: `import { Button } from "@/components/pittaya/ui/button";

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`,
      preview: (
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      ),
    },
    {
      id: "with-icon",
      title: "With icon",
      description: "Use icons to reinforce context when space is limited.",
      code: `import { ArrowRight } from "lucide-react";
import { Button } from "@/components/pittaya/ui/button";

export function ButtonWithIcon() {
  return (
    <Button>
      Continue
      <ArrowRight className="size-4" />
    </Button>
  );
}`,
      preview: (
        <Button>
          Continue
          <span aria-hidden className="inline-flex items-center justify-center">
            →
          </span>
        </Button>
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
    preview: <Button>See more</Button>,
    code: `import { Button } from "@/components/pittaya/ui/button";

export function ButtonExample() {
  return <Button>See more</Button>;
}`,
  },
});
