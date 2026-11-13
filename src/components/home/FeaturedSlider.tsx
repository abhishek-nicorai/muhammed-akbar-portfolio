"use client";

import { useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { FEATURED_WORKS } from "@/constants/featured";

export default function FeaturedSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = FEATURED_WORKS.length;
  const goTo = (i: number) => setIndex((i + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) (diff < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section className="section-y bg-paper">
      <div className="site-container">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.3em] text-ink-500">
            Selected Works
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-ink-900 md:text-5xl">
            Featured Stories
          </h2>
        </div>

        {/* Slider: photo, progress line, caption + controls */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured stories"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="outline-none focus-visible:ring-1 focus-visible:ring-ink-900 focus-visible:ring-offset-8 focus-visible:ring-offset-paper"
        >
          {/* Photo frame (clean, no text on top) */}
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="relative aspect-[4/5] w-full overflow-hidden bg-ink-100 sm:aspect-[3/2] lg:aspect-[16/9]"
          >
            {FEATURED_WORKS.map((work, i) => {
              const active = i === index;
              return (
                <div
                  key={work.id}
                  aria-hidden={!active}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    active ? "z-10 opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className={`object-cover transition-transform duration-[7000ms] ease-out ${
                      active ? "scale-100" : "scale-[1.06]"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Progress line: also the autoplay timer */}
          <div className="h-[2px] w-full bg-ink-100">
            <span
              key={index}
              onAnimationEnd={next}
              style={{ animationPlayState: paused ? "paused" : "running" }}
              className="slide-progress block h-full w-full bg-ink-900"
            />
          </div>

          {/* Caption (left) + controls (right) */}
          <div className="mt-6 flex flex-col gap-8 md:mt-8 md:flex-row md:items-end md:justify-between">
            {/* Captions stacked in one grid cell so the height never jumps */}
            <div className="grid">
              {FEATURED_WORKS.map((work, i) => {
                const active = i === index;
                return (
                  <div
                    key={work.id}
                    aria-hidden={!active}
                    className={`col-start-1 row-start-1 transition-all duration-700 ease-out ${
                      active
                        ? "translate-y-0 opacity-100 delay-300"
                        : "pointer-events-none translate-y-3 opacity-0"
                    }`}
                  >
                    <p className="mb-2 font-sans text-[11px] uppercase tracking-[0.3em] text-ink-500">
                      {work.location}
                    </p>
                    <h3 className="mb-4 font-serif text-2xl font-light tracking-wide text-ink-900 md:text-4xl">
                      {work.title}
                    </h3>
                    <Link
                      href={`/portfolio/${work.slug}`}
                      tabIndex={active ? 0 : -1}
                      className="group inline-flex items-center gap-2 border-b border-ink-900/40 pb-1 font-sans text-xs uppercase tracking-[0.25em] text-ink-900 transition-colors duration-300 hover:border-ink-900"
                    >
                      View Story
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Counter + arrows */}
            <div className="flex items-center justify-between gap-6 md:justify-end">
              <span className="font-sans text-xs tracking-[0.25em] text-ink-500">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous story"
                  className="rounded-full border border-ink-300 p-3 text-ink-900 transition-colors duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-paper"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next story"
                  className="rounded-full border border-ink-300 p-3 text-ink-900 transition-colors duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-paper"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}