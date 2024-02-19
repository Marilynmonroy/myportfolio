import React from "react";
import ProjectsCard from "./ProjectsCard";
import SkillsIcons from "./SkillsIcons";

const Projects = () => {
  return (
    <div>
      <h2 className="h2-bold flex-col text-center pb-10">
        Proyectos <p className="text-secondary"> {""} recientes</p>
      </h2>
      <div className="flex flex-col gap-5 justify-between">
        <ProjectsCard
          title={"Eventure"}
          description={
            "Plataforma fullstack con integración de API y responsiva para la gestión de eventos. Optimiza la planificación con una interfaz intuitiva. Una solución eficaz para organizadores y participantes."
          }
          skills={[
            <SkillsIcons name={"Postgres"} key={"postgres"} />,
            <SkillsIcons name={"Node.js"} key={"nodeJs"} />,
            <SkillsIcons name={"MongoDB"} key={"prisma"} />,
            <SkillsIcons name={"TypeScript"} key={"typeScript"} />,
            <SkillsIcons name={"React"} key={"react"} />,
            <SkillsIcons name={"Tailwind"} key={"tailwind"} />,
          ]}
          image={"/projects/eventure.png"}
          alt={"Eventure página principal"}
          url={"https://github.com/Marilynmonroy/eventure"}
          linkVisit={"https://eventure-m.vercel.app/"}
        />

        <ProjectsCard
          title={"LientCurt"}
          description={
            "Explora una plataforma de acortamiento de enlaces que permite cambiar entre modos claro y oscuro para una experiencia personalizada. Simplifica los enlaces de forma efectiva con esta solución versátil."
          }
          skills={[
            <SkillsIcons name={"Postgres"} key={"postgres"} />,
            <SkillsIcons name={"Node.js"} key={"nodeJs"} />,
            <SkillsIcons name={"Prisma"} key={"prisma"} />,
            <SkillsIcons name={"TypeScript"} key={"typeScript"} />,
            <SkillsIcons name={"React"} key={"react"} />,
            <SkillsIcons name={"Tailwind"} key={"tailwind"} />,
          ]}
          image={"/projects/liencurt.png"}
          alt={"LienCurt página principal"}
          url={"https://github.com/Marilynmonroy/liencurt"}
          linkVisit={"https://liencurt.vercel.app/"}
        />

        <ProjectsCard
          title={"Bi-Machine"}
          description={
            "Landing page de captación de clientes para la empresa BiMachine, dedicada al análisis de datos de diversas empresas en Brasil."
          }
          skills={[
            <SkillsIcons name={"TypeScript"} key={"typeScript"} />,
            <SkillsIcons name={"Postgres"} key={"Postgres"} />,
            <SkillsIcons name={"Docker"} key={"docker"} />,
            <SkillsIcons name={"React"} key={"react"} />,
            <SkillsIcons name={"Node.js"} key={"nodeJs"} />,
            <SkillsIcons name={"Tailwind"} key={"tailwind"} />,
          ]}
          image={"/projects/biMachine.png"}
          alt={"BiMachine - captación de clientes"}
          url={"https://github.com/Marilynmonroy/BIMachine"}
          linkVisit={"https://bi-machine.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
