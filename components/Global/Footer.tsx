
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

const logo = '/logo.png';

export default function Footer() {
  const waveRef = useRef<SVGSVGElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Wave animation (keeping only the original animations)
    gsap.to('.wave-path', {
      attr: { d: 'M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100 L1000,200 L0,200 Z' },
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Floating icons (keeping only the original animations)
    gsap.to('.float-icon', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.3,
    });
  }, []);

  const services = [
    { name: 'SEO Optimization', href: '#seo' },
    { name: 'Web Development', href: '#web' },
    { name: 'Android Apps', href: '#android' },
    { name: 'Digital Marketing', href: '#marketing' },
    { name: 'UI/UX Design', href: '#design' },
  ];

  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Careers', href: '#careers' },
  ];

  const social = [
    { name: 'Facebook', icon: 'f', href: '#' },
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'YouTube', icon: '▶', href: '#' },
  ];

  return (
    <footer ref={footerRef} className="relative bg-gray-900 pt-15 overflow-hidden">
      {/* Animated Wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg
          ref={waveRef}
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className="w-full h-24 sm:h-32"
        >
          <path
            className="wave-path"
            d="M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 L1000,200 L0,200 Z"
            fill="#111827"
          />
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#ff3233]/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ff3233]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-40 h-16">
                <Image
                  src={logo}
                  alt="DigitallyVibe"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions. 
              Your success is our mission.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="float-icon w-10 h-10 bg-gray-800 hover:bg-[#ff3233] rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={item.name}
                >
                  <span className="text-sm font-bold">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#ff3233] rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[#ff3233] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#ff3233] transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#ff3233] rounded-full" />
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#ff3233] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#ff3233] transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#ff3233] rounded-full" />
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#ff3233] focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff3233] hover:bg-[#e02d2e] text-white py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Subscribe
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>


      </div>

      {/* ==================== STATIC BIG TEXT SECTION ==================== */}
      <div className="relative py-10 sm:py-12 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-950">
        
        {/* Static Background Pattern */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  #ff3233,
                  #ff3233 1px,
                  transparent 1px,
                  transparent 60px
                ),
                repeating-linear-gradient(
                  -45deg,
                  #ff3233,
                  #ff3233 1px,
                  transparent 1px,
                  transparent 60px
                )
              `,
            }}
          />
        </div>

        {/* Large Background Text Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.02] select-none pointer-events-none">
          <div className="text-[300px] font-black text-white whitespace-nowrap">
            DIGITALLYVIBE.
          </div>
        </div>

        <div className="relative z-10 text-center px-4">
          
          {/* DIGITALLY - Outlined Style */}
          <div className="mb-6 sm:mb-8">
            <h2 
              className="text-5xl sm:text-4xl md:text-6xl lg:text-[120px] xl:text-[150px] font-black leading-none select-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #ff3233',
                textShadow: `
                  0 0 30px rgba(255, 50, 51, 0.3),
                  0 0 60px rgba(255, 50, 51, 0.2),
                  0 0 90px rgba(255, 50, 51, 0.1)
                `,
                letterSpacing: '0.02em',
              }}
            >
              DIGITALLY
            </h2>
          </div>

          {/* Center Divider */}
          <div className="flex items-center justify-center gap-8 mb-6 sm:mb-8">
            <div className="w-24 sm:w-40 h-px bg-gradient-to-r from-transparent to-[#ff3233]" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#ff3233] rounded-full" />
              <div className="w-2 h-2 bg-[#ff3233]/70 rounded-full" />
              <div className="w-2 h-2 bg-[#ff3233]/40 rounded-full" />
            </div>
            <div className="w-24 sm:w-40 h-px bg-gradient-to-l from-transparent to-[#ff3233]" />
          </div>

          {/* VIBE - Solid Gradient Style */}
          <div className="mb-12">
            <h2 
              className="text-6xl sm:text-7xl md:text-[120px] lg:text-[180px] xl:text-[200px] font-black leading-none select-none"
              style={{
                background: 'linear-gradient(180deg, #ff3233 0%, #ff6b6b 50%, #ff3233 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 10px 30px rgba(255, 50, 51, 0.3))',
                letterSpacing: '0.05em',
              }}
            >
              VIBE
            </h2>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase">
              Where Digital Dreams Come Alive
            </p>
          </div>

        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff3233] to-transparent" />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DigitallyVibe. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-[#ff3233] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#ff3233] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-[#ff3233] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}