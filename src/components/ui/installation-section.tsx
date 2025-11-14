"use client";

import { SquareTerminal } from "lucide-react";
import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

import { CopyButton } from "./copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

type InstallationSectionProps = {
  componentSlug: string;
  title?: string;
  description?: string;
  availableCommands: { [key: string]: string };
  className?: string;
};

function InstallationSection({
  componentSlug,
  title = "Installation",
  description = "Install the component directly into your project using the Pittaya CLI.",
  availableCommands,
  className,
}: InstallationSectionProps) {
  return (
    <section id="installation" className={cn("mt-8 space-y-4", className)}>
      <div className="space-y-2">
        <h2 className="text-foreground text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Tabs
        defaultValue="npm"
        className="border-border bg-card/60 w-full rounded-lg border"
      >
        <div className="flex items-center justify-start gap-2 px-4 py-2">
          <SquareTerminal className="size-6" />
          <TabsList className="bg-card/60">
            {Object.keys(availableCommands).map((command) => (
              <TabsTrigger key={command} value={command} className="w-full">
                {command}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.keys(availableCommands).map((command) => (
          <TabsContent key={command} value={command}>
            <pre className="relative flex items-center justify-between gap-2 overflow-x-auto border-t p-4">
              <CopyButton
                text={`${availableCommands[command as keyof typeof availableCommands]} ${componentSlug}`}
                onCopy={() => {
                  toast.success("Successfully copied to clipboard");
                }}
              />
              <div className="max-w-[85%] overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={atomOneDark}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    background: "transparent",
                  }}
                >
                  {`${availableCommands[command as keyof typeof availableCommands]} ${componentSlug}`}
                </SyntaxHighlighter>
              </div>
            </pre>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export { InstallationSection };
export type { InstallationSectionProps };
