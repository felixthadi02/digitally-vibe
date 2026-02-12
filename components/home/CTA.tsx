// components/CTA.tsx
"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import MagneticButton from './MagneticButton';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Gradient Orbs */}
      <motion.div
        animate={{ 
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.4 : 0.2
        }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-600 to-purple-600 rounded-full blur-[150px]"
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="p-12 md:p-16 rounded-3xl glass"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Build Something{' '}
            <span className="gradient-text">Meaningful</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10"
          >
            Whether you're launching, scaling, or refining — we're here to help you 
            move forward digitally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </MagneticButton>

            <MagneticButton className="group px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
              <span className="flex items-center gap-2">
                Request a Consultation
                <span className="group-hover:rotate-45 transition-transform">↗</span>
              </span>
            </MagneticButton>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10"
          >
            <a href="mailto:hello@digitallyvibe.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span>📧</span>
              hello@digitallyvibe.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span>📞</span>
              +1 (234) 567-890
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}