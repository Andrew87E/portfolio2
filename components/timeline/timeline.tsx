import React from "react";
import { Building2, Flag, Code, Server, Database, Medal } from "lucide-react";
import styles from "./timeline.module.sass";

export const Timeline = () => {
  const experiences = [
    {
      period: "2023 - Present",
      role: "Software Engineer at Tifco Industries",
      description:
        "Leading API development with DotNetCore and building innovative warehouse solutions. Developed SwiftUI iPad apps, Flutter applications, and maintained Linux server VMs while crafting robust SQL solutions.",
      icon: <Code className="w-6 h-6 text-lime-500" />,
      highlights: ["API Development", "Mobile Apps", "Infrastructure"],
    },
    {
      period: "2020 - 2022",
      role: "Software Engineer at Hometown Insurance",
      description:
        "Optimized program performance using Electron, Node.js, React.js, and Next.js. Led development of office management applications, achieving $75K in annual cost savings.",
      icon: <Building2 className="w-6 h-6 text-lime-500" />,
      highlights: ["Cost Savings", "Performance", "Team Lead"],
    },
    {
      period: "2020 - Present",
      role: "Founded Edwards Tech, LLC as a Freelance Web Developer",
      description:
        "Specialized in building optimized web applications and providing comprehensive marketing support through development of strategic web pages and conducting thorough audits.",
      icon: <Code className="w-6 h-6 text-lime-500" />,
      highlights: ["Web Development", "Marketing", "Consulting"],
    },
    {
      period: "2015 - 2020",
      role: "IT Infrastructure Specialist at A&B Tribe LLC",
      description:
        "Delivering tailored IT solutions and establishing optimized networks. Specialized in high-performance computing and implementing robust security measures.",
      icon: <Server className="w-6 h-6 text-lime-500" />,
      highlights: ["Infrastructure", "Security", "Optimization"],
    },
    {
      period: "2013 - 2015",
      role: "Project Manager/Auditor at Sysco Corp",
      description:
        "Led market segmentation projects and orchestrated migration from MySQL to NoSQL databases while managing data entry teams.",
      icon: <Database className="w-6 h-6 text-lime-500" />,
      highlights: ["Database Migration", "Team Management", "Data Analysis"],
    },
    {
      period: "2005 - 2009",
      role: "US Army - 45B/Small Arms & Artillery Repairer",
      description:
        "Developing strong leadership and technical skills that would later translate into software engineering excellence.",
      icon: <Medal className="w-6 h-6 text-lime-500" />,
      highlights: ["Leadership", "Technical Skills", "Service"],
    },
  ];

  return (
    <section className="w-full mx-auto text-black dark:text-white font-mono">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 animate-fade-in-top">
          Professional Journey
        </h2>
      </div>

      <div className="w-[90vw] max-w-5xl 2xl:max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className={`
              ${styles.timelineItem}
              relative p-12 
              transition-all duration-300
              hover:bg-gray-50 dark:hover:bg-gray-800/50
              ${index === 0 ? styles.firstTimelineItem : ""}
              ${index === experiences.length - 1 ? styles.lastTimelineItem : ""}
              animate-fade-in
            `}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">{exp.icon}</div>

              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-lime-600 dark:text-lime-400 mb-2">
                  {exp.period}
                </h4>

                <h5 className="text-xl font-bold mb-3">{exp.role}</h5>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1 rounded-full text-sm
                        bg-lime-100 dark:bg-lime-900 
                        text-lime-700 dark:text-lime-300 
                        font-medium
                        transition-all duration-300
                        hover:scale-105
                      "
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
