import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "./ui/button";

type projectsCardProps = {
  title: string;
  description: string;
  skills: React.ReactNode;
  image: string;
  alt: string;
  url: string;
  linkVisit: string;
};

const ProjectsCard = (props: projectsCardProps) => {
  return (
    <Card className="bg-[#242424] rounded-xl border-2 border-[#242424] w-full flex flex-col md:flex-row md:p-5 justify-between ">
      <CardHeader className="gap-2 md:w-full">
        <CardTitle className="h3-bold">{props.title}</CardTitle>
        <CardDescription
          className="text-[#E9E9E9]
        "
        >
          {props.description}
        </CardDescription>
        <p className="font-semibold text-sm">Tecnologias utilizadas:</p>
        <div className="flex gap-2"> {props.skills}</div>
      </CardHeader>
      <div className="md:w-full">
        <CardContent>
          <Link href={props.linkVisit} target="_blank">
            <Image
              src={props.image}
              alt={props.alt}
              height={500}
              width={500}
              className="rounded-xl shadow-2xl shadow-black"
            />
          </Link>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant={"ghost"}
            className="button hover:bg-primary/50 italic text-xs md:text-sm"
          >
            <Link href={props.url} target="_blank" className="font-light ">
              Ir al repositorio de GitHub
            </Link>
          </Button>
          <Button asChild className="button">
            <Link href={props.linkVisit} target="_blank">
              Visitar
              <IoIosArrowRoundForward className=" text-3xl" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectsCard;
