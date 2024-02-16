"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <IoMenu className="text-3xl cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-slate-500 md:hidden">
          {/*           <Separator className="border border-gray-50" /> */}
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
