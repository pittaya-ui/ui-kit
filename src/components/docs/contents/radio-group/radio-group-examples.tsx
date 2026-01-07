"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function BasicRadioGroupExample() {
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
}

export function HorizontalRadioGroupExample() {
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
}

export function DisabledRadioGroupExample() {
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
}

export function WithDescriptionRadioGroupExample() {
  return (
    <RadioGroup defaultValue="pittaya-pro">
      <div className="flex items-start space-x-2">
        <RadioGroupItem
          value="pittaya-starter"
          id="plan-starter"
          className="mt-1"
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="plan-starter">Pittaya Starter</Label>
          <p className="text-muted-foreground text-sm">
            Perfect for small projects. Up to 10 components/month.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="pittaya-pro" id="plan-pro" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="plan-pro">Pittaya Pro</Label>
          <p className="text-muted-foreground text-sm">
            For growing teams. Unlimited components + priority support.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem
          value="pittaya-enterprise"
          id="plan-enterprise"
          className="mt-1"
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="plan-enterprise">Pittaya Enterprise</Label>
          <p className="text-muted-foreground text-sm">
            Complete solution with SLA, 24/7 support and custom design system.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}

export function ControlledRadioGroupExample() {
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
      <p className="text-muted-foreground text-sm">
        Selected framework: <strong>{frameworks[value]}</strong>
      </p>
    </div>
  );
}

export function FormRadioGroupExample() {
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
}
