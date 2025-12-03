"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BreadcrumbContent } from "@/components/breadcrumb-content";
import { DocsShell } from "@/components/docs/docs-shell";
import { SidebarGeneral } from "@/components/docs/sidebar-general";
import { Button } from "@/components/ui/button";
import { getComponentsIndex } from "@/lib/docs/components-index";
import { getGettingStartedIndex } from "@/lib/docs/getting-start-index";

export default function Components() {
  const pathname = usePathname();
  const pathPages = pathname.split("/").filter(Boolean);
  const index = getComponentsIndex();
  const gettingStartedItems = getGettingStartedIndex();
  return (
    <DocsShell
      sidebar={
        <SidebarGeneral
          items={index}
          gettingStartedItems={gettingStartedItems}
        />
      }
    >
      <div className="mt-2 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <BreadcrumbContent pathPages={pathPages} />
          <h1 className="text-4xl font-semibold">Components</h1>
          <span className="text-md max-w-lg opacity-80">
            Here you’ll discover all the components currently available in our
            library and we’re continuously expanding it with even more to come.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {index.map((components) => {
            return (
              <Button
                key={components.slug}
                variant={"link"}
                className="w-full justify-start p-0"
              >
                <Link href={`/docs/components/${components.slug}`}>
                  <h1>{components.name}</h1>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </DocsShell>
  );
}
