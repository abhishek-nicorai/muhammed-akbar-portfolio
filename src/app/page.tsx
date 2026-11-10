// import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Subtitle with tracked uppercase spacing */}
      <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-ink-500 mb-4 font-sans font-medium">
        Thrissur, Kerala &bull; 10.5276° N, 76.2144° E
      </p>

      {/* Main Luxury Serif Heading */}
      <h1 className="text-5xl md:text-7xl font-serif font-light text-ink-900 mb-6 tracking-tight">
        Muhammed Akbar
      </h1>

      <p className="text-base md:text-lg text-ink-700 font-light max-w-lg mb-8 leading-relaxed font-sans">
        Wedding Colorist &amp; Visual Artist crafting cinematic stories through light and tone.
      </p>

      <div className="w-16 h-[1px] bg-ink-300"></div>
    </main>
  );
}
