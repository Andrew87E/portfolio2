import Link from "next/link";
import { routes } from "../../../data/global";
import { Name } from "./name";
import { FiSun, FiMoon } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import { firaCode, glory } from "../fonts/fonts";

interface NavbarProps {
  currentPage: any; // TODO: Replace 'any' with the type of currentPage
  darkModeHandle: any;
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
      <ul className="inline-flex mr-4 flex-wrap text-lg mt-4 lg:text-xl 2xl:text-3xl bg-lightbg dark:bg-darkbg">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              // align everything in the center/middle
              className={`mr-3 transition-all duration-700 hover:scale-105 ${
                glory.className
              } ${
                currentPage === item.title
                  ? `text-green-700 dark:text-lime-500 hover:text-lime-800 hover:animate-pulse`
                  : `opacity-70 hover:opacity-100 transition-opacity dark:text-white hover:text-white hover:border-gray-300 hover:duration-100 `
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
        <li className={`transition-all duration-700`}>
          <button
            className={`rounded-full shadow-2xl border-2 hover:animate-pulse border-black dark:border-white uppercase hover:scale-105 hover:border-green-500 dark:hover:border-green-500 focus:outline-none focus:ring-0 transition ease-in-out 2xl:w-8 2xl:h-8 p-1`}
            onClick={darkModeHandle}
            data-tooltip-id="dark-mode"
            data-tooltip-content="Toggle dark mode"
          >
            {darkModeValue ? (
              <FiSun className="text-yellow-500" size={20} />
            ) : (
              <FiMoon className="text-black" size={20} />
            )}
          </button>
          {/* <Tooltip id="dark-mode" place="bottom" /> */}
        </li>
      </ul>
    </>
  );
};
