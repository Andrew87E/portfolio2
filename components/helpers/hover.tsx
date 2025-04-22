import { Tooltip } from "react-tooltip";
import React from "react";

export const Hover = (props: {
  backgroundColor: string;
  textColor: string;
  id: string;
  place: "top" | "bottom" | "left" | "right";
  name:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal;
}) => {
  return (
    <>
      <a
        id={props.id}
        className="text-lg transition-transform duration-1000"
        data-data-tooltip-content={props.name}
        data-tooltip-id={props.id}
      >
        {/* <span>{props.name}</span> */}
      </a>
      <Tooltip id={props.id} place={props.place} />
    </>
  );
};
