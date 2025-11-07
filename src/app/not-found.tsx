import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-between mt-16">
      <div className="flex w-full items-center justify-between h-12 md:h-16 lg:h-20">
        <div className="border-border h-full min-w-10 md:min-w-16 lg:min-w-24 border-r border-b p-4 diagonal-stripes"></div>
        <div className="border-border h-full w-full p-4"></div>
        <div className="border-border h-full min-w-10 md:min-w-16 lg:min-w-24 border-b border-l p-4 diagonal-stripes"></div>
      </div>
      <div className="flex w-full items-center justify-center h-full px-10 md:px-16 lg:px-24">
        <div className="flex flex-col items-center justify-center h-full outline outline-border w-full gap-4">
          <div className="flex items-center justify-center">
            <span className="md:text-9xl lg:text-[230px] 2xl:text-[300px]  leading-none text-7xl -mr-2 md:-mr-4 lg:-mr-6 2xl:-mr-8">4</span>
            <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/pittaya-logo.png"
              alt="Pittaya UI"
              width={200}
              height={200}
              className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] 2xl:w-[250px] 2xl:h-[250px]"
            />
            </div>
            <span className=" md:text-9xl lg:text-[230px] 2xl:text-[300px] leading-none text-7xl -ml-2 md:-ml-4 lg:-ml-6 2xl:-ml-8">4</span>
          </div>
          <div>
        
          <p className="text-2xl font-medium uppercase text-white/80 text-center">something went wrong</p>
          <p className="text-sm text-white/80 text-center">The page you are looking for does not exist. Please check the URL and try again.</p>
              
          </div>
          <Link href="/" className="w-fit">
          <Button variant="default" className="mt-4 bg-pittaya/80 hover:bg-pittaya/90 backdrop-blur-md border border-white/20 rounded-full shadow-lg shadow-pittaya/20 text-white" size="lg">Go back to home</Button>
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-between h-12 md:h-16 lg:h-20">
        <div className="border-border h-full min-w-10 md:min-w-16 lg:min-w-24 border-t border-r p-4 diagonal-stripes"></div>
        <div className="border-border h-full w-full p-4"></div>
        <div className="border-border h-full min-w-10 md:min-w-16 lg:min-w-24 border-t border-l p-4 diagonal-stripes"></div>
      </div>
    </div>
  );
}
