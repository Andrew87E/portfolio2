import { Page, ElevatedCircleImage } from "@/components";
import { AnimatedComponent, Typewriter } from "react-style-text";
import { Code, Database, Download, Mail, Terminal } from "lucide-react";
import { FloatingIcons } from "@/components";

const Home = () => {
  return (
    <Page
      currentPage="Home"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore projects, skills, and insights into the world of software development.",
      }}
      className="min-h-screen relative overflow-hidden"
    >
      <FloatingIcons />

      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-20 left-10 animate-float-slow ">
          <Code size={40} color="#82fa5f" opacity={0.4} />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Database size={40} color="#82fa5f" opacity={0.4} />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float">
          <Terminal size={40} color="#82fa5f" opacity={0.4} />
        </div>
        {/* Add more positioned icons */}
      </div>

      <section className="relative flex flex-col md:flex-row items-center h-screen">
        {/* Image Container */}
        <AnimatedComponent
          animationname="fadeIn"
          iteration={1}
          duration="1s"
          delay="0s"
          timing="ease-in-out"
        >
          <div
            className="
          relative w-full flex justify-center mt-10 
          md:justify-start
          md:absolute md:w-1/2
          pt-8 md:pt-0
          md:top-60 md:left-20
          lg:left-10
          xl:left-32
          2xl:left-1/4
          "
          >
            <figure
              className="
            relative w-48 h-48
            md:w-64 md:h-64 
            lg:w-96 lg:h-96
            "
            >
              <ElevatedCircleImage
                src="/images/Dada_Color.jpg"
                alt="Photo of Andrew Edwards"
                fill
              />
            </figure>
          </div>
        </AnimatedComponent>

        {/* Content Section */}
        <section
          className="
          w-full px-6 md:px-4 
          md:flex md:flex-col md:justify-end md:items-end 
          min-h-[50vh] 
          md:pr-24     
        "
        >
          <section
            className="
            dark:text-white 
            mt-80 md:mt-48
            flex flex-col
            items-start md:items-end
            xl:mr-12 lg:mr-8
            relative
          "
          >
            <AnimatedComponent
              animationname="fadeInFromTop"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <div className="relative">
                <h1 className="font-header mb-1 text-4xl sm:text-5xl relative z-10">
                  Andrew Edwards
                </h1>
                <div className="absolute -left-10 h-[2px] w-[27.5rem] bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
                <div className="absolute -right-4 top-0 h-16 w-[2px] bg-gradient-to-b from-lime-500/20 to-transparent" />
              </div>
            </AnimatedComponent>

            <AnimatedComponent
              animationname="fadeIn"
              iteration={1}
              duration="2s"
              delay="0s"
              timing="ease-in-out"
            >
              <h2 className="font-extra mb-4 mt-4 text-4xl bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
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
              <h3 className="font-lobster text-2xl relative group">
                <Typewriter
                  datatext={[
                    "Building Enterprise Solutions",
                    "Leading API Development",
                    "Crafting Mobile Apps",
                    "Optimizing Performance",
                    "Architecting Infrastructure",
                    "Delivering Innovation",
                  ]}
                  cursorcolor="lime"
                  typingspeed={100}
                />
                <div className="absolute -inset-x-6 -inset-y-2 bg-lime-500/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </h3>
            </AnimatedComponent>

            <AnimatedComponent
              animationname="fadeInFromBottom"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <div className="flex gap-4 mt-6">
                <button
                  className="
                  group
                  relative overflow-hidden
                  text-black dark:text-white
                  rounded-2xl font-subheader 
                  text-sm lg:text-md 2xl:text-xl 
                  border border-lime-500 
                  px-4 py-2
                  transition-all duration-300
                  hover:border-lime-400
                  flex items-center gap-2
                "
                >
                  <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  Download Resume
                  <div className="absolute inset-0 bg-lime-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>

                <button
                  className="
                  group
                  relative overflow-hidden
                  text-black dark:text-white
                  rounded-2xl font-subheader 
                  text-sm lg:text-md 2xl:text-xl 
                  border border-lime-500 
                  px-4 py-2
                  transition-all duration-300
                  hover:border-lime-400
                  flex items-center gap-2
                "
                >
                  <Mail className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  Contact Me
                  <div className="absolute inset-0 bg-lime-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </AnimatedComponent>
          </section>
        </section>
      </section>
    </Page>
  );
};

export default Home;
