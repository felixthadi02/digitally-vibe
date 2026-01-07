'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const HeroSplitDiagonal = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(leftRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      .fromTo(rightRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '-=0.8')
      .fromTo(titleRef.current?.children || [], 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, '-=0.5')
      .fromTo(contentRef.current?.children || [], 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }, '-=0.4');
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Left Side - Content */}
      <div 
        ref={leftRef}
        className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-white z-10 flex items-center"
        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-8 lg:px-16 py-20 lg:py-0">
          <div ref={titleRef}>
          
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Build
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff3233] leading-tight">
              Digital Success
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Stories
            </h1>
          </div>

          <div ref={contentRef} className="mt-8">
            <p className="text-lg text-gray-600 max-w-md">
              Transform your brand with cutting-edge SEO, Web Development, 
              Android Apps & Digital Marketing solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className="bg-[#ff3233] hover:bg-[#e02d2e] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl">
                Start Your Project
              </a>
              <a href="#services" className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all">
                Our Services
              </a>
            </div>


          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div 
        ref={rightRef}
        className="absolute inset-y-0 right-0 w-full lg:w-[55%] bg-[#ff3233]"
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
          alt="Team working"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-8xl font-bold opacity-100">DIGITALLY</div>
            <div className="text-8xl font-bold opacity-100">VIBE</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSplitDiagonal;