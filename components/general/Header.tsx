import Logo from "./Logo";
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <header className="bg-gray-50/50 z-50 backdrop-blur-md fixed w-full">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
