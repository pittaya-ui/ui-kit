import { Github, Linkedin, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NPM_URL } from "@/constants/npm-url";
import { cn } from "@/lib/utils";

export function Footer() {
  const isAppStable = process.env.NEXT_PUBLIC_FF_IS_APP_STABLE === "true";

  return (
    <footer className="border-border/40 border-t bg-black">
      <div className="mx-auto w-fit max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/pittaya-logo.png"
                alt="Pittaya UI Logo"
                width={32}
                height={32}
              />
              <span className="text-lg font-semibold text-white">
                Pittaya UI
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Beautiful, accessible, and customizable components for modern web
              applications.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs/components"
                  className="text-muted-foreground hover:text-pittaya text-sm transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-muted-foreground hover:text-pittaya text-sm transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="text-muted-foreground hover:text-pittaya text-sm transition-colors"
                >
                  Showcase
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Find Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/pittaya-ui/"
                className="text-muted-foreground hover:text-pittaya transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/pittaya/"
                className="text-muted-foreground hover:text-pittaya transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={NPM_URL}
                className="text-muted-foreground hover:text-pittaya transition-colors"
                aria-label="NPM"
              >
                <Package className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-border/40 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pittaya UI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-muted-foreground inline-flex items-center gap-2 text-sm">
              <span
                className={cn(
                  "h-2 w-2 animate-pulse rounded-full",
                  isAppStable ? "bg-green-500" : "bg-yellow-500"
                )}
              />
              <span>{isAppStable ? "Stable" : "Unstable"}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
