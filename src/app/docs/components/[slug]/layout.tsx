import { ReactNode } from "react";

export default function ComponentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-6 px-6 pb-16 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_220px]">
      {children}
    </div>
  );
}
