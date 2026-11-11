"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-2xl tracking-wide text-ink-900 group-hover:opacity-70 transition-opacity">
            MUHAMMED AKBAR
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-ink-500 font-sans">
            Photographer &amp; Colorist
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-ink-700 hover:text-ink-900 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs uppercase tracking-[0.2em] px-5 py-2.5 border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper transition-all duration-300"
          >
            Inquire
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-ink-900 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-ink-100 px-6 py-8 flex flex-col space-y-6 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-ink-700 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xs uppercase tracking-[0.2em] text-center py-3 border border-ink-900 text-ink-900"
          >
            Inquire
          </Link>
        </div>
      )}
    </header>
  );
}