"use client";

import { Fragment } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Separator } from "@/components/ui/separator";
import type { ComponentDoc } from "@/lib/docs/types";

import { CopyCodeButton } from "../copy-code-button";
import { Badge } from "../ui/badge";

type ComponentContentProps = {
  doc: ComponentDoc;
};

export function ComponentContent({ doc }: ComponentContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="space-y-4">
        <div className="text-muted-foreground flex items-center gap-3 text-sm">
          <span className="border-border/60 bg-card/80 rounded-full border px-3 py-1 font-medium tracking-wide">
            {doc.metadata.category}
          </span>
          {doc.metadata.status ? (
            <Badge
              variant={doc.metadata.status}
              className="rounded-full px-3 py-1 tracking-wide"
            >
              {doc.metadata.status}
            </Badge>
          ) : null}
        </div>
        <div>
          <h1 id={doc.slug} className="text-foreground text-4xl font-bold">
            {doc.metadata.name}
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            {doc.metadata.description}
          </p>
        </div>
      </header>

      {doc.sections.map((section) => {
        const HeadingTag = section.level === 2 ? "h2" : "h3";
        return (
          <section
            key={section.id}
            className={`mt-12 space-y-4 ${section.level === 3 ? "pl-4" : ""}`}
          >
            <div className="space-y-2">
              <HeadingTag
                id={section.id}
                className={`text-foreground font-semibold ${section.level === 2 ? "text-2xl" : "text-xl"}`}
              >
                {section.title}
              </HeadingTag>
              {section.description ? (
                <p className="text-muted-foreground">{section.description}</p>
              ) : null}
            </div>
            <div className="border-border/60 bg-card/60 rounded-2xl border p-6 shadow-sm backdrop-blur">
              {section.content}
            </div>
          </section>
        );
      })}

      {doc.examples.length ? (
        <section id="exemplos" className="mt-12 space-y-4">
          <div className="space-y-2">
            <h2 className="text-foreground text-2xl font-semibold">Exemplos</h2>
            <p className="text-muted-foreground">
              Combine variantes e tamanhos para atender às suas necessidades.
            </p>
          </div>
          <div className="space-y-6">
            {doc.examples.map((example) => (
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
                    >
                      {example.code}
                    </SyntaxHighlighter>
                  </pre>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {doc.props.length ? (
        <section id="propriedades" className="mt-12 space-y-4">
          <div className="space-y-2">
            <h2 className="text-foreground text-2xl font-semibold">
              Propriedades
            </h2>
            <p className="text-muted-foreground">
              Interface TSX que combina variantes e atributos padrão de
              `button`.
            </p>
          </div>
          <div className="border-border/60 bg-card/60 overflow-hidden rounded-2xl border shadow-sm backdrop-blur">
            <table className="w-full border-collapse overflow-x-auto text-sm">
              <thead className="border-border/60 border-b bg-rose-500/30 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Nome</th>
                  <th className="px-4 py-3 font-semibold">Tipo</th>
                  <th className="px-4 py-3 font-semibold">Padrão</th>
                  <th className="px-4 py-3 font-semibold">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {doc.props.map((prop, index) => (
                  <Fragment key={prop.name}>
                    <tr className="border-border/50 border-b">
                      <td className="text-foreground px-4 py-3 font-medium">
                        {prop.name}
                        {prop.required ? (
                          <span className="bg-destructive/10 text-destructive ml-2 rounded-full px-2 py-0.5 text-xs font-medium">
                            Obrigatório
                          </span>
                        ) : null}
                      </td>
                      <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                        {prop.type}
                      </td>
                      <td className="text-muted-foreground px-4 py-3">
                        {prop.defaultValue ?? "-"}
                      </td>
                      <td className="text-muted-foreground px-4 py-3">
                        {prop.description}
                      </td>
                    </tr>
                    {index === doc.props.length - 1 ? null : (
                      <tr>
                        <td colSpan={4} className="px-0">
                          <Separator className="mx-4" />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
    </div>
  );
}
