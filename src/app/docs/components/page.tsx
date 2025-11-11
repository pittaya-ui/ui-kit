import Link from "next/link";

import { DocsShell } from "@/components/docs/docs-shell";
import { SidebarGeneral } from "@/components/docs/sidebar-general";
import { Button } from "@/components/ui/button";
import { getComponentsIndex } from "@/lib/docs/components-index";

export default function Components() {
  const index = getComponentsIndex();
  return (
    <DocsShell sidebar={<SidebarGeneral items={index} />}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Components</h1>
          <small className="max-w-md opacity-80">
            Here you’ll discover all the components currently available in our
            library and we’re continuously expanding it with even more to come.
          </small>
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
