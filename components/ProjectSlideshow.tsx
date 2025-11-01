"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Image from "next/image";

type FitMode = "cover" | "contain" | "auto";

type Props = {
  images: string[];
  alt: string;
  height?: string;
  fit?: FitMode;
  sizes?: string;
  focal?: Record<string, string>;
  controls?: boolean;
  interval?: number;
};

export default function ProjectSlideshow({
  images,
  alt,
  height = "h-[75vh] md:h-[85vh]",
  fit = "contain",
  sizes = "(min-width: 1100px) 1000px, 92vw",
  focal = {},
  controls = true,
  interval,
}: Props) {
  const [i, setI] = useState(0);
  const timerRef = useRef<number | null>(null);

  // --- auto mode: read natural sizes
  const [dims, setDims] = useState<Record<number, { w: number; h: number }>>({});
  const ar = useMemo(() => {
    const d = dims[i];
    return d ? d.w / d.h : 16 / 9;
  }, [dims, i]);

  useEffect(() => {
    if (fit !== "auto") return;
    images.forEach((src, idx) => {
      const img = new window.Image();
      img.onload = () =>
        setDims((m) => ({ ...m, [idx]: { w: img.naturalWidth, h: img.naturalHeight } }));
      img.src = src;
    });
  }, [fit, images]);

  // --- autoplay
  const clearTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!interval || interval <= 0) return;
    clearTimer();
    timerRef.current = window.setInterval(() => {
      setI((p) => (p + 1) % images.length);
    }, interval) as unknown as number;
    return clearTimer;
  }, [interval, images.length]);

  const next = useCallback(
    () => setI((p) => (p + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setI((p) => (p - 1 + images.length) % images.length),
    [images.length]
  );

  // --- touch swipe handlers
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const SWIPE_THRESHOLD = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      if (touchDeltaX.current < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  if (!images?.length) return null;

  const frameClass =
    fit === "auto"
      ? "relative w-full"
      : `relative w-full ${height}`;
  const frameStyle: CSSProperties | undefined =
    fit === "auto" ? ({ aspectRatio: ar } as CSSProperties) : undefined;

  return (
    <div
      className={`${frameClass} overflow-hidden group bg-neutral-100`}
      style={frameStyle}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {images.map((src, idx) => {
        const focalPos = focal[src] || "";
        const active = idx === i;
        return (
          <div
            key={src + idx}
            className={`absolute inset-0 bg-white transition-opacity duration-700 ease-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!active}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className={fit === "cover" ? "object-cover" : "object-contain"}
              style={
                fit === "cover" && focalPos
                  ? ({ objectPosition: focalPos } as CSSProperties)
                  : undefined
              }
              sizes={sizes}
              priority={idx === 0}
            />
          </div>
        );
      })}

      {/* Controls */}
      {controls && images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/40 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/40 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition"
            aria-label="Next image"
          >
            →
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/90 bg-black/40 px-2 py-1 rounded">
            {i + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
