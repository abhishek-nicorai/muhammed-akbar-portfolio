import Hero from "@/components/home/Hero";
import FeaturedSlider from "@/components/home/FeaturedSlider";
import ColorGradingTeaser from "@/components/home/ColorGradingTeaser";


export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <FeaturedSlider />
      <ColorGradingTeaser />
    </main>
  );
}