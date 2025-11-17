import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Beams from "@/components/Beams";
import {
  AnnouncementContainer,
  AnnouncementSeparator,
  AnnouncementTitle,
} from "@/components/ui/announcement-badge";

export default function Home() {
  return (
    <Beams
      beamWidth={2}
      beamHeight={15}
      beamNumber={12}
      lightColor="#ff637e"
      speed={4}
      noiseIntensity={1.75}
      scale={0.2}
      rotation={136}
      className="h-screen overflow-hidden"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-6">
        <Link href={"/docs/components"}>
          <AnnouncementContainer variant={"glassEffect"}>
            <div className="px-2">
              <Image
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/brazil.png"
                alt="brazil"
              />
            </div>
            <AnnouncementSeparator className="bg-white/30" />
            <AnnouncementTitle>
              Introducing Pittaya UI <ArrowUpRight className="size-4" />
            </AnnouncementTitle>
          </AnnouncementContainer>
        </Link>
        <div className="max-w-4xl space-y-8 text-center">
          <h1 className="text-6xl leading-tight font-normal tracking-tight text-white">
            Components that scale <br />
            <span className="text-white">
              with your <span className="font-semibold">ideas</span>.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            A fully open-source UI library for React, powered by TypeScript and
            Tailwind CSS. Fast, composable, and ready for production.
          </p>
        </div>
      </div>
    </Beams>
  );
}
