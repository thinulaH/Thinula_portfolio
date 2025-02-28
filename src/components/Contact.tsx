
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center text-gradient">Get in Touch</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Have a project in mind or want to collaborate? I'd love to hear from you.
          Fill out the form below or reach out directly using my contact information.
        </p>

        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
          visible ? "animate-fade-in" : "opacity-0"
        )}>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
          
          <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-background/70 to-background border border-border hidden md:block">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-secondary/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-foreground/70">+94 70 669 2736</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-secondary/50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-foreground/70">thinula.haris@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-secondary/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Gampaha, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/thinulaH" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/thinula-harischandra-218208272/?originalSubdomain=lk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/thinula_harischandra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/thinula_02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
