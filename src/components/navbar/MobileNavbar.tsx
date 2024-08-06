import CartLink from "./CartLink";
import LocaleMenu from "./LocaleMenu";
import MobileNavbarLink from "./MobileNavbarLink";
import getNavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import ThemeSwitch from "./ThemeSwitch";

export default async function MobileNavbar() {
  const navLinks = await getNavLinks();

  return (
    <ul className="h-full w-full text-center pt-12">
      {navLinks.map((link) => (
        <li key={link.label} className="text-2xl py-8">
          <MobileNavbarLink link={link} />
        </li>
      ))}
      <li className="md:hidden text-2xl py-8 flex justify-center items-center text-white">
        <ProfileMenu />
      </li>
      <li className="text-2xl py-8">
        <CartLink />
      </li>
      <li className="text-2xl py-8">
        <LocaleMenu />
      </li>
      <li className="md:hidden text-2xl py-8 flex justify-center items-center text-white">
        <ThemeSwitch />
      </li>
    </ul>
  );
}
