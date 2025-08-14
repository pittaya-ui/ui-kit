import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <Image
        src={"/pittaya-logo.png"}
        alt="Pittaya Logo"
        width={80}
        height={80}
      />
      <h1 className="text-center text-4xl font-bold">
        Welcome to <b className="text-pink-600">Pittaya UI</b>
      </h1>
      <p className="mt-4 text-center text-lg">
        The best UI library for{" "}
        <b className="text-fuchsia-400 underline underline-offset-8">Next.js</b>
        , using{" "}
        <b className="text-fuchsia-400 underline underline-offset-8">
          Shadcn UI
        </b>{" "}
        and{" "}
        <b className="text-fuchsia-400 underline underline-offset-8">
          Tailwind CSS
        </b>
        .
      </p>
    </main>
  );
}
