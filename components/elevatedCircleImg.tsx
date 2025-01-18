// components/ElevatedCircleImage.tsx
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
    <section className="h-full w-40% relative">
      <div
        className={`flex overflow-hidden rounded-full shadow-xl ${className}`}
        style={{ width: width, height: height }}
      >
        <Image
          src={src}
          alt={alt}
          width={width ? width : undefined}
          height={height ? height : undefined}
          {...(fill ? { fill } : {})}
          className="rounded-full"
        />
      </div>
      <section className="absolute -z-10 border-dashed animate-spin-slow border-4 border-lime-500 rounded-full flex h-full w-full -bottom-9 -right-9"></section>
    </section>
  );
};
