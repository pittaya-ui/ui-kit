"use client";

import { CheckIcon, KeyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/components/ui/copy-button";

export function MultipleButtonsExample() {
  const [lastCopied, setLastCopied] = useState<string | null>(null);

  const snippets = [
    {
      id: "npm",
      label: "npm",
      command: "npm install @pittaya/ui",
      icon: "📦",
    },
    {
      id: "yarn",
      label: "Yarn",
      command: "yarn add @pittaya/ui",
      icon: "🧶",
    },
    {
      id: "pnpm",
      label: "pnpm",
      command: "pnpm add @pittaya/ui",
      icon: "⚡",
    },
  ];

  return (
    <div className="space-y-3">
      <p className="text-muted-foreground text-sm">
        Choose your package manager:
      </p>
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="bg-muted hover:bg-muted/80 relative rounded-lg border p-3 transition-colors"
        >
          <div className="flex items-center justify-between gap-4 pr-12">
            <div className="flex items-center gap-3">
              <span className="text-xl">{snippet.icon}</span>
              <div className="flex flex-col">
                <span className="text-foreground text-xs font-medium">
                  {snippet.label}
                </span>
                <code className="text-xs">{snippet.command}</code>
              </div>
            </div>
            {lastCopied === snippet.id && (
              <Badge variant="stable" className="animate-in fade-in">
                <CheckIcon className="mr-1 size-3" />
                Copied
              </Badge>
            )}
          </div>
          <CopyButton
            text={snippet.command}
            onCopy={() => {
              setLastCopied(snippet.id);
              toast.success(`${snippet.label} command copied!`);
              setTimeout(() => setLastCopied(null), 2000);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function ApiKeyExample() {
  const [showKey, setShowKey] = useState(false);
  const apiKey = "mock_api_key_51234567890abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="space-y-3">
      <div className="bg-muted relative rounded-lg border p-4">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded">
            <KeyIcon className="size-4" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-foreground text-sm font-medium">
                Production API Key
              </span>
              <Badge variant="stable">Live</Badge>
            </div>
            <code className="text-muted-foreground block text-xs">
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
      </div>
      <button
        onClick={() => setShowKey(!showKey)}
        className="text-primary hover:text-primary/80 text-xs underline"
      >
        {showKey ? "Hide" : "Show"} full key
      </button>
    </div>
  );
}

export function UrlShareExample() {
  const shareUrl = "https://ui.pittaya.org/docs/components/copy-button";

  return (
    <div className="space-y-3">
      <div className="from-primary/5 to-primary/10 relative overflow-hidden rounded-lg border bg-gradient-to-br p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 flex size-8 items-center justify-center rounded-full">
              <span className="text-lg">🔗</span>
            </div>
            <div>
              <div className="text-foreground text-sm font-medium">
                Share this page
              </div>
              <div className="text-muted-foreground text-xs">
                Copy link to clipboard
              </div>
            </div>
          </div>
          <div className="bg-background/50 rounded border p-2 pr-12 backdrop-blur-sm">
            <code className="text-muted-foreground text-xs break-all">
              {shareUrl}
            </code>
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
    </div>
  );
}
