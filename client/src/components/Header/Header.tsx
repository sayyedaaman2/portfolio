"use client";

import Link from "next/link";
import { useState } from "react";

import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import HamburgerButton from "./HamburgerButton";

const navigation = [
  { title: "Projects", href: "#projects" },
  { title: "Architecture", href: "#architecture" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-[88px] border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeButton />

            <button className="hidden lg:flex bg-[#3B82F6] hover:bg-[#2563EB] transition-colors px-5 py-3 rounded-2xl text-sm font-semibold">
              Resume
            </button>

            <HamburgerButton
              isActive={isOpen}
              onToggle={() => setIsOpen((prev) => !prev)}
              className="lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            />
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        id="mobile-navigation"
        className={`fixed top-[88px] left-0 right-0 z-40 border-b border-white/10 bg-[#111827] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-6">
          {navigation.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center py-4 text-[#9CA3AF] hover:text-white transition-colors border-b border-white/5"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}