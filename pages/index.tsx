import {
  Page,
  Jumbotron,
  SpotlightCard,
  AnimatedBackground,
  DiamondView,
  ElevatedCircleImage,
} from "@/components";
import { useEffect, useState } from "react";
import { AnimatedComponent, Typewriter } from "react-style-text";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(document.body.classList.contains("dark"));
      console.log(darkMode);
    }
  }, []);

  return (
    <Page
      currentPage="Home"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore projects, skills, and insights into the world of software development.",
      }}
      className="min-h-screen"
    >
      <section className="relative flex flex-col md:flex-row items-center h-screen">
        {/* <section className="w-full md:w-1/4 bg-lime-500 h-full flex flex-col justify-center items-center" /> */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2
                  sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-1/2
                  md:top-1/2 md:left-20 md:translate-x-10 md:-translate-y-1/2
                  lg:top-1/2 lg:left-10 lg:translate-x-10 lg:-translate-y-1/2
                  xl:top-1/2 xl:left-32 xl:translate-x-10 xl:-translate-y-1/2
                  2xl:top-1/2 2xl:left-1/4 2xl:-translate-x-40 2xl:-translate-y-1/2"
        >
          <figure className="w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96">
            {" "}
            {/* Adjust based on actual size needed */}
            <ElevatedCircleImage
              src="/images/Dada.jpg"
              alt="Photo of Andrew Edwards"
              fill
            />
          </figure>
        </div>
        {/* <AnimatedBackground /> */}

        <section className="w-full md:w-3/4 bg-none md:flex md:flex-col md:justify-end md:items-end p-4 min-h-[50vh] pr-24">
          <section className="dark:text-white mt-48">
            <AnimatedComponent
              animationname="fadeInFromTop"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <h1 className="font-header mb-4 text-xl sm:text-5xl">
                Andrew Edwards
              </h1>
            </AnimatedComponent>
            <AnimatedComponent
              animationname="fadeIn"
              iteration={1}
              duration="2s"
              delay="0s"
              timing="ease-in-out"
            >
              <h2 className="font-extra mb-4 text-2xl text-lime-600 dark:text-lime-300">
                Software Engineer
              </h2>
            </AnimatedComponent>
            <AnimatedComponent
              animationname="fadeInFromBottom"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <h3 className="font-lobster text-2xl">
                <Typewriter
                  datatext={[
                    "Building Solutions",
                    "Creating Solutions",
                    "Developing Solutions",
                  ]}
                  cursorcolor="lime"
                  typingspeed={100}
                />
              </h3>
            </AnimatedComponent>
            <AnimatedComponent
              animationname="fadeInFromBottom"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <button
                className={`mr-3 text-black hover:text-black dark:text-white dark:hover:text-white rounded-2xl font-subheader text-sm lg:text-md 2xl:text-xl border border-lime-500 bg-transparent shadow-sm group px-4 py-1 hover:scale-105 mt-6 `}
              >
                Doanload Resume
              </button>
              <button
                className={`text-black hover:text-black dark:text-white dark:hover:text-white rounded-2xl font-subheader text-sm lg:text-md 2xl:text-xl border border-lime-500 bg-transparent shadow-sm group px-4 py-1 hover:scale-105 mt-6`}
              >
                Contact Me
              </button>
            </AnimatedComponent>
          </section>
        </section>
      </section>
    </Page>
  );
}
