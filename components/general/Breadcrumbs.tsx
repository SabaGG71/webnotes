import Image from "next/image";
import homeIcon from "../../public/icons/home.svg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface breadcrumbType {
  text: string;
  link: string;
}

const Breadcrumbs = ({ text, link }: breadcrumbType) => {
  return (
    <div className="mt-[32px]">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src={homeIcon} className="w-[20px] h-[20px] cursor-pointer" alt="home icon" />
        </Link>
        <ChevronRight className="w-[16px] text-[#333] mt-[1px] h-[16px]" />
        <Link
          href={link}
          className="cursor-pointer max-sm:text-[13px] hover:underline upper-case text-[14px] pt-[.5px] text-[#333]"
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumbs;
