import { Link } from "@/navigation";
import LocaleMenu from "./LocaleMenu";
import ThemeSwitch from "./ThemeSwitch";
import MobileNavBtn from "./MobileNavBtn";
import getNavLinks from "./NavLinks";
import IsAuth from "@/lib/helpers/IsAuth";
import ProfileMenu from "./ProfileMenu";
import CartLink from "./CartLink";
import MyImage from "../reusable_components/MyImage";
import logo from "/public/assets/images/logo.jpg";

export default async function LargeScreenNavbar() {
  const navLinks = await getNavLinks();

  return (
    <nav className="max-w-screen-xl min-h-[50px] flex flex-wrap items-center justify-between mx-auto z-10">
      <Link href="/" passHref>
        <MyImage
          src={logo}
          alt="logo الشعار"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>
      <ul className="hidden md:flex justify-between gap-x-8 items-center px-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className="py-1 hover:border-b hover:border-b-black dark:hover:border-b-gray-300"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <IsAuth>
          <ProfileMenu />
        </IsAuth>
        <li>
          <CartLink />
        </li>
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
