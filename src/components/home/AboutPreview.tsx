import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_PREVIEW } from "@/constants/about";

export default function AboutPreview() {
  const data = ABOUT_PREVIEW;

  return (
    <section className="section-y bg-paper">
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-0">
          {/* Portrait with an offset frame behind it */}
          <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 border border-ink-300 md:translate-x-5 md:translate-y-5"
            />
            <div className="group relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
              <Image
                src={data.portraitImage}
                alt={data.portraitAlt}
                fill
                sizes="(max-width: 1024px) 384px, 500px"
                className="object-cover transition-transform duration-[1500ms] ease-out lg:group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text: starts one column in, so there is breathing room */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="mb-6 flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.3em] text-ink-500">
              <span className="h-px w-10 bg-ink-300" />
              {data.tagline}
            </p>

            <h2 className="mb-8 font-serif text-4xl font-light leading-[1.15] tracking-tight text-ink-900 md:text-5xl">
              &ldquo;{data.headline}&rdquo;
            </h2>

            <p className="mb-10 max-w-md font-sans text-sm font-light leading-relaxed text-ink-700 md:text-base">
              {data.introLines[0]}
            </p>

            <Link
              href={data.readMoreLink}
              className="group inline-flex items-center gap-2 border-b border-ink-900/40 pb-1 font-sans text-xs uppercase tracking-[0.25em] text-ink-900 transition-colors duration-300 hover:border-ink-900"
            >
              Read My Story
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}