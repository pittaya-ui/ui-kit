"use client";

import { Check, ChevronsUpDown, X } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface MultiSelectOption {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  emptyMessage?: string;
  maxCount?: number;
  disabled?: boolean;
  className?: string;
}

export function MultiSelect({
  options,
  value = [],
  onChange,
  placeholder = "Select items...",
  emptyMessage = "No items found.",
  maxCount,
  disabled = false,
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const selectedValues = new Set(value);

  const handleUnselect = (item: string) => {
    const newValue = value.filter((v) => v !== item);
    onChange?.(newValue);
  };

  const handleSelect = (item: string) => {
    const newValue = selectedValues.has(item)
      ? value.filter((v) => v !== item)
      : [...value, item];
    onChange?.(newValue);
  };

  const selectedOptions = options.filter((option) =>
    selectedValues.has(option.value)
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "h-auto min-h-10 w-full justify-between",
            disabled && "cursor-not-allowed opacity-50",
            className
          )}
          disabled={disabled}
        >
          <div className="flex flex-wrap items-center gap-1">
            {selectedOptions.length > 0 ? (
              <>
                {maxCount && selectedOptions.length > maxCount ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedOptions.length} selected
                  </Badge>
                ) : (
                  selectedOptions.map((option) => (
                    <Badge
                      variant="secondary"
                      key={option.value}
                      className="rounded-sm px-1 font-normal"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnselect(option.value);
                      }}
                    >
                      {option.label}
                      <button
                        className="ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            e.stopPropagation();
                            handleUnselect(option.value);
                          }
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleUnselect(option.value);
                        }}
                      >
                        <X className="text-muted-foreground hover:text-foreground h-3 w-3" />
                      </button>
                    </Badge>
                  ))
                )}
              </>
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <div
                      className={cn(
                        "border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
