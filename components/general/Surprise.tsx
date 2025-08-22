import Image from "next/image";
import SectionTitle from "./SectionTitle";
import gift from "../../public/gift.webp";
import { Button } from "../ui/button";
import { Gift } from "lucide-react";
const Surprise = () => {
  return (
    <section id="gift">
      <SectionTitle title="საჩუქრები" width={85} />

      <div className="grid gap-6 relative z-0 max-lg:grid-cols-1 grid-cols-2 mt-[80px]">
        <div className="sticky max-lg:static z-0 max-sm:p-6 max-sm:pt-[70px] bg-gray-50 h-auto p-16 rounded-[24px] top-[150px] self-start">
          <div className="absolute  top-[-3%]">
            <Gift className="z-40 max-sm:mt-[5px] max-sm:ml-[10px] max-lg:mt-[23px] bg-yellow-100 text-yellow-500 p-1 rounded-[4px] relative text-primary-500 scale-[2.5]" />
          </div>
          <h2 className="text-2xl font-bold upper-case tracking-wide text-[#333] mb-[20px] max-xl:text-2xl max-md:text-xl max- max-lg:max-w-[500px]">
            საჩუქარი შენი ბრენდის სრულყოფისთვის
          </h2>
          <p className="text-[#333]/80 max-md:text-sm text-base max-w-[480px]">
            შეუკვეთეთ ვებსაიტი ჩვენთან და მიიღეთ AI ინტეგრაცია საჩუქრად! თქვენ მიიღებთ
            პერსონალიზებულ AI ჩათბოტსა და სხვა მრავალ სასარგებლო ფუნქციონალს, რომელიც აუმჯობესებს
            მომხმარებელთან კომუნიკაციას და ზრდის ვებსაიტის ეფექტურობას.
          </p>
          <Button className="mt-8 max-md:h-10 max-sm:text-sm h-12 px-7">დეტალურად</Button>
          <div className="absolute bottom-[-9%] right-[20%] rotate-[20deg]">
            <Gift className="z-40 max-lg:hidden animate-type bg-primary-100 p-2 rounded-[8px] relative text-primary-500 scale-[3.5]" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image className="object-cover select-none h-auto w-full" src={gift} alt="gift image" />
        </div>
      </div>
    </section>
  );
};

export default Surprise;
