import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/marilynLogo3.png"}
            width={70}
            height={70}
            alt={"logo Marilyn Monroy"}
          />
        </Link>
        <nav className="md:flex-between hidden w-full max-w-xs ">
          <NavItems />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
