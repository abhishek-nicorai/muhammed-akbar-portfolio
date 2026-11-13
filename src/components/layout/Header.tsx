"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Stop the page scrolling behind the open menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Solid cream bar: after scrolling, or on any page that isn't the home page
  const solid = scrolled || !isHome;
  // White text: floating over the hero, or when the dark mobile menu is open
  const light = (isHome && !scrolled) || menuOpen;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid && !menuOpen
            ? "border-b border-ink-100/80 bg-paper/65 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Soft dark fade so white text stays readable over the photo */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 to-transparent transition-opacity duration-500 ${
            solid || menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <div
          className={`relative mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 md:px-12 ${
            scrolled ? "h-[72px]" : "h-24"
          } ${light ? "text-white" : "text-ink-900"}`}
        >
          {/* Brand */}
          <Link href="/" className="group flex flex-col gap-1">
            <span className="font-serif text-xl font-light uppercase tracking-[0.1em] transition-opacity duration-300 group-hover:opacity-70 md:text-2xl">
              Muhammed Akbar
            </span>
            <span
              className={`font-sans text-[9px] uppercase tracking-[0.4em] transition-colors duration-500 ${
                light ? "text-neutral-300" : "text-ink-500"
              }`}
            >
              Photographer &amp; Colorist
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 font-sans text-[11px] font-medium uppercase tracking-[0.25em]"
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-center bg-current transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}

    
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-7 bg-current transition-transform duration-500 ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-7 bg-current transition-transform duration-500 ${
                menuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 bg-ink-900 transition-[opacity,visibility] duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-8 pb-12 pt-32">
          <nav className="flex flex-col gap-7">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : "0ms" }}
                className={`flex items-baseline gap-4 font-serif text-4xl font-light text-paper transition-all duration-700 ease-out ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <span className="font-sans text-[11px] tracking-[0.3em] text-ink-300">
                  0{i + 1}
                </span>
                <span className={isActive(link.href) ? "italic" : ""}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div
            style={{ transitionDelay: menuOpen ? "500ms" : "0ms" }}
            className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            
            <p className="text-center font-sans text-[10px] uppercase tracking-[0.3em] text-ink-300">
              Thrissur, Kerala
            </p>
          </div>
        </div>
      </div>

      {/* The header is now fixed, so inner pages need a spacer to avoid
          their content sitting underneath it. The home page doesn't,
          because the hero is meant to sit behind the navbar. */}
      {!isHome && <div aria-hidden className="h-24" />}
    </>
  );
}