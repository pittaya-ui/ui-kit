"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function BasicCheckboxExample() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

export function AnimatedCheckboxExample() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="animated" variant="animated" />
      <Label htmlFor="animated">Enable notifications</Label>
    </div>
  );
}

export function DisabledCheckboxExample() {
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
}

export function CheckboxWithTextExample() {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms-description" variant="animated" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="terms-description">Accept terms and conditions</Label>
        <p className="text-muted-foreground text-sm">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export function ControlledCheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="controlled-example"
          variant="animated"
          checked={checked}
          onCheckedChange={(value) => setChecked(value as boolean)}
        />
        <Label htmlFor="controlled-example">Subscribe to newsletter</Label>
      </div>
      <p className="text-muted-foreground text-sm">
        Status: {checked ? "Subscribed" : "Not subscribed"}
      </p>
    </div>
  );
}

export function MultipleCheckboxesExample() {
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
}
