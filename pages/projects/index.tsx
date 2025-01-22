import { Page, SpotlightCard } from "@/components";
import { AnimatedComponent } from "react-style-text";
import { FloatingIcons } from "@/components";
import { projects, Project, ProjectType } from "@/data/projects";
import Head from "next/head";

interface ProjectCounts {
  [key: string]: number;
}

interface SchemaData {
  "@context": string;
  "@type": string;
  mainEntity: {
    "@type": string;
    itemListElement: Array<{
      "@type": string;
      position: number;
      name: string;
      description: string;
      programmingLanguage?: string[];
      codeRepository?: string;
      url?: string;
    }>;
  };
  name: string;
  description: string;
  author: {
    "@type": string;
    name: string;
    jobTitle: string;
    url: string;
  };
}

const Projects = () => {
  // Get unique technologies from all projects for keywords
  const uniqueTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.badges || []))
  );

  // Calculate total projects by type
  const projectCounts = projects.reduce((acc: ProjectCounts, project) => {
    const typeKey = ProjectType[project.type];
    acc[typeKey] = (acc[typeKey] || 0) + 1;
    return acc;
  }, {});

  // Create meta description
  const metaDescription = `Explore ${projects.length} innovative projects by Andrew Edwards, including ${
    projectCounts["Personal"] || 0
  } personal projects, ${
    projectCounts["OpenSource"] || 0
  } open-source contributions, and ${
    projectCounts["Professional"] || 0
  } professional applications. Specialized in ${uniqueTechnologies
    .slice(0, 5)
    .join(", ")} and more.`;

  // Create schema data
  const schemaData: SchemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "SoftwareSourceCode",
        position: index + 1,
        name: project.project,
        description: project.desc,
        programmingLanguage: project.badges,
        codeRepository: project.github,
        url: project.deploy.url,
      })),
    },
    name: "Software Engineering Projects | Andrew Edwards Portfolio",
    description: metaDescription,
    author: {
      "@type": "Person",
      name: "Andrew Edwards",
      jobTitle: "Software Engineer",
      url: "https://edwards.codes",
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <Page
        currentPage="Projects"
        meta={{
          title: "Software Engineering Projects | Andrew Edwards Portfolio",
          desc: metaDescription,
          author: "Andrew Edwards",
          keywords: [
            "software engineer",
            "web development",
            "mobile development",
            "full stack developer",
            "React developer",
            "TypeScript",
            "Next.js",
            ...uniqueTechnologies,
          ],
          type: "portfolio",
          image: "/assets/projects-og-image.jpg",
          publishedAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
        }}
        className="min-h-screen relative overflow-hidden"
      >
        {/* Background Icons */}
        <FloatingIcons />
        <div className="h-8" />

        <section className="py-12 relative z-10">
          <AnimatedComponent
            animationname="fadeInFromTop"
            iteration={1}
            duration="1s"
            delay="0s"
            timing="ease-in-out"
          >
            <div className="relative text-center">
              <h1 className="font-header text-5xl mb-4 text-black dark:text-white inline-block relative">
                Featured Projects
                <div className="absolute -inset-x-8 h-[2px] bottom-0 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
                <div className="absolute -right-4 top-0 h-16 w-[2px] bg-gradient-to-b from-lime-500/20 to-transparent" />
              </h1>

              <p className="font-subheader text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 relative">
                <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                  Crafting Digital Solutions
                </span>
                <br />
                <span className="text-base mt-2 inline-block">
                  A showcase of innovative applications and technical
                  achievements
                </span>
              </p>
            </div>
          </AnimatedComponent>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {projects.map((project: Project, i: number) => (
                <AnimatedComponent
                  key={i}
                  animationname="fadeIn"
                  iteration={1}
                  duration="1s"
                  delay={`${i * 0.2}s`}
                  timing="ease-in-out"
                >
                  <SpotlightCard
                    title={project.project}
                    body={project.desc}
                    img={{
                      src: project.img,
                      alt: project.alt,
                    }}
                    badges={project.badges}
                    link={project.deploy.url ?? undefined}
                    github={project.github}
                    className="w-full h-full"
                  />
                </AnimatedComponent>
              ))}
            </div>
          </div>
        </section>
      </Page>
    </>
  );
};

export default Projects;
