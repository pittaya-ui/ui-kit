import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { DocExample } from "@/lib/docs/types";

export const selectExamples: DocExample[] = [
  {
    id: "basic",
    title: "Basic usage",
    description:
      "A simple select for choosing a programming language with a placeholder.",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/pittaya/ui/select";

export function BasicSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="javascript">JavaScript</SelectItem>
        <SelectItem value="typescript">TypeScript</SelectItem>
        <SelectItem value="python">Python</SelectItem>
        <SelectItem value="rust">Rust</SelectItem>
        <SelectItem value="go">Go</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
    preview: (
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="rust">Rust</SelectItem>
          <SelectItem value="go">Go</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    id: "with-label",
    title: "With label",
    description:
      "Select paired with a label for better accessibility and form structure.",
    code: `import { Label } from "@/components/pittaya/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/pittaya/ui/select";

export function SelectWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Choose your framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="solid">SolidJS</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`,
    preview: (
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="framework">Framework</Label>
        <Select>
          <SelectTrigger id="framework">
            <SelectValue placeholder="Choose your framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="angular">Angular</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
            <SelectItem value="solid">SolidJS</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),
  },
  {
    id: "grouped",
    title: "Grouped options",
    description:
      "Organize related options into groups with labels for better navigation in larger lists.",
    code: `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/pittaya/ui/select";

export function GroupedSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a database" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>SQL Databases</SelectLabel>
          <SelectItem value="postgresql">PostgreSQL</SelectItem>
          <SelectItem value="mysql">MySQL</SelectItem>
          <SelectItem value="sqlite">SQLite</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>NoSQL Databases</SelectLabel>
          <SelectItem value="mongodb">MongoDB</SelectItem>
          <SelectItem value="redis">Redis</SelectItem>
          <SelectItem value="dynamodb">DynamoDB</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}`,
    preview: (
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a database" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>SQL Databases</SelectLabel>
            <SelectItem value="postgresql">PostgreSQL</SelectItem>
            <SelectItem value="mysql">MySQL</SelectItem>
            <SelectItem value="sqlite">SQLite</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>NoSQL Databases</SelectLabel>
            <SelectItem value="mongodb">MongoDB</SelectItem>
            <SelectItem value="redis">Redis</SelectItem>
            <SelectItem value="dynamodb">DynamoDB</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),
  },
  {
    id: "with-separator",
    title: "With separator",
    description:
      "Use separators to visually divide different sections of options without explicit grouping.",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/pittaya/ui/select";

export function SelectWithSeparator() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a cloud provider" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="aws">AWS (Amazon)</SelectItem>
        <SelectItem value="azure">Azure (Microsoft)</SelectItem>
        <SelectItem value="gcp">GCP (Google)</SelectItem>
        <SelectSeparator />
        <SelectItem value="digitalocean">DigitalOcean</SelectItem>
        <SelectItem value="vercel">Vercel</SelectItem>
        <SelectItem value="netlify">Netlify</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
    preview: (
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a cloud provider" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="aws">AWS (Amazon)</SelectItem>
          <SelectItem value="azure">Azure (Microsoft)</SelectItem>
          <SelectItem value="gcp">GCP (Google)</SelectItem>
          <SelectSeparator />
          <SelectItem value="digitalocean">DigitalOcean</SelectItem>
          <SelectItem value="vercel">Vercel</SelectItem>
          <SelectItem value="netlify">Netlify</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    id: "disabled",
    title: "Disabled state",
    description:
      "Prevent user interaction with the select using the disabled prop.",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/pittaya/ui/select";

export function DisabledSelect() {
  return (
    <Select disabled>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a runtime" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="nodejs">Node.js</SelectItem>
        <SelectItem value="deno">Deno</SelectItem>
        <SelectItem value="bun">Bun</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
    preview: (
      <Select disabled>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a runtime" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nodejs">Node.js</SelectItem>
          <SelectItem value="deno">Deno</SelectItem>
          <SelectItem value="bun">Bun</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    id: "disabled-items",
    title: "Disabled items",
    description:
      "Disable specific options within the select while keeping others interactive.",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/pittaya/ui/select";

export function SelectWithDisabledItems() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a version" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="v1">Version 1.0 (Legacy)</SelectItem>
        <SelectItem value="v2" disabled>
          Version 2.0 (Deprecated)
        </SelectItem>
        <SelectItem value="v3">Version 3.0 (Stable)</SelectItem>
        <SelectItem value="v4">Version 4.0 (Latest)</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
    preview: (
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a version" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="v1">Version 1.0 (Legacy)</SelectItem>
          <SelectItem value="v2" disabled>
            Version 2.0 (Deprecated)
          </SelectItem>
          <SelectItem value="v3">Version 3.0 (Stable)</SelectItem>
          <SelectItem value="v4">Version 4.0 (Latest)</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    id: "default-value",
    title: "With default value",
    description:
      "Pre-select an option by providing a defaultValue for uncontrolled components.",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/pittaya/ui/select";

export function SelectWithDefault() {
  return (
    <Select defaultValue="vscode">
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select an editor" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="vscode">VS Code</SelectItem>
        <SelectItem value="webstorm">WebStorm</SelectItem>
        <SelectItem value="vim">Vim</SelectItem>
        <SelectItem value="neovim">Neovim</SelectItem>
        <SelectItem value="sublime">Sublime Text</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
    preview: (
      <Select defaultValue="vscode">
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select an editor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vscode">VS Code</SelectItem>
          <SelectItem value="webstorm">WebStorm</SelectItem>
          <SelectItem value="vim">Vim</SelectItem>
          <SelectItem value="neovim">Neovim</SelectItem>
          <SelectItem value="sublime">Sublime Text</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
];
