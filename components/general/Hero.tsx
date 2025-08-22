import Image from "next/image";
import React from "react";
import desk from "../../public/desk.webp";
import { Button } from "../ui/button";
import { Gift } from "lucide-react";
import Link from "next/link";
const Hero = () => {
  return (
    <main className="mt-9 relative">
      <div className="relative w-full max-sm:h-[380px] h-[500px] rounded-[24px] overflow-hidden">
        <Image
          className="object-cover select-none overflow-hidden"
          src={desk}
          alt="hero desk image"
          fill
          priority
        />

        <div className="absolute overflow-hidden bottom-0 left-0 right-0 h-[90%] max-sm:h-full bg-gradient-to-t max-sm:from-black/80 from-black/70 to-transparent"></div>
      </div>
      <div className="absolute max-sm:left-[30px] max-sm:bottom-[40px] bottom-[55px] left-[60px]">
        <h1 className="text-white max-sm:max-w-[400px] max-w-[600px] leading-[1.3] text-4xl max-xl:text-3xl tracking-wide max-sm:text-xl upper-case font-bold">
          ვებსაიტების დამზადება ბიზნესისთვის
        </h1>
        <p className="text-[#fff]/90 text-lg max-sm:pr-6 max-sm:pb-6 max-sm:text-base pt-3 pb-9 line-clamp-3 max-w-[450px]">
          ჩვენთან ყველა ვებსაიტი დამზადდება სწრაფად... ხარისხსა და დიზაინს კი თქვენ იხილავთ თავად.
          ✌️
        </p>
        <Button className="bg-primary-400 hover:bg-primary-500 py-3 pt-[11px] px-6 gap-3 flex items-center max-sm:text-sm max-sm:h-10  text-white h-12 ">
          გაიგე მეტი
        </Button>
      </div>
      <Link href="/#gift">
        <div className="absolute select-none cursor-pointer overflow-hidden top-[60px] max-sm:top-[30px] max-sm:py-3 right-[0px] bg-[#fff]/70  group transition-all px-5 py-[15px] max-sm:gap-2 hover:px-7 rounded-l-[12px] text-[#333] flex items-center gap-3">
          <Gift className="w-[22px] max-sm:w-[18px] max-sm:h-[18px]  group-hover:text-primary-400 transition-all duration-200 group-hover:animate-in h-[22px]" />
          <p className="pr-1 max-sm:text-sm">მიიღე ბონუსი</p>
        </div>
      </Link>
    </main>
  );
};

export default Hero;
