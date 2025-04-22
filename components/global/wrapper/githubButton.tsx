import React from "react";
import { FaGithub } from "react-icons/fa";

export const Github = () => {
  return (
    <div className="fixed z-50 -right-44 bottom-32 mb-4 rotate-90">
      <section className="inline-flex items-center w-full flex-shrink -space-x-16">
        <a
          className="font-bold  text-xs text-black dark:text-white px-4 py-2 cursor-pointer inline-flex items-center w-full flex-shrink transition-all transform duration-1000 hover:scale-105"
          target="_blank"
          rel="nooreferrer noreferrer"
          href="https://github.com/Andrew87E/portfolio2"
        >
          <FaGithub className="mr-4 -rotate-90" size={25} />

          {"View Source Code".split(" ").map((letter, index) => (
            <span
              key={index}
              className="transition-all transform duration-1000 md:text-md text-sm"
            >
              {letter} 
            </span>
          ))}
        </a>

        <span className="h-[2px] bg-black dark:bg-white w-64 transition-all transform duration-1000"></span>
      </section>
    </div>
  );
};
