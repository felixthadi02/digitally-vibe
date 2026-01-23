import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Heart,
  MessageCircle,
  Bookmark,
  ChevronRight,
  Tag,
} from "lucide-react";

// Type definitions
interface Author {
  name: string;
  avatar: string;
  role: string;
  bio: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  tags: string[];
  likes: number;
  comments: number;
}

interface RelatedPost {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
}

// Complete blog posts data
const blogPostsData: { [key: string]: BlogPost } = {
  "1": {
    id: 1,
    title: "The Ultimate Guide to Digital Marketing in 2025",
    excerpt:
      "Discover the latest trends, strategies, and tools that will dominate the digital marketing landscape in 2025.",
    content: `
      <p>Digital marketing continues to evolve at a rapid pace, and staying ahead of the curve is essential for businesses looking to thrive in the online space. In this comprehensive guide, we'll explore the key trends and strategies that will define digital marketing in 2025.</p>
      
      <h2 id="section-1">1. AI-Powered Marketing Automation</h2>
      <p>Artificial intelligence has transformed how we approach marketing campaigns. From predictive analytics to personalized content recommendations, AI is making marketing more efficient and effective than ever before.</p>
      <p>Key applications include:</p>
      <ul>
        <li>Automated email campaigns with personalized content</li>
        <li>Chatbots for customer service and lead generation</li>
        <li>Predictive analytics for campaign optimization</li>
        <li>Dynamic pricing strategies</li>
      </ul>
      
      <h2 id="section-2">2. Voice Search Optimization</h2>
      <p>With the growing adoption of smart speakers and voice assistants, optimizing for voice search has become crucial. Businesses need to focus on conversational keywords and natural language patterns.</p>
      
      <blockquote>
        "By 2025, over 50% of all searches will be voice-based. Businesses that don't adapt will be left behind."
      </blockquote>
      
      <h2 id="section-3">3. Video Content Dominance</h2>
      <p>Video continues to be the most engaging form of content online. Short-form videos on platforms like TikTok and Instagram Reels are driving massive engagement, while long-form content on YouTube remains valuable for SEO.</p>
      
      <h2 id="section-4">4. Privacy-First Marketing</h2>
      <p>With increasing privacy regulations and the death of third-party cookies, marketers need to adopt privacy-first strategies. First-party data collection and contextual advertising will become more important.</p>
      
      <h2 id="section-5">5. Influencer Marketing Evolution</h2>
      <p>Influencer marketing is maturing, with a shift towards micro and nano-influencers who offer higher engagement rates and more authentic connections with their audiences.</p>
      
      <h2 id="section-6">Conclusion</h2>
      <p>The digital marketing landscape in 2025 will be shaped by technology, privacy concerns, and changing consumer behaviors. Businesses that embrace these trends and adapt their strategies will be well-positioned for success.</p>
    `,
    image: "/blog/featured.jpg",
    category: "Digital Marketing",
    author: {
      name: "John Doe",
      avatar: "/team/member1.jpg",
      role: "Marketing Director",
      bio: "John has over 10 years of experience in digital marketing and has helped numerous businesses achieve their online goals.",
    },
    date: "Jan 15, 2025",
    readTime: "12 min read",
    tags: ["Marketing", "Trends", "Strategy", "AI", "SEO"],
    likes: 456,
    comments: 89,
  },
  "2": {
    id: 2,
    title: "10 SEO Strategies That Actually Work in 2025",
    excerpt:
      "Learn proven SEO techniques that will help your website rank higher and drive organic traffic consistently.",
    content: `
      <p>Search Engine Optimization remains one of the most effective ways to drive organic traffic to your website. In this guide, we'll cover the top 10 SEO strategies that are proven to work in 2025.</p>
      
      <h2 id="section-1">1. Focus on Search Intent</h2>
      <p>Understanding what users are looking for when they search is more important than ever. Google's algorithms have become sophisticated at understanding user intent, so your content needs to match what users actually want.</p>
      
      <h2 id="section-2">2. Core Web Vitals Optimization</h2>
      <p>Page experience signals, including Core Web Vitals, are now ranking factors. Focus on:</p>
      <ul>
        <li>Largest Contentful Paint (LCP) - under 2.5 seconds</li>
        <li>First Input Delay (FID) - under 100 milliseconds</li>
        <li>Cumulative Layout Shift (CLS) - under 0.1</li>
      </ul>
      
      <h2 id="section-3">3. Create Comprehensive Content</h2>
      <p>Long-form, in-depth content that thoroughly covers a topic tends to rank better. Aim for content that answers all related questions a user might have.</p>
      
      <blockquote>
        "Content that provides real value and answers user questions comprehensively will always outperform thin content."
      </blockquote>
      
      <h2 id="section-4">4. Build Quality Backlinks</h2>
      <p>Quality over quantity remains the mantra for link building. Focus on earning links from authoritative, relevant websites in your industry.</p>
      
      <h2 id="section-5">5. Optimize for Featured Snippets</h2>
      <p>Featured snippets appear at the top of search results and can significantly increase your visibility. Structure your content to answer questions directly and concisely.</p>
      
      <h2 id="section-6">6. Technical SEO Foundation</h2>
      <p>Ensure your website has a solid technical foundation with proper indexing, XML sitemaps, schema markup, and mobile optimization.</p>
      
      <h2 id="section-7">7. Local SEO for Local Businesses</h2>
      <p>If you serve a local market, optimize your Google Business Profile, build local citations, and encourage customer reviews.</p>
      
      <h2 id="section-8">8. E-E-A-T Signals</h2>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness are crucial for ranking, especially in YMYL (Your Money Your Life) topics.</p>
      
      <h2 id="section-9">9. Video SEO</h2>
      <p>Video content can help you rank in both regular search and video search results. Optimize video titles, descriptions, and add transcripts.</p>
      
      <h2 id="section-10">10. Regular Content Updates</h2>
      <p>Keep your content fresh and up-to-date. Regularly audit and update older content to maintain and improve rankings.</p>
      
      <h2>Conclusion</h2>
      <p>SEO success in 2025 requires a holistic approach combining technical excellence, quality content, and strategic link building. Implement these strategies consistently for long-term results.</p>
    `,
    image: "/blog/post1.jpg",
    category: "SEO",
    author: {
      name: "Sarah Williams",
      avatar: "/team/member4.jpg",
      role: "SEO Specialist",
      bio: "Sarah is an SEO expert with 8 years of experience helping businesses improve their search visibility and organic traffic.",
    },
    date: "Jan 12, 2025",
    readTime: "8 min read",
    tags: ["SEO", "Google", "Rankings", "Traffic", "Content"],
    likes: 234,
    comments: 45,
  },
  "3": {
    id: 3,
    title: "Building a Brand Identity That Stands Out",
    excerpt:
      "Your complete guide to creating a memorable and impactful brand identity for your business.",
    content: `
      <p>In today's crowded marketplace, having a strong brand identity is essential for standing out and connecting with your target audience. This guide will walk you through the key elements of building a memorable brand.</p>
      
      <h2 id="section-1">1. Define Your Brand Purpose</h2>
      <p>Before diving into visual elements, you need to understand why your brand exists beyond making money. What problem do you solve? What change do you want to create in the world?</p>
      
      <h2 id="section-2">2. Know Your Target Audience</h2>
      <p>Understanding who you're trying to reach is fundamental to building a brand that resonates. Create detailed buyer personas that go beyond demographics to include psychographics, pain points, and aspirations.</p>
      
      <h2 id="section-3">3. Develop Your Brand Personality</h2>
      <p>Your brand should have a distinct personality that comes through in all communications. Is your brand:</p>
      <ul>
        <li>Professional or casual?</li>
        <li>Serious or playful?</li>
        <li>Traditional or innovative?</li>
        <li>Luxurious or accessible?</li>
      </ul>
      
      <blockquote>
        "A strong brand personality creates emotional connections with customers that go beyond product features and prices."
      </blockquote>
      
      <h2 id="section-4">4. Create Your Visual Identity</h2>
      <p>Your visual identity includes your logo, color palette, typography, imagery style, and other visual elements. These should all work together to communicate your brand personality consistently.</p>
      
      <h2 id="section-5">5. Craft Your Brand Voice</h2>
      <p>How your brand communicates is just as important as how it looks. Develop a consistent tone of voice that reflects your brand personality and resonates with your audience.</p>
      
      <h2 id="section-6">6. Build Brand Guidelines</h2>
      <p>Document all your brand elements in a comprehensive brand guidelines document. This ensures consistency across all touchpoints and team members.</p>
      
      <h2>Conclusion</h2>
      <p>Building a strong brand identity takes time and effort, but it's one of the most valuable investments you can make in your business. A memorable brand creates customer loyalty and sets you apart from competitors.</p>
    `,
    image: "/blog/post2.jpg",
    category: "Branding",
    author: {
      name: "Jane Smith",
      avatar: "/team/member2.jpg",
      role: "Creative Director",
      bio: "Jane is an award-winning creative director with a passion for building brands that make a lasting impact.",
    },
    date: "Jan 10, 2025",
    readTime: "10 min read",
    tags: ["Branding", "Design", "Identity", "Logo", "Strategy"],
    likes: 189,
    comments: 32,
  },
  "4": {
    id: 4,
    title: "Next.js vs React: Which One Should You Choose?",
    excerpt:
      "A comprehensive comparison to help you decide the right framework for your next web development project.",
    content: `
      <p>When starting a new web project, one of the first decisions you'll face is choosing the right technology. Next.js and React are both popular choices, but they serve different purposes. Let's break down the differences.</p>
      
      <h2 id="section-1">1. Understanding React</h2>
      <p>React is a JavaScript library for building user interfaces. It's component-based, meaning you build encapsulated components that manage their own state and compose them to make complex UIs.</p>
      <ul>
        <li>Client-side rendering by default</li>
        <li>Requires additional setup for routing, SSR, etc.</li>
        <li>Complete freedom in architecture decisions</li>
        <li>Large ecosystem of third-party libraries</li>
      </ul>
      
      <h2 id="section-2">2. Understanding Next.js</h2>
      <p>Next.js is a React framework that provides additional structure and features out of the box:</p>
      <ul>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
        <li>File-based routing</li>
        <li>API routes</li>
        <li>Built-in optimization features</li>
      </ul>
      
      <blockquote>
        "Next.js gives you production-grade features out of the box, while React gives you complete flexibility to build your own stack."
      </blockquote>
      
      <h2 id="section-3">3. When to Choose React</h2>
      <p>Choose React when you:</p>
      <ul>
        <li>Need complete control over your architecture</li>
        <li>Are building a single-page application (SPA)</li>
        <li>Have a team experienced with custom configurations</li>
        <li>Don't need SEO optimization</li>
      </ul>
      
      <h2 id="section-4">4. When to Choose Next.js</h2>
      <p>Choose Next.js when you:</p>
      <ul>
        <li>Need excellent SEO performance</li>
        <li>Want faster initial page loads</li>
        <li>Prefer convention over configuration</li>
        <li>Need both static and dynamic pages</li>
        <li>Want built-in API routes</li>
      </ul>
      
      <h2 id="section-5">5. Performance Comparison</h2>
      <p>Next.js generally offers better performance out of the box due to its automatic code splitting, image optimization, and server-side rendering capabilities.</p>
      
      <h2 id="section-6">6. SEO Considerations</h2>
      <p>For SEO-focused projects, Next.js has a clear advantage with its SSR and SSG capabilities that ensure search engines can easily crawl and index your content.</p>
      
      <h2>Conclusion</h2>
      <p>The choice between Next.js and React depends on your project requirements. For most production websites, Next.js offers a better developer experience and performance. However, for complex SPAs where you need full control, React might be the better choice.</p>
    `,
    image: "/blog/post3.jpg",
    category: "Web Development",
    author: {
      name: "Mike Johnson",
      avatar: "/team/member3.jpg",
      role: "Lead Developer",
      bio: "Mike is a full-stack developer with expertise in React, Next.js, and modern web technologies.",
    },
    date: "Jan 8, 2025",
    readTime: "7 min read",
    tags: ["React", "Next.js", "JavaScript", "Framework", "Web Dev"],
    likes: 312,
    comments: 67,
  },
  "5": {
    id: 5,
    title: "Social Media Marketing: Complete Strategy Guide",
    excerpt:
      "Master the art of social media marketing with our comprehensive strategy framework.",
    content: `
      <p>Social media marketing has become essential for businesses of all sizes. This comprehensive guide will help you develop a winning social media strategy.</p>
      
      <h2 id="section-1">1. Set Clear Goals</h2>
      <p>Before posting anything, define what you want to achieve:</p>
      <ul>
        <li>Brand awareness</li>
        <li>Lead generation</li>
        <li>Customer engagement</li>
        <li>Website traffic</li>
        <li>Sales conversions</li>
      </ul>
      
      <h2 id="section-2">2. Choose the Right Platforms</h2>
      <p>Not every platform is right for every business. Consider where your target audience spends their time:</p>
      <ul>
        <li><strong>Instagram:</strong> Visual brands, lifestyle, fashion, food</li>
        <li><strong>LinkedIn:</strong> B2B, professional services</li>
        <li><strong>TikTok:</strong> Younger demographics, entertainment</li>
        <li><strong>Facebook:</strong> Broad demographics, community building</li>
        <li><strong>Twitter:</strong> News, customer service, thought leadership</li>
      </ul>
      
      <blockquote>
        "It's better to excel on two platforms than to be mediocre on five. Focus your efforts where your audience is most active."
      </blockquote>
      
      <h2 id="section-3">3. Create a Content Calendar</h2>
      <p>Consistency is key in social media. Plan your content in advance using a content calendar that includes post types, themes, and optimal posting times.</p>
      
      <h2 id="section-4">4. Engage With Your Audience</h2>
      <p>Social media is a two-way conversation. Respond to comments, ask questions, and participate in relevant discussions to build genuine connections.</p>
      
      <h2 id="section-5">5. Leverage Paid Advertising</h2>
      <p>Organic reach is declining on most platforms. Allocate budget for paid promotion to expand your reach and target specific audiences.</p>
      
      <h2 id="section-6">6. Track and Analyze Performance</h2>
      <p>Use analytics to understand what's working and what's not. Key metrics to track include engagement rate, reach, clicks, and conversions.</p>
      
      <h2>Conclusion</h2>
      <p>A successful social media strategy requires planning, consistency, and continuous optimization. Start with clear goals, focus on the right platforms, and always put your audience first.</p>
    `,
    image: "/blog/post4.jpg",
    category: "Social Media",
    author: {
      name: "Sarah Williams",
      avatar: "/team/member4.jpg",
      role: "Social Media Manager",
      bio: "Sarah specializes in building engaged social media communities and creating viral content strategies.",
    },
    date: "Jan 5, 2025",
    readTime: "15 min read",
    tags: ["Social Media", "Marketing", "Strategy", "Instagram", "Content"],
    likes: 276,
    comments: 54,
  },
  "6": {
    id: 6,
    title: "The Power of Content Marketing for B2B",
    excerpt:
      "How to create content that converts leads into customers in the B2B space.",
    content: `
      <p>B2B content marketing requires a different approach than B2C. This guide will show you how to create content that resonates with business decision-makers and drives conversions.</p>
      
      <h2 id="section-1">1. Understand the B2B Buyer Journey</h2>
      <p>B2B purchases typically involve multiple stakeholders and longer decision cycles. Your content needs to address different stages:</p>
      <ul>
        <li><strong>Awareness:</strong> Blog posts, industry reports</li>
        <li><strong>Consideration:</strong> Case studies, comparison guides</li>
        <li><strong>Decision:</strong> Product demos, ROI calculators</li>
      </ul>
      
      <h2 id="section-2">2. Focus on Thought Leadership</h2>
      <p>B2B buyers want to work with experts. Establish your authority through in-depth articles, original research, and industry insights.</p>
      
      <blockquote>
        "In B2B, trust is built through demonstrated expertise. Every piece of content should reinforce your position as an industry leader."
      </blockquote>
      
      <h2 id="section-3">3. Create Case Studies</h2>
      <p>Nothing convinces B2B buyers like proof of results. Develop detailed case studies that showcase how you've helped similar businesses succeed.</p>
      
      <h2 id="section-4">4. Develop Gated Content</h2>
      <p>Use valuable content like whitepapers, ebooks, and reports as lead magnets. This helps build your email list with qualified prospects.</p>
      
      <h2 id="section-5">5. Optimize for LinkedIn</h2>
      <p>LinkedIn is the primary social platform for B2B marketing. Share your content consistently and engage in relevant industry groups.</p>
      
      <h2 id="section-6">6. Measure What Matters</h2>
      <p>Track metrics that tie to business outcomes: lead quality, conversion rates, and customer acquisition cost, not just vanity metrics.</p>
      
      <h2>Conclusion</h2>
      <p>B2B content marketing success comes from understanding your audience, providing genuine value, and measuring the right outcomes. Focus on quality over quantity.</p>
    `,
    image: "/blog/post5.jpg",
    category: "Content Marketing",
    author: {
      name: "John Doe",
      avatar: "/team/member1.jpg",
      role: "Marketing Director",
      bio: "John has over 10 years of experience in B2B marketing and content strategy.",
    },
    date: "Jan 3, 2025",
    readTime: "9 min read",
    tags: ["B2B", "Content Marketing", "Lead Generation", "Strategy"],
    likes: 198,
    comments: 28,
  },
  "7": {
    id: 7,
    title: "UI/UX Design Trends to Watch in 2025",
    excerpt:
      "Explore the latest design trends that are shaping user experiences across digital platforms.",
    content: `
      <p>The world of UI/UX design is constantly evolving. Here are the key trends that will shape digital experiences in 2025.</p>
      
      <h2 id="section-1">1. AI-Powered Personalization</h2>
      <p>Interfaces that adapt to individual user preferences and behaviors are becoming the norm. AI enables truly personalized experiences at scale.</p>
      
      <h2 id="section-2">2. Minimalist Design with Depth</h2>
      <p>Clean, minimalist interfaces remain popular, but with added depth through subtle shadows, layers, and micro-interactions.</p>
      
      <h2 id="section-3">3. Dark Mode as Default</h2>
      <p>Many apps and websites now offer dark mode by default, with some even making it the primary design choice.</p>
      
      <blockquote>
        "Dark mode isn't just a trend—it's become a user expectation. Design for both light and dark themes from the start."
      </blockquote>
      
      <h2 id="section-4">4. Micro-Interactions</h2>
      <p>Small, delightful animations that respond to user actions make interfaces feel more alive and engaging.</p>
      
      <h2 id="section-5">5. Voice User Interfaces</h2>
      <p>As voice assistants become more prevalent, designing for voice interactions is becoming an essential skill.</p>
      
      <h2 id="section-6">6. Inclusive Design</h2>
      <p>Accessibility is no longer an afterthought. Designing for all abilities and contexts is now a fundamental requirement.</p>
      
      <h2>Conclusion</h2>
      <p>Stay ahead of design trends while always keeping user needs at the center of your design decisions.</p>
    `,
    image: "/blog/post6.jpg",
    category: "Design",
    author: {
      name: "Jane Smith",
      avatar: "/team/member2.jpg",
      role: "Creative Director",
      bio: "Jane leads our design team and stays at the forefront of UI/UX trends and best practices.",
    },
    date: "Dec 28, 2024",
    readTime: "6 min read",
    tags: ["UI/UX", "Design", "Trends", "User Experience", "2025"],
    likes: 421,
    comments: 89,
  },
};

