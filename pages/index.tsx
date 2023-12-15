import { Page } from "@/components";
import Image from "next/image";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "Andrew Edwards - Web Developer" }}>
      <div className="h-screen"></div>
      <div className="h-32 text-white font-serif text-2xl bg-lightbg dark:bg-darkbg"></div>
    </Page>
  );
}
