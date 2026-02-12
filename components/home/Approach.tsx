// components/Approach.tsx
"use client";

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Understanding',
    description: 'We dive deep into your business, goals, and challenges to build a solid foundation.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Build with Intention',
    description: 'Every decision is made with purpose, aligning design and technology with your vision.',
    icon: '🏗️',
  },
  {
    number: '03',
    title: 'Execute with Care',
    description: 'Meticulous attention to detail in every aspect of development and delivery.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Refine Continuously',
    description: 'Ongoing optimization and improvement based on data and feedback.',
    icon: '🔄',
  },
];

export default function Approach() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="approach" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-400 font-medium"
          >
            Our Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4"
          >
            <span className="gradient-text">Thoughtful. Precise. Scalable.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 max-w-2xl mx-auto"
          >
            Every decision is driven by clarity, performance, and long-term value.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary-500 to-purple-500"
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex-1 p-8 rounded-2xl glass ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <span className="text-5xl font-bold text-primary-500/30">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </motion.div>

                {/* Center Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center text-3xl shadow-xl shadow-primary-500/30"
                >
                  {step.icon}
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-primary-500/50 animate-ping" />
                </motion.div>

                {/* Empty Space */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}