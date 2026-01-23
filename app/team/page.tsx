"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Globe,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import abhi from '@/public/abhi.webp';
import veeresh from '@/public/veeresh.webp';
import felix from '@/public/felix.webp';
import shabu from '@/public/shabu.jpeg';
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Abhi Ram",
    role: "Full stack Developer",
    image: abhi.src,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    name: "Veeresh",
    role: "Full stack Engineer",
    image: veeresh.src,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    name: "Rajyalaxmi",
    role: "Full stack Developer",
    image: "https://i.pinimg.com/736x/06/d2/bc/06d2bc815d91a20137a70b012c7cad4a.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    name: "Felix Thadi",
    role: "Marketing",
    image: felix.src,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    name: "Shabu",
    role: "SEO",
    image: shabu.src,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function TeamPage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  // Navigate to specific member by index
  const goToMember = (targetIndex: number) => {
    if (targetIndex === activeIndex) return;
    
    // Determine direction based on position
    const total = teamMembers.length;
    const diff = targetIndex - activeIndex;
    
    // Calculate shortest path direction
    if (diff > 0) {
      setDirection(diff <= total / 2 ? 1 : -1);
    } else {
      setDirection(Math.abs(diff) <= total / 2 ? -1 : 1);
    }
    
    setActiveIndex(targetIndex);
  };

  // Get actual indices for visible members
  const getVisibleIndices = () => {
    const total = teamMembers.length;
    return {
      farLeftIndex: (activeIndex - 2 + total) % total,
      leftIndex: (activeIndex - 1 + total) % total,
      centerIndex: activeIndex,
      rightIndex: (activeIndex + 1) % total,
      farRightIndex: (activeIndex + 2) % total,
    };
  };

  const getVisibleMembers = () => {
    const indices = getVisibleIndices();
    return {
      farLeft: teamMembers[indices.farLeftIndex],
      left: teamMembers[indices.leftIndex],
      center: teamMembers[indices.centerIndex],
      right: teamMembers[indices.rightIndex],
      farRight: teamMembers[indices.farRightIndex],
    };
  };

  const indices = getVisibleIndices();
  const members = getVisibleMembers();

  const socialIcons = [
    { Icon: Instagram, label: "Instagram" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Facebook, label: "Facebook" },
    { Icon: Globe, label: "Website" },
  ];

  // Animation variants
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const bgTextVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const bgImageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 0.5, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-poppins">
      
      {/* ===== BACKGROUND LAYER ===== */}
      <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
        
        {/* Animated Background Text */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.h1
            key={members.center.name}
            custom={direction}
            variants={bgTextVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-[12%] text-[13vw] font-bold text-gray-50 tracking-tighter whitespace-nowrap hidden lg:block select-none"
          >
            {members.center.name.toUpperCase()}
          </motion.h1>
        </AnimatePresence>
        
        {/* Animated Background Portrait */}
        <div className="absolute top-[15%] w-[500px] h-[85%] hidden md:block overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={members.center.image}
              variants={bgImageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <img
                src={members.center.image}
                alt="Background"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 fade-mask" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ===== FOREGROUND UI LAYER ===== */}
      <div className="relative z-10 w-full h-full">
        
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-[45%] left-[12%] text-2xl text-gray-400 font-light
                      max-lg:top-[10%] max-lg:left-1/2 max-lg:-translate-x-1/2"
        >
          Team members
        </motion.div>

        {/* ===== SLIDER CONTAINER ===== */}
        <div className="absolute bottom-[8%] w-full h-[300px] flex justify-center items-start gap-8 lg:gap-12 px-4">
          
          {/* Dotted Axis Line */}
          <div className="absolute top-[60px] left-0 w-full dotted-line -z-10 hidden md:block" />

          {/* Far Left Circle - Small (Clickable) */}
          <motion.div
            key={`far-left-${members.farLeft.id}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.15, opacity: 1 }}
            onClick={() => goToMember(indices.farLeftIndex)}
            className="hidden lg:block relative w-[90px] h-[90px] rounded-full overflow-hidden 
                        grayscale shadow-soft bg-white mt-[15px]
                        hover:grayscale-0 hover:shadow-lg
                        cursor-pointer transition-all duration-300"
          >
            <img
              src={members.farLeft.image}
              alt={members.farLeft.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Left Circle - Medium (Clickable) */}
          <motion.div
            key={`left-${members.left.id}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => goToMember(indices.leftIndex)}
            className="hidden md:block relative w-[110px] h-[110px] rounded-full overflow-hidden 
                        grayscale shadow-soft bg-white mt-[5px]
                        hover:grayscale-0 hover:shadow-lg
                        cursor-pointer transition-all duration-300"
          >
            <img
              src={members.left.image}
              alt={members.left.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ===== CENTER ACTIVE CARD ===== */}
          <div className="relative w-full max-w-[400px] mt-[60px] z-20">
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={members.center.id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white p-6 pb-10 rounded-md shadow-blue-glow"
              >
                {/* Card Header */}
                <div className="flex items-end gap-5 mb-4">
                  
                  {/* Active Image */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative w-[120px] h-[120px] flex-shrink-0 -mt-[85px]
                                rounded-lg border-[5px] border-white shadow-soft overflow-hidden"
                  >
                    <img
                      src={members.center.image}
                      alt={members.center.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Info Box */}
                  <div className="pb-1">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="text-lg font-bold text-black leading-tight"
                    >
                      {members.center.name}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-sm text-gray-400 font-light mb-2"
                    >
                      {members.center.role}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.25 }}
                      className="flex gap-3"
                    >
                      {socialIcons.map(({ Icon, label }, index) => (
                        <motion.button
                          key={label}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
                          whileHover={{ scale: 1.2 }}
                          aria-label={label}
                          className="text-gray-300 hover:text-primary transition-colors duration-200"
                        >
                          <Icon size={16} strokeWidth={1.5} />
                        </motion.button>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Card Body */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="text-sm text-gray-500 leading-relaxed"
                >
                  {members.center.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 
                          bg-primary rounded-full flex shadow-blue-strong overflow-hidden"
            >
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="px-8 py-3 text-white transition-colors duration-200
                           flex items-center justify-center"
                aria-label="Previous member"
              >
                <ArrowLeft size={18} strokeWidth={2} />
              </motion.button>
              <div className="w-px bg-white/30" />
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="px-8 py-3 text-white transition-colors duration-200
                           flex items-center justify-center"
                aria-label="Next member"
              >
                <ArrowRight size={18} strokeWidth={2} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Circle - Medium (Clickable) */}
          <motion.div
            key={`right-${members.right.id}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => goToMember(indices.rightIndex)}
            className="hidden md:block relative w-[110px] h-[110px] rounded-full overflow-hidden 
                        grayscale shadow-soft bg-white mt-[5px]
                        hover:grayscale-0 hover:shadow-lg
                        cursor-pointer transition-all duration-300"
          >
            <img
              src={members.right.image}
              alt={members.right.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Far Right Circle - Small (Clickable) */}
          <motion.div
            key={`far-right-${members.farRight.id}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.15, opacity: 1 }}
            onClick={() => goToMember(indices.farRightIndex)}
            className="hidden lg:block relative w-[90px] h-[90px] rounded-full overflow-hidden 
                        grayscale shadow-soft bg-white mt-[15px]
                        hover:grayscale-0 hover:shadow-lg
                        cursor-pointer transition-all duration-300"
          >
            <img
              src={members.farRight.image}
              alt={members.farRight.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}