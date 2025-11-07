import Link from "next/link";

import { getComponentsIndex } from "@/lib/docs/components-index";

export default function DocsHomePage() {
  const components = getComponentsIndex();

  return (
    <div className="space-y-4">
      <header className="space-y-6">
        <span className="border-border/60 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
          Documentação
        </span>
        <div className="space-y-3">
          <h1 className="text-foreground text-3xl font-bold sm:text-4xl">
            Explore os componentes da Pittaya UI
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Cada componente é acompanhado de exemplos reais e referências de
            API. Navegue pelo índice e descubra como construir interfaces
            consistentes com rapidez.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-foreground text-2xl font-semibold">
            Componentes
          </h2>
          <span className="text-muted-foreground text-right text-sm">
            {components.length} componentes documentados
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {components.map((component) => (
            <Link
              key={component.slug}
              href={`/docs/components/${component.slug}`}
              className="group border-border/60 bg-card/60 hover:border-border flex flex-col gap-4 rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <span className="bg-muted/60 text-muted-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase">
                    {component.category}
                  </span>
                  <h3 className="text-foreground group-hover:text-primary text-xl font-semibold">
                    {component.name}
                  </h3>
                </div>
                <span className="text-muted-foreground/70 text-sm">
                  {component.status}
                </span>
              </div>

              <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-xs">
                {component.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="border-border/60 bg-background/60 rounded-full border px-2 py-1"
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
