import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Project {
  title: string;
  description?: string;
  image?: string | null;
  github: string;
  demo?: string;
  tags: string[];
}

const MotionCard = motion(Card);
const MotionButton = motion(Button);

const ProjectCard: React.FC<{ project: Project; index?: number }> = ({ project, index = 0 }) => {
  return (
    <MotionCard
      className="glass-effect card-glow group overflow-hidden"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div className="relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-48 placeholder-card flex items-center justify-center">
            <Code className="h-16 w-16 text-primary-foreground/70" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {project.description ? project.description : "Check details on GitHub 🚀"}
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
          <MotionButton variant="outline" size="sm" asChild whileTap={{ scale: 0.95 }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} code on GitHub`}>
              <Github className="h-4 w-4 mr-2" />
              View Code
            </a>
          </MotionButton>
          <MotionButton variant="gradient" size="sm" asChild whileTap={{ scale: 0.95 }}>
            <a href={project.demo ?? project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open demo of ${project.title}`}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </MotionButton>
        </div>
      </CardContent>
    </MotionCard>
  );
};

export default ProjectCard;
