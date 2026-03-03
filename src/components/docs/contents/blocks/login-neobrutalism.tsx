import type { BlockDoc } from "@/lib/docs/types";

import { LoginNeobrutalismPreview } from "./login-neobrutalism-preview";

export const loginNeobrutalismBlock: BlockDoc = {
  slug: "login-neobrutalism",
  metadata: {
    name: "Neobrutalist Login",
    description: "A bold, high-contrast login page with hard shadows and thick borders.",
    category: "Authentication",
  },
  preview: <LoginNeobrutalismPreview />,
  files: [
    {
      id: "page",
      name: "page.tsx",
      path: "app/(auth)/login/page.tsx",
      language: "tsx",
      code: `import { LoginForm } from "@/components/auth/login-form";
import { GalleryVerticalEnd } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-background font-mono">
      <div className="flex flex-col gap-4 p-6 md:p-10 lg:border-r-2 border-black">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tighter text-black">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-[#ffde00] relative hidden lg:block border-l-2 border-black">
        <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-black tracking-tighter text-black rotate-[-5deg] bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                NEOBRUTALISM
            </h2>
        </div>
      </div>
    </div>
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

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email" className="font-bold">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="m@example.com" 
            required 
            className="border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password" className="font-bold">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline font-medium"
            >
              Forgot your password?
            </a>
          </div>
          <Input 
            id="password" 
            type="password" 
            required 
            className="border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t-2 after:border-black">
          <span className="relative z-10 bg-background px-2 text-muted-foreground font-bold">
            Or continue with
          </span>
        </div>
        <Button 
          variant="outline" 
          type="button" 
          className="w-full border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all bg-white hover:bg-white/90 text-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          Login with GitHub
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4 font-bold">
          Sign up
        </a>
      </div>
    </form>
  );
}
`,
    },
  ],
};
