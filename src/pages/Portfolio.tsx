import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGitHubRepos } from "@/services/github";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectCard from "@/components/ProjectCard";
import type { GitHubRepo } from "@/types/github";

const normalizeKey = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, '');

const findProjectMetadata = (
  repoName: string,
  projectDescriptions: Record<string, { title: string; description: string }>
) => {
  const normalizedName = normalizeKey(repoName);
  return projectDescriptions[
    Object.keys(projectDescriptions).find(
      (key) => normalizeKey(key) === normalizedName
    ) ?? ''
  ];
};

const Portfolio = () => {
  const { t } = useLanguage();
  const { data: projects, isLoading, error } = useQuery<GitHubRepo[], Error>({
    queryKey: ['github-repos', 'MatysiakQ'],
    queryFn: () => fetchGitHubRepos('MatysiakQ'),
  });

  const projectDescriptions = useMemo(
    () => ({
      portfolio: {
        title: t('portfolio.projects.portfolio.title'),
        description: t('portfolio.projects.portfolio.description'),
      },
      CV: {
        title: t('portfolio.projects.cv.title'),
        description: t('portfolio.projects.cv.description'),
      },
      'E-faktura': {
        title: t('portfolio.projects.e-faktura.title'),
        description: t('portfolio.projects.e-faktura.description'),
      },
      'Next-Ai': {
        title: t('portfolio.projects.next-ai.title'),
        description: t('portfolio.projects.next-ai.description'),
      },
      PrintWall: {
        title: t('portfolio.projects.printwall.title'),
        description: t('portfolio.projects.printwall.description'),
      },
    }),
    [t]
  );

  if (isLoading) {
    return (
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('portfolio.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('portfolio.loading')}</p>
        </div>
      </div>
    );
  }

  if (error || !projects) {
    return (
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('portfolio.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('portfolio.error')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('portfolio.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const metadata = findProjectMetadata(project.name, projectDescriptions);

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isGitHub
                titleOverride={metadata?.title}
                descriptionOverride={metadata?.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
