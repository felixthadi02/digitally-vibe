// components/Industries.tsx
"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const industries = [
  'E-Commerce', 'Healthcare', 'Finance', 'Education', 
  'Real Estate', 'Technology', 'Entertainment', 'Retail',
  'Manufacturing', 'Hospitality', 'Automotive', 'Non-Profit'
];

// Create a reversed copy for the second row
const industriesReversed = [...industries].reverse();

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-400 font-medium"
          >
            Industries We Work With
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4"
          >
            Trusted <span className="gradient-text">Across Sectors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 max-w-2xl mx-auto"
          >
            We collaborate with startups, businesses, institutions, and enterprises 
            across diverse industries, delivering digital solutions aligned with their unique goals.
          </motion.p>
        </div>

        {/* Infinite Scroll Industries */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
          
          {/* First Row - Using CSS Animation */}
          <div className="flex gap-6 mb-6 animate-marquee">
            {[...industries, ...industries, ...industries].map((industry, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 px-8 py-4 rounded-full glass hover:border-primary-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span className="text-white font-medium whitespace-nowrap">{industry}</span>
              </div>
            ))}
          </div>

          {/* Second Row - Reverse Direction */}
          <div className="flex gap-6 animate-marquee-reverse">
            {[...industriesReversed, ...industriesReversed, ...industriesReversed].map((industry, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 px-8 py-4 rounded-full glass hover:border-primary-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span className="text-white font-medium whitespace-nowrap">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}