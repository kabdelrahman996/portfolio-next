"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // استيراد Link من Next.js

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // 1. مراقبة الـ Scroll لتغيير خلفية الـ Navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // 2. مراقبة السكاشن لتحديد اللينك النشط (Intersection Observer)
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // بيحدد امتى السيكشن يعتبر "نشط"
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // مراقبة كل السكاشن الموجودة في الصفحة
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
      className={`fixed w-full z-50 transition-all duration-300 px-6 lg:px-12 ${
        isScrolled
          ? "py-4 bg-[#030712]/90 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-tighter"
        >
          <span className="text-cyan-400">AB</span>K.
        </Link>

        {/* Desktop Links */}
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
                {/* خط تحت اللينك النشط */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}

          <Link
            href="/resume.pdf"
            download="Abdelrahman_Khaled_Resume.pdf"
            className="px-5 py-2 border border-cyan-500 text-cyan-400 text-sm font-medium rounded hover:bg-cyan-500/10 transition-all"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
