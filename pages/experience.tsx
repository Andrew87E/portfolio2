import { Timeline, Page } from "@/components";
import React from "react";

type Props = {};

const Experience = (props: Props) => {
  return (
    <Page
      currentPage="Experience"
      meta={{
        title:
          "Andrew Edwards - Software Engineer | Building Innovative Solutions",
        desc: "Welcome to the portfolio of Andrew Edwards, a software engineer specializing in creating innovative solutions. Explore projects, skills, and insights into the world of software development.",
      }}
      className="min-h-screen"
    >
      <Timeline />
    </Page>
  );
};

export default Experience;
