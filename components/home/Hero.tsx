// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { TextPlugin } from 'gsap/TextPlugin';
// import Image from 'next/image';
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(TextPlugin);
// }

// const HeroSplitDiagonal = () => {
//   const leftRef = useRef<HTMLDivElement>(null);
//   const rightRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const line1Ref = useRef<HTMLHeadingElement>(null);
//   const line2Ref = useRef<HTMLHeadingElement>(null);
//   const line3Ref = useRef<HTMLHeadingElement>(null);
//   const cursorRef = useRef<HTMLSpanElement>(null);

//   // Split text into individual characters
//   const splitText = (text: string) => {
//     return text.split('').map((char, index) => (
//       <span
//         key={index}
//         className="inline-block char"
//         style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
//       >
//         {char === ' ' ? '\u00A0' : char}
//       </span>
//     ));
//   };

//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

//     // Get all character elements
//     const line1Chars = line1Ref.current?.querySelectorAll('.char');
//     const line2Chars = line2Ref.current?.querySelectorAll('.char');
//     const line3Chars = line3Ref.current?.querySelectorAll('.char');

//     // Initial states
//     gsap.set([line1Chars, line2Chars, line3Chars], {
//       opacity: 0,
//       y: 100,
//       rotateX: -90,
//     });

//     gsap.set(cursorRef.current, { opacity: 0 });

//     // Main animation timeline
//     tl.fromTo(
//       leftRef.current,
//       { x: -100, opacity: 0 },
//       { x: 0, opacity: 1, duration: 1 }
//     )
//       .fromTo(
//         rightRef.current,
//         { x: 100, opacity: 0 },
//         { x: 0, opacity: 1, duration: 1 },
//         '-=0.8'
//       )
//       // Line 1: "We Build" - Wave effect
//       .to(
//         line1Chars,
//         {
//           opacity: 1,
//           y: 0,
//           rotateX: 0,
//           duration: 0.8,
//           stagger: {
//             each: 0.05,
//             from: 'start',
//           },
//           ease: 'back.out(1.7)',
//         },
//         '-=0.3'
//       )
//       // Line 2: "Digital Success" - Dramatic reveal
//       .to(
//         line2Chars,
//         {
//           opacity: 1,
//           y: 0,
//           rotateX: 0,
//           duration: 0.6,
//           stagger: {
//             each: 0.03,
//             from: 'center',
//           },
//           ease: 'elastic.out(1, 0.5)',
//         },
//         '-=0.4'
//       )
//       // Line 3: "Stories" - Smooth slide
//       .to(
//         line3Chars,
//         {
//           opacity: 1,
//           y: 0,
//           rotateX: 0,
//           duration: 0.8,
//           stagger: {
//             each: 0.08,
//             from: 'end',
//           },
//           ease: 'power4.out',
//         },
//         '-=0.3'
//       )
//       // Cursor blink animation
//       .to(
//         cursorRef.current,
//         {
//           opacity: 1,
//           duration: 0.1,
//         },
//         '-=0.5'
//       )
//       // Content fade in
//       .fromTo(
//         contentRef.current?.children || [],
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
//         '-=0.3'
//       );

//     // Cursor blinking animation
//     gsap.to(cursorRef.current, {
//       opacity: 0,
//       duration: 0.5,
//       repeat: -1,
//       yoyo: true,
//       ease: 'power2.inOut',
//       delay: 2.5,
//     });

//     // Continuous floating animation for "Digital Success"
//     gsap.to(line2Chars, {
//       y: -5,
//       duration: 2,
//       stagger: {
//         each: 0.1,
//         repeat: -1,
//         yoyo: true,
//       },
//       ease: 'sine.inOut',
//       delay: 3,
//     });

//     // Subtle color shift animation for line2
//     const colorShift = gsap.timeline({ repeat: -1, delay: 3 });
//     colorShift.to(line2Ref.current, {
//       textShadow: '0 0 20px rgba(255, 50, 51, 0.5)',
//       duration: 1.5,
//       ease: 'sine.inOut',
//     });
//     colorShift.to(line2Ref.current, {
//       textShadow: '0 0 40px rgba(255, 50, 51, 0.8)',
//       duration: 1.5,
//       ease: 'sine.inOut',
//     });
//     colorShift.to(line2Ref.current, {
//       textShadow: '0 0 20px rgba(255, 50, 51, 0.5)',
//       duration: 1.5,
//       ease: 'sine.inOut',
//     });
//     colorShift.to(line2Ref.current, {
//       textShadow: 'none',
//       duration: 1.5,
//       ease: 'sine.inOut',
//     });

//     // Cleanup
//     return () => {
//       tl.kill();
//       colorShift.kill();
//     };
//   }, []);

