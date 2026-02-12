// components/Vision.tsx
"use client";

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Vision() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-full blur-[150px]"
        />
      </div>

      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-2 rounded-full glass text-primary-400 font-medium mb-8"
        >
          Our Vision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8"
        >
          Shaping{' '}
          <span className="relative inline-block">
            <span className="gradient-text">Confident</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 origin-left"
            />
          </span>
          <br />
          Digital Brands
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
        >
          Our vision is to create digital experiences that help brands grow with 
          <span className="text-primary-400"> confidence</span>,
          <span className="text-purple-400"> relevance</span>, and 
          <span className="text-pink-400"> impact</span>.
        </motion.p>

        {/* Floating Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {['Innovation', 'Excellence', 'Trust', 'Growth'].map((word, index) => (
            <motion.span
              key={word}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: index * 0.2 
              }}
              className="px-6 py-3 rounded-full glass text-white font-medium"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}