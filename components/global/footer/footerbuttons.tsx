import React from "react";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

interface FooterButtonProps {
  toltipContent: string;
  toltipId: string;
  link: string;
  icon: React.ReactNode;
}

const FooterButton = ({
  toltipContent,
  toltipId,
  link,
  icon,
}: FooterButtonProps) => {
  return (
    <>
      <Link
        href={link}
        type="button"
        className="rounded-full border-2 border-black dark:border-white leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center"
        rel="noopener noreferrer"
        target="_blank"
        id={toltipId}
        data-tooltip-id={toltipId}
        data-tooltip-content={toltipContent}
        data-tooltip-variant={`${
          document.body.classList.contains("dark") ? "light" : "dark"
        }`}
        aria-label={toltipContent}
        aria-describedby={toltipId}
        onClick={() => {
          sendGTMEvent({
            event: "footer_button_click",
            data: {
              button: toltipContent,
              link: link,
              date: new Date().toISOString(),
            },
          });
        }}
      >
        {icon}
      </Link>
      <Tooltip id={toltipId} place="top" />
    </>
  );
};

export default FooterButton;
