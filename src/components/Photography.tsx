
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Camera, ImagePlus, ExternalLink } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: "public/1.jpg",
    alt: "",
    description: ""
  },
  {
    id: 2,
    src: "public/2.jpg",
    alt: "",
    description: ""
  },
  {
    id: 3,
    src: "public/3.jpg",
    alt: "",
    description: ""
  },
  {
    id: 4,
    src: "public/DSCN3703.jpg",
    alt: "",
    description: ""
  },
  {
    id: 5,
    src: "public/DSCN4605.jpg",
    alt: "",
    description: ""
  },
  {
    id: 6,
    src: "public/DSCN4673.jpg",
    alt: "",
    description: ""
  },
  {
    id: 7,
    src: "public/DSCN4674.jpg",
    alt: "",
    description: ""
  },
  {
    id: 7,
    src: "public/DSCN4945.jpg",
    alt: "",
    description: ""
  }
];

export const Photography = () => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(photos.length).fill(false));
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Extract categories from photos for filtering
  useEffect(() => {
    const allCategories = new Set<string>();
    photos.forEach(photo => {
      if (photo.description) {
        const category = photo.description.split(' ')[0];
        allCategories.add(category);
      }
    });
    setCategories(Array.from(allCategories));
  }, []);

  // Handle intersection observer for animations
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

  const filteredPhotos = activeCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.description.startsWith(activeCategory));

  return (
    <div className="section-container">
      <div className="mb-12">
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-4 py-2 rounded-full transition-all text-sm font-medium",
              activeCategory === "all" 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            All Photos
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full transition-all text-sm font-medium",
                activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, index) => (
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
              <div className="w-full">
                <h3 className="text-white font-medium text-lg">{photo.description}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <Camera className="w-4 h-4 text-white/70" />
                  <span className="text-white/70 text-sm">Click to view</span>
                </div>
              </div>
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
              <p className="text-white/70 mt-2">
                {photos.find(p => p.id === activePhoto)?.alt}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">About My Photography</h2>
        <p className="max-w-3xl mx-auto text-foreground/70 mb-8">
          Photography is one of my creative outlets where I explore the world through my lens. 
          I enjoy capturing wildlife, landscapes, and unique moments that tell a story.
          My approach focuses on finding beauty in both grand scenes and subtle details.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl">
            <ImagePlus className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">Equipment</h3>
            <p className="text-foreground/70 text-sm">
              I shoot with a DSLR and occasionally my smartphone for spontaneous captures. Quality lenses help me achieve the look I want.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <Camera className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">Style</h3>
            <p className="text-foreground/70 text-sm">
              My photography style blends natural lighting with thoughtful composition to create images that evoke emotion and tell stories.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <ExternalLink className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">Social Media</h3>
            <p className="text-foreground/70 text-sm">
              Follow me on <a href="https://www.instagram.com/thinula_harischandra" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram</a> to see more of my photography work and latest captures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
