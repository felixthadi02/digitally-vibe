"use client";

import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Global/Footer";
import Header  from "@/components/Global/Navbar"
import HeroSplitBold from "@/components/home/Hero";
export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  // const [activeService, setActiveService] = useState(0);
const [hoveredService, setHoveredService] = useState<number | null>(null);

const handleServiceClick = (index: number) => {
  setActiveService(index);
};

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  const services = [
    {
      title: "Digital Marketing",
      desc: "Result-oriented campaigns across multiple platforms. We plan, execute, and optimize for maximum ROI.",
      features: ["Campaign Management", "Performance Tracking", "Lead Generation", "Conversion Optimization"],
    },
    {
      title: "SEO Services",
      desc: "Improve organic visibility and build long-term authority with ethical, sustainable SEO practices.",
      features: ["Website Audits", "Content Optimization", "Technical SEO", "Rank Tracking"],
    },
    {
      title: "Web Development",
      desc: "Modern, responsive websites built for performance, security, and scalability that reflect your brand.",
      features: ["Custom Websites", "Landing Pages", "E-Commerce", "CMS Solutions"],
    },
    {
      title: "App Development",
      desc: "Secure, scalable mobile and web applications tailored to your business requirements.",
      features: ["iOS & Android", "Web Applications", "UI/UX Design", "API Integration"],
    },
    {
      title: "Branding & Design",
      desc: "Strong brand identities that communicate clearly, consistently, and memorably.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Creatives"],
    },
    {
      title: "Social Media",
      desc: "Build meaningful connections with strategic content and campaigns across social platforms.",
      features: ["Content Planning", "Community Management", "Paid Campaigns", "Analytics"],
    },
    {
      title: "VFX & Creative",
      desc: "High-impact visual content that captures attention and enhances brand recall.",
      features: ["Motion Graphics", "Video Production", "Visual Effects", "Reels & Shorts"],
    },
    {
      title: "Blockchain",
      desc: "Secure and transparent blockchain solutions for forward-thinking businesses.",
      features: ["Smart Contracts", "DApps", "Consulting", "Custom Solutions"],
    },
  ];

  const processSteps = [
    { num: "01", title: "Discover", desc: "We dive deep into your business, goals, audience, and challenges to understand what success looks like for you." },
    { num: "02", title: "Strategize", desc: "We analyze the market and build a tailored strategy designed specifically around your objectives." },
    { num: "03", title: "Execute", desc: "Our team brings the strategy to life with precision, creativity, and attention to every detail." },
    { num: "04", title: "Optimize", desc: "We continuously track, measure, and refine to ensure maximum performance and ROI." },
  ];

  const testimonials = [
    { name: "Arjun Mehta", role: "CEO, TechStart India", text: "Digitally Vibe transformed our online presence completely. Our leads increased by 300% in just 4 months.", avatar: "AM" },
    { name: "Priya Sharma", role: "Founder, StyleHub", text: "Their branding work gave us an identity that truly resonates with our audience. Absolutely phenomenal team.", avatar: "PS" },
    { name: "Rahul Verma", role: "CTO, FinFlow", text: "The blockchain solution they built was secure, scalable, and exactly what we needed. Highly recommended.", avatar: "RV" },
    { name: "Sneha Patel", role: "Marketing Head, EduLearn", text: "Their SEO strategies brought us to page one for all our key terms. The results speak for themselves.", avatar: "SP" },
    { name: "Vikram Singh", role: "Director, BuildPro", text: "From web development to social media, they handle everything seamlessly. A true full-service partner.", avatar: "VS" },
    { name: "Ananya Gupta", role: "Co-Founder, GreenLife", text: "The VFX content they created for our campaign went viral. Creative, professional, and always on time.", avatar: "AG" },
  ];

  const faqs = [
    { q: "What industries do you work with?", a: "We work with startups, local businesses, institutions, e-commerce brands, tech companies, and more. Our strategies are tailored to each industry's unique needs." },
    { q: "How long does it take to see results?", a: "It depends on the service. Paid campaigns can show results within weeks, while SEO typically takes 3-6 months for sustainable growth. We set realistic expectations from day one." },
    { q: "Do you offer custom packages?", a: "Absolutely. We don't believe in one-size-fits-all. Every package is built around your specific goals, budget, and timeline." },
    { q: "How do you measure success?", a: "We track KPIs that matter to your business — leads, conversions, traffic, engagement, ROI — and provide detailed reports with actionable insights." },
    { q: "Can you handle everything from design to development?", a: "Yes. We're a full-service digital agency. From branding and design to development, marketing, and beyond — we've got you covered." },
  ];

  const navLinks = ["Services", "Process", "Testimonials", "FAQ", "Contact"];

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Navbar */}
      <Header/>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-between bg-white overflow-hidden pt-25">

        {/* Background Image - People on Right Side */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=900&fit=crop"
            alt="Team working"
            className="w-full h-full object-cover object-right"
          />
          {/* Left fade to white so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-50% to-white/20" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="w-full lg:w-[55%]">
            <h1 className="text-[12vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter text-gray-900">
              WE
              <span className="block text-red-600">CREATE</span>
              <span className="block flex items-center gap-4 lg:gap-8">
                <span>DIGITAL</span>
                <span className="inline-block w-[15vw] lg:w-[10vw] h-[8vw] lg:h-[5vw] rounded-2xl bg-gradient-to-r from-red-500 to-red-600 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-[3vw] lg:text-[2vw] font-light">
                    ✦
                  </div>
                </span>
              </span>
              <span className="block text-gray-300 hover:text-gray-900 transition-colors duration-500 cursor-default">
                MAGIC
              </span>
            </h1>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>
      {/* about section */}
      <section id="about" className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-[#0c1a2b]">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      
      {/* Left Side - Images */}
      <div className="relative">
        {/* Main Large Image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=600&fit=crop" 
            alt="Team collaboration"
            className="w-[85%] h-[450px] sm:h-[550px] object-cover rounded-lg"
          />
          
          {/* Small Overlapping Image */}
          <div className="absolute -bottom-8 right-0 w-[55%] border-[6px] border-[#0c1a2b] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=280&fit=crop" 
              alt="Business meeting"
              className="w-full h-[200px] sm:h-[250px] object-cover"
            />
          </div>
        </div>
        
        {/* Experience Badge - Red Box */}
        <div className="absolute top-6 right-0 sm:right-4 bg-[#c8102e] py-6 px-5 text-center w-[120px] sm:w-[140px]">
          <p className="text-white text-4xl sm:text-5xl font-bold leading-none">25</p>
          <p className="text-white/90 text-xs sm:text-sm mt-2 leading-tight">
            Years of<br />Experience
          </p>
        </div>
      </div>
      
      {/* Right Side - Content */}
      <div className="lg:pt-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="text-[#c8102e] text-sm font-medium tracking-wide">____</span>
          <span className="text-[#c8102e] text-sm font-medium uppercase tracking-wider">About Company</span>
        </div>
        
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] font-bold text-white leading-[1.2] mb-5">
          Preparing For Your Success,<br />
          We Provide <span className="text-[#c8102e]">Truly Prominent</span><br />
          Solutions.
        </h2>
        
        {/* Description */}
        <p className="text-[#8a9bae] text-[15px] leading-[1.8] mb-8">
          Knack to provide customer oriented services using cutting edge technologies at competitive prices with complete customer satisfaction. We are a bunch of enthusiastic young talents having the potential to provide one stop IT solutions.
        </p>
        
        {/* Features List */}

        
        {/* Divider */}
        <div className="border-t border-[#1e3a5f] my-8"></div>

      </div>
    </div>
  </div>
      </section>
      {/* Services */}
   <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Our Expertise
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        End-to-End Digital Capabilities
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Digital Marketing */}
      <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
          <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Digital Marketing
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Strategic campaigns designed to build visibility and deliver measurable impact.
        </p>
      </div>

      {/* SEO Services */}
      <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
          <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          SEO Services
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Sustainable organic growth through ethical, long-term optimization.
        </p>
      </div>

      {/* Web Development */}
      <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
          <svg className="w-6 h-6 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Web Development
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          High-performance websites crafted for speed, scalability, and experience.
        </p>
      </div>

      {/* App Development */}
      <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500 transition-colors">
          <svg className="w-6 h-6 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          App Development
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Secure, intuitive applications built to scale with your business.
        </p>
      </div>

      {/* Branding & Design */}
      <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500 transition-colors">
          <svg className="w-6 h-6 text-pink-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Branding & Design
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Distinct visual identities that communicate purpose and credibility.
        </p>
      </div>

      {/* Social Media Marketing */}
      <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
          <svg className="w-6 h-6 text-orange-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Social Media Marketing
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Content and campaigns that build engagement and brand presence.
        </p>
      </div>

      {/* VFX & Creative Media */}
      <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
          <svg className="w-6 h-6 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          VFX & Creative Media
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          High-impact visuals that elevate storytelling and communication.
        </p>
      </div>

      {/* Blockchain Solutions */}
      <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
          <svg className="w-6 h-6 text-teal-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Blockchain Solutions
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Future-ready digital systems built on secure decentralized technology.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Process */}
     <section id="process" className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-red-100/30 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-50/40 rounded-full blur-3xl" />
    <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="process-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#process-grid)" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto relative">
    {/* Header */}
    <div
      id="process-header"
      ref={registerRef("process-header")}
      className={`text-center mb-20 transition-all duration-700 ${
        visibleSections.has("process-header")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-100/80 text-sm text-red-600 font-semibold mb-6 shadow-sm">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Our Process
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight">
        How We{" "}
        <span className="relative inline-block">
          <span className="relative z-10 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Make It Happen
          </span>
          <svg
            className="absolute -bottom-2 left-0 w-full h-3 text-red-200/60"
            viewBox="0 0 200 12"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M1 8C30 2 60 1 100 4C140 7 170 3 199 1"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
        A proven, transparent process that delivers results consistently.
        <br className="hidden sm:block" />
        No guesswork, no surprises.
      </p>
    </div>

    {/* Connection line for desktop */}
    <div className="hidden lg:block absolute top-[calc(50%+2rem)] left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5">
      <div
        className={`h-full bg-gradient-to-r from-red-200 via-red-300 to-red-200 rounded-full transition-all duration-1000 delay-300 ${
          visibleSections.has("process-steps")
            ? "scale-x-100 opacity-100"
            : "scale-x-0 opacity-0"
        }`}
        style={{ transformOrigin: "left" }}
      />
    </div>

    {/* Steps */}
    <div
      id="process-steps"
      ref={registerRef("process-steps")}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative"
    >
      {processSteps.map((step, i) => (
        <div
          key={i}
          className={`group relative transition-all duration-700 ${
            visibleSections.has("process-steps")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: `${i * 200}ms` }}
        >
          <div className="relative h-full">
            {/* Card */}
            <div className="relative p-8 pt-14 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100/80 hover:border-red-200/80 transition-all duration-500 h-full group-hover:shadow-xl group-hover:shadow-red-100/30 group-hover:-translate-y-2">
              {/* Step number badge */}
              <div className="absolute -top-5 left-8">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-red-200/50 group-hover:shadow-red-300/50 group-hover:scale-110 transition-all duration-500 rotate-3 group-hover:rotate-0">
                    {step.num}
                  </div>
                  {/* Connector dot for desktop */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-red-300 group-hover:border-red-500 group-hover:bg-red-50 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Icon area */}
              <div className="w-12 h-12 rounded-2xl bg-red-50 group-hover:bg-red-100/80 flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110">
                {i === 0 && (
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                )}
                {i === 3 && (
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-transparent via-red-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>

          {/* Mobile connector */}
          {i < processSteps.length - 1 && (
            <div className="flex lg:hidden justify-center my-2">
              <div className="flex flex-col items-center gap-1">
                <div className="w-0.5 h-4 bg-red-200 rounded-full" />
                <svg className="w-4 h-4 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>


  </div>
</section>


      {/* Testimonials */}
      <section id="testimonials" className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            id="testimonials-header"
            ref={registerRef("testimonials-header")}
            className={`text-center mb-16 transition-all duration-700 ${
              visibleSections.has("testimonials-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-sm text-red-600 font-medium mb-6">
              Client Stories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              What Our Clients <span className="text-red-600">Say</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Real results from real businesses. Here&apos;s what they have to say about working with us.
            </p>
          </div>

          <div
            id="testimonials-grid"
            ref={registerRef("testimonials-grid")}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`group p-8 rounded-2xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-500 ${
                  visibleSections.has("testimonials-grid") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div
            id="faq-header"
            ref={registerRef("faq-header")}
            className={`text-center mb-16 transition-all duration-700 ${
              visibleSections.has("faq-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-sm text-red-600 font-medium mb-6">
              FAQs
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Got <span className="text-red-600">Questions?</span>
            </h2>
            <p className="text-gray-500 text-lg">We&apos;ve got answers. If you don&apos;t find what you need, just reach out.</p>
          </div>

          <div
            id="faq-list"
            ref={registerRef("faq-list")}
            className={`space-y-3 transition-all duration-700 ${
              visibleSections.has("faq-list") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                  openFaq === i ? "border-red-200 bg-red-50/50 shadow-sm" : "border-gray-200 bg-white hover:border-red-200"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-gray-900 font-semibold pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openFaq === i ? "bg-red-600 rotate-180" : "bg-gray-100"
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${openFaq === i ? "text-white" : "text-gray-400"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFaq === i ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            id="contact-section"
            ref={registerRef("contact-section")}
            className={`relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm transition-all duration-700 ${
              visibleSections.has("contact-section") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-10 sm:p-14 lg:p-16 bg-red-600 text-white">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Ready to Grow
                  <br />
                  Digitally?
                </h2>
                <p className="text-red-100 text-lg leading-relaxed mb-10">
                  Let&apos;s discuss your project and build a strategy that drives real results. Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Email", value: "info@digitallyvibe.com" },
                    { label: "Phone", value: "+91 8179118725" },
                    { label: "Location", value: "India & Worldwide" },
                  ].map((info, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                          {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                          {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />}
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-red-200 uppercase tracking-wider">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Form */}
              <div className="p-10 sm:p-14 lg:p-16">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! We'll get back to you within 24 hours.");
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-500 mb-2 font-medium">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-2 font-medium">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2 font-medium">Service Interested In</label>
                    <select
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((s, i) => (
                        <option key={i} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2 font-medium">Message</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-red-600 text-white font-semibold text-base hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/25 z-40 transition-all duration-500 hover:scale-110 hover:bg-red-700 ${
          scrollY > 500 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}