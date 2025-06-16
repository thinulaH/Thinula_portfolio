import { useRef, useEffect } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove as EventListener);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove as EventListener);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden w-full"
      style={{
        background: `radial-gradient(
          circle at calc(50% + var(--mouse-x, 0.5) * 30vw) calc(50% + var(--mouse-y, 0.5) * 30vh), 
          rgba(30, 58, 138, 0.2), 
          transparent 40vw
        )`
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">Thinula</span> Harischandra
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl mx-auto">
          Computer Science Student, Data Enthusiast, and Developer.
          Turning data into solutions and code into experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="button-primary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-border hover:bg-secondary transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
