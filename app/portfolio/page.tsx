import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Code,
  Search,
  TrendingUp,
  ArrowRight,
  Star,
  Award,
  Users,
  Briefcase,
} from "lucide-react";
import PortfolioGrid from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Digitally Vibe",
  description: "Explore our portfolio of successful digital projects",
};

const stats = [
  { icon: <Briefcase size={28} />, value: "150+", label: "Projects Completed" },
  { icon: <Users size={28} />, value: "100+", label: "Happy Clients" },
  { icon: <Award size={28} />, value: "15+", label: "Awards Won" },
  { icon: <Star size={28} />, value: "4.9", label: "Average Rating" },
];

const testimonials = [
  {
    quote:
      "Digitally Vibe transformed our online presence completely. The results exceeded our expectations!",
    author: "Rahul Sharma",
    role: "CEO, TechStart Inc.",
    image: "/testimonials/client1.jpg",
  },
  {
    quote:
      "Professional team, creative solutions, and outstanding results. Highly recommended!",
    author: "Priya Patel",
    role: "Founder, FoodieHub",
    image: "/testimonials/client2.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Layers size={18} />
            OUR WORK
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-red-200">Portfolio</span>
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of successful projects that have helped
            businesses grow and thrive in the digital landscape.
          </p>
        </div>
      </section>

      {/* Portfolio Grid - Client Component */}
      <PortfolioGrid />

      {/* Our Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Layers size={18} />
              OUR PROCESS
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We <span className="text-red-600">Work</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our proven process ensures every project is delivered with
              excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We learn about your business, goals, and target audience",
                icon: <Search size={28} />,
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Create a customized plan aligned with your objectives",
                icon: <Layers size={28} />,
              },
              {
                step: "03",
                title: "Execution",
                desc: "Bring the strategy to life with creative excellence",
                icon: <Code size={28} />,
              },
              {
                step: "04",
                title: "Optimization",
                desc: "Continuously improve and scale for better results",
                icon: <TrendingUp size={28} />,
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-red-100 -z-10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-300 rounded-full"></div>
                  </div>
                )}

                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all text-center">
                  <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-red-600 font-bold text-sm mb-2">
                    STEP {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star size={18} />
              TESTIMONIALS
            </div>
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="text-red-500">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-lg text-gray-300 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-700 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We <span className="text-red-600">Serve</span>
            </h2>
            <p className="text-gray-500">
              We have experience across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "E-Commerce",
              "Healthcare",
              "Education",
              "Finance",
              "Real Estate",
              "Food & Beverage",
              "Fashion",
              "Technology",
              "Automobile",
              "Travel",
              "Legal",
              "Non-Profit",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-xl p-4 text-center font-medium text-gray-700 hover:text-red-600 transition-all cursor-pointer"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to create something amazing for your
            business. Your success story could be next in our portfolio!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-colors shadow-lg"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}