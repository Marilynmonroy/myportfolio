import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <ul className="md:flex-between flex w-full flex-col gap-16 md:flex-row">
      <li>
        <Link href={"/"}>Inicio</Link>
      </li>
      <li>
        <Link href={"/sobre-mi"}>Sobre mi</Link>
      </li>
      <li>
        <Link href={"/proyectos"}>Proyectos</Link>
      </li>
    </ul>
  );
};

export default NavItems;
