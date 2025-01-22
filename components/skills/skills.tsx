import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaSass,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaMarkdown,
  FaNpm,
  FaSwift,
  FaDatabase,
  FaMobile,
  FaCloud,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiYarn,
  SiVite,
  SiVercel,
  SiNextdotjs,
  SiBulma,
  SiAuth0,
  SiRedux,
  SiMysql,
  SiDocker,
  SiJest,
  SiFlutter,
  SiFirebase,
  SiRedis,
  SiPostgresql,
  SiGooglecloud,
  SiHeroku,
  SiGit,
  SiNpm,
  SiSwift,
} from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";

interface SkillGroup {
  title: string;
  description: string;
  icons: {
    Icon: any;
    color: string;
    name: string;
    description?: string;
  }[];
}

export const StaticSkills = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const skillGroups: SkillGroup[] = [
    {
      title: "Frontend Development",
      description:
        "Extensive experience in modern frontend development, with a focus on React ecosystem and cross-platform solutions. Specializing in building responsive, performant applications with strong emphasis on user experience.",
      icons: [
        {
          Icon: FaReact,
          color: "#61DAFB",
          name: "React",
          description:
            "Core expertise in React, building complex applications including game development (Asteroids) and enterprise-level systems. Proficient with hooks, context, and advanced patterns.",
        },
        {
          Icon: SiNextdotjs,
          color: "#ffffff",
          name: "Next.js",
          description:
            "Deep experience with Next.js, particularly in building SEO-optimized websites and high-performance applications. Implemented in portfolio and company websites with perfect Lighthouse scores.",
        },
        {
          Icon: SiTypescript,
          color: "#3178C6",
          name: "TypeScript",
          description:
            "Strong TypeScript skills demonstrated across multiple projects, from NPM packages to enterprise applications. Emphasis on type safety and developer experience.",
        },
        {
          Icon: SiFlutter,
          color: "#02569B",
          name: "Flutter",
          description:
            "Built enterprise-grade cross-platform applications, including comprehensive warehouse management systems with real-time tracking and complex business logic.",
        },
        {
          Icon: SiSwift,
          color: "#FA7343",
          name: "SwiftUI",
          description:
            "Developed native iOS/macOS applications for enterprise use, including barcode scanning integration and complex warehouse management systems.",
        },
        {
          Icon: SiRedux,
          color: "#764ABC",
          name: "Redux",
          description:
            "Implemented Redux for state management in large-scale applications, particularly in enterprise systems requiring complex state handling.",
        },
      ],
    },
    {
      title: "Styling & Design",
      description:
        "Proficient in modern CSS frameworks and styling solutions, focusing on creating responsive, accessible, and maintainable design systems.",
      icons: [
        {
          Icon: SiTailwindcss,
          color: "#06B6D4",
          name: "Tailwind CSS",
          description:
            "Extensive use in multiple projects, leveraging utility-first approach for rapid development and consistent design systems.",
        },
        {
          Icon: FaSass,
          color: "#CC6699",
          name: "Sass",
          description:
            "Advanced styling with Sass in various projects, utilizing mixins, functions, and modular architecture for scalable CSS.",
        },
        {
          Icon: TbBrandBootstrap,
          color: "#7952B3",
          name: "Bootstrap",
          description:
            "Implemented in multiple projects for rapid prototyping and responsive layouts, particularly in earlier applications.",
        },
        {
          Icon: SiBulma,
          color: "#00D1B2",
          name: "Bulma",
          description:
            "Used in projects like the Road Trip Planner, leveraging its modern flexbox-based grid system.",
        },
        {
          Icon: FaCss3Alt,
          color: "#1572B6",
          name: "CSS3",
          description:
            "Strong foundation in CSS3, including animations, grid, flexbox, and modern layout techniques.",
        },
      ],
    },
    {
      title: "Backend & Databases",
      description:
        "Strong background in building scalable backend services and managing various database systems, with focus on performance and reliability.",
      icons: [
        {
          Icon: SiNodedotjs,
          color: "#339933",
          name: "Node.js",
          description:
            "Extensive experience building API servers, CLI tools, and backend services. Created high-performance weather APIs and enterprise systems.",
        },
        {
          Icon: SiExpress,
          color: "#000000",
          name: "Express",
          description:
            "Built numerous REST APIs and web servers, including the Weather API Server with advanced caching and multiple data provider integration.",
        },
        {
          Icon: SiMongodb,
          color: "#47A248",
          name: "MongoDB",
          description:
            "Implemented in various full-stack applications, including portfolio sites and team management systems.",
        },
        {
          Icon: SiPostgresql,
          color: "#4169E1",
          name: "PostgreSQL",
          description:
            "Used in enterprise applications for robust data management, particularly in the Weather API server.",
        },
        {
          Icon: SiRedis,
          color: "#DC382D",
          name: "Redis",
          description:
            "Implemented for high-performance caching in the Weather API server, optimizing third-party API consumption.",
        },
        {
          Icon: SiMysql,
          color: "#4479A1",
          name: "MySQL/MSSQL",
          description:
            "Experience with both MySQL and MSSQL, particularly in enterprise warehouse management systems.",
        },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      description:
        "Proficient in modern deployment tools and infrastructure management, ensuring reliable and scalable application delivery.",
      icons: [
        {
          Icon: SiDocker,
          color: "#2496ED",
          name: "Docker",
          description:
            "Containerization for consistent development and deployment environments, particularly in enterprise and open-source projects.",
        },
        {
          Icon: SiVercel,
          color: "#ffffff",
          name: "Vercel",
          description:
            "Platform of choice for deploying Next.js applications, used across multiple portfolio and client projects.",
        },
        {
          Icon: SiHeroku,
          color: "#430098",
          name: "Heroku",
          description:
            "Deployed multiple full-stack applications, including the Team Generator and Note Taker applications.",
        },
        {
          Icon: SiFirebase,
          color: "#FFCA28",
          name: "Firebase",
          description:
            "Utilized for hosting, authentication, and real-time database features in various projects.",
        },
        {
          Icon: FaGithub,
          color: "#ffffff",
          name: "Git/GitHub",
          description:
            "Expert in version control and collaboration, maintaining multiple open-source projects and managing enterprise codebases.",
        },
      ],
    },
    {
      title: "Tools & Testing",
      description:
        "Comprehensive knowledge of development tools and testing frameworks for ensuring code quality and maintainability.",
      icons: [
        {
          Icon: SiJest,
          color: "#C21325",
          name: "Jest",
          description:
            "Implemented comprehensive testing suites for React components and Node.js applications.",
        },
        {
          Icon: SiVite,
          color: "#646CFF",
          name: "Vite",
          description:
            "Modern build tool used in projects like the Team Generator for faster development experience.",
        },
        {
          Icon: SiYarn,
          color: "#2C8EBB",
          name: "Yarn",
          description:
            "Preferred package manager for many projects, particularly in larger applications requiring workspace features.",
        },
        {
          Icon: SiNpm,
          color: "#CB3837",
          name: "NPM",
          description:
            "Published and maintained packages on NPM, including react-style-text with comprehensive TypeScript support.",
        },
      ],
    },
  ];

  return (
    <section className="w-full relative py-16 px-4 max-w-7xl mx-auto">
      {skillGroups.map((group, index) => (
        <motion.div
          key={group.title}
          className="mb-24 last:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="space-y-6 mb-8">
            <h3 className="text-3xl font-bold text-lime-500 dark:text-lime-400 text-center md:text-left">
              {group.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl">
              {group.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {group.icons.map((icon) => (
              <motion.div
                key={icon.name}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setSelectedGroup(icon.name)}
                onHoverEnd={() => setSelectedGroup(null)}
              >
                <div className="p-4 rounded-lg border border-lime-500 hover:bg-lime-400 dark:hover:bg-lime-900 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <icon.Icon
                    color={icon.color}
                    className={`w-12 h-12 transition-all duration-300 ${
                      !icon.color ? "text-gray-300 dark:text-gray-400" : ""
                    }`}
                    id={icon.name.toLowerCase().replace(/\s+/g, "-")}
                  />
                  <div className="mt-3 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
                    {icon.name}
                  </div>
                </div>
                {selectedGroup === icon.name && icon.description && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`
                      absolute z-10 bg-lime-500/50 dark:bg-lime-900/50 p-4 rounded-lg shadow-lg text-sm
                      w-72 mt-2 
                      ${index % 2 === 0 ? "left-0" : "right-0"}
                      sm:left-1/2 sm:-translate-x-1/2
                      border border-gray-200 dark:border-gray-600
                    `}
                  >
                    <div className="text-gray-700 dark:text-gray-300">
                      {icon.description}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};
