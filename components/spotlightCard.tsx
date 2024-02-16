import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CardProps = {
  img: {
    src: string;
    alt: string;
    height?: number;
    width?: number;
  };
  title: string;
  body: string;
  link: string;
  height?: number;
  width?: number;
  badges?: string[];
};

export const SpotlightCard = ({
  img,
  title,
  body,
  link,
  width,
  height,
  badges,
}: CardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

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
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Link href={link} passHref scroll={false}>
        <motion.div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative overflow-hidden rounded-xl border border-slate-800 ae-radial px-8 pt-6 shadow-black shadow-2xl dark:shadow-slate-600 dark:shadow-lg inline-block ${
            width ?? "w-96"
          } ${height ?? ""}`}
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
            }}
          />
          <span className="mb-4 inline-flex items-center justify-center rounded-md bg-lime-500 p-2 shadow-lg">
            <Image
              src={img.src}
              width={img.width ?? 300}
              height={img.height ?? 100}
              alt={img.alt}
              className="w-16 h-16"
            />
          </span>
          <h3 className="mb-2 font-medium tracking-tight text-white">
            {title}
          </h3>
          <p className="text-sm text-slate-400 mb-4">{body}</p>
          <section className="w-full text-gray-600">
            {badges?.map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-slate-400 rounded-full border border-slate-400 mb-6"
              >
                {badge}
              </span>
            ))}
          </section>
        </motion.div>
      </Link>
    </AnimatePresence>
  );
};
