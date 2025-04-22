import React, { useState } from "react";
import { Project } from "@/data/projects";
import { VscArrowCircleRight } from "react-icons/vsc";
import { VscArrowCircleLeft } from "react-icons/vsc";

// Define a single Carousel item component
const CarouselItem = ({
  img,
  project,
  desc,
  github,
  deploy,
  alt,
  badges,
  children,
}: Project) => (
  <div
    className="item relative w-200 h-300 bg-cover bg-center rounded-lg shadow-lg transition-all duration-700 ease-in-out"
    style={{ backgroundImage: `url(${img})` }}
    // alt={alt}
  >
    <div className="content absolute top-1/2 left-12 -translate-y-1/2 text-white text-shadow">
      <h2 className="title text-uppercase">{project}</h2>
      <p className="description leading-7 my-4">{desc}</p>
      <div>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white rounded px-3 py-2 cursor-pointer mr-2"
          >
            GitHub
          </a>
        )}
        {deploy.url && (
          <a
            href={deploy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white rounded px-3 py-2 cursor-pointer"
          >
            Deploy
          </a>
        )}
      </div>
      {children}
    </div>
  </div>
);

// Main Carousel component
export const Carousel = ({ projects }: { projects: Project[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="relative w-full h-full shadow-lg">
      <ul className="slider flex absolute inset-0">
        {projects.map((project, index) => (
          <CarouselItem key={index} {...project} />
        ))}
      </ul>
      <nav className="nav absolute bottom-8 left-1/2 -translate-x-1/2 z-10 select-none">
        <VscArrowCircleLeft
          className="btn bg-white/50 text-black/70 border-black/60 m-1 p-3 rounded-full cursor-pointer hover:bg-white/30"
          name="arrow-back-outline"
          onClick={prev}
        />
        <VscArrowCircleRight
          className="btn bg-white/50 text-black/70 border-black/60 m-1 p-3 rounded-full cursor-pointer hover:bg-white/30"
          name="arrow-forward-outline"
          onClick={next}
        />
      </nav>
    </div>
  );
};
