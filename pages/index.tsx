import { Page } from "@/components";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Page
        currentPage="home"
        meta={{ desc: "Andrew Edwards - Web Developer" }}
      >
        <div className="h-16"></div>
        <p className="h-32 text-white font-serif text-2xl">Test</p>
      </Page>
    </>
  );
}
