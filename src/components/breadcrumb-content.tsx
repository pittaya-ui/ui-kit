"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export function BreadcrumbContent() {
  const pathname = usePathname();
  const pathPages = pathname.split("/").filter(Boolean);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathPages.map((pathPage, index) => {
          const href = `/${pathPages.slice(0, index + 1).join("/")}`;
          const isLast = index === pathPages.length - 1;
          const isDocs = pathPage.toLowerCase() === "docs";

          return (
            <div
              key={`${pathPage}-${index}`}
              className="flex items-center gap-2"
            >
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="capitalize">
                    {pathPage}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={isDocs ? "/docs/introduction" : href}
                    className="capitalize"
                  >
                    {pathPage}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
