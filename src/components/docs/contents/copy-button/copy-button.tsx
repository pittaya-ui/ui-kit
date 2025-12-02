import type { ComponentDoc } from "@/lib/docs/types";

import {
  ApiKeyExample,
  MultipleButtonsExample,
  UrlShareExample,
} from "./copy-button-examples";

export const copyButtonDoc: ComponentDoc = {
  slug: "copy-button",
  metadata: {
    name: "Copy Button",
    description:
      "A button component that copies text to the clipboard with visual feedback, displaying an animated transition from copy to check icon.",
    category: "Actions",
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
            Use the Copy Button when you need to enable users to quickly copy
            text content to their clipboard, such as code snippets, API keys,
            command lines, or any other text that users might need to reuse.
          </p>
          <p>
            The component provides immediate visual feedback through an animated
            icon transition, confirming the successful copy action to the user.
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
              Position the button near the content that will be copied,
              typically in the top-right corner of code blocks or text
              containers.
            </li>
            <li>
              Use the <code>onCopy</code> callback to track analytics or trigger
              additional actions after copying.
            </li>
            <li>
              Ensure the copied text is meaningful and complete - avoid copying
              truncated or partial content.
            </li>
            <li>
              Consider adding <code>aria-label</code> for better accessibility
              when the button context isn&apos;t immediately clear.
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
            The component inherits all button accessibility features, including
            keyboard navigation and focus states. The icon transition provides
            visual feedback, and you can enhance it with screen reader
            announcements through the <code>onCopy</code> callback.
          </p>
          <p>
            For optimal accessibility, consider adding an{" "}
            <code>aria-label</code>
            attribute describing what content will be copied, such as &quot;Copy
            code snippet&quot; or &quot;Copy API key&quot;.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "text",
      type: "string",
      required: true,
      description:
        "The text content that will be copied to the clipboard when the button is clicked.",
    },
    {
      name: "onCopy",
      type: "() => void",
      description:
        "Optional callback function that executes after the text is successfully copied to the clipboard.",
    },
    {
      name: "className",
      type: "string",
      description:
        "Optional CSS classes to customize the button's appearance and positioning.",
    },
  ],
  examples: [
    {
      id: "multiple-options",
      title: "Multiple copy options",
      description:
        "Display multiple options with individual copy buttons and track which one was copied.",
      code: `"use client";
      
import { CopyButton } from "@/components/pittaya/ui/copy-button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useState } from "react";

export function MultipleButtons() {

  const [lastCopied, setLastCopied] = useState<string | null>(null);

  const snippets = [
    { id: "npm", label: "npm", command: "npm install @pittaya/ui" },
    { id: "yarn", label: "Yarn", command: "yarn add @pittaya/ui" },
    { id: "pnpm", label: "pnpm", command: "pnpm add @pittaya/ui" },
  ];

  return (
    <div className="space-y-3">
      {snippets.map((snippet) => (
        <div key={snippet.id} className="relative border rounded-lg p-3">
          <code>{snippet.command}</code>
          {lastCopied === snippet.id && <Badge>Copied</Badge>}
          <CopyButton
            text={snippet.command}
            onCopy={() => {
              setLastCopied(snippet.id);
              toast.success(\`\${snippet.label} command copied!\`);
            }}
          />
        </div>
      ))}
    </div>
  );
}`,
      preview: <MultipleButtonsExample />,
    },
    {
      id: "api-key",
      title: "API key with security",
      description:
        "Copy sensitive information like API keys with masked display and secure copy.",
      code: `import { CopyButton } from "@/components/pittaya/ui/copy-button";
import { Badge } from "@/components/ui/badge";
import { KeyIcon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export function ApiKeyExample() {
  const [showKey, setShowKey] = useState(false);
  const apiKey = "mock_api_key_51234567890abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="relative rounded-lg border bg-muted p-4">
      <div className="flex items-start gap-3">
        <KeyIcon className="size-5" />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Production API Key</span>
            <Badge variant="stable">Live</Badge>
          </div>
          <code className="text-xs">
            {showKey ? apiKey : "mock_api_key_51234567890•••••••••••••••••••"}
          </code>
        </div>
      </div>
      <CopyButton
        text={apiKey}
        onCopy={() => {
          toast.success("API key copied!", {
            description: "Keep it secure and never share it publicly.",
          });
        }}
      />
      <button onClick={() => setShowKey(!showKey)}>
        {showKey ? "Hide" : "Show"} full key
      </button>
    </div>
  );
}`,
      preview: <ApiKeyExample />,
    },
    {
      id: "share-url",
      title: "Share URL",
      description:
        "Enable easy sharing of URLs with visual feedback and contextual information.",
      code: `import { CopyButton } from "@/components/pittaya/ui/copy-button";
import { toast } from "sonner";

export function UrlShare() {
  const shareUrl = "https://pittaya.dev/docs/components/copy-button";

  return (
    <div className="relative rounded-lg border p-4 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔗</span>
          <div>
            <div className="text-sm font-medium">Share this page</div>
            <div className="text-xs text-muted-foreground">
              Copy link to clipboard
            </div>
          </div>
        </div>
        <div className="rounded border bg-background/50 p-2 pr-12">
          <code className="text-xs break-all">{shareUrl}</code>
        </div>
      </div>
      <CopyButton
        text={shareUrl}
        onCopy={() => {
          toast.success("Link copied!", {
            description: "Share it with your team.",
          });
        }}
        className="top-4 right-4"
      />
    </div>
  );
}`,
      preview: <UrlShareExample />,
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
};
