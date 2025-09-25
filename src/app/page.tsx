import { PittayaBackground } from "@/components/raycast-animated-background";

export default function Home() {
  return (
    <>
      <PittayaBackground className="h-screen overflow-x-hidden">
        <main className="flex flex-col min-h-screen flex-1 items-center justify-center px-6 gap-10">
          <div className="max-w-4xl space-y-8 text-center">
            <h1 className="text-6xl leading-tight font-bold text-white  [text-shadow:0_0_20px_rgba(255,255,255,0.6)]">
              Components that scale <br />
              <span className="text-white">with your ideas.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white/90">
              A fully open-source UI library for React, powered by TypeScript and Tailwind CSS.Fast, composable, and ready for production.
            </p>
          </div>
        </main>
      </PittayaBackground>
    </>
  );
}
