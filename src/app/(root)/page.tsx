import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <div className="wrapper flex flex-col gap-5">
      <Profile />
      <Skills />
      <section id="proyectos">
        <Projects />
      </section>
    </div>
  );
};

export default page;
