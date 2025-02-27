
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, ExternalLink, Code, Server, Database, Layers } from 'lucide-react';

const projects = [
  {
    title: "Smart Learning Platform",
    description: "An AI-powered learning management system that personalizes content based on student performance and learning style.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tags: ["React", "Node.js", "MongoDB", "Machine Learning"],
    github: "#",
    demo: "#",
    category: "full-stack",
    featured: true
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["D3.js", "Vue.js", "Firebase", "REST API"],
    github: "#",
    demo: "#",
    category: "frontend",
    featured: true
  },
  {
    title: "Algorithmic Trading Bot",
    description: "Automated trading system that analyzes market data and executes trades based on predefined strategies.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    tags: ["Python", "TensorFlow", "Financial APIs", "Statistical Analysis"],
    github: "#",
    category: "backend",
    featured: true
  },
  {
    title: "IoT Home Automation",
    description: "System connecting various smart home devices and providing a unified control interface.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    tags: ["Raspberry Pi", "MQTT", "React Native", "Express.js"],
    github: "#",
    demo: "#",
    category: "full-stack"
  },
  {
    title: "Secure File Sharing Service",
    description: "End-to-end encrypted file sharing platform with access controls and expiring links.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de",
    tags: ["Cryptography", "Java", "Spring Boot", "AWS S3"],
    github: "#",
    category: "backend"
  },
  {
    title: "Social Network Analysis Tool",
    description: "Tool for analyzing and visualizing relationships and influence in social networks.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    tags: ["Graph Algorithms", "Python", "NetworkX", "Flask"],
    github: "#",
    demo: "#",
    category: "data-science"
  }
];

const techIcons = {
  "full-stack": <Layers className="h-5 w-5" />,
  "frontend": <Code className="h-5 w-5" />,
  "backend": <Server className="h-5 w-5" />,
  "data-science": <Database className="h-5 w-5" />
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "full-stack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "data-science", label: "Data Science" }
  ];

  return (
    <section id="projects" className="section-container" ref={sectionRef}>
      <h2 className="section-title text-center text-gradient">My Projects</h2>
      <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-12">
        A collection of my most significant works, showcasing my skills and problem-solving abilities.
      </p>

      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all text-sm font-medium",
                selectedCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              {category.id !== "all" && (
                <span className="mr-1">{techIcons[category.id as keyof typeof techIcons]}</span>
              )}
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            className={cn(
              "portfolio-card glass-card overflow-hidden rounded-xl transition-all duration-500",
              isVisible 
                ? "translate-y-0 opacity-100" 
                : "translate-y-10 opacity-0",
              {
                "delay-100": index % 3 === 0,
                "delay-200": index % 3 === 1,
                "delay-300": index % 3 === 2
              }
            )}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className={cn(
                  "w-full h-full object-cover transition-all duration-500",
                  hoveredProject === index ? "scale-110" : "scale-100"
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
              
              {project.featured && (
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  Featured
                </div>
              )}
              
              <div className="absolute top-4 right-4 flex gap-2">
                {project.category && (
                  <div className="bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    {techIcons[project.category as keyof typeof techIcons]}
                    <span className="capitalize">{project.category}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.github} 
                  className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
