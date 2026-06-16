import { useState, useEffect } from 'react';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const SECTIONS = ['hero', 'about', 'projects', 'skills', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers = SECTIONS.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <div className="bg-port-bg text-port-text min-h-screen">
      <Nav active={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
