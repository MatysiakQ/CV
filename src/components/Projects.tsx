import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Nowoczesna platforma e-commerce z zaawansowanym systemem płatności i zarządzaniem magazynem.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Aplikacja do zarządzania projektami z funkcjami współpracy zespołowej i real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["React", "TypeScript", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interaktywny dashboard pogodowy z mapami, prognozami i alertami meteorologicznymi.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["Vue.js", "D3.js", "REST API", "PWA"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Narzędzie do analizy mediów społecznościowych z zaawansowanymi raportami i wizualizacjami.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["React", "Python", "FastAPI", "Chart.js"],
      github: "#",
      demo: "#"
    }
  ];

  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('portfolio.title').split(' ')[0]} <span className="gradient-text">{t('portfolio.title').split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;