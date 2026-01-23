import { Skeleton } from "@/components/ui/skeleton";

/**
 * Basic skeleton examples demonstrating different sizes and shapes
 */
export function SkeletonExampleBasic() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

/**
 * Comparison of pulse and shimmer animation variants
 */
export function SkeletonExampleVariants() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Pulse (default)</h3>
        <Skeleton variant="pulse" className="h-32 w-full" />
        <Skeleton variant="pulse" className="h-4 w-full" />
        <Skeleton variant="pulse" className="h-4 w-4/5" />
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium">Shimmer</h3>
        <Skeleton variant="shimmer" className="h-32 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-4/5" />
      </div>
    </div>
  );
}

/**
 * User profile card skeleton with circular avatar
 */
export function SkeletonExampleProfile() {
  return (
    <div className="max-w-sm space-y-4 rounded-lg border p-6">
      <div className="flex items-center space-x-4">
        <Skeleton variant="shimmer" className="size-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton variant="shimmer" className="h-4 w-[200px]" />
          <Skeleton variant="shimmer" className="h-4 w-[150px]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton variant="shimmer" className="h-4 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-3/4" />
      </div>
    </div>
  );
}

/**
 * Product card skeleton for e-commerce
 */
export function SkeletonExampleProduct() {
  return (
    <div className="max-w-sm space-y-4 rounded-lg border p-4">
      <Skeleton variant="shimmer" className="aspect-square w-full rounded-md" />
      <div className="space-y-2">
        <Skeleton variant="shimmer" className="h-5 w-3/4" />
        <Skeleton variant="shimmer" className="h-4 w-full" />
        <Skeleton variant="shimmer" className="h-4 w-5/6" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton variant="shimmer" className="h-6 w-20" />
        <Skeleton variant="shimmer" className="h-9 w-24" />
      </div>
    </div>
  );
}

/**
 * Article list skeleton with multiple items
 */
export function SkeletonExampleArticleList() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton
            variant="shimmer"
            className="size-24 shrink-0 rounded-lg"
          />
          <div className="flex-1 space-y-2">
            <Skeleton variant="shimmer" className="h-5 w-full" />
            <Skeleton variant="shimmer" className="h-4 w-11/12" />
            <Skeleton variant="shimmer" className="h-4 w-4/5" />
            <div className="flex gap-4 pt-2">
              <Skeleton variant="shimmer" className="h-3 w-20" />
              <Skeleton variant="shimmer" className="h-3 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
