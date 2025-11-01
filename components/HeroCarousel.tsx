"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];      // absolute paths under /public
  alt: string;           // e.g., project title
  auto?: boolean;        // autoplay
  interval?: number;     // ms
  sizes?: string;        // responsive hint for fill
};

export default function HeroCarousel({
  images,
  alt,
  auto = true,
  interval = 5000,
  sizes = "(max-width: 900px) 100vw, 1200px",
}: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!auto || images.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [auto, images.length, interval]);

  if (!images?.length) return null;

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-neutral-100">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={idx !== i}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes={sizes}
            priority={idx === 0}
          />
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, j) => (
          <div
            key={j}
            className={`h-[2px] w-8 rounded-full transition-all duration-500 ${
              j === idx ? "bg-white opacity-100" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
