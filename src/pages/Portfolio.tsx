
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchGitHubRepos } from "@/services/github";
import { useLanguage } from "@/contexts/LanguageContext";

// Opisy projektów: klucz = nazwa repo, wartości: { pl, en }
const projectDescriptions: Record<string, { pl: string; en: string }> = {
  // Portfolio
  "portfolio": {
    pl: "Strona mojego portfolio",
    en: "My portfolio website"
  },
  // CV
  "CV": {
    pl: "Strona mojego portfolio",
    en: "My portfolio website"
  },
  // E-faktura
  "E-faktura": {
    pl: "Aplikacja mobilna",
    en: "Mobile application"
  },
  // Next-Ai
  "Next-Ai": {
    pl: "Strona internetowa mojego startupowego projektu",
    en: "Website for my startup project"
  },
  // PrintWall
  "PrintWall": {
    pl: "Pierwszy duży projekt, strona internetowa dla firmy z nadrukiem ściennym",
    en: "My first big project, a website for a wall print company"
  },
};

const Portfolio = () => {
  const { t, language } = useLanguage();
  
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['github-repos', 'MatysiakQ'],
    queryFn: () => fetchGitHubRepos('MatysiakQ'),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('portfolio.loading')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !projects) {
    return (
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('portfolio.error')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('portfolio.title').split(' ')[0]} <span className="gradient-text">{t('portfolio.title').split(' ')[1]}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass-effect card-glow group hover:scale-[1.03] hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader>
                {/* Miniatura projektu */}
                <div className="mb-4 w-full h-32 flex items-center justify-center rounded-lg bg-muted text-muted-foreground text-sm font-medium">
                  Image there soon
                </div>
                <CardTitle className="text-xl mb-2 flex items-center justify-between">
                  {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {project.stargazers_count > 0 && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stargazers_count}
                      </div>
                    )}
                    {project.forks_count > 0 && (
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {project.forks_count}
                      </div>
                    )}
                  </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {projectDescriptions[
                    Object.keys(projectDescriptions).find(
                      key => key.toLowerCase().replace(/[^a-z0-9]/gi, '') === project.name.toLowerCase().replace(/[^a-z0-9]/gi, '')
                    ) || ''
                  ]?.[language] || project.description || t('portfolio.noDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.language && (
                    <Badge variant="secondary" className="text-xs">
                      {project.language}
                    </Badge>
                  )}
                  {project.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3 mb-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t('portfolio.viewCode')}
                    </a>
                  </Button>
                  {project.topics.includes('website') || project.topics.includes('demo') ? (
                    <Button variant="gradient" size="sm" asChild>
                      <a href={`https://${project.name}.vercel.app`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t('portfolio.viewDemo')}
                      </a>
                    </Button>
                  ) : null}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                  {/* Status projektu */}
                  <Badge variant="secondary">
                    {(() => {
                      if (project.name.toLowerCase() === 'cv') {
                        return language === 'pl' ? 'Projekt zamknięty' : 'Closed project';
                      }
                      return language === 'pl' ? 'W trakcie tworzenia' : 'In progress';
                    })()}
                  </Badge>
                  {/* Data aktualizacji */}
                  <span>
                    {language === 'pl' ? 'Ostatnio zaktualizowano' : 'Updated'}: {new Date(project.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
