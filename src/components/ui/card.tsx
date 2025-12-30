import { cva, type VariantProps } from "class-variance-authority"
import { PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-card text-card-foreground border flex flex-col gap-6 p-6",
  {
    variants: {
      variant: {
        default: "rounded-xl border shadow-sm",
        crosshair:
          "relative border-black/[0.2] dark:border-white/[0.2] border-dashed bg-card shadow-none rounded-none",
        lifted: [
          "border rounded-xl",
          "border-zinc-400 dark:border-zinc-700",
          "relative",
          "shadow-[0px_5px_0px_0px_rgba(0,0,0,0.7)]",
          "dark:shadow-[0px_4px_0px_0px_rgba(255,255,255,0.5)]",
          "bg-zinc-50 dark:bg-zinc-900/50",
        ],
        shadowRight: [
          "border-[0.5px]",
          "border-zinc-400 dark:border-white/70",
          "relative",
        ],
        gradient: ["relative mx-auto w-full"],
        corners: [
          "border-2 rounded-md",
          "border-zinc-100 dark:border-zinc-700",
          "relative",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Card({
  className,
  variant,
  gradientClassName,
  shadowColor,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    gradientClassName?: string;
    shadowColor?: string;
  }) {
  if (variant === "gradient") {
    const { children, ...rest } = props;
    const defaultGradient =
      "bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500";
    return (
      <div
        className={cn(
          "group relative rounded-xl p-[1px] transition-all hover:shadow-lg",
          className
        )}
        {...rest}
      >
        {/* Gradient Border Layer */}
        <div
          className={cn(
            "absolute inset-0 z-0 rounded-xl opacity-40 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md",
            defaultGradient,
            gradientClassName
          )}
        />
        <div
          className={cn(
            "absolute inset-0 z-0 rounded-xl opacity-100",
            defaultGradient,
            gradientClassName
          )}
        />

        {/* Inner Content */}
        <div className="bg-card relative z-10 flex h-full w-full flex-col gap-6 rounded-[11px] p-6">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(cardVariants({ variant }), className)}
      style={
        variant === "shadowRight"
          ? {
              boxShadow: shadowColor
                ? `4px 4px 0px 0px ${shadowColor}`
                : "4px 4px 0px 0px rgba(0, 0, 0, 1)",
            }
          : undefined
      }
      {...props}
    >
      {variant === "crosshair" && (
        <>
          <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white" />
          <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
          <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white" />
          <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white" />
        </>
      )}
      {variant === "corners" && (
        <>
          <div className="absolute -top-0.5 -left-0.5 size-8 rounded-tl-md border-t-2 border-l-2 border-zinc-700 dark:border-zinc-200" />
          <div className="absolute -top-0.5 -right-0.5 size-8 rounded-tr-md border-t-2 border-r-2 border-zinc-700 dark:border-zinc-200" />
          <div className="absolute -bottom-0.5 -left-0.5 size-8 rounded-bl-md border-b-2 border-l-2 border-zinc-700 dark:border-zinc-200" />
          <div className="absolute -right-0.5 -bottom-0.5 size-8 rounded-br-md border-r-2 border-b-2 border-zinc-700 dark:border-zinc-200" />
        </>
      )}
      {props.children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2  [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-tight font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center [.border-t]:pt-2", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cardVariants
}
