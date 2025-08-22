import Image from "next/image";
import { Button } from "../ui/button";
import SectionTitle from "./SectionTitle";
import check from "../../public/icons/check.svg";
import Link from "next/link";
const Pricing = () => {
  return (
    <section className="mb-[60px]" id="pricing">
      <SectionTitle title="ფასები" width={60} />

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-[50px] gap-6">
        <div className="bg-gray-50 shadow-sm px-8 p-7 rounded-[24px]">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-primary-400 w-[10px] h-[10px] rounded-full"></div>
              <h5 className="text-lg max-xl:text-base  upper-case text-[#333]">საწყისი პაკეტი</h5>
            </div>
            <p className="py-7 text-2xl max-xl:text-xl font-bold upper-case text-[#333]">
              💵 500 - 2500 ლარი
            </p>
            <Link href="/#contact">
              <Button className="w-full max-xl:text-[15px]  max-xl:h-11 max-md:text-sm hover:bg-primary-700 h-[50px] text-[15px] my-3 mb-8 upper-case py-5 bg-primary-500 text-[#fff] ">
                დაგვიკავშირდი
              </Button>
            </Link>
            <div className="w-full h-[1px] bg-[#333]/10"></div>
          </div>
          <div>
            <div className="flex mt-8 flex-col gap-3">
              <div className="flex items-center gap-4">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">1-5 გვერდი</p>
              </div>
              <div className="flex items-center gap-4">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">ვებსაიტის დიზაინი</p>
              </div>
              <div className="flex items-center gap-4">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">სამართავი პანელი</p>
              </div>
              <div className="flex items-center gap-4">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">ტექნიკური SEO</p>
              </div>
              <div className="flex items-center gap-4">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">ფოტო-ვიდეო გალერეა</p>
              </div>
              <div className="flex items-center gap-4">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">სლაიდები</p>
              </div>
              <div className="flex items-center gap-4">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm max-w-[450px]">
                  Google Analytics და Facebook Pixel ინტეგრაცია, Google Search Console ვერიფიკაცია
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">ერთი ენის მხარდაჭერა</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 shadow-sm px-8 p-7 rounded-[24px]">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-primary-400 w-[10px] h-[10px] rounded-full"></div>
              <h5 className="text-lg upper-case max-xl:text-base text-[#333]">საშუალო პაკეტი </h5>
            </div>
            <p className="py-7 text-2xl max-xl:text-xl text-[#333] font-bold">
              💵 2500 - 7500 ლარი
            </p>
            <Link href="/#contact">
              <Button className="w-full  max-xl:text-sm max-xl:h-11  hover:bg-primary-700 h-[50px] text-[15px] upper-case py-5 my-3 mb-8 bg-primary-500 text-white">
                დაგვიკავშირდი
              </Button>
            </Link>
            <div className="w-full h-[1px]  max-xl:text-sm bg-[#333]/10"></div>
          </div>
          <div>
            <div className="flex mt-8 flex-col gap-3">
              <div className="flex items-center gap-3">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">ყველაფერი საწყის პაკეტში</p>
              </div>
              <div className="flex items-center gap-3">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">5-15 გვერდი</p>
              </div>
              <div className="flex items-center gap-3">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">საიტის უსაფრთხოება</p>
              </div>
              <div className="flex items-center gap-3">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">2 ან მეტი ენის მხარდაჭერა</p>
              </div>
              <div className="flex items-center gap-3">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">რეგისტრაცია</p>
              </div>
              <div className="flex items-center gap-3">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">დაჯავშნა</p>
              </div>
              <div className="flex items-center gap-3">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">გადახდის სისტემა</p>
              </div>
              <div className="flex items-center gap-3">
                <Image className="w-[18px] h-[18px]" src={check} alt="check icon" />
                <p className="text-[#333]/80  max-xl:text-sm">ონლაინ მაღაზია</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 max-lg:col-span-2 max-md:col-span-1  items-center justify-center shadow-sm px-8 p-7 rounded-[24px]">
          <div className="flex self-center  items-center gap-4">
            <div className="bg-yellow-400 w-[10px] h-[10px] rounded-full"></div>
            <h4 className="upper-case max-xl:text-base text-lg">მორგებული პაკეტი</h4>
          </div>
          <p className="py-7 text-2xl max-xl:text-xl text-[#333] font-bold">💰 ფასი შეთანხმებით</p>
          <Link href="/#contact">
            <Button className="w-full  max-xl:text-sm max-xl:h-11  hover:bg-yellow-300 h-[50px] text-[15px] upper-case py-5 my-3 mb-8 bg-yellow-400 text-[#333]">
              დაგვიკავშირდი
            </Button>
          </Link>
          <div className="w-full h-[1px] bg-[#333]/10"></div>
          <p className="text-[#333]/80  max-xl:text-sm leading-[1.6] tracking-wide mt-[25px]">
            თუ გსურთ ვებსაიტი, რომელიც სტანდარტულ პაკეტებს სცდება და მოიცავს განსაკუთრებულ
            ფუნქციონალს, „მორგებული პაკეტი“ იდეალურია თქვენთვის. კონსულტაციის შემდეგ განვსაზღვრავთ
            საჭიროებებს დეტალურად და დავამზადებთ თქვენთვის მორგებულ ვებსაიტს შესაბამის ფასად.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
