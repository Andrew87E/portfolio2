import { FloatingIcons, Page } from "@/components";
import { Briefcase, Flag, Code, Heart, Leaf, Gamepad2 } from "lucide-react";
import { AnimatedComponent } from "react-style-text";
import Head from "next/head";

// Define structured data type
interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  jobTitle: string;
  alumniOf: string;
  nationality: string;
  url: string;
  sameAs: string[];
  knowsAbout: string[];
  image: string;
}

export default function About() {
  // Create rich meta description
  const metaDescription =
    "Meet Andrew Edwards: A Software Engineer at Tifco Industries specializing in API development and warehouse solutions. US Army veteran, father of five, and passionate technologist with expertise in React, TypeScript, Node.js, and Flutter. Discover my journey from military service to software development.";

  // Keywords based on content
  const keywords = [
    "Andrew Edwards",
    "Software Engineer",
    "US Army Veteran",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Flutter",
    "Tifco Industries",
    "API Development",
    "Warehouse Solutions",
    "Military Veteran",
    "Software Development",
    "Family Man",
    "Tech Professional",
    "Full-stack Development",
    "iOS Development",
    "Mobile Development",
  ];

  // Schema.org structured data
  const personSchema: PersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew Edwards",
    description: metaDescription,
    jobTitle: "Software Engineer",
    alumniOf: "US Army",
    nationality: "American",
    url: "https://edwards.codes/about",
    sameAs: [
      "https://github.com/andrew87e",
      "https://www.linkedin.com/in/andrew-edwards-software-engineer/",
      // Add other social profiles
    ],
    knowsAbout: [
      "Software Development",
      "Full Stack Development",
      "React",
      "TypeScript",
      "Node.js",
      "Flutter",
      "iOS Development",
      "API Development",
      "Warehouse Management Systems",
    ],
    image: "https://edwards.codes/images/andrew-edwards.jpg", // Update with your actual image path
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <Page
        currentPage="About Me"
        meta={{
          title: "About Andrew Edwards | Software Engineer & US Army Veteran",
          desc: metaDescription,
          author: "Andrew Edwards",
          keywords: keywords,
          type: "profile",
          image: "/images/andrew-edwards-profile.jpg", // Update with your actual image path
          publishedAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
        }}
        className="min-h-screen relative overflow-hidden"
      >
        <FloatingIcons />
        <div className="relative z-10 px-6 py-12">
          {/* Header Section */}
          <AnimatedComponent
            animationname="slideInFromTop"
            iteration={1}
            duration="1s"
            delay="0s"
            timing="ease-in-out"
          >
            <div className="text-center space-y-4 mb-12">
              <h1 className="font-header text-5xl text-black dark:text-white relative inline-block">
                Hey, I'm Andrew Edwards
                <div className="absolute -inset-x-8 h-[2px] -bottom-2 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
                <div className="absolute -right-4 top-0 h-16 w-[2px] bg-gradient-to-b from-lime-500/20 to-transparent" />
              </h1>
              <p className="font-subheader text-xl">
                <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                  Software Engineer, Veteran, and Family Man
                </span>
              </p>
            </div>
          </AnimatedComponent>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              animationname="fadeInFromBottom"
              iteration={1}
              duration="1s"
              delay="0.2s"
              timing="ease-in-out"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Professional Journey */}
                <div className="group p-6 rounded-xl border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-lime-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-2 text-xl font-header text-black dark:text-white mb-4">
                      <Briefcase className="w-6 h-6 text-lime-500" />
                      <h2>Professional Journey</h2>
                    </div>
                    <p className="font-body text-gray-600 dark:text-gray-300">
                      Currently leading software development at Tifco
                      Industries, specializing in creating robust API servers
                      and innovative warehouse solutions. With experience
                      spanning from iOS to Flutter development, I bring a
                      versatile approach to solving complex technical
                      challenges.
                    </p>
                  </div>
                </div>

                {/* Military Service */}
                <div className="group p-6 rounded-xl border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-lime-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-2 text-xl font-header text-black dark:text-white mb-4">
                      <Flag className="w-6 h-6 text-lime-500" />
                      <h2>Military Background</h2>
                    </div>
                    <p className="font-body text-gray-600 dark:text-gray-300">
                      Proud US Army veteran, where I served as a Small Arms &
                      Artillery Repairer. My military service instilled core
                      values of discipline, leadership, and attention to detail
                      that I bring to every project.
                    </p>
                  </div>
                </div>

                {/* Technical Expertise */}
                <div className="group p-6 rounded-xl border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-lime-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-2 text-xl font-header text-black dark:text-white mb-4">
                      <Code className="w-6 h-6 text-lime-500" />
                      <h2>Tech Stack</h2>
                    </div>
                    <p className="font-body text-gray-600 dark:text-gray-300">
                      Full-stack developer with expertise in React, TypeScript,
                      Node.js, and Flutter. Passionate about creating efficient,
                      scalable solutions and staying current with emerging
                      technologies.
                    </p>
                  </div>
                </div>

                {/* Personal Life */}
                <div className="group p-6 rounded-xl border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-lime-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-2 text-xl font-header text-black dark:text-white mb-4">
                      <Heart className="w-6 h-6 text-lime-500" />
                      <h2>Family Life</h2>
                    </div>
                    <p className="font-body text-gray-600 dark:text-gray-300">
                      Proud father of five and devoted husband. When I'm not
                      coding, you'll find me spending quality time with my
                      family, tending to our garden, or exploring new
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedComponent>

            {/* Hobbies Section */}
            <AnimatedComponent
              animationname="fadeInFromBottom"
              iteration={1}
              duration="1s"
              delay="0.4s"
              timing="ease-in-out"
            >
              <div className="mt-12 p-6 rounded-xl border border-lime-500/20">
                <h2 className="text-2xl font-header text-black dark:text-white mb-6 relative inline-block">
                  When I'm Not Coding
                  <div className="absolute -inset-x-4 h-[2px] -bottom-2 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group p-4 rounded-lg border border-lime-500/10 hover:border-lime-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Leaf className="w-5 h-5 text-lime-500" />
                      <span className="font-body">
                        Maintaining our family garden with fruits, vegetables,
                        and flowers
                      </span>
                    </div>
                  </div>
                  <div className="group p-4 rounded-lg border border-lime-500/10 hover:border-lime-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Gamepad2 className="w-5 h-5 text-lime-500" />
                      <span className="font-body">
                        Gaming enthusiast and tech hobbyist
                      </span>
                    </div>
                  </div>
                  <div className="group p-4 rounded-lg border border-lime-500/10 hover:border-lime-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Flag className="w-5 h-5 text-lime-500" />
                      <span className="font-body">
                        Target shooting and outdoor activities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </Page>
    </>
  );
}
