import {
  Code,
  History,
  Briefcase,
  Flag,
  Leaf,
  Heart,
  Gamepad2,
  BugOff,
  CodeXml,
  GitBranch,
  Github,
  Gitlab,
  Network,
  SquareTerminal,
} from "lucide-react";

type Props = {};

export const FloatingIcons = (props: Props) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute top-20 left-10 animate-float-slow">
        <Code size={40} color="#82fa5f" opacity={0.4} />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <GitBranch size={40} color="#82fa5f" opacity={0.4} />
      </div>
      <div className="absolute top-52 left-1/4 animate-float">
        <History size={40} color="#82fa5f" opacity={0.4} />
      </div>
      <div className="absolute top-52 right-1/4 animate-float">
        <History size={40} color="#82fa5f" opacity={0.4} />
      </div>
      <div className="absolute top-1/2 left-10 animate-float-slow">
        <BugOff size={40} color="#82fa5f" opacity={0.4} />
      </div>
      <div className="absolute top-[55%] right-32 animate-float-slow">
        <Github size={40} color="#82fa5f" opacity={0.4} />
      </div>
      <div className="absolute top-[25%] right-64 animate-float-slow">
        <SquareTerminal size={40} color="#82fa5f" opacity={0.4} />
      </div>
      <div className="absolute top-[28%] left-64 animate-float-slow">
        <Network size={40} color="#82fa5f" opacity={0.4} />
      </div>
      <div className="absolute bottom-[25%] left-20 animate-float-slow">
        <Gitlab size={40} color="#82fa5f" opacity={0.4} />
      </div>
      <div className="absolute bottom-[25%] right-20 animate-float-slow">
        <CodeXml size={40} color="#82fa5f" opacity={0.4} />
      </div>
    </div>
  );
};
