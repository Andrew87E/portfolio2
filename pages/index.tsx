import { Page, Jumbotron } from "@/components";
import Image from "next/image";
import Link from "next/link";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{ desc: "Andrew Edwards - Software Enginner" }}
    >
      <section className="w-full">
        {/* <Jumbotron /> */}
        <section className="flex flex-col text-6xl">
          <h1 className="mt-28 dark:text-white font-header">Hi. I'm Andrew.</h1>
          <article className="flex flex-row max-w-[50vw]">
            <p className="text-wrap text-2xl dark:text-white mb-8 mt-2 font-body">
              I'm a software engineer with a passion for building a wide range
              of applications. From iOS apps to Flutter apps, web apps, and
              backend servers, I've got you covered.
            </p>
          </article>
          <article>
            <p className="text-wrap text-2xl dark:text-white mb-8 mt-2 font-extra">
              Currently, I'm working at{" "}
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
              if you'd like to work together.
            </p>
          </article>
        </section>
      </section>
    </Page>
  );
}
