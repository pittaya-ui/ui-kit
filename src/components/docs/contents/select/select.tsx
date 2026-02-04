import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import { selectExamples } from "./select-examples";

export const selectDoc: ComponentDoc = createComponentDoc({
  slug: "select",
  metadata: {
    name: "Select",
    description:
      "An accessible dropdown select component for choosing a single option from a list of choices.",
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
            Use Select when you need users to choose a single option from a
            predefined list of 5 or more items. For shorter lists (2-4 options),
            consider using Radio Buttons instead for better visibility and
            accessibility.
          </p>
          <p>
            Select components are ideal for forms where space is limited but you
            need to present multiple options. They work well for settings,
            filters, configuration panels, and data entry forms.
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
              Always provide a clear placeholder or default value that describes
              what the user should select.
            </li>
            <li>
              Keep option labels concise and descriptive—avoid overly long text
              that might be truncated.
            </li>
            <li>
              Sort options in a logical order: alphabetically, numerically, or
              by frequency of use.
            </li>
            <li>
              Use <code>SelectGroup</code> and <code>SelectLabel</code> to
              organize related options into categories for better scanability.
            </li>
            <li>
              Provide visual feedback for disabled states and ensure proper
              error messaging when validation fails.
            </li>
            <li>
              For searchable or very long lists, consider using a Combobox or
              Multi-Select component instead.
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
            The Select component is built on Radix UI primitives and follows
            WAI-ARIA design patterns for accessible dropdown menus. It includes:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Full keyboard navigation support (Arrow keys, Enter, Escape, Home,
              End)
            </li>
            <li>
              Proper ARIA attributes for screen readers (
              <code>aria-expanded</code>, <code>aria-haspopup</code>,{" "}
              <code>role="combobox"</code>)
            </li>
            <li>
              Focus management that traps focus within the dropdown when open
            </li>
            <li>Type-ahead functionality for quick option selection</li>
          </ul>
          <p>
            Always pair Select with a visible <code>Label</code> component for
            clarity, even if using placeholder text.
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
        "The value of the select when initially rendered. Useful for uncontrolled components.",
    },
    {
      name: "value",
      type: "string",
      description:
        "The controlled value of the select. Must be used with onValueChange for controlled components.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Event handler called when the selected value changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "When true, prevents the user from interacting with the select.",
    },
    {
      name: "name",
      type: "string",
      description:
        "The name of the select. Submitted with its owning form as part of a name/value pair.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description:
        "When true, indicates that the user must select a value before the owning form can be submitted.",
    },
  ],
  examples: selectExamples,
  toc: [
    { id: "installation", title: "Installation", level: 2 },
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "accessibility", title: "Accessibility", level: 2 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
  showcase: {
    preview: (
      <Select defaultValue="react">
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectExample() {
  return (
    <Select defaultValue="react">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="angular">Angular</SelectItem>
        <SelectItem value="svelte">Svelte</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
  },
});
