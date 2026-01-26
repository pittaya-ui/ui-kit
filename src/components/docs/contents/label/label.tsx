import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import {
  BasicLabel,
  DisabledLabel,
  FormGroup,
  LabelWithHelper,
  LabelWithIcon,
  RequiredLabel,
} from "./label-examples";

export const labelDoc: ComponentDoc = createComponentDoc({
  slug: "label",
  metadata: {
    name: "Label",
    description:
      "An accessible label component that renders a caption associated with a control, built on Radix UI Label primitive.",
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
            Use the Label component to provide accessible, descriptive text for
            form controls. Labels are essential for accessibility, helping users
            understand what information is expected in form fields.
          </p>
          <p>
            The component is built on Radix UI&apos;s Label primitive, ensuring
            proper semantic HTML and accessibility features like automatic focus
            behavior when clicking the label.
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
              Always associate labels with their corresponding form controls
              using the <code>htmlFor</code> attribute matching the input&apos;s{" "}
              <code>id</code>.
            </li>
            <li>
              Keep label text concise and descriptive, clearly indicating what
              input is expected.
            </li>
            <li>
              Place labels above or to the left of form fields for optimal
              readability and accessibility.
            </li>
            <li>
              Use the Label component even for custom form controls to maintain
              accessibility standards.
            </li>
            <li>
              Combine with helper text or error messages below the input for
              additional context.
            </li>
            <li>
              Avoid using placeholder text as a replacement for labels, as it
              disappears when users start typing.
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
            The Label component is built with accessibility as a priority,
            leveraging Radix UI&apos;s Label primitive for optimal support.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Automatically focuses associated form controls when the label is
              clicked, improving usability.
            </li>
            <li>
              Properly implements <code>for</code> attribute to create semantic
              relationships with form controls.
            </li>
            <li>
              Supports <code>peer-disabled</code> styling to visually indicate
              when the associated control is disabled.
            </li>
            <li>
              Works seamlessly with screen readers, announcing the label text
              when users navigate to the associated control.
            </li>
            <li>
              Includes <code>select-none</code> to prevent accidental text
              selection, improving the user experience.
            </li>
          </ul>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "htmlFor",
      type: "string",
      description:
        "The id of the form control this label is associated with. Creates an accessible relationship between label and control.",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to customize the label appearance.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The label text or content to display.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic usage",
      description:
        "A simple label associated with an input field using the htmlFor attribute.",
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

export function BasicLabel() {
  return (
    <Card variant="shadowRight" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Newsletter</CardTitle>
        <CardDescription>
          Subscribe to our newsletter to get the latest updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-basic">Email address</Label>
          <Input
            id="email-basic"
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
      preview: <BasicLabel />,
    },
    {
      id: "with-helper-text",
      title: "With helper text",
      description:
        "Label combined with helper text to provide additional context to users.",
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
import { Info } from "lucide-react";

export function LabelWithHelper() {
  return (
    <Card variant="corners" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create Username</CardTitle>
        <CardDescription>Choose a unique handle for your profile.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username-helper">Username</Label>
          <Input id="username-helper" type="text" placeholder="johndoe" />
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Info className="size-4" />
            <span>Must be 3-20 characters long.</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Check Availability
        </Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: <LabelWithHelper />,
    },
    {
      id: "required",
      title: "Required field",
      description:
        "Label with a visual indicator for required fields using an asterisk.",
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

export function RequiredLabel() {
  return (
    <Card variant="lifted" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your password to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password-req">
              Password <span className="text-destructive">*</span>
            </Label>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-xs underline-offset-4 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <Input id="password-req" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: <RequiredLabel />,
    },
    {
      id: "disabled",
      title: "Disabled state",
      description:
        "Label automatically adjusts opacity when the associated control is disabled.",
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";
import { Label } from "@/components/pittaya/ui/label";
import { Shield } from "lucide-react";

export function DisabledLabel() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>
          Some fields cannot be modified directly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="disabled-input" className="flex items-center gap-2">
            <Shield className="size-3.5" />
            User ID
          </Label>
          <Input
            id="disabled-input"
            type="text"
            value="USR-8839-2024"
            disabled
            className="bg-muted/50"
          />
          <p className="text-muted-foreground text-xs">
            This ID is unique to your account and cannot be changed.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}`,
      preview: <DisabledLabel />,
    },
    {
      id: "form-group",
      title: "Form group",
      description:
        "Multiple labels and inputs organized in a complete form layout.",
      code: `import { Button } from "@/components/pittaya/ui/button";
import { Card } from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";
import { Label } from "@/components/pittaya/ui/label";

export function FormGroup() {
  return (
    <Card variant="gradient" className="w-full max-w-md p-[1px]">
      <div className="bg-card h-full w-full rounded-[11px] p-6">
        <div className="mb-6 space-y-2">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Create Account
          </h3>
          <p className="text-muted-foreground text-sm">
            Enter your details to get started.
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name-form">First name</Label>
              <Input id="first-name-form" type="text" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name-form">Last name</Label>
              <Input id="last-name-form" type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-form-group">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email-form-group"
              type="email"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}`,
      preview: <FormGroup />,
    },
    {
      id: "with-icon",
      title: "With icon",
      description:
        "Label with an icon for enhanced visual communication and better user experience.",
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
import { Mail } from "lucide-react";

export function LabelWithIcon() {
  return (
    <Card className="w-full max-w-sm border-dashed">
      <CardHeader>
        <CardTitle>Contact Support</CardTitle>
        <CardDescription>
          We usually respond within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-icon" className="flex items-center gap-2">
            <Mail className="size-4 text-primary" />
            Email address
          </Label>
          <div className="relative">
            <Mail className="text-muted-foreground absolute left-3 top-2.5 size-4" />
            <Input
              id="email-icon"
              type="email"
              placeholder="your@email.com"
              className="pl-9"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Send Message
        </Button>
      </CardFooter>
    </Card>
  );
}`,
      preview: <LabelWithIcon />,
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/pittaya/ui/card";
import { Input } from "@/components/pittaya/ui/input";
import { Label } from "@/components/pittaya/ui/label";

export function BasicLabel() {
  return (
    <Card variant="shadowRight" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Newsletter</CardTitle>
        <CardDescription>
          Subscribe to our newsletter to get the latest updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-basic">Email address</Label>
          <Input
            id="email-basic"
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
    preview: <BasicLabel />,
  },
});
