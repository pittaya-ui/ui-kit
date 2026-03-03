"use client";

import { GalleryVerticalEnd } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginNeobrutalismPreview() {
  return (
    <div className="bg-background grid min-h-dvh w-full border-2 border-black font-mono lg:grid-cols-2">
      <div className="flex flex-col gap-4 border-black p-6 md:p-10 lg:border-r-2">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="#"
            className="flex items-center gap-2 font-bold tracking-tighter"
            onClick={(e) => e.preventDefault()}
          >
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <GalleryVerticalEnd className="size-4" />
            </div>
            AMION
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold tracking-tight">
                  Login to your account
                </h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Enter your email below to login to your account
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="font-bold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus-visible:border-black focus-visible:ring-0 focus-visible:ring-offset-0 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="font-bold">
                      Password
                    </Label>
                    <a
                      href="#"
                      className="ml-auto text-sm font-medium underline-offset-4 hover:underline"
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus-visible:border-black focus-visible:ring-0 focus-visible:ring-offset-0 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="text-primary-foreground bg-pittaya hover:bg-pittaya/90 w-full rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Login
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t-2 border-black" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background text-muted-foreground px-2 font-bold">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  variant="default"
                  type="button"
                  className="w-full rounded-none border-2 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="mr-2 h-4 w-4"
                  >
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
                <a
                  href="#"
                  className="font-bold underline underline-offset-4"
                  onClick={(e) => e.preventDefault()}
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-pittaya relative hidden border-l-2 border-black lg:block">
        <div className="pattern-cross-dots-md bg-pittaya absolute inset-0 h-full w-full opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="rotate-[-5deg] border-2 border-black bg-white p-4 text-4xl font-black tracking-tighter text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            NEOBRUTALISM
          </h2>
        </div>
      </div>
    </div>
  );
}
