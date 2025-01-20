import { Tooltip as ReactTooltip } from "react-tooltip";
import { DiJqueryLogo } from "react-icons/di";
import { TbApi, TbBrandBootstrap } from "react-icons/tb";
import { FcGoogle, FcLinux } from "react-icons/fc";
import {
  FaReact,
  FaSass,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaMarkdown,
  FaNpm,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiYarn,
  SiVite,
  SiVercel,
  SiNextdotjs,
  SiBulma,
  SiAuth0,
  SiRedux,
  SiMysql,
  SiDocker,
  SiJest,
  SiGnubash,
  SiFirebase,
  SiHandlebarsdotjs,
  SiStorybook,
  SiHeroku,
} from "react-icons/si";
import { Hover } from "./hover";

export const StaticSkills = () => {
  // const calculateSpreadPosition = (
  //   index: number,
  //   totalIcons: number
  // ): React.CSSProperties => {
  //   const phi = Math.acos(-1 + (2 * index) / totalIcons);
  //   const theta = Math.sqrt(totalIcons * Math.PI) * phi;
  //   const radius = 27;

  //   const x = radius * Math.cos(theta) * Math.sin(phi);
  //   const y = radius * Math.sin(theta) * Math.sin(phi);

  //   return {
  //     ["--spread-from-x" as string]: `${x}px`,
  //     ["--spread-from-y" as string]: `${y}px`,
  //     ["--gather-to-x" as string]: `${x}px`,
  //     ["--gather-to-y" as string]: `${y}px`,
  //   } as React.CSSProperties;
  // };

  const icons = [
    { Icon: FaHtml5, color: "#E34F26", name: "HTML" },
    { Icon: FaCss3Alt, color: "#1572B6", name: "CSS" },
    { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { Icon: DiJqueryLogo, color: "#0769AD", name: "jQuery" },
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: SiRedux, color: "#764ABC", name: "Redux" },
    { Icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
    { Icon: SiVite, color: "#646CFF", name: "Vite" },
    { Icon: SiHandlebarsdotjs, color: "#FF2F1C", name: "Handlebars" },
    { Icon: FaSass, color: "#CC6699", name: "Sass" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    { Icon: SiBulma, color: "#00D1B2", name: "Bulma" },
    { Icon: TbBrandBootstrap, color: "#7952B3", name: "Bootstrap" },
    { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { Icon: SiExpress, color: "#000000", name: "Express" },
    { Icon: SiAuth0, color: "#EB5424", name: "Auth0" },
    { Icon: SiDocker, color: "#2496ED", name: "Docker" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { Icon: SiMysql, color: "#4479A1", name: "MySQL" },
    { Icon: SiJest, color: "#C21325", name: "Jest" },
    { Icon: SiStorybook, color: "#FF4785", name: "Storybook" },
    { Icon: SiVercel, color: "#ffffff", name: "Vercel" },
    { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { Icon: FcGoogle, color: undefined, name: "Google Services" },
    { Icon: SiHeroku, color: "#430098", name: "Heroku" },
    { Icon: FaGithub, color: "#ffffff", name: "GitHub" },
    { Icon: FaMarkdown, color: "#2C8EBB", name: "Markdown" },
    { Icon: SiGnubash, color: "#4EAA25", name: "Bash" },
    { Icon: FcLinux, color: undefined, name: "Linux" },
    { Icon: SiYarn, color: "#2C8EBB", name: "Yarn" },
    { Icon: FaNpm, color: "#CB3837", name: "NPM" },
  ];

  return (
    <section className="w-full text-white relative mb-20 p-4 mt-10">
      <section className="w-full flex justify-center text-2xl flex-wrap">
        {icons.map((icon, index) => (
          <div
            key={index}
            // className={`${isAnimating ? "icon-spread" : ""}`}
            // style={calculateSpreadPosition(index, icons.length)}
          >
            <icon.Icon
              color={icon.color}
              className={`mx-2 my-2 ae-scale transition-all duration-300 ease-in-out hover:scale-110 ${
                !icon.color ? "text-gray-300" : ""
              }`}
              size={"8em"}
              id={icon.name.toLowerCase().replace(/\s+/g, "-")}
              data-tip
              data-for={icon.name.toLowerCase().replace(/\s+/g, "-")}
            />
            <Hover
              id={icon.name.toLowerCase().replace(/\s+/g, "-")}
              name={icon.name}
              textColor="black"
              backgroundColor="#3EB143"
            />
          </div>
        ))}
      </section>
    </section>
  );
};