// Helper function to get related posts
const getRelatedPosts = (currentId: string, category: string): RelatedPost[] => {
  return Object.values(blogPostsData)
    .filter((post) => post.id.toString() !== currentId)
    .filter((post) => post.category === category || Math.random() > 0.5)
    .slice(0, 3)
    .map((post) => ({
      id: post.id,
      title: post.title,
      image: post.image,
      category: post.category,
      date: post.date,
    }));
};

// Helper function to get navigation posts
const getNavigationPosts = (currentId: string) => {
  const ids = Object.keys(blogPostsData).map(Number).sort((a, b) => a - b);
  const currentIndex = ids.indexOf(parseInt(currentId));
  
  return {
    prev: currentIndex > 0 ? blogPostsData[ids[currentIndex - 1].toString()] : null,
    next: currentIndex < ids.length - 1 ? blogPostsData[ids[currentIndex + 1].toString()] : null,
  };
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((id) => ({
    id: id,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = blogPostsData[id];

  if (!post) {
    return {
      title: "Post Not Found | Digitally Vibe",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Digitally Vibe Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Page component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPostsData[id];

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(id, post.category);
  const { prev, next } = getNavigationPosts(id);

  // Table of contents extraction (simplified)
  const tableOfContents = [
    "AI-Powered Marketing",
    "Voice Search Optimization",
    "Video Content Dominance",
    "Privacy-First Marketing",
    "Influencer Marketing",
    "Conclusion",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-red-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{post.category}</span>
          </div>

          {/* Category */}
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-red-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden relative bg-white/20">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-white">{post.author.name}</div>
                <div className="text-xs">{post.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Social Share - Left Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 flex lg:flex-col gap-3">
                <button className="w-10 h-10 bg-gray-100 hover:bg-red-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Heart size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-sky-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-blue-700 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-800 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Link2 size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-yellow-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Bookmark size={18} />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Article Content */}
              <article
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-red-600 prose-blockquote:bg-red-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-gray-900 flex items-center gap-2">
                    <Tag size={18} className="text-red-600" />
                    Tags:
                  </span>
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="bg-gray-100 hover:bg-red-600 text-gray-600 hover:text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Engagement */}
              <div className="mt-8 flex items-center justify-between p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart size={20} />
                    <span className="font-medium">{post.likes} Likes</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                    <MessageCircle size={20} />
                    <span className="font-medium">{post.comments} Comments</span>
                  </button>
                </div>
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                  <Share2 size={20} />
                  <span className="font-medium">Share</span>
                </button>
              </div>

              {/* Author Box */}
              <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden relative bg-gray-200 flex-shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-red-600 font-medium mb-1">
                      Written by
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {post.author.name}
                    </h3>
                    <div className="text-gray-500 text-sm mb-3">
                      {post.author.role}
                    </div>
                    <p className="text-gray-600">{post.author.bio}</p>
                    <div className="flex gap-3 mt-4">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Navigation */}
              <div className="mt-12 grid md:grid-cols-2 gap-6">
                {prev ? (
                  <Link
                    href={`/blog/${prev.id}`}
                    className="group p-6 bg-gray-50 hover:bg-red-50 rounded-2xl transition-colors"
                  >
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <ArrowLeft size={16} />
                      Previous Post
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                      {prev.title}
                    </h4>
                  </Link>
                ) : (
                  <div></div>
                )}
                {next ? (
                  <Link
                    href={`/blog/${next.id}`}
                    className="group p-6 bg-gray-50 hover:bg-red-50 rounded-2xl transition-colors text-right"
                  >
                    <div className="flex items-center justify-end gap-2 text-gray-400 text-sm mb-2">
                      Next Post
                      <ArrowRight size={16} />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                      {next.title}
                    </h4>
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Table of Contents */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#section-${index + 1}`}
                        className="block text-sm text-gray-600 hover:text-red-600 transition-colors py-1"
                      >
                        {index + 1}. {item}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-2">Subscribe</h3>
                  <p className="text-red-100 text-sm mb-4">
                    Get notified about new posts.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200 text-sm focus:outline-none focus:border-white/40 mb-3"
                  />
                  <button className="w-full bg-white text-red-600 py-2 rounded-lg font-semibold text-sm hover:bg-red-50 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related <span className="text-red-600">Articles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gray-400 text-sm mb-2">{relatedPost.date}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Comments ({post.comments})
          </h2>

          {/* Comment Form */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Leave a Comment</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Write your comment..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Post Comment
              </button>
            </form>
          </div>

          {/* Sample Comments */}
          <div className="space-y-6">
            {[
              {
                name: "Alex Johnson",
                avatar: "/testimonials/client1.jpg",
                date: "2 days ago",
                comment:
                  "Great article! The insights on AI-powered marketing are really helpful. Looking forward to implementing some of these strategies.",
                likes: 12,
              },
              {
                name: "Maria Garcia",
                avatar: "/testimonials/client2.jpg",
                date: "3 days ago",
                comment:
                  "This is exactly what I needed to read. The section on privacy-first marketing is particularly relevant given the recent changes in data regulations.",
                likes: 8,
              },
            ].map((comment, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200 flex-shrink-0">
                  <Image
                    src={comment.avatar}
                    alt={comment.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {comment.name}
                      </h4>
                      <span className="text-gray-400 text-sm">{comment.date}</span>
                    </div>
                    <p className="text-gray-600">{comment.comment}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 ml-4">
                    <button className="flex items-center gap-1 text-gray-400 hover:text-red-600 text-sm transition-colors">
                      <Heart size={14} />
                      {comment.likes}
                    </button>
                    <button className="text-gray-400 hover:text-red-600 text-sm transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to All Posts
          </Link>
        </div>
      </section>
    </div>
  );
}