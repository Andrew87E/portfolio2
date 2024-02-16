import "@/styles/globals.sass";
import "react-tooltip/dist/react-tooltip.css";
import { AnimatePresence, motion, Spring } from "framer-motion";
import type { AppProps } from "next/app";
import { useState } from "react";

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const [transitionDown, setTransitionDown] = useState(false);
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = "black";

  return (
    <div>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div key={router.route}>
          {transitionDown ? (
            <>
              <motion.div
                style={{
                  backgroundColor: transitionColor,
                  position: "fixed",
                  height: "100vh",
                  zIndex: 1000,
                  right: 0,
                }}
                transition={transitionSpringPhysics}
                initial={{ width: "0vw" }}
                animate={{ width: "100vw" }}
                exit={{ width: "0vw" }}
              />
              <motion.div
                style={{
                  backgroundColor: transitionColor,
                  position: "fixed",
                  height: "100vh",
                  zIndex: 1000,
                  left: 0,
                }}
                transition={transitionSpringPhysics}
                initial={{ width: "100vw" }}
                animate={{ width: "0vw", transition: { delay: 0.2 } }}
              />
            </>
          ) : (
            <>
              <motion.div
                style={{
                  backgroundColor: transitionColor,
                  position: "fixed",
                  height: "100vh",
                  zIndex: 1000,
                  left: 0,
                }}
                transition={transitionSpringPhysics}
                initial={{ width: "0vw" }}
                animate={{ width: "100vw" }}
                exit={{ width: "0vw" }}
              />
              <motion.div
                style={{
                  backgroundColor: transitionColor,
                  position: "fixed",
                  height: "100vh",
                  zIndex: 1000,
                  right: 0,
                }}
                transition={transitionSpringPhysics}
                initial={{ width: "100vw" }}
                animate={{ width: "0vw", transition: { delay: 0.2 } }}
              />
            </>
          )}

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
