import { Page, Jumbotron, SpotlightCard, ContactForm } from "@/components";
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
      <section className="w-full flex justify-center content-center h-[75vh] border border-lime-500">
        <AnimatedComponent
          animationname="fadeIn"
          duration="1s"
          delay="0s"
          
        >
          <ContactForm />
        </AnimatedComponent>
      </section>
    </Page>
  );
}
