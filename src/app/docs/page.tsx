import Link from "next/link";

import { getComponentsIndex } from "@/lib/docs/components-index";

export default function DocsHomePage() {
  const components = getComponentsIndex();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-16 pt-10">
      <header className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
          Documentação
        </span>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Explore os componentes da Pittaya UI
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Cada componente é acompanhado de exemplos reais, boas práticas e referências de API. Navegue pelo índice e descubra como construir interfaces consistentes com rapidez.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">Componentes</h2>
          <span className="text-sm text-muted-foreground">
            {components.length} componentes documentados
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {components.map((component) => (
            <Link
              key={component.slug}
              href={`/docs/components/${component.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm transition hover:-translate-y-1 hover:border-border"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {component.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">
                    {component.name}
                  </h3>
                </div>
                <span className="text-sm text-muted-foreground/70">{component.status}</span>
              </div>
            
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                {component.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-background/60 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

