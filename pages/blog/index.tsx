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
      <article>
        <p className="text-wrap text-2xl dark:text-white mb-8 font-extra mt-36">
          Currently, I&apos;m working at{" "}
          <Link
            className="text-blue-500 hover:scale-125"
            href="https://www.tifco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            tifco industries{" "}
          </Link>
          where I focus on building awesome applications for our warehouse
          operations.
        </p>
      </article>
      <article>
        <p className="text-wrap text-2xl dark:text-white mb-8 mt-2 font-extra">
          Check out my latest{" "}
          <Link href="/projects" className="text-blue-500">
            projects
          </Link>{" "}
          or send me an{" "}
          <a className="text-blue-500" href="mailto:andrew@edwards.codes">
            email
          </a>{" "}
          if you&apos;d like to work together.
        </p>
      </article>
    </Page>
  );
}
