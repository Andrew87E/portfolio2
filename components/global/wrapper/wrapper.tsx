import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { Github } from "./githubButton";
import { MobileMenu } from "../navbar/mobileMenu";
import { Navbar } from "../navbar/navbar";
import { useAnimation } from "framer-motion";

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc?: string;
  };
  children?: JSX.Element | React.ReactNode;
  className?: string;
};

export const Page = ({
  currentPage,
  meta: { title, desc },
  children,
  className,
}: PageProps) => {
  const [darkModeActual, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  /// handle scroll to hide navbar
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      controls.start({ top: "-60px" });
    } else {
      // Scrolling up
      controls.start({ top: "0px" });
    }

    setLastScrollY(currentScrollY);
  }, [controls, lastScrollY]);

  /// handle dark mode change
  const handleDarkChange = () => {
    localStorage.setItem("color-theme", darkModeActual ? "light" : "dark");
    document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-black");
    document.body.classList.toggle("bg-slate-200");
    setDarkMode(!darkModeActual);
  };

  const handleClickForMobile = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // check if user has set a preference for dark mode
      const localPref = localStorage.getItem("color-theme");
      // console.log(window.matchMedia("(prefers-color-scheme: dark)"));
      // console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.body.classList.add("transition-colors");
      document.body.classList.add("duration-500");
      document.body.classList.add("ease-in-out");
      /// if no local preference, check os preference
      if (!localPref) {
        const userPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        /// if os preference is dark, set dark mode
        if (userPrefersDark || localPref === "dark") {
          // console.log("this hits");
          setDarkMode(true);
          localStorage.setItem("color-theme", "dark");
          document.body.classList.remove("bg-slate-200");
          document.body.classList.add("dark");
          document.body.classList.add("bg-black");
          /// if os preference is light, set light mode
        } else {
          setDarkMode(false);
          localStorage.setItem("color-theme", "light");
          document.body.classList.add("bg-slate-200");
          document.body.classList.remove("dark");
          document.body.classList.remove("bg-black");
        }
        /// if local preference is set, use that
      } else {
        /// if local preference is dark, set dark mode
        if (localPref === "dark") {
          setDarkMode(true);
          document.body.classList.remove("bg-slate-200");
          document.body.classList.add("dark");
          document.body.classList.add("bg-black");
          /// if local preference is light, set light mode
        } else {
          setDarkMode(false);
          document.body.classList.add("bg-slate-200");
          document.body.classList.remove("dark");
          document.body.classList.remove("bg-black");
        }
      }
    }

    /// add event listener for scroll to hide navbar
    window.addEventListener("scroll", handleScroll, { passive: true });

    /// cleanup
    return () => {
      /// remove event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("%cAndrew Edwards", `color:green; font-size:50px`);
      console.log(
        "%chttps://github.com/Andrew87E/portfolio2 ",
        `color:blue; font-size:20px`
      );
    }
  }, []);

  return (
    <div
      className={`transition-colors duration-500 ease-in-out ${className} `}
      onClick={handleClickForMobile}
    >
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwards.codes" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwards.codes" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <nav
          className={`fixed top-0 right-0 left-0 h-16 inline-flex  items-center justify-between z-30`}
          id="navBar"
        >
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
      {/* {currentPage !== "Home" && <Footer />} */}
    </div>
  );
};
