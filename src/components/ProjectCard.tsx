import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Cast to any so TypeScript won't complain about custom props (asChild etc.)
const MotionCard = motion<any>(Card);
const MotionButton = motion<any>(Button);

export interface Project {
  title: string;
  description?: string;
  image?: string | null;
  github: string;
  demo?: string;
  tags: string[];
}

// GitHub Repo type
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
}

const ProjectCard: React.FC<{ project: Project | GitHubRepo; index?: number; isGitHub?: boolean }> = ({ project, index = 0, isGitHub = false }) => {
  const { t } = useLanguage();
  
  // Convert GitHub repo to Project format for consistent rendering
  let displayProject: Project;
  
  if (isGitHub && 'html_url' in project) {
    const gitHubRepo = project as GitHubRepo;
    displayProject = {
      title: gitHubRepo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: gitHubRepo.description || t('portfolio.noDescription'),
      image: null,
      github: gitHubRepo.html_url,
      demo: gitHubRepo.html_url,
      tags: [
        ...(gitHubRepo.language ? [gitHubRepo.language] : []),
        ...(gitHubRepo.topics || []).slice(0, 2)
      ]
    };
  } else {
    displayProject = project as Project;
  }

  return (
    <MotionCard
      className="glass-effect card-glow group overflow-hidden border border-transparent transition-all duration-300"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onMouseEnter={() => {}}
    >
      <div className="relative overflow-hidden">
        {displayProject.image ? (
          <img
            src={displayProject.image}
            alt={displayProject.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div
            className="w-full h-48 flex items-center justify-center relative"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(135deg, #0f1724, #111827)` ,
              backgroundSize: '10px 10px, cover'
            }}
          >
            {isGitHub && (
              <div className="text-center">
                <Code className="h-16 w-16 text-primary-foreground/80 mx-auto mb-2" />
                {isGitHub && (
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mt-2">
                    {(project as GitHubRepo).stargazers_count > 0 && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {(project as GitHubRepo).stargazers_count}
                      </div>
                    )}
                    {(project as GitHubRepo).forks_count > 0 && (
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {(project as GitHubRepo).forks_count}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            {!isGitHub && <Code className="h-16 w-16 text-primary-foreground/80" />}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl mb-2">{displayProject.title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {displayProject.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {displayProject.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-3">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="sm" asChild>
                <a href={displayProject.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${displayProject.title} code on GitHub`}>
                  <Github className="h-4 w-4 mr-2" />
                  {t('portfolio.viewCode')}
                </a>
              </Button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button variant="gradient" size="sm" asChild>
              <a href={displayProject.demo ?? displayProject.github} target="_blank" rel="noopener noreferrer" aria-label={`Open demo of ${displayProject.title}`}>
                <ExternalLink className="h-4 w-4 mr-2" />
                {t('portfolio.viewDemo')}
              </a>
            </Button>
          </motion.div>
        </div>
      </CardContent>
      <style jsx>{``}</style>
    </MotionCard>
  );
};

export default ProjectCard;