//   // Hover effect for each line
//   const handleLineHover = (lineRef: React.RefObject<HTMLHeadingElement>) => {
//     const chars = lineRef.current?.querySelectorAll('.char');
//     if (chars) {
//       gsap.to(chars, {
//         scale: 1.1,
//         color: '#ff3233',
//         duration: 0.3,
//         stagger: {
//           each: 0.02,
//           from: 'center',
//         },
//         ease: 'power2.out',
//       });
//     }
//   };

//   const handleLineLeave = (
//     lineRef: React.RefObject<HTMLHeadingElement>,
//     originalColor: string
//   ) => {
//     const chars = lineRef.current?.querySelectorAll('.char');
//     if (chars) {
//       gsap.to(chars, {
//         scale: 1,
//         color: originalColor,
//         duration: 0.3,
//         stagger: {
//           each: 0.02,
//           from: 'center',
//         },
//         ease: 'power2.out',
//       });
//     }
//   };

//   return (
//     <section id="home" className="min-h-screen relative overflow-hidden">
//       {/* Left Side - Content */}
//       <div
//         ref={leftRef}
//         className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-white z-10 flex items-center"
//         style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
//       >
//         <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-20 lg:py-0">
//           <div ref={titleRef} className="perspective-1000">
//             {/* Line 1: We Build */}
//             <h1
//               ref={line1Ref}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight cursor-pointer transform-gpu"
//               style={{ perspective: '1000px' }}
//               onMouseEnter={() => handleLineHover(line1Ref)}
//               onMouseLeave={() => handleLineLeave(line1Ref, '#111827')}
//             >
//               {splitText('We Build')}
//             </h1>

//             {/* Line 2: Digital Success */}
//             <h1
//               ref={line2Ref}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#ff3233] leading-tight cursor-pointer transform-gpu"
//               style={{ perspective: '1000px' }}
//             >
//               {splitText('Digital Success')}
//             </h1>

//             {/* Line 3: Stories */}
//             <h1
//               ref={line3Ref}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight cursor-pointer transform-gpu inline-block"
//               style={{ perspective: '1000px' }}
//               onMouseEnter={() => handleLineHover(line3Ref)}
//               onMouseLeave={() => handleLineLeave(line3Ref, '#111827')}
//             >
//               {splitText('Stories')}
//               <span
//                 ref={cursorRef}
//                 className="inline-block w-1 sm:w-2 h-8 sm:h-12 md:h-14 lg:h-16 xl:h-20 bg-[#ff3233] ml-1 align-middle"
//               />
//             </h1>
//           </div>

//           <div ref={contentRef} className="mt-6 sm:mt-8">
//             <p className="text-base sm:text-lg text-gray-600 max-w-md">
//               Transform your brand with cutting-edge SEO, Web Development,
//               Android Apps & Digital Marketing solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
//               <a
//                 href="#contact"
//                 className="bg-[#ff3233] hover:bg-[#e02d2e] text-white px-6 sm:px-8 py-3 sm:py-2 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl text-center"
//               >
//                 Start Your Project
//               </a>
//               <a
//                 href="#services"
//                 className="border-2 border-gray-900 text-gray-900 px-6 sm:px-8 py-3 sm:py-2 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all text-center"
//               >
//                 Our Services
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div
//         ref={rightRef}
//         className="absolute inset-y-0 right-0 w-full lg:w-[55%] bg-[#ff3233]"
//         style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
//       >
//         <Image
//           src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
//           alt="Team working"
//           fill
//           className="object-cover opacity-20"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white">
//             <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-100">
//               DIGITALLY
//             </div>
//             <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-100">
//               VIBE
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSplitDiagonal;



'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Image from 'next/image';

// Register plugin outside component but guard for SSR
if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

