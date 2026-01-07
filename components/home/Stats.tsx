'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 500, suffix: '+', label: 'Projects Completed', icon: '🚀' },
  { number: 150, suffix: '+', label: 'Happy Clients', icon: '😊' },
  { number: 98, suffix: '%', label: 'Success Rate', icon: '📈' },
  { number: 24, suffix: '/7', label: 'Support Available', icon: '💬' },
];

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    numberRefs.current.forEach((ref, index) => {
      if (ref) {
        const target = stats[index].number;

        gsap.fromTo(
          ref,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.5,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: ref,
              start: 'top bottom-=100',
            },
            onUpdate: function () {
              ref.innerText = Math.floor(Number(ref.innerText)).toString();
            },
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team working"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Numbers That Speak
          </h2>
          <p className="mt-2 text-white/80">Our achievements in numbers</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                <span ref={(el) => (numberRefs.current[index] = el)}>0</span>
                {stat.suffix}
              </div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;