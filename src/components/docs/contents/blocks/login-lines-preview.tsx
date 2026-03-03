"use client";

import { ArrowRightIcon, SparklesIcon } from "lucide-react";

import {
  AnnouncementContainer,
  AnnouncementIcon,
  AnnouncementSeparator,
  AnnouncementTitle,
} from "@/components/ui/announcement-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginLinesPreview() {
  return (
    <div className="bg-background relative flex min-h-[650px] w-full items-center justify-center overflow-hidden">
      {/* Top radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(35%_60%_at_50%_0%,hsl(var(--foreground)/.07),transparent)]"
      />

      {/* Outer vertical lines — faded with mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mx-auto w-full max-w-5xl"
      >
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/15 to-foreground/15" />
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/15 to-foreground/15" />
      </div>

      {/* Inner vertical lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-transparent via-border to-border md:left-8" />
        <div className="absolute inset-y-0 right-4 w-px bg-gradient-to-b from-transparent via-border to-border md:right-8" />
        <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-border/50 to-border/50 md:left-12" />
        <div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-border/50 to-border/50 md:right-12" />
      </div>

      {/* Login card */}
      <div className="relative z-10 w-full max-w-sm px-4">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <AnnouncementContainer>
            <AnnouncementIcon icon={SparklesIcon} />
            <AnnouncementSeparator />
            <AnnouncementTitle>
              Sign up free <ArrowRightIcon className="size-3" />
            </AnnouncementTitle>
          </AnnouncementContainer>
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-foreground/60 tracking-wide">
            Sign in to your account to continue
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="preview-email">Email</Label>
            <Input
              id="preview-email"
              type="email"
              placeholder="m@example.com"
              className="bg-card"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="preview-password">Password</Label>
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="preview-password"
              type="password"
              placeholder="••••••••"
              className="bg-card"
            />
          </div>

          <Button className="w-full rounded-full" size="lg">
            Sign in <ArrowRightIcon className="ml-2 size-4" />
          </Button>

          <div className="relative flex items-center gap-4 py-1">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <Button variant="outline" className="w-full rounded-full" size="lg">
            <svg viewBox="0 0 24 24" className="mr-2 size-4" aria-hidden="true">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Continue with Google
          </Button>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
