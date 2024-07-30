import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileNavbar from "./MobileNavbar";
import { NavbarProvider } from "@/lib/providers/NavbarProvider";
import NavbarHolder from "./NavbarHolder";
import MobileNavbarHolder from "./MobileNavbarHolder";

export default function Navbar() {
  return (
    <NavbarProvider>
      <NavbarHolder>
        {/* Large Screen Menu */}
        <LargeScreenNavbar />

        {/* Mobile Menu */}
        <MobileNavbarHolder>
          <MobileNavbar />
        </MobileNavbarHolder>
      </NavbarHolder>
    </NavbarProvider>
  );
}
3;
