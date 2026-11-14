export interface ColorGradingTeaserData {
  tagline: string;
  title: string;
  description: string;
  subDescription: string;
  beforeImage: string;
  afterImage: string;
  ctaText: string;
  ctaLink: string;
}

export const COLOR_GRADING_TEASER: ColorGradingTeaserData = {
  tagline: "The Art of the Grade",
  title: "Sculpting Emotion Through Color Science",
  description:
    "Color grading is more than correction—it is the subtle art of emotional storytelling. By sculpting natural Kerala daylight, controlling highlights, and harmonizing authentic South Indian skin tones with film-inspired palettes, each frame is transformed into a timeless cinematic memory.",
  subDescription:
    "Specializing in bespoke LUT development, high-dynamic-range color workflows for Sony, Canon, and RED Cinema profiles, and end-to-end wedding film color grading.",
  // You can place raw and graded photos in public/images/
  // For now, it gracefully points to your local images
  beforeImage: "/images/featured-1.jpg",
  afterImage: "/images/hero.jpg",
  ctaText: "Explore Colorist Portfolio",
  ctaLink: "/color-grading",
};