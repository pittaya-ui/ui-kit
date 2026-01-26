import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import {
  DefaultInputPreview,
  DisabledInputPreview,
  FloatingInputPreview,
  FloatingInsideInputPreview,
  FormExamplePreview,
  OutlinedInputPreview,
  VariantsComparisonPreview,
} from "./input-examples";

export const inputDoc: ComponentDoc = createComponentDoc({
  slug: "input",
  metadata: {
    name: "Input",
    description:
      "A versatile and accessible input field with multiple variants including floating labels and outlined styles for modern form interfaces.",
    category: "Forms",
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
            Use the Input component when you need to collect textual data from
            users. It&apos;s ideal for forms, search interfaces, and any
            scenario where users need to enter information like names, emails,
            passwords, or other text-based data.
          </p>
          <p>
            The component offers multiple variants to match different design
            patterns: floating labels for modern interfaces, outlined style for
            Material Design aesthetics, and traditional inputs for classic
            forms.
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
              Always provide descriptive labels for accessibility, using the{" "}
              <code>label</code> prop for floating/outlined variants or the{" "}
              <code>Label</code> component for default inputs.
            </li>
            <li>
              Use appropriate <code>type</code> attributes (email, password,
              number) to enable browser validation and mobile keyboard
              optimization.
            </li>
            <li>
              Provide helpful placeholders that exemplify the expected format,
              but don&apos;t rely on them as the only form of instruction.
            </li>
            <li>
              Validate data on both client and server sides for better UX and
              security.
            </li>
            <li>
              Choose the variant that best fits your design system: floating for
              modern apps, outlined for Material Design, or default for
              traditional forms.
            </li>
            <li>
              Provide clear error messages using <code>aria-invalid</code> and
              error text when validation fails.
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
            The Input component is built with accessibility in mind, following
            WAI-ARIA best practices for form controls.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Always associate inputs with labels using the <code>label</code>{" "}
              prop or <code>htmlFor</code> attributes.
            </li>
            <li>
              The component automatically handles <code>aria-invalid</code>{" "}
              states with visual feedback through ring colors.
            </li>
            <li>
              Floating and outlined variants maintain label visibility at all
              times, improving accessibility for users with cognitive
              disabilities.
            </li>
            <li>
              The component supports <code>disabled</code> state with proper
              styling and cursor behavior.
            </li>
            <li>
              Focus states are clearly visible with ring indicators for keyboard
              navigation users.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "variants",
      title: "Variants",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>The Input component offers four distinct variants:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Default</strong> - Standard input field with traditional
              styling, best paired with an external Label component.
            </li>
            <li>
              <strong>Floating</strong> - Label starts inside the input and
              animates to float above the border when focused or filled. Creates
              a modern, space-efficient design.
            </li>
            <li>
              <strong>Floating Inside</strong> - Label starts centered in the
              input and animates to the top-left corner when focused or filled,
              remaining within the input boundaries.
            </li>
            <li>
              <strong>Outlined</strong> - Material Design style with the label
              positioned on the border, creating a clean outlined appearance.
              Label animates from inside to the border on focus/fill.
            </li>
          </ul>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"default" | "floating" | "floatingInside" | "outlined"',
      defaultValue: '"default"',
      description:
        "Defines the visual style and label behavior of the input. Each variant offers unique animations and positioning.",
    },
    {
      name: "label",
      type: "string",
      description:
        "Label text for floating, floatingInside, and outlined variants. If not provided, falls back to the placeholder value.",
    },
    {
      name: "type",
      type: '"text" | "email" | "password" | "number" | "tel" | "url" | ...',
      defaultValue: '"text"',
      description:
        "Defines the input type, controlling validation behavior and mobile keyboard type.",
    },
    {
      name: "placeholder",
      type: "string",
      description:
        "Example text displayed when the field is empty (for default variant) or used as fallback label.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables interaction with the field and applies disabled styling.",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to customize the input appearance.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default input",
      description:
        "Standard input field with traditional styling, best used with an external Label component.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";
import { Label } from "@/components/pittaya/ui/label";

export function DefaultInput() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Subscribe</CardTitle>
        <CardDescription>
          Join our newsletter for weekly updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-default">Email address</Label>
          <Input
            id="email-default"
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Subscribe</Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: <DefaultInputPreview />,
    },
    {
      id: "floating",
      title: "Floating label",
      description:
        "Label starts inside the input and floats above the border when focused or filled, creating a modern space-efficient design.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";

export function FloatingInput() {
  return (
    <Card variant="shadowRight" className="w-full max-w-sm bg-background">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Welcome back! Please sign in to continue.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 pt-4">
        <Input variant="floating" label="Email address" type="email" />
        <Input variant="floating" label="Password" type="password" />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: <FloatingInputPreview />,
    },
    {
      id: "floating-inside",
      title: "Floating label inside",
      description:
        "Label animates from center to top-left corner, remaining within the input boundaries. Perfect for compact forms.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";

export function FloatingInsideInput() {
  return (
    <Card variant="corners" className="w-full max-w-sm bg-background">
      <CardHeader>
        <CardTitle>Profile Details</CardTitle>
        <CardDescription>Update your personal information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input variant="floatingInside" label="First Name" type="text" />
          <Input variant="floatingInside" label="Last Name" type="text" />
        </div>
        <Input variant="floatingInside" label="Job Title" type="text" />
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: <FloatingInsideInputPreview />,
    },
    {
      id: "outlined",
      title: "Outlined input",
      description:
        "Material Design style with label positioned on the border. Label animates from inside to the border on focus or when filled.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";

export function OutlinedInput() {
  return (
    <Card variant="lifted" className="w-full max-w-sm bg-background">
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>Add a new credit card securely.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 pt-2">
        <Input variant="outlined" label="Card Number" type="text" />
        <div className="grid grid-cols-2 gap-4">
          <Input variant="outlined" label="Expiry Date" type="text" />
          <Input variant="outlined" label="CVC" type="text" />
        </div>
        <Input variant="outlined" label="Cardholder Name" type="text" />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add Card</Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: <OutlinedInputPreview />,
    },
    {
      id: "disabled",
      title: "Disabled state",
      description:
        "Inputs can be disabled to prevent user interaction, with appropriate visual feedback.",
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";
import { Label } from "@/components/pittaya/ui/label";

export function DisabledInput() {
  return (
    <Card className="w-full max-w-sm border-dashed">
      <CardHeader>
        <CardTitle>Archived Project</CardTitle>
        <CardDescription>
          This project is read-only and cannot be edited.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          variant="outlined"
          label="Project Name"
          value="Website Redesign 2023"
          disabled
        />
        <Input
          variant="floating"
          label="Project ID"
          value="PRJ-8839-X"
          disabled
        />
        <div className="space-y-2">
          <Label className="text-muted-foreground">Status</Label>
          <Input value="Completed" disabled className="bg-muted/50" />
        </div>
      </CardContent>
    </Card>
  );
}`,
      preview: <DisabledInputPreview />,
    },
    {
      id: "form-example",
      title: "Complete form",
      description:
        "A complete form example demonstrating different input variants working together.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import { Card } from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";
import { Label } from "@/components/pittaya/ui/label";
import { User } from "lucide-react";

export function FormExample() {
  return (
    <Card variant="gradient" className="w-full max-w-md p-[1px]">
      <div className="bg-card h-full w-full rounded-[11px] p-6">
        <div className="mb-6 space-y-2">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Contact Sales
          </h3>
          <p className="text-muted-foreground text-sm">
            Fill out the form below and we'll get back to you.
          </p>
        </div>

        <form className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name-form">Full Name</Label>
            <div className="relative">
              <User className="text-muted-foreground absolute left-3 top-2.5 size-4" />
              <Input
                id="name-form"
                type="text"
                placeholder="John Doe"
                className="pl-9"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input variant="floating" label="Email" type="email" />
            <Input variant="floating" label="Phone" type="tel" />
          </div>

          <Input variant="outlined" label="Company Name" type="text" />

          <Input variant="floatingInside" label="Job Title" type="text" />

          <div className="pt-2">
            <Button type="submit" className="w-full">
              Send Request
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}`,
      preview: <FormExamplePreview />,
    },
    {
      id: "variants-comparison",
      title: "Variants comparison",
      description:
        "Visual comparison of all available input variants side by side.",
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";
import { Label } from "@/components/pittaya/ui/label";
import { Building2, Globe, Lock, Search } from "lucide-react";

export function VariantsComparison() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Input Variants</CardTitle>
        <CardDescription>
          Compare different input styles and behaviors side by side.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <Search className="size-4" />
              <h4 className="font-medium">Default</h4>
            </div>
            <div className="space-y-2">
              <Label>Search Query</Label>
              <Input placeholder="Type to search..." />
            </div>
            <p className="text-muted-foreground text-xs">
              Standard input with separate label. Best for traditional forms.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <Globe className="size-4" />
              <h4 className="font-medium">Floating</h4>
            </div>
            <div className="pt-2">
              <Input variant="floating" label="Website URL" />
            </div>
            <p className="text-muted-foreground text-xs">
              Label floats above border. Modern and space-efficient.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <Building2 className="size-4" />
              <h4 className="font-medium">Floating Inside</h4>
            </div>
            <div className="pt-2">
              <Input variant="floatingInside" label="Company Address" />
            </div>
            <p className="text-muted-foreground text-xs">
              Label stays inside input. Compact and clean.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <Lock className="size-4" />
              <h4 className="font-medium">Outlined</h4>
            </div>
            <div className="pt-2">
              <Input variant="outlined" label="Secure Token" />
            </div>
            <p className="text-muted-foreground text-xs">
              Label on border. Material Design inspired style.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}`,
      preview: <VariantsComparisonPreview />,
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

  showcase: {
    code: `import { Button } from "@/components/pittaya/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";
import { Label } from "@/components/pittaya/ui/label";

export function DefaultInput() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Subscribe</CardTitle>
        <CardDescription>
          Join our newsletter for weekly updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-default">Email address</Label>
          <Input
            id="email-default"
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Subscribe</Button>
      </CardFooter>
    </Card>
  );
}`,
    preview: <DefaultInputPreview />,
  },
});
