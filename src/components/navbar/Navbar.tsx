import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileNavbar from "./MobileNavbar";
import MobileNavbarHeader from "./MobileNavbarHeader";
import { NavbarProvider } from "@/lib/providers/NavbarProvider";
import NavbarHeader from "./NavbarHeader";

export default function Navbar() {
  return (
    <NavbarProvider>
      <NavbarHeader>
        {/* Large Screen Menu */}
        <LargeScreenNavbar />

        {/* Mobile Menu */}
        <MobileNavbarHeader>
          <MobileNavbar />
        </MobileNavbarHeader>
      </NavbarHeader>
    </NavbarProvider>
  );
}
3;
