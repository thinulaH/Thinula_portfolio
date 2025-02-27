
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Mock data for Twitter posts
const twitterPosts = [
  {
    id: 't1',
    username: '@username',
    content: 'Just released a new photography collection! Check out my latest work on my portfolio.',
    likes: 42,
    retweets: 12,
    date: '2h ago'
  },
  {
    id: 't2',
    username: '@username',
    content: 'Exciting news! My photo was featured in a major publication. So grateful for this opportunity!',
    likes: 128,
    retweets: 36,
    date: '1d ago'
  },
  {
    id: 't3',
    username: '@username',
    content: 'Experimenting with new techniques in my latest photoshoot. Can\'t wait to share the results!',
    likes: 87,
    retweets: 19,
    date: '3d ago'
  }
];

// Mock data for Instagram posts
const instagramPosts = [
  {
    id: 'i1',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    likes: 256,
    caption: 'Exploring patterns in technology. #TechArt #Photography',
    date: '1d ago'
  },
  {
    id: 'i2',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    likes: 312,
    caption: 'Minimalism and technology - a perfect match. #MinimalistPhotography',
    date: '3d ago'
  },
  {
    id: 'i3',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    likes: 189,
    caption: 'Digital patterns create fascinating visuals. #DigitalArt',
    date: '5d ago'
  }
];

const SocialFeed = () => {
  const [activeTab, setActiveTab] = useState<'twitter' | 'instagram'>('instagram');
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="social" className="section-container" ref={containerRef}>
      <h2 className="section-title text-center text-gradient">Social Media</h2>
      <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-12">
        Stay connected with my latest updates and shares across social platforms.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="flex rounded-full p-1 bg-secondary">
            <button
              className={cn(
                "px-6 py-2 rounded-full transition-all font-medium",
                activeTab === 'instagram' ? "bg-background shadow-sm" : "hover:bg-secondary/80"
              )}
              onClick={() => setActiveTab('instagram')}
            >
              Instagram
            </button>
            <button
              className={cn(
                "px-6 py-2 rounded-full transition-all font-medium",
                activeTab === 'twitter' ? "bg-background shadow-sm" : "hover:bg-secondary/80"
              )}
              onClick={() => setActiveTab('twitter')}
            >
              Twitter
            </button>
          </div>
        </div>

        <div className={cn(
          "transition-all duration-500 transform",
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {activeTab === 'instagram' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {instagramPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={cn(
                    "portfolio-card border border-border overflow-hidden bg-card",
                    `fade-in-delayed-${index + 1}`
                  )}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt="Instagram post" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span>{post.likes}</span>
                      </div>
                      <span className="text-sm text-foreground/60">{post.date}</span>
                    </div>
                    <p className="text-sm">{post.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {twitterPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={cn(
                    "border border-border rounded-xl p-6 bg-card",
                    `fade-in-delayed-${index + 1}`
                  )}
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-medium">{post.username}</span>
                    <span className="text-sm text-foreground/60">{post.date}</span>
                  </div>
                  <p className="mb-4">{post.content}</p>
                  <div className="flex gap-4 text-foreground/60">
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="17 1 21 5 17 9"></polyline>
                        <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                        <polyline points="7 23 3 19 7 15"></polyline>
                        <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                      </svg>
                      <span>{post.retweets}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
