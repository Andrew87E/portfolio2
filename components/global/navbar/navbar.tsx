import Link from "next/link";
import { routes } from "../../../data/global";
import { Name } from "./name";
import { glory } from "../fonts/fonts";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface NavbarProps {
  currentPage: any;
  darkModeHandle: any;
  darkModeValue: boolean;
}

export const Navbar = ({
  currentPage,
  darkModeHandle,
  darkModeValue,
}: NavbarProps) => {
  const [currentMoon, setCurrentMoon] = useState<number>(0);
  const [moonPhase, setMoonPhase] = useState<string>("");
  const [lastPull, setLastPull] = useState<number>(0);

  const moons = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌑"];

  const pullPhaseFromApi = async () => {
    try {
      const timeStamp = Math.floor(Date.now() / 1000);
      setLastPull(timeStamp);
      const res = await fetch(
        `https://api.farmsense.net/v2/moonphases/?d=${timeStamp}`
      );
      const data = await res.json();
      const phase = data[0].Phase;
      // console.log(phase);
      setMoonPhase(phase);

      switch (phase) {
        case "Waxing Crescent":
        case "First Quarter":
          setCurrentMoon(1);
          break;
        case "Waxing Gibbous":
          setCurrentMoon(2);
          break;
        case "Full Moon":
          setCurrentMoon(8);
          break;
        case "Waning Gibbous":
          setCurrentMoon(5);
          break;
        case "Last Quarter":
          setCurrentMoon(6);
          break;
        case "Waning Crescent":
          setCurrentMoon(7);
          break;
        default:
          setCurrentMoon(8);
          break;
      }
    } catch (error) {
      // console.log(error);
      setCurrentMoon(0);
    }
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      currentPage === "Home" &&
      lastPull + 86400 < Math.floor(Date.now() / 1000)
    ) {
      pullPhaseFromApi();
    }
  });

  return (
    <>
      {currentPage == "Home" ? <Name size="medium" /> : <Name size="medium" />}
      <ul className="inline-flex mr-4 flex-wrap mt-4 text-md lg:text-lg 2xl:text-2xl items-center">
        <li className={`transition-all duration-700 mr-4`}>
          <button
            className={`rounded-full hover:animate-spin-slow focus:outline-none focus:ring-0 transition ease-in-out`}
            onClick={darkModeHandle}
            data-tooltip-id="dark-mode"
            data-tooltip-content={`${darkModeValue ? `` : `Current Phase: ${moonPhase}`}`}
          >
            {darkModeValue ? (
              <span className="text-yellow-500">☀️</span>
            ) : (
              <span className="text-slate-400">{moons[currentMoon]}</span>
            )}
          </button>
        </li>
        {routes.map((item, index) => {
          if (item.title === "Contact") return;

          return (
            <li
              key={index}
              className={`mr-3 transition-all duration-700 hover:scale-105 ${
                glory.className
              } ${
                currentPage === item.title
                  ? `text-green-700 dark:text-lime-500 hover:text-lime-800 hover:animate-pulse`
                  : `opacity-90 hover:opacity-100 transition-opacity dark:text-white hover:text-white hover:border-gray-300 hover:duration-100`
              }`}
            >
              <Link href={item.path} rel="canonical">
                {item.title}
              </Link>
            </li>
          );
        })}
        {currentPage === "Contact" ? null : (
          <li className={`transition-all duration-700`}>
            <Link
              href="/contact"
              className="group inline-flex items-center"
              rel="canonical"
            >
              <span
                className={`inline-flex items-center text-black dark:text-white hover:scale-105 hover:text-lime-500 transition-all duration-300`}
              >
                Contact Me
                {/* <ArrowRight
                  className={`ml-1 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1 ${
                    darkModeValue
                      ? "text-lime-500 group-hover:text-white"
                      : "text-lime-600 group-hover:text-black"
                  }`}
                /> */}
              </span>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};
