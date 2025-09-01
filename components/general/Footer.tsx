import Link from "next/link";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="container max-sm:max-w-[95%] py-12 mb-12 bg-primary-50 rounded-[24px]">
      <div className="text-center flex flex-col justify-center items-center">
        <Logo />
        <p className="mt-9 max-sm:text-[13px] tracking-wide">
          © 2025 <span className="font-manrope">webnotes</span> | ყველა უფლება დაცულია
        </p>
        <SocialIcons />
        <Link
          href="/privacy"
          className="hover:underline max-sm:text-sm hover:text-primary-500 duration-200 transition-all"
        >
          წესები და პირობები
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
