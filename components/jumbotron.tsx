import { useState } from "react";
import { Typewriter, AnimatedComponent } from "react-style-text";
import { homeStrings } from "@/data/static/strings";

export const Jumbotron = () => {
  const [initialAnimationFinished, setInitialAnimationFinished] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center text-[4rem]">
      <section className="dark:text-white  w-full h-full flex flex-row justify-between ae-max-w">
        <AnimatedComponent
          animationname="slideInFromLeft"
          duration="2s"
          delay="0s"
          iteration={1}
        >
          <h1 className="dark:text-white mt-12 font-extra">
            <Typewriter
              datatext={homeStrings}
              cursorcolor="green"
              // statictext="Testing"
            />
          </h1>
        </AnimatedComponent>
        <AnimatedComponent
          animationname="slideInFromRight"
          duration="2s"
          delay="0s"
          iteration={1}
        >
          <h1 className="dark:text-white mt-12 font-extra">Testing</h1>
        </AnimatedComponent>
      </section>
    </div>
  );
};

export default Jumbotron;
