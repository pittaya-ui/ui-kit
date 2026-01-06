"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { MultiSelect } from "@/components/ui/multi-select";

export function BasicMultiSelectExample() {
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
}

const formSchema = z.object({
  skills: z
    .array(z.string())
    .min(2, "Select at least 2 skills")
    .max(5, "Select no more than 5 skills"),
  languages: z.array(z.string()).min(1, "Select at least 1 language"),
});

type FormData = z.infer<typeof formSchema>;

export function ReactHookFormExample() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
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
    alert(
      `Selected ${data.skills.length} skills and ${data.languages.length} languages`
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-lg border p-6"
    >
      <div>
        <h3 className="text-lg font-semibold">Developer Profile</h3>
        <p className="text-muted-foreground text-sm">
          Fill out your technical profile
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Technical Skills *</label>
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
          <p className="text-destructive text-xs">{errors.skills.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Languages *</label>
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
          <p className="text-destructive text-xs">{errors.languages.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
      >
        Save Profile
      </button>
    </form>
  );
}

export function MaxCountExample() {
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
      <p className="text-muted-foreground text-xs">
        {selected.length} countr{selected.length === 1 ? "y" : "ies"} selected
      </p>
    </div>
  );
}

export function TeamMembersExample() {
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
        <p className="text-muted-foreground text-xs">
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
      <div className="text-muted-foreground text-xs">
        💡 Tip: Use search to quickly find members
      </div>
    </div>
  );
}

export function ProductFiltersExample() {
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
}

export function SkillsSelectionExample() {
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
        <p className="text-muted-foreground text-xs">Add your main skills</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Technical skills *</label>
        <MultiSelect
          options={skillOptions}
          value={skills}
          onChange={setSkills}
          placeholder="Select at least 3 skills..."
          emptyMessage="No skills found."
          maxCount={4}
        />
        {!isValid && skills.length > 0 && (
          <p className="text-destructive text-xs">Select at least 3 skills</p>
        )}
        {isValid && (
          <p className="text-xs text-green-600">✓ Profile complete</p>
        )}
      </div>
    </div>
  );
}

export function DisabledExample() {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-muted-foreground text-sm font-medium">
          Advanced settings (unavailable)
        </label>
        <MultiSelect
          options={options}
          value={["1", "2"]}
          placeholder="Select options..."
          disabled
        />
        <p className="text-muted-foreground text-xs">
          Upgrade your plan to access this feature
        </p>
      </div>
    </div>
  );
}
