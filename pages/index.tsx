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
        <p>Test</p>
      </Page>
    </>
  );
}
