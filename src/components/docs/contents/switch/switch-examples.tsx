"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function BasicSwitchPreview() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export function SwitchSizesPreview() {
  return (
    <div className="flex items-center gap-4">
      <Switch size="sm" defaultChecked />
      <Switch size="default" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
  );
}

export function LiquidGlassSwitchPreview() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" variant="liquidGlass" />
      <Label htmlFor="notifications">Enable Notifications</Label>
    </div>
  );
}

export function CustomColorSwitchesPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch variant="liquidGlass" glowColor="#3b82f6" id="blue" />
        <Label htmlFor="blue">Blue theme</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch variant="liquidGlass" glowColor="#10b981" id="green" />
        <Label htmlFor="green">Green theme</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch variant="liquidGlass" glowColor="#f97316" id="orange" />
        <Label htmlFor="orange">Orange theme</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch variant="liquidGlass" glowColor="#a855f7" id="purple" />
        <Label htmlFor="purple">Purple theme</Label>
      </div>
    </div>
  );
}

export function ControlledSwitchPreview() {
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
        <Label htmlFor="controlled" className="text-sm font-medium">
          {isEnabled ? "Enabled" : "Disabled"}
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Current state: {isEnabled ? "ON" : "OFF"}
      </p>
    </div>
  );
}

export function DisabledSwitchPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off" className="text-muted-foreground">
          Disabled (off)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on" className="text-muted-foreground">
          Disabled (on)
        </Label>
      </div>
    </div>
  );
}

export function SettingsPanelPreview() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">Notification Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notif">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications via email
            </p>
          </div>
          <Switch id="email-notif" variant="liquidGlass" glowColor="#3b82f6" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="push-notif">Push Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive push notifications on your device
            </p>
          </div>
          <Switch id="push-notif" variant="liquidGlass" glowColor="#10b981" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="marketing">Marketing Emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive updates about new features
            </p>
          </div>
          <Switch id="marketing" variant="liquidGlass" glowColor="#f97316" />
        </div>
      </div>
    </div>
  );
}
