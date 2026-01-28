"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

// Context to manage image loading state
type AvatarContextValue = {
  imageStatus: "idle" | "loading" | "loaded" | "error";
  setImageStatus: (status: "idle" | "loading" | "loaded" | "error") => void;
};

const AvatarContext = React.createContext<AvatarContextValue | null>(null);

const useAvatarContext = () => {
  const context = React.useContext(AvatarContext);
  if (!context) {
    throw new Error("Avatar components must be used within Avatar");
  }
  return context;
};

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof avatarVariants> {
  children?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, children, ...props }, ref) => {
    const [imageStatus, setImageStatus] = React.useState<
      "idle" | "loading" | "loaded" | "error"
    >("idle");

    return (
      <AvatarContext.Provider value={{ imageStatus, setImageStatus }}>
        <span
          ref={ref}
          className={cn(avatarVariants({ size, className }))}
          {...props}
        >
          {children}
        </span>
      </AvatarContext.Provider>
    );
  }
);
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
  const { imageStatus, setImageStatus } = useAvatarContext();

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageStatus("loaded");
    props.onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageStatus("error");
    props.onError?.(e);
  };

  React.useEffect(() => {
    setImageStatus("loading");
  }, [setImageStatus]);

  if (imageStatus === "error") return null;

  return (
    <img
      ref={ref}
      className={cn("aspect-square h-full w-full object-cover", className)}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const { imageStatus } = useAvatarContext();

  // Only show fallback if there's no image or if the image failed to load
  if (imageStatus === "loading" || imageStatus === "loaded") return null;

  return (
    <span
      ref={ref}
      className={cn(
        "bg-muted flex h-full w-full items-center justify-center rounded-full text-sm font-medium",
        className
      )}
      {...props}
    />
  );
});
AvatarFallback.displayName = "AvatarFallback";

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max = 3, size = "md", ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const visibleChildren = max ? childrenArray.slice(0, max) : childrenArray;
    const remainingCount = childrenArray.length - visibleChildren.length;

    const spacingMap = {
      sm: "-space-x-2",
      md: "-space-x-3",
      lg: "-space-x-4",
      xl: "-space-x-5",
    };

    return (
      <div
        ref={ref}
        className={cn("flex items-center", spacingMap[size], className)}
        {...props}
      >
        {visibleChildren.map((child, index) => (
          <div
            key={index}
            className="ring-background rounded-full ring-2"
            style={{ zIndex: visibleChildren.length - index }}
          >
            {React.isValidElement(child) &&
              React.cloneElement(child as React.ReactElement<AvatarProps>, {
                size,
              })}
          </div>
        ))}
        {remainingCount > 0 && (
          <AvatarCount size={size} count={remainingCount} />
        )}
      </div>
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

export interface AvatarCountProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  size?: "sm" | "md" | "lg" | "xl";
}

const AvatarCount = React.forwardRef<HTMLDivElement, AvatarCountProps>(
  ({ className, count, size = "md", ...props }, ref) => {
    const sizeMap = {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
      xl: "h-16 w-16 text-lg",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "bg-muted ring-background flex items-center justify-center rounded-full font-medium ring-2",
          sizeMap[size],
          className
        )}
        style={{ zIndex: 0 }}
        {...props}
      >
        +{count}
      </div>
    );
  }
);
AvatarCount.displayName = "AvatarCount";

export { Avatar, AvatarCount, AvatarFallback, AvatarGroup, AvatarImage };
