"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import NavItems from "./NavItems";

const MobileNav = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSheetToggle = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  const handleNavItemClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle" onClick={handleSheetToggle}>
          <IoMenu className="text-3xl cursor-pointer" />
        </SheetTrigger>
        <SheetContent
          className={`flex flex-col backdrop-blur-lg bg-black/30 md:hidden ${
            isSheetOpen ? "visible" : "hidden"
          }`}
        >
          <NavItems onItemClick={handleNavItemClick} />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
