
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import Photography from '@/components/Photography';

const PhotographyPage = () => {
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
            <div className="relative mb-16 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?q=80&w=2071&auto=format&fit=crop"
                alt="Thinula Harischandra" 
                className="w-full h-[300px] md:h-[400px] object-cover animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="w-full p-8 text-white animate-slide-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">My Visual Journey</h2>
                  <p >
                    Capturing moments and perspectives through my lens. A collection of photographs that tell stories and evoke emotions.
                  </p>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6 text-center animate-fade-in-delayed-1">My Photography Work</h1>
            <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-12 animate-fade-in-delayed-2">
              A collection of my best captures, showcasing unique perspectives and visual stories through my lens.
            </p>
          </div>
          
          <Photography />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PhotographyPage;
