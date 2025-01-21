import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";
import { Tooltip } from "react-tooltip";

type CardProps = {
  img: {
    src: string;
    alt: string;
    height?: number;
    width?: number;
  };
  title: string;
  body: string;
  link?: string;
  github?: string;
  height?: number;
  width?: number;
  badges?: string[];
  className?: string;
};

export const SpotlightCard = ({
  img,
  title,
  body,
  link,
  github,
  width,
  height,
  badges,
  className,
}: CardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsExpanded(false);
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          relative overflow-hidden rounded-xl 
          border border-lime-500/20
          bg-white/5 backdrop-blur-sm
          dark:bg-black/5
          px-8 pt-6 pb-4
          shadow-lg
          transition-all duration-300
          hover:border-lime-500/40
          hover:shadow-lime-500/5
          group
          ${className}
        `}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(130, 250, 95, 0.1), transparent 40%)`,
          }}
        />

        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center justify-center rounded-md bg-lime-500/10 p-2">
            <Image
              src={img.src}
              width={img.width ?? 300}
              height={img.height ?? 100}
              alt={img.alt}
              className="w-20 h-16 object-contain"
            />
          </span>
          <div className="flex gap-2">
            {github && (
              <>
                <Link
                  href={github}
                  data-tooltip-id={`github-${title}`}
                  data-tooltip-content="View source on Github!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-lime-500/10 rounded-full transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5 text-lime-500" />
                </Link>
                <Tooltip id={`github-${title}`} />
              </>
            )}
            {link && (
              <>
                <Link
                  href={link}
                  data-tooltip-id={`deploy-${title}`}
                  data-tooltip-content="See it in action!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-lime-500/10 rounded-full transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5 text-lime-500" />
                </Link>
                <Tooltip id={`deploy-${title}`} />
              </>
            )}
            {!link && !github && (
              <>
                <Link
                  href="/contact"
                  data-tooltip-id={`contact-${title}`}
                  data-tooltip-content="Contact me for more details about this closed source project!"
                  className="p-2 hover:bg-lime-500/10 rounded-full transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Info className="w-5 h-5 text-lime-500" />
                </Link>
                <Tooltip id={`contact-${title}`} />
              </>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
          {title}
        </h3>

        <div className="relative">
          <p
            className={`text-sm text-gray-600 dark:text-gray-400 mb-4 transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {body}
          </p>
          {body.length > 200 && (
            <button
              onClick={toggleExpand}
              className="text-xs text-lime-500 hover:text-lime-400 transition-colors mt-1"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={false}
          animate={{
            marginTop: isExpanded ? "1rem" : "0.5rem",
          }}
        >
          {badges?.map((badge, i) => (
            <span
              key={i}
              className="
                px-3 py-1 text-xs font-medium rounded-full
                bg-lime-100 dark:bg-lime-900/30
                text-lime-700 dark:text-lime-300
                border border-lime-500/20
              "
            >
              {badge}
            </span>
          ))}
          {!link && !github && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border border-gray-500/20">
              Closed Source
            </span>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
