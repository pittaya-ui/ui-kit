"use client";

import { useQuery } from "@tanstack/react-query";
import { Download, Package } from "lucide-react";
import Link from "next/link";

import { NPM_URL } from "@/constants/npm-url";
import { QueryKeys } from "@/constants/query-keys";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { getNpmDownloads } from "@/services/npm";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

export function NpmDownloadsButton() {
  const { data: downloadsCount, isLoading } = useQuery({
    queryKey: [QueryKeys.npm.downloads],
    queryFn: getNpmDownloads,
  });

  const animatedDownloadsCount = useCounterAnimation({
    targetValue: downloadsCount || 0,
    duration: 1500,
    isActive: !isLoading && Boolean(downloadsCount),
  });

  return (
    <Button
      asChild
      variant={"outline"}
      size={"sm"}
      className="group hover:border-pittaya/80 relative flex w-fit items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(251,113,133,0.5)]"
    >
      <Link href={NPM_URL} target="_blank" rel="noopener noreferrer">
        <Package />
        <Separator orientation="vertical" />
        <div className="flex items-center gap-1.5">
          {isLoading ? (
            <Skeleton className="h-5 w-6 rounded-full" />
          ) : (
            <p>{animatedDownloadsCount}</p>
          )}
          <Download className="group-hover:text-pittaya transition-all" />
        </div>
      </Link>
    </Button>
  );
}
