import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-[#FAF9F6] py-16 px-6 md:px-12 text-ink-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        {/* Brand statement */}
        <div className="space-y-3">
          <p className="font-serif text-2xl text-ink-900 tracking-wide">
            MUHAMMED AKBAR
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-ink-500 font-sans">
            Crafting visual stories through light &amp; tone
          </p>
          <p className="text-xs text-ink-500 font-sans">
            Thrissur, Kerala &bull; Worldwide Available
          </p>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:items-end space-y-4">
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-ink-500 hover:text-ink-900 transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="text-[11px] text-ink-500 tracking-wider font-sans">
            &copy; {currentYear} Muhammed Akbar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}