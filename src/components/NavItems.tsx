"use client";
import Link from "next/link";
import React from "react";

const menuLinks = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Sobre mi",
    route: "/sobre-mi",
  },
  {
    label: "Proyectos",
    route: "/#proyectos",
  },
];

const NavItems = () => {
  return (
    <ul className="md:flex-between flex w-full flex-col gap-10 md:flex-row">
      {menuLinks.map((item) => {
        return (
          <li className="hover:text-secondary p-bold-16">
            <Link href={item.route}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
