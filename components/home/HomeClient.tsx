import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Icons as simple SVG components
const Icons = {
  SEO: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  ),
  Code: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  ),
  Android: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 003 18h18a10.78 10.78 0 00-3.4-8.52zM8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  ),
  Web: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
  Marketing: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  ),
};

// Navbar Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const navItems = ['Home', 'Services', 'About', 'Contact'];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold" style={{ color: '#ff3233' }}>
              Digital<span className="text-gray-800">Pro</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-[#ff3233] transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
            <button
              className="px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#ff3233' }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} style={{ color: '#ff3233' }}>
              {isOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-[#ff3233]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        imageRef.current,
        { x: 100, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1 },
        '-=0.8'
      );

    // Floating animation for the image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-gray-50 to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transform Your
              <span style={{ color: '#ff3233' }}> Digital </span>
              Presence
            </h1>
            <p
              ref={subtitleRef}
              className="mt-6 text-lg text-gray-600 max-w-lg"
            >
              We provide cutting-edge SEO, Web & Android Development, and Digital
              Marketing solutions to skyrocket your business growth.
            </p>
            <div ref={buttonsRef} className="mt-8 flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#ff3233' }}
              >
                Get Free Consultation
              </button>
              <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: '#ff3233', color: '#ff3233' }}
              >
                View Our Work
              </button>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div
              className="w-full h-96 rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: '#ff3233' }}
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white"></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white"></div>
              </div>
              <div className="text-center text-white z-10">
                <div className="text-6xl font-bold">100+</div>
                <div className="text-xl mt-2">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: <Icons.SEO />,
      title: 'SEO Services',
      description: 'On-page & Off-page SEO optimization to boost your search rankings and organic traffic.',
      features: ['Keyword Research', 'Technical SEO', 'Link Building', 'Content Strategy'],
    },
    {
      icon: <Icons.Code />,
      title: 'Web Development',
      description: 'Custom, responsive websites built with modern technologies for optimal performance.',
      features: ['React/Next.js', 'E-commerce', 'CMS Integration', 'API Development'],
    },
    {
      icon: <Icons.Android />,
      title: 'Android Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['Native Apps', 'React Native', 'Flutter', 'App Maintenance'],
    },
    {
      icon: <Icons.Marketing />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to maximize your ROI and brand visibility.',
      features: ['Social Media', 'PPC Campaigns', 'Email Marketing', 'Analytics'],
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our <span style={{ color: '#ff3233' }}>Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              // ref={(el) => (cardsRef.current[index] = el)}
              className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#ff3233] transition-all duration-500 hover:shadow-2xl cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#ff323315', color: '#ff3233' }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span style={{ color: '#ff3233' }} className="mr-2">
                      <Icons.Check />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const Stats: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const stats = [
    { number: 500, suffix: '+', label: 'Projects Completed' },
    { number: 150, suffix: '+', label: 'Happy Clients' },
    { number: 98, suffix: '%', label: 'Success Rate' },
    { number: 24, suffix: '/7', label: 'Support Available' },
  ];

  useEffect(() => {
    numberRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { textContent: 0 },
          {
            textContent: stats[index].number,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: ref,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      ref={statsRef}
      className="py-20"
      style={{ backgroundColor: '#ff3233' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                <span ref={(el) => (numberRefs.current[index] = el)}>0</span>
                {stat.suffix}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const About: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span style={{ color: '#ff3233' }}>Us?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience in digital services, we've helped hundreds of
              businesses achieve their goals through innovative solutions and
              dedicated support.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Expert Team', desc: 'Skilled professionals with proven track records' },
                { title: 'Custom Solutions', desc: 'Tailored strategies for your unique needs' },
                { title: 'Result Oriented', desc: 'Focus on measurable outcomes and ROI' },
                { title: '24/7 Support', desc: 'Round-the-clock assistance whenever you need' },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#ff323320', color: '#ff3233' }}
                  >
                    <Icons.Check />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="h-48 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
                style={{ backgroundColor: '#ff3233' }}
              >
                10+ Years
              </div>
              <div className="h-48 rounded-2xl bg-gray-800 flex items-center justify-center text-white text-xl font-bold">
                Global Reach
              </div>
              <div className="h-48 rounded-2xl bg-gray-800 flex items-center justify-center text-white text-xl font-bold">
                Award Winning
              </div>
              <div
                className="h-48 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
                style={{ backgroundColor: '#ff3233' }}
              >
                Top Rated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Get In <span style={{ color: '#ff3233' }}>Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-8 rounded-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#ff3233] focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#ff3233] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Needed
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#ff3233] focus:outline-none transition-colors"
                required
              >
                <option value="">Select a service</option>
                <option value="seo-on">SEO - On Page</option>
                <option value="seo-off">SEO - Off Page</option>
                <option value="web-dev">Web Development</option>
                <option value="android-dev">Android Development</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#ff3233] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#ff3233' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold">
              <span style={{ color: '#ff3233' }}>Digital</span>Pro
            </span>
            <p className="mt-4 text-gray-400">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">SEO Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Android Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@digitalpro.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Digital Street, Tech City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DigitalPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;