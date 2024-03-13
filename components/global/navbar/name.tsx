import Image from "next/image";
import Link from "next/link";
import { arizonia } from "../fonts/fonts";

export const Name = () => {
  return (
    <div className="list-none text-lg ml-4">
      <Link href="/" rel="canonical">
        <span className="flex items-center">
          {/* <Image
            src="/icons/alogo.png"
            width="70"
            height="40"
            alt="That's a me!"
            className="-mr-4 hover:duration-100 hover:scale-125 hover:translate-y-1 hover:animate-pulse"
          /> */}
          {"Andrew".split("").map((letter, index) => {
            return (
              <span
                key={index}
                className={`cursor-pointer transition-all duration-700 hover:duration-100 hover:scale-125 hover:translate-y-1 hover:text-lime-500 opacity-90 dark:text-white text-xl lg:text-2xl 2xl:text-4xl hover:animate-pulse font-lobster ${arizonia.className}`}
              >
                {letter}
              </span>
            );
          })}
        </span>
      </Link>
    </div>
  );
};
