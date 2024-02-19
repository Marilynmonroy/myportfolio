import React, { ReactNode } from "react";

type skillsIconsProps = {
  name: string;
};

const SkillsIcons = (props: skillsIconsProps) => {
  return (
    <div className="text-xs border-2 px-3 py-1 border-primary rounded-xl bg-primary/20">
      {props.name}
    </div>
  );
};

export default SkillsIcons;
