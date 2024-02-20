import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="w-full flex flex-col md:flex-row wrapper gap-11">
      <div className="w-1/2">
        <h2 className="h2-bold flex-col text-left">Sobre mi</h2>
        <article className="py-3">
          ¡Hola! Mi nombre es Marilyn Tatiana Aragón Monroy, soy una profesional
          de lenguas modernas especializada en comunicación y diseño digital.
          Destaco en la creación de contenido para plataformas digitales y la
          construcción de identidades visuales. Actualmente, estoy ampliando mis
          habilidades en desarrollo web, perfeccionando mis competencias en
          JavaScript, HTML/CSS, React, Node, MySQL, entre otras tecnologías. Soy
          comunicativa, adaptable y entusiasmada por combinar mis conocimientos
          en diseño digital, front-end y back-end para crear experiencias
          digitales impactantes. ¡Emocionada por seguir creciendo
          profesionalmente!
        </article>
      </div>
      <div className="w-1/2 align-middle">
        <Image
          src={"/sobreFoto.jpg"}
          alt={""}
          width={300}
          height={200}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default page;
