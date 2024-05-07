import { Page, Jumbotron, SpotlightCard } from "@/components";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { Carousel } from "@/components/carousel";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore projects, skills, and insights into the world of software development.",
      }}
    >
      <section className="w-full">
        <div className="h-96 p-6">
          <section>
            <div className="flex justify-center mt-10">
              <div className="w-1/2">
                <h1 className="text-4xl font-bold text-center text-gray-800">
                  Projects
                </h1>
                <p className="text-center text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel ex id elit aliquet lacinia. Sed id ipsum et purus
                  malesuada.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="">
        {/* <div className="mt-96"></div> */}

        {projects.map((project: Project, i: number) => (
          <SpotlightCard
            key={i}
            title={project.project}
            body={project.desc}
            img={{
              src: project.img,
              alt: project.alt,
            }}
            badges={project.badges}
            link={project.deploy.url ?? "#"}
            className="mx-20"
          />
        ))}
      </section>
    </Page>
  );
}
