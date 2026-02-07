import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import {
  BasicRadioGroupExample,
  ControlledRadioGroupExample,
  DisabledRadioGroupExample,
  FormRadioGroupExample,
  HorizontalRadioGroupExample,
  WithDescriptionRadioGroupExample,
} from "./radio-group-examples";

export const radioGroupDoc: ComponentDoc = createComponentDoc({
  slug: "radio-group",
  metadata: {
    name: "Radio Group",
    description:
      "A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.",
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
            Use the Radio Group component when you need users to select exactly
            one option from a list of mutually exclusive choices. Unlike
            checkboxes, only one radio button can be selected at a time within a
            group.
          </p>
          <p>
            Radio groups are ideal for settings, preferences, payment methods,
            shipping options, or any scenario where users must make a single
            selection from predefined options.
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
              Always provide clear and concise labels for each radio option.
            </li>
            <li>
              Use radio groups when you have 2-5 options. For more options,
              consider using a select dropdown instead.
            </li>
            <li>
              Set a sensible default value with <code>defaultValue</code> to
              guide users toward common choices.
            </li>
            <li>
              Group related radio buttons together using a{" "}
              <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> for
              better semantics and accessibility.
            </li>
            <li>
              Use the Radix UI native <code>orientation</code> prop to control
              keyboard navigation direction (doesn&apos;t affect visual layout).
            </li>
            <li>
              Ensure labels are clickable by properly associating them with
              radio buttons using <code>id</code> and <code>htmlFor</code>{" "}
              attributes.
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
            The Radio Group component is built on top of Radix UI&apos;s radio
            group primitive, providing full keyboard navigation and screen
            reader support out of the box.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Keyboard support: Use <kbd>Tab</kbd> to focus the group, arrow
              keys (<kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>) to
              navigate between options, and <kbd>Space</kbd> to select.
            </li>
            <li>
              Focus is clearly indicated with a ring outline for better
              visibility.
            </li>
            <li>
              The component properly communicates the selected state to
              assistive technologies using ARIA attributes.
            </li>
            <li>
              Always wrap radio groups in a <code>&lt;fieldset&gt;</code> with a{" "}
              <code>&lt;legend&gt;</code> to provide context.
            </li>
            <li>
              Use the <code>required</code> prop to indicate mandatory fields in
              forms.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "orientation",
      title: "Layout customization",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            By default, the Radio Group arranges options vertically. You can
            customize the layout using className to arrange items horizontally
            or in any other layout pattern:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Vertical</strong> (default): Use the default behavior or{" "}
              <code>className=&quot;flex flex-col gap-2&quot;</code>
            </li>
            <li>
              <strong>Horizontal</strong>: Add{" "}
              <code>className=&quot;flex flex-row gap-4&quot;</code> for
              side-by-side options
            </li>
            <li>
              <strong>Grid</strong>: Use{" "}
              <code>className=&quot;grid grid-cols-2 gap-4&quot;</code> for a
              grid layout
            </li>
          </ul>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "value",
      type: "string",
      description:
        "The controlled value of the selected radio button. Use with onValueChange for controlled components.",
    },
    {
      name: "defaultValue",
      type: "string",
      description:
        "The default value of the selected radio button when initially rendered. Use for uncontrolled components.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description:
        "Event handler called when the selected radio button changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "When true, prevents the user from interacting with all radio buttons in the group.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description:
        "When true, indicates that the user must select an option before submitting the form.",
    },
    {
      name: "name",
      type: "string",
      description:
        "The name of the radio group. Submitted with its owning form as part of a name/value pair.",
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical" | undefined',
      defaultValue: "undefined",
      description:
        "Controls keyboard navigation direction (not visual layout). Use className to control visual layout.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Programming language",
      description:
        "A simple example for selecting a preferred programming language.",
      code: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function BasicRadioGroup() {
  return (
    <RadioGroup defaultValue="typescript">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="typescript" id="lang-typescript" />
        <Label htmlFor="lang-typescript">TypeScript</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="javascript" id="lang-javascript" />
        <Label htmlFor="lang-javascript">JavaScript</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="python" id="lang-python" />
        <Label htmlFor="lang-python">Python</Label>
      </div>
    </RadioGroup>
  );
}`,
      preview: <BasicRadioGroupExample />,
    },
    {
      id: "horizontal",
      title: "Deploy environments",
      description:
        "Horizontal layout ideal for selecting deployment environments.",
      code: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function HorizontalRadioGroup() {
  return (
    <RadioGroup defaultValue="production" className="flex flex-row gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="development" id="env-dev" />
        <Label htmlFor="env-dev">Development</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="staging" id="env-staging" />
        <Label htmlFor="env-staging">Staging</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="production" id="env-prod" />
        <Label htmlFor="env-prod">Production</Label>
      </div>
    </RadioGroup>
  );
}`,
      preview: <HorizontalRadioGroupExample />,
    },
    {
      id: "disabled",
      title: "Deployment options",
      description:
        "Example with disabled option for features under development.",
      code: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function DisabledRadioGroup() {
  return (
    <RadioGroup defaultValue="pittaya-cloud">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="pittaya-cloud" id="deploy-cloud" />
        <Label htmlFor="deploy-cloud">Pittaya Cloud</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="edge-functions" id="deploy-edge" disabled />
        <Label htmlFor="deploy-edge" className="text-muted-foreground">
          Edge Functions (Coming soon)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="self-hosted" id="deploy-self" />
        <Label htmlFor="deploy-self">Self-hosted</Label>
      </div>
    </RadioGroup>
  );
}`,
      preview: <DisabledRadioGroupExample />,
    },
    {
      id: "with-description",
      title: "Subscription plans",
      description: "Plan selection with detailed descriptions for each option.",
      code: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function WithDescriptionRadioGroup() {
  return (
    <RadioGroup defaultValue="pittaya-pro">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="pittaya-starter" id="plan-starter" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="plan-starter">Pittaya Starter</Label>
          <p className="text-sm text-muted-foreground">
            Perfect for small projects. Up to 10 components/month.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="pittaya-pro" id="plan-pro" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="plan-pro">Pittaya Pro</Label>
          <p className="text-sm text-muted-foreground">
            For growing teams. Unlimited components + priority support.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="pittaya-enterprise" id="plan-enterprise" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="plan-enterprise">Pittaya Enterprise</Label>
          <p className="text-sm text-muted-foreground">
            Complete solution with SLA, 24/7 support and custom design system.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}`,
      preview: <WithDescriptionRadioGroupExample />,
    },
    {
      id: "controlled",
      title: "Framework selection",
      description:
        "Controlled radio group with React state showing selection in real-time.",
      code: `"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export function ControlledRadioGroup() {
  const [value, setValue] = useState("react");

  const frameworks: Record<string, string> = {
    react: "React + Next.js",
    vue: "Vue.js + Nuxt",
    svelte: "Svelte + SvelteKit",
    solid: "Solid.js",
  };

  return (
    <div className="space-y-4">
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="react" id="framework-react" />
          <Label htmlFor="framework-react">React + Next.js</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vue" id="framework-vue" />
          <Label htmlFor="framework-vue">Vue.js + Nuxt</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="svelte" id="framework-svelte" />
          <Label htmlFor="framework-svelte">Svelte + SvelteKit</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="solid" id="framework-solid" />
          <Label htmlFor="framework-solid">Solid.js</Label>
        </div>
      </RadioGroup>
      <p className="text-sm text-muted-foreground">
        Selected framework: <strong>{frameworks[value]}</strong>
      </p>
    </div>
  );
}`,
      preview: <ControlledRadioGroupExample />,
    },
    {
      id: "form",
      title: "Backup configuration",
      description:
        "Form integration with fieldset for system configuration settings.",
      code: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function FormRadioGroup() {
  return (
    <form className="space-y-6">
      <fieldset className="space-y-4">
        <legend className="text-sm font-medium">
          How often should we backup your data?
        </legend>
        <RadioGroup defaultValue="daily" name="backup-frequency">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="realtime" id="backup-realtime" />
            <Label htmlFor="backup-realtime">Real-time (Recommended)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hourly" id="backup-hourly" />
            <Label htmlFor="backup-hourly">Every hour</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="daily" id="backup-daily" />
            <Label htmlFor="backup-daily">Daily at 3 AM</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weekly" id="backup-weekly" />
            <Label htmlFor="backup-weekly">Weekly</Label>
          </div>
        </RadioGroup>
      </fieldset>
    </form>
  );
}`,
      preview: <FormRadioGroupExample />,
    },
  ],
  toc: [
    { id: "installation", title: "Installation", level: 2 },
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "accessibility", title: "Accessibility", level: 2 },
    { id: "orientation", title: "Layout customization", level: 2 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
  showcase: {
    code: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function BasicRadioGroup() {
  return (
    <RadioGroup defaultValue="typescript">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="typescript" id="lang-typescript" />
        <Label htmlFor="lang-typescript">TypeScript</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="javascript" id="lang-javascript" />
        <Label htmlFor="lang-javascript">JavaScript</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="python" id="lang-python" />
        <Label htmlFor="lang-python">Python</Label>
      </div>
    </RadioGroup>
  );
}`,
    preview: <BasicRadioGroupExample />,
  },
});
