import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export const Github = () => {
  return (
    <div className="fixed -right-10 bottom-2 sm:right-0  md:bottom-2  w-36 md:w-64 md:right-2 text-center sm:text-right sm:-mt-12 z-50">
      <a
        className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink hover:scale-90 border-green-800 dark:border-lime-500 text-xs text-black dark:text-white border px-4 py-2 rounded-3xl cursor-pointer"
        target="_blank"
        rel="nooreferrer noreferrer"
        href="https://github.com/Andrew87E/portfolio2"
      >
        <FaGithub width={16} height={16} className="shadow-xl" />
        <span className="ml-2 hidden md:block">View Source Code </span>
      </a>
    </div>
  );
};
