import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="select-none">
      <Link href="/">
        <Image quality={100} className="w-[170px] h-auto" src={logo} alt="webnotes logo" />
      </Link>
    </div>
  );
};

export default Logo;
