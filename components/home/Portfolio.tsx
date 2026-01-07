'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'SEO', 'Web Dev', 'Android', 'Marketing'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&q=80',
    description: 'Full-stack e-commerce solution with 300% sales increase',
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Android',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=600&q=80',
    description: 'Native Android app with 100K+ downloads',
  },
  {
    id: 3,
    title: 'SEO Campaign - Tech Startup',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
    description: 'Increased organic traffic by 450% in 6 months',
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
    description: 'Viral campaign with 2M+ reach',
  },
  {
    id: 5,
    title: 'Corporate Website Redesign',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    description: 'Modern redesign with 85% better conversion',
  },
  {
    id: 6,
    title: 'Food Delivery App',
    category: 'Android',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    description: 'Cross-platform app serving 50K+ users',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power3.out',
          }
        );
      }
    });
  }, [filteredProjects]);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest success stories and case studies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-200 mt-1">{project.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;