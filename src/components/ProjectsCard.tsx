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
  icons: React.ReactNode;
  image: string;
  alt: string;
  url: string;
  linkVisit: string;
};

const ProjectsCard = (props: projectsCardProps) => {
  return (
    <Card className="bg-[#242424] rounded-xl border-2 border-[#242424] w-full flex flex-col md:flex-row md:p-5 justify-between ">
      <CardHeader className="gap-3 md:w-full">
        <CardTitle className="h3-bold">{props.title}</CardTitle>
        <CardDescription
          className="text-[#E9E9E9]
        "
        >
          {props.description}
        </CardDescription>
        <div className="flex gap-4 text-3xl">{props.icons}</div>
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
          <Link
            href={props.url}
            className="font-light italic text-xs md:text-sm"
            target="_blank"
          >
            Repositorio de GitHub
          </Link>
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
