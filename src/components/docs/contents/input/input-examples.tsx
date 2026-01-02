"use client";

import { Building2, Globe, Lock, Search, User } from "lucide-react";

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

export function DefaultInputPreview() {
  return (
    <div className="flex justify-center p-4">
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
    </div>
  );
}

export function FloatingInputPreview() {
  return (
    <div className="flex justify-center p-4">
      <Card variant="shadowRight" className="bg-background w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Welcome back! Please sign in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-4">
          <Input variant="floating" label="Email address" type="email" />
          <Input variant="floating" label="Password" type="password" />
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function FloatingInsideInputPreview() {
  return (
    <div className="flex justify-center p-4">
      <Card variant="corners" className="bg-background w-full max-w-sm">
        <CardHeader>
          <CardTitle>Profile Details</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
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
    </div>
  );
}

export function OutlinedInputPreview() {
  return (
    <div className="flex justify-center p-4">
      <Card variant="lifted" className="bg-background w-full max-w-sm">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Add a new credit card securely.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-2">
          <Input variant="outlined" label="Card Number" type="text" />
          <div className="grid grid-cols-2 gap-6">
            <Input variant="outlined" label="Expiry Date" type="text" />
            <Input variant="outlined" label="CVC" type="text" />
          </div>
          <Input variant="outlined" label="Cardholder Name" type="text" />
        </CardContent>
        <CardFooter>
          <Button className="w-full">Add Card</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function DisabledInputPreview() {
  return (
    <div className="flex justify-center p-4">
      <Card className="w-full max-w-sm border-dashed">
        <CardHeader>
          <CardTitle>Archived Project</CardTitle>
          <CardDescription>
            This project is read-only and cannot be edited.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
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
    </div>
  );
}

export function FormExamplePreview() {
  return (
    <div className="flex justify-center p-4">
      <Card variant="gradient" className="w-full max-w-md p-[1px]">
        <div className="bg-card h-full w-full rounded-[11px] p-6">
          <div className="mb-6 space-y-2">
            <h3 className="text-2xl leading-none font-semibold tracking-tight">
              Contact Sales
            </h3>
            <p className="text-muted-foreground text-sm">
              Fill out the form below and we'll get back to you.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name-form">Full Name</Label>
              <div className="relative">
                <User className="text-muted-foreground absolute top-2.5 left-3 size-4" />
                <Input
                  id="name-form"
                  type="text"
                  placeholder="John Doe"
                  className="pl-9"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
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
    </div>
  );
}

export function VariantsComparisonPreview() {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Input Variants</CardTitle>
          <CardDescription>
            Compare different input styles and behaviors side by side.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-2">
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
      </div>
    </div>
  );
}
