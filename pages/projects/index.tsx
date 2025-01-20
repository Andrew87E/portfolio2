import { Page, SpotlightCard } from "@/components";
import { AnimatedComponent } from "react-style-text";
import { FloatingIcons } from "@/components";
import { projects, Project } from "@/data/projects";

const Projects = () => {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore projects, skills, and insights into the world of software development.",
      }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background Icons */}
      <FloatingIcons />

      <section className="py-12 relative z-10">
        <AnimatedComponent
          animationname="fadeInFromTop"
          iteration={1}
          duration="1s"
          delay="0s"
          timing="ease-in-out"
        >
          <div className="relative text-center">
            <h1 className="font-header text-5xl mb-4 text-black dark:text-white inline-block relative">
              Featured Projects
              <div className="absolute -inset-x-8 h-[2px] bottom-0 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
              <div className="absolute -right-4 top-0 h-16 w-[2px] bg-gradient-to-b from-lime-500/20 to-transparent" />
            </h1>

            <p className="font-subheader text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 relative">
              <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                Crafting Digital Solutions
              </span>
              <br />
              <span className="text-base mt-2 inline-block">
                A showcase of innovative applications and technical achievements
              </span>
            </p>
          </div>
        </AnimatedComponent>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {projects.map((project: Project, i: number) => (
              <AnimatedComponent
                key={i}
                animationname="fadeIn"
                iteration={1}
                duration="1s"
                delay={`${i * 0.2}s`}
                timing="ease-in-out"
              >
                <SpotlightCard
                  title={project.project}
                  body={project.desc}
                  img={{
                    src: project.img,
                    alt: project.alt,
                  }}
                  badges={project.badges}
                  link={project.deploy.url ?? "#"}
                  className="w-full h-full"
                />
              </AnimatedComponent>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Projects;
