import {
  Page,
  Jumbotron,
  SpotlightCard,
  SkillTagCloud,
  StaticSkills,
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <Page
      currentPage="Skills"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore Skills, skills, and insights into the world of software development.",
      }}
    >
      <section className="w-full h-full -mt-10 p-8">
        <button
          onClick={() => setStaticSkills(!staticSkills)}
          className="fixed top-20 right-0 z-50 p-4 m-4 bg-gray-800 text-white rounded-lg"
        >
          View {staticSkills ? "Cloud" : "Static"}
        </button>
        <div className="">
          {staticSkills ? (
            <StaticSkills />
          ) : (
            <section className="container">
              <SkillTagCloud
                height={width / 2}
                width={width}
                // radius={width / 40}
              />
            </section>
          )}
        </div>
      </section>
    </Page>
  );
}
