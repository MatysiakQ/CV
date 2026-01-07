import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "E-commerce Platform — kompleksowa platforma sprzedażowa z integracją płatności (Stripe), zarządzaniem stanami magazynowymi oraz panelem administracyjnym. Stack: React, Node.js, PostgreSQL, Stripe. Wynik: bezpieczne płatności, modularna architektura gotowa do skalowania i CI/CD.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "CI/CD", "Responsive Design"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Aplikacja do zarządzania projektami z aktualizacjami w czasie rzeczywistym i funkcjami współpracy zespołowej. Stack: React, TypeScript, Socket.io, MongoDB. Wynik: synchronizacja zadań w czasie rzeczywistym oraz architektura przygotowana do skalowania i produkcyjnego wdrożenia.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["React", "TypeScript", "Socket.io", "MongoDB", "Responsive Design"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Weather Dashboard — interaktywny panel pogodowy z mapami, prognozami i alertami. Stack: Vue.js, D3.js, REST API, PWA. Wynik: szybkie wizualizacje danych, obsługa offline dzięki PWA i responsywne UI dla urządzeń mobilnych.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["Vue.js", "D3.js", "REST API", "PWA", "Responsive Design"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Social Media Analytics — narzędzie do agregacji i analizy danych z mediów społecznościowych z zaawansowanymi raportami i wykresami. Stack: React, Python, FastAPI, Chart.js. Wynik: automatyczne raporty, eksport danych i przygotowanie do integracji z narzędziami BI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["React", "Python", "FastAPI", "Chart.js", "REST API"],
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