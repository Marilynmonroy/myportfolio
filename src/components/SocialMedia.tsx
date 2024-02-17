import React from "react";
import { Button } from "./ui/button";
import Link, { LinkProps } from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Url } from "url";

type socialMediaProps = {
  title?: string;
  icon?: React.ReactNode;
  link: string;
  className?: string;
};

const SocialMedia = ({ title, icon, link, className }: socialMediaProps) => {
  return (
    <div className={className}>
      <Button asChild className="button px-7 md:px-4" size={"sm"}>
        <Link href={link} target="_blank">
          <span className="hidden md:inline pr-2">{title}</span>
          <IoIosArrowRoundForward className="hidden md:inline text-3xl" />
          <div className="text-2xl md:hidden">{icon}</div>
        </Link>
      </Button>
    </div>
  );
};

export default SocialMedia;
