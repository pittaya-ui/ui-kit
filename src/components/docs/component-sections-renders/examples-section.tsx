"use client";

import { Code, Eye } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "sonner";

import type { DocExample } from "@/lib/docs/types";

import { CopyButton } from "../../ui/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

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
            className="border-border/60 bg-card/60 rounded-2xl border p-4 shadow-sm backdrop-blur"
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
              <Tabs defaultValue="preview">
                <TabsList className="w-full">
                  <TabsTrigger value="preview" className="w-full">
                    <Eye className="size-4" /> Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="w-full">
                    <Code className="size-4" /> Code
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="preview"
                  className="bg-background animate-in fade-in-0 slide-in-from-left-4 flex min-h-[500px] overflow-y-auto rounded-xl duration-300"
                >
                  <div className="flex max-h-[500px] min-h-[500px] w-full items-center justify-center">
                    {example.preview}
                  </div>
                </TabsContent>
                <TabsContent
                  value="code"
                  className="bg-background animate-in fade-in-0 slide-in-from-right-4 flex h-[500px] items-start justify-center overflow-x-auto overflow-y-auto rounded-lg duration-300"
                >
                  <div className="relative max-h-[500px] min-h-[500px] w-full text-xs lg:text-sm">
                    <CopyButton
                      text={example.code}
                      onCopy={() => {
                        toast.success("Successfully copied to clipboard");
                      }}
                    />
                    <SyntaxHighlighter
                      showLineNumbers={true}
                      language="typescript"
                      style={atomOneDark}
                      customStyle={{
                        margin: 0,
                        padding: 20,
                        background: "#0a0a0a",
                      }}
                    >
                      {example.code}
                    </SyntaxHighlighter>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
