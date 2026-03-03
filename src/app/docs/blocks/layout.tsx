import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pittaya UI | Blocks",
  description:
    "Ready-made page blocks you can copy and paste directly into your project.",
};

export default function BlocksLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16">
      {children}
    </div>
  );
}
