import { motion } from "framer-motion";
import { Search, Building2, Zap, Rocket } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding business requirements, user needs, and technical constraints.",
    icon: Search
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "Creating scalable system architecture and clean, maintainable code structure.",
    icon: Building2
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building features with automated testing, code reviews, and quality assurance.",
    icon: Zap
  },
  {
    step: "04",
    title: "Deployment & Monitoring",
    description: "Shipping to production with CI/CD, monitoring, and continuous improvement.",
    icon: Rocket
  }
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">My Process</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How I build software</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-8">
            A systematic approach to delivering reliable, scalable solutions from concept to production.
          </p>
        </div>

        <div className="relative">
          {/* Animated connection line */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl hidden lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent origin-center"
            />
            {/* Animated dots */}
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <div className="absolute w-2 h-2 bg-primary rounded-full -translate-x-1 -translate-y-0.5 animate-pulse" />
            </motion.div>
          </div>

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {workflowSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative text-center group"
                >
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-background group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-primary/25">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground leading-7 group-hover:text-foreground/80 transition-colors duration-300">{step.description}</p>

                  {/* Arrow for desktop */}
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                      className="hidden lg:block absolute top-20 -right-4 w-8 h-8 text-primary/50 group-hover:text-primary transition-colors duration-300"
                    >
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-semibold">Result:</span>
            <span className="text-muted-foreground">Production-ready software that scales</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;