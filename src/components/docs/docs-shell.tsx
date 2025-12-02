import type { ReactNode } from "react";

type DocsShellProps = {
  sidebar: ReactNode;
  children: ReactNode;
  secondarySidebar?: ReactNode;
};

export function DocsShell({
  sidebar,
  children,
  secondarySidebar,
}: DocsShellProps) {
  return (
    <>
      <aside className="sticky top-28 hidden h-fit max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl p-4 shadow-sm backdrop-blur lg:block">
        {sidebar}
      </aside>
      <main className="min-w-0 lg:col-span-1">{children}</main>
      {secondarySidebar ? (
        <aside className="sticky top-28 hidden h-fit max-h-[calc(100vh-7rem)] rounded-xl p-4 shadow-sm backdrop-blur xl:block">
          {secondarySidebar}
        </aside>
      ) : null}
    </>
  );
}
