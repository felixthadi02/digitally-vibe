import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Star,
  Clock,
  Users,
  Award,
  Zap,
  Phone,
  MessageCircle,
} from "lucide-react";

// Service data (in real app, fetch from API/CMS)
const servicesData: { [key: string]: any } = {
  "web-development": {
    title: "Web Development",
    tagline: "Modern, responsive websites that convert visitors into customers",
    description:
      "We build fast, secure, and scalable websites using the latest technologies. From simple landing pages to complex web applications, we deliver solutions that drive results and help your business grow online.",
    image: "/services/web-development.jpg",
    icon: "💻",
    color: "from-blue-500 to-blue-600",
    features: [
      {
        title: "Custom Website Design",
        desc: "Unique designs tailored to your brand identity",
      },
      {
        title: "E-commerce Development",
        desc: "Fully functional online stores with secure payments",
      },
      {
        title: "Web Application Development",
        desc: "Complex web apps with advanced functionality",
      },
      {
        title: "CMS Development",
        desc: "Easy-to-manage content management systems",
      },
      {
        title: "API Integration",
        desc: "Seamless integration with third-party services",
      },
      {
        title: "Website Maintenance",
        desc: "Ongoing support and updates",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "WordPress",
      "Shopify",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    process: [
      { step: "Discovery", desc: "Understanding your requirements and goals" },
      { step: "Planning", desc: "Creating sitemap and wireframes" },
      { step: "Design", desc: "UI/UX design and prototyping" },
      { step: "Development", desc: "Coding and building the website" },
      { step: "Testing", desc: "Quality assurance and bug fixing" },
      { step: "Launch", desc: "Deployment and go-live" },
    ],
    pricing: [
      {
        name: "Basic Website",
        price: "₹15,000",
        features: ["5 Pages", "Responsive Design", "Contact Form", "Basic SEO"],
      },
      {
        name: "Business Website",
        price: "₹35,000",
        features: ["10 Pages", "Custom Design", "CMS", "Advanced SEO", "Analytics"],
      },
      {
        name: "E-commerce",
        price: "₹75,000",
        features: [
          "Unlimited Products",
          "Payment Gateway",
          "Inventory Management",
          "Order Tracking",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to build a website?",
        a: "Typically 2-6 weeks depending on complexity.",
      },
      {
        q: "Do you provide hosting?",
        a: "Yes, we offer reliable hosting solutions.",
      },
      {
        q: "Can I update the website myself?",
        a: "Yes, we provide CMS for easy content management.",
      },
    ],
    stats: { projects: "200+", clients: "150+", satisfaction: "99%" },
    caseStudies: [
      {
        title: "TechStart E-Commerce",
        result: "150% increase in sales",
        image: "/portfolio/project1.jpg",
      },
      {
        title: "EduLearn Platform",
        result: "10K+ active users",
        image: "/portfolio/project6.jpg",
      },
    ],
  },
  // Add more services...
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = servicesData[params.slug];
  return {
    title: `${service?.title || "Service"} | Digitally Vibe`,
    description: service?.tagline || "Our digital services",
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesData[params.slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <Link href="/services" className="text-red-600 hover:underline">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-red-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{service.icon}</div>
              <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                {service.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold">{service.stats.projects}</div>
                  <div className="text-red-200 text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{service.stats.clients}</div>
                  <div className="text-red-200 text-sm">Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{service.stats.satisfaction}</div>
                  <div className="text-red-200 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Our <span className="text-red-600">{service.title}</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="space-y-4">
                {service.features.slice(0, 4).map((feature: any, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What&apos;s <span className="text-red-600">Included</span>
            </h2>
            <p className="text-gray-500">
              Comprehensive features to meet all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies We <span className="text-red-600">Use</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-red-500">Process</span>
            </h2>
            <p className="text-gray-400">
              A streamlined approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step: any, index: number) => (
              <div
                key={index}
                className="relative bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing <span className="text-red-600">Plans</span>
            </h2>
            <p className="text-gray-500">
              Transparent pricing for every budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.pricing.map((plan: any, index: number) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl border-2 transition-all ${
                  index === 1
                    ? "border-red-600 shadow-xl scale-105"
                    : "border-gray-100 hover:border-red-200"
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-red-600 mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center py-3 rounded-full font-semibold transition-colors ${
                    index === 1
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-100 text-gray-900 hover:bg-red-600 hover:text-white"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related <span className="text-red-600">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.caseStudies.map((study: any, index: number) => (
              <Link
                key={index}
                href="/portfolio"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {study.title}
                    </h3>
                    <span className="text-green-400 font-medium">
                      {study.result}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq: any, index: number) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-600 flex-shrink-0 group-open:bg-red-600 group-open:text-white transition-colors ml-4">
                    <svg
                      className="w-4 h-4 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-colors"
            >
              Get Free Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to All Services
          </Link>
        </div>
      </section>
    </div>
  );
}