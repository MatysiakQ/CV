import { useQuery } from "@tanstack/react-query";
import { fetchStarredRepos } from "@/services/github";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import type { GitHubRepo } from "@/types/github";

// Project images mapping - add image paths for projects that have them
const PROJECT_IMAGES: Record<string, string> = {
  'hand-tracking': '/images/c37ccb7a-5662-447b-9d38-c871374ff306.png',
  // Add more project images here as needed
  // 'project-name': '/path/to/image.jpg',
};

const Projects = () => {
  const { t } = useLanguage();
  
  const { data: allProjects, isLoading, error } = useQuery<GitHubRepo[], Error>({
    queryKey: ['github-starred', 'MatysiakQ'],
    queryFn: () => fetchStarredRepos('MatysiakQ'),
  });

  // Add images to projects that have them
  const projects = allProjects?.map((repo: GitHubRepo) => ({
    ...repo,
    image: PROJECT_IMAGES[repo.name as keyof typeof PROJECT_IMAGES] ?? null,
  })) ?? [];

  if (isLoading) {
    return (
      <section id="projects" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('portfolio.title').split(' ')[0]} <span className="gradient-text">{t('portfolio.title').split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <div className="text-center">
            <p className="text-xl text-muted-foreground">{t('portfolio.loading')}</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || projects.length === 0) {
    return (
      <section id="projects" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('portfolio.title').split(' ')[0]} <span className="gradient-text">{t('portfolio.title').split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <div className="text-center">
            <p className="text-xl text-muted-foreground">{t('portfolio.error')}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('portfolio.title').split(' ')[0]} <span className="gradient-text">{t('portfolio.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isGitHub={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;