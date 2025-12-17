"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { NAVIGATION_LINKS } from "@/constants/navigation-links";
import { cn } from "@/lib/utils";

import { GithubStarsButton } from "./github-stars-button";
import { NpmDownloadsButton } from "./npm-downloads-button";
import { Button } from "./ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinks = NAVIGATION_LINKS.filter((link) => link.active);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md transition-all duration-200"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/pittaya-logo.png"
              alt="Pittaya UI"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-semibold text-white">Pittaya UI</span>
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            {activeLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <GithubStarsButton />
            <NpmDownloadsButton />
          </nav>

          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            size={"lg"}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 md:hidden">
          <div className="space-y-1 bg-black/90 px-2 pt-2 pb-3 backdrop-blur-md">
            {activeLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-3 space-y-3">
              <GithubStarsButton />
              <NpmDownloadsButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
