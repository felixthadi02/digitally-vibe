import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Digitally Vibe",
  description: "Get in touch with Digitally Vibe for your digital solutions",
};

const contactInfo = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    details: ["+917993119262", "+918179118725"],
    action: "tel:+919133290263",
    actionText: "Call Now",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    details: ["hello@digitallyvibe.com", "support@digitallyvibe.com"],
    action: "mailto:hello@digitallyvibe.com",
    actionText: "Send Email",
  },
  {
    icon: <MapPin size={24} />,
    title: "Address",
    details: ["123 Digital Street", "Tech Hub, City - 400001"],
    action: "https://maps.google.com",
    actionText: "Get Directions",
  },
  {
    icon: <Clock size={24} />,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    action: null,
    actionText: null,
  },
];

const socialLinks = [
  { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
];

const faqs = [
  {
    question: "How quickly can you start on my project?",
    answer:
      "We typically start within 1-2 weeks after the initial consultation and agreement. Urgent projects can be accommodated based on our current workload.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing based on project scope and requirements. Contact us for a customized quote tailored to your specific needs.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We provide ongoing maintenance and support packages to ensure your digital presence stays updated and optimized.",
  },
  {
    question: "Can you work with clients remotely?",
    answer:
      "Absolutely! We work with clients globally through video calls, emails, and project management tools for seamless collaboration.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-28 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare size={18} />
            WE&apos;D LOVE TO HEAR FROM YOU
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-red-200">Touch</span>
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s discuss how we can help your
            business thrive in the digital space.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 -mt-16 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-500 text-sm">
                    {detail}
                  </p>
                ))}
                {info.action && (
                  <a
                    href={info.action}
                    className="inline-flex items-center gap-2 text-red-600 font-medium text-sm mt-4 hover:gap-3 transition-all"
                  >
                    {info.actionText}
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Send size={18} />
                  SEND US A MESSAGE
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Let&apos;s Start a <span className="text-red-600">Conversation</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="web-development">Web Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="branding">Branding & Design</option>
                      <option value="seo">SEO Services</option>
                      <option value="social-media">Social Media Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white">
                    <option value="">Select budget range</option>
                    <option value="10k-25k">₹10,000 - ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="1l-above">₹1,00,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="/privacy" className="text-red-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Social */}
            <div className="space-y-8">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Digitally Vibe Location"
                ></iframe>
              </div>

              {/* Quick Contact Box */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <p className="text-gray-400 mb-6">
                  Prefer to reach out directly? Here&apos;s how you can connect with
                  us instantly.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call us at</p>
                      <p className="font-semibold">+91 98765 43210</p>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@digitallyvibe.com"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email us at</p>
                      <p className="font-semibold">hello@digitallyvibe.com</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-sm text-gray-400 mb-4">Follow us on</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MessageSquare size={18} />
              FAQ
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our services
            </p>
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
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Digitally Vibe for their
            digital growth. Let&apos;s create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-colors"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}