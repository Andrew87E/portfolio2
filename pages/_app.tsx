import "@/styles/globals.sass";
import "react-tooltip/dist/react-tooltip.css";
import { AnimatePresence, motion, Spring } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { routes } from "@/data/global";

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const [transitionLeft, setTransitionLeft] = useState(true);
  const [prevPageIndex, setPrevPageIndex] = useState(0);

  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = "black";

  useEffect(() => {
    const routeIndex = routes.findIndex((route) => route.path === router.route);
    if (routeIndex === prevPageIndex || routeIndex === -1) return;
    if (routeIndex > prevPageIndex) {
      setTransitionLeft(true);
    } else {
      setTransitionLeft(false);
    }
    setPrevPageIndex(routeIndex);
    // console.log(`prevPageIndex:: ${prevPageIndex}`);
  }, [router.route, prevPageIndex]);

  return (
    <div>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div key={router.route}>
          <motion.div
            key={router.route + "bg"}
            style={{
              // backgroundColor: rgba(0, 0, 0, 0.4),
              // backgroundImage: "url('/images/bg-grad.jpeg')",
              backgroundSize: "cover",
              opacity: 0.6,
              position: "fixed",
              height: "100vh",
              zIndex: 1000,
              left: transitionLeft ? 0 : "auto",
              right: transitionLeft ? "auto" : 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ width: "100vw" }}
            animate={{
              width: "0vw",
              transition: { delay: 0.2, ease: "easeInOut", duration: 0.5 },
            }}
            exit={{
              width: "100vw",
              transition: { delay: 0.2, ease: "easeInOut", duration: 0.5 },
            }}
            className="dark:bg-black bg-opacity-5 bg-white"
          />

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
