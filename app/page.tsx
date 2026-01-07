import Navbar from '@/components/Global/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import About from '@/components/home/About';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Footer from '@/components/Global/Footer';
export default function Home() {
  return (
    <main className="overflow-auto">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}