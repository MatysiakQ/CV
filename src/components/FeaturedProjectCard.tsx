import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  visualLabel: string;
  image: string;
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
      className={`grid gap-6 rounded-[2rem] border border-border bg-background/95 p-8 shadow-sm hover:shadow-lg transition-shadow ${index === 0 ? 'lg:col-span-2' : ''}`}
    >
      <div className={`${reverse ? 'lg:order-2' : ''} relative overflow-hidden rounded-t-xl border border-border/60 bg-slate-950/5`}>
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="aspect-[16/9] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-[1.75rem] bg-gradient-to-t from-slate-950/95 to-transparent p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-2">{project.visualLabel}</p>
          <p className="text-sm font-semibold text-white">Interface proof, workflow preview, system sketch.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center rounded-full bg-slate-100/70 px-3 py-1 text-xs uppercase tracking-[0.35em] font-semibold text-slate-700">
            {project.category}
          </span>
          <span className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">Built proof</span>
        </div>

        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-foreground mb-4">{project.name}</h3>
          <p className="text-base text-muted-foreground leading-8">{project.summary}</p>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:gap-5">
          <div className="rounded-3xl border border-border p-5 bg-background/90">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">Problem</p>
            <p className="text-sm text-foreground leading-7">{project.challenge}</p>
          </div>
          <div className="rounded-3xl border border-border p-5 bg-background/90">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">Impact</p>
            <p className="text-sm text-foreground leading-7">{project.outcome}</p>
          </div>
        </div>

        <div className="space-y-3">
          {project.decisions.map((decision) => (
            <div key={decision} className="flex gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
              <p className="text-sm text-muted-foreground leading-7">{decision}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary" className="text-xs px-3 py-1">
              {item}
            </Badge>
          ))}
        </div>

        {project.href ? (
          <a
            href={project.href}
            target={isInternalAnchor ? undefined : "_blank"}
            rel={isInternalAnchor ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            {project.ctaLabel ?? 'Learn more'}
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
};

export default FeaturedProjectCard;
