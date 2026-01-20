import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  TrendingUp,
  BookOpen,
  ChevronRight,
  MessageCircle,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Digitally Vibe",
  description:
    "Insights, tips, and trends in digital marketing, web development, and branding",
};

const featuredPost = {
  id: 1,
  title: "The Ultimate Guide to Digital Marketing in 2025",
  excerpt:
    "Discover the latest trends, strategies, and tools that will dominate the digital marketing landscape in 2025. From AI-powered campaigns to personalized experiences.",
  image: "/blog/featured.jpg",
  category: "Digital Marketing",
  author: {
    name: "John Doe",
    avatar: "/team/member1.jpg",
    role: "Marketing Director",
  },
  date: "Jan 15, 2025",
  readTime: "12 min read",
  tags: ["Marketing", "Trends", "Strategy"],
};

const blogPosts = [
  {
    id: 2,
    title: "10 SEO Strategies That Actually Work in 2025",
    excerpt:
      "Learn proven SEO techniques that will help your website rank higher and drive organic traffic.",
    image: "/blog/post1.jpg",
    category: "SEO",
    author: {
      name: "Sarah Williams",
      avatar: "/team/member4.jpg",
    },
    date: "Jan 12, 2025",
    readTime: "8 min read",
    likes: 234,
    comments: 45,
  },
  {
    id: 3,
    title: "Building a Brand Identity That Stands Out",
    excerpt:
      "Your complete guide to creating a memorable and impactful brand identity for your business.",
    image: "/blog/post2.jpg",
    category: "Branding",
    author: {
      name: "Jane Smith",
      avatar: "/team/member2.jpg",
    },
    date: "Jan 10, 2025",
    readTime: "10 min read",
    likes: 189,
    comments: 32,
  },
  {
    id: 4,
    title: "Next.js vs React: Which One Should You Choose?",
    excerpt:
      "A comprehensive comparison to help you decide the right framework for your next project.",
    image: "/blog/post3.jpg",
    category: "Web Development",
    author: {
      name: "Mike Johnson",
      avatar: "/team/member3.jpg",
    },
    date: "Jan 8, 2025",
    readTime: "7 min read",
    likes: 312,
    comments: 67,
  },
  {
    id: 5,
    title: "Social Media Marketing: Complete Strategy Guide",
    excerpt:
      "Master the art of social media marketing with our comprehensive strategy framework.",
    image: "/blog/post4.jpg",
    category: "Social Media",
    author: {
      name: "Sarah Williams",
      avatar: "/team/member4.jpg",
    },
    date: "Jan 5, 2025",
    readTime: "15 min read",
    likes: 276,
    comments: 54,
  },
  {
    id: 6,
    title: "The Power of Content Marketing for B2B",
    excerpt:
      "How to create content that converts leads into customers in the B2B space.",
    image: "/blog/post5.jpg",
    category: "Content Marketing",
    author: {
      name: "John Doe",
      avatar: "/team/member1.jpg",
    },
    date: "Jan 3, 2025",
    readTime: "9 min read",
    likes: 198,
    comments: 28,
  },
  {
    id: 7,
    title: "UI/UX Design Trends to Watch in 2025",
    excerpt:
      "Explore the latest design trends that are shaping user experiences across digital platforms.",
    image: "/blog/post6.jpg",
    category: "Design",
    author: {
      name: "Jane Smith",
      avatar: "/team/member2.jpg",
    },
    date: "Dec 28, 2024",
    readTime: "6 min read",
    likes: 421,
    comments: 89,
  },
];

const categories = [
  { name: "All Posts", count: 48, slug: "all" },
  { name: "Digital Marketing", count: 15, slug: "digital-marketing" },
  { name: "SEO", count: 12, slug: "seo" },
  { name: "Web Development", count: 8, slug: "web-development" },
  { name: "Branding", count: 6, slug: "branding" },
  { name: "Social Media", count: 5, slug: "social-media" },
  { name: "Design", count: 2, slug: "design" },
];

const popularTags = [
  "Marketing",
  "SEO",
  "Branding",
  "Web Design",
  "Social Media",
  "Content",
  "Strategy",
  "Trends",
  "React",
  "Next.js",
  "UI/UX",
  "Analytics",
];

const trendingPosts = [
  {
    id: 1,
    title: "How AI is Changing Digital Marketing",
    date: "Jan 14, 2025",
    views: "2.5K",
  },
  {
    id: 2,
    title: "5 Common SEO Mistakes to Avoid",
    date: "Jan 11, 2025",
    views: "1.8K",
  },
  {
    id: 3,
    title: "The Future of E-commerce Design",
    date: "Jan 9, 2025",
    views: "1.5K",
  },
  {
    id: 4,
    title: "Building Trust Through Brand Story",
    date: "Jan 7, 2025",
    views: "1.2K",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen size={18} />
            OUR BLOG
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Insights & <span className="text-red-200">Articles</span>
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Stay updated with the latest trends, tips, and strategies in digital
            marketing, web development, and branding.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 pl-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-red-200 focus:outline-none focus:border-white/40 transition-colors"
              />
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-red-200"
                size={20}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-50 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 -mt-12 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-72 lg:h-auto bg-gray-200">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors">
                  <Link href={`/blog/${featuredPost.id}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {featuredPost.author.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {featuredPost.author.role}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Latest <span className="text-red-600">Articles</span>
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">Sort by:</span>
                  <select className="bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200">
                    <option>Latest</option>
                    <option>Popular</option>
                    <option>Trending</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-52 bg-gray-200 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>

                      {/* Bookmark Button */}
                      <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                        <Bookmark size={16} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {/* Author */}
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden relative bg-gray-200">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm text-gray-600">
                            {post.author.name}
                          </span>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-1 text-sm">
                            <Heart size={14} />
                            {post.likes}
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <MessageCircle size={14} />
                            {post.comments}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                  <ChevronRight size={18} className="rotate-180" />
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-full font-medium transition-colors flex items-center justify-center ${
                      page === 1
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Tag size={18} className="text-red-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.slug}`}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                        index === 0
                          ? "bg-red-600 text-white"
                          : "bg-white hover:bg-red-50 text-gray-600 hover:text-red-600"
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-sm ${
                          index === 0
                            ? "bg-white/20"
                            : "bg-gray-100"
                        }`}
                      >
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trending Posts */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-red-600" />
                  Trending Posts
                </h3>
                <div className="space-y-4">
                  {trendingPosts.map((post, index) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="flex gap-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 text-sm">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.views} views</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Tag size={18} className="text-red-600" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="bg-white hover:bg-red-600 text-gray-600 hover:text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors border border-gray-200 hover:border-red-600"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
                <p className="text-red-100 text-sm mb-4">
                  Get the latest articles delivered straight to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-red-600 px-4 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-red-200 text-xs mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>

              {/* Social Follow */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { name: "Facebook", count: "25K", color: "bg-blue-600" },
                    { name: "Twitter", count: "18K", color: "bg-sky-500" },
                    { name: "Instagram", count: "30K", color: "bg-pink-600" },
                    { name: "LinkedIn", count: "12K", color: "bg-blue-700" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`${social.color} text-white p-3 rounded-xl text-center hover:opacity-90 transition-opacity`}
                    >
                      <div className="text-xs opacity-80">Followers</div>
                      <div className="font-bold">{social.count}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen size={32} className="text-red-400" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Never Miss an <span className="text-red-500">Update</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest digital marketing insights,
            tips, and trends delivered straight to your inbox every week.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            Join 10,000+ subscribers. No spam ever.
          </p>
        </div>
      </section>


    </div>
  );
}