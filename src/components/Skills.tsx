import React from "react";
import SkillsCard from "./SkillsCard";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiCodeView } from "react-icons/ri";
import { BsBrushFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="py-10 md:pt-20 flex flex-col items-center justify-center">
      <h2 className="h2-bold flex-col text-center pb-10">
        Habilidades <p className="text-secondary"> {""} digitales</p>
      </h2>
      <div className="flex gap-12 flex-col md:flex-row">
        <div className="grid grid-cols-2 gap-5 p-5 pt-12 bg-[#242424] rounded-xl border-primary w-full md:w-3/5 flex-col justify-items-center md:flex-row md:p-5 relative ">
          <div className="rounded-full p-3 bg-primary absolute -top-7">
            <RiCodeView className="text-4xl md:text-2xl" />
          </div>
          <div className="col-start-1 col-end-3 md:pt-3">
            <h3 className="h5-bold">Desarrolladora</h3>
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
          <SkillsCard title={"React"} icon={"/programas/react.png"} alt={""} />
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
        <div className="grid grid-cols-2 gap-5 p-5 pt-12 bg-[#242424] rounded-xl border-primary w-full md:w-3/5 flex-col justify-items-center md:flex-row md:p-5 relative">
          <div className="rounded-full p-4 md:p-[14px] bg-primary absolute -top-7">
            <BsBrushFill className="text-3xl md:text-lg" />
          </div>

          <div className="col-start-1 col-end-3 md:pt-3">
            <h3 className="h5-bold">Diseñadora</h3>
          </div>
          <SkillsCard
            title={"Illustrator"}
            icon={"/programas/illustrator.png"}
            alt={""}
          />
          <SkillsCard title={"Figma"} icon={"/programas/figma.png"} alt={""} />
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
    </div>
  );
};

export default Skills;
