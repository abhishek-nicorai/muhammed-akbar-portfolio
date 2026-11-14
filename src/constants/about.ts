export interface AboutPreviewData {
  tagline: string;
  headline: string;
  introLines: string[];
  portraitImage: string;
  portraitAlt: string;
  locationStamp: string;
  readMoreLink: string;
}

export const ABOUT_PREVIEW: AboutPreviewData = {
  tagline: "The Artist & Colorist",
  headline: "Every frame carries an emotional frequency shaped by light and refined through tone.",
  introLines: [
    "Based out of Thrissur, Kerala, Muhammed Akbar is a visual artist, destination wedding photographer, and dedicated colorist.",
    "Blending cinematic photojournalism with meticulous color science, he documents intimate human moments and grand heritage celebrations across South India and abroad.",
    "His craft focuses on authentic skin fidelity, natural daylight transitions, and timeless palettes created to age gracefully for generations.",
  ],
  portraitImage: "/images/akbar-portrait.jpg", // Drop his portrait here
  portraitAlt: "Muhammed Akbar, Photographer & Colorist",
  locationStamp: "THRISSUR, KERALA • AVAILABLE WORLDWIDE",
  readMoreLink: "/about",
};