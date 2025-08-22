import SectionTitle from "./SectionTitle";
import vector from "../../public/icons/arrow.svg";
import Image from "next/image";
const Steps = () => {
  return (
    <section className="mt-[85px] pb-[80px] px-9 2xl:max-w-[1550px] mx-auto mb-[30px]">
      <SectionTitle title="როგორ ვმუშაობთ?" width={80} />

      <div className="grid grid-cols-3 max-2xl:mt-[70px] max-2xl:grid-cols-3 max-xl:grid-cols-2 gap-7 max-lg:gap-9 max-lg:grid-cols-1 max-2xl:items-stretch items-start relative">
        <div className="absolute select-none left-[28%] top-[55%] z-10">
          <Image
            className="w-[100px] select-none max-2xl:hidden block h-auto"
            src={vector}
            alt="vector svg"
          />
        </div>
        <div className="absolute select-none right-[28.5%] top-[56%] z-10">
          <Image
            className="w-[100px] select-none max-2xl:hidden block rotate-[-90deg] h-auto"
            src={vector}
            alt="vector svg"
          />
        </div>
        <div className="relative py-8 px-6 bg-white  rounded-[24px]">
          <div className="absolute top-[-8%] left-[7%] text-sm bg-primary-500 text-white py-2 px-6 rounded-[12px]">
            <span>საფეხური 01</span>
          </div>
          <h3 className="text-xl mt-[20px] text-[#333] font-[600] upper-case max-sm:text-base">
            კონსულტაცია
          </h3>
          <p className="text-sm max-sm:text-[13px] text-[#333]/80 pr-8 mt-[15px]">
            დარეკვა ან ონლაინ შეხვედრა თქვენი იდეების მოსასმენად, საჭიროებების გაგების, მიზნების
            დადგენისა და იდეალური სტრატეგიის შესადგენად.
          </p>
        </div>
        <div className=" 2xl:mt-[100px] relative py-8 px-6 bg-white rounded-[24px]">
          <span className="absolute max-sm:text-xs top-[-8%] left-[7%] text-sm bg-yellow-400 text-[#333] py-2 px-6 rounded-[12px]">
            საფეხური 02
          </span>
          <h3 className="text-xl max-sm:text-base mt-[20px] text-[#333] font-[600] upper-case">
            ვებსაიტის შექმნა
          </h3>
          <p className="text-sm max-sm:text-[13px] text-[#333]/80 pr-8 mt-[15px]">
            გასაუბრების შემდეგ ვქმნით თქვენს საჭიროებებზე მორგებულ ვებსაიტს. მუშაობის პარალელურად კი
            სიახლეებს მიიღებთ თქვენც, რათა საჭიროების შემთხვევაში შევიტანოთ ცვლილებები.
          </p>
        </div>
        <div className=" relative max-lg:mt-0 max-2xl:mt-[10px] max-2xl:py-9 py-8 px-6 bg-white rounded-[24px]">
          <span className="absolute max-sm:text-xs top-[-8%] left-[7%] text-sm bg-primary-500 text-white py-2 px-6 rounded-[12px]">
            საფეხური 03
          </span>
          <h3 className="text-xl max-sm:text-base mt-[20px] text-[#333] font-[600] upper-case">
            გადახდა და აქტივაცია
          </h3>
          <p className="text-sm max-sm:text-[13px] text-[#333]/80 pr-8 mt-[15px]">
            საჭირო ცვლილებების შეტანისა და ვებსაიტის საბოლოო ვერსიის ჩვენების შემდეგ ხდება ვებსაიტის
            გაშვება, ამის შემდეგ კი თქვენგან თანხის გადახდა
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
