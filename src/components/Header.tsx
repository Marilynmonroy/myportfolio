"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isCurrentlyScrolled = scrollY > 0;
      setIsScrolled(isCurrentlyScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-40 ${
        isScrolled ? "fixed backdrop-blur-lg bg-black/30 p-0" : ""
      }`}
    >
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
