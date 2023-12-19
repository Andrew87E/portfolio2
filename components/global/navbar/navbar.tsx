import Link from "next/link";
import { routes } from "../../../data/global";
import { Name } from "./name";
import { FiSun, FiMoon } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

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
      <ul className="nav-menu inline-flex mr-4 flex-wrap text-lg lg:text-xl 2xl:text-2xl bg-lightbg dark:bg-darkbg">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`mr-5 transition-all duration-700 hover:duration-100 hover:scale-125 mt-4 font-header ${
                currentPage === item.title
                  ? "text-green-700 dark:text-lime-500 hover:text-white border-b border-black dark:border-white"
                  : "opacity-70 hover:opacity-100 transition-opacity dark:text-white hover:text-white hover:border-gray-300"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
        <li className={` transition-all duration-700`}>
          <button
            className={`rounded-full shadow-2xl border-2 border-black dark:border-white uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition ease-in-out w-9 h-9 mt-4`}
            onClick={darkModeHandle}
            data-tooltip-id="dark-mode"
            data-tooltip-content="Toggle dark mode"
          >
            {darkModeValue ? (
              <FiSun className="w-6 h-full m-auto ae-links text-yellow-500" />
            ) : (
              <FiMoon className="w-6 h-full m-auto ae-links text-black " />
            )}
          </button>
          <Tooltip id="dark-mode" place="bottom" />
        </li>
      </ul>
    </>
  );
};
