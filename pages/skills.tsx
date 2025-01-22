import {
  Page,
  Jumbotron,
  SpotlightCard,
  SkillTagCloud,
  StaticSkills,
  FloatingIcons,
} from "@/components";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Skills() {
  const [width, setWidth] = useState<number>(375);

  // Technical skills categorization stays the same
  const skillCategories = {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    backend: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"],
    mobile: ["Flutter", "iOS Development", "SwiftUI", "React Native"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    cloud: ["AWS", "Azure", "Docker", "Kubernetes"],
    tools: ["Git", "CI/CD", "Jest", "Webpack", "Vite"],
  };

  const metaDescription =
    "Explore Andrew Edwards' comprehensive technical skillset spanning frontend development with React and TypeScript, " +
    "backend engineering with Node.js and Python, mobile development with Flutter and iOS, " +
    "and cloud architecture using AWS and Docker. Interactive visualization of software engineering expertise " +
    "developed through enterprise solutions and innovative projects.";

  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Andrew Edwards - Technical Skills and Expertise",
    description: metaDescription,
    author: {
      "@type": "Person",
      name: "Andrew Edwards",
      jobTitle: "Lead Software Engineer",
      url: "https://edwards.codes",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: Object.entries(skillCategories).flatMap(
        ([category, skills], categoryIndex) =>
          skills.map((skill, skillIndex) => ({
            "@type": "ListItem",
            position: categoryIndex * 100 + skillIndex + 1,
            item: {
              "@type": "Thing",
              name: skill,
              description: `Professional experience with ${skill}`,
              category: category,
            },
          }))
      ),
    },
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(Math.min(window.innerWidth * 0.8, 800));
    }

    const handleResize = () => {
      setWidth(Math.min(window.innerWidth * 0.8, 800));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
        />
        <link rel="canonical" href="https://edwards.codes/skills" />
      </Head>
      <Page
        currentPage="Skills"
        meta={{
          title:
            "Technical Skills & Expertise | Andrew Edwards - Software Engineer",
          desc: metaDescription,
          author: "Andrew Edwards",
          keywords: [
            "software engineering skills",
            "technical expertise",
            "frontend development",
            "backend development",
            "mobile development",
            "cloud architecture",
            "React development",
            "TypeScript",
            "Flutter",
            "iOS development",
            "API development",
            "database management",
            ...Object.values(skillCategories).flat(),
          ],
          type: "profile",
          image: "/images/skills-og.jpg",
          publishedAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
        }}
      >
        <section className="min-h-screen w-full transition-colors duration-300">
          <FloatingIcons />
          <div className="h-8" />
          {/* Hero Section with 3D Sphere */}
          <section className="relative h-screen flex flex-col items-center justify-center">
            <div className="container px-4 mx-auto text-center relative z-10">
              <h1 className="font-header text-5xl mb-4 text-black dark:text-white inline-block relative">
                Technical Expertise
                <div className="absolute -inset-x-8 h-[2px] -bottom-2 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
                <div className="absolute -right-4 top-0 h-16 w-[2px] bg-gradient-to-b from-lime-500/20 to-transparent" />
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 transition-colors duration-300">
                Full-stack development expertise spanning web, mobile, and cloud
                technologies, with a focus on creating scalable, performant
                applications.
              </p>

              {/* ThreeJS Sphere Container */}
              <div className="relative w-full max-w-2xl mx-auto rounded-3xl p-8 transition-all duration-300">
                <div className="aspect-square">
                  <SkillTagCloud
                    width={width}
                    height={width}
                    radius={Math.max(width / 8, 27)}
                  />
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-colors duration-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </section>

          {/* Detailed Skills Section */}
          <section className="w-full py-20 transition-colors duration-300">
            <div className="container mx-auto px-4">
              {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-600 dark:from-lime-400 dark:to-green-400 transition-colors duration-300">
                Professional Skillset
              </h2> */}
              <StaticSkills />
            </div>
          </section>
        </section>
      </Page>
    </>
  );
}
