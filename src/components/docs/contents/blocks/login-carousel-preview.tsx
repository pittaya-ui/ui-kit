"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginCarouselPreview() {
  return (
    <div className="bg-background relative flex min-h-dvh w-full overflow-hidden border-none">
      <div className="grid w-full lg:grid-cols-2">
        {/* Carousel Side */}
        <div className="relative hidden h-full w-full lg:block">
          <Carousel
            autoplay
            loop
            showArrows={false}
            className="h-full w-full rounded-none object-cover [&_.overflow-hidden]:h-full [&_.touch-pan-y]:h-full"
          >
            {[
              {
                tag: "Discover",
                title: "Pittaya UI",
                desc: "Build modern applications with ease and speed.",
                image:
                  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
              },
              {
                tag: "Design",
                title: "Minimalist & Clean",
                desc: "Focused on user experience and conversion.",
                image:
                  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=900&q=80",
              },
              {
                tag: "Components",
                title: "Ready to Use",
                desc: "Just copy, paste and make it yours.",
                image:
                  "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?auto=format&fit=crop&w=900&q=80",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex h-full min-h-[600px] w-full flex-col items-center justify-end"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="relative z-10 max-w-sm space-y-3 p-10 pb-14 text-center text-white">
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
                    {item.tag}
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight">
                    {item.title}
                  </h2>
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
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back
              </h1>
              <p className="text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="preview-email">Email</Label>
                <Input
                  id="preview-email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="preview-password">Password</Label>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm font-medium"
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

              <Button className="w-full" size="lg">
                Sign in
              </Button>
            </div>

            <div className="text-muted-foreground text-center text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-primary font-medium hover:underline">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
