import { Page, Jumbotron } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedComponent } from "react-style-text";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [initialAnimationFinished, setInitialAnimationFinished] =
    useState(false);

  return (
    <Page
      currentPage="Home"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore projects, skills, and insights into the world of software development.",
      }}
    >
      <section className="w-full">
        {/* <Jumbotron /> */}
        <section className="flex flex-col text-6xl">
          <AnimatedComponent
            animationname="slideInFromLeft"
            duration="1s"
            timing="ease-in-out"
            iteration={1}
          >
            <h1 className="mt-28 dark:text-white font-header ml-4 cursor-default flex">
              {/* {"Hi, I'm Andrew.".split(" ").map((word, i) => (
                <AnimatedComponent
                  key={word}
                  className={``}
                  animationname="flipIn"
                  duration="1s"
                  timing="ease-in-out"
                  iteration={1}
                  delay={`${i + 1}s`}
                >
                  {word}&nbsp;
                </AnimatedComponent>
              ))} */}
              Hi, I'm Andrew.
            </h1>
          </AnimatedComponent>
          <article className="flex flex-row max-w-[50vw] mt-10 mb-40">
            <p className="text-wrap text-2xl dark:text-white mb-8 mt-2 font-body ml-4">
              I&apos;m a software engineer with a passion for building a wide
              range of applications. From native mobile to Flutter, web, and
              backend servers, I&apos;ve got you covered.
            </p>
          </article>
        </section>
      </section>
    </Page>
  );
}
