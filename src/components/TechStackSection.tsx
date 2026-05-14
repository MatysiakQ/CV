import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Layers } from "lucide-react";

const techCategories = [
  {
    title: "Frontend & Interaction",
    icon: Monitor,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Native", "Kotlin"],
    description: "Polished interfaces built for fast, modern experiences."
  },
  {
    title: "Backend & Systems",
    icon: Server,
    items: ["Node.js", "Python", "C#", ".NET", "Java", "Spring", "PostgreSQL", "Docker"],
    description: "Reliable, scalable systems designed for production and growth."
  },
  {
    title: "Workflow & Tools",
    icon: Layers,
    items: ["Git", "CI/CD", "AWS", "Firebase", "Figma", "Jest", "Webpack"],
    description: "Delivery and collaboration tools that keep product builds moving."
  }
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Tech stack</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tools, platforms, and systems I deploy.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-8">
            A refined technical ecosystem for frontend, backend, and product delivery in modern SaaS applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {techCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="rounded-[2rem] border border-border bg-background/80 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-4">
                    <IconComponent className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground leading-6">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: categoryIndex * 0.1 + techIndex * 0.03 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Always learning and adapting to new technologies to deliver the best solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;