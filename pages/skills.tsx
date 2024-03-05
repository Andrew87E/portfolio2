import { Page, Jumbotron, SpotlightCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedComponent } from "react-style-text";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Skills() {
  return (
    <Page
      currentPage="Skills"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore Skills, skills, and insights into the world of software development.",
      }}
    >
      <section className="w-full">
        {/* <div className="mt-96"></div> */}
        <div className="h-96 p-6">
          <section>
            <div className="flex justify-center mt-10">
              <div className="w-1/2">
                <h1 className="text-4xl font-bold text-center text-gray-800">
                  Skills
                </h1>
                <p className="text-center text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel ex id elit aliquet lacinia. Sed id ipsum et purus
                  malesuada.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="mt-96"></div> */}
      </section>
    </Page>
  );
}
