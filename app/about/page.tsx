import React from 'react';
import { 
  Target, 
  Rocket, 
  Users, 
  CheckCircle, 
  Eye, 
  Flag,
  Code,
  Megaphone,
  Palette,
  Search,
  Share2,
  PenTool,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-28 px-4">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-red-200">Digitally Vibe</span>
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            A full-service digital solutions company helping businesses grow, scale, 
            and succeed in the digital space.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <div className="w-20 h-1 bg-white rounded-full"></div>
            <div className="w-4 h-1 bg-red-300 rounded-full"></div>
            <div className="w-4 h-1 bg-red-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Users size={18} />
                WHO WE ARE
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Passionate Team of <span className="text-red-600">Digital Experts</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are a passionate team of digital marketers, designers, developers, 
                and strategists working together to create meaningful digital experiences.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We partner with startups, local businesses, institutions, and growing 
                brands to help them achieve consistent and measurable online growth.
              </p>
            </div>
            <div className="relative">
              <div className="bg-red-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Megaphone />, label: "Digital Marketers" },
                    { icon: <Palette />, label: "Creative Designers" },
                    { icon: <Code />, label: "Developers" },
                    { icon: <Target />, label: "Strategists" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-red-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Rocket size={18} />
              WHAT WE DO
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              End-to-End <span className="text-red-600">Digital Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our solutions are designed to support business goals at every stage of growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Megaphone size={28} />, title: "Digital Marketing", desc: "Strategic campaigns that drive results" },
              { icon: <Code size={28} />, title: "Web Development", desc: "Modern, responsive websites" },
              { icon: <Search size={28} />, title: "SEO Optimization", desc: "Improve search rankings" },
              { icon: <TrendingUp size={28} />, title: "Paid Advertising", desc: "ROI-focused ad campaigns" },
              { icon: <Share2 size={28} />, title: "Social Media", desc: "Engaging social presence" },
              { icon: <PenTool size={28} />, title: "Content Creation", desc: "Compelling content that converts" },
              { icon: <Palette size={28} />, title: "Branding", desc: "Memorable brand identity" },
              { icon: <Shield size={28} />, title: "Reputation Management", desc: "Protect your online image" },
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target size={18} />
              OUR APPROACH
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple & <span className="text-red-600">Effective</span> Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We believe in understanding businesses before building solutions. 
              Transparency and quality guide every step we take.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-red-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Understand", desc: "Deep dive into your requirements" },
                { step: "02", title: "Strategize", desc: "Create tailored strategy" },
                { step: "03", title: "Execute", desc: "Implement with precision" },
                { step: "04", title: "Optimize", desc: "Continuously improve" },
                { step: "05", title: "Scale", desc: "Grow your results" },
              ].map((item, index) => (
                <div key={index} className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-red-200">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CheckCircle size={18} />
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Building <span className="text-red-500">Long-Term</span> Partnerships
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Clients choose Digitally Vibe for our commitment to quality, clear 
                communication, and result-oriented mindset. We focus on building 
                long-term partnerships and delivering solutions that create real 
                business impact rather than short-term visibility.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Commitment to Quality",
                "Clear Communication",
                "Result-Oriented Mindset",
                "Long-Term Partnerships",
                "Real Business Impact",
                "Transparent Process",
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-red-500/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-red-700 p-8 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-red-100 text-lg leading-relaxed">
                  To become a trusted digital partner for businesses by delivering 
                  innovative, ethical, and impactful digital solutions.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-600/30 rounded-xl flex items-center justify-center mb-6">
                  <Flag size={32} className="text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To empower businesses with reliable digital strategies, creative 
                  solutions, and modern technology that support sustainable growth 
                  and strong brand presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to <span className="text-red-600">Grow Together?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let's discuss how we can help your business thrive in the digital space.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}