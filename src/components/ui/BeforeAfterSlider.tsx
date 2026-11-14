"use client";

import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string; // e.g. "aspect-[16/10]"
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  aspectRatio = "aspect-[16/10]",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveTo = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  // Pointer events cover mouse, touch and pen with one set of handlers
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId); // keeps the drag even if the cursor leaves the box
    setDragging(true);
    moveTo(e.clientX); // a plain click or tap now jumps the handle there
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging) moveTo(e.clientX);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    else if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
    else if (e.key === "Home") setPosition(0);
    else if (e.key === "End") setPosition(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label="Before and after colour grade comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      onKeyDown={onKeyDown}
      className={`relative w-full ${aspectRatio} cursor-ew-resize touch-pan-y select-none overflow-hidden bg-neutral-900 outline-none focus-visible:ring-1 focus-visible:ring-paper/70`}
    >
      {/* 1. After image (full background) */}
      <Image
        src={afterImage}
        alt="Colour graded result"
        fill
        draggable={false}
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover"
      />

      {/* 2. Before image (clipped from the right) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Raw flat profile"
          fill
          draggable={false}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover contrast-[0.85] brightness-[1.05]"
        />
      </div>

      {/* 3. Divider line + glass handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-px bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.45)]"
        style={{ left: `${position}%` }}
      >
        <div
          className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white shadow-lg backdrop-blur-md transition-transform duration-300 ${
            dragging ? "scale-110" : "scale-100"
          }`}
        >
          <ChevronLeft size={14} />
          <ChevronRight size={14} />
        </div>
      </div>

      {/* 4. Labels (fade out when the handle reaches them) */}
      <span
        className={`pointer-events-none absolute left-4 top-4 z-20 bg-black/50 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-opacity duration-300 md:left-6 md:top-6 ${
          position < 14 ? "opacity-0" : "opacity-100"
        }`}
      >
        {beforeLabel}
      </span>
      <span
        className={`pointer-events-none absolute right-4 top-4 z-20 bg-black/50 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-opacity duration-300 md:right-6 md:top-6 ${
          position > 86 ? "opacity-0" : "opacity-100"
        }`}
      >
        {afterLabel}
      </span>
    </div>
  );
}