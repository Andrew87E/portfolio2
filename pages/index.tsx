import {
  Page,
  Jumbotron,
  SpotlightCard,
  AnimatedBackground,
  DiamondView,
  ElevatedCircleImage,
} from "@/components";
import { AnimatedComponent } from "react-style-text";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore projects, skills, and insights into the world of software development.",
      }}
      className=""
    >
      <section className="relative flex flex-col md:flex-row h-screen items-center">
        <section className="w-full md:w-1/4 bg-lime-500 flex flex-col justify-center items-center p-4 min-h-[20vh] md:min-h-screen"></section>

        {/* Manually adjust positioning for each breakpoint */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2
                  sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-1/2
                  md:top-1/2 md:left-20 md:translate-x-10 md:-translate-y-1/2
                  lg:top-1/2 lg:left-10 lg:translate-x-10 lg:-translate-y-1/2
                  xl:top-1/2 xl:left-32 xl:translate-x-10 xl:-translate-y-1/2
                  2xl:top-1/2 2xl:left-40 2xl:translate-x-20 2xl:-translate-y-1/2"
        >
          <figure className="w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96">
            {" "}
            {/* Adjust based on actual size needed */}
            <ElevatedCircleImage
              src="https://avatars.githubusercontent.com/u/106359255?v=4"
              alt="Photo of Andrew Edwards"
              fill
            />
          </figure>
        </div>

        <section className="w-full md:w-4/6 bg-none flex flex-col justify-center items-center p-4 min-h-[50vh] md:min-h-0 mt-48">
          <section className="text-white ">
            <AnimatedComponent
              animationname="fadeInFromTop"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <h1 className="font-header text-6xl mb-4">Andrew Edwards</h1>
            </AnimatedComponent>
            <AnimatedComponent
              animationname="fadeIn"
              iteration={1}
              duration="2s"
              delay="0s"
              timing="ease-in-out"
            >
              <p className="text-4xl font-extra mb-4">Software Engineer</p>
            </AnimatedComponent>
            <AnimatedComponent
              animationname="fadeInFromBottom"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <p className="text-2xl font-subheader mb-6">
                Building Innovative Solutions
              </p>
            </AnimatedComponent>
            <AnimatedComponent
              animationname="fadeInFromBottom"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <button
                className={`text-black hover:text-black dark:text-white dark:hover:text-white rounded-2xl font-subheader text-sm lg:text-md 2xl:text-xl border border-lime-500 bg-transparent shadow-sm group px-4 py-1 -mt-2 hover:scale-105`}
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
