import { Timeline, Page, FloatingIcons } from "@/components";
import { AnimatedComponent } from "react-style-text";

const Experience = () => {
  return (
    <Page
      currentPage="Experience"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore projects, skills, and insights into the world of software development.",
      }}
      className="min-h-screen relative overflow-hidden"
    >
      <FloatingIcons />

      <div className="py-12 relative z-10">
        <div className="relative text-center">
          <AnimatedComponent
            animationname="slideInFromTop"
            iteration={1}
            duration="1s"
            delay="0s"
            timing="ease-in-out"
          >
            <h1 className="font-header text-5xl mb-4 text-black dark:text-white inline-block relative">
              Professional Journey
              <div className="absolute -inset-x-8 h-[2px] -bottom-2 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
              <div className="absolute -right-4 top-0 h-16 w-[2px] bg-gradient-to-b from-lime-500/20 to-transparent" />
            </h1>
          </AnimatedComponent>

          <AnimatedComponent
            animationname="slideInFromBottom"
            iteration={1}
            duration="1s"
            delay="0s"
            timing="ease-in-out"
          >
            <p className="font-subheader text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 relative ">
              <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                From Military Precision to Software Innovation
              </span>
              <br />
              <span className="text-base mt-2 inline-block">
                A decade-long journey of building solutions and leading
                technical teams
              </span>
            </p>
          </AnimatedComponent>
        </div>

        <AnimatedComponent
          animationname="fadeInFromBottom"
          iteration={1}
          duration="1s"
          delay="0s"
          timing="ease-in"
        >
          <Timeline />
        </AnimatedComponent>
      </div>
    </Page>
  );
};

export default Experience;
