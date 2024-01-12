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
      {currentPage == "Home" ? <section /> : <Name />}
      <ul className="inline-flex mr-4 flex-wrap mt-4 text-md lg:text-lg 2xl:text-2xl">
        <li className={`transition-all duration-700 mr-4`}>
          <button
            className={`rounded-full hover:animate-pulse hover:scale-105 focus:outline-none focus:ring-0 transition ease-in-out`}
            onClick={darkModeHandle}
            data-tooltip-id="dark-mode"
            data-tooltip-content="Toggle dark mode"
          >
            {darkModeValue ? (
              <FiSun className="text-yellow-500" size={30} />
            ) : (
              <FiMoon className="fill-slate-400" size={30} />
            )}
          </button>
          {/* <Tooltip id="dark-mode" place="bottom" /> */}
        </li>
        {routes.map((item, index) => {
          if (item.title === "Contact") return;

          return (
            <li
              key={index}
              // align everything in the center/middle
              className={`mr-3 transition-all duration-700 hover:scale-105 ${
                glory.className
              } ${
                currentPage === item.title
                  ? `text-green-700 dark:text-lime-500 hover:text-lime-800 hover:animate-pulse`
                  : `opacity-90 hover:opacity-100 transition-opacity dark:text-white hover:text-white hover:border-gray-300 hover:duration-100 `
              }`}
            >
              <Link href={item.path} rel="canonical">
                {item.title}
              </Link>
            </li>
          );
        })}
        {currentPage === "Contact" ? null : (
          <li className={`transition-all duration-700 mr-4 `}>
            <Link href="/contact" rel="canonical">
              <button
                className={`rounded-2xl font-subheader text-sm lg:text-md 2xl:text-xl bg-gradient-to-l from-green-700 to-green-400 hover:bg-gradient-to-r hover:bg-blue500 shadow-sm group px-4 py-1 hover:scale-105 text-white hover:text-white`}
              >
                Contact Me
              </button>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};
