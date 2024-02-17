import React from "react";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const Profile = () => {
  return (
    <div className="relative flex flex-col md:flex-row-reverse items-center">
      <Image
        src={"/marilynFoto.jpg"}
        alt={"Marilyn Monroy"}
        className="rounded-full"
        width={400}
        height={400}
      />
      <h1 className="h1-bold text-center md:text-left py-4">
        Marilyn Aragón Monroy
      </h1>
      <div className="relative flex-center flex-row gap-5 md:flex-col">
        <SocialMedia
          title="LinkedIn"
          icon={<FaLinkedin />}
          link={"https://www.linkedin.com/in/marilyn-aragon-monroy/"}
          className="md:absolute inset bottom-32   left-[370px] xl:left-[580px]"
        />
        <SocialMedia
          title="GitHub"
          icon={<FaGithub />}
          link={"https://github.com/Marilynmonroy"}
          className="md:absolute inset -bottom-24  left-[690px] xl:left-[930px]"
        />
        <SocialMedia
          title="Contacto"
          icon={<IoLogoWhatsapp />}
          link={"https://wa.me/573015151888"}
          className="md:absolute inset -bottom-44  left-[370px] xl:left-[600px]"
        />
      </div>
    </div>
  );
};

export default Profile;
