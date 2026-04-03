"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Izdelki", href: "/izdelki" },
  { label: "O podjetju", href: "/o-podjetju" },
  { label: "Priznanja", href: "/priznanja" },
  { label: "Kakovost", href: "/kakovost" },
  { label: "Poslovalnice", href: "/poslovalnice" },
  { label: "Kontakt", href: "/kontakt" },
];

const desktopLinks = [
  { label: "Izdelki", href: "/izdelki" },
  { label: "O podjetju", href: "/o-podjetju" },
  { label: "Kakovost", href: "/kakovost" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <nav className="fixed w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 mix-blend-difference text-white">
        <div className="flex justify-between items-center">
          <Link href="/" className="shrink-0 cursor-pointer">
            <span className="font-serif font-bold text-2xl tracking-widest uppercase">
              Fingušt<span className="text-brand-burgundy">.</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-10 items-center">
            {desktopLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs tracking-[0.2em] uppercase font-medium hover-underline-animation"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/poslovalnice"
              className="hidden md:inline-block border border-white/30 hover:border-white px-6 py-2 rounded-full text-xs tracking-widest uppercase transition-all"
            >
              Poslovalnice
            </Link>
            <button onClick={openMenu} className="md:hidden focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-charcoal z-40 flex flex-col justify-center items-center text-white transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-8 right-8 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col space-y-8 text-center">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="font-serif text-4xl italic hover:text-brand-burgundy transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
