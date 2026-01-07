'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'On-Page SEO',
    description: 'Optimize your website structure, content, and meta tags for maximum search engine visibility.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80',
    features: ['Keyword Optimization', 'Meta Tags & Schema', 'Content Strategy', 'Site Speed'],
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Off-Page SEO',
    description: 'Build authority through strategic link building and brand mentions across the web.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80',
    features: ['Link Building', 'Guest Posting', 'Brand Mentions', 'Social Signals'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Custom, responsive websites built with cutting-edge technologies for optimal performance.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    features: ['React/Next.js', 'E-commerce', 'CMS Integration', 'API Development'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    title: 'Android Development',
    description: 'Native and cross-platform mobile apps delivering exceptional user experiences.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    features: ['Native Apps', 'React Native', 'Flutter', 'App Store Publishing'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to maximize your ROI and brand visibility.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80',
    features: ['Social Media', 'PPC Campaigns', 'Email Marketing', 'Analytics'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 6,
    title: 'Content Marketing',
    description: 'Engaging content that attracts, converts, and retains your target audience.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    features: ['Blog Writing', 'Video Content', 'Infographics', 'Case Studies'],
    color: 'from-pink-500 to-rose-500',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top bottom-=100',
        },
      }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, rotateY: -15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=50',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              // ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;