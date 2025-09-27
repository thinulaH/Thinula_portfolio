import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const contentRef = useRef(null);
  // FIX 1: Initialize mousePosition to a high X and low Y value to start in the top-right.
  const [mousePosition, setMousePosition] = useState({ x: 5000, y: 50 });
  // FIX 2: Initialize isMouseInside to true so the spotlight is visible on load.
  const [isMouseInside, setIsMouseInside] = useState(true);

  // A subtle animation to reveal the content on mount
  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    }
  }, []);

  // Effect for the mouse spotlight
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     const section = event.currentTarget;
  //     const rect = section.getBoundingClientRect();
  //     setMousePosition({
  //       x: event.clientX - rect.left,
  //       y: event.clientY - rect.top,
  //     });
  //     setIsMouseInside(true);
  //   };

  //   const handleMouseLeave = () => {
  //     // This hides the mouse-following glow when the cursor leaves the section.
  //     setIsMouseInside(false); 
  //   };

  //   const heroSection = document.getElementById('home');
  //   if (heroSection) {
  //     // Add event listeners when the component mounts
  //     heroSection.addEventListener('mousemove', handleMouseMove);
  //     heroSection.addEventListener('mouseleave', handleMouseLeave);
      
  //     // Cleanup event listeners on component unmount
  //     return () => {
  //       heroSection.removeEventListener('mousemove', handleMouseMove);
  //       heroSection.removeEventListener('mouseleave', handleMouseLeave);
  //     };
  //   }
  //   // Return a cleanup function even if heroSection is null
  //   return () => {};
  // }, []); 

  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-60px)] relative flex items-center justify-center w-full bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-500 overflow-hidden"
    >
      
      {/* Subtle Geometric Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* PERMANENT STATIC IDLE GLOW POINT (Unchanged) */}
      <div 
        className="pointer-events-none absolute w-[800px] h-[800px] rounded-full mix-blend-multiply opacity-30 dark:opacity-40"
        style={{
          top: '50%',
          left: '20%', 
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(100, 50, 200, 0.4) 0%, transparent 70%)',
          zIndex: 4, 
          filter: 'blur(100px)', 
        }}
      ></div>

      {/* Mouse Spotlight Effect (Starts in top-right due to initial state) */}
      {isMouseInside && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(60, 50, 150, 0.25) 0%, transparent 60%)`,
            opacity: 1,
            transition: 'opacity 0.5s ease-out',
            zIndex: 5,
          }}
        ></div>
      )}

      <div 
        ref={contentRef}
        style={{ opacity: 0, transform: 'translateY(20px)' }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-16 lg:py-0 transition-all duration-1000 ease-out"
      >
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 order-1 lg:order-2">
            
            <h1 
              className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-[9rem] 4xl:text-[10rem] font-extrabold tracking-tight leading-tight md:leading-snug"
              style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}
            >
              THINULA
              &nbsp;
              <br className="sm:hidden" />
              HARISCHANDRA
            </h1>
            
            <div className="max-w-lg lg:max-w-none space-y-2 pt-2 md:pt-4">
                <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
                  Computer Science Student, Data Enthusiast, Developer.
                </p>
                <p className="text-base md:text-lg font-light text-gray-500 dark:text-gray-400">
                  Focusing on turning data into robust solutions and code into seamless digital experiences.
                </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 md:pt-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-gray-900 font-semibold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-semibold text-sm tracking-wide hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Portrait Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1 pt-8 lg:pt-0">
            <div className="w-60 xs:w-72 md:w-80 lg:w-96 aspect-[3/4] relative">
              <img 
                src="thinulaH.png" 
                alt="Thinula Harischandra: Full-body cutout portrait on a transparent background." 
                aria-label="Portrait of Thinula Harischandra"
                className="w-full h-full object-contain object-bottom transition-transform duration-500 hover:scale-[1.03] drop-shadow-lg dark:drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-70">
        <a href="#about" aria-label="Scroll down to the about section" className="block p-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;