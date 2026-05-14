
import { motion } from "framer-motion";
import CVChooser from "./CVChooser";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute -right-24 top-24 hidden h-80 w-80 rounded-full bg-primary/10 blur-3xl lg:block" />
      <div className="absolute left-10 top-56 hidden h-72 w-72 rounded-full bg-violet-500/10 blur-3xl lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto grid min-h-screen items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4"
          >
            Technical founder & product engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[0.92] mb-6 max-w-3xl"
          >
            Building premium AI-powered web experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mb-10 leading-9"
          >
            I design and ship high-converting digital products with polished interfaces, clean architecture, and production-ready delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-6 items-center mb-8"
          >
            <button
              type="button"
              onClick={() => scrollToSection('featured-projects')}
              className="group inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-base font-semibold text-background transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-10 py-5 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:text-background hover:scale-[1.03]"
            >
              Let's Build Together
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-[2rem] border border-border/70 bg-background/85 p-6 shadow-[0_20px_80px_-70px_rgba(79,70,229,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/20">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-2">Built work</p>
              <p className="font-medium text-foreground leading-7">Systems that support real workflows, not presentations.</p>
            </div>
            <div className="rounded-[2rem] border border-border/70 bg-background/85 p-6 shadow-[0_20px_80px_-70px_rgba(79,70,229,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/20">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-2">Work proof</p>
              <p className="font-medium text-foreground leading-7">Product visuals are part of the deliverable, not just decoration.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute -right-10 top-12 hidden h-80 w-80 rounded-full border border-primary/10 bg-slate-950/5 blur-3xl lg:block" />
          <div className="relative rounded-[2rem] border border-border bg-background/95 p-6 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.45)] overflow-hidden">
            <img
              src="/images/CVPhoto.jpeg"
              alt="Portrait of Adam Jastrzębski"
              className="aspect-square w-full rounded-[1.75rem] object-cover border border-border/50"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-background/90 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-2">Built for</p>
                <p className="font-semibold text-foreground leading-6">product teams that need code-first delivery.</p>
              </div>
              <div className="rounded-3xl border border-border bg-background/90 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-2">Proof layer</p>
                <p className="font-semibold text-foreground leading-6">Real interfaces, real workflows, real products.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
