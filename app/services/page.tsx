import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Megaphone,
  Palette,
  Search,
  Share2,
  PenTool,
  Shield,
  TrendingUp,
  Monitor,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Mail,
  Video,
  Camera,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  Zap,
  Target,
  Layers,
  Settings,
  HeadphonesIcon,
  Clock,
  ThumbsUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Digitally Vibe",
  description:
    "Explore our comprehensive digital services including web development, digital marketing, branding, SEO, and more.",
};

const mainServices = [
  {
    id: "web-development",
    icon: <Code size={32} />,
    title: "Web Development",
    shortDesc: "Modern, responsive websites that convert visitors into customers",
    description:
      "We build fast, secure, and scalable websites using the latest technologies. From simple landing pages to complex web applications, we deliver solutions that drive results.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "Web Application Development",
      "CMS Development (WordPress, etc.)",
      "API Integration",
      "Website Maintenance",
    ],
    technologies: ["React", "Next.js", "Node.js", "WordPress", "Shopify"],
    image: "/services/web-development.jpg",
    color: "from-blue-500 to-blue-600",
    stats: { projects: "200+", satisfaction: "99%" },
  },
  {
    id: "digital-marketing",
    icon: <Megaphone size={32} />,
    title: "Digital Marketing",
    shortDesc: "Data-driven marketing strategies that deliver measurable ROI",
    description:
      "Our digital marketing services help you reach your target audience effectively. We create comprehensive strategies that increase brand awareness, generate leads, and boost sales.",
    features: [
      "Marketing Strategy Development",
      "PPC Advertising (Google, Meta)",
      "Email Marketing Campaigns",
      "Marketing Automation",
      "Analytics & Reporting",
      "Conversion Rate Optimization",
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "Mailchimp", "Analytics"],
    image: "/services/digital-marketing.jpg",
    color: "from-red-500 to-red-600",
    stats: { projects: "150+", satisfaction: "98%" },
  },
  {
    id: "seo",
    icon: <Search size={32} />,
    title: "SEO Services",
    shortDesc: "Improve your search rankings and drive organic traffic",
    description:
      "Our SEO experts use proven strategies to improve your website's visibility on search engines. We focus on sustainable, white-hat techniques that deliver long-term results.",
    features: [
      "Technical SEO Audit",
      "On-Page Optimization",
      "Off-Page SEO & Link Building",
      "Local SEO",
      "Keyword Research & Strategy",
      "SEO Content Writing",
    ],
    technologies: ["Ahrefs", "SEMrush", "Moz", "Google Search Console", "Screaming Frog"],
    image: "/services/seo.jpg",
    color: "from-green-500 to-green-600",
    stats: { projects: "180+", satisfaction: "97%" },
  },
  {
    id: "branding",
    icon: <Palette size={32} />,
    title: "Branding & Design",
    shortDesc: "Create a memorable brand identity that stands out",
    description:
      "We help businesses create powerful brand identities that resonate with their target audience. From logo design to complete brand guidelines, we bring your vision to life.",
    features: [
      "Logo Design",
      "Brand Identity Development",
      "Brand Guidelines",
      "Print Design",
      "Packaging Design",
      "Brand Strategy",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign"],
    image: "/services/branding.jpg",
    color: "from-purple-500 to-purple-600",
    stats: { projects: "120+", satisfaction: "99%" },
  },
  {
    id: "social-media",
    icon: <Share2 size={32} />,
    title: "Social Media Marketing",
    shortDesc: "Build and engage your community across social platforms",
    description:
      "We manage your social media presence to build brand awareness, engage with your audience, and drive traffic to your website. Our strategies are tailored to each platform.",
    features: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Community Management",
      "Social Media Advertising",
      "Influencer Marketing",
      "Analytics & Reporting",
    ],
    technologies: ["Instagram", "Facebook", "LinkedIn", "Twitter", "TikTok"],
    image: "/services/social-media.jpg",
    color: "from-pink-500 to-pink-600",
    stats: { projects: "100+", satisfaction: "98%" },
  },
  {
    id: "content-marketing",
    icon: <PenTool size={32} />,
    title: "Content Marketing",
    shortDesc: "Engage your audience with compelling content that converts",
    description:
      "Content is king, and we help you create content that attracts, engages, and converts your target audience. From blog posts to videos, we cover all content formats.",
    features: [
      "Content Strategy",
      "Blog Writing & Management",
      "Copywriting",
      "Video Content",
      "Infographic Design",
      "E-books & Whitepapers",
    ],
    technologies: ["WordPress", "Canva", "Grammarly", "BuzzSumo"],
    image: "/services/content-marketing.jpg",
    color: "from-orange-500 to-orange-600",
    stats: { projects: "90+", satisfaction: "97%" },
  },
];

