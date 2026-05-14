import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  visualLabel: string;
  image?: string;
  summary: string;
  challenge: string;
  outcome: string;
  decisions: string[];
  stack: string[];
  href?: string;
  ctaLabel?: string;
}

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  index: number;
}

const FeaturedProjectCard = ({ project, index }: FeaturedProjectCardProps) => {
  const reverse = index % 2 === 1;
  const isInternalAnchor = project.href?.startsWith('#');

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-border/30 bg-background/95 p-8 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.55)] transition-all duration-500 hover:shadow-[0_30px_120px_-80px_rgba(79,70,229,0.35)] hover:-translate-y-0.5 ${index === 0 ? 'lg:col-span-2' : ''}`}
    >
      {project.image ? (
        <div className={`${reverse ? 'lg:order-2' : ''} relative overflow-hidden rounded-[1.75rem] border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm shadow-sm transition-all duration-500`}> 
          <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950/50">
            {project.image?.endsWith('.mp4') ? (
              <video
                src={project.image}
                muted
                autoPlay
                loop
                playsInline
                className="aspect-[16/9] w-full object-cover"
              />
            ) : (
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-[1.75rem] bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/80 mb-2 font-medium">{project.visualLabel}</p>
              <p className="text-sm font-semibold text-white leading-6">Interface proof, workflow preview, system architecture.</p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="space-y-6 pt-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.35em] font-semibold text-primary border border-primary/20">
            Case study
          </span>
          <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground font-semibold">{project.category}</span>
        </div>

        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{project.name}</h3>
          <p className="text-base text-muted-foreground leading-7">{project.summary}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-border/60 p-5 bg-background/70 backdrop-blur-sm hover:bg-background/80 transition-colors duration-300">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Problem</p>
            <p className="text-sm text-foreground leading-6">{project.challenge}</p>
          </div>
          <div className="rounded-3xl border border-border/60 p-5 bg-background/70 backdrop-blur-sm hover:bg-background/80 transition-colors duration-300">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Impact</p>
            <p className="text-sm text-foreground leading-6">{project.outcome}</p>
          </div>
        </div>

        <div className="space-y-3">
          {project.decisions.map((decision) => (
            <div key={decision} className="flex gap-3 group/item">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/70 group-hover/item:bg-primary transition-colors duration-300" />
              <p className="text-sm text-muted-foreground leading-6 group-hover/item:text-foreground transition-colors duration-300">{decision}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary" className="text-xs px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 transition-colors duration-300 hover:bg-primary/15">
              {item}
            </Badge>
          ))}
        </div>

        {project.href ? (
          <a
            href={project.href}
            target={isInternalAnchor ? undefined : "_blank"}
            rel={isInternalAnchor ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300 group/link"
          >
            {project.ctaLabel ?? 'Learn more'}
            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
};

export default FeaturedProjectCard;
