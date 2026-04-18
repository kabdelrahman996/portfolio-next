"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // أيقونات الموبايل

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // التحكم في منيو الموبايل

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 px-6 lg:px-12 ${
        isScrolled || isMenuOpen
          ? "py-4 bg-[#030712]/95 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-tighter z-[110]"
        >
          <span className="text-cyan-400">&lt;</span>
          ABK
          <span className="text-cyan-400"> /&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 border border-cyan-500 text-cyan-400 text-sm font-medium rounded hover:bg-cyan-500/10 transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white text-3xl z-[110] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX className="text-cyan-400" /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#030712] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)} // يقفل المنيو لما تضغط على لينك
              className={`text-2xl font-semibold tracking-widest transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            onClick={() => setIsMenuOpen(false)}
            className="px-10 py-4 border-2 border-cyan-500 text-cyan-400 text-xl font-bold rounded mt-4"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
