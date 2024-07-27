"use client";

import LocaleMenuButton from "./LocaleMenuBtn";
import LocaleMenuList from "./LocaleMenuList";
import { useState } from "react";

export default function LocaleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className="md:relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <LocaleMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <LocaleMenuList setIsOpen={setIsOpen} /> : null}
    </main>
  );
}
