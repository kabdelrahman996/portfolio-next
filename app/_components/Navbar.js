"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // منع السكرول لما المنيو تكون مفتوحة
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed w-full z-[999] transition-all duration-300 px-6 py-4 ${
        isScrolled || isMenuOpen
          ? "bg-[#030712] border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-white z-[1001]"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="text-cyan-400">&lt;</span> ABK{" "}
          <span className="text-cyan-400">/&gt;</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 border border-cyan-500 text-cyan-400 text-sm rounded hover:bg-cyan-500/10 transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl z-[1001] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX className="text-cyan-400" /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Menu Overlay - تحسين الشفافية والمقاسات */}
        <div
          className={`fixed inset-0 bg-[#030712] z-[1000] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto visible"
              : "opacity-0 pointer-events-none invisible"
          }`}
        >
          <div className="flex flex-col items-center gap-8 w-full px-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium text-gray-300 hover:text-cyan-400 transition-colors tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-4 border-2 border-cyan-500 text-cyan-400 text-lg font-bold rounded-xl mt-4 active:scale-95 transition-transform"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
