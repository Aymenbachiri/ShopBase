import { Link } from "@/navigation";
import LocaleMenu from "./LocaleMenu";
import ThemeSwitch from "./ThemeSwitch";
import MobileNavBtn from "./MobileNavBtn";
import getNavLinks from "./NavLinks";

export default async function LargeScreenNavbar() {
  const navLinks = await getNavLinks();

  return (
    <nav className="max-w-screen-xl min-h-[50px] flex flex-wrap items-center justify-between mx-auto z-10 text-white ">
      <span>Logo</span>
      <ul className="hidden md:flex justify-between gap-x-8 items-center px-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Translation Menu */}
      <div className="hidden md:flex justify-between items-center gap-x-3">
        <LocaleMenu />
        <ThemeSwitch />
      </div>

      {/* Hamburger Icon */}
      <MobileNavBtn />
    </nav>
  );
}
