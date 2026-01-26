import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import {
  BasicMultiSelectExample,
  DisabledExample,
  MaxCountExample,
  ProductFiltersExample,
  ReactHookFormExample,
  SkillsSelectionExample,
  TeamMembersExample,
} from "./multi-select-examples";

export const multiSelectDoc: ComponentDoc = createComponentDoc({
  slug: "multi-select",
  metadata: {
    name: "Multi-Select",
    description:
      "A searchable multi-select component with badges for displaying selected items, perfect for forms and complex filters.",
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
            Use Multi-Select when users need to choose multiple values from a
            large list of options. It&apos;s especially useful when:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              The list has more than 5 options and needs search functionality
              for easier navigation
            </li>
            <li>You need to visually display selected items as badges</li>
            <li>
              Users can quickly add or remove items without reopening the menu
            </li>
            <li>
              You&apos;re building advanced filters, tags, categories, or
              user/group selection
            </li>
          </ul>
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
              Use descriptive <code>placeholder</code> text like &quot;Select
              categories...&quot; or &quot;Choose members...&quot;
            </li>
            <li>
              Configure <code>maxCount</code> when many items are selected to
              avoid visual clutter
            </li>
            <li>
              Provide a helpful <code>emptyMessage</code> when search returns no
              results
            </li>
            <li>Keep option labels concise and easy to scan</li>
            <li>
              Combine with form validation to ensure users select enough items
            </li>
            <li>
              For very long lists (100+ items), consider implementing pagination
              or lazy loading
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "integration",
      title: "Form Integration",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            Multi-Select integrates seamlessly with popular form libraries like{" "}
            <strong>React Hook Form</strong>. The component accepts{" "}
            <code>value</code> and <code>onChange</code> props, making it
            compatible with any form state management solution.
          </p>
          <p>
            With React Hook Form, you can use the <code>Controller</code>{" "}
            component to wrap Multi-Select and get full validation support,
            error handling, and form state management out of the box.
          </p>
          <div className="bg-muted/50 rounded-lg border p-4">
            <p className="text-sm font-medium">
              ✨ Easy React Hook Form Integration
            </p>
            <p className="mt-2 text-sm">
              See the &quot;React Hook Form&quot; example below for a complete
              implementation with validation and error messages.
            </p>
          </div>
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
            Multi-Select is built on top of accessible Radix UI components and
            includes:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Full keyboard navigation support (Tab, Enter, Escape, Arrow keys)
            </li>
            <li>
              Appropriate ARIA attributes (
              <code>role=&quot;combobox&quot;</code>, <code>aria-expanded</code>
              )
            </li>
            <li>Visible focus states on all interactive elements</li>
            <li>Badge removal buttons are focusable and keyboard-operable</li>
            <li>Integrated search field for easier item location</li>
          </ul>
          <p>
            Always provide descriptive labels using <code>&lt;label&gt;</code>{" "}
            associated with the component to enhance screen reader experience.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "options",
      type: "MultiSelectOption[]",
      description:
        "Array of objects with {label: string, value: string} representing the available options for selection.",
    },
    {
      name: "value",
      type: "string[]",
      defaultValue: "[]",
      description:
        "Array of currently selected values. Use with onChange to control state.",
    },
    {
      name: "onChange",
      type: "(value: string[]) => void",
      description:
        "Callback executed when selected values change. Receives the new array of values.",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: '"Select items..."',
      description: "Text displayed when no items are selected.",
    },
    {
      name: "emptyMessage",
      type: "string",
      defaultValue: '"No items found."',
      description: "Message displayed when search returns no results.",
    },
    {
      name: "maxCount",
      type: "number",
      description:
        "Maximum number of badges to display before showing a counter (e.g., '5 selected'). Useful for many selected items.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables interaction with the component, applying appropriate visual styles.",
    },
    {
      name: "className",
      type: "string",
      description:
        "Additional CSS classes to customize the trigger button style.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic usage",
      description: "A simple Multi-Select example with state control.",
      code: `"use client";

import { MultiSelect } from "@/components/pittaya/ui/multi-select";
import { useState } from "react";

export function BasicMultiSelect() {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Next.js", value: "nextjs" },
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Select your favorite frameworks
      </label>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        placeholder="Choose frameworks..."
      />
    </div>
  );
}`,
      preview: <BasicMultiSelectExample />,
    },
    {
      id: "react-hook-form",
      title: "React Hook Form",
      description:
        "Complete integration with React Hook Form including validation and error handling.",
      code: `"use client";

import { MultiSelect } from "@/components/pittaya/ui/multi-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  skills: z
    .array(z.string())
    .min(2, "Select at least 2 skills")
    .max(5, "Select no more than 5 skills"),
  languages: z.array(z.string()).min(1, "Select at least 1 language"),
});

type FormData = z.infer<typeof formSchema>;

export function ReactHookFormExample() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: [],
      languages: [],
    },
  });

  const skillOptions = [
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "React", value: "react" },
    { label: "Node.js", value: "nodejs" },
    { label: "Python", value: "python" },
    { label: "Docker", value: "docker" },
  ];

  const languageOptions = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "French", value: "fr" },
  ];

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    alert(\`Selected \${data.skills.length} skills and \${data.languages.length} languages\`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg border p-6">
      <div>
        <h3 className="text-lg font-semibold">Developer Profile</h3>
        <p className="text-sm text-muted-foreground">
          Fill out your technical profile
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Technical Skills *
        </label>
        <Controller
          name="skills"
          control={control}
          render={({ field }) => (
            <MultiSelect
              options={skillOptions}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select your skills..."
              maxCount={3}
            />
          )}
        />
        {errors.skills && (
          <p className="text-xs text-destructive">{errors.skills.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Languages *
        </label>
        <Controller
          name="languages"
          control={control}
          render={({ field }) => (
            <MultiSelect
              options={languageOptions}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select languages you speak..."
            />
          )}
        />
        {errors.languages && (
          <p className="text-xs text-destructive">{errors.languages.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Save Profile
      </button>
    </form>
  );
}`,
      preview: <ReactHookFormExample />,
    },
    {
      id: "with-max-count",
      title: "With display limit",
      description:
        "Use maxCount to show a counter when many items are selected.",
      code: `"use client";

import { MultiSelect } from "@/components/pittaya/ui/multi-select";
import { useState } from "react";

export function MultiSelectWithMaxCount() {
  const [selected, setSelected] = useState<string[]>([]);

  const countries = [
    { label: "Brazil", value: "br" },
    { label: "Argentina", value: "ar" },
    { label: "Chile", value: "cl" },
    { label: "Colombia", value: "co" },
    { label: "Peru", value: "pe" },
    { label: "Uruguay", value: "uy" },
    { label: "Paraguay", value: "py" },
    { label: "Ecuador", value: "ec" },
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Operating countries</label>
      <MultiSelect
        options={countries}
        value={selected}
        onChange={setSelected}
        placeholder="Select countries..."
        maxCount={3}
      />
      <p className="text-xs text-muted-foreground">
        {selected.length} countr{selected.length === 1 ? 'y' : 'ies'} selected
      </p>
    </div>
  );
}`,
      preview: <MaxCountExample />,
    },
    {
      id: "team-members",
      title: "Team member selection",
      description:
        "Practical example of selecting users to add to a project or group.",
      code: `"use client";

import { MultiSelect } from "@/components/pittaya/ui/multi-select";
import { useState } from "react";

export function TeamMemberSelection() {
  const [members, setMembers] = useState<string[]>([]);

  const teamMembers = [
    { label: "Ana Silva (Designer)", value: "ana" },
    { label: "Bruno Costa (Dev)", value: "bruno" },
    { label: "Carla Santos (PM)", value: "carla" },
    { label: "Diego Oliveira (Dev)", value: "diego" },
    { label: "Elena Ferreira (QA)", value: "elena" },
    { label: "Felipe Lima (Dev)", value: "felipe" },
    { label: "Gabriela Rocha (Designer)", value: "gabriela" },
  ];

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <div>
        <h3 className="text-sm font-semibold">New Project</h3>
        <p className="text-xs text-muted-foreground">
          Add team members to the project
        </p>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Team members</label>
        <MultiSelect
          options={teamMembers}
          value={members}
          onChange={setMembers}
          placeholder="Search and add members..."
          emptyMessage="No members found."
          maxCount={2}
        />
      </div>
      <div className="text-xs text-muted-foreground">
        💡 Tip: Use search to quickly find members
      </div>
    </div>
  );
}`,
      preview: <TeamMembersExample />,
    },
    {
      id: "product-filters",
      title: "Product filters",
      description:
        "Example of usage in e-commerce filters for categories, brands, and tags.",
      code: `"use client";

import { MultiSelect } from "@/components/pittaya/ui/multi-select";
import { useState } from "react";

export function ProductFilters() {
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const categoryOptions = [
    { label: "Electronics", value: "electronics" },
    { label: "Clothing", value: "clothing" },
    { label: "Books", value: "books" },
    { label: "Home & Garden", value: "home" },
    { label: "Sports", value: "sports" },
  ];

  const brandOptions = [
    { label: "Pittaya", value: "pittaya" },
    { label: "Galactic Tech", value: "galactic" },
    { label: "Fruit Electronics", value: "fruit" },
    { label: "Swift Sport", value: "swift" },
    { label: "Three Stripes", value: "stripes" },
    { label: "Sonic Vision", value: "sonic" },
  ];

  return (
    <div className="space-y-6 rounded-lg border p-6">
      <h3 className="text-lg font-semibold">Filter Products</h3>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Categories</label>
        <MultiSelect
          options={categoryOptions}
          value={categories}
          onChange={setCategories}
          placeholder="All categories"
          maxCount={2}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Brands</label>
        <MultiSelect
          options={brandOptions}
          value={brands}
          onChange={setBrands}
          placeholder="All brands"
          maxCount={2}
        />
      </div>

      <div className="flex gap-2 text-sm">
        <button 
          className="text-primary hover:underline"
          onClick={() => {
            setCategories([]);
            setBrands([]);
          }}
        >
          Clear filters
        </button>
        <span className="text-muted-foreground">
          • {categories.length + brands.length} active filter(s)
        </span>
      </div>
    </div>
  );
}`,
      preview: <ProductFiltersExample />,
    },
    {
      id: "skills-selection",
      title: "Skills selection",
      description:
        "Example of a professional profile form with skills selection.",
      code: `"use client";

import { MultiSelect } from "@/components/pittaya/ui/multi-select";
import { useState } from "react";

export function SkillsSelection() {
  const [skills, setSkills] = useState<string[]>([]);

  const skillOptions = [
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "React", value: "react" },
    { label: "Node.js", value: "nodejs" },
    { label: "Python", value: "python" },
    { label: "SQL", value: "sql" },
    { label: "Docker", value: "docker" },
    { label: "AWS", value: "aws" },
    { label: "Git", value: "git" },
    { label: "GraphQL", value: "graphql" },
  ];

  const isValid = skills.length >= 3;

  return (
    <div className="space-y-4 rounded-lg border p-6">
      <div>
        <h3 className="text-sm font-semibold">Complete your profile</h3>
        <p className="text-xs text-muted-foreground">
          Add your main skills
        </p>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Technical skills *
        </label>
        <MultiSelect
          options={skillOptions}
          value={skills}
          onChange={setSkills}
          placeholder="Select at least 3 skills..."
          emptyMessage="No skills found."
          maxCount={4}
        />
        {!isValid && skills.length > 0 && (
          <p className="text-xs text-destructive">
            Select at least 3 skills
          </p>
        )}
        {isValid && (
          <p className="text-xs text-green-600">
            ✓ Profile complete
          </p>
        )}
      </div>
    </div>
  );
}`,
      preview: <SkillsSelectionExample />,
    },
    {
      id: "disabled",
      title: "Disabled state",
      description: "Multi-Select can be disabled to prevent interaction.",
      code: `"use client";

import { MultiSelect } from "@/components/pittaya/ui/multi-select";

export function DisabledMultiSelect() {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">
          Advanced settings (unavailable)
        </label>
        <MultiSelect
          options={options}
          value={["1", "2"]}
          placeholder="Select options..."
          disabled
        />
        <p className="text-xs text-muted-foreground">
          Upgrade your plan to access this feature
        </p>
      </div>
    </div>
  );
}`,
      preview: <DisabledExample />,
    },
  ],
  toc: [
    { id: "installation", title: "Installation", level: 2 },
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "integration", title: "Form Integration", level: 2 },
    { id: "accessibility", title: "Accessibility", level: 2 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
  showcase: {
    code: `"use client";

import { MultiSelect } from "@/components/pittaya/ui/multi-select";
import { useState } from "react";

export function BasicMultiSelect() {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Next.js", value: "nextjs" },
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Select your favorite frameworks
      </label>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        placeholder="Choose frameworks..."
      />
    </div>
  );
}`,
    preview: <BasicMultiSelectExample />,
  },
});
