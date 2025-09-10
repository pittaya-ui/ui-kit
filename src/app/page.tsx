import { PittayaBackground } from "@/components/raycast-animated-background";

export default function Home() {
  return (
    <>
      <PittayaBackground className="h-screen overflow-x-hidden">
        <main className="flex min-h-screen flex-1 items-center justify-center px-6">
          <div className="max-w-4xl space-y-8 text-center">
            <h1 className="text-6xl leading-tight font-bold text-white">
              Bem-vindo ao <br />
              <span className="text-white">Pittaya UI</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white/80">
              Componentes modernos e animações incríveis para suas aplicações
              Next.js. Construa interfaces bonitas com facilidade.
            </p>
          </div>
        </main>
      </PittayaBackground>
    </>
  );
}
