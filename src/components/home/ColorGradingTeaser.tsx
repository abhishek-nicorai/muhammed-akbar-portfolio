import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { COLOR_GRADING_TEASER } from "@/constants/colorGrading";

export default function ColorGradingTeaser() {
  const data = COLOR_GRADING_TEASER;

  return (
    <section className="section-y bg-ink-900 text-paper">
      <div className="site-container">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.3em] text-ink-300">
            {data.tagline}
          </p>
          <h2 className="max-w-3xl font-serif text-4xl font-light leading-[1.1] tracking-tight text-paper md:text-5xl lg:text-6xl">
            {data.title}
          </h2>

          {/* Visible on mobile and tablet only */}
          <p className="mt-6 max-w-xl font-sans text-sm font-light leading-relaxed text-ink-300 md:text-base lg:hidden">
            {data.description}
          </p>
        </div>

        {/* Before / After slider */}
        <BeforeAfterSlider
          beforeImage={data.beforeImage}
          afterImage={data.afterImage}
          aspectRatio="aspect-[4/3] md:aspect-[3/2] max-h-[80vh]"
        />

        {/* Hint + link: stacked on mobile, one row from sm up */}
        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:mt-8">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-ink-300">
            Drag to compare
          </p>

          <Link
            href={data.ctaLink}
            className="group flex w-full items-center justify-between gap-4 border border-paper/30 px-5 py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-paper sm:inline-flex sm:w-auto sm:justify-start sm:gap-2 sm:border-0 sm:border-b sm:border-paper/40 sm:px-0 sm:py-0 sm:pb-1 sm:text-xs sm:tracking-[0.25em] sm:hover:border-paper"
          >
            <span>{data.ctaText}</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}