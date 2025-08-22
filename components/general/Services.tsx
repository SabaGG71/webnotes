import Image from "next/image";
import SectionTitle from "./SectionTitle";
import idea from "../../public/icons/idea.svg";
import seo from "../../public/icons/seoIcon.svg";
import code from "../../public/icons/code.svg";
const Services = () => {
  return (
    <section id="services">
      <SectionTitle width={70} title="სერვისები" />

      <div className="grid grid-cols-3  max-xl:grid-cols-2 max-lg:grid-cols-1 mt-[60px] mb-8 gap-6">
        <div className="bg-gray-50 group hover:bg-gray-50/90 cursor-pointer relative pt-[120px] py-12 pl-6 pr-5 rounded-[12px]">
          <div
            className="bg-primary-500 group-hover:bg-primary-600  group-hover:pl-8 transition-all duration-200 py-3 pl-7 pr-5 rounded-tr-[12px]
          rounded-br-[12px] left-0 top-[40px] absolute"
          >
            <Image width={30} height={30} src={code} alt="code icon" />
          </div>
          <div className="flex items-center select-none gap-3">
            <div className="w-[10px] max-sm:w-[8px] max-sm:h-[8px] h-[10px] bg-primary-500 rounded-full"></div>
            <h4 className="text-xl max-sm:text-base font-bold text-[#333]/90 upper-case ">
              ვებსატების დამზადება
            </h4>
          </div>
          <p className="text-[#333]/80 max-sm:text-[15px] mt-[18px]">
            ვქმნით უნიკალური დიზაინის, მაღალი ხარისხის ვებსაიტებს, მომხმარებელზე ორიენტირებული
            გამოცდილებით.
          </p>
        </div>
        <div className="bg-gray-50 group hover:bg-gray-50/90 cursor-pointer relative pt-[120px] py-12 px-6 rounded-[12px]">
          <div
            className="bg-primary-500 group-hover:bg-primary-600  group-hover:pl-8 transition-all duration-200 py-3 pl-7  pr-5 rounded-tr-[12px]
          rounded-br-[12px] left-0 top-[40px] absolute"
          >
            <Image width={30} height={30} src={seo} alt="seo statistic" />
          </div>
          <div className="flex items-center select-none gap-3">
            <div className="w-[10px] h-[10px] max-sm:w-[8px] max-sm:h-[8px] bg-primary-500  rounded-full"></div>
            <h4 className="text-xl max-sm:text-base font-bold text-[#333]/90 upper-case ">
              SEO ოპტიმიზაცია
            </h4>
          </div>
          <p className="text-[#333]/80  max-sm:text-[15px] mt-[18px]">
            ვაუმჯობესებთ თქვენი ვებსაიტის ხილვადობას, ტექნიკური SEO-სა და ხარისხიანი კონტენტის
            გამოყენებით.
          </p>
        </div>
        <div className="bg-gray-50 group hover:bg-gray-50/90  cursor-pointer relative pt-[120px] py-12 px-6 rounded-[12px]">
          <div
            className="bg-primary-500 group-hover:bg-primary-600 group-hover:pl-8 transition-all duration-200 py-3 pl-7  pr-5 rounded-tr-[12px]
          rounded-br-[12px] left-0 top-[40px] absolute"
          >
            <Image width={30} height={30} src={idea} alt="idea bubble icon" />
          </div>
          <div className="flex group items-center select-none gap-3">
            <div className="w-[10px]  h-[10px] max-sm:w-[8px] max-sm:h-[8px] bg-primary-500 rounded-full"></div>
            <div className="flex items-center gap-3">
              <h4 className="text-xl max-sm:text-base font-bold text-[#333]/90 upper-case ">
                AI ინტეგრაცია
              </h4>
            </div>
          </div>
          <p className="text-[#333]/80 select-none max-sm:text-[15px] mt-[18px]">
            ვახდენთ AI-ს ინტეგრაციას ვებსაიტზე, მომხმარებლის საჭიროებებზე ორიენტირებული ფუნქციებით.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
