import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <div className="wrapper flex flex-col gap-5 relative">
      <div className="rounded-full bg-primary w-14 h-14 md:w-28 md:h-28 blur-2xl absolute md:top-16 md:left-16 xl:top-12 xl:-left-4"></div>
      <div className="rounded-full bg-primary w-14 h-14 md:w-28 md:h-28 blur-2xl absolute top-32 right-1 md:top-6 md:right-24 xl:top-0 xl:right-1"></div>
      <div className="rounded-full bg-primary w-14 h-14 md:w-28 md:h-28 blur-2xl absolute top-[22rem] left-[45%]"></div>
      <Profile />
      <Skills />
      <section id="proyectos">
        <Projects />
      </section>
    </div>
  );
};

export default page;
