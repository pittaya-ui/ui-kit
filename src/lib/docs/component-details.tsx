import { ScrollingAnimationOrbit } from "@/components/scrolling-animation";
import { Button } from "@/components/ui/button";

import type { ComponentDoc } from "./types";

const buttonDoc: ComponentDoc = {
  slug: "button",
  metadata: {
    name: "Button",
    description:
      "An accessible and customizable button that provides variants for primary, secondary, and destructive actions.",
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
      code: `import { Button } from "@/components/ui/button";

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
import { Button } from "@/components/ui/button";

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
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "accessibility", title: "Accessibility", level: 2 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
};

const scrollingAnimationOrbitDoc: ComponentDoc = {
  slug: "scrolling-animation-orbit",
  metadata: {
    name: "Scrolling Animation Orbit",
    description:
      "A scroll-activated orbit animation that places images around concentric circles and keeps them rotating once fully visible.",
    category: "Components",
    status: "stable",
  },
  sections: [
    {
      id: "quando-usar",
      title: "When to use",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            Use this orbit animation to showcase testimonials, team avatars, or
            brand logos in a dynamic way that reacts to the user&apos;s scroll
            position.
          </p>
          <p>
            It is ideal for hero sections where you want to highlight motion and
            visual storytelling without relying on heavy video assets.
          </p>
        </div>
      ),
    },
    {
      id: "boas-praticas",
      title: "Best practices",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Provide at least four images to ensure the orbit feels balanced
              and avoid uneven clustering.
            </li>
            <li>
              Prefer square assets with generous borders to preserve clarity in
              smaller device breakpoints.
            </li>
            <li>
              Combine the component with contrasting background colors so the
              animated borders remain visible in both light and dark mode.
            </li>
          </ul>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "title",
      type: "string",
      required: true,
      description:
        "Supporting copy rendered inside the orbit to reinforce the visual message.",
    },
    {
      name: "buttonText",
      type: "string",
      required: true,
      description: "Call to action label displayed below the orbit title.",
    },
    {
      name: "classNameButton",
      type: "string",
      description: "Tailwind classes to extend the CTA button styling.",
    },
    {
      name: "outsideBorderColor",
      type: "string",
      description:
        "Utility classes to customize the outer circle border color.",
    },
    {
      name: "middleBorderColor",
      type: "string",
      description:
        "Utility classes to customize the middle circle border color.",
    },
    {
      name: "innerBorderColor",
      type: "string",
      description:
        "Utility classes to customize the inner circle border color.",
    },
    {
      name: "images",
      type: "string[]",
      required: true,
      description:
        "List of image URLs to distribute evenly around the orbit. Accepts any length.",
    },
  ],
  examples: [
    {
      id: "orbit-basic",
      title: "Basic orbit",
      description:
        "Scroll until the orbit reaches 80% of the viewport to expand the circles and trigger the rotation.",
      code: `import { ScrollingAnimationOrbit } from "@/components/scrolling-animation";

const images = [
  "https://github.com/marcosvbueno.png",
  "https://github.com/lucasadsr.png",
  "https://github.com/jjgouveia.png",
  "https://github.com/marcosvbueno.png",
  "https://github.com/lucasadsr.png",
  "https://github.com/jjgouveia.png",
];

export function OrbitDemo() {
  return (
    <ScrollingAnimationOrbit
      title="Build trust and highlight your community with a dynamic orbit."
      buttonText="Join the crew"
      images={images}
    />
  );
}`,
      preview: (
        <div className="bg-background">
          <ScrollingAnimationOrbit
            title="Build trust and highlight your community with a dynamic orbit."
            buttonText="Join the crew"
            images={[
              "https://github.com/marcosvbueno.png",
              "https://github.com/lucasadsr.png",
              "https://github.com/jjgouveia.png",
              "https://github.com/marcosvbueno.png",
              "https://github.com/lucasadsr.png",
              "https://github.com/jjgouveia.png",
            ]}
          />
        </div>
      ),
    },
  ],
  toc: [
    { id: "quando-usar", title: "When to use", level: 2 },
    { id: "boas-praticas", title: "Best practices", level: 2 },
    { id: "exemplos", title: "Examples", level: 2 },
    { id: "propriedades", title: "Properties", level: 2 },
  ],
};

const docs: Record<string, ComponentDoc> = {
  [buttonDoc.slug]: buttonDoc,
  [scrollingAnimationOrbitDoc.slug]: scrollingAnimationOrbitDoc,
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return docs[slug];
}

export function getAllComponentDocs(): ComponentDoc[] {
  return Object.values(docs);
}
