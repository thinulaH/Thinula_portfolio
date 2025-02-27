
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

const educationItems = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "Informatics Institute of Technology (IIT)",
    period: "2023 - Present",
    description: "Currently pursuing a Computer Science degree with honors, maintaining an average of 79.15%.",
    achievements: ["Coursework in algorithms, data structures, and software development", "Focus on web and application development", "Active participant in university tech projects"]
  },
  {
    degree: "BSc Industrial Statistics and Mathematical Finance",
    institution: "University of Colombo",
    period: "2024 - Present",
    description: "Concurrent degree focusing on statistical analysis and mathematical modeling with a GPA of 3.81.",
    achievements: ["Statistical modeling and analysis", "Mathematical finance applications", "Data-driven decision making"]
  }
];

const certifications = [
  {
    name: "Web Development",
    issuer: "Online Learning Platform",
    date: "2023",
    credential: "WD-2023-TH"
  },
  {
    name: "Python for Data Science",
    issuer: "DataTech Academy",
    date: "2024",
    credential: "PDS-2024-TH"
  },
  {
    name: "Machine Learning Fundamentals",
    issuer: "Kaggle",
    date: "2024",
    credential: "ML-2024-TH"
  }
];

const Education = () => {
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
    <section id="education" className="section-container" ref={sectionRef}>
      <h2 className="section-title text-center text-gradient">Education & Certifications</h2>
      <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-12">
        My academic journey and continued professional development.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className={cn(
          "transition-all duration-700 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Academic Background
          </h3>

          <div className="relative border-l-2 border-border pl-8 space-y-12">
            {educationItems.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "relative transition-all duration-700",
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                  { "delay-300": index === 1 }
                )}
              >
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{item.degree}</h4>
                    <span className="text-sm bg-secondary px-3 py-1 rounded-full flex items-center gap-1 text-foreground/70">
                      <Calendar className="h-3 w-3" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-foreground/70 font-medium mb-3">{item.institution}</p>
                  <p className="mb-4">{item.description}</p>
                  
                  {item.achievements.length > 0 && (
                    <div className="space-y-1">
                      <h5 className="font-medium text-sm flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        Focus Areas
                      </h5>
                      <ul className="list-disc list-inside text-sm text-foreground/70">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={cn(
          "transition-all duration-700 transform delay-150",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Certifications & Training
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={cn(
                  "glass-card p-6 rounded-xl transition-all duration-700",
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                  { "delay-300": index === 1, "delay-500": index === 2 }
                )}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">{cert.name}</h4>
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full text-foreground/70">{cert.date}</span>
                </div>
                <p className="text-foreground/70">{cert.issuer}</p>
                <div className="mt-2 pt-2 border-t border-border">
                  <span className="text-xs text-foreground/60">Credential ID: {cert.credential}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={cn(
            "mt-10 glass-card p-6 rounded-xl transition-all duration-700 delay-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <h4 className="font-bold mb-4">Continued Learning</h4>
            <p className="text-foreground/70 mb-4">
              I'm constantly expanding my knowledge through online courses and self-study in:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Data Science", "Machine Learning", "Web Development", "Statistical Analysis", 
                "Financial Modeling", "Python Libraries"].map((topic, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