const HeroSplitDiagonal = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  // Split text into individual characters
  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block char"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useEffect(() => {
    // Guard: ensure all refs are mounted
    if (
      !leftRef.current ||
      !rightRef.current ||
      !line1Ref.current ||
      !line2Ref.current ||
      !line3Ref.current ||
      !cursorRef.current ||
      !contentRef.current
    ) {
      return;
    }

    // Create a GSAP context for proper cleanup in React/Next.js
    const ctx = gsap.context(() => {
      // Safely query characters
      const line1Chars = Array.from(
        line1Ref.current?.querySelectorAll('.char') || []
      );
      const line2Chars = Array.from(
        line2Ref.current?.querySelectorAll('.char') || []
      );
      const line3Chars = Array.from(
        line3Ref.current?.querySelectorAll('.char') || []
      );

      // Early return if no characters found
      if (!line1Chars.length || !line2Chars.length || !line3Chars.length) {
        return;
      }

      // Initial states
      gsap.set([...line1Chars, ...line2Chars, ...line3Chars], {
        opacity: 0,
        y: 100,
        rotateX: -90,
      });

      gsap.set(cursorRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Main animation timeline
      tl.fromTo(
        leftRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          rightRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          '-=0.8'
        )
        // Line 1: "We Build" - Wave effect
        .to(
          line1Chars,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: {
              each: 0.05,
              from: 'start',
            },
            ease: 'back.out(1.7)',
          },
          '-=0.3'
        )
        // Line 2: "Digital Success" - Dramatic reveal
        .to(
          line2Chars,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: {
              each: 0.03,
              from: 'center',
            },
            ease: 'elastic.out(1, 0.5)',
          },
          '-=0.4'
        )
        // Line 3: "Stories" - Smooth slide
        .to(
          line3Chars,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: {
              each: 0.08,
              from: 'end',
            },
            ease: 'power4.out',
          },
          '-=0.3'
        )
        // Cursor blink animation
        .to(
          cursorRef.current,
          {
            opacity: 1,
            duration: 0.1,
          },
          '-=0.5'
        )
        // Content fade in
        .fromTo(
          Array.from(contentRef.current?.children || []),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          '-=0.3'
        );

      // Cursor blinking animation
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 2.5,
      });

      // Continuous floating animation for "Digital Success"
      gsap.to(line2Chars, {
        y: -5,
        duration: 2,
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true,
        },
        ease: 'sine.inOut',
        delay: 3,
      });

      // Subtle color shift animation for line2
      const colorShift = gsap.timeline({ repeat: -1, delay: 3 });
      colorShift
        .to(line2Ref.current, {
          textShadow: '0 0 20px rgba(255, 50, 51, 0.5)',
          duration: 1.5,
          ease: 'sine.inOut',
        })
        .to(line2Ref.current, {
          textShadow: '0 0 40px rgba(255, 50, 51, 0.8)',
          duration: 1.5,
          ease: 'sine.inOut',
        })
        .to(line2Ref.current, {
          textShadow: '0 0 20px rgba(255, 50, 51, 0.5)',
          duration: 1.5,
          ease: 'sine.inOut',
        })
        .to(line2Ref.current, {
          textShadow: 'none',
          duration: 1.5,
          ease: 'sine.inOut',
        });
    });

    // Cleanup: gsap.context handles killing all animations created within it
    return () => ctx.revert();
  }, []);

  // Hover effect for each line
  const handleLineHover = (lineRef: React.RefObject<HTMLHeadingElement | null>) => {
    if (!lineRef.current) return;
    const chars = Array.from(lineRef.current.querySelectorAll('.char'));
    if (chars.length) {
      gsap.to(chars, {
        scale: 1.1,
        color: '#ff3233',
        duration: 0.3,
        stagger: {
          each: 0.02,
          from: 'center',
        },
        ease: 'power2.out',
      });
    }
  };

  const handleLineLeave = (
    lineRef: React.RefObject<HTMLHeadingElement | null>,
    originalColor: string
  ) => {
    if (!lineRef.current) return;
    const chars = Array.from(lineRef.current.querySelectorAll('.char'));
    if (chars.length) {
      gsap.to(chars, {
        scale: 1,
        color: originalColor,
        duration: 0.3,
        stagger: {
          each: 0.02,
          from: 'center',
        },
        ease: 'power2.out',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Left Side - Content */}
      <div
        ref={leftRef}
        className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-white z-10 flex items-center"
        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-20 lg:py-0">
          <div ref={titleRef} className="perspective-1000">
            <h1
              ref={line1Ref}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight cursor-pointer transform-gpu"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => handleLineHover(line1Ref)}
              onMouseLeave={() => handleLineLeave(line1Ref, '#111827')}
            >
              {splitText('We Build')}
            </h1>

            <h1
              ref={line2Ref}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#ff3233] leading-tight cursor-pointer transform-gpu"
              style={{ perspective: '1000px' }}
            >
              {splitText('Digital Success')}
            </h1>

            <h1
              ref={line3Ref}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight cursor-pointer transform-gpu inline-block"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => handleLineHover(line3Ref)}
              onMouseLeave={() => handleLineLeave(line3Ref, '#111827')}
            >
              {splitText('Stories')}
              <span
                ref={cursorRef}
                className="inline-block w-1 sm:w-2 h-8 sm:h-12 md:h-14 lg:h-16 xl:h-20 bg-[#ff3233] ml-1 align-middle"
              />
            </h1>
          </div>

          <div ref={contentRef} className="mt-6 sm:mt-8">
            <p className="text-base sm:text-lg text-gray-600 max-w-md">
              Transform your brand with cutting-edge SEO, Web Development,
              Android Apps & Digital Marketing solutions.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="#contact"
                className="bg-[#ff3233] hover:bg-[#e02d2e] text-white px-6 sm:px-8 py-3 sm:py-2 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl text-center"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="border-2 border-gray-900 text-gray-900 px-6 sm:px-8 py-3 sm:py-2 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all text-center"
              >
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
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-100">
              DIGITALLY
            </div>
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-100">
              VIBE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplitDiagonal;