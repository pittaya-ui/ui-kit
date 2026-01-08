import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import {
  BasicTextareaPreview,
  ExpandingTextareaPreview,
  MinimalTextareaPreview,
  ScrollableTextareaPreview,
} from "./textarea-examples";

export const textareaDoc: ComponentDoc = createComponentDoc({
  slug: "textarea",
  metadata: {
    name: "Textarea",
    description:
      "A flexible textarea field with sensible defaults. Use for multi-line text entry. Includes examples showing minimal and expanding behaviors.",
    category: "Forms",
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
            Use Textarea when you need a multi-line text field such as comments,
            descriptions, messages or any long-form text input.
          </p>
          <p>
            For compact forms, consider the minimal variant. For a smoother UX
            on small screens, use an expanding textarea that reveals more space
            on focus.
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
            <li>Provide helpful placeholder text to guide input.</li>
            <li>Use a visible label to improve accessibility and clarity.</li>
            <li>For very long content, allow scrolling inside the textarea.</li>
            <li>
              Consider an expanding interaction for mobile to conserve space.
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
            Ensure textareas are associated with labels via <code>label</code>{" "}
            elements and provide clear focus styles for keyboard users.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "placeholder",
      type: "string",
      description: "Helper text displayed when the field is empty.",
    },
    {
      name: "rows",
      type: "number",
      description: "Sets the visible number of text lines (browser native).",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables interaction with the textarea.",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to customize the textarea.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic",
      description: "Standard textarea for multi-line text input.",
      code: `import { Textarea } from "@/components/ui/textarea";

export function BasicTextarea() {
  return <Textarea placeholder="Write a message..." />;
}`,
      preview: <BasicTextareaPreview />,
    },
    {
      id: "minimal",
      title: "Minimal",
      description:
        "A minimal, modern look that blends with subtle backgrounds.",
      code: `import { Textarea } from "@/components/ui/textarea";

export function MinimalTextarea() {
  return <Textarea className="rounded-lg border-0 bg-muted/10 px-4 py-3" placeholder="Say something..." />;
}`,
      preview: <MinimalTextareaPreview />,
    },
    {
      id: "expanding",
      title: "Expanding (smooth)",
      description:
        "Demonstrates a smooth expanding interaction on focus — minimal JS kept inside the preview for portability.",
      code: `// Uses a small wrapper: toggles max-height on focus and uses transition
export function ExpandingTextarea() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Textarea
      placeholder="Click to expand..."
      onFocus={() => setExpanded(true)}
      onBlur={(e) => !e.currentTarget.value && setExpanded(false)}
      className={expanded ? "min-h-[8rem]" : "h-10"}
      style={{ transition: "max-height 1600ms cubic-bezier(0.22,1,0.36,1)", maxHeight: expanded ? "8rem" : "2.5rem" }}
    />
  );
}`,
      preview: <ExpandingTextareaPreview />,
    },
    {
      id: "scrollable",
      title: "Scrollable",
      description: "Use a taller textarea with scroll when content is long.",
      code: `import { Textarea } from "@/components/ui/textarea";

export function ScrollableTextarea() {
  return <Textarea className="min-h-[8rem] overflow-y-auto" />;
}`,
      preview: <ScrollableTextareaPreview />,
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
