"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Eye,
  Layers,
  Code,
  Megaphone,
  Palette,
  Search,
  Share2,
  TrendingUp,
  Star,
} from "lucide-react";

const categories = [
  { id: "all", name: "All Projects", icon: <Layers size={18} /> },
  { id: "web", name: "Web Development", icon: <Code size={18} /> },
  { id: "branding", name: "Branding", icon: <Palette size={18} /> },
  { id: "marketing", name: "Digital Marketing", icon: <Megaphone size={18} /> },
  { id: "seo", name: "SEO", icon: <Search size={18} /> },
  { id: "social", name: "Social Media", icon: <Share2 size={18} /> },
];

const projects = [
  {
    id: 1,
    title: "TechStart E-Commerce",
    category: "web",
    categoryLabel: "Web Development",
    image: "/portfolio/project1.jpg",
    description: "Complete e-commerce platform with modern UI/UX",
    client: "TechStart Inc.",
    results: ["150% increase in sales", "2.5s load time", "50K+ users"],
    technologies: ["Next.js", "Tailwind CSS", "Stripe"],
    featured: true,
  },
  {
    id: 2,
    title: "FoodieHub Brand Identity",
    category: "branding",
    categoryLabel: "Branding",
    image: "/portfolio/project2.jpg",
    description: "Complete brand redesign for food delivery startup",
    client: "FoodieHub",
    results: ["Brand recognition +200%", "Customer trust +85%"],
    technologies: ["Illustrator", "Photoshop", "Figma"],
    featured: true,
  },
  {
    id: 3,
    title: "HealthPlus Marketing Campaign",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    image: "/portfolio/project3.jpg",
    description: "360° digital marketing campaign for healthcare",
    client: "HealthPlus Hospital",
    results: ["500% ROI", "10K+ leads", "2M impressions"],
    technologies: ["Google Ads", "Meta Ads", "Analytics"],
    featured: true,
  },
  {
    id: 4,
    title: "LegalEase SEO",
    category: "seo",
    categoryLabel: "SEO",
    image: "/portfolio/project4.jpg",
    description: "Complete SEO overhaul for law firm website",
    client: "LegalEase Associates",
    results: ["#1 rankings for 20 keywords", "300% organic traffic"],
    technologies: ["Technical SEO", "Content Strategy", "Link Building"],
    featured: false,
  },
  {
    id: 5,
    title: "FashionVista Social",
    category: "social",
    categoryLabel: "Social Media",
    image: "/portfolio/project5.jpg",
    description: "Social media management for fashion brand",
    client: "FashionVista",
    results: ["100K+ followers", "5% engagement rate", "50K reach/post"],
    technologies: ["Instagram", "Facebook", "Pinterest"],
    featured: false,
  },
  {
    id: 6,
    title: "EduLearn Platform",
    category: "web",
    categoryLabel: "Web Development",
    image: "/portfolio/project6.jpg",
    description: "Online learning platform with video streaming",
    client: "EduLearn Academy",
    results: ["10K+ students", "500+ courses", "99.9% uptime"],
    technologies: ["React", "Node.js", "AWS"],
    featured: true,
  },
  {
    id: 7,
    title: "GreenLife Rebrand",
    category: "branding",
    categoryLabel: "Branding",
    image: "/portfolio/project7.jpg",
    description: "Eco-friendly brand identity for sustainable products",
    client: "GreenLife Organics",
    results: ["Brand value +150%", "Premium positioning"],
    technologies: ["Brand Strategy", "Logo Design", "Packaging"],
    featured: false,
  },
  {
    id: 8,
    title: "AutoDrive PPC Campaign",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    image: "/portfolio/project8.jpg",
    description: "Performance marketing for automobile dealership",
    client: "AutoDrive Motors",
    results: ["800% ROI", "200+ test drives", "₹50L revenue"],
    technologies: ["Google Ads", "YouTube Ads", "Remarketing"],
    featured: false,
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <>
      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleCount(6);
                }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  category.id === activeCategory
                    ? "bg-red-600 text-white shadow-lg shadow-red-200"
                    : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {activeCategory === "all" ? "All" : categories.find((c) => c.id === activeCategory)?.name}{" "}
              <span className="text-red-600">Projects</span>
            </h2>
            <p className="text-gray-500">
              Showing {visibleProjects.length} of {filteredProjects.length} projects
            </p>
          </div>

          {visibleProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">📂</div>
              <h3 className="text-xl font-semibold text-gray-600">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-56 bg-gray-200 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 flex items-center justify-center gap-3">
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform"
                        >
                          <Eye size={18} />
                        </Link>
                        <a
                          href="#"
                          className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Star size={12} fill="white" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-sm text-gray-400 mb-2">{project.client}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Key Result */}
                    <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                      <TrendingUp size={16} />
                      {project.results[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center gap-2 bg-white border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Load More Projects
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-sm">
                  +{filteredProjects.length - visibleCount}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}