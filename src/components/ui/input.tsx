import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Label } from "./label";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/10 border-input w-full min-w-0 rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "h-9 px-3 py-1",
        floating: "h-9 px-3 py-1",
        floatingInside: "h-12 px-3 pt-6 pb-1.5",
        outlined: "h-11 px-3 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    label?: string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, label, ...props }, ref) => {
    if (variant === "floating") {
      return (
        <div className="relative">
          <input
            ref={ref}
            type={type}
            placeholder=" "
            data-slot="input"
            className={cn(inputVariants({ variant }), "peer", className)}
            {...props}
          />
          <Label
            className={cn(
              "pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-base transition-all duration-200 ease-out md:text-sm",
              "text-muted-foreground",
              "peer-focus:text-foreground peer-focus:-top-2.5 peer-focus:left-2 peer-focus:px-1 peer-focus:text-xs peer-focus:font-medium",
              "peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium",
              "peer-disabled:opacity-50"
            )}
          >
            {label || props.placeholder}
          </Label>
        </div>
      );
    }

    if (variant === "floatingInside") {
      return (
        <div className="relative">
          <input
            ref={ref}
            type={type}
            placeholder=" "
            data-slot="input"
            className={cn(inputVariants({ variant }), "peer", className)}
            {...props}
          />
          <Label
            className={cn(
              "pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-base transition-all duration-200 ease-out md:text-sm",
              "text-muted-foreground",
              "peer-focus:text-foreground/50 peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-medium",
              "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium",
              "peer-disabled:opacity-50"
            )}
          >
            {label || props.placeholder}
          </Label>
        </div>
      );
    }

    if (variant === "outlined") {
      return (
        <div className="relative">
          <input
            ref={ref}
            type={type}
            placeholder=" "
            data-slot="input"
            className={cn(inputVariants({ variant }), "peer", className)}
            {...props}
          />
          <Label
            className={cn(
              "pointer-events-none absolute left-3 text-base transition-all duration-200 ease-out md:text-sm",
              "text-muted-foreground top-1/2 -translate-y-1/2",
              "peer-focus:bg-background peer-focus:text-foreground peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:px-1 peer-focus:text-xs peer-focus:font-medium",
              "peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium",
              "peer-disabled:opacity-50"
            )}
          >
            {label || props.placeholder}
          </Label>
        </div>
      );
    }

    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(inputVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
