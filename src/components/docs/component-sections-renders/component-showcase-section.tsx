import { Code, Eye } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DocShowcase } from "@/lib/docs/types";

type ComponentShowcaseSectionProps = {
  showcase: DocShowcase;
};

export function ComponentShowcaseSection({
  showcase,
}: ComponentShowcaseSectionProps) {
  return (
    <section id="showcase" className="mt-6">
      <article className="border-border rounded-2xl border p-4">
        <Tabs defaultValue="preview">
          <TabsList className="w-full">
            <TabsTrigger value="preview" className="w-full">
              <Eye /> Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="w-full">
              <Code /> Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="border-border flex max-h-[500px] min-h-[500px] w-full items-center justify-center">
              {showcase.preview}
            </div>
          </TabsContent>
          <TabsContent value="code">
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
              {showcase.code}
            </SyntaxHighlighter>
          </TabsContent>
        </Tabs>
      </article>
    </section>
  );
}
