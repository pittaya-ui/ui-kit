import { cva, VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const announcementContainerVariants = cva(
  "flex items-center justify-between gap-2 w-fit bg-background rounded-full px-1 py-0.5 border border-border shadow-sm hover:shadow-md transition-shadow ",
  {
    variants: {
      variant: {
        glassEffect: "bg-background/50 backdrop-blur-sm hover:bg-background/70",
        default: "bg-background hover:bg-background/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);



export function AnnouncementContainer({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof announcementContainerVariants>) {
  return (
    <div
    className={announcementContainerVariants({ variant, className })}
    {...props}
    />
  );
}

export function AnnouncementSeparator({ className }: { className?: string }) {
  return <div className={cn("h-5 w-px bg-accent", className)} />;
}

export function AnnouncementText({ className, text}: React.ComponentProps<"div"> & {text: string}) {
  return <div className={cn("text-sm font-medium px-2 py-1 rounded-full bg-accent border border-border", className)}>
    <p>{text}</p>
    </div>
}

export function AnnouncementIcon({ className, icon: Icon }: { className?: string, icon: LucideIcon | string }) {

  return (
    <div className="px-2">
      {typeof Icon === "string" ? <p className={cn("text-sm font-medium", className)}>{Icon}</p> : <Icon className={cn("size-4 ", className)} />}
    </div>
  );
}

export function AnnouncementTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-sm font-medium px-2 py-1 flex items-center gap-2", className)} {...props} />;
}

