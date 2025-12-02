import { InstallationSection } from "@/components/ui/installation-section";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

export const installationSectionDoc: ComponentDoc = createComponentDoc({
  slug: "installation-section",
  metadata: {
    name: "Installation Section",
    description:
      "A pre-styled section component that displays CLI installation commands with bash syntax highlighting and copy button functionality.",
    category: "Documentation",
    status: "stable",
  },
  sections: [
    {
      id: "when-to-use",
      title: "When to use",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            Use the Installation Section when you need to display package
            installation commands in your documentation, landing pages, or
            component libraries.
          </p>
          <p>
            This component is perfect for design systems, UI libraries, and any
            project that offers CLI-based installation.
          </p>
        </div>
      ),
    },
    {
      id: "best-practices",
      title: "Best practices",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Place the installation section early in your documentation for
              easy discoverability.
            </li>
            <li>
              Use clear component slugs that match your CLI package naming
              conventions.
            </li>
            <li>
              Customize the title and description to match your brand voice and
              documentation style.
            </li>
            <li>
              Consider adding additional installation methods (npm, yarn, pnpm)
              if your CLI supports them.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "accessibility",
      title: "Accessibility",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            The component includes proper semantic HTML with heading hierarchy
            and descriptive text for screen readers.
          </p>
          <p>
            The copy button provides visual feedback through icons and toast
            notifications, ensuring all users can successfully copy the
            installation command.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "componentSlug",
      type: "string",
      required: true,
      description:
        "The slug of the component to install. This will be appended to the CLI command.",
    },
    {
      name: "title",
      type: "string",
      defaultValue: '"Installation"',
      description: "The heading text for the installation section.",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        '"Install the component directly into your project using the Pittaya CLI."',
      description: "The descriptive text explaining how to use the command.",
    },
    {
      name: "availableCommands",
      type: "object",
      required: true,
      description: "The available commands to install the component.",
    },
    {
      name: "className",
      type: "string",
      defaultValue: '"mt-8 space-y-4"',
      description: "Additional CSS classes to customize the section styling.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic usage",
      description:
        "Simple usage with just the component slug. Uses all default values.",
      code: `import { InstallationSection } from "@/components/pittaya/ui/installation-section";

export function BasicInstallation() {
  return (
    <InstallationSection 
      availableCommands={{ 
        npm: "npm install @mylib/ui", 
        yarn: "yarn add @mylib/ui", 
        pnpm: "pnpm add @mylib/ui",
        bun: "bun add @mylib/ui",
      }} 
      componentSlug="button" 
      className="px-4" 
    />
  );
}`,
      preview: (
        <InstallationSection
          availableCommands={{
            npm: "npm install @mylib/ui",
            yarn: "yarn add @mylib/ui",
            pnpm: "pnpm add @mylib/ui",
          }}
          componentSlug="button"
          className="px-4"
        />
      ),
    },
    {
      id: "custom-text",
      title: "Custom title and description",
      description: "Customize the title and description to match your needs.",
      code: `import { InstallationSection } from "@/components/pittaya/ui/installation-section";

export function CustomInstallation() {
  return (
    <InstallationSection
      availableCommands={{ 
        npm: "npm install @mylib/ui", 
        yarn: "yarn add @mylib/ui", 
        pnpm: "pnpm add @mylib/ui",
      }}
      componentSlug="avatar"
      title="Get Started"
      className="px-4"
      description="Add the Avatar component to your project with a single command."
    />
  );
}`,
      preview: (
        <InstallationSection
          availableCommands={{
            npm: "npm install @mylib/ui",
            yarn: "yarn add @mylib/ui",
            pnpm: "pnpm add @mylib/ui",
          }}
          componentSlug="avatar"
          title="Get Started"
          description="Add the Avatar component to your project with a single command."
          className="px-4"
        />
      ),
    },
    {
      id: "custom-cli",
      title: "Custom CLI command",
      description: "Use a different CLI command or package manager.",
      code: `import { InstallationSection } from "@/components/pittaya/ui/installation-section";

export function CustomCLI() {
  return (
    <InstallationSection
      availableCommands={{ 
        npm: "npm install @mylib/ui",
      }}
      componentSlug="dialog"
      description="Install using npm directly from our package registry."
      className="px-4"
    />
  );
}`,
      preview: (
        <InstallationSection
          availableCommands={{ npm: "npm install @mylib/ui" }}
          componentSlug="dialog"
          description="Install using npm directly from our package registry."
          className="px-4"
        />
      ),
    },
  ],
  toc: [
    { id: "installation", title: "Installation", level: 2 },
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "accessibility", title: "Accessibility", level: 2 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
});
