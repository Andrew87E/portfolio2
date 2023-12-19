import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { Github } from "./githubButton";
import { MobileMenu } from "../navbar/mobileMenu";
import { Navbar } from "../navbar/navbar";

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc?: string;
  };
  children?: JSX.Element | React.ReactNode;
};

export const Page = ({ currentPage, meta: { desc }, children }: PageProps) => {
  const [darkModeActual, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const pageTitle = `${
    currentPage === "Home"
      ? "Andrew Edwards - Web Developer"
      : `${currentPage} - Edwards.codes`
  }`;

  const handleDarkChange = () => {
    localStorage.setItem("color-theme", darkModeActual ? "light" : "dark");
    setDarkMode(!darkModeActual);
    document.body.classList.toggle("dark");
    console.log("this hits");
  };

  const handleClickForMobile = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    // check if user has set a preference for dark mode
    const localPref = localStorage.getItem("color-theme");
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (userPrefersDark || localPref === "dark") {
      setDarkMode(true);
      localStorage.setItem("color-theme", "dark");
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      localStorage.setItem("color-theme", "light");
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div
      className={`bg-slate-200 dark:bg-gray-800  transition-colors duration-500 ease-in-out `}
      onClick={handleClickForMobile}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />
      </Head>

      <main>
        <nav className="fixed top-0 right-0 left-0 h-16 inline-flex  items-center justify-between z-30 bg-lightbg dark:bg-darkbg">
          <div className="hidden md:inline-flex w-full items-center justify-between pb-2">
            <Navbar
              currentPage={currentPage}
              darkModeValue={darkModeActual}
              darkModeHandle={handleDarkChange}
            />
          </div>
          <div className="inline-flex justify-between md:hidden w-full items-center">
            <MobileMenu
              currentPage={currentPage}
              darkModeValue={darkModeActual}
              darkModeHandle={handleDarkChange}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </div>
        </nav>

        {children}
      </main>
      <Github />
      <Footer />
    </div>
  );
};
