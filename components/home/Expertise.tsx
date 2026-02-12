// components/Expertise.tsx
"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  {
    icon: '📊',
    title: 'Digital Marketing',
    description: 'Strategic campaigns designed to build visibility and deliver measurable impact.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🔍',
    title: 'SEO Services',
    description: 'Sustainable organic growth through ethical, long-term optimization.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'High-performance websites crafted for speed, scalability, and experience.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: '📱',
    title: 'App Development',
    description: 'Secure, intuitive applications built to scale with your business.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: '🎨',
    title: 'Branding & Design',
    description: 'Distinct visual identities that communicate purpose and credibility.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: '📣',
    title: 'Social Media Marketing',
    description: 'Content and campaigns that build engagement and brand presence.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: '🎬',
    title: 'VFX & Creative Media',
    description: 'High-impact visuals that elevate storytelling and communication.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: '⛓️',
    title: 'Blockchain Solutions',
    description: 'Future-ready digital systems built on secure decentralized technology.',
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="expertise" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-400 font-medium"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4"
          >
            End-to-End{' '}
            <span className="gradient-text">Digital Capabilities</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full p-6 rounded-2xl glass overflow-hidden cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
                />
                
                {/* Icon */}
                <motion.div
                  animate={{ 
                    rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                    scale: hoveredIndex === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl mb-4"
                >
                  {service.icon}
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ 
                    x: hoveredIndex === index ? 0 : -10,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  className="absolute bottom-6 right-6 text-primary-400"
                >
                  →
                </motion.div>

                {/* Border Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${service.color} pointer-events-none`}
                  style={{ 
                    maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '2px'
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}