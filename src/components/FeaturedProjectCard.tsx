import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Code2 } from "lucide-react";
import type { GitHubRepo } from "@/types/github";
import type { LucideIcon } from "lucide-react";

export interface FeaturedProjectDetails {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: LucideIcon;
  gradient: string;
  features: string[];
}

export interface FeaturedProjectItem extends GitHubRepo {
  image: string | null;
  details: FeaturedProjectDetails;
}

interface FeaturedProjectCardProps {
  project: FeaturedProjectItem;
  index: number;
}

const FeaturedProjectCard = ({ project, index }: FeaturedProjectCardProps) => {
  const { details, image } = project;
  const safeDetails = details ?? {
    title: project.name,
    description: project.description ?? '',
    technologies: [],
    category: '',
    icon: Code2,
    gradient: 'from-primary to-accent',
    features: [],
  };

  const IconComponent = safeDetails.icon || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.18, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
      className="group"
    >
      <div className="glass-effect card-glow group overflow-hidden border border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative">
        <div className="absolute top-4 right-4 z-20">
          <Badge
            variant="secondary"
            className={`bg-gradient-to-r ${safeDetails.gradient} text-white border-0 shadow-lg`}
          >
            <IconComponent className="h-3 w-3 mr-1" />
            {safeDetails.category}
          </Badge>
        </div>

        <div className="relative overflow-hidden">
          {image ? (
            <motion.img
              src={image}
              alt={safeDetails.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              whileHover={{ scale: 1.1 }}
            />
          ) : (
            <div className={`w-full h-56 flex items-center justify-center relative bg-gradient-to-br ${safeDetails.gradient} group-hover:scale-105 transition-transform duration-500`}>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <IconComponent className="h-20 w-20 text-white/80 drop-shadow-lg" />
              </motion.div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {safeDetails.title}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {safeDetails.description}
          </p>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
                {safeDetails.technologies.slice(0, 3).map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-2 py-1 bg-secondary/50 text-xs rounded-full text-muted-foreground border border-primary/20"
                >
                  {tech}
                </motion.span>
              ))}
              {safeDetails.technologies.length > 3 && (
                <span className="px-2 py-1 bg-secondary/30 text-xs rounded-full text-muted-foreground">
                  +{safeDetails.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2 text-xs text-primary">
              {safeDetails.features.slice(0, 2).map((feature) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {project.stargazers_count > 0 && (
                <div className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  {project.stargazers_count}
                </div>
              )}
              {project.forks_count > 0 && (
                <div className="flex items-center gap-1">
                  <Code2 className="h-3 w-3" />
                  {project.forks_count}
                </div>
              )}
            </div>

            <motion.a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="h-3 w-3" />
              <span>View Code</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
