
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import Image from 'next/image';

// export default function TeamNeuralNetwork() {
//   const [activeNeuron, setActiveNeuron] = useState<number | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const neuronsRef = useRef<HTMLDivElement>(null);

//   const team = [
//     { id: 0, name: 'Alex Rivera', role: 'CEO', x: 50, y: 20, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
//     { id: 1, name: 'Sarah Chen', role: 'Creative', x: 25, y: 40, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
//     { id: 2, name: 'Marcus Johnson', role: 'Tech', x: 75, y: 40, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop' },
//     { id: 3, name: 'Emily Rodriguez', role: 'Marketing', x: 30, y: 70, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
//     { id: 4, name: 'David Kim', role: 'Developer', x: 70, y: 70, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
//     { id: 5, name: 'Lisa Wang', role: 'Product', x: 50, y: 85, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop' },
//   ];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     // Draw synaptic connections
//     const drawConnections = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Draw connections between all neurons
//       team.forEach((neuron1, i) => {
//         team.forEach((neuron2, j) => {
//           if (i < j) {
//             const x1 = (neuron1.x / 100) * canvas.width;
//             const y1 = (neuron1.y / 100) * canvas.height;
//             const x2 = (neuron2.x / 100) * canvas.width;
//             const y2 = (neuron2.y / 100) * canvas.height;

//             // Create gradient for synapse
//             const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
//             gradient.addColorStop(0, 'rgba(255, 50, 51, 0.1)');
//             gradient.addColorStop(0.5, 'rgba(255, 50, 51, 0.3)');
//             gradient.addColorStop(1, 'rgba(255, 50, 51, 0.1)');

//             ctx.beginPath();
//             ctx.moveTo(x1, y1);
//             ctx.lineTo(x2, y2);
//             ctx.strokeStyle = gradient;
//             ctx.lineWidth = activeNeuron === i || activeNeuron === j ? 3 : 1;
//             ctx.stroke();

//             // Animate electrical impulse
//             if (activeNeuron === i || activeNeuron === j) {
//               const impulseX = x1 + (x2 - x1) * ((Date.now() % 1000) / 1000);
//               const impulseY = y1 + (y2 - y1) * ((Date.now() % 1000) / 1000);
              
//               ctx.beginPath();
//               ctx.arc(impulseX, impulseY, 3, 0, Math.PI * 2);
//               ctx.fillStyle = '#ff3233';
//               ctx.fill();
//             }
//           }
//         });
//       });

//       requestAnimationFrame(drawConnections);
//     };

//     drawConnections();
//   }, [activeNeuron, team]);

//   return (
//     <section className="relative min-h-screen bg-black overflow-hidden">
//       <canvas ref={canvasRef} className="absolute inset-0" />
      
//       {/* Neurons */}
//       <div ref={neuronsRef} className="absolute inset-0">
//         {team.map((member) => (
//           <div
//             key={member.id}
//             className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
//             style={{ 
//               left: `${member.x}%`, 
//               top: `${member.y}%`,
//             }}
//             onMouseEnter={() => setActiveNeuron(member.id)}
//             onMouseLeave={() => setActiveNeuron(null)}
//           >
//             <div className="relative group">
//               {/* Neuron Core */}
//               <div className={`w-20 h-20 rounded-full border-2 border-[#ff3233] overflow-hidden transition-all duration-300 ${
//                 activeNeuron === member.id ? 'scale-150' : 'hover:scale-110'
//               }`}>
//                 <Image src={member.image} alt={member.name} width={80} height={80} className="object-cover" />
//               </div>
              
//               {/* Dendrites */}
//               <div className="absolute inset-0 -m-4">
//                 <svg className="w-full h-full animate-pulse">
//                   <circle cx="50%" cy="50%" r="40" fill="none" stroke="#ff3233" strokeWidth="0.5" opacity="0.3" />
//                   <circle cx="50%" cy="50%" r="50" fill="none" stroke="#ff3233" strokeWidth="0.3" opacity="0.2" />
//                   <circle cx="50%" cy="50%" r="60" fill="none" stroke="#ff3233" strokeWidth="0.2" opacity="0.1" />
//                 </svg>
//               </div>

//               {/* Info on Hover */}
//               <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg transition-all ${
//                 activeNeuron === member.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
//               }`}>
//                 <p className="text-white font-bold whitespace-nowrap">{member.name}</p>
//                 <p className="text-[#ff3233] text-sm">{member.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Title */}
//       <div className="absolute top-10 left-10 text-white z-10">
//         <h2 className="text-4xl font-bold mb-2">The <span className="text-[#ff3233]">Mind</span> Network</h2>
//         <p className="text-gray-400">Our collective intelligence</p>
//       </div>
//     </section>
//   );
// }


'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const team: TeamMember[] = [
    {
      id: 0,
      name: 'Alex Rivera',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
    },
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-950/20 rounded-full blur-[200px]" />
      </div>

      <div ref={containerRef} className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-24">
          <p className="text-red-500 text-sm tracking-[0.3em] uppercase mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            The people behind
            <br />
            <span className="text-gray-600">the vision</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">
            {team.map((member, index) => (
              <div
                key={member.id}
                ref={(el) => { itemsRef.current[index] = el; }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                  {/* Main Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover object-top transition-all duration-700 ${
                        hoveredMember === member.id 
                          ? 'scale-105 grayscale-0' 
                          : 'scale-100 grayscale-[30%]'
                      }`}
                    />
                    
                    {/* Dark overlay - fades image into background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                    
                    {/* Red tint on hover */}
                    <div className={`absolute inset-0 bg-red-600/10 mix-blend-overlay transition-opacity duration-500 ${
                      hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    {/* Side fade */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
                  </div>

                  {/* Vignette effect */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
                </div>

                {/* Info */}
                <div className="relative">
                  <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                    hoveredMember === member.id ? 'text-white' : 'text-gray-300'
                  }`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    hoveredMember === member.id ? 'text-red-400' : 'text-gray-600'
                  }`}>
                    {member.role}
                  </p>
                  
                  {/* Underline accent */}
                  <div className={`absolute -bottom-2 left-0 h-px bg-red-500 transition-all duration-500 ${
                    hoveredMember === member.id ? 'w-12' : 'w-0'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}