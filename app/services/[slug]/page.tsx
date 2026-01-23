import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  Code,
  Megaphone,
  Search,
  Palette,
  Share2,
  PenTool,
} from "lucide-react";

// Complete service data for all services
const servicesData: { [key: string]: ServiceData } = {
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
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Data-driven marketing strategies that deliver measurable ROI",
    description:
      "Our digital marketing services help you reach your target audience effectively. We create comprehensive strategies that increase brand awareness, generate leads, and boost sales through multiple channels.",
    image: "/services/digital-marketing.jpg",
    icon: "📢",
    color: "from-red-500 to-red-600",
    features: [
      {
        title: "Marketing Strategy Development",
        desc: "Customized strategies aligned with your business goals",
      },
      {
        title: "PPC Advertising",
        desc: "Google Ads and Meta Ads management",
      },
      {
        title: "Email Marketing Campaigns",
        desc: "Automated email sequences that convert",
      },
      {
        title: "Marketing Automation",
        desc: "Streamlined workflows for better efficiency",
      },
      {
        title: "Analytics & Reporting",
        desc: "Detailed insights and performance tracking",
      },
      {
        title: "Conversion Rate Optimization",
        desc: "Improve your website's conversion rates",
      },
    ],
    technologies: [
      "Google Ads",
      "Meta Ads",
      "HubSpot",
      "Mailchimp",
      "Google Analytics",
      "Hotjar",
      "Semrush",
      "Zapier",
    ],
    process: [
      { step: "Audit", desc: "Analyzing your current marketing efforts" },
      { step: "Strategy", desc: "Creating a comprehensive marketing plan" },
      { step: "Implementation", desc: "Setting up campaigns and automation" },
      { step: "Optimization", desc: "Continuous testing and improvement" },
      { step: "Reporting", desc: "Regular performance reports" },
      { step: "Scaling", desc: "Expanding successful campaigns" },
    ],
    pricing: [
      {
        name: "Starter",
        price: "₹20,000/mo",
        features: ["1 Platform", "Basic Ads", "Monthly Report", "Email Support"],
      },
      {
        name: "Growth",
        price: "₹45,000/mo",
        features: ["3 Platforms", "Advanced Ads", "Weekly Reports", "Dedicated Manager"],
      },
      {
        name: "Enterprise",
        price: "₹85,000/mo",
        features: [
          "All Platforms",
          "Full Automation",
          "Daily Reports",
          "Priority Support",
        ],
      },
    ],
    faqs: [
      {
        q: "How soon will I see results?",
        a: "PPC can show results within days, while organic strategies take 3-6 months.",
      },
      {
        q: "What's the minimum ad budget?",
        a: "We recommend at least ₹30,000/month for effective campaigns.",
      },
      {
        q: "Do you provide reports?",
        a: "Yes, we provide detailed weekly/monthly performance reports.",
      },
    ],
    stats: { projects: "150+", clients: "120+", satisfaction: "98%" },
    caseStudies: [
      {
        title: "ShopEase Campaign",
        result: "200% ROI increase",
        image: "/portfolio/project2.jpg",
      },
      {
        title: "FoodDelivery App",
        result: "50K app downloads",
        image: "/portfolio/project3.jpg",
      },
    ],
  },
  "seo": {
    title: "SEO Services",
    tagline: "Improve your search rankings and drive organic traffic",
    description:
      "Our SEO experts use proven strategies to improve your website's visibility on search engines. We focus on sustainable, white-hat techniques that deliver long-term results and establish your online authority.",
    image: "/services/seo.jpg",
    icon: "🔍",
    color: "from-green-500 to-green-600",
    features: [
      {
        title: "Technical SEO Audit",
        desc: "Comprehensive analysis of your website's technical health",
      },
      {
        title: "On-Page Optimization",
        desc: "Content and meta tag optimization",
      },
      {
        title: "Off-Page SEO & Link Building",
        desc: "Quality backlink acquisition strategies",
      },
      {
        title: "Local SEO",
        desc: "Dominate local search results",
      },
      {
        title: "Keyword Research & Strategy",
        desc: "Target the right keywords for your business",
      },
      {
        title: "SEO Content Writing",
        desc: "Engaging, optimized content creation",
      },
    ],
    technologies: [
      "Ahrefs",
      "SEMrush",
      "Moz",
      "Google Search Console",
      "Screaming Frog",
      "Surfer SEO",
      "Google Analytics",
      "Schema Pro",
    ],
    process: [
      { step: "Audit", desc: "Complete website SEO analysis" },
      { step: "Research", desc: "Keyword and competitor research" },
      { step: "Strategy", desc: "Custom SEO roadmap creation" },
      { step: "Optimization", desc: "On-page and technical fixes" },
      { step: "Link Building", desc: "Quality backlink acquisition" },
      { step: "Monitoring", desc: "Ongoing tracking and adjustments" },
    ],
    pricing: [
      {
        name: "Local SEO",
        price: "₹15,000/mo",
        features: ["Local Listings", "Google My Business", "5 Keywords", "Monthly Report"],
      },
      {
        name: "National SEO",
        price: "₹35,000/mo",
        features: ["15 Keywords", "Content Strategy", "Link Building", "Weekly Reports"],
      },
      {
        name: "Enterprise SEO",
        price: "₹75,000/mo",
        features: [
          "Unlimited Keywords",
          "Full Content Team",
          "Aggressive Link Building",
          "Daily Monitoring",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does SEO take to work?",
        a: "Typically 3-6 months to see significant results.",
      },
      {
        q: "Do you guarantee first page rankings?",
        a: "We don't guarantee specific rankings, but we guarantee improvement.",
      },
      {
        q: "What's included in the audit?",
        a: "Technical, on-page, off-page, and content analysis with recommendations.",
      },
    ],
    stats: { projects: "180+", clients: "140+", satisfaction: "97%" },
    caseStudies: [
      {
        title: "E-commerce Store",
        result: "300% organic traffic increase",
        image: "/portfolio/project4.jpg",
      },
      {
        title: "Local Business",
        result: "Top 3 for 50+ keywords",
        image: "/portfolio/project5.jpg",
      },
    ],
  },
  "branding": {
    title: "Branding & Design",
    tagline: "Create a memorable brand identity that stands out",
    description:
      "We help businesses create powerful brand identities that resonate with their target audience. From logo design to complete brand guidelines, we bring your vision to life with creative excellence.",
    image: "/services/branding.jpg",
    icon: "🎨",
    color: "from-purple-500 to-purple-600",
    features: [
      {
        title: "Logo Design",
        desc: "Unique, memorable logos that represent your brand",
      },
      {
        title: "Brand Identity Development",
        desc: "Complete visual identity system",
      },
      {
        title: "Brand Guidelines",
        desc: "Comprehensive brand usage documentation",
      },
      {
        title: "Print Design",
        desc: "Business cards, brochures, and more",
      },
      {
        title: "Packaging Design",
        desc: "Eye-catching product packaging",
      },
      {
        title: "Brand Strategy",
        desc: "Strategic positioning and messaging",
      },
    ],
    technologies: [
      "Adobe Illustrator",
      "Photoshop",
      "Figma",
      "InDesign",
      "After Effects",
      "Canva Pro",
      "Sketch",
      "Procreate",
    ],
    process: [
      { step: "Discovery", desc: "Understanding your brand vision" },
      { step: "Research", desc: "Market and competitor analysis" },
      { step: "Concept", desc: "Initial design concepts" },
      { step: "Refinement", desc: "Revisions based on feedback" },
      { step: "Finalization", desc: "Final designs and assets" },
      { step: "Delivery", desc: "Brand guidelines and files" },
    ],
    pricing: [
      {
        name: "Logo Package",
        price: "₹15,000",
        features: ["3 Concepts", "5 Revisions", "All File Formats", "Copyright Transfer"],
      },
      {
        name: "Brand Identity",
        price: "₹45,000",
        features: ["Logo + Stationery", "Color Palette", "Typography", "Brand Guidelines"],
      },
      {
        name: "Complete Branding",
        price: "₹95,000",
        features: [
          "Full Brand Identity",
          "Marketing Collateral",
          "Social Media Kit",
          "Brand Strategy",
        ],
      },
    ],
    faqs: [
      {
        q: "How many logo concepts do I get?",
        a: "You'll receive 3 unique concepts to choose from.",
      },
      {
        q: "What files will I receive?",
        a: "AI, EPS, PDF, PNG, JPG, and SVG formats.",
      },
      {
        q: "Can you redesign my existing logo?",
        a: "Yes, we offer logo refresh and complete redesign services.",
      },
    ],
    stats: { projects: "120+", clients: "100+", satisfaction: "99%" },
    caseStudies: [
      {
        title: "FashionHub Rebrand",
        result: "40% brand recall increase",
        image: "/portfolio/project1.jpg",
      },
      {
        title: "TechCorp Identity",
        result: "Complete brand transformation",
        image: "/portfolio/project2.jpg",
      },
    ],
  },
  "social-media": {
    title: "Social Media Marketing",
    tagline: "Build and engage your community across social platforms",
    description:
      "We manage your social media presence to build brand awareness, engage with your audience, and drive traffic to your website. Our strategies are tailored to each platform for maximum impact.",
    image: "/services/social-media.jpg",
    icon: "📱",
    color: "from-pink-500 to-pink-600",
    features: [
      {
        title: "Social Media Strategy",
        desc: "Platform-specific strategies for growth",
      },
      {
        title: "Content Creation & Curation",
        desc: "Engaging posts, stories, and reels",
      },
      {
        title: "Community Management",
        desc: "Active engagement with your audience",
      },
      {
        title: "Social Media Advertising",
        desc: "Targeted paid campaigns",
      },
      {
        title: "Influencer Marketing",
        desc: "Collaborations with relevant influencers",
      },
      {
        title: "Analytics & Reporting",
        desc: "Performance tracking and insights",
      },
    ],
    technologies: [
      "Instagram",
      "Facebook",
      "LinkedIn",
      "Twitter",
      "TikTok",
      "YouTube",
      "Pinterest",
      "Hootsuite",
    ],
    process: [
      { step: "Audit", desc: "Review current social presence" },
      { step: "Strategy", desc: "Platform and content strategy" },
      { step: "Content", desc: "Content calendar creation" },
      { step: "Publishing", desc: "Scheduled posting" },
      { step: "Engagement", desc: "Community interaction" },
      { step: "Analysis", desc: "Performance optimization" },
    ],
    pricing: [
      {
        name: "Starter",
        price: "₹18,000/mo",
        features: ["2 Platforms", "12 Posts/Month", "Basic Graphics", "Monthly Report"],
      },
      {
        name: "Growth",
        price: "₹35,000/mo",
        features: ["4 Platforms", "20 Posts/Month", "Reels/Stories", "Paid Ads Management"],
      },
      {
        name: "Premium",
        price: "₹65,000/mo",
        features: [
          "All Platforms",
          "Daily Posts",
          "Influencer Outreach",
          "Dedicated Manager",
        ],
      },
    ],
    faqs: [
      {
        q: "Which platforms should I be on?",
        a: "It depends on your audience. We'll recommend the best platforms for you.",
      },
      {
        q: "How often should I post?",
        a: "We recommend 3-5 times per week for optimal engagement.",
      },
      {
        q: "Do you create the content?",
        a: "Yes, we handle everything from graphics to copywriting.",
      },
    ],
    stats: { projects: "100+", clients: "80+", satisfaction: "98%" },
    caseStudies: [
      {
        title: "Restaurant Chain",
        result: "500% follower growth",
        image: "/portfolio/project3.jpg",
      },
      {
        title: "Fashion Brand",
        result: "3M+ reach monthly",
        image: "/portfolio/project4.jpg",
      },
    ],
  },
  "content-marketing": {
    title: "Content Marketing",
    tagline: "Engage your audience with compelling content that converts",
    description:
      "Content is king, and we help you create content that attracts, engages, and converts your target audience. From blog posts to videos, we cover all content formats to build your brand authority.",
    image: "/services/content-marketing.jpg",
    icon: "✍️",
    color: "from-orange-500 to-orange-600",
    features: [
      {
        title: "Content Strategy",
        desc: "Comprehensive content roadmap",
      },
      {
        title: "Blog Writing & Management",
        desc: "SEO-optimized blog content",
      },
      {
        title: "Copywriting",
        desc: "Persuasive copy that converts",
      },
      {
        title: "Video Content",
        desc: "Engaging video production",
      },
      {
        title: "Infographic Design",
        desc: "Visual content that tells stories",
      },
      {
        title: "E-books & Whitepapers",
        desc: "Long-form content for lead generation",
      },
    ],
    technologies: [
      "WordPress",
      "Canva",
      "Grammarly",
      "BuzzSumo",
      "Jasper AI",
      "Surfer SEO",
      "Premiere Pro",
      "Loom",
    ],
    process: [
      { step: "Research", desc: "Audience and topic research" },
      { step: "Planning", desc: "Content calendar development" },
      { step: "Creation", desc: "Content writing and design" },
      { step: "Optimization", desc: "SEO and readability optimization" },
      { step: "Publishing", desc: "Strategic content distribution" },
      { step: "Promotion", desc: "Content amplification" },
    ],
    pricing: [
      {
        name: "Blog Package",
        price: "₹12,000/mo",
        features: ["4 Blog Posts", "SEO Optimized", "Featured Images", "Social Sharing"],
      },
      {
        name: "Content Suite",
        price: "₹28,000/mo",
        features: ["8 Blog Posts", "2 Infographics", "Email Newsletter", "Content Strategy"],
      },
      {
        name: "Full Service",
        price: "₹55,000/mo",
        features: [
          "Unlimited Blogs",
          "Video Content",
          "E-books",
          "Complete Content Team",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should blog posts be?",
        a: "We recommend 1,500-2,500 words for optimal SEO performance.",
      },
      {
        q: "Do you handle content distribution?",
        a: "Yes, we can manage publishing and promotion across channels.",
      },
      {
        q: "Can you write for technical topics?",
        a: "Yes, we have writers specialized in various industries.",
      },
    ],
    stats: { projects: "90+", clients: "70+", satisfaction: "97%" },
    caseStudies: [
      {
        title: "SaaS Company Blog",
        result: "200% traffic increase",
        image: "/portfolio/project5.jpg",
      },
      {
        title: "Healthcare Content",
        result: "50+ leads/month",
        image: "/portfolio/project6.jpg",
      },
    ],
  },
};

// Type definitions
interface Feature {
  title: string;
  desc: string;
}

interface ProcessStep {
  step: string;
  desc: string;
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

interface FAQ {
  q: string;
  a: string;
}

interface CaseStudy {
  title: string;
  result: string;
  image: string;
}

interface Stats {
  projects: string;
  clients: string;
  satisfaction: string;
}

interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  features: Feature[];
  technologies: string[];
  process: ProcessStep[];
  pricing: PricingPlan[];
  faqs: FAQ[];
  stats: Stats;
  caseStudies: CaseStudy[];
}

// Generate static params for all services
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return {
      title: "Service Not Found | Digitally Vibe",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | Digitally Vibe`,
    description: service.tagline,
  };
}

// Page component
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
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
                {service.features.slice(0, 4).map((feature, index) => (
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
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl">{service.icon}</span>
              </div>
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
            {service.features.map((feature, index) => (
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
            {service.technologies.map((tech, index) => (
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
            {service.process.map((step, index) => (
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
            {service.pricing.map((plan, index) => (
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
                  {plan.features.map((feature, i) => (
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
            {service.caseStudies.map((study, index) => (
              <Link
                key={index}
                href="/portfolio"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gray-200">
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
            {service.faqs.map((faq, index) => (
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