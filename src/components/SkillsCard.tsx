import Image from "next/image";
import React from "react";

type skillsCardProps = {
  title: string;
  icon: string;
  alt: string;
};

const SkillsCard = ({ title, icon, alt }: skillsCardProps) => {
  return (
    <div className="h-28 w-28 bg-white border-none rounded-2xl flex-center flex-col gap-2 justify-around md:h-22 md:w-24 ">
      <Image
        className="pt-2 object-fill"
        src={icon}
        alt={alt}
        width={40}
        height={40}
        layout="responsive"
      />

      <p className="p-medium-14 text-background">{title}</p>
    </div>
  );
};

export default SkillsCard;
