
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Photography from '@/components/Photography';
import SocialFeed from '@/components/SocialFeed';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const Index = () => {
  // Smooth scroll function for navigation links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <Projects />
          <Photography />
          <SocialFeed />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
