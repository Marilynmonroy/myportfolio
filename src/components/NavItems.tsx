import Link from "next/link";
import React from "react";

interface NavItemsProps {
  onItemClick: () => void;
}

const menuLinks = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Sobre mi",
    route: "/MarilynAragon.Esp.pdf",
  },
  {
    label: "Proyectos",
    route: "/#proyectos",
  },
];

const NavItems: React.FC<NavItemsProps> = ({ onItemClick }) => {
  return (
    <ul className="md:flex-between flex w-full flex-col gap-10 md:flex-row">
      {menuLinks.map((item, index) => {
        return (
          <li key={index} className="hover:text-secondary p-bold-16">
            <Link href={item.route} onClick={onItemClick}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
