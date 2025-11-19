import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

interface ComponentsNavigationProps {
  previous?: {
    slug: string;
    name: string;
  };
  next?: {
    slug: string;
    name: string;
  };
}

export function ComponentsNavigation({
  previous,
  next,
}: ComponentsNavigationProps) {
  return (
    <footer className="mt-10 flex w-full items-center justify-between">
      <div className="flex h-full items-center gap-2">
        <Button
          variant="outline"
          asChild
          disabled={!previous}
          className={cn(!previous && "hidden")}
        >
          <Link
            href={`/docs/components/${previous?.slug}`}
            className="group flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            {previous?.name}
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          asChild
          disabled={!next}
          className={cn(!next && "hidden")}
        >
          <Link
            href={`/docs/components/${next?.slug}`}
            className="group flex items-center gap-2"
          >
            {next?.name}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
