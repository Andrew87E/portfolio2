import React, { useEffect, useState } from "react";
import { GoMail } from "react-icons/go";
import { AiOutlineFilePdf, AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

export const Footer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="text-center bg-transparent dark:bg-gray-800 text-white dark:text-black  left-0 bottom-0 right-0 relative">
      <div className="justify-center px-6 pt-6">
        <div className="flex justify-center mb-1">
          {isMounted && (
            <>
              <a
                href="mailto: Andrew@Edwards.codes"
                type="button"
                className="rounded-full border-2 border-white text-white dark:text-black leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center"
                rel="noopener noreferrer"
                target="_blank"
                id="email"
                data-tooltip-id="email"
                data-tooltip-content="Send me an e-mail"
                data-tooltip-variant={`${
                  document.body.classList.contains("dark") ? "light" : "dark"
                }`}
              >
                <GoMail className="w-4 h-full mx-auto ae-links" color="lime" />
              </a>
              <Tooltip id="email" place="top" />
            </>
          )}
          {isMounted && (
            <>
              <a
                href="https://drive.google.com/file/d/1V-FB3ul7itm1nOFTeuD4GIbM540A16Q2/view?usp=share_link"
                type="button"
                className="rounded-full border-2 border-white text-white dark:text-black leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center"
                rel="noopener noreferrer"
                target="_blank"
                id="resume"
                data-tooltip-id="resume"
                data-tooltip-content="Download my resume"
                data-tooltip-variant={`${
                  document.body.classList.contains("dark") ? "light" : "dark"
                }`}
              >
                <AiOutlineFilePdf
                  className="w-4 h-full mx-auto ae-links"
                  color="lime"
                />
              </a>
              <Tooltip id="resume" place="top" />
            </>
          )}
          {isMounted && (
            <>
              <a
                href="https://www.linkedin.com/in/andrew-edwards-34a927a5/"
                type="button"
                className="rounded-full border-2 border-white text-white dark:text-black leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center"
                rel="noopener noreferrer"
                target="_blank"
                id="linkedin"
                data-tooltip-id="linkedin"
                data-tooltip-content="View My Linkedin Profile"
                data-tooltip-variant={`${
                  document.body.classList.contains("dark") ? "light" : "dark"
                }`}
              >
                <BsLinkedin
                  className="w-4 h-full mx-auto ae-links"
                  color="lime"
                />
              </a>
              <Tooltip id="linkedin" place="top" />
            </>
          )}
          {isMounted && (
            <>
              <a
                href="https://github.com/andrew87e"
                type="button"
                className="rounded-full border-2 border-white text-white dark:text-black leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center"
                rel="noopener noreferrer"
                target="_blank"
                id="github"
                data-tooltip-id="github"
                data-tooltip-content="View my Github"
                data-tooltip-variant={`${
                  document.body.classList.contains("dark") ? "light" : "dark"
                }`}
              >
                <AiFillGithub
                  className="w-4 h-full mx-auto ae-links"
                  color="lime"
                />
              </a>
              <Tooltip id="github" place="top" />
            </>
          )}
        </div>
      </div>
      {isMounted && (
        <div className="w-44 mx-auto">
          <a
            href="https://www.buymeacoffee.com/andrew87e"
            target="_blank"
            rel="noopener noreferrer"
            // this is taking up full width of the footer and I don't know why yet
            className="m-1 justify-center h-12"
            id="coffee"
            data-tooltip-id="coffee"
            data-tooltip-content="Buy me a coffee"
            data-tooltip-variant={`${
              document.body.classList.contains("dark") ? "light" : "dark"
            }`}
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              className="w-full h-12 mx-auto hover:scale-110 transition duration-150 ease-in-out"
            />
          </a>
          <Tooltip id="coffee" place="top" />
        </div>
      )}
      <div className="text-center p-4">
        © {year}
        <a
          className="text-black dark:text-white hover:text-green-500"
          href="https://github.com/andrew87e"
        >
          {" "}
          {"Andrew Edwards".split("").map((letter, index) => {
            return (
              <span
                key={index}
                className="font-mono transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white dark:text-black dark:hover:text-lime-500"
              >
                {letter}
              </span>
            );
          })}
        </a>
      </div>
    </footer>
  );
};
