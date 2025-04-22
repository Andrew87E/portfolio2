import Image from "next/image";
import React from "react";

interface ElevatedCircleImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}

export const ElevatedCircleImage: React.FC<ElevatedCircleImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  fill,
}) => {
  return (
    <section className="h-full w-40% relative group">
      <div
        className={`
          flex overflow-hidden rounded-full
          shadow-2xl transition-all duration-500
          bg-gradient-to-br from-lime-500/10 to-transparent
          group-hover:shadow-lime-500/20
          ${className}
        `}
        style={{ width, height }}
      >
        <Image
          src={src}
          alt={alt}
          width={width ? width : undefined}
          height={height ? height : undefined}
          {...(fill ? { fill } : {})}
          className="rounded-full z-10 transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </div>

      {/* Decorative elements */}
      <section
        className="
        absolute border-2 border-lime-500/30 rounded-full 
        h-full w-full -bottom-9 -right-9
        transition-all duration-500
        group-hover:border-lime-500/50
        group-hover:scale-105
        
      "
      />

      {/* Animated dot decoration */}
      <div
        className="
        absolute w-4 h-4 bg-lime-500 rounded-full
        top-0 right-0 
        transition-all duration-500 
        group-hover:scale-150 group-hover:opacity-50
      "
      />

      {/* Background blur effect */}
      <div
        className="
        absolute -inset-4 bg-lime-500/5 
        blur-2xl rounded-full -z-10
        opacity-0 group-hover:opacity-100
        transition-opacity duration-700
      "
      />
    </section>
  );
};
