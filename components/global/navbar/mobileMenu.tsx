import Link from "next/link";
import React, { useState, useEffect } from "react";
import { routes } from "../../../data/global";
import { HiOutlineX } from "react-icons/hi";
import { RiMenu3Line } from "react-icons/ri";
import { Name } from "./name";
import Toggle from "react-toggle";

interface MobileMenuProps {
  currentPage: any; // Replace 'any' with the type of currentPage
  darkModeHandle: () => void;
  darkModeValue: boolean;
}

export const MobileMenu = ({
  currentPage,
  darkModeHandle,
  darkModeValue,
}: MobileMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("");

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  const handleClick = () => {
    setShowMenu(!showMenu);
    handleAnimation();
    console.log(currentAnimation);
  };

  const handleAnimation = () => {
    showMenu
      ? setCurrentAnimation("animate-slide-out")
      : setCurrentAnimation("animate-slide-in");
  };

  const handleOutsideClick = (e: any) => {
    if (e.target.classList.contains("ae-nav")) {
      setShowMenu(false);
    }
  };

  return (
    <>
      <Name />
      {/* lets use tailwindcss to make a nice animation for this switching from HiOutlineX to RiMenu3Line */}
      <Toggle
        defaultChecked={darkModeValue}
        icons={{
          checked: null,
          unchecked: null,
        }}
        onChange={darkModeHandle}
        height={50}
        className={`dark-toggle`}
        data-tooltip-id="dark-mode"
        data-tooltip-content="Toggle dark mode"
      />
      <button
        className="mr-4 text-3xl transition-transform  duration-1000 transform ease-in-out"
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
        className={`list-none inline-block fixed right-0 top-16 px-5 font-header bg-transparent transition-all border-2 border-black transform duration-1000 py-10 shadow-2xl ${currentAnimation} ${
          showMenu ? `block` : `hidden`
        } `}
      >
        {/* // use position not mt */}
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`mr-8 text-2xl hover:border-gray-300 transition-all duration-700 hover:duration-100 hover:scale-105 h-10 p-1 align-center
                ${
                  currentPage === item.title
                    ? "text-lime-500  hover:text-white border-b border-black dark:border-white"
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
