import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";
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

const ProjectCard: React.FC<{ project: Project; index?: number }> = ({ project, index = 0 }) => {
  const { t } = useLanguage();
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
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div
            className="w-full h-48 flex items-center justify-center"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(135deg, #0f1724, #111827)` ,
              backgroundSize: '10px 10px, cover'
            }}
          >
            <Code className="h-16 w-16 text-primary-foreground/80" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {project.description ? project.description : t('portfolio.noDescription')}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-3">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} code on GitHub`}>
                  <Github className="h-4 w-4 mr-2" />
                  {t('portfolio.viewCode')}
                </a>
              </Button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button variant="gradient" size="sm" asChild>
              <a href={project.demo ?? project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open demo of ${project.title}`}>
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
