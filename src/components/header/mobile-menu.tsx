"use client";

import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { componentsIndex } from "@/lib/docs/components-index";
import { cn } from "@/lib/utils";

import { GithubStarsButton } from "../github-stars-button";
import { NpmDownloadsButton } from "../npm-downloads-button";
import { Button } from "../ui/button";

interface NavigationLink {
  name: string;
  href: string;
  active: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  activeLinks: NavigationLink[];
  isComponentsExpanded: boolean;
  onToggleComponents: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  onOpenSearch,
  activeLinks,
  isComponentsExpanded,
  onToggleComponents,
}: MobileMenuProps) {
  // Previne scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto scroll-smooth bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div className="flex min-h-screen flex-col px-4 pt-20 pb-6">
        {/* Search button */}
        <div
          className={cn(
            "mb-8 transform transition-all duration-500",
            isOpen
              ? "translate-y-0 opacity-100 delay-100"
              : "translate-y-4 opacity-0"
          )}
        >
          <Button
            onClick={() => {
              onOpenSearch();
              onClose();
            }}
            variant="outline"
            className="group h-12 w-full justify-start rounded-xl border-white/20 bg-gradient-to-r from-white/10 to-white/5 px-4 text-base font-normal text-white/80 transition-all hover:border-white/30 hover:from-white/20 hover:to-white/10 hover:text-white"
          >
            <Search className="mr-3 h-5 w-5 shrink-0" />
            <span>Search components...</span>
          </Button>
        </div>

        {/* Navigation links */}
        <nav className="mb-8 flex-1 space-y-2">
          {activeLinks.map((item, index) => {
            const isComponentsLink = item.href === "/docs/components";

            return (
              <div key={item.name}>
                {isComponentsLink ? (
                  <>
                    {/* Components link with expand button */}
                    <button
                      onClick={onToggleComponents}
                      className={cn(
                        "group relative flex w-full items-center justify-between overflow-hidden rounded-xl px-5 py-4 text-lg font-medium text-white transition-all duration-500",
                        isOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-4 opacity-0"
                      )}
                      style={{
                        transitionDelay: isOpen
                          ? `${(index + 2) * 50}ms`
                          : "0ms",
                      }}
                    >
                      <span className="relative flex items-center">
                        <span className="bg-pittaya mr-3 h-1.5 w-1.5 rounded-full opacity-0 transition-all duration-300 group-hover:mr-4 group-hover:opacity-100" />
                        {item.name}
                      </span>
                      <ChevronDown
                        className={cn(
                          "relative h-5 w-5 transition-transform duration-300",
                          isComponentsExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Expandable components list */}
                    <div
                      className={cn(
                        "grid overflow-hidden transition-all duration-500",
                        isComponentsExpanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 py-2 pl-4">
                          {componentsIndex.map((component, compIndex) => (
                            <Link
                              key={component.slug}
                              href={`/docs/components/${component.slug}`}
                              onClick={onClose}
                              className={cn(
                                "group/item relative flex items-center overflow-hidden rounded-lg px-4 py-2.5 text-sm text-white/70 transition-all duration-300 hover:text-white",
                                isComponentsExpanded
                                  ? "translate-x-0 opacity-100"
                                  : "translate-x-2 opacity-0"
                              )}
                              style={{
                                transitionDelay: isComponentsExpanded
                                  ? `${compIndex * 30}ms`
                                  : "0ms",
                              }}
                            >
                              <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
                              <span className="bg-pittaya mr-2 h-1 w-1 rounded-full opacity-50 transition-all duration-200 group-hover/item:opacity-100" />
                              <span className="relative">{component.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Normal link for other items */
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative block overflow-hidden rounded-xl px-5 py-4 text-lg font-medium text-white transition-all duration-500",
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    )}
                    style={{
                      transitionDelay: isOpen ? `${(index + 2) * 50}ms` : "0ms",
                    }}
                    onClick={onClose}
                  >
                    <div className="from-pittaya-500/10 absolute inset-0 bg-gradient-to-r to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative flex items-center">
                      <span className="bg-pittaya-500 mr-3 h-1.5 w-1.5 rounded-full opacity-0 transition-all duration-300 group-hover:mr-4 group-hover:opacity-100" />
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Links section */}
        <div
          className={cn(
            "transform space-y-4 transition-all duration-500",
            isOpen
              ? "translate-y-0 opacity-100 delay-300"
              : "translate-y-4 opacity-0"
          )}
        >
          {/* Section title */}
          <div className="flex items-center gap-3 px-1">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Links
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Buttons container */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent p-5 backdrop-blur-sm">
            {/* Decorative gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />

            <div className="relative space-y-3">
              <GithubStarsButton />
              <NpmDownloadsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
