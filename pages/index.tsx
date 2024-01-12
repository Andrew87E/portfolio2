import { Page, Jumbotron } from "@/components";
import Image from "next/image";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "Andrew Edwards - Web Developer" }}>
      <div className="w-full h-96">
        <Jumbotron />
      </div>
    </Page>
  );
}
