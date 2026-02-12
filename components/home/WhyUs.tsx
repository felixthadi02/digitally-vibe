// components/WhyUs.tsx
"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    title: 'Tailored digital strategies',
    description: 'Custom solutions designed specifically for your unique business needs and goals.',
  },
  {
    title: 'Experienced creative and technical teams',
    description: 'Our experts bring years of industry experience to every project.',
  },
  {
    title: 'Clear communication and transparency',
    description: 'Stay informed with regular updates and open, honest communication.',
  },
  {
    title: 'Focus on quality, not shortcuts',
    description: 'We prioritize excellence and sustainable results over quick fixes.',
  },
  {
    title: 'Scalable solutions for growing brands',
    description: 'Solutions that grow with your business and adapt to changing needs.',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated Background Shapes */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity }
                }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-full blur-3xl" />
              </motion.div>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Rings */}
                  {[0, 1, 2].map((ring) => (
                    <motion.div
                      key={ring}
                      animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: "linear" }}
                      className="absolute"
                      style={{
                        width: 200 + ring * 80,
                        height: 200 + ring * 80,
                        left: -(ring * 40),
                        top: -(ring * 40),
                      }}
                    >
                      <div className="w-full h-full border border-primary-500/30 rounded-full" />
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full"
                      />
                    </motion.div>
                  ))}

                  {/* Center Circle */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-primary-500/30"
                  >
                    <span className="text-6xl">🎯</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary-400 font-medium"
            >
              Why Digitally Vibe
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mt-4 mb-12"
            >
              Built for Brands That{' '}
              <span className="gradient-text">Think Long-Term</span>
            </motion.h2>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {/* Animated Checkmark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 flex items-center justify-center"
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </motion.div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}