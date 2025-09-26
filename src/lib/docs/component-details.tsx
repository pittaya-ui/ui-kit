import { Button } from "@/components/ui/button";

import type { ComponentDoc } from "./types";

const buttonDoc: ComponentDoc = {
  slug: "button",
  metadata: {
    name: "Button",
    description:
      "Um botão acessível e personalizável que expõe variantes para ações primárias, secundárias e destrutivas.",
    category: "Ações",
    status: "stable",
  },
  sections: [
    {
      id: "quando-usar",
      title: "Quando usar",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Utilize o botão sempre que precisar destacar uma ação executável pelo usuário, como enviar formulários, abrir diálogos ou confirmar fluxos críticos.
          </p>
          <p>
            Combine as variantes disponíveis para comunicar prioridade visual, mantendo consistência em toda a interface.
          </p>
        </div>
      ),
    },
    {
      id: "melhores-praticas",
      title: "Melhores práticas",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <ul className="list-disc space-y-2 pl-5">
            <li>Prefira verbos curtos no imperativo, como “Salvar” ou “Enviar”.</li>
            <li>Selecione a variante <code>destructive</code> apenas para ações irreversíveis.</li>
            <li>
              Combine ícones com texto quando precisar transmitir significado de forma rápida, mantendo a proporção definida nos estilos padrão.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "acessibilidade",
      title: "Acessibilidade",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            O componente herda atributos nativos de <code>button</code>, incluindo suporte a teclado e estados de foco. Certifique-se de fornecer rótulos descritivos por meio da própria children ou atributo <code>aria-label</code> quando usar ícones isolados.
          </p>
          <p>
            Estados de foco ficam visíveis graças às classes utilitárias definidas em <code>buttonVariants</code>; personalize-as conforme as diretrizes do seu design system.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
      defaultValue: '"default"',
      description:
        "Define o estilo visual do botão. Utilize a variante que melhor comunica a importância da ação.",
    },
    {
      name: "size",
      type: '"default" | "sm" | "lg" | "icon"',
      defaultValue: '"default"',
      description:
        "Controla o espaçamento interno e a altura do botão, permitindo adaptações para toolbar, cards ou CTAs principais.",
    },
    {
      name: "asChild",
      type: "boolean",
      defaultValue: "false",
      description:
        "Ao habilitar, usa o slot do Radix para repassar estilos ao componente filho, útil para transformar links em botões estilizados.",
    },
  ],
  examples: [
    {
      id: "variantes",
      title: "Variantes padrão",
      description: "Demonstração das variantes disponíveis para comunicar hierarquia de ações.",
      code: `import { Button } from "@/components/ui/button";

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`,
      preview: (
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      ),
    },
    {
      id: "com-icone",
      title: "Com ícone",
      description: "Use ícones para reforçar o contexto quando o espaço é limitado.",
      code: `import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonWithIcon() {
  return (
    <Button>
      Continuar
      <ArrowRight className="size-4" />
    </Button>
  );
}`,
      preview: (
        <Button>
          Continuar
          <span aria-hidden className="inline-flex items-center justify-center">
            →
          </span>
        </Button>
      ),
    },
  ],
  toc: [
    { id: "quando-usar", title: "Quando usar", level: 2 },
    { id: "melhores-praticas", title: "Melhores práticas", level: 2 },
    { id: "acessibilidade", title: "Acessibilidade", level: 2 },
    { id: "exemplos", title: "Exemplos", level: 2 },
    { id: "propriedades", title: "Propriedades", level: 2 },
  ],
};

const docs: Record<string, ComponentDoc> = {
  [buttonDoc.slug]: buttonDoc,
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return docs[slug];
}

export function getAllComponentDocs(): ComponentDoc[] {
  return Object.values(docs);
}

