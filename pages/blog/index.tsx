import Link from "next/link";
import { Page } from "@/components";

export default function Blog() {
  return (
    <Page
      currentPage="Blog"
      meta={{
        title: "Contact Me - Andrew Edwards | Get in Touch Today",
        desc: "Contact Andrew Edwards for inquiries, collaborations, or questions. Reach out to discuss software development, projects, or any other queries. Let's connect!",
      }}
    >
      <section className="w-full">
        <div className="h-96 p-6">
          <div className="flex justify-center mt-10">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold text-center text-gray-800">
                Blog
              </h1>
              <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel ex id elit aliquet lacinia. Sed id ipsum et purus malesuada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
