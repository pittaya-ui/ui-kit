import type { ReactNode } from "react";

type DocsShellProps = {
  sidebar: ReactNode;
  children: ReactNode;
  secondarySidebar?: ReactNode;
};

export function DocsShell({ sidebar, children, secondarySidebar }: DocsShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-6 px-6 pb-16 pt-28 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_220px]">
      <aside className="sticky top-28 hidden h-fit max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl  p-4 shadow-sm backdrop-blur lg:block">
        {sidebar}
      </aside>
      <main className="min-w-0 lg:col-span-1">{children}</main>
      {secondarySidebar ? (
        <aside className="sticky top-28 hidden h-fit max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl p-4 shadow-sm backdrop-blur xl:block">
          {secondarySidebar}
        </aside>
      ) : null}
    </div>
  );
}

