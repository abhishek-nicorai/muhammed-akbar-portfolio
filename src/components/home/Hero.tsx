import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Loader curtain (pure CSS, removes itself after the animation) */}
      <div
        aria-hidden
        className="hero-loader fixed inset-0 z-[100] flex items-center justify-center bg-[#141414] text-[#FAF9F6]"
      >
        <div className="hero-loader-content flex flex-col items-center gap-5 px-6 text-center">
          <span className="font-serif text-2xl md:text-3xl font-light uppercase tracking-[0.35em]">
            Muhammed Akbar
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-neutral-400">
            Wedding Colorist
          </span>
          <span className="block h-px w-40 overflow-hidden bg-white/15">
            <span className="hero-loader-bar block h-full w-full origin-left bg-white" />
          </span>
        </div>
      </div>

      <section className="relative flex min-h-[580px] h-svh w-full items-end overflow-hidden pb-12 md:pb-16">
        {/* Photography */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="hero-image absolute inset-0">
            <Image
              src="/images/Hero.jpg"
              alt="Editorial wedding photography by Muhammed Akbar"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.85]"
            />
          </div>
          {/* Bottom fade for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />
          {/* Soft side vignette so the headline always sits on a darker area */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="site-container text-[#FAF9F6]">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-3xl space-y-5">
              <p className="hero-rise flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-neutral-300">
                <span className="h-px w-8 bg-neutral-300/70" />
                Thrissur, Kerala &bull; 10.5276° N, 76.2144° E
              </p>

              <h1 className="hero-rise [--d:0.12s] font-serif text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Crafting Visual Stories <br className="hidden sm:inline" />
                Through <em className="italic font-normal">Light &amp; Tone</em>
              </h1>

              <p className="hero-rise [--d:0.28s] max-w-lg pt-1 font-sans text-sm font-light leading-relaxed text-neutral-300 md:text-base">
                Wedding Colorist &amp; Visual Artist documenting timeless,
                cinematic celebrations across Kerala and destination venues
                worldwide.
              </p>
            </div>

            <div className="hero-rise [--d:0.44s] flex flex-col items-start gap-8 md:items-end">
              <Link
                href="/portfolio"
                className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#FAF9F6]/80 px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#FAF9F6] transition-colors duration-500 hover:text-neutral-900"
              >
                {/* Fill that slides up on hover */}
                <span className="absolute inset-0 translate-y-full bg-[#FAF9F6] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative">Explore Stories</span>
                <ArrowRight
                  size={14}
                  className="relative transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}