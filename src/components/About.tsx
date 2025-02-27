
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, Database, Figma, Globe, Server, Terminal } from 'lucide-react';

const skills = [
  { name: 'Programming', level: 90, icon: <Terminal className="w-4 h-4" /> },
  { name: 'Web Development', level: 85, icon: <Globe className="w-4 h-4" /> },
  { name: 'Backend', level: 80, icon: <Server className="w-4 h-4" /> },
  { name: 'Database', level: 75, icon: <Database className="w-4 h-4" /> },
  { name: 'UI/UX Design', level: 70, icon: <Figma className="w-4 h-4" /> },
  { name: 'Algorithms', level: 85, icon: <Code className="w-4 h-4" /> },
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
            I'm a passionate Computer Science student with a strong foundation in software development
            and algorithm design. I enjoy solving complex problems and creating efficient, elegant solutions.
          </p>
          <p className="mb-6 text-foreground/80">
            With a focus on both theory and practical applications, I've developed expertise in various
            programming languages and frameworks. I'm particularly interested in web development, artificial
            intelligence, and data structures & algorithms. I believe in clean code, continuous learning,
            and pushing the boundaries of what's possible with technology.
          </p>
          
          <div className="flex gap-4 mb-8">
            <a href="#contact" className="button-primary">
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-md border border-border bg-secondary/50 hover:bg-secondary transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className={cn(
          "transition-all duration-700 delay-300 transform",
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        )}>
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium flex items-center gap-2">
                    {skill.icon}
                    {skill.name}
                  </span>
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
