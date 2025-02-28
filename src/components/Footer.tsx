
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={cn(
      "py-12 border-t border-border transition-all duration-700",
      animate ? "opacity-100" : "opacity-0"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold text-gradient">Thinula Harischandra</a>
            <p className="mt-4 text-foreground/70">
              Computer Science student passionate about developing innovative solutions 
              at the intersection of technology and data analysis.
            </p>
            
            <div className="mt-6 flex gap-4">
              <a 
                href="https://github.com/thinulaH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/thinula-harischandra-218208272/?originalSubdomain=lk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/thinula_harischandra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/thinula_02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:thinula.haris@gmail.com" 
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-foreground/70 hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a></li>
              <li><a href="#education" className="text-foreground/70 hover:text-foreground transition-colors">Education</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">Projects</a></li>
              <li><Link to="/photography" className="text-foreground/70 hover:text-foreground transition-colors">Photography</Link></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone className="w-4 h-4" />
                +94 70 669 2736
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="w-4 h-4" />
                thinula.haris@gmail.com
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <MapPin className="w-4 h-4" />
                Gampaha, Sri Lanka
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>© {year} Thinula Harischandra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