const additionalServices = [
  {
    icon: <ShoppingCart size={24} />,
    title: "E-commerce Solutions",
    desc: "Complete online store setup and optimization",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile App Development",
    desc: "iOS and Android app development",
  },
  {
    icon: <Video size={24} />,
    title: "Video Production",
    desc: "Professional video content creation",
  },
  {
    icon: <Camera size={24} />,
    title: "Photography",
    desc: "Product and corporate photography",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Marketing",
    desc: "Automated email campaigns that convert",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Analytics & Reporting",
    desc: "Data-driven insights and reports",
  },
  {
    icon: <Shield size={24} />,
    title: "Reputation Management",
    desc: "Protect and enhance your online reputation",
  },
  {
    icon: <Globe size={24} />,
    title: "Domain & Hosting",
    desc: "Reliable hosting solutions",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn about your business, goals, target audience, and challenges through detailed discussions.",
    icon: <Search size={28} />,
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Based on our findings, we develop a customized strategy tailored to your specific needs.",
    icon: <Target size={28} />,
  },
  {
    step: "03",
    title: "Design",
    desc: "Our creative team designs solutions that align with your brand and resonate with your audience.",
    icon: <Palette size={28} />,
  },
  {
    step: "04",
    title: "Development",
    desc: "We bring designs to life using the latest technologies and best practices.",
    icon: <Code size={28} />,
  },
  {
    step: "05",
    title: "Launch",
    desc: "After thorough testing, we launch your project and ensure everything runs smoothly.",
    icon: <Zap size={28} />,
  },
  {
    step: "06",
    title: "Optimize",
    desc: "We continuously monitor, analyze, and optimize for better performance and results.",
    icon: <TrendingUp size={28} />,
  },
];

const stats = [
  { icon: <Award size={28} />, value: "500+", label: "Projects Completed" },
  { icon: <Users size={28} />, value: "200+", label: "Happy Clients" },
  { icon: <Star size={28} />, value: "4.9", label: "Average Rating" },
  { icon: <Clock size={28} />, value: "5+", label: "Years Experience" },
];

