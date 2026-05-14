import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    title: "Frontend & Mobile",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Native", "Kotlin"],
    icon: "💻"
  },
  {
    title: "Backend & Systems",
    items: ["Node.js", "Python", "C#", ".NET", "Java", "Spring", "PostgreSQL", "Docker"],
    icon: "⚙️"
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "CI/CD", "AWS", "Firebase", "Figma", "Jest", "Webpack"],
    icon: "🔧"
  }
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies I work with</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-8">
            A curated selection of tools and frameworks I use to build scalable, maintainable software systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="rounded-[2rem] border border-border bg-background/80 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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