import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { Github } from "./githubButton";
import { MobileMenu } from "../navbar/mobileMenu";
import { Navbar } from "../navbar/navbar";
import { useAnimation } from "framer-motion";
import { useRouter } from "next/router";

type PageProps = {
  currentPage: string;
  meta: MetaProps;
  children?: JSX.Element | React.ReactNode;
  className?: string;
};

type MetaProps = {
  title?: string;
  desc?: string;
  image?: string;
  author?: string;
  keywords?: string[];
  type?: string;
  publishedAt?: string;
  modifiedAt?: string;
  
};

export const Page = ({ currentPage, meta, children, className }: PageProps) => {
  const [darkModeActual, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();
  const router = useRouter();

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
        {/* Basic Meta Tags */}
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.desc} />
        <meta name="author" content={meta.author || "Andrew Edwards"} />
        <meta name="keywords" content={meta.keywords?.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#82FA5F" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={meta.type || "website"} />
        <meta
          property="og:url"
          content={`https://edwards.codes${router.asPath}`}
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.desc} />
        <meta
          property="og:image"
          content={meta.image || "https://edwards.codes/default-og-image.jpg"}
        />
        <meta
          property="og:site_name"
          content="Andrew Edwards - Software Engineer"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://edwards.codes${router.asPath}`}
        />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.desc} />
        <meta
          property="twitter:image"
          content={meta.image || "https://edwards.codes/default-og-image.jpg"}
        />
        <meta name="twitter:creator" content="@YourTwitterHandle" />

        {/* If this is an article/blog post */}
        {meta.type === "article" && (
          <>
            <meta
              property="article:published_time"
              content={meta.publishedAt}
            />
            <meta property="article:modified_time" content={meta.modifiedAt} />
            <meta
              property="article:author"
              content={meta.author || "Andrew Edwards"}
            />
            {meta.keywords?.map((keyword) => (
              <meta property="article:tag" content={keyword} key={keyword} />
            ))}
          </>
        )}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://edwards.codes${router.asPath}`} />

        {/* If you have alternates for different languages */}
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://edwards.codes${router.asPath}`}
        />

        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <main
        className={`${darkModeActual ? "ae-grad-dark-bg" : "ae-grad-light-bg"}`}
      >
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
        <Github />
        <Footer />
      </main>
      {/* {currentPage !== "Home" && <Footer />} */}
    </div>
  );
};
