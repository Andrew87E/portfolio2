import Image from "next/image";
import Link from "next/link";
import { glory } from "../fonts/fonts";

export const Name = () => {
  return (
    <div className="list-none font-bold text-lg">
      <Link href="/">
        <span className="flex items-center">
          <figure className="cursor-pointer transform hover:scale-75 transition-transform duration-800 bg-transparent mt-1 animate-spin">
            <Image
              src="/icons/portfolio-logo.svg"
              width="70"
              height="40"
              alt="That's a me!"
            />
          </figure>
          {"Andrew".split("").map((letter, index) => {
            return (
              <span
                key={index}
                className={`cursor-pointer transition-all duration-700 hover:duration-100 hover:scale-125 hover:translate-y-1 hover:text-lime-500 opacity-70 dark:text-white text-xl lg:text-2xl 2xl:text-4xl hover:animate-pulse ${glory.className}`}
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
