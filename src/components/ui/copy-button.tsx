"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  onCopy?: () => void;
  className?: string;
}

export function CopyButton({ text, onCopy, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    onCopy?.();

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("absolute top-2 right-2", className)}
      onClick={() => {
        handleCopy(text);
      }}
    >
      <span
        aria-hidden
        className="relative flex size-4 items-center justify-center"
      >
        <CopyIcon
          className={cn(
            "absolute transition-all duration-200 ease-out",
            isCopied ? "scale-0 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <CheckIcon
          className={cn(
            "absolute transition-all duration-200 ease-out",
            isCopied ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
        />
      </span>
    </Button>
  );
}
