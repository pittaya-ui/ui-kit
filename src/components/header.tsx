"use client";

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { NAVIGATION_LINKS } from "@/constants/navigation-links";
import { cn } from "@/lib/utils";

import { GithubStarsButton } from "./github-stars-button";
import { GlobalSearch } from "./global-search";
import { NpmDownloadsButton } from "./npm-downloads-button";
import { Button } from "./ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="outline"
              className="group relative h-9 w-full justify-start rounded-md border-white/10 bg-white/5 px-3 text-sm font-normal text-white/60 hover:bg-white/10 hover:text-white sm:pr-12 md:w-40 lg:w-64"
            >
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <span className="hidden lg:inline-flex">
                Search components...
              </span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="bg-muted pointer-events-none absolute top-1/2 right-1.5 hidden h-5 -translate-y-1/2 items-center gap-1 rounded border border-white/10 px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
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
            <Button
              onClick={() => {
                setIsSearchOpen(true);
                setIsMobileMenuOpen(false);
              }}
              variant="outline"
              className="mb-2 w-full justify-start rounded-md border-white/10 bg-white/5 px-3 text-sm font-normal text-white/60 hover:bg-white/10 hover:text-white"
            >
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              Search components...
            </Button>
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
      <GlobalSearch open={isSearchOpen} setOpen={setIsSearchOpen} />
    </header>
  );
}
