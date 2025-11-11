import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pittaya UI | Components",
  description:
    "Here you'll discover all the components currently available in our library.",
};

export default function ComponentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-6 pt-24 pb-16 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_220px]">
      {children}
    </div>
  );
}
