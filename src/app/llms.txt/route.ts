import { getComponentsIndex } from "@/lib/docs/components-index";
import { getGettingStartedIndex } from "@/lib/docs/getting-start-index";

export function GET() {
  const baseUrl = "https://ui.pittaya.org";
  const components = getComponentsIndex();
  const gettingStarted = getGettingStartedIndex();

  // Group components by category
  const categories = new Map<
    string,
    { slug: string; name: string; description?: string }[]
  >();

  for (const component of components) {
    const category = component.category;
    if (!categories.has(category)) {
      categories.set(category, []);
    }
    categories.get(category)!.push({
      slug: component.slug,
      name: component.name,
      description: component.description,
    });
  }

  const lines: string[] = [
    `# Pittaya UI`,
    ``,
    `> Pittaya UI is a fully open-source UI component library for React, built with TypeScript, Tailwind CSS, and Radix UI primitives. It provides production-ready, accessible, and highly customizable components designed to scale with your ideas. Components are composable, responsive, and follow modern design patterns with smooth animations and glassmorphism effects.`,
    ``,
    `## Docs`,
    ``,
  ];

  // Getting Started pages
  for (const item of gettingStarted) {
    lines.push(
      `- [${item.title}](${baseUrl}${item.href}): ${getGettingStartedDescription(item.slug)}`
    );
  }

  lines.push(
    `- [Components](${baseUrl}/docs/components): Browse all available components.`
  );

  lines.push(``);

  // Components grouped by category
  lines.push(`## Components`);
  lines.push(``);

  const categoryOrder = [
    "Actions",
    "Forms",
    "Navigation",
    "Overlays",
    "Feedback",
    "Components",
    "Documentation",
  ];

  for (const categoryName of categoryOrder) {
    const items = categories.get(categoryName);
    if (!items || items.length === 0) continue;

    lines.push(`### ${categoryName}`);
    lines.push(``);

    for (const item of items) {
      const desc = item.description ? `: ${item.description}` : "";
      lines.push(
        `- [${item.name}](${baseUrl}/docs/components/${item.slug})${desc}`
      );
    }

    lines.push(``);
  }

  // Append any remaining categories not in the order list
  for (const [categoryName, items] of categories) {
    if (categoryOrder.includes(categoryName)) continue;

    lines.push(`### ${categoryName}`);
    lines.push(``);

    for (const item of items) {
      const desc = item.description ? `: ${item.description}` : "";
      lines.push(
        `- [${item.name}](${baseUrl}/docs/components/${item.slug})${desc}`
      );
    }

    lines.push(``);
  }

  const content = lines.join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

function getGettingStartedDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    introduction:
      "Overview of Pittaya UI, its core principles, tech stack, and what makes it unique.",
    installation:
      "Step-by-step guide to install and set up Pittaya UI in your project.",
  };
  return descriptions[slug] ?? "";
}