const whyChooseUs = [
  {
    icon: <Target size={24} />,
    title: "Result-Oriented",
    desc: "We focus on delivering measurable results that impact your bottom line.",
  },
  {
    icon: <Users size={24} />,
    title: "Dedicated Team",
    desc: "A team of experts dedicated to your project's success.",
  },
  {
    icon: <Clock size={24} />,
    title: "Timely Delivery",
    desc: "We respect deadlines and deliver projects on time, every time.",
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: "24/7 Support",
    desc: "Round-the-clock support to address your concerns.",
  },
  {
    icon: <ThumbsUp size={24} />,
    title: "Quality Assurance",
    desc: "Rigorous quality checks at every stage of the project.",
  },
  {
    icon: <Settings size={24} />,
    title: "Custom Solutions",
    desc: "Tailored solutions that fit your unique requirements.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    desc: "Perfect for small businesses getting started",
    price: "₹15,000",
    period: "/project",
    features: [
      "5-Page Website",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "Social Media Integration",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    desc: "Ideal for growing businesses",
    price: "₹35,000",
    period: "/project",
    features: [
      "10-Page Website",
      "Custom Design",
      "Advanced SEO",
      "CMS Integration",
      "Analytics Setup",
      "3 Months Support",
      "Social Media Setup",
      "Email Marketing Setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "For large-scale projects",
    price: "Custom",
    period: "pricing",
    features: [
      "Unlimited Pages",
      "E-commerce Functionality",
      "Custom Web Application",
      "Priority Support",
      "Dedicated Account Manager",
      "Performance Optimization",
      "Security Audit",
      "Training Sessions",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "How long does it take to complete a website?",
    answer:
      "The timeline depends on the complexity of the project. A simple website typically takes 2-4 weeks, while complex web applications may take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, we offer various maintenance packages to keep your website secure, updated, and running smoothly. Our team is always available to make updates and improvements.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically require 50% upfront to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.",
  },
  {
    question: "Can you help with existing websites?",
    answer:
      "Absolutely! We can redesign, optimize, or add new features to your existing website. We'll assess your current site and recommend the best approach.",
  },
  {
    question: "Do you offer digital marketing retainer packages?",
    answer:
      "Yes, we offer monthly retainer packages for ongoing digital marketing services including SEO, social media management, and PPC advertising. Contact us for customized packages.",
  },
];

const testimonials = [
  {
    quote:
      "Digitally Vibe transformed our online presence. Our website traffic increased by 300% within 6 months!",
    author: "Rahul Sharma",
    role: "CEO, TechStart Inc.",
    image: "/testimonials/client1.jpg",
    service: "SEO Services",
  },
  {
    quote:
      "The team's creativity and professionalism exceeded our expectations. Highly recommend their branding services!",
    author: "Priya Patel",
    role: "Founder, FashionHub",
    image: "/testimonials/client2.jpg",
    service: "Branding",
  },
  {
    quote:
      "Our e-commerce sales doubled after implementing their digital marketing strategies. Excellent ROI!",
    author: "Amit Kumar",
    role: "Director, ShopEase",
    image: "/testimonials/client3.jpg",
    service: "Digital Marketing",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-10 w-20 h-20 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 border border-white/10 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Layers size={18} />
            WHAT WE OFFER
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-red-200">Services</span>
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Comprehensive digital solutions to help your business grow, scale,
            and succeed in the digital landscape.
          </p>

          {/* Quick Service Links */}
          <div className="flex flex-wrap justify-center gap-3">
            {mainServices.slice(0, 4).map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {service.icon}
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 -mt-12 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap size={18} />
              CORE SERVICES
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-red-600">Specialize In</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our core services are designed to cover all aspects of your digital presence
            </p>
          </div>

          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  {/* Stats Badge */}
                  <div className="absolute -bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-48">
                    <div className="bg-white rounded-xl shadow-lg p-4 flex justify-around">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">
                          {service.stats.projects}
                        </div>
                        <div className="text-xs text-gray-500">Projects</div>
                      </div>
                      <div className="w-px bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600">
                          {service.stats.satisfaction}
                        </div>
                        <div className="text-xs text-gray-500">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4`}
                  >
                    {service.icon}
                    {service.title}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.shortDesc}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 mr-3">Technologies:</span>
                    <div className="inline-flex flex-wrap gap-2 mt-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Layers size={18} />
              MORE SERVICES
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Beyond our core offerings, we provide a range of specialized services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Settings size={18} />
              OUR PROCESS
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We <span className="text-red-600">Work</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our proven 6-step process ensures consistent, high-quality results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                <div className="pt-4">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500">{step.desc}</p>
                </div>

                {/* Connector Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-red-200" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star size={18} />
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Why Businesses <span className="text-red-500">Trust Us</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We're committed to delivering exceptional results that help your
                business grow. Our team of experts brings years of experience and
                a passion for digital excellence.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image/Stats */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-red-200 text-sm">Projects Delivered</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <div className="text-red-200 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold mb-2">5+</div>
                    <div className="text-red-200 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-red-200 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-red-900/50 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BarChart3 size={18} />
              PRICING
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent <span className="text-red-600">Pricing</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose a package that fits your needs. All plans include our commitment to quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 transition-all ${
                  plan.popular
                    ? "border-red-600 shadow-xl scale-105"
                    : "border-gray-100 hover:border-red-200 hover:shadow-lg"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                      plan.popular
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-gray-100 hover:bg-red-600 text-gray-900 hover:text-white"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Need a custom solution?{" "}
            <Link href="/contact" className="text-red-600 font-medium hover:underline">
              Contact us
            </Link>{" "}
            for a personalized quote.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star size={18} />
              TESTIMONIALS
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-red-600">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Service Badge */}
                <span className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {testimonial.service}
                </span>

                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {/* <MessageCircle size={18} /> */}
              FAQ
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-600 flex-shrink-0 group-open:bg-red-600 group-open:text-white transition-colors">
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
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help your business achieve its
            digital goals. Get a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-colors shadow-lg"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}