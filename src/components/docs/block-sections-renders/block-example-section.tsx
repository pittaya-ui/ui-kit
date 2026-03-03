"use client";

import { Code, Eye, Monitor, Smartphone, Tablet } from "lucide-react";
import { type ReactNode, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "sonner";

import { PreviewFrame } from "@/components/docs/preview-frame";
import type { BlockFile } from "@/lib/docs/types";
import { cn } from "@/lib/utils";

import { CopyButton } from "../../ui/copy-button";
import { File, Folder, Tree, type TreeViewElement } from "../../ui/file-tree";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

type BlockExampleSectionProps = {
  preview: ReactNode;
  files: BlockFile[];
};

type PreviewSize = "full" | "tablet" | "mobile";

const PREVIEW_SIZES: Record<
  PreviewSize,
  { label: string; icon: ReactNode; width: string }
> = {
  full: {
    label: "Desktop",
    icon: <Monitor className="size-3.5" />,
    width: "100%",
  },
  tablet: {
    label: "Tablet",
    icon: <Tablet className="size-3.5" />,
    width: "768px",
  },
  mobile: {
    label: "Mobile",
    icon: <Smartphone className="size-3.5" />,
    width: "375px",
  },
};

function buildTree(files: BlockFile[]): TreeViewElement[] {
  const root: TreeViewElement[] = [];

  files.forEach((file) => {
    const parts = file.path.split("/");
    let currentLevel = root;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;
      const existing = currentLevel.find((n) => n.name === part);

      if (existing) {
        currentLevel = existing.children ?? [];
      } else {
        const node: TreeViewElement = {
          id: isFile
            ? file.id
            : `folder-${parts.slice(0, index + 1).join("/")}`,
          name: part,
          isSelectable: true,
          children: isFile ? undefined : [],
        };
        currentLevel.push(node);
        if (!isFile) currentLevel = node.children!;
      }
    });
  });

  return root;
}

function collectFolderIds(nodes: TreeViewElement[]): string[] {
  const ids: string[] = [];
  const walk = (node: TreeViewElement) => {
    if (node.children) {
      ids.push(node.id);
      node.children.forEach(walk);
    }
  };
  nodes.forEach(walk);
  return ids;
}

export function BlockExampleSection({
  preview,
  files,
}: BlockExampleSectionProps) {
  const [selectedFileId, setSelectedFileId] = useState<string>(files[0]?.id);
  const [previewSize, setPreviewSize] = useState<PreviewSize>("full");
  const [activeTab, setActiveTab] = useState("preview");

  const tree = buildTree(files);
  const expandedFolderIds = collectFolderIds(tree);
  const selectedFile = files.find((f) => f.id === selectedFileId) ?? files[0];

  return (
    <section id="block-example" className="mt-6 space-y-0">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* ── Toolbar row ── */}
        <div className="border-border/50 bg-card/40 flex items-center justify-between rounded-t-xl border border-b-1 px-3 py-2 backdrop-blur">
          {/* Left: tab switcher */}
          <TabsList className="h-8 gap-0.5 p-0.5">
            <TabsTrigger value="preview" className="h-7 gap-1.5 px-3 text-xs">
              <Eye className="size-3.5" /> Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="h-7 gap-1.5 px-3 text-xs">
              <Code className="size-3.5" /> Code
            </TabsTrigger>
          </TabsList>

          {/* Right: resize buttons (only meaningful for preview) */}
          <div
            className={cn(
              "flex items-center gap-0.5 transition-opacity duration-200",
              activeTab !== "preview" && "pointer-events-none opacity-30"
            )}
          >
            {(
              Object.entries(PREVIEW_SIZES) as [
                PreviewSize,
                (typeof PREVIEW_SIZES)[PreviewSize],
              ][]
            ).map(([key, { label, icon }]) => (
              <button
                key={key}
                onClick={() => setPreviewSize(key)}
                title={label}
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-md transition-colors",
                  previewSize === key
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                )}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* ── Preview tab ── */}
        <TabsContent
          value="preview"
          className="border-border/50 bg-background/50 animate-in fade-in-0 mt-0 overflow-hidden rounded-b-xl border duration-200"
        >
          <div className="flex h-[640px] w-full items-center justify-center overflow-hidden bg-background/30 backdrop-blur-sm">
            <div
              className={cn(
                "h-full bg-background transition-[width] duration-300 ease-in-out",
                previewSize !== "full" && "border-x border-border/40 shadow-sm"
              )}
              style={{ width: PREVIEW_SIZES[previewSize].width }}
            >
              <PreviewFrame className="h-full w-full border-0">
                {preview}
              </PreviewFrame>
            </div>
          </div>
        </TabsContent>

        {/* ── Code tab ── */}
        <TabsContent
          value="code"
          className="animate-in fade-in-0 mt-0 duration-200"
        >
          <div className="border-border/50 bg-card/60 flex h-[640px] overflow-hidden rounded-b-xl border shadow-sm backdrop-blur">
            {/* File tree sidebar */}
            <aside className="border-border/40 bg-background/50 relative flex w-52 shrink-0 flex-col border-r">
              <div className="border-border/40 border-b px-3 py-2">
                <p className="text-muted-foreground text-xs font-medium tracking-wider">
                  Files
                </p>
              </div>
              <div className="relative flex-1 overflow-hidden py-2">
                <Tree
                  className="h-full"
                  initialExpandedItems={expandedFolderIds}
                  initialSelectedId={selectedFile?.id}
                >
                  {renderTreeNodes(
                    tree,
                    files,
                    selectedFileId,
                    setSelectedFileId
                  )}
                </Tree>
              </div>
            </aside>

            {/* Code viewer */}
            <div className="relative min-w-0 flex-1 overflow-auto">
              {selectedFile && (
                <>
                  <div className="border-border/40 bg-background/50 sticky top-0 flex items-center justify-between border-b px-4 py-2">
                    <span className="text-muted-foreground font-mono text-xs">
                      {selectedFile.path}
                    </span>
                    <CopyButton
                      text={selectedFile.code}
                      className="static translate-x-0 translate-y-0"
                      onCopy={() =>
                        toast.success("Successfully copied to clipboard")
                      }
                    />
                  </div>
                  <SyntaxHighlighter
                    showLineNumbers
                    language={selectedFile.language ?? "tsx"}
                    style={atomOneDark}
                    customStyle={{
                      margin: 0,
                      padding: 20,
                      background: "#121212",
                      fontSize: "0.8rem",
                    }}
                  >
                    {selectedFile.code}
                  </SyntaxHighlighter>
                </>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function renderTreeNodes(
  nodes: TreeViewElement[],
  files: BlockFile[],
  selectedFileId: string,
  onSelect: (id: string) => void
): React.ReactNode {
  return nodes.map((node) => {
    if (node.children) {
      return (
        <Folder key={node.id} element={node.name} value={node.id}>
          {renderTreeNodes(node.children, files, selectedFileId, onSelect)}
        </Folder>
      );
    }
    return (
      <File
        key={node.id}
        value={node.id}
        isSelect={node.id === selectedFileId}
        onClick={() => onSelect(node.id)}
      >
        <span className="text-xs">{node.name}</span>
      </File>
    );
  });
}
