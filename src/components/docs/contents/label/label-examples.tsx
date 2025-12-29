"use client";

import { Info, Mail, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BasicLabel() {
  return (
    <div className="flex justify-center p-4">
      <Card variant="shadowRight" className="bg-background w-full max-w-sm">
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
    </div>
  );
}

export function LabelWithHelper() {
  return (
    <div className="flex justify-center p-4">
      <Card variant="corners" className="bg-background w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create Username</CardTitle>
          <CardDescription>
            Choose a unique handle for your profile.
          </CardDescription>
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
    </div>
  );
}

export function RequiredLabel() {
  return (
    <div className="flex justify-center p-4">
      <Card variant="lifted" className="bg-background w-full max-w-sm">
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
    </div>
  );
}

export function DisabledLabel() {
  return (
    <div className="flex justify-center p-4">
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
    </div>
  );
}

export function FormGroup() {
  return (
    <div className="flex justify-center p-4">
      <Card variant="gradient" className="w-full max-w-md p-[1px]">
        <div className="bg-card h-full w-full rounded-[11px] p-6">
          <div className="mb-6 space-y-2">
            <h3 className="text-2xl leading-none font-semibold tracking-tight">
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
    </div>
  );
}

export function LabelWithIcon() {
  return (
    <div className="flex justify-center p-4">
      <Card className="w-full max-w-sm border-dashed">
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>We usually respond within 24 hours.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-icon" className="flex items-center gap-2">
              <Mail className="text-primary size-4" />
              Email address
            </Label>
            <div className="relative">
              <Mail className="text-muted-foreground absolute top-2.5 left-3 size-4" />
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
    </div>
  );
}
