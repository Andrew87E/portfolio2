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

  const transitionColor = "deepskyblue";

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={router.route}>
          {/* Top transition div */}
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "0vh" }} // Start hidden
            animate={{ height: transitionDown ? "0vh" : "100vh" }} // Cover screen when transitionDown is false
            exit={{ height: "0vh" }} // Exit to hidden
          />

          {/* Bottom transition div */}
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              bottom: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }} // Start covering the screen
            animate={{ height: transitionDown ? "100vh" : "0vh" }} // Retract when transitionDown is false
            exit={{ height: "0vh" }} // Exit to hidden
          />

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
