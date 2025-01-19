import { Page } from "@/components";
import { Code, Briefcase, Flag, Leaf, Heart, Gamepad2 } from "lucide-react";

export default function About() {
  return (
    <Page
      currentPage="About Me"
      meta={{
        title: "Contact Me - Andrew Edwards | Get in Touch Today",
        desc: "Contact Andrew Edwards for inquiries, collaborations, or questions. Reach out to discuss software development, projects, or any other queries. Let's connect!",
      }}
    >
      <section className="h-screen w-full">
        <div className="h-96 p-6">
          <div className="max-w-4xl mx-auto p-6 space-y-8 mt-10">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                Hey, I'm Andrew Edwards
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Software Engineer, Veteran, and Family Man
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Professional Journey */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
                  <Briefcase className="w-6 h-6" />
                  <h2>Professional Journey</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Currently leading software development at Tifco Industries,
                  where I specialize in creating robust API servers and
                  innovative warehouse solutions. With experience spanning from
                  iOS to Flutter development, I bring a versatile approach to
                  solving complex technical challenges.
                </p>
              </div>

              {/* Military Service */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
                  <Flag className="w-6 h-6" />
                  <h2>Military Background</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Proud US Army veteran, where I served as a Small Arms &
                  Artillery Repairer. My military service instilled core values
                  of discipline, leadership, and attention to detail that I
                  bring to every project.
                </p>
              </div>

              {/* Technical Expertise */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
                  <Code className="w-6 h-6" />
                  <h2>Tech Stack</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Full-stack developer with expertise in React, TypeScript,
                  Node.js, and Flutter. Passionate about creating efficient,
                  scalable solutions and staying current with emerging
                  technologies.
                </p>
              </div>

              {/* Personal Life */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
                  <Heart className="w-6 h-6" />
                  <h2>Family Life</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Proud father of five and devoted husband. When I'm not coding,
                  you'll find me spending quality time with my family, tending
                  to our garden, or exploring new technologies.
                </p>
              </div>
            </div>

            {/* Hobbies Section */}
            <div className="border-t border-black dark:border-white pt-8 mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                When I'm Not Coding
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Leaf className="w-5 h-5 text-green-500" />
                  <span>
                    Maintaining our family garden with fruits, vegetables, and
                    flowers
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Gamepad2 className="w-5 h-5 text-blue-500" />
                  <span>Gaming enthusiast and tech hobbyist</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Flag className="w-5 h-5 text-red-500" />
                  <span>Target shooting and outdoor activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
