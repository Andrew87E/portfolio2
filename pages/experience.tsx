import { Timeline, Page, FloatingIcons } from "@/components";
import { AnimatedComponent } from "react-style-text";
import Head from "next/head";

interface ExperienceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  mainEntity: {
    "@type": string;
    itemListElement: Array<{
      "@type": string;
      position: number;
      item: {
        "@type": string;
        name: string;
        description: string;
        startDate?: string;
        endDate?: string;
        skills?: string[];
      };
    }>;
  };
  author: {
    "@type": string;
    name: string;
    jobTitle: string;
    url: string;
    alumniOf: string;
  };
}

const Experience = () => {
  // Rich meta description optimized for professional experience
  const metaDescription =
    "Explore Andrew Edwards' professional journey from US Army veteran to Lead Software Engineer at Tifco Industries. Specialized in full-stack development, API architecture, and warehouse management solutions. Over a decade of experience in software innovation, team leadership, and technical project management.";

  // Structured data for professional experience
  const experienceSchema: ExperienceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Andrew Edwards - Professional Experience",
    description: metaDescription,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WorkExperience",
            name: "Lead Software Engineer at Tifco Industries",
            description:
              "Leading software development initiatives, specializing in API servers and warehouse solutions",
            startDate: "2022",
            endDate: "Present",
            skills: [
              "API Development",
              "iOS Development",
              "Flutter",
              "Warehouse Management",
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WorkExperience",
            name: "US Army Service",
            description: "Small Arms & Artillery Repairer",
            startDate: "2010",
            endDate: "2014",
            skills: [
              "Leadership",
              "Technical Maintenance",
              "Team Coordination",
            ],
          },
        },
      ],
    },
    author: {
      "@type": "Person",
      name: "Andrew Edwards",
      jobTitle: "Lead Software Engineer",
      url: "https://edwards.codes",
      alumniOf: "US Army",
    },
  };

  // Professional keywords for better SEO
  const keywords = [
    "Andrew Edwards software engineer",
    "lead software engineer",
    "Tifco Industries",
    "US Army veteran",
    "software development career",
    "API development",
    "warehouse management systems",
    "technical leadership",
    "full stack developer experience",
    "military to tech transition",
    "professional software development",
    "software engineering career",
    "technical project management",
    "development team leadership",
  ];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }}
        />
        <link rel="canonical" href="https://edwards.codes/experience" />
      </Head>
      <Page
        currentPage="Experience"
        meta={{
          title:
            "Professional Experience | Andrew Edwards - Lead Software Engineer",
          desc: metaDescription,
          author: "Andrew Edwards",
          keywords: keywords,
          type: "profile",
          image: "/images/experience-banner.jpg", // Create this image
          publishedAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
        }}
        className="min-h-screen relative overflow-hidden"
      >
        <FloatingIcons />

        <div className="py-12 relative z-10">
          <div className="relative text-center">
            <AnimatedComponent
              animationname="slideInFromTop"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <h1 className="font-header text-5xl mb-4 text-black dark:text-white inline-block relative">
                Professional Journey
                <div className="absolute -inset-x-8 h-[2px] -bottom-2 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
                <div className="absolute -right-4 top-0 h-16 w-[2px] bg-gradient-to-b from-lime-500/20 to-transparent" />
              </h1>
            </AnimatedComponent>

            <AnimatedComponent
              animationname="slideInFromBottom"
              iteration={1}
              duration="1s"
              delay="0s"
              timing="ease-in-out"
            >
              <p className="font-subheader text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 relative ">
                <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                  From Military Precision to Software Innovation
                </span>
                <br />
                <span className="text-base mt-2 inline-block">
                  A decade-long journey of building solutions and leading
                  technical teams
                </span>
              </p>
            </AnimatedComponent>
          </div>

          <AnimatedComponent
            animationname="fadeInFromBottom"
            iteration={1}
            duration="1s"
            delay="0s"
            timing="ease-in"
          >
            <Timeline />
          </AnimatedComponent>
        </div>
      </Page>
    </>
  );
};

export default Experience;
