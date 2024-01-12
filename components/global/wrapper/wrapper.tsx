import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { Github } from "./githubButton";
import { MobileMenu } from "../navbar/mobileMenu";
import { Navbar } from "../navbar/navbar";
import { motion, useAnimation } from "framer-motion";

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc?: string;
  };
  children?: JSX.Element | React.ReactNode;
};

export const Page = ({
  currentPage,
  meta: { title, desc },
  children,
}: PageProps) => {
  const [darkModeActual, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      controls.start({ top: "-60px" }); // Adjust '-60px' to match the height of your navbar
    } else {
      // Scrolling up
      controls.start({ top: "0px" });
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls]);

  const handleDarkChange = () => {
    // TODO: fix local storage priority over os preference
    localStorage.setItem("color-theme", darkModeActual ? "light" : "dark");
    setDarkMode(!darkModeActual);
    document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-gray-800");
    document.body.classList.toggle("bg-slate-200");
  };

  const handleClickForMobile = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // we only want to run this on initial page load
      // check if user has set a preference for dark mode
      const localPref = localStorage.getItem("color-theme");
      if (!localPref) {
        const userPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (userPrefersDark || localPref === "dark") {
          setDarkMode(true);
          localStorage.setItem("color-theme", "dark");
          document.body.classList.remove("bg-slate-200");
          document.body.classList.add("dark");
          document.body.classList.add("bg-gray-800");
        } else {
          setDarkMode(false);
          localStorage.setItem("color-theme", "light");
          document.body.classList.add("bg-slate-200");
          document.body.classList.remove("dark");
          document.body.classList.remove("bg-gray-800");
        }
      }
    }
  }, []);

  return (
    <div
      className={`transition-colors duration-500 ease-in-out ${
        !darkModeActual ? `bg-slate-200` : `ae-dark-radial-grey`
      } }`}
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

      <main>
        <motion.nav
          animate={controls}
          initial={{ top: "0px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0,
            duration: 0.5,
          }}
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
        </motion.nav>

        {children}
      </main>
      <Github />
      <Footer />
    </div>
  );
};
