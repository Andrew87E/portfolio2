import { Page } from "@/components";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Page
        currentPage="Home"
        meta={{ desc: "Andrew Edwards - Web Developer" }}
      >
        <div className="h-16"></div>
        <p className="h-32 text-white font-serif text-2xl bg-white dark:bg-black">
          Test
        </p>
      </Page>
    </>
  );
}
