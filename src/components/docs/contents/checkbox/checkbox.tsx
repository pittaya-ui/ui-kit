import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import {
  AnimatedCheckboxExample,
  BasicCheckboxExample,
  CheckboxWithTextExample,
  ControlledCheckboxExample,
  DisabledCheckboxExample,
  MultipleCheckboxesExample,
} from "./checkbox-examples";

export const checkboxDoc: ComponentDoc = createComponentDoc({
  slug: "checkbox",
  metadata: {
    name: "Checkbox",
    description:
      "An accessible checkbox component with optional animation variant for enhanced visual feedback.",
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
            Use the Checkbox component when you need to allow users to select
            one or multiple options from a list, toggle settings, or accept
            terms and conditions.
          </p>
          <p>
            Checkboxes are ideal for forms where users can make independent
            selections that don&apos;t affect other options.
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
              Always provide a clear label that describes what the checkbox
              controls.
            </li>
            <li>
              Use the <code>animated</code> variant to provide visual feedback
              when users interact with the checkbox.
            </li>
            <li>
              Group related checkboxes together with a fieldset and legend for
              better accessibility.
            </li>
            <li>
              Ensure the checkbox is large enough to be easily clickable (at
              least 44x44 pixels including the label).
            </li>
            <li>
              Use <code>aria-invalid</code> to indicate validation errors.
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
            The Checkbox component is built on top of Radix UI&apos;s checkbox
            primitive, which provides full keyboard navigation and screen reader
            support out of the box.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Keyboard support: Use <kbd>Space</kbd> to toggle the checkbox
              state.
            </li>
            <li>
              Focus is clearly indicated with a ring outline for better
              visibility.
            </li>
            <li>
              The component properly communicates its state (checked/unchecked)
              to assistive technologies.
            </li>
            <li>
              Always associate checkboxes with labels using the <code>id</code>{" "}
              and <code>htmlFor</code> attributes.
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
          <p>The Checkbox component supports two variants:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>default</strong>: Standard checkbox without animations.
              Provides instant visual feedback with no transition effects.
            </li>
            <li>
              <strong>animated</strong>: Adds a smooth zoom-in animation when
              the check mark appears, enhancing the user experience with subtle
              motion feedback.
            </li>
          </ul>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"default" | "animated"',
      defaultValue: '"default"',
      description:
        "Controls the animation behavior. Use 'animated' for a zoom-in effect when checking the box.",
    },
    {
      name: "checked",
      type: "boolean | 'indeterminate'",
      description:
        "The controlled checked state of the checkbox. Can be true, false, or 'indeterminate'.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      description:
        "The default checked state when the component is initially rendered. Use when you don't need to control the state.",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean | 'indeterminate') => void",
      description:
        "Event handler called when the checked state of the checkbox changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "When true, prevents the user from interacting with the checkbox.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description:
        "When true, indicates that the user must check the checkbox before submitting a form.",
    },
    {
      name: "name",
      type: "string",
      description:
        "The name of the checkbox. Submitted with its owning form as part of a name/value pair.",
    },
    {
      name: "value",
      type: "string",
      defaultValue: '"on"',
      description: "The value given as data when submitted with a name.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic usage",
      description: "A simple checkbox with a label.",
      code: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function BasicCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`,
      preview: <BasicCheckboxExample />,
    },
    {
      id: "animated",
      title: "Animated ",
      description: "Checkbox with a smooth zoom-in animation when checked.",
      code: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function AnimatedCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="animated" variant="animated" />
      <Label htmlFor="animated">Enable notifications</Label>
    </div>
  );
}`,
      preview: <AnimatedCheckboxExample />,
    },
    {
      id: "disabled",
      title: "Disabled state",
      description: "Checkbox in disabled state, both checked and unchecked.",
      code: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function DisabledCheckbox() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
          Disabled unchecked
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled checked />
        <Label htmlFor="disabled-checked" className="text-muted-foreground">
          Disabled checked
        </Label>
      </div>
    </div>
  );
}`,
      preview: <DisabledCheckboxExample />,
    },
    {
      id: "with-text",
      title: "With description",
      description: "Checkbox with a label and additional descriptive text.",
      code: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxWithText() {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms-description" variant="animated" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="terms-description">
          Accept terms and conditions
        </Label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}`,
      preview: <CheckboxWithTextExample />,
    },
    {
      id: "controlled",
      title: "Controlled checkbox",
      description: "A checkbox with controlled state using React state.",
      code: `"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ControlledCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="controlled"
          variant="animated"
          checked={checked}
          onCheckedChange={(value) => setChecked(value as boolean)}
        />
        <Label htmlFor="controlled">Subscribe to newsletter</Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Status: {checked ? "Subscribed" : "Not subscribed"}
      </p>
    </div>
  );
}`,
      preview: <ControlledCheckboxExample />,
    },
    {
      id: "multiple",
      title: "Multiple checkboxes",
      description: "A group of related checkboxes for multiple selections.",
      code: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function MultipleCheckboxes() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium">Select your interests</legend>
      <div className="flex items-center space-x-2">
        <Checkbox id="design" variant="animated" />
        <Label htmlFor="design">Design</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="development" variant="animated" />
        <Label htmlFor="development">Development</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" variant="animated" />
        <Label htmlFor="marketing">Marketing</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="sales" variant="animated" />
        <Label htmlFor="sales">Sales</Label>
      </div>
    </fieldset>
  );
}`,
      preview: <MultipleCheckboxesExample />,
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
    code: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function BasicCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`,
    preview: <BasicCheckboxExample />,
  },
});
