# 📚 Component Documentation Pages Creation Guide

This guide provides a step-by-step process for adding new documentation pages for UI components in the project.

## 🏗️ Documentation Architecture

The documentation system is built with:

- **Next.js App Router** with dynamic routes
- **TypeScript** for type safety
- **Shadcn UI** for base components
- **React Server Components** for optimization

### 📂 File Structure

```
src/
├── app/docs/components/[slug]/page.tsx     # Dynamic component pages
├── lib/docs/
│   ├── types.ts                            # Type definitions
│   ├── components-index.ts                 # Component index
│   └── component-details.tsx               # Documentation registry (imports from contents/)
└── components/
    ├── ui/                                  # UI components
    │   ├── button.tsx
    │   ├── installation-section.tsx
    │   └── ...
    └── docs/                                # Documentation components
        ├── contents/                        # 📝 Individual component docs
        │   ├── button.tsx
        │   ├── installation-section.tsx
        │   └── ...
        ├── component-content.tsx
        ├── docs-shell.tsx
        ├── sidebar-general.tsx
        └── sidebar-local.tsx
```

> **💡 New Structure:** Each component now has its own documentation file in `src/components/docs/contents/`. This keeps the codebase modular and maintainable.

---

## 🚀 Step-by-Step Process

### Step 1: Add Component to Index

**File:** `src/lib/docs/components-index.ts`

Add a new entry to the `componentsIndex` array:

```typescript
export const componentsIndex: ComponentIndexItem[] = [
  {
    slug: "button",
    name: "Button",
    category: "Actions",
    status: "stable",
    tags: ["primary", "form", "cta"],
  },
  // ✨ Add your new component here
  {
    slug: "input", // URL slug (must be unique)
    name: "Input", // Display name
    category: "Forms", // Component category
    status: "stable", // "beta" | "stable" | "deprecated"
    tags: ["form", "input", "text"], // Tags for search/filtering
  },
];
```

> **💡 Tip:** The `slug` will be used in the URL: `/docs/components/{slug}`

### Step 2: Create Component Documentation File

**File:** `src/components/docs/contents/input.tsx` (create new file)

#### 2.1 Import the Component, Helper and Types

```typescript
import { Input } from "@/components/ui/input";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";
```

> **💡 Important:** Always import `createComponentDoc` - this helper automatically adds examples to the TOC!

#### 2.2 Export the Documentation Object

```typescript
export const inputDoc: ComponentDoc = createComponentDoc({
  slug: "input",
  metadata: {
    name: "Input",
    description: "An accessible and customizable input field for forms.",
    category: "Forms",
    status: "stable",
  },
  sections: [
    {
      id: "when-to-use",
      title: "When to use",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Use Input when you need to collect textual data from users,
            such as names, emails, passwords, or any text-format information.
          </p>
        </div>
      ),
    },
    {
      id: "best-practices",
      title: "Best practices",
      level: 2,
      content: (
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <ul className="list-disc space-y-2 pl-5">
            <li>Always provide descriptive labels for accessibility.</li>
            <li>Use placeholders to exemplify the expected format.</li>
            <li>Validate data on both client and server for better UX.</li>
          </ul>
        </div>
      ),
    },
    // Add more sections as needed
  ],
  props: [
    {
      name: "type",
      type: '"text" | "email" | "password" | "number"',
      defaultValue: '"text"',
      description: "Defines the input type and field behavior.",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Example text displayed when the field is empty.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables interaction with the field.",
    },
    // Add all component props
  ],
  examples: [
    {
      id: "basic",
      title: "Basic usage",
      description: "A simple input for text entry.",
      code: `import { Input } from "@/components/ui/input";

export function BasicInput() {
  return (
    <div className="space-y-2">
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
      />
    </div>
  );
}`,
      preview: (
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
      ),
    },
    // Add more examples
  ],
  toc: [
    { id: "installation", title: "Installation", level: 2 }, // ✨ Always include this first
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "examples", title: "Examples", level: 2 }, // 🎯 Examples are auto-expanded in TOC
    { id: "properties", title: "Properties", level: 2 },
  ],
});
```

> **🎯 Magic Happens Here:** The `createComponentDoc` function automatically finds the "examples" item in your TOC and inserts each individual example as a level 3 entry right after it. You don't need to manually map them anymore!

### Step 3: Register Documentation in Registry

**File:** `src/lib/docs/component-details.tsx`

Import your new documentation and add it to the registry:

```typescript
import { buttonDoc } from "@/components/docs/contents/button";
import { inputDoc } from "@/components/docs/contents/input"; // ✨ Add the import

import type { ComponentDoc } from "./types";

const docs: Record<string, ComponentDoc> = {
  [buttonDoc.slug]: buttonDoc,
  [inputDoc.slug]: inputDoc, // ✨ Add to registry
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return docs[slug];
}

export function getAllComponentDocs(): ComponentDoc[] {
  return Object.values(docs);
}
```

> **💡 Tip:** The registry file (`component-details.tsx`) is now just an aggregator. All documentation content lives in individual files under `src/components/docs/contents/`.

---

### Step 4: Verify Types

**File:** `src/lib/docs/types.ts`

Make sure all types are correct. The main types are:

```typescript
export type ComponentDoc = {
  slug: string; // Unique identifier
  metadata: {
    name: string; // Component name
    description: string; // Brief description
    category: string; // Category
    status?: "beta" | "stable" | "deprecated";
  };
  sections: DocSection[]; // Content sections
  props: DocProp[]; // Component properties
  examples: DocExample[]; // Usage examples
  toc: TocItem[]; // Page table of contents
};
```

---

## 📋 Verification Checklist

Before finishing, check that you have:

