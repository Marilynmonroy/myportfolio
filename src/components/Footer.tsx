import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="border-t ">
      <div className="wrapper flex-center flex-center wrapper flex-between flex gap-4 p-5 text-center">
        <Link href={"/"}>
          <Image
            src={"/marilynLogo.png"}
            width={60}
            height={60}
            alt={"logo Marilyn Monroy"}
          />
        </Link>
        <p className="text-sm text-gray-500"> Marilyn Aragón Monroy </p>
        <div className="flex justify-center gap-5">
          <FaGithub className="text-2xl" />
          <FaLinkedin className="text-2xl" />
          <IoLogoWhatsapp className="text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
