// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';

// gsap.registerPlugin(ScrollTrigger);

// const features = [
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//       </svg>
//     ),
//     title: 'Innovation First',
//     description: 'We stay ahead with cutting-edge solutions',
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg>
//     ),
//     title: 'Expert Team',
//     description: 'Skilled professionals with proven results',
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     ),
//     title: 'Trusted Partner',
//     description: '10+ years of industry experience',
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     ),
//     title: 'Fast Delivery',
//     description: 'Quick turnaround without compromising quality',
//   },
// ];

// const About = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.fromTo(
//       contentRef.current,
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: contentRef.current,
//           start: 'top bottom-=100',
//         },
//       }
//     );

//     gsap.fromTo(
//       imageRef.current,
//       { x: 100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: 'top bottom-=100',
//         },
//       }
//     );
//   }, []);

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Image Grid */}
//           <div ref={imageRef} className="relative">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-4">
//                 <div className="relative h-48 rounded-2xl overflow-hidden">
//                   <Image
//                     src="https://images.unsplash.com/photo-1552581234-26160f608093?w=400&q=80"
//                     alt="Team collaboration"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="relative h-64 rounded-2xl overflow-hidden">
//                   <Image
//                     src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
//                     alt="Office work"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-4 pt-8">
//                 <div className="relative h-64 rounded-2xl overflow-hidden">
//                   <Image
//                     src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=80"
//                     alt="Team meeting"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="relative h-48 rounded-2xl overflow-hidden">
//                   <Image
//                     src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
//                     alt="Creative work"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Experience Badge */}
//             <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
//               <div className="text-4xl font-bold">10+</div>
//               <div className="text-sm">Years Experience</div>
//             </div>
//           </div>

//           {/* Content */}
//           <div ref={contentRef}>
//             <span className="text-primary font-semibold text-lg">About Us</span>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
//               Why Choose <span className="text-primary">DigitalPro?</span>
//             </h2>
//             <p className="text-lg text-gray-600 mb-8">
//               We are a team of passionate digital experts dedicated to helping 
//               businesses thrive in the digital landscape. With over a decade of 
//               experience, we&apos;ve helped hundreds of clients achieve their goals.
//             </p>

//             {/* Features */}
//             <div className="grid sm:grid-cols-2 gap-6">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
//                 >
//                   <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">{feature.title}</h4>
//                     <p className="text-sm text-gray-600">{feature.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button className="mt-8 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
//               Learn More About Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// components/About.tsx
"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { word: 'Strategy', color: 'from-blue-500 to-cyan-500' },
  { word: 'Creativity', color: 'from-purple-500 to-pink-500' },
  { word: 'Technology', color: 'from-orange-500 to-red-500' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-primary-400 font-medium">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              About{' '}
              <span className="gradient-text">Digitally Vibe</span>
            </motion.h2>

            {/* Animated Feature Words */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.span
                  key={feature.word}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${feature.color} text-white font-semibold cursor-default`}
                >
                  {feature.word}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Digitally Vibe is a digital solutions company built for brands that want 
              <span className="text-white"> clarity</span>, 
              <span className="text-white"> consistency</span>, and 
              <span className="text-white"> long-term growth</span>. 
              We combine thoughtful strategy, refined design, and modern technology 
              to deliver meaningful digital outcomes.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {[
                { number: '150+', label: 'Projects Delivered' },
                { number: '50+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-3xl md:text-4xl font-bold gradient-text"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Animated Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 border border-primary-500/20 rounded-full" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 border border-purple-500/20 rounded-full" />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16"
              >
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 border border-pink-500/20 rounded-full" />
              </motion.div>

              {/* Center Logo */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-primary-500/30"
              >
                <span className="text-5xl font-bold text-white">D</span>
              </motion.div>

              {/* Floating Icons */}
              {[
                { icon: '⚡', position: 'top-12 left-12' },
                { icon: '🎨', position: 'top-12 right-12' },
                { icon: '💡', position: 'bottom-12 left-12' },
                { icon: '🚀', position: 'bottom-12 right-12' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5 
                  }}
                  className={`absolute ${item.position} w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}