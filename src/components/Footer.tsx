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
            src={"/marilynLogo3.png"}
            width={60}
            height={60}
            alt={"logo Marilyn Monroy"}
          />
        </Link>
        <p className="text-sm text-gray-300"> Marilyn Aragón Monroy </p>
        <div className="flex justify-center gap-5">
          <FaGithub
            className="text-2xl"
            href="https://github.com/Marilynmonroy"
          />
          <FaLinkedin
            className="text-2xl"
            href="https://www.linkedin.com/in/marilyn-aragon-monroy/"
          />
          <IoLogoWhatsapp
            className="text-2xl"
            href="https://wa.me/573015151888"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
