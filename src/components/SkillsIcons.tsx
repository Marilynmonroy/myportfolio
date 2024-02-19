import React, { ReactNode } from "react";

type skillsIconsProps = {
  name: string;
};

const SkillsIcons = (props: skillsIconsProps) => {
  return <div className="skills">{props.name}</div>;
};

export default SkillsIcons;
