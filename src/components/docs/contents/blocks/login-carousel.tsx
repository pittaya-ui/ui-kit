import type { BlockDoc } from "@/lib/docs/types";

import { LoginCarouselPreview } from "./login-carousel-preview";

export const loginCarouselBlock: BlockDoc = {
  slug: "login-carousel",
  metadata: {
    name: "Carousel Login",
    description:
      "A modern, minimalist login page featuring a full-height carousel on one side and a clean login form on the other. Perfect for showcasing your brand or product features during authentication.",
    category: "Authentication",
  },
  preview: <LoginCarouselPreview />,
  files: [
    {
      id: "page",
      name: "page.tsx",
      path: "app/(auth)/login/page.tsx",
      language: "tsx",
      code: `import { LoginCarousel } from "@/components/auth/login-carousel";

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <LoginCarousel />
    </main>
  );
}
`,
    },
    {
      id: "login-carousel",
      name: "login-carousel.tsx",
      path: "components/auth/login-carousel.tsx",
      language: "tsx",
      code: `"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Carousel } from "@/components/ui/carousel";

export function LoginCarousel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: replace with your auth provider call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2 bg-background">
      {/* Carousel Side */}
      <div className="hidden lg:block relative h-full w-full bg-muted">
        <Carousel autoplay loop showArrows={false} className="h-full w-full object-cover [&_.overflow-hidden]:h-full [&_.touch-pan-y]:h-full">
          {[
            { tag: "Discover", title: "Pittaya UI", desc: "Build modern applications with ease and speed.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80" },
            { tag: "Design", title: "Minimalist & Clean", desc: "Focused on user experience and conversion.", image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=900&q=80" },
            { tag: "Components", title: "Ready to Use", desc: "Just copy, paste and make it yours.", image: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?auto=format&fit=crop&w=900&q=80" },
          ].map((item, i) => (
            <div key={i} className="relative flex h-full min-h-screen w-full flex-col items-center justify-end">
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative z-10 max-w-sm space-y-3 p-10 pb-14 text-center text-white">
                <span className="text-xs font-semibold tracking-widest uppercase opacity-70">{item.tag}</span>
                <h2 className="text-3xl font-bold tracking-tight">{item.title}</h2>
                <p className="text-base opacity-75">{item.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      
      {/* Login Side */}
      <div className="flex w-full items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Forgot password?</a>
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
            
            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? "Signing in…" : "Sign in"}
            </Button>
          </form>
          
          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
`,
    },
  ],
};
