import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { routes } from "../../../data/global";
import { Name } from "./name";
import Image from "next/image";
import Toggle from "react-toggle";
import { PiSunBold } from "react-icons/pi";
import { RiMoonLine } from "react-icons/ri";

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
      <ul className="nav-menu inline-flex mr-4 flex-wrap ae-nav-links text-lg lg:text-xl 2xl:text-2xl">
        <li className={`mr-5 transition-all duration-700  mt-5`}>
          <Toggle
            defaultChecked={darkModeValue}
            icons={{
              checked: null,
              unchecked: null,
            }}
            onChange={darkModeHandle}
            height={50}
            className={`dark-toggle `}
          />
          {/* <span>Custom icons</span> */}
        </li>
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`mr-5 transition-all duration-700 hover:duration-100 hover:scale-125 mt-4 ${
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
