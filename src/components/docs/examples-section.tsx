"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import type { DocExample } from "@/lib/docs/types";

import { CopyCodeButton } from "../copy-code-button";

type ExamplesSectionProps = {
  examples: DocExample[];
  title?: string;
  description?: string;
};

export function ExamplesSection({
  examples,
  title = "Examples",
  description = "Combine variants and sizes to meet your needs.",
}: ExamplesSectionProps) {
  if (!examples.length) {
    return null;
  }

  return (
    <section id="examples" className="mt-12 space-y-4">
      <div className="space-y-2">
        <h2 className="text-foreground text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-6">
        {examples.map((example) => (
          <article
            key={example.id}
            className="border-border/60 bg-card/60 rounded-2xl border p-6 shadow-sm backdrop-blur"
          >
            <div className="space-y-3">
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  {example.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {example.description}
                </p>
              </div>
              <div className="border-border/60 bg-background/70 rounded-xl border p-4">
                {example.preview}
              </div>
              <pre className="relative overflow-x-auto rounded-lg bg-[#282C34] p-4 text-xs">
                <CopyCodeButton code={example.code} />
                <SyntaxHighlighter
                  language="typescript"
                  style={atomOneDark}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    background: "transparent",
                  }}
                >
                  {example.code}
                </SyntaxHighlighter>
              </pre>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

