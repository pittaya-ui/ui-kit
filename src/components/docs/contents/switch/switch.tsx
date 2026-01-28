import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import {
  BasicSwitchPreview,
  ControlledSwitchPreview,
  CustomColorSwitchesPreview,
  DisabledSwitchPreview,
  LiquidGlassSwitchPreview,
  SettingsPanelPreview,
  SwitchSizesPreview,
} from "./switch-examples";

export const switchDoc: ComponentDoc = createComponentDoc({
  slug: "switch",
  metadata: {
    name: "Switch",
    description:
      "A toggle switch component with glassmorphism variant and customizable glow effects for modern interfaces.",
    category: "Forms",
    status: "stable",
  },
  sections: [
    {
      id: "when-to-use",
      title: "When to use",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Use the Switch component when you need to toggle between two states
            (on/off, enabled/disabled). It's ideal for settings, preferences,
            and feature toggles where the change takes effect immediately.
          </p>
          <p>
            The liquid glass variant is perfect for modern, premium interfaces
            where you want to add visual flair with glassmorphism effects and
            customizable glow colors.
          </p>
        </div>
      ),
    },
    {
      id: "best-practices",
      title: "Best practices",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Always provide a clear label describing what the switch controls
            </li>
            <li>
              Use the switch for binary options that take immediate effect
            </li>
            <li>
              For actions that require confirmation, use a button instead
            </li>
            <li>
              Choose glow colors that match your brand or provide semantic
              meaning
            </li>
            <li>
              Use the default variant for standard forms, liquid glass for
              premium UIs
            </li>
            <li>Ensure sufficient contrast in both light and dark modes</li>
          </ul>
        </div>
      ),
    },
    {
      id: "accessibility",
      title: "Accessibility",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            The Switch component is built on Radix UI primitives and includes
            full accessibility support:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Keyboard navigation:</strong> Can be toggled using the
              Space key
            </li>
            <li>
              <strong>Screen readers:</strong> Properly announces state changes
            </li>
            <li>
              <strong>Focus management:</strong> Clear focus indicators for
              keyboard users
            </li>
            <li>
              <strong>ARIA attributes:</strong> Correct role and state
              attributes
            </li>
          </ul>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"default" | "liquidGlass"',
      defaultValue: '"default"',
      description:
        "The visual style variant. Use 'liquidGlass' for glassmorphism effect with glow.",
    },
    {
      name: "size",
      type: '"sm" | "default" | "lg"',
      defaultValue: '"default"',
      description: "The size of the switch component.",
    },
    {
      name: "glowColor",
      type: "string",
      defaultValue: '"#ff637e"',
      description:
        "Hex color for the glow effect (only applies to liquidGlass variant). The glow appears when the switch is checked.",
    },
    {
      name: "checked",
      type: "boolean",
      description:
        "The controlled checked state of the switch. Use with onCheckedChange.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      description: "The default checked state (uncontrolled).",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      description: "Event handler called when the checked state changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "When true, prevents the user from interacting with the switch.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description: "When true, indicates that the user must check the switch before submitting.",
    },
    {
      name: "name",
      type: "string",
      description: "The name of the switch for form submission.",
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
      description: "A simple switch with default styling.",
      code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function BasicSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`,
      preview: <BasicSwitchPreview />,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Switch component in different sizes.",
      code: `import { Switch } from "@/components/ui/switch";

export function SwitchSizes() {
  return (
    <div className="flex items-center gap-4">
      <Switch size="sm" defaultChecked />
      <Switch size="default" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
  );
}`,
      preview: <SwitchSizesPreview />,
    },
        {
      id: "settings-panel",
      title: "Settings panel",
      description: "Real-world example of switches in a settings interface.",
      code: `import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";

export function SettingsPanel() {
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold">Notification Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label htmlFor="email-notif" className="text-sm font-medium">
              Email Notifications
            </label>
            <p className="text-sm text-muted-foreground">
              Receive notifications via email
            </p>
          </div>
          <Switch id="email-notif" variant="liquidGlass" glowColor="#3b82f6" />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label htmlFor="push-notif" className="text-sm font-medium">
              Push Notifications
            </label>
            <p className="text-sm text-muted-foreground">
              Receive push notifications on your device
            </p>
          </div>
          <Switch id="push-notif" variant="liquidGlass" glowColor="#10b981" />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label htmlFor="marketing" className="text-sm font-medium">
              Marketing Emails
            </label>
            <p className="text-sm text-muted-foreground">
              Receive updates about new features
            </p>
          </div>
          <Switch id="marketing" variant="liquidGlass" glowColor="#f97316" />
        </div>
      </div>
    </Card>
  );
}`,
      preview: <SettingsPanelPreview />,
    },
    {
      id: "liquid-glass",
      title: "Liquid Glass variant",
      description:
        "Premium glassmorphism variant with glow effect when checked.",
      code: `import { Switch } from "@/components/ui/switch";

export function LiquidGlassSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" variant="liquidGlass" />
      <label htmlFor="notifications" className="text-sm font-medium">
        Enable Notifications
      </label>
    </div>
  );
}`,
      preview: <LiquidGlassSwitchPreview />,
    },
    {
      id: "custom-colors",
      title: "Custom glow colors",
      description:
        "Customize the glow color to match your brand or provide semantic meaning.",
      code: `import { Switch } from "@/components/ui/switch";

export function CustomColorSwitches() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch variant="liquidGlass" glowColor="#3b82f6" id="blue" />
        <label htmlFor="blue" className="text-sm">Blue theme</label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch variant="liquidGlass" glowColor="#10b981" id="green" />
        <label htmlFor="green" className="text-sm">Green theme</label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch variant="liquidGlass" glowColor="#f97316" id="orange" />
        <label htmlFor="orange" className="text-sm">Orange theme</label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch variant="liquidGlass" glowColor="#a855f7" id="purple" />
        <label htmlFor="purple" className="text-sm">Purple theme</label>
      </div>
    </div>
  );
}`,
      preview: <CustomColorSwitchesPreview />,
    },
    {
      id: "controlled",
      title: "Controlled state",
      description: "Control the switch state with React state.",
      code: `import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export function ControlledSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="controlled"
          variant="liquidGlass"
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
        />
        <label htmlFor="controlled" className="text-sm font-medium">
          {isEnabled ? "Enabled" : "Disabled"}
        </label>
      </div>
      <p className="text-sm text-muted-foreground">
        Current state: {isEnabled ? "ON" : "OFF"}
      </p>
    </div>
  );
}`,
      preview: <ControlledSwitchPreview />,
    },
    {
      id: "disabled",
      title: "Disabled state",
      description: "Prevent user interaction with the disabled prop.",
      code: `import { Switch } from "@/components/ui/switch";

export function DisabledSwitch() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled />
        <label htmlFor="disabled-off" className="text-sm text-muted-foreground">
          Disabled (off)
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <label htmlFor="disabled-on" className="text-sm text-muted-foreground">
          Disabled (on)
        </label>
      </div>
    </div>
  );
}`,
      preview: <DisabledSwitchPreview />,
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
    code: `import { Switch } from "@/components/pittaya/ui/switch";

export function ShowcaseSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch variant="liquidGlass" glowColor="#ff637e" />
      <label className="text-sm font-medium">
        Enable feature
      </label>
    </div>
  );
}`,
    preview: <LiquidGlassSwitchPreview />,
  },
});