- [ ] ✅ Added entry to `src/lib/docs/components-index.ts`
- [ ] ✅ Created documentation file in `src/components/docs/contents/{component}.tsx`
- [ ] ✅ Imported the UI component correctly
- [ ] ✅ Exported the documentation object with `export const`
- [ ] ✅ **Imported `createComponentDoc` from `@/helpers/component-doc`**
- [ ] ✅ Wrapped the documentation object with `createComponentDoc({ ... })`
- [ ] ✅ Imported and registered the doc in `src/lib/docs/component-details.tsx`
- [ ] ✅ Defined all component props with clear descriptions
- [ ] ✅ Exported the documentation object with `export const`
- [ ] ✅ Created at least 2-3 useful examples with unique IDs
- [ ] ✅ Included sections about when to use and best practices
- [ ] ✅ Configured the TOC correctly (let `createComponentDoc` handle example items)
- [ ] ✅ Tested the page locally
- [ ] ✅ **Added "Installation" as the first item in the TOC**
- [ ] ✅ Added "examples" to TOC (individual examples are auto-generated)
- [ ] ✅ Tested the page locally and verified the sidebar navigation

---

## 🎨 Recommended Section Structure

To maintain consistency, use these standard sections:

### 0. **Installation** (`installation`) - _Automatic_

This section is **automatically generated** by the `InstallationSection` component. It displays the CLI command to install the component using the Pittaya CLI:

```bash
npx pittaya@latest add {component-slug}
```

> **💡 Important:** You only need to include `{ id: "installation", title: "Installation", level: 2 }` in the TOC array. The section content is rendered automatically based on the component slug.

**Features:**

- ✅ Dynamically displays the correct component slug
- ✅ Includes a copy-to-clipboard button
- ✅ Syntax highlighting for bash commands
- ✅ Consistent styling with the rest of the documentation

### 1. **When to use** (`when-to-use`)

Explain appropriate scenarios for the component.

### 2. **Best practices** (`best-practices`)

List usage guidelines and recommended patterns.

### 3. **Accessibility** (`accessibility`)

Document accessibility features and special considerations.

### 4. **Variations** (`variations`) - _Optional_

If the component has multiple variants, explain each one.

### 5. **Integration** (`integration`) - _Optional_

How to integrate with forms, APIs, or other components.

---

## 💡 Advanced Tips

### Example IDs and TOC Generation

Each example needs a unique `id` and `title` - these are automatically used to generate TOC entries:

```typescript
examples: [
  {
    id: "basic", // 🎯 Used in URL anchors and TOC
    title: "Basic usage", // 🎯 Displayed in sidebar TOC
    description: "A simple input example.",
    code: `...`,
    preview: <Input />,
  },
  {
    id: "with-validation", // Must be unique!
    title: "With validation", // Shows in sidebar!
    description: "Input with form validation.",
    code: `...`,
    preview: <Input />,
  },
]
```

The sidebar will automatically show:
- Examples (level 2)
  - Basic usage (level 3) ← Auto-generated
  - With validation (level 3) ← Auto-generated

### Interactive Examples

Use real components in example previews:

```typescript
preview: (
  <div className="flex gap-2">
    <Button variant="default">Save</Button>
    <Button variant="outline">Cancel</Button>
  </div>
),
```

### Clean Code

Keep code examples concise and focused:

```typescript
code: `import { Button } from "@/components/ui/button";

export function Example() {
  return <Button>Click me</Button>;
}`,
```

### Complete Properties

Document all props, including inherited ones:

```typescript
{
  name: "onClick",
  type: "(event: MouseEvent) => void",
  description: "Function executed when clicking the button.",
},
```

---

## 🔧 Troubleshooting

### Error: Page not found

- Check if the `slug` is correct in both files
- Confirm that the component was added to the `docs` registry in `component-details.tsx`

### Error: Component doesn't render

- Check component imports
- Make sure the component is exported correctly
- Verify that `createComponentDoc` is being called correctly

### TOC doesn't appear

- Confirm that section IDs match the TOC entries
- Check if levels (2 or 3) are correct

### Examples not showing in sidebar

- Check that you wrapped your doc with `createComponentDoc({ ... })`
- Verify that each example has a unique `id`
- Make sure `{ id: "examples", title: "Examples", level: 2 }` is in your TOC
- The examples should be placed AFTER the "examples" entry automatically

---

## 🎯 Complete Example

See the following files for complete examples:

**Real-world references:**
- **Button Documentation:** `src/components/docs/contents/button.tsx`
- **Card Documentation:** `src/components/docs/contents/card.tsx`
- **Carousel Documentation:** `src/components/docs/contents/carousel.tsx`
- **Registry:** `src/lib/docs/component-details.tsx`

---

## 🗂️ Modular Structure Benefits

The new modular structure provides several advantages:

✅ **Separation of Concerns** - Each component's documentation lives in its own file
✅ **Easier Maintenance** - No need to navigate a large centralized file
✅ **Better Collaboration** - Multiple developers can work on different docs simultaneously
✅ **Cleaner Imports** - The registry file is simple and acts as a single source of truth
✅ **Scalability** - Easy to add new components without bloating a single file

### Example Structure:

```
src/components/docs/contents/
├── button.tsx                    # Button component documentation
├── installation-section.tsx      # Installation Section documentation
├── input.tsx                     # Input component documentation (future)
└── dialog.tsx                    # Dialog component documentation (future)
```

Each file exports its own `ComponentDoc` object, which is then imported and registered in `component-details.tsx`.

---

**🎉 Done!** Your new documentation page will be available at `/docs/components/{your-slug}`

For more questions, consult existing files as reference or contact the development team.
