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
    <div
      className={`flex justify-center items-center overflow-hidden rounded-full shadow-xl ${className}`}
      style={{ width: width, height: height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...(fill ? { fill } : {})}
        className="rounded-full"
      />
    </div>
  );
};
