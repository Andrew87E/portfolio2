import { useState } from "react";
import { StyledText, Typewriter } from "react-style-text";

export const Jumbotron = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-[4rem]">
      <h1 className="text-white text-8xl">
        <Typewriter
          dataText={["afsd", "adsf"]}
          cursorColor="green"
          heading="Testing"
        />
      </h1>
    </div>
  );
};

export default Jumbotron;
