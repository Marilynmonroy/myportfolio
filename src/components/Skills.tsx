import React from "react";
import SkillsCard from "./SkillsCard";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaNodeJs, FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="">
      <h2 className="h2-bold flex-center py-10 md:pt-20">Habilidades</h2>
      <div className="flex gap-5 justify-between">
        <SkillsCard title={"TypeScript"} icon={<SiTypescript />} />
        <SkillsCard title={"Figma"} icon={<FiFigma />} />
        <SkillsCard title={"React"} icon={<FaReact />} />
        <SkillsCard title={"Postgres"} icon={<SiPostgresql />} />
        <SkillsCard title={"NodeJs"} icon={<FaNodeJs />} />
      </div>
    </div>
  );
};

export default Skills;
