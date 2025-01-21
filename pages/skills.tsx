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

interface SkillsSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  author: {
    "@type": string;
    name: string;
    jobTitle: string;
    url: string;
  };
  mainEntity: {
    "@type": string;
    itemListElement: Array<{
      "@type": string;
      position: number;
      item: {
        "@type": string;
        name: string;
        description: string;
        category: string;
      };
    }>;
  };
}

export default function Skills() {
  const [width, setWidth] = useState<number>(375);
  const [staticSkills, setStaticSkills] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Technical skills categorization
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

  // Create rich meta description
  const metaDescription =
    "Explore Andrew Edwards' comprehensive technical skillset spanning frontend development with React and TypeScript, " +
    "backend engineering with Node.js and Python, mobile development with Flutter and iOS, " +
    "and cloud architecture using AWS and Docker. Interactive visualization of software engineering expertise " +
    "developed through enterprise solutions and innovative projects.";

  // Create structured data for skills
  const skillsSchema: SkillsSchema = {
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

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

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
          image: "/images/skills-og.jpg", // Create this image
          publishedAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
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
                  role="button"
                  aria-label="Switch to cloud view"
                  tabIndex={0}
                >
                  <StaticSkills />
                </section>
              ) : (
                <section
                  className={`w-full ${
                    isTransitioning ? "animate-gather-cloud" : ""
                  }`}
                  onClick={handleTransition}
                  role="button"
                  aria-label="Switch to grid view"
                  tabIndex={0}
                >
                  <SkillTagCloud height={width / 2} width={width} />
                </section>
              )}
            </div>
          </div>
        </section>
      </Page>
    </>
  );
}
