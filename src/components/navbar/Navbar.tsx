import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileNavbar from "./MobileNavbar";
import { NavbarProvider } from "@/lib/providers/NavbarProvider";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-20 start-0 bg-gray-700/80">
      <NavbarProvider>
        {/* Large Screen Menu */}
        <LargeScreenNavbar />

        {/* Mobile Menu */}
        <MobileNavbar />
      </NavbarProvider>
    </header>
  );
}
3;
