"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type NavbarContextType = {
  nav: boolean;
  handleNav: () => void;
  shadow: boolean;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <NavbarContext.Provider value={{ nav, handleNav, shadow }}>
      {children}
    </NavbarContext.Provider>
  );
};
