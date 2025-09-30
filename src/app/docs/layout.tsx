import type { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full flex-col gap-12 pt-24 pb-16">
      {children}
    </div>
  );
}
