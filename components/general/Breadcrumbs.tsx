import Image from "next/image";
import homeIcon from "../../public/icons/home.svg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface breadcrumbType {
  text: string;
  link: string;
  detailsLink?: string;
  detailsText?: string;
}

const Breadcrumbs = ({ text, link, detailsLink, detailsText }: breadcrumbType) => {
  return (
    <div className="mt-[32px]">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src={homeIcon} className="w-[18px] h-[18px] cursor-pointer" alt="home icon" />
        </Link>
        <ChevronRight className="w-[16px] text-[#333] mt-[1px] h-[16px]" />
        <Link
          href={link}
          className="cursor-pointer hover:underline upper-case text-[13px] pt-[.5px] text-[#333]"
        >
          {text}
        </Link>
        {detailsLink && detailsText && (
          <div className="max-md:hidden flex items-center gap-3">
            <ChevronRight className="w-[16px] text-[#333] h-[16px]" />
            <p className="text-[#333] mt-[.5px] upper-case text-[13px]">{detailsText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
