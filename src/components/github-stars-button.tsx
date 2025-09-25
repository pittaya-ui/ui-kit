'use client'

import { useQuery } from "@tanstack/react-query";
import { Github, Star } from "lucide-react";
import Link from "next/link";

import { QueryKeys } from "@/constants/query-keys";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { getGithubStars } from "@/services/github";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

export function GithubStarsButton() {
    const REPO_URL = "https://github.com/pittaya-ui/ui"

    const { data: starsCount, isLoading } = useQuery({
        initialData: 0,
        queryKey: [QueryKeys.github.stars],
        queryFn: getGithubStars
    })

    const animatedStarsCount = useCounterAnimation({
        targetValue: starsCount || 0,
        duration: 1500,
        isActive: !isLoading && Boolean(starsCount)
    });

    return (
        <Button asChild variant={'outline'} size={'sm'}  className="w-fit flex gap-2 items-center group relative hover:shadow-[0_0_20px_rgba(251,113,133,0.5)] hover:border-rose-300 transition-all">
            <Link href={REPO_URL} target="_blank" rel="noopener noreferrer">
                    <Github />
                    <Separator orientation="vertical" />
                    <div className="flex gap-1.5 items-center">
                        {isLoading ? (
                            <Skeleton className="h-5 w-6 rounded-full" />
                        ) : (
                            <p>{animatedStarsCount}</p>
                        )}
                        <Star className="group-hover:fill-rose-400 group-hover:text-rose-400 transition-all" />
                    </div>
            </Link>
        </Button>
    )
}