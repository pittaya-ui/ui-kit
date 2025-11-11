"use client";

import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { CopyCodeButton } from "../copy-code-button";

type InstallationSectionProps = {
  componentSlug: string;
  title?: string;
  description?: string;
  cliCommand?: string;
  className?: string;
};

function InstallationSection({
  componentSlug,
  title = "Installation",
  description = "Install the component directly into your project using the Pittaya CLI.",
  cliCommand = "npx pittaya@latest add",
  className,
}: InstallationSectionProps) {
  const installCommand = `${cliCommand} ${componentSlug}`;

  return (
    <section id="installation" className={className ?? "mt-8 space-y-4"}>
      <div className="space-y-2">
        <h2 className="text-foreground text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="border-border/60 bg-card/60 rounded-2xl border p-6 shadow-sm backdrop-blur">
        <pre className="relative overflow-x-auto rounded-lg bg-[#282C34] p-4">
          <CopyCodeButton code={installCommand} />
          <SyntaxHighlighter
            language="bash"
            style={atomOneDark}
            customStyle={{
              margin: 0,
              padding: 0,
              background: "transparent",
            }}
          >
            {installCommand}
          </SyntaxHighlighter>
        </pre>
      </div>
    </section>
  );
}

export { InstallationSection };
export type { InstallationSectionProps };
