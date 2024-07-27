"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NavbarContextType = {
  nav: boolean;
  handleNav: () => void;
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

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <NavbarContext.Provider value={{ nav, handleNav }}>
      {children}
    </NavbarContext.Provider>
  );
};
