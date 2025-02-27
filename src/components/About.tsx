
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, Database, Globe, Server, Terminal, BarChart3, GitBranch, Languages } from 'lucide-react';

const skills = [
  { name: 'Programming (Python, Java, C#)', level: 90, icon: <Terminal className="w-4 h-4" /> },
  { name: 'Web Development (React)', level: 85, icon: <Globe className="w-4 h-4" /> },
  { name: 'Backend (Spring Boot)', level: 80, icon: <Server className="w-4 h-4" /> },
  { name: 'Database (MySQL, PostgreSQL)', level: 85, icon: <Database className="w-4 h-4" /> },
  { name: 'Data Visualization', level: 80, icon: <BarChart3 className="w-4 h-4" /> },
  { name: 'Version Control (Git)', level: 75, icon: <GitBranch className="w-4 h-4" /> },
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
            I'm a passionate Computer Science student at Informatics Institute of Technology (IIT) with a concurrent
            degree in Industrial Statistics and Mathematical Finance at the University of Colombo.
          </p>
          <p className="mb-6 text-foreground/80">
            I'm particularly interested in machine learning, data analysis, and software development, combining my
            statistical knowledge with programming expertise. My dual education provides me with a unique perspective
            on solving complex problems through both computational and mathematical approaches.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="text-xl font-semibold">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full">
                <Languages className="w-4 h-4" />
                <span>English</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full">
                <Languages className="w-4 h-4" />
                <span>Sinhala</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <h3 className="text-xl font-semibold">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {["Machine Learning", "Technology & Innovation", "Stats", "Maths"].map((interest) => (
                <span key={interest} className="bg-secondary/50 px-3 py-1 rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold">Hobbies</h3>
            <div className="flex flex-wrap gap-3">
              {["Photography", "Table Tennis"].map((hobby) => (
                <span key={hobby} className="bg-secondary/50 px-3 py-1 rounded-full">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
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
