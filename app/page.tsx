import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import About from '@/components/home/About';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}