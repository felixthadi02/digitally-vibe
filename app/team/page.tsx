"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Globe,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Target
} from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  speciality?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/300?img=13",
    description: "Passionate about creating seamless user experiences with modern web technologies. Expert in React, TypeScript, and responsive design.",
    speciality: "React Expert"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Product Manager",
    image: "https://i.pravatar.cc/300?img=59",
    description: "Strategic thinker with a track record of delivering innovative products that exceed user expectations and drive business growth.",
    speciality: "Strategy Lead"
  },
  {
    id: 3,
    name: "Hossein Mahmoodi",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=11",
    description: "Creative visionary specializing in user-centered design, creating intuitive interfaces that delight users and solve real problems.",
    speciality: "Design Systems"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/300?img=26",
    description: "Building robust and scalable server architectures. Experienced in Node.js, Python, and cloud infrastructure.",
    speciality: "Cloud Architecture"
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "DevOps Engineer",
    image: "https://i.pravatar.cc/300?img=8",
    description: "Streamlining development workflows and ensuring reliable deployments. Expert in CI/CD, containerization, and monitoring.",
    speciality: "Automation Pro"
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "100+", label: "Projects Done" },
  { icon: Target, value: "99%", label: "Client Satisfaction" },
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

  const goToMember = (targetIndex: number) => {
    if (targetIndex === activeIndex) return;
    
    const total = teamMembers.length;
    const diff = targetIndex - activeIndex;
    
    if (diff > 0) {
      setDirection(diff <= total / 2 ? 1 : -1);
    } else {
      setDirection(Math.abs(diff) <= total / 2 ? -1 : 1);
    }
    
    setActiveIndex(targetIndex);
  };

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
    center: { opacity: 0.3, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 font-poppins">
      
      {/* ===== HERO SECTION ===== */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full px-4 py-16 lg:py-24 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 
                         bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                         border border-blue-200/50 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 
                         bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 
                         bg-clip-text text-transparent"
            >
              Brilliant Minds,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Exceptional Results
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Our diverse team of experts brings together years of experience, 
              creativity, and passion to deliver innovative solutions that transform ideas into reality.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-20 
                               group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 
                               border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <stat.icon className="w-8 h-8 mb-3 text-blue-500 mx-auto" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
                                bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-20" />
      </motion.section>

      {/* ===== TEAM CAROUSEL SECTION ===== */}
      <div className="relative w-full pb-20">
        
        {/* Background Layer */}
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
              className="absolute top-[5%] text-[11vw] font-black text-gray-100/50 tracking-tighter 
                        whitespace-nowrap hidden lg:block select-none"
            >
              {members.center.name.toUpperCase()}
            </motion.h1>
          </AnimatePresence>
          
          {/* Animated Background Portrait */}
          <div className="absolute top-[10%] w-[450px] h-[70%] hidden md:block overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                <img
                  src={members.center.image}
                  alt="Background"
                  className="w-full h-full object-cover grayscale opacity-30"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Foreground UI Layer */}
        <div className="relative z-10 w-full">
          
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-[20%] left-[8%] max-lg:top-[5%] max-lg:left-1/2 max-lg:-translate-x-1/2"
          >
            <div className="text-sm font-medium text-blue-500 mb-2">TEAM SHOWCASE</div>
            <div className="text-3xl font-bold text-gray-800">
              Our <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Talented</span> People
            </div>
          </motion.div>

          {/* Slider Container */}
          <div className="absolute bottom-[8%] w-full h-[320px] flex justify-center items-start gap-6 lg:gap-10 px-4">
            
            {/* Decorative Line */}
            <svg className="absolute top-[70px] left-0 w-full h-px hidden md:block -z-10">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="0" x2="100%" y2="0" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
            </svg>

            {/* Far Left Circle */}
            <motion.div
              key={`far-left-${members.farLeft.id}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.15, opacity: 1 }}
              onClick={() => goToMember(indices.farLeftIndex)}
              className="hidden lg:block relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl 
                            opacity-0 group-hover:opacity-50 transition-all duration-300" />
              <div className="relative w-[95px] h-[95px] rounded-full overflow-hidden mt-[18px]
                            ring-2 ring-white shadow-xl bg-white
                            transform transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-400/50">
                <img
                  src={members.farLeft.image}
                  alt={members.farLeft.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                            transition-all duration-300 text-xs font-medium text-gray-700 whitespace-nowrap">
                {members.farLeft.name}
              </div>
            </motion.div>

            {/* Left Circle */}
            <motion.div
              key={`left-${members.left.id}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.85 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => goToMember(indices.leftIndex)}
              className="hidden md:block relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl 
                            opacity-0 group-hover:opacity-50 transition-all duration-300" />
              <div className="relative w-[115px] h-[115px] rounded-full overflow-hidden mt-[8px]
                            ring-2 ring-white shadow-xl bg-white
                            transform transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-400/50">
                <img
                  src={members.left.image}
                  alt={members.left.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                            transition-all duration-300 text-xs font-medium text-gray-700 whitespace-nowrap">
                {members.left.name}
              </div>
            </motion.div>

            {/* Center Active Card */}
            <div className="relative w-full max-w-[420px] mt-[70px] z-20">
              
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={members.center.id}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20" />
                  
                  {/* Card Content */}
                  <div className="relative bg-white/95 backdrop-blur-xl p-6 pb-10 rounded-2xl 
                                shadow-2xl border border-gray-100/50">
                    
                    {/* Speciality Badge */}
                    {members.center.speciality && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 
                                 text-white text-xs font-medium rounded-full"
                      >
                        {members.center.speciality}
                      </motion.div>
                    )}
                    
                    {/* Card Header */}
                    <div className="flex items-end gap-5 mb-4">
                      
                      {/* Active Image */}
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative flex-shrink-0 -mt-[90px]"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-50" />
                        <div className="relative w-[130px] h-[130px] rounded-2xl ring-4 ring-white shadow-2xl overflow-hidden">
                          <img
                            src={members.center.image}
                            alt={members.center.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>

                      {/* Info Box */}
                      <div className="pb-1 flex-1">
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                          className="text-xl font-bold text-gray-900 leading-tight mb-1"
                        >
                          {members.center.name}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="text-sm font-medium text-blue-600 mb-3"
                        >
                          {members.center.role}
                        </motion.p>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.25 }}
                          className="flex gap-2"
                        >
                          {socialIcons.map(({ Icon, label }, index) => (
                            <motion.button
                              key={label}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              aria-label={label}
                              className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center
                                       text-gray-400 hover:text-blue-600 hover:bg-blue-50
                                       transition-all duration-200"
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
                      className="text-sm text-gray-600 leading-relaxed"
                    >
                      {members.center.description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
                           text-white shadow-lg hover:shadow-xl
                           flex items-center justify-center transition-all duration-200"
                  aria-label="Previous member"
                >
                  <ArrowLeft size={20} strokeWidth={2.5} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 
                           text-white shadow-lg hover:shadow-xl
                           flex items-center justify-center transition-all duration-200"
                  aria-label="Next member"
                >
                  <ArrowRight size={20} strokeWidth={2.5} />
                </motion.button>
              </motion.div>

              {/* Dots Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2"
              >
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToMember(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to team member ${index + 1}`}
                  />
                ))}
              </motion.div>
            </div>

            {/* Right Circle */}
            <motion.div
              key={`right-${members.right.id}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.85 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => goToMember(indices.rightIndex)}
              className="hidden md:block relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl 
                            opacity-0 group-hover:opacity-50 transition-all duration-300" />
              <div className="relative w-[115px] h-[115px] rounded-full overflow-hidden mt-[8px]
                            ring-2 ring-white shadow-xl bg-white
                            transform transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-400/50">
                <img
                  src={members.right.image}
                  alt={members.right.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                            transition-all duration-300 text-xs font-medium text-gray-700 whitespace-nowrap">
                {members.right.name}
              </div>
            </motion.div>

            {/* Far Right Circle */}
            <motion.div
              key={`far-right-${members.farRight.id}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.15, opacity: 1 }}
              onClick={() => goToMember(indices.farRightIndex)}
              className="hidden lg:block relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl 
                            opacity-0 group-hover:opacity-50 transition-all duration-300" />
              <div className="relative w-[95px] h-[95px] rounded-full overflow-hidden mt-[18px]
                            ring-2 ring-white shadow-xl bg-white
                            transform transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-400/50">
                <img
                  src={members.farRight.image}
                  alt={members.farRight.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                            transition-all duration-300 text-xs font-medium text-gray-700 whitespace-nowrap">
                {members.farRight.name}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}