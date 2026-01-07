  "use client";
  import React, { useState, useEffect } from "react";
  import Link from "next/link";
  import { ChevronDown } from "lucide-react";
  import Image from "next/image";
  const logo = 'https://digitallyvibe.com/wp-content/uploads/2025/02/cropped-Red-and-White-Modern-D-Letter-Startup-Logo.png';

  export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = (menu: string) => {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    // Services dropdown items
    const servicesDropdown = [
      { href: "seo-onpage", label: "SEO - On Page", icon: "🔍" },
      { href: "seo-offpage", label: "SEO - Off Page", icon: "🔗" },
      { href: "web-development", label: "Web Development", icon: "💻" },
      { href: "android-development", label: "Android Development", icon: "📱" },
      { href: "digital-marketing", label: "Digital Marketing", icon: "📈" },
    ];

    // Navigation links
    const navLinks = [
      { href: "about", label: "About" },
      { href: "portfolio", label: "Portfolio" },
      { href: "/team", label: "Team" },
      { href: "blog", label: "Blog" },
    ];

    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-1 sm:py-2" : "py-2 sm:py-3 md:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div
            className={`relative bg-white backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 px-3 sm:px-4 md:px-6 transition-all duration-500 ${
              scrolled ? "shadow-[0_8px_32px_rgba(255,50,51,0.15)]" : ""
            }`}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#ff3233]/20 via-transparent to-[#ff3233]/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div
              className={`flex justify-between items-center relative ${
                scrolled ? "h-14 sm:h-16" : "h-16 sm:h-18 md:h-20"
              } transition-all duration-500`}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <div className="absolute -inset-1 sm:-inset-2 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />
                  <div className="relative flex items-center">
                    <div
                      className={`relative transition-all duration-500 ${
                        scrolled
                          ? "w-28 h-28 sm:w-12 sm:h-12 md:w-40 md:h-40"
                          : "w-32 h-32 sm:w-14 sm:h-14 md:w-44 md:h-44"
                      }`}
                    >
                      <Image
                        src={logo}
                        alt="DigitallyVibe Logo"
                        fill
                        className="object-contain"
                        unoptimized
                        sizes="(max-width: 640px) 88px, (max-width: 768px) 86px, 84px"
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                {/* Home */}
                <Link href="home" className="relative px-3 xl:px-4 py-2 group">
                  <span className="relative z-10 text-sm font-medium text-gray-600 group-hover:text-[#ff3233] transition-colors duration-300">
                    Home
                  </span>
                  <span className="absolute inset-0 bg-[#ff3233]/0 group-hover:bg-[#ff3233]/10 rounded-xl transition-all duration-300" />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ff3233] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button className="relative px-3 xl:px-4 py-2 flex items-center group">
                    <span className="relative z-10 text-sm font-medium text-gray-600 group-hover:text-[#ff3233] transition-colors duration-300">
                      Services
                    </span>
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-400 group-hover:text-[#ff3233] group-hover:rotate-180 transition-all duration-300" />
                    <span className="absolute inset-0 bg-[#ff3233]/0 group-hover:bg-[#ff3233]/10 rounded-xl transition-all duration-300" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(255,50,51,0.15)] border border-gray-100/50 overflow-hidden">
                      {/* Dropdown header */}
                      <div className="bg-gradient-to-r from-[#ff3233] to-[#ff6b6b] px-5 py-3">
                        <p className="text-white/90 text-xs font-medium uppercase tracking-wider">
                          Our Services
                        </p>
                      </div>
                      <div className="p-2">
                        {servicesDropdown.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-center px-4 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-[#ff3233]/10 hover:to-transparent hover:text-[#ff3233] transition-all duration-300 group/item"
                          >
                            {/* <span className="mr-3 text-lg">{item.icon}</span> */}
                            <span className="text-sm font-medium">{item.label}</span>
                            <ChevronDown className="ml-auto h-4 w-4 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regular Links */}
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="relative px-3 xl:px-4 py-2 group"
                  >
                    <span className="relative z-10 text-sm font-medium text-gray-600 group-hover:text-[#ff3233] transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="absolute inset-0 bg-[#ff3233]/0 group-hover:bg-[#ff3233]/10 rounded-xl transition-all duration-300" />
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ff3233] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                ))}

                {/* CTA Button */}
                <Link href="contact" className="relative ml-2 xl:ml-4 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ff3233] to-[#ff6b6b] rounded-xl opacity-70 blur group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative bg-gradient-to-r from-[#ff3233] to-[#ff3233] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl text-sm font-semibold flex items-center space-x-2 group-hover:shadow-lg transition-all duration-300">
                    <span>Get Quote</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative p-1.5 sm:p-2 rounded-xl hover:bg-[#ff3233]/10 transition-all duration-300 group"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <span
                    className={`absolute left-0 top-0.5 sm:top-1 w-5 sm:w-6 h-0.5 bg-[#ff3233] rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 top-2 sm:top-2.5" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 sm:top-2.5 w-5 sm:w-6 h-0.5 bg-[#ff3233] rounded-full transition-all duration-300 ${
                      isOpen ? "opacity-0 translate-x-2" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3.5 sm:top-4 w-5 sm:w-6 h-0.5 bg-[#ff3233] rounded-full transition-all duration-300 ${
                      isOpen ? "-rotate-45 top-2 sm:top-2.5" : ""
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-4 sm:pb-6 pt-2 sm:pt-4 border-t border-gray-200/50">
                {/* Mobile Home */}
                <Link
                  href="home"
                  className="flex items-center py-2.5 sm:py-3 px-3 sm:px-4 text-gray-700 hover:bg-[#ff3233]/10 rounded-xl transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3">🏠</span>
                  <span className="text-sm font-medium group-hover:text-[#ff3233]">
                    Home
                  </span>
                </Link>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown("mobile-services")}
                    className="flex items-center justify-between w-full py-2.5 sm:py-3 px-3 sm:px-4 text-gray-700 hover:bg-[#ff3233]/10 rounded-xl transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <span className="mr-3">⚡</span>
                      <span className="text-sm font-medium">Services</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                        activeDropdown === "mobile-services"
                          ? "rotate-180 text-[#ff3233]"
                          : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === "mobile-services" ? "max-h-80" : "max-h-0"
                    }`}
                  >
                    <div className="ml-4 sm:ml-6 pl-3 sm:pl-4 border-l-2 border-[#ff3233]/30 space-y-1 py-2">
                      {servicesDropdown.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm text-gray-500 hover:text-[#ff3233] hover:bg-[#ff3233]/5 rounded-lg transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="mr-2">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Regular Links */}
                {[
                  { href: "about", label: "About", icon: "ℹ️" },
                  { href: "portfolio", label: "Portfolio", icon: "🎨" },
                  { href: "testimonials", label: "Testimonials", icon: "⭐" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center py-2.5 sm:py-3 px-3 sm:px-4 text-gray-700 hover:bg-[#ff3233]/10 rounded-xl transition-all duration-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="text-sm font-medium group-hover:text-[#ff3233]">
                      {item.label}
                    </span>
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="mt-3 sm:mt-4 px-3 sm:px-4">
                  <Link
                    href="contact"
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#ff3233] to-[#ff6b6b] text-white py-3 sm:py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-[#ff3233]/25 hover:shadow-[#ff3233]/40 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Get Free Quote</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-4 px-3 sm:px-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <a href="tel:+1234567890" className="flex items-center hover:text-[#ff3233] transition-colors">
                      <span className="mr-1">📞</span>
                      +1 234 567 890
                    </a>
                    <span>|</span>
                    <a href="mailto:hello@digitallyvibe.com" className="flex items-center hover:text-[#ff3233] transition-colors">
                      <span className="mr-1">✉️</span>
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }