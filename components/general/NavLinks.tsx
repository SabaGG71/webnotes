"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import phoneCallIcon from "../../public/icons/phoneCallIcon.svg";
import Image from "next/image";
import menu from "../../public/icons/burger.svg";
import cancel from "../../public/icons/cancel.svg";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const [isShow, setIsShow] = useState(false);
  const pathName = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="flex max-lg:hidden select-none text-[#333] text-base items-center gap-8">
        <li>
          <Link className="hover:text-primary-500 duration-200 transition-all" href="/">
            მთავარი
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathName === "/about" ? "text-primary-500" : "text-[#333]"
            } hover:text-primary-500 duration-200 transition-all`}
            href="/about"
          >
            ჩვენს შესახებ
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary-500 duration-200 transition-all" href="/#services">
            სერვისები
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary-500 duration-200 transition-all" href="/#pricing">
            ფასები
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary-500 duration-200 transition-all" href="/#contact">
            <Button className="flex items-center pr-[17px] gap-3">
              <span className="pt-[4px]">
                <Image width={18} height={18} src={phoneCallIcon} alt="phone call icon" />
              </span>{" "}
              დაგვიკავშირდით
            </Button>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setIsShow((isShow) => !isShow)}
        className="flex cursor-pointer pr-2 lg:hidden"
      >
        {!isShow ? (
          <Image src={menu} alt="burger icon" />
        ) : (
          <Image width={22} height={22} src={cancel} alt="cancel icon" />
        )}
      </div>

      {/* Mobile Navigation */}
      {isShow && (
        <div className="absolute animate-in animate-out transition-all duration-200 left-0 py-8 px-9 w-full top-[85px] z-50 bg-gray-50">
          <ul className="text-[#333] max-sm:text-[15px] flex items-center flex-col gap-5">
            <li>
              <Link
                onClick={() => setIsShow(false)}
                className="hover:text-primary-500 duration-200 transition-all"
                href="/"
              >
                მთავარი
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsShow(false)}
                className="hover:text-primary-500 duration-200 transition-all"
                href="/about"
              >
                ჩვენს შესახებ
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsShow(false)}
                className="hover:text-primary-500 duration-200 transition-all"
                href="/#services"
              >
                სერვისები
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsShow(false)}
                className="hover:text-primary-500 duration-200 transition-all"
                href="/#pricing"
              >
                ფასები
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsShow(false)}
                className="hover:text-primary-500 duration-200 transition-all"
                href="/#contact"
              >
                <Button className="flex max-sm:text-[15px] items-center pr-[17px] gap-3">
                  <span className="pt-[4px]">
                    <Image width={18} height={18} src={phoneCallIcon} alt="phone call icon" />
                  </span>{" "}
                  დაგვიკავშირდით
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavLinks;
