
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Macro shot of circuit board",
    description: "Technology Patterns"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    alt: "Minimalist robot design",
    description: "Robotic Simplicity"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    alt: "Code pattern display",
    description: "Digital Matrix"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Colorful code on screen",
    description: "Creative Coding"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    alt: "Modern workspace with iMac",
    description: "Minimal Workspace"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    alt: "Space imagery with stars",
    description: "Cosmic Wonder"
  }
];

const Photography = () => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(photos.length).fill(false));

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        });
      },
      { threshold: 0.2 }
    );

    const children = containerRef.current.querySelectorAll('.photo-item');
    children.forEach(child => observer.observe(child));

    return () => {
      children.forEach(child => observer.unobserve(child));
    };
  }, []);

  return (
    <section id="photography" className="section-container">
      <h2 className="section-title text-center text-gradient">Photography</h2>
      <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-12">
        A collection of my best captures, showcasing unique perspectives and visual stories.
      </p>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={photo.id}
            data-index={index}
            className={cn(
              "photo-item portfolio-card group cursor-pointer transition-all duration-500",
              visibleItems[index] ? "animate-scale-in" : "opacity-0"
            )}
            onClick={() => setActivePhoto(photo.id)}
          >
            <div className="image-card-shine h-80 w-full">
              <img 
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-white font-medium text-lg">{photo.description}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {activePhoto && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={photos.find(p => p.id === activePhoto)?.src}
              alt={photos.find(p => p.id === activePhoto)?.alt}
              className="max-h-[85vh] w-auto mx-auto"
            />
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              onClick={() => setActivePhoto(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-medium">
                {photos.find(p => p.id === activePhoto)?.description}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photography;
