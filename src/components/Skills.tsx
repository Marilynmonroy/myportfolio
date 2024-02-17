import React from "react";
import SkillsCard from "./SkillsCard";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiCodeView } from "react-icons/ri";
import { BsBrushFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="py-10 md:pt-20">
      <div className="flex justify-between flex-col-reverse md:flex-row">
        <div className="flex gap-12 flex-col ">
          <div className="grid grid-cols-2 gap-5 p-5 pt-14 bg-[#242424] rounded-xl border-primary w-full flex-col justify-items-center md:flex-row md:p-5  relative">
            <div className="rounded-full p-3 bg-primary absolute -top-7">
              <RiCodeView className={`text-4xl hover:${(<h3>Dev</h3>)}`} />
            </div>
            <SkillsCard
              title={"TypeScript"}
              icon={"/programas/typescript.png"}
              alt={"typeScript logo"}
            />
            <SkillsCard
              title={"Tailwind"}
              icon={"/programas/tailwind.png"}
              alt={""}
            />
            <SkillsCard
              title={"React"}
              icon={"/programas/react.png"}
              alt={""}
            />
            <SkillsCard
              title={"PostgresSQL"}
              icon={"/programas/postgresql.png"}
              alt={""}
            />
            <SkillsCard
              title={"NodeJs"}
              icon={"/programas/nodejs.png"}
              alt={""}
            />
            <SkillsCard
              title={"Docker"}
              icon={"/programas/docker.png"}
              alt={""}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 p-5 pt-14 bg-[#242424] rounded-xl border-primary w-full flex-col justify-items-center md:flex-row md:p-5 relative">
            <div className="rounded-full p-4 bg-primary absolute -top-7">
              <BsBrushFill className={`text-3xl hover:${(<h3>Dev</h3>)}`} />
            </div>
            <SkillsCard
              title={"Illustrator"}
              icon={"/programas/illustrator.png"}
              alt={""}
            />
            <SkillsCard
              title={"Figma"}
              icon={"/programas/figma.png"}
              alt={""}
            />
            <SkillsCard
              title={"Photoshop"}
              icon={"/programas/photoshop.png"}
              alt={""}
            />
            <SkillsCard
              title={"Adobe XD"}
              icon={"/programas/adobexd.png"}
              alt={""}
            />
            <SkillsCard
              title={"InDesign"}
              icon={"/programas/adobeInDesign.png"}
              alt={""}
            />
            <SkillsCard
              title={"Premiere Pro"}
              icon={"/programas/premiere.png"}
              alt={""}
            />
          </div>
        </div>
        <h2 className="h2-bold flex-col text-center pb-10 md:text-right">
          HABILIDADES <p className="text-secondary"> {""} DIGITALES</p>
        </h2>
      </div>
    </div>
  );
};

export default Skills;
