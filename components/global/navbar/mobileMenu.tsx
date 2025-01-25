import Link from "next/link";
import React, { useState } from "react";
import { routes } from "../../../data/global";
import { HiOutlineX } from "react-icons/hi";
import { RiMenu3Line } from "react-icons/ri";
import { Name } from "./name";
import Toggle from "react-toggle";

interface MobileMenuProps {
  currentPage: any; // TODO: Replace 'any' with the type of currentPage
  darkModeHandle: any;
  darkModeValue: boolean;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({
  currentPage,
  darkModeHandle,
  darkModeValue,
  showMenu,
  setShowMenu,
}: MobileMenuProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("");

  const handleClick = () => {
    handleAnimation();
    setIsAnimating(true);
    setShowMenu(!showMenu);
  };

  const handleAnimation = () => {
    showMenu
      ? setCurrentAnimation("animate-slide-out")
      : setCurrentAnimation("animate-slide-in");
  };

  return (
    <>
      <Name size="medium" />
      <div className="w-36"></div>
      <Toggle
        defaultChecked={darkModeValue}
        icons={{
          checked: null,
          unchecked: null,
        }}
        onChange={darkModeHandle}
        height={50}
        className={`dark-toggle mr-2`}
        data-tooltip-id="dark-mode"
        data-tooltip-content="Toggle dark mode"
      />
      <button
        className="mr-4 text-3xl transition-transform   duration-1000 transform ease-in-out"
        onClick={handleClick}
      >
        {showMenu ? (
          <HiOutlineX
            className="transition-transform duration-[2s] transform rotate-180"
            color="white"
          />
        ) : (
          <RiMenu3Line
            className="transition-transform duration-[2s] transform rotate-180"
            color="white"
          />
        )}
      </button>

      <ul
        onAnimationEnd={() => {
          setIsAnimating(false);
        }}
        className={`${currentAnimation} list-none inline-block fixed right-0 top-16 px-5 font-header bg-white dark:bg-black transition-all border-2 border-black transform duration-1000 py-10 shadow-2xl  ${
          showMenu ? "block" : isAnimating ? "block" : "hidden"
        } 
        `}
      >
        {/* // use position not mt */}
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`mr-8 text-2xl hover:border-gray-300 transition-all duration-700 hover:duration-100 hover:scale-105 h-10 p-1 align-center
                ${
                  currentPage === item.title
                    ? "text-green-700 dark:text-lime-500  hover:text-white border-b border-black dark:border-white"
                    : "opacity-70 hover:opacity-100 transition-opacity dark:text-white hover:text-lime-500"
                }`}
            >
              <Link href={item.path} onClick={handleClick}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
