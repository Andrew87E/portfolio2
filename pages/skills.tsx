import {
  Page,
  Jumbotron,
  SpotlightCard,
  SkillTagCloud,
  StaticSkills,
  FloatingIcons,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedComponent } from "react-style-text";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
export default function Skills() {
  const [width, setWidth] = useState<number>(375);
  const [staticSkills, setStaticSkills] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTransition = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setStaticSkills(!staticSkills);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // Match this with animation duration
  };

  return (
    <Page
      currentPage="Skills"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore Skills, skills, and insights into the world of software development.",
      }}
    >
      <FloatingIcons />
      <section className="w-full h-full p-12">
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <div className="mb-10">
            {staticSkills ? (
              <section
                className={`w-full ${
                  isTransitioning ? "animate-spread-grid" : ""
                }`}
                onClick={handleTransition}
              >
                <StaticSkills />
              </section>
            ) : (
              <section
                className={`w-full ${
                  isTransitioning ? "animate-gather-cloud" : ""
                }`}
                onClick={handleTransition}
              >
                <SkillTagCloud height={width / 2} width={width} />
              </section>
            )}
          </div>
        </div>
      </section>
    </Page>
  );
}
