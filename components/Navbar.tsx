"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Memberships", "/memberships"],
  ["Classes", "/classes"],
  ["Trainers", "/trainers"],
  ["Programs", "/programs"],
  ["Results", "/results"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
            ? "border-zinc-800 bg-zinc-950/95 backdrop-blur-lg shadow-lg shadow-black/20"
            : "border-transparent bg-zinc-950/80 backdrop-blur"
          }`}
      >
        <nav className="container flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-2xl font-black tracking-wide gradient-text"
          >
            GymFit
          </Link>

          {/* Desktop Links */}
          <ul className="hidden gap-6 text-sm md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="nav-link text-zinc-300 hover:text-brand-500">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-block btn-primary text-sm !px-4 !py-2"
            >
              Book Free Trial
            </Link>

            {/* Hamburger Button */}
            <button
              className="flex flex-col gap-1.5 md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-2xl font-bold text-zinc-200 hover:text-brand-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-4 text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Book Free Trial
          </Link>
        </div>
      </div>
    </>
  );
}
