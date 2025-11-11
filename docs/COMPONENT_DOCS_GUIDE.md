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
│   └── component-details.tsx               # Documentation details and content
└── components/docs/                        # Documentation components
    ├── component-content.tsx
    ├── docs-shell.tsx
    ├── sidebar-general.tsx
    └── sidebar-local.tsx
```

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

### Step 2: Create Component Documentation

**File:** `src/lib/docs/component-details.tsx`

#### 2.1 Import the Component

```typescript
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // ✨ Add the import
```

#### 2.2 Create the Documentation Object

```typescript
const inputDoc: ComponentDoc = {
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
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
};
```

#### 2.3 Add to Document Registry

```typescript
const docs: Record<string, ComponentDoc> = {
  [buttonDoc.slug]: buttonDoc,
  [inputDoc.slug]: inputDoc, // ✨ Add here
};
```

### Step 3: Verify Types

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

- [ ] ✅ Added entry to `components-index.ts`
- [ ] ✅ Created complete documentation in `component-details.tsx`
- [ ] ✅ Imported the component correctly
- [ ] ✅ Added the doc to the `docs` registry
- [ ] ✅ Defined all component props
- [ ] ✅ Created at least 2-3 useful examples
- [ ] ✅ Included sections about when to use and best practices
- [ ] ✅ Configured the TOC (table of contents) correctly
- [ ] ✅ **Added "Installation" as the first item in the TOC**
- [ ] ✅ Tested the page locally

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
- Confirm that the component was added to the `docs` registry

### Error: Component doesn't render

- Check component imports
- Make sure the component is exported correctly

### TOC doesn't appear

- Confirm that section IDs match the TOC
- Check if levels (2 or 3) are correct

---

## 🎯 Complete Example

See the `component-details.tsx` file for a complete example with the Button component already implemented.

---

**🎉 Done!** Your new documentation page will be available at `/docs/components/{your-slug}`

For more questions, consult existing files as reference or contact the development team.
