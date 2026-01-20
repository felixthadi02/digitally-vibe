import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Blog Post | Digitally Vibe",
  description: "Read our latest insights on digital marketing and web development",
};

// Mock data - In real app, fetch from API/CMS
const post = {
  id: 1,
  title: "The Ultimate Guide to Digital Marketing in 2025",
  excerpt:
    "Discover the latest trends, strategies, and tools that will dominate the digital marketing landscape in 2025.",
  content: `
    <p>Digital marketing continues to evolve at a rapid pace, and staying ahead of the curve is essential for businesses looking to thrive in the online space. In this comprehensive guide, we'll explore the key trends and strategies that will define digital marketing in 2025.</p>
    
    <h2>1. AI-Powered Marketing Automation</h2>
    <p>Artificial intelligence has transformed how we approach marketing campaigns. From predictive analytics to personalized content recommendations, AI is making marketing more efficient and effective than ever before.</p>
    <p>Key applications include:</p>
    <ul>
      <li>Automated email campaigns with personalized content</li>
      <li>Chatbots for customer service and lead generation</li>
      <li>Predictive analytics for campaign optimization</li>
      <li>Dynamic pricing strategies</li>
    </ul>
    
    <h2>2. Voice Search Optimization</h2>
    <p>With the growing adoption of smart speakers and voice assistants, optimizing for voice search has become crucial. Businesses need to focus on conversational keywords and natural language patterns.</p>
    
    <blockquote>
      "By 2025, over 50% of all searches will be voice-based. Businesses that don't adapt will be left behind."
    </blockquote>
    
    <h2>3. Video Content Dominance</h2>
    <p>Video continues to be the most engaging form of content online. Short-form videos on platforms like TikTok and Instagram Reels are driving massive engagement, while long-form content on YouTube remains valuable for SEO.</p>
    
    <h2>4. Privacy-First Marketing</h2>
    <p>With increasing privacy regulations and the death of third-party cookies, marketers need to adopt privacy-first strategies. First-party data collection and contextual advertising will become more important.</p>
    
    <h2>5. Influencer Marketing Evolution</h2>
    <p>Influencer marketing is maturing, with a shift towards micro and nano-influencers who offer higher engagement rates and more authentic connections with their audiences.</p>
    
    <h2>Conclusion</h2>
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
};

const relatedPosts = [
  {
    id: 2,
    title: "10 SEO Strategies That Actually Work",
    image: "/blog/post1.jpg",
    category: "SEO",
    date: "Jan 12, 2025",
  },
  {
    id: 3,
    title: "Building a Brand Identity That Stands Out",
    image: "/blog/post2.jpg",
    category: "Branding",
    date: "Jan 10, 2025",
  },
  {
    id: 4,
    title: "Social Media Marketing Guide",
    image: "/blog/post4.jpg",
    category: "Social Media",
    date: "Jan 5, 2025",
  },
];

export default function BlogPostPage() {
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
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
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
                <Link
                  href="#"
                  className="group p-6 bg-gray-50 hover:bg-red-50 rounded-2xl transition-colors"
                >
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <ArrowLeft size={16} />
                    Previous Post
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    10 SEO Strategies That Actually Work
                  </h4>
                </Link>
                <Link
                  href="#"
                  className="group p-6 bg-gray-50 hover:bg-red-50 rounded-2xl transition-colors text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-gray-400 text-sm mb-2">
                    Next Post
                    <ArrowRight size={16} />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    Building a Brand Identity That Stands Out
                  </h4>
                </Link>
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
                    {[
                      "AI-Powered Marketing",
                      "Voice Search Optimization",
                      "Video Content Dominance",
                      "Privacy-First Marketing",
                      "Influencer Marketing",
                      "Conclusion",
                    ].map((item, index) => (
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
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gray-400 text-sm mb-2">{post.date}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {post.title}
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
    </div>
  );
}