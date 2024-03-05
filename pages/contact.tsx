import { Page, Jumbotron, SpotlightCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedComponent } from "react-style-text";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <Page
      currentPage="Contact"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore Contact, skills, and insights into the world of software development.",
      }}
    >
      <section className="w-full">
        {/* <div className="mt-96"></div> */}
        <div className="h-96 p-6">
          <SpotlightCard
            title="Testing"
            body="Occaecat labore magna deserunt eiusmod veniam reprehenderit cillum proident ut incididunt consequat culpa."
            link="/prof"
            img={{
              src: "/images/andrew.jpg",
              alt: "Andrew Edwards",
            }}
            badges={["Flutter", "Dart", "Firebase"]}
          />
        </div>
        <div className="mt-96"></div>
      </section>
    </Page>
  );
}
