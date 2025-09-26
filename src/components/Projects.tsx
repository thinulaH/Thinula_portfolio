
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, ExternalLink, Code, Server, Database, Layers, BrainCircuit, Globe } from 'lucide-react';

const projects = [
  {
    title: "Readaroo - Educational Game",
    description: "A university group project focused on creating an educational game to enhance learning experiences through interactive gameplay.",
    image: "/readaroo.png",
    tags: ["Game Development", "Education", "Interactive Learning", "Unity", "C#","RAG", "AI"],
    github: "#",
    demo: "https://www.readaroo.online",
    category: "full-stack",
    featured: true,
    timeline: "Oct 2024-Present"
  },
  {
    title: "Real-Time Ticket Management System",
    description: "An individual project developing a system for efficiently managing and processing tickets in real-time environments.",
    image: "/TicketingSystem.png",
    tags: ["Java", "Spring Boot", "Database", "Real-time Processing"],
    github: "#",
    demo: "#",
    category: "backend",
    featured: true,
    timeline: "Sep 2024-Jan 2025"
  },
  {
    title: "House Price Prediction",
    description: "A machine learning regression project to predict house prices based on various features and historical data.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    tags: ["Machine Learning", "Python", "Regression", "Data Analysis"],
    github: "#",
    category: "data-science",
    featured: true,
    timeline: "Jan 2025"
  },
  {
    title: "Career Ladders to Billionaire Status",
    description: "A data exploration group project analyzing career paths and factors that lead to exceptional financial success.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
    tags: ["Data Analysis", "Statistical Modeling", "Visualization"],
    github: "#",
    demo: "#",
    category: "data-science",
    timeline: "Oct 2024"
  },
  {
    title: "Life-on-Land",
    description: "A web development group project focused on environmental awareness and conservation of land ecosystems.",
    image: "/lifeonland.png",
    tags: ["Web Development", "React", "Environmental"],
    github: "#",
    demo: "https://edmthinula.github.io/life-on-land",
    category: "frontend",
    timeline: "Feb 2024-Apr 2024"
  }
];

const techIcons = {
  "full-stack": <Layers className="h-5 w-5" />,
  "frontend": <Code className="h-5 w-5" />,
  "backend": <Server className="h-5 w-5" />,
  "data-science": <BrainCircuit className="h-5 w-5" />,
  "web": <Globe className="h-5 w-5" />,
  "Data Analysis": <Database className="h-5 w-5" />
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
    { id: "data-science", label: "Data Science" },
    { id: "data-analysis", label: "Data Analysis" }
  ];

  return (
    <section id="projects" className="section-container" ref={sectionRef}>
      <h2 className="section-title text-center text-gradient">My Projects</h2>
      <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-12">
        A collection of my academic and personal projects highlighting my skills and interests.
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
                <span className="inline-flex items-center mr-1">{techIcons[category.id as keyof typeof techIcons]}</span>
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

              {project.timeline && (
                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
                  {project.timeline}
                </div>
              )}
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
