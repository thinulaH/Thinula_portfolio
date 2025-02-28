
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import { Photography as PhotographyContent } from '@/components/Photography';

const Photography = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Animate content entry
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const goBack = () => {
    navigate('/');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <header className="fixed top-0 left-0 right-0 z-50 py-3 bg-background/80 backdrop-blur-lg shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={goBack}
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold text-gradient">Photography Portfolio</h1>
            </div>
            <ThemeToggle />
          </div>
        </header>
        
        <main className={`flex-grow pt-24 transition-opacity duration-500 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6 text-center">My Photography Work</h1>
            <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-12">
              A collection of my best captures, showcasing unique perspectives and visual stories through my lens.
            </p>
          </div>
          
          <PhotographyContent />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Photography;
