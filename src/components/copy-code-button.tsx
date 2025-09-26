import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export function CopyCodeButton({ code }: { code: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    toast.success("Código copiado para a área de transferência");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <Button
      variant="outline"
      size="icon"
      className="absolute top-2 right-2"
      onClick={() => {
        handleCopyCode(code);
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
