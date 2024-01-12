import { useState } from "react";
import { Typewriter, AnimatedComponent } from "react-style-text";

export const Jumbotron = () => {
  const [initialAnimationFinished, setInitialAnimationFinished] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center text-white text-[4rem] border border-lime-500">
      <section className="text-white  w-full h-full flex flex-row justify-between border-white border ae-max-w">
        <AnimatedComponent
          animationname="slideInFromLeft"
          duration="2s"
          delay="0s"
          iteration={1}
        >
          <h1 className="text-white mt-10">
            <Typewriter
              datatext={["afsd", "adsf"]}
              cursorcolor="green"
              statictext="Testing"
            />
          </h1>
        </AnimatedComponent>
        <AnimatedComponent
          animationname="slideInFromRight"
          duration="2s"
          delay="0s"
          iteration={1}
        >
          <h1 className="text-white mt-10">Testing</h1>
        </AnimatedComponent>
      </section>
    </div>
  );
};

export default Jumbotron;
