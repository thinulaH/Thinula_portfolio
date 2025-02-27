
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'Photography', level: 90 },
  { name: 'Photo Editing', level: 85 },
  { name: 'Composition', level: 80 },
  { name: 'Lighting', level: 75 },
  { name: 'Digital Design', level: 70 },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-container" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={cn(
          "transition-all duration-700 transform",
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="mb-4 text-foreground/80">
            I'm a passionate photographer and digital creator with a keen eye for detail and composition. 
            My work focuses on capturing the essence of subjects through a minimalist lens.
          </p>
          <p className="mb-6 text-foreground/80">
            With over 5 years of experience in the field, I've developed a unique style that 
            combines technical precision with artistic expression. I believe in the power of 
            simplicity and letting the subject speak for itself.
          </p>
          
          <div className="flex gap-4 mb-8">
            <a href="#contact" className="button-primary">
              Get in Touch
            </a>
            <a 
              href="#photography" 
              className="px-6 py-3 rounded-md border border-border bg-secondary/50 hover:bg-secondary transition-all"
            >
              View Work
            </a>
          </div>
        </div>
        
        <div className={cn(
          "transition-all duration-700 delay-300 transform",
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        )}>
          <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
