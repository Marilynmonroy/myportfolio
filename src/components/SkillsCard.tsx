import React from "react";

type skillsCardProps = {
  title: string;
  icon: React.ReactNode;
};

const SkillsCard = ({ title, icon }: skillsCardProps) => {
  return (
    <div className="h-20 w-52 flex">
      <div className="bg-secondary flex-center rounded-s-xl p-2">
        <div className="text-2xl ">{icon}</div>
      </div>
      <div className="bg-slate-800 flex-center rounded-e-xl ">
        <p className="p-medium-16">{title}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
