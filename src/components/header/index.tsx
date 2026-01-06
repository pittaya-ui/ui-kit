"use client";

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { NAVIGATION_LINKS } from "@/constants/navigation-links";
import { cn } from "@/lib/utils";

import { GithubStarsButton } from "../github-stars-button";
import { GlobalSearch } from "../global-search";
import { NpmDownloadsButton } from "../npm-downloads-button";
import { Button } from "../ui/button";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isComponentsExpanded, setIsComponentsExpanded] = useState(true);

  const activeLinks = NAVIGATION_LINKS.filter((link) => link.active);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md transition-all duration-200"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="group flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src="/pittaya-logo.png"
                  alt="Pittaya UI"
                  width={40}
                  height={40}
                  className="rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/50"
                />
              </div>
              <span className="text-xl font-semibold text-white">
                Pittaya UI
              </span>
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
              className={cn(
                "relative flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-all duration-300 hover:bg-white/10 md:hidden",
                isMobileMenuOpen && "bg-white/10"
              )}
            >
              <div className="relative flex h-5 w-5 items-center justify-center">
                <Menu
                  className={cn(
                    "absolute h-5 w-5 transition-all duration-300",
                    isMobileMenuOpen
                      ? "scale-0 rotate-90 opacity-0"
                      : "scale-100 rotate-0 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute h-5 w-5 transition-all duration-300",
                    isMobileMenuOpen
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-0 -rotate-90 opacity-0"
                  )}
                />
              </div>
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeLinks={activeLinks}
        isComponentsExpanded={isComponentsExpanded}
        onToggleComponents={() =>
          setIsComponentsExpanded(!isComponentsExpanded)
        }
      />

      <GlobalSearch open={isSearchOpen} setOpen={setIsSearchOpen} />
    </>
  );
}
