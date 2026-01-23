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

/**
 * Table skeleton with header and rows
 */
export function SkeletonExampleTable() {
  return (
    <div className="w-full space-y-3">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 rounded-t-lg border border-border bg-muted/50 p-4">
        <Skeleton variant="pulse" className="h-4 w-20" />
        <Skeleton variant="pulse" className="h-4 w-24" />
        <Skeleton variant="pulse" className="h-4 w-16" />
        <Skeleton variant="pulse" className="h-4 w-20" />
      </div>

      {/* Table Rows */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-4 gap-4 border-x border-b border-border p-4 last:rounded-b-lg"
        >
          <Skeleton variant="shimmer" className="h-4 w-full" />
          <Skeleton variant="shimmer" className="h-4 w-full" />
          <Skeleton variant="shimmer" className="h-4 w-3/4" />
          <Skeleton variant="shimmer" className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
}

/**
 * Dashboard statistics cards skeleton
 */
export function SkeletonExampleDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-3 rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <Skeleton variant="pulse" className="h-4 w-24" />
            <Skeleton variant="pulse" className="size-4 rounded" />
          </div>
          <Skeleton variant="shimmer" className="h-8 w-28" />
          <Skeleton variant="shimmer" className="h-3 w-32" />
        </div>
      ))}
    </div>
  );
}

/**
 * Comment thread skeleton
 */
export function SkeletonExampleComments() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-3">
          <Skeleton
            variant="shimmer"
            className="size-10 shrink-0 rounded-full"
          />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton variant="shimmer" className="h-4 w-28" />
              <Skeleton variant="shimmer" className="h-3 w-16" />
            </div>
            <Skeleton variant="shimmer" className="h-4 w-full" />
            <Skeleton variant="shimmer" className="h-4 w-11/12" />
            <Skeleton variant="shimmer" className="h-4 w-3/4" />
            <div className="flex gap-4 pt-2">
              <Skeleton variant="shimmer" className="h-3 w-12" />
              <Skeleton variant="shimmer" className="h-3 w-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Form skeleton with labels and inputs
 */
export function SkeletonExampleForm() {
  return (
    <div className="w-full max-w-md space-y-6">
      {/* Form Field 1 */}
      <div className="space-y-2">
        <Skeleton variant="pulse" className="h-4 w-20" />
        <Skeleton variant="shimmer" className="h-10 w-full" />
      </div>

      {/* Form Field 2 */}
      <div className="space-y-2">
        <Skeleton variant="pulse" className="h-4 w-24" />
        <Skeleton variant="shimmer" className="h-10 w-full" />
      </div>

      {/* Form Field 3 */}
      <div className="space-y-2">
        <Skeleton variant="pulse" className="h-4 w-28" />
        <Skeleton variant="shimmer" className="h-24 w-full" />
      </div>

      {/* Submit Button */}
      <Skeleton variant="shimmer" className="h-10 w-full" />
    </div>
  );
}
