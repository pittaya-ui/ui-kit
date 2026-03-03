"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginPreview() {
  return (
    <div className="bg-background flex min-h-full w-full items-center justify-center p-8">
      <div className="border-border/60 bg-card w-full max-w-sm rounded-2xl border p-8 shadow-xl">
        <div className="mb-8 space-y-1 text-center">
          <h1 className="text-foreground text-2xl font-bold tracking-tight">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign in to your account to continue
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="preview-email">Email</Label>
            <Input
              id="preview-email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="preview-password">Password</Label>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground text-xs underline-offset-4 transition-colors hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="preview-password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <Button className="w-full" size="default">
            Sign in
          </Button>
        </div>

        <p className="text-muted-foreground mt-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-foreground font-medium underline-offset-4 hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
