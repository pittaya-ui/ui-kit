import type { BlockDoc } from "@/lib/docs/types";

import { LoginPreview } from "./login-preview";

export const loginBlock: BlockDoc = {
  slug: "login",
  metadata: {
    name: "Login Page",
    description:
      "A complete, ready-to-use login page with email and password fields. Copy the files into your project and wire up your auth provider.",
    category: "Authentication",
  },
  preview: <LoginPreview />,
  files: [
    {
      id: "page",
      name: "page.tsx",
      path: "app/(auth)/login/page.tsx",
      language: "tsx",
      code: `import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-8">
      <LoginForm />
    </main>
  );
}
`,
    },
    {
      id: "login-form",
      name: "login-form.tsx",
      path: "components/auth/login-form.tsx",
      language: "tsx",
      code: `"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: replace with your auth provider call
      // e.g. await signIn("credentials", { email, password })
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border/60 bg-card p-8 shadow-xl">
      <div className="mb-8 space-y-1 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Welcome back
        </h1>
        <p className="text-sm text-muted-foreground">
          Sign in to your account to continue
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a
              href="/forgot-password"
              className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in…" : "Sign in"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <a
          href="/register"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
`,
    },
  ],
};
