import React, { useEffect, useState } from "react";
import { GoMail } from "react-icons/go";
import { AiOutlineFilePdf, AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import FooterButton from "./footerbuttons";
import Link from "next/link";

export const Footer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // console.log("Footer mounted");
    setIsMounted(true);
  }, []);

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="text-center text-white dark:text-black  left-0 bottom-0 right-0 relative">
      <div className="justify-center px-6 pt-6">
        <div className="flex justify-center mb-1">
          {isMounted && (
            <FooterButton
              toltipContent="Send me an e-mail"
              toltipId="email"
              link="mailto: Andrew@Edwards.codes"
              icon={
                <GoMail className="w-4 h-full mx-auto ae-links text-black dark:text-lime-500" />
              }
            />
          )}
          {isMounted && (
            <FooterButton
              toltipContent="Download my Resume"
              toltipId="resume"
              link="/Andrew_Edwards_Resume.pdf"
              icon={
                <AiOutlineFilePdf className="w-4 h-full mx-auto ae-links text-black dark:text-lime-500" />
              }
            />
          )}
          {isMounted && (
            <FooterButton
              toltipContent="View my Linkedin"
              toltipId="linkedin"
              link="https://www.linkedin.com/in/andrew-edwards-34a927a5/"
              icon={
                <BsLinkedin className="w-4 h-full mx-auto ae-links text-black dark:text-lime-500" />
              }
            />
          )}
          {isMounted && (
            <FooterButton
              toltipContent="View my Github"
              toltipId="github"
              link="https://github.com/andrew87e"
              icon={
                <AiFillGithub className="w-4 h-full mx-auto ae-links text-black dark:text-lime-500" />
              }
            />
          )}
        </div>
      </div>
      {/* {isMounted && (
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
      )} */}
      <div className="text-center p-4 dark:text-white text-black">
        © {year}
        <Link
          className="text-black dark:text-white hover:text-green-500"
          href="https://github.com/andrew87e"
        >
          {" "}
          {"Andrew Edwards".split("").map((letter, index) => {
            return (
              <span
                key={index}
                className="font-mono transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 dark:text-white text-black dark:hover:text-lime-500"
              >
                {letter}
              </span>
            );
          })}
        </Link>
      </div>
    </footer>
  );
};
