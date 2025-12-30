"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getComponentsIndex } from "@/lib/docs/components-index";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

interface GlobalSearchProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function GlobalSearch({ open, setOpen }: GlobalSearchProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const components = getComponentsIndex();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const handleSelect = (slug: string) => {
    setOpen(false);
    setSearch("");
    router.push(`/docs/components/${slug}`);
  };

  const filteredComponents = components.filter((component) => {
    const searchLower = search.toLowerCase();
    const nameMatch = component.name.toLowerCase().includes(searchLower);
    const descriptionMatch = component.description
      ?.toLowerCase()
      .includes(searchLower);
    const categoryMatch = component.category
      .toLowerCase()
      .includes(searchLower);
    const tagsMatch = component.tags?.some((tag) =>
      tag.toLowerCase().includes(searchLower)
    );

    return nameMatch || descriptionMatch || categoryMatch || tagsMatch;
  });

  const groupedComponents = filteredComponents.reduce(
    (acc, component) => {
      const category = component.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(component);
      return acc;
    },
    {} as Record<string, typeof components>
  );

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Search Components"
      description="Search for components by name, description, category or tags"
    >
      <CommandInput
        placeholder="Search components..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No components found.</CommandEmpty>
        {Object.entries(groupedComponents).map(([category, items]) => (
          <CommandGroup key={category} heading={category}>
            {items.map((component) => (
              <CommandItem
                key={component.slug}
                value={`${component.name} ${component.description} ${component.category} ${component.tags?.join(" ")}`}
                onSelect={() => handleSelect(component.slug)}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{component.name}</span>
                    {component.status && (
                      <span className="text-muted-foreground rounded-md bg-white/5 px-1.5 py-0.5 text-xs">
                        {component.status}
                      </span>
                    )}
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {component.description}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
