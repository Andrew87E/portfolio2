import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface GithubProps {
  darkMode: boolean;
}

export const Github = ({ darkMode }: GithubProps) => {
  return (
    <div className="fixed right-2 bottom-2  md:bottom-2  w-36 md:w-64 md:right-2 text-center sm:text-right sm:-mt-12 z-50">
      <a
        className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink hover:scale-90 border-lime-500 text-xs text-black dark:text-white border px-4 py-2 rounded-3xl cursor-pointer"
        href="https://github.com/Andrew87E/Edwards.codes"
        target="_blank"
        rel="nooreferrer noreferrer"
      >
        <FaGithub width={16} height={16} />
        <span className="ml-2">View Source Code </span>
      </a>
    </div>
  );
};
