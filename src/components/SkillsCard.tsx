import Image from "next/image";
import React from "react";

type skillsCardProps = {
  title: string;
  icon: string;
  alt: string;
};

const SkillsCard = ({ title, icon, alt }: skillsCardProps) => {
  return (
    <div className="h-24 w-28 bg-white border-none rounded-2xl flex-center flex-col gap-2 justify-around">
      <Image className="pt-2" src={icon} alt={alt} width={40} height={40} />

      <p className="p-medium-14 text-background">{title}</p>
    </div>
  );
};

export default SkillsCard;
