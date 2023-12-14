import Link from "next/link";
import { routes } from "../../../data/global";
import { Name } from "./name";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import Toggle from "react-toggle";
import { PiSunBold } from "react-icons/pi";
import { RiMoonLine } from "react-icons/ri";
import React, { Dispatch, SetStateAction, useState } from "react";

interface NavbarProps {
  currentPage: any; // Replace 'any' with the type of currentPage
  darkModeHandle: () => void;
  darkModeValue: boolean;
}

export const Navbar = ({
  currentPage,
  darkModeHandle,
  darkModeValue,
}: NavbarProps) => {
  return (
    <>
      <Name />
      <ul className="nav-menu inline-flex mr-4 flex-wrap text-lg lg:text-xl 2xl:text-2xl">
        <li className={`mr-5 transition-all duration-700  mt-5`}>
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

          {/* <span>Custom icons</span> */}
          <Tooltip id="dark-mode" place="bottom" />
        </li>
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`mr-5 transition-all duration-700 hover:duration-100 hover:scale-125 mt-4 font-header ${
                currentPage === item.title
                  ? "text-transparent-full hover:text-white"
                  : "opacity-70 hover:opacity-100 transition-opacity text-white hover:text-white hover:border-gray-300"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
